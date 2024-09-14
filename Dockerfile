# Dockerfile for Angular Frontend
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Production Stage
FROM nginx:alpine
COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
