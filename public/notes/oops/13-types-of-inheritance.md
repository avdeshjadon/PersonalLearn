# TYPES OF INHERITANCE

## Concept Introduction

Jab ek **child** apne **parent** se property inherit karta hai, to yeh **inheritance** kehlata hai. Par inheritance ke **different types** hote hain - jaise ek bachcha sirf ek parent se, do parents se (Java mein nahi), ya grandparent se. Java mein **5 types** ki inheritance hoti hai - **Single**, **Multilevel**, **Hierarchical**, **Multiple** (not supported), aur **Hybrid**.

**Types of Inheritance = Alag-alag tareeke se parent-child relationship banana**

---

## Definitions

### Very Simple Definition
Inheritance ke alag-alag types hote hain jaise ek class ek se inherit kare, multiple se kare, ya chain mein kare.

### Simple Definition
Types of Inheritance refers to different ways in which a class can inherit properties and methods from parent classes - single parent, multiple levels, multiple children, or combinations.

### College Exam Definition
Types of Inheritance define the various patterns in which classes can inherit properties from parent classes. Java supports Single, Multilevel, and Hierarchical inheritance but does not support Multiple inheritance (through classes) to avoid ambiguity.

---

## 1. Single Inheritance

**Ek child class, ek parent class se inherit karta hai.**

```
    Parent
      ↓
    Child
```

### Code Example

```java
// Parent class
class Animal {
    void eat() {
        System.out.println("Animal eats food");
    }
}

// Child class inherits from Animal
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();  // Inherited from Animal
        dog.bark(); // Own method
    }
}
```

**Output:**
```
Animal eats food
Dog barks
```

---

## 2. Multilevel Inheritance

**Chain mein inheritance - Grandparent → Parent → Child**

```
  GrandParent
      ↓
    Parent
      ↓
    Child
```

### Code Example

```java
// GrandParent class
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

// Parent class inherits from Animal
class Mammal extends Animal {
    void breathe() {
        System.out.println("Mammal breathes");
    }
}

// Child class inherits from Mammal
class Dog extends Mammal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();     // From Animal (GrandParent)
        dog.breathe(); // From Mammal (Parent)
        dog.bark();    // Own method
    }
}
```

**Output:**
```
Animal eats
Mammal breathes
Dog barks
```

---

## 3. Hierarchical Inheritance

**Ek parent se multiple children inherit karte hain.**

```
      Parent
     /  |  \
    /   |   \
 Child1 Child2 Child3
```

### Code Example

```java
// Parent class
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

// Child 1
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Child 2
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}

// Child 3
class Cow extends Animal {
    void moo() {
        System.out.println("Cow moos");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();  // Inherited from Animal
        dog.bark();
        
        Cat cat = new Cat();
        cat.eat();  // Inherited from Animal
        cat.meow();
        
        Cow cow = new Cow();
        cow.eat();  // Inherited from Animal
        cow.moo();
    }
}
```

---

## 4. Multiple Inheritance (NOT SUPPORTED in Java for Classes)

**Ek child, multiple parents se inherit karta hai.**

```
  Parent1   Parent2
      \      /
       \    /
        Child
```

### Why Not Supported?

**Diamond Problem** ke wajah se - Ambiguity create hoti hai.

```java
// This DOES NOT work in Java
class Parent1 {
    void show() {
        System.out.println("Parent1");
    }
}

class Parent2 {
    void show() {
        System.out.println("Parent2");
    }
}

// ERROR: Cannot extend multiple classes
class Child extends Parent1, Parent2 {  //  Compilation Error
    // Which show() should be inherited?
}
```

### Solution: Use Interfaces

```java
// Interface 1
interface Flyable {
    void fly();
}

// Interface 2
interface Swimmable {
    void swim();
}

// Class implementing multiple interfaces
class Duck implements Flyable, Swimmable {
    public void fly() {
        System.out.println("Duck flies");
    }
    
    public void swim() {
        System.out.println("Duck swims");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Duck duck = new Duck();
        duck.fly();
        duck.swim();
    }
}
```

---

## 5. Hybrid Inheritance

**Combination of two or more types of inheritance.**

```
      A
     / \
    B   C
     \ /
      D
```

### Not Directly Supported (Due to Diamond Problem)

```java
// Diamond Problem Example
class A {
    void display() {
        System.out.println("A");
    }
}

class B extends A {
    void display() {
        System.out.println("B");
    }
}

class C extends A {
    void display() {
        System.out.println("C");
    }
}

// ERROR: Cannot inherit from both B and C
// class D extends B, C { }  //  Not allowed
```

