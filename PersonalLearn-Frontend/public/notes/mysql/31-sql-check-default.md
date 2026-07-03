# SQL CHECK & DEFAULT Constraints

We've already learned about `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, and `FOREIGN KEY`. Now let's look at two more incredibly useful constraints: `CHECK` and `DEFAULT`.

---

## 1. The CHECK Constraint
The `CHECK` constraint acts as a bouncer for your column. It checks if the data you are trying to insert meets a specific condition (e.g., "Is this person 18 or older?"). If the condition evaluates to `TRUE`, the data goes in. If `FALSE`, it throws an error and rejects the insertion.

**Example: Ensuring only adults can register:**
```sql
CREATE TABLE Persons (
    ID int PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    Age int CHECK (Age >= 18)
);
```

**Adding CHECK to an existing table:**
```sql
ALTER TABLE Persons
ADD CONSTRAINT chk_PersonAge CHECK (Age >= 18 AND City = 'Delhi');
```

---

## 2. The DEFAULT Constraint
Sometimes, users don't provide a value for a column. Instead of leaving it `NULL`, you can use the `DEFAULT` constraint to automatically fill in a fallback value!

**Example: Setting a default City if none is provided:**
```sql
CREATE TABLE Persons (
    ID int PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    City varchar(255) DEFAULT 'Mumbai'
);
```
*(Now, if someone registers without entering their City, SQL automatically inserts 'Mumbai' for them).*

**Using System Functions as Defaults:**
You can even use built-in functions as defaults. For example, automatically logging the exact date an order was placed:
```sql
CREATE TABLE Orders (
    ID int PRIMARY KEY,
    OrderDate date DEFAULT CURRENT_DATE()
);
```

---

## Quick Recap
- **`CHECK`**: Ensures data passes a specific test before being saved.
- **`DEFAULT`**: Provides an automatic fallback value if the user forgets to supply one.
