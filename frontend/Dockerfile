# # Multi-stage build for React TypeScript application
# FROM node:18-alpine AS builder

# # Set working directory
# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm i

# # Copy source code
# COPY . .

# # Build the application
# RUN npm run build

# # Production stage
# FROM nginx:alpine AS production

# # Copy custom nginx configuration
# COPY nginx.conf /etc/nginx/nginx.conf

# # Copy built application from builder stage
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Health check
# HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
#   CMD curl -f http://localhost/ || exit 1

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]

  FROM node:18-alpine

  # Create app directory
  WORKDIR /app

  # Copy package files and install deps
  COPY package*.json ./
  RUN npm install

  # Copy rest of the application
  COPY . .

  # Build the Next.js app
  RUN npm run build

  # Expose port
  EXPOSE 4173

  # Start the Nextapp
  CMD ["npm", "run", "preview", "--", "--port", "4173", "--host"]