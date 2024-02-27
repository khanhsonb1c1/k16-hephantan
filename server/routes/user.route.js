const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router()

// đường dẫn API gọi chi tiết user
router.get("/:user_id", userController.getUserById);

// đường dẫn tạo user
router.post("/", userController.createUser);

// gọi tất cả user
router.get("/", userController.getAllUsers);

router.delete("/:user_id", userController.deleteUser);

router.put("/:user_id", userController.updateUser);


module.exports = router