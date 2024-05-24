var express = require("express");
const movieController = require("../controllers/movieController");
const authorizationController = require("../controllers/authorizationController");
var router = express.Router();

//GET - READ
router.get("/", movieController.getAll);
router.get('/id/:id', movieController.getById)
router.get('/title/:title', movieController.getByTitle)

//POST - CREATE
router.post('/', movieController.create)

//UPDATE
router.put('/', movieController.update)

//DELETE
router.delete('/:id',
    authorizationController.authenticate,
    authorizationController.checkRole(['admin']),
    movieController.delete
)

module.exports = router;