const app = require('express')();
const http = require('http');
const swagger = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

http.createServer(app).listen('3000');
console.log("Server iniciado na porta :3000");

app.use('/docs', swagger.serve, swagger.setup(swaggerFile));

require('./rotas')(app);