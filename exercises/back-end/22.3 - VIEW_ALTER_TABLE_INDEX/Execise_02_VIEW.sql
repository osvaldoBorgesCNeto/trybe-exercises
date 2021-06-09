SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

USE sakila;
CREATE VIEW film_info AS SELECT fa.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS 'actor', f.title FROM sakila.film_actor AS fa INNER JOIN sakila.film AS f ON f.film_id = fa.film_id INNER JOIN sakila.actor AS a ON a.actor_id = fa.actor_id ORDER BY `actor`;

SELECT * FROM film_info;