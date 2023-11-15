var database = require("../database/config")


function cadastrarEmp(razaoSocial, cnpj, telefoneCelular, telefoneFixo, emailCadastro, senha) {
    var enviarEmp = `
        INSERT INTO empresa (razaoSocial, cnpj, foneCell, foneFixo, emailInst, senha) VALUES
         ('${razaoSocial}' , '${cnpj}' , '${telefoneCelular}' , '${telefoneFixo}', '${emailCadastro}' , '${senha}');`;
    console.log("Executando a instrução SQL: \n" + enviarEmp);
    return database.executar(enviarEmp);
}

module.exports = {
    cadastrarEmp,

};