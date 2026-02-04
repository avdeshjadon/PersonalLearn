# DESIGN PRINCIPLES

## Concept Introduction

**Design Principles** wo **guidelines** hain jo **good code** likhne mein help karte hain - code jo maintainable, scalable, aur flexible ho.

**Important Principles:**
1. **SOLID** - 5 principles for OOP design
2. **DRY** - Don't Repeat Yourself
3. **KISS** - Keep It Simple, Stupid
4. **YAGNI** - You Aren't Gonna Need It

**Design Principles = Rules for clean, maintainable code**

---

## Why These Principles Exist

### Problem: Bad Code

```java
// Violates multiple principles
class User {
    void saveToDatabase() {
        // Database code
        // Email sending code
        // Logging code
        // Validation code
        // All mixed together!
    }
}
```

**Issues:**
- Hard to maintain
- Hard to test
- Hard to change
- Code duplication

### Solution: Follow Design Principles

```java
class User {
    // Single responsibility - just user data
}

class UserRepository {
    // Single responsibility - database operations
}

class EmailService {
    // Single responsibility - email sending
}
```

---

## Definitions

### Very Simple Definition
Design principles wo guidelines hain jo achha, maintainable aur flexible code likhne mein help karte hain.

### Simple Definition
Design principles are fundamental guidelines and best practices that help developers write clean, maintainable, and scalable code. They include SOLID, DRY, KISS, and YAGNI principles.

### College Exam Definition
Design principles are established guidelines in software engineering that promote good design practices in object-oriented programming. Key principles include SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion), DRY (Don't Repeat Yourself), KISS (Keep It Simple), and YAGNI (You Aren't Gonna Need It). These principles help in creating maintainable, flexible, scalable, and testable code by reducing coupling, increasing cohesion, and following separation of concerns.

### Technical Definition
Design principles are foundational axioms and heuristics that guide software architecture and implementation towards maintainability, scalability, and flexibility. SOLID principles provide object-oriented design guidance: SRP ensures single reason to change, OCP enables extension without modification, LSP maintains behavioral subtyping, ISP prevents fat interfaces, DIP inverts dependency direction toward abstractions. DRY eliminates knowledge duplication, KISS favors simplicity over cleverness, YAGNI prevents speculative generality. These principles reduce coupling, increase cohesion, enhance testability, and facilitate change by creating clear boundaries, stable abstractions, and explicit dependencies.

### Interview Definition
Design principles = Guidelines for clean code. Key principles: (1) **SOLID**: SRP (class does one thing), OCP (open for extension, closed for modification), LSP (subtypes must be substitutable), ISP (small, focused interfaces), DIP (depend on abstractions, not concrete), (2) **DRY**: Don't duplicate logic/knowledge, extract common code, single source of truth, (3) **KISS**: Simple solutions over complex, readable code, avoid over-engineering, (4) **YAGNI**: Don't add features you don't need now, avoid premature optimization. Benefits: Maintainability, testability, flexibility, reusability, reduced bugs. Apply through: Proper class design, composition over inheritance, dependency injection, interface-based programming.

---

## 1. SOLID Principles

### S - Single Responsibility Principle (SRP)

**Rule:** A class should have only ONE reason to change.

**Bad Example:**
```java
class User {
    String name;
    String email;
    
    void save() {
        // Database code
    }
    
    void sendEmail() {
        // Email code
    }
    
    void validateInput() {
        // Validation code
    }
    
    // Too many responsibilities!
}
```

**Good Example:**
```java
class User {
    String name;
    String email;
    // Only data - Single responsibility
}

class UserRepository {
    void save(User user) {
        // Only database operations
    }
}

class EmailService {
    void send(String email, String message) {
        // Only email sending
    }
}

class UserValidator {
    boolean validate(User user) {
        // Only validation
    }
}
```

---

### O - Open-Closed Principle (OCP)

**Rule:** Classes should be OPEN for extension, CLOSED for modification.

**Bad Example:**
```java
class PaymentProcessor {
    void processPayment(String type) {
        if (type.equals("Credit Card")) {
            // Credit card logic
        } else if (type.equals("PayPal")) {
            // PayPal logic
        } else if (type.equals("Bitcoin")) {
            // Bitcoin logic
        }
        // Need to modify for new payment types!
    }
}
```

