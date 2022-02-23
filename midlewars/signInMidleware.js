const users = require("../db/users");

const signIn = (req, res, next) => {

    try {

        const {email, password} = req.body;

        if (!email || !password) {
            throw new Error('email or password is not provided');
        }

        const signIn = users.some(user => user.email === email && user.password == password)

        if (!signIn) {
            throw new Error('Email or password are incorect');
        }

        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = signIn;