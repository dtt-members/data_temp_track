
function validarCadastro(){
    var RazaoSocial = input_RazaoSocial.value;
    var CNPJ = input_CNPJ.value;
    var email = input_email.value;
    var telefoneCelular = input_telefoneCelular.value;
    var telefoneFixo = input_telefoneFixo.value;
    var endereco = input_endereco.value;
    var password = input_password.value;
    var password2 = input_password2.value;


    if(RazaoSocial== undefined|| 
         CNPJ == undefined ||
         email== undefined ||
         telefoneCelular ==undefined || 
         telefoneFixo == undefined ||
         endereco == undefined ||
         password == undefined ||
         password2 == undefined
         ){
            alert('ola mundo')
         }else{
            alert('ola mundo')
         }
}