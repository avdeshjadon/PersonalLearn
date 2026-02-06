# IS-A vs HAS-A RELATIONSHIP

## Concept Introduction

Object-oriented programming mein **classes ke beech relationship** do tarah ki hoti hai: **IS-A** aur **HAS-A**. 

**IS-A** = **Inheritance** (Dog **IS-A** Animal)
**HAS-A** = **Composition/Aggregation** (Car **HAS-A** Engine)

Jab class **extend** karti hai to **IS-A**, aur jab class ke andar doosri class ka **object** hota hai to **HAS-A** relationship hoti hai.

---

## Why This Concept Exists

### Problem: Wrong Relationship Choice

Agar galat relationship use karein to:
- Code **tightly coupled** ho jata hai
- **Flexibility** kam ho jati hai
- **Maintenance** mushkil ho jata hai
- **Design** problems create hote hain

### Solution: Right Relationship

**IS-A** use karo jab:
- True inheritance relationship ho
- "IS-A" test pass ho

**HAS-A** use karo jab:
- Object dusre object ka part ho
- "HAS-A" test pass ho

---

## Definitions

### Very Simple Definition
IS-A matlab inheritance (Dog IS-A Animal), HAS-A matlab composition (Car HAS-A Engine).

### Simple Definition
IS-A relationship represents inheritance where a class extends another class. HAS-A relationship represents composition where a class contains an object of another class as a member.

### College Exam Definition
IS-A relationship is achieved through inheritance using the "extends" keyword, representing a parent-child relationship. HAS-A relationship is achieved through composition or aggregation, where one class has an instance variable of another class type, representing a part-of relationship.

### Technical Definition
IS-A relationship (inheritance) establishes a hierarchical classification where the subclass is a specialized version of the superclass, inheriting all non-private members. HAS-A relationship (composition/aggregation) establishes an association where one class contains a reference to another class as a member variable, representing ownership or containment without inheritance.

### Interview Definition
IS-A relationship is implemented through inheritance (extends keyword) and represents a "type-of" relationship - Dog IS-A Animal. It promotes code reuse but creates tight coupling. HAS-A relationship is implemented through composition (instance variable) and represents a "part-of" or "has-a" relationship - Car HAS-A Engine. It provides better flexibility, loose coupling, and follows the principle "favor composition over inheritance". IS-A is tested by substitutability (Liskov Substitution Principle), while HAS-A is tested by ownership or containment.

---

## IS-A Relationship (Inheritance)

### Concept

**IS-A** = Child class **IS-A** type of Parent class

```
Dog IS-A Animal  ✓
Car IS-A Vehicle ✓
Student IS-A Person ✓
```

### Implementation

```java
// Parent class
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
    
    void sleep() {
        System.out.println("Animal sleeps");
    }
}

// Child class - Dog IS-A Animal
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Child class - Cat IS-A Animal
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();   // Inherited from Animal
        dog.sleep(); // Inherited from Animal
        dog.bark();  // Own method
        
        Cat cat = new Cat();
        cat.eat();   // Inherited from Animal
        cat.sleep(); // Inherited from Animal
        cat.meow();  // Own method
        
        // Polymorphism - IS-A enables this
        Animal animal1 = new Dog();  // Dog IS-A Animal
        Animal animal2 = new Cat();  // Cat IS-A Animal
    }
}
```

---

## HAS-A Relationship (Composition)

### Concept

**HAS-A** = Class has an object of another class

```
Car HAS-A Engine  ✓
Student HAS-A Address ✓
Book HAS-A Author ✓
```

### Implementation

```java
// Engine class
class Engine {
    String type;
    int horsepower;
    
    Engine(String type, int hp) {
        this.type = type;
        this.horsepower = hp;
    }
    
    void start() {
        System.out.println(type + " engine started");
    }
}

// Car class HAS-A Engine
class Car {
    String brand;
    Engine engine;  // HAS-A relationship
    
    Car(String brand, Engine engine) {
        this.brand = brand;
        this.engine = engine;
    }
    
    void start() {
        System.out.println(brand + " car starting...");
        engine.start();  // Using Engine object
    }
    
    void showDetails() {
        System.out.println("Brand: " + brand);
        System.out.println("Engine Type: " + engine.type);
        System.out.println("Horsepower: " + engine.horsepower);
    }
}

public class Main {
    public static void main(String[] args) {
        Engine e1 = new Engine("Petrol", 150);
        Car car = new Car("Toyota", e1);
        
        car.start();
        car.showDetails();
    }
}
```

