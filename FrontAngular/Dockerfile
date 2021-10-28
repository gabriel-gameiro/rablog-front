FROM angular/ngcontainer:latest 
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm config set unsafe-perm true
RUN npm i
COPY . .
EXPOSE 80
CMD [ 'npm', 'start' ]