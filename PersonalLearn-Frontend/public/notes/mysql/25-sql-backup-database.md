# SQL BACKUP DATABASE

Data is the most valuable asset for any company. Hard drives crash, servers fail, and humans make mistakes (like accidentally running `DROP DATABASE`). 

This is why we take **Backups**. 

> **Note:** The exact syntax for backups varies heavily by system. The examples below focus on the standard **SQL Server** approach. In MySQL, you typically use a command-line tool called `mysqldump` instead of an SQL statement.

---

## 1. Full Database Backup
A full backup copies everything—the entire database structure and all the data within it.

**Example: Create a full backup of our production database:**
```sql
BACKUP DATABASE FlipkartDB
TO DISK = 'D:\backups\FlipkartDB.bak';
```
> **Pro Tip:** NEVER store your backup file on the same hard drive as your actual database! If the hard drive dies, you lose both the database and the backup. Always save it to a different drive (like `D:\` or an external cloud server).

---

## 2. Differential Database Backup
A full backup might take hours if your database is terabytes in size. 

A **Differential Backup** is a smarter way to backup frequently. It only backs up the data that has *changed* since the last full backup! 

*Requirement: You must have taken at least one full backup before you can take a differential backup.*

**Example: Taking a quick differential backup at the end of the day:**
```sql
BACKUP DATABASE FlipkartDB
TO DISK = 'D:\backups\FlipkartDB_diff.bak'
WITH DIFFERENTIAL;
```
*(This is much faster and saves a lot of disk space compared to running a full backup every day).*

---

## Quick Recap
- **`BACKUP DATABASE`**: Saves a copy of your database to a file.
- **Full Backup**: Copies absolutely everything.
- **Differential Backup**: Only copies what has changed since the last full backup.
