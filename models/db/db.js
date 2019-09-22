/**
 * 包装Sequelize对象。
 * **/

const config = require('../../config/mysql/config.js');
var Sequelize = require('sequelize');
// connect db
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    define: {
        // 字段以下划线（_）来分割（默认是驼峰命名风格）  
        underscored: true ,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        freezeTableName: true,
        timestamps: true, //为模型添加 createdAt 和 updatedAt 两个时间戳字段
    }
});

/** 验证连接是否成功 **/
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    });


module.exports = sequelize;