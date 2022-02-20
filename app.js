const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const Path = require("path");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extend: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let error = 'error page'
const users = [
    {
        firstName: 'nazar',
        lastName: 'kotsinskyi',
        password: 1234,
        age: 22,
        email: "1@.gmail.com",
        city: 'lviv'
    },
    {
        firstName: 'nazar2',
        lastName: 'kotsinskyi',
        password: 1234,
        age: 21,
        email: "2@.gmail.com",
        city: 'kyiv'
    },
    {
        firstName: 'nazar3',
        lastName: 'kotsinskyi',
        password: 1234,
        age: 23,
        email: "3@.gmail.com",
        city: 'lviv'
    },
    {
        firstName: 'nazar4',
        lastName: 'kotsinskyi',
        password: 1234,
        age: 23,
        email: "4@.gmail.com",
        city: 'odessa'
    },
];


app.get('/', (req, res) => {
    res.render('mainPage');
});

app.get('/login', (req, res) => {
    res.render('LoginPage');
});

app.get('/error', (req, res) => {
    res.render('ErrorPage', {error});
});

app.get('/users', (req, res) => {

    if (Object.keys(req.query).length) {
        const {city,age} = req.query;

        let usersByQuery = [...users];
        if (city) {
            usersByQuery = usersByQuery.filter(user => user.city === city);
        }
        if (age) {
            console.log(age);
            usersByQuery = usersByQuery.filter(user => user.age == age)
        }
        res.render('UsersPage', {users: usersByQuery});
        return;
    }
    res.render('UsersPage', {users});
});

app.post('/login', (req, res) => {
    /////////виправив з for na some
    users.some((user) => {
        if (user.email === req.body.email) {
            error = 'Email has been already taken';
            res.redirect('/error');
            return;
        }
    });
    users.push(req.body);
    res.redirect('/users');
    return;
});


app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users[userId];
    if (userId > users.length - 1) {
        error = 'User is not created';
        res.redirect('/error');
        return;
    }
    res.render('SingleUserPage', {user});
});


app.use((req, res) => {
    res.render('PageNotFound');
})

app.listen(1999, () => {
    console.log('server has started at port : 1999');
})