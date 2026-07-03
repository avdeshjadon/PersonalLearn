# SQL Views (Virtual Tables)

An **SQL View** is a virtual table based on the result-set of an SQL statement. It looks and acts exactly like a real table, but it doesn't actually store any data itself!

Think of a View as a "saved query". 

## Why use Views?
If you have a very complex `JOIN` query that you run every single day, you can save it as a View. Then, you can just `SELECT * FROM MyView` instead of typing out the 20-line complex query again!

## 1. Creating a View
Let's create a virtual table that ONLY shows customers from Mumbai:

```sql
CREATE VIEW [Mumbai Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE City = 'Mumbai';
```
> **Note:** A view always shows real-time data! Every time you query the view, the database engine runs the underlying `SELECT` statement to fetch fresh data.

## 2. Using the View
Now, we can query our new view just like a real table:
```sql
SELECT * FROM [Mumbai Customers];
```

## 3. Updating and Dropping Views
If you want to add a new column to your view, you use `ALTER VIEW` (SQL Server) or `CREATE OR REPLACE VIEW` (MySQL/Oracle).

When you no longer need the view, just drop it:
```sql
DROP VIEW [Mumbai Customers];
```
*(Dropping a view NEVER deletes the actual data in your real tables).*

---

## Quick Recap
- **View**: A virtual table that acts as a shortcut for a complex `SELECT` query.
- It doesn't take up storage space (it only stores the query definition).
- Always fetches real-time data from the underlying tables.
