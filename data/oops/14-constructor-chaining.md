# CONSTRUCTOR CHAINING

## Concept Introduction

Jab ek **constructor** doosre constructor ko call karta hai, to ise **constructor chaining** kehte hain. Yeh **same class** ke andar **this()** se ho sakta hai ya **parent class** ke saath **super()** se. Constructor chaining se code **reusable** hota hai aur **duplication** kam hoti hai.

**Constructor Chaining = Ek constructor doosre constructor ko call kare**

Jaise dominos ki tarah - ek gira to sab gir gaye, waise hi ek constructor call hua to chain ban jati hai.

---

## Why This Concept Exists

### Problem Without Constructor Chaining

```java
class Student {
    String name;
    int age;
    String course;
    
    Student(String name) {
        this.name = name;
        this.age = 18;
        this.course = "Not Enrolled";
    }
    
    Student(String name, int age) {
        this.name = name;         // Duplicate code
        this.age = age;
        this.course = "Not Enrolled";  // Duplicate code
    }
    
    Student(String name, int age, String course) {
        this.name = name;         // Duplicate code
        this.age = age;          // Duplicate code
        this.course = course;
    }
}
```

**Problems:**
- Code duplication
- Maintenance difficult
- Error-prone

### Solution: Constructor Chaining

```java
class Student {
    String name;
    int age;
    String course;
    
    Student(String name) {
        this(name, 18);  // Calls 2-parameter constructor
    }
    
    Student(String name, int age) {
        this(name, age, "Not Enrolled");  // Calls 3-parameter constructor
    }
    
    Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}
```

---

## Definitions

### Very Simple Definition
Constructor chaining matlab ek constructor doosre constructor ko call kare.

### Simple Definition
Constructor chaining is the process of calling one constructor from another constructor within the same class using this() or from parent class using super().

### College Exam Definition
Constructor chaining refers to the mechanism where one constructor invokes another constructor of the same class (using this()) or the parent class (using super()). This helps reduce code duplication and ensures proper initialization sequence.

### Technical Definition
Constructor chaining is a design pattern in object-oriented programming where constructors call other constructors to reuse initialization logic. Within a class, this() is used for chaining same-class constructors, while super() chains to parent class constructors. The chaining call must be the first statement in the constructor.

### Interview Definition
Constructor chaining is the technique of calling one constructor from another. There are two types: (1) Within the same class using this(), called "Constructor Overloading Chaining", and (2) From parent to child class using super(), called "Inheritance Chaining". The this() or super() call must be the first statement in the constructor. It helps reduce code duplication, ensures consistent initialization, and maintains a proper initialization sequence.

---

## Types of Constructor Chaining

### 1. Within Same Class (using this())

```java
class Employee {
    String name;
    int id;
    double salary;
    String department;
    
    // Constructor 1
    Employee(String name) {
        this(name, 0);  // Calls Constructor 2
    }
    
    // Constructor 2
    Employee(String name, int id) {
        this(name, id, 0.0);  // Calls Constructor 3
    }
    
    // Constructor 3
    Employee(String name, int id, double salary) {
        this(name, id, salary, "Not Assigned");  // Calls Constructor 4
    }
    
    // Constructor 4 - Final constructor with all initialization
    Employee(String name, int id, double salary, String department) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.department = department;
    }
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Salary: " + salary);
        System.out.println("Department: " + department);
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        Employee e1 = new Employee("Rahul");
        e1.display();
        
        Employee e2 = new Employee("Priya", 101);
        e2.display();
        
        Employee e3 = new Employee("Amit", 102, 50000);
        e3.display();
        
        Employee e4 = new Employee("Sneha", 103, 60000, "IT");
        e4.display();
    }
}
```

**Output:**
```
Name: Rahul
ID: 0
Salary: 0.0
Department: Not Assigned

Name: Priya
ID: 101
Salary: 0.0
Department: Not Assigned

Name: Amit
ID: 102
Salary: 50000.0
Department: Not Assigned

Name: Sneha
ID: 103
Salary: 60000.0
Department: IT
```

---

### 2. From Parent to Child Class (using super())

```java
// Parent class
class Person {
    String name;
    int age;
    
    Person() {
        System.out.println("Person default constructor");
    }
    
    Person(String name) {
        this();  // Calls Person()
        this.name = name;
        System.out.println("Person constructor with name");
    }
    
    Person(String name, int age) {
        this(name);  // Calls Person(String)
        this.age = age;
        System.out.println("Person constructor with name and age");
    }
}

// Child class
class Student extends Person {
    int rollNo;
    String course;
    
    Student() {
        super();  // Calls Person()
        System.out.println("Student default constructor");
    }
    
    Student(String name, int rollNo) {
        super(name);  // Calls Person(String)
        this.rollNo = rollNo;
        System.out.println("Student constructor with name and rollNo");
    }
    
    Student(String name, int age, int rollNo, String course) {
        super(name, age);  // Calls Person(String, int)
        this.rollNo = rollNo;
        this.course = course;
        System.out.println("Student full constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Creating Student s1:");
        Student s1 = new Student();
        
        System.out.println("\nCreating Student s2:");
        Student s2 = new Student("Rahul", 101);
        
        System.out.println("\nCreating Student s3:");
        Student s3 = new Student("Priya", 20, 102, "Computer Science");
    }
}
```

