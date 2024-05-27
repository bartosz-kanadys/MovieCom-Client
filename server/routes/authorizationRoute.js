var express = require('express');
var router = express.Router();

var User = require('../models/UserModel')
var AuthController = require('../controllers/authorizationController');
const authorizationController = require('../controllers/authorizationController');

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/logout', authorizationController.logout)

module.exports = router;
