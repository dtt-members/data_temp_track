var usuarioModel = require("../models/usuarioModel");
var empresaModel = require("../models/empresaModel");


function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;
    var empresa = req.body.empresaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    usuarioModel.cadastrar(nome, sobrenome, email, cpf, senha, empresa).then(function (resposta) {
        res.status(200).send("Usuario cadastrado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].emailInst,
                            nome: resultadoAutenticar[0].nome,
                            fkEmp: resultadoAutenticar[0].fkEmp
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }

                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
    }

}

function excluir(req, res) {
    var cpf = req.body.cpfServer;

    if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    }

    usuarioModel.excluir(cpf).then(function (resposta) {
        res.status(200).send("Usuario excluido com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    cadastrar,
    autenticar,
    excluir
}