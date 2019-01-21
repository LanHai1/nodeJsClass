let path = require('path')
let handler = require('./handler.js')
module.exports = (app, express) => {
    app.use('/views', express.static(path.join('views')))

        .get('/', (req, res) => {
            handler.registered(req, res)
        })

        .post('/registered',(req,res)=>{
            handler.registeredPost(req,res)
        })
}