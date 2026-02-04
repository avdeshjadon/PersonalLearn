# WHEN TO USE INHERITANCE

## Concept Introduction

**Inheritance** tab use karna chahiye jab **true IS-A relationship** ho. Lekin har situation mein inheritance best choice nahi hoti.

**Use Inheritance When:**
- Clear IS-A relationship exists
- Subclass IS-A type of superclass
- Need to extend behavior
- Want polymorphic behavior

**Avoid Inheritance When:**
- Just code reuse needed (use composition)
- Weak IS-A relationship
- Implementation will change frequently

**Inheritance = Use for IS-A, not just code reuse**

---

## Why This Matters

### Wrong Use of Inheritance

```java
class ArrayList {
    // List implementation
}

class Stack extends ArrayList {
    // Stack "IS-A" ArrayList? NO!
    // Stack just needs ArrayList's features
}
```

**Problem:** Stack IS-NOT-A List. This violates IS-A relationship.

### Right Approach

```java
class Stack {
    private ArrayList list;  // Composition
    // Stack HAS-A list
}
```

---

## Definitions

### Very Simple Definition
Inheritance tab use karo jab subclass truly IS-A superclass ho - jaise Dog IS-A Animal. Sirf code reuse ke liye inheritance mat use karo.

### Simple Definition
Use inheritance when there's a clear IS-A relationship and the subclass is truly a specialized type of the parent class. Avoid inheritance if you just want code reuse - prefer composition instead.

### College Exam Definition
Inheritance should be used when a genuine IS-A relationship exists between classes, where the subclass is a specialized version of the parent class and inherits both interface and behavior. Guidelines for using inheritance: (1) true IS-A relationship, (2) subclass extends parent behavior meaningfully, (3) Liskov Substitution Principle is satisfied, (4) need for polymorphism exists. Avoid inheritance for: code reuse without IS-A relationship, implementation inheritance only, when composition provides better flexibility, and when parent class may change frequently.

### Technical Definition
Inheritance is appropriate when establishing an extensional subtyping relationship that satisfies behavioral subtyping (LSP). The derived class should represent a proper specialization maintaining semantic compatibility with the base class contract. Use inheritance when: (1) true taxonomic IS-A relationship exists (ontological subtyping), (2) inheriting interface and behavior together is beneficial, (3) polymorphic substitutability is required, (4) extending rather than modifying behavior, (5) stable abstraction exists in the parent. Avoid inheritance when: composition provides better flexibility, implementation details are being inherited without semantic relationship, diamond problem complexity arises, or the fragile base class problem threatens maintenance.

### Interview Definition
When to use inheritance: (1) **True IS-A**: Dog IS-A Animal (not just code reuse), (2) **Specialization**: Subclass specializes parent behavior, (3) **LSP**: Subclass can substitute parent without breaking code, (4) **Polymorphism**: Need runtime polymorphic behavior, (5) **Stable Parent**: Parent class is stable, well-designed, (6) **Logical Hierarchy**: Natural inheritance hierarchy exists. When NOT to use: (1) Code reuse only (use composition), (2) Weak relationship (HAS-A), (3) Multiple inheritance needed (use interfaces), (4) Frequent changes expected, (5) Implementation details only. Principle: *"Favor composition over inheritance"*. Use inheritance for interface, composition for implementation. Java examples: ✓ Dog extends Animal, ❌ Stack extends ArrayList.

---

## 1. When to Use Inheritance

### ✓ True IS-A Relationship

```java
// Good - Clear IS-A relationship
class Animal {
    void eat() {
        System.out.println("Animal eating");
    }
    
    void sleep() {
        System.out.println("Animal sleeping");
    }
}

class Dog extends Animal {
    // Dog IS-A Animal ✓
    
    void bark() {
        System.out.println("Dog barking");
    }
}

class Cat extends Animal {
    // Cat IS-A Animal ✓
    
    void meow() {
        System.out.println("Cat meowing");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog();  // Polymorphism
        Animal cat = new Cat();
        
        dog.eat();  // Works - Dog IS-A Animal
        cat.eat();  // Works - Cat IS-A Animal
    }
}
```

---

### ✓ Specialization

