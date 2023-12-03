var express = require("express");
var router = express.Router();

var ambienteController = require("../controllers/ambienteController");

  router.post('/listarAmb', function (req, res){
    ambienteController.listarAmb(req, res);
  });

module.exports = router;