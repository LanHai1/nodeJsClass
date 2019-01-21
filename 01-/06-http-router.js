// 根据请求的不同路径返回不同的处理结果

require('http').createServer(function (req, res) {
    // 用户请求的路径 .toLowerCase()转小写
    let reqUrl = req.url.toLowerCase();
    // 用户请求的方法
    let reqMethod = req.method.toLowerCase();

    // 判断路径 给出不同的处理
    if (reqUrl === '/' || reqUrl === '/index' && reqMethod === 'get') {
        res.end(`index`);
    } else if (reqUrl === '/add' && reqMethod === 'get') {
        res.end(`addGet`);
    } else if (reqUrl === '/submit' && reqMethod === 'get') {
        res.end(`submit`);
    } else {
        // 设置错误响应报文头
        res.writeHead(404, "Not Found", { "Content-Type": "text/html;charset=utf-8" });
        res.end('Page Not Found');
    }
}).listen(8686, function () {
    console.log(`http://localhost:8686`)
})