# INNER CLASSES

## Concept Introduction

**Inner Class** ek aisi class hai jo **doosri class ke andar** define hoti hai.

Inner class ke **fayde**:
- **Encapsulation** - Implementation details hide kar sakte hain
- **Code organization** - Related classes ko ek saath rakh sakte hain
- **Access** - Outer class ke private members ko access kar sakte hain

**Inner Class = Class inside another class**

**4 Types:**
1. **Member Inner Class** - Regular inner class
2. **Static Nested Class** - Static inner class
3. **Local Inner Class** - Method ke andar
4. **Anonymous Inner Class** - Without name

---

## Why This Concept Exists

### Problem

```java
// Separate files
class Car {
    String model;
}

class Engine {
    void start() {
        // How to access Car's private members?
    }
}
```

**Issue:** Engine should be tightly coupled with Car, but it's separate.

### Solution: Inner Class

```java
class Car {
    private String model;
    
    // Inner class - has access to outer class members
    class Engine {
        void start() {
            System.out.println(model + " engine started");
        }
    }
}
```

---

## Definitions

### Very Simple Definition
Inner class ek aisi class hai jo doosri class ke andar likhi jaati hai aur outer class ke members ko access kar sakti hai.

### Simple Definition
An inner class (nested class) is a class defined within another class. Inner classes can access all members (including private) of the outer class and are used for logical grouping and encapsulation.

### College Exam Definition
Inner classes in Java are classes defined within another class. Java supports four types: member inner class (regular non-static nested class), static nested class (static inner class), local inner class (defined in method), and anonymous inner class (without name, used for one-time use). Inner classes have access to outer class members including private ones. Non-static inner classes have an implicit reference to the outer class instance.

### Technical Definition
Inner classes (nested classes) are classes defined within the scope of another class, creating a logical grouping relationship. Non-static inner classes (member inner classes) maintain an implicit reference to the enclosing outer class instance, enabling access to all outer class members including private ones. The compiler generates separate .class files with names like Outer$Inner.class. Static nested classes don't have this implicit reference and behave like regular classes but are scoped within the outer class. Local inner classes are scoped to methods and can access final/effectively-final local variables. Anonymous inner classes provide concise syntax for single-use implementations.

### Interview Definition
Inner class = Class inside another class. Four types: (1) **Member Inner Class**: Non-static, has implicit outer reference, access all outer members including private, cannot have static members (except static final), created via outer.new Inner(), (2) **Static Nested Class**: Static, no outer reference, access only static outer members, independent of outer instance, created via new Outer.StaticInner(), (3) **Local Inner Class**: Defined in method/block, scope limited to method, access final/effectively-final local variables, (4) **Anonymous Inner Class**: No name, one-time use, implements interface or extends class, useful for event listeners. Use cases: Implementation hiding, helper classes, event handling, callbacks.

---

## 1. Member Inner Class (Non-Static)

### Concept
Regular inner class that belongs to an instance of outer class.

```java
class Outer {
    private int outerValue = 100;
    
    // Member inner class
    class Inner {
        private int innerValue = 200;
        
        void display() {
            // Can access outer class members
            System.out.println("Outer value: " + outerValue);
            System.out.println("Inner value: " + innerValue);
        }
    }
    
    void test() {
        // Create inner class object
        Inner inner = new Inner();
        inner.display();
    }
}

public class Main {
    public static void main(String[] args) {
        // Create outer class object
        Outer outer = new Outer();
        outer.test();
        
        // Create inner class object
        Outer.Inner inner = outer.new Inner();
        inner.display();
    }
}
```

**Output:**
```
Outer value: 100
Inner value: 200
Outer value: 100
Inner value: 200
```

---

### Accessing Outer Class Members

```java
class Outer {
    private int x = 10;
    
    class Inner {
        private int x = 20;
        
        void display(int x) {
            System.out.println("Local x: " + x);          // 30
            System.out.println("Inner x: " + this.x);     // 20
            System.out.println("Outer x: " + Outer.this.x);  // 10
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.display(30);
    }
}
```

**Output:**
```
Local x: 30
Inner x: 20
Outer x: 10
```

---

## 2. Static Nested Class

