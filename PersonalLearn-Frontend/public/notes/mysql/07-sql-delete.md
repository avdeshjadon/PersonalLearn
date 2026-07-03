# SQL DELETE Statement

Before we begin, here is a quick look at the `Customers` table we'll be using for our examples.

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

---

## Removing Existing Data
The `DELETE` statement is used when you need to permanently remove existing records (rows) from a table. Whether a customer closed their account or an order was canceled, this is the command you use.

**How to write it:**
```sql
DELETE FROM table_name WHERE condition;
```

> **Warning!** 🚨 Just like the `UPDATE` command, you must be extremely careful when deleting records. The `WHERE` clause tells SQL exactly which record(s) should be deleted. If you forget the `WHERE` clause, **every single record in the table will be wiped out!**

---

## Deleting a Specific Record
Let's say "Sharma Stores" has permanently closed their business, and you want to remove them from your database.

Here is the SQL query to do that:
```sql
DELETE FROM Customers WHERE CustomerName = 'Sharma Stores';
```

After running this, the "Sharma Stores" row will be completely erased, and your table will only have 4 records left.

---

## Deleting All Records (Without Deleting the Table)
Sometimes, you might want to clear out all the data inside a table so you can start fresh, but you want to keep the empty table structure (the columns) intact.

To do this, you simply omit the `WHERE` clause:
```sql
DELETE FROM Customers;
```
Now, your `Customers` table is completely empty, but it still exists and is ready to accept new `INSERT` statements.

---

## Deleting the Entire Table
If you want to completely destroy the table, including its data, structure, and all its columns, `DELETE FROM` won't work. Instead, you use the `DROP TABLE` statement.

```sql
DROP TABLE Customers;
```
Once you run this, the `Customers` table is gone forever from the database.

---

## Quick Recap
- **`DELETE FROM`**: Removes specific rows from a table.
- **`WHERE`**: The crucial filter that decides exactly which rows get deleted.
- **`DROP TABLE`**: Completely destroys the entire table and its structure from the database.
- **Pro Tip**: Always double-check your `WHERE` condition before running a `DELETE` query to avoid accidentally wiping your data!
