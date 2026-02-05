# RUNTIME POLYMORPHISM

## Concept Introduction

**Runtime Polymorphism** mein method ka decision **runtime** par hota hai - jab program chal raha ho. Yeh **method overriding** se achieve hoti hai jahan child class parent class ke method ko **override** karti hai. 

**Runtime Polymorphism = Dynamic Binding = Late Binding = Method Overriding**

Parent class ka reference, child class ke object ko point kare (**upcasting**), aur runtime par decide ho ki kaunsa method call hoga.

---

## Why This Concept Exists

### Problem: Fixed Behavior

```java
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

Animal animal = new Animal();
animal.sound();  // Always calls Animal's sound
```

**Limited** - Ek hi behavior.

### Solution: Runtime Polymorphism

```java
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

// Same reference type, different object types
Animal animal1 = new Dog();   // Upcasting
Animal animal2 = new Cat();   // Upcasting

animal1.sound();  // Dog barks (Runtime decision)
animal2.sound();  // Cat meows (Runtime decision)
```

---

## Definitions

### Very Simple Definition
Runtime polymorphism matlab method overriding jahan parent reference child object ko point kare aur runtime par method decide ho.

### Simple Definition
Runtime polymorphism is achieved through method overriding where a child class provides a specific implementation of a method already defined in its parent class. The method to be called is determined at runtime based on the object type.

### College Exam Definition
Runtime polymorphism, also known as dynamic polymorphism or late binding, occurs when a subclass overrides a method from its superclass. The appropriate method is selected at runtime based on the actual object type, not the reference type. It is implemented through method overriding and requires inheritance.

### Technical Definition
Runtime polymorphism is a mechanism where a method call is resolved at runtime through dynamic method dispatch. When a parent class reference points to a child class object (upcasting), the overridden method in the child class is invoked based on the actual object type, not the reference type. This enables dynamic binding where the JVM determines which method to execute during runtime, supporting the Open/Closed Principle and enabling flexible, extensible code.

### Interview Definition
Runtime polymorphism (dynamic polymorphism/late binding) is achieved through method overriding in Java. When a parent class reference variable holds a child class object, the method called is determined at runtime based on the actual object type, not the reference type. Key requirements: (1) Inheritance relationship, (2) Method overriding (same signature in parent and child), (3) Upcasting (parent reference = child object). The JVM uses virtual method invocation (dynamic dispatch) to determine which method to execute. Benefits include: flexibility, extensibility, support for polymorphic behavior, and implementation of design patterns. Cannot override: static methods (method hiding instead), final methods, private methods.

---

## Method Overriding

### Basic Example

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override  // Annotation for clarity (optional but recommended)
    void sound() {
        System.out.println("Dog barks: Woof Woof");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows: Meow Meow");
    }
}

class Cow extends Animal {
    @Override
    void sound() {
        System.out.println("Cow moos: Moo Moo");
    }
}

public class Main {
    public static void main(String[] args) {
        // Compile-time type: Animal
        // Runtime type: Different
        
        Animal animal1 = new Dog();   // Upcasting
        Animal animal2 = new Cat();   // Upcasting
        Animal animal3 = new Cow();   // Upcasting
        
        animal1.sound();  // Runtime: Calls Dog's sound
        animal2.sound();  // Runtime: Calls Cat's sound
        animal3.sound();  // Runtime: Calls Cow's sound
    }
}
```

**Output:**
```
Dog barks: Woof Woof
Cat meows: Meow Meow
Cow moos: Moo Moo
```

---

## Rules for Method Overriding

### Rule 1: Same Method Signature

```java
class Parent {
    void display(int a) { }
}

class Child extends Parent {
    @Override
    void display(int a) { }  // ✓ Same signature
}
```

### Rule 2: IS-A Relationship Required

```java
class Parent { }
class Child extends Parent { }  // Inheritance required
```

### Rule 3: Access Modifier - Cannot Be More Restrictive

```java
class Parent {
    protected void show() { }
}

class Child extends Parent {
    public void show() { }     // ✓ Less restrictive OK
    // private void show() { }  // ❌ More restrictive NOT OK
}
```

### Rule 4: Cannot Override static, final, or private Methods

```java
class Parent {
    static void method1() { }    // Cannot override (method hiding instead)
    final void method2() { }     // Cannot override
    private void method3() { }   // Cannot override (not inherited)
}
```

### Rule 5: Return Type - Covariant Return Types Allowed

```java
class Animal { }
class Dog extends Animal { }

