var express = require("express");
const movieController = require("../controllers/movieController");
var router = express.Router();


router.get("/", movieController.getAll);

router.get('/:id', movieController.getById)

router.post('/insert', movieController.create)

module.exports = router;