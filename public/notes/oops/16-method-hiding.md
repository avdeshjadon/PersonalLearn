# METHOD HIDING

## Concept Introduction

Method hiding occurs when a child class defines a static method with the same signature as a static method in the parent class. Unlike overriding, the method called depends on the reference type, not the object type.

Java mein jab **child class** mein **parent class** ke **static method** ko same signature ke saath define karte hain, to ise **method hiding** kehte hain. Yeh **method overriding** se alag hai kyunki static methods **compile-time** par resolve hote hain, runtime par nahi.

**Method Hiding = Static method ko child class mein redefine karna**

Method hiding mein **reference type** matter karta hai, **object type** nahi (overriding ke opposite).

---

## Why This Concept Exists

### Confusion: Static Methods and Inheritance

```java
class Parent {
    static void display() {
        System.out.println("Parent static method");
    }
}

class Child extends Parent {
    static void display() {
        System.out.println("Child static method");
    }
}
```

**Question:** Kaunsa display() call hoga?

**Answer:** Jo **reference type** hai, uska method call hoga (not object type).

---

## Definitions

### Very Simple Definition
Method hiding matlab child class mein parent class ke static method ko same name se define karna.

### Simple Definition
Method hiding occurs when a child class defines a static method with the same signature as a static method in the parent class. Unlike overriding, the method called depends on the reference type, not the object type.

### College Exam Definition
Method hiding is a mechanism where a subclass defines a static method with the same name and signature as a static method in the superclass. It is resolved at compile-time based on the reference type, not the object type, which differentiates it from method overriding.

### Technical Definition
Method hiding is a compile-time binding mechanism in Java where a static method in a subclass has the same signature as a static method in the superclass. Since static methods belong to the class rather than instances, they cannot be overridden. The method invoked is determined by the reference type at compile-time, not the actual object type at runtime.

### Interview Definition
Method hiding happens when a child class declares a static method with the same signature as a static method in the parent class. Key differences from overriding:
- (1) Only applies to static methods
- (2) Resolved at compile-time (early binding) based on reference type
- (3) Cannot use @Override annotation
- (4) No polymorphic behavior. It's called "hiding" because the child class's static method hides the parent class's static method when accessed through child class reference.

---

## Method Hiding vs Method Overriding

### Method Overriding (Instance Methods)

```java
class Parent {
    void display() {  // Instance method
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    @Override
    void display() {  // Overriding
        System.out.println("Child display");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();  // Upcasting
        p.display();  // Calls Child's display (Runtime polymorphism)
    }
}
```

**Output:**
```
Child display
```

---

### Method Hiding (Static Methods)

```java
class Parent {
    static void display() {  // Static method
        System.out.println("Parent static display");
    }
}

class Child extends Parent {
    static void display() {  // Method Hiding
        System.out.println("Child static display");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();  // Upcasting
        p.display();  // Calls Parent's display (Compile-time binding)
    }
}
```

**Output:**
```
Parent static display
```

**Why?** Because reference type is `Parent`, not object type.

---

## Detailed Example

```java
class Animal {
    static void sound() {
        System.out.println("Animal makes sound");
    }
    
    void eat() {  // Instance method
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    static void sound() {  // Method Hiding
        System.out.println("Dog barks");
    }
    
    @Override
    void eat() {  // Method Overriding
        System.out.println("Dog eats bones");
    }
}

public class Main {
    public static void main(String[] args) {
        // Case 1: Animal reference, Animal object
        Animal a1 = new Animal();
        a1.sound();  // Animal makes sound
        a1.eat();    // Animal eats
        
        System.out.println();
        
        // Case 2: Dog reference, Dog object
        Dog d1 = new Dog();
        d1.sound();  // Dog barks
        d1.eat();    // Dog eats bones
        
        System.out.println();
        
        // Case 3: Animal reference, Dog object (Upcasting)
        Animal a2 = new Dog();
        a2.sound();  // Animal makes sound (Method Hiding - reference type)
        a2.eat();    // Dog eats bones (Method Overriding - object type)
    }
}
```

**Output:**
```
Animal makes sound
Animal eats

Dog barks
Dog eats bones

Animal makes sound
Dog eats bones
```

---

## Why Reference Type Matters for Static Methods

Static methods are resolved at compile time based on the **reference type** of the variable, not the actual object it refers to.