class Parent {
    Animal getAnimal() {
        return new Animal();
    }
}

class Child extends Parent {
    @Override
    Dog getAnimal() {  // ✓ Covariant return type
        return new Dog();
    }
}
```

---

## Upcasting and Downcasting

### Upcasting (Automatic)

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        // Upcasting - Automatic
        Animal animal = new Dog();  // Parent reference = Child object
        
        animal.eat();   // ✓ Can call parent methods
        // animal.bark();  // ❌ Cannot call child-specific methods
    }
}
```

---

### Downcasting (Explicit)

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();  // Upcasting
        
        // Downcasting - Explicit
        Dog dog = (Dog) animal;
        dog.bark();  // ✓ Now can call bark()
        
        // Unsafe downcasting
        Animal animal2 = new Animal();
        // Dog dog2 = (Dog) animal2;  // ❌ ClassCastException at runtime
    }
}
```

---

## Real-World Example: Payment System

```java
// Parent class
abstract class Payment {
    String transactionId;
    double amount;
    
    Payment(String id, double amount) {
        this.transactionId = id;
        this.amount = amount;
    }
    
    // Method to be overridden
    void processPayment() {
        System.out.println("Processing payment...");
    }
    
    void displayDetails() {
        System.out.println("Transaction ID: " + transactionId);
        System.out.println("Amount: ₹" + amount);
    }
}

// Child class 1
class CreditCardPayment extends Payment {
    String cardNumber;
    
    CreditCardPayment(String id, double amount, String card) {
        super(id, amount);
        this.cardNumber = card;
    }
    
    @Override
    void processPayment() {
        System.out.println("Processing Credit Card Payment");
        System.out.println("Card: " + cardNumber);
        System.out.println("Amount: ₹" + amount);
        System.out.println("Payment Successful!\n");
    }
}

// Child class 2
class UpiPayment extends Payment {
    String upiId;
    
    UpiPayment(String id, double amount, String upi) {
        super(id, amount);
        this.upiId = upi;
    }
    
    @Override
    void processPayment() {
        System.out.println("Processing UPI Payment");
        System.out.println("UPI ID: " + upiId);
        System.out.println("Amount: ₹" + amount);
        System.out.println("Payment Successful!\n");
    }
}

// Child class 3
class NetBankingPayment extends Payment {
    String bankName;
    
    NetBankingPayment(String id, double amount, String bank) {
        super(id, amount);
        this.bankName = bank;
    }
    
    @Override
    void processPayment() {
        System.out.println("Processing Net Banking Payment");
        System.out.println("Bank: " + bankName);
        System.out.println("Amount: ₹" + amount);
        System.out.println("Payment Successful!\n");
    }
}

// Payment Gateway
class PaymentGateway {
    void executePayment(Payment payment) {  // Parent reference parameter
        payment.processPayment();  // Runtime polymorphism
    }
}

public class Main {
    public static void main(String[] args) {
        PaymentGateway gateway = new PaymentGateway();
        
        // Different payment objects
        Payment p1 = new CreditCardPayment("TXN001", 5000, "**** 1234");
        Payment p2 = new UpiPayment("TXN002", 3000, "user@paytm");
        Payment p3 = new NetBankingPayment("TXN003", 10000, "HDFC Bank");
        
        // Same method call, different behavior at runtime
        gateway.executePayment(p1);
        gateway.executePayment(p2);
        gateway.executePayment(p3);
    }
}
```

**Output:**
```
Processing Credit Card Payment
Card: **** 1234
Amount: ₹5000.0
Payment Successful!

Processing UPI Payment
UPI ID: user@paytm
Amount: ₹3000.0
Payment Successful!

Processing Net Banking Payment
Bank: HDFC Bank
Amount: ₹10000.0
Payment Successful!
```

---

## Dynamic Method Dispatch

```java
class Shape {
    void draw() {
        System.out.println("Drawing Shape");
    }
    
    void area() {
        System.out.println("Calculating area");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Circle");
    }
    
    @Override
    void area() {
        System.out.println("Area = π * r²");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Rectangle");
    }
    
    @Override
    void area() {
        System.out.println("Area = length * width");
    }
}

class Triangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Triangle");
    }
    
    @Override
    void area() {
        System.out.println("Area = 1/2 * base * height");
    }
}

public class Main {
    public static void main(String[] args) {
        // Array of parent type
        Shape[] shapes = new Shape[3];
        
        shapes[0] = new Circle();
        shapes[1] = new Rectangle();
        shapes[2] = new Triangle();
        
        // Loop through and call methods
        for (Shape shape : shapes) {
            shape.draw();
            shape.area();
            System.out.println();
        }
    }
}
```

**Output:**
```
Drawing Circle
Area = π * r²

