# Express.js Application

Một ứng dụng Express.js cơ bản đã được thiết lập.

## Cấu trúc thư mục

```
.
├── public/           # Các tệp tĩnh (CSS, JS, hình ảnh)
├── routes/           # Các route handlers
├── views/            # Các template views
├── server.js         # Tệp chính của ứng dụng
├── package.json      # Cấu hình dự án và dependencies
└── README.md         # Tài liệu này
```

## Cài đặt

1. Cài đặt các dependencies:

```bash
npm install
```

2. Chạy server ở chế độ development (với nodemon):

```bash
npm run dev
```

3. Hoặc chạy server bình thường:

```bash
npm start
```

Server sẽ chạy trên `http://localhost:3000`

## Sử dụng

### API Endpoints

- `GET /` - Trang chủ
- `GET /api/hello` - Endpoint API trả về JSON

### Thêm Routes mới

Tạo một file trong thư mục `routes/` rồi import vào `server.js`:

```javascript
const express = require("express");
const router = express.Router();

router.get("/new-route", (req, res) => {
  res.json({ message: "New route" });
});

module.exports = router;
```

Sau đó, import và sử dụng trong `server.js`:

```javascript
const newRoutes = require("./routes/newRoute");
app.use("/api", newRoutes);
```

## Biến môi trường

Tạo file `.env` để cấu hình biến môi trường (ví dụ: PORT, DATABASE_URL, ...)

```
PORT=3000
NODE_ENV=development
```

## License

ISC
