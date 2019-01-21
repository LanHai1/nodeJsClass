// 数据库模块
let mongoose = require('mongoose')
let config = require('./config.js')

let Schema = mongoose.Schema

// 连接数据库
mongoose.connect(config.db, { useNewUrlParser: true })

// 设计文档结构
let userShema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    hobbies: {
        type: String
    }
})

// 将文档结构发布为模型
let Usertest = mongoose.model('Usertest', userShema)

// 增
module.exports.add = (userData, callback) => {
    let student = new Usertest({
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
        hobbies: userData.hobbies
    })
    student.save((err) => {
        if (err) throw err
        if (callback) callback(err)
    })
}

// 查 (all)
module.exports.query = (callback) => {
    Usertest.find((err, ret) => {
        if (err) throw err
        if (callback) callback(err, ret)
    })
}

// 查 (one)
module.exports.queryId = (id, callback) => {
    Usertest.findById(id, (err, ret) => {
        if (err) throw err
        if (callback) callback(err, ret)
    })
}

// 改
module.exports.update = (id, userData, callback) => {
    Usertest.findByIdAndUpdate(id, {
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
        hobbies: userData.hobbies
    }, (err) => {
        if (err) throw err
        if (callback) callback(err)
    })
}

// 删
module.exports.remove = (id, callback) => {
    Usertest.remove({
        _id: id
    }, (err) => {
        if (err) throw err
        if (callback) callback(err)
    })
}