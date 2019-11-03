const fs = require('fs');

/**
 * 以下的三个方法不一定是顺序执行的，因为fs.readFile是异步操作函数
 * 异步操作是不能决定他的顺序的
 */

// fs.readFile('./data/a.txt', function (err, data) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data.toString());
//     }
// })

// fs.readFile('./data/b.txt', function (err, data) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data.toString());
//     }
// })

// fs.readFile('./data/c.txt', function (err, data) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data.toString());
//     }
// })

/**
 * 要保证如上的三个异步函数顺序执行，需要用到嵌套
 */


fs.readFile('./data/a.txt', function (err, data) {
    if (err) {
        throw err;
    } else {
        console.log(data.toString());

        fs.readFile('./data/a.txt', function (err, data) {
            if (err) {
                throw err;
            } else {
                console.log(data.toString());
                fs.readFile('./data/c.txt', function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        console.log(data.toString());
                    }
                })

            }
        })

    }
})