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
        Swal.fire({
            icon: "error",
            title: "Algo deu errado",
            text: "Preencha todos os campos",
        });
        //Os return servem com uma break, elas impedem da  função continuar
        return false;
    } else if (cnpjVar.length != 14) {
        Swal.fire({
            icon: "error",
            title: "Algo deu errado",
            text: "Entre com 14 digitos de CNPJ",
        });
        return false;
    } else if (emailCadastroVar.indexOf('@') < 0 || emailCadastroVar.indexOf('.') < 0) {
        Swal.fire({
            icon: "error",
            title: "Algo deu errado",
            text: `O email deve conter pelo menos um "@" e um "."`,
        });
        return false;
    } else if (telefoneCelularVar.length != 11) {
        Swal.fire({
            icon: "error",
            title: "Algo deu errado",
            text: "celular deve conter pelo menos 11 digitos",
        });
        return false;
    } else if (telefoneFixoVar.length != 10) {
        Swal.fire({
            icon: "error",
            title: "Algo deu errado",
            text: "O telefone deve conter 10 digitos",
        });
        return false;
    } else if (cepVar.length != 8) {
        Swal.fire({
            icon: "error",
            title: "Algo deu errado",
            text: "o CEP deve ter 8 digitos",
        });
        return false;
    } else {
        Swal.fire({
            position: "top-end",
            icon: "Sucesso!",
            title: "Empresa cadastrado com sucesso",
            showConfirmButton: false,
            timer: 1500
          });
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

                Swal.fire({
                    position: "top-end",
                    icon: "sucesso",
                    title: "Redirecionando para a tela de login",
                    showConfirmButton: false,
                    timer: 1500
                  });

                setTimeout(function () {
                    window.location = "../../Dashboard/Dashboard.html";
                    console.log('PASSEI POR AQUI')
                }, 3000);

            });

        } else {

            Swal.fire({
                icon: "error",
                title: "Não foi pissível realizar o Login",
                text: "Email e senha não coincidem",
              });
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);


    })


}

