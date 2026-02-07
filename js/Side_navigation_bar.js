/* 打开导航栏 */
function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("mainContent").style.marginLeft = "0px";
}

/* 关闭导航栏 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
}

/* 添加事件监听，点击按钮打开导航栏 */
document.getElementById('sidebarToggle').addEventListener('click', function() {
    let sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "200px") {
        closeNav();
    } else {
        openNav();
    }
});

// 
// 一进页面就执行
// window.onload = function(){
//     this.alert("你好")
// }