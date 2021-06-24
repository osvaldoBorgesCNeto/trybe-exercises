SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT m.title, bo.domestic_sales, bo.international_sales FROM Pixar.BoxOffice AS bo INNER JOIN Pixar.Movies AS m ON bo.movie_id = m.id;

SELECT m.title, bo.domestic_sales, bo.international_sales FROM Pixar.BoxOffice AS bo INNER JOIN Pixar.Movies AS m ON bo.movie_id = m.id WHERE bo.domestic_sales  < bo.international_sales;

SELECT m.title, bo.rating FROM Pixar.BoxOffice AS bo INNER JOIN Pixar.Movies AS m ON bo.movie_id = m.id ORDER BY rating DESC;

SELECT t.name, t.location, m.title FROM Pixar.Theater AS t LEFT JOIN Pixar.Movies AS m ON t.id = m.theater_id ORDER BY t.name;

SELECT m.title, m.director, m.year, m.length_minutes, t.name FROM Pixar.Theater AS t RIGHT JOIN Pixar.Movies AS m ON t.id = m.theater_id ORDER BY t.name;

SELECT m.title, bo.rating FROM Pixar.BoxOffice AS bo INNER JOIN Pixar.Movies AS m ON bo.movie_id = m.id WHERE rating > 7.5;

SELECT m.title FROM Pixar.Movies AS m WHERE id in (SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5);

SELECT m.title, m.year, bo.rating FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS bo ON m.id = bo.movie_id WHERE year > 2009;

SELECT m.title, m.year FROM Pixar.Movies AS m WHERE id in (SELECT movie_id FROM Pixar.BoxOffice WHERE year > 2009);

SELECT t.name, t.location FROM Pixar.Theater AS t WHERE EXISTS (SELECT * FROM Pixar.Movies AS m WHERE t.id = m.theater_id);

SELECT t.name, t.location FROM Pixar.Theater AS t WHERE NOT EXISTS (SELECT * FROM Pixar.Movies AS m WHERE t.id = m.theater_id);
