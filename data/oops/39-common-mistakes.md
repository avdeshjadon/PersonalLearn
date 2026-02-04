# COMMON MISTAKES

## Concept Introduction

**OOPs mein kai common mistakes** hoti hain jo beginners karte hain. Inhe samajhna aur avoid karna important hai.

**Common Categories:**
1. **Design Mistakes** - Wrong use of inheritance/composition
2. **Encapsulation Mistakes** - Exposing internals
3. **Inheritance Mistakes** - Wrong hierarchies
4. **Interface Mistakes** - Bloated interfaces
5. **General Mistakes** - Not following principles

**Goal:** Identify and avoid these mistakes!

---

## Why Learn From Mistakes

### Impact of Mistakes

```
Bad Design → Hard to maintain
          → Hard to test
          → Hard to extend
          → More bugs
          → Wasted time
```

### Learning Benefits

```
Learn Mistakes → Better design
              → Clean code
              → Easy maintenance
              → Fewer bugs
              → Happy team!
```

---

## Definitions

### Very Simple Definition
OOPs mein common mistakes wo galtiyan hain jo beginners aksar karte hain - jaise wrong inheritance use, encapsulation break karna, ya SOLID principles ignore karna.

### Simple Definition
Common OOPs mistakes include misusing inheritance, breaking encapsulation, creating god classes, violating SOLID principles, and not following established design patterns. Learning these helps write better code.

### College Exam Definition
Common OOPs mistakes are frequent design and implementation errors made by developers. Major categories include: (1) misusing inheritance instead of composition, (2) breaking encapsulation by exposing internals, (3) creating tightly coupled code, (4) violating SOLID principles, (5) creating god classes with too many responsibilities, (6) improper use of static, (7) not properly overriding equals/hashCode, (8) ignoring polymorphism benefits. Understanding these mistakes helps in writing maintainable, flexible, and robust object-oriented code.

### Technical Definition
Common OOPs mistakes represent anti-patterns and design violations frequently encountered in object-oriented development. Critical mistakes include: (1) inheritance abuse (preferring inheritance over composition without true IS-A relationship), (2) encapsulation violations (public fields, getters/setters for everything), (3) SOLID violations (especially SRP with god classes), (4) tight coupling through concrete dependencies, (5) improper abstraction levels, (6) LSP violations making subtypes non-substitutable, (7) primitive obsession, (8) incorrect equals/hashCode contracts affecting collections, (9) excessive use of static defeating OOP benefits, (10) not applying appropriate design patterns. These mistakes lead to fragile base class problems, maintenance nightmares, testing difficulties, and rigid architectures.

### Interview Definition
Common OOPs mistakes: (1) **Wrong Inheritance**: Using inheritance for code reuse (should use composition), violating IS-A, deep hierarchies, (2) **Breaking Encapsulation**: Public fields, exposing internals, returning mutable references, (3) **SOLID Violations**: God classes (SRP), modifying instead of extending (OCP), non-substitutable subclasses (LSP), (4) **Design Issues**: Tight coupling, concrete dependencies (DIP), fat interfaces (ISP), not using polymorphism, (5) **equals/hashCode**: Not overriding properly, breaking contract, (6) **Excessive static**: Defeats OOP, testing issues, (7) **Premature Optimization**: YAGNI violation, over-engineering. Prevention: Follow SOLID, favor composition, proper encapsulation, use interfaces, write tests, code reviews.

---

## 1. Misusing Inheritance

### Mistake: Using Inheritance for Code Reuse

```java
// ❌ BAD - Inheritance for code reuse only
class ArrayList {
    // List implementation
}

class Stack extends ArrayList {
    // Stack IS-NOT-A ArrayList!
    // Just wants to reuse code
    
    void push(Object item) {
        add(item);
    }
    
    Object pop() {
        return remove(size() - 1);
    }
}

// Problem: Stack exposes ALL ArrayList methods
// Can call stack.add(5, item) - breaks stack contract!
```

