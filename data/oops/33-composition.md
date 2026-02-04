# COMPOSITION

## Concept Introduction

**Composition** ka matlab hai ek class **doosri class ko contain kar rahi hai** (has-a relationship).

**Composition** mein:
- Ek class doosri class ka **object** apne member variable mein rakhti hai
- **Strong relationship** - Parent destroy ho jaye to child bhi destroy ho jata hai
- **"HAS-A" relationship** - Car **HAS-A** Engine

**Composition = Strong HAS-A relationship (Part-of)**

---

## Why This Concept Exists

### Problem with Inheritance

```java
// Using inheritance for code reuse
class Vehicle {
    void move() {
        System.out.println("Vehicle moving");
    }
}

class Car extends Vehicle {
    // Car IS-A Vehicle (but what if Car also needs features from Engine?)
}

class Engine {
    void start() {
        System.out.println("Engine started");
    }
}
```

**Issues:**
- Java doesn't support multiple inheritance
- Car cannot extend both Vehicle and Engine
- Tight coupling with parent class

### Solution: Composition

```java
class Engine {
    void start() {
        System.out.println("Engine started");
    }
}

class Car {
    // Car HAS-AN Engine (composition)
    private Engine engine = new Engine();
    
    void start() {
        engine.start();  // Delegate to engine
        System.out.println("Car started");
    }
}
```

---

## Definitions

### Very Simple Definition
Composition ka matlab hai ek class ke andar doosri class ka object rakhna taaki uski functionality use kar sakein (HAS-A relationship).

### Simple Definition
Composition is a design technique where one class contains an object of another class as a member variable, creating a HAS-A relationship. It represents a strong ownership where the contained object's lifecycle depends on the container.

### College Exam Definition
Composition is a type of association that represents a strong HAS-A relationship between classes. In composition, one class (container) owns objects of another class (component) as part of its state. The lifecycle of the component is tied to the container - when the container is destroyed, its components are also destroyed. Composition is preferred over inheritance for achieving code reuse as it provides loose coupling and flexibility.

### Technical Definition
Composition is an object-oriented design principle implementing a whole-part relationship with strong lifecycle dependency. It's a restrictive form of aggregation where the composed object cannot exist independently of the composer. The container class maintains exclusive ownership of component instances, typically initializing them in constructors. Unlike inheritance's IS-A relationship, composition follows HAS-A semantics, enabling code reuse without tight coupling. Composition supports the "favor composition over inheritance" principle, providing better encapsulation, flexibility to change implementation at runtime, and avoiding issues like the fragile base class problem. It's implemented through member variables holding references to component objects.

### Interview Definition
Composition = Strong HAS-A relationship. Key aspects: (1) **Definition**: Class contains object of another class, implemented via instance variables, (2) **Lifecycle**: Strong dependency - component destroyed with container, (3) **Relationship**: "Part-of" - Engine is part of Car, Page is part of Book, (4) **vs Inheritance**: Favor composition over inheritance - flexible, loose coupling, avoids diamond problem, (5) **vs Aggregation**: Composition = strong (exclusive ownership), Aggregation = weak (shared ownership), (6) **Implementation**: Create component object in constructor or initialize at declaration. Benefits: Code reuse, flexibility, loose coupling, testability (can mock components). Use when: Class logically contains another, not an IS-A relationship, need runtime flexibility.

---

## 1. Basic Composition

### Concept
One class contains object of another class.

```java
class Engine {
    private int horsepower;
    
    Engine(int horsepower) {
        this.horsepower = horsepower;
    }
    
    void start() {
        System.out.println("Engine started - " + horsepower + " HP");
    }
    
    void stop() {
        System.out.println("Engine stopped");
    }
}

class Car {
    private String model;
    private Engine engine;  // Composition - Car HAS-AN Engine
    
    Car(String model, int horsepower) {
        this.model = model;
        this.engine = new Engine(horsepower);  // Strong ownership
    }
    
    void start() {
        System.out.println(model + " starting...");
        engine.start();  // Delegate to engine
    }
    
    void stop() {
        engine.stop();
        System.out.println(model + " stopped");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car("BMW", 300);
        car.start();
        System.out.println();
        car.stop();
    }
}
```

**Output:**
```
BMW starting...
Engine started - 300 HP

Engine stopped
BMW stopped
```

---

## 2. Multiple Composition

