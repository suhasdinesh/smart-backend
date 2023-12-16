const express = require('express');
const router = express.Router();
const rechargeController = require('../controllers/rechargeController');

// Create a new recharge
router.post('/', rechargeController.createRecharge);

// Get all recharges
router.get('/', rechargeController.getAllRecharges);

// Get a single recharge by ID
router.get('/:id', rechargeController.getRechargeById);

// Update a recharge
router.put('/:id', rechargeController.updateRecharge);

// Delete a recharge
router.delete('/:id', rechargeController.deleteRecharge);

module.exports = router;
