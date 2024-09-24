# Dockerfile for Angular Frontend
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Production Stage
FROM node:18-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/lodgy-webapp ./

# Optionally use a simple server to serve static files, e.g., http-server
RUN npm install -g http-server
CMD ["http-server", "-p", "80"]

EXPOSE 80
