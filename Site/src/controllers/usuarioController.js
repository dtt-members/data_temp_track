var usuarioModel = require("../models/usuarioModel");



function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
        res.status(500).json(erro.sqlMessage);
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
        res.status(500).json(erro.sqlMessage);
    } else {

res.status(500).json(erro.sqlMessage);
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                    res.status(500).json(erro.sqlMessage);
                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(500).json(erro.sqlMessage);
                        aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                             .then((resultadoAquarios) => {
                                if (resultadoAquarios.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        aquarios: resultadoAquarios
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                    res.status(500).json(erro.sqlMessage);
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                        res.status(500).json(erro.sqlMessage);
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                        res.status(500).json(erro.sqlMessage);
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    usuarioModel.cadastrar(nome, sobrenome, email, cpf, senha).then(function (resposta) {
        res.status(200).send("Usuario cadastrado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    cadastrar,
    autenticar
}