process.env.AMBIENTE_PROCESSO = "desenvolvimento";


var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3331 : 8080;

var app = express();

var enderecoRouter = require("./src/routes/endereco");
var empresaRouter = require("./src/routes/empresa");
var usuarioRouter = require("./src/routes/usuario");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/endereco", enderecoRouter);
app.use("/empresa", empresaRouter);
app.use("/usuario", usuarioRouter);


app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
`);
});