```java
class Test {
    static void show() {
        System.out.println("Test class");
    }
}

public class Main {
    public static void main(String[] args) {
        Test t1 = new Test();
        t1.show();  // Warning: Static method should be called with class name
        
        Test.show();  // Correct way
        
        // Static methods belong to class, not object
        Test t2 = null;
        t2.show();  // No NullPointerException! Prints: Test class
    }
}
```

**Output:**
```
Test class
Test class
Test class
```

---

## Real-World Example

```java
class Vehicle {
    static void type() {
        System.out.println("Generic Vehicle");
    }
    
    static void wheels() {
        System.out.println("Number of wheels varies");
    }
}

class Car extends Vehicle {
    static void type() {  // Method Hiding
        System.out.println("Car - Personal Vehicle");
    }
    
    static void wheels() {  // Method Hiding
        System.out.println("Car has 4 wheels");
    }
}

class Bike extends Vehicle {
    static void type() {  // Method Hiding
        System.out.println("Bike - Two Wheeler");
    }
    
    static void wheels() {  // Method Hiding
        System.out.println("Bike has 2 wheels");
    }
}

public class Main {
    public static void main(String[] args) {
        // Direct class access (Recommended)
        Vehicle.type();
        Car.type();
        Bike.type();
        
        System.out.println();
        
        // Through references
        Vehicle v1 = new Car();
        Vehicle v2 = new Bike();
        
        v1.type();    // Generic Vehicle (reference type = Vehicle)
        v2.type();    // Generic Vehicle (reference type = Vehicle)
        
        System.out.println();
        
        // Correct way
        Car c = new Car();
        Bike b = new Bike();
        
        c.type();     // Car - Personal Vehicle
        b.type();     // Bike - Two Wheeler
    }
}
```

**Output:**
```
Generic Vehicle
Car - Personal Vehicle
Bike - Two Wheeler

Generic Vehicle
Generic Vehicle

Car - Personal Vehicle
Bike - Two Wheeler
```

---

## Comparison Table

| Feature | Method Overriding | Method Hiding |
| :--- | :--- | :--- |
| **Method Type** | Instance methods | Static methods |
| **Binding** | Runtime (Late binding) | Compile-time (Early binding) |
| **Based On** | Object type | Reference type |
| **@Override** | Can use | Cannot use |
| **Polymorphism** | Yes | No |
| **Access Modifier** | Cannot be more restrictive | Any access modifier |
| **Keyword** | No special keyword | No special keyword |
| **Example** | `void display()` | `static void display()` |

---

## Rules for Method Hiding

### Rule 1: Same Signature Required
The static method in the child class must have the exact same name and parameter list as the static method in the parent class.

```java
class Parent {
    static void show() { }
}

class Child extends Parent {
    static void show() { }  // Valid: Method Hiding
}
```

### Rule 2: Both Must Be Static
Method hiding only works when **both** the parent and child class methods are `static`. If one is static and the other is instance (non-static), it results in a compilation error.

**Scenario A: Instance trying to hide Static (Error)**
```java
class Parent {
    static void show() { }
}

class Child extends Parent {
    void show() { }  // Error: Instance method cannot override static method
}
```

**Scenario B: Static trying to override Instance (Error)**
```java
class Parent {
    void show() { }
}

class Child extends Parent {
    static void show() { }  // Error: Static method cannot hide instance method
}
```

### Rule 3: Cannot Use @Override
The `@Override` annotation effectively says "I am overriding an instance method". Since static methods are hidden (not overridden), using this annotation causes an error.

```java
class Parent {
    static void show() { }
}

class Child extends Parent {
    @Override  // Error: Static methods cannot be annotated with @Override
    static void show() { }
}
```

---

## Accessing the Parent's Hidden Method

Even if a child class hides a static method, you can still access the parent's version. Since static methods belong to the class, you should access them using the **Parent Class Name**.

**Note:** You cannot use the `super` keyword in a static context.

```java
class Parent {
    static void display() {
        System.out.println("Parent static method");
    }
}

class Child extends Parent {
    static void display() {
        System.out.println("Child static method");
    }
    
    static void show() {
        display();          // Calls Child's display (default)
        Parent.display();   // Calls Parent's display (explicit access)
    }
}

public class Main {
    public static void main(String[] args) {
        Child.show();
    }
}
```

**Output:**
```
Child static method
Parent static method
```

---

## Complex Example (Multi-Level Inheritance)

This example demonstrates how Method Hiding (static) and Method Overriding (instance) behave differently in a multi-level inheritance hierarchy.

*   **Static Methods:** Resolved by Reference Type.
*   **Instance Methods:** Resolved by Object Type.

