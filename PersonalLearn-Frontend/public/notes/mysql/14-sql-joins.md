# SQL JOINs

When your data is scattered across multiple tables, you need a way to combine them. A `JOIN` clause is used to merge rows from two or more tables based on a related column between them.

Let's look at two sample tables to understand this better.

**`Customers` Table:**
| CustomerID | CustomerName | City |
| :--- | :--- | :--- |
| 1 | Ramesh Sharma | Delhi |
| 2 | Suresh Verma | Pune |
| 3 | Amit Gupta | Noida |

**`Orders` Table:**
| OrderID | CustomerID | Product |
| :--- | :--- | :--- |
| 101 | 1 | Laptop |
| 102 | 1 | Mobile Phone |
| 103 | 2 | Tablet |
| 104 | 99 | Smartwatch | _(Notice CustomerID 99 doesn't exist in our Customers table!)_

Notice how both tables share a `CustomerID` column. We will use this column to join them together.

---

## 1. INNER JOIN (The Default Join)

Returns ONLY the rows that have matching values in **both** tables. If a customer has no orders, they don't show up. If an order has a missing customer, it doesn't show up.

<div style="display: flex; justify-content: center; margin: 2rem 0;">
<svg width="100%" style="max-width: 450px; height: auto;" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="85" cy="75" r="60" fill="none" stroke="#666" stroke-width="2"/>
  <circle cx="155" cy="75" r="60" fill="none" stroke="#666" stroke-width="2"/>
  <path d="M 120,26 A 60,60 0 0,0 120,124 A 60,60 0 0,0 120,26" fill="#34d399"/>
  <text x="50" y="80" font-family="sans-serif" font-size="14" fill="#666" text-anchor="middle">Table 1</text>
  <text x="190" y="80" font-family="sans-serif" font-size="14" fill="#666" text-anchor="middle">Table 2</text>
</svg>
</div>

**Example:**

```sql
SELECT Customers.CustomerName, Orders.Product
FROM Customers
INNER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;
```

_(Matches: Ramesh (Laptop, Mobile), Suresh (Tablet). Amit Gupta is excluded because he has no orders. Order 104 is excluded because Customer 99 doesn't exist.)_

> **Tip:** If you just write `JOIN`, SQL automatically assumes you mean `INNER JOIN`.

---

## 2. LEFT JOIN

Returns **ALL** rows from the left table (`Customers`), and only the matched rows from the right table (`Orders`). If there is no match, the right side will just be `NULL`.

<div style="display: flex; justify-content: center; margin: 2rem 0;">
<svg width="100%" style="max-width: 450px; height: auto;" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="85" cy="75" r="60" fill="#34d399" stroke="#666" stroke-width="2"/>
  <circle cx="155" cy="75" r="60" fill="none" stroke="#666" stroke-width="2"/>
  <text x="50" y="80" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">Table 1</text>
  <text x="190" y="80" font-family="sans-serif" font-size="14" fill="#666" text-anchor="middle">Table 2</text>
</svg>
</div>

**Example:**

```sql
SELECT Customers.CustomerName, Orders.Product
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;
```

_(Matches: Ramesh (Laptop, Mobile), Suresh (Tablet), Amit Gupta (NULL). Notice Amit Gupta is included even though he has no orders!)_

---

## 3. RIGHT JOIN

Returns **ALL** rows from the right table (`Orders`), and only the matched rows from the left table (`Customers`). If a match isn't found, the left side is `NULL`.

<div style="display: flex; justify-content: center; margin: 2rem 0;">
<svg width="100%" style="max-width: 450px; height: auto;" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="155" cy="75" r="60" fill="#34d399" stroke="#666" stroke-width="2"/>
  <circle cx="85" cy="75" r="60" fill="none" stroke="#666" stroke-width="2"/>
  <text x="50" y="80" font-family="sans-serif" font-size="14" fill="#666" text-anchor="middle">Table 1</text>
  <text x="190" y="80" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">Table 2</text>
</svg>
</div>

**Example:**

```sql
SELECT Customers.CustomerName, Orders.Product
FROM Customers
RIGHT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;
```

_(Matches: Ramesh (Laptop, Mobile), Suresh (Tablet), NULL (Smartwatch). Notice Order 104 is included even though Customer 99 doesn't exist!)_

---

## 4. FULL OUTER JOIN

Returns **ALL** rows from both tables. Where it finds a match, it puts them together. Where it doesn't find a match, it puts `NULL` for the missing side.

<div style="display: flex; justify-content: center; margin: 2rem 0;">
<svg width="100%" style="max-width: 450px; height: auto;" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="85" cy="75" r="60" fill="#34d399" stroke="#666" stroke-width="2"/>
  <circle cx="155" cy="75" r="60" fill="#34d399" stroke="#666" stroke-width="2"/>
  <text x="50" y="80" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">Table 1</text>
  <text x="190" y="80" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">Table 2</text>
</svg>
</div>

**Example:**

```sql
SELECT Customers.CustomerName, Orders.Product
FROM Customers
FULL JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;
```

_(Matches: Absolutely everything. Both Amit Gupta (NULL Product) and the Smartwatch (NULL Customer) will be in the final result)._

---

## 5. Self Join

A self join is when you join a table with itself! This is useful when you want to compare rows within the same table.

**Example: Find customers who live in the same city:**

```sql
SELECT A.CustomerName AS Customer1, B.CustomerName AS Customer2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID != B.CustomerID
AND A.City = B.City;
```

_(We use Aliases `A` and `B` so SQL knows which "version" of the Customers table we are talking about)._

---

## Quick Recap

- **`INNER JOIN`**: Returns records that have matching values in both tables.
- **`LEFT JOIN`**: Returns all records from the left table, and the matched records from the right table.
- **`RIGHT JOIN`**: Returns all records from the right table, and the matched records from the left table.
- **`FULL JOIN`**: Returns all records when there is a match in either left or right table.
