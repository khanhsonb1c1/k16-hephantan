// services/userService.js

const { User } = require('../models/user.model');

class UserService {
  async createUser(userData) {
    try {
      const newUser = new User(userData);
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  async getUserByUsername(username) {
    try {
      const user = await User.findOne({ username });
      return user;
    } catch (error) {
      throw new Error('Error fetching user');
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      throw new Error('Error fetching user');
    }
  }
// Cập nhật User và phân quyền user 
  async updateUser(userId, userData) {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
      if (!updatedUser) {
        throw new Error('User not found');
      }
      return updatedUser;
    } catch (error) {
      throw new Error('Error updating user');
    }
  }

  async deleteUser(userId) {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        throw new Error('User not found');
      }
      return deletedUser;
    } catch (error) {
      throw new Error('Error deleting user');
    }
  }


  async getAllUsers() {
    try {
      // Lấy tất cả người dùng từ cơ sở dữ liệu
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  }

}

module.exports = UserService;
