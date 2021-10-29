FROM node:latest 

WORKDIR /DockerNodePessoal

COPY package*.json /DockerNodePessoal/
RUN npm i
COPY . .
EXPOSE 80
CMD [ 'npm', 'start-docker' ]