// 业务模块
let path = require('path');
let fs = require('fs');
let config = require('./config.js');
let querystring = require('querystring');
let date = new Date();
// 主页面
module.exports.inedx = function (req, res) {
    readData(function (list) {
        let newTime = date.getTime();
        for (let i = 0; i < list.length; i++) {
            console.log(list[i].dateTime)
            list[i].dateTime = getTime(list[i].dateTime,newTime);
            // console.log(getTime(list[i].dateTime,newTime),newTime);
        }
        res.rander(path.join(__dirname, "views", "index.html"), { list: list });
    })
}
// 填写数据页面
module.exports.post = function (req, res) {
    res.rander(path.join(__dirname, "views", "post.html"));
}
// css/js/img... 
module.exports.public = function (req, res) {
    res.rander(path.join(__dirname, req.url));
}
// 错误页面
module.exports.err = function (req, res) {
    res.rander(path.join(__dirname, "views", "404.html"));
}
// post 提交数据
module.exports.postAdd = function (req, res) {
    readData(function (list) {
        bodyPost(req, function (arr) {
            arr.dateTime = date.getTime(); // 提交数据时间戳
            arr.id = list.length;
            console.log(arr);
            list.push(arr);
            writeData(JSON.stringify(list), function () {
                redirect(res);
            })
        })
    })
}
// get 提交数据
module.exports.getAdd = function (req, res) {
    readData(function (list) {
        req.pathName.query.id = list.length;
        list.push(req.pathName.query);
        writeData(JSON.stringify(list), function () {
            redirect(res);
        })
    })
}
// 读取数据
function readData(callback) {
    fs.readFile(config.dataPath, 'utf8', function (err, data) {
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
// post 提交数据处理
function bodyPost(req, callback) {
    let arr = [];
    req.on('data', function (chunk) {
        arr.push(chunk);
    })
    req.on('end', function () {
        arr = Buffer.concat(arr);
        arr = arr.toString('utf8');
        arr = querystring.parse(arr);
        callback(arr);
    })
}
// 重定向
function redirect(res) {
    res.statusCode = 302;
    res.statusMessage = 'Found';
    res.setHeader('Location', '/');
    res.end();
}
// 根据时间戳计算时间差
function getTime(faultDat, completeTime) {
    var stime = Date.parse(new Date(faultDat));
    var etime = Date.parse(new Date(completeTime));
    var usedTime = etime - stime;  //两个时间戳相差的毫秒数
    var days = Math.floor(usedTime / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = usedTime % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    var time = days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
    return time;
}