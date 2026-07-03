# SQL DROP DATABASE

The `DROP DATABASE` statement is used to completely and permanently delete an existing SQL database.

> [!CAUTION]
> **Extremely Dangerous Operation!**
> Dropping a database deletes the database AND absolutely everything inside it. All your tables, all your customer records, all your stored procedures—everything is gone forever. **There is no recycle bin!**

---

## 1. Syntax & Example

```sql
DROP DATABASE database_name;
```

**Example: Let's delete a test database we no longer need:**
```sql
DROP DATABASE testDB;
```

---

## 2. Verifying the Deletion
After dropping the database, you can use the same commands you used to list databases to ensure it has disappeared.

**For MySQL:**
```sql
SHOW DATABASES;
```
*(If you look through the list, `testDB` should no longer be there).*

---

## Quick Recap
- **`DROP DATABASE`**: Completely deletes a database and all its contents.
- **Always double-check** you are deleting the right database before running this command!
- Requires administrative privileges.
