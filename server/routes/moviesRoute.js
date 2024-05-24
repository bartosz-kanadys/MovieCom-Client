var express = require("express");
const movieController = require("../controllers/movieController");
var router = express.Router();

//GET - READ
router.get("/", movieController.getAll);
router.get('/id/:id', movieController.getById)
router.get('/title/:title', movieController.getByTitle)

//POST - CREATE
router.post('/insert', movieController.create)

//UPDATE
router.put('/update', movieController.update)

//DELETE

module.exports = router;