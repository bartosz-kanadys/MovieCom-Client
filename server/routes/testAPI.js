var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/test", function(req, res, next) {
    res.send("TEST");
});

module.exports = router;