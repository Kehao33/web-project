const fs = require('fs');
var Student = require('./m1students');

const express = require('express');
//1.創建一個路由容器
var router = express.Router();
//2. 把路由都挂載到router路由容器中
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server err...');
        }
        res.render('index.html', {
            fruits: [
                '蘋果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    })
})

router.get('/students/new', function(req, res) {
    res.render('new.html');
})

router.post('/students/new', function(req, res) {
    Student.save(req.body,function(err) {
        if(err) {
            return res.status(500).send('Server error..')
        }
        res.redirect('/students');
    })
})


router.get('/students/edit', function(req,res){
    Student.findById(parseInt(req.query.id),function(err,student) {
        if(err) {
            return res.status(500).send('Server error...');
        }
        res.render('edit.html',{
            students: student
        })
    })
})

router.post('/student/edit',function(req,res) {
    Student.updataById(req.body,function(err) {
        if(err) {
            return res.status(500).send('Server error...');
        }
        res.redirect('/students');
    })
})

router.get('/students/delete',function(req,res) {
    Student.deleteById(req.query.id,function(err) {
        if(err) {
            return res.status(500).send('Server error');
        }
        res.redirect('/students');
    })
})

//3.把router導出
module.exports = router;