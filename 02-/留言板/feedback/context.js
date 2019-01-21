// 扩展模块
let fs = require('fs');
let _ = require('underscore');
let mime = require('mime');
let url = require('url');
module.exports = function (req, res) {
    req.url = req.url.toLowerCase();
    req.method = req.method.toLowerCase();
    req.pathName = url.parse(req.url, true);// 获取get方式提交的数据
    res.rander = function (filePath, xrData) {
        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html;charset = utf8' })
                return;
            }
            if (xrData) {
                data = _.template(data.toString('utf8'))(xrData);
            }
            res.writeHead(200, 'OK', { 'Content-Type': mime.getType(filePath) + ';charset = utf8' })
            res.end(data);
        })
    }
}