const fs = require('fs');

var dbPath = './db.json';

exports.find = function(callback) {
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err) {
            return  callback(err);
        }        
        callback(null,JSON.parse(data).students);
    })
}

exports.findById = function(id,callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if(err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        var ret = students.find(function(item) {
            return item.id === parseInt(id);
        })
    })
}

exports.save = function(student,callback) {
    fs.readFile(dbPath,'utf8',function(err,data) {
        if(err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        //在最後一個id的加1，實行現在的id更新
        student.id = students[students.length - 1].id + 1;
        students.push(student);
        //將更新后的students賦值給原來的students,然後將{students}經行字符串化
        //便於寫進文件中共
        var fileData = JSON.stringify({
            students: students
        });
    
        //把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function(err){
            if(err) {
                return callback(err); //將錯誤對象傳遞給回調函數
            }
            callback(null); //如果沒有錯誤，就將null傳遞給回調函數，表示沒有錯誤
        })
    })
}

exports.updataById = function(student,callback) {
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;

        //注意，統一把id轉化為數字類型，將文件裏讀出來的字符串轉換為int類型
        student.id = parseInt(student.id)

        //arr.find()需要接受一個函數作爲參數，
        var stu = students.find(function(item) {
            return item.id === student.id;  //如果當前的條件成立，就返回當前的值
        });

        //遍歷拷貝對象
        for(var key in student) {
            stu[key] = student[key];
        }

        //把字符串保存到文件中
        fs.writeFile(dbPath,fileData,function(err) {
            if(err) {
                return callback(err);
            }
            callback(null);
        })
    })
}

exports.deleteById = function(){
    fs.readFile(daPath,'utf8',function(err, data) {
        if(err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;

        //findIndex方法專門用來根據條件查找元素的下標
        var deleteID = students.findIndex(function(item) {
            return item.id === parseInt(id);
        })
        
        //根據下標從數組中刪除對應的學生對象
        students.splice(deleteID,1); //刪除索引為deleteID的一個成員

        //吧對象數組轉化為字符串
        var fileData = JSON.stringify({
            students: students
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
