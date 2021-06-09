SELECT * FROM sakila.film;
SELECT * FROM sakila.film_category;
SELECT * FROM sakila.category;

USE sakila;
CREATE VIEW film_with_categories AS SELECT f.title, fc.category_id, c.name FROM sakila.film_category AS fc INNER JOIN sakila.film AS f ON f.film_id = fc.film_id INNER JOIN sakila.category AS c ON c.category_id = fc.category_id ORDER BY f.title ASC;

SELECT * FROM sakila.film_with_categories;