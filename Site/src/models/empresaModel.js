var database = require("../database/config")


function cadastrarEmp(razaoSocial, cnpj, telefoneCelular, telefoneFixo, emailCadastro) {
    var enviarEmp = `
        INSERT INTO empresa (razaoSocial, cnpj, foneCell, foneFixo, emailInst) VALUES
         ('${razaoSocial}' , '${cnpj}' , '${telefoneCelular}' , '${telefoneFixo}', '${emailCadastro}');`;
    console.log("Executando a instrução SQL: \n" + enviarEmp);
    return database.executar(enviarEmp);
}

function listar() {
    var query = `select * from empresa`;
  
    return database.executar(query);
  }

module.exports = {
    cadastrarEmp,
    listar

};