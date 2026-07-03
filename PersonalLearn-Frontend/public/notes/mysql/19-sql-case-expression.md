# SQL CASE Expression

The `CASE` expression is SQL's version of an `if-then-else` statement. It allows you to check multiple conditions and return different values depending on which condition is met first.

As soon as a condition is true, it stops reading and returns the result. If none are true, it returns the `ELSE` value.

## Syntax
```sql
CASE
  WHEN condition1 THEN result1
  WHEN condition2 THEN result2
  ELSE default_result
END;
```

---

## Practical Example
Imagine you have a `Products` table with a `Price` column. You want to generate a report, but instead of just showing numbers, you want to categorize them as "Cheap", "Moderate", or "Expensive".

```sql
SELECT ProductName, Price,
CASE
  WHEN Price < 50 THEN 'Cheap'
  WHEN Price BETWEEN 50 AND 200 THEN 'Moderate'
  ELSE 'Expensive'
END AS PriceCategory
FROM Products;
```

**Result:**
| ProductName | Price | PriceCategory |
| :--- | :--- | :--- |
| Parle-G | 10 | Cheap |
| Amul Butter | 55 | Moderate |
| Aashirvaad Atta | 250 | Expensive |

> **Note:** We used `AS PriceCategory` to give our new generated column a nice name. If we didn't, the column header would literally be the entire `CASE` code block!

---

## Quick Recap
- **`CASE`**: Acts like if-else logic.
- **`WHEN ... THEN`**: Defines the condition and the output.
- **`ELSE`**: The fallback value if nothing else matches.
- **`END`**: Required to close the CASE expression.
