CREATE DATABASE IF NOT EXISTS Zoo;

ANIMAL -> animal_id - nome - especie_id - sexo - idade - localizacao_id
LOCALIZACAO -> localizacao_id - nome - gerente_id
ESPECIE -> especie_id - nome
GERENTE -> gerente_id - nome

USE Zoo;

CREATE TABLE especie(
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE localizacao(
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    especie_id INT NOT NULL,
    sexo VARCHAR(45) NOT NULL,
    idade INT NOT NULL,
    localizacao_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especie (especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id)
) ENGINE=InnoDB;

CREATE TABLE animal_localizacao(
	animal_id INT,
    localizacao_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, localizacao_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id)
) ENGINE=InnoDB;

