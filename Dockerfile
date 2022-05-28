FROM arm64v8/nginx:stable-alpine

EXPOSE 80

COPY --chown=nginx ./index.html /usr/share/nginx/html/index.html
COPY --chown=nginx ./assets /usr/share/nginx/html/assets