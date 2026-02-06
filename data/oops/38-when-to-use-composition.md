# WHEN TO USE COMPOSITION

## Concept Introduction

**Composition** inheritance se **zyada flexible** hai. Jab true IS-A relationship na ho, tab composition use karo.

**Use Composition When:**
- HAS-A relationship exists
- Need flexibility to change behavior
- Want loose coupling
- Multiple behaviors needed
- Code reuse without IS-A

**Composition = HAS-A relationship (flexible, loose coupling)**

**Principle:** *"Favor Composition over Inheritance"*

---

## Why Favor Composition

### Problem with Inheritance

```java
// Inheritance - Tight coupling, inflexible
class Robot extends Flyable {
    // Robot can only fly, cannot change
    // If want swimming, need to change entire class!
}
```

### Solution with Composition

```java
// Composition - Flexible, loose coupling
class Robot {
    private Behavior behavior;  // Can change at runtime!
    
    void setBehavior(Behavior behavior) {
        this.behavior = behavior;
    }
    
    void perform() {
        behavior.execute();
    }
}
```

---

## Definitions

### Very Simple Definition
Composition tab use karo jab ek class doosri class ko contain kare (HAS-A), especially jab inheritance se better flexibility chahiye.

### Simple Definition
Use composition when one class HAS-A another class, needs flexibility to change behavior, wants loose coupling, or requires features from multiple sources. Composition is preferred over inheritance in most cases.

### College Exam Definition
Composition should be used when there's a HAS-A relationship between classes, where one class contains or uses another class's functionality. Key scenarios for composition: (1) no clear IS-A relationship, (2) need to change behavior at runtime, (3) want loose coupling and flexibility, (4) need features from multiple classes, (5) want to avoid inheritance issues like fragile base class problem. The principle "favor composition over inheritance" suggests using composition as the default choice and inheritance only when there's a clear IS-A relationship.

### Technical Definition
Composition is the preferred design approach in object-oriented programming for achieving code reuse and flexibility through object aggregation rather than inheritance. Use composition when: (1) implementing HAS-A or USES-A relationships, (2) requiring behavioral flexibility and runtime polymorphism through strategy pattern, (3) avoiding tight coupling and inheritance fragility, (4) needing multiple distinct behaviors or features (avoiding multiple inheritance), (5) implementing dependency injection for testability. Composition provides superior flexibility through delegation, enables adherence to SOLID principles (especially Open-Closed and Dependency Inversion), and prevents inheritance-related issues like diamond problem and fragile base class problem. The Gang of Four design patterns emphasize composition through patterns like Strategy, Decorator, and Composite.

### Interview Definition
When to use composition: (1) **HAS-A Relationship**: Car HAS-AN Engine (not IS-A), (2) **Flexibility**: Change behavior at runtime (strategy pattern), (3) **Multiple Features**: Need functionality from multiple sources without multiple inheritance, (4) **Loose Coupling**: Components can be changed independently, (5) **Code Reuse**: Reuse without inheritance relationship, (6) **Testability**: Easy to mock dependencies. Benefits: Flexible (runtime changes), loose coupling, no diamond problem, follows SOLID principles, better encapsulation, easier testing. Principle: *"Favor composition over inheritance"* - use composition as default, inheritance only for true IS-A. Examples: Car-Engine, Computer-Processor, Strategy pattern, Dependency injection. Avoid inheritance for: code reuse, weak IS-A, implementation sharing.

---

## 1. When to Use Composition

### ✓ HAS-A Relationship

```java
class Engine {
    void start() {
        System.out.println("Engine started");
    }
    
    void stop() {
        System.out.println("Engine stopped");
    }
}

class Car {
    // Car HAS-AN Engine ✓
    private Engine engine;
    
    Car() {
        this.engine = new Engine();
    }
    
    void start() {
        System.out.println("Car starting...");
        engine.start();
    }
    
    void stop() {
        engine.stop();
        System.out.println("Car stopped");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();
        car.stop();
    }
}
```

**Output:**
```
Car starting...
Engine started
Engine stopped
Car stopped
```

---

### ✓ Runtime Flexibility

