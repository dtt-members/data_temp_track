var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/cadastrarEmp", function (req, res) {
    empresaController.cadastrarEmp(req, res);
});

router.post("/autenticar", function (req, res) {
    empresaController.autenticar(req, res);
});

module.exports = router;