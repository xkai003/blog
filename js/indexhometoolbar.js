// 获取按钮
const backToTopButton = document.getElementById("indexbackToTop");
const HomeToolBar = document.getElementById('home-tool-bar')

// 监听滚动事件
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) { // 设定触发显示的滚动距离
        HomeToolBar.style.display = "block";
    } else {
        HomeToolBar.style.display = "none";
    }
});

// 绑定点击事件，平滑滚动到顶部
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,               // → 页面滚动到顶部（Y 轴的 0 位置）。
        behavior: "smooth"    // → 让滚动效果变得平缓，而不是瞬间跳跃。
    });
});