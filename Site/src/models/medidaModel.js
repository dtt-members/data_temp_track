var database = require("../database/config");

function buscarUltimasMedidas(idAmb) {
        var instrucaoSql = `       SELECT h.dataHist, h.dadoCap, s.tipoSensor, s.unidMedida FROM
        unidadedatacenter as dt JOIN ambiente as a ON a.fkDC = dt.idDataCenter 
        JOIN sensor as s  ON s.fkAmb = a.idAmb JOIN hist as h ON h.fkSensor = s.idSensor
        WHERE dt.fkEmp = ${idAmb} limit 6;`

        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        
 
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql)
}
function buscarMedidasEmTempoReal(idAmb) {
       var instrucaoSql = `
       SELECT h.dataHist, h.dadoCap, s.tipoSensor, s.unidMedida FROM
       unidadedatacenter as dt JOIN ambiente as a ON a.fkDC = dt.idDataCenter 
       JOIN sensor as s  ON s.fkAmb = a.idAmb JOIN hist as h ON h.fkSensor = s.idSensor
       WHERE dt.fkEmp = ${idAmb} limit 3;`

        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}