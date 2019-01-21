// 读取文件

// 浏览器的 JavaScript 是没有文件操作能力的
// 但是 Node 中的 JavaScript 具有文件操作能力

// fs 是 file-system 的简写，：文件系统
// 在Node中如果想要进行文件操作，就必须要引入 fs 模块
// 在fs 这个核心模块中，就提供了所有的文件操作相关的 API

let fs = require('fs');

// // 读取文件 fs.readFile(path[, options], callback)
// // 第一个参数 path: 读取文件的路径
// // 第二个参数 [, options]: 可填可不填 编码格式 不填写则返回原始的 buffer对象
// // 第三个参数 callback: 回调函数 callback有两个参数 (err, data) 
// //                            err: 错误信息
// //                            data: 读取文件中的内容
// fs.readFile("./data/hello.txt", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });


// fs.readFile() 会缓存整个文件。 为了最小化内存占用，尽可能优先使用 fs.createReadStream()。


// let stream = fs.createReadStream("./data/hello.txt");
// // setTimeout(function(){
// //     stream.close(); // 这不会关闭流。
// //   // 必须手动地指示流已到尽头，流才会关闭。
// //   // 这不会取消读取操作的等待，进程在读取完成前不会退出。
// //   stream.push(null);
// //   stream.read(0);
// // },100)

// let str = "";
// stream.on('readable', function () {
//     // console.log(`读取的数据：${stream.read()}`)
//     str = stream.read();
//     console.log(str,111);
// })
// stream.on('end', function () {
//     console.log('读取结束');
// })


// 写入文件 fs.writeFile(file, data[, options], callback)
// 第一个参数 path: 写入文件的路径
// 第二个参数 data：写入的数据 "必须是 string类型 或者 Buffer对象"
// 第三个参数 [, options]: 可填可不填 编码格式 不填写则写入的是原始的 buffer对象 数据
// 第四个参数 callback: 回调函数 callback有两个参数 (err) 
//                            err: 错误信息

fs.writeFile('./data/hello.js', "写入成功", "utf8", function (err) {
    if (err) throw err;
    console.log('写入成功');
})