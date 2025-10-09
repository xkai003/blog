document.getElementById("btn").onclick = function ( ) {
    //获取用户输人的用户名、邮箱地址和密码
    var username = document.getElementById("user" ).value;
    var password = document.getElementById("pwd" ).value;
    var email= document.getElementById("email" ).value;
    var repassword = document.getElementById("repwd" ). value;
    var mobile = document.getElementById("mobile" ). value;
    var birth = document.getElementById("birth" ). value;
    // //比较两次密码是否一致
    // if(password != repassword){
    //     alert("两次密码输入不一致!");
    //     return false;
    // }
    //将输入的用户名、密码和邮箱存在userInfo对象中
    var userInfo = {
        //起名：变量名
        username : username,
        password: password,
        email: email,
        repassword: repassword,
        mobile : mobile,
        birth : birth,
    };
    //使用1ocalstorage存储userInfo对象的信息,注意要将userInfo转成字符串
    localStorage.setItem("userInfo" , JSON.stringify(userInfo));
    // alert("注册成功,跳转到登录页!");
    ////注册成功后1秒跳转到登录页
    setTimeout('location.href = "login.html"' , 1000);
}