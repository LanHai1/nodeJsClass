let mongoose = require('mongoose')
let config = require('./congig.js')

let Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/students", { useNewUrlParser: true })

let adminShema = new Schema({
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

let Admin = mongoose.model('Admin', adminShema)

// 注册用户
// callbcak(errCode) errCode:{0=失败,1=成功}
module.exports.registered = (adminObj, callback) => {
    Admin.findOne({
        name: adminObj.username
    })
        .then((data) => {
            if (data) {
                if (callback) callback(0)
                console.log(`插入失败`)
            } else {
                return new Admin({
                    name: adminObj.username,
                    age: adminObj.age,
                    job: Number(adminObj.job)
                }).save()
            }
        }).then((ret) => {
            console.log(`插入成功` + ret)
            if (callback) callback(1) 
        })
}

