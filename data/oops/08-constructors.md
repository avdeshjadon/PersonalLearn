# CONSTRUCTORS

## Concept Introduction

Imagine tum ek **new car** kharid rahe ho - dealership se nikalte waqt usmein **fuel, AC, seats, wheels** sab already set hota hai. **Constructor** bhi waisa hi hai - **jab object banta hai, constructor automatically run hoke initial values set kar deta hai**.

**Constructor = Object creation ke time automatic setup**

Real Example: **New Phone** - switch on karte hi initial setup wizard automatically chalta hai

**Constructor = Special method that initializes object**

---

## Why Constructors Exist

### The Problem
Bina constructor, har object ke liye manually values set karni padti:

```java
Student s1 = new Student();
s1.name = "Rahul";     // Manual
s1.rollNo = 101;       // Manual
s1.age = 20;           // Manual
```

### The Solution
**Constructor** use karo - object creation ke sath hi values set ho jayengi:

```java
Student s1 = new Student("Rahul", 101, 20);  // All at once!
```

---

## Definitions

### Very Simple Definition
Constructor ek special method hai jo object bante waqt automatically call hota hai.

### Simple Definition
A constructor is a special method that is called automatically when an object is created. It is used to initialize the object's state with default or provided values.

### College Exam Definition
A constructor is a special member method of a class that has the same name as the class and no return type. It is automatically invoked when an object is created using the `new` keyword. Constructors are used to initialize instance variables and allocate resources. Java provides a default constructor if no constructor is explicitly defined.

### Interview Definition
A constructor is a special block of code similar to a method that is called when an instance of a class is created. It has the same name as the class, no return type (not even void), and is used to initialize objects with default or user-defined values. Constructors can be overloaded and chained. If no constructor is defined, Java provides a default no-argument constructor. Constructors cannot be inherited, abstract, static, or final, and they execute before any instance initialization blocks.

### Deep Technical Definition
A constructor is a special initialization method invoked during object instantiation that has the same name as the class, no return type, and cannot be static, final, or abstract. During object creation via the `new` operator, memory is allocated in the heap, then the constructor is invoked to initialize instance variables. Constructor execution follows: static blocks → instance blocks → parent constructor (via super()) → current constructor. Constructors support overloading (multiple constructors with different parameters) and chaining (calling another constructor using this() or super()). If no explicit constructor is defined, the compiler inserts a default no-arg constructor that calls super(). Constructors facilitate the creation of immutable objects and can be private for implementing design patterns like Singleton.

---

## Key Characteristics

1. **Same name as class**
2. **No return type** (not even void)
3. **Called automatically** when object is created
4. **Used to initialize** object state
5. **Can be overloaded** (multiple constructors)

---

## Syntax

```java
class ClassName {
    // Constructor
    ClassName() {
        // Initialization code
    }
}
```

---

## Basic Example

```java
class Student {
    String name;
    int rollNo;
    
    // Constructor
    Student() {
        name = "Unknown";
        rollNo = 0;
        System.out.println("Constructor called!");
    }
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();  // Constructor called automatically
        s1.display();
    }
}
```

**Output**:
```
Constructor called!
Name: Unknown
Roll No: 0
```

---

## Types of Constructors

### 1. Default Constructor (No Parameters)

```java
class Car {
    String brand;
    int year;
    
    // Default Constructor
    Car() {
        brand = "Unknown";
        year = 2020;
    }
    
    void display() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        Car c1 = new Car();
        c1.display();  // Brand: Unknown, Year: 2020
    }
}
```

### 2. Parameterized Constructor

```java
class Car {
    String brand;
    int year;
    
    // Parameterized Constructor
    Car(String b, int y) {
        brand = b;
        year = y;
    }
    
    void display() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        Car c1 = new Car("Maruti", 2023);
        c1.display();  // Brand: Maruti, Year: 2023
        
        Car c2 = new Car("Honda", 2024);
        c2.display();  // Brand: Honda, Year: 2024
    }
}
```

---

## Constructor Overloading

**Multiple constructors with different parameters**

```java
class Employee {
    String name;
    int id;
    double salary;
    
    // Constructor 1: No parameters
    Employee() {
        name = "Not Assigned";
        id = 0;
        salary = 0.0;
    }
    
    // Constructor 2: With name and id
    Employee(String name, int id) {
        this.name = name;
        this.id = id;
        this.salary = 25000;  // Default salary
    }
    
    // Constructor 3: All parameters
    Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Salary: " + salary);
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        Employee e1 = new Employee();
        e1.display();
        
        Employee e2 = new Employee("Rahul", 101);
        e2.display();
        
        Employee e3 = new Employee("Priya", 102, 50000);
        e3.display();
    }
}
```

---

## Constructor Chaining

### Using this()

```java
class Student {
    String name;
    int rollNo;
    int age;
    
    // Constructor 1
    Student() {
        this("Unknown", 0, 0);  // Calls Constructor 3
    }
    
    // Constructor 2
    Student(String name, int rollNo) {
        this(name, rollNo, 18);  // Calls Constructor 3
    }
    
    // Constructor 3
    Student(String name, int rollNo, int age) {
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
    }
    
    void display() {
        System.out.println(name + ", " + rollNo + ", " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.display();  // Unknown, 0, 0
        
        Student s2 = new Student("Rahul", 101);
        s2.display();  // Rahul, 101, 18
        
        Student s3 = new Student("Priya", 102, 20);
        s3.display();  // Priya, 102, 20
    }
}
```

