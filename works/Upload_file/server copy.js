// 后端完整代码示例（app.js 或 server.js）
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// ========== 关键：配置 CORS 跨域 ==========
app.use((req, res, next) => {
  // 允许前端源访问（精确匹配你的前端地址）
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  // 允许的请求方法
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  // 允许的请求头
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // 允许携带凭证（如 cookie）
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // 处理 OPTIONS 预检请求（浏览器会先发这个请求）
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// 静态文件托管：让前端能访问上传的图片
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // 自动创建 uploads 文件夹
}
app.use('/uploads', express.static(uploadDir));

// ========== 图片列表接口（路径是 /upload，不是 /images） ==========
app.get('/upload', (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: '读取文件列表失败：' + err.message });
    }
    // 过滤图片文件，生成访问 URL
    const imageExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imageUrls = files
      .filter(file => imageExts.includes(path.extname(file).toLowerCase()))
      .map(file => `http://localhost:3000/uploads/${file}`);
    res.json(imageUrls);
  });
});

// ========== 启动服务器 ==========
app.listen(PORT, () => {
  console.log(`后端服务器运行在 http://localhost:${PORT}`);
});