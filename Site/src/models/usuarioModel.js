var database = require("../database/config")

function cadastrar(nome, sobrenome, email, cpf, senha, empresa) {
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, emailInst, cpf, senha, fkEmp) VALUES
         ('${nome}' , '${sobrenome}' , '${email}' , '${cpf}' , '${senha}', ${empresa});`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};