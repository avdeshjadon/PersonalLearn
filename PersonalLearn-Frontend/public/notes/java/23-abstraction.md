# ABSTRACTION

## Concept Introduction

Abstraction is an OOPs concept that hides the internal implementation details and exposes only the necessary functionality to the user. It is achieved in Java using abstract classes (with abstract methods) and interfaces. It allows focusing on what an object does instead of how it does it, reducing complexity and increasing reusability.

Imagine tum **car** chalate ho - tum **steering, brake, accelerator** use karte ho. But tum yeh nahi jaante ki **engine internally kaise kaam kar raha hai**. Yeh hai **Abstraction** - **essential details dikhao, internal complexity chhupao**.

**Abstraction = Showing WHAT, Hiding HOW**

**Abstraction = Complexity chhupana, Simplicity dikhana**

---

## Why Abstraction Exists

### The Problem
Bina abstraction:
- User ko saari internal details dekhni padti
- Complexity badh jati hai
- Focus main functionality se hat jata hai
- Code difficult to use and maintain

### The Solution
**Abstract** the complex details, show only **essential interface**:
- User sirf important methods dekhe
- Internal implementation hidden
- Easy to use
- Easy to change implementation

---

## Loose Coupling

### What is Loose Coupling?

**Loose-Coupling** is a concept of developing programs in different layers in such a way that **object utilization is independent of its implementation**.

**Coupling** = Dependency between classes/modules

```
Tight Coupling: Class A directly depends on Class B
                If B changes, A must change too!
                
Loose Coupling: Class A depends on Interface/Abstract
                Implementation can change without affecting A
```

---

### Three Layers of Loose Coupling

Loose coupling is developed in **three different layers**:

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    THREE LAYERS OF LOOSE COUPLING                             ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   ╔═══════════════════════════════════════════════════════════════════════╗   ║
║   ║           LAYER 3: OBJECT UTILIZATION LAYER                           ║   ║
║   ║   ─────────────────────────────────────────────────────────────────   ║   ║
║   ║   • Functionality of object is USED here                              ║   ║
║   ║   • Uses Interface/Abstract class reference variables                 ║   ║
║   ║   • Declaration of functions done in interfaces                       ║   ║
║   ║   • GENERALIZATION concept is used here                               ║   ║
║   ║   • Example: Database db = factory.getDatabase();                     ║   ║
║   ║              db.connect();  // Uses interface reference               ║   ║
║   ╚═══════════════════════════════════════════════════════════════════════╝   ║
║                                    ▲                                          ║
║                                    │                                          ║
║   ╔═══════════════════════════════════════════════════════════════════════╗   ║
║   ║           LAYER 2: OBJECT CREATION LAYER                              ║   ║
║   ║   ─────────────────────────────────────────────────────────────────   ║   ║
║   ║   • Object of class is CREATED here                                   ║   ║
║   ║   • Based on requirement or need                                      ║   ║
║   ║   • FACTORY DESIGN PATTERN is used here                               ║   ║
║   ║   • Example: DatabaseFactory creates MySQL/Postgres/MongoDB           ║   ║
║   ╚═══════════════════════════════════════════════════════════════════════╝   ║
║                                    ▲                                          ║
║                                    │                                          ║
║   ╔═══════════════════════════════════════════════════════════════════════╗   ║
║   ║           LAYER 1: OBJECT IMPLEMENTATION LAYER                        ║   ║
║   ║   ─────────────────────────────────────────────────────────────────   ║   ║
║   ║   • Functionality of objects is IMPLEMENTED here                      ║   ║
║   ║   • Actual class implementation with business logic                   ║   ║
║   ║   • Example: MySQLDatabase, PostgreSQLDatabase, MongoDatabase         ║   ║
║   ╚═══════════════════════════════════════════════════════════════════════╝   ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
### Advantage of Loose Coupling

**Any changes in the Implementation Layer will NOT have impact on the Utilization Layer.**

Hence **modification and enhancement will be easy**.

---

### Tight Coupling Note

