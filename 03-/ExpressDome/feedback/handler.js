// 业务模块
let config = require('./config.js');
let path = require('path');
let fs = require('fs');


// 首页
module.exports.index = function (req, res) {
    readData(function (list) {
        res.render(path.join(__dirname, "views", "index.html"), { list: list })
    })
}
// 数据提交
module.exports.post = function (req, res) {
    res.render(path.join(__dirname, "views", "post.html"))
}

// getadd
module.exports.getAdd = function (req, res) {
    readData(function (list) {
        req.query.id = list.length;
        list.push(req.query)
        writeData(JSON.stringify(list), function () {
            res.redirect(302, '/');
        })
    })
}

// postadd
module.exports.postAdd = function (req, res) {
    readData(function(list){
        req.body.id = list.length;
        list.push(req.body)
        writeData(JSON.stringify(list), function () {
            res.redirect(302, '/');
        })
    })
}

// itme 
module.exports.itme = function (req, res) {
    let thisMessageId = Number(req.query.id);// 当前留言ID
    readData(function (list) {
        let thisMessage = null;// 当前留言
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === thisMessageId) {
                thisMessage = list[i];
                break;
            }
        }
        if (thisMessage) {
            res.render(path.join(__dirname, "views", "item.html"), thisMessage)
        } else {
            res.render(path.join(__dirname, "views", "404.html"))
        }
    })
}

function readData(callback) {
    fs.readFile(config.dataPath, "utf8", function (err, data) {
        if (err && err.code != 'ENOENT') throw err;
        let list = JSON.parse(data || '[]');
        callback(list);
    })
}
// 写入数据
function writeData(list, callback) {
    fs.writeFile(config.dataPath, list, "utf8", function (err) {
        if (err) throw err;
        callback();
    })
}