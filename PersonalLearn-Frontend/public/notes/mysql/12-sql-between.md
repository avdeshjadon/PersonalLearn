# SQL BETWEEN Operator

Before we begin, let's look at a sample `Products` table. Since `BETWEEN` is mostly used for ranges, having prices will be very helpful!

| ProductID | ProductName | SupplierID | CategoryID | Price |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Parle-G Biscuits | 1 | 1 | 10.00 |
| 2 | Amul Butter | 1 | 2 | 55.00 |
| 3 | Maggi Noodles | 2 | 1 | 14.00 |
| 4 | Aashirvaad Atta | 3 | 3 | 250.00 |
| 5 | Tata Salt | 4 | 4 | 25.00 |

---

## What is the BETWEEN Operator?
The `BETWEEN` operator is used inside a `WHERE` clause to select values within a specified range. 

> **Important:** The range is **inclusive**. That means the beginning and the end values you specify are *included* in the result!

You can use `BETWEEN` on numbers, text, or even dates.

**Syntax:**
```sql
SELECT column_name(s) FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

---

## 1. BETWEEN with Numbers
Let's find all products that have a price between 10 and 30 rupees.

**Example:**
```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 30;
```
*(Matches: Parle-G Biscuits (10), Maggi Noodles (14), Tata Salt (25). Notice that 10 is included!)*

---

## 2. The NOT BETWEEN Operator
If you want to find everything *outside* of a specific range, just add the word `NOT`.

**Example: Find all expensive products (Price is NOT between 10 and 50):**
```sql
SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 50;
```
*(Matches: Amul Butter (55), Aashirvaad Atta (250))*

---

## 3. Combining BETWEEN with IN
You can combine multiple rules together. Let's find products priced between 10 and 60, but ONLY if their CategoryID is 1 or 2.

**Example:**
```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 60
AND CategoryID IN (1, 2);
```

---

## 4. BETWEEN with Text Values
`BETWEEN` doesn't just work on numbers; it works alphabetically on text too! 

**Example: Find all products whose names fall alphabetically between 'Amul Butter' and 'Parle-G Biscuits':**
```sql
SELECT * FROM Products
WHERE ProductName BETWEEN 'Amul Butter' AND 'Parle-G Biscuits'
ORDER BY ProductName;
```
*(Matches: Amul Butter, Aashirvaad Atta, Maggi Noodles, Parle-G Biscuits)*

You can also use `NOT BETWEEN` on text in the exact same way to exclude an alphabetical range.

---

## 5. BETWEEN with Dates
`BETWEEN` is extremely useful for filtering records within a specific time period.

Imagine we have an `Orders` table with an `OrderDate` column. We want to find all orders placed in July 2023.

**Example:**
```sql
SELECT * FROM Orders
WHERE OrderDate BETWEEN '2023-07-01' AND '2023-07-31';
```
> **Tip:** Always ensure your date format matches the database format (usually `YYYY-MM-DD`).

---

## Quick Recap
- **`BETWEEN`**: Filters data within a specified range.
- **Inclusive**: The start and end values are ALWAYS included.
- **Works on**: Numbers, Text (alphabetical order), and Dates.
- **`NOT BETWEEN`**: Reverses the condition to find data outside the range.
