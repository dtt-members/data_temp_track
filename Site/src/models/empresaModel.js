var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);

    var instrucao = `
        SELECT * FROM empresa WHERE emailInst = '${email}' AND senha = '${senha}';
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarEmp(razaoSocial, cnpj, telefoneCelular, telefoneFixo, emailCadastro, senha) {
    var enviarEmp = `
        INSERT INTO empresa (razaoSocial, cnpj, foneCell, foneFixo, emailInst, senha, fkEndereco) VALUES
         ('${razaoSocial}' , '${cnpj}' , '${telefoneCelular}' , '${telefoneFixo}', '${emailCadastro}' , '${senha}', (select max(idEndereco) from endereco));`;
    console.log("Executando a instrução SQL: \n" + enviarEmp);
    return database.executar(enviarEmp);
}

function buscarAquariosPorEmpresa(empresaId) {

    instrucaoSql = `select * from unidadeDataCenter where fk_empresa = ${empresaId}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    autenticar,
    cadastrarEmp,
    buscarAquariosPorEmpresa
};