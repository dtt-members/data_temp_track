var empresaModel = require("../models/empresaModel");


function cadastrarEmp(req, res) {
    var razaoSocial = req.body.razaoSocialServer;
    var cnpj = req.body.cnpjServer;
    var emailCadastro = req.body.emailCadastroServer;
    var telefoneCelular = req.body.telefoneCelularServer;
    var telefoneFixo = req.body.telefoneFixoServer;
    var senha = req.body.senhaServer;

    if (ReadableStreamDefaultController == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    }

    empresaModel.cadastrarEmp( razaoSocial, cnpj, telefoneCelular, telefoneFixo, emailCadastro, senha).then(function(resposta){
        res.status(200).send("Empresa cadastrada com sucesso");
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    cadastrarEmp,
}