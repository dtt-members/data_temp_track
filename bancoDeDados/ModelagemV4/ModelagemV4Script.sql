CREATE DATABASE DataBaseTrack;

use DataBaseTrack;

create table endereco (
	idEndereco int primary key auto_increment,
    RuaEnd varchar(45),
    CEP char(8),
    NumeroEnd varchar(10),
	complemente varchar(45)
)auto_increment = 1;

create table empresa (
	idEmpresa int primary key auto_increment,
    razaoSocial varchar(70),
    cpnj char(14),
    foneCell char(11),
    foneFixo char(8),
    emailInst varchar(45),
    fkEndereco int,
    constraint fkEndereco foreign key (fkEndereco) references endereco(idEndereco)
)auto_increment = 1000000;

create table usuario (
	idUsuario int,
    fkEmp int,
    primary key (idUsuario, fkEmp),
    nome varchar(45),
    sobrenome varchar(45),
    emailInst varchar(45),
    cpf char (9),
    senha varchar(70),
    constraint fkEmp foreign key (fkEmp) references empresa(idEmpresa)
);

create table permissoes(
	idEmpresa int,
    fkUser int,
    primary key (idEmpresa, fkUser),
    descPerm varchar(45),
    constraint fkUser foreign key (fkUser) references usuario(idUsuario)
);