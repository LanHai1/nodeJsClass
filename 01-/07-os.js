// 操作系统信息模块
let os = require('os');

// os.arch()方法返回一个字符串, 表明 Node.js 二进制编译所用的 操作系统CPU架构.
console.log(os.arch()); // x64

// os.cpus() 方法返回一个对象数组, 包含每个逻辑 CPU 内核的信息.
//     model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz', <string>
//     speed: 1600, <number> (兆赫兹为单位)
//     times: <object>
//      { user: 37145870, <number> (CPU花费在用户模式下的毫秒时间数.)
//        nice: 0, <number> (CPU花费在良好模式下的毫秒时间数.)
//        sys: 5471950, <number> (CPU花费在系统模式下的毫秒时间数.)
//        idle: 14081840, <number> (CPU花费在空闲模式下的毫秒时间数.)
//        irq: 0 <number> (CPU花费在中断请求模式下的毫秒时间数.)
//      } 
console.log(os.cpus()); 

// os.homedir() 方法以字符串的形式返回当前用户的home目录.
console.log(os.homedir()); // /Users/macbookair

// os.hostname()方法以字符串的形式返回操作系统的主机名.
console.log(os.hostname()); // macbookdeMacBook-Air.local

// os.totalmem()方法以整数的形式返回所有系统内存的字节数.(当前系统的内存)
console.log(os.totalmem()); // 8589934592

// os.type()方法返回一个字符串,表明操作系统的名字
// 'Linux' 在 Linux系统上, 
// 'Darwin' 在 macOS 系统上,
// 'Windows_NT' 在 Windows系统上.
console.log(os.type()); // Darwin
