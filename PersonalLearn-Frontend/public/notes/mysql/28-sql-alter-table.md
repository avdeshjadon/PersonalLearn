# SQL ALTER TABLE

Sometimes you create a table, but a month later you realize you forgot to add an 'Email' column. Instead of deleting the table and starting over, you can just modify it using `ALTER TABLE`!

The `ALTER TABLE` statement is used to add, delete, or modify columns and constraints in an existing table.

---

## 1. ADD Column
To add a brand new column to an existing table:

```sql
ALTER TABLE Customers
ADD Email varchar(255);
```
*(Now every customer has an Email field, which will be empty `NULL` until you update it).*

---

## 2. DROP Column
To completely remove a column and all the data stored in it:

```sql
ALTER TABLE Customers
DROP COLUMN Email;
```

---

## 3. RENAME Column
If you made a typo in a column name, or just want a better name:

```sql
-- MySQL / PostgreSQL
ALTER TABLE Customers
RENAME COLUMN Email TO ContactEmail;
```
*(Note: SQL Server uses a different syntax: `EXEC sp_rename 'Customers.Email', 'ContactEmail', 'COLUMN';`)*

---

## 4. MODIFY Datatype
If you created an `Age` column as `varchar` (text) but realize it should be `int` (numbers), you can change it!

```sql
-- MySQL / Oracle
ALTER TABLE Customers
MODIFY Age int;

-- SQL Server
ALTER TABLE Customers
ALTER COLUMN Age int;
```

---

## 5. ADD CONSTRAINT
You can add rules (constraints) to a table after it's been created. For example, ensuring nobody under 18 can be added:

```sql
ALTER TABLE Members
ADD CONSTRAINT CHK_Age CHECK (Age >= 18);
```

---

## 6. RENAME Table
You can even rename the entire table!

```sql
ALTER TABLE Customers
RENAME TO Clients;
```

---

## Quick Recap
- **`ALTER TABLE`**: The ultimate tool for modifying an existing table's structure.
- **`ADD / DROP / RENAME COLUMN`**: Manages the columns.
- **`MODIFY / ALTER COLUMN`**: Changes the data type or size of a column.
