//为登录按钮绑定单击事件
document.getElementById("loginButton" ).onclick = function( ){
    //获取用户输入用户名和密码
    var username = document.getElementById("userName" ).value;
    var password = document.getElementById("pwd" ).value;
    //获取本地存储信息并转换为JSON对象
    var userInfo =JSON.parse(localStorage.getItem("userInfo" ));
        if(!userInfo){
            //如果没有存储信息,则跳转到注册页面
            alert("请先注册信息!");
            location.href = "register.html";
            return true;
        }else{
            //如果有存储信息,则比较用户名和密码是否正确
            //判断用户输人的信息与存储信息是否一致
            if (username != userInfo.username){
                alert("你输入的用户名有误!");
                return false;
            }
            if(password != userInfo.password){
                alert("你输入的密码有误!");
                return false;
            }
        }
        //获取 sessionStorage. 注意，如果没有登陆，返回的null是字符串，需要使用JAON.parse()转成对象比较
        var session = JSON.parse(sessionStorage.getItem("userInfo"));
        if(session != null && session) {
            alert(userInfo.username + "已登录!");
            location.href = "index.html";
        }else{
            //2.用户还未登录
            //保存该账号的登录状态.注意,存储时要使用字符串
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
            //傖斲粿純堕腼競鐢鐨抒羿朵贗ỏī逊到主页
            location.href = "index.html" ;
        }
    };