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

app.engine('html',require('express-art-template')); //配置模板引擎
app.set('views',path.join(__dirname,'./views/')); //set下给你当于设置别名

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
    secret:'jake',  //配置加密字符串，他会在原有的加密基础上和这个字符串拼接起来去加密
    //目的是为了增加安全性，防止客户端恶意伪造
    resave: false,
    saveUninitialized: true  //未初始化直接保存saveUninitialized,无论你是否使用session，都默认直接给 你一把钥匙
    //当saveUninitialized：false;标志着只有在请求的时候才会给你一把钥匙

}))

//把路由挂载到app中
app.use(router);

// 配置一个处理 404 的中间件， 当前边的中间件都没有处理的时候，就由这个进入
app.use(function(req, res) {
    res.render('404.html');
})


//配置一个全局错误处理的中间件，一定要有四个参数，当之前的中间件调用next(err)的时候才会进入此中间件
app.use(function(err, req, res, next){
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
})


app.listen(3000, function(){
    console.log('port3000 running.......');
})