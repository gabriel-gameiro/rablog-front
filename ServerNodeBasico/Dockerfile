FROM node:latest as nodeimg

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE 80
CMD [ "node", "index.js" ]