# INHERITANCE

## Concept Introduction

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

## Basic Example

```java
// Parent Class (Superclass)
class Animal {
    String name;
    
    void eat() {
        System.out.println(name + " is eating");
    }
    
    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Child Class (Subclass)
class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.name = "Tommy";
        
        // Inherited methods from Animal
        dog.eat();      // Tommy is eating
        dog.sleep();    // Tommy is sleeping
        
        // Own method
        dog.bark();     // Tommy is barking
    }
}
```

**Dog ne Animal ki methods inherit kar li!**

---

## Detailed Example

```java
// Parent Class
class Vehicle {
    String brand;
    int wheels;
    
    void start() {
        System.out.println(brand + " is starting...");
    }
    
    void stop() {
        System.out.println(brand + " is stopping...");
    }
    
    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Wheels: " + wheels);
    }
}

// Child Class 1
class Car extends Vehicle {
    int doors;
    
    void playMusic() {
        System.out.println("Playing music in " + brand);
    }
}

// Child Class 2
class Bike extends Vehicle {
    boolean hasCarrier;
    
    void wheelie() {
        System.out.println(brand + " is doing a wheelie!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Car object
        Car car = new Car();
        car.brand = "Honda";     // Inherited from Vehicle
        car.wheels = 4;          // Inherited from Vehicle
        car.doors = 4;           // Own property
        
        car.start();             // Inherited method
        car.displayInfo();       // Inherited method
        car.playMusic();         // Own method
        
        System.out.println();
        
        // Bike object
        Bike bike = new Bike();
        bike.brand = "Royal Enfield";  // Inherited
        bike.wheels = 2;               // Inherited
        bike.hasCarrier = true;        // Own property
        
        bike.start();            // Inherited method
        bike.wheelie();          // Own method
        bike.stop();             // Inherited method
    }
}
```

---

## Types of Inheritance in Java

### 1. Single Inheritance
**One parent, one child**

```java
class A {
    void methodA() {
        System.out.println("Method A");
    }
}

class B extends A {
    void methodB() {
        System.out.println("Method B");
    }
}

public class Main {
    public static void main(String[] args) {
        B obj = new B();
        obj.methodA();  // From A
        obj.methodB();  // From B
    }
}
```

```
    A (Parent)
    ↑
    |
    B (Child)
```

### 2. Multilevel Inheritance
**Chain of inheritance**

```java
class GrandParent {
    void grandParentMethod() {
        System.out.println("GrandParent method");
    }
}

class Parent extends GrandParent {
    void parentMethod() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    void childMethod() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.grandParentMethod();  // From GrandParent
        obj.parentMethod();       // From Parent
        obj.childMethod();        // From Child
    }
}
```

```
    GrandParent
        ↑
        |
      Parent
        ↑
        |
      Child
```

### 3. Hierarchical Inheritance
**One parent, multiple children**

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}

class Cow extends Animal {
    void moo() {
        System.out.println("Cow moos");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();   // Inherited
        dog.bark();  // Own
        
        Cat cat = new Cat();
        cat.eat();   // Inherited
        cat.meow();  // Own
        
        Cow cow = new Cow();
        cow.eat();   // Inherited
        cow.moo();   // Own
    }
}
```

```
       Animal
      /  |  \
     /   |   \
   Dog  Cat  Cow
```

### 4. Multiple Inheritance (NOT SUPPORTED via classes)
**One child, multiple parents - NOT ALLOWED in Java**

```java
// ❌ This will give ERROR
class Father { }
class Mother { }

class Child extends Father, Mother {  // ERROR!
}
```

**Why not allowed?** Diamond Problem (ambiguity)

**Solution**: Use Interfaces

```java
interface Father {
    void fatherMethod();
}

interface Mother {
    void motherMethod();
}

class Child implements Father, Mother {
    public void fatherMethod() { }
    public void motherMethod() { }
}
```

### 5. Hybrid Inheritance (NOT SUPPORTED via classes)
Combination of multiple types - not directly supported

---

## Important Keywords

### 1. super keyword

```java
class Parent {
    int x = 10;
    
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    int x = 20;
    
    void display() {
        System.out.println("Child display");
    }
    
    void show() {
        System.out.println("Child x: " + x);          // 20
        System.out.println("Parent x: " + super.x);   // 10
        
        display();        // Child display
        super.display();  // Parent display
    }
}
```

**super** is used to access parent class members.

### 2. Constructor Chaining

```java
class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    Child() {
        super();  // Calls parent constructor (automatic)
        System.out.println("Child constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        Child c = new Child();
    }
}
```

**Output**:
```
Parent constructor
Child constructor
```

---

## Method Overriding in Inheritance

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        a1.sound();  // Dog barks
        
        Animal a2 = new Cat();
        a2.sound();  // Cat meows
    }
}
```

---

## IS-A Relationship

Inheritance represents **IS-A** relationship:

```java
class Animal { }
class Dog extends Animal { }

// Dog IS-A Animal ✅
// Animal IS-A Dog ❌
```

**Examples**:
- Car IS-A Vehicle ✅
- Employee IS-A Person ✅
- Circle IS-A Shape ✅

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

## Access in Inheritance

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

```
╔══════════════════════════════════════════════════════════════════════╗
║                          INHERITANCE                                 ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║   ┌────────────────────────────┐                                    ║
║   │    PARENT CLASS            │                                    ║
║   │    (Animal)                │                                    ║
║   ├────────────────────────────┤                                    ║
║   │  + name                    │                                    ║
║   │  + eat()                   │                                    ║
║   │  + sleep()                 │                                    ║
║   └────────────────────────────┘                                    ║
║                ↑                                                     ║
║                | extends                                             ║
║                |                                                     ║
║   ┌────────────────────────────┐                                    ║
║   │    CHILD CLASS             │                                    ║
║   │    (Dog)                   │                                    ║
║   ├────────────────────────────┤                                    ║
║   │  Inherited:                │                                    ║
║   │  + name                    │                                    ║
║   │  + eat()                   │                                    ║
║   │  + sleep()                 │                                    ║
║   │                            │                                    ║
║   │  Own:                      │                                    ║
║   │  + bark()                  │                                    ║
║   └────────────────────────────┘                                    ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```
