// 路由模块
let path = require('path')
let handler = require('./handler.js')
module.exports = function (app, express) {
    // 静态资源
    app.use('/views', express.static(path.join(__dirname, 'views')))

        .use('/public', express.static(path.join(__dirname, 'public')))

        .use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

        // 渲染首页
        .get('/students', (req, res) => {
            handler.students(req, res)
        })

        // 渲染添加学生页面
        .get('/students/new', (req, res) => {
            handler.studentsNew(req, res)
        })

        // 处理添加学生请求
        .post('/students/new', (req, res) => {
            handler.studentsNewPost(req, res)
        })

        // 渲染编辑页面
        .get('/students/edit', (req, res) => {
            handler.studentsEdit(req, res)
        })

        // 处理编辑请求
        .post('/students/edit', (req, res) => {
            handler.studentsEditPost(req, res)
        })

        // 处理删除请求
        .get('/students/delete',(req,res)=>{
            handler.studentsDelete(req,res)
        })

        // 处理404
        .use((req,res)=>{
            res.send(`<h1 style='color:red;text-align:center;margin-top:100px'> Sorry,page Not Fount</h1>`)
        })
}