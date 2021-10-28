FROM angular/ngcontainer:latest 
RUN mkdir /app && chown app:app /app
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm i
COPY . .
EXPOSE 80
CMD [ 'npm', 'start' ]