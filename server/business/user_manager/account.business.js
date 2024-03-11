const UserDAO = require("../../DAO/user.DAO");

const accountBusiness = {
  login: async (username, password) => {
    try {
      const user_data = await UserDAO.getUserByUsername(username);
      if (user_data.password == password) {
        return {
          status: true,
          message: "Loginn successfully",
        };
      } else {
        return {
          status: false,
          message: "Password fail",
        };
      }
    } catch (error) {
      return {
        status: false,
        message: error,
      };
    }
  },
  changePassword: async (user_id, oldPassword, newPassword) => {
    try {
      const user_data = await UserDAO.getUserById(user_id);

      if (user_data.password == oldPassword) {
        await UserDAO.updateUser(user_id, {
          password: newPassword
        });

        return {
          status: true,
        };
      } else {
        return {
          status: false,
          message: "Old password fail",
        };
      }
    } catch (error) {
      return {
        status: false,
        message: error,
      };
    }
  },
};

module.exports = accountBusiness;