> **Note:** If an instance of a class depends on the implementation of another class instance **directly**, then it is known as **tight coupling**. Such type of programming will always consume **more time and effort** to maintain and update the code. Any changes in the implementation of dependent object will impact on the other object. To overcome this, we have to use **loose coupling** which is done by using **interface reference variable**.


**Problems with Tight Coupling:**
- Ek class change karo → doosri bhi change karo
- Testing difficult (cannot mock)
- Flexibility zero - switch nahi kar sakte
- Code reusability kam


### Benefits of Loose Coupling

| Benefit | Description |
|---------|-------------|
| **Flexibility** | Switch implementations easily |
| **Testability** | Easy to mock interfaces for unit testing |
| **Maintainability** | Change one class without affecting others |
| **Reusability** | Same interface, multiple uses |
| **Scalability** | Add new implementations without changing existing code |


### Tight vs Loose Coupling Summary

```
╔══════════════════════════════════════════════════════════════════════════╗
║          TIGHT COUPLING              vs        LOOSE COUPLING            ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  UserService ────────► MySQLDatabase    UserService ────► Database       ║
║  (Direct dependency)                    (Interface)         │            ║
║                                                             │            ║
║  Problem:                                          ┌────────┴────────┐   ║
║  - Cannot change easily                            ▼        ▼        ▼   ║
║  - Hard to test                                  MySQL   Postgres  Mongo ║
║  - No flexibility                                                        ║
║                                         Benefit:                         ║
║                                         - Easy to switch                 ║
║                                         - Easy to test                   ║
║                                         - Maximum flexibility            ║
╚══════════════════════════════════════════════════════════════════════════╝
```

**Key Principle: "Program to an interface, not an implementation"**

---

## Definitions

### Very Simple Definition
Important cheezen dikhana, unnecessary details chhupana.

### Simple Definition
Abstraction is hiding implementation details and showing only the functionality to the user. It focuses on what an object does rather than how it does it.

### College Exam Definition
Abstraction is an OOPs concept that hides the internal implementation details and exposes only the necessary functionality to the user. It is achieved in Java using abstract classes (with abstract methods) and interfaces. It allows focusing on what an object does instead of how it does it, reducing complexity and increasing reusability.

### Interview Definition
Abstraction is the process of hiding implementation details and exposing only the essential features and functionality to the user. It focuses on what an object does rather than how it performs it, providing a simplified interface while keeping complex logic internal. In Java, abstraction is achieved through abstract classes (0-100% abstraction) using the abstract keyword, and interfaces (100% abstraction until Java 8, partial after default methods). It reduces complexity, improves code maintainability, enables loose coupling, and allows multiple implementations of the same interface.

### Deep Technical Definition
Abstraction is an OOPs principle that establishes a contract between the interface and implementation by defining abstract methods (without body) that must be implemented by concrete classes, thereby enforcing behavioral contracts while hiding implementation complexity. In Java, it's implemented via abstract classes (which can have both abstract and concrete methods, constructors, and instance variables) providing 0-100% abstraction, and interfaces (pure contracts with abstract methods, default methods since Java 8, static methods, and public static final variables) providing partial to complete abstraction. Abstraction enables polymorphism, separation of concerns, and the Template Method design pattern, while facilitating unit testing through mock implementations.

---

## Achieving Abstraction in Java

### 1. Using Abstract Classes (0-100% abstraction)
### 2. Using Interfaces (100% abstraction)

---

## Abstract Class

Abstract class ek aisi class hoti hai jo incomplete hoti hai, jisme abstract methods (without body) aur concrete methods (with body) dono ho sakte hain.
Iska object create nahi kiya ja sakta, aur isse extend karke child class ko abstract methods implement karne padte hain.


 Abstract class is a class that is incomplete in nature. It can contain both abstract methods (methods without a body) and concrete methods (methods with a body).
An object of an abstract class cannot be created, and when a class extends an abstract class, it must implement all the abstract methods of the abstract class.

### Syntax
```java
abstract class ClassName {
    // Abstract method (no body)
    abstract void methodName();
    
    // Concrete method (with body)
    void concreteMethod() {
        // implementation
    }
}
```

