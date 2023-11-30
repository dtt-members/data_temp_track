/*Function responsavel por fazer o login de empresa*/

function verificarE() {
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    
    /*Div que possui a mensagem para entrar na Dashboard*/
    var mensagemDashboard = document.getElementById('mensagem_logando');

    if (emailVar == "" || senhaVar == "") {
        mensagem_erro.innerHTML = "Preencha os campos";
        return false;
    }
    else {
        mensagem_erro.innerHTML = ""
        mensagemDashboard.style.display = "block"
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/empresa/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAILINST_EMPRESA = json.emailInst;
                sessionStorage.RAZAOSOCIAL_EMPRESA = json.razaoSocial;
                sessionStorage.CNPJ_EMPRESA = json.cnpj;
                sessionStorage.IDEMPRESA_EMPRESA = json.idEmpresa;
                sessionStorage.FONECELL_EMPRESA = json.foneCell;
                sessionStorage.FONEFIXO_EMPRESA = json.foneFixo;
                sessionStorage.SENHA_EMPRESA = json.senha;
                sessionStorage.DATACENTER = JSON.stringify(json.datacenter)

                setTimeout(function () {
                    window.location = "../../Dashboard/DashBoardEmpresa/DashboardEmpresa.html";
                    console.log('PASSEI POR AQUI')
                }, 3000); 
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);    
            });
            return false;
        }

    }).catch(
        function (erro) {
        res.status(500).json(erro.sqlMessage );
    })


}








function validarCadastro() {
    var razaoSocialVar = input_razaoSocial.value;
    var cnpjVar = input_CNPJ.value;
    var emailCadastroVar = input_emailCadastro.value;
    var telefoneCelularVar = input_telefoneCelular.value;
    var telefoneFixoVar = input_telefoneFixo.value;
    var cepVar = input_cep.value;
    var numeroEndVar = input_numeroEnd.value;
    var complementoVar = input_complemento.value;
    var senhaVar = input_senha.value;
    var confirmarVar = input_confirmarSenha.value;


    //validações das input 
    if (razaoSocialVar == "" || cnpjVar == "" || emailCadastroVar == "" || telefoneCelularVar == "" || telefoneFixoVar == "" || cepVar == "" || numeroEndVar == "" || senhaVar == "" || confirmarVar == "") {
        messageErro.innerHTML = 'Preencha todos os campos'
        //Os return servem com uma break, elas impedem da  função continuar
        return false;
    } else if (cnpjVar.length != 14) {
        messageErro.innerHTML = `Preencha com um cnpj válido`;
        return false;
    } else if (emailCadastroVar.indexOf('@') < 0 || emailCadastroVar.indexOf('.') < 0) {
        messageErro.innerHTML = `Preencha com email válido que contenha '@' e '.com'`;
        return false;
    } else if (telefoneCelularVar.length != 11) {
        messageErro.innerHTML = 'Preencha com telefone celular válido';
        return false;
    } else if (telefoneFixoVar.length != 10) {
        messageErro.innerHTML = 'Preencha com telefone fixo válido';
        return false;
    } else if (cepVar.length != 8) {
        messageErro.innerHTML = 'Digite um CEP válido';
        return false;
    } else if(senhaVar.length <8 || confirmarVar.length >14){
        messageErro.innerHTML = 'A senha deve ter entre 8 e 14 caracteres'
    } else if(senhaVar != confirmarVar){
        messageErro.innerHTML = 'Senha diferentes'
    } else {
        messageErro.innerHTML = "Empresa cadastrada com sucesso";
        // usar esse ultimo else para mostrar a mensagem de cadastro realizado
        // Cadastro endereco 
    }

    //Aqui eu pego as variaveis do cadastro, troco o nome da variavel e envio para a o arquivo endereco na pasta ROUTES
    // o cadastrarEnd é uma function no arquivo endereco 
    fetch("/endereco/cadastrarEnd", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            cepServer: cepVar,
            numeroEndServer: numeroEndVar,
            complementoServer: complementoVar,
        })
    })

    // Aqui faço a mesma coisa só que enviando para o arquivo empresa
    fetch("/empresa/cadastrarEmp", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            razaoSocialServer: razaoSocialVar,
            cnpjServer: cnpjVar,
            telefoneCelularServer: telefoneCelularVar,
            telefoneFixoServer: telefoneFixoVar,
            emailCadastroServer: emailCadastroVar, 
            senhaServer: senhaVar,
        })
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta)
        });


    return false;
}