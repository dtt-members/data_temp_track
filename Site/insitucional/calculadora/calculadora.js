
  var nomeCalculadora = "";
  var empresa = "";
  var qtdEstantes = "";
  var rackPorEstante = "";
  var medidaRack = "";
  var numServidores = "";
  var area = "";
  var rolarTelaCalculadora = document.getElementById('div_history')


  function functionNome() {
    nomeCalculadora = input_nome_calculadora.value;
    if (nomeCalculadora == "") {
      div_history.innerHTML += `<div class="botMessage">Por favor digite seu nome </div>`;
      rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
    } else {
      div_history.innerHTML += `
<div class="userMessage"> ${nomeCalculadora}</div>`
      div_history.innerHTML += `<div class="botMessage" id="divSaudacao">Olá ${nomeCalculadora}! Agora me diga para qual empresa você trabalha?
</div>`
      div_footer.innerHTML = `
<input type="text" id="input_empresa" class="input_message" placeholder="Digite aqui" >
<button class="btnEnviar" class="input_message" id="btn_enviar" onclick="functionEmpresa()">Enviar</button>
<button class="btnVoltar" class="input_message" id="btn_voltar" onclick="voltarNome()">Voltar </button>`;
      rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
    }
  }


  function voltarNome() {
    div_history.innerHTML += `<div class="userMessage">Voltar</div>
<div class="botMessage">
Qual é o seu nome?
</div>`
    div_footer.innerHTML = ` <input type="text" id="input_nome_calculadora" class="input_message" placeholder="Digite aqui">
<button class="btnEnviar" class="input_message" id="btn_enviar" onclick="functionNome()">Enviar</button>`

    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }


  function functionEmpresa() {
    empresa = input_empresa.value;
    if (empresa == "") {
      div_history.innerHTML += `<div class="botMessage">Por favor digite o nome da empresa </div>`;
      rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
    } else {
      div_history.innerHTML += `<div class="userMessage">${empresa} </div>
<div class="botMessage"> Que legal, o(a) ${empresa} deve ser sensacional!</div>
<div class="botMessage">Mas vamos voltar a sua simulação<br>
Quantas estantes o (a) tem?</div>`;
      div_footer.innerHTML = `
<input type="text" class="input_message" id="input_qtd_estantes" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar" in
onclick="functionQtdEstantes()">Enviar</button>
<button class="btnVoltar" id="btn_voltar" onclick="voltarEmpresa()">Voltar </button>`;
rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
    }
  }


  function voltarEmpresa() {
    div_history.innerHTML += `
<div class="userMessage">Voltar</div>
<div class="botMessage">Olá ${nomeCalculadora}! Agora me diga para qual empresa você trabalha?
</div>`
    div_footer.innerHTML = `
<input type="text" class="input_message" id="input_empresa" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar" onclick="functionEmpresa()">Enviar</button>
<button class="btnVoltar" id="btn_voltar" onclick="voltarNome()">Voltar </button>`;

    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }

  function functionQtdEstantes() {
    qtdEstantes = Number(input_qtd_estantes.value);
    div_history.innerHTML += ` <div class="userMessage">${qtdEstantes} </div>
<div class="botMessage">Quantos racks por estante você tem? </div>
`;
    div_footer.innerHTML = `<input type="text" class="input_message" id="input_rack_estante" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar" in
onclick="functionRackPorEstante()">Enviar</button> <button class="btnVoltar" id="btn_voltar" onclick="voltarQtdEstantes()">Voltar </button>`
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }
  function voltarQtdEstantes() {
    div_history.innerHTML += `<div class="userMessage">Voltar </div>
<div class="botMessage">
Quantas estantes o (a) tem? </div>`;
    div_footer.innerHTML = `
<input type="text" class="input_message" id="input_qtd_estantes" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar" in
onclick="functionQtdEstantes()">Enviar</button>
<button class="btnVoltar" id="btn_voltar" onclick="voltarEmpresa()">Voltar </button>`;
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }

  function functionRackPorEstante() {
    rackPorEstante = Number(input_rack_estante.value);
    div_history.innerHTML += `<div class="userMessage"> ${rackPorEstante} </div>
<div class="botMessage"> Utilizando a unidade de medida para rack's e sevidores (Unidade U)</div>
<div class="botMessage"> Qual o tamanho médio dos rack's?</div>
`;
    div_footer.innerHTML = `
<input type="text" class="input_message" id="input_medida_rack" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar"
onclick="functionMedidaRack()">Enviar</button><button class="btnVoltar" id="btn_voltar" onclick="voltarRackPorEstante()">Voltar </button>`
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }
  function voltarRackPorEstante() {
    div_history.innerHTML += ` <div class="userMessage">Voltar</div>
<div class="botMessage">Quantos racks por estante você tem? </div>
`;
    div_footer.innerHTML = `<input type="text" class="input_message" id="input_rack_estante" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar"
onclick="functionRackPorEstante()">Enviar</button> <button class="btnVoltar" id="btn_voltar" onclick="voltarQtdEstantes()">Voltar </button>`
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }

  function functionMedidaRack() {
    medidaRack = Number(input_medida_rack.value);
div_history.innerHTML += `<div class="userMessage">${medidaRack}</div>
    <div class="botMessage">Quantos servidores o(a) ${empresa} possui?</div>` ;
    div_footer.innerHTML = `<input type="text" class="input_message" id="input_num_servidores" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar"
onclick="functionNumServidores()">Enviar</button><button class="btnVoltar" id="btn_voltar" onclick="voltarMedidaRack()">Voltar </button>`;
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }
  function voltarMedidaRack() {
    div_history.innerHTML += `<div class="userMessage"> ${rackPorEstante} </div>
<div class="botMessage"> Utilizando a unidade de medida para rack's e sevidores (Unidade U)</div>
<div class="botMessage"> Qual o tamanho médio dos rack's?</div>
`;
    div_footer.innerHTML = `
<input type="text" class="input_message" id="input_medida_rack" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar"
onclick="functionMedidaRack()"> Enviar </button>
<button class="btnVoltar" id="btn_voltar" onclick="voltarRackPorEstante()"> Voltar </button>`
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }


