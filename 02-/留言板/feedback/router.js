// 路由模块
let handler = require('./handler.js'); // 业务模块

module.exports = function (req, res) {
    if (req.url === '/' || req.url === '/index' || req.url === '/index.html' && req.method === 'get') {
        handler.inedx(req, res);
    } else if (req.url === '/post' && req.method === 'get') {
        handler.post(req, res);
    } else if (req.url.indexOf('/public') >= 0 && req.method === 'get') {
        handler.public(req, res);
    } else if (req.url.indexOf('/pinglun') >= 0 && req.method === 'get') {
        handler.getAdd(req, res);
    } else if (req.url.indexOf('/pinglun') >= 0 && req.method === 'post') {
        handler.postAdd(req, res);
    } else {
        handler.err(req, res);
    }
}