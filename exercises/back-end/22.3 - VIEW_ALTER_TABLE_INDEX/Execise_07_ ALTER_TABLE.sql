USE hr;
ALTER TABLE locations CHANGE street_address address VARCHAR(1000) NOT NULL;

SELECT * FROM hr.locations;