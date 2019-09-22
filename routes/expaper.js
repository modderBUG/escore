var express = require('express');
var router = express.Router();

var handler = require('../handler/expaperhandler.js');

/** 实际上要进入虚拟路径/ **/
router.get('/', function (req, res, next) {
     res.render('expaper.ejs', {});
});

/** 实际上要进入虚拟路径/index **/
router.get('/index', function (req, res, next) {
    res.render('expaper.ejs', {});
});

/** 实际上要进入虚拟路径/expaper/add_expaper **/
router.get('/add_expaper', function (req, res, next) {
    handler.addExpaper(req,res);
});

router.post('/add_expaper', function (req, res, next) {
    handler.addExpaper(req,res);
});

router.get('/del_msg', function (req, res, next) {
    res.send(req);
});


router.get('/edit', function(req, res, next) {
    res.send(req);
});


router.post('/edit/update_msg', function(req, res, next) {
    res.send(req);
});

module.exports = router;
