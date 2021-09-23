const app = require('express')();
const http = require('http');
const swagger = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

http.createServer(app).listen('80');
console.log("Server iniciado na porta :80");

app.use('/docs', swagger.serve, swagger.setup(swaggerFile));

require('./rotas')(app);