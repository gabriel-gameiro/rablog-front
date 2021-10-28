FROM angular/ngcontainer:latest 
RUN addgroup app && adduser -S -G app app

WORKDIR /DockerSitePessoal

RUN chmod 777 /DockerSitePessoal
USER app

COPY package*.json /DockerSitePessoal/
RUN npm i
COPY . .
EXPOSE 80
CMD [ 'npm', 'start' ]