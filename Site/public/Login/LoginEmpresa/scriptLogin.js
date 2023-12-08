/*Function responsavel por fazer o login de empresa*/

function verificarE() {
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    /*Div que possui a mensagem para entrar na Dashboard*/
    var mensagemDashboard = document.getElementById('mensagem_logando');

    if (emailVar == "" || senhaVar == "") {
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: "Preencha todos os campos",
        });
        return false;
    }
    else {

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
                });
                Swal.fire({
                    position: "top-end",
                    icon: "Empresa autenticada com sucesso",
                    title: "Redirecionando para sua tela",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(function () {
                    window.location = "../../Dashboard/DashBoardEmpresa/DashboardEmpresa.html";
                    console.log('PASSEI POR AQUI')
                }, 3000);

            } else {

                Swal.fire({
                    icon: "error",
                    title: "Não foi possível realizar seu login",
                    text: "Confira se email ou senha conferem",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });

                resposta.text().then(texto => {
                    console.error(texto);
                });
                return false;
            }

        }).catch(
            function (erro) {
                res.status(500).json(erro.sqlMessage);
            })

    }
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
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: "Preencha todos os campos",
        });
        //Os return servem com uma break, elas impedem da  função continuar
        return false;
    } else if (cnpjVar.length != 14) {
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: "CNPJ necessita 14 digitos",
        });
        return false;
    } else if (emailCadastroVar.indexOf('@') < 0 || emailCadastroVar.indexOf('.') < 0) {
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: `O email necessita ter "@" e um "." `,
        });
        return false;
    } else if (telefoneCelularVar.length != 11) {
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: "Celular necessita 11 digitos",
        });
        return false;
    } else if (telefoneFixoVar.length != 10) {
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: "Telefone necessita 10 digitos",
        });
        return false;
    } else if (cepVar.length != 8) {
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: "CEP necessita 8 digitos",
        });
        return false;
    } else if (senhaVar.length < 8 || confirmarVar.length > 14) {
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: "Sua senha deve conter entre 8 e 14 digitos",
        });
        return false;
    } else if (senhaVar != confirmarVar) {
        Swal.fire({
            icon: "error",
            title: "Não foi possível realizar seu login",
            text: "Senhas não coerentes",
        });
        return false;
    } else {
        return false;
        // usar esse ultimo else para mostrar a mensagem de cadastro realizado
        // Cadastro endereco 
    }
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
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cadastrado com sucesso!",
                showConfirmButton: false,
                timer: 1500
            });

            console.log("resposta: ", resposta)
        });


    return false;
}
