create database DataTempTrack;

use DataTempTrack;

create table empresa (
idEmp int primary key auto_increment,
RazaoSocial varchar(70),
CNPJ char(14),
foneCell char(11),
foneFixo char(8));

insert into empresa values
(null, 'Coca-Cola', '01234567891011', '01234567891', '01234567'),
(null, 'Pepsi', '01234567891000', '01234567890', '99999999');

select * from empresa;

create table endereco (
idEndereco int auto_increment,
fkEmp int,
primary key(idEndereco, fkEmp),
RuaEnd varchar(45),
CEP char(8),
NumeroEnd varchar(10),
complemento varchar (45),
constraint fkE foreign key (fkEmp) references empresa(idEmp));

insert into endereco values
(null, 1, 'Rua Coca', '01234567', '100', null),
(null, 2, 'Rua Pepsi', '12345678', '799', '11º Andar');

select * from endereco;

create table usuario (
idUsuario int auto_increment,
fkEmp int,
primary key(idUsuario, fkEmp),
nome varchar(45),
sobrenome varchar(45),
emailInst varchar(45),
telefone1 char(11),
telefone2 char(11),
CPF char(9),
senha varchar(70),
usuarioSuper int,
constraint fkEmpUser foreign key (fkEmp) references empresa(idEmp),
constraint userSuper foreign key (usuarioSuper) references usuario(idUsuario));

insert into usuario values
(null, 1, 'Funcionario 1', 'Sobrenome Func1', 'func1@hh.com', '01234567890', null, '123456789', 'senha123', null),
(null, 2, 'Funcionario 3', 'Sobrenome Func3', 'func3@hh.com', '01234567891', '12345678900', '012345678', 'senha1234', null);

insert into usuario values
(null, 1, 'Funcionario 2', 'Sobrenome Func2', 'func2@hh.com', '01234567892', null, '123456787', '123', 1),
(null, 2, 'Funcionario 4', 'Sobrenome Func4', 'func4@hh.com', '01234567893', null, '123456786', '1234', 2);

select * from usuario;

create table UnidadeDataCenter (
idDataCenter int auto_increment,
fkEmp int,
primary key (idDataCenter, fkEmp),
unidDataCenter varchar(45),
constraint fkEmpUDC foreign key (fkEmp) references empresa(idEmp));

insert into UnidadeDataCenter values
(null, 1, 'DataCenter Coca'),
(null, 2, 'DataCenter Pepsi');

select * from UnidadeDataCenter;

create table ambiente (
idAmb int auto_increment,
fkDataCenter int,
fkEmp int,
primary key(idAmb, fkDataCenter, fkEmp),
tipoAmb varchar(45),
constraint fkDC foreign key (fkDataCenter) references UnidadeDataCenter(idDataCenter),
constraint fkEmp_DC foreign key (fkEmp) references UnidadeDataCenter(fkEmp));

insert into ambiente values
(null, 1, 1, 'Corredor'),
(null, 1, 1, 'Rack'),
(null, 2, 2, 'Corredor'),
(null, 2, 2, 'Rack');

select * from ambiente;


create table UddMedida (
idUddMedida int primary key auto_increment,
tipoUddMedida varchar(2));

insert into uddMedida values
(null, '%'),
(null, '°C');

select * from UddMedida;

create table sensor (
idSensor int auto_increment,
fkAmb int,
fkDataCenter int,
fkEmp int,
primary key(idSensor, fkAmb, fkDataCenter, fkEmp),
fkUddMedida int,
tipoSensor varchar(45),
dadoCap int,
constraint fkA foreign key (fkAmb) references ambiente(idAmb),
constraint fkDC_Amb foreign key (fkDatacenter) references ambiente(fkDatacenter),
constraint fkEmp_Amb foreign key (fkEmp) references ambiente(fkEmp),
constraint fkUddM foreign key (fkUddMedida) references UddMedida(idUddMedida));

insert into sensor values
(null, 1, 1, 1, 1, 'Umidade', 48),
(null, 1, 1, 1, 2, 'Temperatura', 22),
(null, 1, 1, 1, null, 'Bloqueio', 1),
(null, 2, 1, 1, 1, 'Umidade', 52),
(null, 2, 1, 1, 2, 'Temperatura', 24),
(null, 3, 2, 2, 1, 'Umidade', 50),
(null, 3, 2, 2, 2, 'Temperatura', 20),
(null, 3, 2, 2, null, 'Bloqueio', 0),
(null, 4, 2, 2, 1, 'Umidade', 45),
(null, 4, 2, 2, 2, 'Temperatura', 27);

select * from sensor;

