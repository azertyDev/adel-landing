# syntax=docker/dockerfile:1

# =============================================================================
# Stage 1: Dependencies
# =============================================================================
FROM node:20-alpine AS deps

# Install build dependencies for native modules (better-sqlite3)
RUN apk add --no-cache libc6-compat python3 make g++

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy workspace configuration
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY admin/package.json ./admin/

# Install dependencies with native modules rebuild (with pnpm cache)
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --filter admin

# =============================================================================
# Stage 2: Builder
# =============================================================================
FROM node:20-alpine AS builder

# Install build dependencies
RUN apk add --no-cache libc6-compat python3 make g++

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/admin/node_modules ./admin/node_modules

# Copy source
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY admin ./admin

WORKDIR /app/admin

# Build Strapi admin panel
ENV NODE_ENV=production
RUN pnpm build

# =============================================================================
# Stage 3: Runner
# =============================================================================
FROM node:20-alpine AS runner

# Install runtime dependencies
RUN apk add --no-cache libc6-compat

WORKDIR /app/admin

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 strapi && \
    adduser --system --uid 1001 strapi

# Copy built application
COPY --from=builder /app/admin ./
COPY --from=builder /app/node_modules ../node_modules

# Create directories for data persistence
RUN mkdir -p /app/admin/.tmp /app/admin/public/uploads && \
    chown -R strapi:strapi /app/admin

USER strapi

EXPOSE 1337

ENV HOST=0.0.0.0
ENV PORT=1337

CMD ["node_modules/.bin/strapi", "start"]
