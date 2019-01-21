let url = require('url'); // 加载模块

let obj = url.parse('/pinlun?name=蓝海&password=lanhai123',true); // get 方式提交的数据

// 路径解析
console.log(obj.query); // { name: '蓝海', password: 'lanhai123' }
