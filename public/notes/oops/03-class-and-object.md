# CLASS AND OBJECT

## Concept Introduction

- **Class:** A class is a user-defined blueprint or template that specifies the structure (attributes/properties) and behavior (methods/functions) that objects created from it will have. It defines the data types, access levels, constructors, and the operations that an object can perform. A class itself is a logical concept — it describes what an object should contain and do, but it does not allocate memory for instance data until an object is created.

- **Object:** An object is a concrete instance of a class. It is a runtime entity that occupies memory, holds actual values for the attributes defined by the class, and can invoke the methods declared in the class. Objects have identity (distinct references), state (current values of attributes), and behavior (methods they can perform).

Why this matters:

- Classes let you define reusable data types once and create many independent objects from them. This avoids code duplication, enforces consistency, and maps real-world concepts cleanly into code.
- Objects model real things (or abstract entities) with their own state and behavior, making your programs easier to design, reason about, and maintain.

## Why These Concepts Exist

### The Problem
Without classes, you would need to write separate code for every single entity. For example, if your program needs to handle 100 students, you'd be repeating the same code 100 times — which is inefficient and hard to maintain.

Without classes, har entity ke liye alag-alag code likhna padta. Agar 100 students ho to 100 baar same code repeat karna padega.

### The Solution
Define a `class` as a template once and create as many `objects` (instances) from it as you need. This avoids duplication, centralizes behavior, and makes the code easier to manage and extend.

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

## Memory Representation

```
        ╔═══════════════════╗                      ╔══════════════════════════════════╗
        ║   STACK MEMORY    ║                      ║          HEAP MEMORY             ║
        ╚═════════╦═════════╝                      ╚════════════════╦═════════════════╝
                  ║                                                 ║
                  ║                                                 ║
        ╔═════════╩═════════╗                      ╔════════════════╩═════════════════╗
        ║       car1        ║                      ║          Car Object              ║
        ║    [Reference]    ║═════════════════════>╠══════════════════════════════════╣
        ╚═══════════════════╝                      ║  brand: "Maruti"                 ║
                                                   ║  model: "Swift"                  ║
                                                   ║  year: 2023                      ║
                                                   ║  color: "Red"                    ║
                                                   ║  price: 700000                   ║
                                                   ╚══════════════════════════════════╝
                  
        ╔═══════════════════╗                      ╔══════════════════════════════════╗
        ║       car2        ║                      ║          Car Object              ║
        ║    [Reference]    ║═════════════════════>╠══════════════════════════════════╣
        ╚═══════════════════╝                      ║  brand: "Honda"                  ║
                                                   ║  model: "City"                   ║
                                                   ║  year: 2024                      ║
                                                   ║  color: "White"                  ║
                                                   ║  price: 1200000                  ║
                                                   ╚══════════════════════════════════╝
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
        
        b1.displayInfo();
        b2.displayInfo();
        b3.displayInfo();
    }
}
```

**One class, multiple objects with different data!**

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
    ╔════════════════════════════════════════════════════════════════╗
    ║  Real World          →    Class          →    Objects          ║
    ╚════════════════════════════════════════════════════════════════╝

    ╔═══════════════════════════════════════════════════════════════════╗
    ║ Human               ║ class Human    ║ Rahul, Priya, Amit         ║
    ╠═════════════════════╬════════════════╬════════════════════════════╣
    ║ Mobile Phone        ║ class Phone    ║ iPhone, Samsung, OnePlus   ║
    ╠═════════════════════╬════════════════╬════════════════════════════╣
    ║ Bank Account        ║ class Account  ║ acc1, acc2, acc3           ║
    ╠═════════════════════╬════════════════╬════════════════════════════╣
    ║ Dog                 ║ class Dog      ║ Tommy, Bruno, Max          ║
    ╚═════════════════════╩════════════════╩════════════════════════════╝
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

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                          CLASS AND OBJECT                                        ║
╚══════════════════════════════════════════════════════════════════════════════════╝


                    ╔═══════════════════════════════════════╗
                    ║          CLASS (Blueprint)            ║
                    ╠═══════════════════════════════════════╣
                    ║                                       ║
                    ║   class Student {                     ║
                    ║       String name;                    ║
                    ║       int rollNo;                     ║
                    ║                                       ║
                    ║       void study() { }                ║
                    ║       void display() { }              ║
                    ║   }                                   ║
                    ║                                       ║
                    ║   NO MEMORY ALLOCATED YET             ║
                    ╚═══════════════╦═══════════════════════╝
                                    ║
                                    ║  new Student()
                                    ║
            ╔═══════════════════════╬═══════════════════════╗
            ║                       ║                       ║
            ▼                       ▼                       ▼
  ╔═══════════════════╗  ╔═══════════════════╗  ╔═══════════════════╗
  ║   OBJECT s1       ║  ║   OBJECT s2       ║  ║   OBJECT s3       ║
  ╠═══════════════════╣  ╠═══════════════════╣  ╠═══════════════════╣
  ║ name = "Rahul"    ║  ║ name = "Priya"    ║  ║ name = "Amit"     ║
  ║ rollNo = 101      ║  ║ rollNo = 102      ║  ║ rollNo = 103      ║
  ╠═══════════════════╣  ╠═══════════════════╣  ╠═══════════════════╣
  ║ study()           ║  ║ study()           ║  ║ study()           ║
  ║ display()         ║  ║ display()         ║  ║ display()         ║
  ╚═══════════════════╝  ╚═══════════════════╝  ╚═══════════════════╝

       HEAP MEMORY            HEAP MEMORY            HEAP MEMORY
  (Independent Instance)  (Independent Instance) (Independent Instance)


