// 主应用文件

// 路由
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/students');
const dormitoryRoutes = require('./routes/dormitories');
const allocationRoutes = require('./routes/allocations');
const hygieneRoutes = require('./routes/hygiene');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 5000;

// 连接MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use('/api/students', studentRoutes);
app.use('/api/dormitories', dormitoryRoutes);
app.use('/api/allocations', allocationRoutes);
app.use('/api/hygiene', hygieneRoutes);

// 启动服务器
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

