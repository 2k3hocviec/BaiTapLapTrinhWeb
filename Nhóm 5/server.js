const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
let userId = 1; // Auto-increment ID for registration

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware - ghi [time] METHOD /path ra console
app.use((req, res, next) => {
  const now = new Date().toLocaleTimeString();
  console.log(`[${now}] ${req.method} ${req.path}`);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

// checkAge middleware - kiểm tra age < 18
const checkAge = (req, res, next) => {
  const age = req.query.age || req.body.age;

  if (!age) {
    return res.status(400).json({
      success: false,
      message: "Age không được bỏ trống",
    });
  }

  if (age < 18) {
    return res.status(400).json({
      success: false,
      message: "Tuổi phải từ 18 trở lên",
    });
  }

  next();
};

// GET /api/info?name=&age=
app.get("/api/info", checkAge, (req, res) => {
  const { name, age } = req.query;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name không được bỏ trống",
    });
  }

  res.json({
    success: true,
    data: {
      name,
      age,
      message: `Chào mừng ${name}, bạn ${age} tuổi`,
    },
  });
});

// POST /api/register - body: name, age, email
app.post("/api/register", checkAge, (req, res) => {
  const { name, age, email } = req.body;

  // Validate không bỏ trống
  if (!name || !age || !email) {
    return res.status(400).json({
      success: false,
      message: "Name, age, email không được bỏ trống",
    });
  }

  // Trả lại thông tin + id tự tăng
  res.json({
    success: true,
    message: "Đăng ký thành công",
    data: {
      id: userId++,
      name,
      age,
      email,
    },
  });
});

// Serve HTML cho trình duyệt
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint không tồn tại",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
