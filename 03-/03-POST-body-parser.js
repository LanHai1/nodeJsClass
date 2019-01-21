var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser 中间件
// 只要加了这个配置，req 请求对象上就会多出来一个属性：body (POST请求体数据了)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})