**Output:**
```
Creating Student s1:
Person default constructor
Student default constructor

Creating Student s2:
Person default constructor
Person constructor with name
Student constructor with name and rollNo

Creating Student s3:
Person default constructor
Person constructor with name
Person constructor with name and age
Student full constructor
```

---

## Execution Order

### Rule 1: Constructor Call Order

**Parent → Child** (Parent constructor executes first)

```java
class A {
    A() {
        System.out.println("A constructor");
    }
}

class B extends A {
    B() {
        System.out.println("B constructor");
    }
}

class C extends B {
    C() {
        System.out.println("C constructor");
    }
}

// Output: A constructor → B constructor → C constructor
```

---

### Rule 2: this() vs super()

```java
class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    Child() {
        this(10);  // First calls Child(int)
    }
    
    Child(int x) {
        super();  // Then calls Parent()
        System.out.println("Child(int) constructor");
    }
}

// Output:
// Parent constructor
// Child(int) constructor
```

---

## Real-World Example: Banking System

```java
// Parent class
class Account {
    String accountNumber;
    String accountHolder;
    double balance;
    
    Account() {
        this("UNKNOWN", "UNKNOWN");
    }
    
    Account(String accNum, String holder) {
        this(accNum, holder, 0.0);
    }
    
    Account(String accNum, String holder, double balance) {
        this.accountNumber = accNum;
        this.accountHolder = holder;
        this.balance = balance;
        System.out.println("Account created");
    }
}

// Child class
class SavingsAccount extends Account {
    double interestRate;
    
    SavingsAccount(String accNum, String holder) {
        this(accNum, holder, 0.0);  // Calls SavingsAccount(String, String, double)
    }
    
    SavingsAccount(String accNum, String holder, double balance) {
        this(accNum, holder, balance, 4.5);  // Calls full constructor
    }
    
    SavingsAccount(String accNum, String holder, double balance, double rate) {
        super(accNum, holder, balance);  // Calls Account(String, String, double)
        this.interestRate = rate;
        System.out.println("Savings Account created with interest rate: " + rate + "%");
    }
    
    void displayInfo() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: " + balance);
        System.out.println("Interest Rate: " + interestRate + "%");
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        SavingsAccount acc1 = new SavingsAccount("SA001", "Rahul");
        acc1.displayInfo();
        
        SavingsAccount acc2 = new SavingsAccount("SA002", "Priya", 10000);
        acc2.displayInfo();
        
        SavingsAccount acc3 = new SavingsAccount("SA003", "Amit", 50000, 5.5);
        acc3.displayInfo();
    }
}
```

**Output:**
```
Account created
Savings Account created with interest rate: 4.5%
Account Number: SA001
Account Holder: Rahul
Balance: 0.0
Interest Rate: 4.5%

Account created
Savings Account created with interest rate: 4.5%
Account Number: SA002
Account Holder: Priya
Balance: 10000.0
Interest Rate: 4.5%

Account created
Savings Account created with interest rate: 5.5%
Account Number: SA003
Account Holder: Amit
Balance: 50000.0
Interest Rate: 5.5%
```

---

## Important Rules

| Rule | Description | Example |
|------|-------------|---------|
| **First Statement** | this() or super() must be the first statement | `Child() { super(); }` |
| **Only One Call** | Either this() or super(), not both | ❌ `this(); super();` |
| **No Recursion** | Constructor cannot call itself directly | ❌ `A() { this(); }` |
| **Implicit super()** | If no this()/super(), compiler adds super() | Default behavior |
| **Forward Reference** | this() can call constructor defined later | ✅ Valid |

---

## Common Mistakes

### Mistake 1: this() and super() Both

```java
class Child extends Parent {
    Child() {
        super();  // ❌ Error
        this(10); // Cannot use both
    }
    
    Child(int x) {
        // ...
    }
}
```

### Mistake 2: Not First Statement

```java
class Child {
    Child() {
        int x = 10;
        this(x);  // ❌ Error: must be first
    }
    
    Child(int x) {
        // ...
    }
}
```

### Mistake 3: Circular Chain

```java
class Test {
    Test() {
        this(10);  // ❌ Error: recursive constructor invocation
    }
    
    Test(int x) {
        this();  // ❌ Circular chain
    }
}
```

---

## Benefits of Constructor Chaining

| Benefit | Description |
|---------|-------------|
| **Code Reusability** | Avoid duplicate initialization code |
| **Maintainability** | Changes in one place reflect everywhere |
| **Consistency** | Ensures consistent initialization |
| **Flexibility** | Multiple ways to create objects |
| **Cleaner Code** | Less redundant code |

---

## Important Interview Questions

**Q1: What is constructor chaining?**

