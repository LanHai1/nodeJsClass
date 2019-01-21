let mongoose = require('mongoose')

// 连接 MongoDB 数据库
mongoose.connect('mongodb://127.0.0.1:27017/itcast', { useNewUrlParser: true })

// 创建一个模型
// 就是在设计数据库
let Cat = mongoose.model('Student', { name: String, age: Number })

for (let i = 0; i < 10; i++) {
    // 实例化一个 Cat (最终在数据库中是 cats)
    let Kitty = new Cat({ name: '蓝' + i, age: 9 + i })

    // 持久化保存 Kitty 实例
    Kitty.save().then((err) => {
        if (err) { console.log(err) }
        console.log('meow')
        console.log('')
    })
}