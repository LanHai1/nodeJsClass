let express = require('express')
let config = require('./config.js')
let router = require('./router.js')

let app = express()

app.engine('html',require('express-art-template'))

router(app, express)



app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`)
})