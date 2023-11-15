var database = require("../database/config");

function buscarDataCenter(idEmpresa) {

  instrucaoSql = `select * from unidadeDataCenter a where fkEmp = ${idEmpresa}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
    buscarDataCenter
  }
  