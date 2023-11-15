var database = require("../database/config")


function buscarEndereco(instrucaoSql, idEmpresa) {
    instrucaoSql = `SELECT max(idEndereco) FROM endereco;`
    // instrucaoSql = `select * from endereco a where idEndereco = ${empresaId}`;
    idEmpresa = ``
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
  }
 

function cadastrarEnd( cep, numeroEnd, complemento) {
    var enviarEnd = ` INSERT INTO endereco ( CEP, NumeroEnd, complemente) VALUES
         ( '${cep}' , '${numeroEnd}' , '${complemento}');`;
    console.log("Executando a instrução SQL: \n" + enviarEnd);
    return database.executar(enviarEnd);
}

module.exports = {
    buscarEndereco,
    cadastrarEnd
};