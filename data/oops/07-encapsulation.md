# ENCAPSULATION

## Concept Introduction

Imagine ek **medicine capsule** - andar kai saare ingredients hain but wo **ek covering mein packed** hain. Tum directly ingredients ko touch nahi kar sakte, capsule ke through hi access hota hai. **Encapsulation** bhi aise hi hai - **data ko private rakh kar, controlled access through public methods**.

**Encapsulation = Data Hiding + Controlled Access**

Real-World Example: **ATM Machine** - Tum directly cash box ko nahi kholte, ATM interface use karke safely paise nikalte ho.

---

## Why Encapsulation Exists

### The Problem
Agar class ka sara data public ho:
- Koi bhi directly data change kar sakta hai
- Invalid values set ho sakte hain
- Data corruption possible
- No validation control

```java
class BankAccount {
    public int balance = 1000;
}

BankAccount acc = new BankAccount();
acc.balance = -5000;  // Invalid but possible!
```

### The Solution
Data ko **private** rakh kar, **public methods** through controlled access:
- Data protected
- Validation possible
- Full control over how data is accessed/modified

```java
class BankAccount {
    private int balance = 1000;
    
    public void withdraw(int amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}
```

---

## Definitions

### Very Simple Definition
Data ko private rakhna aur public methods se access dena encapsulation hai.

### Simple Definition
Encapsulation is the mechanism of wrapping data (variables) and methods into a single unit (class), and restricting direct access to some of the object's components.

### College Exam Definition
Encapsulation is a fundamental OOPs principle that binds together data and functions that manipulate the data, and keeps both safe from outside interference and misuse. It is achieved by declaring instance variables as private and providing public getter and setter methods to access and modify them.

### Interview Definition
Encapsulation is the process of wrapping data (fields) and code (methods) together into a single unit called a class, while hiding the internal implementation details from the outside world. It is achieved by making data members private and providing public accessor (getter) and mutator (setter) methods. This provides data hiding, validation, and control over how data is accessed or modified, making code more maintainable and secure.

### Deep Technical Definition
Encapsulation is an OOPs principle that implements data hiding and abstraction by binding data members and member functions into a single unit (class) while controlling access through access modifiers (private, protected, public, default). It ensures that the internal representation of an object is hidden from the outside, exposing only necessary interfaces through public methods. This creates a protective barrier around data, prevents unauthorized access, enables validation before modification, maintains class invariants, reduces coupling, and provides flexibility to change internal implementation without affecting external code. In Java, it's implemented using private fields with public getter/setter methods (accessor/mutator methods), following the JavaBeans naming convention.

---

## Key Concepts

### 1. Data Hiding
Make data members **private**

```java
class Student {
    private String name;    // Can't access directly
    private int age;        // Can't access directly
}
```

### 2. Controlled Access
Provide **public getter/setter** methods

```java
class Student {
    private String name;
    
    // Getter method
    public String getName() {
        return name;
    }
    
    // Setter method
    public void setName(String name) {
        this.name = name;
    }
}
```

---

## Complete Encapsulation Example

```java
class Employee {
    // Private data members (Data Hiding)
    private int empId;
    private String empName;
    private double salary;
    
    // Public getter for empId
    public int getEmpId() {
        return empId;
    }
    
    // Public setter for empId
    public void setEmpId(int empId) {
        if (empId > 0) {  // Validation
            this.empId = empId;
        } else {
            System.out.println("Invalid Employee ID");
        }
    }
    
    // Public getter for empName
    public String getEmpName() {
        return empName;
    }
    
    // Public setter for empName
    public void setEmpName(String empName) {
        if (empName != null && !empName.isEmpty()) {
            this.empName = empName;
        } else {
            System.out.println("Name cannot be empty");
        }
    }
    
    // Public getter for salary
    public double getSalary() {
        return salary;
    }
    
    // Public setter for salary
    public void setSalary(double salary) {
        if (salary >= 10000) {  // Minimum salary validation
            this.salary = salary;
        } else {
            System.out.println("Salary must be at least 10000");
        }
    }
    
    // Additional method
    public void displayInfo() {
        System.out.println("ID: " + empId);
        System.out.println("Name: " + empName);
        System.out.println("Salary: " + salary);
    }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee();
        
        // Can't access directly (private)
        // emp.empId = 101;     // ERROR!
        // emp.empName = "Rahul";  // ERROR!
        
        // Must use setter methods
        emp.setEmpId(101);
        emp.setEmpName("Rahul Kumar");
        emp.setSalary(50000);
        
        emp.displayInfo();
        
        // Trying invalid values
        emp.setEmpId(-5);        // Invalid Employee ID
        emp.setSalary(5000);     // Salary must be at least 10000
        
        // Getting values using getters
        System.out.println("\nEmployee Name: " + emp.getEmpName());
        System.out.println("Employee Salary: " + emp.getSalary());
    }
}
```

