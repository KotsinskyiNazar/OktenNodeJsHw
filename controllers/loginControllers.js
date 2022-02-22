const users = require('../db/users')

class LoginControllers{
    renderLogin (req,res){
        res.render('LoginPage');
    }
    saveUsers (req,res){
        users.push(req.body);
        res.redirect('/users');
    }
}



module.exports = new LoginControllers()