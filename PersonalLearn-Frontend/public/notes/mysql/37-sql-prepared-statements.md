# SQL Prepared Statements & Parameters

To completely protect your database from **SQL Injections** (discussed in the previous chapter), you must use **Parameterized Queries** (also known as Prepared Statements).

## The Concept
Instead of directly pasting user input into your SQL string (which is dangerous), you use **placeholders**. You send the SQL query template to the database *first*, and then send the user's data *separately*. 

Because the data is sent separately, the database treats it purely as text, not as executable code. If a hacker types `; DROP TABLE Users`, the database will just literally search for a user whose name is "; DROP TABLE Users".

## Examples in Different Languages

### MySQL (using PHP Prepared Statements)
In MySQL, we use the `?` symbol as a placeholder.

```php
// 1. Prepare the SQL query template (Notice the ? marks)
$sql = "INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

// 2. Bind the actual parameters
$stmt->bind_param("sss", $firstname, $lastname, $email);

// 3. Execute
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();
```

### SQL Server (using ASP.NET / C#)
SQL Server uses the `@` symbol for parameters.

```csharp
string userid = getRequestString("UserId");

// 1. Write the query with an @ placeholder
string query = "SELECT * FROM Customers WHERE CustomerId = @userid";
SqlCommand cmd = new SqlCommand(query);

// 2. Bind the value safely
cmd.Parameters.AddWithValue("@userid", userid);

// 3. Execute
cmd.ExecuteReader();
```

---

## Quick Recap
- **Never** directly concatenate user input into an SQL string!
- **Prepared Statements**: Send the SQL structure first, then send the user data separately.
- Uses `?` (MySQL) or `@param` (SQL Server) as placeholders.
- 100% effective against SQL Injection attacks.
