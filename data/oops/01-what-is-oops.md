# WHAT IS OOPs?

## Concept Introduction

Imagine tum ek **car** banate ho. Car mein **engine**, **wheels**, **steering** hote hain - yeh sab **parts** hain. Har part ka apna **kaam** hai. Engine start karta hai, wheels ghumte hain, steering direction change karta hai. Programming mein bhi agar hum **real-world objects** ki tarah code likhen, to use **Object-Oriented Programming (OOPs)** kehte hain.

**OOPs = Real-world entities ko code mein represent karna**

---

## Why This Concept Exists

### Problem with Procedural Programming

Pehle programmers **procedural programming** use karte the jahan:
- Sab kuch **functions** mein divide hota tha
- Data aur functions **separate** the
- Code **reuse** karna mushkil tha
- Large projects **manage** karna tough tha
- **Security** kam thi (koi bhi data access kar sakta tha)

```c
// Procedural approach (C language)
int balance = 1000;

void withdraw(int amount) {
    balance = balance - amount; // Anyone can modify balance
}

void deposit(int amount) {
    balance = balance + amount;
}
```

### Solution: Object-Oriented Programming

OOPs mein:
- Data aur functions **ek saath** bundle hote hain (objects mein)
- Code **reusable** hai (inheritance)
- Code **secure** hai (encapsulation)
- **Maintenance** easy hai
- **Real-world** problems ko naturally represent kar sakte hain

```java
// OOPs approach (Java)
class BankAccount {
    private int balance = 1000; // Protected data
    
    public void withdraw(int amount) {
        if (amount <= balance) {
            balance -= amount;
        }
    }
    
    public void deposit(int amount) {
        balance += amount;
    }
}
```

---

## Definitions

### Very Simple Definition
OOPs ek programming style hai jahan hum real-world ki cheezein (objects) banate hain aur unhe code mein use karte hain.

### Simple Definition
Object-Oriented Programming ek tarika hai programming ka jahan hum data aur functions ko ek saath objects mein bundle karte hain, real-world entities ki tarah.

### College Exam Definition
Object-Oriented Programming is a programming paradigm based on the concept of objects which contain data (attributes) and code (methods). It emphasizes on data rather than functions and follows principles like encapsulation, inheritance, polymorphism, and abstraction.

### Technical Definition
Object-Oriented Programming is a methodology that organizes software design around data (objects) rather than functions and logic. Objects are instances of classes that bundle data (attributes/properties) with methods (behaviors/functions) that operate on that data, promoting code reusability, modularity, and maintainability.

### Interview Definition
OOPs is a programming paradigm centered around objects which are instances of classes. It focuses on four main pillars: Encapsulation (data hiding), Inheritance (code reusability), Polymorphism (multiple forms), and Abstraction (hiding complexity). OOPs makes code more modular, reusable, scalable, and easier to maintain by modeling real-world entities as objects with properties and behaviors.

---

## Key Concepts of OOPs

### 1. Class
**Blueprint** ya **template** for creating objects.

```java
class Car {
    String brand;
    String color;
    int speed;
    
    void start() {
        System.out.println("Car started");
    }
    
    void accelerate() {
        speed += 10;
    }
}
```

### 2. Object
**Instance** of a class - real entity.

```java
Car myCar = new Car();
myCar.brand = "Toyota";
myCar.color = "Red";
myCar.start();
```

### 3. Encapsulation
Data aur methods ko **bundle** karna aur data ko **hide** karna.

```java
class BankAccount {
    private double balance; // Hidden
    
    public void deposit(double amount) {
        balance += amount;
    }
    
    public double getBalance() {
        return balance;
    }
}
```

### 4. Inheritance
Parent class se properties **inherit** karna.

```java
class Vehicle {
    void move() {
        System.out.println("Moving");
    }
}

class Car extends Vehicle {
    // Car automatically gets move() method
}
```

### 5. Polymorphism
**Same name**, different forms.

```java
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Bark");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Meow");
    }
}
```

### 6. Abstraction
**Essential features** dikhana, **complexity** hide karna.

```java
abstract class Shape {
    abstract double area(); // What to do
}

class Circle extends Shape {
    double radius;
    
    double area() { // How to do
        return 3.14 * radius * radius;
    }
}
```

---

## Real-World Example

```java
// Real-world entity: Student
class Student {
    // Data (attributes)
    private String name;
    private int rollNo;
    private double marks;
    
    // Constructor
    public Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = 0;
    }
    
    // Behaviors (methods)
    public void study() {
        System.out.println(name + " is studying");
    }
    
    public void setMarks(double marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
    
    public double getMarks() {
        return marks;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("Marks: " + marks);
    }
}

// Using the Student class
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Rahul", 101);
        s1.study();
        s1.setMarks(85.5);
        s1.displayInfo();
        
        Student s2 = new Student("Priya", 102);
        s2.setMarks(92.0);
        s2.displayInfo();
    }
}
```

---

## Benefits of OOPs

| Benefit | Description | Example |
|---------|-------------|---------|
| **Modularity** | Code ko logical units mein divide karna | Separate classes for Car, Engine, Wheel |
| **Reusability** | Code ko reuse karna | Inheritance through parent classes |
| **Flexibility** | Code ko easily modify karna | Polymorphism allows different implementations |
| **Security** | Data ko protect karna | Private variables, public methods |
| **Maintenance** | Code maintain karna easy | Changes in one class don't affect others |
| **Problem Solving** | Real-world problems naturally model karna | Student, Teacher, Course as classes |

---

## OOPs vs Procedural Programming

| Feature | Procedural | OOPs |
|---------|-----------|------|
| **Focus** | Functions | Objects |
| **Data & Functions** | Separate | Together (encapsulated) |
| **Access** | Global data | Controlled access |
| **Reusability** | Limited | High (inheritance) |
| **Security** | Low | High (encapsulation) |
| **Examples** | C, Pascal | Java, C++, Python |

---

## OOPs Languages

### Pure OOPs Languages
- **Java** - Everything is an object (except primitives)
- **C#** - .NET framework
- **Smalltalk** - First pure OOPs language

### Hybrid Languages
- **C++** - Supports both procedural and OOPs
- **Python** - Multi-paradigm
- **JavaScript** - Prototype-based OOPs

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

**OOPs** ek programming style hai jahan hum **real-world entities** ko **objects** ki form mein represent karte hain. Objects mein **data** (attributes) aur **methods** (behaviors) hote hain.

**4 Pillars**: Encapsulation, Inheritance, Polymorphism, Abstraction

**Benefits**: Reusability, Security, Modularity, Easy Maintenance

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                           OOPS CONCEPT                                        ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║                         REAL WORLD                                            ║
║                            ↓                                                  ║
║                    ┌──────────────┐                                           ║
║                    │     CAR      │                                           ║
║                    ├──────────────┤                                           ║
║                    │ brand        │  ← Attributes                             ║
║                    │ color        │                                           ║
║                    │ speed        │                                           ║
║                    ├──────────────┤                                           ║
║                    │ start()      │  ← Methods                                ║
║                    │ accelerate() │                                           ║
║                    │ brake()      │                                           ║
║                    └──────────────┘                                           ║
║                            ↓                                                  ║
║                       OBJECT                                                  ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
