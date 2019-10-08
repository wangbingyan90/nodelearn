// 1. 导入 express 模块
const express = require("express");
// 2. 创建服务器
const app = express();
//  使用 express.static 来托管 assets 目录
// 这里app.use是一个中间件，所谓中间件其实也是一个路由，是一个可以处理所有http请求的路由
app.use(express.static("./assets"))
// 3. 开启服务器
app.listen(3001, () => { // 默认为localhost（本地主机）; 端口号3001
    console.log("express is runing")
    })