/*
 * Autor xiechuntao
 * Creat Date 2021-6-5 p.m
 * Last Update Date 2021-6-5 p.m
 */
const POOL = require('../pool');
// 获取url参数 依赖于url模块 使用前需要使用
const URL = require('url');
// -------------------
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('请输入子路由');
});

router.get('/getMe', (req, res) => {
  let sql = `SELECT nick_name, gender, phone, avatar FROM user WHERE uid = 1 LIMIT 1;`;
  POOL.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      result[0] ? (result = result[0]) : (result = '暂无用户信息');
      let response = {
        message: 'ok',
        msgCode: 0,
        data: result,
      };
      res.send(response);
    }
  });
});

module.exports = router;
