var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast',{ useNewUrlParser: true ,useUnifiedTopology: true, userMongoClient:true },function(err){
    if(err){
        console.log('没有连接上');
    }else {
        console.log('连接上了');
    }
})
// 2. 设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
  username: {
    type: String,
    required: true // 必须有
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})


var User = mongoose.model('User', userSchema)


var admin = new User({
    usernmae: 'admin',
    password: '123',
    email: 'admin@admin.com'
})

admin.save(function(err, ret) {
    if(err) {
        console.log('登录失败');
    }else{
        console.log('保存成功');
        console.log(ret);
    }
})