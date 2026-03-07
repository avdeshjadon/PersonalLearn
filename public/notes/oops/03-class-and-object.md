# CLASS AND OBJECT

## Concept Introduction

- **Class:** A class is a user-defined blueprint or template that specifies the structure (attributes/properties) and behavior (methods/functions) that objects created from it will have. It defines the data types, access levels, constructors, and the operations that an object can perform.

- **Object:** An object is a concrete instance of a class. It is a runtime entity that occupies memory, holds actual values for the attributes defined by the class, and can invoke the methods declared in the class. Objects have identity (distinct references), state (current values of attributes), and behavior (methods they can perform).

## Why there is a need of classes and objects

- Classes let you define reusable data types once and create many independent objects from them. This avoids code duplication, enforces consistency, and maps real-world concepts cleanly into code.
- Objects model real things (or abstract entities) with their own state and behavior, making your programs easier to design, reason about, and maintain.

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

| Feature        | Class                           | Object                       |
| -------------- | ------------------------------- | ---------------------------- |
| **Definition** | Blueprint/Template              | Instance of class            |
| **Type**       | Logical entity                  | Physical entity              |
| **Memory**     | No memory allocated             | Memory allocated in heap     |
| **Creation**   | Once                            | Multiple times               |
| **Keyword**    | class                           | new                          |
| **Contains**   | Attributes + Methods definition | Actual values for attributes |

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

---

## Short Recap

**Class**:

1. Class is a template/blueprint
2. Defined using `class` keyword
3. Contains data members and methods
4. No memory allocated when defined
5. Can create multiple objects from one class

**Object**:

1. Object is an instance of class
2. Created using `new` keyword
3. Has its own copy of instance variables
4. Stored in heap memory
5. Accessed through reference variable

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

```