**this() must be the first statement in constructor!**

---

## Real-World Example: Bank Account

```java
class BankAccount {
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private String accountType;
    
    // Default Constructor
    BankAccount() {
        this.accountNumber = "ACC000000";
        this.accountHolder = "Unknown";
        this.balance = 0.0;
        this.accountType = "Savings";
        System.out.println("Account created with default values");
    }
    
    // Constructor with account holder and type
    BankAccount(String accountHolder, String accountType) {
        this.accountNumber = generateAccountNumber();
        this.accountHolder = accountHolder;
        this.balance = 1000.0;  // Minimum balance
        this.accountType = accountType;
        System.out.println("Account created for " + accountHolder);
    }
    
    // Constructor with all details
    BankAccount(String accountNumber, String accountHolder, double balance, String accountType) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountType = accountType;
        System.out.println("Account created with custom details");
    }
    
    private String generateAccountNumber() {
        return "ACC" + System.currentTimeMillis();
    }
    
    void displayInfo() {
        System.out.println("=== Account Details ===");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: ₹" + balance);
        System.out.println("Account Type: " + accountType);
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount();
        acc1.displayInfo();
        
        BankAccount acc2 = new BankAccount("Rahul Kumar", "Savings");
        acc2.displayInfo();
        
        BankAccount acc3 = new BankAccount("ACC123456", "Priya Sharma", 50000, "Current");
        acc3.displayInfo();
    }
}
```

---

## Default Constructor by Java

Agar tum koi constructor nahi banate, to Java **automatically default constructor** provide karta hai:

```java
class Student {
    String name;
    int rollNo;
    
    // No constructor defined
}

// Java automatically provides:
// Student() { }
```

**But agar tum ek bhi constructor banao, to Java default constructor nahi deta!**

```java
class Student {
    String name;
    int rollNo;
    
    Student(String name) {
        this.name = name;
    }
}

// Now cannot call:
Student s = new Student();  // ERROR! No such constructor
```

---

## this Keyword in Constructor

```java
class Student {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;        // this.name refers to instance variable
        this.rollNo = rollNo;    // rollNo (parameter) vs this.rollNo (instance)
    }
}
```

**this** differentiates between parameter and instance variable.

---

## Important Rules

1. **Same name as class**
2. **No return type** (not even void)
3. **Can be overloaded** (multiple constructors)
4. **Cannot be inherited**
5. **Cannot be static/final/abstract**
6. **First statement must be super() or this()** (implicit if not explicit)
7. **this() or super() must be first statement**

---

## Constructor vs Method

| Feature | Constructor | Method |
|---------|------------|--------|
| **Purpose** | Initialize object | Perform operations |
| **Name** | Same as class | Any name |
| **Return Type** | No return type | Must have return type |
| **Invocation** | Automatically (when object created) | Explicitly called |
| **Inheritance** | Not inherited | Inherited |
| **this/super** | Can call this()/super() | Cannot |
| **Modifiers** | Cannot be static/final/abstract | Can be |

---

## Common Mistakes

### ❌ Wrong:

```java
class Student {
    void Student() {  // This is a METHOD, not constructor!
        // Has return type void
    }
}
```

### ✅ Correct:

```java
class Student {
    Student() {  // This is CONSTRUCTOR
        // No return type
    }
}
```

---

## Advantages of Constructors

| Advantage | Description |
|-----------|-------------|
| **Automatic Initialization** | No need to call separately |
| **Clean Code** | Initialize at creation |
| **Overloading** | Flexible object creation |
| **Guarantee** | Object always initialized |

---

## Important Interview Questions

**Q1: What is a Constructor?**

A constructor is a special method with the same name as the class and no return type, automatically called when an object is created, used to initialize object state.

**Q2: Types of Constructors?**

1. **Default Constructor**: No parameters
2. **Parameterized Constructor**: With parameters

**Q3: Difference between Constructor and Method?**

- **Constructor**: Same name as class, no return type, called automatically
- **Method**: Any name, must have return type, called explicitly

**Q4: Can we overload Constructors?**

Yes! Multiple constructors with different parameters.

**Q5: What if we don't define any constructor?**

Java provides a default no-argument constructor automatically.

**Q6: Can constructor be private?**

Yes! Used in Singleton pattern to prevent object creation from outside.

---

## Short Recap

**Constructor = Special method for object initialization**

**Key Points**:
- Same name as class
- No return type
- Called automatically
- Used to initialize object

**Types**:
1. Default (no parameters)
2. Parameterized (with parameters)

**Can be overloaded**: Multiple constructors with different parameters

```
╔═══════════════════════════════════════════════════════════════════════╗
║                          CONSTRUCTOR                                  ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                       ║
║   Student s1 = new Student("Rahul", 101);                            ║
║                     ↓                                                 ║
║                     Object Creation Triggers Constructor             ║
║                     ↓                                                 ║
║   ┌────────────────────────────────────────┐                         ║
║   │  class Student {                       │                         ║
║   │                                        │                         ║
║   │    Student(String name, int rollNo) { │  ← Constructor          ║
║   │      this.name = name;                │                         ║
║   │      this.rollNo = rollNo;            │                         ║
║   │    }                                   │                         ║
║   │  }                                     │                         ║
║   └────────────────────────────────────────┘                         ║
║                     ↓                                                 ║
║              Object Initialized                                       ║
║              name = "Rahul"                                           ║
║              rollNo = 101                                             ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```
