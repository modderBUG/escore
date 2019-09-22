var express = require('express');
var router = express.Router();

var handler = require('../handler/boardhandler.js');

/** 实际上要访问 /board **/
router.get('/', function (req, res, next) {
    handler.getAll(req,res);
});

/** 实际上要访问 /board/index **/
router.get('/index', function (req, res, next) {
    // res.render('index.html', {title: 'Express Ejs'});
    handler.getAll(req,res);
});

router.get('/add_msg', function (req, res, next) {
    handler.addSql(req,res);
});

router.get('/del_msg', function (req, res, next) {
    console.log('/del_msg');
    handler.delSql(req,res);
});

router.post('/add_msg', function (req, res, next) {
    console.log('/add_msg');
    handler.addSql(req,res);
});

//查找一个留言
router.get('/edit', function(req, res, next) {
    console.log('/edit');
    handler.findOne(req,res);
});

//更新一条留言
router.post('/edit/update_msg', function(req, res, next) {
    console.log('/edit/update_msg');
    handler.updateSql(req,res);
});

module.exports = router;
