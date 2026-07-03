# SQL ORDER BY Keyword

Before we dive into the commands, here is a quick look at the `Customers` table we'll be using for our examples. 

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

---

## Sorting Results (ORDER BY)
When you fetch data, SQL doesn't guarantee any specific order. To organize your results alphabetically or numerically, use `ORDER BY`.

By default, it sorts in ascending order (A to Z).
```sql
SELECT * FROM Customers
ORDER BY CustomerName;
```

If you want the highest numbers first, or Z to A, add the `DESC` keyword for descending order:
```sql
SELECT * FROM Products
ORDER BY Price DESC;
```

You can even sort by multiple columns. For example, sort by City first, and if two people are in the same city, sort them by name:
```sql
SELECT * FROM Customers
ORDER BY City ASC, CustomerName DESC;
```

---

## Quick Recap
- **`ORDER BY`**: Sorts the results (`ASC` for normal, `DESC` for reverse).
