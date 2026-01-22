# =============================================================================
# Upstream definitions
# =============================================================================
upstream adel_client {
    server 127.0.0.1:3001;
    keepalive 64;
}

upstream adel_admin {
    server 127.0.0.1:1337;
    keepalive 64;
}

# =============================================================================
# HTTP -> HTTPS redirect
# =============================================================================
server {
    listen 80;
    listen [::]:80;
    server_name adel-tech.com www.adel-tech.com;

    # Let's Encrypt verification
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Redirect all other traffic to HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

# =============================================================================
# Main HTTPS server
# =============================================================================
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name adel-tech.com www.adel-tech.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/adel-tech.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/adel-tech.com/privkey.pem;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000" always;

    # Logging
    access_log /var/log/nginx/adel-tech.com.access.log;
    error_log /var/log/nginx/adel-tech.com.error.log;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;

    # Client max body size (for file uploads)
    client_max_body_size 100M;

    # ==========================================================================
    # Strapi Admin Panel
    # ==========================================================================
    location /admin {
        proxy_pass http://adel_admin;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # ==========================================================================
    # Strapi API
    # ==========================================================================
    location /api {
        proxy_pass http://adel_admin;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
    }

    # ==========================================================================
    # Strapi Uploads (static files)
    # ==========================================================================
    location /uploads {
        proxy_pass http://adel_admin;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Cache static uploads
        proxy_cache_valid 200 1d;
        add_header Cache-Control "public, max-age=86400";
    }

    # ==========================================================================
    # Strapi i18n (localization plugin)
    # ==========================================================================
    location /i18n {
        proxy_pass http://adel_admin;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # ==========================================================================
    # Strapi Content-Type Builder (admin)
    # ==========================================================================
    location /content-type-builder {
        proxy_pass http://adel_admin;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # ==========================================================================
    # Strapi Content Manager (admin)
    # ==========================================================================
    location /content-manager {
        proxy_pass http://adel_admin;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # ==========================================================================
    # Next.js Static files (long cache)
    # ==========================================================================
    location /_next/static {
        proxy_pass http://adel_client;
        proxy_http_version 1.1;
        proxy_set_header Host $host;

        # Long cache for hashed static files
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # ==========================================================================
    # Next.js Client (all other requests)
    # ==========================================================================
    location / {
        proxy_pass http://adel_client;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }
}