```java
class A {
    static void method1() {
        System.out.println("A's static method1");
    }
    
    void method2() {
        System.out.println("A's instance method2");
    }
}

class B extends A {
    static void method1() {  // Method Hiding
        System.out.println("B's static method1");
    }
    
    @Override
    void method2() {  // Method Overriding
        System.out.println("B's instance method2");
    }
}

class C extends B {
    static void method1() {  // Method Hiding
        System.out.println("C's static method1");
    }
    
    @Override
    void method2() {  // Method Overriding
        System.out.println("C's instance method2");
    }
}

public class Main {
    public static void main(String[] args) {
        // 1. Reference A, Object C
        A a = new C();
        a.method1();  // Calls A.method1() (Reference is A)
        a.method2();  // Calls C.method2() (Object is C)
        
        System.out.println("---");

        // 2. Reference B, Object C
        B b = new C();
        b.method1();  // Calls B.method1() (Reference is B)
        b.method2();  // Calls C.method2() (Object is C)
        
        System.out.println("---");

        // 3. Reference C, Object C
        C c = new C();
        c.method1();  // Calls C.method1() (Reference is C)
        c.method2();  // Calls C.method2() (Object is C)
    }
}
```

**Output:**
```
A's static method1
C's instance method2
---
B's static method1
C's instance method2
---
C's static method1
C's instance method2
```

---

## Important Interview Questions

**Q1: What is method hiding in Java?**
Method hiding occurs when a child class declares a static method with the same signature as a static method in the parent class. The method called is determined by the reference type at compile-time, not the object type.

**Q2: What is the difference between method hiding and method overriding?**
*   **Method Overriding**: Instance methods, runtime binding, based on object type.
*   **Method Hiding**: Static methods, compile-time binding, based on reference type.

**Q3: Can we use @Override annotation with static methods?**
No, `@Override` annotation cannot be used with static methods as they are hidden, not overridden.

**Q4: Can an instance method hide a static method?**
No, an instance method cannot hide a static method, and vice versa. This results in a compilation error. Both methods must be static for hiding to occur.

**Q5: Why is method hiding based on reference type?**
Because static methods belong to the class, not instances. They are resolved at compile-time ("early binding") based on the declared type of the variable (reference type), not at runtime based on the actual object created.

**Q6: Can we access parent's hidden static method?**
Yes, using the parent class name: `ParentClass.methodName()`. **Note:** You cannot use `super` in a static context to access it.

---

## Short Recap

**Method Hiding**: Defining a static method in the child class with the same signature as one in the parent class.

**Key Takeaways:**
*   **Static Only:** Method hiding applies only to static methods.
*   **Compile-Time Resolution:** Hidden methods are resolved based on the **reference type**, not the object type.
*   **No Polymorphism:** Unlike overriding, hiding does not support runtime polymorphism.
*   **No @Override:** The `@Override` annotation cannot be used with static methods.
*   **Accessing Parent:** You can access the parent's hidden method using the class name (e.g., `Parent.method()`).

