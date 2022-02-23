const {Router} = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('../routes/loginRouter');
const signInRouter = require('../routes/signInRouter');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signin', signInRouter);

routes.use((req, res) => {
    res.render('PageNotFound');
})

module.exports = routes;