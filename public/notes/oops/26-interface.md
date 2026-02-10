# INTERFACE

## Concept Introduction

An interface is a completely abstract type that contains only method signatures (abstract methods) and constants (public static final variables). It defines a contract that implementing classes must follow. A class can implement multiple interfaces, enabling multiple inheritance of type in Java.

**Interface** ek **pure abstract** blueprint hai jo define karta hai **KYA** karna hai, par **KAISE** karna hai yeh nahi batata. Java 7 tak, interface mein **100% abstraction** hota tha - saare methods abstract the.

**Interface = Contract/Blueprint = What to do (not how)**

Ek **contract** ki tarah - jo bhi class interface **implement** kare, use saare methods ko implement karna **mandatory** hai.

---

## Why This Concept Exists

### Problem: Multiple Inheritance Not Supported

```java
//  Cannot do this in Java
class Child extends Parent1, Parent2 { }
```

### Solution: Interfaces

```java
//  Can implement multiple interfaces
class Child implements Interface1, Interface2 { }
```

**Interface se multiple inheritance achieve kar sakte hain!**

---

## Why Interface When Abstract Class Can Also Do 100% Abstraction?

### English Explanation:

This is a very important question! Yes, an abstract class can achieve 100% abstraction by making all methods abstract. But there are key reasons why interfaces are still needed:

**1. Multiple Inheritance:**
- A class can extend only ONE abstract class (single inheritance).
- A class can implement MULTIPLE interfaces (multiple inheritance).
- This is the **biggest difference** and the main reason interfaces exist.

**2. Design Intent:**
- **Abstract Class** = "IS-A" relationship (Dog IS-A Animal)
- **Interface** = "CAN-DO" or "HAS-ABILITY" relationship (Bird CAN Fly)
- Abstract class defines **what something is**, interface defines **what something can do**.

**3. Unrelated Classes:**
- Abstract class is used when classes are **related** (share common parent).
- Interface is used when **unrelated classes** need same behavior.
- Example: `Bird` and `Airplane` are unrelated, but both can `Flyable`.

**4. Loose Coupling:**
- Interfaces provide **loose coupling** (less dependency between classes).
- Abstract classes create **tight coupling** (more dependency).

**5. Contract vs Partial Implementation:**
- Interface = Pure contract (only what to do).
- Abstract class = Contract + some implementation (what + partial how).

---

### Hinglish Explanation:

Yeh bahut important sawaal hai! Haan, abstract class bhi 100% abstraction de sakti hai agar saare methods abstract ho. Par phir bhi interface ki zaroorat kyun hai?

**1. Multiple Inheritance (Sabse Bada Reason):**
- Ek class sirf **EK** abstract class extend kar sakti hai.
- Par ek class **MULTIPLE** interfaces implement kar sakti hai.
- Yahi sabse bada farak hai!

```java
//  Nahi hoga - Multiple inheritance not allowed
class Child extends Parent1, Parent2 { }

//  Yeh hoga - Multiple interfaces allowed
class Child implements Interface1, Interface2 { }
```

**2. Relationship Type (Rishta Kya Hai):**
- **Abstract Class** = "IS-A" relationship (Kutta EK Janwar HAI)
- **Interface** = "CAN-DO" relationship (Chidiya UD SAKTI HAI)
- Abstract class batata hai **kya cheez hai**, interface batata hai **kya kar sakti hai**.

**3. Unrelated Classes Ko Connect Karna:**
- Abstract class tab use karo jab classes **related** ho (same family).
- Interface tab use karo jab **alag-alag classes** ko same behavior dena ho.
- Example: `Bird` aur `Airplane` dono alag hai, par dono `Flyable` hai!

```java
interface Flyable {
    void fly();
}

class Bird implements Flyable {
    public void fly() { System.out.println("Bird flies with wings"); }
}

class Airplane implements Flyable {
    public void fly() { System.out.println("Airplane flies with engine"); }
}
// Bird aur Airplane ka koi common parent nahi, par dono fly kar sakte hain!
```

**4. Loose Coupling (Kam Dependency):**
- Interface use karne se code **loosely coupled** rehta hai (change karna easy).
- Abstract class use karne se code **tightly coupled** ho jata hai (change karna mushkil).

