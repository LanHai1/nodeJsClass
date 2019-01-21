// 1. 安装 express (npm install express)
// 2. 加载 express
let express = require('express');
// 3. 创建服务器应用程序
let app = express();
let port = 3033; // 端口号

let fs = require('fs');
let path = require('path');

// 4. 设计路由 业务设计
app.get('/', function (req, res) {
    //res.send(`Hello express`)
    fs.readFile(path.join(__dirname, 'views', 'index.html'), "utf8", function (err, data) {
        if (err) throw err;
        res.send(data);
    })
    //res.send(`你好`)
})
app.get('/about', (req, res) => res.send(`你好，我是expres!`))
// 4.1. 静态资源处理
app.use('/public/', express.static('./public'));

// 5. 开启服务器监听连接
app.listen(port, function () {
    console.log(`http://localhost:${port}`)
})