╔══════════════════════════════════════════════════════════════════════════════════╗
║                     OBJECT CREATION FLOW                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║        Student s1 = new Student();                                               ║
║        ═══════════════════════════                                               ║
║                                                                                  ║
║    ╔═══════════════╗      ╔═════════════════╗      ╔═════════════════════╗       ║
║    ║   Student s1  ║      ║      new        ║      ║    Student()        ║       ║
║    ╠═══════════════╣      ╠═════════════════╣      ╠═════════════════════╣       ║
║    ║ Reference     ║      ║ Allocates       ║      ║ Constructor called  ║       ║
║    ║ variable      ║      ║ memory in       ║      ║ Initializes         ║       ║
║    ║ in STACK      ║      ║ HEAP            ║      ║ object              ║       ║
║    ╚═══════╦═══════╝      ╚════════╦════════╝      ╚══════════╦══════════╝       ║
║            ║                       ║                          ║                  ║
║            ╚═══════════════════════╩══════════════════════════╝                  ║
║                                    ║                                             ║
║                                    ▼                                             ║
║                          ╔═════════════════════╗                                 ║
║                          ║  Object Created     ║                                 ║
║                          ║  Reference Stored   ║                                 ║
║                          ╚═════════════════════╝                                 ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                        MEMORY LAYOUT                                             ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║         STACK MEMORY                          HEAP MEMORY                        ║
║    ╔════════════════════╗              ╔════════════════════════╗                ║
║    ║                    ║              ║                        ║                ║
║    ║  ┌──────────────┐  ║              ║  ┌──────────────────┐  ║                ║
║    ║  │ s1 = 0x100   │──╬──────────────╬─►│ Object @ 0x100   │  ║                ║
║    ║  └──────────────┘  ║              ║  │ name = "Rahul"   │  ║                ║
║    ║                    ║              ║  │ rollNo = 101     │  ║                ║
║    ║  ┌──────────────┐  ║              ║  └──────────────────┘  ║                ║
║    ║  │ s2 = 0x200   │──╬──────────────╬─►┌──────────────────┐  ║                ║
║    ║  └──────────────┘  ║              ║  │ Object @ 0x200   │  ║                ║
║    ║                    ║              ║  │ name = "Priya"   │  ║                ║
║    ║  References        ║              ║  │ rollNo = 102     │  ║                ║
║    ║  (addresses)       ║              ║  └──────────────────┘  ║                ║
║    ║                    ║              ║                        ║                ║
║    ║                    ║              ║  Actual Objects        ║                ║
║    ╚════════════════════╝              ╚════════════════════════╝                ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                        CLASS VS OBJECT                                           ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║         CLASS                                    OBJECT                          ║
║   ╔═══════════════════╗                   ╔═══════════════════╗                  ║
║   ║  Blueprint        ║                   ║  Instance         ║                  ║
║   ║  Template         ║                   ║  Actual Entity    ║                  ║
║   ║  Logical Entity   ║       ────►       ║  Physical Entity  ║                  ║
║   ║  No Memory        ║                   ║  Memory in Heap   ║                  ║
║   ║  Defined Once     ║                   ║  Multiple Copies  ║                  ║
║   ╚═══════════════════╝                   ╚═══════════════════╝                  ║
║                                                                                  ║
║                                                                                  ║
║         ANALOGY                                                                  ║
║   ═══════════════════════════════════════════════════════════════                ║
║                                                                                  ║
║     Cookie Cutter (CLASS)  ────►  Actual Cookies (OBJECTS)                       ║
║     House Blueprint (CLASS) ────► Actual Houses (OBJECTS)                        ║
║     Car Design (CLASS)     ────►  Real Cars (OBJECTS)                            ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
