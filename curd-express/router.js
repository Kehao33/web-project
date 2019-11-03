/**
 * router.js路由模块
 *  职责：
 *      处理路由
 *       根据不同的请求方法+请求路径设置具体的处理方式
 * 
 *  模块职责要单一，不要乱写，不要模块混用。
 * 划分模块的作用就是为了增强代码的维护性和开发效率
 */


const fs = require('fs');
var Student = require('./student');

const express = require('express');
//1.创建一个路由容器
var router = express.Router();
//2.把路由都挂在到rounter路由容器中
    router.get('/students',function(req,res) {
        //fs.readFile的第二个参数可选，将读到的文件按以utf8转化成我们看得懂的字符
        //在文件中读取到的数据都是字符串。
       Student.find(function(err,students){
            if(err){
                return res.status(500).send('Server err.');
            }else {
                res.render('index.html',{
                    fruits: [
                        '苹果',
                        '香蕉',
                        '橘子'
                    ],
                    //因为用文件读取到的data数据是字符串的，所以先解析成json对象才行
                    students: students
                });
            }
        })
        
    });
    
 
    router.get('/students/new',function(req,res){
        res.render('new.html')
    })

    router.post('/students/new',function(req,res){
       //1.获取表单数据
       //2.处理
       //   将数据保存到db.json文件中用以持久化
       //3.发送响应
       //先读取出来 ，转成对象，然后往对象中push数据，然后把对象转化成字符串，然后把字符串写入文件中
      Student.save(req.body,function(err){
          if(err) {
              return res.status(500).send('Server Error..')
          }
          res.redirect('/students'); 
      })

    })

    router.get('/students/edit',function(req,res){
        //1.在客戶端的列表中处理连接问题（需要有id参数)
        //2. 获取要编辑的学生id
        //3.渲染编辑页面
        //根据id把学生信息查出来
        //使用模板引擎渲染页面
        Student.findById(parseInt(req.query.id), function(err, student){
            if(err) {
                return res.status(500).send('Server Error');
            }
            res.render('edit.html', {
                student: student
            })
        })
    })


    router.post('/students/edit',function(req,res){
        //1. 获取表单数据  req.body
        //2. 更新   Student.updataById()
        //3. 发送响应
        Student.updataById(req.body,function(err) {
            if(err) {
                return res.status(500).send('Server error');
            }
            res.redirect('/students');
        })
    })

    router.get('students/delete',function(req,res){
        //1. 获取要删除的id
        //2. 根据id执行删除操作
        //3. 根据操作结果发送响应数据
        Student.deleteById(req.query.id,function(err) {
            if(err) {
                return res.status(500).send('Server error..');
            }
            res.redirect('/students');
        })
    })

//3.把router导出
module.exports = router;


//这样的方式不适合导入到app中，即不是后包装路由
// module.exports = function(app) {
//     app.get('/',function(req,res) {
//         //fs.readFile的第二个参数可选，将读到的文件按以utf8转化成我们看得懂的字符
//         //在文件中读取到的数据都是字符串。
//         fs.readFile('./da.json','utf8',function(err,data){
//             if(err){
//                 return res.status(500).send('Server err.');
//             }else {
//                 res.render('index.html',{
//                     fruits: [
//                         '苹果',
//                         '香蕉',
//                         '橘子'
//                     ],
//                     //因为用文件读取到的data数据是字符串的，所以先解析成json对象才行
//                     students: JSON.parse(data).students
//                 });
//             }
//         })
        
//     });
    
//     app.get('/students/new',function(req,res){

//     })

//     app.get('/students/new',function(req,res){
        
//     })

//     app.get('/students/new',function(req,res){
        
//     })

//     app.get('/students/new',function(req,res){
        
//     })


//     app.get('/students/new',function(req,res){
        
//     })

//     app.get('/students/new',function(req,res){
        
//     })
// }
