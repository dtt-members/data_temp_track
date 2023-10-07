Create database metricas;

use metricas;

create table sensores (
	idSensores int primary key,
    dht11_umidade float,
    lm35_temperatura float,
    chave int
);

desc sensores;

drop table sensores;


select * from sensores;