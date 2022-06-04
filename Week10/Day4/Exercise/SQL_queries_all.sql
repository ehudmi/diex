-- 🌟 Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER BY price ASC;
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE price>= 80 ORDER BY price DESC;
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name,last_name FROM customers ORDER BY first_name ASC LIMIT 3;
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers ORDER BY last_name DESC;

-- 🌟 Exercise 2 : Dvdrental Database
-- Instructions
-- Setup
-- We will install a new sample database on our PostgreSQL servers.
-- Download this sample database file

-- We will use the newly installed dvdrental database.

-- In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer;
-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT (first_name,' ',last_name) AS full_name FROM customer ;
-- Lets get all the dates that accounts were created.
-- Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date FROM customer ;
-- Write a query to get all the customer details from the customer table,
-- it should be displayed in descending order by their first name.
SELECT * FROM customer ORDER BY first_name DESC ;
-- Write a query to get the film ID, title, description, year of release
-- and rental rate in ascending order according to their rental rate.
SELECT film_id, title,description,release_year,rental_rate FROM film ORDER BY rental_rate ASC ;
-- Write a query to get the address, and the phone number of all customers living in the Texas district,
-- these details can be found in the “address” table.
SELECT address, phone FROM address WHERE district='Texas' ;
-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film WHERE film_id=15 OR film_id=150 ;
-- Write a query which should check if your favorite movie exists in the database.
-- Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id,title,description,length,rental_rate FROM film WHERE title = 'National Story' ;
-- No luck finding your movie? Maybe you made a mistake spelling the name.
-- Write a query to get the film ID, title, description, length and the rental rate
-- of all the movies starting with the two first letters of your favorite movie.
SELECT film_id,title,description,length,rental_rate FROM film WHERE title LIKE 'Na%' ;
-- Write a query which will find the 10 cheapest movies.
SELECT film_id,title,description,length,rental_rate,replacement_cost FROM film
ORDER BY replacement_cost ASC LIMIT 10 ;
-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT film_id,title,description,length,rental_rate,replacement_cost FROM film
ORDER BY replacement_cost ASC OFFSET 10 FETCH FIRST 10 ROWS ONLY;
-- Write a query which will join the data in the customer table and the payment table.
-- You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT payment.customer_id,payment_date,amount FROM payment INNER JOIN customer 
ON payment.customer_id=customer.customer_id
ORDER BY customer_id ASC;
-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT film.film_id,title,description FROM film WHERE NOT EXISTS 
(SELECT * FROM inventory WHERE film.film_id=inventory.film_id );
-- Write a query to find which city is in which country.
SELECT city,country.country FROM city 
INNER JOIN country ON country.country_id=city.country_id;
-- Bonus You want to be able to see how your sellers have been doing? Write a query to get
-- the customer’s id, names (first and last), the amount and the date of payment ordered by
-- the id of the staff member who sold them the dvd.
SELECT customer.customer_id,first_name,last_name,payment.amount,payment.payment_date,staff_id FROM customer 
INNER JOIN payment ON customer.customer_id=payment.customer_id ORDER BY staff_id ASC ;