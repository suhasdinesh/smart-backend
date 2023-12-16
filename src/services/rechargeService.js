const Recharge = require('../models/Recharge');

const createRecharge = async (rechargeData) => {
  const recharge = new Recharge(rechargeData);
  return await recharge.save();
};

const findAllRecharges = async () => {
  return await Recharge.find();
};

const findRechargeById = async (id) => {
  return await Recharge.findById(id);
};

const updateRecharge = async (id, updateData) => {
  return await Recharge.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteRecharge = async (id) => {
  return await Recharge.findByIdAndDelete(id);
};

module.exports = {
  createRecharge,
  findAllRecharges,
  findRechargeById,
  updateRecharge,
  deleteRecharge
};
