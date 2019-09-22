/**
 * 定义测试表结构
 * 目前没有用到
 * 留言板数据库
 * **/
//定义表的模型
var Sequelize = require('sequelize');
var db=require('./db.js');

var Message = db.define('message', {
    id:{ //自增长id,主键,整形
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username: { //谁留的言
        type: Sequelize.STRING(30)
    },
    content: { //留言的内容
        type: Sequelize.TEXT
    }
});
Message.sync(); //创建表

module.exports = Message;