### Key Points:
- Declared with abstract keyword
- Cannot create object directly
- Can have both abstract and concrete methods
- Can have constructors
- Can have instance variables
- 0-100% abstraction

### Abstract vs Concrete Methods

| Method Type | Description |
|-------------|-------------|
| **Concrete Method** | Method with both declaration AND implementation (complete method with body) |
| **Abstract Method** | Method with only declaration, WITHOUT implementation (no body, declared using abstract keyword) |

```java
abstract class Example {
    // Concrete method - has body (implementation)
    void concreteMethod() {
        System.out.println("This is concrete");
    }
    
    // Abstract method - no body (only declaration)
    abstract void abstractMethod();
}
```

### What Can Abstract Class Have?

- **Abstract methods (without body)**: These are methods that are declared but not implemented. The implementation is provided by the subclasses.
- **Concrete methods (with body)**: These are regular methods with both declaration and implementation inside the abstract class.
- **Static members (variables and methods)**: Abstract classes can have static variables and methods that belong to the class rather than any specific object.
- **Non-static members**: These are instance variables and methods that belong to an object of the class.
- **Constructors**: Abstract classes can have constructors to initialize instance variables or perform setup tasks.
- **Instance variables (any access modifier)**: Abstract classes can have instance variables with any access modifier (public, private, protected, or default).
- **Cannot create instance directly**: You cannot create an object of an abstract class directly using the new keyword.
- **Can declare reference variable**: You can declare a reference variable of an abstract class type, which can point to an object of a subclass.

### Abstract Keyword Compatibility

**abstract keyword CANNOT be used with these keywords:**

| Keyword | Why Not Compatible? |
|---------|--------------------|
| **static** | Static methods belong to class, cannot be overridden. Abstract methods must be overridden. |
| **final** | Final methods cannot be overridden. Abstract methods must be overridden. |
| **private** | Private methods cannot be inherited. Abstract methods must be inherited and overridden. |

```java
//  INVALID combinations
abstract class Invalid {
    abstract static void method1();   // ERROR!
    abstract final void method2();    // ERROR!
    abstract private void method3();  // ERROR!
}
```

### Important Note on Abstract Class

> **Note:** If a class extends an abstract class then that class **must provide implementations to all the abstract methods** of the abstract class, otherwise the class should be declared as **abstract** and further you must have another implementation class.

> **Note:** If a class is declared as abstract, it is **not mandatory** to have abstract methods in the abstract class. Hence an abstract class is **not a pure abstract body**. To get a **pure abstract body**, we should go for **interfaces**.

---

## Abstract Class Example

```java
// Abstract Class
abstract class Animal {
    String name;
    
    // Constructor
    Animal(String name) {
        this.name = name;
    }
    
    // Abstract method (no implementation)
    abstract void sound();
    
    // Concrete method (with implementation)
    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Concrete Class extending Abstract Class
class Dog extends Animal {
    Dog(String name) {
        super(name);
    }
    
    // Must implement abstract method
    @Override
    void sound() {
        System.out.println(name + " barks: Woof Woof!");
    }
}

class Cat extends Animal {
    Cat(String name) {
        super(name);
    }
    
    @Override
    void sound() {
        System.out.println(name + " meows: Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Cannot create object of abstract class
        // Animal a = new Animal("Generic");  // ERROR!
        
        // Create objects of concrete classes
        Animal dog = new Dog("Tommy");
        dog.sound();    // Tommy barks: Woof Woof!
        dog.sleep();    // Tommy is sleeping
        
        Animal cat = new Cat("Kitty");
        cat.sound();    // Kitty meows: Meow!
        cat.sleep();    // Kitty is sleeping
    }
}
```

---

## Real-World Example: Payment System

