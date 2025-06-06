var express = require('express');
const userController = require('../controllers/userController');
const authorizationController = require('../controllers/authorizationController');
var router = express.Router();

router.get('/',
  authorizationController.authenticate,
  userController.getAll
);
router.get('/id/:id', userController.getById)
router.get('/login/:login', userController.getByLogin)

router.put('/', userController.update)

router.delete('/',
  authorizationController.authenticate,
  authorizationController.checkRole(['admin']),
  userController.delete
)

module.exports = router;