**5. Summary Table:**

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Inheritance | Single (ek hi extend ho sakti) | Multiple (kai implement ho sakti) |
| Relationship | IS-A (kya hai) | CAN-DO (kya kar sakti hai) |
| Use Case | Related classes | Unrelated classes |
| Coupling | Tight | Loose |
| Variables | Any type | Only constants |
| Constructor | ✓ Hota hai | ✗ Nahi hota |

**Bottom Line:**
> Agar sirf 100% abstraction chahiye aur single inheritance kaafi hai → Abstract Class use karo.
> Agar multiple inheritance chahiye ya unrelated classes ko same behavior dena hai → Interface use karo.

---

## Definitions

### Very Simple Definition
Interface ek contract hai jo define karta hai ki kaunse methods implement karne hain.

### Simple Definition
An interface is a reference type in Java that contains only abstract methods (Java 7) and constants. A class implements an interface and must provide implementation for all its methods.

### College Exam Definition
An interface is a completely abstract type that contains only method signatures (abstract methods) and constants (public static final variables). It defines a contract that implementing classes must follow. A class can implement multiple interfaces, enabling multiple inheritance of type in Java.

### Technical Definition
An interface is a reference type that defines a contract of method signatures without implementation (prior to Java 8). All methods are implicitly public and abstract, and all variables are implicitly public, static, and final. A class implements an interface using the implements keyword and must provide concrete implementations for all interface methods. Interfaces enable abstraction, multiple inheritance of type, loose coupling, and polymorphism. Since Java 8, interfaces can have default and static methods with implementation.

### Interview Definition
An interface in Java is a blueprint that defines a contract for classes. Key characteristics include:

1. **Methods**:
   - All methods are `public` and `abstract` by default (Java 7).
   - Since Java 8, interfaces can have `default` and `static` methods with implementation.
   - Since Java 9, interfaces can have `private` methods.

2. **Variables**:
   - All variables are `public`, `static`, and `final` (constants).

3. **Instantiation**:
   - Interfaces cannot be instantiated.
   - They do not have constructors.

4. **Inheritance**:
   - A class can implement multiple interfaces (achieving multiple inheritance).

5. **Purpose**:
   - Used for 100% abstraction (Java 7).
   - Define capabilities or contracts (e.g., `Flyable`, `Comparable`).
   - Enable unrelated classes to share common behavior.

6. **Relationship**:
   - Classes use the `implements` keyword to implement an interface (not `extends`).

**Use Cases:**
- When multiple inheritance is needed.
- When complete abstraction is required.
- To define a contract or capability for classes.

---

## Multiple Inheritance with Interfaces

```java
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

// Class implements multiple interfaces
class Duck implements Flyable, Swimmable {
    public void fly() {
        System.out.println("Duck can fly");
    }
    
    public void swim() {
        System.out.println("Duck can swim");
    }
}

class Fish implements Swimmable {
    public void swim() {
        System.out.println("Fish swims in water");
    }
}

class Bird implements Flyable {
    public void fly() {
        System.out.println("Bird flies in sky");
    }
}

public class Main {
    public static void main(String[] args) {
        Duck duck = new Duck();
        duck.fly();
        duck.swim();
        
        Fish fish = new Fish();
        fish.swim();
        
        Bird bird = new Bird();
        bird.fly();
    }
}
```

**Output:**
```
Duck can fly
Duck can swim
Fish swims in water
Bird flies in sky
```

---

## Constants in Interface

```java
interface MathConstants {
    // All variables are public static final by default
    double PI = 3.14159;
    int MAX_VALUE = 100;
    String AUTHOR = "Java Team";
}

class Calculator implements MathConstants {
    double calculateCircleArea(double radius) {
        return PI * radius * radius;  // Using interface constant
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Circle area: " + calc.calculateCircleArea(5));
        
        // Access constants directly
        System.out.println("PI: " + MathConstants.PI);
        System.out.println("MAX: " + MathConstants.MAX_VALUE);
        
        // MathConstants.PI = 3.14; //  Error: Cannot modify (final)
    }
}
```