```java
class Shape {
    protected String color;
    
    void draw() {
        System.out.println("Drawing shape");
    }
}

class Circle extends Shape {
    // Circle IS-A specialized Shape ✓
    
    @Override
    void draw() {
        System.out.println("Drawing circle");
    }
    
    void calculateArea(double radius) {
        System.out.println("Area: " + (3.14 * radius * radius));
    }
}

class Rectangle extends Shape {
    // Rectangle IS-A specialized Shape ✓
    
    @Override
    void draw() {
        System.out.println("Drawing rectangle");
    }
    
    void calculateArea(double length, double width) {
        System.out.println("Area: " + (length * width));
    }
}
```

---

### ✓ Polymorphic Behavior Needed

```java
class Vehicle {
    void move() {
        System.out.println("Vehicle moving");
    }
}

class Car extends Vehicle {
    @Override
    void move() {
        System.out.println("Car driving on road");
    }
}

class Boat extends Vehicle {
    @Override
    void move() {
        System.out.println("Boat sailing on water");
    }
}

class Helicopter extends Vehicle {
    @Override
    void move() {
        System.out.println("Helicopter flying in sky");
    }
}

public class Main {
    // Polymorphism - treat all as Vehicle
    static void startJourney(Vehicle vehicle) {
        vehicle.move();  // Different behavior for each
    }
    
    public static void main(String[] args) {
        startJourney(new Car());
        startJourney(new Boat());
        startJourney(new Helicopter());
    }
}
```

**Output:**
```
Car driving on road
Boat sailing on water
Helicopter flying in sky
```

---

### ✓ Extending Framework Classes

```java
// Good - Extending framework classes properly
class CustomException extends Exception {
    CustomException(String message) {
        super(message);
    }
}

class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running");
    }
}

// These ARE specialized versions
```

---

## 2. When NOT to Use Inheritance

### ❌ Code Reuse Only

```java
// Bad - Inheritance just for code reuse
class ArrayList {
    void add() { }
    void remove() { }
    void size() { }
}

class Stack extends ArrayList {
    // Stack IS-NOT-A ArrayList!
    // Just wants to reuse ArrayList's implementation
}

// Good - Use composition instead
class Stack {
    private ArrayList list = new ArrayList();  // Composition
    
    void push(Object item) {
        list.add(item);
    }
    
    Object pop() {
        return list.remove(list.size() - 1);
    }
}
```

---

### ❌ Weak IS-A Relationship

```java
// Bad - Weak IS-A
class Person {
    String name;
    void walk() { }
}

class Employee extends Person {
    // Employee IS-A Person? Questionable.
    // Employee HAS-A Person? Makes more sense.
}

// Good - Composition
class Employee {
    private Person person;  // Composition
    private String employeeId;
    private double salary;
}
```

---

### ❌ Implementation Details Only

```java
// Bad - Inheriting just for implementation
class Properties {
    void setProperty(String key, String value) { }
    String getProperty(String key) { }
}

class Configuration extends Properties {
    // Configuration IS-NOT-A Properties
    // Just wants key-value storage
}

// Good - Composition
class Configuration {
    private Properties props = new Properties();
    
    void setConfig(String key, String value) {
        props.setProperty(key, value);
    }
}
```

---

### ❌ Multiple Features Needed

```java
// Bad - Need features from multiple classes
class Flyable {
    void fly() { }
}

class Swimmable {
    void swim() { }
}

// Cannot do this in Java!
// class Duck extends Flyable, Swimmable { }

// Good - Use interfaces + composition
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    private FlyBehavior flyBehavior;  // Composition
    private SwimBehavior swimBehavior;  // Composition
    
    public void fly() {
        flyBehavior.fly();
    }
    
    public void swim() {
        swimBehavior.swim();
    }
}
```

---

## 3. Decision Flowchart

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                   SHOULD I USE INHERITANCE?                                   ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   Is there a true IS-A relationship?                                          ║
║   (Subclass IS-A type of parent class)                                        ║
║           │                                                                   ║
║           ├─ NO  ──────> Use COMPOSITION (HAS-A)                              ║
║           │                                                                   ║
║           └─ YES                                                              ║
║               │                                                               ║
║               ▼                                                               ║
║   Can subclass substitute parent everywhere?                                  ║
║   (Liskov Substitution Principle)                                             ║
║           │                                                                   ║
║           ├─ NO  ──────> Reconsider design, use COMPOSITION                   ║
║           │                                                                   ║
║           └─ YES                                                              ║
║               │                                                               ║
║               ▼                                                               ║
║   Is parent class stable and well-designed?                                   ║
║           │                                                                   ║
║           ├─ NO  ──────> Fix parent first or use COMPOSITION                  ║
║           │                                                                   ║
║           └─ YES                                                              ║
║               │                                                               ║
║               ▼                                                               ║
║   Do you need polymorphic behavior?                                           ║
║           │                                                                   ║
║           ├─ YES ──────> Use INHERITANCE ✓                                    ║
║           │                                                                   ║
║           └─ NO  ──────> Consider COMPOSITION (more flexible)                 ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4. Real-World Examples

