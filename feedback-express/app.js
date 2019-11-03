const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var comments = [
    {
      name: '张三',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三2',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三3',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三4',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三5',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    }
  ]

app.use('/public',express.static('./public'));

app.engine('html',require('express-art-template'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

app.get('/',function(req,res){
    // res.send('/page');
    res.render('index.html',{comments:comments});
});

app.get('/admin',function(req,res){
    // res.send('/post page')
    res.render('admin/index.html',{
        title: '中国引擎'
    });
});
app.get('/post',function(req,res){
  res.render('post.html');
})
//当以post请求 /post的时候，执行指定的处理函数
//这样可以利用不同的请求方法让一个请求路径多次使用
app.post('/post',function(req,res){
   //1.获取表单post请求体数据
   //2.处理
   //3.发送响应

    // console.log(req.body);
    var comment = req.body;
    comment.dataTime = '2017-12-15 10:58:51';
    comments.unshift(comment);
});

// app.get('/pinglun',function(req,res){
//     // console.log(req.query);
//     var comment = req.query;
//     comment.dateTime = '2019-11-5 10:58:51';
//     comments.unshift(comment);
//     res.redirect('/');
// })

app.listen(3000,function(){
    console.log('running....');
})