### Concept
Static inner class - does NOT have reference to outer class instance.

```java
class Outer {
    private static int staticValue = 100;
    private int instanceValue = 200;
    
    // Static nested class
    static class StaticInner {
        void display() {
            // ✓ Can access static members
            System.out.println("Static value: " + staticValue);
            
            // ❌ Cannot access instance members directly
            // System.out.println(instanceValue);  // Error
            
            // ✓ Can create outer instance and access
            Outer outer = new Outer();
            System.out.println("Instance value: " + outer.instanceValue);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // No outer object needed
        Outer.StaticInner inner = new Outer.StaticInner();
        inner.display();
    }
}
```

**Output:**
```
Static value: 100
Instance value: 200
```

---

### Member Inner vs Static Nested

```java
class Outer {
    static int staticData = 100;
    int instanceData = 200;
    
    // Non-static inner class
    class MemberInner {
        void show() {
            System.out.println(staticData);     // ✓ OK
            System.out.println(instanceData);   // ✓ OK
        }
    }
    
    // Static nested class
    static class StaticNested {
        void show() {
            System.out.println(staticData);     // ✓ OK
            // System.out.println(instanceData);  // ❌ Error
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Member inner - needs outer instance
        Outer outer = new Outer();
        Outer.MemberInner memberInner = outer.new MemberInner();
        memberInner.show();
        
        // Static nested - no outer instance needed
        Outer.StaticNested staticNested = new Outer.StaticNested();
        staticNested.show();
    }
}
```

---

## 3. Local Inner Class

### Concept
Class defined inside a method or block.

```java
class Outer {
    void outerMethod() {
        final int localVar = 100;  // Must be final or effectively final
        int effectivelyFinal = 200;  // Not modified
        
        // Local inner class
        class LocalInner {
            void display() {
                System.out.println("Local var: " + localVar);
                System.out.println("Effectively final: " + effectivelyFinal);
            }
        }
        
        // Use local inner class
        LocalInner inner = new LocalInner();
        inner.display();
    }
}

public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        outer.outerMethod();
    }
}
```

**Output:**
```
Local var: 100
Effectively final: 200
```

---

### Local Inner Class Rules

```java
class Test {
    void method() {
        int x = 10;  // Effectively final
        int y = 20;
        
        class LocalClass {
            void display() {
                System.out.println(x);  // ✓ OK
                // System.out.println(y);  // ❌ Error if y is modified
            }
        }
        
        y = 30;  // Modifying y makes it non-final
        
        LocalClass lc = new LocalClass();
        lc.display();
    }
}
```

---

## 4. Anonymous Inner Class

### Concept
Class without a name - used for one-time implementation.

```java
interface Greeting {
    void greet();
}

public class Main {
    public static void main(String[] args) {
        // Anonymous inner class implementing interface
        Greeting greeting = new Greeting() {
            @Override
            public void greet() {
                System.out.println("Hello from anonymous class!");
            }
        };
        
        greeting.greet();
    }
}
```

**Output:**
```
Hello from anonymous class!
```

---

### Anonymous Class Extending Class

```java
class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

public class Main {
    public static void main(String[] args) {
        // Anonymous class extending Animal
        Animal dog = new Animal() {
            @Override
            void sound() {
                System.out.println("Bark!");
            }
        };
        
        dog.sound();
        
        // Another anonymous class
        Animal cat = new Animal() {
            @Override
            void sound() {
                System.out.println("Meow!");
            }
        };
        
        cat.sound();
    }
}
```

**Output:**
```
Bark!
Meow!
```

---

### Anonymous Class with Multiple Methods

```java
abstract class Shape {
    abstract void draw();
    abstract double area();
}

public class Main {
    public static void main(String[] args) {
        Shape circle = new Shape() {
            double radius = 5;
            
            @Override
            void draw() {
                System.out.println("Drawing circle");
            }
            
            @Override
            double area() {
                return 3.14 * radius * radius;
            }
        };
        
        circle.draw();
        System.out.println("Area: " + circle.area());
    }
}
```

**Output:**
```
Drawing circle
Area: 78.5
```

---

## Real-World Example: GUI Event Handling

