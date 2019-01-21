let db = require('./db.js')
module.exports.registered = (req, res) => {
    res.render('registered.html')
}

module.exports.registeredPost = (req, res) => {
    db.registered(req.body, (errCode) => {
        if (errCode) {
            res.send(`注册成功`)
        } else {
            res.send(`用户名重复`)
        }
    })
}