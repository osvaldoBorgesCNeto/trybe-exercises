SELECT 
    *
FROM
    Scientists.Scientists
WHERE
    Name LIKE '%e%';

SELECT 
    *
FROM
    Scientists.Projects
WHERE
    Name LIKE 'A%';

SELECT 
    Name
FROM
    Scientists.Projects
WHERE
    Code IN ('AeH3' , 'Ast3', 'Che1');

SELECT 
    *
FROM
    Scientists.Projects
WHERE
    Hours > 500;

SELECT 
    *
FROM
    Scientists.Projects
WHERE
    Hours BETWEEN 250 AND 800;
    
SELECT
    *
FROM
    Scientists.Projects
WHERE
    Name NOT LIKE 'A%';
    
SELECT * FROM Scientists.Projects
WHERE Code LIKE '%H%';
