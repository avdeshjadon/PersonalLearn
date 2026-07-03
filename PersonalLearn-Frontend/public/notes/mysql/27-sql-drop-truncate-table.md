# SQL DROP & TRUNCATE TABLE

What happens when you no longer need a table, or you just want to wipe it clean and start over? SQL gives you two different tools for this: `DROP` and `TRUNCATE`.

---

## 1. DROP TABLE (Delete Everything)
The `DROP TABLE` statement completely and permanently deletes a table, its structure, and all of its data.

> [!CAUTION]
> Once you drop a table, it is gone forever. Be very careful!

**Syntax & Example:**
```sql
DROP TABLE table_name;
```

```sql
DROP TABLE IF EXISTS Shippers;
```
*(Using `IF EXISTS` is a great habit! It prevents SQL from throwing an error if the table was already deleted).*

> **Note:** If your table is linked to another table via a Foreign Key, SQL will protect you and stop you from dropping it until you remove the link!

---

## 2. TRUNCATE TABLE (Wipe the Data)
If you want to delete all the rows inside a table, but you **want to keep the table structure intact** (so you can insert new data later), use `TRUNCATE`.

Think of `TRUNCATE` as emptying the trash bin. The bin is still there, but it's completely empty.

**Syntax & Example:**
```sql
TRUNCATE TABLE Employees;
```
*(All employee records are instantly deleted, but the `Employees` table with its columns still exists).*

---

## Quick Recap
- **`DROP TABLE`**: Completely destroys the table and all data inside it.
- **`TRUNCATE TABLE`**: Deletes all the data, but keeps the empty table structure ready for new data.