**✓ CORRECT:**
```java
class Stack {
    private ArrayList list;  // Composition ✓
    
    Stack() {
        list = new ArrayList();
    }
    
    void push(Object item) {
        list.add(item);
    }
    
    Object pop() {
        return list.remove(list.size() - 1);
    }
    
    // Only expose Stack interface
}
```

---

### Mistake: Deep Inheritance Hierarchies

```java
// ❌ BAD - Too deep
class Entity { }
class LivingEntity extends Entity { }
class Animal extends LivingEntity { }
class Mammal extends Animal { }
class Carnivore extends Mammal { }
class Feline extends Carnivore { }
class BigCat extends Feline { }
class Lion extends BigCat { }

// Too complex, hard to maintain!
```

**✓ CORRECT:**
```java
// Keep it shallow and simple
class Animal { }
class Lion extends Animal { }

// Use composition for behaviors
interface Carnivorous {
    void hunt();
}

class Lion extends Animal implements Carnivorous {
    public void hunt() {
        System.out.println("Hunting");
    }
}
```

---

## 2. Breaking Encapsulation

### Mistake: Public Fields

```java
// ❌ BAD - Public fields
class BankAccount {
    public double balance;  // Anyone can modify!
    public String accountNumber;
}

// Usage
BankAccount acc = new BankAccount();
acc.balance = -1000;  // Invalid state!
```

**✓ CORRECT:**
```java
class BankAccount {
    private double balance;  // Private
    private String accountNumber;
    
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
}
```

---

### Mistake: Returning Mutable References

```java
// ❌ BAD - Exposing internal mutable object
class Student {
    private List<String> courses;
    
    Student() {
        courses = new ArrayList<>();
    }
    
    List<String> getCourses() {
        return courses;  // Returning internal list!
    }
}

// Usage
Student s = new Student();
s.getCourses().add("Hacking 101");  // Can modify internal state!
```

**✓ CORRECT:**
```java
class Student {
    private List<String> courses;
    
    Student() {
        courses = new ArrayList<>();
    }
    
    List<String> getCourses() {
        return new ArrayList<>(courses);  // Return copy
        // Or Collections.unmodifiableList(courses)
    }
    
    void addCourse(String course) {
        courses.add(course);  // Controlled modification
    }
}
```

---

## 3. SOLID Violations

### Mistake: God Class (SRP Violation)

```java
// ❌ BAD - God class doing everything
class User {
    String name;
    String email;
    
    void validateEmail() {
        // Validation logic
    }
    
    void saveToDatabase() {
        // Database logic
    }
    
    void sendEmail() {
        // Email logic
    }
    
    void generateReport() {
        // Reporting logic
    }
    
    void hashPassword() {
        // Security logic
    }
    
    // Too many responsibilities!
}
```

**✓ CORRECT:**
```java
// Each class has single responsibility
class User {
    private String name;
    private String email;
    // Just data
}

class UserValidator {
    boolean validateEmail(String email) {
        // Validation only
    }
}

class UserRepository {
    void save(User user) {
        // Persistence only
    }
}

class EmailService {
    void sendEmail(String email, String message) {
        // Email only
    }
}

class UserReportGenerator {
    void generateReport(User user) {
        // Reporting only
    }
}
```

---

### Mistake: Tight Coupling (DIP Violation)

```java
// ❌ BAD - Tight coupling to concrete class
class UserService {
    private MySQLDatabase db = new MySQLDatabase();  // Tight coupling!
    
    void saveUser(User user) {
        db.save(user);
    }
}

// Cannot switch database or test easily
```

**✓ CORRECT:**
```java
// Depend on abstraction
interface Database {
    void save(User user);
}

class MySQLDatabase implements Database {
    public void save(User user) {
        System.out.println("Saving to MySQL");
    }
}

class UserService {
    private Database db;  // Abstraction
    
    UserService(Database db) {  // Dependency Injection
        this.db = db;
    }
    
    void saveUser(User user) {
        db.save(user);
    }
}

// Can easily switch database or mock for testing
```

