# ABSTRACT CLASS

## Concept Introduction

**Abstract class** ek aisi class hai jo **incomplete** hoti hai - isme **abstract methods** (bina body ke) ho sakte hain. Hum abstract class ka **object nahi bana sakte**, sirf usko **extend** karke use kar sakte hain.

**Abstract Class = Incomplete class with abstract methods**

Jaise ek **blueprint** jo pura complete nahi hai - child class ko complete karna padta hai.

---

## Why This Concept Exists

### Problem: Common Structure with Different Implementations

```java
class Animal {
    void eat() {
        // What to write here? Every animal eats differently
    }
}
```

**Issues:**
- Cannot provide one implementation for all
- Child class will override anyway
- Dummy implementation needed

### Solution: Abstract Class

```java
abstract class Animal {
    abstract void eat();  // No body - child MUST implement
    
    void sleep() {  // Concrete method - common for all
        System.out.println("Animal sleeping");
    }
}
```

---

## Definitions

### Very Simple Definition
Abstract class ek incomplete class hai jisme abstract methods (bina implementation) hote hain.

### Simple Definition
An abstract class is a class declared with the abstract keyword that may contain both abstract methods (without body) and concrete methods (with body). It cannot be instantiated directly.

### College Exam Definition
An abstract class is a class that is declared using the abstract keyword and cannot be instantiated. It may contain abstract methods (methods without implementation) that must be implemented by subclasses, as well as concrete methods with complete implementation. Abstract classes are used to provide a common base with partial implementation for derived classes.

### Technical Definition
An abstract class is an incomplete class that serves as a base class in an inheritance hierarchy, declared with the abstract modifier. It can contain both abstract methods (declarations without implementations) and concrete methods (complete implementations), along with instance variables, constructors, and static members. Subclasses must provide implementations for all inherited abstract methods unless they are also declared abstract. Abstract classes support code reuse and establish contracts while allowing partial implementation.

### Interview Definition
An abstract class is a class marked with the abstract keyword that cannot be instantiated. It can have: (1) Abstract methods - methods without body that must be implemented by subclasses, (2) Concrete methods - fully implemented methods, (3) Constructors (called via super()), (4) Instance variables, (5) Static members. Used when: (1) Classes share common behavior but have different implementations, (2) Want to provide partial implementation (0-100% abstract), (3) Need to maintain state through instance variables. Differences from interface: can have concrete methods, constructors, instance variables, and supports single inheritance only. Use abstract class for IS-A relationship with shared code.

---

## Creating Abstract Class

### Syntax

```java
abstract class ClassName {
    // Abstract method (no body)
    abstract returnType methodName();
    
    // Concrete method (with body)
    returnType method() {
        // implementation
    }
}
```

### Basic Example

```java
abstract class Animal {
    // Abstract method
    abstract void sound();
    
    // Concrete method
    void sleep() {
        System.out.println("Animal is sleeping");
    }
}

class Dog extends Animal {
    // Must implement abstract method
    void sound() {
        System.out.println("Dog barks: Woof Woof");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows: Meow Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        // Animal animal = new Animal();  // ❌ Cannot instantiate
        
        Animal dog = new Dog();  // ✓ Can create Dog object
        dog.sound();
        dog.sleep();
        
        Animal cat = new Cat();
        cat.sound();
        cat.sleep();
    }
}
```

**Output:**
```
Dog barks: Woof Woof
Animal is sleeping
Cat meows: Meow Meow
Animal is sleeping
```

---

## Abstract Class Features

### 1. Abstract Methods

```java
abstract class Shape {
    // Abstract methods - no implementation
    abstract double area();
    abstract double perimeter();
}

class Circle extends Shape {
    double radius;
    
    Circle(double r) {
        this.radius = r;
    }
    
    // Must implement all abstract methods
    double area() {
        return Math.PI * radius * radius;
    }
    
    double perimeter() {
        return 2 * Math.PI * radius;
    }
}
```

---

### 2. Concrete Methods

