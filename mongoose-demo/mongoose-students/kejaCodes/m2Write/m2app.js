const express = require('express');
const fs = require('fs');
const router = require('./router');
const bodyParser = require('body-parser');

var app = express();
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public'));

app.engine('html', require('express-art-template'));

//配置模板引擎和body-parser一定要在app.use(router)，即挂在路由之前
app.use(bodyParser.urlencoded( {extened:false }));
app.use(bodyParse.json());

//把路由挂在到app服務中
app.use(router);

app.listen(3000,function(){
    console.log('running 3000.....');
})