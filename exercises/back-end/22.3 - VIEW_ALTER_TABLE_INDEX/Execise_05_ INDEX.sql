CREATE FULLTEXT INDEX sakila ON category (name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX sakila On category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';