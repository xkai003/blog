function $(elementId){
    return document.getElementById(elementId);
      }
  /*用户名验证*/
  function checkUser(){
      var user=$("user").value;
      var userId=$("user_prompt");
      userId.innerHTML="";
      if(user.length<3 || user.length>16)
      {
          userId.innerHTML="请输入3-16位用户名";
          return false;
      }
      for(var i=0;i<user.length;i++){
          if(!isNaN(user.charAt(i))){
              userId.innerHTML="用户名中不能包含数字";
              return false;
          }
      }
      userId.innerHTML="<img src='./img/register/ok.png'/>";
      return true;
  }
  /*密码验证*/	
  function checkPwd(){
    var pwd=$("pwd").value;
    var pwdId=$("pwd_prompt");
     pwdId.innerHTML="";	
    if(pwd.length<4 || pwd.length>10)
    {
        pwdId.innerHTML="密码长度在4-10之间";
        return false;
    }    
        return true;
  }	
  function checkRepwd(){
    var repwd=$("repwd").value;
    var pwd=$("pwd").value;
    var repwdId=$("repwd_prompt");
     repwdId.innerHTML="";
     pwdBoolean=checkPwd();
     console.log(pwdBoolean);
      if(!pwdBoolean){
          repwdId.innerHTML="请先输入正确密码";
          return false;
      }
      if(pwd!=repwd){
         repwdId.innerHTML="<img src='./img/register/error.png'/>两次输入的密码不一致";
           return false;
        }       
      repwdId.innerHTML="<img src='./img/register/ok.png'/>";
        return true;
      }
  /*验证邮箱*/
  function checkEmail(){
    var email=$("email").value;
    var email_prompt=$("email_prompt");
    email_prompt.innerHTML="";
    var index=email.indexOf("@",1);
    if(index==-1){
        email_prompt.innerHTML="<img src='./img/register/error.png'/>输入的邮箱格式中应包含@符号";
      return false;	
    }
    if(email.indexOf(".",index)==-1){
        email_prompt.innerHTML="<img src='./img/register/error.png'/>输入的邮箱格式中应包含.符号且在@符号后面";
      return false;
    }
          email_prompt.innerHTML="<img src='./img/register/ok.png'/>";
        return true;
  }
  /*验证手机号码*/
  function checkMobile(){
      var mobile=$("mobile").value;
      var mobileId=$("mobile_prompt");
      mobileId.innerHTML="";
      if(mobile.charAt(0)!=1)
      {
          mobileId.innerHTML="<img src='./img/register/error.png'/>手机号开始位应该为1";
          return false;
      }
      if(mobile.length!=11)
      {
          mobileId.innerHTML="<img src='./img/register/error.png'/>手机号长度有误！";
          return false;
      }
      for(var i=0;i<mobile.length;i++){
          if(isNaN(mobile.charAt(i)))
          {
              mobileId.innerHTML="<img src='./img/register/error.png'/>手机号码不能包含字符";
              return false;
          }
      }
      mobileId.innerHTML="<img src='./img/register/ok.png'/>";
          return true;
      }
  /*生日验证*/
  function checkBirth(){
      var birth=$("birth").value;
      var birthId=$("birth_prompt");
      birthId.innerHTML="";
      if(birth.length!=10 || birth.charAt(4)!="-" || birth.charAt(7)!="-"){
          birthId.innerHTML="<img src='./img/register/error.png'/>出生日期输入格式不正确";
          return false;
      }
      var birthdays=birth.split("-");
      year=parseInt(birthdays[0],10);
      month=parseInt(birthdays[1],10);
      day=parseInt(birthdays[2],10);
      var now=new Date();
      nowYear=now.getFullYear();
      if(isNaN(year) || isNaN(month) || isNaN(day)){
          birthId.innerHTML="<img src='./img/register/error.png'/>出生日期不能包含字符";
          return false;
      }
      if(year<1900 || year>nowYear)
      {
          birthId.innerHTML="<img src='./img/register/error.png'/>出生年份输入有误";
          return false;
      }
      if(month<=0 || month>12)
      {
          birthId.innerHTML="<img src='./img/register/error.png'/>出生月份输入有误";
          return false;
      }
      if(day<=0 || day>31)
      {
          birthId.innerHTML="<img src='./img/register/error.png'/>出生日期输入有误";
          return false;
      }
      birthId.innerHTML="<img src='./img/register/ok.png'/>";
          return true;
      }
    //定义一个验证所有内容的函数
    function checkAll()
    {
        if(checkUser()&&checkPwd()&&checkRepwd()&&checkEmail()&&checkMobile()&&checkBirth())
        {
            //所有函数返回true时提交表单
            alert("提交成功！即将跳转到登陆页面。");
            return true;
            
        }
        else
        {
            alert("提交失败！请根据提示并更正信息后再提交。")
            return false;
            
        }
    }
  