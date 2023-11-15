// function verificar() {
//     var email_certo = 'datatemptrack@gmail.com';
//     var senha_certa = '12345678';
//     var usuario = input_usuario.value;
//     var senha = input_senha.value;
//     if (usuario.indexOf('@') < 0 || usuario.indexOf('.com') < 0) {
//         alert('Insira um email válido!');
//     };
//     // if (senha.indexOf('@') < 0 && senha.indexOf('#') < 0 && senha.indexOf('&') < 0 && senha.indexOf('*') < 0 && senha.indexOf('!') < 0 && senha.indexOf('_') < 0 && senha.indexOf('-')< 0){
//     //     alert('');
//     // }
//     if (usuario == email_certo && senha == senha_certa) {
//         window.location.href = "../../Dashboard/Dashboard.html";
//     } else {
//         alert("Senha ou email não coincidem")
//     }
// }




function validarCadastro() {
    var razaoSocialVar = input_razaoSocial.value;
    var cnpjVar = input_CNPJ.value;
    var emailCadastroVar = input_emailCadastro.value;
    var telefoneCelularVar = input_telefoneCelular.value;
    var telefoneFixoVar = input_telefoneFixo.value;
    var cepVar = input_cep.value;
    var numeroEndVar = input_numeroEnd.value;
    var complementoVar = input_complemento.value;


    //validações das input 
    if (razaoSocialVar == "" || cnpjVar == "" || emailCadastroVar == "" || telefoneCelularVar == "" || telefoneFixoVar == "" || cepVar == "" || numeroEndVar == "") {
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
    } else {
        messageErro.innerHTML = "";
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
            emailCadastroServer: emailCadastroVar
        })
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta)
        });


    return false;
}


function listar() {
    fetch("/empresas/listar", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((empresas) => {
                empresas.forEach((empresa) => {
                    listaEmpresas.innerHTML += `<option value='${empresa.idEmpresa}'>${empresa.razaoSocial}</option>`;
                });
            });
        })

}

function entrar() {
    aguardar();

    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
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
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.FKENDERECO = JSON.stringify(json.endereco)

                // SETEI PARA O PATHING BASEADO AONDE DEIXE O ARQUIVO, SEM O "href" PORQUE NÃO SEI SE PRECISA DO MESMO
                setTimeout(function () {
                    window.location = "../../Dashboard/DashBoardEmpresa/DashboardEmpresa.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}