Drawing Rectangle
Area = length * width

Drawing Triangle
Area = 1/2 * base * height
```

---

## instanceof Operator

```java
class Animal { }
class Dog extends Animal { }
class Cat extends Animal { }

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        
        // Check type before downcasting
        if (animal instanceof Dog) {
            Dog dog = (Dog) animal;
            System.out.println("It's a Dog");
        } else if (animal instanceof Cat) {
            Cat cat = (Cat) animal;
            System.out.println("It's a Cat");
        }
    }
}
```

---

## Comparison: Compile-Time vs Runtime Polymorphism

| Feature | Compile-Time | Runtime |
|---------|--------------|---------|
| **Also Known As** | Static, Early Binding | Dynamic, Late Binding |
| **Achieved By** | Method Overloading | Method Overriding |
| **When Decided** | Compile time | Runtime |
| **Inheritance** | Not required | Required |
| **Method Name** | Same | Same |
| **Parameters** | Different | Same |
| **Performance** | Faster | Slightly slower |
| **Binding** | Static | Dynamic |
| **Example** | add(int, int), add(double, double) | Parent ref = new Child() |

---

## Benefits of Runtime Polymorphism

| Benefit | Description |
|---------|-------------|
| **Flexibility** | Same interface, different implementations |
| **Extensibility** | Easy to add new subclasses |
| **Code Reusability** | Common interface for different objects |
| **Maintainability** | Changes localized to specific classes |
| **Design Patterns** | Enables Strategy, Factory, Template patterns |
| **Open/Closed Principle** | Open for extension, closed for modification |

---

## Important Interview Questions

**Q1: What is runtime polymorphism?**

Runtime polymorphism is achieved through method overriding where the method to be called is determined at runtime based on the actual object type, not the reference type. It requires inheritance and enables dynamic binding.

**Q2: How is runtime polymorphism achieved?**

Through method overriding in an inheritance hierarchy, where a parent class reference points to a child class object (upcasting), and the overridden method in the child class is called at runtime.

**Q3: Difference between method overloading and overriding?**

- **Overloading**: Same name, different parameters, compile-time, same class
- **Overriding**: Same signature, runtime, requires inheritance

**Q4: What is upcasting and downcasting?**

- **Upcasting**: Child object → Parent reference (automatic, safe)
- **Downcasting**: Parent reference → Child object (explicit, can throw ClassCastException)

**Q5: Can we override static methods?**

No, static methods cannot be overridden. They can be hidden (method hiding), but it's not polymorphic behavior.

**Q6: Can we override private methods?**

No, private methods are not inherited, so they cannot be overridden.

**Q7: What is dynamic method dispatch?**

Dynamic method dispatch is the mechanism by which a call to an overridden method is resolved at runtime. The JVM determines which method to execute based on the actual object type.

**Q8: Why is runtime polymorphism important?**

It enables writing flexible, maintainable, and extensible code by allowing different implementations through a common interface, supporting the Open/Closed Principle.

---

## Short Recap

**Runtime Polymorphism** = Method Overriding = Dynamic Binding = Late Binding

**Key Points:**
- Achieved through **method overriding**
- Requires **inheritance**
- Method decided at **runtime** based on **object type**
- Parent reference, child object (**upcasting**)
- Enables **polymorphic behavior**

**Benefits:** Flexibility, extensibility, maintainability

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                       RUNTIME POLYMORPHISM                                    ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║                     COMPILE TIME                                              ║
║                        ↓                                                      ║
║             Animal animal = new Dog();                                        ║
║             Reference Type = Animal                                           ║
║                        ↓                                                      ║
║                     RUNTIME                                                   ║
║                        ↓                                                      ║
║             JVM checks actual object type                                     ║
║             Object Type = Dog                                                 ║
║                        ↓                                                      ║
║             Calls Dog's overridden method                                     ║
║                        ↓                                                      ║
║             DYNAMIC METHOD DISPATCH                                           ║
║                                                                               ║
║   ┌────────────┐                                                              ║
║   │   Animal   │  ← Reference (Compile-time)                                 ║
║   └─────┬──────┘                                                              ║
║         │                                                                     ║
║         ↓                                                                     ║
║   ┌────────────┐                                                              ║
║   │    Dog     │  ← Object (Runtime)                                         ║
║   └────────────┘                                                              ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
