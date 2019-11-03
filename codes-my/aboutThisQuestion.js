var obj1 = {
    name: '张三',
    age: 18,
    sayHi: function(){
        console.log(`大家好，我叫${this.name},今年${this.age}岁了`);
    }
}
obj1.sayHi();
// 箭头函数
this.name = '李四';
this.age = 20;
// window
var obj2 = {
    name: '张三',
    age: 18,
    sayHi: () => {// => goes to
        console.log(`大家好，我叫${this.name},今年${this.age}岁了`);
    }
}
obj2.sayHi();