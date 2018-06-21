/**
 * Created by Administrator on 2018/3/13 0013.
 */
new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (document.getElementsByTagName('center')[0]) {
            resolve("ok");
        }
    },0);
}).then(function (result) {
    let a = document.getElementsByTagName('center')[0];
    let b = a.getElementsByTagName("a");
    a.remove(b);
})
