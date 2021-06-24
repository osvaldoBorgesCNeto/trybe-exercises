1) Identificando entidades, atributos e relacionamentos

-- ENTIDADES --

ALBUM
ARTISTA
ESTILO MUSICAL
CANCOES

-- ATRIBUTOS --

ALBUM -> albumID - titulo - preco - artistaID - estiloID

ARTISTA -> artistaID - nome

ESTILO MUSICAL -> estiloID - nome

CANCOES -> concoesID - nome - albumID

-- RELACIONAMENTOS --

Relacionamento Um para Um (1..1)
Relacionamento Um para Muitos ou Muitos para Um (1..N)
Relacionamento Muitos para Muitos (N..N)

2) Construindo um diagrama entidade-relacionamento

1:N
ARTISTA -> PRODUZ -> ALBUM

1:N
ESTILO MUSICAL -> POSSUI -> ALBUM

1:N
ALBUM -> POSSUI -> CANCAO

3) Criando um banco de dados para conter suas tabelas

-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;

-- Como utilizar um banco de dados:

SELECT * FROM sakila.actor;

USE sakila;
SELECT * FROM actor;

4) Criando e modelando tabelas de acordo com um diagrama ER

-- EXEMPLO TABELAS

    CREATE TABLE filme_ator(
        AtorId INTEGER,
        FilmeId INTEGER,
        CONSTRAINT PRIMARY KEY(AtorId, FilmeId)
        FOREIGN KEY (AtorId) REFERENCES Actor (Atorid)
        FOREIGN KEY (Filme) REFERENCES Actor (Filmeid)
    );
