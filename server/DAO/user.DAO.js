// userDAO.js

const { User } = require("../models/user.model");

const UserDAO = {
  getUserById: async (userId) => {
    try {
      // Tìm người dùng theo ID trong cơ sở dữ liệu
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error("Error fetching user");
    }
  },

  getUserByUsername: async (username) => {
    try {
      // Tìm người dùng theo ID trong cơ sở dữ liệu
      const user = await User.findOne({
        username: username
      });
      console.log(user, "user---");
      if (!user) {
        throw new Error("Can not find username");
      }
      return user;
    } catch (error) {
      throw new Error("Error fetching user");
    }
  },

  getAllUsers: async () => {
    try {
      // Lấy tất cả người dùng từ cơ sở dữ liệu
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error("Error fetching all users");
    }
  },

  updateUser: async (userId, userData) => {
    try {
      // Cập nhật thông tin người dùng trong cơ sở dữ liệu
      const updatedUser = await User.findByIdAndUpdate(userId, userData, {
        new: true,
      });
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return updatedUser;
    } catch (error) {
      throw new Error("Error updating user");
    }
  },

  createUser: async (userData) => {
    try {
      // Tạo mới người dùng trong cơ sở dữ liệu
      const newUser = new User(userData);
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteUser: async (userId) => {
    try {
      // Xoá người dùng từ cơ sở dữ liệu
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        throw new Error("User not found");
      }
    } catch (error) {
      throw new Error("Error deleting user");
    }
  },
};

module.exports = UserDAO;
