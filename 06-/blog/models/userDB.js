// 用户表数据库操作
let mongoose = require('mongoose')
let config = require('../config.js')
let path = require('path')
let Schema = mongoose.Schema

mongoose.connect(config.db, { useNewUrlParser: true })

let userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // mongodb 会去执行Date.now 最后的结果是这个方法的返回值 所以不要直接调用
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: { // 头像
        type: String,
        default: path.join(__dirname, '..', 'public', 'img', 'avatar-default.png')
    },
    bio: { // 介绍
        type: String,
        default: ''
    },
    gender: { // 性别
        type: Number,
        // -1 保密
        // 0 男
        // 1 女
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: { // 生日
        type: Date
    },
    status: { // 状态
        type: Number,
        // 0 没有权限限制
        // 1 不能评论
        // 2 不能登陆
        enum: [0, 1, 2],
        default: 0
    }
})

let User = mongoose.model('User', userSchema)

// 注册用户
/**
 * 根据邮箱查询数据库是否存储此用户
 * callbcak(errCode) errCode:{0=成功,1=邮箱已存在,2=昵称已存在,500=服务端错误}
 */
module.exports.addUser = (userObj, callback) => {
    // User.findOne({
    //     email: userObj.email
    // }, (err) => {
    //     if (err) {
    //         if (callback) callback(500)
    //     }
    // }).then((data) => {
    //     if (data) {
    //         if (callback) callback(1)
    //         console.log(`邮箱已存在`)
    //     }
    //     return User.findOne({
    //         nickname: userObj.nickname
    //     }, (err) => {
    //         if (err) {
    //             if (callback) callback(500)
    //         }
    //     }).then((data) => {
    //         if (data) {
    //             if (callback) callback(2)
    //             console.log(`昵称已存在`)
    //         }
    //     })
    // })



    User.findOne({
        $or: [
            { email: userObj.email },
            { nickname: userObj.nickname }
        ]
    }, (err) => {
        if (err) {
            if (callback) callback(500)
        }
    })
        .then((data) => {
            if (data) {
                if (callback) callback(1)
                console.log(`插入失败`)
            } else {
                return new User(userObj).save()
            }
        })
        .then((ret) => {
            if (callback) callback(0, ret)
            console.log(`插入成功${ret}`)
        })

}

// 登陆用户 
/**
 * callbcak(errCode) errCode:{0=成功,1=邮箱或昵称错误,500=服务端错误}
 */
module.exports.loginQuery = (userObj, callback) => {
    console.log(userObj)
    User.findOne({
        email: userObj.email,
        password: userObj.password
    }, (err) => {
        if (err) {
            if (callback) callback(500)
        }
    })
        .then((data) => {
            if (data) {
                if (callback) callback(0, data)
                console.log(`登陆成功`)
            } else {
                if (callback) callback(1)
                console.log(`邮箱或昵称错误`)
            }
        })
}