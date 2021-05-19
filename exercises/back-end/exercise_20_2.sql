SELECT 
    *
FROM
    sakila.customer
WHERE
    email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT 
    *
FROM
    sakila.customer
WHERE
    active IS FALSE AND store_id = 2
        AND first_name <> 'KENNETH';

SELECT 
    title AS 'Titulo',
    release_year AS 'Ano de Lancamento',
    replacement_cost AS 'Custo',
    rating
FROM
    sakila.film
WHERE
    replacement_cost < 18
        AND (rating = 'NC-17' OR rating = 'R')
ORDER BY replacement_cost DESC , title
LIMIT 100;

SELECT COUNT(*) FROM sakila.customer
WHERE active = 1 AND store_id = 1;

SELECT 
    title
FROM
    sakila.film
WHERE
    rating = 'R'
ORDER BY rental_rate DESC , title
LIMIT 50;