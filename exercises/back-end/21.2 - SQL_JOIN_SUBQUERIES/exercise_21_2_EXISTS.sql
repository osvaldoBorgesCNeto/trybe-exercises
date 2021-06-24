SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;
SELECT * FROM hotel.Cars;

SELECT ID, Title FROM hotel.Books AS b WHERE NOT EXISTS (SELECT * FROM hotel.Books_Lent WHERE b.Id = book_id);

SELECT ID, Title FROM hotel.Books AS b WHERE EXISTS (SELECT * FROM hotel.Books_Lent WHERE b.Id = book_id) AND Title LIKE '%lost%';

SELECT c.Name FROM hotel.Customers AS c WHERE NOT EXISTS (SELECT * FROM hotel.CarSales WHERE c.CustomerID = CustomerID);

SELECT 
    c.Name, cars.Name
FROM
    hotel.Customers AS c
        INNER JOIN
    hotel.Cars AS cars
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales AS cs
        WHERE
            c.CustomerID = CustomerID
                AND cars.Id = cs.CarID);