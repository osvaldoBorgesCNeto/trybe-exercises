USE hr;
ALTER TABLE regions CHANGE region_name region VARCHAR(25);

SELECT * FROM hr.regions;