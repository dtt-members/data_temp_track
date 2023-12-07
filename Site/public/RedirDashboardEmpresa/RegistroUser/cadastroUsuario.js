function cadastrarU() {
  var nomeVar = input_nome.value;
  var sobrenomeVar = input_sobrenome.value;
  var emailVar = input_email.value;
  var cpfVar = input_cpf.value;
  var senhaVar = input_senha.value;
  var confirmarSenhaVar = input_confirmarSenha.value;
  var empresaVar = sessionStorage.getItem("IDEMPRESA_EMPRESA");

  // Validações das inputs
  if (nomeVar == "" ||
    sobrenomeVar == "" ||
    emailVar == "" ||
    cpfVar == "" ||
    senhaVar == "" ||
    confirmarSenhaVar == "") {

    alert(`Prencha todos os campos`);
  }
  else if (emailVar.indexOf('@') < 0 || emailVar.indexOf('.') < 0) {
    alert(`Prencha com um email valido`);
  }
  else if (cpfVar.length != 11) {
    alert(`Prencha com um CPF válido`);
  }
  else if (senhaVar.length < 8 || senhaVar.length > 14) {
    alert(`A senha deve ter entre 8 e 14 caracteres`);
  }
  else if (senhaVar != confirmarSenhaVar) {
    alert(`Senha diferentes`);
  }
  else {





    
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
        empresaServer: empresaVar,
      }),
    })
      //Aqui vai ser aquela mensagem de cadastro lateral
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          alert("funcionario cadastrado com sucesso na aplicação")

          setTimeout(() => {
            window.location.href = "";
          }, "2000");

          limparFormulario();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  }
}