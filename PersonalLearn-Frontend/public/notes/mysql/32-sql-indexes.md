# SQL Indexes

Imagine looking for a specific chapter in a 1,000-page book without an index page. You'd have to flip through every single page! Databases work the same way. 

The `CREATE INDEX` statement creates an internal "index page" for your table to **speed up searches and queries drastically.**

> **Important:** Users cannot see the indexes. They run entirely in the background.

## 1. Creating an Index
You should only create indexes on columns that you frequently search against (like `Email` or `PhoneNumber` or `LastName`).

```sql
CREATE INDEX idx_lastname
ON Persons (LastName);
```
*(Now, any query searching for `WHERE LastName = 'Sharma'` will run incredibly fast!)*

## 2. Creating a Unique Index
If you want to speed up searches AND ensure no duplicate values are allowed in that column (like a `UNIQUE` constraint), use this:
```sql
CREATE UNIQUE INDEX idx_email
ON Persons (Email);
```

## The Catch: Why not Index everything?
Indexes make **reading/searching** extremely fast. However, they make **writing/updating** slower! Every time you insert a new row, the database also has to update the hidden index list. Only index the columns you search the most!

---

## Quick Recap
- **`CREATE INDEX`**: Speeds up `SELECT` queries on large tables.
- **`CREATE UNIQUE INDEX`**: Speeds up searches and prevents duplicates.
- **Downside**: Makes `INSERT` and `UPDATE` statements slightly slower.