### Solution: Use Interfaces

```java
// Base class
class Vehicle {
    void move() {
        System.out.println("Vehicle moves");
    }
}

// Interface 1
interface Electric {
    void charge();
}

// Interface 2
interface Fuel {
    void refuel();
}

// Hybrid car: extends class + implements interfaces
class HybridCar extends Vehicle implements Electric, Fuel {
    public void charge() {
        System.out.println("Charging battery");
    }
    
    public void refuel() {
        System.out.println("Refueling tank");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        HybridCar car = new HybridCar();
        car.move();    // From Vehicle
        car.charge();  // From Electric interface
        car.refuel();  // From Fuel interface
    }
}
```

---

## Real-World Example

```java
// Hierarchical + Multilevel (Hybrid concept)

// Base class
class Employee {
    String name;
    int id;
    
    void work() {
        System.out.println("Employee working");
    }
}

// Manager (inherits from Employee)
class Manager extends Employee {
    void manage() {
        System.out.println("Manager managing team");
    }
}

// Developer (inherits from Employee)
class Developer extends Employee {
    void code() {
        System.out.println("Developer coding");
    }
}

// Senior Developer (Multilevel: inherits from Developer)
class SeniorDeveloper extends Developer {
    void mentor() {
        System.out.println("Senior Developer mentoring juniors");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Manager mgr = new Manager();
        mgr.name = "Rahul";
        mgr.work();
        mgr.manage();
        
        SeniorDeveloper sd = new SeniorDeveloper();
        sd.name = "Priya";
        sd.work();    // From Employee (GrandParent)
        sd.code();    // From Developer (Parent)
        sd.mentor();  // Own method
    }
}
```

---

## Comparison Table

| Type | Diagram | Classes Involved | Supported in Java | Example |
|------|---------|------------------|-------------------|---------|
| **Single** | A→B | 1 Parent, 1 Child |  Yes | Animal → Dog |
| **Multilevel** | A→B→C | Chain (3+ levels) |  Yes | Animal → Mammal → Dog |
| **Hierarchical** | A→B,C,D | 1 Parent, Multiple Children |  Yes | Animal → Dog, Cat, Cow |
| **Multiple** | A,B→C | Multiple Parents, 1 Child |  No (Classes),  Yes (Interfaces) | Flyable, Swimmable → Duck |
| **Hybrid** | Combination | Mix of above |  No (Classes),  Yes (Interfaces) | Vehicle + Electric + Fuel → HybridCar |

---

## Diamond Problem Explained

```
        A
       / \
      B   C
       \ /
        D
```

**Problem:**
- If B and C both override a method from A
- D inherits from both B and C
- Which version should D inherit? Ambiguity!

```java
class A {
    void show() { 
        System.out.println("A"); 
    }
}

class B extends A {
    void show() { 
        System.out.println("B"); 
    }
}

class C extends A {
    void show() { 
        System.out.println("C"); 
    }
}

// D inherits from B and C - which show()?
// class D extends B, C { }  //  ERROR
```

**Solution:** Java doesn't allow multiple inheritance through classes. Use interfaces instead.

---

## Important Interview Questions

**Q1: What are the types of inheritance in Java?**

Java supports three types of inheritance:
1. **Single Inheritance** - One child from one parent
2. **Multilevel Inheritance** - Chain of inheritance (A→B→C)
3. **Hierarchical Inheritance** - Multiple children from one parent

Multiple and Hybrid inheritance are not supported for classes but can be achieved through interfaces.

**Q2: Why doesn't Java support Multiple Inheritance?**

Java doesn't support multiple inheritance through classes to avoid the **Diamond Problem** - ambiguity when two parent classes have methods with the same signature. However, it's supported through interfaces since interfaces only have method declarations (before Java 8) or default methods (after Java 8) which must be explicitly overridden.

**Q3: Can we achieve Multiple Inheritance in Java?**

Yes, through **interfaces**. A class can implement multiple interfaces. Example:
```java
interface A { }
interface B { }
class C implements A, B { }
```

**Q4: What is the Diamond Problem?**

The Diamond Problem occurs in multiple inheritance when a class inherits from two classes that both inherit from a common parent, creating ambiguity about which parent's methods to inherit.

**Q5: Difference between Multilevel and Multiple Inheritance?**

- **Multilevel**: Chain inheritance (A→B→C) - one parent at each level
- **Multiple**: One class inherits from multiple parents (A,B→C) - not supported in Java for classes

---

## Short Recap

Java mein **3 types** ki inheritance support hoti hai:

