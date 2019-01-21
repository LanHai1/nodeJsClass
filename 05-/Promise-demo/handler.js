let db = require('./db.js')
module.exports.promiseIndex = (req, res) => {
    let indexAdmin = new Promise((resolve, reject) => {
        db.queryAdmin((err, ret) => {
            if (err) {
                reject(err)
            } else {
                resolve(ret)
            }
        })
    })
    indexAdmin
        .then((ret) => {
            let adminRet = ret
            console.log(adminRet[0].job)
            let indexJob = new Promise((resolve, reject) => {
                db.queryJob(adminRet[0].job,(err, ret) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve([adminRet, ret])
                    }
                })
            })
            return indexJob
        }, (err) => {
            res.send(`<h1>暂无文件</h1>`, err)
        })
        .then((ret) => {
            console.log(ret[0],"---------------",ret[1])
            res.render('Promise使用场景.html', {
                admin: ret[0],
                job: ret[1]
            })
        })
}