var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    //解析表单get请求体
    // 解析表单post 请求体
    //解析 cookie
    //处理session
    // 使用模板引擎
    // console.log(req.query);
    // console.log(req.body);
    // console.log(req.cookies);
    // console.log(req.session);
    
    // 解析请求地址中的get参数
    var urlObj = url.parse(req.url, true);
    req.query = urlObj.query;

    // 解析请求地址中的post参数
    req.body = {
        foo: 'bar'
    }

    // 解析 cookie
    req.cookies = {
        isLogin: true
    }

    //配置 session
    req.session = {}

    // 配置模板引擎
    res.render = function() {

    }

    //上面的过程都是为了在后边做具体业务的时候调用
})

server.listen(3000,function(){
    console.log('middleware running.......');
})