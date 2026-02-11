# METHOD OVERRIDING

## Concept Introduction

Method overriding occurs when a subclass provides a specific implementation for a method already defined in its parent class.

**Child class implements the parent's method in its own specific way.** In inheritance, a child inherits the parent's method, but if the child needs custom behavior, it **overrides** that method.

**Method Overriding = Same Signature + Different Implementation = Runtime Polymorphism**

**Real Example:** **Animal sound()** - Dog barks, Cat meows. Same method name, different behavior!

---

## Why Method Overriding Exists

### The Problem
The parent class often provides a generic implementation that isn't suitable for all child classes:

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");  // Too generic!
    }
}
```

### The Solution
The child class overrides the method to provide a specific implementation:

```java
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks: Woof!");  // Specific!
    }
}
```

---

## Definitions

### Very Simple Definition
The child class rewrites the parent's method to suit its needs.

### Simple Definition
Method overriding occurs when a subclass provides a specific implementation for a method already defined in its parent class.

### Interview Definition
Method overriding is a runtime polymorphism feature where a child class provides its own implementation of a method already defined in the parent class with the same signature (name, parameters, and return type). The overridden method is called based on the object type at runtime through dynamic method dispatch, enabling polymorphic behavior. It requires inheritance and is best implemented using the `@Override` annotation for compile-time checking.

---

## Rules for Method Overriding

### Mandatory Rules
1.  **Inheritance Required**: There must be a parent-child relationship.
2.  **Same Method Signature**: The method name and parameters must be exactly the same.
3.  **Same or Covariant Return Type**: The return type must be the same or a subclass of the parent's return type.
4.  **Access Modifier**: You cannot reduce the visibility (e.g., cannot make `public` to `private`). Use the same or wider access.
5.  **Checked Exceptions**: The overriding method cannot throw new or broader checked exceptions.

### Cannot Override
1.  **Private Methods**: They are not inherited.
2.  **Final Methods**: They are explicitly designed to prevent overriding.
3.  **Static Methods**: They are hidden (method hiding), not overridden.
4.  **Constructors**: They are not methods and are not inherited.

---

## Basic Example

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
    
    void eat() {
        System.out.println("Animal eats food");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks: Woof Woof!");
    }
    
    // eat() not overridden - inherited as-is
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows: Meow Meow!");
    }
    
    @Override
    void eat() {
        System.out.println("Cat drinks milk");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        a1.sound();  // Dog barks: Woof Woof!
        a1.eat();    // Animal eats food
        
        Animal a2 = new Cat();
        a2.sound();  // Cat meows: Meow Meow!
        a2.eat();    // Cat drinks milk
    }
}
```

---

## Dynamic Method Dispatch

**The decision of which method to call is made at runtime** based on the actual object type, not the reference type.

```java
class Parent {
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child display");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent p1 = new Parent();
        p1.display();  // Parent display
        
        Parent p2 = new Child();  // Parent reference, Child object
        p2.display();  // Child display (Runtime decision!)
    }
}
```

**Key Takeaway:** Method calls resolve at runtime based on the actual object instance.

---

## The @Override Annotation

### Why Use It?

The `@Override` annotation tells the compiler that you intend to override a method. If you make a mistake (like a typo in the method name or wrong arguments), the compiler will throw an error instead of treating it as a new method.

```java
class Parent {
    void display() { }
}

class Child extends Parent {
    @Override
    void dispaly() {  // Typo! Compiler catches it
        // ERROR: Method does not override from parent
    }
}
```

---

## Access Modifiers in Overriding

### Allowed: Widening Access
You can increase visibility (e.g., `protected` -> `public`).

```java
class Parent {
    protected void method() { }
}

class Child extends Parent {
    @Override
    public void method() { }  // Valid (Widening)
}
```

### Not Allowed: Narrowing Access
You cannot decrease visibility (e.g., `public` -> `protected`).

```java
class Parent {
    public void method() { }
}

class Child extends Parent {
    @Override
    protected void method() { }  // Error (Narrowing)
}
```

**Access Hierarchy:** `private` < `default` < `protected` < `public`

---

## Covariant Return Types

Since Java 5, an overriding method can return a subtype of the parent method's return type.

```java
class Animal { }
class Dog extends Animal { }

class AnimalFactory {
    Animal getAnimal() {
        return new Animal();
    }
}

class DogFactory extends AnimalFactory {
    @Override
    Dog getAnimal() {  // Valid: Dog is a subtype of Animal
        return new Dog();
    }
}
```

