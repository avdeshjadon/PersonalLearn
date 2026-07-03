# SQL Aggregate Functions

Before we dive into aggregate functions, let's look at a sample `Orders` table. Since we are going to do some math, we need columns with numbers like `Quantity` and `Price`!

| OrderID | CustomerName | Item | Quantity | Price |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Ramesh Sharma | Laptop | 1 | 45000 |
| 2 | Suresh Verma | Mobile | 2 | 15000 |
| 3 | Amit Gupta | Headphones | 1 | 2500 |
| 4 | Rajesh Patel | Smartwatch | 3 | 5000 |
| 5 | Priya Reddy | Tablet | 1 | 20000 |

---

## What are Aggregate Functions?
An aggregate function is a function that takes a whole bunch of values (like an entire column), performs a calculation on them, and returns a **single value**. 

Instead of asking "Show me all the prices," you ask questions like "What is the total price?" or "What is the highest price?"

### The Core Functions
Here are the most commonly used aggregate functions in SQL:
- **`MIN()`**: Returns the smallest value in a column.
- **`MAX()`**: Returns the largest value in a column.
- **`COUNT()`**: Returns the total number of rows.
- **`SUM()`**: Returns the total sum of a numerical column.
- **`AVG()`**: Returns the average value of a numerical column.

> **Note:** All aggregate functions ignore `NULL` (missing) values, **except** for `COUNT(*)`, which counts every single row regardless of whether it has missing data or not.

---

## 1. Finding the Smallest and Largest Values (MIN & MAX)
If you want to find the cheapest item or the most expensive item in your table, you use `MIN()` and `MAX()`.

**Example: Find the cheapest item price:**
```sql
SELECT MIN(Price) FROM Orders;
```
*(Result: 2500)*

**Example: Find the most expensive item price:**
```sql
SELECT MAX(Price) FROM Orders;
```
*(Result: 45000)*

---

## 2. Counting Rows (COUNT)
`COUNT()` is used when you just want to know "How many?". 

**Example: How many total orders do we have?**
```sql
SELECT COUNT(OrderID) FROM Orders;
```
*(Result: 5)*

---

## 3. Adding Things Up (SUM)
`SUM()` is perfect for calculating total revenue, total items sold, etc. It only works on numerical columns.

**Example: What is the total revenue (sum of all prices)?**
```sql
SELECT SUM(Price) FROM Orders;
```
*(Result: 87500)*

---

## 4. Finding the Average (AVG)
If you want to find the average price of an item sold, you use `AVG()`.

**Example: What is the average price of the items in our store?**
```sql
SELECT AVG(Price) FROM Orders;
```
*(Result: 17500)*

---

## Grouping Data (GROUP BY)
Aggregate functions become incredibly powerful when you combine them with the `GROUP BY` clause. This splits your results into groups and runs the math on each group separately.

**Example: If a customer made multiple orders, how much did each customer spend in total?**
```sql
SELECT CustomerName, SUM(Price) 
FROM Orders
GROUP BY CustomerName;
```
This would output a list of every unique customer alongside their personal total spend!

---

## Quick Recap
- **`MIN() / MAX()`**: Finds the lowest and highest values.
- **`COUNT()`**: Counts how many rows exist.
- **`SUM()`**: Adds numbers together.
- **`AVG()`**: Finds the mathematical average.
- **`GROUP BY`**: Often used with these functions to calculate totals per category (e.g., Total Sales *per* City).
