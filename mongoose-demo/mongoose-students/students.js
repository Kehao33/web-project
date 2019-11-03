var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itcast',{ useNewUrlParser: true ,  useUnifiedTopology: true })
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0,1], //必须是0，1
        default: 0   //默认是0
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String
    }
})

//直接导出模型
module.exports = mongoose.model('Student',studentSchema)