/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 * 
 * callback 中的参数
 *  第一个参数是err 
 *      成功err是null
 *      错误err是错误对象
 * 第二个参数是data
 *      成功了是 数组
 *      错误了是 undefined
 */
const fs = require('fs');

var dbPath = './db.json';

 /**
  * 获取所有学生列表
  * @param {function} callback 回调函数
  */
exports.find = function(callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err);
        }
        callback(null,JSON.parse(data).students);
    })
}

/**根据id获取学生信息对象
 * @param {Number}       id    学生id
 * @param {function} callback  回调函数
 */
exports.findById = function(id,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        var ret = students.find(function (item) {
            return item.id === parseInt(id);
        })
        callback(null,ret);
    })
}

/**
 * 添加保存学生
 * @param {Object}      studetn         学生对象
 * @param {Function}    callback        回调函数
 */
exports.save = function(student,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err);
        }
        var students = JSON.parse(data).students;
        student.id = students[students.length -1 ].id + 1;
        students.push(student);
        var fileData = JSON.stringify({
            students: students
        });

        //把字符串保存到文件中
        fs.writeFile(dbPath,fileData,function(err){
            if(err) {
                return callback(err); //错误就是把错误对象传递给它
            }
            //成功就是没错，所以错误对象是null
            callback(null);
        })
    })
   
}
  /**
   * 更新学生
   */
exports.updataById = function(student,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err);
        }
        var students = JSON.parse(data).students;

        //注意，统一把id转化为数字类型
        student.id = parseInt(student.id);
        
        //要修改谁就把谁找出来
        //ES6 中的一个数组的方法：find(function(item){return boolean})
        //arr.find()需要接受一个函数作为餐宿
        //当某个遍厉项符合item.id = student.id条件的时候，find会众制遍历，同事返回遍历项
        var stu = students.find(function(item) {
            return item.id === student.id
        });

        //遍历拷贝对象
        for(var key in student) {
            stu[key] = student[key];
        }

        //把对象数据转化为字符串
        var fileData = JSON.stringify({
            students: students
        })

        //把字符串保存到文件中
        fs.writeFile(dbPath,fileData,function(err) {
            if(err) {
                //错误就把错误对象传递给回调函数
                return callback(err);
            }
            //成功，错误对象就是null
            callback(null);
        })
    })
}
   /**
    * 删除学生
    */
   exports.deleteById = function(){
       fs.readFile(daPath, 'utf8', function(err, data) {
           if(err) {
               return callback(err)
           }
           var students = JSON.parse(data).students;
           
           //findIndex 方法专门用来根据条件查找元素的下表
           var deleteId = studnets.findIndex(function(item) {
               return item.id === parseInt(id);
           })

           //根据小标从数组中删除对应的学生对象
           students.splice(deleteID,1); //删除掉数组中索引为deleteID的1个对象

           //把对象数组转化为字符串
           var fileData = JSON.stringify({
               studetns: students
           })

           //把字符串保存到文件中
           fs.writeFile(dbPath, fileData, function(err) {
               if(err) {
                   return callback(err);
               }
               callback(null);
           })
       })
    
   }