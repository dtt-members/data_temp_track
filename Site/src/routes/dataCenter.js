var express = require("express");
var router = express.Router();

var dataCenterController = require("../controllers/dataCenterController");

  router.get('/buscarDataCenter', function (req, res){
    dataCenterController.buscarDataCenter(req, res);
  });

module.exports = router;