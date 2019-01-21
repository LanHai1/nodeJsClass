let express = require('express')
let config = require('./congig.js')
let router = require('./router.js')
let bodyParser = require('body-parser')

let app = express()

app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))

router(app, express)

// app.get('/', (req, res) => {
//     res.send(`启动成功`)
// })

app.listen(config.prot, () => {
    console.log(`http://localhost:${config.prot}`)
})