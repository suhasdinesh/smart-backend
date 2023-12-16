const User = require('../models/User');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

const findAllUsers = async () => {
    return await User.find();
  };
  
  const findUserById = async (id) => {
    return await User.findById(id);
  };
  
  const updateUser = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  };
  
  const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
  };
  
  module.exports = {
    createUser,
    findUserByUsername,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
  };