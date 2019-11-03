
//当服务器收到get请求 / 的时候，执行
app.get('/',function(req,res){
    //在express中可以直接req.query来获取查询字符串参数
    console.log(req.query); //得到的是一个对象
    //在express中可以使用模板引擎的方式：res.render('filename'{模板对象})

    res.send('hello express');
})

//当服务器收到get请求/about的时候，执行这个函数 express().get('path',function(){})：路由器
//路由其实就是一张表：这个表里有具体的映射关系
app.get('/about',function(req,res){
    res.send('about Me,发送到前端去');
    res.write('写到前端的页面去')
    res.end('hello world')
})