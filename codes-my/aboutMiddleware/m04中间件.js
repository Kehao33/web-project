var express = requrie('express');
var app = express();
const fs = require('fs');

// app.get('/abc',function(req, res, next){
//     console.log('abc');
//     req.foo = 'bar';
//     next();
// })

//同一个请求所经过的中间件都是同一个请求对象和响应对象
//如上下，两个请求相同，再上一个添加了foo属性，下一个就可以调用了

// app.get('/abc', function(req, res, next) {
//     console.log(req.foo);
//     console.log('abc 2');
// })

    app.get('/', function(req, res, next) {
        fs.readFile('notexitsfile.txt', function(err,data) {
            if(err) {
                next(err); //当next(err)有错误参数的时候，他会主动去匹配错误处理中间件
                // next(err)有参数的时候，则直接往后找到带有4个参数的应用程序级别中间件
                // 当发生错误的时候，我们可以调用next传递错误对象，然后就会被全局错误处理中间件配置并处理该错误
            }
             //next();  //当next没有参数的时候，会自动匹配下一个中间件
        })
       
    })

    app.get('/', function(req, res, next) {
        console.log('root 2');
    })

    app.get('/a', function(req, res, next) {
        fs.readFile('./dasdfas.adfa',function(err, data) {
            if(err) {
                return res.status(500).send('Server error');
            }
        })
    })

//配置错误处理中间件,这里的四个参数都不能少，三个参数的中间件只认识req, res, next

app.use(function(err, req, res, next) {

})
app.listen(3000,function() {
    console.log('app is running at port 3000...');
})