const express = require("express");
const app = express();
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');


//引入
const users = require("./router/api/users")


//使用body-parser中件间
app.use(bodyParser.urlencoded({ extended: false }));  //创建分析器 放入use
// app.use(bodyParser.json());
app.use("/api/users",users)


// 获取配置数据
const config1 = require("./config").data;


// 连接数据库
const fs = require('fs');
const file = 'test.db';
const db = new sqlite3.Database(file);
db.run("create table if not exists test(name text);");
// db.run("insert into test values('hello,world');");
db.all("select * from test;", function (err, res) {
  if (!err)
    console.log(JSON.stringify(res));
  else
    console.log(err);
});


//设置路由
app.get("/", (req, res) => {
  console.log(req.headers.host)
  res.send('hello world' + config1);
})


// 设置监听
app.listen(5000, () => {
  console.log('启动')
})