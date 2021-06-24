CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE setores(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE funcionarios(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    contato VARCHAR(100) NOT NULL,
    telefone VARCHAR(45) NOT NULL,
    data_cadastro VARCHAR(45) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE funcionario_setor(
	setor_id INT NOT NULL,
    funcionario_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(setor_id, funcionario_id),
	FOREIGN KEY (setor_id) REFERENCES setores(setor_id),
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(funcionario_id)
) ENGINE=InnoDB;

INSERT INTO
	setores (nome)
		VALUES
	('Administracao'),
    ('Vendas'),
    ('Operacional'),
    ('Estrategico'),
    ('Marketing');

INSERT INTO
	funcionarios
		(nome, sobrenome, contato, telefone, data_cadastro)
			VALUES
		('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
        ('Andre', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
        ('Cintia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
        ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO 
	funcionario_setor
		(funcionario_id, setor_id)
			VALUES
		(1,1),
		(1,2),
		(2,3),
		(3,4),
        (3,2),
        (4,5);