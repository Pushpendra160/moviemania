const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

// router object

const router = express.Router();

//routes
// post routes for login

router.post('/login', loginController)


// post routes for register

router.post('/register', registerController)

module.exports = router;