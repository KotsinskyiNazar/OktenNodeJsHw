const users = require("../db/users");
const signIn = (req, res, next) => {
    try {
        console.log(users)
        const {email, password} = req.body
        if (!email || !password) {
            throw new Error('email or password is not provided');
        }
        users.some((user,index) => {
            if (email != user.email && password != user.password) {
                throw new Error('email or password is incorect');
            }
            if (email == user.email && password == user.password){
                return res.redirect(`users/${index}`);
            }
        });
        next();
    } catch (err) {
        console.log(err.message);
        return res.status(400).send(err.message);
    }
}

module.exports = signIn