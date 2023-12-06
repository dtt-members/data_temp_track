var database = require("../database/config");

function buscarUltimasMedidas( fkSensorGrafico) {
        var instrucaoSql = `SELECT dadoCap, unidMedida FROM sensor JOIN hist ON idSensor = fkSensor
        WHERE fkSensor= ${fkSensorGrafico} ORDER BY dataHist limit 5;`

        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql)
}
function buscarMedidasEmTempoReal(fkSensorGrafico) {

       var instrucaoSql = `SELECT dadoCap, unidMedida FROM sensor JOIN hist ON idSensor = fkSensor
       WHERE fkSensor= ${fkSensorGrafico} ORDER BY dataHist limit 1;`

        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}