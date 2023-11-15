var database = require("../database/config")



function cadastrar(nome, sobrenome, email, cpf, senha) {
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, emailInst, cpf, senha) VALUES
         ('${nome}' , '${sobrenome}' , '${email}' , '${cpf}' , '${senha}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};