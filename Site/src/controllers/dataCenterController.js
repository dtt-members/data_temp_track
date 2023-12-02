var dataCenterModel = require("../models/dataCenterModel");


   
   function listarDC(req, res) {
    var idEmpresa = req.body.idEmpresaServer;
    if (ReadableStreamDefaultController == undefined) {
        res.status(400).send("Data centers está undefined");
    }

    dataCenterModel.listarDC(idEmpresa).then(function(resposta){
        res.status(200).send(resposta);
       
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
   }


module.exports = {
    listarDC,
}