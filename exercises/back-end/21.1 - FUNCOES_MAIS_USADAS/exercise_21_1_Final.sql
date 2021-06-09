SELECT * FROM hr.employees ORDER BY EMPLOYEE_ID ASC;

SELECT FIRST_NAME, MAX(SALARY) FROM hr.employees;

SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

SELECT JOB_ID, AVG(SALARY) AS MEDIA FROM hr.employees GROUP BY JOB_ID ORDER BY MEDIA DESC;

SELECT SUM(SALARY) AS 'TOTAL A PAGAR' FROM hr.employees;

SELECT ROUND(MAX(SALARY), 2), ROUND(MIN(SALARY), 2), ROUND(SUM(SALARY), 2), ROUND(AVG(SALARY), 2) FROM hr.employees;

SELECT COUNT(JOB_ID) FROM hr.employees WHERE JOB_ID = 'IT_PROG';

SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;

SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG';

SELECT JOB_ID, AVG(SALARY) AS Media FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID <> 'IT_PROG' ORDER BY Media DESC;

SELECT DEPARTMENT_ID AS Departamento, AVG(SALARY) AS Media, COUNT(*) AS Total_Funcionario FROM hr.employees GROUP BY DEPARTMENT_ID HAVING Total_Funcionario > 10;

SELECT REPLACE(PHONE_NUMBER, '515', '777') FROM hr.employees;

SELECT * FROM hr.employees WHERE LENGTH(FIRST_NAME) >= 8;

SELECT EMPLOYEE_ID AS ID, FIRST_NAME AS PRIMEIRO_NOME, YEAR(HIRE_DATE) AS ANO FROM hr.employees;

SELECT EMPLOYEE_ID AS ID, FIRST_NAME AS PRIMEIRO_NOME, DAY(HIRE_DATE) AS ANO FROM hr.employees;

SELECT EMPLOYEE_ID AS ID, FIRST_NAME AS PRIMEIRO_NOME, MONTH(HIRE_DATE) AS ANO FROM hr.employees;

SELECT UCASE(FIRST_NAME) FROM hr.employees;

SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE HIRE_DATE BETWEEN '1987-07-01' AND '1987-07-31';

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(NOW(), HIRE_DATE) FROM hr.employees;