create table hist (
idHist int auto_increment,
fkSensor int,
fkAmb int,
fkDataCenter int,
fkEmp int,
primary key(idHist, fkSensor, fkAmb, fkDataCenter, fkEmp),
horaReg datetime,
constraint fkS foreign key (fkSensor) references sensor(idSensor),
constraint fkAmb_Sensor foreign key (fkAmb) references sensor(fkAmb),
constraint fkDataCenter_Sensor foreign key (fkDataCenter) references sensor(fkDataCenter),
constraint fkEmp_Sensor foreign key (fkEmp) references sensor(fkEmp));

insert into hist values
(null, 1, 1, 1, 1, (timestamp ('2023-10-14 21:47:24'))),
(null, 2, 1, 1, 1, (timestamp ('2023-10-14 21:47:24'))),
(null, 3, 1, 1, 1, (timestamp ('2023-10-14 21:47:24'))),
(null, 4, 2, 1, 1, (timestamp ('2023-10-14 21:47:24'))),
(null, 5, 2, 1, 1, (timestamp ('2023-10-14 21:47:24'))),
(null, 6, 3, 2, 2, (timestamp ('2023-10-14 21:47:24'))),
(null, 7, 3, 2, 2, (timestamp ('2023-10-14 21:47:24'))),
(null, 8, 3, 2, 2, (timestamp ('2023-10-14 21:47:24'))),
(null, 9, 4, 2, 2, (timestamp ('2023-10-14 21:47:24'))),
(null, 10, 4, 2, 2, (timestamp ('2023-10-14 21:47:24')));

select * from hist;

-- Join Empresa
select * from empresa as em join endereco as en on em.idEmp = en.fkEmp;
select * from empresa as em join usuario as u on em.idEmp = u.fkEmp;

-- Join Usuario
select * from usuario as u join usuario as s on s.idUsuario = u.usuarioSuper;
select * from usuario as s join usuario as u on s.idUsuario = u.usuarioSuper;

-- Join DataCenter
select * from UnidadeDataCenter as udc join empresa as em on udc.fkEmp = em.idEmp;

-- Join Ambiente
select * from ambiente as a join UnidadeDataCenter as udc on a.fkDataCenter = udc.idDataCenter;

-- Join Sensor
select * from sensor as s join ambiente as a on s.fkAmb = a.idAmb;
select * from sensor as s left join uddMedida as udd on s.fkUddMedida = udd.idUddMedida;

-- Join UddMedida
select * from uddMedida as udd join sensor as s on s.fkUddMedida = udd.idUddMedida;

-- Join Histórico
select * from hist as h join sensor as s on h.fkSensor = s.idSensor;

-- Join Geral
select h.horaReg as Registro, s.tipoSensor as Sensor, s.dadoCap as Dado, udd.tipoUddMedida as Medida, a.tipoAmb as 'Local',
udc.unidDataCenter as DataCenter, em.RazaoSocial as Empresa, en.RuaEnd as Rua
from hist as h left join sensor as s on h.fkSensor = s.idSensor
left join UddMedida as udd on udd.idUddMedida = s.fkUddMedida
left join ambiente as a on s.fkAmb = a.idAmb
left join UnidadeDataCenter as udc on a.fkDataCenter = udc.idDataCenter
left join empresa as em on udc.fkEmp = em.idEmp
left join endereco as en on en.fkEmp = em.idEmp;

-- Dash Coca
select h.horaReg as Registro, s.tipoSensor as Sensor, s.dadoCap as Dado, udd.tipoUddMedida as Medida, a.tipoAmb as 'Local',
udc.unidDataCenter as DataCenter, em.RazaoSocial as Empresa, en.RuaEnd as Rua
from hist as h left join sensor as s on h.fkSensor = s.idSensor
left join UddMedida as udd on udd.idUddMedida = s.fkUddMedida
left join ambiente as a on s.fkAmb = a.idAmb
left join UnidadeDataCenter as udc on a.fkDataCenter = udc.idDataCenter
left join empresa as em on udc.fkEmp = em.idEmp
left join endereco as en on en.fkEmp = em.idEmp
	where idEmp = 1;

-- Dash Pepsi
select h.horaReg as Registro, s.tipoSensor as Sensor, s.dadoCap as Dado, udd.tipoUddMedida as Medida, a.tipoAmb as 'Local',
udc.unidDataCenter as DataCenter, em.RazaoSocial as Empresa, en.RuaEnd as Rua
from hist as h left join sensor as s on h.fkSensor = s.idSensor
left join UddMedida as udd on udd.idUddMedida = s.fkUddMedida
left join ambiente as a on s.fkAmb = a.idAmb
left join UnidadeDataCenter as udc on a.fkDataCenter = udc.idDataCenter
left join empresa as em on udc.fkEmp = em.idEmp
left join endereco as en on en.fkEmp = em.idEmp
	where idEmp = 2;