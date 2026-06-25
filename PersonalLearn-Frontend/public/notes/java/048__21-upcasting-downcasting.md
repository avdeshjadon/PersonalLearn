# UPCASTING AND DOWNCASTING

## Concept Introduction

**Casting** ka matlab hai **type conversion**. OOPs mein parent-child relationship ke beech object references ko convert karna **upcasting** aur **downcasting** kehlata hai.

**Upcasting = Child → Parent (Automatic, Safe)**  
**Downcasting = Parent → Child (Manual, Risky)**

Real Example: **Dog IS-A Animal** - Dog ko Animal bana sakte ho (upcasting), but har Animal ko Dog nahi bana sakte (downcasting needs check)

---

## Why Casting Exists

### The Need
Polymorphism ke liye parent reference se child objects ko access karna padta hai.

```java
Animal a = new Dog();  // Upcasting - needed for polymorphism
```

---

## Definitions

### Simple Definition
Upcasting is converting child class reference to parent class reference (automatic). Downcasting is converting parent class reference to child class reference (manual, needs explicit casting).

### Interview Definition
Upcasting is implicit type conversion where a subclass object is referenced by a superclass reference variable, enabling polymorphism and accessing only parent class members. Downcasting is explicit type conversion where a parent reference pointing to a child object is converted back to child reference, allowing access to child-specific members. Downcasting requires explicit cast operator and can throw ClassCastException if object is not actually of target type.

---

## Upcasting

**Child object ko Parent reference se point karna**

### Syntax
```java
Parent parent = new Child();  // Automatic upcasting
```

### Example

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        // Upcasting - automatic
        Animal a = new Dog();  // Dog object, Animal reference
        
        a.eat();   // Can call parent method - Works
        // a.bark();  // ERROR! Cannot call child method
    }
}
```

**Key Points**:
- ✅ Automatic (no explicit cast needed)
- ✅ Always safe
- ✅ Can access only parent class members
- ✅ Enables polymorphism

---

## Downcasting

**Parent reference ko Child reference mein convert karna**

### Syntax
```java
Parent parent = new Child();
Child child = (Child) parent;  // Explicit downcasting
```

### Example

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        // Upcasting first
        Animal a = new Dog();
        
        // Downcasting - manual
        Dog d = (Dog) a;  // Explicit cast needed
        
        d.eat();   // Parent method - Works
        d.bark();  // Child method - Now works!
    }
}
```

**Key Points**:
- ❌ Manual (explicit cast required)
- ⚠️ Can throw ClassCastException if wrong type
- ✅ Can access child class specific members
- ⚠️ Should check with instanceof before casting

---

## Safe Downcasting with instanceof

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
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

public class Main {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();
        
        // Safe downcasting with instanceof
        if (a1 instanceof Dog) {
            Dog d = (Dog) a1;
            d.bark();  // Safe - Dog barks
        }
        
        if (a2 instanceof Dog) {
            Dog d = (Dog) a2;
            d.bark();
        } else {
            System.out.println("a2 is not a Dog");  // This executes
        }
        
        // Unsafe downcasting - will fail
        // Dog d = (Dog) a2;  // ClassCastException!
    }
}
```

---

## Real-World Example

```java
class Employee {
    String name;
    int id;
    
    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }
    
    void work() {
        System.out.println(name + " is working");
    }
}

class Manager extends Employee {
    int teamSize;
    
    Manager(String name, int id, int teamSize) {
        super(name, id);
        this.teamSize = teamSize;
    }
    
    void conductMeeting() {
        System.out.println(name + " conducting meeting with team of " + teamSize);
    }
}

class Developer extends Employee {
    String language;
    
    Developer(String name, int id, String language) {
        super(name, id);
        this.language = language;
    }
    
    void code() {
        System.out.println(name + " coding in " + language);
    }
}

