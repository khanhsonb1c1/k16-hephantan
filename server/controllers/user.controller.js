const { User } = require("../models/user.model");
const redisClient = require("../redis/init.redis");

const userController = {
  // Controller để tạo người dùng mới
  createUser: async (req, res) => {
    try {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Controller để lấy thông tin của một người dùng dựa trên ID
  getUserById: async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
  },

  // Controller để cập nhật thông tin của một người dùng dựa trên ID
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Controller để xóa một người dùng dựa trên ID
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = userController;
