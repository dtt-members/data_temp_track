var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

router.post("/cadastrarEnd", function (req, res) {
    enderecoController.cadastrarEnd(req, res);
});

module.exports = router;