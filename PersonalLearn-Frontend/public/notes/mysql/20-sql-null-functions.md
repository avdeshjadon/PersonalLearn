# SQL NULL Functions

Operations involving `NULL` values can be a nightmare. `NULL` means "missing" or "unknown" data. It is NOT zero, and it is NOT an empty string. 

Because `NULL` is unknown, any math you do with it results in `NULL`.
For example: `500 + NULL = NULL`. 

If you have a `Products` table where you are adding `InStock` and `InOrder` quantities, and a product has a `NULL` value for `InOrder`, your total math will break!

To fix this, SQL provides built-in functions to provide a "fallback" value when it encounters a `NULL`.

---

## 1. COALESCE() - The Standard Way
`COALESCE()` is the universal standard and works in MySQL, SQL Server, and PostgreSQL. It looks at a list of values and returns the **first non-NULL value** it finds.

**Example: If `InOrder` is NULL, treat it as 0:**
```sql
SELECT ProductName, Price * (InStock + COALESCE(InOrder, 0)) AS TotalValue
FROM Products;
```
*(If `InOrder` is 5, it uses 5. If `InOrder` is NULL, it falls back to 0).*

---

## 2. Database Specific Functions
While `COALESCE()` is standard, some databases have their own specific (and slightly shorter) functions that do the exact same thing (checking a single value and providing one fallback).

### IFNULL() - MySQL
```sql
SELECT ProductName, Price * (InStock + IFNULL(InOrder, 0))
FROM Products;
```

### ISNULL() - SQL Server
```sql
SELECT ProductName, Price * (InStock + ISNULL(InOrder, 0))
FROM Products;
```

### NVL() - Oracle
```sql
SELECT ProductName, Price * (InStock + NVL(InOrder, 0))
FROM Products;
```

---

## Quick Recap
- Math with `NULL` always results in `NULL`.
- **`COALESCE(column, fallback_value)`**: The best, cross-platform way to replace NULLs with a default value like `0` or `'Unknown'`.
