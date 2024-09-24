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
COPY --from=build /app/dist/lodgy-webapp/browser ./

# Install http-server to serve static files
RUN npm install -g http-server
CMD ["http-server", "-p", "80", "--silent"]

EXPOSE 80
