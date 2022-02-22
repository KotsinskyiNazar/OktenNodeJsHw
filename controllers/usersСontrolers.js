const users = require('../db/users')


class UsersСontrolers {
    renderUsers(req, res) {
        res.render('UsersPage', {users})
    }
    getUserById(req,res){
        const {userId} = req.params;
        const user = users[userId];
        if (userId > users.length - 1) {
            res.redirect('/error');
            return;
        }
        res.render('SingleUserPage', {user});
    }
}
module.exports = new UsersСontrolers();