---

## 4. Not Using Polymorphism

### Mistake: Type Checking Instead of Polymorphism

```java
// ❌ BAD - Type checking
class Animal {
    String type;
}

class AnimalSound {
    void makeSound(Animal animal) {
        if (animal.type.equals("Dog")) {
            System.out.println("Bark");
        } else if (animal.type.equals("Cat")) {
            System.out.println("Meow");
        } else if (animal.type.equals("Cow")) {
            System.out.println("Moo");
        }
        // Need to modify for new animals!
    }
}
```

**✓ CORRECT:**
```java
// Use polymorphism
abstract class Animal {
    abstract void makeSound();
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow");
    }
}

class Cow extends Animal {
    void makeSound() {
        System.out.println("Moo");
    }
}

// Usage - no type checking needed
void playSound(Animal animal) {
    animal.makeSound();  // Polymorphism!
}
```

---

## 5. equals() and hashCode() Mistakes

### Mistake: Not Overriding Properly

```java
// ❌ BAD - Not overriding equals/hashCode
class Student {
    int id;
    String name;
    
    // Using default equals (compares references)
}

// Problem:
Student s1 = new Student(1, "Rahul");
Student s2 = new Student(1, "Rahul");
s1.equals(s2);  // false - different objects!

Set<Student> set = new HashSet<>();
set.add(s1);
set.add(s2);  // Adds both! (duplicates)
```

**✓ CORRECT:**
```java
class Student {
    int id;
    String name;
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return id == student.id && Objects.equals(name, student.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}

// Now works correctly
Student s1 = new Student(1, "Rahul");
Student s2 = new Student(1, "Rahul");
s1.equals(s2);  // true ✓

Set<Student> set = new HashSet<>();
set.add(s1);
set.add(s2);  // Only one student in set ✓
```

---

## 6. Excessive Use of Static

### Mistake: Making Everything Static

```java
// ❌ BAD - Utility class pattern overused
class UserManager {
    static List<User> users = new ArrayList<>();  // Global state!
    
    static void addUser(User user) {
        users.add(user);
    }
    
    static List<User> getUsers() {
        return users;
    }
    
    // Cannot mock for testing
    // Global state issues
    // No polymorphism possible
}
```

**✓ CORRECT:**
```java
// Use instance methods with dependency injection
interface UserRepository {
    void addUser(User user);
    List<User> getUsers();
}

class InMemoryUserRepository implements UserRepository {
    private List<User> users = new ArrayList<>();
    
    public void addUser(User user) {
        users.add(user);
    }
    
    public List<User> getUsers() {
        return new ArrayList<>(users);
    }
}

class UserManager {
    private UserRepository repository;
    
    UserManager(UserRepository repository) {
        this.repository = repository;
    }
    
    void addUser(User user) {
        repository.addUser(user);
    }
}

// Can mock repository for testing ✓
// No global state ✓
// Polymorphism possible ✓
```

---

## 7. Not Following Naming Conventions

```java
// ❌ BAD - Poor naming
class u {
    String n;
    int a;
    
    void d() { }
    void s() { }
}

// What does this mean?
```

**✓ CORRECT:**
```java
class User {
    private String name;
    private int age;
    
    void display() {
        System.out.println(name + ", " + age);
    }
    
    void save() {
        // Save user
    }
}

// Clear and readable!
```

---

## Common Mistakes Checklist

| Mistake | Impact | Solution |
|---------|--------|----------|
| **Wrong Inheritance** | Tight coupling, inflexible | Use composition |
| **Public Fields** | No encapsulation | Private fields with methods |
| **God Class** | Hard to maintain | Split into smaller classes (SRP) |
| **Tight Coupling** | Hard to test/change | Depend on interfaces (DIP) |
| **Type Checking** | Not extensible | Use polymorphism |
| **No equals/hashCode** | Collection bugs | Override properly |
| **Excessive Static** | Testing issues | Use instance methods |
| **Deep Hierarchies** | Complex | Keep shallow, use composition |
| **Fat Interfaces** | Force unused methods | Split interfaces (ISP) |
| **Poor Naming** | Hard to understand | Follow conventions |

