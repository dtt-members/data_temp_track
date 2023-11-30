var empresaModel = require("../models/medidasModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        empresaModel.autenticar(email, senha)

        .then(
            function (resultadoAutenticar){
                if (resultadoAutenticar.length ==1){
                    dataCenterModel.buscarDataCenter(resultadoAutenticar[0].idEmpresa) 
                    .then((resultadoDataCenter) => {
                        if(resultadoDataCenter.length > 0 ){
                        res.json({
                            idEmpresa: resultadoAutenticar[0].idEmpresa,
                            razaoSocial: resultadoAutenticar[0].razaoSocial,
                            cnpj: resultadoAutenticar[0].cnpj,
                            foneCell: resultadoAutenticar[0].foneCell,
                            emailInst: resultadoAutenticar[0].emailInst,
                            senha: resultadoAutenticar[0].senha,
                            fkEndereco: resultadoDataCenter
                        });
                    } else{
                        res.status(204).json({ dataCenter: [] });
                    }
                })
            } else if(resultadoAutenticar.length == 0){
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de uma empresa com o mesmo login e senha!");
            }
        }
        ).catch(
            function (erro){
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
        }
    }





function cadastrarEmp(req, res) {
    var razaoSocial = req.body.razaoSocialServer;
    var cnpj = req.body.cnpjServer;
    var emailCadastro = req.body.emailCadastroServer;
    var telefoneCelular = req.body.telefoneCelularServer;
    var telefoneFixo = req.body.telefoneFixoServer;
    var senha = req.body.senhaServer;
    
    

    empresaModel.cadastrarEmp(razaoSocial, cnpj, telefoneCelular, telefoneFixo, emailCadastro, senha).then(function(resposta){
        res.status(200).send("Empresa cadastrada com sucesso");
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    autenticar,
    cadastrarEmp
}