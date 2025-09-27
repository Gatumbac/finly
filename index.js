const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');
app.set('view engine', 'ejs');

require('dotenv').config();
require('./lib/dbConnect');

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Index',
        message: 'Hello from Node.js!'
    })
});

app.get('/contact', (req, res) => {
    res.render('index', {
        title: 'Contact',
        message: 'The Contact Page!'
    })
});

app.get('/about', (req, res) => {
    res.render('index', {
        title: 'About',
        message: 'The About Page!'
    })
});

app.use((req, res) => {
    res.status(404).render('index', {
        title: 'Not Found',
        message: 'Page Not Found!'
    })
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});