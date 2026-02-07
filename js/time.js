// 一进页面就执行
window.onload = function(){
    setInterval(() => {
        var dt = new Date()
        var NN = dt.getFullYear()
        var YY = dt.getMonth()+1
        var RR = dt.getDate()
        var HH = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()

        document.querySelector('#NN').innerHTML = padZero(NN)// 年
        document.querySelector('#YY').innerHTML = padZero(YY)// 月
        document.querySelector('#RR').innerHTML = padZero(RR)// 日 
        document.querySelector('#HH').innerHTML = padZero(HH)// 时
        document.querySelector('#mm').innerHTML = padZero(mm)// 分
        document.querySelector('#ss').innerHTML = padZero(ss)// 秒
    },1000)
}
function padZero(n){
    return n > 9 ? n : '0' + n
}