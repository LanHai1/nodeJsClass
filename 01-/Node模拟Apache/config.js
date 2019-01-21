// 配置模块
let path = require('path');
module.exports = {
    "port": 3000,
    "indexPath": path.join(__dirname, "resource", "index.html"),
    "imgPath": path.join(__dirname, "resource", "ab2.jpg"),
    "cssPath": path.join(__dirname, "resource", "main.css"),
    "jsPath": path.join(__dirname, "resource", "main.css"),
    "txtPath": path.join(__dirname, "resource", "hello.txt")
}