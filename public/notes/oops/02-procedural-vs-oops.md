# PROCEDURAL VS OOPs

## Concept Introduction

Procedural programming organizes a program as a sequence of steps and functions that operate on shared data. Object-Oriented Programming (OOP) models a program as a collection of interacting objects that bundle their own data and the operations on that data.

**Procedural = Step-by-step instructions (HOW)  |  OOPs = Objects with behavior (WHAT)**

---

## Key Differences

| Feature | Procedural Programming | Object-Oriented Programming |
|---------|----------------------|---------------------------|
| **Basic Unit** | Functions/Procedures | Objects |
| **Approach** | Top-down | Bottom-up |
| **Data & Functions** | Separate | Bundled together (encapsulation) |
| **Access Specifiers** | No concept | public, private, protected, default |
| **Data Security** | Low (global data accessible) | High (data hiding through encapsulation) |
| **Code Reusability** | Limited (through functions) | High (through inheritance) |
| **Examples** | C, Pascal, FORTRAN | Java, C++, Python, C# |
| **Best For** | Small programs | Large, complex programs |
| **Maintainability** | Difficult for large projects | Easy to maintain |
| **Modification** | Difficult | Easy |

---

## Important Interview Questions

**Q1: What is the main difference between Procedural and OOPs?**

Procedural focuses on functions that operate on data (data and functions are separate), while OOPs focuses on objects that bundle data with methods (data and functions together).

**Q2: Why is OOPs better than Procedural?**

OOPs provides:
- Better data security (encapsulation)
- Code reusability (inheritance)
- Flexibility (polymorphism)
- Easier maintenance
- Natural problem modeling

**Q3: Can we use both paradigms together?**

Yes! Languages like C++ support both. You can write procedural code with functions and also create classes/objects.

**Q4: Is OOPs always better?**

Not always. For small, simple programs, procedural might be simpler and faster. But for large, complex systems, OOPs is generally better.

---

## Short Recap

**Procedural Programming**:
- Functions + Separate Data
- Top-down approach
- No inheritance/polymorphism
- Less secure
- Examples: C, Pascal

**Object-Oriented Programming**:
- Objects (Data + Methods bundled)
- Bottom-up approach
- Supports inheritance & polymorphism
- More secure
- Examples: Java, C++, Python

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                        PROCEDURAL VS OOPs                                        ║
╚══════════════════════════════════════════════════════════════════════════════════╝

     PROCEDURAL PROGRAMMING                    OBJECT-ORIENTED PROGRAMMING
     ══════════════════════                    ═══════════════════════════

    ╔═════════════════════╗                    ╔═════════════════════════╗
    ║    GLOBAL DATA      ║                    ║        OBJECT 1         ║
    ║  ┌───────────────┐  ║                    ║  ╔═════════════════╗    ║
    ║  │ balance=1000  │  ║                    ║  ║  private data   ║    ║
    ║  │ name="Rahul"  │  ║                    ║  ║  balance=1000   ║    ║
    ║  └───────────────┘  ║                    ║  ╠═════════════════╣    ║
    ╚═════════╦═══════════╝                    ║  ║ public methods  ║    ║
              ║                                ║  ║ deposit()       ║    ║
              ▼                                ║  ║ withdraw()      ║    ║
    ╔═════════════════════╗                    ║  ╚═════════════════╝    ║
    ║     FUNCTIONS       ║                    ╚═════════════════════════╝
    ║  ┌───────────────┐  ║
    ║  │ deposit()     │  ║                    ╔═════════════════════════╗
    ║  │ withdraw()    │  ║                    ║        OBJECT 2         ║
    ║  │ checkBalance()│  ║                    ║  ╔═════════════════╗    ║
    ║  └───────────────┘  ║                    ║  ║  private data   ║    ║
    ╚═════════════════════╝                    ║  ║  balance=2000   ║    ║
                                               ║  ╠═════════════════╣    ║
         Data exposed                          ║  ║ public methods  ║    ║
         Anyone can modify                     ║  ║ deposit()       ║    ║
                                               ║  ║ withdraw()      ║    ║
                                               ║  ╚═════════════════╝    ║
                                               ╚═════════════════════════╝

                                                    Data protected
                                                    Controlled access


```