---

## Important Interview Questions

**Q1: What are common OOPs mistakes?**

Misusing inheritance, breaking encapsulation, god classes, tight coupling, not using polymorphism, not overriding equals/hashCode properly.

**Q2: Why is using inheritance for code reuse bad?**

Creates tight coupling, violates IS-A principle, exposes unnecessary methods, inflexible. Use composition instead.

**Q3: What is a god class?**

A class with too many responsibilities, violating Single Responsibility Principle. Hard to maintain and test.

**Q4: How to avoid tight coupling?**

Depend on abstractions (interfaces), use dependency injection, follow Dependency Inversion Principle.

**Q5: Why override equals() and hashCode() together?**

They're part of the contract. If objects are equal, they must have same hashCode. Essential for collections like HashMap, HashSet.

**Q6: What's wrong with excessive static?**

Defeats OOP benefits (polymorphism, inheritance), creates global state, makes testing difficult.

**Q7: How to avoid deep inheritance hierarchies?**

Keep inheritance shallow (2-3 levels max), favor composition, use interfaces for behaviors.

**Q8: What is primitive obsession?**

Using primitives instead of objects for domain concepts. Create value objects instead (e.g., Money class instead of double).

---

## Short Recap

**Common OOPs Mistakes:**

1. ❌ **Wrong Inheritance** → Use composition
2. ❌ **Public Fields** → Use private + methods
3. ❌ **God Class** → Split (SRP)
4. ❌ **Tight Coupling** → Interfaces (DIP)
5. ❌ **Type Checking** → Use polymorphism
6. ❌ **No equals/hashCode** → Override both
7. ❌ **Excessive Static** → Instance methods
8. ❌ **Deep Hierarchies** → Keep shallow
9. ❌ **Fat Interfaces** → Split (ISP)
10. ❌ **Poor Naming** → Clear names

**Prevention:**
- Follow SOLID principles
- Favor composition over inheritance
- Proper encapsulation
- Use interfaces
- Write tests
- Code reviews

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                        COMMON OOPs MISTAKES                                   ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   1. Wrong Inheritance:                                                       ║
║      ❌ class Stack extends ArrayList { }                                     ║
║      ✓ class Stack { private ArrayList list; }                                ║
║                                                                               ║
║   2. Breaking Encapsulation:                                                  ║
║      ❌ public double balance;                                                ║
║      ✓ private double balance; public double getBalance() { }                 ║
║                                                                               ║
║   3. God Class (SRP Violation):                                               ║
║      ❌ class User { validate(); save(); sendEmail(); }                       ║
║      ✓ class User { } + Validator + Repository + EmailService                ║
║                                                                               ║
║   4. Tight Coupling (DIP Violation):                                          ║
║      ❌ private MySQLDatabase db = new MySQLDatabase();                       ║
║      ✓ private Database db; // Interface + DI                                 ║
║                                                                               ║
║   5. Not Using Polymorphism:                                                  ║
║      ❌ if (type == "Dog") bark();                                            ║
║      ✓ abstract void makeSound(); // Override in subclasses                   ║
║                                                                               ║
║   6. No equals/hashCode:                                                      ║
║      ❌ Using default equals (reference comparison)                           ║
║      ✓ @Override equals() and hashCode()                                      ║
║                                                                               ║
║   7. Excessive Static:                                                        ║
║      ❌ static List<User> users; static void add() { }                        ║
║      ✓ Instance variables + Dependency Injection                              ║
║                                                                               ║
║   Remember: Follow SOLID, favor composition, encapsulate properly!            ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

**Final Advice:** Learn from mistakes, follow principles, write clean code, and always code review!
