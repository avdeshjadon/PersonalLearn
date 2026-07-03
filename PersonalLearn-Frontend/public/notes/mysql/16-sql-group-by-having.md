# SQL GROUP BY & HAVING

When working with large tables, you often want to summarize your data. For example, instead of seeing every single order, you might want to know the *total number of orders per customer*. This is where `GROUP BY` and `HAVING` come in!

Before we start, let's look at our `Customers` and `Orders` tables.

**`Customers` Table:**
| CustomerID | CustomerName | City |
| :--- | :--- | :--- |
| 1 | Sharma Stores | Delhi |
| 2 | Verma Sweets | Pune |
| 3 | Amit Gupta | Delhi |
| 4 | Reddy Enterprises | Hyderabad |

**`Orders` Table:**
| OrderID | CustomerID | Price |
| :--- | :--- | :--- |
| 101 | 1 | 500 |
| 102 | 1 | 1500 |
| 103 | 2 | 300 |
| 104 | 3 | 800 |

---

## 1. The GROUP BY Statement
The `GROUP BY` statement groups rows that have the same values into "summary rows". It is almost ALWAYS used with Aggregate Functions (like `COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()`).

**Example: How many customers do we have in each city?**
```sql
SELECT City, COUNT(CustomerID) AS NumberOfCustomers
FROM Customers
GROUP BY City;
```
*Result:*
- Delhi: 2
- Pune: 1
- Hyderabad: 1

*How it works:* SQL puts all the 'Delhi' rows into one bucket, counts them, and gives you the summary.

**Example: Total Sales per Customer (Using JOIN & GROUP BY):**
```sql
SELECT Customers.CustomerName, SUM(Orders.Price) AS TotalSpent
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
GROUP BY Customers.CustomerName;
```
*(Sharma Stores will show a total of 2000, Verma Sweets 300, etc.)*

---

## 2. The HAVING Clause
You already know that we use the `WHERE` clause to filter data. However, **the `WHERE` clause cannot be used with aggregate functions.** 

If you want to filter your *grouped* data (e.g., "Only show cities that have more than 1 customer"), you must use the `HAVING` clause!

**Example: Show cities with MORE than 1 customer:**
```sql
SELECT City, COUNT(CustomerID) AS NumberOfCustomers
FROM Customers
GROUP BY City
HAVING COUNT(CustomerID) > 1;
```
*(Result: Only Delhi will be returned, because it has 2 customers).*

> **Difference between WHERE and HAVING:**
> - `WHERE` filters individual rows **BEFORE** they are grouped.
> - `HAVING` filters the summary groups **AFTER** they are grouped.

**Example: A Query using both WHERE and HAVING:**
Let's find the total spent by customers in Delhi only, but only show customers who spent more than 600.
```sql
SELECT Customers.CustomerName, SUM(Orders.Price) AS TotalSpent
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
WHERE Customers.City = 'Delhi'          -- Filters rows before grouping
GROUP BY Customers.CustomerName
HAVING SUM(Orders.Price) > 600;         -- Filters the grouped totals
```

---

## Quick Recap
- **`GROUP BY`**: Groups identical data into summary rows (used with SUM, COUNT, etc.).
- **`HAVING`**: Exactly like `WHERE`, but it is used to filter aggregate functions!
