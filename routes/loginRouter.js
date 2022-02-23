const {Router} = require('express');
const loginControllers = require('../controllers/loginControllers');
const loginMidleware = require('../midlewars/loginMidleware');

const loginRouter = Router();

loginRouter.get('/', loginControllers.renderLogin);
loginRouter.post('/', loginMidleware, loginControllers.saveUsers);


module.exports = loginRouter;