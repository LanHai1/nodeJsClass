// 解决 回调地狱

let fs = require('fs')
let path = require('path')

/**
 * Promise 读取文件
 * @param {*} pathTxt 
 */
let readTxt = (pathTxt) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathTxt, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

readTxt(path.join(__dirname, 'data', 'a.txt'))
    .then((data) => {
        console.log(data)
        // 当 a文件读取成功的时候 
        // 当前函数中 return 的结果就可以在后面的 then 中接收 以此类推 
        // return 一个 Promise 对象
        return readTxt(path.join(__dirname, 'data', 'b.txt'))
    }, (err) => {
        console.log(err)
    })
    .then((data) => {
        console.log(data)
        return readTxt(path.join(__dirname, 'data', 'c.txt'))
    }, (err) => {
        console.log(err)
    })
    .then((data) => {
        console.log(data)
    }, (err) => {
        console.log(err)
    })

    // hello aaa
    // hello bbb
    // hello ccc