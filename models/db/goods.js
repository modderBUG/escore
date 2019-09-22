/**
 * 定义测试表结构
 * 目前没有用到
 * **/

var db = require('./db');
var Sequelize = require('sequelize');


// 创建表模型
const Goods = db.define('goods', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(50),
    img_src: Sequelize.STRING(100),
    price: Sequelize.FLOAT
});
// 同步表结构
Goods.sync() ;  // 如果表存在 不会刷新结构
//Goods.sync({ force: true }) ;  // 如果表存在 会删除表重新建表
module.exports = Goods;