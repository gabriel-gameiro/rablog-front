FROM angular/ngcontainer:latest 
WORKDIR /DockerSitePessoal
COPY package*.json /DockerSitePessoal/
RUN npm i
COPY . .
EXPOSE 80
CMD [ 'npm', 'start' ]