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

insert into unidadeDataCenter values
 (1, 1000001, 'DataCenter 1');

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

SELECT dt.fkEmp, h.dataHist, h.dadoCap, s.tipoSensor, s.unidMedida FROM unidadedatacenter as dt 
JOIN ambiente as a ON a.fkDC = dt.idDataCenter 
JOIN sensor as s  ON s.fkAmb = a.idAmb 
JOIN hist as h ON h.fkSensor = s.idSensor
       WHERE dt.fkEmp = 1000001;
--	1000001	2023-12-05 16:46:07	25.42	lm35	ºC
insert into hist(fkSensor, dadoCap) values (2, ?), (1, ?), (3, ?);

insert into sensor values
(null, 'lm35',1, 'ºC'),
(null, 'dht11', 1, '%'),
(null, 'trtc5000', 1, 'bool');

select * from hist;
INSERT INTO hist (fkSensor, dataHist, dadoCap) VALUES
(1, null, 25.50),
(2, null, 75),
(3, null , 1),
(1, null , 30.25),
(2, null, 80),
(3, null, 1),
(1, null, 27.90),
(2, null, 76),
(3, null, 0),
(1, null, 32.10),
(2, null, 30),
(3, null, 0),
(1, null, 28.45),
(2, null, 69),
(3, null, 0),
(1, null, 35.75),
(2, null, 20),
(3, null, 0),
(1, null, 30.00),
(2, null,55),
(3, null, 0),
(1, null, 34.20),
(2, null, 60),
(3, null, 1),
(1, null, 29.80),
(2, null, 75),
(3, null, 1),
(1, null, 33.40),
(2, null, 23),
(3, null, 0),
(1, null, 31.00),
(2, null, 65),
(3, null, 1),
(1, null, 28.70),
(2, null, 78),
(3, null, 0),
(1, null, 29.50),
(2, null, 40),
(3, null, 1),
(1, null, 32.90),
(2, null, 21),
(3, null, 0);
truncate table hist;

select * from usuario join empresa
	on fkEmp = idEmpresa;
    
select * from usuario;

select * from empresa;
select * from ambiente;

select * from empresa join endereco
	on fkEndereco = idEndereco;
    
SELECT * FROM usuario WHERE emailInst = 'arthur@gmail.com' AND senha = '123456789';

describe hist;

create view login
as
select idUsuario, nome, emailInst, fkEmp from usuario where emailInst = 'arthur@gmail.com' AND senha = '123456789';

drop view login;

select * from hist;
select * from sensor;

select * from sensor;
select * from usuario;
select * from empresa;	
select * from  hist order by idhist DESC;

SELECT DISTINCT s.unidMedida, h.dataHist, h.dadoCap, s.tipoSensor
FROM unidadedatacenter AS dt
JOIN ambiente AS a ON a.fkDC = dt.idDataCenter
JOIN sensor AS s ON s.fkAmb = a.idAmb
JOIN hist AS h ON h.fkSensor = s.idSensor
WHERE dt.fkEmp = 1000001
ORDER BY h.dataHist, s.tipoSensor DESC
LIMIT 3;


SELECT h.dataHist, h.dadoCap, s.tipoSensor, s.unidMedida FROM unidadedatacenter as dt JOIN ambiente as a ON a.fkDC = dt.idDataCenter JOIN sensor as s  ON s.fkAmb = a.idAmb JOIN hist as h ON h.fkSensor = s.idSensor
       WHERE dt.fkEmp = 1000001 ORDER by dataHist DESC limit 3;
       
	
SELECT h.dataHist, h.dadoCap, s.tipoSensor, s.unidMedida FROM
unidadedatacenter as dt JOIN ambiente as a ON a.fkDC = dt.idDataCenter 
JOIN sensor as s  ON s.fkAmb = a.idAmb JOIN hist as h ON h.fkSensor = s.idSensor
WHERE dt.fkEmp = 1000001 limit 6;
       
 INSERT INTO usuario (nome, sobrenome, emailInst, cpf, senha, fkEmp) VALUES
         ('arthur' , 'antonio' , 'arthur@gmail.com' , '57032727860' , '123456789', 1000001);
         
         
         
         select * from ambiente;
         INSERT INTO ambiente (fkDC,fkEmp, nomeAmbiente) VALUES 
         (1, 1000001, 'Porta'),
         (1, 1000001, 'Corredor 1');
         
         Insert into empresa VALUES
         (null, 'Data Temp Track', 12345678901234, 12345678901, 1234567890, 'datatemptrack@gmail.com', 'dbt123', null),
         (null, 'Sptech', '1234567894321', '12345678901', '1234567890', 'sptech@gmail.com', 'sptech123', null);
         
         SELECT * FROM unidadeDataCenter;
         select * from empresa;
         select * from ambiente;
         select * from usuario;
         
         truncate table hist;
         
         delete from empresa where idEmpresa = 1000002;
         
         SELECT h.dataHist, h.dadoCap, s.tipoSensor, s.unidMedida FROM unidadedatacenter as dt JOIN ambiente as a ON a.fkDC = dt.idDataCenter JOIN sensor as s  ON s.fkAmb = a.idAmb LEFT JOIN hist as h ON h.fkSensor = s.idSensor
        WHERE dt.fkEmp = 1000001 ORDER by dataHist DESC limit 5 ;