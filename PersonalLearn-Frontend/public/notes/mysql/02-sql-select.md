# SQL SELECT Statement

Before we dive into the commands, here is a quick look at the `Customers` table we'll be using for our examples. 

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

---

## The SELECT Statement
The `SELECT` statement is the most common SQL command you will ever use. Its only job is to fetch data from your database so you can view it.

**How to write it:**
```sql
SELECT column1, column2 FROM table_name;
```

For instance, if you just want to see the names and cities of your customers:
```sql
SELECT CustomerName, City FROM Customers;
```

**What if I want everything?**
If you want to pull all the columns from a table without typing out every single column name, just use the `*` symbol.
```sql
SELECT * FROM Customers;
```

---

## Selecting Unique Values (DISTINCT)
Often, your columns will have repeating data. For example, multiple customers might be from "Delhi". If you want a clean list of just the unique cities, you use `SELECT DISTINCT`.

```sql
SELECT DISTINCT City FROM Customers;
```

If you ever need to know exactly *how many* unique cities you have, you can wrap it in a `COUNT()` function:
```sql
SELECT COUNT(DISTINCT City) FROM Customers;
```
*(Note: If you're using MS Access, `COUNT(DISTINCT)` won't work directly. You'd have to write a subquery instead.)*

---

## Quick Recap
- **`SELECT`**: Fetches data from a database (`SELECT *` gets all columns).
- **`SELECT DISTINCT`**: Fetches only unique values, ignoring duplicates.
