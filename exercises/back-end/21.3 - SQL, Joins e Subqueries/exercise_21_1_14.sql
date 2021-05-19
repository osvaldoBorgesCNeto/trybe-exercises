SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;

SELECT store_id, IF(active, 'Ativos', 'Inativos') AS 'Active', COUNT(*) FROM sakila.customer GROUP BY store_id, active ORDER BY store_id, Active;

SELECT rating, AVG(length) AS 'Media' FROM sakila.film GROUP BY rating ORDER BY Media DESC;

SELECT district, COUNT(*) FROM sakila.address GROUP BY district ORDER BY district DESC;

--

SELECT rating, AVG(length) AS 'Length' FROM sakila.film GROUP BY rating HAVING Length BETWEEN 115.0 AND 121.50 ORDER BY Length DESC;

SELECT rating, SUM(replacement_cost) AS 'Cost' FROM sakila.film GROUP BY rating HAVING Cost > 3950.50 ORDER BY Cost ASC;