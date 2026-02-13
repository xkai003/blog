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

document.getElementById('btn').onclick = function() {
            const townav = document.getElementById('twonav');
            const jt = document.getElementById('jt');
        
            // 关键：用 getComputedStyle 获取实际生效的样式（不管是行内还是CSS表）
            const currentDisplay = window.getComputedStyle(townav).display;
    
            if (currentDisplay === "none") {
                // 显示元素
                townav.style.display = "block";
                townav.style.transform = "translate(0%, 0%)"
                // 给箭头添加动画效果
                jt.style.transform = "rotate(90deg)";
            } else {
                // 隐藏元素
                townav.style.display = "none";
                // 给箭头添加动画效果
                jt.style.transform = "rotate(0deg)";
            }
        };

// 
// 一进页面就执行
// window.onload = function(){
//     this.alert("你好")
// }