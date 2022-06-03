-- Instructions
-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
SELECT COUNT(actor_id) FROM actors;
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- It's impossible to add a record with blank fields because it violates the non-null constraint on the columns
