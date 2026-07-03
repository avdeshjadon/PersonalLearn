# Working with Dates in SQL

Working with dates in databases can be tricky because the format you provide must exactly match the format the database expects!

## Standard Date Formats
Different databases support different types, but the most common standard formats are:

- **`DATE`**: Stores only the date (Format: `YYYY-MM-DD`). Example: `2024-05-24`.
- **`DATETIME`** or **`TIMESTAMP`**: Stores both date and exact time (Format: `YYYY-MM-DD HH:MI:SS`). Example: `2024-05-24 14:30:00`.

---

## The Danger of Time Components
Comparing dates is super easy if your column is purely a `DATE`:

```sql
SELECT * FROM Orders WHERE OrderDate = '2024-11-11';
```
*(This perfectly matches the row).*

But if your column is `DATETIME` and a row was saved as `2024-11-11 13:23:44`, running the query above will return **0 results**! Why? Because SQL assumes you meant `2024-11-11 00:00:00` (midnight), which doesn't match `13:23:44`.

> **Pro Tip:** To keep your life simple and your queries fast, **only use time components if you absolutely need them!** If you just need the day an order was placed, use `DATE`, not `DATETIME`.
