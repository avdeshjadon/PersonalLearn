# SQL Injection (Hacking 101)

**SQL Injection** is a code injection technique that can completely destroy your database. It is one of the most common web hacking techniques in the world.

It happens when an attacker inserts malicious SQL code into the user-input fields of your website (like the Login form or Search bar) to read, modify, or delete sensitive data.

---

## How it works: The "1=1" Hack

Imagine you have a login page. Behind the scenes, your website code looks like this:
```javascript
// WARNING: NEVER WRITE CODE LIKE THIS!
username = getUserInput();
sql = "SELECT * FROM Users WHERE Name = '" + username + "'";
```

If a normal user logs in, they type `Rahul`. The query becomes:
```sql
SELECT * FROM Users WHERE Name = 'Rahul'
```

But what if a Hacker types `" or ""="` into the username box? The query becomes:
```sql
SELECT * FROM Users WHERE Name = "" or ""=""
```
Since `""=""` is **always true**, the SQL statement ignores the username requirement and logs the hacker in as the first user in the database (which is usually the Admin)! They just bypassed your login screen without a password.

---

## The "Batched Statement" Attack
Some hackers will try to inject semicolons `;` to end your query and start their own malicious query.

If they type `105; DROP TABLE Users` into an ID search box, the query becomes:
```sql
SELECT * FROM Users WHERE UserId = 105; DROP TABLE Users;
```
Your database will fetch user 105, and then **immediately delete your entire Users table**.

> **How to fix this?** Read the next chapter on **SQL Parameters & Prepared Statements** to learn how to completely stop SQL Injections!
