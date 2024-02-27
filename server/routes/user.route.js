const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router()

router.get("/:user_id", userController.getUserById);
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);


module.exports = router