```java
class Engine {
    void start() {
        System.out.println("Engine started");
    }
}

class Wheels {
    private int count;
    
    Wheels(int count) {
        this.count = count;
    }
    
    void rotate() {
        System.out.println(count + " wheels rotating");
    }
}

class MusicSystem {
    void play() {
        System.out.println("Music playing");
    }
}

class Car {
    // Multiple compositions
    private Engine engine;
    private Wheels wheels;
    private MusicSystem music;
    
    Car() {
        engine = new Engine();
        wheels = new Wheels(4);
        music = new MusicSystem();
    }
    
    void drive() {
        engine.start();
        wheels.rotate();
        music.play();
        System.out.println("Car is driving");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.drive();
    }
}
```

**Output:**
```
Engine started
4 wheels rotating
Music playing
Car is driving
```

---

## 3. Composition vs Inheritance

### Using Inheritance (Tight Coupling)

```java
class Vehicle {
    void move() {
        System.out.println("Vehicle moving");
    }
}

// Car is tightly coupled to Vehicle
class Car extends Vehicle {
    void drive() {
        move();  // Inherited
    }
}

// Problem: Car cannot change Vehicle implementation at runtime
```

### Using Composition (Loose Coupling)

```java
interface Movable {
    void move();
}

class RoadMovement implements Movable {
    public void move() {
        System.out.println("Moving on road");
    }
}

class WaterMovement implements Movable {
    public void move() {
        System.out.println("Moving on water");
    }
}

class Vehicle {
    private Movable movable;
    
    // Can change movement strategy at runtime
    Vehicle(Movable movable) {
        this.movable = movable;
    }
    
    void setMovable(Movable movable) {
        this.movable = movable;
    }
    
    void move() {
        movable.move();
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle car = new Vehicle(new RoadMovement());
        car.move();
        
        // Change behavior at runtime
        car.setMovable(new WaterMovement());
        car.move();
    }
}
```

**Output:**
```
Moving on road
Moving on water
```

---

## 4. Real-World Example: Book and Pages

```java
class Page {
    private int pageNumber;
    private String content;
    
    Page(int pageNumber, String content) {
        this.pageNumber = pageNumber;
        this.content = content;
    }
    
    void display() {
        System.out.println("Page " + pageNumber + ": " + content);
    }
}

class Book {
    private String title;
    private Page[] pages;  // Composition - Book HAS Pages
    
    Book(String title, int pageCount) {
        this.title = title;
        this.pages = new Page[pageCount];
        
        // Create pages
        for (int i = 0; i < pageCount; i++) {
            pages[i] = new Page(i + 1, "Content of page " + (i + 1));
        }
    }
    
    void displayPages() {
        System.out.println("Book: " + title);
        for (Page page : pages) {
            page.display();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Book book = new Book("Java Programming", 3);
        book.displayPages();
        
        // If book is destroyed, pages are also destroyed
        book = null;  // Pages no longer accessible
    }
}
```

**Output:**
```
Book: Java Programming
Page 1: Content of page 1
Page 2: Content of page 2
Page 3: Content of page 3
```

---

## 5. Real-World Example: Computer System

```java
class Processor {
    private String model;
    
    Processor(String model) {
        this.model = model;
    }
    
    void process() {
        System.out.println("Processing with " + model);
    }
}

class Memory {
    private int sizeGB;
    
    Memory(int sizeGB) {
        this.sizeGB = sizeGB;
    }
    
    void load() {
        System.out.println("Loading " + sizeGB + "GB memory");
    }
}

class Storage {
    private int sizeGB;
    
    Storage(int sizeGB) {
        this.sizeGB = sizeGB;
    }
    
    void store() {
        System.out.println("Storing on " + sizeGB + "GB storage");
    }
}

class Computer {
    private String brand;
    // Strong composition - components are part of computer
    private Processor processor;
    private Memory memory;
    private Storage storage;
    
    Computer(String brand, String processorModel, int memoryGB, int storageGB) {
        this.brand = brand;
        this.processor = new Processor(processorModel);
        this.memory = new Memory(memoryGB);
        this.storage = new Storage(storageGB);
    }
    
    void boot() {
        System.out.println(brand + " Computer booting...");
        memory.load();
        processor.process();
        storage.store();
        System.out.println("Computer ready!");
    }
}

public class Main {
    public static void main(String[] args) {
        Computer computer = new Computer("Dell", "Intel i7", 16, 512);
        computer.boot();
    }
}
```