**Output:**
```
Toyota car starting...
Petrol engine started
Brand: Toyota
Engine Type: Petrol
Horsepower: 150
```

---

## IS-A vs HAS-A Comparison

| Feature | IS-A (Inheritance) | HAS-A (Composition) |
|---------|-------------------|---------------------|
| **Keyword** | extends | No keyword (object as member) |
| **Relationship** | Parent-Child | Contains/Has |
| **Example** | Dog extends Animal | Car has Engine |
| **Code Reuse** | Inherits all members | Uses object's methods |
| **Coupling** | Tight coupling | Loose coupling |
| **Flexibility** | Less flexible | More flexible |
| **Test** | "IS-A" test | "HAS-A" test |
| **Polymorphism** | Supports | Doesn't support directly |
| **When to use** | True subtype | Part-of relationship |

---

## Real-World Example 1: University System

```java
// IS-A Relationship
class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Student IS-A Person
class Student extends Person {
    int rollNo;
    
    Student(String name, int age, int rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }
    
    void study() {
        System.out.println(name + " is studying");
    }
}

// Teacher IS-A Person
class Teacher extends Person {
    String subject;
    
    Teacher(String name, int age, String subject) {
        super(name, age);
        this.subject = subject;
    }
    
    void teach() {
        System.out.println(name + " teaches " + subject);
    }
}

// HAS-A Relationship
class Address {
    String city;
    String state;
    
    Address(String city, String state) {
        this.city = city;
        this.state = state;
    }
    
    void display() {
        System.out.println("City: " + city + ", State: " + state);
    }
}

// Employee HAS-A Address
class Employee {
    String name;
    Address address;  // HAS-A
    
    Employee(String name, Address address) {
        this.name = name;
        this.address = address;
    }
    
    void displayInfo() {
        System.out.println("Employee: " + name);
        address.display();
    }
}

public class Main {
    public static void main(String[] args) {
        // IS-A examples
        Student student = new Student("Rahul", 20, 101);
        student.display();
        student.study();
        
        Teacher teacher = new Teacher("Priya", 35, "Math");
        teacher.display();
        teacher.teach();
        
        System.out.println();
        
        // HAS-A example
        Address addr = new Address("Mumbai", "Maharashtra");
        Employee emp = new Employee("Amit", addr);
        emp.displayInfo();
    }
}
```

**Output:**
```
Name: Rahul, Age: 20
Rahul is studying
Name: Priya, Age: 35
Priya teaches Math

Employee: Amit
City: Mumbai, State: Maharashtra
```

---

## Real-World Example 2: Vehicle System

```java
// Component classes for HAS-A
class Engine {
    void start() {
        System.out.println("Engine started");
    }
}

class Wheels {
    int count;
    
    Wheels(int count) {
        this.count = count;
    }
    
    void rotate() {
        System.out.println(count + " wheels rotating");
    }
}

// Base class for IS-A
class Vehicle {
    String brand;
    
    Vehicle(String brand) {
        this.brand = brand;
    }
    
    void move() {
        System.out.println(brand + " is moving");
    }
}

// Car IS-A Vehicle, HAS-A Engine and Wheels
class Car extends Vehicle {
    Engine engine;    // HAS-A
    Wheels wheels;    // HAS-A
    
    Car(String brand, Engine engine, Wheels wheels) {
        super(brand);  // IS-A
        this.engine = engine;
        this.wheels = wheels;
    }
    
    void start() {
        engine.start();
        wheels.rotate();
        move();
    }
}

public class Main {
    public static void main(String[] args) {
        Engine e = new Engine();
        Wheels w = new Wheels(4);
        
        Car car = new Car("Toyota", e, w);
        car.start();
    }
}
```

**Output:**
```
Engine started
4 wheels rotating
Toyota is moving
```

---

## When to Use What?

### Use IS-A (Inheritance) When:

1. **True subtype relationship** exists
2. Child class is a **specialized version** of parent
3. **Liskov Substitution Principle** holds
4. You need **polymorphism**

