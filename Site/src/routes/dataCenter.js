var express = require("express");
var router = express.Router();

var dataCenterController = require("../controllers/dataCenterController");


router.get("/:empresaId", function (req, res) {
  dataCenterController.buscarDataCenter(req, res);
});

  router.post('/listarDC', function (req, res){
    dataCenterController.listarDC(req, res);
  });

module.exports = router;