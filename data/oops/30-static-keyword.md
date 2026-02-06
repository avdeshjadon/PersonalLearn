# STATIC KEYWORD

## Concept Introduction

**Static** ka matlab - **class se belong karta hai, object se nahi**. Static members sabhi objects ke liye **shared** hote hain, har object ka apna copy nahi hota.

**Static = Class Level (Shared) | Non-Static = Object Level (Individual)**

Real Example: **School name** - sabhi students ke liye same (static). **Student name** - har student ka alag (non-static).

---

## Why Static Exists

### The Problem
```java
class Counter {
    int count = 0;  // Each object has separate copy
}

Counter c1 = new Counter();
c1.count = 5;
Counter c2 = new Counter();
System.out.println(c2.count);  // 0 (not shared!)
```

### The Solution
```java
class Counter {
    static int count = 0;  // Shared across all objects
}

Counter c1 = new Counter();
Counter.count = 5;
Counter c2 = new Counter();
System.out.println(Counter.count);  // 5 (shared!)
```

---

## Definitions

### Simple Definition
Static members belong to the class, not to individual objects. They are shared across all instances.

### Interview Definition
The static keyword in Java is used to create class-level members (variables, methods, blocks, nested classes) that belong to the class itself rather than to individual objects. Static members are loaded when the class is loaded, exist in method area memory, are shared across all instances, and can be accessed directly using the class name without creating objects. Static variables have single copy per class, static methods can only access static members, and static blocks execute once when class is loaded.

---

## Types of Static

### 1. Static Variables

**Shared across all objects, single copy**

```java
class Student {
    String name;           // Instance variable (each object has own)
    static String school = "ABC School";  // Static variable (shared)
    
    Student(String name) {
        this.name = name;
    }
    
    void display() {
        System.out.println(name + " studies in " + school);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Rahul");
        Student s2 = new Student("Priya");
        
        s1.display();  // Rahul studies in ABC School
        s2.display();  // Priya studies in ABC School
        
        // Change static variable
        Student.school = "XYZ School";
        
        s1.display();  // Rahul studies in XYZ School
        s2.display();  // Priya studies in XYZ School
    }
}
```

### 2. Static Methods

**Can be called without object, can only access static members**

```java
class Calculator {
    // Static method
    static int add(int a, int b) {
        return a + b;
    }
    
    static int multiply(int a, int b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        // Call without creating object
        int sum = Calculator.add(10, 20);
        int product = Calculator.multiply(5, 4);
        
        System.out.println("Sum: " + sum);         // 30
        System.out.println("Product: " + product); // 20
    }
}
```

**Rules for Static Methods**:
- Cannot use `this` or `super`
- Cannot access non-static members directly
- Can access only static members
- Can be called using class name

### 3. Static Blocks

**Execute once when class is loaded**

```java
class Database {
    static String url;
    static String username;
    
    // Static block - runs once when class loads
    static {
        System.out.println("Loading database configuration...");
        url = "jdbc:mysql://localhost:3306/mydb";
        username = "root";
        System.out.println("Configuration loaded!");
    }
    
    static void connect() {
        System.out.println("Connecting to " + url);
    }
}

public class Main {
    public static void main(String[] args) {
        // Static block executes before this
        Database.connect();
        Database.connect();
    }
}
```

**Output**:
```
Loading database configuration...
Configuration loaded!
Connecting to jdbc:mysql://localhost:3306/mydb
Connecting to jdbc:mysql://localhost:3306/mydb
```

### 4. Static Nested Classes

```java
class Outer {
    static class Inner {
        void display() {
            System.out.println("Static nested class");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Outer.Inner obj = new Outer.Inner();
        obj.display();
    }
}
```

---

## Real-World Example: Counter

```java
class VisitorCounter {
    static int totalVisitors = 0;  // Shared count
    String visitorName;
    
    VisitorCounter(String name) {
        this.visitorName = name;
        totalVisitors++;  // Increment shared counter
    }
    
    void displayInfo() {
        System.out.println("Visitor: " + visitorName);
        System.out.println("Total visitors so far: " + totalVisitors);
    }
    
    static void displayTotalVisitors() {
        System.out.println("Total visitors: " + totalVisitors);
    }
}

public class Main {
    public static void main(String[] args) {
        VisitorCounter v1 = new VisitorCounter("Rahul");
        v1.displayInfo();  // Total: 1
        
        VisitorCounter v2 = new VisitorCounter("Priya");
        v2.displayInfo();  // Total: 2
        
        VisitorCounter v3 = new VisitorCounter("Amit");
        v3.displayInfo();  // Total: 3
        
        // Access static method without object
        VisitorCounter.displayTotalVisitors();  // Total: 3
    }
}
```

---

## Static vs Non-Static

| Feature | Static | Non-Static (Instance) |
|---------|--------|---------------------|
| **Belongs To** | Class | Object |
| **Memory** | Method Area | Heap |
| **Copies** | Single copy (shared) | One per object |
| **Access** | ClassName.member | object.member |
| **Keyword Required** | static | No keyword |
| **Can Access** | Only static members | Both static and non-static |
| **this/super** | Cannot use | Can use |

