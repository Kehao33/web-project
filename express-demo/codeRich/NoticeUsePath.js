const fs = require('fs');

//没有同步标志的文件操作的API都是异步的。
//文件操作中的相对路径可以省略 ./(代表的是当前路径)
//在文件操作的相对路径中
//      ./data、a.txt 相对于当前目录
//      data/a.txt    相对于当前路径（./省略写了）
//      /data/a.txt   绝对路径，当提前文件模块所处磁盘根目录
//      C:/xx/xx...   绝对路径
fs.readFile('data/a.txt',function(err,data){
    if(err){
        return console.log('读取失败');
    }
    console.log('读取的数据是:'+ data.toString());
})

//在模块加在中，向对路径中的 ./ 不能省略
//如果省略掉了./会报错 Error:Cannot find module 'data/foo.js';
// requrir('data/foo.js');

fs.readFile('/data/a.txt',function(err,data){
    if(err){
        console.log(err);
        return console.log('/代表的是目前文件所在的根目录，如path: C:\\data\\a.txt');
    
    }
    consle.log(data.toString());

});

//在加载模块的时候,/data/foo.js也是从磁盘根目录开始找
require('/data/foo.js');

//在加载当前模块的时候，一定要加 ./
require('./data/foo.js');