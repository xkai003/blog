document.getElementById("btn").onclick = function() {
    const user = document.getElementById("user").value;
    const pwd = document.getElementById("pwd").value;
    
    const userinfo = {
        username: user,
        password: pwd,
    };
    localStorage.setItem("userinfo" ,JSON.stringify(userinfo));
    console.log(userinfo)
    alert("注册成功 ^……^ \n 即将跳转到登陆页面");
    //
    setTimeout('location.href = "login.html"' , 1000);
}