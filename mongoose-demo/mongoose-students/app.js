/**
 * app.js 入门模块
 * 职责：
 *  创建服务
 *  做一些服务相关的配置
 *  模板引擎
 *  body-parser 解析表单post请求体
 *  挂载路由 app.use(router);
 *  提供静态资源服务
 */

const express = require('express');
const fs = require('fs');
const router = require('./router')
const bodyParser = require('body-parser')

var app = express();
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));

app.engine('html',require('express-art-template'));

//配置模板引擎和body-parser一定要在app.use(router)，即挂载路由之前
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())
//把路由挂在到app服务中
app.use(router);

app.listen(3000,function(){
    console.log('student-server--running 3000....');
})

module.exports = app;