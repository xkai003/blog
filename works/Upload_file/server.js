// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;
const uploadDir = path.join(__dirname, 'uploads'); // Define the uploads directory

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension); // Customize the filename
  },
});

const upload = multer({ storage: storage });

// Middleware to serve static files (for images and your frontend)
app.use(express.static(path.join(__dirname, 'public')));  // Serve the public directory
app.use('/uploads', express.static(uploadDir)); // Serve the uploads directory

// Enable JSON parsing for request bodies
app.use(express.json());

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No image file uploaded.');
  }

  const imageUrl = `/uploads/${req.file.filename}`; // Construct the image URL
  console.log('Image uploaded:', imageUrl);
  res.status(200).json({ message: 'Image uploaded successfully!', imageUrl: imageUrl });
});

// Route to fetch the list of uploaded images
app.get('/images', (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).send('Error retrieving image list.');
    }

    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)); // Filter for image files
    const imageUrls = imageFiles.map(file => `/uploads/${file}`); // Create URLs
    res.status(200).json(imageUrls);
  });
});

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
// const uploadDir = path.join(__dirname, 'uploads');
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

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
