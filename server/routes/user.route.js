// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Định nghĩa các route cho quản lý người dùng
router.get('/users', userController.getAllUsers); // Route để lấy tất cả người dùng
router.post('/users', userController.createUser);
router.get('/users/:username', userController.getUserByUsername);
router.get('/users/:email', userController.getUserByEmail);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
