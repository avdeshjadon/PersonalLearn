# INHERITANCE

## Concept Introduction

Inheritance is an OOPs concept that allows a class to inherit fields and methods from another class. The class that inherits is called the subclass (derived class/child class), and the class being inherited from is called the superclass (base class/parent class). It promotes code reusability and establishes an "IS-A" relationship between classes.

Imagine **Family Inheritance** - Beta apne **Baap ki property** inherit karta hai. Code mein bhi same concept - **child class parent ki properties aur methods ko inherit kar sakti hai**. Isse **code reusability** milti hai aur **duplicate code** se bachte hain.

**Inheritance = Parent ka code Child mein automatically aa jata hai**

Real Example: **Animal → Dog** (Dog inherits eat(), sleep() from Animal)

---

## Why Inheritance Exists

### The Problem
Bina inheritance, har class mein same code repeat karna padta:

```java
class Dog {
    void eat() { }
    void sleep() { }
    void bark() { }
}

class Cat {
    void eat() { }      // Repeated!
    void sleep() { }    // Repeated!
    void meow() { }
}

class Cow {
    void eat() { }      // Repeated!
    void sleep() { }    // Repeated!
    void moo() { }
}
```

### The Solution
**Parent class** banao with common features, **child classes** inherit karo:

```java
class Animal {
    void eat() { }
    void sleep() { }
}

class Dog extends Animal {
    void bark() { }    // Only unique feature
}

class Cat extends Animal {
    void meow() { }    // Only unique feature
}
```

---

## Definitions

### Very Simple Definition
Ek class doosri class ki properties aur methods ko inherit (use) kar sakti hai.

### Simple Definition
Inheritance is a mechanism where a new class (child/subclass) acquires properties and behaviors of an existing class (parent/superclass).

### College Exam Definition
Inheritance is an OOPs concept that allows a class to inherit fields and methods from another class. The class that inherits is called the subclass (derived class/child class), and the class being inherited from is called the superclass (base class/parent class). It promotes code reusability and establishes an "IS-A" relationship between classes.

### Interview Definition
Inheritance is a fundamental OOPs principle that enables a new class to acquire properties (fields) and behaviors (methods) of an existing class, establishing a parent-child relationship. The child class (subclass/derived class) inherits non-private members from the parent class (superclass/base class) using the `extends` keyword in Java. It provides code reusability, method overriding capability, hierarchical classification, and polymorphism support. Java supports single, multilevel, and hierarchical inheritance but not multiple inheritance (through classes) to avoid the diamond problem.

### Deep Technical Definition
Inheritance is an OOPs mechanism implementing an "IS-A" relationship where a subclass extends a superclass using the `extends` keyword, inheriting accessible members (public, protected, default - except private) and creating a class hierarchy. During object creation, constructors execute from top to bottom (super to sub), while member access follows bottom to top (sub to super). Method overriding enables runtime polymorphism through dynamic method dispatch. Java supports single inheritance (one parent), multilevel inheritance (chain), hierarchical inheritance (multiple children), but prohibits multiple inheritance through classes to prevent ambiguity, though it's achievable via interfaces. The Object class is the root of Java's inheritance hierarchy.

---

## Syntax

```java
class Parent {
    // Parent members
}

class Child extends Parent {
    // Child members + Inherited members
}
```

**Keyword**: `extends`

---

## Types of Inheritance in Java

*For detailed explanations and code examples, see [`types-of-inheritance`](./13-types-of-inheritance.md).*

### 1. Single Inheritance
A single child class inherits from one parent class (Supported).

### 2. Multilevel Inheritance
A chain of inheritance where a child class becomes a parent for another class (Supported).

### 3. Hierarchical Inheritance
Multiple child classes inherit from a single parent class (Supported).

### 4. Multiple Inheritance (NOT Supported via Classes)
A child inherits from multiple parents. Java avoids this due to ambiguity (Diamond Problem), but supports it via **Interfaces**.

### 5. Hybrid Inheritance (NOT Supported via Classes)
A combination of two or more types of inheritance. Since Java does not support multiple inheritance with classes, hybrid inheritance is also restricted.

---

## IS-A Relationship

### Definition
**IS-A relationship** describes a type-of relationship between classes where the child class is a **specialized type** of the parent class. When class B extends class A, we say "B IS-A A".

**Simple Definition**: Agar `Dog extends Animal` hai, toh `Dog IS-A Animal` - matlab Dog ek type ka Animal hai.

**Technical Definition**: IS-A relationship is a unidirectional inheritance relationship that establishes a subtype-supertype hierarchy, where the subclass is considered a specialized version of the superclass and can be used anywhere the superclass is expected (Liskov Substitution Principle).

