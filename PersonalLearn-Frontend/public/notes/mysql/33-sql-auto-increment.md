# SQL AUTO INCREMENT

When you create a table, you almost always need a `PRIMARY KEY` (like `CustomerID`). But manually typing out ID 1, ID 2, ID 3 every time you insert a row is annoying and prone to errors.

The **Auto Increment** feature automatically generates a unique number for your primary key every time a new record is inserted!

## 1. Auto Increment in MySQL
MySQL uses the `AUTO_INCREMENT` keyword. By default, it starts at 1 and increases by 1.

```sql
CREATE TABLE Persons (
    PersonID int AUTO_INCREMENT PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255)
);
```
Now, when inserting data, you completely skip the `PersonID` column!
```sql
INSERT INTO Persons (FirstName, LastName)
VALUES ('Rahul', 'Sharma'); 
-- PersonID automatically becomes 1!
```

## 2. Auto Increment in SQL Server
SQL Server uses the `IDENTITY` keyword.

```sql
CREATE TABLE Persons (
    PersonID int IDENTITY(1,1) PRIMARY KEY,
    LastName varchar(255) NOT NULL
);
```
*(The `(1,1)` means start at 1, and increment by 1).*

## 3. Auto Increment in Oracle
Oracle does things a bit differently. You have to create a separate object called a `SEQUENCE`.

```sql
CREATE SEQUENCE seq_person
MINVALUE 1
START WITH 1
INCREMENT BY 1;
```
Then, you manually call `seq_person.nextval` when inserting:
```sql
INSERT INTO Persons (Personid, FirstName, LastName)
VALUES (seq_person.nextval, 'Rahul', 'Sharma');
```

---

## Quick Recap
- **Auto Increment**: Automatically generates primary key numbers.
- **MySQL**: `AUTO_INCREMENT`
- **SQL Server**: `IDENTITY`
- **Oracle**: `SEQUENCE`
