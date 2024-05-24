var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

router.get('/', userController.getAll);
router.get('/id/:id', userController.getById)
router.get('/login/:login', userController.getByLogin)

router.put('/', userController.update)

router.delete('/', userController.delete)

module.exports = router;
