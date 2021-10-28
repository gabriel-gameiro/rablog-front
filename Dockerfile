FROM angular/ngcontainer:latest 
WORKDIR /DockerSitePessoal
COPY ./FrontAngular ./DockerSitePessoal
RUN npm i
EXPOSE 80
CMD [ 'npm', 'start' ]