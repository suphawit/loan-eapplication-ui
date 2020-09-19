# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
#########################################################################################
FROM nginx:1.12.2-alpine

ENV TERM=xterm-256color

COPY dist/mkt-app /usr/share/nginx/html