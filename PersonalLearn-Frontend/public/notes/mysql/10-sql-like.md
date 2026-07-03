# SQL LIKE Operator & Wildcards

Before we start searching for patterns, here is a quick look at the `Customers` table we'll be using for our examples.

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Sharma Stores | Ramesh Sharma | MG Road 12 | Delhi | 110001 | India |
| 2 | Verma Sweets | Suresh Verma | FC Road 5 | Pune | 411004 | India |
| 3 | Gupta Electronics | Amit Gupta | Sector 62 | Noida | 201309 | India |
| 4 | Patel Traders | Rajesh Patel | SG Highway | Ahmedabad | 380015 | India |
| 5 | Reddy Enterprises | Priya Reddy | Hitech City | Hyderabad | 500081 | India |

---

## Pattern Searching with LIKE
The `LIKE` operator is used inside a `WHERE` clause to search for a specific "pattern" in a text column. Instead of looking for an exact match like `City = 'Delhi'`, you can look for things like "any city that starts with D" or "any name that ends with a".

To define these patterns, we use **Wildcards**. You can think of a wildcard like a "blank tile" in Scrabble—it can stand in for any letter or sequence of letters.

### Standard SQL Wildcards
| Symbol | What it does | Supported By |
| :--- | :--- | :--- |
| `%` | Represents zero, one, or multiple characters | All databases |
| `_` | Represents exactly one single character | All databases |
| `[]` | Represents any single character within the brackets | SQL Server |
| `^` | Represents any character NOT in the brackets | SQL Server |
| `-` | Represents a range of characters (e.g. `a-c`) | SQL Server |

*(Note: `[]`, `^`, and `-` are generally used in SQL Server. MySQL and PostgreSQL handle these using Regular Expressions instead).*

---

## 1. Using the `%` Wildcard
The `%` wildcard represents any number of characters, even zero characters.

### Starts With
To find records that start with a specific letter or phrase, put the `%` at the **end**.

```sql
SELECT * FROM Customers
WHERE CustomerName LIKE 'S%';
```
*(Matches: Sharma Stores)*

### Ends With
To find records that end with a specific letter or phrase, put the `%` at the **beginning**.

```sql
SELECT * FROM Customers
WHERE CustomerName LIKE '%s';
```
*(Matches: Sharma Stores, Verma Sweets, Gupta Electronics)*

### Contains
To find records that contain a specific phrase anywhere inside the text, put `%` on **both sides**.

```sql
SELECT * FROM Customers
WHERE City LIKE '%bad%';
```
*(Matches: Ahmedabad, Hyderabad)*

---

## 2. Using the `_` Wildcard
The `_` wildcard is much stricter. It represents exactly **one** character.

**Example: Find a city that starts with any single character, followed by 'oida':**
```sql
SELECT * FROM Customers
WHERE City LIKE '_oida';
```
*(Matches: Noida)*

**Example: Find a city starting with 'P', followed by any 2 characters, ending with 'e':**
```sql
SELECT * FROM Customers
WHERE City LIKE 'P__e';
```
*(Matches: Pune)*

---

## 3. Combining `%` and `_`
You can mix and match `%` and `_` to create very specific filters.

**Example: Find a customer whose name has an 'e' in the second position:**
```sql
SELECT * FROM Customers
WHERE CustomerName LIKE '_e%';
```
*(Matches: Verma Sweets, Reddy Enterprises)*

**Example: Find a customer whose name starts with 'R' and is at least 3 characters long:**
```sql
SELECT * FROM Customers
WHERE CustomerName LIKE 'R__%';
```

---

## 4. The `[]` and `-` Wildcards (SQL Server Only)
These are used when you want to match a specific set of characters for a single position.

**Example: Find customers starting with either "S", "V", or "G":**
```sql
SELECT * FROM Customers
WHERE CustomerName LIKE '[SVG]%';
```
*(Matches: Sharma Stores, Verma Sweets, Gupta Electronics)*

**Example: Find customers starting with any letter from A to G:**
```sql
SELECT * FROM Customers
WHERE CustomerName LIKE '[A-G]%';
```
*(Matches: Gupta Electronics)*

---

## Quick Recap
- **`LIKE`**: Used in `WHERE` clauses to search for patterns.
- **`%`**: Matches any number of characters (0 or more).
- **`_`**: Matches exactly one character.
- **`[]`**: Matches any single character specified inside the brackets (SQL Server).
- **No Wildcard**: If you use `LIKE 'Delhi'` without `%` or `_`, it behaves exactly like `= 'Delhi'`.
