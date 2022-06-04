-- Exercise 1: DVD Rental
-- Instructions
-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.
SELECT COUNT (film_id) FROM film GROUP BY rating;
-- Get a list of all the movies that have a rating of G or PG-13.
-- Filter this list further: look for only movies that are under 2 hours long,
-- and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT film_id,title,description,length,rental_rate FROM film 
WHERE (rating='G' OR rating='PG-13') AND length < 120 AND rental_rate<3.00;
-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
UPDATE customer SET first_name='Ehud',last_name='Miron' 
WHERE customer_id=12 RETURNING customer_id,first_name,last_name;

UPDATE address SET address='Nissenboim 4/23' FROM customer 
WHERE customer.address_id=address.address_id
AND customer_id=12 RETURNING customer_id,first_name,last_name,address;
-- Exercise 2: Students Table
-- Instructions
-- Continuation of the Day1 Exercise XPGold : students table

-- Update
-- ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to UPDATE students SET birth_date='02/11/1998' 
WHERE last_name='Benichou' RETURNING first_name,last_name,birth_date;
-- Change the last_name of David from ‘Grez’ to ‘Guez’.
UPDATE students SET last_name='Guez' 
WHERE last_name='Grez' RETURNING first_name,last_name,birth_date;

-- Delete
-- Delete the student named ‘Lea Benichou’ from the table.
DELETE FROM students WHERE first_name='Lea' AND last_name='Benichou' 
RETURNING first_name,last_name,birth_date;

-- Count
-- Count how many students are in the table.
SELECT COUNT (id) FROM students;
-- Count how many students were born after 1/01/2000.
SELECT COUNT (id) FROM students WHERE birth_date > '1/01/2000';

-- Insert / Alter
-- Add a column to the student table called math_grade.
ALTER TABLE students ADD COLUMN math_grade INTEGER;
-- Add 80 to the student which id is 1.
UPDATE students SET math_grade=80 WHERE id=1 RETURNING id,first_name,last_name,math_grade;
-- Add 90 to the students which have ids of 2 or 4.
UPDATE students SET math_grade=90 WHERE id=2 OR id=4 RETURNING id,first_name,last_name,math_grade;
-- Add 40 to the student which id is 6.
UPDATE students SET math_grade=40 WHERE id=6 RETURNING id,first_name,last_name,math_grade;
-- Count how many students have a grade bigger than 83
SELECT COUNT(id) FROM students WHERE math_grade>83;
-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student,
-- although he received 2 different grades because he retook the math exam.
INSERT INTO students (first_name,last_name,birth_date,math_grade)
VALUES ('Omer','Simpson','1980-10-03',70);
-- Bonus: Count how many grades each student has.
-- Tip: You should display the first_name, last_name and the number of grades of each student.
-- If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.
-- Tip : Use an alias called total_grade to fetch the grades.
-- Hint : Use GROUP BY.
SELECT first_name, last_name, COUNT(math_grade) AS total_grade FROM students 
GROUP BY first_name, last_name ;
-- SUM
-- Find the sum of all the students grades.
SELECT SUM(math_grade) FROM students ;

-- Exercise 3 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Part I

-- Create a table named purchases. It should have 3 columns :
-- id : the primary key of the table
-- customer_id : this column references the table customers
-- item_id : this column references the table items
-- quantity_purchased : this column is the quantity of items purchased by a certain customer
CREATE TABLE purchases (id SERIAL,customer_id INTEGER,item_id INTEGER ,quantity_purchased INTEGER);
-- Insert purchases for the customers, use subqueries:
-- Scott Scott bought one fan
-- Melanie Johnson bought ten large desks
-- Greg Jones bougth two small desks

-- Here is the explanation of the first row:

-- id = 1, this is the auto-incrementing primary key
-- customer_id = 3, because the id of Scott Scott in the customers table is 3
-- item_id = 3, because the id of a fan in the items table is 3
-- quantity_purchased = 1, because Scott Scott bought one fan
INSERT INTO purchases (customer_id,item_id,quantity_purchased)
VALUES	((SELECT customer_id FROM customers WHERE first_name='Scott' AND last_name='Scott'),
		 (SELECT item_id FROM items WHERE name='fan'),1),
	  	((SELECT customer_id FROM customers WHERE first_name='Melanie' AND last_name='Johnson'),
		(SELECT item_id FROM items WHERE name='large desk'),10),
		((SELECT customer_id FROM customers WHERE first_name='Greg' AND last_name='Jones'),
		(SELECT item_id FROM items WHERE name='small desk'),2);


-- Part II

-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?
SELECT * FROM purchases;
-- Not very useful as we don't know who the customers are and what they bought

-- All purchases, joining with the customers table.
SELECT * FROM purchases INNER JOIN customers ON purchases.customer_id=customers.customer_id;
-- Purchases of the customer with the ID equal to 5.
SELECT * FROM purchases INNER JOIN customers ON purchases.customer_id=customers.customer_id 
WHERE purchases.customer_id=5;
-- Purchases for a large desk AND a small desk
SELECT * FROM purchases INNER JOIN items ON purchases.item_id=items.item_id 
WHERE items.name='large desk' OR items.name='small desk';
-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- Customer first name
-- Customer last name
-- Item name
SELECT first_name,last_name,items.name FROM customers 
INNER JOIN purchases ON customers.customer_id=purchases.customer_id
INNER JOIN items ON items.item_id=purchases.item_id;
-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
INSERT INTO purchases (customer_id)VALUES(4);
-- I can add a row because there is no constraint for non-null values for item and amount. I should have put this constraint...