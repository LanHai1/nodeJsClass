
let http = require('http');

let server = http.createServer();

// request 请求事件处理函数有两个参数
//         参数一：request 请求对象: 请求对象可以用来获取客户端的一些请求信息
//         参数二：response 响应对象: 响应对象可以用来给客户端发送响应信息
server.on("request", function (request, response) {

    // request.url 获取路由
    console.log(request.url);

    // request.method 获取请求的发送 get/post/...
    console.log(request.method);

    // response.write(chunk[, encoding][, callback]) 给客户端发送响应数据 (可以使用多次，但是最后一定要使用response.end()结束响应)
    // 第一个参数 chunk: 响应的数据(必须是 字符串类型 或者 Buffer对象类型)
    // 第二个参数 [, encoding]: 编码格式 参数是可选的 默认为utf8
    // 第三个参数 [, callback]: 回调函数 参数是可选的 当数据块被刷新且不为空时调用
    response.write('Hello Node');
    response.write('你好 Node',"utf-8");
    
    // 解决乱码
    // response.writeHead(statusCode[, statusMessage][, headers]) 发送一个响应头给请求
    // 第一个参数 statusCode: http响应状态码
    // 第二个参数 [, statusMessage]: http响应状态码对应的消息
    // 第三个参数 [, headers]: 响应头
    response.writeHead(200,"OK",{"Content-Type":"text/html;charset=utf-8"});

    // response.end([data][, encoding][, callback]) 告诉服务器，所有的响应已经处理完毕了，可以结束请求了
    response.end('你好2 Node');
})

server.listen(8081, function () {
    console.log('服务器启动成功，请访问 http://localhost:8081')
})

// 简写
// require('http').createServer(function(req,res){
//     res.writeHead(200,"OK",{"Content-Type":"text/html;charset=utf-8"})
// }).listen(8080,function(){

// })