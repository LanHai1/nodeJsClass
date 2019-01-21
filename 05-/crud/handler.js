// 业务模块
let db = require('./db.js')
// 渲染首页
module.exports.students = (req, res) => {
    db.query((err, ret) => {
        if (err) {
            res.status(500).send(`Server Error`)
        } else if (ret.length > 0) {
            res.render('index.html', {
                fruits: ['苹果', '菠萝', '哈密瓜'], // 测试 
                students: ret,
                noData: {
                    data: null
                }
            })
        } else if (ret.length === 0) {
            res.render('index.html', {
                fruits: ['苹果', '菠萝', '哈密瓜'],
                students: null,
                noData: {
                    data: '暂无数据'
                }
            })
        }
    })
}

// 渲染添加学生页面
module.exports.studentsNew = (req, res) => {
    res.render('new.html')
}

// 处理添加学生请求
module.exports.studentsNewPost = (req, res) => {
    db.add(req.body, (err) => {
        if (err) {
            res.status(500).send(`Server Error`)
        } else {
            res.redirect('/students')
        }
    })
}

// 渲染编辑页面
module.exports.studentsEdit = (req, res) => {
    db.queryId(req.query.id.replace(/"/g, ''), (err, ret) => {
        if (err) {
            res.status(500).send(`Server Error`)
        } else {
            res.render('edit.html', {
                student: ret
            })
        }
    })
}

// 处理编辑请求
module.exports.studentsEditPost = (req, res) => {
    db.update(req.body.id.replace(/"/g, ''), req.body, (err) => {
        if (err) {
            res.status(500).send(`Server Error`)
        } else {
            res.redirect('/students')
        }
    })
}

// 处理删除请求
module.exports.studentsDelete = (req, res) => {
    db.remove(req.query.id.replace(/"/g, ''), (err) => {
        if (err) {
            res.status(500).send(`Server Error`)
        } else {
            res.redirect('/students')
        }
    })
}