Constructor chaining is the process where one constructor calls another constructor either in the same class using this() or in the parent class using super(). It helps reduce code duplication and ensures proper initialization.

**Q2: What are the rules for constructor chaining?**

1. this() or super() must be the first statement
2. Only one can be used - either this() or super()
3. Cannot create circular chains
4. If neither is specified, compiler adds super() automatically

**Q3: Difference between this() and super() in constructor chaining?**

- **this()**: Calls another constructor in the same class
- **super()**: Calls constructor of the parent class

**Q4: Can we use both this() and super() in the same constructor?**

No, we can use only one as both must be the first statement in the constructor.

**Q5: What happens if we don't call super() explicitly?**

The compiler automatically adds super() as the first statement to call the parent class's no-argument constructor.

**Q6: Can constructors be chained in a circular manner?**

No, circular constructor chaining causes a compilation error as it would lead to infinite recursion.

---

## Short Recap

**Constructor Chaining** = Ek constructor doosre ko call kare

**Two Types:**
1. **Same class** - this() use karke
2. **Parent class** - super() use karke

**Important Rules:**
- this()/super() must be **first statement**
- Dono ek saath **nahi** use kar sakte
- **Circular chain** nahi bana sakte
- Agar kuch nahi likha to compiler **super()** add kar deta hai

**Benefits:** Code reusability, maintainability, consistency

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                         CONSTRUCTOR CHAINING                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   WITHIN SAME CLASS using this()                                                  ║
║   ══════════════════════════════                                                  ║
║                                                                                   ║
║   ╔════════════════╗      ╔════════════════╗      ╔════════════════╗             ║
║   ║  Employee()    ║      ║ Employee(name) ║      ║ Employee(name, ║             ║
║   ║                ║      ║                ║      ║   id, salary)  ║             ║
║   ║  this("NA",0); ║─────▶║ this(name,0,0);║─────▶║ // Final Init  ║             ║
║   ╚════════════════╝      ╚════════════════╝      ╚════════════════╝             ║
║         │                        │                        │                       ║
║         └────────────────────────┴────────────────────────┘                       ║
║                           All point to final constructor                          ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   PARENT-CHILD CHAINING using super()                                             ║
║   ═══════════════════════════════════                                             ║
║                                                                                   ║
║   ╔═══════════════════════════════════╗                                          ║
║   ║         PARENT CLASS              ║     EXECUTION ORDER:                     ║
║   ║   ┌─────────────────────────┐     ║                                          ║
║   ║   │ Person()                │     ║     ┌─────────────────────┐              ║
║   ║   │ Person(name)            │     ║     │  ① Parent default  │              ║
║   ║   │ Person(name, age)       │     ║     └──────────┬──────────┘              ║
║   ║   └─────────────────────────┘     ║                │                         ║
║   ╚══════════════╤════════════════════╝                ▼                         ║
║                  │ extends                  ┌─────────────────────┐              ║
║                  ▼                          │  ② Parent parameterized           ║
║   ╔═══════════════════════════════════╗     └──────────┬──────────┘              ║
║   ║         CHILD CLASS               ║                │                         ║
║   ║   ┌─────────────────────────┐     ║                ▼                         ║
║   ║   │ Student() {             │     ║     ┌─────────────────────┐              ║
║   ║   │   super();              │─────╫────▶│  ③ Child constructor│              ║
║   ║   │ }                       │     ║     └─────────────────────┘              ║
║   ║   │ Student(name, roll) {   │     ║                                          ║
║   ║   │   super(name);          │─────╫────▶ Calls specific parent constructor   ║
║   ║   │ }                       │     ║                                          ║
║   ║   └─────────────────────────┘     ║                                          ║
║   ╚═══════════════════════════════════╝                                          ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                              IMPORTANT RULES                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────────────────────────────────────────────────────────────┐    ║
║   │  RULE 1: this() or super() must be FIRST statement                      │    ║
║   │  RULE 2: Only ONE can be used - either this() OR super()                │    ║
║   │  RULE 3: Cannot create circular chains (recursive error)                │    ║
║   │  RULE 4: If nothing specified → compiler adds super() automatically     │    ║
║   └─────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                   ║
║   ╔═══════════════════╗    ╔═══════════════════╗    ╔═══════════════════╗        ║
║   ║   ✓ VALID         ║    ║   ✗ INVALID       ║    ║   ✗ INVALID       ║        ║
║   ╟───────────────────╢    ╟───────────────────╢    ╟───────────────────╢        ║
║   ║ Child() {         ║    ║ Child() {         ║    ║ A() {             ║        ║
║   ║   super();        ║    ║   int x = 10;     ║    ║   this(10);       ║        ║
║   ║   // code...      ║    ║   super(); //ERR  ║    ║ }                 ║        ║
║   ║ }                 ║    ║ }                 ║    ║ A(int x) {        ║        ║
║   ╚═══════════════════╝    ╚═══════════════════╝    ║   this(); //ERR   ║        ║
║                                                      ╚═══════════════════╝        ║
║                                                      (Circular chain!)            ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
