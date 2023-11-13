function cadastrarU(){
    var nomeVar = input_nome.value;
    var sobrenomeVar = input_sobrenome.value;
    var emailVar = input_email.value;
    var cpfVar = input_cpf.value;
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmarSenha.value;
    var empresaVar = listaEmpresas.value;
    
    menssageErro.innerHTML = ""

// Validações das inputs

  if(nomeVar == "" ||
    sobrenomeVar == "" ||
    emailVar == "" ||
    cpfVar == "" ||
    senhaVar == "" ||
    confirmarSenhaVar =="" ||
    empresaVar == "" ){
        menssageErro.innerHTML = `Prencha todos os campos`;
    }else if(emailVar.indexOf('@') < 0 || emailVar.indexOf('.') < 0){
        menssageErro.innerHTML = `Prencha com um email valido`;
    }else if(cpfVar.length != 11){
        menssageErro.innerHTML = `Prencha com um CPF válido`;
    }else if(senhaVar.length < 8 || senhaVar.length >14){
        menssageErro.innerHTML = `A senha deve ter entre 8 e 14 caracteres`;
    }else if(senhaVar != confirmarSenhaVar){
        menssageErro.innerHTML = `Senha diferentes`;
    }else{
        window.location.href = "../../../Dashboard/Dashboard.html";
    }


    
    // Enviando o valor da nova input
    fetch("/usuario/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeServer: nomeVar,
          sobrenomeServer: sobrenomeVar,
          emailServer: emailVar,
          cpfServer: cpfVar,
          senhaServer: senhaVar,
          empresaServer: empresaVar
        }),
      })
      //Aqui vai ser aquela mensagem de cadastro lateral
        .then(function (resposta) {
          console.log("resposta: ", resposta);
  
          if (resposta.ok) {
            cardErro.style.display = "block";
  
            mensagem_erro.innerHTML =
              "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
            setTimeout(() => {
                //Depois de dois segundos vai para a tela de login 
              window.location = "login.html";
            }, "2000");
  
            limparFormulario();
            finalizarAguardar();
          } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
          finalizarAguardar();
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
              listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
            });
          });
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
    }