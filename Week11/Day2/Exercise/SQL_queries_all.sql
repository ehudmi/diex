-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all film languages.
SELECT language.name FROM film INNER JOIN language ON language.language_id=film.language_id ;
-- Get a list of all films joined with their languages – select the following details :
-- film title, description, and language name. Try your query with different joins:
SELECT title, description,language.name FROM film INNER JOIN language ON language.language_id=film.language_id ;
-- Get all films, even if they don’t have languages.
SELECT title, description,language.name FROM film
LEFT OUTER JOIN language ON language.language_id=film.language_id ;
-- Get all languages, even if there are no films in those languages.
SELECT title, description,language.name FROM film
RIGHT OUTER JOIN language ON language.language_id=film.language_id ;
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (id INTEGER PRIMARY KEY, name VARCHAR (100));
INSERT INTO new_film (id,name) VALUES (1,'Pig'), (2,'Equilibrium'),(3,'Jaws'),(4,'Morbius'),(5,'Venom');
-- Create a new table called customer_review, which will contain film reviews that customers will make.

-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review (review_id SERIAL NOT NULL PRIMARY KEY, film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
language_id INTEGER REFERENCES language(language_id), title VARCHAR(50), score INTEGER CHECK (score BETWEEN 1 AND 10),
review_text TEXT, last_update DATE);
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (1,1,'This is not the pig you were looking for',10,
		'This has to be the best film of the year, sorry....of the last 5 years, I was touched to my very
		essence by the humanity, cried with the protagonist and felt his pain','06/06/2022'),
		(5,1,'Tom Hardy - don''t eat me',8,'As far as superhero movies or arch-villain movies go - 
		 this one is a keeper for the fun of it bringing fond memories of Deadpool','06/06/2022');
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id=5;
-- the relevant review gets deleted from the customer_review table because of the ON DELETE CASCADE constraint

-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film SET language_id=5 WHERE film_id = 10 OR film_id =15 OR film_id=30 OR film_id=50;
UPDATE film SET language_id=2 WHERE film_id = 12 OR film_id =19 OR film_id=35 OR film_id=56;
-- Which foreign keys (references) are defined for the customer table?

-- Answer: No foreign keys are defined for the customer table

-- How does this affect the way in which we INSERT into the customer table?

-- Answer: That means we are not constrained in the INSERT but that can affect referential integrity...

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- Answer: It's an easy step as there are no constraints

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies,
-- but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental,
-- and he returned it between the 28th of July and the 1st of August, 2005.

-- The 4th film : His friend Matthew Mahan watched this film, as well.
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.