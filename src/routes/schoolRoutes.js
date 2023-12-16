const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const {ensureAuthenticated,checkRole} = require('../middleware/auth')
// Create a new school
router.post('/',ensureAuthenticated, schoolController.createSchool);

// Get all schools
router.get('/',ensureAuthenticated, schoolController.getAllSchools);

// Get a single school by ID
router.get('/:id',ensureAuthenticated, schoolController.getSchoolById);

// Update a school
router.put('/:id',ensureAuthenticated, schoolController.updateSchool);

// Delete a school
router.delete('/:id',ensureAuthenticated, schoolController.deleteSchool);

module.exports = router;
