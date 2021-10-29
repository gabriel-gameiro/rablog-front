FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm i --silent
RUN npm i -g @angular/cli
COPY . .
RUN node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/meu-site /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t front-angular .
# docker run -p 80:80 front-angular