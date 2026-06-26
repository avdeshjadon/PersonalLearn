# INHERITANCE

## Concept Introduction

Inheritance is a mechanism where a new class (child/subclass) acquires properties and behaviors of an existing class (parent/superclass).

---

## Why Inheritance Exists

### The Problem: Code Duplication

Without inheritance, if multiple classes (like Dog, Cat, Cow) share common behaviors (like eat(), sleep()), we would have to write the **same code in every class**. This leads to:

- **Redundancy**: Writing the same logic multiple times.
- **Maintenance Nightmare**: If we need to change how eat() works, we have to update it in every single class.
- **Errors**: Higher chance of making mistakes while copying code.

### The Solution: Inheritance

Inheritance solves this by allowing us to create a common **Parent Class** (e.g., Animal) that contains these shared features.

- We define the common methods (eat(), sleep()) **once** in the Parent class.
- The **Child Classes** (Dog, Cat) then **inherit** these methods automatically using the extends keyword.
- Child classes only need to define their **unique** behaviors (like bark() for Dog, meow() for Cat).

**Result**: We write the common code only once and reuse it everywhere!

---

## Types of Inheritance in Java

_For detailed explanations and code examples, see [types-of-inheritance](./13-types-of-inheritance.md)._

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

## Advantages of Inheritance

| Advantage                       | Description                       |
| ------------------------------- | --------------------------------- |
| **Code Reusability**            | Use parent code without rewriting |
| **Method Overriding**           | Runtime polymorphism              |
| **Extensibility**               | Easy to add new features          |
| **Hierarchical Classification** | Natural organization              |
| **Less Code**                   | Avoid duplication                 |

---

## Disadvantages

| Disadvantage       | Description                         |
| ------------------ | ----------------------------------- |
| **Tight Coupling** | Parent-child tightly coupled        |
| **Complexity**     | Deep hierarchies hard to understand |
| **Performance**    | Slight overhead                     |

---

## Access Modifiers in Inheritance

| Modifier      | Inherited?         | Accessible in Child? |
| ------------- | ------------------ | -------------------- |
| **private**   | No                 | No                   |
| **default**   | Yes (same package) | Yes (same package)   |
| **protected** | Yes                | Yes                  |
| **public**    | Yes                | Yes                  |

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

- Access parent class variables: super.variable
- Call parent class methods: super.method()
- Call parent class constructor: super()

**Q5: Can we override private methods?**

No! Private methods are not inherited, so cannot be overridden.

---

## Short Recap

**Inheritance**: Child class inherits parent's properties and methods

**Keyword**: extends

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
║                           SUPER KEYWORD USAGE                                    ║
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
