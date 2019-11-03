const fs = require('fs');

//在ES6中新增了一个API Promise，Promise是一个构造函数

//创建Promise容器
// console.log(1);
//1.给别人一个承诺 Ipromise you
// Promise容器一旦 创建，就开始执行里边的代码
var p1 = new Promise(function(resolve, reject){
    // console.log(2);
    fs.readFile('./data/a.txt','utf8',function(err,data){
        if(err){
            //失败了，承诺容器中的任务失败了
            // console.log(err);
            //如果出错了，就把容器的Pending状态改为 Rejected
            //调用了reject就相当于调用了then方法的第二个参数函数
            reject(err);
        }else {
            //承诺容器中的任务成功了
            // console.log(3);
            // console.log(data);
            //如果容器中的任务成功了，就把Pending状态改为成功Resolved
            //调用resolve就是相当于调用了then方法的第一个参数函数
            resolve(data);
        }
    })
})
// console.log(4);

var p2 = new Promise(function(resolve, reject){
    fs.readFile('./data/b.txt','utf8',function(err,data){
        if(err){
            reject(err);
        }else {
            resolve(data);
        }
    })
})

var p3 = new Promise(function(resolve, reject){
    fs.readFile('./data/c.txt','utf8',function(err,data){
        if(err){
            reject(err);
        }else {
            resolve(data);
        }
    })
})
//以上的结果是1,2,4,3  因为Promise本身不是异步的，里边的操作是异步的

//p1就是那个承诺
//当p1成功了，然后（then）做指定的操作
//then(resolve,reject)方法中接受的第一个函数函数就是容器中的resolve方法，第二个就是reject方法
p1
    .then(function(data) {
        console.log(data);
        //当前函数中return的结构就可以在后边的then中function接收到，
        //当return number 的时候，后边就接收到123
        //当return String 的时候，后边接收到的就是 String
        //当没有return 的时候，后边收到undefined
        //当return一个Promise对象的时候，后续then中的方法的第一个参数会当做promise对象的resolve

        return p2;
    },function(err){
        console.log('读取文件失败: ',err);
    })
    .then(function (data) {
        console.log(data);
        return p3;
    })
    .then(function(data){
        console.log(data);
    })
