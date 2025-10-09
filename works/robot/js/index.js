// 步骤一：新建一个数组用来存放图片数据
const Arrays = [
    {
        url: './img/1.jpg', 
        title: '机器人1', 
        bgcolor: '#cbee4d'
    },
    {
        url: './img/2.jpg', 
        title: '机器人2',
        bgcolor: 'red'
    },
    {
        url: './img/3.jpg', 
        title: '机器人3',
        bgcolor: 'green',
    },
    {
        url: './img/4.jpg', 
        title: '机器人4',
        bgcolor: 'blue',
    },
]

//步骤二：获取元素
// * 获取轮播图图片
const img = document.querySelector('.image img')
// * 获取文字 p
const span = document.querySelector('.foot span')
// * 获取背景色
const FootBgcolor = document.querySelector('.foot')
// * 获取右按钮
const next = document.querySelector('.next')
// * 获取左按钮
const prev = document.querySelector('.prev')

// 步骤三：注册信号量，控制播放图片的张数
let i = 0

// 步骤四：右按钮业务
// * 注册点击事件
next.addEventListener('click', function(){
    // * 点击一次就 i++
    i++
    // * 判断条件，如果大于等于4，图片复原为零
    if(i >= Arrays.length){
        i = 0
    }
    // * 渲染img
    img.src = Arrays[i].url
    // * 渲染p
    span.innerHTML = Arrays[i].title
    // * 渲染背景颜色
    FootBgcolor.style.backgroundColor = Arrays[i].bgcolor
    // * 更换小圆点
    // --- 先移除原来的类
    document.querySelector('.indicator .active').classList.remove('active')
    // --- 再添加这个类
    document.querySelector(`.indicator li:nth-child(${i + 1})`).classList.add('active')
})

// 步骤五：左按钮业务
// * 注册点击事件
prev.addEventListener('click' , function() {
    // * 点击一次就 i--
    i--
    // * 判断条件，如果小于0，图片跳到最后一张
    if(i < 0){
        i = 3
    }
    // * 渲染img
    img.src = Arrays[i].url
    // * 渲染p
    span.innerHTML = Arrays[i].title
    // * 渲染背景颜色
    FootBgcolor.style.backgroundColor = Arrays[i].bgcolor
    // * 更换小圆点
    // --- 先移除原来的类
    document.querySelector('.indicator .active').classList.remove('active')
    // --- 再添加这个类
    document.querySelector(`.indicator li:nth-child(${i + 1})`).classList.add('active')
})

// 步骤六：自动播放
// * 注册计时器2000毫秒播放一次
let timerId = setInterval(function () {
    // 利用js的自动调用点击事件，相当于调用右按钮的点击事件
    next.click()
}, 2000)

// 步骤七：鼠标经过大盒子，停止计时器
// * 获取大盒子
const slider = document.querySelector('.box')
// * 注册事件
// mouseenter 事件会在鼠标指针进入slider元素时触发
slider.addEventListener('mouseenter', function() {
    // * 停止计时器
    clearInterval(timerId)
})

// 步骤八：鼠标离开大盒子，开启计时器
// * 注册事件
// mouseleave 事件会在鼠标指针离开slider元素时触发
slider.addEventListener('mouseleave', function() {
    // * 先停止计时器
    clearInterval(timerId)
    // * 再开启计时器
    timerId = setInterval(function () {
        // 利用js的自动调用点击事件，相当于调用右按钮的点击事件
        next.click()
    }, 2000)
})