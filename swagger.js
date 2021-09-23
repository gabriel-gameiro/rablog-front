const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./rotas.js'];

swaggerAutogen(outputFile, endpointsFiles);