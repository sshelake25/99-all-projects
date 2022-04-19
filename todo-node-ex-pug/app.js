
// import { userRouters } from './routes/users'; // es modules system

var createError = require('http-errors');
var express = require('express');
// var express = require('express');


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home'); //comman js module
var usersRouter = require('./routes/users');

var cartPayment = require('./routes/cartPayment');

var app = express();
var router = express.Router();
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);

app.use('/payment', cartPayment)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(
  (req, res, next) => {
    //middleware 
    next(createError(404));
  }
);


// app.use('/thbs',
//   router.get('/',function(req, res, next) {
//     res.send('respond with a resource');
//   })
// );

app.use((req, res, next) => {
  console.log(req)
  console.log('I am in middle ware')

})

// error handler
app.use(
  function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }
);



module.exports = app;
