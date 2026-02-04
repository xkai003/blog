function sendMessage() {
  const input = document.getElementById('userInput');
  const chatBox = document.getElementById('chatBox');

  if (input.value.trim() !== "") {
    const userMsg = document.createElement('span');
    userMsg.className = 'user';
    userMsg.innerHTML = `<svg t="1770209759428" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5093"><path d="M592.896 589.141333c96.938667-34.816 166.570667-131.072 166.570667-244.053333 0-142.677333-110.933333-258.048-247.466667-258.048-136.533333 0-247.466667 115.712-247.466667 258.048 0 112.981333 69.632 208.896 166.570667 244.053333-162.816 40.96-284.672 202.069333-284.672 383.658667L877.226667 972.8C877.226667 791.210667 755.712 630.101333 592.896 589.141333L592.896 589.141333zM592.896 589.141333" p-id="5094"></path></svg>：` + input.value;
    chatBox.appendChild(userMsg);

    const botMsg = document.createElement('span');
    botMsg.className = 'bot';
    botMsg.innerHTML = `<svg t="1770214180409" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10893"><path d="M981.333333 618.666667h-106.666666v-21.333334a298.666667 298.666667 0 0 0-118.186667-244.053333l103.893333-162.986667a64 64 0 1 0-36.053333-23.04l-103.04 162.133334A416.213333 416.213333 0 0 0 512 277.333333a416.213333 416.213333 0 0 0-209.28 52.053334l-103.04-162.133334a64 64 0 1 0-36.053333 23.04l103.893333 162.986667A298.666667 298.666667 0 0 0 149.333333 597.333333v21.333334H42.666667v256h106.666666v85.333333h725.333334v-85.333333h106.666666zM85.333333 832v-170.666667h64v170.666667z m746.666667 85.333333H192V597.333333c0-192 160.64-277.333333 320-277.333333s320 85.333333 320 277.333333v320z m106.666667-85.333333h-64v-170.666667h64z" p-id="10894"></path><path d="M405.333333 661.333333m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" p-id="10895"></path><path d="M618.666667 661.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" p-id="10896"></path><path d="M661.333333 533.333333H362.666667a128 128 0 0 0 0 256h298.666666a128 128 0 0 0 0-256z m0 213.333334H362.666667a85.333333 85.333333 0 0 1 0-170.666667h298.666666a85.333333 85.333333 0 0 1 0 170.666667z" p-id="10897"></path></svg>：` + getBotReply(input.value);
    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
const works = [
  {
    label:'https://imitateboos.pages.dev/',
    look: "0",
    title:"仿BOOS直聘", 
    time:"2025.12-2025.12", 
    technology:"HTML、CSS、JavaScript、vue3、vueRouter"
  },
  {
    label:'https://xiaomi-vue.pages.dev/',
    look: "0",
    title:"仿小米商城", 
    time:"2025.06-2025.07", 
    technology:"HTML、CSS、JavaScript、vue3、vueRouter"
  },
  { 
    label:'https://hm-shopping.pages.dev/#/home',
    look: "0",
    title:"黑马购物商城", 
    time:"2025.01-2025.03", 
    technology:"HTML、CSS、JavaScript、vue3、vueRouter"
  },
  { 
    label:'https://tiktok-demo.pages.dev/',
    look: "0",
    title:"密码管理项目", 
    time:"2025.09-2025.09", 
    technology:"vue3、vueRouter、vuex、Node.js、MySQL、axios",
    api: "https://gist.githubusercontent.com/xkai003/4886740985f4d6276636b3d35c6a3744/raw/9069e4ecd9e7f605d80e54ded6427f1d6750c1e4/tiktok-data.json", 
    instructions:"测试账号是：XiaoTang；密码是：123456"
  },
  { 
    label:'https://myclassroommanagementsystem.pages.dev/',
    look: "0",
    title:"我的课堂管理系统", 
    time:"2025.03-2025.04", 
    technology:"vue3、vueRouter、vuex、Node.js、MySQL、axios",
    api: "https://gist.githubusercontent.com/xkai003/dffaa48ea67e287c8b49cb918cfa9a4b/raw/3d7241f6fa70e693a37f9e0b9b7e7b23010a3ec6/MyClassroomManagementSystem.json"
  },
  { 
    label:'./works/Upload_file/index.html',
    look: "0",
    title:"文件上传工具", 
    time:"2026-2-4", 
    technology:"该项目是一个图片上传工具，有前后端。后端暂时还没上线可以把文件下载到本地再运行，后端运行命令是：node server.js"
  },
  { 
    label:'./works/jindon/index.html',
    look: "0",
    title:"京东", 
    time:"2025-1-1", 
    technology:"HTML、CSS、JavaScript"
  },
  { 
    label:'./works/cashbook/cashbook.html',
    look: "0",
    title:"阿茂成绩单", 
    time:"2025-1-1", 
    technology:"HTML、CSS、JavaScript、vue3、vueRouter"
  },
  { 
    label:'./works/notebook/notebook.html',
    imgurl:'./img/notebook.png',
    look: "0",
    title:"小凯记事本", 
    time:"2025-1-1", 
    technology:"HTML、CSS、JavaScript、vue3、vueRouter"
  },
  { 
    label:'./works/baohuhaiyang/baohuhaiyan.html',
    imgurl:'./img/保护海洋2.jpg',
    look: "0",
    title:"保护海洋", 
    time:"2025-1-1", 
    technology:"HTML、CSS、JavaScript、vue3、vueRouter"
  },
  { 
    label:'./works/xhz/index.html',
    imgurl:'./img/xhz2.png',
    look: "0",
    title:"惜花芷", 
    time:"2025-2-8", 
    technology:"HTML、CSS、JavaScript"
  },
  { 
    label:'./works/Beijing/tianganmen.html',
    imgurl:'./img/天安门.jpg',
    look: "0",
    title:"北京", 
    time:"2025-2-8", 
    technology:"HTML、CSS、JavaScript"
  },
  { 
    label:'./works/yxqx/index.html',
    imgurl:'./img/易烊千玺.jpg',
    look: "0",
    title:"易烊千玺", 
    time:"2025-2-18", 
    technology:"HTML、CSS、JavaScript"
  },
  { 
    label:'./works/Love/Love.html',
    imgurl:'./img/love.jpg',
    look: "0",
    title:"HTML爱心", 
    time:"2023-9-10", 
    technology:"HTML、CSS、JavaScript"
  },
  { 
    label:'./works/Happy_New_Year/happy.html',
    imgurl:'./img/Happy_New_Year.jpg',
    look: "0",
    title:"HTML跨年倒计时代码", 
    time:"2023-9-10", 
    technology:"HTML、CSS、JavaScript"
  },
  { 
    label:'./works/PythonLove.py',
    imgurl:'./img/PythonLove.jpg',
    look: "0",
    title:"Python爱心", 
    time:"2023-9-10", 
    technology:"Python"
  }
];
const notes = [
  { 
      label:'./notes/vscolod_github+cloudflare/vscolod_github+cloudflare.html',
      title:"本地项目上传到github上并部署到cloudflare", 
      time:"2025.10.11", 
      technology:"vscolod、github、cloudflare"
  },
  { 
      label:'./notes/WindTerm_PM2/WindTerm_PM2.html',
      title:"使用 PM2 部署 Vue 应用指南", 
      time:"2025.07.10", 
      technology:"PM2"
  },
  { 
      label:'./notes/pm2+api/pm2+api.html',
      title:"使用PM2搭建后端api接口", 
      time:"2025.07.10", 
      technology:"PM2、MySQL" 
  },
  { 
      label:'./notes/vue_ServerLocalhost/vue_ServerLocalhost.html',
      title:"vue项目在服务器临时开启服务", 
      time:"2025.07.10", 
      technology:"PM2"
  },
  { 
      label:'./notes/vue+MySQL/vue+MySQL.html',
      title:"Vue项目连接数据库(本地)", 
      time:"2025.07.10", 
      technology:"vue、MySQL"
  },
  { 
      label:'./notes/Nginx_HostedWeb/Nginx_HostedWeb.html',
      title:"Nginx托管静态网页", 
      time:"2025.07.10", 
      technology:"Nginx"
  },
  { 
      label:'./notes/Visual_C++/Visual_C++.html',
      title:"Visual C++ 6.0 操作步骤", 
      time:"2025.07.10", 
      technology:"Visual C++ 6.0 操作步骤"
  },
  { 
      label:'./notes/eclips_JavaWeb/eclips_JavaWeb.html',
      title:"eclips创建JavaWeb项目流程", 
      time:"2025.07.10", 
      technology:"eclips创建JavaWeb项目流程"
  },
  { 
      label:'https://md-myblog.pages.dev/',
      title:"MarkDown笔记", 
      time:"2025.07.10", 
      technology:"MarkDown笔记"
  }
]

function getBotReply(msg) {
  // 智能问答环节
  if (msg.includes("你好")) {
    return "你好呀！很高兴见到你。";
  }
  if(msg.includes("这个博客里一共有几个作品")) {
    return `一共有<span style="color: red; margin: 5px">${works.length}</span>条作品`;
  }
  if (msg.includes("你会什么")) {
    return "我会的东西可多着呢^-^<br/>" +
    "📚 查作品：你只需要跟我说你要查询的作品的标题，我就可以帮你查询该作品的所有信息。<br/>" +
    "🛠 查笔记：你只需要跟我说你要查询的笔记的标题，我就可以帮你查询该作品的所有信息。<br/>"
  }

  const input = document.getElementById('userInput');
  // 匹配包含（输入框的数据）的消息，查询对应的字段
  if (msg.includes(input.value)) {
    // 查作品
    const targetWork = works.find(item => item.title === input.value);
    if (targetWork) {
      return `(查询结果如下)<br>
      <span style="color:red;">标题</span>：${targetWork.title}<br>
      <span style="color:red;">项目地址</span>：<a href="${targetWork.label}" style="text-decoration: none; color: #0077cc;">点击查看</a><br>
      <span style="color:red;">查看数量</span>：${targetWork.look}<br>
      <span style="color:red;">创建时间</span>：${targetWork.time}<br>
      <span style="color:red;">技术栈</span>：${targetWork.technology}`;
    }

    // 查笔记
    const targetNotes = notes.find(item => item.title === input.value);
    if (targetNotes) {
      return `(查询结果如下)<br>
      <span style="color:red;">标题</span>：${targetNotes.title}<br>
      <span style="color:red;">项目地址</span>：<a href="${targetNotes.label}" style="text-decoration: none; color: #0077cc;">点击查看</a><br>
      <span style="color:red;">创建时间</span>：${targetNotes.time}<br>
      <span style="color:red;">技术栈</span>：${targetNotes.technology}`;
    } 
    else {
      return "未找到对应的查询结果";
    }
  }

  // 补充默认回复（避免无匹配时返回undefined）
  return "我不太理解你的意思，可以换个问题试试～";
}

// 测试用例
console.log(getBotReply("你好")); // 输出：你好呀！很高兴见到你。
console.log(getBotReply("查询0")); // 输出：查询结果：0
console.log(getBotReply("随便说点啥")); // 输出：我不太理解你的意思，可以换个问题试试～

// 热门问答
function fast(fastword) {
  // alert(fastword)
  const input = document.getElementById('userInput');
  input.value = fastword
}
  