```java
// Simulating button click handling
interface ClickListener {
    void onClick();
}

class Button {
    private String label;
    private ClickListener listener;
    
    Button(String label) {
        this.label = label;
    }
    
    void setClickListener(ClickListener listener) {
        this.listener = listener;
    }
    
    void click() {
        System.out.println(label + " button clicked!");
        if (listener != null) {
            listener.onClick();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Button loginButton = new Button("Login");
        
        // Anonymous inner class for event handling
        loginButton.setClickListener(new ClickListener() {
            @Override
            public void onClick() {
                System.out.println("Logging in...");
                System.out.println("Login successful!");
            }
        });
        
        Button logoutButton = new Button("Logout");
        
        logoutButton.setClickListener(new ClickListener() {
            @Override
            public void onClick() {
                System.out.println("Logging out...");
                System.out.println("Logout successful!");
            }
        });
        
        // Trigger clicks
        loginButton.click();
        System.out.println();
        logoutButton.click();
    }
}
```

**Output:**
```
Login button clicked!
Logging in...
Login successful!

Logout button clicked!
Logging out...
Logout successful!
```

---

## Inner Class Comparison

| Feature | Member Inner | Static Nested | Local Inner | Anonymous |
|---------|--------------|---------------|-------------|-----------|
| **Location** | Inside class | Inside class | Inside method | Inside method/expression |
| **static keyword** | No | Yes | No | No |
| **Outer reference** | Yes | No | Yes | Yes |
| **Access outer instance** | Yes | No | Yes | Yes |
| **Access outer static** | Yes | Yes | Yes | Yes |
| **Access local variables** | No | No | Yes (final) | Yes (final) |
| **Can be instantiated** | With outer | Independently | Inside method only | At declaration |
| **Has name** | Yes | Yes | Yes | No |
| **Use case** | Helper class | Independent utility | Temporary use | One-time implementation |

---

## Important Interview Questions

**Q1: What is an inner class?**

An inner class is a class defined within another class. It can access all members of the outer class including private ones.

**Q2: Difference between inner class and static nested class?**

Inner class (non-static) has implicit reference to outer class and can access instance members. Static nested class cannot access outer instance members directly.

**Q3: Can inner class be private?**

Yes, inner classes can have any access modifier (private, protected, public, default).

**Q4: How to create an object of member inner class?**

Outer.Inner inner = outer.new Inner(); (Need outer instance)

**Q5: Can static nested class access instance variables?**

No, static nested class can only access static members of outer class directly.

**Q6: What are anonymous inner classes?**

Classes without name used for one-time implementation of interface or abstract class.

**Q7: Can local inner class access local variables?**

Yes, but only if they are final or effectively final (not modified after initialization).

**Q8: Why use inner classes?**

Encapsulation, logical grouping, access to outer class members, implementation hiding, event handling.

---

## Short Recap

**Inner Class** = Class inside another class

**4 Types:**
1. **Member Inner** - Regular inner class (has outer reference)
2. **Static Nested** - Static inner (no outer reference)
3. **Local Inner** - Inside method (accesses final local vars)
4. **Anonymous** - No name (one-time use)

**Creation:**
- Member: outer.new Inner()
- Static: new Outer.StaticInner()

**Benefits:**
- Encapsulation
- Access outer private members
- Logical grouping
- Event handling

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                          INNER CLASSES                                           ║
╚══════════════════════════════════════════════════════════════════════════════════╝

                              ╔═══════════════════╗
                              ║  WHAT IS          ║
                              ║  INNER CLASS?     ║
                              ╚═════════╦═════════╝
                                        ║
                                        ▼
                    ╔═══════════════════════════════════════╗
                    ║  A CLASS defined INSIDE another class ║
                    ║  Can access outer class members       ║
                    ║  (including private)                  ║
                    ╚═══════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                      4 TYPES OF INNER CLASSES                                    ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                         ╔═══════════════════════╗                                ║
