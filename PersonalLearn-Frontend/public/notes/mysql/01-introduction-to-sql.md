# Introduction to SQL

## What is SQL?
SQL is a standard language for accessing and manipulating databases.

- SQL stands for Structured Query Language
- SQL lets you access and manipulate databases
- SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987

## What Can SQL do?
- SQL can execute queries against a database
- SQL can retrieve data from a database
- SQL can insert records in a database
- SQL can update records in a database
- SQL can delete records from a database
- SQL can create new databases
- SQL can create new tables in a database
- SQL can create stored procedures in a database
- SQL can create views in a database
- SQL can set permissions on tables, procedures, and views

## SQL is a Standard - BUT....
Although SQL is an ANSI/ISO standard, there are different versions of the SQL language.

However, to be compliant with the ANSI standard, they all support at least the major commands (such as `SELECT`, `UPDATE`, `DELETE`, `INSERT`, `WHERE`) in a similar manner.

> **Note:** Most of the SQL database programs also have their own proprietary extensions in addition to the SQL standard!

## Using SQL in Your Web Site
To build a web site that shows data from a database, you will need:

- An RDBMS database program (i.e. MS Access, SQL Server, MySQL)
- To use a server-side scripting language, like PHP or ASP
- To use SQL to get the data you want
- To use HTML / CSS to style the page

## RDBMS
RDBMS stands for **Relational Database Management System**.

RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access.

The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows.

Look at the "Customers" table:

```sql
SELECT * FROM Customers;
```

The columns in the "Customers" table consist of CustomerID, CustomerName, ContactName, Address, City, PostalCode and Country. A column is a vertical entity in a table.

A record, also called a row, is each individual entry that exists in a table. For example, there are 91 records in the Customers table. A record is a horizontal entity in a table.

## SQL Syntax

### SQL Statements
Most of the actions you need to perform on a database are done with SQL statements.

SQL statements consist of keywords that are easy to understand.

The following SQL statement selects all records from the table named "Customers":

```sql
SELECT * FROM Customers;
```

In this tutorial we will teach you all about the different SQL statements.

### Database Tables
A database most often contains one or more tables. Each table is identified by a name (e.g. "Customers" or "Orders"), and contain records (rows) with data.

In this tutorial we will use a sample database to learn the concepts.

Below is a selection from the Customers table used in the examples:

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

The table above contains five records (one for each customer) and seven columns (CustomerID, CustomerName, ContactName, Address, City, PostalCode, and Country).

### Keep in Mind That...
- SQL keywords are NOT case sensitive: `select` is the same as `SELECT`
- In this tutorial we will write all SQL keywords in upper-case.

### Semicolon after SQL Statements?
Some database systems require a semicolon at the end of each SQL statement.

Semicolon is the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.

In this tutorial, we will use semicolon at the end of each SQL statement.

### Some of The Most Important SQL Commands
- `SELECT` - extracts data from a database
- `UPDATE` - updates data in a database
- `DELETE` - deletes data from a database
- `INSERT INTO` - inserts new data into a database
- `CREATE DATABASE` - creates a new database
- `ALTER DATABASE` - modifies a database
- `CREATE TABLE` - creates a new table
- `ALTER TABLE` - modifies a table
- `DROP TABLE` - deletes a table
- `CREATE INDEX` - creates an index (search key)
- `DROP INDEX` - deletes an index