---

## Memory Representation

```
Method Area                 Heap Memory
═══════════                 ══════════════════════════
                          
Static Variables:          Object 1:
- school: "ABC"            - name: "Rahul"
- totalCount: 3            
                           Object 2:
Static Methods:            - name: "Priya"
- getSchool()              
- incrementCount()         Object 3:
                           - name: "Amit"
(Loaded once,              
 shared by all)            (Each object has own copy)
```

---

## Important Rules

### ✅ Can Do:
1. Access static from static directly
2. Access static from non-static
3. Call static method without object
4. Static variables initialized when class loads

### ❌ Cannot Do:
1. Access non-static from static directly (need object)
2. Use `this` in static context
3. Use `super` in static context
4. Override static methods (method hiding happens)

---

## Common Use Cases

**1. Utility Classes**:
```java
class MathUtils {
    static double PI = 3.14159;
    
    static double areaOfCircle(double radius) {
        return PI * radius * radius;
    }
}
```

**2. Constants**:
```java
class Constants {
    static final String APP_NAME = "MyApp";
    static final int MAX_USERS = 100;
}
```

**3. Singleton Pattern**:
```java
class Singleton {
    private static Singleton instance;
    
    private Singleton() { }
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

---

## Important Interview Questions

**Q1: What is static keyword?**

Static keyword creates class-level members that are shared across all objects and can be accessed without creating instances.

**Q2: Can we access non-static from static method?**

No! Static methods cannot directly access non-static members. Need to create object first.

**Q3: Why main method is static?**

So JVM can call it without creating object. `public static void main(String[] args)`

**Q4: Can we override static methods?**

No! Static methods are hidden, not overridden. They belong to class, not object.

**Q5: When are static variables initialized?**

When class is loaded into memory (before any object creation).

---

## Short Recap

**Static Keyword**:
- Class level (shared)
- Single copy for all objects
- Access using class name
- Loaded when class loads

**Types**: Static variables, methods, blocks, nested classes

**Main use**: Utility methods, constants, counters, singleton pattern

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                              STATIC KEYWORD                                       ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   class Student {                                                                 ║
║       static String school = "ABC";    ← STATIC (Class Level - Shared)           ║
║       static int totalCount = 0;       ← STATIC (Single copy for all)            ║
║                                                                                   ║
║       String name;                     ← INSTANCE (Object Level - Individual)    ║
║       int rollNo;                      ← INSTANCE (Each object has own copy)     ║
║   }                                                                               ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                        JVM MEMORY ARCHITECTURE                                    ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔═══════════════════════════════════╗     ╔═══════════════════════════════════╗ ║
║   ║         METHOD AREA               ║     ║           HEAP MEMORY             ║ ║
║   ║     (Class Level Data)            ║     ║       (Object Level Data)         ║ ║
║   ╠═══════════════════════════════════╣     ╠═══════════════════════════════════╣ ║
║   ║                                   ║     ║                                   ║ ║
║   ║  ┌─────────────────────────────┐  ║     ║  ┌─────────────────────────────┐  ║ ║
║   ║  │    STATIC VARIABLES         │  ║     ║  │      OBJECT: s1             │  ║ ║
║   ║  │  ┌───────────────────────┐  │  ║     ║  │  ┌───────────────────────┐  │  ║ ║
║   ║  │  │ school: "ABC"         │  │  ║     ║  │  │ name: "Rahul"         │  │  ║ ║
║   ║  │  │ totalCount: 3         │  │  ║     ║  │  │ rollNo: 101           │  │  ║ ║
║   ║  │  └───────────────────────┘  │  ║     ║  │  └───────────────────────┘  │  ║ ║
║   ║  │     (Single Copy)           │  ║     ║  └─────────────────────────────┘  ║ ║
║   ║  └─────────────────────────────┘  ║     ║                                   ║ ║
║   ║                                   ║     ║  ┌─────────────────────────────┐  ║ ║
║   ║  ┌─────────────────────────────┐  ║     ║  │      OBJECT: s2             │  ║ ║
║   ║  │    STATIC METHODS           │  ║     ║  │  ┌───────────────────────┐  │  ║ ║
║   ║  │  ┌───────────────────────┐  │  ║     ║  │  │ name: "Priya"         │  │  ║ ║
║   ║  │  │ getSchool()           │  │  ║     ║  │  │ rollNo: 102           │  │  ║ ║
║   ║  │  │ getTotalCount()       │  │  ║     ║  │  └───────────────────────┘  │  ║ ║
║   ║  │  └───────────────────────┘  │  ║     ║  └─────────────────────────────┘  ║ ║
║   ║  │     (Shared Methods)        │  ║     ║                                   ║ ║
║   ║  └─────────────────────────────┘  ║     ║  ┌─────────────────────────────┐  ║ ║
║   ║                                   ║     ║  │      OBJECT: s3             │  ║ ║
║   ╚═══════════════════════════════════╝     ║  │  ┌───────────────────────┐  │  ║ ║
║                                             ║  │  │ name: "Amit"          │  │  ║ ║
║            ▲                                ║  │  │ rollNo: 103           │  │  ║ ║
║            │ All objects share              ║  │  └───────────────────────┘  │  ║ ║
║            │ static members                 ║  └─────────────────────────────┘  ║ ║
║            │                                ║       (Each object has own copy)  ║ ║
║            └────────────────────────────────╚═══════════════════════════════════╝ ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                     STATIC vs INSTANCE COMPARISON                                 ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────────────┬─────────────────────┬─────────────────────────┐    ║
║   │        Feature          │       STATIC        │       INSTANCE          │    ║
║   ├─────────────────────────┼─────────────────────┼─────────────────────────┤    ║
║   │ Belongs To              │ Class               │ Object                  │    ║
║   │ Memory Location         │ Method Area         │ Heap Memory             │    ║
║   │ Number of Copies        │ ONE (shared)        │ One per object          │    ║
║   │ When Loaded             │ Class loading       │ Object creation         │    ║
║   │ Access Syntax           │ ClassName.member    │ object.member           │    ║
║   │ Can use this/super      │ ✗ No                │ ✓ Yes                   │    ║
║   │ Can access instance     │ ✗ No (need object)  │ ✓ Yes (directly)        │    ║
║   │ Can access static       │ ✓ Yes (directly)    │ ✓ Yes (directly)        │    ║
║   └─────────────────────────┴─────────────────────┴─────────────────────────┘    ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                          TYPES OF STATIC                                          ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔════════════════════╗ ╔════════════════════╗ ╔════════════════════╗           ║
║   ║  STATIC VARIABLE   ║ ║  STATIC METHOD     ║ ║  STATIC BLOCK      ║           ║
║   ╠════════════════════╣ ╠════════════════════╣ ╠════════════════════╣           ║
║   ║                    ║ ║                    ║ ║                    ║           ║
║   ║ static int count;  ║ ║ static void show() ║ ║ static {           ║           ║
║   ║                    ║ ║ {                  ║ ║   // runs once     ║           ║
║   ║ • Shared by all    ║ ║   // logic here    ║ ║   // when class    ║           ║
║   ║ • Single copy      ║ ║ }                  ║ ║   // is loaded     ║           ║
║   ║ • Class name       ║ ║                    ║ ║ }                  ║           ║
║   ║   access           ║ ║ • No this/super    ║ ║                    ║           ║
║   ║                    ║ ║ • Static access    ║ ║ • Initialization   ║           ║
║   ║                    ║ ║   only             ║ ║ • Configuration    ║           ║
║   ╚════════════════════╝ ╚════════════════════╝ ╚════════════════════╝           ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                          ACCESS RULES FLOWCHART                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   From STATIC context:              From INSTANCE context:                        ║
║   ════════════════════              ══════════════════════                        ║
║                                                                                   ║
║   ┌──────────────────┐              ┌──────────────────┐                         ║
║   │  Static Method   │              │ Instance Method  │                         ║
║   └────────┬─────────┘              └────────┬─────────┘                         ║
║            │                                 │                                    ║
║            ▼                                 ▼                                    ║
║   ┌──────────────────┐              ┌──────────────────┐                         ║
║   │ Access static?   │──── ✓ ────▶  │ Access static?   │──── ✓ ────▶ ALLOWED    ║
║   └────────┬─────────┘              └────────┬─────────┘                         ║
║            │                                 │                                    ║
║            ▼                                 ▼                                    ║
║   ┌──────────────────┐              ┌──────────────────┐                         ║
║   │ Access instance? │──── ✗ ────▶  │ Access instance? │──── ✓ ────▶ ALLOWED    ║
║   └────────┬─────────┘   BLOCKED    └──────────────────┘                         ║
║            │                                                                      ║
║            ▼                                                                      ║
║   ┌──────────────────┐                                                           ║
║   │ Need object ref  │                                                           ║
║   │ to access        │                                                           ║
║   └──────────────────┘                                                           ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                         COMMON USE CASES                                          ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────────────────────────────────────────────────────────────┐    ║
║   │  ① Utility Classes     │  Math.sqrt(), Collections.sort()               │    ║
║   ├─────────────────────────────────────────────────────────────────────────┤    ║
║   │  ② Constants           │  Math.PI, Integer.MAX_VALUE                    │    ║
║   ├─────────────────────────────────────────────────────────────────────────┤    ║
║   │  ③ Counters/IDs        │  Track number of objects created               │    ║
║   ├─────────────────────────────────────────────────────────────────────────┤    ║
║   │  ④ Singleton Pattern   │  Single instance across application            │    ║
║   ├─────────────────────────────────────────────────────────────────────────┤    ║
║   │  ⑤ Factory Methods     │  Integer.valueOf(), String.valueOf()           │    ║
║   └─────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
