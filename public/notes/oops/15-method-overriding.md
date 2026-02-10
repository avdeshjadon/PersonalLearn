# METHOD OVERRIDING

## Concept Introduction

Method overriding is a runtime polymorphism feature where a child class provides its own implementation of a method already defined in the parent class with the same signature (name, parameters, and return type). The overridden method is called based on the object type at runtime through dynamic method dispatch, enabling polymorphic behavior. It requires inheritance and uses the @Override annotation for clarity and compile-time checking.

**Child class parent ki method ko apne tarike se implement karta hai**. Inheritance mein child parent ka method inherit karta hai, but agar child ko apna custom behavior chahiye, to wo **override** kar deta hai.

**Method Overriding = Same Signature + Different Implementation = Runtime Polymorphism**

Real Example: **Animal sound()** - Dog barks, Cat meows - same method, different behavior!

---

## Why Method Overriding Exists

### The Problem
Parent class ka generic implementation child ke liye suitable nahi:

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");  // Too generic!
    }
}
```

### The Solution
Child class override karke specific implementation deta hai:

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
Child class parent ki method ko apne tarike se phir se likhta hai.

### Simple Definition
Method overriding occurs when a subclass provides a specific implementation for a method already defined in its parent class.

### Interview Definition
Method overriding is a runtime polymorphism feature where a child class provides its own implementation of a method already defined in the parent class with the same signature (name, parameters, and return type). The overridden method is called based on the object type at runtime through dynamic method dispatch, enabling polymorphic behavior. It requires inheritance and uses the @Override annotation for clarity and compile-time checking.

---

## Rules for Method Overriding

### ✅ Must Follow:
1. **Inheritance required** (parent-child relationship)
2. **Same method signature** (name + parameters)
3. **Same or covariant return type**
4. **Same or wider access modifier** (cannot reduce)
5. **Cannot throw broader checked exceptions**

### ❌ Cannot Override:
1. **private methods** (not inherited)
2. **final methods** (explicitly prevented)
3. **static methods** (hidden, not overridden)
4. **constructors** (not inherited)

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

**Runtime mein decide hota hai ki konsi method call hogi** - object type ke basis pe, reference type ke basis pe nahi!

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

**Method call resolves at runtime based on actual object type!**

---

## @Override Annotation

### Why Use?

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

**@Override ensures you're actually overriding, catches typos!**

---

## Access Modifiers in Overriding

### ✅ Can Widen

```java
class Parent {
    protected void method() { }
}

class Child extends Parent {
    @Override
    public void method() { }  // OK! Widening (protected → public)
}
```

### ❌ Cannot Narrow

```java
class Parent {
    public void method() { }
}

class Child extends Parent {
    @Override
    protected void method() { }  // ERROR! Narrowing not allowed
}
```

**Access Hierarchy**: private < default < protected < public

---

## Covariant Return Types

**Child can return subtype of parent's return type** (Java 5+)

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
    Dog getAnimal() {  // Covariant return type (Dog is subtype of Animal)
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

## super Keyword in Overriding

```java
class Vehicle {
    void start() {
        System.out.println("Vehicle starting...");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        super.start();  // Call parent's version first
        System.out.println("Car engine started");
        System.out.println("AC turned on");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();
        // Output:
        // Vehicle starting...
        // Car engine started
        // AC turned on
    }
}
```

---

## Cannot Override

### 1. private Methods

```java
class Parent {
    private void method() { }
}

class Child extends Parent {
    void method() { }  // Not overriding! New method
}
```

### 2. final Methods

```java
class Parent {
    final void method() { }
}

class Child extends Parent {
    void method() { }  // ERROR! Cannot override final
}
```

### 3. static Methods

```java
class Parent {
    static void method() { }
}

