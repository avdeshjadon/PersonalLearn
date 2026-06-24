# POLYMORPHISM

## Concept Introduction

**Polymorphism** do Greek words se bana hai: **"Poly" (Many)** aur **"Morph" (Forms)**.
Meaning: **"One thing, many forms"**.

### English Definition
Polymorphism is the ability of an object to take many forms. It allows one interface to be used for different data types or one method to perform different tasks.
*   **Core Idea:** "Same Interface, Different Implementation".

### Hinglish Explanation
Jab ek single method ya object alag-alag situations mein alag-alag tarah se behave karta hai, use hum Polymorphism kehte hain.

### Real Life Analogies
1.  **Person Example:** Ek insaan alag-alag roles play karta hai. Office mein wo **Employee** hai, Ghar pe **Father** hai. (Same person, different behaviors).
2.  **Phone Button Example:** Volume button Music app mein **Volume** control karta hai, Camera mein **Click** karta hai. (Same button, different functions).

---

## Why Polymorphism Exists

### The Problem
Bina polymorphism, har different behavior ke liye alag method name:

```java
class Calculator {
    int addTwoNumbers(int a, int b) { return a + b; }
    int addThreeNumbers(int a, int b, int c) { return a + b + c; }
    double addTwoDecimals(double a, double b) { return a + b; }
}
```

### The Solution
**Same method name, different parameters or implementations**:

```java
class Calculator {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    double add(double a, double b) { return a + b; }
}
```

---

## Definitions

### Very Simple Definition
Ek hi method name, multiple forms mein kaam kar sakta hai.

### Simple Definition
Polymorphism is the ability of an object to take many forms. It allows one interface to be used for different data types or one method to perform different tasks.

### College Exam Definition
Polymorphism is an OOPs concept where a single entity (method or object) can take multiple forms. It enables one interface to be used for a general class of actions, with specific action determined by the exact nature of the situation. Java supports two types: Compile-time (Method Overloading, Operator Overloading) and Runtime (Method Overriding).

### Interview Definition
Polymorphism is the ability of an object or method to take many forms, allowing a single interface to represent different underlying forms (data types or classes). In Java, it's achieved through method overloading (compile-time/static polymorphism) where multiple methods have the same name but different parameters, and method overriding (runtime/dynamic polymorphism) where a child class provides specific implementation of a method already defined in parent class. It enables flexibility, code reusability, and loose coupling through dynamic method dispatch.

### Deep Technical Definition
Polymorphism is an OOPs principle enabling a single entity to exhibit multiple behaviors based on context. Java implements two types: **Compile-time polymorphism** (static/early binding) resolved at compilation through method overloading (same method name, different signatures) and operator overloading (not explicit in Java); and **Runtime polymorphism** (dynamic/late binding) resolved at runtime through method overriding using inheritance, where method calls are resolved via dynamic method dispatch based on object type (not reference type), utilizing the virtual method table (vtable) for method lookup. Polymorphism enables the Liskov Substitution Principle, where parent references can hold child objects and invoke overridden methods polymorphically.

---

## Types of Polymorphism

### 1. Compile-Time Polymorphism (Static Binding)
- **Method Overloading**
- **Operator Overloading** (not in Java)

### 2. Runtime Polymorphism (Dynamic Binding)
- **Method Overriding**

---

## Method Overloading (Compile-Time Polymorphism)

### Definition
**Same method name, different parameters (number, type, or order)**

### Rules:
1. Same method name
2. Different parameters (number/type/order)
3. Return type can be same or different
4. In the same class

### Example 1: Different Number of Parameters

```java
class Calculator {
    // Method with 2 parameters
    int add(int a, int b) {
        return a + b;
    }
    
    // Method with 3 parameters
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method with 4 parameters
    int add(int a, int b, int c, int d) {
        return a + b + c + d;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        System.out.println(calc.add(10, 20));           // 30
        System.out.println(calc.add(10, 20, 30));       // 60
        System.out.println(calc.add(10, 20, 30, 40));   // 100
    }
}
```

### Example 2: Different Types of Parameters

```java
class Printer {
    void print(int a) {
        System.out.println("Integer: " + a);
    }
    
    void print(double a) {
        System.out.println("Double: " + a);
    }
    
    void print(String a) {
        System.out.println("String: " + a);
    }
    
    void print(boolean a) {
        System.out.println("Boolean: " + a);
    }
}

public class Main {
    public static void main(String[] args) {
        Printer p = new Printer();
        
        p.print(10);           // Integer: 10
        p.print(10.5);         // Double: 10.5
        p.print("Hello");      // String: Hello
        p.print(true);         // Boolean: true
    }
}
```

### Example 3: Different Order of Parameters

