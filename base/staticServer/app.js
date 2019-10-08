const fs = require('fs');//系统自带模块(无需下载)
const path = require('path');//系统自带获取路径拼接方法(无需下载)
const http = require('http');//(无需下载)
const app = http.createServer();//(创建服务器)
const url = require('url');//系统自带get请求路径操作方法(无需下载)
// const mime = require('mime');// npm install mime(命令行中输入后下载 23行中解释使用)

app.on('request',(req,res) => {
    //获取用户的请求路径
    let pathname = url.parse(req.url).pathname;
    console.log(pathname);

    //将用户的请求路径转换为实际的硬盘绝对路径
    let realPath = path.join(__dirname, 'static' + pathname);


    // console.log(realPath);
    // let type = mime.getType(realPath);//获取这个文件下所有路径文件的类型

    fs.readFile(realPath,(error,result) => {
           //error 如果为空 就代表文件读取成功
           //error 如果为对象 就代表文件读取失败
           if(error != null){  //如果文件读取失败做出的操作
                res.writeHead(404,{
                    'content-type' : 'text/html;charset=utf8'
                });
                res.end('文件读取失败');
                return;
           }
           res.writeHead(200,{
            //    'content-type' : type
           });
           res.end(result);
    })
})
app.listen(3000);
console.log('服务器启动成功');