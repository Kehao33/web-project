function fn(callback){
    //var callback = function(data){console.log(data)};
    setTimeout(function(){   //setTimeout()是一个异步操作
        var data = 'hello';
        callback(data);
    },1000)
}

//如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取异步操作的结果或者异步操作中的数据
fn(function(data){
    console.log(data);
})