```java
class Display {
    void show(int a, String b) {
        System.out.println("Int: " + a + ", String: " + b);
    }
    
    void show(String a, int b) {
        System.out.println("String: " + a + ", Int: " + b);
    }
}

public class Main {
    public static void main(String[] args) {
        Display d = new Display();
        
        d.show(10, "Hello");      // Int: 10, String: Hello
        d.show("World", 20);      // String: World, Int: 20
    }
}
```

---

## Real-World Example: Method Overloading

```java
class WhatsApp {
    // Send text message
    void sendMessage(String message) {
        System.out.println("Sending text: " + message);
    }
    
    // Send image
    void sendMessage(String imagePath, String caption) {
        System.out.println("Sending image: " + imagePath);
        System.out.println("Caption: " + caption);
    }
    
    // Send video
    void sendMessage(String videoPath, int duration) {
        System.out.println("Sending video: " + videoPath);
        System.out.println("Duration: " + duration + " seconds");
    }
    
    // Send document
    void sendMessage(String docPath, double sizeMB) {
        System.out.println("Sending document: " + docPath);
        System.out.println("Size: " + sizeMB + " MB");
    }
}

public class Main {
    public static void main(String[] args) {
        WhatsApp wa = new WhatsApp();
        
        wa.sendMessage("Hello!");
        wa.sendMessage("photo.jpg", "Sunset view");
        wa.sendMessage("video.mp4", 45);
        wa.sendMessage("report.pdf", 2.5);
    }
}
```

---

## Method Overriding (Runtime Polymorphism)

### Definition
**Child class provides specific implementation of method already defined in parent class**

### Rules:
1. Inheritance required
2. Same method signature (name + parameters)
3. Same return type (or covariant)
4. Cannot override private/final/static methods
5. Access modifier: same or wider

### Basic Example

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks: Woof Woof!");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows: Meow Meow!");
    }
}

