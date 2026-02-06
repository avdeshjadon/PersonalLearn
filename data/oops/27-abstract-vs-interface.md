# ABSTRACT CLASS VS INTERFACE

## Concept Introduction

**Abstract class** aur **Interface** dono abstraction provide karte hain, lekin unke beech bahut saare **differences** hain. Kab kaunsa use karna hai yeh samajhna important hai.

**Abstract Class** = Partial implementation (0-100% abstraction)
**Interface** = Complete contract (100% abstraction in Java 7)

---

## Why Both Exist

### Different Use Cases

**Abstract Class:**
- Jab common code share karna ho
- Jab state maintain karni ho
- Jab IS-A relationship ho with shared implementation

**Interface:**
- Jab contract define karna ho
- Jab multiple inheritance chahiye
- Jab unrelated classes ko same behavior dena ho

---

## Definitions

### Very Simple Definition
Abstract class partial implementation provide karta hai, interface pure contract define karta hai.

### Simple Definition
Abstract class can have both abstract and concrete methods with instance variables, while interface (Java 7) can only have abstract methods and constants. Abstract class supports single inheritance, interface supports multiple inheritance.

### College Exam Definition
Abstract classes provide partial abstraction (0-100%) and can have constructors, instance variables, and both abstract and concrete methods. Interfaces provide complete abstraction (100% in Java 7) with only abstract methods and constants, supporting multiple inheritance through implementation.

### Technical Definition
Abstract classes and interfaces are both mechanisms for achieving abstraction but serve different purposes. Abstract classes use the abstract keyword, support single inheritance (extends), can have constructors and instance variables, and provide 0-100% abstraction. Interfaces use the interface keyword, support multiple inheritance (implements), have no constructors or instance variables (Java 7), and traditionally provide 100% abstraction. The choice depends on whether you need shared implementation and state (abstract class) or just a contract for unrelated classes (interface).

### Interview Definition
**Abstract Class vs Interface:**

**Abstract Class:**
- Keyword: abstract
- Inheritance: extends (single)
- Methods: Abstract + Concrete (0-100% abstraction)
- Variables: Any type (instance, static)
- Constructor: Yes
- Initialization: Can initialize instance variables
- When: IS-A with shared code
- Speed: Fast (direct method calls)

**Interface (Java 7):**
- Keyword: interface
- Inheritance: implements (multiple)
- Methods: Only abstract (100% abstraction)
- Variables: public static final only
- Constructor: No
- Initialization: Constants only
- When: Multiple inheritance, contract
- Speed: Slightly slower (indirect)

**Modern Java (8+):** Interfaces can have default and static methods, reducing the gap but abstract classes still better for shared state and construction logic.

---

## Detailed Comparison Table

| Feature | Abstract Class | Interface (Java 7) | Interface (Java 8+) |
|---------|----------------|--------------------|--------------------|
| **Keyword** | abstract | interface | interface |
| **Inheritance** | extends (single) | implements (multiple) | implements (multiple) |
| **Methods** | Abstract + Concrete | Abstract only | Abstract + Default + Static |
| **Method Modifier** | Any | public abstract | public abstract/default/static |
| **Variables** | Any type | public static final | public static final |
| **Constructor** | ✓ Yes | ❌ No | ❌ No |
| **Instantiation** | ❌ Cannot | ❌ Cannot | ❌ Cannot |
| **Abstraction** | 0-100% | 100% | Variable |
| **Access Modifiers** | All | public only | public only |
| **Speed** | Fast | Slightly slower | Slightly slower |
| **When to Use** | IS-A with shared code | Contract, Multiple inheritance | Contract with default behavior |

---

## Code Comparison

### Abstract Class Example

```java
abstract class Vehicle {
    // Instance variables
    String brand;
    int speed;
    
    // Constructor
    Vehicle(String brand) {
        this.brand = brand;
        this.speed = 0;
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
        System.out.println(brand + " car started");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle car = new Car("Toyota");
        car.displayBrand();  // Using concrete method
        car.start();         // Using overridden method
    }
}
```

**Output:**
```
Brand: Toyota
Toyota car started
```

