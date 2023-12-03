create database projetos;
use projetos;

create table grupo (
idGrupo int primary key auto_increment,
nome varchar(45),
descricao varchar(45)
);

create table professor(
idProfessor int primary key auto_increment,
nome varchar(45),
disciplina varchar(45)
) auto_increment=10000;

create table aluno(
ra char(11) primary key,
nome varchar(30),
email varchar(45),
fkGrupo int,
constraint fkGrp 
foreign key(fkGrupo) references grupo(idGrupo)
);

create table projeto(
idProjeto int,
idProfessor int,
idGrupo int,
dtAvaliacao DATE,
nota int,
primary key(idProjeto, idProfessor, idGrupo)
);

INSERT INTO grupo (nome, descricao) VALUES
('Grupo A', 'Temperatura de Gelo'),
('Grupo B', 'Temperatura datacenter'),
('Grupo C', 'Temperatura Colmeia');

INSERT INTO aluno (ra, nome, email, fkGrupo) VALUES
('98745632111', 'Guilherme', 'gui@email.com', 1),
('74185296312', 'Viicente', 'vicente@email.com', 2),
('14785236978', 'Otavio', 'otavioo@email.com', 1);

INSERT INTO professor (nome, disciplina) VALUES
('Gabriel', 'Banco de dados'),
('Giovana', 'Algoritmo'),
('Antonio', 'Pesquisa e Inovacao');

INSERT INTO projeto (idProjeto, idGrupo, idProfessor, dtAvaliacao, nota) VALUES
(1, 1, 10000, '2023-01-01', 8.5),
(2, 1, 10001, '2023-01-02', 7.0),
(3, 2, 10002, '2023-01-03', 9.0),
(4, 3, 10000, '2023-01-04', 8.0),
(5, 3, 10001, '2023-01-05', 8.5);

SELECT * FROM grupo;

SELECT * FROM aluno;

SELECT * FROM professor;

SELECT * FROM projeto;

select grupo.*, aluno.* from grupo join aluno on grupo.idGrupo = aluno.fkGrupo where grupo.idGrupo = 1;

select avg(nota) from projeto;

select max(nota), min(nota) from projeto;

select sum(nota) from projeto;

select professor.*, grupo.*, projeto.dtAvaliacao from projeto
join professor on projeto.idProfessor = professor.idProfessor
join grupo on projeto.idGrupo = grupo.idGrupo;

select professor.*, grupo.*, projeto.dtAvaliacao from projeto
join professor on projeto.idProfessor = professor.idProfessor
join grupo on projeto.idGrupo = grupo.idGrupo
where grupo.idGrupo = 1;

select grupo.nome from projeto join grupo on projeto.idGrupo = grupo.idGrupo
where projeto.idProfessor = 10000;

SELECT grupo.*, aluno.*, professor.*, projeto.dtAvaliacao
FROM projeto
JOIN grupo ON projeto.idGrupo = grupo.idGrupo
JOIN aluno ON grupo.idGrupo = aluno.fkGrupo
JOIN professor ON projeto.idProfessor = professor.idProfessor;

select count(distinct nota) from projeto;

select projeto.idProfessor, avg(nota), sum(nota) from projeto group by projeto.idProfessor;

select projeto.idGrupo, avg(nota), sum(nota) from projeto group by projeto.idGrupo;

select projeto.idProfessor, min(nota), max(nota) from projeto group by projeto.idProfessor;

select projeto.idGrupo, max(nota), min(nota) from projeto group by projeto.idGrupo;