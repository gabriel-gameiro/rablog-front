FROM angular/ngcontainer:latest 

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm i
COPY . .
EXPOSE 80
CMD [ 'npm', 'start' ]