1. **Single** - One parent → One child
2. **Multilevel** - GrandParent → Parent → Child (chain)
3. **Hierarchical** - One parent → Multiple children

**Multiple Inheritance** (multiple parents → one child) classes ke liye support nahi hai kyunki **Diamond Problem** ho sakti hai. Lekin **interfaces** ke through achieve kar sakte hain.

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                          TYPES OF INHERITANCE                                     ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   1. SINGLE INHERITANCE              2. MULTILEVEL INHERITANCE                    ║
║   ═══════════════════════            ══════════════════════════                   ║
║                                                                                   ║
║   ╔═══════════════════╗              ╔═══════════════════╗                        ║
║   ║      Animal       ║              ║      Animal       ║  (GrandParent)         ║
║   ║  ───────────────  ║              ║  ───────────────  ║                        ║
║   ║  + eat()          ║              ║  + eat()          ║                        ║
║   ╚═════════╤═════════╝              ╚═════════╤═════════╝                        ║
║             │ extends                          │ extends                          ║
║             ▼                                  ▼                                  ║
║   ╔═══════════════════╗              ╔═══════════════════╗                        ║
║   ║       Dog         ║              ║      Mammal       ║  (Parent)              ║
║   ║  ───────────────  ║              ║  ───────────────  ║                        ║
║   ║  + bark()         ║              ║  + breathe()      ║                        ║
║   ╚═══════════════════╝              ╚═════════╤═════════╝                        ║
║                                                │ extends                          ║
║                                                ▼                                  ║
║                                      ╔═══════════════════╗                        ║
║                                      ║       Dog         ║  (Child)               ║
║                                      ║  ───────────────  ║                        ║
║                                      ║  + bark()         ║                        ║
║                                      ╚═══════════════════╝                        ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   3. HIERARCHICAL INHERITANCE        4. MULTIPLE INHERITANCE                      ║
║   ═══════════════════════════        ═══════════════════════                      ║
║                                                                                   ║
║         ╔═══════════════╗            ╔═══════════╗   ╔═══════════╗                ║
║         ║    Animal     ║            ║  Parent1  ║   ║  Parent2  ║                ║
║         ╚═══════╤═══════╝            ╚═════╤═════╝   ╚═════╤═════╝                ║
║       ┌─────────┼─────────┐                │               │                      ║
║       │         │         │                └───────┬───────┘                      ║
║       ▼         ▼         ▼                        ▼                              ║
║   ╔═══════╗ ╔═══════╗ ╔═══════╗            ╔═══════════════╗                      ║
║   ║  Dog  ║ ║  Cat  ║ ║  Cow  ║            ║     Child     ║   NOT SUPPORTED      ║
║   ╚═══════╝ ╚═══════╝ ╚═══════╝            ╚═══════════════╝     (Classes)        ║
║                                                                                   ║
║   One Parent → Multiple Children          Solution: Use INTERFACES ✓              ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   5. HYBRID INHERITANCE                DIAMOND PROBLEM                            ║
║   ═════════════════════              ════════════════════                         ║
║                                                                                   ║
║         ╔═══════════╗                        ╔═════╗                              ║
║         ║  Vehicle  ║                        ║  A  ║  display()                   ║
║         ╚═════╤═════╝                        ╚══╤══╝                              ║
║               │                            ┌───┴───┐                              ║
║         ┌─────┴─────┐                      ▼       ▼                              ║
║         ▼           ▼                   ╔═════╗ ╔═════╗                           ║
║   ╔═════════╗ ╔═════════╗               ║  B  ║ ║  C  ║  Which display()?         ║
║   ║   Car   ║ ║  Bike   ║               ╚══╤══╝ ╚══╤══╝                           ║
║   ╚═════════╝ ╚═════════╝                  └───┬───┘                              ║
║                                                ▼                                  ║
║   Use: class + interfaces                  ╔═════╗                                ║
║   for hybrid behavior                      ║  D  ║   AMBIGUITY!                   ║
║                                            ╚═════╝                                ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                         JAVA SUPPORT SUMMARY                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌───────────────────┬─────────────┬─────────────┐                               ║
║   │   Type            │   Classes   │  Interfaces │                               ║
║   ├───────────────────┼─────────────┼─────────────┤                               ║
║   │ Single            │     ✓       │      ✓      │                               ║
║   │ Multilevel        │     ✓       │      ✓      │                               ║
║   │ Hierarchical      │     ✓       │      ✓      │                               ║
║   │ Multiple          │     ✗       │      ✓      │                               ║
║   │ Hybrid            │     ✗       │      ✓      │                               ║
║   └───────────────────┴─────────────┴─────────────┘                               ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
