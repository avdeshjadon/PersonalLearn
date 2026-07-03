# SQL INSERT INTO Statement

Before we dive into the commands, here is a quick look at the `Customers` table we'll be using for our examples. 

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

---

## Adding New Data (INSERT INTO)
To add a brand new row to your table, use the `INSERT INTO` command. There are two common ways to write this.

**Way 1: Specifying Columns (Recommended)**
This is the safest method because you explicitly state which column gets which value.
```sql
INSERT INTO Customers (CustomerName, ContactName, City, Country)
VALUES ('Tata Motors', 'Ratan Tata', 'Mumbai', 'India');
```

**Way 2: Skipping Column Names**
If you are inserting data into *every single column* in the exact order the table was created, you can save time and skip writing the column names.
```sql
INSERT INTO Customers
VALUES (6, 'Infosys', 'Narayana Murthy', 'Electronic City', 'Bengaluru', '560100', 'India');
```
> **Note:** The `CustomerID` is usually set to `AUTO_INCREMENT` in most databases, meaning you don't have to manually provide it—the database generates the next number automatically.

You can also insert multiple rows in one go by comma-separating the value blocks:
```sql
INSERT INTO Customers (CustomerName, City, Country)
VALUES 
('Wipro', 'Bengaluru', 'India'),
('Reliance', 'Mumbai', 'India');
```

---

## Quick Recap
- **`INSERT INTO`**: Adds brand new rows into a table.
