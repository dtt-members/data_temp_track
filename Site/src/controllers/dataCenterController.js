var batalhaModel = require("../models/batalhaModel");


function buscarBatalha(req, res) {
    var pesquisaBatalha = req.body.pesquisaBatalhaServer;
    if (ReadableStreamDefaultController == undefined) {
        res.status(400).send("Não tem batalhas está undefined!");
    }

    batalhaModel.buscarBatalha(pesquisaBatalha).then(function(resposta){
        res.status(200).send(resposta);
       
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
   }



   function listarB(req, res) {
    batalhaModel.listarB().then(function (resultado2) {
           if (resultado2.length > 0) {
               res.status(200).json(resultado2);
           } else {
               res.status(204).send("Nenhum resultado encontrado!")
           }
       }).catch(function (erro) {
           console.log(erro);
           console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
           res.status(500).json(erro.sqlMessage);
       });
   }



module.exports = {
    autenticarB,
    cadastrarB,
    buscarBatalha,
    listarB,
    buscarTodosBatalha
}