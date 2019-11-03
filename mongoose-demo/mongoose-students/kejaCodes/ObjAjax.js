//基于原生的ajax封装get方法

function get(url, callback) {
    var xhr =  new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.state == 200) {
            var data = xhr.responseText;
            callback(null, data);
        } else {
            callback(err, null)
        }
    }
}

get('data.json', function (err, data) {
    if(err) {
        console.log('读取数据失败...');
    }else {
        console.log(data);
    }
})    