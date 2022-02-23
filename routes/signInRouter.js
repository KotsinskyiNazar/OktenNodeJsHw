const {Router} = require('express');
const signInControllers = require('../controllers/signInControllers');
const signInMidleware = require('../midlewars/signInMidleware');

const signIn = Router();

signIn.get('/', signInControllers.signIn);
signIn.post('/', signInMidleware, signInControllers.signInGetData);


module.exports = signIn;