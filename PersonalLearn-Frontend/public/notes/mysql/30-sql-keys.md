# SQL PRIMARY KEY & FOREIGN KEY

When working with databases, tables rarely exist in isolation. They talk to each other! To manage these relationships and uniquely identify records, we use **Keys**.

---

## 1. The PRIMARY KEY Constraint
The `PRIMARY KEY` uniquely identifies each record in a table. It is the absolute most important column in your table (like an Aadhaar Card number or a Roll Number).

**Rules of a Primary Key:**
1. It MUST contain `UNIQUE` values.
2. It CANNOT contain `NULL` values.
3. A table can only have **ONE** Primary Key.

**Example: Creating a Primary Key:**
```sql
CREATE TABLE Persons (
    PersonID int PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    Age int
);
```

**Composite Primary Key:**
Sometimes, a single column isn't enough to uniquely identify a row. You can combine two columns to act as one Primary Key!
```sql
CREATE TABLE OrderDetails (
    OrderID int,
    ProductID int,
    Quantity int,
    CONSTRAINT PK_OrderProduct PRIMARY KEY (OrderID, ProductID)
);
```

---

## 2. The FOREIGN KEY Constraint
A `FOREIGN KEY` is a column (or collection of columns) in one table, that refers to the `PRIMARY KEY` in another table.

It creates a **Link** between two tables and protects that link from being destroyed.

Imagine a `Persons` table (Parents) and an `Orders` table (Children). An order must belong to a valid person.

**Example: Linking Orders to Persons:**
```sql
CREATE TABLE Orders (
    OrderID int PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int,
    
    -- This says: The PersonID in this table MUST exist in the Persons table!
    CONSTRAINT fk_Person FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
```

### Why is a Foreign Key so powerful?
- **Prevents Bad Data:** You cannot insert an order for `PersonID = 99` if Person 99 doesn't exist in the `Persons` table. SQL will block the insert!
- **Prevents Accidental Deletes:** You cannot delete Person 1 from the `Persons` table if they have active orders in the `Orders` table. The Foreign Key stops the deletion to prevent "Orphaned" orders.

---

## Quick Recap
- **`PRIMARY KEY`**: The unique identifier for a row in its own table.
- **`FOREIGN KEY`**: A link to another table's Primary Key. It ensures referential integrity (keeps data relationships valid).
