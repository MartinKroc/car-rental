const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

//Import routes

const indexRouter = require('./routes/index');
const catalogRouter = require('./routes/catalog');

//Configuration
app.use(cors());
app.use(bodyParser.json());

//Middleware

app.use('/', indexRouter);
app.use('/catalog', catalogRouter);



app.use(express.static('public')) // for serving files

//Middleware - jak wywołuje endpoint wykonuje sie przed

/*app.use('/post', () => {
    console.log('middleware')
})*/

// ROUTES

/*app.get('/',(req, res) => {
   res.send('hello world home');
});

app.get('/post',(req, res) => {
    res.send('hello world post');
});*/

//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('oke'))

//Listen port
app.listen(3001)