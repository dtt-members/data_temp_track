var database = require("../database/config");

function listarDC(idEmpresa) {

  instrucaoSql = `SELECT udc.* from  unidadeDataCenter  AS udc JOIN empresa AS e ON udc.fkEmp = e.idEmpresa JOIN 
  usuario AS s ON s.fkEmp = e.idEmpresa WHERE s.fkEmp = "${idEmpresa}" ORDER BY udc.idDataCenter DESC;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  console.log(`vbananannananannanannanana`)
  return database.executar(instrucaoSql);
}


module.exports = {
    listarDC
  }
  