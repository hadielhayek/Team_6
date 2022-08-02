
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/adminRoute')
var blogRouter = require('./routes/blogRoute')
var experienceRouter = require('./routes/experienceRoute')
var feedbackRouter = require('./routes/feedbackRoute')
var cors =require("cors")


var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Admin',adminRouter)
app.use('/Blog',blogRouter)
app.use('/Experience',experienceRouter)
app.use('/Feedback',feedbackRouter)



//connetion to the dataBase

mongoose.connect(process.env.DBCONNECTION, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true 
    }).then(() => {
    console.log("successfully connected");
    }).catch(console.error);

    app.use(function(err, req, res, next) {
        console.log("error:::", err)
        res.status(err.status || 500).send({
            success: false,
            message: err.message
        });
      });
app.listen(5000)
module.exports = app;
