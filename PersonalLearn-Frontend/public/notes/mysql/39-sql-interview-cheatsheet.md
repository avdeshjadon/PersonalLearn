# SQL Interview Cheat Sheet (Quick Definitions & Pro Topics)

This is a complete revision guide specifically designed for interviews. It contains short, easy-to-understand definitions of all core SQL concepts, along with deep-dives into Advanced "Pro-Level" topics.

## 1. Basic SQL Concepts
- **RDBMS (Relational Database Management System)**: A system that stores data in tables (rows and columns) that are linked together (related). E.g., MySQL, PostgreSQL.
- **SQL (Structured Query Language)**: The standard language used to communicate with an RDBMS.
- **Table**: A collection of related data organized in rows (records) and columns (attributes).

## 2. DML (Data Manipulation Language)
- **INSERT**: Adds new rows of data into a table.
- **UPDATE**: Modifies existing data in a table. Always use it with a `WHERE` clause to avoid updating everything!
- **DELETE**: Removes rows from a table. Keeping the table structure intact.

## 3. Filtering and Searching
- **WHERE**: Filters rows based on a specific condition before grouping.
- **LIKE**: Used for pattern matching in text. (`%` means any characters, `_` means one character).
- **IN**: A shorthand for multiple `OR` conditions. E.g., `WHERE City IN ('Delhi', 'Mumbai')`.
- **BETWEEN**: Selects values within a given range (inclusive).

## 4. Aggregation and Grouping
- **Aggregate Functions**: Functions that perform a calculation on a set of values and return a single value (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`).
- **GROUP BY**: Groups rows that have the same values into summary rows (e.g., finding the total sales per city).
- **HAVING**: Filters data *after* it has been grouped by `GROUP BY` (because `WHERE` cannot be used with aggregate functions).

## 5. Joins (Combining Tables)
- **JOIN**: Combines rows from two or more tables based on a related column.
- **INNER JOIN**: Returns only the rows that have matching values in both tables.
- **LEFT JOIN**: Returns ALL rows from the left table, and matching rows from the right table (unmatched get `NULL`).
- **RIGHT JOIN**: Returns ALL rows from the right table, and matching rows from the left table.
- **FULL OUTER JOIN**: Returns ALL rows when there is a match in either the left or the right table.

## 6. Table Operations (DDL)
- **CREATE TABLE**: Creates a new, empty table.
- **ALTER TABLE**: Modifies an existing table's structure (adding, deleting, or renaming columns/constraints).
- **DROP TABLE**: Completely and permanently deletes the table AND its data.
- **TRUNCATE TABLE**: Deletes all data inside the table instantly, but keeps the empty table structure.

## 7. Constraints (Data Rules)
- **Constraints**: Rules enforced on data columns to ensure accuracy and reliability.
- **NOT NULL**: Ensures a column cannot be left empty.
- **UNIQUE**: Ensures all values in a column are different.
- **PRIMARY KEY**: Uniquely identifies each row in a table. It cannot be NULL and must be UNIQUE. Only one per table!
- **FOREIGN KEY**: A column that refers to the Primary Key of another table. It prevents bad data and accidental deletions (Referential Integrity).
- **CHECK**: Ensures data passes a specific condition (e.g., `Age >= 18`).
- **DEFAULT**: Automatically inserts a fallback value if none is provided.

## 8. Database Objects & Security
- **View**: A "Virtual Table" based on the result of a saved SQL query. It doesn't store data itself.
- **Index**: A background data structure that drastically speeds up data retrieval (`SELECT` queries), but slows down inserts and updates.
- **Stored Procedure**: A pre-compiled SQL query that you can save and reuse over and over again, passing parameters to it.
- **SQL Injection**: A hacking technique where malicious SQL code is inserted into user inputs to destroy or steal data.
- **Prepared Statements**: The ultimate defense against SQL injection. It separates the SQL logic from the user data using placeholders (`?` or `@`).

---

## 9. Database Normalization (1NF, 2NF, 3NF)

**Normalization** is the process of organizing a database to reduce **data redundancy** (repeating the same data over and over) and improve **data integrity**.

Think of it as cleaning up a messy excel sheet into multiple, well-connected tables using Primary and Foreign Keys.

### First Normal Form (1NF)
**Rule: "No multi-valued attributes (lists) in a single cell."**
Imagine a table of students and their subjects.
*Bad Design:*
| StudentID | Name | Subjects |
|---|---|---|
| 1 | Rahul | Math, Science, English |

*Good Design (1NF):*
| StudentID | Name | Subject |
|---|---|---|
| 1 | Rahul | Math |
| 1 | Rahul | Science |
*(Now, every cell holds exactly ONE value).*

### Second Normal Form (2NF)
**Rule: "Must be in 1NF, and all non-key columns must depend on the ENTIRE Primary Key."**
If `StudentID` and `Subject` is a composite primary key, `TeacherName` shouldn't be in this table because it only depends on the `Subject`, not the student. Split it into two tables!

### Third Normal Form (3NF)
**Rule: "Must be in 2NF, and NO transitive dependencies." (Non-key columns shouldn't depend on other non-key columns).**
If you have `EmployeeID`, `ZipCode`, and `City`, `City` depends on `ZipCode`, not directly on the `Employee`. Split `Locations` into a separate table!

---

## 10. Window Functions (Analytics Pro)

**Window Functions** perform calculations across a set of rows that are related to the current row. Unlike `GROUP BY`, which squashes rows into a single summary row, **Window Functions keep the original rows intact** while adding the calculated column next to them!

### ROW_NUMBER(), RANK(), DENSE_RANK()
Used to rank items (e.g., employees based on salary in each department).
```sql
SELECT 
    Name, Department, Salary,
    ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) as RowNum,
    RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) as Rank
