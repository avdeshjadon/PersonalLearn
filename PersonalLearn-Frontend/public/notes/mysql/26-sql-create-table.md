# SQL CREATE TABLE

Once you have a Database, you need Tables to actually store your data! The `CREATE TABLE` statement is used to create a brand-new table.

## 1. Syntax

When creating a table, you need to define the columns it will have and what **Data Type** each column will store (e.g., text, numbers, dates).

```sql
CREATE TABLE table_name (
  column1 datatype constraint,
  column2 datatype constraint,
  column3 datatype constraint
);
```
- **`datatype`**: Specifies if the column holds `int` (numbers), `varchar` (text), `date`, etc.
- **`constraint`**: (Optional) Rules like `NOT NULL` (cannot be empty) or `PRIMARY KEY` (unique ID).

---

## 2. Example: Creating a Persons Table

Let's create a table to store people's details:

```sql
CREATE TABLE Persons (
  PersonID int PRIMARY KEY,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255)
);
```
**What just happened?**
- `PersonID` is an integer (`int`). It is the `PRIMARY KEY`, meaning every person will have a unique ID.
- `LastName` is text up to 255 characters (`varchar`). `NOT NULL` ensures we can never leave this blank.
- The other columns just hold text and can be left empty if we don't know them.

---

## 3. Create a Table From an Existing Table
You can also create a new table that is an exact copy of an old one, complete with its data!

```sql
CREATE TABLE MumbaiCustomers AS
SELECT * FROM Customers
WHERE City = 'Mumbai';
```
*(This creates a brand new table called `MumbaiCustomers` and instantly fills it with all customers who live in Mumbai!)*

---

## Quick Recap
- **`CREATE TABLE`**: Sets up the structure (columns and data types) for a new table.
- **`CREATE TABLE ... AS SELECT`**: Clones an existing table and its data.
