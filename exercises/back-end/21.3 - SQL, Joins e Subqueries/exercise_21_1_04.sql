SELECT * FROM sakila.film;

SELECT film_id, title, IF (title = 'ACE GOLDFINGER', 'Ja assisti a esse filme', 'Nao conheco o filme') AS 'conheco o filme?' FROM sakila.film;

SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Nao recomendo para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Nao recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Nao recomendado para menores de 17 anos'
		ELSE 'Proibido para menores de idade'
    END AS 'publico alvo'
FROM sakila.film;