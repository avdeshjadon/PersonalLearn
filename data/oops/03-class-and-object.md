# CLASS AND OBJECT

## Concept Introduction

Imagine **blueprint of a house** (Class) aur **actual house** (Object). **Class** ek template/blueprint hai jo define karta hai ki kya properties aur behaviors honge. **Object** us blueprint se bana hua actual entity hai jisko tum use kar sakte ho.

**Class = Design/Blueprint | Object = Physical Thing Made from That Design**

Example: **Car Class** (general design) → **Maruti 800, Honda City** (actual objects)

---

## Why These Concepts Exist

### The Problem
Without classes, har entity ke liye alag-alag code likhna padta. Agar 100 students ho to 100 baar same code repeat karna padega.

### The Solution
**Class** banao (template) aur usse infinite **Objects** create karo. Class ek baar define karo, objects kai baar banao.

---

## Definitions

### Very Simple Definition
Class ek blueprint hai. Object us blueprint se bani actual chij hai.

### Simple Definition
A class is a user-defined data type that acts as a template for creating objects. An object is an instance of a class that has actual values for the attributes defined in the class.

### College Exam Definition
A class is a logical entity that defines the structure and behavior of objects by specifying attributes (data members) and methods (member functions). An object is a physical entity that is an instance of a class, occupying memory and having specific values for the class's attributes.

### Interview Definition
A class is a blueprint or template that defines the properties (attributes) and behaviors (methods) that objects created from it will have. It's a user-defined data type that encapsulates data and functions. An object is a runtime entity and instance of a class that has its own state (attribute values) and identity, and can perform operations defined by the class methods. Multiple objects can be created from a single class, each with independent state.

### Deep Technical Definition
A class is an abstract data type that serves as a template for object creation. It defines a namespace containing data members (instance variables, static variables) and function members (methods, constructors, blocks) that define the structure and behavior of objects. When a class is loaded, metadata is stored in the method area of JVM memory, but no memory allocation occurs for instance variables. An object is a concrete instance of a class allocated in heap memory with its own copy of instance variables, referenced through a reference variable stored in the stack, and capable of invoking class methods through dynamic method dispatch.

---

## Understanding Class and Object

### Analogy
```
Class: Cookie Cutter (template)
Objects: Actual cookies made from that cutter

Class: Car Blueprint (specification)
Objects: Actual cars (Maruti 800, Honda City, etc.)

Class: Student (general concept)
Objects: Rahul, Priya, Amit (actual students)
```

---

## Class Syntax

```java
// Class Declaration
class ClassName {
    // Data Members (Attributes/Properties)
    dataType variable1;
    dataType variable2;
    
    // Methods (Behaviors/Functions)
    returnType methodName(parameters) {
        // method body
    }
}
```

---

## Basic Class Example

```java
class Student {
    // Data Members / Attributes
    String name;
    int rollNo;
    int age;
    
    // Method / Behavior
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("Age: " + age);
    }
    
    void study() {
        System.out.println(name + " is studying");
    }
}
```

**Class defines WHAT data and WHAT behaviors**, but doesn't hold actual values.

---

## Object Creation

### Syntax
```java
ClassName objectName = new ClassName();
```

### Breakdown
- **ClassName**: Type of object
- **objectName**: Reference variable name
- **new**: Keyword to allocate memory
- **ClassName()**: Constructor call

---

## Object Example

```java
class Student {
    String name;
    int rollNo;
    
    void display() {
        System.out.println("Name: " + name + ", Roll: " + rollNo);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating Objects
        Student s1 = new Student();  // Object 1
        Student s2 = new Student();  // Object 2
        
        // Setting values for s1
        s1.name = "Rahul";
        s1.rollNo = 101;
        
        // Setting values for s2
        s2.name = "Priya";
        s2.rollNo = 102;
        
        // Calling methods
        s1.display();  // Name: Rahul, Roll: 101
        s2.display();  // Name: Priya, Roll: 102
    }
}
```

**Each object has its own copy of data members but shares methods.**

---

## Detailed Example: Car Class

```java
class Car {
    // Attributes (Data Members)
    String brand;
    String model;
    int year;
    String color;
    double price;
    
    // Behaviors (Methods)
    void start() {
        System.out.println(brand + " " + model + " is starting...");
    }
    
    void accelerate() {
        System.out.println(model + " is accelerating!");
    }
    
    void brake() {
        System.out.println(model + " is braking!");
    }
    
    void displayInfo() {
        System.out.println("=== Car Details ===");
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Color: " + color);
        System.out.println("Price: ₹" + price);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating first car object
        Car car1 = new Car();
        car1.brand = "Maruti";
        car1.model = "Swift";
        car1.year = 2023;
        car1.color = "Red";
        car1.price = 700000;
        
        // Creating second car object
        Car car2 = new Car();
        car2.brand = "Honda";
        car2.model = "City";
        car2.year = 2024;
        car2.color = "White";
        car2.price = 1200000;
        
        // Using first car
        car1.displayInfo();
        car1.start();
        car1.accelerate();
        
        System.out.println();
        
        // Using second car
        car2.displayInfo();
        car2.start();
        car2.brake();
    }
}
```

**Output**:
```
=== Car Details ===
Brand: Maruti
Model: Swift
Year: 2023
Color: Red
Price: ₹700000.0
Maruti Swift is starting...
Swift is accelerating!

=== Car Details ===
Brand: Honda
Model: City
Year: 2024
Color: White
Price: ₹1200000.0
Honda City is starting...
City is braking!
```