**Comparison Summary:**
*   **Overriding** → Instance methods → Object type → Runtime
*   **Hiding** → Static methods → Reference type → Compile-time

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                              METHOD HIDING                                       ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║   Static Method in PARENT Class           ║                 ║
║                    ║   static void display() { ... }           ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                       │                                          ║
║                              INHERITED (but hidden)                              ║
║                                       │                                          ║
║                                       ▼                                          ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║   Static Method in CHILD Class            ║                 ║
║                    ║   static void display() { ... }           ║                 ║
║                    ║          (HIDES parent's method)          ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                 METHOD HIDING vs METHOD OVERRIDING                               ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔══════════════════════════════════╗   ╔══════════════════════════════════╗    ║
║   ║       METHOD OVERRIDING          ║   ║        METHOD HIDING             ║    ║
║   ║       (Instance Methods)         ║   ║       (Static Methods)           ║    ║
║   ╠══════════════════════════════════╣   ╠══════════════════════════════════╣    ║
║   ║                                  ║   ║                                  ║    ║
║   ║   class Parent {                 ║   ║   class Parent {                 ║    ║
║   ║       void display() {...}       ║   ║       static void display(){..}  ║    ║
║   ║   }                              ║   ║   }                              ║    ║
║   ║                                  ║   ║                                  ║    ║
║   ║   class Child extends Parent {   ║   ║   class Child extends Parent {   ║    ║
║   ║       @Override                  ║   ║       // NO @Override            ║    ║
║   ║       void display() {...}       ║   ║       static void display(){..}  ║    ║
║   ║   }                              ║   ║   }                              ║    ║
║   ║                                  ║   ║                                  ║    ║
║   ╚══════════════════════════════════╝   ╚══════════════════════════════════╝    ║
║                   │                                    │                         ║
║                   ▼                                    ▼                         ║
║   ╔══════════════════════════════════╗   ╔══════════════════════════════════╗    ║
║   ║   Parent p = new Child();        ║   ║   Parent p = new Child();        ║    ║
║   ║   p.display();                   ║   ║   p.display();                   ║    ║
║   ╚══════════════════════════════════╝   ╚══════════════════════════════════╝    ║
║                   │                                    │                         ║
║                   ▼                                    ▼                         ║
║   ╔══════════════════════════════════╗   ╔══════════════════════════════════╗    ║
║   ║   Looks at: OBJECT TYPE          ║   ║   Looks at: REFERENCE TYPE       ║    ║
║   ║             (Child)              ║   ║              (Parent)            ║    ║
║   ╚══════════════════════════════════╝   ╚══════════════════════════════════╝    ║
║                   │                                    │                         ║
║                   ▼                                    ▼                         ║
║   ╔══════════════════════════════════╗   ╔══════════════════════════════════╗    ║
║   ║   Calls: Child.display()         ║   ║   Calls: Parent.display()        ║    ║
║   ╚══════════════════════════════════╝   ╚══════════════════════════════════╝    ║
║                   │                                    │                         ║
║                   ▼                                    ▼                         ║
║   ╔══════════════════════════════════╗   ╔══════════════════════════════════╗    ║
║   ║      RUNTIME BINDING             ║   ║     COMPILE-TIME BINDING         ║    ║
║   ║      (Late Binding)              ║   ║     (Early Binding)              ║    ║
║   ║      Polymorphic (Yes)           ║   ║     Not Polymorphic (No)         ║    ║
║   ╚══════════════════════════════════╝   ╚══════════════════════════════════╝    ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                          COMPARISON TABLE                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ┌─────────────────────┬────────────────────┬────────────────────┐              ║
║   │      Feature        │  Method Overriding │   Method Hiding    │              ║
║   ├─────────────────────┼────────────────────┼────────────────────┤              ║
║   │ Method Type         │ Instance methods   │ Static methods     │              ║
║   ├─────────────────────┼────────────────────┼────────────────────┤              ║
║   │ Binding             │ Runtime (Dynamic)  │ Compile-time       │              ║
║   ├─────────────────────┼────────────────────┼────────────────────┤              ║
║   │ Based On            │ Object type        │ Reference type     │              ║
║   ├─────────────────────┼────────────────────┼────────────────────┤              ║
║   │ @Override           │ Yes (Recommended)  │ No (Error)         │              ║
║   ├─────────────────────┼────────────────────┼────────────────────┤              ║
║   │ Polymorphism        │ Yes                │ No                 │              ║
║   ├─────────────────────┼────────────────────┼────────────────────┤              ║
║   │ Access Parent       │ super.method()     │ Parent.method()    │              ║
║   └─────────────────────┴────────────────────┴────────────────────┘              ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                       METHOD HIDING FLOW                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║      ╔═══════════════════════════════════════════════════════════════════╗       ║
║      ║                     Parent p = new Child();                       ║       ║
║      ╚═══════════════════════════════════════════════════════════════════╝       ║
║                                     │                                            ║
║                                     ▼                                            ║
║      ╔═══════════════════════════════════════════════════════════════════╗       ║
║      ║              p.staticMethod();  // Call static method             ║       ║
║      ╚═══════════════════════════════════════════════════════════════════╝       ║
║                                     │                                            ║
║                                     ▼                                            ║
║      ╔═══════════════════════════════════════════════════════════════════╗       ║
║      ║         COMPILER checks: What is REFERENCE TYPE?                  ║       ║
║      ║                    Reference Type = Parent                        ║       ║
║      ╚═══════════════════════════════════════════════════════════════════╝       ║
║                                     │                                            ║
║                                     ▼                                            ║
║      ╔═══════════════════════════════════════════════════════════════════╗       ║
║      ║              CALLS: Parent.staticMethod()                         ║       ║
║      ║              (Child's static method is HIDDEN)                    ║       ║
║      ╚═══════════════════════════════════════════════════════════════════╝       ║
║                                                                                  ║
║      NOTE: To call Child's static method:                                        ║
║            Child.staticMethod();  or  Child c = new Child(); c.method();         ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```

