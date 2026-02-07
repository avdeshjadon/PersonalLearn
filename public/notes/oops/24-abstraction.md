# ABSTRACTION

## Concept Introduction

Imagine tum **car** chalate ho - tum **steering, brake, accelerator** use karte ho. But tum yeh nahi jaante ki **engine internally kaise kaam kar raha hai**. Yeh hai **Abstraction** - **essential details dikhao, internal complexity chhupao**.

**Abstraction = Showing WHAT, Hiding HOW**

Real Example: **TV Remote** - Button press karo (What), internal circuit kaise kaam karta hai nahi dikhta (How hidden)

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

## Definitions

### Very Simple Definition
Important cheezen dikhana, unnecessary details chhupana.

### Simple Definition
Abstraction is hiding implementation details and showing only the functionality to the user. It focuses on what an object does rather than how it does it.

### College Exam Definition
Abstraction is an OOPs concept that hides the internal implementation details and exposes only the necessary functionality to the user. It is achieved in Java using abstract classes (with abstract methods) and interfaces. It allows focusing on what an object does instead of how it does it, reducing complexity and increasing reusability.

### Interview Definition
Abstraction is the process of hiding implementation details and exposing only the essential features and functionality to the user. It focuses on what an object does rather than how it performs it, providing a simplified interface while keeping complex logic internal. In Java, abstraction is achieved through abstract classes (0-100% abstraction) using the `abstract` keyword, and interfaces (100% abstraction until Java 8, partial after default methods). It reduces complexity, improves code maintainability, enables loose coupling, and allows multiple implementations of the same interface.

### Deep Technical Definition
Abstraction is an OOPs principle that establishes a contract between the interface and implementation by defining abstract methods (without body) that must be implemented by concrete classes, thereby enforcing behavioral contracts while hiding implementation complexity. In Java, it's implemented via abstract classes (which can have both abstract and concrete methods, constructors, and instance variables) providing 0-100% abstraction, and interfaces (pure contracts with abstract methods, default methods since Java 8, static methods, and public static final variables) providing partial to complete abstraction. Abstraction enables polymorphism, separation of concerns, and the Template Method design pattern, while facilitating unit testing through mock implementations.

---

## Achieving Abstraction in Java

### 1. Using Abstract Classes (0-100% abstraction)
### 2. Using Interfaces (100% abstraction)

---

## Abstract Class

### Definition
A class that cannot be instantiated and may contain abstract methods (without body).

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
- Declared with `abstract` keyword
- Cannot create object directly
- Can have both abstract and concrete methods
- Can have constructors
- Can have instance variables
- 0-100% abstraction

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
    
    // Constructor
    Payment(String paymentId, double amount) {
        this.paymentId = paymentId;
        this.amount = amount;
    }
    
    // Abstract methods - must be implemented by child
    abstract void processPayment();
    abstract void refund();
    
    // Concrete method - common for all
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

### Definition
A completely abstract entity with only abstract methods (until Java 8).

### Syntax
```java
interface InterfaceName {
    // Abstract methods (public abstract by default)
    void method1();
    void method2();
}
```

### Key Points:
- Declared with `interface` keyword
- All methods are `public abstract` by default
- All variables are `public static final` (constants)
- 100% abstraction (until Java 7)
- After Java 8: can have default and static methods
- A class `implements` an interface

---

## Interface Example

```java
// Interface
interface Animal {
    // public abstract by default
    void sound();
    void eat();
}

// Class implementing interface
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

// Duck can fly and swim
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
1. **Abstract Class**: 0-100% abstraction, `abstract` keyword
2. **Interface**: 100% abstraction, `interface` keyword

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
║                            ABSTRACTION                                           ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                      ABSTRACTION CONCEPT                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                          WHAT vs HOW                                             ║
║                          ══════════                                              ║
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
║                    ACHIEVING ABSTRACTION                                         ║
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
║                      ABSTRACT CLASS FLOW                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║         ╔═══════════════════════════════════════════════════════════════╗        ║
║         ║              abstract class Shape                             ║        ║
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
║   ║  0-100% abstraction         ║        ║  100% abstraction            ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  abstract & concrete        ║        ║  abstract only (until Java8) ║         ║
║   ║  methods allowed            ║        ║  default/static after Java8  ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  Has constructor            ║        ║  No constructor              ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  Instance variables         ║        ║  Only public static final    ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  Single inheritance         ║        ║  Multiple inheritance        ║         ║
║   ║  (extends one class)        ║        ║  (implements many)           ║         ║
║   ╠═════════════════════════════╣        ╠═════════════════════════════╣         ║
║   ║  Use when:                  ║        ║  Use when:                   ║         ║
║   ║  - Share code               ║        ║  - Define contract           ║         ║
║   ║  - Have common base         ║        ║  - Multiple inheritance      ║         ║
║   ║  - Non-public members       ║        ║  - Unrelated classes         ║         ║
║   ╚═════════════════════════════╝        ╚═════════════════════════════╝         ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                       REAL WORLD ANALOGY                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                              CAR EXAMPLE                                         ║
║                                                                                  ║
║    ╔═════════════════════════════════════════════════════════════════════════╗   ║
║    ║                      WHAT YOU SEE (Interface)                           ║   ║
║    ╠═════════════════════════════════════════════════════════════════════════╣   ║
║    ║                                                                         ║   ║
║    ║    [Steering]    [Accelerator]    [Brake]    [Gear]                     ║   ║
║    ║                                                                         ║   ║
║    ║    Simple controls - Just use them!                                     ║   ║
║    ║                                                                         ║   ║
║    ╚═════════════════════════════════════════════════════════════════════════╝   ║
║                                    │                                             ║
║                                    ▼                                             ║
║    ╔═════════════════════════════════════════════════════════════════════════╗   ║
║    ║                     WHAT'S HIDDEN (Implementation)                      ║   ║
║    ╠═════════════════════════════════════════════════════════════════════════╣   ║
║    ║                                                                         ║   ║
║    ║    - Engine combustion process                                          ║   ║
║    ║    - Fuel injection system                                              ║   ║
║    ║    - Transmission mechanics                                             ║   ║
║    ║    - Braking hydraulics                                                 ║   ║
║    ║    - Electronic control unit                                            ║   ║
║    ║                                                                         ║   ║
║    ║    Complex internal working - User doesn't need to know!                ║   ║
║    ║                                                                         ║   ║
║    ╚═════════════════════════════════════════════════════════════════════════╝   ║
║                                                                                  ║
║    ABSTRACTION = Hide complexity, Show simplicity                                ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
