// 路由模块
let path = require('path');
let handler = require('./handler.js');
// 加载post请求模块
let bodyParser = require('body-parser');

module.exports = function (app, express) {
    app.engine('html', require('express-art-template'));
    app.get('/', function (req, res) {
        handler.index(req, res)
    });
    app.use('/index', function (req, res) {
        handler.index(req, res)
    });
    app.use('/post', function (req, res) {
        handler.post(req, res)
    });

    // 提交数据
    // app.all('/pinglun',function(req,res){
    //     console.log(req.body)
    //     handler.getAdd(req,res);
    // })

    // 配置bodyParser模块
    app.use(bodyParser.urlencoded({ extended: false }));
    // post 提交数据
    app.post('/pinglun', function (req, res) {
        handler.postAdd(req, res);
    })

    // item 
    app.get('/item', function (req, res) {
        handler.itme(req, res);
    })


    // app.all('/pinglun',function(req,res){
    //     console.log(`111`,req.param())
    //     res.send(req.param(name));
    // })


    // 静态资源
    app.use('/public/', express.static(path.join(__dirname, 'public')))
}