**Good Example:**
```java
interface Payment {
    void process();
}

class CreditCardPayment implements Payment {
    public void process() {
        System.out.println("Processing credit card");
    }
}

class PayPalPayment implements Payment {
    public void process() {
        System.out.println("Processing PayPal");
    }
}

class BitcoinPayment implements Payment {
    public void process() {
        System.out.println("Processing Bitcoin");
    }
}

class PaymentProcessor {
    void processPayment(Payment payment) {
        payment.process();  // No modification needed for new types!
    }
}
```

---

### L - Liskov Substitution Principle (LSP)

**Rule:** Subclasses should be substitutable for their base classes.

**Bad Example:**
```java
class Bird {
    void fly() {
        System.out.println("Flying");
    }
}

class Penguin extends Bird {
    @Override
    void fly() {
        throw new UnsupportedOperationException("Penguins can't fly!");
        // Violates LSP - can't substitute
    }
}
```

**Good Example:**
```java
interface Bird {
    void move();
}

class FlyingBird implements Bird {
    public void move() {
        System.out.println("Flying");
    }
}

class Penguin implements Bird {
    public void move() {
        System.out.println("Swimming");
    }
}

// Both can be substituted
void moveBird(Bird bird) {
    bird.move();  // Works for both
}
```

---

### I - Interface Segregation Principle (ISP)

**Rule:** Don't force clients to depend on interfaces they don't use.

**Bad Example:**
```java
interface Worker {
    void work();
    void eat();
    void sleep();
}

class Robot implements Worker {
    public void work() {
        System.out.println("Working");
    }
    
    public void eat() {
        // Robot doesn't eat!
    }
    
    public void sleep() {
        // Robot doesn't sleep!
    }
}
```

**Good Example:**
```java
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

interface Sleepable {
    void sleep();
}

class Human implements Workable, Eatable, Sleepable {
    public void work() {
        System.out.println("Working");
    }
    
    public void eat() {
        System.out.println("Eating");
    }
    
    public void sleep() {
        System.out.println("Sleeping");
    }
}

class Robot implements Workable {
    public void work() {
        System.out.println("Working");
    }
    // Only implements what it needs
}
```

---

### D - Dependency Inversion Principle (DIP)

**Rule:** Depend on abstractions, not concretions.

**Bad Example:**
```java
class MySQLDatabase {
    void save(String data) {
        System.out.println("Saving to MySQL");
    }
}

class UserService {
    private MySQLDatabase db = new MySQLDatabase();
    // Tightly coupled to MySQL
    
    void saveUser(String user) {
        db.save(user);
    }
}
```

**Good Example:**
```java
interface Database {
    void save(String data);
}

class MySQLDatabase implements Database {
    public void save(String data) {
        System.out.println("Saving to MySQL");
    }
}

class MongoDatabase implements Database {
    public void save(String data) {
        System.out.println("Saving to MongoDB");
    }
}

class UserService {
    private Database db;  // Depends on abstraction
    
    UserService(Database db) {
        this.db = db;  // Dependency injection
    }
    
    void saveUser(String user) {
        db.save(user);
    }
}

// Can switch databases easily
public class Main {
    public static void main(String[] args) {
        UserService service1 = new UserService(new MySQLDatabase());
        UserService service2 = new UserService(new MongoDatabase());
    }
}
```

---

## 2. DRY - Don't Repeat Yourself

**Rule:** Don't duplicate code or logic.

**Bad Example:**
```java
class Calculator {
    int add(int a, int b) {
        System.out.println("Operation started");
        int result = a + b;
        System.out.println("Operation completed");
        return result;
    }
    
    int subtract(int a, int b) {
        System.out.println("Operation started");  // Duplicate
        int result = a - b;
        System.out.println("Operation completed");  // Duplicate
        return result;
    }
}
```

**Good Example:**
```java
class Calculator {
    private void logOperation(String phase) {
        System.out.println("Operation " + phase);
    }
    
    int add(int a, int b) {
        logOperation("started");
        int result = a + b;
        logOperation("completed");
        return result;
    }
    
    int subtract(int a, int b) {
        logOperation("started");
        int result = a - b;
        logOperation("completed");
        return result;
    }
}
```

---

## 3. KISS - Keep It Simple, Stupid

**Rule:** Simple solutions are better than complex ones.

**Bad Example:**
```java
class UserValidator {
    boolean validate(String username) {
        return Optional.ofNullable(username)
                .filter(u -> !u.isEmpty())
                .map(String::trim)
                .filter(u -> u.length() >= 3)
                .filter(u -> u.length() <= 20)
                .filter(u -> u.matches("[a-zA-Z0-9]+"))
                .isPresent();
        // Over-engineered!
    }
}
```