**Output**:
```
ID: 101
Name: Rahul Kumar
Salary: 50000.0
Invalid Employee ID
Salary must be at least 10000

Employee Name: Rahul Kumar
Employee Salary: 50000.0
```

---

## Real-World Example: Bank Account

```java
class BankAccount {
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private String pin;
    
    // Constructor
    public BankAccount(String accountNumber, String accountHolder, String pin) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.pin = pin;
        this.balance = 0;
    }
    
    // Deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: ₹" + amount);
        } else {
            System.out.println("Invalid amount");
        }
    }
    
    // Withdraw money (with PIN validation)
    public void withdraw(double amount, String inputPin) {
        if (!inputPin.equals(pin)) {
            System.out.println("Incorrect PIN!");
            return;
        }
        
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: ₹" + amount);
        } else if (amount > balance) {
            System.out.println("Insufficient balance");
        } else {
            System.out.println("Invalid amount");
        }
    }
    
    // Check balance (with PIN validation)
    public void checkBalance(String inputPin) {
        if (inputPin.equals(pin)) {
            System.out.println("Balance: ₹" + balance);
        } else {
            System.out.println("Incorrect PIN!");
        }
    }
    
    // Change PIN
    public void changePin(String oldPin, String newPin) {
        if (oldPin.equals(pin)) {
            this.pin = newPin;
            System.out.println("PIN changed successfully");
        } else {
            System.out.println("Incorrect old PIN!");
        }
    }
    
    // Get account holder name (public info)
    public String getAccountHolder() {
        return accountHolder;
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("1234567890", "Rahul Kumar", "1234");
        
        System.out.println("Account Holder: " + account.getAccountHolder());
        
        // Can't directly access balance
        // System.out.println(account.balance);  // ERROR! Private
        
        account.deposit(10000);
        account.checkBalance("1234");
        
        account.withdraw(3000, "1234");
        account.checkBalance("1234");
        
        // Wrong PIN
        account.withdraw(1000, "9999");  // Incorrect PIN!
        
        account.changePin("1234", "5678");
        account.checkBalance("5678");
    }
}
```

**Perfect example of data security through encapsulation!**

---

## Advantages of Encapsulation

### 1. Data Hiding
```java
private double salary;  // Hidden from outside
```

### 2. Data Validation
```java
public void setAge(int age) {
    if (age > 0 && age < 120) {
        this.age = age;
    }
}
```

### 3. Read-Only Class
```java
class Student {
    private int rollNo;
    
    public int getRollNo() {  // Only getter, no setter
        return rollNo;
    }
}
```

### 4. Write-Only Class
```java
class Password {
    private String password;
    
    public void setPassword(String password) {  // Only setter, no getter
        this.password = password;
    }
}
```

### 5. Flexibility
```java
// Can change internal implementation
private double balance;

// Without affecting outside code
public double getBalance() {
    return balance;  // Can add logic here
}
```

---

## Benefits Summary

| Benefit | Description | Example |
|---------|-------------|---------|
| **Data Hiding** | Internal data hidden from outside | private fields |
| **Validation** | Control what values can be set | Age > 0 validation |
| **Flexibility** | Change implementation without affecting users | Change field type internally |
| **Maintainability** | Easy to debug and maintain | All access through methods |
| **Security** | Prevent unauthorized access | PIN validation |
| **Reusability** | Well-encapsulated classes reusable | JavaBeans |

