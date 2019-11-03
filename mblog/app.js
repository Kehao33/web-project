const express = require('express');
const path = require('path');

var app = new express();

//path.join(__dirname，'./index/')可以把当前的路径转化为绝对路径
app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));

//在node中，很多第三方模板引擎都能用，如ejs,jake(pug),handlebars,nunjucks

app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname,'./views/'));

app.get('/',function(req, res) {
    res.render('index.html')

    /**
     * res.render(渲染的文件名,{传递给渲染文件的键值对})
     */
})

app.listen(3000, function(){
    console.log('port3000 running.......');
})