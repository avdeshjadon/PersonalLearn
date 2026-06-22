# DEFAULT METHODS IN INTERFACE

## Concept Introduction

**Java 8** se pehle, interface mein sirf abstract methods ho sakte the. Par Java 8 mein **default methods** introduce hue - yeh methods interface mein hi **implementation** ke saath define hote hain.

**Default Method = Interface method with implementation (Java 8+)**

Implementing class ko implement karna **optional** hai - agar nahi implement kiya to default implementation use hogi.

---

## Why This Concept Exists

### Problem Before Java 8

```java
interface Vehicle {
    void start();
    void stop();
}

// 1000 classes implement this interface

// Now we want to add new method
interface Vehicle {
    void start();
    void stop();
    void honk();  // ❌ Problem: 1000 classes will break!
}
```

**Issue:** Adding new method breaks all implementing classes.

### Solution: Default Methods

```java
interface Vehicle {
    void start();
    void stop();
    
    // Default method - won't break existing implementations
    default void honk() {
        System.out.println("Honk! Honk!");
    }
}
```

---

## Definitions

### Very Simple Definition
Default method matlab interface mein implementation ke saath method jo child class ko override karna optional hai.

### Simple Definition
Default methods (Java 8+) are methods in interfaces that have a default implementation. Implementing classes can use the default implementation or override it.

### College Exam Definition
Default methods, introduced in Java 8, allow interfaces to have methods with concrete implementation using the default keyword. These methods provide backward compatibility when adding new methods to existing interfaces, as implementing classes are not forced to provide an implementation.

### Technical Definition
Default methods are instance methods declared in interfaces with the default modifier and a complete implementation. They were introduced in Java 8 to enable interface evolution without breaking existing implementations. Implementing classes inherit default methods and can optionally override them. Default methods can access other interface methods and constants, enabling behavioral composition. They resolve the interface rigidity problem while maintaining backward compatibility with existing code.

### Interview Definition
Default methods (Java 8+) are methods in interfaces with implementations, declared using the default keyword. Key features: (1) Have implementation in interface, (2) Implementing class can use as-is or override, (3) Enable backward compatibility when evolving interfaces, (4) Can call other interface methods, (5) Cannot be final, synchronized, or native, (6) Diamond problem can occur with multiple interfaces having same default method (must override in class). Benefits: Interface evolution, code reuse, optional behavior. Used extensively in Java 8+ APIs (Collection.stream(), List.sort()).

---

## Creating Default Methods

### Syntax

```java
interface InterfaceName {
    // Regular abstract method
    void abstractMethod();
    
    // Default method with implementation
    default void defaultMethod() {
        // implementation
    }
}
```

### Basic Example

```java
interface Vehicle {
    // Abstract methods
    void start();
    void stop();
    
    // Default method
    default void honk() {
        System.out.println("Honk! Honk!");
    }
    
    default void displayInfo() {
        System.out.println("This is a vehicle");
    }
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }
    
    public void stop() {
        System.out.println("Car stopped");
    }
    
    // honk() not overridden - will use default
    // displayInfo() not overridden - will use default
}

class Bike implements Vehicle {
    public void start() {
        System.out.println("Bike started");
    }
    
    public void stop() {
        System.out.println("Bike stopped");
    }
    
    // Override default method
    @Override
    public void honk() {
        System.out.println("Beep! Beep!");
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Car:");
        Vehicle car = new Car();
        car.start();
        car.honk();        // Uses default implementation
        car.displayInfo(); // Uses default implementation
        
        System.out.println("\nBike:");
        Vehicle bike = new Bike();
        bike.start();
        bike.honk();       // Uses overridden implementation
        bike.displayInfo();// Uses default implementation
    }
}
```

**Output:**
```
Car:
Car started
Honk! Honk!
This is a vehicle

Bike:
Bike started
Beep! Beep!
This is a vehicle
```

---

## Real-World Example: Payment Interface Evolution

### Before Java 8 (Problem)

```java
// Original interface (2010)
interface Payment {
    void processPayment();
}

// 100 classes implement this
class CreditCard implements Payment {
    public void processPayment() {
        System.out.println("Credit card payment");
    }
}

// 2015: Need to add logging
// Problem: Can't add without breaking 100 classes!
```

---

### With Java 8 (Solution)

