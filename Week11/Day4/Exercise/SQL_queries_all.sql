-- Database hr.backup
-- Subqueries
-- Write a query to find the first_name, last_name and salaries of the employees
-- who have a higher salary than the employee whose last_name is Bull.
SELECT first_name, last_name, salary FROM employees
WHERE salary > (SELECT salary FROM employees WHERE last_name='Bell')
ORDER BY salary DESC;
-- Write a SQL subquery to find the first_name and last_name of the employees under a manager 
-- who works for a department based in the United States.
-- Hint : Write single-row and multiple-row subqueries
SELECT first_name, last_name FROM employees e
INNER JOIN departments d ON e.department_id=d.department_id
INNER JOIN locations l ON d.location_id=l.location_id
INNER JOIN countries c ON l.country_id=c.country_id
WHERE
country_name ILIKE 'United States of America'
ORDER BY last_name, first_name ASC
;

-- Write a SQL subquery to find the first_name and last_name of the employees who are working as managers.
SELECT first_name, last_name FROM employees e
WHERE manager_id IS NULL;
-- Using subquery is just silly here but if necessary it would be:
SELECT first_name, last_name FROM employees
WHERE employee_id=(SELECT employee_id FROM employees WHERE manager_id IS NULL);

-- Write a SQL subquery to find the employee(s) first_name and last_name, which salary is greater than the average salary of the employees.
SELECT first_name, last_name, salary FROM employees 
WHERE salary>(SELECT AVG(salary) FROM employees)
ORDER BY salary ASC;
-- Write a SQL subquery to find the employee(s) first_name and last_name, which salary is equal to the minimum salary of their job position.
SELECT first_name, last_name, j.job_title, salary FROM employees e
INNER JOIN jobs j ON e.job_id=j.job_id 
WHERE
salary IN (SELECT  MIN(salary) FROM employees GROUP BY job_id)
ORDER BY j.job_title ASC;
-- Write a query to find the names (first_name, last_name) of the employees who are not supervisors.
SELECT CONCAT(first_name, ' ',last_name) AS "Names" FROM employees e
WHERE manager_id IS NOT NULL;

-- Write a SQL subquery to find the employee(s) ID, first name, last name and salary of all employees
-- whose salary is above the average salary for their departments.
SELECT employee_id, first_name, last_name, e.salary,department_id ,
(SELECT  AVG(salary) AS "AverageSalary" FROM employees em WHERE em.department_id=e.department_id 
 GROUP BY department_id) salaryavg
FROM employees e
WHERE
salary >
(SELECT  AVG(salary) AS "AverageSalary" FROM employees em WHERE em.department_id=e.department_id 
 GROUP BY department_id)
 ;
-- Write a subquery to find the 5th maximum salary of all salaries.
SELECT employee_id, first_name, last_name, salary
FROM employees e
WHERE
employee_id =
(SELECT  employee_id FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 4)
 ;
-- Write a subquery to find the 4th minimum salary of all the salaries.
SELECT employee_id, first_name, last_name, salary
FROM employees e
WHERE
employee_id =
(SELECT  employee_id FROM employees ORDER BY salary ASC LIMIT 1 OFFSET 3)
 ;
-- Write a query to list the department name and number, of all the departments in which there are no employees.
SELECT department_id, department_name
FROM departments d
WHERE
department_id NOT IN
(SELECT  department_id FROM employees GROUP BY department_id);
-- Joins
-- Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments.

-- Write a query to make a join with the employees and departments table to find the name of the employee,
-- including first_name and last name, department ID and name of departments.

-- Write a SQL query to make a join with three tables: employees, departments and locations to find the name,
-- including first_name and last_name, jobs, department name and ID, of the employees working in London.

-- Write a query to make a join with two tables to find the employee id,
-- last_name as Employee along with their manager_id and last name as Manager.

-- Write a query to make a join with two tables employees and departments,
-- to get the employees working in each department (retrieve the employees details, and the department name and number).

-- Write a query to make a join to find the employees who worked in a department which ID is 90 
-- (retrieve the employee ID, job title and number of days the employee worked).

-- Write a query to make a join with three tables, departments, employees,
-- and locations to display the department name, manager name, and city.

-- Write a query to make a join with two tables, employees and jobs to display the job title and average salary of the employees.

-- Write a query to make a join with two tables, employees and departments to display department name, 
-- first_name and last_name, hire date and salary for all the managers who achieved a working experience of more than 15 years.

-- String Function
-- Write a query to update phone_number records. If the the substring ‘124’ was found in that column, 
-- update the phone_number to ‘999’.

-- Write a query to find the details of the employees who contain eight or more characters in their first name.

-- Write a query to join in uppercase, the first letter of the first_name, with the last_name, 
-- with '@example.com' in the email column.

--   **Sample Output :**
--   EMAIL
--   --------------------

--   JDOE@example.com (where first_name is John, and last_name is Doe)


-- Write a query to get the employee id, email but discard the last three characters of the email.


-- Write a query to display the first word in the job title, if the job title contains more than one words.

-- Write a query that displays the first name and the length of the first name for all employees
-- whose name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label.
-- Sort the results by the employees’ first names.

-- Write a query to display the first name and salary for all employees. Display the salary with the $ symbol. Label the column as SALARY.