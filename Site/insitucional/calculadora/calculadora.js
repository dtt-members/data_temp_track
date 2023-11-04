
var nomeCalculadora = "";
var empresa = "";
var qtdEstantes = "";
var numServidores = "";
var rolarTelaCalculadora = document.getElementById('div_history')


function functionNome() {
  nomeCalculadora = input_nome_calculadora.value;
  if (nomeCalculadora == "") {
    div_history.innerHTML += `<div class="botMessage">Por favor digite seu nome </div>`;
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight;
  } else {
    div_history.innerHTML += `
<div class="userMessage"> ${nomeCalculadora}</div>`
    div_history.innerHTML += `<div class="botMessage" id="divSaudacao">Olá ${nomeCalculadora}! Agora me diga para qual empresa você trabalha?
</div>`
    div_footer.innerHTML = `
<input type="text" id="input_empresa" class="input_message" placeholder="Digite aqui" >
<button class="btnEnviar" class="input_message" id="btn_enviar" onclick="functionEmpresa()">Enviar</button>
<button class="btnVoltar" class="input_message" id="btn_voltar" onclick="voltarNome()">Voltar </button>`;
    rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight;
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
<div class="botMessage">
Quantas estantes o(a) ${empresa} tem?</div>`;
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
    <div class="botMessage">Quantos servidores o(a) ${empresa} possui?</div>`;
  div_footer.innerHTML = `<input type="text" class="input_message" id="input_num_servidores" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar"
onclick="functionNumServidores()">Enviar</button><button class="btnVoltar" id="btn_voltar" onclick="voltarQtdEstantes()">Voltar </button>`;
  rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
}
function voltarQtdEstantes() {
  div_history.innerHTML += `<div class="userMessage">Voltar </div>
<div class="botMessage">
Quantas estantes o(a) ${empresa} tem? </div>`;
  div_footer.innerHTML = `
<input type="text" class="input_message" id="input_qtd_estantes" placeholder="Digite aqui" >
<button class="btnEnviar" id="btn_enviar" in
onclick="functionQtdEstantes()">Enviar</button>
<button class="btnVoltar" id="btn_voltar" onclick="voltarEmpresa()">Voltar </button>`;
  rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
}



function functionNumServidores() {
  numServidores = Number(input_num_servidores.value)

  var despesaEstantes = qtdEstantes * 3500;
  var despesaRack = numServidores * 12050;
  var somaPrejuizo = despesaRack + despesaEstantes;

  div_history.innerHTML += `
<div class="userMessage">${numServidores}</div>
<div class="botMessage"><span class="negritoCalculadora">Você sabia? </span></div> `
  rolarTelaCalculadora.scrollTop = rolarTelaCalculadora.scrollHeight
  div_history.innerHTML += `
    <div class="botMessage"> Na madrugada de 10 de março de 2021, a empresa OVHcloud, provedora de serviços de hospedagem na nuvem, enfrentou <span class="negritoCalculadora">enormes perdas</span> devido a <span class="negritoCalculadora"> falta de monitoramento de temperatura</span> que gerou um incêndio. O <span class="negritoCalculadora">prejuízo </span> totalizou impressionantes <span class="negritoCalculadora"> US$58 milhões em gastos</span> com seguradoras para cobrir os danos causados pelo incêndio. Além disso, cerca de 160 racks de servidores foram destruídos, resultando na perda de um data center, estimando-se um <span class="negritoCalculadora"> custo adicional</span> de aproximadamente <span class="negritoCalculadora"> US$64,4 milhões apenas pelos racks perdidos.</span> </div>`
  div_history.innerHTML += `<div class="botMessage">
  <img src="https://www.minhaoperadora.com.br/wp-content/uploads/2021/03/milhoes-de-sites-saem-do-ar-apos-incendio-na-franca.jpeg" width="100%"></div>

<div class="botMessage">Com base em suas informações anteriores, você teria um prejuízos de <span class="negritoCalculadora"> R$ ${despesaEstantes}</span> em racks e <span class="negritoCalculadora"> R$ ${despesaRack}</span> em servidores. Considerando <span class="negritoCalculadora">somente</span> os rack e servidores,<span class="negritoCalculadora"> sem considerar os downtimes</span>, que simbolizam a maior parte dos prejuízos chegando até U$5.600 por minuto. O(a) ${empresa} teria um perda total de <span class="negritoCalculadora">R$ ${somaPrejuizo}</span></div>

<div class="botMessage">Deseja fazer um novo orçamento?</div>
`;

  div_footer.innerHTML = `<button onclick="sim()" class="btnEnviar"> Sim </button><button onclick="nao()" class="btnVoltar">Não</button>`

}
function sim() {
  nomeCalculadora = "";
  empresa = "";
  qtdEstantes = "";
  numServidores = "";

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
<a class="Abotao" href="#cadastro">  Contratar Serviços  </a>`
}
