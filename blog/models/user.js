var mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true,  useUnifiedTopology: true})
var Schema = mongoose.Schema;

var userSchema = new Schema({  //定义约束条件
    email: {
        type: String,  //类型约束
        required: true  //是否必要约束
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        //注意：这里不要写Data.now()，因为这样会直接调用形成一个固定值
        //这里直接给Date.now,当你去new Model的时候，如果你没有传递create_time,
        //则，mongoose就会调用default指定的Data.now方法就是使用其返回值作为默认值
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/avatar-default.png'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum: [-1,0,1], 
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        //是否可以评论，是否可以登录使用
        //0 没哟权限限制，
        //1 不可以评论
        //2 不可以登录
        enum: [0, 1, 2],
        default: 0
    }
});

module.exports = mongoose.model('User',userSchema);
