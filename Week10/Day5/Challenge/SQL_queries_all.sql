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
-- Display all the items.
SELECT * FROM items;
-- Display all the orders.
SELECT * FROM orders;
-- Use Inner Join to display the orders with their items.
SELECT order_id,orders.item_id,items.description,quantity,quantity*items.price AS "Total Order Price" FROM orders 
INNER JOIN items ON orders.item_id=items.item_id;