let express = require('express');
let config = require('./config.js');
let router = require('./router.js');

let app = express();

// app.use()
router(app,express);
// app.get('/',function(req,res){
//     res.render()
// })

app.listen(config.port,function(){
    console.log(`http://localhost:${config.port}`)
})