---

### Interface Example

```java
interface Drivable {
    // Constant (public static final)
    int MAX_SPEED = 200;
    
    // Abstract methods (public abstract)
    void drive();
    void stop();
}

class Bike implements Drivable {
    public void drive() {
        System.out.println("Bike driving at max speed: " + MAX_SPEED);
    }
    
    public void stop() {
        System.out.println("Bike stopped");
    }
}

public class Main {
    public static void main(String[] args) {
        Drivable bike = new Bike();
        bike.drive();
        bike.stop();
    }
}
```

**Output:**
```
Bike driving at max speed: 200
Bike stopped
```

---

## Multiple Inheritance

### With Interface (✓ Allowed)

```java
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

// Can implement multiple interfaces
class Duck implements Flyable, Swimmable {
    public void fly() {
        System.out.println("Duck flies");
    }
    
    public void swim() {
        System.out.println("Duck swims");
    }
}
```

---

### With Abstract Class (❌ Not Allowed)

```java
abstract class Animal {
    abstract void eat();
}

abstract class Machine {
    abstract void work();
}

// ❌ Error: Cannot extend multiple classes
// class Robot extends Animal, Machine { }
```

---

## Real-World Example: Employee System

### Using Abstract Class

```java
// Abstract class - shared implementation
abstract class Employee {
    String name;
    int id;
    double baseSalary;
    
    Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }
    
    // Concrete method - shared
    void displayInfo() {
        System.out.println("ID: " + id + ", Name: " + name);
    }
    
    // Abstract method - different for each type
    abstract double calculateSalary();
}

class Manager extends Employee {
    double bonus;
    
    Manager(String name, int id, double baseSalary, double bonus) {
        super(name, id, baseSalary);
        this.bonus = bonus;
    }
    
    double calculateSalary() {
        return baseSalary + bonus;
    }
}

class Developer extends Employee {
    int overtimeHours;
    double overtimeRate;
    
    Developer(String name, int id, double baseSalary, int hours, double rate) {
        super(name, id, baseSalary);
        this.overtimeHours = hours;
        this.overtimeRate = rate;
    }
    
    double calculateSalary() {
        return baseSalary + (overtimeHours * overtimeRate);
    }
}
```

---

### Using Interface

```java
// Interface - just contract
interface Payable {
    double calculatePayment();
    void generatePaySlip();
}

// Unrelated classes implementing same interface
class Consultant implements Payable {
    double hourlyRate;
    int hoursWorked;
    
    Consultant(double rate, int hours) {
        this.hourlyRate = rate;
        this.hoursWorked = hours;
    }
    
    public double calculatePayment() {
        return hourlyRate * hoursWorked;
    }
    
    public void generatePaySlip() {
        System.out.println("Consultant Payment: " + calculatePayment());
    }
}

class Vendor implements Payable {
    double invoiceAmount;
    
    Vendor(double amount) {
        this.invoiceAmount = amount;
    }
    
    public double calculatePayment() {
        return invoiceAmount;
    }
    
    public void generatePaySlip() {
        System.out.println("Vendor Payment: " + calculatePayment());
    }
}
```

---

## When to Use What?

### Use Abstract Class When:

1. **Classes share code (common implementation)**
```java
abstract class Animal {
    void breathe() {  // Common for all animals
        System.out.println("Breathing");
    }
    abstract void sound();  // Different for each
}
```

2. **Need to maintain state (instance variables)**
```java
abstract class BankAccount {
    double balance;  // State
    String accountNumber;
}
```

3. **Need constructors**
```java
abstract class Person {
    Person(String name) {
        this.name = name;
    }
}
```

4. **IS-A relationship with shared implementation**
```java
// Manager IS-A Employee (with shared code)
abstract class Employee { }
class Manager extends Employee { }
```

---

### Use Interface When:

1. **Multiple inheritance needed**
```java
class Duck implements Flyable, Swimmable { }
```

2. **Define capabilities/contracts**
```java
interface Comparable { }
interface Serializable { }
interface Runnable { }
```

