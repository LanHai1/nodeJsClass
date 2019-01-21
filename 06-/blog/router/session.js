// 注册登陆退出 路由设计
let userDB = require('../models/userDB.js')
let md5 = require('blueimp-md5') // md5 加密
module.exports = (app, express) => {
    // 渲染注册
    app.get('/register', (req, res) => {
        res.render('register.html')
    })

        // 处理注册
        .post('/register', (req, res) => {
            // errCode:{0=成功,1=邮箱已存在,2=昵称已存在,500=服务端错误}
            req.body.password = md5(md5(req.body.password)) // 对密码进行加密
            userDB.addUser(req.body, (errCode, ret) => {
                if (errCode === 0) {
                    // 存储session
                    req.session.user = ret
                    res.status(200).json({
                        err_code: 0,
                        message: 'OK'
                    })
                } else if (errCode === 1) {
                    res.status(200).json({
                        err_code: 1,
                        message: 'Email or nickname aleady exists.'
                    })
                } else if (errCode === 500) {
                    res.status(500).json({
                        err_code: 500,
                        message: 'Internal err.'
                    })
                }
            })
        })

        // 渲染登陆
        .get('/login', (req, res) => {
            res.render('login.html')
        })

        // 处理登陆
        .post('/login', (req, res) => {
            req.body.password = md5(md5(req.body.password)) // 对应加密密码
            userDB.loginQuery(req.body, (errCode, ret) => {
                if (errCode === 0) {
                    req.session.user = ret
                    res.status(200).json({
                        err_code: 0,
                        message: 'OK'
                    })
                } else if (errCode === 1) {
                    res.status(200).json({
                        err_code: 1,
                        message: 'Email or nickname is invalid.'
                    })
                } else if (errCode === 500) {
                    res.status(500).json({
                        err_code: 500,
                        message: 'Internal err.'
                    })
                }
            })
        })

        // 处理退出
        .get('/logout', (req, res) => {
            req.session.user = null
            res.redirect('/')
        })
}