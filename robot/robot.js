function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
  
    if (input.value.trim() !== "") {
      const userMsg = document.createElement('p');
      userMsg.className = 'user';
      userMsg.textContent = "我：" + input.value;
      chatBox.appendChild(userMsg);
  
      const botMsg = document.createElement('p');
      botMsg.className = 'bot';
      botMsg.innerHTML = "机器人：" + getBotReply(input.value);
      chatBox.appendChild(botMsg);
  
      input.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
  function getBotReply(msg) {
    if (msg.includes("你好")) return "你好呀！很高兴见到你。";
    if (msg.includes("你是谁")) return "我是你的智能机器人助手呀。";
    if (msg.includes("我是谁")) return "你的唐茂凯呀。哦对了，你还告诉我你是广州华商职业学院23级网络技术1班的学生呢。哈哈^-^";
    if (msg.includes("你真可爱")) return "哈哈，谢谢你的夸奖^-^，我觉得你也很棒。今天有什么新鲜事和我分享吗？";
    if (msg.includes("你会什么")) return "我会的东西可多着呢^-^<br/>" +
    "📚 知识问答：能为你提供科技、文化、历史等多领域的信息，解答各种问题。<br/>" +
    "🛠 生活助手：可以控制智能家居，还能设置闹钟、提醒，也能查询天气、播放音乐。<br/>" +
    "✍️ 写作辅助：总结报告、会议纪要、日程规划、社交媒体文案等方面都能帮忙。<br/>" +
    "🎨 趣味功能：可以扮演角色聊天，还能 AI 画画。例如画风景、人物等。";
    if (msg.includes("再见")) return "再见！祝你有美好的一天！";
    if (msg.includes(".")) return "第一行内容<br/>" 
    return "对不起，我还在学习中，请再试一次。";
  }
  