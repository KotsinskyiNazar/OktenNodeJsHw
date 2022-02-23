const users = require('../db/users');

class UsersСontrolers {
    renderUsers(req, res) {
        res.render('UsersPage', {users})
    }

    getUserById(req, res, next) {
        try {
            const {userId} = req.params;
            const check = users.some(user => user.id == userId);
            const user = users.find(user => user.id == userId);

            console.log(check);

            if (check) {
                res.render('SingleUserPage', {user});
            }
            if (!check) {
                throw new Error('user dont exist');
            }

            next();
        } catch (err) {
            console.log(err);
            res.status(400).send(err.message);
        }

    }
}

module.exports = new UsersСontrolers();