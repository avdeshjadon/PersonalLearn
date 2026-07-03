# SQL CREATE DATABASE

Before you can create tables (like `Customers` or `Orders`), you need a place to store them. Think of a Database as a massive digital filing cabinet that holds all your tables, views, and data.

The `CREATE DATABASE` statement is used to create a brand-new SQL database.

> **Note:** Creating a database is a major action. You usually need **administrative privileges** (like being a DBA - Database Administrator) to run this command.

---

## 1. Syntax & Example

The syntax is incredibly simple:
```sql
CREATE DATABASE database_name;
```

**Example: Let's create a database for a new e-commerce project:**
```sql
CREATE DATABASE FlipkartDB;
```
*(Once this runs, an empty database named `FlipkartDB` is created, ready for you to start adding tables!).*

---

## 2. Checking if your Database Exists
Once you create a database, how do you verify it's actually there? 

The command differs slightly depending on which database system you are using:

**For MySQL:**
```sql
SHOW DATABASES;
```
*(This will list all the databases currently present on your server, and you should see `FlipkartDB` in the list).*

**For SQL Server:**
```sql
SELECT name FROM sys.databases;
```

---

## Quick Recap
- **`CREATE DATABASE`**: Sets up a new, empty database.
- You must be an administrator to create one.
- Use `SHOW DATABASES;` (MySQL) to confirm it was created successfully.
