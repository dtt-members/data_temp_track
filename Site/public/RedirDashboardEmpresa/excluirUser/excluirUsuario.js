function excluirUser() {
  var cpfVar = input_cpf.value;

  // Validações das inputs
  if (
    cpfVar == ""
  ) {
    alert(`Prencha todos os campos`);
  }
  else if (cpfVar.length != 11) {
    alert(`Prencha com um CPF válido`);
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
          alert("funcionario excluido da aplicação com sucesso!")

        } else {
        alert("Houve um erro ao excluir funcionario, tenha certeza que os campos são correspondentes");
        }
        
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  }
}