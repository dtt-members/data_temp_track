var database = require("../database/config")


function cadastrarEnd(rua, cep, numeroEnd, complemento) {
    var enviarEnd = ` INSERT INTO endereco (RuaEnd, CEP, NumeroEnd, complemente) VALUES
         ('${rua}' , '${cep}' , '${numeroEnd}' , '${complemento}');`;
    console.log("Executando a instrução SQL: \n" + enviarEnd);
    return database.executar(enviarEnd);
}

module.exports = {
    cadastrarEnd
};