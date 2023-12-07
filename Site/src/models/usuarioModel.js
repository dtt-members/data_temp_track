var database = require("../database/config")

function cadastrar(nome, sobrenome, email, cpf, senha, empresa) {
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, emailInst, cpf, senha, fkEmp) VALUES
         ('${nome}' , '${sobrenome}' , '${email}' , '${cpf}' , '${senha}', 1000002);`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
    select idUsuario, nome, emailInst, fkEmp from usuario where emailInst = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function excluir(cpf) {
    var instrucao = `
    delete from usuario where cpf = '${cpf}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    autenticar,
    excluir
};