FROM node:latest as nodeimg

RUN mkdir -p /usr/src/app

COPY index.js /usr/src/app

RUN npm i

EXPOSE 80
CMD [ 'node', '/usr/src/app/index.js' ]