-- Exercise
-- In the table actors, write the following commands:

-- Get the average number of oscars in the table
SELECT AVG(number_oscars) FROM actors;
-- Get distinct actors depending on their number of oscars
SELECT DISTINCT first_name,last_name,number_oscars FROM actors ORDER BY number_oscars DESC  ;
-- Get the actors born after 01/01/1970
SELECT first_name,last_name,age,number_oscars FROM actors WHERE age >'01/01/1970'  ;
-- Get the actors which names are 'David', 'Morgan' or 'Will'
SELECT * FROM actors WHERE first_name in ('David', 'Morgan' , 'Will')  ;
-- In the table actors, write the following commands:

-- Update the first name of Matt Damon to "Maty"
UPDATE actors 
SET first_name='Maty' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age;
-- Update the number of oscars of George Clooney to 4, and return the updated record
UPDATE actors 
SET number_oscars=4 
WHERE first_name='George' AND last_name='Clooney'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age,
	number_oscars;
-- Rename the 'age' column by 'birthdate'
ALTER TABLE actors RENAME COLUMN age TO birthdate;
-- Delete one actor and return it
DELETE FROM actors WHERE actor_id=11
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age,
	number_oscars;
-- Create another table producers, with a foreign key : the id of a movie. The producers table is linked to the movies table
CREATE TABLE producers(
producer_id SERIAL,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (50) NOT NULL,
movie_produced_id INTEGER,
PRIMARY KEY (producer_id),
FOREIGN KEY (movie_produced_id) REFERENCES movies (movie_id)
);
-- Insert some record
INSERT INTO producers ( first_name, last_name,movie_produced_id) VALUES
    ( 'Lawrence','Bender',
    (SELECT movie_id from movies WHERE movie_title='Good Will Hunting')),
    ( 'Jerry','Weintraub', 
    (SELECT movie_id from movies WHERE movie_title='Oceans Eleven'));
-- Display with INNER JOIN
SELECT producers.first_name, producers.last_name, movies.movie_title
FROM producers
INNER JOIN movies
ON producers.movie_produced_id = movies.movie_id;