var express = require('express');
var router = express.Router();

var AuthController = require('../controllers/authorizationController');
var ValidateController = require('../controllers/validateController')

router.post('/register',
    ValidateController.validateRegister,
    ValidateController.checkValidation,
    AuthController.register
)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

module.exports = router;
