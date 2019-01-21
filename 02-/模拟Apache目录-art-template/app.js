let config = require('./config.js');
let template = require('art-template');
let fs = require('fs');
let path = require('path');

require('http').createServer(function (req, res) {
    req.url = req.url.toLowerCase();
    req.method = req.method.toLowerCase();
    // res.rander = function (filePath, xrData) {
    //     fs.readFile(filePath, function (err, data) {
    //         if (err) {
    //             res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html;charset=utf8' });
    //             return res.end('<h1>Page Not Found<h1>');
    //         }
    //         if (xrData) {
    //             console.log(data.toString('utf-8'))
    //             data = template.render(data.toString('utf-8'), xrData);

    //         }
    //         res.writeHead(200, 'OK', { 'Content-Type': 'text/html;charset=utf8' });
    //         res.end(data);
    //     })
    // }
    if (req.url === '/' && req.method === 'get') {
        // 文件
        let fileZ = [];
        // 文件夹
        let folders = [];
        fs.readdir(path.join(__dirname), function (err, files) {
            for (let i = 0; i < files.length; i++) {
                if (files[i].indexOf('.') >= 0) {
                    fileZ.push(files[i]);
                } else {
                    folders.push(files[i]);
                }
            }
            // console.log(fileZ, folders)
            // res.rander(path.join(__dirname, "views", "template-apache.html"), { fileZ: fileZ, folders: folders });

            fs.readFile(path.join(__dirname, "views", "template-apache.html"), function (err, data) {
                if (err) {
                    res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html;charset=utf8' });
                    return res.end('<h1>Page Not Found<h1>');
                }
                // if (xrData) {
                //     console.log(data.toString('utf-8'))
                //     data = template.render(data.toString('utf-8'), xrData);

                // }
                // var ret = template.render(data.toString(), { title: 'aaaa' })
                // console.log(ret)
                
                res.writeHead(200, 'OK', { 'Content-Type': 'text/html;charset=utf8' });

                res.end(data);
            })
        })

    } else {
        res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html;charset=utf8' });
        res.end('<h1>Page Not Found<h1>');
    }
}).listen(config.port, function () {
    console.log(`http://localhost:${config.port}`);
})