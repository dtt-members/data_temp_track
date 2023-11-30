var express = require("express");
var router = express.Router();

var medidasController = require("../controllers/medidaController");

router.post("/ultimas", function (req, res) {
    medidasController.ultimas(req, res);
});



module.exports = router;