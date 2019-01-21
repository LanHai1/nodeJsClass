let config = require('./config.js'); // 配置模块
let context = require('./context.js'); // 扩展模块
let router = require('./router.js'); // 路由模块


require('http').createServer(function (req, res) {
    context(req, res);
    router(req,res);
    
}).listen(config.port, function () {
    console.log(`http://localhost:${config.port}`)
})