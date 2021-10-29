FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm i --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/meu-site /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t front-angular .
# docker run -p 80:80 front-angular