**Output:**
```
Circle area: 78.53975
PI: 3.14159
MAX: 100
```

---

## Interface Inheritance

```java
// Interface can extend another interface
interface Animal {
    void eat();
}

interface Mammal extends Animal {
    void breathe();
}

interface Pet extends Mammal {
    void play();
}

// Class implements Pet (must implement all methods)
class Dog implements Pet {
    public void eat() {
        System.out.println("Dog eats");
    }
    
    public void breathe() {
        System.out.println("Dog breathes");
    }
    
    public void play() {
        System.out.println("Dog plays");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.breathe();
        dog.play();
    }
}
```

**Output:**
```
Dog eats
Dog breathes
Dog plays
```

---

## Real-World Example: Payment System

```java
interface Payment {
    void processPayment(double amount);
    boolean validatePayment();
    String getPaymentStatus();
}

class CreditCardPayment implements Payment {
    private String cardNumber;
    private boolean isValid;
    
    CreditCardPayment(String card) {
        this.cardNumber = card;
        this.isValid = true;
    }
    
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment of ₹" + amount);
        System.out.println("Card: " + cardNumber);
    }
    
    public boolean validatePayment() {
        System.out.println("Validating credit card...");
        return isValid;
    }
    
    public String getPaymentStatus() {
        return "Credit Card Payment Successful";
    }
}

class UpiPayment implements Payment {
    private String upiId;
    
    UpiPayment(String upi) {
        this.upiId = upi;
    }
    
    public void processPayment(double amount) {
        System.out.println("Processing UPI payment of ₹" + amount);
        System.out.println("UPI ID: " + upiId);
    }
    
    public boolean validatePayment() {
        System.out.println("Validating UPI ID...");
        return true;
    }
    
    public String getPaymentStatus() {
        return "UPI Payment Successful";
    }
}

class PaymentProcessor {
    void execute(Payment payment, double amount) {
        if (payment.validatePayment()) {
            payment.processPayment(amount);
            System.out.println(payment.getPaymentStatus());
        } else {
            System.out.println("Payment validation failed");
        }
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        PaymentProcessor processor = new PaymentProcessor();
        
        Payment cc = new CreditCardPayment("1234-5678-9012-3456");
        Payment upi = new UpiPayment("user@paytm");
        
        processor.execute(cc, 5000);
        processor.execute(upi, 3000);
    }
}
```

**Output:**
```
Validating credit card...
Processing credit card payment of ₹5000.0
Card: 1234-5678-9012-3456
Credit Card Payment Successful

Validating UPI ID...
Processing UPI payment of ₹3000.0
UPI ID: user@paytm
UPI Payment Successful
```

---

## Marker Interface

**Marker Interface** = Empty interface (no methods)

Used to mark/tag classes for special treatment.

```java
// Marker interface
interface Serializable {
    // Empty - just marks the class
}

class Student implements Serializable {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}

// JVM knows Student is Serializable
```

**Examples:** Serializable, Cloneable, Remote

---

## Interface Rules (Java 7)

| Feature | Value | Description |
|---------|-------|-------------|
| **Methods** | public abstract | All methods are public abstract by default |
| **Variables** | public static final | All variables are constants |
| **Constructor** |  Not allowed | Cannot have constructors |
| **Instantiation** |  Cannot instantiate | Cannot create objects |
| **Implementation** | implements keyword | Class uses implements |
| **Multiple** | ✓ Allowed | Can implement multiple interfaces |
| **Inheritance** | extends keyword | Interface can extend interface |
| **Abstraction** | 100% | Complete abstraction |

---

## extends vs implements

```java
// Interface extends Interface
interface A { }
interface B extends A { }  // ✓

// Class implements Interface
class C implements A { }  // ✓

// Class implements multiple Interfaces
class D implements A, B { }  // ✓

// Class extends Class and implements Interface
class E extends SomeClass implements A, B { }  // ✓

// Interface implements Interface
// interface F implements A { }  //  Error
```

---

## Important Interview Questions

**Q1: What is an interface in Java?**