```java
abstract class Payment {
    String paymentId;
    double amount;
    
    Payment(String paymentId, double amount) {
        this.paymentId = paymentId;
        this.amount = amount;
    }
    
    abstract void processPayment();
    abstract void refund();
    
    void generateReceipt() {
        System.out.println("=== Receipt ===");
        System.out.println("Payment ID: " + paymentId);
        System.out.println("Amount: ₹" + amount);
        System.out.println("===============");
    }
}

class CreditCardPayment extends Payment {
    String cardNumber;
    
    CreditCardPayment(String paymentId, double amount, String cardNumber) {
        super(paymentId, amount);
        this.cardNumber = cardNumber;
    }
    
    @Override
    void processPayment() {
        System.out.println("Processing Credit Card payment...");
        System.out.println("Card: " + cardNumber);
        System.out.println("Amount: ₹" + amount);
        System.out.println("Payment successful!");
    }
    
    @Override
    void refund() {
        System.out.println("Refunding ₹" + amount + " to card " + cardNumber);
    }
}

class UPIPayment extends Payment {
    String upiId;
    
    UPIPayment(String paymentId, double amount, String upiId) {
        super(paymentId, amount);
        this.upiId = upiId;
    }
    
    @Override
    void processPayment() {
        System.out.println("Processing UPI payment...");
        System.out.println("UPI ID: " + upiId);
        System.out.println("Amount: ₹" + amount);
        System.out.println("Payment successful!");
    }
    
    @Override
    void refund() {
        System.out.println("Refunding ₹" + amount + " to UPI " + upiId);
    }
}

public class Main {
    public static void main(String[] args) {
        Payment payment1 = new CreditCardPayment("PAY001", 5000, "1234-5678-9012");
        payment1.processPayment();
        payment1.generateReceipt();
        
        System.out.println();
        
        Payment payment2 = new UPIPayment("PAY002", 3000, "user@paytm");
        payment2.processPayment();
        payment2.generateReceipt();
    }
}
```

---

## Interface

Interface ek completely abstract blueprint hota hai (Java 8 se pehle), jo sirf ye define karta hai ki kaun-kaun se methods honge, lekin unka implementation nahi deta.
Interface ko class implement karti hai, aur uske saare abstract methods define karna mandatory hota hai.

An interface is a completely abstract blueprint (before Java 8) that defines what methods a class must have, but it does not provide their implementation.
A class implements an interface, and it is mandatory for the implementing class to define all the abstract methods of the interface.

### Syntax
```java
interface InterfaceName {
    // Abstract methods (public abstract by default)
    void method1();
    void method2();
}
```

### Key Points:
- Declared with interface keyword
- All methods are public abstract by default
- All variables are public static final (constants)
- 100% abstraction (until Java 7)
- After Java 8: can have default and static methods
- A class implements an interface

### Interface Default Rules

| Element | Default Modifier | Notes |
|---------|-----------------|-------|
| **Variables** | public static final | Always constants |
| **Methods** | public abstract | Until Java 7 |
| **Default Methods** | public | Since Java 8 |
| **Static Methods** | public | Since Java 8 |

### What Interface CAN and CANNOT Have

| Feature | Can Have? | Notes |
|---------|-----------|-------|
| Abstract methods |  Yes | public abstract by default |
| Default methods |  Yes | Since Java 8 (with body) |
| Static methods |  Yes | Since Java 8 (with body) |
| Concrete methods (non-static) |  No | Not allowed |
| Constructor |  No | Interfaces cannot have constructors |
| Instance variables |  No | Only public static final constants |
| Instance creation |  No | Cannot create instance of interface |
| Reference variable |  Yes | Can declare interface type reference |

```java
interface Example {
    // Variables are public static final by default
    int VALUE = 100;  // Actually: public static final int VALUE = 100;
    
    // Methods are public abstract by default
    void method1();   // Actually: public abstract void method1();
    
    // Default method (Java 8+) - has body
    default void defaultMethod() {
        System.out.println("Default implementation");
    }
    
    // Static method (Java 8+) - has body
    static void staticMethod() {
        System.out.println("Static method in interface");
    }
    
    //  INVALID - Cannot have concrete non-static method
    // void concreteMethod() { }  // ERROR!
    
    //  INVALID - Cannot have constructor
    // Example() { }  // ERROR!
}
```

