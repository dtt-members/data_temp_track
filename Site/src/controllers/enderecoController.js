var enderecoModel = require("../models/enderecoModel");


function cadastrarEnd(req, res) {
    var cep = req.body.cepServer;
    var numeroEnd = req.body.numeroEndServer;
    var complemento = req.body.complementoServer;

    // if (ReadableStreamDefaultController == undefined) {
    //     res.status(400).send("Seu endereco está undefined!");
    // }

    enderecoModel.cadastrarEnd(cep, numeroEnd, complemento).then(function(resposta){
        res.status(200).send("Endereco cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrarEnd
}