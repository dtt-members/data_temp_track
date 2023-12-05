/*Function responsavel por fazer o login de empresa*/

function verificarE() {
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    /*Div que possui a mensagem para entrar na Dashboard*/
    var mensagemDashboard = document.getElementById('mensagem_logando');

    if (emailVar == "" || senhaVar == "") {
        Swal.fire("Preencha todos os campos");
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
                Swal.fire("redirecionando para a Dashboard");
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
                setTimeout(function () {
                    window.location = "../../Dashboard/DashBoardEmpresa/DashboardEmpresa.html";
                }, 3000);

            } else {

                wal.fire("Houve um erro ao tentar entrar");

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
        Swal.fire("Preencha todos os campos");
        //Os return servem com uma break, elas impedem da  função continuar
        return false;
    } else if (cnpjVar.length != 14) {
        Swal.fire("Entre com pelo menos 14 digitos de CNPJ");
        return false;
    } else if (emailCadastroVar.indexOf('@') < 0 || emailCadastroVar.indexOf('.') < 0) {
        Swal.fire("Seu email deve conter pelo menos um @ e um .");
        return false;
    } else if (telefoneCelularVar.length != 11) {
        Swal.fire("Entre com 11 digitos de celular");
        return false;
    } else if (telefoneFixoVar.length != 10) {
        Swal.fire("entre com 10 digitos de telefone");
        return false;
    } else if (cepVar.length != 8) {
        Swal.fire("Digite um CEP válido");
        return false;
    } else if (senhaVar.length < 8 || confirmarVar.length > 14) {
        Swal.fire("A senha deve conter entre 8 e 14 caracteres");
        return false;
    } else if (senhaVar != confirmarVar) {
        Swal.fire("Senhas não conferem");
        return false;
    } else {
        Swal.fire({
            position: "top-end",
            icon: "Cadastrado",
            title: "Sua empresa foi cadastrada com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });

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

    }
    return false;
}