```java
// Good use of IS-A
class Animal { }
class Dog extends Animal { }  // ✓ Dog IS-A Animal

class Shape { }
class Circle extends Shape { }  // ✓ Circle IS-A Shape
```

### Use HAS-A (Composition) When:

1. **Part-of relationship** exists
2. Need **flexibility** and **loose coupling**
3. Want to **change behavior at runtime**
4. **No true inheritance** relationship

```java
// Good use of HAS-A
class Car {
    Engine engine;  // ✓ Car HAS-A Engine
}

class Student {
    Address address;  // ✓ Student HAS-A Address
}
```

---

## Common Mistakes

### Mistake 1: Using IS-A When HAS-A is Needed

```java
// ❌ Wrong: Employee IS-A Address? No!
class Employee extends Address {
    String name;
}

// ✓ Correct: Employee HAS-A Address
class Employee {
    String name;
    Address address;
}
```

### Mistake 2: Using HAS-A When IS-A is Needed

```java
// ❌ Wrong: Missing polymorphism benefit
class Zoo {
    Dog dog;
    Cat cat;
    Cow cow;
    // Need to add variable for each new animal
}

// ✓ Correct: Use IS-A for polymorphism
class Zoo {
    Animal[] animals;  // Can hold any Animal subtype
}
```

---

## Design Principle: Favor Composition Over Inheritance

**Why?**
- **Loose coupling**
- **More flexible**
- **Runtime behavior change**
- **Avoids fragile base class problem**

```java
// Using Inheritance (Tight Coupling)
class Bird {
    void fly() {
        System.out.println("Flying");
    }
}

class Penguin extends Bird {
    // Problem: Penguins can't fly!
    @Override
    void fly() {
        throw new UnsupportedOperationException();
    }
}

// Using Composition (Flexible)
interface FlyBehavior {
    void fly();
}

class CanFly implements FlyBehavior {
    public void fly() {
        System.out.println("Flying");
    }
}

class CannotFly implements FlyBehavior {
    public void fly() {
        System.out.println("Cannot fly");
    }
}

class Bird {
    FlyBehavior flyBehavior;
    
    Bird(FlyBehavior fb) {
        this.flyBehavior = fb;
    }
    
    void performFly() {
        flyBehavior.fly();
    }
}

class Sparrow extends Bird {
    Sparrow() {
        super(new CanFly());
    }
}

class Penguin extends Bird {
    Penguin() {
        super(new CannotFly());
    }
}
```

---

## Important Interview Questions

**Q1: What is IS-A relationship?**

IS-A relationship is inheritance where a subclass is a type of superclass. It's implemented using the `extends` keyword. Example: Dog IS-A Animal.

**Q2: What is HAS-A relationship?**

HAS-A relationship is composition where a class contains an object of another class as a member variable. Example: Car HAS-A Engine.

**Q3: Difference between IS-A and HAS-A?**

- **IS-A**: Inheritance, tight coupling, polymorphism support
- **HAS-A**: Composition, loose coupling, more flexible

**Q4: When to use inheritance vs composition?**

Use inheritance when there's a true subtype relationship. Use composition when there's a part-of relationship or when you need flexibility. Generally, favor composition over inheritance.

**Q5: Can a class have both IS-A and HAS-A relationships?**

Yes. Example: Car IS-A Vehicle (inheritance) and Car HAS-A Engine (composition).

**Q6: Why favor composition over inheritance?**

Composition provides loose coupling, better flexibility, runtime behavior change, and avoids inheritance-related problems like fragile base class problem.

---

## Short Recap

**IS-A** = **Inheritance** (extends keyword)
- Dog IS-A Animal
- Tight coupling
- Polymorphism support

**HAS-A** = **Composition** (object as member)
- Car HAS-A Engine
- Loose coupling
- More flexible