### Implementation Class Rules

- Class provides implementation to interface methods using implements keyword
- The class which provides implementation is called **implementation class**
- Class **MUST** implement **ALL** abstract methods of interface
- If not all methods implemented → class must be declared abstract
- A class can implement **any number** of interfaces (multiple inheritance)

```java
interface Animal {
    void sound();
    void eat();
}

// Implementation class - implements ALL methods
class Dog implements Animal {
    @Override
    public void sound() {
        System.out.println("Bark");
    }
    @Override
    public void eat() {
        System.out.println("Eat bones");
    }
}

// Partial implementation - must be abstract
abstract class PartialAnimal implements Animal {
    @Override
    public void sound() {
        System.out.println("Some sound");
    }
    // eat() not implemented - class is abstract
}
```

### Why Use Java Interface?

There are **three main reasons** to use interface:

| Reason | Description |
|--------|-------------|
| **1. Full Abstraction** | Achieve 100% abstraction (pure abstract body) |
| **2. Multiple Inheritance** | Support functionality of multiple inheritance |
| **3. Loose Coupling** | Achieve loose coupling through interface reference |

---

## Interface Example

```java
interface Animal {

    void sound();
    void eat();
}

class Dog implements Animal {
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
    
    @Override
    public void eat() {
        System.out.println("Dog eats bones");
    }
}

class Cat implements Animal {
    @Override
    public void sound() {
        System.out.println("Cat meows");
    }
    
    @Override
    public void eat() {
        System.out.println("Cat eats fish");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog();
        dog.sound();
        dog.eat();
        
        Animal cat = new Cat();
        cat.sound();
        cat.eat();
    }
}
```

---

## Real-World Example: Vehicle Interface

```java
interface Vehicle {
    void start();
    void stop();
    void accelerate();
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car: Turn key, engine starts");
    }
    
    @Override
    public void stop() {
        System.out.println("Car: Press brake, engine stops");
    }
    
    @Override
    public void accelerate() {
        System.out.println("Car: Press accelerator, speed increases");
    }
}

class Bike implements Vehicle {
    @Override
    public void start() {
        System.out.println("Bike: Kick start");
    }
    
    @Override
    public void stop() {
        System.out.println("Bike: Press brake");
    }
    
    @Override
    public void accelerate() {
        System.out.println("Bike: Twist throttle");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle car = new Car();
        car.start();
        car.accelerate();
        car.stop();
        
        System.out.println();
        
        Vehicle bike = new Bike();
        bike.start();
        bike.accelerate();
        bike.stop();
    }
}
```

**Same interface, different implementations!**

---

## Abstract Class vs Interface

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| **Keyword** | abstract | interface |
| **Methods** | Abstract + Concrete both | Abstract only (until Java 7) |
| **Variables** | Any type | public static final only |
| **Constructor** | Can have | Cannot have |
| **Inheritance** | extends | implements |
| **Multiple Inheritance** | No (single inheritance) | Yes (multiple interfaces) |
| **Access Modifiers** | Any | public by default |
| **Abstraction Level** | 0-100% | 100% (until Java 7) |
| **When to Use** | Common base with some implementation | Pure contract/behavior |

---

## When to Use What?

### Use Abstract Class When:
- Common base class with shared implementation
- Need constructors
- Need instance variables
- Partial implementation needed

**Example**: Animal (common sleep() method, but sound() differs)

### Use Interface When:
- Define pure contract
- Multiple inheritance needed
- No implementation needed
- Focus on capabilities

**Example**: Flyable, Swimmable, Runnable

---

## Multiple Inheritance with Interfaces

```java
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
}

public class Main {
    public static void main(String[] args) {
        Duck duck = new Duck();
        duck.fly();
        duck.swim();
    }
}
```

**Multiple interfaces can be implemented!**

### Interface Extending Interfaces

```java
interface A {
    void methodA();
}

interface B {
    void methodB();
}

interface C extends A, B {
    void methodC();
}

class MyClass implements C {
    @Override
    public void methodA() {
        System.out.println("Method A");
    }
    @Override
    public void methodB() {
        System.out.println("Method B");
    }
    @Override
    public void methodC() {
        System.out.println("Method C");
    }
}
```