---

## Real-World Example: Payment Processing

```java
abstract class Payment {
    String transactionId;
    double amount;
    
    Payment(String transactionId, double amount) {
        this.transactionId = transactionId;
        this.amount = amount;
    }
    
    // Generic implementation
    void processPayment() {
        System.out.println("Processing payment of ₹" + amount);
    }
    
    void generateReceipt() {
        System.out.println("Receipt ID: " + transactionId);
    }
}

class CreditCardPayment extends Payment {
    String cardNumber;
    
    CreditCardPayment(String id, double amount, String card) {
        super(id, amount);
        this.cardNumber = card;
    }
    
    @Override
    void processPayment() {
        System.out.println("=== Credit Card Payment ===");
        System.out.println("Card: **** " + cardNumber.substring(12));
        System.out.println("Amount: ₹" + amount);
        System.out.println("Processing fee: 2%");
        System.out.println("Total: ₹" + (amount * 1.02));
    }
}

class UPIPayment extends Payment {
    String upiId;
    
    UPIPayment(String id, double amount, String upi) {
        super(id, amount);
        this.upiId = upi;
    }
    
    @Override
    void processPayment() {
        System.out.println("=== UPI Payment ===");
        System.out.println("UPI ID: " + upiId);
        System.out.println("Amount: ₹" + amount);
        System.out.println("Instant transfer - No fee!");
    }
}

public class Main {
    public static void main(String[] args) {
        Payment p1 = new CreditCardPayment("TXN001", 5000, "1234567890123456");
        p1.processPayment();
        p1.generateReceipt();
        
        System.out.println();
        
        Payment p2 = new UPIPayment("TXN002", 3000, "user@paytm");
        p2.processPayment();
        p2.generateReceipt();
    }
}
```

---

## Using super in Overriding

If you want to use the parent class logic and then add to it, use `super.method()`.

```java
class Vehicle {
    void start() {
        System.out.println("Vehicle starting...");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        super.start();  // Run parent logic first
        System.out.println("Car engine started");
        System.out.println("AC turned on");
    }
}
```

---

## Methods That Cannot Be Overridden

### 1. Private Methods
They are invisible to the child class, so they represent a new method in the child, not an override.

```java
class Parent {
    private void method() { }
}

class Child extends Parent {
    void method() { }  // New independent method
}
```

### 2. Final Methods
Marking a method `final` explicitly forbids overriding.

```java
class Parent {
    final void method() { }
}

class Child extends Parent {
    void method() { }  // Output: Compilation Error
}
```

### 3. Static Methods
Redefining a static method in a child class is called **Method Hiding**, not overriding.

```java
class Parent {
    static void method() { }
}

class Child extends Parent {
    static void method() { }  // Hiding
}
```

## When to Use Method Overriding?

Use it when a specific subclass needs to modify the behavior of an inherited method.

Inheriting a method from a superclass and changing its implementation in the subclass is Method Overriding. It requires inheritance. The overriding method must have the same signature (name, parameter list) and compatible return type. It enables Runtime Polymorphism.

*   **Hindi**: "Jab application development mein kisi functionality ko alag implementation se likhna ho, tab method overriding ka use karte hain."

### Why certain methods cannot be overridden:
*   **Static methods**: Associated with the class, not the object. Redefining them hides the parent method.
*   **Final methods**: `final` keyword explicitly prevents modification.
*   **Private methods**: Not visible to the subclass, so they cannot be overridden.

---

## Method Overloading vs Overriding

| Feature | Overloading | Overriding |
| :--- | :--- | :--- |
| **Parameters** | Different | Same |
| **Inheritance** | Not required | Required |
| **Polymorphism** | Compile-time | Runtime |
| **Binding** | Static (Early) | Dynamic (Late) |
| **Return Type** | Can differ | Same or covariant |
| **Access Modifier** | Any | Same or wider |
| **@Override** | Not used | Recommended |

---

## Important Interview Questions

**Q1: What is Method Overriding?**
It is a feature where a child class provides a specific implementation for a method already defined in its parent class, enabling runtime polymorphism.

**Q2: Difference between Overloading and Overriding?**
*   **Overloading:** Same name, different parameters (Compile-time).
*   **Overriding:** Same signature, different implementation (Runtime).

**Q3: Can we override static methods?**
No. Static methods belong to the class. Redefining them in a child class is called "Method Hiding".

**Q4: Can we override private methods?**
No. Private methods are not inherited, so they cannot be overridden.

