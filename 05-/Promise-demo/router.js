let handler = require('./handler.js')
module.exports = (app, express) => {
    app.get('/', (req, res) => {
        handler.promiseIndex(req, res)
    })
}