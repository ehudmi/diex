-- Update Statement
-- Write a SQL statement to change the following details belonging all employes who’s department_id is 110:
-- email column should be: ‘not available’
-- commission_pct column should be: 0.10

-- Write a SQL statement which will change the email column of all employees to ‘available’ whom work in the ‘Accounting’ department.

-- Write a SQL statement to change the salary of the employee whose ID is 105.
-- If the existing salary is less than 5000, change it to 8000.




-- Aggregate Functions
-- Write a query to find the number of jobs available in the employees table.

-- Write a query to get the number of employees working in each post.

-- Write a query to get the difference between the highest and lowest salaries.

-- Write a query to find a manager ID and the salary of the lowest-paid employee under that manager.

-- Write a query to get the average salary for each post excluding programmer.

-- Write a query to get the average salary for all departments that employ more than 10 employees.


-- Alter Table Statement
-- Write a SQL statement to change the name of the column “state_province” to “state” in the locations table,
-- keeping the same data type and size.

-- Write a SQL statement to add a primary key to the “location_id” column in the locations table.


-- Create Tables
-- Some Review:

-- ON UPDATE CASCADE action allows you to perform the cross-table update
-- ON DELETE RESTRICT action rejects the deletion.
-- ON DELETE CASCADE action allows to delete records in the employees(child) table that refers to a record 
-- in the jobs(parent) table when the record in the parent table is deleted
-- ON DELETE SET NULL action will set the foreign key column values in the child table(employees) to NULL
-- when the record in the parent table(jobs) is deleted, with a condition that the foreign key column in the child table
-- must accept NULL values.
-- ON UPDATE SET NULL action resets the values in the rows in the child table(employees) to NULL values
-- when the rows in the parent table(jobs) are updated.
-- The default action is ON DELETE RESTRICT.
-- ON DELETE NO ACTION and the ON UPDATE NO ACTION actions will reject the deletion and any updates.


-- You have to decide which constraint should be used in every question below:



-- Write a SQL statement to create a simple table “new_countries” including columns country_id and country_name.
-- make sure that no duplicate data is added to the country_id column (which data type should you use for the column country_id ?)
-- make sure that no countries except Italy, India and China will be entered in the table.

-- Write a SQL statement to create a duplicate copy of the “new_countries” table including
-- the structure and the data of the “new_countries” table.

-- Write a SQL statement to create a table named “new_jobs” including columns job_id, job_title, min_salary, max_salary
-- make sure that the max_salary column won’t exceed 25000.
-- make sure that job_title, min_salary and max_salary have the following default values:
-- job_title is blank
-- min_salary is 8000
-- max_salary is NULL.

-- Write an SQL statement to create a table called “new_employees” the table should include the following columns:
-- employee_id, first_name, last_name, email, phone_number hire_date, job_id and salary.
-- make sure that, the employee_id column does not contain any duplicate value at the time of insertion,
-- make sure that the foreign key column job_id, references the column job_id in the “new_jobs” table.

-- Write a SQL statement to create a table called “new_job_history” the table should include the following columns:
-- employee_id, start_date, end_date, job_id
-- make sure that the foreign key employee_id references the column employee_id in the “new_employees” table.
-- make sure that the foreign key job_id is equal to an id that exists in the “new_jobs” table.


-- Insert
-- Write a SQL statement to insert a record with your own value into the “new_countries” table.

-- Using only one insert statement insert 3 row of data to the “new_countries” table

-- Write a SQL statement to insert the rows whithin the “new_countries” table to a duplicate table.

-- Write a SQL statement to insert data into the “new_employees” table,
-- the job_id column must contain values which exist in the “new_jobs” table.