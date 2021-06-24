SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.customer;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
SELECT * FROM sakila.payment;
SELECT * FROM sakila.film;

SELECT a.actor_id, a.first_name, fa.film_id FROM sakila.actor AS a INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id;

SELECT s.first_name, s.last_name, a.address FROM sakila.staff AS s INNER JOIN sakila.address AS a ON s.address_id = a.address_id;

SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    a.address_id,
    a.address
FROM
    sakila.customer AS c
        INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

SELECT 
    c.first_name, c.email, c.address_id, a.address, a.district
FROM
    sakila.customer AS c
        INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
WHERE
    a.district = 'California'
        AND c.first_name LIKE '%rene%';

SELECT 
    c.first_name, COUNT(a.address) AS number
FROM
    sakila.customer AS c
        INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
WHERE
    active = 1
GROUP BY c.first_name
ORDER BY number DESC;

SELECT 
    s.first_name, s.last_name, AVG(p.amount)
FROM
    sakila.staff AS s
        INNER JOIN
    sakila.payment AS p ON s.staff_id = p.staff_id
WHERE
    YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT 
    a.actor_id, a.first_name, fa.film_id, f.title
FROM
    sakila.actor AS a
        INNER JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
        INNER JOIN
    sakila.film AS f ON fa.film_id = f.film_id;