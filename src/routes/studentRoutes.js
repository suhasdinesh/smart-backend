const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { ensureAuthenticated } = require('../middleware/auth');

// Create a new student
router.post('/',ensureAuthenticated, studentController.createStudent);

// Get all students
router.get('/',ensureAuthenticated, studentController.getAllStudents);

// Get a single student by ID
router.get('/:id',ensureAuthenticated, studentController.getStudentById);

// Update a student
router.put('/:id',ensureAuthenticated, studentController.updateStudent);

// Delete a student
router.delete('/:id',ensureAuthenticated, studentController.deleteStudent);

//Get student contacts
router.get('/get-contacts/:id',ensureAuthenticated,studentController.getContacts)

module.exports = router;
