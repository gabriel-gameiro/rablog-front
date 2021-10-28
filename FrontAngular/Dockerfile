FROM angular/ngcontainer:latest 
WORKDIR /DockerSitePessoal
RUN sudo su
COPY package*.json /DockerSitePessoal/
RUN npm i
COPY . .
EXPOSE 80
CMD [ 'npm', 'start' ]