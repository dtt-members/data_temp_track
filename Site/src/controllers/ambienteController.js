var ambienteModel = require("../models/ambienteModel");


   
   function listarAmb(req, res) {
    var nomeDC = req.body.nomeDCServer;
    var idEmpresa = req.body.idEmpresaServer;
    ambienteModel.listarAmb(idEmpresa, nomeDC).then(function(resposta){
        res.status(200).send(resposta);
        console.log(`vbananannananannanannanana`)
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
   }


module.exports = {
    listarAmb,
}