# MySQL Installation

This guide provides a comprehensive overview of essential MySQL commands, covering installation, user management, and permissions, primarily tailored for macOS environments using Homebrew.

## Getting Started

### Installing MySQL via Homebrew

Homebrew is a popular package manager for macOS. You can easily install MySQL using it. Run these commands in your terminal to install MySQL for the first time:

**Install MySQL:**
```bash
brew install mysql
```

**Start the MySQL Service:**
To ensure MySQL runs in the background, start the service:
```bash
brew services start mysql
```

**Secure the Installation:**
It's highly recommended to secure your MySQL installation right after installing. This command helps you set a root password, remove anonymous users, disable remote root login, and remove the test database.
```bash
mysql_secure_installation
```

**Verify Installation:**
Check if MySQL is installed correctly and see its version:
```bash
mysql --version
```

### Login to MySQL

To access the MySQL command-line client, you need to log in. Using the `root` user:
```bash
mysql -u root -p
```
*Note: You will be prompted to enter the password you set during the `mysql_secure_installation` step.*

---

## User Management

### View All Users

To see a list of all existing users in your MySQL server:
```sql
SELECT User, Host FROM mysql.user;
```

### Create a New User

Creating dedicated users for different applications or team members is a security best practice.
```sql
CREATE USER 'avdesh'@'localhost' IDENTIFIED BY 'StrongPassword123!';
```

**Example (Creating a user 'john'):**
```sql
CREATE USER 'john'@'localhost' IDENTIFIED BY 'John@123';
```

### Rename a Username

If you need to change a user's name:
```sql
RENAME USER 'oldname'@'localhost' TO 'newname'@'localhost';
```
**Example:**
```sql
RENAME USER 'avdesh'@'localhost' TO 'lavender'@'localhost';
```

### Change Password

**For the Current (Logged-in) User (e.g., root):**
```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword123!';
```

**For Another User:**
```sql
ALTER USER 'avdesh'@'localhost' IDENTIFIED BY 'MyNewPassword123!';
```

### Lock and Unlock a User

Locking an account is a good way to temporarily disable access without deleting the user.
**Lock:**
```sql
ALTER USER 'avdesh'@'localhost' ACCOUNT LOCK;
```
**Unlock:**
```sql
ALTER USER 'avdesh'@'localhost' ACCOUNT UNLOCK;
```

### Delete an Existing User

When a user is no longer needed, it's best to remove their access entirely:
```sql
DROP USER 'avdesh'@'localhost';
```

---

## Permissions and Grants

### Grant Database Permissions to a User

After creating a user, they have no permissions by default. You must grant them the privileges they need.

**For a single database:**
This grants all privileges (CRUD operations, schema changes) on `testdb` to the user `avdesh`.
```sql
GRANT ALL PRIVILEGES ON testdb.* TO 'avdesh'@'localhost';
```

**Granular Permissions (Best Practice for Apps):**
For production apps, you should only grant what is necessary:
```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON testdb.* TO 'app_user'@'localhost';
```

**For all databases:**
*(Warning: Use this with caution, as it gives full control over the entire MySQL server)*
```sql
GRANT ALL PRIVILEGES ON *.* TO 'avdesh'@'localhost' WITH GRANT OPTION;
```

**Apply changes:**
Always remember to flush privileges after making changes to user permissions to ensure they take effect immediately.
> **Note:** `FLUSH PRIVILEGES;` is strictly only required if you directly modify the `mysql.user` grant tables using `INSERT`, `UPDATE`, or `DELETE`. When using commands like `GRANT`, `REVOKE`, or `CREATE USER`, MySQL automatically flushes privileges for you, but running it anyway is a safe habit!
```sql
FLUSH PRIVILEGES;
```

### View a User's Permissions

To verify what permissions a specific user currently holds:
```sql
SHOW GRANTS FOR 'avdesh'@'localhost';
```

**For the root user:**
```sql
SHOW GRANTS FOR 'root'@'localhost';
```

### Revoke All Permissions

If you need to remove permissions from a user:
```sql
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'avdesh'@'localhost';
FLUSH PRIVILEGES;
```

---

## Database Exploration and Environment

### View Current Logged-in User
To check which account you are currently using:
```sql
SELECT CURRENT_USER();
```

### Check Current MySQL Server Version
To retrieve the exact version of the MySQL server running:
```sql
SELECT VERSION();
```

### List All Databases
To view all available databases on your server:
```sql
SHOW DATABASES;
```

### Check Current Database
To see which database is currently selected for your queries:
```sql
SELECT DATABASE();
```

### Select a Database and List All Tables
Before you can interact with tables, you must select the database they belong to.
```sql
USE testdb;
SHOW TABLES;
```

### Check Table Structure (Schema)
To see the columns and data types of a specific table:
```sql
DESCRIBE table_name;
```
To see the exact SQL command that was used to create the table (useful for copying table structures):
```sql
SHOW CREATE TABLE table_name;
```

---

## Service Control and Testing

### Test Login
To exit the current MySQL session:
```sql
EXIT;
```
To log in as a specific user (e.g., to test their newly created account):
```bash
mysql -u avdesh -p
```

### MySQL Service Control (Homebrew)

If you installed MySQL via Homebrew, you can manage the background service using these commands:

- **Start:**
  ```bash
  brew services start mysql
  ```
- **Stop:**
  ```bash
  brew services stop mysql
  ```
- **Restart:**
  ```bash
  brew services restart mysql
  ```
- **Status:**
  ```bash
  brew services list
  ```

---

## Advanced Administration & Maintenance

### Database Export and Import (Backup & Restore)

**Export (Backup):**
Use `mysqldump` to create a `.sql` backup file of your database. Run this from your normal terminal (not inside the MySQL prompt):
```bash
mysqldump -u root -p testdb > backup.sql
```

**Import (Restore):**
To restore a `.sql` file into a database (ensure the database already exists):
```bash
mysql -u root -p testdb < backup.sql
```

### Monitoring & Process Management

If your database is running slow, you can see all currently executing queries and kill any that are stuck.

**View Running Processes:**
```sql
SHOW PROCESSLIST;
```
*(This shows the `Id`, `User`, `Time`, and `State` of all running queries).*

**Kill a Process:**
If a query with `Id` 45 is stuck and locking up the database:
```sql
KILL 45;
```

### Viewing Storage Engines
To see which storage engines (like `InnoDB` or `MyISAM`) are supported and active:
```sql
SHOW ENGINES;
```
