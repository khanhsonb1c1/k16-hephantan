const { User } = require("../models/user.model");
// const redisClient = require("../redis/init.redis");
const redis = require("redis");
// const client = redis.createClient();

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
      const client = redis.createClient();
      await client.connect();

      const userId = req.params.user_id;

      // Kiểm tra xem thông tin người dùng có trong Redis không
      const cachedUser = await client.get(userId);
      if (cachedUser) {
        console.log("Có dữ liệu từ Redis cache");
        return res.json({
          data: JSON.parse(cachedUser),
        });
      } else {
        console.log("Không có dữ liệu từ Redis cache");

        // Nếu không có trong Redis, truy xuất từ MongoDB
        const userFromDB = await User.findById(userId);
        if (!userFromDB) {
          console.log("Người dùng không tồn tại trong MongoDB");
          return res.status(404).json({ message: "User not found" });
        }

        // Lưu thông tin người dùng vào Redis để lần sau truy xuất nhanh hơn
        await client.set(userId, JSON.stringify(userFromDB));

        return res.json({
          data: userFromDB,
        });
      }
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
