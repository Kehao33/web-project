const express = require('express');
const path = require('path');
var router = require('./router');
const bodyParser = require('body-parser');
var session = require('express-session');

var app = new express();

//path.join(__dirname，'./index/')可以把当前的路径转化为绝对路径
app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));

//在node中，很多第三方模板引擎都能用，如ejs,jake(pug),handlebars,nunjucks

app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname,'./views/'));

//配置解析表单POST请求体插件body-parser ,要在把路由挂载到app之前
app.use(bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());

/**
 * 在express这个框架中，默认不支持Session和Cookie
 * 但是express-session这个第三方中间件可以解决使用Session的情况
 * 1. npm install express-session
 * 2. 配置（一定要在路由挂载到app以前）
 * 3. 使用
 *      当把这个插件配置好以后，我们就可以通过req.session来添加属性和访问属性了
 *      添加Session属性并设值  req.session.attr = attrValue
 *      访问session数据： req.session.attr
 */
app.use(session({
    secret:'keyboard',
    resave: false,
    saveUninitialized: true
}))

//把路由挂载到app中
app.use(router);


app.listen(3001, function(){
    console.log('port3001 running.......');
})