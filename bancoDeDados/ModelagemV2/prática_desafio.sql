create database Exercicio11;

use Exercicio11;

create table departamento(
idDepto int primary key,
nomeDepto varchar(45),
dataInicioGer date);

SELECT * FROM departamento;

create table Funcionario(
idFunc int primary key,
noemFunc varchar(30),
salario decimal(10,2),
sexo varchar(10),
check(sexo in('m', 'f')),
fkSupervisor int,
constraint fkSupervisor foreign key(fkSupervisor) references funcionario (idFunc),
dataNasc date,
fkDepto int, 
constraint fkDepto foreign key (fkDepto) references departamento (idDepto)
);

alter table departamento add column fkGerente int;
alter table departamento add constraint fkGerente foreign key (fkGerente) 
references Funcionario (idFunc);

create table projeto (
idProj int primary key,
nomeProj varchar(45),
localProj varchar(45),
fkDepto int,
constraint fkDeptoProj foreign key (fkDepto) references departamento(idDepto)
);

create table FuncProj(
fkFunc int,
fkProj int,
primary key(fkFunc, fkProj),
constraint fkFunc foreign key (fkFunc) references Funcionario(idFunc),
constraint fkProj foreign key (fkProj) references projeto(idProj),
horas decimal(3,1)
);

insert into departamento values
(105, 'Pesquisa', '2008-05-22', null),
(104, 'Administração','2015-01-01', null),
(101, 'Matriz','2001-06-19', null);

update Departamento set fkGerente = 2 where idDepto = 105;
update Departamento set fkGerente = 7 where idDepto = 104;
update Departamento set fkGerente = 8 where idDepto = 101;

insert into funcionario values 
(1, 'Joao Silva', 3500, 'm', NULL, '1985-01-09', 105),
(2, 'Fernando Wong', 4500, 'm', NULL, '1975-12-08', 105),
(3, 'Alice Sousa', 2500, 'f', NULL, '1988-01-19', 104),
(4, 'Janice Morais', 4300, 'f', NULL, '1970-06-20', 104),
(5, 'Ronaldo Lima', 3800, 'm', NULL, '1982-09-15', 105),
(6, 'Joice Leite', 2500, 'f', NULL, '1992-07-31', 105),
(7, 'Antonio Pereira', 2500, 'm', NULL, '1989-03-29', 104),
(8, 'Juliano Brito', 5500, 'm', NULL, '1957-11-10', 101);

update funcionario set fkSupervisor = '2' where idFunc = 1;
update funcionario set fkSupervisor = '8' where idFunc = 2;
update funcionario set fkSupervisor = '7' where idFunc = 3;
update funcionario set fkSupervisor = '8' where idFunc = 4;
update funcionario set fkSupervisor = '1' where idFunc = 5;
update funcionario set fkSupervisor = '1' where idFunc = 6;
update funcionario set fkSupervisor = '4' where idFunc = 7;


insert into projeto values
(1, 'Produto X', 'Santo André', 105),
(2, 'Produto Y', 'Itu', 105),
(3, 'Produto Z', 'São Paulo', 105),
(10, 'Informatização', 'Mauá', 104),
(20, 'Reorganização', 'São Paulo', 101),
(30, 'Benefícios', 'Mauá', 104);

insert into FuncProj (fkFunc, fkProj, horas) values 
(1, 1, 32.5),
(1, 2, 7.5),
(5, 3, 40.0),
(6, 1, 20.0),
(6, 2, 20.0),
(2, 2, 10.0),
(2, 3, 10.0),
(2, 10, 10.0),
(2, 20, 10.0),
(3, 30, 30.0),
(3, 10, 10.0),
(7, 10, 35.0),
(7, 30, 5.0),
(4, 30, 20.0),
(4, 20, 15.0),
(8, 20, NULL);

select * from departamento;
select * from funcionario;
select * from projeto;
select * from FuncProj;

-- Não é possivel adicionar pois o idFUnc não pode ser nulo
-- Não consegui inserir pois esse idFunc ja existe para outro funcionario
-- Não é possivel inserir pois o departamento 107 não existe

insert into funcionario (idFunc,noemFunc,salario,sexo,fkSupervisor,dataNasc,fkDepto) values 
(9,'Cecilia Ribeiro',2800,'f', 4,'1980-04-05', 104);

delete from FuncProj where fkFunc = 3 and fkProj = 10; 
-- É possivel apagar pois estou apagando duas fks de uma tabela a parte, mas não conseguiria apagar os seus registro originarios

-- Não pois esse id esta como fk em outras tabelas, o que não me permite excluir diretamente em sua tabela original

-- Não pois esse id esta como fk em outras tabelas, o que não me permite excluir diretamente em sua tabela original

update funcionario set salario = 2800 where idFunc = 3; -- Sim consegui pois é uma alteração valida ja que não possui nenhum impeditivo

update funcionario set fkDepto = 101 where idFunc = 3; -- Consegui pois é uma alteração valida visto que o idDepto=101 existe em outra tabela;

-- Não será possível alterar pois o idDepto=107 não existe

select dataNasc, salario from funcionario where noemFunc = 'João Silva';
select salario from funcionario;
select distinct(salario) from funcionario;
select * from funcionario order by noemFunc;
select * from funcionario order by salario desc;
SELECT * FROM funcionario WHERE salario BETWEEN 2000 AND 4000;
select noemFunc,salario from funcionario where noemFunc like 'J%';
select noemFunc,salario from funcionario where noemFunc like '%a';
select noemFunc from funcionario where noemFunc like '__n%';
select noemFunc, dataNasc from funcionario where noemFunc like '%S____';
select * from Funcionario join departamento on fkDepto = idDepto where departamento.nomeDepto = 'Pesquisa';
select * from Funcionario join departamento on fkDepto = idDepto where departamento.nomeDepto = 'Pesquisa' and funcionario.salario > 3500;
select * from Funcionario join departamento on fkDepto = idDepto where departamento.nomeDepto = 'Pesquisa' and funcionario.noemFunc like 'J%';
select f.idFunc as idFuncionario, f.noemFunc as nomeFuncionario, s.idFunc as idSupervisor, s.noemFunc as nomeSupervisor
from funcionario as f join funcionario as s on f.fkSupervisor = s.idFunc;

select p.idProj, p.fkDepto, g.noemFunc, g.dataNasc from Projeto as p join Departamento on fkDepto = idDepto join funcionario as g
on fkDepto = idDepto where p.localProj = 'São Paulo';

select f.idFunc, f.noemFunc, p.idProj, p.nomeProj, fp.horas from funcionario as f join FuncProj as fp on fkFunc = f.idFunc join projeto as p on fkProj = p.idProj;

select noemFunc from funcionario where year(dataNasc) < 1980;

select count(distinct(salario)) from funcionario;

select count(distinct(localProj)) from Projeto;

select avg(salario) from funcionario;
select sum(salario) from funcionario;

select min(salario) from funcionario;
select max(salario) from funcionario;

select d.idDepto, avg(f.salario), sum(f.salario) from Departamento as d join funcionario as f on d.idDepto = f.fkDepto group by d.idDepto;
select d.idDepto, min(f.salario), max(f.salario) from Departamento as d join funcionario as f on d.idDepto = f.fkDepto group by d.idDepto;

insert into funcionario values
(10,'José da Silva',1800,'m',3,'2000-10-12', null),
(11,'Benedito Almeida',1200,'m',5,'2001-09-01', null);


insert into Departamento values
(110,'RH','2018-11-19', 3);


drop database Exercicio11;