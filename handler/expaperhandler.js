var config = require('../config/main/config.js');
var fs = require('fs');
var querystring = require('querystring');
var path = require('path');
var dbexc=require('../models/db/sqlhanlder.js'); //

/** 增加试卷，此业务需要执行以下几个操作！
 * 1.建立json对象
 * 2.把json写入磁盘
 * 3.把数据写入到数据库
 * **/
module.exports.addExpaper = function (req, res) {

    var message = {
        username: req.body.id,
        content: req.body.topic
    };
    writeNewsDate(JSON.stringify(message), function () {
        res.send(config.dataPath);
    });
    dbexc.addSql(message);

};


module.exports.delExpaper = function (req, res) {};

module.exports.editExpaper = function (req, res) {};

module.exports.getExpaper = function (req, res) {};














//封装读取json
function readNewsData(callback) {
    fs.readFile(config.dataPath, 'utf8', function (err, data) {
        if (err && err.code != 'ENOENT') {
            throw err;
        }
        var list = JSON.parse(data || '[]');
        callback(list);
    });
}

//封装写入json
function writeNewsDate(data, callback) {
    var count = fs.readdirSync(config.dataPath).length + 1;
    config.dataPath = path.join(config.dataPath, "expaper" + count + ".json");
    fs.writeFile(config.dataPath, data, function (err) {
        if (err) {
            throw err;
        }
        callback();
    });

}

function postBodyData(req, callback) {
    var array = [];
    req.on('data', function (chunk) {
        array.push(chunk);
    });
    req.on('end', function () {
        var postBody = querystring.parse(Buffer.concat(array).toString('utf8'));
        callback(postBody);
    });
}