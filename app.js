var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
/** 设置问卷路由 **/
var expaperRouter = require('./routes/expaper.js');

var app = express();

// view engine setup

/**  使用ejs模板引擎 **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('.ejs', require('ejs').__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/board', indexRouter);
app.use('/users', usersRouter);
/** 设置问卷路由**/
app.use('/', expaperRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
