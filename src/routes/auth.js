const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {ensureAuthenticated} = require('../middleware/auth')

// User registration route
router.post('/register', userController.registerUser);

// User login route
router.post('/login', userController.loginUser);


router.get('/verify-auth',ensureAuthenticated,(req,res)=>{res.status(200).json(req.user)})


module.exports = router