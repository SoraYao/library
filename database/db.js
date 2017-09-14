var mongoose = require('mongoose');
  mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://127.0.0.1:27017/Account',{useMongoClient: true});

var connection=mongoose.connection;

connection.on("error", function (error) {  console.log("数据库连接失败：" + error); });
connection.on("open", function () {  console.log("------数据库连接成功！------"); });


module.exports = mongoose;