FROM Employees;
```
- **`PARTITION BY`**: Divides data into groups.
- **`ORDER BY`**: Sorts data inside that group.

### LEAD() and LAG()
Lets you look at the **previous row** or **next row** without complex joins (e.g., comparing this month's sales to last month's sales).

---

## 11. CTEs (Common Table Expressions)

A **CTE** is a temporary result set created using the **`WITH`** keyword.
If you have a massive, complex query with multiple subqueries, it becomes completely unreadable. CTEs let you break down complex logic into small, named, easy-to-read chunks.

```sql
WITH DeptAverages AS (
    SELECT Department, AVG(Salary) as AvgSal 
    FROM Employees 
    GROUP BY Department
)
SELECT * FROM DeptAverages WHERE AvgSal > 50000;
```

---

## 12. Database Transactions & ACID

A **Transaction** is a sequence of SQL operations treated as a single unit of work. **Rule: Either ALL steps succeed, or NONE happen.**

```sql
BEGIN TRANSACTION;
UPDATE Accounts SET Balance = Balance - 1000 WHERE Name = 'Rahul';
UPDATE Accounts SET Balance = Balance + 1000 WHERE Name = 'Amit';
COMMIT; -- Save everything permanently!
```
If an error happens halfway through, the database automatically triggers a **`ROLLBACK`**, undoing the first step and restoring Rahul's balance!

**What is ACID?**
1. **Atomicity**: All or nothing.
2. **Consistency**: Data remains valid according to rules.
3. **Isolation**: Multiple simultaneous transactions act as if they are alone.
4. **Durability**: Once `COMMIT` is called, the data is saved permanently to the hard drive.

---

## 13. SQL Triggers

A **Trigger** is a special type of code that automatically runs (triggers) in the background whenever an `INSERT`, `UPDATE`, or `DELETE` event occurs on a table.

Used for **Auditing**, **Logging**, and enforcing complex rules.
```sql
CREATE TRIGGER AfterSalaryUpdate
AFTER UPDATE ON Employees
FOR EACH ROW
BEGIN
    IF NEW.Salary <> OLD.Salary THEN
        INSERT INTO AuditLog (EmployeeID, OldSalary, NewSalary)
        VALUES (NEW.ID, OLD.Salary, NEW.Salary);
    END IF;
END;
```

---

## 14. Query Optimization & EXPLAIN

**Query Optimization** is the art of making slow queries fast. By putting the word `EXPLAIN` in front of any `SELECT` query, the database will explain its **Execution Plan**.

```sql
EXPLAIN SELECT * FROM Customers WHERE Email = 'amit@example.com';
```
If the output shows `type: ALL`, it means the database is doing a "Full Table Scan" (reading every single row one by one). You need to add an `INDEX` to the Email column to fix this!

**Best Practices for Fast Queries:**
1. **Never use `SELECT *`**: Only fetch the columns you need.
2. **Filter early using `WHERE`**: Let the database filter data, not your application code.
3. **Use Indexes carefully**: Index columns used in `WHERE`, `JOIN`, and `ORDER BY`.
4. **Avoid `LIKE '%text'`**: Wildcards at the beginning of a search force a Full Table Scan.
