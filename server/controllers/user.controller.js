// controllers/userController.js

const UserService = require('../services/userService');

const userService = new UserService();

exports.createUser = async (req, res) => {
  const userData = {
    ...req.body,
    role: "user"
  };
  try {
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserByUsername = async (req, res) => {
  const username = req.params.username;
  try {
    const user = await userService.getUserByUsername(username);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, email, password, fullName, age, address} = req.body
  const userData = {
    username, email,password, fullName, age, address
  };
  try {
    const updatedUser = await userService.updateUser(userId, userData);
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// Cập nhật phân quyền user: chỉ thay đổi trường "role"
exports.updateRoleUser = async (req, res) => {
  const userId = req.params.id;
  const { role} = req.body
  const userData = {
    role
  };
  try {
    const updatedUser = await userService.updateUser(userId, userData);
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await userService.deleteUser(userId);
    res.json(deletedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

