# SQL WHERE Clause and Operators

Before we dive into the commands, here is a quick look at the `Customers` table we'll be using for our examples. 

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

---

## Filtering Data with the WHERE Clause
Fetching all records is fine for small tables, but normally you only want specific data. The `WHERE` clause acts as a filter.

```sql
SELECT * FROM Customers
WHERE City = 'Delhi';
```

> **Note:** The `WHERE` clause is extremely versatile. It is not only used in `SELECT` statements but is also crucial for `UPDATE` and `DELETE` commands to ensure you don't accidentally update or delete the wrong rows!

### Quotes or No Quotes?
- **Text values** always go inside single quotes: `Country = 'India'`
- **Numeric values** do not use quotes: `CustomerID = 1`

### Useful Operators for Filtering
You aren't limited to just checking if things are exactly equal. Here are other operators you can use with `WHERE`:

| Operator | What it does | Example |
| :--- | :--- | :--- |
| `=` | Equal | `Age = 25` |
| `>` | Greater than | `Price > 1000` |
| `<` | Less than | `Price < 500` |
| `>=` | Greater than or equal | `Age >= 18` |
| `<=` | Less than or equal | `Stock <= 10` |
| `<>` or `!=` | Not equal | `City != 'Mumbai'` |
| `BETWEEN` | Within a specific range | `Price BETWEEN 100 AND 500` |
| `LIKE` | Pattern matching | `Name LIKE 'S%'` (Starts with S) |
| `IN` | Matches multiple exact values | `City IN ('Delhi', 'Pune')` |

---

## Combining Conditions: AND, OR, NOT
Sometimes one filter isn't enough. You can combine multiple rules using logical operators.

### Using AND
Use this when a row must pass **all** conditions. Let's find customers who are from Delhi AND their name starts with R:
```sql
SELECT * FROM Customers
WHERE City = 'Delhi' AND CustomerName LIKE 'R%';
```

### Using OR
Use this when a row only needs to pass **at least one** condition.
```sql
SELECT * FROM Customers
WHERE City = 'Delhi' OR City = 'Pune';
```

### Using NOT
This simply reverses your condition. Perfect for excluding specific data.
```sql
SELECT * FROM Customers
WHERE NOT City = 'Mumbai';
```

**Complex Filters:**
You can combine these together. Just remember to use parentheses `()` so SQL knows which conditions to evaluate first!
```sql
SELECT * FROM Customers
WHERE Country = 'India' AND (City = 'Delhi' OR City = 'Pune');
```

---

## Dealing with NULL Values
In databases, a `NULL` value means the data is missing or unknown. 

It is very important to understand that `NULL` is **not** the same as a zero (0) or a blank space. It literally means the field was left completely empty.

**How to check for it:**
You cannot use standard math operators like `=` or `!=` to find NULL values. You have to use `IS NULL` or `IS NOT NULL`.

To find customers who haven't given us their address:
```sql
SELECT CustomerName, ContactName 
FROM Customers
WHERE Address IS NULL;
```

To find customers who *have* provided an address:
```sql
SELECT CustomerName, ContactName 
FROM Customers
WHERE Address IS NOT NULL;
```

---

## Quick Recap
- **`WHERE`**: Filters the data based on conditions (e.g., `City = 'Delhi'`).
- **`AND / OR / NOT`**: Combines multiple filters for precise searching.
- **`NULL`**: Represents missing data. Use `IS NULL` to find it, never `= NULL`.
