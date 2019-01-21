let express = require('express')
let config = require('./config.js')
let bodyParser = require('body-parser')
let ExpressSession = require('express-session')
let static = require('./router/static.js') // 静态资源路由
let session = require('./router/session.js') // 注册登陆退出 路由设计

let app = express()

// 配置渲染html
app.engine('html', require('express-art-template'))

// 配置POST方式
app.use(bodyParser.urlencoded({ extended: false }))

// 配置session
app.use(ExpressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

static(app, express)

session(app, express)



app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`)
})