**Q5: What is the purpose of @Override annotation?**
It performs a compile-time check to ensure the method signature matches the parent class method, preventing typos and errors.

---

## Short Recap

**Method Overriding**:
*   Same signature, different implementation.
*   Runtime polymorphism (dynamic binding).
*   Requires inheritance.

**Rules**:
*   Must have same name and parameters.
*   Return type must be the same or covariant.
*   Access modifier cannot be stricter (only wider).
*   Cannot override `private`, `final`, or `static` methods.

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                            METHOD OVERRIDING                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   CONCEPT: Child class provides specific implementation of parent's method        ║
║                                                                                   ║
║   ╔════════════════════════════════╗       ╔════════════════════════════════╗     ║
║   ║         PARENT CLASS           ║       ║         CHILD CLASS            ║     ║
║   ╟────────────────────────────────╢       ╟────────────────────────────────╢     ║
║   ║  class Animal {                ║       ║  class Dog extends Animal {    ║     ║
║   ║                                ║       ║                                ║     ║
║   ║    void sound() {              ║       ║    @Override                   ║     ║
║   ║      print("Generic sound");   ║──────▶║    void sound() {              ║     ║
║   ║    }                           ║       ║      print("Woof Woof!");      ║     ║
║   ║  }                             ║       ║    }                           ║     ║
║   ╚════════════════════════════════╝       ║  }                             ║     ║
║                                            ╚════════════════════════════════╝     ║ 
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                         DYNAMIC METHOD DISPATCH                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   Animal a = new Dog();     // Parent reference, Child object                     ║
║   a.sound();                // Which method is called?                            ║
║                                                                                   ║
║       ┌──────────────────┐                                                        ║
║       │   COMPILE TIME   │──────▶ Checks: Does Animal have sound()? ✓             ║
║       └──────────────────┘                                                        ║
║                │                                                                  ║
║                ▼                                                                  ║
║       ┌──────────────────┐                                                        ║
║       │    RUN TIME      │──────▶ Checks: What is actual object type?             ║
║       └──────────────────┘                 Object is Dog → Call Dog.sound()       ║
║                │                                                                  ║
║                ▼                                                                  ║
║       ┌──────────────────┐                                                        ║
║       │ OUTPUT: "Woof!"  │        (Runtime Polymorphism!)                         ║
║       └──────────────────┘                                                        ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                              OVERRIDING RULES                                     ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌────────────────────────────────────────────────────────────────────────┐      ║
║   │                           MUST HAVE                                    │      ║
║   │  ✓ Same method name                                                    │      ║
║   │  ✓ Same parameters (number, type, order)                               │      ║
║   │  ✓ Same or covariant return type                                       │      ║
║   │  ✓ IS-A relationship (inheritance)                                     │      ║
║   └────────────────────────────────────────────────────────────────────────┘      ║ 
║                                                                                   ║
║   ACCESS MODIFIER RULES:                                                          ║
║   ══════════════════════                                                          ║
║                                                                                   ║
║   private ◀──── default ◀──── protected ◀──── public                              ║
║                        (Can only WIDEN, not narrow)                               ║
║                                                                                   ║
║   Parent: protected void show()                                                   ║
║   Child:  public void show()     ✓ OK (widened)                                   ║
║   Child:  private void show()    ✗ ERROR (narrowed)                               ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                           CANNOT OVERRIDE                                         ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔══════════════════╗   ╔══════════════════╗   ╔══════════════════╗              ║
║   ║  private methods ║   ║  final methods   ║   ║  static methods  ║              ║
║   ╟──────────────────╢   ╟──────────────────╢   ╟──────────────────╢              ║
║   ║  Not inherited   ║   ║  Cannot modify   ║   ║  Method Hiding   ║              ║
║   ║  (not visible)   ║   ║  (locked)        ║   ║  (not override)  ║              ║
║   ╚══════════════════╝   ╚══════════════════╝   ╚══════════════════╝              ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                    OVERLOADING vs OVERRIDING                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────────┬─────────────────────┬─────────────────────┐             ║
║   │      Feature        │     Overloading     │     Overriding      │             ║
║   ├─────────────────────┼─────────────────────┼─────────────────────┤             ║
║   │ Parameters          │    Different        │    Same             │             ║
║   │ Inheritance needed  │    No               │    Yes              │             ║
║   │ Polymorphism        │    Compile-time     │    Runtime          │             ║
║   │ Binding             │    Static (Early)   │    Dynamic (Late)   │             ║
║   └─────────────────────┴─────────────────────┴─────────────────────┘             ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
