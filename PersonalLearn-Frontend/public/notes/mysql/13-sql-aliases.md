# SQL Aliases

Before we dive into aliases, let's keep our sample `Customers` table handy:

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

---

## What is an Alias?
An alias is a temporary, custom name that you give to a column or a table. You create an alias using the `AS` keyword. 

Aliases are mainly used to make your query results **more readable**. 
> **Important:** An alias only exists for the duration of that specific query. It does not permanently rename the column or table in your actual database!

---

## 1. Aliasing Columns
Sometimes column names in a database are weird, long, or hard to read (e.g., `cust_frst_nm`). You can alias them in your output.

**Example: Rename `CustomerID` to `ID` and `CustomerName` to `Client`:**
```sql
SELECT CustomerID AS ID, CustomerName AS Client
FROM Customers;
```

### Aliases with Spaces
If you want your custom name to have spaces in it, like "Client Name", you cannot just write `AS Client Name`—SQL will throw an error. You must wrap the name in double quotes `""` or square brackets `[]`.

**Example:**
```sql
SELECT CustomerName AS "Client Name"
FROM Customers;
```
*(Note: Some databases prefer `[]`, while others prefer `""`. Most modern databases support `""`)*

---

## 2. Combining Columns (Concatenation)
Aliases are super useful when you combine multiple columns together into a single column.

Imagine you want to print a full mailing address by combining Address, City, PostalCode, and Country into one column called `FullAddress`.

**For MySQL:**
```sql
SELECT CustomerName, CONCAT(Address, ', ', City, ', ', PostalCode, ', ', Country) AS FullAddress
FROM Customers;
```

**For SQL Server:**
```sql
SELECT CustomerName, Address + ', ' + City + ', ' + PostalCode + ', ' + Country AS FullAddress
FROM Customers;
```

**For Oracle:**
```sql
SELECT CustomerName, (Address || ', ' || City || ', ' || PostalCode || ', ' || Country) AS FullAddress
FROM Customers;
```

---

## 3. Aliasing Tables
You can also give temporary nicknames to entire tables! 

**Example:**
```sql
SELECT * FROM Customers AS C;
```

Why would you do this? Aliasing a single table seems useless, but it becomes incredibly powerful when you **JOIN** multiple tables together.

Imagine querying from `Customers` and `Orders` at the same time:
```sql
SELECT c.CustomerName, o.OrderID
FROM Customers AS c
JOIN Orders AS o ON c.CustomerID = o.CustomerID;
```
Using `c` and `o` instead of typing out the full table names every time makes the query much shorter and easier to read! (We will cover Joins in a later chapter).

---

## Quick Recap
You should use Aliases when:
- **Column names are ugly:** Make long or unreadable column names easier to read.
- **Combining columns:** When you mash two columns together (like First Name and Last Name), the result needs a new title.
- **Using Functions:** If you use `COUNT()` or `SUM()`, you should alias the result (e.g. `SUM(Price) AS TotalRevenue`).
- **Joining Tables:** Giving tables short nicknames like `c` and `o` saves a lot of typing.
