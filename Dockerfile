FROM nginx:stable-alpine

EXPOSE 80

COPY ./index.html /usr/share/nginx/html/index.html
COPY ./assets /usr/share/nginx/html/assets