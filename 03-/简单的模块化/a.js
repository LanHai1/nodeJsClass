// require 是一个方法 
// require这个函数在 Module.js 这个文件中
// 它的作用就是用来加载模块的

// 加载b模块
let b = require('./b.js');

// a模块想要使用b模块中 getSum() 方法
console.log(b.getSun(10, 10)) // 20

// a模块访问b模块中的配置对象中的端口号
console.log(b.config.port) // 9999

