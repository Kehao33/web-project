const express = require('express');
var app = express();

//中间件： 处理请求的，本质就是个函数
//在express中，对中间件有几种分类：

//不关心请求路径和请求方法的中间件，即任何请求都会进入这个中间件中
// app.use(function(req,res,next) {
//     console.log('1');
//     next(); //执行下一个中间件，没有调用next（）怎会停在当前的中间件中
// })

// app.use(function(req, res, next) {
//     console.log('2');
//     next();
// })

// app.use(function(req, res, next) {
//     console.log('3');
//     res.send('发送到页面')
// })

// 以 /xxx开头的路径中间件
app.use('/root',function(req, res, next) {
    console.log(req.url); //返回的是root后边的请求路径
})

app.listen(3000,function(){
    console.log('app is running.....');
})