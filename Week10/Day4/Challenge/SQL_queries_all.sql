-- Daily Challenge : SQL Puzzle
-- Instructions
-- In this puzzle you have to go through all the SQL queries and provide us the output of
-- the requests before executing them (ie. make an assumption).
-- Then, execute them to make sure you were correct.



-- Queries
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

-- This query will create a table called FirstTab with 2 columns - an id which is of TYPE number 
-- and a name which is a 10 character string

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

-- This query will append values into the table. It won't fail because the id is not constrained to be sequential or non-null

SELECT * FROM FirstTab

-- This query will return all rows from the table FirstTab

CREATE TABLE SecondTab (
    id integer 
)

-- This query will create a table called SecondTab with 1 column - an id which is of TYPE number

INSERT INTO SecondTab VALUES
(5),
(NULL)

-- This query will append values into the table. It won't fail because there are no constraints

SELECT * FROM SecondTab

-- This query will return all rows from the table SecondTab

-- DATA
-- Table1 – FirstTab
ID  Name
5   Pawan
6   Sharlee
7   Krish
NULL    Avtaar


-- Table2 – SecondTab
ID
5
NULL


-- Questions
-- Q1. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
-- Predicted - the output will be 3
-- Actual - the output is 0 - can't join on null

-- Q2. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
-- Predicted - the output will be 3
-- Actual - the output is 2 - can't join on null

-- Q3. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
-- Predicted - the output will be 2
-- Actual - the output is 0 - the select id does not generate a list to compare?

-- Q4. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
-- Predicted - the output will be 2
-- Actual - the output is 2 - there is a specific id to compare

-- Can't use NULL with IN