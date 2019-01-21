let mongoose = require('mongoose')

let Schema = mongoose.Schema

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据后就会被创建出来
mongoose.connect('mongodb://127.0.0.1:27017/itcast', { useNewUrlParser: true })

// 2.设计文档结构(表结构)
// 字段名称就是表结构里面的属性名称
// 约束的目的是要保证数据的完整兴，不要有 脏数据
let userShema = new Schema({
    userName: {
        type: String,
        required: true // 必填
    },
    passWord: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

// 3.将文档结构发布为模型
// mongoose.model 方法就是将一个架构发布为 model
// 第一个参数：传入一个大写单词字符串用来表示你的数据库名称
//           mongoose会自动将大写名词的字符串转换为 小写复数 的集合名称 (users) 
// 第二个参数：架构 User
var User = mongoose.model('User', userShema);
// 当我们有了这个模型后就可以对这个构造函数 users 集合进行增删改查了

// // 4.增
// let admin = new User({
//     userName: '蓝海',
//     passWord: 'lanhai123456',
//     email: '1444133004@qq.cn'
// })

// // 将数据持久化存储在数据库
// admin.save((err, ret) => {
//     if (err) console.log(`存储失败+${err}`)
//     console.log(`存储成功+${ret}`)
// })

// 5.查 (查询不到返回null)
// // 5.1. 查询所有数据
// User.find((err, data) => {
//     if (err) console.log(err)
//     console.log(`${data}`)
// })
// // 5.2. 根据条件查询数据
// User.find({
//     userName: '蓝海'
// }, (err, data) => {
//     if (err) console.log(err)
//     console.log(`${data}`)
// })
// // 5.2.1 根据条件查询数据 返回的是一个对象
// User.findOne({
//     userName: '蓝海11'
// }, (err, data) => {
//     if (err) console.log(err)
//     console.log(`${data}`)
// }) // null

// // 6.删
// User.remove({
//     userName: '蓝海'
// }, (err, ret) => {
//     if (err) {
//         console.log(`删除失败${err}`)
//     } else {
//         console.log(`删除成功${ret}`)
//     }
// })

// 7.改
// 第一个参数 id (String)
// 第二个参数 修改的属性加值 (Object)
// 第三个参数 回调函数
User.findByIdAndUpdate('5c3d99b169baff3e44b7b64f', {
    userName: 'owo'
}, (err) => {
    if (err) {
        console.log(`更新失败${err}`)
    } else {
        console.log(`更新成功`)
    }
})