**Design Principle:** Favor composition over inheritance

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                     IS-A vs HAS-A RELATIONSHIP                                   ║
╚══════════════════════════════════════════════════════════════════════════════════╝

                          ╔═══════════════════════════╗
                          ║  CLASS RELATIONSHIPS      ║
                          ╚═════════════╦═════════════╝
                                        ║
                    ╔═══════════════════╩═══════════════════╗
                    ▼                                       ▼
          ╔═════════════════════╗              ╔═════════════════════╗
          ║       IS-A          ║              ║       HAS-A         ║
          ║    INHERITANCE      ║              ║    COMPOSITION      ║
          ╠═════════════════════╣              ╠═════════════════════╣
          ║                     ║              ║                     ║
          ║  extends keyword    ║              ║  Instance variable  ║
          ║  "type of"          ║              ║  "contains/uses"    ║
          ║  Tight coupling     ║              ║  Loose coupling     ║
          ║                     ║              ║                     ║
          ╚═════════════════════╝              ╚═════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                        IS-A RELATIONSHIP (INHERITANCE)                           ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                          ╔══════════════════╗                                    ║
║                          ║     Animal       ║  ←── Parent/Superclass             ║
║                          ║   - name         ║                                    ║
║                          ║   + eat()        ║                                    ║
║                          ║   + sleep()      ║                                    ║
║                          ╚════════╦═════════╝                                    ║
║                                   ║                                              ║
║                    extends (IS-A) ║                                              ║
║                                   ║                                              ║
║              ╔════════════════════╬════════════════════╗                         ║
║              ▼                    ▼                    ▼                         ║
║    ╔══════════════════╗ ╔══════════════════╗ ╔══════════════════╗               ║
║    ║       Dog        ║ ║       Cat        ║ ║      Bird        ║               ║
║    ║   - breed        ║ ║   - color        ║ ║   - wingspan     ║               ║
║    ║   + bark()       ║ ║   + meow()       ║ ║   + fly()        ║               ║
║    ╚══════════════════╝ ╚══════════════════╝ ╚══════════════════╝               ║
║                                                                                  ║
║      Dog IS-A Animal ✓       Cat IS-A Animal ✓       Bird IS-A Animal ✓          ║
║                                                                                  ║
║   CODE:                                                                          ║
║   ═════                                                                          ║
║   class Dog extends Animal {    // Dog IS-A Animal                               ║
║       void bark() { ... }       // Dog's own method                              ║
║   }                             // Inherits eat(), sleep()                       ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                        HAS-A RELATIONSHIP (COMPOSITION)                          ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║    ╔══════════════════╗           ╔══════════════════╗                          ║
║    ║      Engine      ║           ║      Wheel       ║                          ║
║    ║  - horsepower    ║           ║  - size          ║                          ║
║    ║  + start()       ║           ║  + rotate()      ║                          ║
║    ║  + stop()        ║           ║  + brake()       ║                          ║
║    ╚════════╦═════════╝           ╚═════════╦════════╝                          ║
║             │                               │                                    ║
║             │         contains (HAS-A)      │                                    ║
║             │                               │                                    ║
║             ╚═══════════════╦═══════════════╝                                    ║
║                             ▼                                                    ║
║                   ╔══════════════════╗                                           ║
║                   ║       Car        ║                                           ║
║                   ║  - Engine engine ║ ←── HAS-A Engine                          ║
║                   ║  - Wheel[] wheels║ ←── HAS-A Wheel(s)                        ║
║                   ║  + drive()       ║                                           ║
║                   ╚══════════════════╝                                           ║
║                                                                                  ║
║      Car HAS-A Engine ✓               Car HAS-A Wheel ✓                          ║
║      Car IS-NOT-A Engine ❌           Car IS-NOT-A Wheel ❌                       ║
║                                                                                  ║
║   CODE:                                                                          ║
║   ═════                                                                          ║
║   class Car {                                                                    ║
║       private Engine engine;     // Car HAS-A Engine                             ║
║       private Wheel[] wheels;    // Car HAS-A Wheels                             ║
║                                                                                  ║
║       void start() {                                                             ║
║           engine.start();        // Delegation                                   ║
║       }                                                                          ║
║   }                                                                              ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                   IS-A vs HAS-A COMPARISON                                       ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ┌────────────────────┬─────────────────────────┬─────────────────────────┐     ║
║   │     ASPECT         │        IS-A             │        HAS-A            │     ║
║   ├────────────────────┼─────────────────────────┼─────────────────────────┤     ║
║   │  Implementation    │  extends keyword        │  Instance variable      │     ║
║   ├────────────────────┼─────────────────────────┼─────────────────────────┤     ║
║   │  Relationship      │  "is a type of"         │  "contains/uses"        │     ║
║   ├────────────────────┼─────────────────────────┼─────────────────────────┤     ║
║   │  Coupling          │  Tight (inheritance)    │  Loose (composition)    │     ║
║   ├────────────────────┼─────────────────────────┼─────────────────────────┤     ║
║   │  Polymorphism      │  ✓ Supports             │  ❌ No direct support   │     ║
║   ├────────────────────┼─────────────────────────┼─────────────────────────┤     ║
║   │  Flexibility       │  Less flexible          │  More flexible          │     ║
║   ├────────────────────┼─────────────────────────┼─────────────────────────┤     ║
║   │  Code Reuse        │  Through inheritance    │  Through delegation     │     ║
║   ├────────────────────┼─────────────────────────┼─────────────────────────┤     ║
║   │  Runtime Change    │  ❌ Cannot change       │  ✓ Can change           │     ║
║   ├────────────────────┼─────────────────────────┼─────────────────────────┤     ║
║   │  Example           │  Dog IS-A Animal        │  Car HAS-A Engine       │     ║
║   └────────────────────┴─────────────────────────┴─────────────────────────┘     ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                  DECISION FLOWCHART                                              ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                         ┌──────────────────────┐                                 ║
║                         │  New Class Needed    │                                 ║
║                         └──────────┬───────────┘                                 ║
║                                    ▼                                             ║
║                    ┌───────────────────────────────┐                             ║
║                    │  Does "Child IS-A Parent"     │                             ║
║                    │  make semantic sense?         │                             ║
║                    └───────────────┬───────────────┘                             ║
║                                    │                                             ║
║                      ┌─────────────┴─────────────┐                               ║
║                      ▼                           ▼                               ║
║                    YES                          NO                               ║
║                      │                           │                               ║
║                      ▼                           ▼                               ║
║       ┌─────────────────────────┐   ┌─────────────────────────┐                  ║
║       │  Does child need ALL    │   │    USE HAS-A            │                  ║
║       │  parent behaviors?      │   │    (Composition)        │                  ║
║       └────────────┬────────────┘   └─────────────────────────┘                  ║
║                    │                                                             ║
║          ┌─────────┴─────────┐                                                   ║
║          ▼                   ▼                                                   ║
║         YES                 NO                                                   ║
║          │                   │                                                   ║
║          ▼                   ▼                                                   ║
║   ╔══════════════╗   ╔══════════════╗                                           ║
║   ║  USE IS-A    ║   ║  USE HAS-A   ║                                           ║
║   ║ (Inheritance)║   ║(Composition) ║                                           ║
║   ╚══════════════╝   ╚══════════════╝                                           ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                   CORRECT vs WRONG USAGE                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                     ✓ CORRECT                                         ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   IS-A (Inheritance):                                                 ║      ║
║   ║   • Dog extends Animal        → Dog IS-A Animal ✓                     ║      ║
║   ║   • Circle extends Shape      → Circle IS-A Shape ✓                   ║      ║
║   ║   • Manager extends Employee  → Manager IS-A Employee ✓               ║      ║
║   ║                                                                       ║      ║
║   ║   HAS-A (Composition):                                                ║      ║
║   ║   • Car has Engine           → Car HAS-A Engine ✓                     ║      ║
║   ║   • Computer has Processor   → Computer HAS-A Processor ✓             ║      ║
║   ║   • Library has Book[]       → Library HAS-A Books ✓                  ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                     ❌ WRONG                                          ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   Misusing IS-A:                                                      ║      ║
║   ║   • Stack extends ArrayList   → Stack IS-NOT-A ArrayList ❌           ║      ║
║   ║   • Car extends Engine        → Car IS-NOT-A Engine ❌                ║      ║
║   ║   • Employee extends Address  → Employee IS-NOT-A Address ❌          ║      ║
║   ║                                                                       ║      ║
║   ║   Should use HAS-A instead:                                           ║      ║
║   ║   • Stack HAS-A List (composition)                                    ║      ║
║   ║   • Car HAS-A Engine (composition)                                    ║      ║
║   ║   • Employee HAS-A Address (composition)                              ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   PRINCIPLE: "Favor Composition over Inheritance"                                ║
║   ─────────────────────────────────────────────                                  ║
║   When in doubt, use composition! It's more flexible and loosely coupled.        ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
