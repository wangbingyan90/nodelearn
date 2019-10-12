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
    let url = decodeURI(req.url);
    // 调用封装函数
    readStaticFile(url,res)
})

 // 4.启动服务器
 app.listen(3000,() => {  // 默认为localhost（本地主机）; 端口为3000
    console.log("server is running")
})
 
function readStaticFile(url, res) {
    // const pathstatic = path.join(__dirname, 'static', url)
    const pathstatic = "/"+url
    console.log(pathstatic)
    const is_exists = fs.existsSync(pathstatic)
    if(!is_exists){
        return res.end("unexists");
    }

    const is_direc = fs.lstatSync(pathstatic).isDirectory();

    if(is_direc){
        res.writeHead(200,{
            'content-type' : 'text/html;charset=utf8'
        });
        const direc = fs.readdirSync(pathstatic);
        let con = "<br>"
        console.log(url)
        const url1 = url.substr(1);
        direc.forEach(element => {
            con = con + "<a href=\""+url1+"/"+element+"\">"+element+"</a><br>"
        });
        res.end("<h1>文件夹"+pathstatic+"<h1>"+con)

    }else{
        fs.readFile(pathstatic, (err, data) => {
            // 找不到文件则返回404
            if (err) return res.end("unFlie");
            // res.end来返回上面读取的内容
            res.writeHead(200,{
                'content-type' : 'text/html;charset=utf8'
            });
            res.end(data)
        }) 
    }

}