║                         ║    INNER CLASSES      ║                                ║
║                         ╚═══════════╦═══════════╝                                ║
║                                     ║                                            ║
║      ╔══════════════════╦═══════════╩═══════════╦══════════════════╗             ║
║      ▼                  ▼                       ▼                  ▼             ║
║ ╔════════════╗   ╔════════════╗         ╔════════════╗     ╔════════════╗        ║
║ ║   MEMBER   ║   ║   STATIC   ║         ║   LOCAL    ║     ║ ANONYMOUS  ║        ║
║ ║   INNER    ║   ║   NESTED   ║         ║   INNER    ║     ║   INNER    ║        ║
║ ╠════════════╣   ╠════════════╣         ╠════════════╣     ╠════════════╣        ║
║ ║            ║   ║            ║         ║            ║     ║            ║        ║
║ ║ Non-static ║   ║ Static     ║         ║ Inside     ║     ║ No name    ║        ║
║ ║ Has outer  ║   ║ No outer   ║         ║ method/    ║     ║ One-time   ║        ║
║ ║ reference  ║   ║ reference  ║         ║ block      ║     ║ use        ║        ║
║ ║            ║   ║            ║         ║            ║     ║            ║        ║
║ ╚════════════╝   ╚════════════╝         ╚════════════╝     ╚════════════╝        ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    1. MEMBER INNER CLASS                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║   class Outer {                                                       ║      ║
║   ║       private int x = 10;                                             ║      ║
║   ║                                                                       ║      ║
║   ║       class Inner {            ←── Member Inner Class                 ║      ║
║   ║           void display() {                                            ║      ║
║   ║               System.out.println(x);  ←── Can access private x!       ║      ║
║   ║           }                                                           ║      ║
║   ║       }                                                               ║      ║
║   ║   }                                                                   ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   HOW TO CREATE:                                                                 ║
║   ═══════════════                                                                ║
║   Outer outer = new Outer();                                                     ║
║   Outer.Inner inner = outer.new Inner();   ←── Needs outer instance!             ║
║   inner.display();                                                               ║
║                                                                                  ║
║   CHARACTERISTICS:                                                               ║
║   ─────────────────                                                              ║
║   ✓ Has implicit reference to outer class instance                               ║
║   ✓ Can access ALL outer members (including private)                             ║
║   ✓ Cannot have static members (except static final constants)                   ║
║   ✓ Outer.this refers to outer class instance                                    ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    2. STATIC NESTED CLASS                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║   class Outer {                                                       ║      ║
║   ║       private int x = 10;                                             ║      ║
║   ║       private static int y = 20;                                      ║      ║
║   ║                                                                       ║      ║
║   ║       static class StaticNested {   ←── Static Nested Class           ║      ║
║   ║           void display() {                                            ║      ║
║   ║               // System.out.println(x);  ←── CANNOT access non-static ║      ║
║   ║               System.out.println(y);     ←── CAN access static only   ║      ║
║   ║           }                                                           ║      ║
║   ║       }                                                               ║      ║
║   ║   }                                                                   ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   HOW TO CREATE:                                                                 ║
║   ═══════════════                                                                ║
║   Outer.StaticNested nested = new Outer.StaticNested();  ←── NO outer instance!  ║
║   nested.display();                                                              ║
║                                                                                  ║
║   CHARACTERISTICS:                                                               ║
║   ─────────────────                                                              ║
║   ✓ NO implicit reference to outer class                                         ║
║   ✓ Can only access STATIC members of outer class                                ║
║   ✓ Can have static and non-static members                                       ║
║   ✓ Behaves like a regular top-level class (just scoped inside)                  ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    3. LOCAL INNER CLASS                                          ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║   class Outer {                                                       ║      ║
║   ║       void myMethod() {                                               ║      ║
║   ║           final int num = 100;   ←── Must be final/effectively final  ║      ║
║   ║                                                                       ║      ║
║   ║           class LocalInner {     ←── Local Inner Class (in method)    ║      ║
║   ║               void display() {                                        ║      ║
║   ║                   System.out.println(num);  ←── Can access local var  ║      ║
║   ║               }                                                       ║      ║
║   ║           }                                                           ║      ║
║   ║                                                                       ║      ║
║   ║           LocalInner local = new LocalInner();                        ║      ║
║   ║           local.display();                                            ║      ║
║   ║       }                                                               ║      ║
║   ║   }                                                                   ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   CHARACTERISTICS:                                                               ║
║   ─────────────────                                                              ║
║   ✓ Defined inside a method or block                                             ║
║   ✓ Scope limited to the method/block                                            ║
║   ✓ Can access final or effectively final local variables                        ║
║   ✓ Can access outer class members                                               ║
║   ✓ Cannot have access modifiers (not public, private, etc.)                     ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    4. ANONYMOUS INNER CLASS                                      ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║   // Anonymous class implementing interface                           ║      ║
║   ║   Runnable runnable = new Runnable() {   ←── No class name!           ║      ║
║   ║       @Override                                                       ║      ║
║   ║       public void run() {                                             ║      ║
║   ║           System.out.println("Running!");                             ║      ║
║   ║       }                                                               ║      ║
║   ║   };                                        ←── Note the semicolon!   ║      ║
║   ║                                                                       ║      ║
║   ║   // Anonymous class extending a class                                ║      ║
║   ║   Animal dog = new Animal() {                                         ║      ║
║   ║       @Override                                                       ║      ║
║   ║       void sound() {                                                  ║      ║
║   ║           System.out.println("Woof!");                                ║      ║
║   ║       }                                                               ║      ║
║   ║   };                                                                  ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   CHARACTERISTICS:                                                               ║
║   ─────────────────                                                              ║
║   ✓ No name - defined and instantiated in one place                              ║
║   ✓ One-time use only                                                            ║
║   ✓ Can implement ONE interface OR extend ONE class                              ║
║   ✓ Cannot have explicit constructors (no name!)                                 ║
║   ✓ Perfect for event listeners, callbacks                                       ║
║   ✓ Replaced by lambdas for functional interfaces (Java 8+)                      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    COMPARISON TABLE                                              ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║ ┌──────────────┬─────────────┬─────────────┬─────────────┬─────────────────┐     ║
║ │   FEATURE    │   MEMBER    │   STATIC    │    LOCAL    │   ANONYMOUS     │     ║
║ │              │   INNER     │   NESTED    │    INNER    │   INNER         │     ║
║ ├──────────────┼─────────────┼─────────────┼─────────────┼─────────────────┤     ║
║ │ Has Name     │     ✓       │      ✓      │      ✓      │      ❌         │     ║
║ ├──────────────┼─────────────┼─────────────┼─────────────┼─────────────────┤     ║
║ │ Outer Ref    │     ✓       │      ❌     │      ✓      │      ✓          │     ║
║ ├──────────────┼─────────────┼─────────────┼─────────────┼─────────────────┤     ║
║ │ Access       │ All outer   │ Static      │ Final local │ Final local +   │     ║
║ │              │ members     │ only        │ + outer     │ outer           │     ║
║ ├──────────────┼─────────────┼─────────────┼─────────────┼─────────────────┤     ║
║ │ Can have     │     ❌      │      ✓      │      ❌     │      ❌         │     ║
║ │ static       │             │             │             │                 │     ║
║ ├──────────────┼─────────────┼─────────────┼─────────────┼─────────────────┤     ║
║ │ Creation     │outer.new    │new Outer.   │Inside       │ new Interface(){│     ║
║ │              │Inner()      │Static()     │method       │ }               │     ║
║ └──────────────┴─────────────┴─────────────┴─────────────┴─────────────────┘     ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    USE CASES                                                     ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════╗  Use for: Helper class tightly coupled with outer       ║
║   ║   MEMBER INNER    ║  Example: Iterator inside Collection class               ║
║   ╚═══════════════════╝                                                          ║
║                                                                                  ║
║   ╔═══════════════════╗  Use for: Utility class, no outer dependency             ║
║   ║   STATIC NESTED   ║  Example: Builder pattern (Person.Builder)               ║
║   ╚═══════════════════╝                                                          ║
║                                                                                  ║
║   ╔═══════════════════╗  Use for: Implementation needed only in one method       ║
║   ║   LOCAL INNER     ║  Example: Temporary helper in complex algorithm          ║
║   ╚═══════════════════╝                                                          ║
║                                                                                  ║
║   ╔═══════════════════╗  Use for: One-time implementations, callbacks            ║
║   ║   ANONYMOUS       ║  Example: Event listeners, Comparators, Runnables        ║
║   ╚═══════════════════╝                                                          ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
