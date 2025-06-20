# Stage 1: Build React App
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf  # optional

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
