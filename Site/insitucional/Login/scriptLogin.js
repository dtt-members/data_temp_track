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
            window.location.href = "../../indexInst.html";
        } else {
            alert("Senha ou email não coincidem")
        }
}