### ✓ Good Use Cases

```java
// 1. UI Components
class Button extends Component { }  // Button IS-A Component

// 2. Exceptions
class FileNotFoundException extends IOException { }

// 3. Data structures
class LinkedList extends AbstractList { }

// 4. Animals
class Lion extends Mammal { }

// 5. Vehicles
class Truck extends Vehicle { }
```

### ❌ Bad Use Cases

```java
// 1. Code reuse
class Stack extends ArrayList { }  // ❌ Use composition

// 2. Utility
class Utils extends Helper { }  // ❌ Use static methods

// 3. Weak relationship
class Employee extends Person { }  // ❌ Use composition

// 4. Multiple features
class Duck extends Flyable, Swimmable { }  // ❌ Use interfaces
```

---

## Important Interview Questions

**Q1: When should we use inheritance?**

Use inheritance when there's a true IS-A relationship, need for polymorphism, and the subclass is a specialized version of the parent.

**Q2: When should we avoid inheritance?**

Avoid for code reuse only, weak IS-A relationship, multiple inheritance needs, or when composition provides better flexibility.

**Q3: What is the principle about inheritance?**

"Favor composition over inheritance" - use composition for HAS-A, inheritance for IS-A.

**Q4: Can you give an example of bad inheritance?**

Stack extends ArrayList - Stack IS-NOT-A ArrayList. Stack HAS-A list for storage.

**Q5: What is LSP in context of inheritance?**

Liskov Substitution Principle - subclass should be substitutable for parent class without breaking functionality.

**Q6: Inheritance vs Composition?**

Inheritance: IS-A, tight coupling, compile-time. Composition: HAS-A, loose coupling, runtime flexibility.

**Q7: When is inheritance better than composition?**

When true IS-A exists, need polymorphism, extending framework classes properly.

**Q8: What makes a good parent class?**

Stable, well-designed, represents clear abstraction, follows Single Responsibility Principle.

---

## Short Recap

**Use Inheritance When:**
1. ✓ True **IS-A** relationship
2. ✓ **Specialization** of parent
3. ✓ Need **polymorphism**
4. ✓ **Stable** parent class
5. ✓ LSP satisfied

**Avoid Inheritance When:**
1. ❌ Just **code reuse**
2. ❌ **Weak** IS-A
3. ❌ **Multiple** features needed
4. ❌ **Frequent** changes
5. ❌ **Implementation** details only

**Principle:** *"Favor Composition over Inheritance"*

**Decision Rule:**
- IS-A? → Inheritance
- HAS-A? → Composition

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    WHEN TO USE INHERITANCE                                    ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   ✓ GOOD Examples:                                                            ║
║   ════════════════                                                            ║
║   Dog extends Animal           → Dog IS-A Animal ✓                            ║
║   Circle extends Shape         → Circle IS-A Shape ✓                          ║
║   Car extends Vehicle          → Car IS-A Vehicle ✓                           ║
║   IOException extends Exception → True specialization ✓                       ║
║                                                                               ║
║   ❌ BAD Examples:                                                            ║
║   ═══════════════                                                             ║
║   Stack extends ArrayList      → Stack IS-NOT-A ArrayList ❌                  ║
║   Employee extends Person      → Employee HAS-A Person ❌                     ║
║   Car extends Engine           → Car HAS-AN Engine ❌                         ║
║                                                                               ║
║   Key Principle:                                                              ║
║   ═══════════════                                                             ║
║   "Favor Composition over Inheritance"                                        ║
║                                                                               ║
║   Inheritance → IS-A (tight coupling, less flexible)                          ║
║   Composition → HAS-A (loose coupling, more flexible)                         ║
║                                                                               ║
║   Use inheritance for INTERFACE, composition for IMPLEMENTATION               ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
