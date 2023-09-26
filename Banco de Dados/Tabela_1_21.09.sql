create database dataTemp;

use dataTemp;

CREATE TABLE usuario (
	idUsuario int primary key auto_increment not null,
    nome VARCHAR(45) not null,
    emailInst VARCHAR(45) not null,
    senha CHAR(10) not null
) auto_increment = 1000;



CREATE TABLE empresa (
	idEmpresa INT primary key auto_increment not null, 
    nomeEmpresa VARCHAR(45) not null,
    cnpj CHAR(15) not null,
    telefone CHAR(11) not null,
	-- valorContrat VARCHAR(45)
    -- emailInstitucional VARCHAR(45)
    fkUser varchar(45),
    fkHack varchar(45)
);

CREATE TABLE hack (
	idHack INT primary key auto_increment not null,
    setor VARCHAR (45) not null, -- CHAR(10)
    qtdSensor INT not null,
    fkSensor varchar(45) not null
);

CREATE TABLE sensores (
	idSensores INT primary key auto_increment not null,
	nomeSensores varchar(45) not null,
    temp char(10) not null,
    dtRegistro datetime default current_timestamp
);

drop table sensores;

describe usuario;
describe empresa;
describe hack;
describe sensores;

insert into usuario values 
	(null, "Arthur Silva", "arthur@sptech", "naosei"),
	(null, "tayllon Lima", "tayllon@sptech", "eusei");
    
select * from usuario;
    
insert into empresa values 
	(null, "empresa1", "678453109175483", "11966607325", null, null),
    (null, "empresa2", "678453109975433", "21958997531", null, null);
    
select * from empresa;

insert into hack values 
	(null, "Norte_1", 70, null),
    (null, "Sul_3", 20, null);
    
select * from hack;

insert into sensores (nomeSensores, temp) values
	("Sens1", "24,54"),
    ("Sens2", "28,34");
    
select * from sensores;




