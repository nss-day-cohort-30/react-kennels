FROM nginx:latest
COPY ./build /var/www/html
COPY ./config/nginx/dev/conf.d /etc/nginx/conf.d
COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf
