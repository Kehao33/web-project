var mysql = require('mysql');

//使用mysql来创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'users'
});

//连接数据库
connection.connect();

//执行查询操作使用.query（）方法来查找,表名用反引号引起来
//所有多数据库的操作都是谁在query中进行，包含了增删改查，它根据query的第一个参数来判断你要进行的具体操作

connection.query('SELECT * FROM `users`',function(error,results,fields){
    if(error) throw error;
    console.log('this solution is :' + results)
});

connection.query('INSERT INTO users VALUES(null,"admin","123456")',function(error,results,fields){
    if(error) throw error;
    console.log('insert Information:' + results);
});
//关闭连接
connection.end();