function functionNumServidores() {
  numServidores = Number(input_num_servidores.value);
    div_history.innerHTML += `<div class="userMessage"> ${numServidores}</div>
<div class="botMessage"> Chegamos a ultima pergunta! </div>
<div class="botMessage"> Qual o tamanho da instalação(m²)</div>
`;
    div_footer.innerHTML = `<input type="text" class="input_message" id="input_area" placeholder="Digite aqui"> <button class="btnEnviar" id="btn_enviar" onclick="functionArea()"> Enviar</button><button class="btnVoltar" id="btn_voltar" onclick="voltarMedidaRack()">Voltar</button>`;
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
}
  function voltarMedidaRack(){
    div_history.innerHTML += `<div class="userMessage"> ${rackPorEstante} </div>
<div class="botMessage"> Utilizando a unidade de medida para rack's e sevidores (Unidade U)</div>
<div class="botMessage"> Qual o tamanho médio dos rack's?</div>
`; 
div_footer.innerHTML = `
<input type="text" class="input_message" id="input_medida_rack" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar"
onclick="functionMedidaRack()"> Enviar </button>
<button class="btnVoltar" id="btn_voltar" onclick="voltarRackPorEstante()"> Voltar </button>`
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }
  function functionArea() {
    area = Number(input_area.value);
    //Contas
    //Quantidade de sensores por rack(Frontal, traseiro, em cima e embaixo)
    // Medida recebida do rack em U / 4U(definido como padrao por sensor)
    // * 2 (para considerar lado frontal e traseiro)
    // + 2 (1 sensor em cima e 1 em baixo)
    var quantSensorRack = ((medidaRack / 4) * 2 + 2) * rackPorEstante;
    //Sensores por rack(laterais)
    // Medida recebida do rack em U / 4U(definido como padrao por sensor)
    // * quantidade de racks por estante
    // + 1 para igualar o numero de espacos entre racks
    var quantSensorLateral = (medidaRack / 4) * (rackPorEstante + 1);
    //quantidade de sensor por estante (soma do total de sensores frontal, traseiro, cima, baixo e laterais)
    var quantSensorEstante = quantSensorRack + quantSensorLateral;
    //quantidade de estantes (numero de sensores por estante * numero de estantes)
    var quantEstante = qtdEstantes * quantSensorEstante;
    //Quantidade de sensor no corredor
    // area fornecida pelo cliente em m² / 4m²(definido como padrao de alcance do sensor)
    // * quantidade de estantes
    // + 1 para igualar o numero de espacos entre racks
    var quantSensorCorredor = (area / 4) * (1 + quantEstante);
    //Valor total dos sensores
    // soma do total de sensores por estante + total de sensores por corredor
    var totalSensor = quantEstante + quantSensorCorredor;
    //Valor dos sensores
    // quantidade total de sensores * o preço de custo do sensor
    var valorSensor = totalSensor * 20;
    //Quantidade de arduinos
    // quantidade total de sensores / 2(cada arduino suporte 02 sensores)
    var quantidadeArduino = totalSensor / 2;
    //Valor dos arduinos
    // quantidade total de arduinos * o preço de custo do arduino
    var valorArduino = quantidadeArduino * 100;
    // Nossa porcentagem
    // custo total de arduinos e sensores * nossa margem de lucro dos sensores e arduinos
    var valorSensorArduino = ((valorArduino + valorSensor) * 2) + 100 + 10;
    // nosso preco de sensores e arduinos * nossa margem de lucro no projeto
    var preco = valorSensorArduino + (valorSensorArduino * 0.3);
    
    var despesaEstantes = qtdEstantes * 3500;
    var despesaRack = numServidores * 12050;
    var somaPrejuizo = despesaRack + despesaEstantes;

    div_history.innerHTML += `
<div class="userMessage">${area}</div>
<div class="botMessage">Você sabia? Na madrugada de 10 de março de 2021, a empresa OVHcloud, provedora de serviços de hospedagem na nuvem, enfrentou enormes perdas devido a falta de monitoramento de temperatura que gerou um incêndio. O prejuízo totalizou impressionantes US$58 milhões em gastos com seguradoras para cobrir os danos causados pelo incêndio. Além disso, cerca de 160 racks de servidores foram destruídos, resultando na perda de um data center, estimando-se um custo adicional de aproximadamente US$64,4 milhões apenas pelos racks perdidos.</div>`
 div_history.innerHTML +=`<div class="botMessage">
  <img src="https://www.minhaoperadora.com.br/wp-content/uploads/2021/03/milhoes-de-sites-saem-do-ar-apos-incendio-na-franca.jpeg" width="100%"></div>

<div class="botMessage">Com base em suas informações anteriores, você teria um prejuízos de R$ ${despesaEstantes} em racks e R$ ${despesaRack} em servidores. Tendo um total de R$ ${somaPrejuizo}</div>

<div class="botMessage">O orçamento necessário para evitar tais prejuízos é de apenas R$${preco}.</div>
<div class="botMessage">Deseja fazer um novo orçamento?</div>
`;
    div_footer.innerHTML = `<button onclick="sim()" class="btnEnviar"> Sim </button><button onclick="nao()" class="btnVoltar">Não</button>`
    
  }
  function sim() {
    div_history.innerHTML += `<div class="userMessage">Novo Orçamento</div>
<div class="botMessage">
Qual é o seu nome?
</div>`
    div_footer.innerHTML = ` <input type="text" class="input_message" id="input_nome_calculadora placeholder="Digite aqui">
<button class="btnEnviar" id="btn_enviar" onclick="function()">Enviar</button>`
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }
  function nao() {
    div_history.innerHTML += `<div>Ok então, espero que você tenha gostado</div><div class="botMessage">Volte sempre :)</div>`;
    div_footer.innerHTML = `
<button class="btnEnviar" id="btn_enviar" onclick="nomeNao()">Novo Orçamento</button>`
}
  function nomeNao(){
    div_history.innerHTML += `<div class="userMessage">Novo Orçamento</div>
<div class="botMessage">
Qual é o seu nome?
</div>`
    div_footer.innerHTML = ` <input type="text" class="input_message" id="input_nome_calculadora" placeholder="Digite aqui">
<button class="btnEnviar" id="btn_enviar" onclick="function()">Enviar</button>`
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  }
