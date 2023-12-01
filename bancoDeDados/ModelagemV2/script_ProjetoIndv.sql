create database projetoindv;

use projetoindv;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(45),
celular char(11),
email varchar(45),
senha varchar(45),
fkjogador int,
foreign key (fkjogador) references jogador (idjogador));

create table jogador(
idjogador int primary key,
nome varchar(45));

create table clube(
idClube int primary key auto_increment,
nome_clube varchar(45),
fkjogador int,
foreign key (fkjogador) references jogador (idjogador));

insert into jogador values 
(1, 'Neymar'),
(2, 'Pelé'),
(3, 'Ronaldo'),
(4, 'Romário'),
(5, 'Zico');

insert into clube(nome_clube, fkjogador) values
('Al hilal', 1),
('Santos', 2),
('Inter de Milão', 3),
('Vasco', 4),
('Flamengo', 5);

select * from usuario;

select * from jogador;

select count(u.fkjogador) as count, j.nome from usuario as u join jogador as j on u.fkjogador = j.idjogador group by j.nome;

select * from jogador join clube on  idjogador = fkjogador;