```java
// Strategy Pattern - Change behavior at runtime
interface PaymentStrategy {
    void pay(int amount);
}

class CreditCardPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using Credit Card");
    }
}

class PayPalPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using PayPal");
    }
}

class BitcoinPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using Bitcoin");
    }
}

class ShoppingCart {
    private PaymentStrategy paymentStrategy;  // Composition
    
    void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }
    
    void checkout(int amount) {
        paymentStrategy.pay(amount);
    }
}

public class Main {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        
        // Change payment method at runtime
        cart.setPaymentStrategy(new CreditCardPayment());
        cart.checkout(100);
        
        cart.setPaymentStrategy(new PayPalPayment());
        cart.checkout(200);
        
        cart.setPaymentStrategy(new BitcoinPayment());
        cart.checkout(300);
    }
}
```

**Output:**
```
Paid 100 using Credit Card
Paid 200 using PayPal
Paid 300 using Bitcoin
```

---

### ✓ Multiple Features Needed

```java
// Need multiple capabilities - can't inherit from multiple classes
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class FlyBehavior implements Flyable {
    public void fly() {
        System.out.println("Flying in the sky");
    }
}

class SwimBehavior implements Swimmable {
    public void swim() {
        System.out.println("Swimming in water");
    }
}

class Duck {
    // Composition - has multiple behaviors
    private Flyable flyBehavior;
    private Swimmable swimBehavior;
    
    Duck() {
        this.flyBehavior = new FlyBehavior();
        this.swimBehavior = new SwimBehavior();
    }
    
    void performFly() {
        flyBehavior.fly();
    }
    
    void performSwim() {
        swimBehavior.swim();
    }
}

public class Main {
    public static void main(String[] args) {
        Duck duck = new Duck();
        duck.performFly();
        duck.performSwim();
    }
}
```

**Output:**
```
Flying in the sky
Swimming in water
```

---

### ✓ Avoiding Tight Coupling

```java
// Composition with Dependency Injection
interface Logger {
    void log(String message);
}

class ConsoleLogger implements Logger {
    public void log(String message) {
        System.out.println("Console: " + message);
    }
}

class FileLogger implements Logger {
    public void log(String message) {
        System.out.println("File: " + message);
    }
}

class UserService {
    private Logger logger;  // Composition (loose coupling)
    
    // Dependency Injection
    UserService(Logger logger) {
        this.logger = logger;
    }
    
    void createUser(String name) {
        System.out.println("Creating user: " + name);
        logger.log("User created: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        // Can easily switch logger implementation
        UserService service1 = new UserService(new ConsoleLogger());
        service1.createUser("Rahul");
        
        UserService service2 = new UserService(new FileLogger());
        service2.createUser("Priya");
    }
}
```

**Output:**
```
Creating user: Rahul
Console: User created: Rahul
Creating user: Priya
File: User created: Priya
```

---

### ✓ Code Reuse Without IS-A

```java
// Want ArrayList features but Stack IS-NOT-A ArrayList
class Stack {
    private ArrayList<Object> list;  // Composition ✓
    
    Stack() {
        list = new ArrayList<>();
    }
    
    void push(Object item) {
        list.add(item);
    }
    
    Object pop() {
        if (!list.isEmpty()) {
            return list.remove(list.size() - 1);
        }
        return null;
    }
    
    int size() {
        return list.size();
    }
}

public class Main {
    public static void main(String[] args) {
        Stack stack = new Stack();
        stack.push("First");
        stack.push("Second");
        stack.push("Third");
        
        System.out.println("Size: " + stack.size());
        System.out.println("Pop: " + stack.pop());
        System.out.println("Pop: " + stack.pop());
    }
}
```

**Output:**
```
Size: 3
Pop: Third
Pop: Second
```

---

## 2. Composition vs Inheritance

### Inheritance (Tight Coupling)

```java
class Printer {
    void print(String document) {
        System.out.println("Printing: " + document);
    }
}

class Scanner {
    void scan(String document) {
        System.out.println("Scanning: " + document);
    }
}

// Problem: Cannot extend both!
// class MultiFunctionDevice extends Printer, Scanner { }  // ❌ Error
```

### Composition (Flexible)

```java
class Printer {
    void print(String document) {
        System.out.println("Printing: " + document);
    }
}

class Scanner {
    void scan(String document) {
        System.out.println("Scanning: " + document);
    }
}

class MultiFunctionDevice {
    private Printer printer;  // Composition ✓
    private Scanner scanner;  // Composition ✓
    
    MultiFunctionDevice() {
        this.printer = new Printer();
        this.scanner = new Scanner();
    }
    
    void print(String doc) {
        printer.print(doc);
    }
    
    void scan(String doc) {
        scanner.scan(doc);
    }
}

public class Main {
    public static void main(String[] args) {
        MultiFunctionDevice mfd = new MultiFunctionDevice();
        mfd.print("Document1.pdf");
        mfd.scan("Photo.jpg");
    }
}
```

