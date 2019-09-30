const express = require("express");
const app =express();

// 获取配置数据
const config1 = require("./config").data;

// 连接数据库
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const file = 'test.db';
const db = new sqlite3.Database(file);
db.run("create table if not exists test(name text);");
// db.run("insert into test values('hello,world');");
db.all("select * from test;",function(err,res){
    if(!err)
      console.log(JSON.stringify(res));
    else
      console.log(err);
});


//设置路由
app.get("/",(req,res)=>{
    console.log(req)
    res.send('hello world'+config1);
})

// 设置监听
app.listen(8080,()=>{
    console.log('启动')
})