---

## Encapsulation in Java

### Fully Encapsulated Class Requirements:
1. All data members must be **private**
2. Provide **public getter/setter** methods
3. No public variables

```java
class Person {
    private String name;     // ✅ Private
    private int age;         // ✅ Private
    
    public String getName() { return name; }       // ✅ Getter
    public void setName(String name) { this.name = name; }  // ✅ Setter
    
    public int getAge() { return age; }            // ✅ Getter
    public void setAge(int age) { this.age = age; }  // ✅ Setter
}
```

---

## Getter and Setter Conventions

### Naming Convention:
- **Getter**: `get + FieldName` (capitalize first letter)
- **Setter**: `set + FieldName` (capitalize first letter)
- **Boolean**: `is + FieldName`

```java
class Student {
    private String name;
    private int age;
    private boolean passed;
    
    // Getter methods
    public String getName() { return name; }
    public int getAge() { return age; }
    public boolean isPassed() { return passed; }  // For boolean
    
    // Setter methods
    public void setName(String name) { this.name = name; }
    public void setAge(int age) { this.age = age; }
    public void setPassed(boolean passed) { this.passed = passed; }
}
```

---

## Without vs With Encapsulation

### ❌ Without Encapsulation:
```java
class Student {
    public String name;
    public int age;
}

Student s = new Student();
s.name = "";           // Invalid but allowed
s.age = -5;            // Invalid but allowed
```

### ✅ With Encapsulation:
```java
class Student {
    private String name;
    private int age;
    
    public void setName(String name) {
        if (name != null && !name.isEmpty()) {
            this.name = name;
        }
    }
    
    public void setAge(int age) {
        if (age > 0 && age < 100) {
            this.age = age;
        }
    }
}

Student s = new Student();
s.setName("");         // Validation applied
s.setAge(-5);          // Validation applied
```

---

## Important Interview Questions

**Q1: What is Encapsulation?**

Encapsulation is wrapping data and methods into a single unit (class) and hiding internal details by making data private and providing public methods for controlled access.

**Q2: How to achieve Encapsulation in Java?**

1. Declare variables as private
2. Provide public getter and setter methods
3. Add validation in setter methods

**Q3: What are the advantages of Encapsulation?**

- Data hiding and security
- Data validation and integrity
- Flexibility to change implementation
- Better maintainability
- Reusability

**Q4: Difference between Encapsulation and Abstraction?**

- **Encapsulation**: Data hiding (how to achieve)
- **Abstraction**: Showing only essential details (what to show)

**Q5: Is encapsulation just making variables private?**

No! It's about:
1. Making data private (data hiding)
2. Providing controlled access through methods
3. Adding validation
4. Maintaining data integrity

---

## Short Recap

**Encapsulation = Data Hiding + Controlled Access**

**How to Achieve**:
1. Make data members **private**
2. Provide **public getters/setters**
3. Add **validation** in methods

**Benefits**:
- Data security
- Validation control
- Flexibility
- Maintainability

**Real-World**: Capsule, ATM Machine, TV Remote

```
╔══════════════════════════════════════════════════════════════════════════╗
║                          ENCAPSULATION                                   ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║   ┌────────────────────────────────────────────────┐                    ║
║   │            CLASS (Capsule)                     │                    ║
║   ├────────────────────────────────────────────────┤                    ║
║   │                                                │                    ║
║   │  🔒 private int balance                        │  Data Hiding       ║
║   │  🔒 private String name                        │  (Private)         ║
║   │  🔒 private String pin                         │                    ║
║   │                                                │                    ║
║   │  ─────────────────────────────────────────     │                    ║
║   │                                                │                    ║
║   │  🔓 public void deposit(amount)                │  Controlled        ║
║   │  🔓 public void withdraw(amount)               │  Access            ║
║   │  🔓 public double getBalance()                 │  (Public Methods)  ║
║   │                                                │                    ║
║   └────────────────────────────────────────────────┘                    ║
║                                                                          ║
║   Outside World can only use public methods                             ║
║   Cannot directly access private data                                   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```
