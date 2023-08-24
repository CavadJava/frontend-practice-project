const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swaggerDef');

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API route handler files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
