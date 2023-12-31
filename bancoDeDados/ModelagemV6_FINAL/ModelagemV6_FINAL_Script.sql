drop database DataBaseTrack;

CREATE DATABASE DataBaseTrack;

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
    foneFixo char(10),
    emailInst varchar(45),
    senha varchar(14),
    fkEndereco int,
    constraint fkEndereco foreign key (fkEndereco) references endereco(idEndereco)
)auto_increment = 1000001;

create table usuario (
	idUsuario int auto_increment primary key,
    nome varchar(45),
    sobrenome varchar(45),
    emailInst varchar(45) unique,
    cpf char (11) unique,
    senha varchar(70),
    fkEmp int,
    constraint fkEmp foreign key (fkEmp) references empresa(idEmpresa)
) auto_increment = 1000;

-- inicio da modelagem de dashboard

create table unidadeDataCenter(
	idDataCenter int auto_increment,
	fkEmp int,
    primary key (idDataCenter, fkEmp),
    unidDataCenter varchar(20),
    constraint fkEmpUnidade foreign key (fkEmp) references empresa(idEmpresa)
);

select * from unidadeDataCenter where fkEmp = '1000001';

select * from empresa;
select * from usuario;

select * from unidadeDataCenter;

select * from unidadeDataCenter join empresa
	on fkEmp = idEmpresa;

create table ambiente (
	idAmb int primary key auto_increment,
	fkDC int,
	fkEmp int,
    nomeAmbiente varchar(30),    
    constraint fkDC foreign key (fkDC) references unidadeDataCenter(idDataCenter),
    constraint fkEmpAmbiente foreign key (fkEmp) references empresa(idEmpresa)
);

-- Inicio tabelas de Sensores

create table sensor(
	idSensor int primary key auto_increment,
    tipoSensor varchar(45),
	fkAmb int,
    unidMedida varchar(5),
    constraint fkAmb foreign key (fkAmb) references ambiente(idAmb)
);

create table hist (
	idhist int auto_increment, 
    fkSensor int,
    primary key (idhist, fkSensor),
    dataHist datetime default current_timestamp,
    dadoCap Decimal(14,2)
);


insert into hist(fkSensor, dadoCap) values (2, ?), (1, ?), (3, ?);

insert into sensor values
(null, 'lm35', 1, 'ºC'),
(null, 'dht11', 2, '%'),
(null, 'trtc5000', 1, 'bool');

insert into hist(fkSensor, dadoCap) values
( 1, 25),
( 2, 50),
( 3, 0);

INSERT INTO empresa VALUES 
(null, 'teste', null, null, null, 'teste@gmail.com', 'teste123', null);

insert into unidadeDataCenter values (1, 1000001, 'DataCenter 1');

SELECT * FROM unidadeDataCenter;

INSERT INTO ambiente VALUES 
(null, 1, 1000001, 'Porta'),
(null, 1, 1000001, 'Corredor 1'),
(null, 1, 1000001, 'Corredor 2');

SELECT h.dataHist, h.dadoCap, s.tipoSensor, s.unidMedida FROM unidadedatacenter as dt JOIN ambiente as a ON a.fkDC = dt.idDataCenter JOIN sensor as s  ON s.fkAmb = a.idAmb LEFT JOIN hist as h ON h.fkSensor = s.idSensor
WHERE dt.fkEmp = 1000001;

select * from usuario join empresa
	on fkEmp = idEmpresa;
select * from usuario;

select * from empresa;

select * from empresa join endereco
	on fkEndereco = idEndereco;
    

SELECT * FROM usuario WHERE emailInst = 'arthur@gmail.com' AND senha = '123456789';

describe hist;

create view login
as
select idUsuario, nome, emailInst, fkEmp from usuario where emailInst = 'arthur@gmail.com' AND senha = '123456789';

drop view login;

select * from login;

select * from hist;

 INSERT INTO usuario (nome, sobrenome, emailInst, cpf, senha, fkEmp) VALUES
         ('arthur' , 'antonio' , 'arthur@gmail.com' , '57030727860' , '123456789', 1000001);
         
SELECT udc.* from  unidadeDataCenter  AS udc JOIN empresa AS e ON udc.fkEmp = e.idEmpresa JOIN 
usuario AS s ON s.fkEmp = e.idEmpresa WHERE s.fkEmp = "1000001" ORDER BY udc.idDataCenter;

SELECT * FROM ambiente AS a JOIN empresa AS e ON  a.fkEmp = e.idEmpresa 
JOIN usuario AS u ON u.fkEmp = e.idEmpresa
WHERE a.fkEmp = '1000001';

SELECT * FROM ambiente AS a JOIN empresa AS e ON  a.fkEmp = e.idEmpresa 
  JOIN usuario AS u ON u.fkEmp = e.idEmpresa JOIN unidadeDataCenter AS udc ON udc.fkEmp = e.idEmpresa
  WHERE a.fkEmp = '1000001' AND udc.unidDataCenter = 'Datacenter 1';
  
  SELECT * FROM ambiente WHERE nomeAmbiente = 'Porta';