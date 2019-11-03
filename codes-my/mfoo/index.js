var fs = require('fs');
var path = require('path');

//模块中的路径标识和文件操作中的文件路径标识不一致
//模块中的路径标识就是相对于当前文件模块，不受执行node命令所处路径的影响
//但是引入模块的时候./不能缺失

require('./b');

/**
 * 在引入模块的时候 ./a.txt相当于当前文件路径
 * 在执行node命令的时候， ./a.txt相对于执行node命令所处的终端路径
 * 这样设计不是错误的，Node就是这样设计的
 * 
 * 文件操作中，相对路径设计就是相对于执行 node 命令所处的路径
 */

 fs.readFile(path.join(__dirname,'./a.txt'),'utf8',function(err,data) {
     if(err) {
         throw err;
     }
     console.log(data);
 })