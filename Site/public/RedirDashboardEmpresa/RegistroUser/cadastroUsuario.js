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

    Swal.fire("Preencha todos os campos");
  }
  else if (emailVar.indexOf('@') < 0 || emailVar.indexOf('.') < 0) {
    Swal.fire("Preencha um email valido");
  }
  else if (cpfVar.length != 11) {
    Swal.fire("Entre com um CPF válido");
  }
  else if (senhaVar.length < 8 || senhaVar.length > 14) {
    Swal.fire("Sua senha deve ter pelo menos 8 e no maximo 14 caracteres");
  }
  else if (senhaVar != confirmarSenhaVar) {
    Swal.fire("Senhas diferentes");
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
          Swal.fire({
            position: "top-end",
            icon: "Success",
            title: "Usuario cadastrado com sucesso",
            showConfirmButton: false,
            timer: 1500
          });

          setTimeout(() => {
            window.location.href = "";
          }, "2000");

          limparFormulario();
        } else {
          Swal.fire("Erro ao criar o perfil");
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  }
}