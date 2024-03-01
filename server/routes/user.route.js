// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const checkRoleUser = require('../middlewares/checkRuleUser');

// Định nghĩa các route cho quản lý người dùng
// router.get('/users/admin/:user_id', checkRoleUser ,userController.getAllUsers); // Route để lấy tất cả người dùng
router.get('/users' ,userController.getAllUsers); // Route để lấy tất cả người dùng, Chỗ này đã xoá middleware vì không cần thiết
router.post('/users', userController.createUser);
router.get('/users/:username', userController.getUserByUsername);
router.get('/users/:email', userController.getUserByEmail);
router.put('/users/:id', userController.updateUser);
router.put('/users/:user_id/:id',checkRoleUser, userController.updateRoleUser); // API cập nhật quyền user, cần truyền vào :user_id là id của tài khoản có quyền admin
// và truyền vào id của user cần cập nhật
// ví dụ: http://localhost:3000/api/users/123/456 với 123 là id của tài khoản user (Mục đích để sử dụng trong middleware, kiểm tra quyền hạn), và 456 là id của tài khoản cần cập nhật
// Lưu ý phần body chỉ truyền vào giá trị : "role" (là admin hoặc user gì đó)
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
