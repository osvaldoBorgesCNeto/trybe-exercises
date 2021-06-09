USE hr;
ALTER TABLE countries CHANGE COUNTRY_NAME country VARCHAR(45);

SELECT * FROM hr.countries;