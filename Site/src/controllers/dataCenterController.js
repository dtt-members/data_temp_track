var dataCenterModel = require("../models/dataCenterModel");


   
   function listarDC(req, res) {
    var idEmpresa = req.body.idEmpresaServer;
    dataCenterModel.listarDC(idEmpresa).then(function(resposta){
        res.status(200).send(resposta);
        console.log(`vbananannananannanannanana`)
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
   }


module.exports = {
    listarDC,
}