```java
interface Payment {
    void processPayment();
    
    // Default method - backward compatible!
    default void logPayment() {
        System.out.println("Payment logged at: " + java.time.LocalDateTime.now());
    }
    
    default void sendConfirmation() {
        System.out.println("Payment confirmation sent");
    }
}

// Old classes still work
class CreditCard implements Payment {
    public void processPayment() {
        System.out.println("Processing credit card payment");
    }
    // logPayment() and sendConfirmation() available automatically
}

// New classes can override if needed
class UpiPayment implements Payment {
    public void processPayment() {
        System.out.println("Processing UPI payment");
    }
    
    @Override
    public void logPayment() {
        System.out.println("UPI payment logged in database");
    }
}

public class Main {
    public static void main(String[] args) {
        Payment cc = new CreditCard();
        cc.processPayment();
        cc.logPayment();       // Uses default
        cc.sendConfirmation(); // Uses default
        
        System.out.println();
        
        Payment upi = new UpiPayment();
        upi.processPayment();
        upi.logPayment();      // Uses overridden
        upi.sendConfirmation();// Uses default
    }
}
```

---

## Calling Other Interface Methods

```java
interface Calculator {
    // Abstract methods
    int add(int a, int b);
    int multiply(int a, int b);
    
    // Default method using other interface methods
    default int calculate(int a, int b, String operation) {
        switch (operation) {
            case "add":
                return add(a, b);
            case "multiply":
                return multiply(a, b);
            default:
                return 0;
        }
    }
    
    default void displayResult(int a, int b, String op) {
        int result = calculate(a, b, op);
        System.out.println("Result of " + op + ": " + result);
    }
}

class SimpleCalculator implements Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int multiply(int a, int b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new SimpleCalculator();
        calc.displayResult(10, 5, "add");      // Uses default method
        calc.displayResult(10, 5, "multiply"); // Uses default method
    }
}
```

**Output:**
```
Result of add: 15
Result of multiply: 50
```

---

## Diamond Problem with Default Methods

### Problem

```java
interface A {
    default void show() {
        System.out.println("A's show");
    }
}

interface B {
    default void show() {
        System.out.println("B's show");
    }
}

// Which show() to use?
class C implements A, B {
    // ❌ Compilation error: Must override show()
}
```

---

### Solution: Override in Class

```java
interface A {
    default void show() {
        System.out.println("A's show");
    }
}

interface B {
    default void show() {
        System.out.println("B's show");
    }
}

class C implements A, B {
    // Must override to resolve conflict
    @Override
    public void show() {
        // Option 1: Provide own implementation
        System.out.println("C's show");
        
        // Option 2: Call specific interface's default
        // A.super.show();  // Call A's version
        // B.super.show();  // Call B's version
    }
}

public class Main {
    public static void main(String[] args) {
        C obj = new C();
        obj.show();
    }
}
```

**Output:**
```
C's show
```

---

### Calling Specific Interface's Default Method

```java
interface A {
    default void display() {
        System.out.println("A's display");
    }
}

interface B {
    default void display() {
        System.out.println("B's display");
    }
}

class C implements A, B {
    @Override
    public void display() {
        // Call A's default method
        A.super.display();
        
        // Call B's default method
        B.super.display();
        
        // Own logic
        System.out.println("C's display");
    }
}

public class Main {
    public static void main(String[] args) {
        C obj = new C();
        obj.display();
    }
}
```

**Output:**
```
A's display
B's display
C's display
```

---

## Java Collections Example

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");
        
        // forEach() is a default method in Iterable interface (Java 8)
        list.forEach(item -> System.out.println(item));
        
        System.out.println();
        
        // removeIf() is a default method in Collection interface (Java 8)
        list.removeIf(item -> item.length() < 4);
        list.forEach(System.out::println);
    }
}
```

**Output:**
```
Java
Python
C++

