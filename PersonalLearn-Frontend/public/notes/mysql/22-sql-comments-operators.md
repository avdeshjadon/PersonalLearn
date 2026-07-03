# SQL Comments & Operators

## 1. SQL Comments
Just like in programming languages (Java, Python, JS), you can leave notes for yourself or other developers inside your SQL code. Comments are completely ignored by the database.

**Single-Line Comments:**
Use two hyphens `--`. Everything after them on that line is ignored.
```sql
-- This gets all customers from Delhi
SELECT * FROM Customers WHERE City = 'Delhi'; 
```

**Multi-Line Comments:**
Use `/*` to start and `*/` to end. Great for huge blocks of text or temporarily disabling large chunks of code.
```sql
/*
  We are currently disabling this block of code 
  because the Orders table is under maintenance.
  
  SELECT * FROM Orders;
*/
SELECT * FROM Customers;
```

---

## 2. SQL Operators Reference
Operators are the symbols you use in `WHERE` clauses, `SELECT` statements, and mathematical calculations.

### Arithmetic Operators
Used for math!
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus / Remainder)

### Comparison Operators
Used mostly in `WHERE` clauses.
- `=` (Equal to)
- `>` (Greater than)
- `<` (Less than)
- `>=` (Greater than or equal to)
- `<=` (Less than or equal to)
- `<>` or `!=` (Not equal to)

### Logical Operators
Used to combine multiple conditions.
- `AND` (True if ALL conditions are true)
- `OR` (True if ANY condition is true)
- `NOT` (Reverses the condition)
- `IN` (Matches any value in a list)
- `BETWEEN` (Matches a value within a range)
- `LIKE` (Pattern matching using wildcards)
- `IS NULL` (Checks for missing data)
