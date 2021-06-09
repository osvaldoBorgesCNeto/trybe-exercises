SELECT * FROM sakila.film;
SELECT AVG(rental_duration) AS 'Media de Duracao' FROM sakila.film;

SELECT MIN(rental_duration) AS 'Duracao Minima' FROM sakila.film;

SELECT MAX(rental_duration) AS 'Duracao Maxima' FROM sakila.film;

SELECT SUM(rental_duration) AS 'Tempo de Exibicao Total' FROM sakila.film;

SELECT COUNT(rental_duration) AS 'Filmes Registrados' FROM sakila.film;