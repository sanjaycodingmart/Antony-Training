const express = require('express');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const Database = require('./Database/Database');

new Database().databaseConnection();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

const PORT = 5000;


app.use(require('./Routes/Register'));
app.use(require('./Routes/Login'));
app.use(require('./Routes/Favourites'));
app.use(require('./Routes/Auth'));
app.use(require('./Routes/Info'));
app.use(require('./Routes/DeleteUser'));
app.use(require('./Routes/Subscribe'));
app.use(require('./Routes/Played'));
app.use(require('./Routes/PlayedCount'));
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(require('./Docs/Config')));

app.use((req,res,next) => res.status(404).json({msg: 'PAGE NOT FOUND'}));

module.exports = app.listen(PORT, console.log(`Server running in PORT : ${PORT}`));


/** 
/**
 * @swagger
 * paths:
 *   /register:
 *     get:
 *       summary: Register GET Route
 *       tags:
 *        - Register
 *       description: status 200 SUCCESS.
 *       responses:
 *         '200':    
 *           description: SUCCESS
 *           content: 
 *             application/json:
 *               schema: 
 *                 type: object
 *                 items: 
 *                   type: object
 */

 /** 
/**
 * @swagger
 *   paths:
 *   /register:
 *    post:
 *     summary: Creates a new user.
 *     tags:
 *      - Register
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         E-mail: 'anto22998@gmail.com'
 *         Phone: 9998887777
 *         Password: abcd@1234
 *         languages: [Tamil,English]
 *         favourites: []
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - E-mail
 *             - Phone
 *             - Passwprd
 *             - languages
 *           properties:
 *             E-mail:
 *               type: string
 *             Phone:
 *               type: integer
 *             Password:
 *               type: string
 *             languages:
 *               type: object
 *             favourites:
 *               type: object              
 *     responses:
 *       '200':
 *         description: New user created
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 *       '500':
 *         description: Internal server problem
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 */ 


 /** 
/**
 * @swagger
 * paths:
 *   /login:
 *     get:
 *       summary: Login GET Route
 *       tags:
 *        - Login
 *       description: status 200 SUCCESS.
 *       responses:
 *         '200':    
 *           description: SUCCESS
 *           content: 
 *             application/json:
 *               schema: 
 *                 type: object
 *                 items: 
 *                   type: object
 */

 /** 
/**
 * @swagger
 *   paths:
 *   /login:
 *    post:
 *     summary: Login new user with credientials.
 *     tags:
 *      - Login
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         E-mail: 'anto22998@gmail.com'
 *         Password: abcd@1234
 *         description: Validate user.
 *         schema:
 *           type: object
 *           required:
 *             - E-mail
 *             - Passwprd
 *           properties:
 *             E-mail:
 *               type: string
 *             Password:
 *               type: string             
 *     responses:
 *       '200':
 *         description: New user created
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 *       '402':
 *         description: Authentication problem or Invalid user
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 *       '500':
 *         description: Internal server problem
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 */ 


/** 
/**
 * @swagger
 *   paths:
 *   /auth:
 *    post:
 *     summary: Checks Wheather the user is authenticated or not.
 *     tags:
 *      - Auth
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         email: 'anto22998@gmail.com'
 *         token: 57a7a987d7asd7987asd987asd978
 *         description: Verify using token.
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - toke n
 *           properties:
 *             email:
 *               type: string
 *             token:
 *               type: string             
 *     responses:
 *       '200':
 *         description: User is Validated
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 *               isAuth:
 *                 type: boolean
 *       '402':
 *         description: Authentication problem or Invalid user
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 */ 

/** 
/**
 * @swagger
 *   paths:
 *   /favourites:
 *    put:
 *     summary: Add favourite song to user favourite list.
 *     tags:
 *      - Favourites
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         email: 'anto22998@gmail.com'
 *         favourite: {}
 *         description: Favourite song appended to the array.
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - favourites
 *           properties:
 *             email:
 *               type: string
 *             favourite:
 *               type: object             
 *     responses:
 *       '200':
 *         description: User favourite song has been added
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 *       '500':
 *         description: Internal server problem
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 */ 

 /** 
/**
 * @swagger
 *   paths:
 *   /played:
 *    put:
 *     summary: Update number of times played the specific song.
 *     tags:
 *      - Played
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         id: 101
 *         times: 2
 *         description: Add number of times.
 *         schema:
 *           type: object
 *           required:
 *             - id
 *             - times
 *           properties:
 *             id:
 *               type: integer
 *             times:
 *               type: integer             
 *     responses:
 *       '200':
 *         description: Added 
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               data: 
 *                 type: object
 *       '500':
 *         description: Internal server problem
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 */ 

  /** 
/**
 * @swagger
 *   paths:
 *   /subscribe:
 *    post:
 *     summary: Subscribe based on differenrt plans.
 *     tags:
 *      - subscribe
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         id: '101'
 *         description: Add subscription based on plan.
 *         schema:
 *           type: object
 *           required:
 *             - id
 *           properties:
 *             id:
 *               type: integer
 *             times:
 *               type: integer             
 *     responses:
 *       '200':
 *         description: User subscribed successfully
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               data: 
 *                 type: object
 *       '500':
 *         description: Internal server problem
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 */ 

/** 
/**
 * @swagger
 *   paths:
 *   /subscribe:
 *    delete:
 *     summary: Delete the current user.
 *     tags:
 *      - Delete User
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         id: '101'
 *         description: Delete the user with ID.
 *         schema:
 *           type: object
 *           required:
 *             - id
 *           properties:
 *             id:
 *               type: integer          
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               data: 
 *                 type: object
 *       '500':
 *         description: Internal server problem
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               msg: 
 *                 type: object
 */ 