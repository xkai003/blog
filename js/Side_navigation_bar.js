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

// 作品下拉
document.getElementById('worksbtn').onclick = function() {
    const workstownav = document.getElementById('workstownav');
    const jt = document.getElementById('jt_works');
    const currentDisplay = window.getComputedStyle(workstownav).display;

    if (currentDisplay === "none") {
        workstownav.style.display = "block";
        workstownav.style.transform = "translate(0%, 0%)"
        jt.style.transform = "rotate(90deg)";
    } else {
        workstownav.style.display = "none";
        jt.style.transform = "rotate(0deg)";
    }
};

// 笔记下拉
document.getElementById('notesbtn').onclick = function() {
    const townav = document.getElementById('townav');
    const jt = document.getElementById('jt_note');
    const currentDisplay = window.getComputedStyle(townav).display;

    if (currentDisplay === "none") {
        townav.style.display = "block";
        townav.style.transform = "translate(0%, 0%)"
        jt.style.transform = "rotate(90deg)";
    } else {
        townav.style.display = "none";
        jt.style.transform = "rotate(0deg)";
    }
};



