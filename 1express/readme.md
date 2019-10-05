# 初始化项目（后端项目）
* npm init  
entry point: (index.js) 设置入口文件，之后在目录中创建该文件
* 编写入口文件
* 安装引入包  
npm install express  
express:提供http请求处理的接口

  npm install nodemoon  
  nodemoon:实现即时改动即时编译的起动器  
  nodemoon XX.js  
* 设置简化指令配置  
配置文件：package.js  
简化结果：npm rum start -> node server.js" 

        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node server.js",
            "server": "nodemon server.js"
        },

* 设置node全局配置  
配置文件：config.js  

      module.exports = {
          data : '配置数据'
      }

  获取数据

      const config1 = require("./config").data;