---

### How IS-A Works

```java
class Animal { }
class Dog extends Animal { }

//  Dog IS-A Animal (CORRECT - Dog is a type of Animal)
//  Animal IS-A Dog (WRONG - Animal is NOT a type of Dog)
```

**Direction matters!** IS-A relationship flows from **child → parent**, not parent → child.

```
    Animal (Superclass)
       ▲
       │ IS-A (Dog is a type of Animal)
       │
      Dog (Subclass)
```

---


### Real-World Examples

```java
// Example 1: Vehicle Hierarchy
class Vehicle { }
class Car extends Vehicle { }
class Bike extends Vehicle { }

//  Car IS-A Vehicle
//  Bike IS-A Vehicle
//  Vehicle IS-A Car

// Example 2: Employee Hierarchy
class Person { }
class Employee extends Person { }
class Manager extends Employee { }

//  Employee IS-A Person
//  Manager IS-A Employee
//  Manager IS-A Person (Transitive - through chain)

// Example 3: Shape Hierarchy
class Shape { }
class Circle extends Shape { }
class Rectangle extends Shape { }

//  Circle IS-A Shape
//  Rectangle IS-A Shape
```

---

## Advantages of Inheritance

| Advantage | Description |
|-----------|-------------|
| **Code Reusability** | Use parent code without rewriting |
| **Method Overriding** | Runtime polymorphism |
| **Extensibility** | Easy to add new features |
| **Hierarchical Classification** | Natural organization |
| **Less Code** | Avoid duplication |

---

## Disadvantages

| Disadvantage | Description |
|--------------|-------------|
| **Tight Coupling** | Parent-child tightly coupled |
| **Complexity** | Deep hierarchies hard to understand |
| **Performance** | Slight overhead |

---

## Access Modifiers in Inheritance

| Modifier | Inherited? | Accessible in Child? |
|----------|-----------|---------------------|
| **private** | No | No |
| **default** | Yes (same package) | Yes (same package) |
| **protected** | Yes | Yes |
| **public** | Yes | Yes |

```java
class Parent {
    private int a = 10;       // Not inherited
    int b = 20;               // Inherited (default)
    protected int c = 30;     // Inherited
    public int d = 40;        // Inherited
}

class Child extends Parent {
    void display() {
        // System.out.println(a);  // ERROR! private
        System.out.println(b);     // OK
        System.out.println(c);     // OK
        System.out.println(d);     // OK
    }
}
```

---

## Important Interview Questions

**Q1: What is Inheritance?**

Inheritance is a mechanism where one class acquires properties and methods of another class, enabling code reusability and establishing an IS-A relationship.

**Q2: Types of Inheritance in Java?**

Java supports:
- Single Inheritance
- Multilevel Inheritance
- Hierarchical Inheritance

NOT supported (via classes):
- Multiple Inheritance (use interfaces)
- Hybrid Inheritance

**Q3: Why multiple inheritance is not supported in Java?**

To avoid the **Diamond Problem** (ambiguity when two parents have same method). Java solves this using interfaces.

**Q4: What is the use of super keyword?**

- Access parent class variables: `super.variable`
- Call parent class methods: `super.method()`
- Call parent class constructor: `super()`

**Q5: Can we override private methods?**

No! Private methods are not inherited, so cannot be overridden.

---

## Short Recap

**Inheritance**: Child class inherits parent's properties and methods

**Keyword**: `extends`

**Types** (Supported in Java):
- Single
- Multilevel
- Hierarchical

**Benefits**:
- Code Reusability
- Method Overriding
- Less Code Duplication

