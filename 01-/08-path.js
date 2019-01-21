// 处理文件与目录的路径模块
let path = require('path');

// path.extname(path) 返回 path 的扩展名 （extension'扩展' name）
console.log(path.extname('./data/hello.js')); // .js

// path.basename(path[, ext]) 返回 path 的最后一部分，类似于 Unix 中的 basename 命令。
// 参数一: path 路径 <string>
// 参数二: [, ext] 文件的扩展名 <string>
console.log(path.basename('./data/hello.js')); // hello.js
console.log(path.basename('./data/hello.js', '.js')); // hello

// path.dirname(path) 返回 path 的目录名(不包含自己文件名，path路径文件的父级路径)，类似于 Unix 中的 dirname 命令。
// 如果 path 不是字符串，则抛出 TypeError
console.log(path.dirname('./data/hello.js')); // ./data

// path.join([...paths]) 使用平台特定的分隔符把所有 path 片段连接到一起，并规范化生成的路径。
// __dirname: 表示当前运行的js文件所在的目录(不包括自己)
// __filename: 表示当前运行的js文件完整目录(包括自己)
console.log(path.join(__dirname,'data','hello.js')); // /Volumes/蓝海/前端/14.nodejs/nodeClass/01-/data/hello.js
console.log(path.join(__dirname)); // /Volumes/蓝海/前端/14.nodejs/nodeClass/01-
console.log(path.join(__filename)); // /Volumes/蓝海/前端/14.nodejs/nodeClass/01-/08-path.js