An interface is a reference type that defines a contract of abstract methods. In Java 7, all methods are public abstract and all variables are public static final. Classes implement interfaces to fulfill the contract.

**Q2: Can we instantiate an interface?**

No, we cannot create objects of an interface. We can only create objects of classes that implement the interface.

**Q3: Can an interface have constructors?**

No, interfaces cannot have constructors since they cannot be instantiated.

**Q4: Can we have variables in interface?**

Yes, but they are implicitly public static final (constants). They must be initialized at declaration.

**Q5: What is a marker interface?**

A marker interface is an empty interface with no methods, used to mark or tag classes for special treatment by JVM or frameworks. Examples: Serializable, Cloneable.

**Q6: Can a class implement multiple interfaces?**

Yes, a class can implement multiple interfaces, which is how Java achieves multiple inheritance.

**Q7: Difference between abstract class and interface (Java 7)?**

- **Abstract Class**: 0-100% abstraction, can have constructors, single inheritance
- **Interface**: 100% abstraction, no constructors, multiple inheritance

**Q8: What is the default access modifier for interface methods?**

public abstract (both are implicit)

**Q9: Can interface extend another interface?**

Yes, an interface can extend one or more interfaces using the extends keyword.

---

## Short Recap

**Interface** = Pure abstract blueprint (Java 7)

**Key Points:**
- **100% abstraction**
- All methods **public abstract**
- All variables **public static final** (constants)
- **No constructor**
- **Cannot instantiate**
- Class uses **implements** keyword
- **Multiple inheritance** possible

