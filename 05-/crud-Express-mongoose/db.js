let mongoose = require('mongoose')

let Schema = mongoose.Schema

// 连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/students', { useNewUrlParser: true })

// 设计文档结构
let studentSchema = new Schema({
    name: {
        type: String,
        required: true //必填
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1], // 0 或 1
        default: 0 // 默认0
    },
    hobbies: {
        type: String
    }
})

// 将文档结构发布为模型
let User = mongoose.model('User', studentSchema)

// 增
module.exports.add = (userData, callback) => {
    if (userData) {
        let user = new User({
            name: userData.name,
            age: userData.age,
            gender: userData.gender,
            hobbies: userData.hobbies
        })

        // 将数据持久化存储到数据库中
        user.save((err, ret) => {
            if (err) {
                console.log(`存储失败${err}`)
            } else {
                console.log(`存储成功${ret}`)
            }
        })

        if (callback) callback()
    } else {
        console.log(`未接收到数据`)
    }
}

// 查 (all)
module.exports.query = (callback) => {
    User.find((err, ret) => {
        if (err) console.log(err)
        if (callback) callback(ret)
    })
}

// 查 (one)
module.exports.queryId = (id, callback) => {
    User.findOne({
        _id: id
    },(err,ret)=>{
        if(err) console.log(err)
        if(callback) callback(err,ret)
    })
}

// 改
module.exports.update = (id,userData,callback)=>{
    User.findByIdAndUpdate(id,{
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
        hobbies: userData.hobbies
    },(err)=>{
        if(err) console.log(err)
        if(callback) callback(err)
    })
}

// 删
module.exports.delete = (id,callback)=>{
    User.remove({
        _id: id
    },(err)=>{
        if(err) console.log(err)
        if(callback) callback(err)
    })
}