class Cow extends Animal {
    @Override
    void sound() {
        System.out.println("Cow moos: Mooo!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a;   // Parent reference
        
        a = new Dog();
        a.sound();  // Dog barks: Woof Woof!
        
        a = new Cat();
        a.sound();  // Cat meows: Meow Meow!
        
        a = new Cow();
        a.sound();  // Cow moos: Mooo!
    }
}
```

**Same method call sound(), different outputs based on object type!**

---

## Dynamic Method Dispatch

**Parent reference, Child object**

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
        Parent p = new Child();  // Parent reference, Child object
        p.display();             // Child display (Runtime decision)
    }
}
```

**Method called is determined at runtime based on object type, not reference type.**

---

## Real-World Example: Payment System

```java
class Payment {
    void processPayment(double amount) {
        System.out.println("Processing payment of ₹" + amount);
    }
}

class CreditCard extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing Credit Card payment of ₹" + amount);
        System.out.println("Charging 2% processing fee");
    }
}

class DebitCard extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing Debit Card payment of ₹" + amount);
        System.out.println("No processing fee");
    }
}

class UPI extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing UPI payment of ₹" + amount);
        System.out.println("Instant transfer");
    }
}

class NetBanking extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing Net Banking payment of ₹" + amount);
        System.out.println("Redirecting to bank portal");
    }
}

public class Main {
    public static void main(String[] args) {
        Payment payment;
        
        payment = new CreditCard();
        payment.processPayment(5000);
        
        System.out.println();
        
        payment = new DebitCard();
        payment.processPayment(3000);
        
        System.out.println();
        
        payment = new UPI();
        payment.processPayment(2000);
        
        System.out.println();
        
        payment = new NetBanking();
        payment.processPayment(10000);
    }
}
```

**Same interface processPayment(), different implementations!**

---

## Method Overloading vs Method Overriding

| Feature | Method Overloading | Method Overriding |
|---------|-------------------|-------------------|
| **Definition** | Same name, different parameters | Same signature, different implementation |
| **Occurs In** | Same class | Parent-child classes |
| **Polymorphism Type** | Compile-time (Static) | Runtime (Dynamic) |
| **Binding** | Early binding | Late binding |
| **Inheritance** | Not required | Required |
| **Parameters** | Must be different | Must be same |
| **Return Type** | Can be different | Same (or covariant) |
| **Access Modifier** | No restriction | Same or wider |
| **private/static/final** | Can overload | Cannot override |
| **@Override** | Not used | Used (optional but recommended) |

---

## Compile-Time vs Runtime Polymorphism

| Feature | Compile-Time | Runtime |
|---------|--------------|---------|
| **Also Known As** | Static Polymorphism | Dynamic Polymorphism |
| **Binding** | Early Binding | Late Binding |
| **Achieved By** | Method Overloading | Method Overriding |
| **When Resolved** | At compile time | At runtime |
| **Performance** | Faster | Slightly slower |
| **Flexibility** | Less flexible | More flexible |

---

## Important Rules

### Overloading Rules:
 Different number of parameters  
 Different types of parameters  
 Different order of parameters  
 Only return type different (NOT allowed)

```java
//  WRONG - Only return type different
int add(int a, int b) { }
double add(int a, int b) { }  // ERROR!
```

### Overriding Rules:
 Same method signature  
 Same or covariant return type  
 Same or wider access modifier  
 Cannot throw broader checked exceptions  
 Cannot override private/static/final methods

---

## Advantages of Polymorphism

| Advantage | Description |
|-----------|-------------|
| **Flexibility** | One interface, multiple implementations |
| **Code Reusability** | Same method name for similar operations |
| **Maintainability** | Easy to add new implementations |
| **Extensibility** | Easy to extend functionality |
| **Loose Coupling** | Parent reference, child objects |

---

## Important Interview Questions

**Q1: What is Polymorphism?**

Polymorphism means "many forms". It allows one entity (method/object) to take multiple forms. In Java, it's achieved through method overloading (compile-time) and method overriding (runtime).

**Q2: Types of Polymorphism in Java?**

1. **Compile-time (Static)**: Method Overloading
2. **Runtime (Dynamic)**: Method Overriding

**Q3: Difference between Overloading and Overriding?**

- **Overloading**: Same name, different parameters, same class, compile-time
- **Overriding**: Same signature, different implementation, parent-child, runtime

**Q4: Can we overload main method?**

Yes! But JVM will call only public static void main(String[] args).

```java
public static void main(String[] args) { }     // JVM calls this
public static void main(int a) { }             // Overloaded
public static void main(String a, int b) { }   // Overloaded
```

**Q5: Can we override static methods?**

No! Static methods belong to class, not object. They are hidden, not overridden.

---

## Short Recap

**Polymorphism = Many Forms**

**Two Types**:
1. **Compile-Time**: Method Overloading (same name, different parameters)
2. **Runtime**: Method Overriding (same signature, different implementation)

**Key Points**:
- Overloading: Same class, different parameters
- Overriding: Parent-child, same signature
- Runtime polymorphism uses dynamic method dispatch

**Real-World**: Phone button, Payment methods, Print function

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                            POLYMORPHISM                                          ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                      POLYMORPHISM CONCEPT                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                          POLY (Many) + MORPH (Forms)                             ║
║                          ═════════════════════════════                           ║
║                                                                                  ║
║                              ╔═════════════════╗                                 ║
║                              ║   POLYMORPHISM  ║                                 ║
║                              ║   (Many Forms)  ║                                 ║
║                              ╚════════╦════════╝                                 ║
║                                       ║                                          ║
║              ╔════════════════════════╩════════════════════════╗                 ║
║              ║                                                 ║                 ║
║              ▼                                                 ▼                 ║
║    ╔═════════════════════════╗                   ╔═════════════════════════╗     ║
║    ║    COMPILE-TIME         ║                   ║     RUNTIME             ║     ║
║    ║   (Static Binding)      ║                   ║   (Dynamic Binding)     ║     ║
║    ╠═════════════════════════╣                   ╠═════════════════════════╣     ║
║    ║                         ║                   ║                         ║     ║
║    ║  Method Overloading     ║                   ║  Method Overriding      ║     ║
║    ║                         ║                   ║                         ║     ║
║    ║  Same class             ║                   ║  Parent-Child           ║     ║
║    ║  Different parameters   ║                   ║  Same signature         ║     ║
║    ║  Resolved at compile    ║                   ║  Resolved at runtime    ║     ║
║    ║                         ║                   ║                         ║     ║
║    ╚═════════════════════════╝                   ╚═════════════════════════╝     ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                      METHOD OVERLOADING                                          ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                         class Calculator {                                       ║
║                                                                                  ║
║    ╔═══════════════════════════════════════════════════════════════════════╗     ║
║    ║  int add(int a, int b)                    // 2 int params             ║     ║
║    ╚═══════════════════════════════════════════════════════════════════════╝     ║
║                                    │                                             ║
║    ╔═══════════════════════════════════════════════════════════════════════╗     ║
║    ║  int add(int a, int b, int c)             // 3 int params             ║     ║
║    ╚═══════════════════════════════════════════════════════════════════════╝     ║
║                                    │                                             ║
║    ╔═══════════════════════════════════════════════════════════════════════╗     ║
║    ║  double add(double a, double b)           // 2 double params          ║     ║
║    ╚═══════════════════════════════════════════════════════════════════════╝     ║
║                                                                                  ║
║                         }                                                        ║
║                                                                                  ║
║                                                                                  ║
║    SAME METHOD NAME ───────► DIFFERENT PARAMETERS                                ║
║    (add)                     (count, type, or order)                             ║
║                                                                                  ║
║    RESOLVED AT COMPILE-TIME based on method signature                            ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                      METHOD OVERRIDING                                           ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                        ╔══════════════════════════════╗                          ║
║                        ║       class Animal           ║                          ║
║                        ╠══════════════════════════════╣                          ║
║                        ║   void sound() {             ║                          ║
║                        ║     print("Animal sound")    ║                          ║
║                        ║   }                          ║                          ║
║                        ╚══════════════╦═══════════════╝                          ║
║                                       ║                                          ║
║              ╔════════════════════════╩════════════════════════╗                 ║
║              ║                                                 ║                 ║
║              ▼                                                 ▼                 ║
║    ╔══════════════════════════════╗          ╔══════════════════════════════╗    ║
║    ║      class Dog extends       ║          ║      class Cat extends       ║    ║
║    ╠══════════════════════════════╣          ╠══════════════════════════════╣    ║
║    ║   @Override                  ║          ║   @Override                  ║    ║
║    ║   void sound() {             ║          ║   void sound() {             ║    ║
║    ║     print("Bark!")           ║          ║     print("Meow!")           ║    ║
║    ║   }                          ║          ║   }                          ║    ║
║    ╚══════════════════════════════╝          ╚══════════════════════════════╝    ║
║                                                                                  ║
║                                                                                  ║
║    Animal a = new Dog();                                                         ║
║    a.sound();   ─────────►   Output: "Bark!"                                     ║
║                              (Dog's method called)                               ║
║                                                                                  ║
║    Animal b = new Cat();                                                         ║
║    b.sound();   ─────────►   Output: "Meow!"                                     ║
║                              (Cat's method called)                               ║
║                                                                                  ║
║    RESOLVED AT RUNTIME based on actual object type                               ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                  OVERLOADING VS OVERRIDING                                       ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║         OVERLOADING                              OVERRIDING                      ║
║   ╔═════════════════════════╗            ╔═════════════════════════╗             ║
║   ║  Same method name       ║            ║  Same method signature  ║             ║
║   ║  Different parameters   ║            ║  Different class        ║             ║
║   ╠═════════════════════════╣            ╠═════════════════════════╣             ║
║   ║  Same class             ║            ║  Parent-Child relation  ║             ║
║   ╠═════════════════════════╣            ╠═════════════════════════╣             ║
║   ║  Compile-time binding   ║            ║  Runtime binding        ║             ║
║   ╠═════════════════════════╣            ╠═════════════════════════╣             ║
║   ║  Also called:           ║            ║  Also called:           ║             ║
║   ║  Static Polymorphism    ║            ║  Dynamic Polymorphism   ║             ║
║   ╠═════════════════════════╣            ╠═════════════════════════╣             ║
║   ║  Return type:           ║            ║  Return type:           ║             ║
║   ║  Can be different       ║            ║  Same or covariant      ║             ║
║   ╚═════════════════════════╝            ╚═════════════════════════╝             ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                       REAL WORLD EXAMPLE                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                              PAYMENT SYSTEM                                      ║
║                                                                                  ║
║                         ╔═══════════════════════╗                                ║
║                         ║    interface Payment  ║                                ║
║                         ╠═══════════════════════╣                                ║
║                         ║   void pay(amount)    ║                                ║
║                         ╚═══════════╦═══════════╝                                ║
║                                     ║                                            ║
║            ╔════════════════════════╬════════════════════════╗                   ║
║            ║                        ║                        ║                   ║
║            ▼                        ▼                        ▼                   ║
║   ╔════════════════════╗  ╔════════════════════╗  ╔════════════════════╗         ║
║   ║    CreditCard      ║  ║      UPI           ║  ║    NetBanking      ║         ║
║   ╠════════════════════╣  ╠════════════════════╣  ╠════════════════════╣         ║
║   ║   pay(amount) {    ║  ║   pay(amount) {    ║  ║   pay(amount) {    ║         ║
║   ║     // Card logic  ║  ║     // UPI logic   ║  ║     // Bank logic  ║         ║
║   ║   }                ║  ║   }                ║  ║   }                ║         ║
║   ╚════════════════════╝  ╚════════════════════╝  ╚════════════════════╝         ║
║                                                                                  ║
║                                                                                  ║
║   Payment p = getPaymentMethod();  // Could be any type                          ║
║   p.pay(1000);                     // Correct method called at runtime           ║
║                                                                                  ║
║   ONE INTERFACE, MULTIPLE IMPLEMENTATIONS                                        ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
