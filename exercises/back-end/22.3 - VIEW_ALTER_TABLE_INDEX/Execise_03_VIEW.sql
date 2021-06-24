SELECT * FROM sakila.address;
SELECT * FROM sakila.city;

USE sakila;
CREATE VIEW address_info AS SELECT a.address_id, a.address, a.district, c.city_id, c.city FROM sakila.address AS a INNER JOIN sakila.city AS c ON c.city_id = a.city_id ORDER BY c.city;

SELECT * FROM address_info;