> **Note:** An interface can inherit from another interface using extends keyword (multiple inheritance). But an interface CANNOT inherit from a class.

### Q) Why Multiple Inheritance is NOT Supported Through Class but Possible by Interface?

**Problem with Class:**
- Multiple inheritance with classes would require multiple super() statements
- This is NOT allowed and creates **ambiguity issue** (Diamond Problem)
- If two parent classes have same method, which one to call?

**Why it Works with Interface:**
- There is **no use of super() statement** in interfaces
- **No ambiguity** because implementation is provided by the implementation class
- Interface only declares methods, implementing class provides the body

---

## Marker or Tagged Interface

### What is Marker Interface?

An interface that has **no member** (no methods, no variables) is known as **marker** or **tagged** interface.

**Examples:** Serializable, Cloneable, Remote, etc.

### Purpose

They are used to provide **essential information to the JVM** so that JVM may perform some useful operation.

```java
// Marker Interface - no members
interface Serializable {
    // Empty - no methods or variables
}

// When JVM sees class implements Serializable,
// it knows this object can be serialized
class Student implements Serializable {
    String name;
    int rollNo;
}
```

### How Marker Interface Works

```java
import java.io.Serializable;

class Employee implements Serializable {
    String name;
    int id;
    
    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }
}

// JVM checks: Does Employee implement Serializable?
// If yes → Object can be serialized to file
// If no → NotSerializableException thrown
```

### Common Marker Interfaces in Java

| Interface | Purpose |
|-----------|--------|
| **Serializable** | Marks class for serialization |
| **Cloneable** | Marks class for cloning (Object.clone()) |
| **Remote** | Marks class for RMI (Remote Method Invocation) |
| **RandomAccess** | Marks List for fast random access |

---

## Abstraction vs Encapsulation

| Feature | Abstraction | Encapsulation |
|---------|-------------|---------------|
| **Focus** | What to show | How to protect |
| **Purpose** | Hide complexity | Hide data |
| **Achieved By** | Abstract class, Interface | private + getter/setter |
| **Level** | Design level | Implementation level |
| **Example** | Interface methods | private variables |

**Abstraction = Show only essential**  
**Encapsulation = Protect data**

---

## Benefits of Abstraction

| Benefit | Description |
|---------|-------------|
| **Reduces Complexity** | Hide internal details |
| **Improves Maintainability** | Change implementation without affecting users |
| **Loose Coupling** | Interface-based programming |
| **Focus on Interface** | What matters, not how |
| **Flexibility** | Multiple implementations possible |

---

## Important Interview Questions

**Q1: What is Abstraction?**

Abstraction is hiding implementation details and showing only essential functionality. It focuses on what an object does, not how. Achieved using abstract classes and interfaces.

**Q2: How to achieve Abstraction in Java?**

Two ways:
1. **Abstract Class** (0-100% abstraction)
2. **Interface** (100% abstraction)

**Q3: Difference between Abstract Class and Interface?**

- **Abstract Class**: Can have both abstract and concrete methods, constructors, instance variables, single inheritance
- **Interface**: Only abstract methods (default/static since Java 8), no constructors, public static final variables only, multiple inheritance

**Q4: Can we create object of abstract class?**

No! Abstract classes cannot be instantiated. But we can create reference and point to child class object.

```java
Animal a = new Dog();  // OK (Dog is concrete)
```

**Q5: Why use Abstraction?**

- Reduce complexity
- Focus on interface, not implementation
- Loose coupling
- Easy to maintain and extend
- Multiple implementations possible

---

## Short Recap

**Abstraction = Hide implementation, Show functionality**

**Achieved By**:
1. **Abstract Class**: 0-100% abstraction, abstract keyword
2. **Interface**: 100% abstraction, interface keyword

**Key Points**:
- Abstract class: Can have both abstract and concrete methods
- Interface: Only abstract methods (until Java 7)
- Cannot create object of abstract class
- Child must implement all abstract methods

