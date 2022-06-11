-- Daily Challenge : Items And Orders
-- Instructions
-- Create a table called orders and a table called items.
-- You decide which fields should be in each table, although make sure the items table has a column called price.

-- There should be a one to many relationship between the orders table and the items table.
-- An order can have many items, but an item can belong to only one order.
CREATE TABLE items (item_id SERIAL PRIMARY KEY, description VARCHAR (255), price INTEGER);
CREATE TABLE orders (order_id INTEGER,order_date DATE, item_id INTEGER, quantity INTEGER,
FOREIGN KEY (item_id) REFERENCES items(item_id));
INSERT INTO items (description,price) VALUES ('big lamp',300), ('small lamp',150),
('big chair',800),('small chair',400),('big bed',2000),('small bed',1000);
INSERT INTO orders (order_id,order_date,item_id,quantity) VALUES (1,'01/06/2020',1,4),(1,'01/06/2020',3,2),
(1,'01/06/2020',4,1),(2,'02/06/2020',3,1),(2,'02/06/2020',2,2),(2,'02/06/2020',5,2);
-- Create a function that returns the total price for a given order.
CREATE OR REPLACE FUNCTION calc_total (check_order_id INTEGER)
RETURNS INTEGER 
LANGUAGE PLPGSQL
AS $$
DECLARE
Total_Price INTEGER;
BEGIN
Total_Price:=(SELECT SUM
(quantity*(SELECT price FROM items i WHERE i.item_id=o.item_id)) orderItemsPrice
FROM orders o Where order_id=check_order_id) ;
RETURN Total_Price;
END;
$$;

-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the product_orders table.
-- Create a function that returns the total price for a given order of a given user.
