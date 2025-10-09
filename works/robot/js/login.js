document.getElementById("btn").onclick = function () {
    var user = document.getElementById("user").value;
    var pwd = document.getElementById("pwd").value;

    // 
    var userInfo =JSON.parse(localStorage.getItem("userinfo"));

    if(user !== userInfo.username){
        document.getElementById('result').innerText = '账号错误！';
        return false
    }
    if(pwd !== userInfo.password){
        document.getElementById('result').innerText = '密码错误！';
        return false
    }
    else{
        document.getElementById('result').innerText = '登陆成功，即将跳转到首页 ^……^';
        setTimeout('location.href = "index.html"' , 1000);
    }
}