const swaggerJSDoc = require('swagger-jsdoc');


const swaggerOptions = {
    swaggerDefinition: {
        "swagger": "2.0",
        "info": {
          "description": "This is a Music API which mimic the fetaures of Google Play Music.",
          "version": "1.0.0",
          "title": "Google Play Music Clone",
          "contact": {
            "email": "abc@gmail.com"
          }
        },
        "host": "localhost:5000",
        "basePath": "/",
        "schemes": [
            "http",
          "https"
        ]
    },
    apis: ['server.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);



module.exports = swaggerDocs;

