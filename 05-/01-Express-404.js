// Express 对于没有设定的请求路径，默认会返回 Cannot GET /xxx
// 如果想要定制这个404 只需要以下配置
app.use((req,res)=>{
    // 所有未处理的请求路径都会跑到这里
    res.send('404.html')
})