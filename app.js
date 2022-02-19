const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extend: true}))

app.use(express.static(path.join(__dirname, 'static')))
app.set('view engine', '.hbs')
app.engine('.hbs', engine({defaultLayout: false}))
app.set('views', path.join(__dirname, 'static'))

const users = [
    {
        firstName: 'nazar',
        lastName: 'kotsinskyi',
        password: 1234,
        age: 22,
        email: "1@.gmail.com"
    },
    {
        firstName: 'nazar2',
        lastName: 'kotsinskyi',
        password: 1234,
        age: 22,
        email: "2@.gmail.com"
    },
    {
        firstName: 'nazar3',
        lastName: 'kotsinskyi',
        password: 1234,
        age: 22,
        email: "3@.gmail.com"
    },
    {
        firstName: 'nazar4',
        lastName: 'kotsinskyi',
        password: 1234,
        age: 22,
        email: "4@.gmail.com"
    },
]


app.get('/', (req, res) => {
    res.render('mainPage')
})


app.get('/login', (req, res) => {
    res.render('LoginPage')
})


app.get('/error', (req, res) => {
    res.render('ErrorPage', {error})
})

app.post('/login', (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
            res.redirect('/error')
            error = 'Email has been already taken'
            return
        }
    }
    users.push(req.body)
    res.redirect('/users')
})

app.get('/users', (req, res) => {
    res.render('UsersPage', {users})
})

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params
    const user = users[userId]
    if (userId > users.length - 1) {
        error = 'User is not created'
        res.redirect('/error')
    } else {
        res.render('SingleUserPage', {user})
    }
})


app.use((req, res) => {
    res.render('PageNotFound')
})

app.listen(1999, () => {
    console.log('server has started at port : 1999')
})