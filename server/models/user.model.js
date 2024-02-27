const mongoose = require("mongoose");

// Phân này là định nghĩa cho các bảng sẽ tạo, kiểu cái khung

// Định nghĩa schema cho người dùng
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Tên người dùng phải là duy nhất
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email phải là duy nhất
  },
  password: {
    type: String,
    required: true,
  },
  // Các trường thông tin khác của người dùng có thể thêm vào sau
  fullName: String,
  age: Number,
  address: String,
  // Ví dụ: định nghĩa các trường khác tùy theo yêu cầu của ứng dụng của bạn
});

// Tạo model từ schema
const User = mongoose.model("User", userSchema);

// Xuất model
module.exports = { User };
