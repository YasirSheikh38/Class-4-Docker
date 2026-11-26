# Serve the static portfolio with Nginx
FROM nginx:alpine

# Copy the website files into Nginx's default web root
COPY . /usr/share/nginx/html

# Nginx listens on port 80 inside the container
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
