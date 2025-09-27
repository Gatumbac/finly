const express = require('express');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const userRouter = require('./routes/user.route');
const error404 = require('./controllers/error.controller');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');
app.set('view engine', 'ejs');

require('dotenv').config();
require('./lib/dbConnect');

app.use(morgan('dev'));

app.use(
    session({
        secret: process.env.AUTH_SECRET,
        saveUninitialized: true,
        resave: false
    })
)

app.use('/', userRouter);

app.use(error404);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});