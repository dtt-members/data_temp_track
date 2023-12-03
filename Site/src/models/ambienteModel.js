var database = require("../database/config");

function listarAmb(idEmpresa, nomeDC) {

  instrucaoSql = `SELECT * FROM ambiente AS a JOIN empresa AS e ON  a.fkEmp = e.idEmpresa 
  JOIN usuario AS u ON u.fkEmp = e.idEmpresa JOIN unidadeDataCenter AS udc ON udc.fkEmp = e.idEmpresa
  WHERE a.fkEmp = '${idEmpresa}' AND udc.unidDataCenter = '${nomeDC}';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
    listarAmb
  }
  