---

## Memory Representation

```
Stack Memory              Heap Memory
═════════════              ══════════════════════════════
                          
car1 ───────────────>     ┌─────────────────────┐
[Reference]               │ Car Object          │
                          ├─────────────────────┤
                          │ brand: "Maruti"     │
                          │ model: "Swift"      │
                          │ year: 2023          │
                          │ color: "Red"        │
                          │ price: 700000       │
                          └─────────────────────┘

car2 ───────────────>     ┌─────────────────────┐
[Reference]               │ Car Object          │
                          ├─────────────────────┤
                          │ brand: "Honda"      │
                          │ model: "City"       │
                          │ year: 2024          │
                          │ color: "White"      │
                          │ price: 1200000      │
                          └─────────────────────┘
```

---

## Class vs Object

| Feature | Class | Object |
|---------|-------|--------|
| **Definition** | Blueprint/Template | Instance of class |
| **Type** | Logical entity | Physical entity |
| **Memory** | No memory allocated | Memory allocated in heap |
| **Creation** | Once | Multiple times |
| **Keyword** | class | new |
| **Example** | Student, Car | s1, car1 |
| **Contains** | Attributes + Methods definition | Actual values for attributes |

---

## Multiple Objects

```java
class Book {
    String title;
    String author;
    double price;
    
    void displayInfo() {
        System.out.println(title + " by " + author + " - ₹" + price);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating multiple book objects
        Book b1 = new Book();
        b1.title = "Java Complete Reference";
        b1.author = "Herbert Schildt";
        b1.price = 599;
        
        Book b2 = new Book();
        b2.title = "Head First Java";
        b2.author = "Kathy Sierra";
        b2.price = 499;
        
        Book b3 = new Book();
        b3.title = "Effective Java";
        b3.author = "Joshua Bloch";
        b3.price = 650;
        
        // Display all books
        b1.displayInfo();
        b2.displayInfo();
        b3.displayInfo();
    }
}
```

**One class, multiple objects with different data!**

---

## Anonymous Objects

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        // Anonymous object (no reference variable)
        int result = new Calculator().add(10, 20);
        System.out.println("Sum: " + result);
        
        // Can't reuse - created and destroyed
    }
}
```

**Use when object needed only once.**

---

## Important Points

### About Class:
1. Class is a template/blueprint
2. Defined using `class` keyword
3. Contains data members and methods
4. No memory allocated when defined
5. Can create multiple objects from one class

### About Object:
1. Object is an instance of class
2. Created using `new` keyword
3. Has its own copy of instance variables
4. Stored in heap memory
5. Accessed through reference variable

---

## Real-World Mapping

```
Real World          →    Class          →    Objects
═══════════              ═════              ══════════

Human               →    class Human    →    Rahul, Priya, Amit
Mobile Phone        →    class Phone    →    iPhone, Samsung, OnePlus
Bank Account        →    class Account  →    acc1, acc2, acc3
Dog                 →    class Dog      →    Tommy, Bruno, Max
```

---

## Common Mistakes

### ❌ Wrong:
```java
Student s1;         // Only reference created, no object
s1.name = "Rahul";  // NullPointerException!
```

### ✅ Correct:
```java
Student s1 = new Student();  // Object created
s1.name = "Rahul";           // Works fine!
```

---

## Important Interview Questions

**Q1: What is the difference between Class and Object?**

A class is a blueprint/template that defines structure and behavior, while an object is an instance of that class with actual values. Class is a logical entity (no memory), object is a physical entity (memory in heap).

**Q2: Can we create a class without objects?**

Yes, we can define a class without creating objects. But to use non-static members, we need objects. Static members can be accessed without objects.

**Q3: How many objects can be created from one class?**

Unlimited! One class can create as many objects as memory allows. Each object is independent with its own data.

**Q4: What happens when we create an object?**

1. Memory is allocated in heap
2. Constructor is called
3. Instance variables are initialized
4. Reference is returned and stored in reference variable

**Q5: Can we have a class without any methods?**

Yes! A class can have only data members (like DTO - Data Transfer Objects).

```java
class Point {
    int x;
    int y;
}
```

---

## Short Recap

**Class**:
- Blueprint/Template
- Logical entity
- No memory allocation
- Defined once
- Contains: attributes + methods

**Object**:
- Instance of class
- Physical entity
- Memory allocated in heap
- Created using `new`
- Has actual values

**Relationship**: Class is to Object what Blueprint is to House!

```
╔════════════════════════════════════════════════════════════════════════╗
║                        CLASS AND OBJECT                                ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║   CLASS (Blueprint)               OBJECTS (Instances)                 ║
║   ═══════════════                 ═══════════════════                 ║
║                                                                        ║
║   ┌───────────────────┐                                               ║
║   │  class Student    │           ┌────────────────┐                  ║
║   ├───────────────────┤           │ Student s1     │                  ║
║   │  String name      │    ────>  │ name: "Rahul"  │                  ║
║   │  int rollNo       │           │ rollNo: 101    │                  ║
║   │                   │           └────────────────┘                  ║
║   │  void study()     │                                               ║
║   │  void display()   │           ┌────────────────┐                  ║
║   └───────────────────┘    ────>  │ Student s2     │                  ║
║                                   │ name: "Priya"  │                  ║
║   One Class                       │ rollNo: 102    │                  ║
║   (Template)                      └────────────────┘                  ║
║                                                                        ║
║                                   Multiple Objects                    ║
║                                   (Actual Instances)                  ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```
