function excluirUser() {
  var cpfVar = input_cpf.value;

  // Validações das inputs
  if (
    cpfVar == ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Algo deu errado",
      text: "Preencha todos os campos",
    });
  }
  else if (cpfVar.length != 11) {
    Swal.fire({
      icon: "error",
      title: "Algo deu errado",
      text: "CPF inserido incorretamente",
    });
  }
  else {

    // Enviando o valor da nova input
    fetch("/usuario/excluir", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cpfServer: cpfVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          Swal.fire({
            position: "top-end",
            icon: "sucesso",
            title: "Funcionário excluido da aplicação com sucesso",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Algo deu errado",
            text: "CPF não encontrado",
          });
        }

      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
    return false;
  }
}