```java
abstract class Vehicle {
    String brand;
    
    Vehicle(String brand) {
        this.brand = brand;
    }
    
    // Concrete method
    void displayBrand() {
        System.out.println("Brand: " + brand);
    }
    
    // Abstract method
    abstract void start();
}

class Car extends Vehicle {
    Car(String brand) {
        super(brand);
    }
    
    void start() {
        System.out.println(brand + " car starting with key");
    }
}
```

---

### 3. Constructors

```java
abstract class Animal {
    String name;
    
    // Constructor in abstract class
    Animal(String name) {
        this.name = name;
        System.out.println("Animal constructor called");
    }
    
    abstract void sound();
}

class Dog extends Animal {
    Dog(String name) {
        super(name);  // Calls abstract class constructor
        System.out.println("Dog constructor called");
    }
    
    void sound() {
        System.out.println(name + " barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        dog.sound();
    }
}
```

**Output:**
```
Animal constructor called
Dog constructor called
Buddy barks
```

---

### 4. Instance Variables

```java
abstract class BankAccount {
    String accountNumber;
    double balance;
    
    BankAccount(String accNum) {
        this.accountNumber = accNum;
        this.balance = 0;
    }
    
    void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }
    
    abstract void withdraw(double amount);
}

class SavingsAccount extends BankAccount {
    double interestRate;
    
    SavingsAccount(String accNum, double rate) {
        super(accNum);
        this.interestRate = rate;
    }
    
    void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }
}
```

---

## Real-World Example: Employee Management

```java
abstract class Employee {
    String name;
    int id;
    double baseSalary;
    
    Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }
    
    // Abstract method - different for each employee type
    abstract double calculateSalary();
    
    // Concrete method - common for all
    void displayInfo() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: ₹" + calculateSalary());
    }
}

class FullTimeEmployee extends Employee {
    double bonus;
    
    FullTimeEmployee(String name, int id, double baseSalary, double bonus) {
        super(name, id, baseSalary);
        this.bonus = bonus;
    }
    
    double calculateSalary() {
        return baseSalary + bonus;
    }
}

class ContractEmployee extends Employee {
    int hoursWorked;
    double hourlyRate;
    
    ContractEmployee(String name, int id, int hours, double rate) {
        super(name, id, 0);
        this.hoursWorked = hours;
        this.hourlyRate = rate;
    }
    
    double calculateSalary() {
        return hoursWorked * hourlyRate;
    }
}

class InternEmployee extends Employee {
    double stipend;
    
    InternEmployee(String name, int id, double stipend) {
        super(name, id, 0);
        this.stipend = stipend;
    }
    
    double calculateSalary() {
        return stipend;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee[] employees = new Employee[3];
        
        employees[0] = new FullTimeEmployee("Rahul", 101, 50000, 10000);
        employees[1] = new ContractEmployee("Priya", 102, 160, 500);
        employees[2] = new InternEmployee("Amit", 103, 15000);
        
        for (Employee emp : employees) {
            emp.displayInfo();
            System.out.println();
        }
    }
}
```

**Output:**
```
ID: 101
Name: Rahul
Salary: ₹60000.0

ID: 102
Name: Priya
Salary: ₹80000.0

ID: 103
Name: Amit
Salary: ₹15000.0
```

---

## Abstract Class Rules

| Rule | Description | Example |
|------|-------------|---------|
| **Cannot Instantiate** | Cannot create object of abstract class | `new Animal()` ❌ |
| **Can Have Constructor** | Constructor called via super() | `super(name)` ✓ |
| **Can Have Abstract Methods** | Methods without body | `abstract void method();` ✓ |
| **Can Have Concrete Methods** | Methods with implementation | `void method() { }` ✓ |
| **Child Must Implement** | Non-abstract child must implement all abstract methods | Must override all |
| **Can Have Instance Variables** | Can maintain state | `int value;` ✓ |
| **Can Have Static Members** | Static variables and methods | `static int count;` ✓ |
| **Single Inheritance** | Can extend only one class | `extends Parent` ✓ |

---

## 0-100% Abstraction

