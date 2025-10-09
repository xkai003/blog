document.getElementById("login").addEventListener('submit', function(event) {
    event.preventDefault();
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    if( account !=="admin"){
        alert("账号不正确");
        // 清空输入框
        this.account.value = "";
        this.password.value = "";
        return;
    };
    if( password !=="123456"){
        alert("密码不正确");
        // 清空输入框
        this.account.value = "";
        this.password.value = "";
        return;
    };
    alert("登录成功");
    setTimeout('location.href = "index.html"' , 500);
})