**Relationship**: IS-A

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                            INHERITANCE                                           ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                       INHERITANCE CONCEPT                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                    ╔═══════════════════════════════════╗                         ║
║                    ║      PARENT CLASS (Animal)        ║                         ║
║                    ╠═══════════════════════════════════╣                         ║
║                    ║  ATTRIBUTES:                      ║                         ║
║                    ║    - name                         ║                         ║
║                    ║    - age                          ║                         ║
║                    ║  METHODS:                         ║                         ║
║                    ║    - eat()                        ║                         ║
║                    ║    - sleep()                      ║                         ║
║                    ╚═══════════════╦═══════════════════╝                         ║
║                                    ║                                             ║
║                                    ║ extends                                     ║
║                                    ║                                             ║
║          ╔═════════════════════════╩═════════════════════════╗                   ║
║          ║                                                   ║                   ║
║          ▼                                                   ▼                   ║
║   ╔═══════════════════════════╗               ╔═══════════════════════════╗      ║
║   ║   CHILD CLASS (Dog)       ║               ║   CHILD CLASS (Cat)       ║      ║
║   ╠═══════════════════════════╣               ╠═══════════════════════════╣      ║
║   ║  INHERITED:               ║               ║  INHERITED:               ║      ║
║   ║    - name, age            ║               ║    - name, age            ║      ║
║   ║    - eat(), sleep()       ║               ║    - eat(), sleep()       ║      ║
║   ║  OWN:                     ║               ║  OWN:                     ║      ║
║   ║    - bark()               ║               ║    - meow()               ║      ║
║   ╚═══════════════════════════╝               ╚═══════════════════════════╝      ║
║                                                                                  ║
║   Dog IS-A Animal                             Cat IS-A Animal                    ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                      TYPES OF INHERITANCE                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   1. SINGLE                     2. MULTILEVEL                                    ║
║   ══════════                    ═════════════                                    ║
║                                                                                  ║
║      ╔═════════╗                   ╔═════════╗                                   ║
║      ║    A    ║                   ║    A    ║                                   ║
║      ╚════╦════╝                   ╚════╦════╝                                   ║
║           ║                             ║                                        ║
║           ▼                             ▼                                        ║
║      ╔═════════╗                   ╔═════════╗                                   ║
║      ║    B    ║                   ║    B    ║                                   ║
║      ╚═════════╝                   ╚════╦════╝                                   ║
║                                         ║                                        ║
║      B extends A                        ▼                                        ║
║                                    ╔═════════╗                                   ║
║                                    ║    C    ║                                   ║
║                                    ╚═════════╝                                   ║
║                                                                                  ║
║                                    C extends B extends A                         ║
║                                                                                  ║
║                                                                                  ║
║   3. HIERARCHICAL               4. MULTIPLE (NOT in Java)                        ║
║   ═══════════════               ═════════════════════════                        ║
║                                                                                  ║
║      ╔═════════╗                   ╔═════════╗   ╔═════════╗                     ║
║      ║    A    ║                   ║    A    ║   ║    B    ║                     ║
║      ╚════╦════╝                   ╚════╦════╝   ╚════╦════╝                     ║
║     ╔═════╩═════╗                       ╚═════╦═══════╝                          ║
║     ║           ║                             ║                                  ║
║     ▼           ▼                             ▼                                  ║
║ ╔═════════╗ ╔═════════╗                  ╔═════════╗                             ║
║ ║    B    ║ ║    C    ║                  ║    C    ║                             ║
║ ╚═════════╝ ╚═════════╝                  ╚═════════╝                             ║
║                                                                                  ║
║  B & C extends A                   C extends A, B                                ║
║                                    (Use interfaces)                              ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                       WHAT IS INHERITED?                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║    class Parent {                                                                ║
║        private   int a;    ──────►  NOT Inherited                                ║
║                  int b;    ──────►  Inherited (default - same package)           ║
║        protected int c;    ──────►  Inherited                                    ║
║        public    int d;    ──────►  Inherited                                    ║
║    }                                                                             ║
║                                                                                  ║
║    ╔════════════════════════════════════════════════════════════════════╗        ║
║    ║                     INHERITANCE RULES                              ║        ║
║    ╠════════════════════════════════════════════════════════════════════╣        ║
║    ║                                                                    ║        ║
║    ║   INHERITED                    NOT INHERITED                       ║        ║
║    ║   ═════════                    ═════════════                       ║        ║
║    ║                                                                    ║        ║
║    ║   - public members             - private members                   ║        ║
║    ║   - protected members          - constructors                      ║        ║
║    ║   - default (same package)     - static members (belong to class)  ║        ║
║    ║                                                                    ║        ║
║    ╚════════════════════════════════════════════════════════════════════╝        ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    SUPER KEYWORD USAGE                                           ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║   super.variable      →   Access parent's variable                    ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║   super.method()      →   Call parent's method                        ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║   super()             →   Call parent's constructor (first line)      ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║                                                                                  ║
║   class Parent {                                                                 ║
║       int x = 10;                                                                ║
║       void show() { }                                                            ║
║   }                                                                              ║
║                                                                                  ║
║   class Child extends Parent {                                                   ║
║       int x = 20;                                                                ║
║       void show() {                                                              ║
║           System.out.println(x);        // 20 (child's x)                        ║
║           System.out.println(super.x);  // 10 (parent's x)                       ║
║           super.show();                 // calls parent's show()                 ║
║       }                                                                          ║
║   }                                                                              ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
