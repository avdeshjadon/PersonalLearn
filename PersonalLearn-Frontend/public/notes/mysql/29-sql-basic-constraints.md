# SQL Constraints (The Rules of the Table)

When you create a table, you want to make sure garbage data doesn't get inserted into it. **SQL Constraints** are basically rules that you apply to columns to enforce data integrity and accuracy.

If you try to insert data that violates these rules, the database will throw an error and abort the action.

You can add constraints during `CREATE TABLE` or later using `ALTER TABLE`.

## The Most Common Constraints
- **`NOT NULL`**: Column cannot have a NULL value.
- **`UNIQUE`**: All values in a column must be different.
- **`PRIMARY KEY`**: Uniquely identifies each row (covered in the next chapter).
- **`FOREIGN KEY`**: Links two tables together (covered in the next chapter).
- **`CHECK`**: Ensures values satisfy a specific condition (e.g., Age > 18).
- **`DEFAULT`**: Sets a default value if none is provided.

---

## 1. The NOT NULL Constraint
By default, a column can hold `NULL` (empty) values. If you want a column to **always** contain a value (like a username or a password), you use `NOT NULL`.

**Example: Creating a table where ID and Name are mandatory:**
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),  -- This can be NULL
    Age int
);
```
*(Now, if you try to `INSERT` a person without a LastName, SQL will reject it!)*

---

## 2. The UNIQUE Constraint
The `UNIQUE` constraint ensures that no two rows can have the same value in a specific column. (For example, an Email address or a PAN card number).

**Example: Ensure every person has a unique ID:**
```sql
CREATE TABLE Persons (
    ID int NOT NULL UNIQUE,
    LastName varchar(255) NOT NULL,
    Email varchar(255) UNIQUE
);
```

> **Difference between UNIQUE and PRIMARY KEY:**
> You can have **multiple** `UNIQUE` constraints in a single table (like Email, Phone Number, PAN card), but you can only have **ONE** `PRIMARY KEY` per table!

---

## Quick Recap
- **Constraints** are strict rules applied to columns.
- **`NOT NULL`**: Forces you to provide a value.
- **`UNIQUE`**: Prevents duplicate values in a column.
