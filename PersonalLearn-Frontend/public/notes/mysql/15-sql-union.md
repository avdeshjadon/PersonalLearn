# SQL UNION Operator

Sometimes you have data in two completely different tables, but you want to combine their results into a single list. This is exactly what the `UNION` operator does!

The `UNION` operator combines the result-set of two or more `SELECT` statements into one.

## The 3 Golden Rules of UNION
For `UNION` to work, your `SELECT` statements must follow these rules:
1. They must have the **same number of columns**.
2. The columns must have **similar data types**.
3. The columns must be in the **same order**.

---

Let's look at two sample tables.

**`Customers` Table:**
| CustomerID | CustomerName | City | Country |
| :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Delhi | India |
| 2 | Verma Sweets | Pune | India |
| 3 | Ali Traders | Dubai | UAE |

**`Suppliers` Table:**
| SupplierID | SupplierName | City | Country |
| :--- | :--- | :--- | :--- |
| 101 | Tech Mahindra | Pune | India |
| 102 | Tata Foods | Mumbai | India |
| 103 | Global Imports | Dubai | UAE |

---

## 1. The UNION Operator
By default, `UNION` **removes duplicate rows**. It only gives you the unique (distinct) values.

**Example: Get a unique list of all countries we operate in (from both Customers and Suppliers):**
```sql
SELECT Country FROM Customers
UNION
SELECT Country FROM Suppliers
ORDER BY Country;
```
*(Matches: India, UAE. Even though India and UAE appear multiple times across the tables, they are only listed once in the final result).*

---

## 2. The UNION ALL Operator
If you *want* to see the duplicates (you literally want every single row from both queries glued together), you use `UNION ALL`.

**Example: Get a list of ALL countries, including duplicates:**
```sql
SELECT Country FROM Customers
UNION ALL
SELECT Country FROM Suppliers
ORDER BY Country;
```
*(Matches: India, India, UAE, India, India, UAE. Every single row's country is returned).*

---

## 3. Adding the WHERE Clause
You can absolutely use `WHERE` clauses in your `SELECT` statements before joining them.

**Example: Let's find all the unique cities from both tables, but ONLY if the country is 'India':**
```sql
SELECT City, Country FROM Customers
WHERE Country = 'India'
UNION
SELECT City, Country FROM Suppliers
WHERE Country = 'India'
ORDER BY City;
```
*(Matches: Delhi, Mumbai, Pune)*

---

## 4. A Clever Trick: Labeling Your Data
When you mix two tables together, you might forget which row came from which table. You can use **Aliases** to create a fake column just to label them!

**Example: Combine all Customers and Suppliers, but label who is who:**
```sql
SELECT 'Customer' AS Type, CustomerName AS Name, City, Country
FROM Customers
UNION
SELECT 'Supplier', SupplierName, City, Country
FROM Suppliers;
```
Now, your final result will have a column called `Type` that says either "Customer" or "Supplier" next to each person's name!

---

## Quick Recap
- **`UNION`**: Glues multiple `SELECT` results together, but removes duplicates.
- **`UNION ALL`**: Glues them together and keeps ALL duplicates.
- **Rules**: Both queries must ask for the exact same number of columns, in the exact same order!
