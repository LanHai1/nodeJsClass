// 静态资源 路由设计
let path = require('path')
module.exports = (app, express) => {
    // 静态资源
    console.log(path.join(__dirname, '..', 'views'))
    app.use('/views', express.static(path.join(__dirname, '..', 'views')))
        .use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')))
        .use('/public', express.static(path.join(__dirname, '..', 'public')))

        // 配置默认views
        .set('views', path.join(__dirname, '..', 'views'))

        // 渲染首页
        .get('/', (req, res) => {
            res.render('index.html', {
                user: req.session.user // session
            })
        })
}