var empresaModel = require("../models/empresaModel");


function cadastrarEmp(req, res) {
    var razaoSocial = req.body.razaoSocialServer;
    var cnpj = req.body.cnpjServer;
    var emailCadastro = req.body.emailCadastroServer;
    var telefoneCelular = req.body.telefoneCelularServer;
    var telefoneFixo = req.body.telefoneFixoServer;

    if (ReadableStreamDefaultController == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    }

    empresaModel.cadastrarEmp( razaoSocial, cnpj, telefoneCelular, telefoneFixo, emailCadastro).then(function(resposta){
        res.status(200).send("Empresa cadastrada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listar(req, res) {
    empresaModel.listar().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    cadastrarEmp,
    listar
}