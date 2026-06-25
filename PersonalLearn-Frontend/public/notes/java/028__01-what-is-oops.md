# WHAT IS OOPs?

## Concept Introduction

Object-Oriented Programming is a programming paradigm based on the concept of objects which contain data (attributes) and code (methods). It emphasizes on data rather than functions and follows principles like encapsulation, inheritance, polymorphism, and abstraction.

---

## Why This Concept Exists

### Problem with Procedural Programming

Previously, programmers used **Procedural Programming** (like C programming), but it had several limitations:

- **Data Security Issue:** Data and functions were separate. Any function could modify the data, leading to security issues (Global Data problems).
- **Maintenance Problem:** As projects grew larger, managing the code became increasingly difficult.
- **No Reusability:** Resuing code was difficult; programmers often had to write the same code repeatedly.
- **Real World Modeling:** It was hard to represent real-world entities (like Car, BankAccount) in a procedural way.

### Solution: Object-Oriented Programming (OOPs)

OOPs provided a solution to all these problems:

- **Better Data Security:** Data and functions are bundled together into an **Object** (Encapsulation), making data more secure.
- **Code Reusability:** Old code can be reused using **Inheritance**.
- **Easy Maintenance:** Projects are broken down into smaller objects, making them easier to manage.
- **Real World Mapping:** We can represent real-world entities directly in code.

**In Simple Words:** Procedural programming focused on "how to do the task" (functions), whereas OOPs focuses on "what to do the task on" (objects).

---

## Benefits of OOPs

| Benefit             | Description                              | Example                                       |
| ------------------- | ---------------------------------------- | --------------------------------------------- |
| **Modularity**      | Dividing code into logical units         | Separate classes for Car, Engine, Wheel       |
| **Reusability**     | Reusing existing code                    | Inheritance through parent classes            |
| **Flexibility**     | Modifying code easily                    | Polymorphism allows different implementations |
| **Security**        | Protecting data from unauthorized access | Private variables, public methods             |
| **Maintenance**     | Easier code maintenance                  | Changes in one class don't affect others      |
| **Problem Solving** | Modeling real-world problems naturally   | Student, Teacher, Course as classes           |

---

## OOPs vs Procedural Programming

Before we look at the side-by-side comparison, here's the core idea you should keep in mind:

- Procedural programming centers around procedures or routines (functions). Programs are built by writing sequences of instructions and organizing them into functions that operate on separate data.
- Object-Oriented Programming (OOP) centers around objects that combine data and the operations that act on that data. OOP models problems as interacting entities (objects) which improves encapsulation, reuse, and maintainability in larger systems.

In short: procedural code focuses on actions (what the program does), while OOP focuses on the things (objects) the program manipulates.

| Feature              | Procedural  | OOPs                    |
| -------------------- | ----------- | ----------------------- |
| **Focus**            | Functions   | Objects                 |
| **Data & Functions** | Separate    | Together (encapsulated) |
| **Access**           | Global data | Controlled access       |
| **Reusability**      | Limited     | High (inheritance)      |
| **Security**         | Low         | High (encapsulation)    |
| **Examples**         | C, Pascal   | Java, C++, Python       |

---

## Important Interview Questions

**Q1: What is OOPs?**

Object-Oriented Programming is a programming paradigm based on objects which contain data and methods. It follows principles of encapsulation, inheritance, polymorphism, and abstraction.

**Q2: What are the main principles of OOPs?**

The four main pillars are:

1. **Encapsulation** - Data hiding
2. **Inheritance** - Code reusability
3. **Polymorphism** - Multiple forms
4. **Abstraction** - Hiding complexity

**Q3: Why use OOPs?**

- Code reusability through inheritance
- Better code organization
- Data security through encapsulation
- Easy maintenance and modification
- Models real-world problems naturally

**Q4: What is the difference between OOPs and Procedural Programming?**

Procedural focuses on functions and procedures, while OOPs focuses on objects that bundle data and methods together. OOPs provides better code organization, reusability, and security.

---

## Short Recap

**OOPs** is a programming style where we represent **real-world entities** in the form of **objects**. Objects contain **data** (attributes) and **methods** (behaviors).

**4 Pillars**: Encapsulation, Inheritance, Polymorphism, Abstraction

**Benefits**: Reusability, Security, Modularity, Easy Maintenance

---

## Visual Summary

```

╔══════════════════════════════════════════════════════════════════════════════════╗
║                             THE 4 PILLARS OF OOPs                                ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═════════════════╗  ╔═════════════════╗  ╔═════════════════╗  ╔════════════╗  ║
║   ║  ENCAPSULATION  ║  ║   INHERITANCE   ║  ║  POLYMORPHISM   ║  ║ ABSTRACTION║  ║
║   ╠═════════════════╣  ╠═════════════════╣  ╠═════════════════╣  ╠════════════╣  ║
║   ║                 ║  ║                 ║  ║                 ║  ║            ║  ║
║   ║  Data Hiding    ║  ║  Code Reuse     ║  ║  Many Forms     ║  ║ Hide       ║  ║
║   ║  +              ║  ║  +              ║  ║  +              ║  ║ Complexity ║  ║
║   ║  Data Bundling  ║  ║  IS-A Relation  ║  ║  Flexibility    ║  ║ +          ║  ║
║   ║                 ║  ║                 ║  ║                 ║  ║ Show       ║  ║
║   ║  private data   ║  ║  extends        ║  ║  Overloading    ║  ║ Interface  ║  ║
║   ║  public methods ║  ║  keyword        ║  ║  Overriding     ║  ║            ║  ║
║   ║                 ║  ║                 ║  ║                 ║  ║ abstract   ║  ║
║   ╚═════════════════╝  ╚═════════════════╝  ╚═════════════════╝  ╚════════════╝  ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                                 OOPs CONCEPT MAP                                 ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                               ╔═══════════╗                                      ║
║                               ║   OOPs    ║                                      ║
║                               ╚═════╦═════╝                                      ║
║                                     ║                                            ║
║            ╔════════════════════════╬════════════════════════╗                   ║
║            ║                        ║                        ║                   ║
║            ▼                        ▼                        ▼                   ║
║     ╔════════════╗          ╔════════════╗           ╔════════════╗              ║
║     ║   CLASS    ║          ║   OBJECT   ║           ║  4 PILLARS ║              ║
║     ╚══════╦═════╝          ╚══════╦═════╝           ╚══════╦═════╝              ║
║            ║                       ║                        ║                    ║
║            ▼                       ▼                        ▼                    ║
║         Blueprint              Instance of               Encapsulation           ║
║         Template               Class                     Inheritance             ║
║         User-defined           Actual Entity             Polymorphism            ║
║         Data Type              in Memory                 Abstraction             ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
