function verificar(){
    var email_certo = 'datatemptrack@gmail.com';
    var senha_certa = '12345678';
    var usuario = input_usuario.value;
    var senha = input_senha.value;
    if(usuario.indexOf('@') < 0 || usuario.indexOf('.com') < 0){
        alert('Insira um email válido!');
    };
    // if (senha.indexOf('@') < 0 && senha.indexOf('#') < 0 && senha.indexOf('&') < 0 && senha.indexOf('*') < 0 && senha.indexOf('!') < 0 && senha.indexOf('_') < 0 && senha.indexOf('-')< 0){
    //     alert('');
    // }
    if (usuario == email_certo && senha == senha_certa){
            window.location.href ="../../Dashboard/Dashboard.html";
        } else {
            alert("Senha ou email não coincidem")
        }
}




function validarCadastro(){
    var razaoSocialVar = input_razaoSocial.value;
    var cnpjVar = input_CNPJ.value;
    var emailCadastroVar = input_emailCadastro.value;
    var telefoneCelularVar = input_telefoneCelular.value;
    var telefoneFixoVar = input_telefoneFixo.value;
    var ruaVar = input_rua.value;
    var cepVar = input_cep.value;
    var numeroEndVar = input_numeroEnd.value;
    var complementoVar = input_complemento.value;
    

    if(razaoSocialVar== "" || cnpjVar == "" || emailCadastroVar == "" || telefoneCelularVar == "" || telefoneFixoVar == "" ||
    ruaVar =="" || cepVar == "" || numeroEndVar == ""){
        messageErro.innerHTML = 'Preencha todos os campos'
    } else  if(cnpjVar.length != 14){
        messageErro.innerHTML = `Preencha com um cnpj válido`;
    }else if(emailCadastroVar.indexOf('@') < 0 || emailCadastroVar.indexOf('.')< 0){
        messageErro.innerHTML = `Preencha com email válido que contenha '@' e '.com'`;
    }else if(telefoneCelularVar.length != 11){
        messageErro.innerHTML = 'Preencha com telefone celular válido';
    }else if(telefoneFixoVar.length != 10){
        messageErro.innerHTML = 'Preencha com telefone fixo válido';
    }else if (cepVar.length != 8) {
        messageErro.innerHTML = 'Digite um CEP válido';
    }else{
             // usar esse ultimo else para mostrar a mensagem de cadastro realizado
     // Cadastro endereco 

    fetch("/endereco/cadastrarEnd", {
        method:"POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
        ruaServer: ruaVar,
        cepServer: cepVar,
        numeroEndServer: numeroEndVar,
        complementoServer: complementoVar
        })
    } )
     
  
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


    fetch("/empresa/cadastrarEmp", {
      method:"POST",
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
  } )
   

 
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
}