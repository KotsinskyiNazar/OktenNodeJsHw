const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/apiRoutes')


app.use(express.json());
app.use(express.urlencoded({extend: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes)

app.listen(1999, () => {
    console.log('server has started at port : 1999');
})

