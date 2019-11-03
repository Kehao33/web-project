var express = require('express');

//2.创建你的服务器应用程序
//也就是原来的http.createServer()
var app = express();

//公开指定目录
//只要这样做了就可以直接通过/public/xx的方式访问public下的所有资源了
//当以/public/开头的时候，去./public/目录中找到对应的资源，即公开资源
app.use('/public/',express.static('./public/'));

//此时/a/就相当于是/public/，即a是public的别名,可以通过/a/来访问public下的资源
app.use('/a/',express.static('./public'));
//当省略第一个参数（path)的时候，则可以通过省略 /static的方式访问对应的资源,即可以直接访问static目录下的资源
app.use(express.static('./static/'));


//接听接口，相当于server.listen()
app.listen(3000,function(){
    console.log('server is running at port 3000');
})
