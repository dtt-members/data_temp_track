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
        Swal.fire("Preencha todos os campos");
        //Os return servem com uma break, elas impedem da  função continuar
        return false;
    } else if (cnpjVar.length != 14) {
        Swal.fire("Entre com uma CNPJ válido");
        return false;
    } else if (emailCadastroVar.indexOf('@') < 0 || emailCadastroVar.indexOf('.') < 0) {
        Swal.fire("Seu email deve conter ao menos um @ e um .");
        return false;
    } else if (telefoneCelularVar.length != 11) {
        Swal.fire("Entre com um numero de celular válido de pelo menos 11 digitos");
        return false;
    } else if (telefoneFixoVar.length != 10) {
        Swal.fire("Entre com um Telefone fixo com pelo menos 10 digitos");
        return false;
    } else if (cepVar.length != 8) {
        Swal.fire("Entre com um CEP válido");
        return false;
    } else {
        Swal.fire("Cadastro realizado"); 
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

function entrar() {

    var mensagemLogando = document.getElementById('mensagem_logando');

    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
        alert("Mensagem de erro para todos os campos em branco")
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuario/autenticar", {
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
                sessionStorage.FK_EMPRESA = json.fkEmp;

                mensagemLogando.style.display = "flex";
                mensagemLogando.innerHTML = `Você sera redirecionado para a Dashboard`
                setTimeout(function () {
                    window.location = "../../Dashboard/Dashboard.html";
                    console.log('PASSEI POR AQUI')
                }, 3000); 

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            mensagemLogando.style.display = "flex";
            mensagemLogando.innerHTML = "Senha ou email incorreto"
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);

        
    })

    
}

