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
    var razaoSocial = input_razaoSocial.value;
    var CNPJ = input_CNPJ.value;
    var emailCadastro = input_emailCadastro.value;
    var telefoneCelular = input_telefoneCelular.value;
    var telefoneFixo = input_telefoneFixo.value;
    var endereco = input_endereco.value;
    var senha = input_senha.value;
    var confimarSenha = input_confimarSenha.value;
    


    if(CNPJ.length != 14){
        messageErro.innerHTML = `Preencha com um cnpj válido`;
    }else if(emailCadastro.indexOf('@') < 0 && emailCadastro.indexOf('.com')< 0){
        messageErro.innerHTML = `Preencha com email válido que contenha '@' e '.com'`;
    }else if(telefoneCelular.length != 11){
        messageErro.innerHTML = 'Preencha com telefone celular válido';
    }else if(telefoneFixo.length != 10){
        messageErro.innerHTML = 'Preencha com telefone fixo válido';
    }else if ( senha.length <8 || senha.length > 14) {
        messageErro.innerHTML = 'A senha deve ter entre 8 e 14 caracteres';
    }else if( senha != confimarSenha){
        messageErro.innerHTML = `Senha diferentes`;
    }else{
        messageErro.innerHTML = '';
        window.location.href = './Dashboard/Dashboard.html'
    }
 }