**Real-World**: TV Remote, Car (use without knowing internal working)

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                                    ABSTRACTION                                   ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                                ABSTRACTION CONCEPT                               ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                                   WHAT vs HOW                                    ║
║                                  ═════════════                                   ║
║                                                                                  ║
║    ╔═════════════════════════════════════════════════════════════════════════╗   ║
║    ║                           USER                                          ║   ║
║    ║                      (Sees WHAT to do)                                  ║   ║
║    ╚═══════════════════════════════╦═════════════════════════════════════════╝   ║
║                                    ║                                             ║
║                                    ▼                                             ║
║    ╔═════════════════════════════════════════════════════════════════════════╗   ║
║    ║                     INTERFACE / ABSTRACT                                ║   ║
║    ╠═════════════════════════════════════════════════════════════════════════╣   ║
║    ║    start()    ─────────►    Simple to call                              ║   ║
║    ║    stop()     ─────────►    No complexity                               ║   ║
║    ║    drive()    ─────────►    Just use it                                 ║   ║
║    ╚═══════════════════════════════╦═════════════════════════════════════════╝   ║
║                                    ║                                             ║
║                                    ▼                                             ║
║    ╔═════════════════════════════════════════════════════════════════════════╗   ║
║    ║                      IMPLEMENTATION                                     ║   ║
║    ║                      (HOW it's done - Hidden)                           ║   ║
║    ╠═════════════════════════════════════════════════════════════════════════╣   ║
║    ║    - Complex algorithms                                                 ║   ║
║    ║    - Database connections                                               ║   ║
║    ║    - Hardware interactions                                              ║   ║
║    ║    - Internal logic                                                     ║   ║
║    ╚═════════════════════════════════════════════════════════════════════════╝   ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                               ACHIEVING ABSTRACTION                              ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                              ╔═════════════════════╗                             ║
║                              ║    ABSTRACTION      ║                             ║
║                              ╚══════════╦══════════╝                             ║
║                                         ║                                        ║
║              ╔══════════════════════════╩══════════════════════════╗             ║
║              ║                                                     ║             ║
║              ▼                                                     ▼             ║
║    ╔═════════════════════════╗                       ╔═════════════════════════╗ ║
║    ║    ABSTRACT CLASS       ║                       ║      INTERFACE          ║ ║
║    ╠═════════════════════════╣                       ╠═════════════════════════╣ ║
║    ║                         ║                       ║                         ║ ║
║    ║  0-100% abstraction     ║                       ║  100% abstraction       ║ ║
║    ║                         ║                       ║  (until Java 8)         ║ ║
║    ║  Can have:              ║                       ║                         ║ ║
║    ║  - abstract methods     ║                       ║  Can have:              ║ ║
║    ║  - concrete methods     ║                       ║  - abstract methods     ║ ║
║    ║  - constructors         ║                       ║  - default methods (8+) ║ ║
║    ║  - instance variables   ║                       ║  - static methods (8+)  ║ ║
║    ║                         ║                       ║  - constants only       ║ ║
║    ║  extends (single)       ║                       ║  implements (multiple)  ║ ║
║    ║                         ║                       ║                         ║ ║
║    ╚═════════════════════════╝                       ╚═════════════════════════╝ ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                              ABSTRACT CLASS FLOW                                 ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║         ╔═══════════════════════════════════════════════════════════════╗        ║
║         ║                   abstract class Shape                        ║        ║
║         ╠═══════════════════════════════════════════════════════════════╣        ║
║         ║   String color;                         // concrete           ║        ║
║         ║                                                               ║        ║
║         ║   abstract double area();               // abstract (no body) ║        ║
║         ║   abstract double perimeter();          // abstract (no body) ║        ║
║         ║                                                               ║        ║
║         ║   void display() {                      // concrete           ║        ║
║         ║       System.out.println("Color: " + color);                  ║        ║
║         ║   }                                                           ║        ║
║         ╚═══════════════════════════╦═══════════════════════════════════╝        ║
║                                     ║                                            ║
║              ╔══════════════════════╩══════════════════════╗                     ║
║              ║                                             ║                     ║
║              ▼                                             ▼                     ║
║   ╔═══════════════════════════════╗         ╔═══════════════════════════════╗    ║
║   ║      class Circle             ║         ║      class Rectangle          ║    ║
║   ╠═══════════════════════════════╣         ╠═══════════════════════════════╣    ║
║   ║   double radius;              ║         ║   double length, width;       ║    ║
║   ║                               ║         ║                               ║    ║
║   ║   double area() {             ║         ║   double area() {             ║    ║
║   ║     return PI * r * r;        ║         ║     return length * width;    ║    ║
║   ║   }                           ║         ║   }                           ║    ║
║   ║                               ║         ║                               ║    ║
║   ║   double perimeter() {        ║         ║   double perimeter() {        ║    ║
║   ║     return 2 * PI * r;        ║         ║     return 2*(length+width);  ║    ║
║   ║   }                           ║         ║   }                           ║    ║
║   ╚═══════════════════════════════╝         ╚═══════════════════════════════╝    ║
║                                                                                  ║
║   MUST implement all abstract methods                                            ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                        INTERFACE FLOW                                            ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║               ╔═════════════════════════════════════════════════╗                ║
║               ║           interface Drawable                    ║                ║
║               ╠═════════════════════════════════════════════════╣                ║
║               ║   void draw();     // abstract by default       ║                ║
║               ║   void resize();   // abstract by default       ║                ║
║               ╚═════════════════════════╦═══════════════════════╝                ║
║                                         ║                                        ║
║           ╔═════════════════════════════╩═════════════════════════════╗          ║
║           ║                             ║                             ║          ║
║           ▼                             ▼                             ▼          ║
║   ╔═══════════════════╗       ╔═══════════════════╗       ╔═══════════════════╗  ║
║   ║  class Circle     ║       ║  class Square     ║       ║  class Triangle   ║  ║
║   ║  implements       ║       ║  implements       ║       ║  implements       ║  ║
║   ║  Drawable         ║       ║  Drawable         ║       ║  Drawable         ║  ║
║   ╠═══════════════════╣       ╠═══════════════════╣       ╠═══════════════════╣  ║
║   ║  void draw() {    ║       ║  void draw() {    ║       ║  void draw() {    ║  ║
║   ║    // circle      ║       ║    // square      ║       ║    // triangle    ║  ║
║   ║  }                ║       ║  }                ║       ║  }                ║  ║
║   ║  void resize() {  ║       ║  void resize() {  ║       ║  void resize() {  ║  ║
║   ║    // circle      ║       ║    // square      ║       ║    // triangle    ║  ║
║   ║  }                ║       ║  }                ║       ║  }                ║  ║
║   ╚═══════════════════╝       ╚═══════════════════╝       ╚═══════════════════╝  ║
║                                                                                  ║
║   ONE INTERFACE ─────────► MULTIPLE IMPLEMENTATIONS                              ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                   ABSTRACT CLASS VS INTERFACE                                    ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║         ABSTRACT CLASS                           INTERFACE                       ║
║   ╔═════════════════════════════╗        ╔═════════════════════════════╗         ║
║   ║  0-100% abstraction         ║        ║  100% abstraction           ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  abstract & concrete        ║        ║  abstract only (until Java8)║         ║
║   ║  methods allowed            ║        ║  default/static after Java8 ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  Has constructor            ║        ║  No constructor             ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  Instance variables         ║        ║  Only public static final   ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  Single inheritance         ║        ║  Multiple inheritance       ║         ║
║   ║  (extends one class)        ║        ║  (implements many)          ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  Use when:                  ║        ║  Use when:                  ║         ║
║   ║  - Share code               ║        ║  - Define contract          ║         ║
║   ║  - Have common base         ║        ║  - Multiple inheritance     ║         ║
║   ║  - Non-public members       ║        ║  - Unrelated classes        ║         ║
║   ╚═════════════════════════════╝        ╚═════════════════════════════╝         ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


```



