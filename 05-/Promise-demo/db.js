let mongoose = require('mongoose')
let config = require('./config.js')
let Shema = mongoose.Schema

mongoose.connect('mongodb://127.0.0.1:27017/students', { useNewUrlParser: true })

// 信息表
let adminShema = new Shema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    job: {
        type: Number
    }
})

// 职业表
let jobShema = new Shema({
    id: {
        type: Number,
        required: true
    },
    professional: {
        type: String,
        required: true
    }
})

// 将文档结构发布为模型

let Admin = mongoose.model('Admin', adminShema)

let Job = mongoose.model('Job', jobShema)

// 新增模拟数据

// let data = new Admin({
//     name: '蓝海',
//     age: 18,
//     job: 1
// })
// data.save((err) => {
//     if (err) { throw err } else {
//         console.log(`存储成功`)
//     }
// })

// let jobs = new Job({
//     id: 3,
//     professional: '程序员'
// })
// jobs.save((err) => {
//     if (err) {
//         throw err
//     } else {
//         console.log(`存储成功`)
//     }
// })

module.exports.queryAdmin = (callback) => {
    Admin.find((err, ret) => {
        if (err) {
            throw err
        }
        if (callback) callback(err, ret)
    })
}

Admin.find()
    .then((data) => {
        console.log(data)
    })

module.exports.queryJob = (idz, callback) => {
    Job.find({
        id: idz
    }, (err, ret) => {
        if (err) {
            throw err
        }
        if (callback) callback(err, ret)
    })
}