**Purpose:** Define contract, achieve multiple inheritance, complete abstraction

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                              INTERFACE                                           ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║          interface Animal {               ║                 ║
║                    ║                                           ║                 ║
║                    ║   // Constant (public static final)       ║                 ║
║                    ║   int LEGS = 4;                           ║                 ║
║                    ║                                           ║                 ║
║                    ║   // Abstract methods (public abstract)   ║                 ║
║                    ║   void eat();                             ║                 ║
║                    ║   void sleep();                           ║                 ║
║                    ║   void sound();                           ║                 ║
║                    ║          }                                ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                       │                                          ║
║               ╔═══════════════════════════════════════════════════╗              ║
║               ║         new Animal() ──> ✗ COMPILE ERROR!         ║              ║
║               ║          Cannot instantiate interface             ║              ║
║               ╚═══════════════════════════════════════════════════╝              ║
║                                       │                                          ║
║                                       │ implements                               ║
║                                       ▼                                          ║
║              ┌────────────────────────┴────────────────────────┐                 ║
║              │                                                 │                 ║
║              ▼                                                 ▼                 ║
║   ╔═════════════════════════════╗           ╔═════════════════════════════╗      ║
║   ║ class Dog implements Animal ║           ║ class Cat implements Animal ║      ║
║   ║                             ║           ║                             ║      ║
║   ║ // MUST implement ALL       ║           ║ // MUST implement ALL       ║      ║
║   ║ public void eat() {...}     ║           ║ public void eat() {...}     ║      ║
║   ║ public void sleep() {...}   ║           ║ public void sleep() {...}   ║      ║
║   ║ public void sound() {...}   ║           ║ public void sound() {...}   ║      ║
║   ║                             ║           ║                             ║      ║
║   ╚═════════════════════════════╝           ╚═════════════════════════════╝      ║
║              │                                                 │                 ║
║              ▼                                                 ▼                 ║
║   ╔═════════════════════════════╗           ╔═════════════════════════════╗      ║
║   ║      new Dog() ──> ✓        ║           ║      new Cat() ──> ✓        ║      ║
║   ╚═════════════════════════════╝           ╚═════════════════════════════╝      ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                      MULTIPLE INHERITANCE                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║     ╔═════════════════╗                           ╔═════════════════╗            ║
║     ║  interface      ║                           ║  interface      ║            ║
║     ║   Flyable {     ║                           ║   Swimmable {   ║            ║
║     ║    void fly();  ║                           ║    void swim(); ║            ║
║     ║  }              ║                           ║  }              ║            ║
║     ╚═════════════════╝                           ╚═════════════════╝            ║
║              │                                             │                     ║
║              │              implements                     │                     ║
║              └─────────────────────┬───────────────────────┘                     ║
║                                    │                                             ║
║                                    ▼                                             ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║  class Duck implements Flyable, Swimmable ║                 ║
║                    ║  {                                        ║                 ║
║                    ║      public void fly() {                  ║                 ║
║                    ║          System.out.println("Flying");    ║                 ║
║                    ║      }                                    ║                 ║
║                    ║                                           ║                 ║
║                    ║      public void swim() {                 ║                 ║
║                    ║          System.out.println("Swimming");  ║                 ║
║                    ║      }                                    ║                 ║
║                    ║  }                                        ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                                                                  ║
║                          Duck can FLY and SWIM! ✓                                ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                      INTERFACE RULES (Java 7)                                    ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                           INTERFACE                                   ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   ┌───────────────────────────────────────────────────────────────┐   ║      ║
║   ║   │  METHODS (All are implicitly public abstract)                 │   ║      ║
║   ║   │                                                               │   ║      ║
║   ║   │  void method();  ═══>  public abstract void method();         │   ║      ║
║   ║   └───────────────────────────────────────────────────────────────┘   ║      ║
║   ║                                                                       ║      ║
║   ║   ┌───────────────────────────────────────────────────────────────┐   ║      ║
║   ║   │  VARIABLES (All are implicitly public static final)           │   ║      ║
║   ║   │                                                               │   ║      ║
║   ║   │  int VALUE = 10;  ═══>  public static final int VALUE = 10;   │   ║      ║
║   ║   └───────────────────────────────────────────────────────────────┘   ║      ║
║   ║                                                                       ║      ║
║   ║   ┌───────────────────────────────────────────────────────────────┐   ║      ║
║   ║   │  CONSTRUCTOR                                                  │   ║      ║
║   ║   │                                                               │   ║      ║
║   ║   │  ✗ NOT ALLOWED (interface cannot be instantiated)             │   ║      ║
║   ║   └───────────────────────────────────────────────────────────────┘   ║      ║
║   ║                                                                       ║      ║
║   ║   ┌───────────────────────────────────────────────────────────────┐   ║      ║
║   ║   │  ABSTRACTION LEVEL                                            │   ║      ║
║   ║   │                                                               │   ║      ║
║   ║   │  100% ABSTRACT (All methods are abstract in Java 7)           │   ║      ║
║   ║   └───────────────────────────────────────────────────────────────┘   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║               ABSTRACT CLASS vs INTERFACE (Java 7)                               ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ┌───────────────────────┬───────────────────────┬───────────────────────┐      ║
║   │       Feature         │    Abstract Class     │      Interface        │      ║
║   ├───────────────────────┼───────────────────────┼───────────────────────┤      ║
║   │ Keyword               │ abstract class        │ interface             │      ║
║   ├───────────────────────┼───────────────────────┼───────────────────────┤      ║
║   │ Methods               │ Abstract + Concrete   │ Abstract only         │      ║
║   ├───────────────────────┼───────────────────────┼───────────────────────┤      ║
║   │ Variables             │ Any type              │ public static final   │      ║
║   ├───────────────────────┼───────────────────────┼───────────────────────┤      ║
║   │ Constructor           │ ✓ Can have            │ ✗ Cannot have         │      ║
║   ├───────────────────────┼───────────────────────┼───────────────────────┤      ║
║   │ Inheritance           │ Single (extends)      │ Multiple (implements) │      ║
║   ├───────────────────────┼───────────────────────┼───────────────────────┤      ║
║   │ Abstraction           │ 0-100%                │ 100%                  │      ║
║   ├───────────────────────┼───────────────────────┼───────────────────────┤      ║
║   │ Relationship          │ IS-A                  │ CAN-DO / HAS-A        │      ║
║   └───────────────────────┴───────────────────────┴───────────────────────┘      ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                        MARKER INTERFACE                                          ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║   Empty interface with no methods - used to "mark" or "tag" classes   ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   interface Serializable { }   ──> Mark class as serializable         ║      ║
║   ║   interface Cloneable { }      ──> Mark class as cloneable            ║      ║
║   ║   interface Remote { }         ──> Mark class as remote               ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