3. **Unrelated classes need same behavior**
```java
// Car and Helicopter are unrelated but both Drivable
interface Drivable { }
class Car implements Drivable { }
class Helicopter implements Drivable { }
```

4. **100% abstraction needed (Java 7)**
```java
interface PaymentGateway {
    void processPayment();
    boolean validatePayment();
}
```

---

## Combining Both

```java
// Interface for contract
interface Drivable {
    void drive();
}

// Abstract class for shared implementation
abstract class Vehicle implements Drivable {
    String brand;
    
    Vehicle(String brand) {
        this.brand = brand;
    }
    
    void displayBrand() {
        System.out.println("Brand: " + brand);
    }
}

// Concrete class
class Car extends Vehicle {
    Car(String brand) {
        super(brand);
    }
    
    public void drive() {
        System.out.println(brand + " car driving");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car("Toyota");
        car.displayBrand();  // From abstract class
        car.drive();         // From interface
    }
}
```

**Output:**
```
Brand: Toyota
Toyota car driving
```

---

## Design Principle

**"Favor composition over inheritance, favor interface over abstract class"**

### Why?

1. **Interfaces provide loose coupling**
2. **Multiple interfaces can be implemented**
3. **Easier to test and mock**
4. **More flexible design**

But use abstract class when:
- Shared code is significant
- Need to maintain state
- Have true IS-A relationship

---

## Important Interview Questions

**Q1: What is the main difference between abstract class and interface?**

Abstract class can have both abstract and concrete methods with instance variables and constructors, supporting single inheritance. Interface (Java 7) can only have abstract methods and constants, supporting multiple inheritance.

**Q2: When to use abstract class vs interface?**

Use abstract class when classes share common code and have IS-A relationship. Use interface when defining contracts for unrelated classes or need multiple inheritance.

**Q3: Can a class extend abstract class and implement interface together?**

Yes. Example: `class A extends AbstractClass implements Interface1, Interface2 { }`

**Q4: Can interface have constructors?**

No, interfaces cannot have constructors as they cannot be instantiated.

**Q5: What changed in interfaces after Java 8?**

Java 8 added default and static methods to interfaces, allowing partial implementation. Java 9 added private methods.

**Q6: Which is faster - abstract class or interface?**

Abstract class method calls are slightly faster as they use direct invocation, while interface methods use indirect invocation.

**Q7: Can abstract class have 100% abstraction?**

Yes, abstract class can have only abstract methods (100% abstraction), but it still has differences from interface (can have constructors, instance variables, etc.).

**Q8: Can we have main method in interface?**

In Java 8+, yes, through static methods. But JVM won't use it as entry point.

---

## Short Recap

**Abstract Class:**
- extends (single inheritance)
- 0-100% abstraction
- Constructor ✓
- Instance variables ✓
- Shared code ✓

**Interface:**
- implements (multiple inheritance)
- 100% abstraction (Java 7)
- Constructor ❌
- Only constants
- Pure contract

