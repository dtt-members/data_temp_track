var database = require("../database/config")


function cadastrarEnd( cep, numeroEnd, complemento) {
    var enviarEnd = ` INSERT INTO endereco ( CEP, NumeroEnd, complemente) VALUES
         ( '${cep}' , '${numeroEnd}' , '${complemento}');`;
    console.log("Executando a instrução SQL: \n" + enviarEnd);
    return database.executar(enviarEnd);
}

module.exports = {
    cadastrarEnd
};