```java
// 0% Abstract - No abstract methods
abstract class Example1 {
    void method1() { }
    void method2() { }
}

// 50% Abstract - Some abstract, some concrete
abstract class Example2 {
    abstract void method1();  // Abstract
    void method2() { }        // Concrete
}

// 100% Abstract - All abstract methods
abstract class Example3 {
    abstract void method1();
    abstract void method2();
}
```

---

## Abstract Class vs Concrete Class

| Feature | Abstract Class | Concrete Class |
|---------|----------------|----------------|
| **Instantiation** | Cannot instantiate | Can instantiate |
| **Keyword** | abstract | No keyword |
| **Abstract Methods** | Can have | Cannot have |
| **Purpose** | Base class, partial implementation | Complete implementation |
| **Example** | `abstract class Animal` | `class Dog` |

---

## Important Interview Questions

**Q1: What is an abstract class?**

An abstract class is a class declared with the abstract keyword that cannot be instantiated. It can have abstract methods (without body) and concrete methods (with body).

**Q2: Can we create an object of an abstract class?**

No, we cannot create an object of an abstract class directly. We can only create objects of its non-abstract child classes.

**Q3: Can an abstract class have a constructor?**

Yes, abstract classes can have constructors. They are called when a child class object is created using super().

**Q4: Can an abstract class have concrete methods?**

Yes, abstract classes can have both abstract methods (without implementation) and concrete methods (with implementation).

**Q5: Is it mandatory to have abstract methods in an abstract class?**

No, an abstract class can have zero abstract methods (0% abstraction), but it still cannot be instantiated.

**Q6: Can we have static methods in abstract class?**

Yes, abstract classes can have static methods, and they can be called using the class name.

**Q7: What happens if a child class doesn't implement all abstract methods?**

The child class must also be declared abstract. Only a non-abstract class must implement all inherited abstract methods.

**Q8: When to use abstract class?**

Use abstract class when:
- Classes share common code (partial implementation)
- Need to maintain state (instance variables)
- Want to provide default behavior
- Have IS-A relationship with shared implementation

---

## Short Recap

**Abstract Class** = Incomplete class jo instantiate nahi ho sakti

**Features:**
- **abstract** keyword se declare hoti hai
- **Abstract methods** (bina body) ho sakte hain
- **Concrete methods** (with body) ho sakte hain
- **Constructor**, **instance variables**, **static members** ho sakte hain
- Object **nahi bana sakte** directly
- Child class must **implement** abstract methods