public class Main {
    public static void main(String[] args) {
        // Upcasting - for polymorphism
        Employee e1 = new Manager("Rahul", 101, 10);
        Employee e2 = new Developer("Priya", 102, "Java");
        
        e1.work();  // Common method
        e2.work();  // Common method
        
        // e1.conductMeeting();  // ERROR! Employee doesn't have this
        
        // Downcasting - to access specific methods
        if (e1 instanceof Manager) {
            Manager m = (Manager) e1;
            m.conductMeeting();  // Manager conducting meeting with team of 10
        }
        
        if (e2 instanceof Developer) {
            Developer d = (Developer) e2;
            d.code();  // Priya coding in Java
        }
    }
}
```

---

## Upcasting vs Downcasting

| Feature | Upcasting | Downcasting |
|---------|-----------|-------------|
| **Direction** | Child → Parent | Parent → Child |
| **Casting** | Implicit (automatic) | Explicit (manual) |
| **Safety** | Always safe | Can fail (ClassCastException) |
| **Syntax** | Parent p = new Child() | Child c = (Child) parent |
| **Access** | Only parent members | All child members |
| **Use Case** | Polymorphism | Access child-specific features |
| **instanceof Check** | Not needed | Recommended |

---

## ClassCastException

**Wrong downcasting throws exception**

```java
Animal a = new Cat();
Dog d = (Dog) a;  // ClassCastException! Cat cannot be cast to Dog
```

**Solution**: Always use instanceof

```java
if (a instanceof Dog) {
    Dog d = (Dog) a;
    d.bark();
} else {
    System.out.println("Not a Dog!");
}
```

---

## Important Interview Questions

**Q1: What is Upcasting?**

Converting child class reference to parent class reference. It's automatic, safe, and enables polymorphism.

**Q2: What is Downcasting?**

Converting parent class reference to child class reference. It's manual, requires explicit cast, and allows access to child-specific members.

**Q3: Why is downcasting risky?**

It can throw ClassCastException if the object is not actually of the target child class type.

**Q4: How to make downcasting safe?**

Use instanceof operator to check object type before casting.

**Q5: Can we cast unrelated classes?**

No! Casting only works in inheritance hierarchy. Unrelated classes cannot be cast.

---

## Short Recap

**Upcasting**:
- Child → Parent
- Automatic, safe
- Enables polymorphism
- Access only parent members

**Downcasting**:
- Parent → Child
- Manual, risky
- Needs explicit cast
- Check with instanceof first

**Rule**: Always validate with instanceof before downcasting!

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                       UPCASTING AND DOWNCASTING                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║                           INHERITANCE HIERARCHY                                   ║
║                                                                                   ║
║                          ╔═══════════════════╗                                    ║
║                          ║      Animal       ║  (Parent)                          ║
║                          ║  ───────────────  ║                                    ║
║                          ║  + eat()          ║                                    ║
║                          ╚═════════╤═════════╝                                    ║
║                                    │                                              ║
║                       ┌────────────┴────────────┐                                 ║
║                       │                         │                                 ║
║                       ▼                         ▼                                 ║
║              ╔═══════════════════╗     ╔═══════════════════╗                      ║
║              ║        Dog        ║     ║        Cat        ║  (Children)          ║
║              ║  ───────────────  ║     ║  ───────────────  ║                      ║
║              ║  + bark()         ║     ║  + meow()         ║                      ║
║              ╚═══════════════════╝     ╚═══════════════════╝                      ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   UPCASTING (Child → Parent)              DOWNCASTING (Parent → Child)            ║
║   ══════════════════════════              ════════════════════════════            ║
║                                                                                   ║
║   Dog dog = new Dog();                    Animal a = new Dog();                   ║
║                                                                                   ║
║        ┌─────────┐                             ┌─────────┐                        ║
║        │   Dog   │                             │   Dog   │ (Actual object)        ║
║        │  Object │                             │  Object │                        ║
║        └────┬────┘                             └────┬────┘                        ║
║             │                                      │                              ║
║             │  IMPLICIT                            │  Check with instanceof       ║
║             │  (Automatic)                         │                              ║
║             ▼                                      ▼                              ║
║        ┌─────────┐                        ┌───────────────────┐                   ║
║        │ Animal  │ Reference              │ if (a instanceof  │                   ║
║        │   a     │                        │     Dog) {        │                   ║
║        └─────────┘                        │   Dog d = (Dog)a; │                   ║
║                                           │ }                 │                   ║
║    Animal a = dog;  ✓                     └───────────────────┘                   ║
║                                                                                   ║
║    ✓ Always safe                          ⚠️  Can throw ClassCastException       ║
║    ✓ Automatic                            ✗ Manual cast required                  ║
║    ✓ Access: parent members only          ✓ Access: child-specific members       ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                            MEMORY VISUALIZATION                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║                        HEAP MEMORY                                                ║
║   ┌─────────────────────────────────────────────────────────────┐                ║
║   │                                                             │                ║
║   │    ╔═══════════════════════════════════════╗               │                ║
║   │    ║          DOG OBJECT                   ║               │                ║
║   │    ║  ┌─────────────────────────────────┐  ║               │                ║
║   │    ║  │  Animal part: eat()             │◀─╫── Animal ref  │                ║
║   │    ║  └─────────────────────────────────┘  ║    can see    │                ║
║   │    ║  ┌─────────────────────────────────┐  ║               │                ║
║   │    ║  │  Dog part: bark()               │◀─╫── Dog ref     │                ║
║   │    ║  └─────────────────────────────────┘  ║    can see    │                ║
║   │    ╚═══════════════════════════════════════╝               │                ║
║   │                                                             │                ║
║   └─────────────────────────────────────────────────────────────┘                ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                             SAFE DOWNCASTING                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║      Animal a = new Dog();                                                        ║
║                                                                                   ║
║      ┌────────────────────────────────────────────────────────────┐              ║
║      │  if (a instanceof Dog) {        // ALWAYS check first!    │              ║
║      │      Dog d = (Dog) a;           // Safe to cast           │              ║
║      │      d.bark();                  // Can access Dog methods │              ║
║      │  }                                                         │              ║
║      └────────────────────────────────────────────────────────────┘              ║
║                                                                                   ║
║      ✗ UNSAFE: Dog d = (Dog) a;  // Without instanceof check!                   ║
║                                  // May throw ClassCastException                 ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                              COMPARISON TABLE                                     ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────┬─────────────────────┬─────────────────────┐                ║
║   │     Feature     │      Upcasting      │     Downcasting     │                ║
║   ├─────────────────┼─────────────────────┼─────────────────────┤                ║
║   │ Direction       │ Child → Parent      │ Parent → Child      │                ║
║   │ Cast Type       │ Implicit            │ Explicit            │                ║
║   │ Safety          │ Always safe         │ Can fail            │                ║
║   │ Syntax          │ Parent p = child;   │ Child c = (Child)p; │                ║
║   │ Access          │ Parent members      │ All child members   │                ║
║   │ Use Case        │ Polymorphism        │ Access specifics    │                ║
║   └─────────────────┴─────────────────────┴─────────────────────┘                ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
