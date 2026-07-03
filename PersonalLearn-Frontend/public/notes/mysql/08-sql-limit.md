# SQL SELECT TOP, LIMIT & FETCH FIRST

Before we jump in, here is the sample `Customers` table we'll use for our examples.

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

---

## Limiting the Number of Results
If you have a massive table with millions of records, returning all of them at once will crash your application or make it extremely slow. To fix this, we limit how many records the database sends back.

Different databases handle this differently. 

### 1. MySQL: The LIMIT Clause
If you are using MySQL, you use the `LIMIT` keyword at the very end of your query.

**Example: Get only the first 3 customers.**
```sql
SELECT * FROM Customers
LIMIT 3;
```

### 2. SQL Server & MS Access: The TOP Clause
If you are using Microsoft SQL Server or Access, you put the `TOP` keyword right after `SELECT`.

**Example:**
```sql
SELECT TOP 3 * FROM Customers;
```

### 3. Oracle 12+: FETCH FIRST
If you are using modern Oracle databases, the syntax is a bit longer:

**Example:**
```sql
SELECT * FROM Customers
FETCH FIRST 3 ROWS ONLY;
```

---

## Getting a Percentage (SQL Server & Oracle)
Sometimes you don't want a fixed number of rows, but rather a percentage, like the top 50% of the table.

**For SQL Server / MS Access:**
```sql
SELECT TOP 50 PERCENT * FROM Customers;
```

**For Oracle:**
```sql
SELECT * FROM Customers
FETCH FIRST 50 PERCENT ROWS ONLY;
```
> **Note:** MySQL does not have a direct equivalent for `PERCENT`. You usually have to calculate the total rows first or use variables.

---

## Combining LIMIT with WHERE
You can easily combine limits with your filters. First, you filter the data with `WHERE`, and then you limit the results.

**Example: Find the first 3 customers from India (MySQL):**
```sql
SELECT * FROM Customers
WHERE Country = 'India'
LIMIT 3;
```
*(In SQL Server, it would be `SELECT TOP 3 * FROM Customers WHERE Country = 'India';`)*

---

## Combining LIMIT with ORDER BY
This is incredibly useful for finding the "Top 3 highest" or "Top 3 lowest" of something. You first sort the data with `ORDER BY`, and then you apply the limit.

**Example: Sort customers alphabetically in reverse (Z to A) and grab the first 3 (MySQL):**
```sql
SELECT * FROM Customers
ORDER BY CustomerName DESC
LIMIT 3;
```
*(In SQL Server, it would be `SELECT TOP 3 * FROM Customers ORDER BY CustomerName DESC;`)*

---

## Quick Recap
- **`LIMIT`**: Used in MySQL to restrict the number of rows returned (placed at the end of the query).
- **`TOP`**: Used in SQL Server/Access to restrict rows (placed right after `SELECT`).
- **`FETCH FIRST`**: The standard way Oracle handles limiting rows.
- **Pro Tip**: Always use `ORDER BY` with `LIMIT` if you want a consistent "Top N" list (like "Top 10 highest-paid employees"). Otherwise, the database might just return any random rows!
