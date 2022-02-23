const users = require('../db/users')

class SignInControllers {
    signIn(req, res) {
        res.render('SignInPage');
    }

    signInGetData(req, res) {
        const user = users.find(user => user.email === req.body.email);
        console.log(user.id);
        console.log(user);
        res.redirect(`/users/${user.id}`);
    }
}

module.exports = new SignInControllers();