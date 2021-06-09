SELECT * FROM sakila.staff;
INSERT INTO sakila.staff
	(first_name, last_name, address_id, store_id, active, username)
    VALUES
    ('OSVALDO', 'BORGES', 2, 1, 1, 'Osvaldo'),
    ('JOAO VITOR', 'BORGES', 2, 1, 1, 'Joao');

INSERT INTO sakila.actor
	(first_name, last_name)
    SELECT first_name, last_name FROM sakila.customer
	ORDER BY customer_id
    LIMIT 5;
SELECT * FROM sakila.actor
	WHERE first_name = 'JULIA';

INSERT INTO sakila.store
	(manager_staff_id, address_id)
    VALUES 
    (6, 2);
SELECT * FROM sakila.store;

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
	SET first_name = 'JULES'
    WHERE first_name = 'JULIA';
    
SELECT * FROM sakila.actor
	WHERE first_name = 'JULES';
    
SELECT * FROM sakila.category;

UPDATE sakila.category
	SET name = 'Science Fiction'
    WHERE name = 'Sccience Fiction';
    
SELECT * FROM sakila.film;

UPDATE sakila.film
	SET rental_rate = 25
    WHERE length > 100
    AND rating IN ('G', 'PG', 'PG-13')
    AND replacement_cost > 20;

UPDATE sakila.film
	SET rental_rate = (
    CASE
		WHEN length BETWEEN 0 AND 100 THEN 10
        WHEN length > 100 THEN 20
        END);