FROM node:latest 

WORKDIR /usr/app

COPY package*.json /usr/app/
RUN npm i
COPY . .
EXPOSE 80
CMD [ 'node', 'index.js' ]