**Good Example:**
```java
class UserValidator {
    boolean validate(String username) {
        if (username == null || username.trim().isEmpty()) {
            return false;
        }
        int len = username.trim().length();
        return len >= 3 && len <= 20 && username.matches("[a-zA-Z0-9]+");
        // Simple and readable
    }
}
```

---

## 4. YAGNI - You Aren't Gonna Need It

**Rule:** Don't add functionality until it's needed.

**Bad Example:**
```java
class User {
    String name;
    String email;
    String phone;
    String address;
    String city;
    String country;
    String zipCode;
    String faxNumber;  // Who uses fax anymore?
    String middleName;  // Not needed now
    Date dateOfBirth;  // Not needed now
    // Adding fields "just in case"
}
```

**Good Example:**
```java
class User {
    String name;
    String email;
    // Only what's needed NOW
    
    // Add more fields when actually needed
}
```

---

## Design Principles Summary

| Principle | Acronym | Focus | Key Point |
|-----------|---------|-------|-----------|
| **Single Responsibility** | SRP | One reason to change | One class, one job |
| **Open-Closed** | OCP | Extension vs modification | Open for extension, closed for modification |
| **Liskov Substitution** | LSP | Substitutability | Subclass should work where parent works |
| **Interface Segregation** | ISP | Focused interfaces | Small, specific interfaces |
| **Dependency Inversion** | DIP | Abstractions | Depend on interfaces, not concrete classes |
| **Don't Repeat Yourself** | DRY | No duplication | Single source of truth |
| **Keep It Simple** | KISS | Simplicity | Simple over complex |
| **You Aren't Gonna Need It** | YAGNI | Necessity | Add only what's needed now |

---

## Important Interview Questions

**Q1: What are SOLID principles?**

SOLID is an acronym for five design principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.

**Q2: Explain Single Responsibility Principle.**

A class should have only one reason to change. Each class should do one thing and do it well.

**Q3: What is DRY principle?**

Don't Repeat Yourself - avoid code duplication. Extract common logic into reusable methods/classes.

**Q4: Difference between DIP and Dependency Injection?**

DIP is the principle (depend on abstractions). Dependency Injection is a technique to implement DIP (injecting dependencies).

**Q5: What is KISS principle?**

Keep It Simple, Stupid - favor simple solutions over complex ones. Write readable, maintainable code.

**Q6: Why follow design principles?**

For maintainability, testability, scalability, flexibility, and reduced bugs.

**Q7: Can you violate design principles?**

Yes, principles are guidelines, not laws. Balance is key - don't over-engineer for simple cases.

**Q8: What is YAGNI?**

You Aren't Gonna Need It - don't add features until they're actually needed. Avoid premature optimization.

---

## Short Recap

**Design Principles** = Guidelines for clean code

**SOLID:**
- **S**ingle Responsibility
- **O**pen-Closed
- **L**iskov Substitution
- **I**nterface Segregation
- **D**ependency Inversion

**Other Principles:**
- **DRY** - Don't Repeat Yourself
- **KISS** - Keep It Simple
- **YAGNI** - You Aren't Gonna Need It

**Benefits:**
- Maintainable code
- Testable code
- Flexible design
- Reduced coupling
- Increased cohesion

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                       DESIGN PRINCIPLES                                       ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   SOLID Principles:                                                           ║
║   ═════════════════                                                           ║
║   S - Single Responsibility    → One class, one job                           ║
║   O - Open-Closed              → Open for extension, closed for modification  ║
║   L - Liskov Substitution      → Subclass substitutable for parent           ║
║   I - Interface Segregation    → Small, focused interfaces                   ║
║   D - Dependency Inversion     → Depend on abstractions, not concrete        ║
║                                                                               ║
║   Other Principles:                                                           ║
║   ═════════════════                                                           ║
║   DRY  - Don't Repeat Yourself     → No code duplication                      ║
║   KISS - Keep It Simple, Stupid    → Simple over complex                     ║
║   YAGNI - You Aren't Gonna Need It → Add only what's needed                  ║
║                                                                               ║
║   Example - SRP:                                                              ║
║   ════════════════                                                            ║
║   ❌ class User {                                                             ║
║        void save() { }        // Multiple                                     ║
║        void sendEmail() { }   // responsibilities                             ║
║        void validate() { }                                                    ║
║      }                                                                        ║
║                                                                               ║
║   ✓ class User { }            // Data only                                    ║
║     class UserRepository { }  // Persistence                                  ║
║     class EmailService { }    // Email                                        ║
║     class UserValidator { }   // Validation                                   ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
