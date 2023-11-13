-- CREATE DATABASE DataBaseTrack;

use DataBaseTrack;

create table endereco (
	idEndereco int primary key auto_increment,
    CEP char(8),
    NumeroEnd varchar(10),
	complemente varchar(45)
)auto_increment = 1;

create table empresa (
	idEmpresa int primary key auto_increment,
    razaoSocial varchar(70),
    cnpj char(14),
    foneCell char(11),
    foneFixo char(8),
    emailInst varchar(45),
    fkEndereco int,
    constraint fkEndereco foreign key (fkEndereco) references endereco(idEndereco)
)auto_increment = 1000001;

create table permissoes(
	idPerm int primary key auto_increment ,
    descPerm varchar(120)
) auto_increment = 10;

create table usuario (
	idUsuario int auto_increment,
    fkEmp int,
    primary key (idUsuario, fkEmp, fkPerm),
    nome varchar(45),
    sobrenome varchar(45),
    emailInst varchar(45),
    cpf char (11),
    senha varchar(70),
    fkPerm int,
    constraint fkEmp foreign key (fkEmp) references empresa(idEmpresa),
    constraint fkPerm foreign key (fkPerm) references permissoes(idPerm)
) auto_increment = 1000;

-- inicio da modelagem de dashboard

create table unidadeDataCenter(
	idDataCenter int,
	fkEmp int,
    primary key (idDataCenter, fkEmp),
    unidDataCenter varchar(20),
    constraint fkEmp foreign key (fkEmp) references empresa(idEmpresa)
);

create table ambiente (
	idAmb int,
	fkDC int,
	fkEmp int,
    primary key (idAmb, fkDC, Emp),
    nomeAmbiente varchar(30),    
    constraint fkDC foreign key (fkDC) references unidadeDataCenter(idDataCenter),
    constraint fkEmp foreign key (fkEmp) references empresa(idEmpresa)
);

-- Inicio tabelas de Sensores

create table uddMedida(
	idUdd int,
    tipoMedida varchar(2)
);

create table sensor(
	idSensor int primary key auto_increment,
    tipoSensor varchar(45),
	fkAmb int,
    fkUdd int,
    constraint fkAmb foreign key (fkAmb) references ambiente(idAmbiente),
    constraint fkUdd foreign key (fkUdd) references uddMedida(idUdd)
);

create table hist (
	idhist int, 
    fkSensor int,
    primary key (idhist, fkSensor),
    dataHist datetime,
    dadoCap Decimal(14,2)
);

-- inserts de exemplo, para fixar (comentar depois)

insert into permissoes(descPerm) values 
('Padrão - O usuario só tera permissão para ver as temperaturas no momento e o historico na aplicação web');

-- insert das empresas:
insert into endereco(CEP, numeroEnd, complemente) values 
('12345678', '800', 'segundo andar');

select * from endereco;

insert into empresa (razaoSocial, cnpj, foneCell, emailInst, fkEndereco) values 
('Empresa', '12345678901234', '12345678901', 'empresa@email.com', 1);

select * from empresa join endereco
	on fkEndereco = idEndereco;
    
-- insert de usuario:

insert into usuario(nome, sobrenome, emailInst, cpf, senha, fkEmp, fkPerm) values 
('Arthur', 'Silva', 'arthur@empresa.com', '57030727860', '1234567890', 1000001, 10);

select * from usuario join empresa
	on fkEmp = idEmpresa
		join permissoes 
			on fkPerm = idPerm;
