var express = require('express');
const authorizationController = require('../controllers/authorizationController');
const commentController = require('../controllers/commentController');
var router = express.Router();

router.get('/', commentController.getAll);
router.get('/login/:login', commentController.getbyUser)
router.get('/movieID/:movieID', commentController.getbyMovieId)

router.post('/', commentController.create)

router.put('/', commentController.update)

router.delete('/:id',
  authorizationController.authenticate,
  //authorizationController.checkRole(['admin']),
  commentController.delete
)

module.exports = router;
