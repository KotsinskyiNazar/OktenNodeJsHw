const loginMidleware = (req, res, next) => {
    try {
        const {firstName, lastName, email, age, city, password} = req.body;
        if (!firstName || !lastName || !email || !age || !city || !password) {
            throw new Error('all inputs are not provided');
        }
        next();
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = loginMidleware;