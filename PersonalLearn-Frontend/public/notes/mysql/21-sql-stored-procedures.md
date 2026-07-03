# SQL Stored Procedures

If you find yourself writing the exact same SQL query over and over again every single day, you are wasting time! 

A **Stored Procedure** is a piece of SQL code that you can save directly inside the database and reuse whenever you want. You can even pass "variables" (parameters) to it.

> **Note:** The exact syntax for Stored Procedures changes depending on your database (MySQL, SQL Server, PostgreSQL). Below is the general syntax for **SQL Server**.

---

## 1. Creating a Stored Procedure
Let's create a procedure that gets all customers from a specific city. We don't want to hardcode the city name, so we use a parameter `@City`.

```sql
CREATE PROCEDURE GetCustomersByCity
  @City nvarchar(50)
AS
BEGIN
  SELECT * FROM Customers
  WHERE City = @City;
END;
```
*Once you run this, the database remembers this code forever!*

---

## 2. Executing a Stored Procedure
Now, whenever your application needs customers from Delhi, you don't write a `SELECT` statement. You just `EXEC` (Execute) the procedure and pass 'Delhi' to it.

```sql
EXEC GetCustomersByCity @City = 'Delhi';
```

---

## 3. Multiple Parameters
You can pass as many variables as you want, just separate them with commas.

```sql
CREATE PROCEDURE GetCustomersByCityAndCode
  @City nvarchar(50),
  @PostalCode nvarchar(10)
AS
BEGIN
  SELECT * FROM Customers
  WHERE City = @City AND PostalCode = @PostalCode;
END;

-- To Execute:
EXEC GetCustomersByCityAndCode @City = 'Pune', @PostalCode = '411004';
```

---

## 4. Deleting a Stored Procedure
If you don't need it anymore, you can drop it.
```sql
DROP PROCEDURE IF EXISTS GetCustomersByCity;
```

---

## Why Use Stored Procedures?
1. **Reusability:** Write once, use everywhere.
2. **Speed:** They are pre-compiled by the database, making them faster than raw SQL queries sent from an app.
3. **Security:** You can give a user permission to *run* the procedure, without giving them permission to see the actual tables!
