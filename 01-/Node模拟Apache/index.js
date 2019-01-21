let fs = require('fs');
// 加载配置模块
let config = require('./config.js');

/**
 * 后续采用mime模块 (封装一个读取文件的函数 把路径传进去 引用mime.getType(路径)的方法返回 Content-Type 的类型 即可)
 */

require('http').createServer(function (req, res) {
    let reqUrl = req.url.toLowerCase();
    let reqMethod = req.method.toLowerCase();
    // 主页
    if (reqUrl === '/' || reqUrl === '/index' || reqUrl === '/index.html' && reqMethod === 'get') {
        fs.readFile(config.indexPath, function (err, data) {
            if (err) {
                res.writeHead(404, 'Not Found', { "Content-Type": "text/html;charset=utf-8" });
                res.end('<h1 style="color:red">Page Not Found</h1>');
            }
            res.writeHead(200, 'OK', { "Content-Type": "text/html;charset=utf-8" });
            res.end(data);
        })
    } else if (reqUrl === '/main.css' && reqMethod === 'get') { // css文件
        fs.readFile(config.cssPath, function (err, data) {
            if (err) {
                res.writeHead(404, 'Not Found', { "Content-Type": "text/html;charset=utf-8" });
                res.end('<h1 style="color:red">Page Not Found</h1>');
            }
            res.writeHead(200, 'OK', { "Content-Type": "text/css;charset=utf-8" });
            res.end(data);
        })
    } else {
        res.writeHead(404, 'Not Found', { "Content-Type": "text/html;charset=utf-8" });
        res.end('<h1 style="color:red">Page Not Found</h1>');
    }
}).listen(config.port, function () {
    console.log(`http://localhost:${config.port}`);
})

for (var i = 0; i < 500; i++) {
    setTimeout(function () {
        console.log(i);
    }, (i))
}