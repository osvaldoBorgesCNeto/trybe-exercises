SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT 
    m.title, m.director, m.year, m.length_minutes, bo.rating
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS bo ON bo.movie_id = m.id
WHERE
    rating > 8;
    
SELECT 
    m1.title,
    m1.length_minutes,
    m1.director,
    m2.title,
    m2.length_minutes
FROM
    Pixar.Movies AS m1,
    Pixar.Movies AS m2
WHERE
    m1.director = m2.director
        AND m1.title <> m2.title;
        
SELECT 
    m.title, m.length_minutes
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS bo ON m.id = bo.movie_id
WHERE
    (bo.domestic_sales + bo.international_sales) >= 500000000
        AND m.length_minutes > 110;

SELECT 
    m.title
FROM
    Pixar.Movies AS m
WHERE
    m.id IN (SELECT 
            bo.movie_id
        FROM
            Pixar.BoxOffice AS bo
        WHERE
            (bo.domestic_sales + bo.international_sales) >= 500000000
                AND m.length_minutes > 110);