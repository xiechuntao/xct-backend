// 连接池
// 连接数据库
var mysql = require('mysql');
//创建mysql实例
var pool = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'your database name',
});
module.exports = pool;
