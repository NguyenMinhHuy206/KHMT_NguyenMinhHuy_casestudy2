
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// API kiểm tra server
app.get('/', (req, res) => {
  res.json({
    message: 'TaskManager API running successfully'
  });
});

// API lấy danh sách công việc
app.get('/tasks', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Hoc Node.js',
      completed: false
    },
    {
      id: 2,
      title: 'Hoc Flutter',
      completed: true
    }
  ]);
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