class Child extends Parent {
    static void method() { }  // Method hiding, not overriding!
}
```

## When to Use Method Overriding?

When developing apps, if a functionality should have different implementations in different subclasses, we use method overriding. 

Inheriting a method of the superclass and changing the implementation in the subclass is known as method overriding. To override a method, inheritance is required. When a subclass overrides the method of a superclass, the subclass must use the same method signature (return type or a covariant return type, method name, and parameters) and change the implementation. Using method overriding we can achieve runtime polymorphism.

Hindi: "Jab application development mein kisi functionality ko alag implementation se likhna ho, tab method overriding ka use karte hain."

The subclass can't override the below kinds of methods from the superclass:

- **Static methods** — static methods are associated with the class and are not dynamically dispatched; declaring a static method with the same signature in a subclass hides the superclass method (method hiding), it does not override it.
- **Final non-static methods** — a method declared `final` cannot be overridden because the keyword prevents changing the implementation, though it is inherited.
- **Private non-static methods** — private methods are not visible to subclasses (they are not inherited in a way that allows overriding) because private access is restricted to the class where they are declared.

---

## Method Overloading vs Overriding

| Feature | Overloading | Overriding |
|---------|------------|-----------|
| **Parameters** | Different | Same |
| **Inheritance** | Not required | Required |
| **Polymorphism** | Compile-time | Runtime |
| **Binding** | Early (static) | Late (dynamic) |
| **Return Type** | Can differ | Same or covariant |
| **Access Modifier** | Any | Same or wider |
| **@Override** | Not used | Recommended |

---

## Important Interview Questions

**Q1: What is Method Overriding?**

Child class provides specific implementation of parent's method with same signature. It's runtime polymorphism.

**Q2: Difference between Overloading and Overriding?**

- **Overloading**: Same name, different parameters, compile-time
- **Overriding**: Same signature, different implementation, runtime

**Q3: Can we override static methods?**

No! Static methods are hidden, not overridden. They belong to class, not object.

**Q4: Can we override private methods?**

No! Private methods are not inherited, so cannot be overridden.

**Q5: What is the purpose of @Override annotation?**

Compile-time checking to ensure method actually overrides parent method. Catches typos and signature mismatches.

---

## Short Recap

**Method Overriding**:
- Same signature, different implementation
- Runtime polymorphism (dynamic binding)
- Requires inheritance
- Enables polymorphic behavior

**Rules**: Same or covariant return, same or wider access, cannot override private/final/static

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                            METHOD OVERRIDING                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   CONCEPT: Child class provides specific implementation of parent's method       ║
║                                                                                   ║
║   ╔════════════════════════════════╗       ╔════════════════════════════════╗    ║
║   ║         PARENT CLASS           ║       ║         CHILD CLASS            ║    ║
║   ╟────────────────────────────────╢       ╟────────────────────────────────╢    ║
║   ║  class Animal {                ║       ║  class Dog extends Animal {    ║    ║
║   ║                                ║       ║                                ║    ║
║   ║    void sound() {              ║       ║    @Override                   ║    ║
║   ║      print("Generic sound");   ║──────▶║    void sound() {              ║    ║
║   ║    }                           ║       ║      print("Woof Woof!");      ║    ║
║   ║  }                             ║       ║    }                           ║    ║
║   ╚════════════════════════════════╝       ║  }                             ║    ║
║                                            ╚════════════════════════════════╝    ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                         DYNAMIC METHOD DISPATCH                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   Animal a = new Dog();     // Parent reference, Child object                     ║
║   a.sound();                // Which method is called?                            ║
║                                                                                   ║
║       ┌──────────────────┐                                                        ║
║       │   COMPILE TIME   │──────▶ Checks: Does Animal have sound()? ✓            ║
║       └──────────────────┘                                                        ║
║                │                                                                  ║
║                ▼                                                                  ║
║       ┌──────────────────┐                                                        ║
║       │    RUN TIME      │──────▶ Checks: What is actual object type?            ║
║       └──────────────────┘                 Object is Dog → Call Dog.sound()      ║
║                │                                                                  ║
║                ▼                                                                  ║
║       ┌──────────────────┐                                                        ║
║       │ OUTPUT: "Woof!"  │        (Runtime Polymorphism!)                        ║
║       └──────────────────┘                                                        ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                              OVERRIDING RULES                                     ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌────────────────────────────────────────────────────────────────────────┐     ║
║   │                           MUST HAVE                                    │     ║
║   │  ✓ Same method name                                                    │     ║
║   │  ✓ Same parameters (number, type, order)                               │     ║
║   │  ✓ Same or covariant return type                                       │     ║
║   │  ✓ IS-A relationship (inheritance)                                     │     ║
║   └────────────────────────────────────────────────────────────────────────┘     ║
║                                                                                   ║
║   ACCESS MODIFIER RULES:                                                          ║
║   ══════════════════════                                                          ║
║                                                                                   ║
║   private ◀──── default ◀──── protected ◀──── public                             ║
║                        (Can only WIDEN, not narrow)                               ║
║                                                                                   ║
║   Parent: protected void show()                                                   ║
║   Child:  public void show()     ✓ OK (widened)                                  ║
║   Child:  private void show()    ✗ ERROR (narrowed)                              ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                           CANNOT OVERRIDE                                         ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔══════════════════╗   ╔══════════════════╗   ╔══════════════════╗             ║
║   ║  private methods ║   ║  final methods   ║   ║  static methods  ║             ║
║   ╟──────────────────╢   ╟──────────────────╢   ╟──────────────────╢             ║
║   ║  Not inherited   ║   ║  Cannot modify   ║   ║  Method Hiding   ║             ║
║   ║  (not visible)   ║   ║  (locked)        ║   ║  (not override)  ║             ║
║   ╚══════════════════╝   ╚══════════════════╝   ╚══════════════════╝             ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                    OVERLOADING vs OVERRIDING                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────────┬─────────────────────┬─────────────────────┐            ║
║   │      Feature        │     Overloading     │     Overriding      │            ║
║   ├─────────────────────┼─────────────────────┼─────────────────────┤            ║
║   │ Parameters          │    Different        │    Same             │            ║
║   │ Inheritance needed  │    No               │    Yes              │            ║
║   │ Polymorphism        │    Compile-time     │    Runtime          │            ║
║   │ Binding             │    Static (Early)   │    Dynamic (Late)   │            ║
║   └─────────────────────┴─────────────────────┴─────────────────────┘            ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
