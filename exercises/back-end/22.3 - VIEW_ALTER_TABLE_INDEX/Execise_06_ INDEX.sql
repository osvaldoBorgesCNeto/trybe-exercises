CREATE INDEX sakila ON address (postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX sakila ON address;