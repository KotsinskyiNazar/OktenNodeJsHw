const users = require('../db/users');

class LoginControllers {
    renderLogin(req, res) {
        res.render('LoginPage');
    }

    saveUsers({body}, res) {
        const userId = new Date().getUTCMilliseconds()

        console.log(userId);

        users.push({...body, id: userId});
        res.redirect('/users');
    }
}


module.exports = new LoginControllers();