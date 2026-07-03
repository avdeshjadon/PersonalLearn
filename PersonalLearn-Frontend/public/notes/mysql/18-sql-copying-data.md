# Copying Data (SELECT INTO & INSERT INTO SELECT)

There are times when you need to duplicate tables, create backups, or move data from an old table to a new one. SQL provides two great ways to do this.

---

## 1. SELECT INTO (Create and Copy)
The `SELECT INTO` statement creates a brand **new table** on the spot, and fills it with data from an existing table. 

This is perfect for making quick backups!

**Example: Create a full backup of the Customers table:**
```sql
SELECT * INTO CustomersBackup2024
FROM Customers;
```

**Example: Create a new table with only specific columns:**
```sql
SELECT CustomerName, City INTO CustomerContactList
FROM Customers;
```

**Example: Backup only customers from Delhi:**
```sql
SELECT * INTO DelhiCustomers
FROM Customers
WHERE City = 'Delhi';
```

> **Warning:** `SELECT INTO` copies the columns and the data, but it does **NOT** copy Indexes, Primary Keys, or Constraints. The new table is just a simple, flat structure.

### A Cool Trick: Cloning an Empty Table
If you want to create a new table with the exact same columns as an old one, but you want it to be **empty**, just use a `WHERE` condition that is impossible!
```sql
SELECT * INTO EmptyCustomersTable
FROM Customers
WHERE 1 = 0;  -- This is never true, so 0 rows are copied!
```

---

## 2. INSERT INTO SELECT (Copy to Existing)
What if the destination table **already exists**, and you just want to dump data into it? You cannot use `SELECT INTO` (because it tries to create a new table). 

Instead, you use `INSERT INTO ... SELECT`.

**Example: Copy all Suppliers into an existing Customers table:**
```sql
INSERT INTO Customers (CustomerName, City, Country)
SELECT SupplierName, City, Country 
FROM Suppliers;
```
*(This takes the names, cities, and countries of your suppliers, and inserts them as new rows into your Customers table).*

---

## Quick Recap
- **`SELECT INTO`**: Creates a **NEW** table and copies data into it (Great for backups).
- **`INSERT INTO SELECT`**: Copies data from one table and inserts it into an **EXISTING** table.
