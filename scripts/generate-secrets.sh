#!/bin/bash

# =============================================================================
# Script to generate Strapi secrets for production
# Usage: ./scripts/generate-secrets.sh > .env
# =============================================================================

set -e

echo "# Strapi Production Secrets"
echo "# Generated on: $(date)"
echo ""

# Generate APP_KEYS (need 2 keys)
KEY1=$(openssl rand -base64 32)
KEY2=$(openssl rand -base64 32)
echo "STRAPI_APP_KEYS=${KEY1},${KEY2}"

# Generate other secrets
echo "STRAPI_API_TOKEN_SALT=$(openssl rand -base64 32)"
echo "STRAPI_ADMIN_JWT_SECRET=$(openssl rand -base64 32)"
echo "STRAPI_TRANSFER_TOKEN_SALT=$(openssl rand -base64 32)"
echo "STRAPI_JWT_SECRET=$(openssl rand -base64 32)"
echo "STRAPI_ENCRYPTION_KEY=$(openssl rand -base64 32)"

echo ""
echo "# Generated successfully!"
