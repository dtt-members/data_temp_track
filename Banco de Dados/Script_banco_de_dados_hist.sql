CREATE DATABASE data_temp_track;
USE data_temp_track;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(45) NOT NULL,
emailInst VARCHAR(45) NOT NULL,
senha VARCHAR(10) NOT NULL,
fkEmpresa INT NOT NULL);

CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nomeEmpresa  VARCHAR(45) NOT NULL,
cnpj CHAR(15) NOT NULL,
telefone CHAR(11) NOT NULL,
valContrat VARCHAR(45) NOT NULL,
emailInstitui VARCHAR(45) NOT NULL);

CREATE TABLE hack (
idHack INT PRIMARY KEY NOT NULL,
setor VARCHAR(45) NOT NULL,
qtdSens INT NOT NULL,
fkEmpresaHack INT NOT NULL,
fkSensorT INT NOT NULL,
fkSensorU INT NOT NULL);

CREATE TABLE sensoresTemperatura (
idSensorTemperatura INT PRIMARY KEY NOT NULL,
nomeSensT VARCHAR(45) NOT NULL);

CREATE TABLE sensoresUmidade (
idSensorUmidade INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nomeSensU VARCHAR(45) NOT NULL);

CREATE TABLE umidadeHistorico (
idUmidadr INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
umidadeAtual DECIMAL(4,2) NOT NULL,
dtRegistro DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
fkUmidadeH INT NOT NULL);

CREATE TABLE temperaturaHistorico (
idTemperatura INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
temperaturaAtual DECIMAL(4,2) NOT NULL,
dtRegistro DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
fkTemperaturaH INT NOT NULL);

ALTER TABLE usuario ADD CONSTRAINT fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa);
ALTER TABLE hack ADD CONSTRAINT fkEmpresaHack FOREIGN KEY (fkEmpresaHack) REFERENCES empresa(idEmpresa);
ALTER TABLE hack ADD CONSTRAINT fkSensorT FOREIGN KEY (fkSensorT) REFERENCES sensoresTemperatura(idSensorTemperatura);
ALTER TABLE hack ADD CONSTRAINT fkSensor FOREIGN KEY (fkSensorU) REFERENCES sensoresUmidade(idSensorUmidade);
ALTER TABLE umidadeHistorico ADD CONSTRAINT fkUmidadeH FOREIGN KEY (fkUmidadeH) REFERENCES sensoresUmidade(idSensorUmidade);
ALTER TABLE temperaturaHistorico ADD CONSTRAINT fkTemperaturaH FOREIGN KEY (fkTemperaturaH) REFERENCES sensoresTemperatura(idSensorTemperatura);