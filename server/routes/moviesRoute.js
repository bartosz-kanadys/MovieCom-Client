var express = require("express");
const movieController = require("../controllers/movieController");
var router = express.Router();


router.get("/", movieController.getAll);

router.get("/test", function(req, res, next) {
    res.send("TEST GIT");
});

module.exports = router;