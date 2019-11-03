var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//1.连接数据库
//指定连接的数据库不需要存在，当你插入第一条数据之后就会被创建出来的
mongoose.connect('mongodb://localhost/itcast',{ useNewUrlParser: true ,useUnifiedTopology: true ,useFindAndModify: false });

//2.设计文档结构（表结构)
//字段名称就是表结构中的属性名称
//约束的目的就是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
    username:{
        type: String,
        required: true  //require：true表示必须有这个属性值
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

//3.将文档结构发布为模型
/*
    //moongoose.model 的方法就是用来将一个构架发布为model
    第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
        mongoose会将大写名词的字符串生成小写复数 的集合名称
        例如User这个数据库名称最终将会便成为 users集合名称
    第二个参数: 构架的名字Schema（用来约束字段的）,防止出现脏数据
*/

//返回值:模型构造函数
var User = mongoose.model('User',userSchema);

//4.当我们有了模型构造函数之后，就可以对这个构造函数users集合中的数据进行操作了

//****************新增数据******************** */
// var admin = new User({
//     username: '马云',
//     password: '123456',
//     email: 'admin@jake.com'
// });

// //增加数据，保存新的数据
// admin.save(function (err, ret) {
//     if (err) {
//       console.log('保存失败')
//     } else {
//       console.log('保存成功')
//       console.log(ret)
//     }
//  })
//****************新增数据end********************* */

//****************查询数据******************** */
//利用数据库名字.find()可以找到多条语句,利用dbName.findOne()找到的是一条语句
//他们的第一个参数都是查找的条件，查找的条件是一个对象,如果利用findOne没有传递查找的条件，那么返回的默认是第一个对象
//按条件查询一个
// User.findOne({
//     username: '马云',
//     password: '123456'
// },function(err, ret){
//     if(err){
//         console.log('查询失败');
//     }else {
//         console.log(ret);
//     }
// })

//按条件查询所有
// User.find(function(err, ret){
//     if(err){
//         console.log('查询失败');
//     }else {
//         console.log(ret);
//     }
// })
// ****************查询数据end********************* */

// ****************更新数据end********************* */
User.findByIdAndUpdate('5daaa5fd2e9f001d949a7517',{
    password: 'mayun.com'
},function(err,ret) {
    if(err){
        console.log('更新失败');
    }else {
        console.log('更新成功');
        console.log(ret)
    }
})

//****************更新数据end********************* */

//****************删除数据end********************* */
// 按照条件删除所有的信息
// User.remove({
//     username: 'zs'
// },function(err,ret){
//     if(err) {
//         console.log('删除失败');
//     }else {
//         console.log('删除成功，删除的信息如下:');
//         console.log(ret);
//     }
// });
//****************删除数据end********************* */