**Purpose:** Partial implementation provide karna, common structure define karna

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                            ABSTRACT CLASS                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║        abstract class Animal {            ║                 ║
║                    ║                                           ║                 ║
║                    ║    // Instance variable                   ║                 ║
║                    ║    String name;                           ║                 ║
║                    ║                                           ║                 ║
║                    ║    // Constructor                         ║                 ║
║                    ║    Animal(String name) {                  ║                 ║
║                    ║        this.name = name;                  ║                 ║
║                    ║    }                                      ║                 ║
║                    ║                                           ║                 ║
║                    ║    // Abstract method (NO body)           ║                 ║
║                    ║    abstract void sound();                 ║                 ║
║                    ║                                           ║                 ║
║                    ║    // Concrete method (HAS body)          ║                 ║
║                    ║    void sleep() {                         ║                 ║
║                    ║        System.out.println("Sleeping");    ║                 ║
║                    ║    }                                      ║                 ║
║                    ║        }                                  ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                       │                                          ║
║                                       │                                          ║
║               ╔═══════════════════════════════════════════════════╗              ║
║               ║         new Animal() ──> ✗ COMPILE ERROR!         ║              ║
║               ║       Cannot instantiate abstract class           ║              ║
║               ╚═══════════════════════════════════════════════════╝              ║
║                                       │                                          ║
║                                       │ extends                                  ║
║                                       ▼                                          ║
║              ┌────────────────────────┴────────────────────────┐                 ║
║              │                                                 │                 ║
║              ▼                                                 ▼                 ║
║   ╔═════════════════════════════╗           ╔═════════════════════════════╗      ║
║   ║     class Dog extends       ║           ║     class Cat extends       ║      ║
║   ║          Animal {           ║           ║          Animal {           ║      ║
║   ║                             ║           ║                             ║      ║
║   ║   Dog(String name) {        ║           ║   Cat(String name) {        ║      ║
║   ║       super(name);          ║           ║       super(name);          ║      ║
║   ║   }                         ║           ║   }                         ║      ║
║   ║                             ║           ║                             ║      ║
║   ║   // MUST implement         ║           ║   // MUST implement         ║      ║
║   ║   void sound() {            ║           ║   void sound() {            ║      ║
║   ║     print("Woof!");         ║           ║     print("Meow!");         ║      ║
║   ║   }                         ║           ║   }                         ║      ║
║   ║ }                           ║           ║ }                           ║      ║
║   ╚═════════════════════════════╝           ╚═════════════════════════════╝      ║
║              │                                                 │                 ║
║              ▼                                                 ▼                 ║
║   ╔═════════════════════════════╗           ╔═════════════════════════════╗      ║
║   ║   new Dog("Buddy") ──> ✓    ║           ║   new Cat("Kitty") ──> ✓    ║      ║
║   ╚═════════════════════════════╝           ╚═════════════════════════════╝      ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                     ABSTRACT CLASS FEATURES                                      ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    WHAT ABSTRACT CLASS CAN HAVE                       ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   ╔═══════════════════╗                                               ║      ║
║   ║   ║ Abstract Methods  ║ ──> Methods without body (0 to many)          ║      ║
║   ║   ╚═══════════════════╝                                               ║      ║
║   ║            │                                                          ║      ║
║   ║            ▼                                                          ║      ║
║   ║   ╔═══════════════════╗                                               ║      ║
║   ║   ║ Concrete Methods  ║ ──> Methods with body (shared code)           ║      ║
║   ║   ╚═══════════════════╝                                               ║      ║
║   ║            │                                                          ║      ║
║   ║            ▼                                                          ║      ║
║   ║   ╔═══════════════════╗                                               ║      ║
║   ║   ║   Constructors    ║ ──> Called via super() from child class       ║      ║
║   ║   ╚═══════════════════╝                                               ║      ║
║   ║            │                                                          ║      ║
║   ║            ▼                                                          ║      ║
║   ║   ╔═══════════════════╗                                               ║      ║
║   ║   ║Instance Variables ║ ──> Maintain state                            ║      ║
║   ║   ╚═══════════════════╝                                               ║      ║
║   ║            │                                                          ║      ║
║   ║            ▼                                                          ║      ║
║   ║   ╔═══════════════════╗                                               ║      ║
║   ║   ║  Static Members   ║ ──> Static variables and methods              ║      ║
║   ║   ╚═══════════════════╝                                               ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                      ABSTRACTION LEVELS                                          ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                                                                       ║      ║
║   ║   0% ABSTRACT              50% ABSTRACT           100% ABSTRACT       ║      ║
║   ║                                                                       ║      ║
║   ║   abstract class A {       abstract class B {     abstract class C {  ║      ║
║   ║       void m1() {}             void m1() {}           abstract m1();  ║      ║
║   ║       void m2() {}             abstract m2();         abstract m2();  ║      ║
║   ║   }                        }                      }                   ║      ║
║   ║                                                                       ║      ║
║   ║   All methods have         Mix of concrete        All methods are     ║      ║
║   ║   implementation           and abstract           abstract            ║      ║
║   ║                                                                       ║      ║
║   ║   ────────────────────────────────────────────────────────────────    ║      ║
║   ║   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│░░░░░░░░░░│▓▓▓▓▓▓▓▓▓▓│░░░░░░░░░░░░░░░░░░░│   ║      ║
║   ║   0%                      50%                    100%                 ║      ║
║   ║   ▓ = Concrete methods    ░ = Abstract methods                        ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                    WHEN TO USE ABSTRACT CLASS                                    ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║    ✓ Classes share common code (methods with implementation)                     ║
║    ✓ Need to maintain state through instance variables                           ║
║    ✓ Want to provide default behavior that can be overridden                     ║
║    ✓ Have IS-A relationship with shared implementation                           ║
║    ✓ Need constructors to initialize state                                       ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
