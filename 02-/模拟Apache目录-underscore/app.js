let fs = require('fs');
let path = require('path');
let config = require('./config.js');
let _ = require('underscore');
require('http').createServer(function (req, res) {
    req.url = req.url.toLowerCase();
    req.method = req.method.toLowerCase();
    res.rander = function (filePath, xrData) {
        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html;charset=utf8' });
                return res.end('Page Not Found');
            }
            if (xrData) {
                data = _.template(data.toString('utf8'))(xrData);
            }
            res.writeHead(200, 'OK', { 'Content-Type': 'text/html;charset=utf8' });
            res.end(data);
        })
    }
    res.apacheDirectory = function (filePath) {
        let arr = [];
        let arr1 = [];
        fs.readdir(filePath, "utf8", function (err, files) {
            if (err) throw err;
            for (let i = 0; i < files.length; i++) {
                // 文件放入arr数组
                if (files[i].indexOf('.') >= 0) {
                    arr.push(files[i]);
                } else { // 文件夹放入arr1数组
                    arr1.push(files[i]);
                }
            }
            res.rander(path.join(__dirname, "views", 'template-apache.html'), { list: arr, list1: arr1 });
            console.log(arr, arr1);
        })
    }
    // 根目录访问模拟Apache目录页面
    if (req.url === '/' && req.method === 'get') {
        res.apacheDirectory(path.join(__dirname));
    } else if (req.url === '/node_modules' || req.url === '/public' || req.url === '/views' && req.method === 'get') {
        res.apacheDirectory(path.join(__dirname, req.url));
    } else if (req.url === '/css' || req.url === '/img' || req.url === '/js' && req.method === 'get') {
        res.apacheDirectory(path.join(__dirname, "public", req.url));
    } else {
        res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html;charset=utf8' });
        res.end('Page Not Found');
    }
}).listen(config.port, function () {
    console.log(`http://localhost:${config.port}`)
})