**Choose based on:** IS-A relationship + shared code → Abstract Class, Contract + multiple inheritance → Interface

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                       ABSTRACT CLASS VS INTERFACE                                 ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔══════════════════════════════════╗  ╔══════════════════════════════════╗     ║
║   ║        ABSTRACT CLASS            ║  ║          INTERFACE               ║     ║
║   ╟──────────────────────────────────╢  ╟──────────────────────────────────╢     ║
║   ║  abstract class Animal {         ║  ║  interface Flyable {             ║     ║
║   ║                                  ║  ║                                  ║     ║
║   ║    String name;        ✓ State   ║  ║    int MAX = 100;   (constants)  ║     ║
║   ║                                  ║  ║                                  ║     ║
║   ║    Animal(String n) {  ✓ Constr. ║  ║    // No constructor ✗          ║     ║
║   ║      this.name = n;              ║  ║                                  ║     ║
║   ║    }                             ║  ║    void fly();       (abstract)  ║     ║
║   ║                                  ║  ║                                  ║     ║
║   ║    void eat() {        ✓ Concrete║  ║    default void land() {         ║     ║
║   ║      // implementation           ║  ║      // Java 8+                  ║     ║
║   ║    }                             ║  ║    }                             ║     ║
║   ║                                  ║  ║  }                               ║     ║
║   ║    abstract void sound(); //abs  ║  ║                                  ║     ║
║   ║  }                               ║  ║                                  ║     ║
║   ╚══════════════════════════════════╝  ╚══════════════════════════════════╝     ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                             INHERITANCE SUPPORT                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ABSTRACT CLASS (Single)                 INTERFACE (Multiple)                    ║
║                                                                                   ║
║   ╔══════════════╗                       ╔═══════════╗   ╔═══════════╗           ║
║   ║   Animal     ║                       ║  Flyable  ║   ║ Swimmable ║           ║
║   ╚══════╤═══════╝                       ╚═════╤═════╝   ╚═════╤═════╝           ║
║          │ extends (only one!)                 │               │                  ║
║          ▼                                     └───────┬───────┘                  ║
║   ╔══════════════╗                                     │ implements              ║
║   ║     Dog      ║                                     ▼                          ║
║   ╚══════════════╝                             ╔═══════════════╗                  ║
║                                                ║     Duck      ║                  ║
║   class Dog extends Animal ✓                   ╚═══════════════╝                  ║
║   class Cat extends Animal ✓                                                      ║
║   class X extends A, B ✗ ERROR!                class Duck implements              ║
║                                                    Flyable, Swimmable ✓           ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                            FEATURE COMPARISON                                     ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌───────────────────────┬─────────────────────┬─────────────────────┐          ║
║   │       Feature         │   Abstract Class    │      Interface      │          ║
║   ├───────────────────────┼─────────────────────┼─────────────────────┤          ║
║   │ Keyword               │ abstract class      │ interface           │          ║
║   │ Inheritance           │ extends (single)    │ implements (multi)  │          ║
║   │ Variables             │ Any type            │ public static final │          ║
║   │ Constructor           │ ✓ Yes               │ ✗ No                │          ║
║   │ Method types          │ abstract + concrete │ abstract + default  │          ║
║   │ Access modifiers      │ Any                 │ public only*        │          ║
║   │ Multiple inheritance  │ ✗ No                │ ✓ Yes               │          ║
║   │ Abstraction level     │ 0-100%              │ 100% (Java 7)       │          ║
║   └───────────────────────┴─────────────────────┴─────────────────────┘          ║
║                                           * Java 9+ allows private methods       ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                            WHEN TO USE WHAT?                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   USE ABSTRACT CLASS WHEN:                USE INTERFACE WHEN:                     ║
║   ════════════════════════                ═══════════════════                     ║
║                                                                                   ║
║   ┌────────────────────────────┐          ┌────────────────────────────┐         ║
║   │ ✓ Classes share code       │          │ ✓ Define a contract        │         ║
║   │ ✓ Need instance variables  │          │ ✓ Multiple inheritance     │         ║
║   │ ✓ Need constructors        │          │ ✓ Unrelated classes        │         ║
║   │ ✓ True IS-A relationship   │          │ ✓ Define capabilities      │         ║
║   └────────────────────────────┘          └────────────────────────────┘         ║
║                                                                                   ║
║   Example: Employee system                Example: Comparable, Serializable      ║
║   - All employees share base code         - Any class can implement              ║
║   - Need employee state                   - Just defines what to do              ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                           COMBINING BOTH                                          ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔═══════════════╗                                                               ║
║   ║   Interface   ║  ←── Drivable (contract)                                      ║
║   ╚═══════╤═══════╝                                                               ║
║           │ implements                                                            ║
║           ▼                                                                       ║
║   ╔═══════════════╗                                                               ║
║   ║ Abstract Class║  ←── Vehicle (shared implementation)                          ║
║   ╚═══════╤═══════╝                                                               ║
║           │ extends                                                               ║
║           ▼                                                                       ║
║   ╔═══════════════╗                                                               ║
║   ║ Concrete Class║  ←── Car (specific implementation)                            ║
║   ╚═══════════════╝                                                               ║
║                                                                                   ║
║   class Car extends Vehicle implements Drivable, Electric { }                     ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