**Output:**
```
Printing: Document1.pdf
Scanning: Photo.jpg
```

---

## 3. Real-World Examples

### Computer System

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
        System.out.println("Storing on " + sizeGB + "GB drive");
    }
}

class Computer {
    // Composition - Computer HAS components
    private Processor processor;
    private Memory memory;
    private Storage storage;
    
    Computer(String processorModel, int memoryGB, int storageGB) {
        this.processor = new Processor(processorModel);
        this.memory = new Memory(memoryGB);
        this.storage = new Storage(storageGB);
    }
    
    void boot() {
        System.out.println("Booting computer...");
        memory.load();
        processor.process();
        storage.store();
    }
}

public class Main {
    public static void main(String[] args) {
        Computer computer = new Computer("Intel i7", 16, 512);
        computer.boot();
    }
}
```

---

## 4. Benefits of Composition

| Benefit | Description | Example |
|---------|-------------|---------|
| **Flexibility** | Change behavior at runtime | Strategy pattern |
| **Loose Coupling** | Components independent | Dependency injection |
| **Multiple Features** | Combine multiple capabilities | Duck with fly + swim |
| **No Diamond Problem** | Avoid multiple inheritance issues | Interface composition |
| **Easy Testing** | Mock components easily | Mock logger |
| **Encapsulation** | Hide implementation details | Car hides engine details |
| **SOLID Compliance** | Follows Open-Closed, DIP | Payment strategies |

---

## Important Interview Questions

**Q1: When should we use composition?**

Use composition for HAS-A relationships, when needing flexibility, loose coupling, multiple features, or code reuse without IS-A.

**Q2: What does "favor composition over inheritance" mean?**

Use composition as the default choice for code reuse. Use inheritance only when there's a clear IS-A relationship.

**Q3: Benefits of composition over inheritance?**

Flexibility (runtime changes), loose coupling, no multiple inheritance issues, better testability, follows SOLID principles.

**Q4: Give an example where composition is better than inheritance.**

Stack-ArrayList: Stack HAS-A list (composition) rather than Stack IS-A ArrayList (wrong inheritance).

**Q5: Can composition achieve polymorphism?**

Yes, through interfaces and delegation (Strategy pattern, dependency injection).

**Q6: How does composition support SOLID principles?**

Supports Open-Closed (extend via new implementations), Dependency Inversion (depend on interfaces), Single Responsibility.

**Q7: Composition vs Inheritance - which is better?**

Depends on relationship. Composition is generally more flexible. Use inheritance only for true IS-A.

**Q8: How to implement composition?**

Through instance variables holding references to other classes, typically injected via constructor or setter.

---

## Short Recap

**Use Composition When:**
1. ✓ **HAS-A** relationship
2. ✓ Need **flexibility** (runtime changes)
3. ✓ **Multiple** features needed
4. ✓ Want **loose coupling**
5. ✓ **Code reuse** without IS-A
6. ✓ Better **testability**

**Benefits:**
- Flexible
- Loose coupling
- No diamond problem
- Runtime behavior change
- SOLID compliant
- Easy testing

**Principle:** *"Favor Composition over Inheritance"*

**Rule of Thumb:**
- Default: **Composition**
- Exception: True IS-A → Inheritance

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                   WHEN TO USE COMPOSITION                                        ║
╚══════════════════════════════════════════════════════════════════════════════════╝

                              ╔═══════════════════╗
                              ║  SHOULD I USE     ║
                              ║  COMPOSITION?     ║
                              ╚═════════╦═════════╝
                                        ║
                                        ▼
            ╔═══════════════════════════════════════════════════╗
            ║  DEFAULT ANSWER: YES!                             ║
            ║  "Favor Composition over Inheritance"             ║
            ╚═══════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    COMPOSITION = HAS-A RELATIONSHIP                              ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                        WHAT IS COMPOSITION?                           ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   One class CONTAINS another class as a member variable               ║      ║
║   ║                                                                       ║      ║
║   ║   ┌─────────────────┐          ┌─────────────────┐                    ║      ║
║   ║   │     Engine      │          │      Car        │                    ║      ║
║   ║   │ + start()       │◄─────────│ - Engine engine │                    ║      ║
║   ║   │ + stop()        │ contains │ + drive()       │                    ║      ║
║   ║   └─────────────────┘          └─────────────────┘                    ║      ║
║   ║                                                                       ║      ║
║   ║   Car HAS-A Engine (not IS-A Engine!)                                 ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   CODE EXAMPLE:                                                                  ║
║   ═════════════                                                                  ║
║                                                                                  ║
║   class Engine {                                                                 ║
║       void start() { System.out.println("Engine started"); }                     ║
║       void stop() { System.out.println("Engine stopped"); }                      ║
║   }                                                                              ║
║                                                                                  ║
║   class Car {                                                                    ║
║       private Engine engine;    // HAS-A relationship                            ║
║                                                                                  ║
║       Car(Engine engine) {      // Dependency Injection                          ║
║           this.engine = engine;                                                  ║
║       }                                                                          ║
║                                                                                  ║
║       void start() {                                                             ║
║           engine.start();       // Delegation                                    ║
║       }                                                                          ║
║   }                                                                              ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    USE COMPOSITION WHEN...                                       ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═════════════════════════════════════════════════════════════════════════╗    ║
║   ║  1. HAS-A RELATIONSHIP EXISTS                                           ║    ║
║   ╠═════════════════════════════════════════════════════════════════════════╣    ║
║   ║                                                                         ║    ║
║   ║  Car HAS-A Engine        ✓ (not Car IS-A Engine)                        ║    ║
║   ║  Computer HAS-A Processor ✓ (not Computer IS-A Processor)               ║    ║
║   ║  Library HAS-A Book[]    ✓ (not Library IS-A Book)                      ║    ║
║   ║  Person HAS-A Address    ✓ (not Person IS-A Address)                    ║    ║
║   ║                                                                         ║    ║
║   ╚═════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                  ║
║   ╔═════════════════════════════════════════════════════════════════════════╗    ║
║   ║  2. NEED RUNTIME FLEXIBILITY                                            ║    ║
║   ╠═════════════════════════════════════════════════════════════════════════╣    ║
║   ║                                                                         ║    ║
║   ║  class Robot {                                                          ║    ║
║   ║      private Behavior behavior;   // Can change at runtime!             ║    ║
║   ║                                                                         ║    ║
║   ║      void setBehavior(Behavior b) {                                     ║    ║
║   ║          this.behavior = b;       // Switch behaviors dynamically       ║    ║
║   ║      }                                                                  ║    ║
║   ║  }                                                                      ║    ║
║   ║                                                                         ║    ║
║   ║  robot.setBehavior(new FlyBehavior());   // Now it flies!               ║    ║
║   ║  robot.setBehavior(new SwimBehavior());  // Now it swims!               ║    ║
║   ║                                                                         ║    ║
║   ║  (Inheritance cannot do this - fixed at compile time!)                  ║    ║
║   ║                                                                         ║    ║
║   ╚═════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                  ║
║   ╔═════════════════════════════════════════════════════════════════════════╗    ║
║   ║  3. NEED FEATURES FROM MULTIPLE SOURCES                                 ║    ║
║   ╠═════════════════════════════════════════════════════════════════════════╣    ║
║   ║                                                                         ║    ║
║   ║  // Java doesn't allow multiple inheritance of classes!                 ║    ║
║   ║  class Bird extends Animal, Flyable { }  // ❌ NOT ALLOWED!             ║    ║
║   ║                                                                         ║    ║
║   ║  // But composition allows combining multiple features:                 ║    ║
║   ║  class Bird {                                                           ║    ║
║   ║      private Animal animal;       // HAS-A Animal                       ║    ║
║   ║      private FlyAbility fly;      // HAS-A FlyAbility                   ║    ║
║   ║      private SwimAbility swim;    // HAS-A SwimAbility                  ║    ║
║   ║  }                                                                      ║    ║
║   ║                                                                         ║    ║
║   ╚═════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                  ║
║   ╔═════════════════════════════════════════════════════════════════════════╗    ║
║   ║  4. WANT LOOSE COUPLING                                                 ║    ║
║   ╠═════════════════════════════════════════════════════════════════════════╣    ║
║   ║                                                                         ║    ║
║   ║  INHERITANCE (Tight Coupling):                                          ║    ║
║   ║  ─────────────────────────────                                          ║    ║
║   ║  class Dog extends Animal { }                                           ║    ║
║   ║  • Dog is TIGHTLY bound to Animal                                       ║    ║
║   ║  • Any change in Animal affects Dog                                     ║    ║
║   ║  • Cannot change relationship at runtime                                ║    ║
║   ║                                                                         ║    ║
║   ║  COMPOSITION (Loose Coupling):                                          ║    ║
║   ║  ────────────────────────────                                           ║    ║
║   ║  class Car {                                                            ║    ║
║   ║      private Engine engine;   // Injected dependency                    ║    ║
║   ║  }                                                                      ║    ║
║   ║  • Car is LOOSELY bound to Engine (through interface)                   ║    ║
║   ║  • Can swap different Engine implementations                            ║    ║
║   ║  • Easy to test with mock Engine                                        ║    ║
║   ║                                                                         ║    ║
║   ╚═════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                  ║
║   ╔═════════════════════════════════════════════════════════════════════════╗    ║
║   ║  5. NEED BETTER TESTABILITY                                             ║    ║
║   ╠═════════════════════════════════════════════════════════════════════════╣    ║
║   ║                                                                         ║    ║
║   ║  class UserService {                                                    ║    ║
║   ║      private Database database;      // Composition                     ║    ║
║   ║                                                                         ║    ║
║   ║      UserService(Database db) {      // Dependency Injection            ║    ║
║   ║          this.database = db;                                            ║    ║
║   ║      }                                                                  ║    ║
║   ║  }                                                                      ║    ║
║   ║                                                                         ║    ║
║   ║  // In tests:                                                           ║    ║
║   ║  UserService service = new UserService(mockDatabase);  // Easy mock!    ║    ║
║   ║                                                                         ║    ║
║   ╚═════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    COMPOSITION BENEFITS                                          ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ┌────────────────────────┬─────────────────────────────────────────────────┐   ║
║   │  BENEFIT               │  EXPLANATION                                    │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  Flexibility           │  Change behavior at runtime                     │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  Loose Coupling        │  Classes are independent, easy to change        │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  No Diamond Problem    │  Multiple composition works fine                │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  Better Encapsulation  │  Hide internal components                       │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  Easy Testing          │  Can mock dependencies easily                   │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  SOLID Compliant       │  Supports DIP, SRP, OCP principles              │   ║
║   └────────────────────────┴─────────────────────────────────────────────────┘   ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    STRATEGY PATTERN (Composition Example)                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                        ╔═════════════════════════╗                               ║
║                        ║    <<interface>>        ║                               ║
║                        ║    PaymentStrategy      ║                               ║
║                        ║    + pay(amount)        ║                               ║
║                        ╚═══════════╦═════════════╝                               ║
║                                    │                                             ║
║              ╔═════════════════════╬═════════════════════╗                       ║
║              ▼                     ▼                     ▼                       ║
║   ╔════════════════════╗ ╔════════════════════╗ ╔════════════════════╗          ║
║   ║  CreditCardPayment ║ ║    PayPalPayment   ║ ║   CryptoPayment    ║          ║
║   ║  + pay(amount)     ║ ║    + pay(amount)   ║ ║   + pay(amount)    ║          ║
║   ╚════════════════════╝ ╚════════════════════╝ ╚════════════════════╝          ║
║                                    ▲                                             ║
║                                    │ uses                                        ║
║                        ╔═══════════╧═════════════╗                               ║
║                        ║     ShoppingCart        ║                               ║
║                        ║ - PaymentStrategy pay   ║  ←── HAS-A PaymentStrategy    ║
║                        ║ + checkout()            ║                               ║
║                        ╚═════════════════════════╝                               ║
║                                                                                  ║
║   // Usage:                                                                      ║
║   ShoppingCart cart = new ShoppingCart();                                        ║
║   cart.setPaymentStrategy(new CreditCardPayment());  // Pay by card              ║
║   cart.checkout();                                                               ║
║                                                                                  ║
║   cart.setPaymentStrategy(new PayPalPayment());      // Changed to PayPal!       ║
║   cart.checkout();                                                               ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    DECISION GUIDE                                                ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                                                                       ║      ║
║   ║   DEFAULT: Use COMPOSITION                                            ║      ║
║   ║                                                                       ║      ║
║   ║   EXCEPTION: Use INHERITANCE only when:                               ║      ║
║   ║              • TRUE IS-A relationship exists                          ║      ║
║   ║              • Need polymorphism                                      ║      ║
║   ║              • Parent class is stable                                 ║      ║
║   ║              • LSP is satisfied                                       ║      ║
║   ║                                                                       ║      ║
║   ║   REMEMBER: "Favor Composition over Inheritance"                      ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