**Output:**
```
Dell Computer booting...
Loading 16GB memory
Processing with Intel i7
Storing on 512GB storage
Computer ready!
```

---

## Composition vs Aggregation vs Inheritance

| Feature | Composition | Aggregation | Inheritance |
|---------|-------------|-------------|-------------|
| **Relationship** | Strong HAS-A | Weak HAS-A | IS-A |
| **Lifecycle** | Dependent | Independent | N/A |
| **Example** | Car-Engine | Department-Teacher | Dog-Animal |
| **Coupling** | Tight ownership | Loose ownership | Very tight |
| **Flexibility** | High | High | Low |
| **Code reuse** | ✓ Yes | ✓ Yes | ✓ Yes |
| **Diamond problem** | ❌ No | ❌ No | ✓ Yes |
| **Runtime change** | ✓ Yes | ✓ Yes | ❌ No |

---

## When to Use Composition

```java
// ✓ Use Composition when:
// 1. HAS-A relationship
class Car {
    private Engine engine;  // Car HAS-AN Engine
}

// 2. Part-of relationship
class Room {
    private Door door;  // Door is part of Room
}

// 3. Need flexibility
class Robot {
    private Behavior behavior;  // Can change behavior at runtime
}

// 4. Want to avoid inheritance issues
class EmailValidator {
    private Validator validator;  // Instead of extending
}

// ❌ Don't use Composition when:
// - True IS-A relationship exists (use inheritance)
// - No ownership relationship
```

---

## Important Interview Questions

**Q1: What is composition in Java?**

Composition is a design technique where one class contains an object of another class, representing a strong HAS-A relationship where component lifecycle depends on container.

**Q2: Difference between composition and inheritance?**

Composition is HAS-A (loose coupling, flexible). Inheritance is IS-A (tight coupling, less flexible). Favor composition over inheritance.

**Q3: Difference between composition and aggregation?**

Composition has strong ownership (component destroyed with container). Aggregation has weak ownership (component can exist independently).

**Q4: Why favor composition over inheritance?**

Better flexibility, loose coupling, avoids diamond problem, can change behavior at runtime, better testability.

**Q5: Can we achieve polymorphism with composition?**

Yes, through interfaces and delegation. Compose with interface types to achieve flexible polymorphism.

**Q6: What is the lifecycle in composition?**

Strong dependency - when container object is destroyed, composed objects are also destroyed/inaccessible.

**Q7: Give real-world examples of composition.**

Car-Engine, Book-Pages, Computer-Processor, House-Rooms, Human-Heart.

**Q8: How is composition implemented?**

By declaring instance variables of other class types and initializing them (usually in constructor).

---

## Short Recap

**Composition** = Strong HAS-A (Part-of) relationship

**Characteristics:**
- One class contains object of another
- **Strong lifecycle dependency**
- Composed object cannot exist without container
- Implemented via member variables

**vs Inheritance:**
- Composition: HAS-A, loose coupling, flexible
- Inheritance: IS-A, tight coupling, rigid

**Benefits:**
1. Code reuse
2. Loose coupling
3. Flexibility
4. Avoids diamond problem
5. Runtime behavior change

**Principle:** *"Favor composition over inheritance"*

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                          COMPOSITION                                          ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   Composition = Strong HAS-A Relationship (Part-of)                           ║
║                                                                               ║
║   class Engine {                                                              ║
║       void start() { }                                                        ║
║   }                                                                           ║
║                                                                               ║
║   class Car {                                                                 ║
║       private Engine engine = new Engine();  // Composition                   ║
║                                                                               ║
║       void start() {                                                          ║
║           engine.start();  // Delegate                                        ║
║       }                                                                       ║
║   }                                                                           ║
║                                                                               ║
║   Lifecycle:                                                                  ║
║   ───────────                                                                 ║
║   ┌─────────┐     creates & owns    ┌────────┐                               ║
║   │   Car   │ ───────────────────> │ Engine │                               ║
║   └─────────┘                       └────────┘                               ║
║       │                                  │                                    ║
║       │  When Car is destroyed           │                                    ║
║       ▼                                  ▼                                    ║
║    Destroyed                         Destroyed                                ║
║                                                                               ║
║   Real-world Examples:                                                        ║
║   - Car → Engine, Wheels                                                      ║
║   - Book → Pages                                                              ║
║   - Computer → Processor, Memory                                              ║
║   - House → Rooms                                                             ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
