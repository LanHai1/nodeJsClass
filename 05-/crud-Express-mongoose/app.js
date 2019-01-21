let express = require('express')
let config = require('./config.js')
let router = require('./router.js')
let bodyParser = require('body-parser')

let app = express()

// 配置
app.engine('html', (require('express-art-template')))
app.use(bodyParser.urlencoded({ extended: false }))

router(app, express)

app.get('/', (req, res) => {
    res.send(`启动成功`)
})

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`)
})