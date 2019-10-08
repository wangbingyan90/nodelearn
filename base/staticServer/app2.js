// 使用 HTTP 服务器与客户端  需要 require('http')。
const http = require("http");
 // 文件系统
const fs = require("fs");
 // 路径
const path = require("path");

// 2.创建一个服务器
const app = http.createServer();

 // 3.为这个server服务器，通过  on  方法，绑定一个 事件来监听每次请求
 app.on("request", (req, res) => {
    // 获取当前请文件名
    let url = req.url;
    // 调用封装函数
    readStaticFile(url,res)
})
 // 4.启动服务器
 app.listen(3000,() => {  // 默认为localhost（本地主机）; 端口为3000
    console.log("server is running")
})
 
function readStaticFile(url, res) {
    // 读取对应路径的文件
    fs.readFile(path.join(__dirname, 'static', url), (err, data) => {
        // 找不到文件则返回404
        if (err) return res.end("404");
        // res.end来返回上面读取的内容
        res.end(data)
    }) 
}