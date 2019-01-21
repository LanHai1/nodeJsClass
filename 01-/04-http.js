// 使用 Node.js 非常轻松的构建一个web服务器

// 1.加载核心模块 http 
let http = require('http');

// 2.使用 http.createServer() 方法创建一个服务器
// 返回一个server对象
let server = http.createServer();

// 服务器要做什么？
// 提供服务: 对数据的服务
// 发请求
// 接受请求
// 处理请求
// 发送响应
// 3.注册 request 请求事件
// 当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数，callback 回调处理函数

server.on("request", function () {
    console.log('收到客户端请求了');
})

// 4.绑定端口号 启动服务
server.listen(8088, function () {
    console.log('服务器启动成功，请访问 http://localhost:8088')
})

// 简写
// require('http').createServer(function(req,res){

// }).listen(8080,function(){

// })