let express = require('express')
let path = require('path')

let app = express()

app.engine('html',require('express-art-template'))

app.use('/views',express.static(path.join(__dirname,'views')))

app.get('/',(req,res)=>{
    res.render('index.html')
})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})
