-- Exercise 1 : DVD Rentals
-- Instructions
-- Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
SELECT f.film_id, title  
FROM film f
INNER JOIN inventory i ON f.film_id=i.film_id
INNER JOIN rental r ON i.inventory_id=r.inventory_id
WHERE 
r.return_date IS NULL;
-- Get a list of all customers who have not returned their rentals. Make sure to group your results.
SELECT CONCAT(c.first_name,' ' ,c.last_name) AS "Customer Name", COUNT(f.film_id)
FROM film f
INNER JOIN inventory i ON f.film_id=i.film_id
INNER JOIN rental r ON i.inventory_id=r.inventory_id
INNER JOIN customer c ON r.customer_id=c.customer_id
WHERE 
r.return_date IS NULL
GROUP BY c.customer_id
ORDER bY COUNT(f.film_id) DESC;
-- Get a list of all the Action films with Joe Swank.

-- Before you start, could there be a shortcut to getting this information? Maybe a view?
SELECT fid, title, description, category, price, length, rating, actors
	FROM public.film_list
		WHERE actors ILIKE '%Joe Swank%'
	AND category='Action';

-- Exercise 2 – Happy Halloween
-- Instructions
-- There is a zombie plague approaching! The DVD rental company is offering to lend all of 
-- its DVDs to the local shelters, so that the citizens can watch the movies together in the shelters 
-- until the zombies are destroyed by the armed forces. Prepare tables with the following data:

-- How many stores there are, and in which city and country they are located.
SELECT co.country, ci.city, COUNT(s.store_id) FROM store s
INNER JOIN address a ON s.address_id=a.address_id
INNER JOIN city ci ON a.city_id=ci.city_id
INNER JOIN country co ON ci.country_id=co.country_id
GROUP BY co.country, ci.city;
-- How many hours of viewing time there are in total in each store – in other words,
-- the sum of the length of every inventory item in each store.
SELECT co.country, ci.city, SUM(f.length)/60 AS "View Hours" FROM film f
INNER JOIN inventory i ON f.film_id=i.film_id
INNER JOIN rental r ON i.inventory_id=r.inventory_id
INNER JOIN store s ON i.store_id=s.store_id
INNER JOIN address a ON s.address_id=a.address_id
INNER JOIN city ci ON a.city_id=ci.city_id
INNER JOIN country co ON ci.country_id=co.country_id
WHERE return_date IS NOT NULL
GROUP BY co.country, ci.city;
-- Make sure to exclude any inventory items which are not yet returned.
-- (Yes, even in the time of zombies there are people who do not return their DVDs)

-- A list of all customers in the cities where the stores are located.
SELECT ci.city, CONCAT(cu.first_name,' ',cu.last_name) AS "Customer" FROM customer cu
INNER JOIN store s ON cu.store_id=s.store_id
INNER JOIN address a ON s.address_id=a.address_id
INNER JOIN city ci ON a.city_id=ci.city_id
GROUP BY ci.city,cu.last_name,cu.first_name
ORDER BY ci.city ASC;
-- A list of all customers in the countries where the stores are located.
SELECT co.country, CONCAT(cu.first_name,' ',cu.last_name) AS "Customer" FROM customer cu
INNER JOIN store s ON cu.store_id=s.store_id
INNER JOIN address a ON s.address_id=a.address_id
INNER JOIN city ci ON a.city_id=ci.city_id
INNER JOIN country co ON ci.country_id=co.country_id
GROUP BY co.country,cu.last_name,cu.first_name
ORDER BY co.COUNTRY ASC;
-- Some people will be frightened by watching scary movies while zombies walk the streets.
-- Create a ‘safe list’ of all movies which do not include the ‘Horror’ category,
-- or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions…
-- Get the sum of their viewing time (length).
-- Hint : use the CHECK contraint

-- For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).