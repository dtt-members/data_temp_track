Create database metricas;

use metricas;

create table sensores (
	idSensor int primary key auto_increment,
    dht11Umidade varchar(45),
    dht11Temperatura varchar(45),
    luminosidade varchar(45),
    lm35Temperatura varchar(45)
) auto_increment = 100;