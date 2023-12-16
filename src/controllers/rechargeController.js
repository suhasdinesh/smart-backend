const rechargeService = require('../services/rechargeService');

const createRecharge = async (req, res) => {
  try {
    const recharge = await rechargeService.createRecharge(req.body);
    res.status(201).json(recharge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllRecharges = async (req, res) => {
  try {
    const recharges = await rechargeService.findAllRecharges();
    res.json(recharges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRechargeById = async (req, res) => {
  try {
    const recharge = await rechargeService.findRechargeById(req.params.id);
    if (!recharge) {
      return res.status(404).json({ message: 'Recharge not found' });
    }
    res.json(recharge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRecharge = async (req, res) => {
  try {
    const updatedRecharge = await rechargeService.updateRecharge(req.params.id, req.body);
    res.json(updatedRecharge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRecharge = async (req, res) => {
  try {
    await rechargeService.deleteRecharge(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRecharge,
  getAllRecharges,
  getRechargeById,
  updateRecharge,
  deleteRecharge
};