Java
Python
```

---

## Rules for Default Methods

| Rule | Description | Example |
|------|-------------|---------|
| **default keyword** | Must use default keyword | `default void method() { }` |
| **Implementation** | Must have implementation | Cannot be abstract |
| **Override** | Optional for implementing class | Can override or use as-is |
| **Access** | Always public | `default public void method()` |
| **Cannot be** | final, synchronized, native | Compilation error |
| **Diamond Problem** | Must resolve conflicts | Override in class |
| **Call super** | Use Interface.super.method() | `A.super.method()` |

---

## Benefits of Default Methods

| Benefit | Description |
|---------|-------------|
| **Backward Compatibility** | Add methods without breaking existing code |
| **Interface Evolution** | Safely evolve interfaces over time |
| **Code Reuse** | Share implementation across implementations |
| **Optional Behavior** | Provide default behavior that can be overridden |
| **API Enhancement** | Enhance APIs without version breaks |

---

## Important Interview Questions

**Q1: What are default methods in Java?**

Default methods are methods in interfaces (Java 8+) that have an implementation, declared with the default keyword. Implementing classes can use the default implementation or override it.

**Q2: Why were default methods introduced?**

To enable backward compatibility and interface evolution. When adding new methods to existing interfaces, default methods prevent breaking all implementing classes.

**Q3: Can we have variables in default methods?**

Yes, default methods can have local variables but not instance variables (interfaces can't have instance variables).

**Q4: What is the diamond problem with default methods?**

When a class implements two interfaces with the same default method, there's ambiguity. The class must override the method to resolve the conflict.

**Q5: How to call a specific interface's default method?**

Use `InterfaceName.super.methodName()` syntax. Example: `A.super.show()`.

**Q6: Can default methods be final?**

No, default methods cannot be final, synchronized, or native.

**Q7: Difference between default method and abstract method in interface?**

- **Abstract method**: No implementation, must be implemented by class
- **Default method**: Has implementation, optional to override

**Q8: Can we override default methods?**

Yes, implementing classes can override default methods just like regular methods.

---

## Short Recap

**Default Methods** = Interface methods with implementation (Java 8+)

**Key Points:**
- Use **default** keyword
- Have **implementation**
- **Optional** to override
- Enable **backward compatibility**
- Can call other interface methods
- **Diamond problem** can occur (must resolve)

**Syntax:** `default void method() { // implementation }`

**Benefits:** Interface evolution, code reuse, backward compatibility

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                        DEFAULT METHODS IN INTERFACE                              ║
╚══════════════════════════════════════════════════════════════════════════════════╝

                              ╔═══════════════════╗
                              ║  WHAT ARE         ║
                              ║  DEFAULT METHODS? ║
                              ╚═════════╦═════════╝
                                        ║
                                        ▼
                    ╔═══════════════════════════════════════╗
                    ║  Interface methods with IMPLEMENTATION ║
                    ║  Introduced in Java 8                  ║
                    ║  Optional to override                  ║
                    ╚═══════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    BEFORE vs AFTER JAVA 8                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    ❌ BEFORE JAVA 8                                   ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   interface Vehicle {                                                 ║      ║
║   ║       void start();                                                   ║      ║
║   ║       void stop();                                                    ║      ║
║   ║   }                                                                   ║      ║
║   ║                                                                       ║      ║
║   ║   // 1000 classes implement Vehicle...                                ║      ║
║   ║                                                                       ║      ║
║   ║   // Now we want to add honk() method...                              ║      ║
║   ║   interface Vehicle {                                                 ║      ║
║   ║       void start();                                                   ║      ║
║   ║       void stop();                                                    ║      ║
║   ║       void honk();   ←── ALL 1000 CLASSES BREAK! ❌                   ║      ║
║   ║   }                                                                   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    ✓ JAVA 8+ (DEFAULT METHODS)                        ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   interface Vehicle {                                                 ║      ║
║   ║       void start();                                                   ║      ║
║   ║       void stop();                                                    ║      ║
║   ║                                                                       ║      ║
║   ║       default void honk() {   ←── HAS IMPLEMENTATION!                 ║      ║
║   ║           System.out.println("Honk! Honk!");                          ║      ║
║   ║       }                                                               ║      ║
║   ║   }                                                                   ║      ║
║   ║                                                                       ║      ║
║   ║   // All 1000 classes still work! ✓                                   ║      ║
║   ║   // They inherit honk() automatically                                ║      ║
║   ║   // They can override if they want                                   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    DEFAULT METHOD SYNTAX                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                                                                       ║      ║
║   ║   interface MyInterface {                                             ║      ║
║   ║                                                                       ║      ║
║   ║       // Abstract method (no body)                                    ║      ║
║   ║       void abstractMethod();                                          ║      ║
║   ║                                                                       ║      ║
║   ║       // Default method (HAS body)                                    ║      ║
║   ║       default void defaultMethod() {                                  ║      ║
║   ║           System.out.println("Default implementation");               ║      ║
║   ║       }                                                               ║      ║
║   ║                                                                       ║      ║
║   ║       // Static method (HAS body)                                     ║      ║
║   ║       static void staticMethod() {                                    ║      ║
║   ║           System.out.println("Static in interface");                  ║      ║
║   ║       }                                                               ║      ║
║   ║   }                                                                   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    IMPLEMENTING CLASS OPTIONS                                    ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                        ╔═════════════════════════╗                               ║
║                        ║   interface Vehicle     ║                               ║
║                        ║   + start() abstract    ║                               ║
║                        ║   + stop() abstract     ║                               ║
║                        ║   + honk() default      ║                               ║
║                        ╚═══════════╦═════════════╝                               ║
║                                    │                                             ║
║                                implements                                        ║
║                                    │                                             ║
║              ╔═════════════════════╬═════════════════════╗                       ║
║              ▼                     ▼                     ▼                       ║
║   ╔════════════════════╗ ╔════════════════════╗ ╔════════════════════╗          ║
║   ║       Car          ║ ║       Bike         ║ ║       Truck        ║          ║
║   ╠════════════════════╣ ╠════════════════════╣ ╠════════════════════╣          ║
║   ║ start() ✓ Required ║ ║ start() ✓ Required ║ ║ start() ✓ Required ║          ║
║   ║ stop()  ✓ Required ║ ║ stop()  ✓ Required ║ ║ stop()  ✓ Required ║          ║
║   ║ honk()  → Inherited║ ║ honk()  → Inherited║ ║ honk()  → Override ║          ║
║   ║         (default)  ║ ║         (default)  ║ ║  "LOUD HONK!"      ║          ║
║   ╚════════════════════╝ ╚════════════════════╝ ╚════════════════════╝          ║
║                                                                                  ║
║   Abstract methods → MUST implement                                              ║
║   Default methods  → CAN use as-is OR override                                   ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    DIAMOND PROBLEM                                               ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║         ╔═══════════════════╗           ╔═══════════════════╗                    ║
║         ║   interface A     ║           ║   interface B     ║                    ║
║         ║  default show() { ║           ║  default show() { ║                    ║
║         ║    "A's show"     ║           ║    "B's show"     ║                    ║
║         ║  }                ║           ║  }                ║                    ║
║         ╚═════════╦═════════╝           ╚═════════╦═════════╝                    ║
║                   │                               │                              ║
║                   └───────────────┬───────────────┘                              ║
║                                   │                                              ║
║                                   ▼                                              ║
║                         ╔═══════════════════╗                                    ║
║                         ║   class MyClass   ║                                    ║
║                         ║   implements A, B ║                                    ║
║                         ╚═══════════════════╝                                    ║
║                                   │                                              ║
║                                   ▼                                              ║
║                    ┌──────────────────────────────┐                              ║
║                    │  CONFLICT! Which show()?    │                              ║
║                    │  A's show() or B's show()?  │                              ║
║                    └──────────────────────────────┘                              ║
║                                   │                                              ║
║                                   ▼                                              ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║  SOLUTION: MUST override in MyClass                                   ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║  class MyClass implements A, B {                                      ║      ║
║   ║      @Override                                                        ║      ║
║   ║      public void show() {                                             ║      ║
║   ║          A.super.show();  // Call A's version                         ║      ║
║   ║          // OR                                                        ║      ║
║   ║          B.super.show();  // Call B's version                         ║      ║
║   ║          // OR                                                        ║      ║
║   ║          System.out.println("Own implementation");                    ║      ║
║   ║      }                                                                ║      ║
║   ║  }                                                                    ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    DEFAULT METHOD RULES                                          ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ┌────────────────────────────────┬─────────────────────────────────────────┐   ║
║   │  ✓ CAN DO                      │  ❌ CANNOT DO                           │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  Have implementation           │  Be final                               │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  Call other interface methods  │  Be synchronized                        │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  Be overridden in class        │  Be native                              │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  Have local variables          │  Have instance variables                │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  Call static methods           │  Override Object methods as default     │   ║
║   └────────────────────────────────┴─────────────────────────────────────────┘   ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    BENEFITS SUMMARY                                              ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═════════════════════╗   ╔═════════════════════╗   ╔═════════════════════╗    ║
║   ║  BACKWARD           ║   ║  INTERFACE          ║   ║  CODE               ║    ║
║   ║  COMPATIBILITY      ║   ║  EVOLUTION          ║   ║  REUSE              ║    ║
║   ╠═════════════════════╣   ╠═════════════════════╣   ╠═════════════════════╣    ║
║   ║                     ║   ║                     ║   ║                     ║    ║
║   ║ Add new methods     ║   ║ Evolve interfaces   ║   ║ Share common        ║    ║
║   ║ without breaking    ║   ║ without breaking    ║   ║ implementation      ║    ║
║   ║ existing code       ║   ║ old implementations ║   ║ across classes      ║    ║
║   ║                     ║   ║                     ║   ║                     ║    ║
║   ╚═════════════════════╝   ╚═════════════════════╝   ╚═════════════════════╝    ║
║                                                                                  ║
║   REAL-WORLD USAGE:                                                              ║
║   • Collection.stream()  - Added in Java 8                                       ║
║   • List.sort()          - Added in Java 8                                       ║
║   • Map.forEach()        - Added in Java 8                                       ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
