let fs = require('fs')
let path = require('path')

console.log(`1`)

// Promise 是一个构造函数
// 创建Promise容器 实例化
let readTxtA = new Promise((resolve, reject) => {
    console.log(`2`)
    fs.readFile(path.join(__dirname, 'data', 'a.txt'), 'utf8', (err, data) => {
        console.log(`3`)
        if (err) {
            // console.log(err)
            // 把 Promise 容器的 pediing 状态变为 Rejected 失败

            // 这里调用 reject 实际上就是 then 方法传递的第二个 function
            reject(err)
        } else {
            // console.log(data)
            // 把 Promise 容器的 pediing 状态变为 Resolved 成功

            // 这里调用 resolve 实际上就是 then 方法传递的第一个 function
            resolve(data)
        }
    })
})

console.log(`4`)

// 1 2 4 3

readTxtA.then((data) => {
    console.log('sss',data)
}, (err) => {
    console.log(err)
})