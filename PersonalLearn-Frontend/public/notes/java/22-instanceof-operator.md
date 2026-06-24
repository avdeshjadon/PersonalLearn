# INSTANCEOF OPERATOR

## Concept Introduction

**instanceof** ek operator hai jo check karta hai ki koi object kisi particular class ya interface ka instance hai ya nahi. Yeh **true** ya **false** return karta hai.

**instanceof = Object ka type check karna**

Polymorphism aur downcasting ke saath bahut useful hai - pehle check karo ki object kis type ka hai, phir downcast karo.

---

## Why This Concept Exists

### Problem: Unsafe Downcasting

```java
Animal animal = new Dog();

// Unsafe downcasting - might throw ClassCastException
Cat cat = (Cat) animal;  // ❌ Runtime error!
```

### Solution: instanceof Operator

```java
Animal animal = new Dog();

if (animal instanceof Dog) {
    Dog dog = (Dog) animal;  // ✓ Safe downcasting
    dog.bark();
}
```

---

## Definitions

### Very Simple Definition
instanceof operator check karta hai ki object kisi class ka instance hai ya nahi.

### Simple Definition
The instanceof operator in Java is used to test whether an object is an instance of a specific class or implements a specific interface. It returns true or false.

### College Exam Definition
The instanceof operator is a binary operator that checks if an object is an instance of a specified type (class or interface). It returns a boolean value - true if the object is an instance of the specified type or its subtype, false otherwise. It is commonly used for type checking before downcasting.

### Technical Definition
The instanceof operator performs a runtime type check to determine if an object reference is compatible with a specified type. It evaluates to true if the object is an instance of the specified class, or an instance of a subclass of that class, or implements the specified interface. It returns false if the object is null or not compatible with the specified type. The operator is essential for safe downcasting and type-specific operations in polymorphic scenarios.

### Interview Definition
instanceof is a binary operator in Java used for type checking at runtime. Syntax: object instanceof Type. Returns true if: (1) object is an instance of the specified class, (2) object is an instance of a subclass of the specified class, (3) object is an instance of a class that implements the specified interface. Returns false if object is null. Used primarily for: (1) Safe downcasting before explicit type casting, (2) Type-specific behavior in polymorphic code, (3) Avoiding ClassCastException. Note: From Java 16, pattern matching with instanceof allows declaring a variable in the same line.

---

## Basic Syntax and Usage

### Syntax

```java
object instanceof ClassName
object instanceof InterfaceName
```

### Basic Example

```java
class Animal { }
class Dog extends Animal { }
class Cat extends Animal { }

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        
        // Check if dog is instance of Dog
        System.out.println(dog instanceof Dog);      // true
        
        // Check if dog is instance of Animal (parent)
        System.out.println(dog instanceof Animal);   // true
        
        // Check if dog is instance of Cat
        System.out.println(dog instanceof Cat);      // false
        
        // Check if dog is instance of Object
        System.out.println(dog instanceof Object);   // true (everything extends Object)
    }
}
```

**Output:**
```
true
true
false
true
```

---

## With Interfaces

```java
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Bird implements Flyable {
    public void fly() {
        System.out.println("Bird flying");
    }
}

class Duck implements Flyable, Swimmable {
    public void fly() {
        System.out.println("Duck flying");
    }
    
    public void swim() {
        System.out.println("Duck swimming");
    }
}

public class Main {
    public static void main(String[] args) {
        Duck duck = new Duck();
        
        System.out.println(duck instanceof Duck);       // true
        System.out.println(duck instanceof Flyable);    // true
        System.out.println(duck instanceof Swimmable);  // true
        System.out.println(duck instanceof Bird);       // false
        
        Bird bird = new Bird();
        System.out.println(bird instanceof Flyable);    // true
        System.out.println(bird instanceof Swimmable);  // false
    }
}
```

**Output:**
```
true
true
true
false
true
false
```

---

## Safe Downcasting

```java
class Animal {
    void eat() {
        System.out.println("Animal eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barking");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Cat meowing");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();
        Animal animal3 = new Animal();
        
        // Safe downcasting using instanceof
        if (animal1 instanceof Dog) {
            Dog dog = (Dog) animal1;
            dog.bark();
        }
        
        if (animal2 instanceof Cat) {
            Cat cat = (Cat) animal2;
            cat.meow();
        }
        
        // This will be false, so no downcasting
        if (animal3 instanceof Dog) {
            Dog dog = (Dog) animal3;  // Won't execute
            dog.bark();
        } else {
            System.out.println("animal3 is not a Dog");
        }
    }
}
```

**Output:**
```
Dog barking
Cat meowing
animal3 is not a Dog
```

---

## Real-World Example: Payment Processing

```java
abstract class Payment {
    abstract void process();
}

class CreditCardPayment extends Payment {
    String cardNumber;
    
    CreditCardPayment(String card) {
        this.cardNumber = card;
    }
    
    void process() {
        System.out.println("Processing credit card payment");
    }
    
    void validateCard() {
        System.out.println("Validating card: " + cardNumber);
    }
}

class UpiPayment extends Payment {
    String upiId;
    
    UpiPayment(String upi) {
        this.upiId = upi;
    }
    
    void process() {
        System.out.println("Processing UPI payment");
    }
    
    void verifyUpi() {
        System.out.println("Verifying UPI ID: " + upiId);
    }
}

class CashPayment extends Payment {
    void process() {
        System.out.println("Processing cash payment");
    }
    
    void countCash() {
        System.out.println("Counting cash");
    }
}

class PaymentProcessor {
    void executePayment(Payment payment) {
        // Type-specific operations using instanceof
        if (payment instanceof CreditCardPayment) {
            CreditCardPayment cc = (CreditCardPayment) payment;
            cc.validateCard();
        } else if (payment instanceof UpiPayment) {
            UpiPayment upi = (UpiPayment) payment;
            upi.verifyUpi();
        } else if (payment instanceof CashPayment) {
            CashPayment cash = (CashPayment) payment;
            cash.countCash();
        }
        
        // Common operation for all
        payment.process();
    }
}

public class Main {
    public static void main(String[] args) {
        PaymentProcessor processor = new PaymentProcessor();
        
        Payment p1 = new CreditCardPayment("1234-5678-9012-3456");
        Payment p2 = new UpiPayment("user@paytm");
        Payment p3 = new CashPayment();
        
        processor.executePayment(p1);
        System.out.println();
        
        processor.executePayment(p2);
        System.out.println();
        
        processor.executePayment(p3);
    }
}
```

**Output:**
```
Validating card: 1234-5678-9012-3456
Processing credit card payment

Verifying UPI ID: user@paytm
Processing UPI payment

Counting cash
Processing cash payment
```

---

## instanceof with null

```java
public class Main {
    public static void main(String[] args) {
        String str = null;
        
        // instanceof with null always returns false
        System.out.println(str instanceof String);   // false
        System.out.println(str instanceof Object);   // false
        
        // No NullPointerException
    }
}
```

**Output:**
```
false
false
```

---

## Pattern Matching (Java 16+)

### Old Way (Before Java 16)

```java
if (obj instanceof String) {
    String str = (String) obj;  // Manual casting
    System.out.println(str.length());
}
```

### New Way (Java 16+)

```java
// Pattern matching - declare variable in same line
if (obj instanceof String str) {
    System.out.println(str.length());  // No manual casting needed!
}
```

### Example

```java
class Animal {
    String name;
    Animal(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    String breed;
    Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog("Buddy", "Golden Retriever");
        
        // Java 16+ Pattern Matching
        if (animal instanceof Dog dog) {
            // 'dog' variable is automatically created and cast
            System.out.println("Dog Name: " + dog.name);
            System.out.println("Dog Breed: " + dog.breed);
        }
    }
}
```

**Output:**
```
Dog Name: Buddy
Dog Breed: Golden Retriever
```

---

## Hierarchy Example

```java
class Vehicle { }
class Car extends Vehicle { }
class SportsCar extends Car { }

public class Main {
    public static void main(String[] args) {
        SportsCar sportsCar = new SportsCar();
        
        // SportsCar IS-A Car IS-A Vehicle IS-A Object
        System.out.println("sportsCar instanceof SportsCar: " + 
            (sportsCar instanceof SportsCar));    // true
        
        System.out.println("sportsCar instanceof Car: " + 
            (sportsCar instanceof Car));          // true
        
        System.out.println("sportsCar instanceof Vehicle: " + 
            (sportsCar instanceof Vehicle));      // true
        
        System.out.println("sportsCar instanceof Object: " + 
            (sportsCar instanceof Object));       // true
        
        // But Car is not a SportsCar
        Car car = new Car();
        System.out.println("car instanceof SportsCar: " + 
            (car instanceof SportsCar));          // false
    }
}
```

**Output:**
```
sportsCar instanceof SportsCar: true
sportsCar instanceof Car: true
sportsCar instanceof Vehicle: true
sportsCar instanceof Object: true
car instanceof SportsCar: false
```

---

## Common Use Cases

### Use Case 1: Polymorphic Collections

```java
import java.util.*;

class Shape {
    void draw() { }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle extends Shape {
    void draw() {
        System.out.println("Drawing Rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle());
        shapes.add(new Rectangle());
        shapes.add(new Circle());
        
        // Count circles
        int circleCount = 0;
        for (Shape shape : shapes) {
            if (shape instanceof Circle) {
                circleCount++;
            }
        }
        
        System.out.println("Number of circles: " + circleCount);
    }
}
```

---

### Use Case 2: equals() Method

```java
class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public boolean equals(Object obj) {
        // Check if same object
        if (this == obj) return true;
        
        // Check if null or different class
        if (obj == null || !(obj instanceof Person)) {
            return false;
        }
        
        // Downcast and compare
        Person other = (Person) obj;
        return this.name.equals(other.name) && this.age == other.age;
    }
}
```

---

## Important Interview Questions

**Q1: What is instanceof operator in Java?**

instanceof is a binary operator used to test whether an object is an instance of a specified class or interface. It returns a boolean value.

**Q2: What does instanceof return for null?**

instanceof always returns false for null reference, and it doesn't throw NullPointerException.

**Q3: Can we use instanceof with interfaces?**

Yes, instanceof can be used to check if an object implements a specific interface.

**Q4: What is the result of child instanceof Parent?**

If child is an instance of a class that extends Parent, it returns true (due to IS-A relationship).

**Q5: What is pattern matching with instanceof (Java 16+)?**

Pattern matching allows combining instanceof check and type casting in one line:
```java
if (obj instanceof String str) {
    // Use str directly
}
```

**Q6: When should we use instanceof?**

- Before downcasting to avoid ClassCastException
- For type-specific behavior in polymorphic code
- In equals() method implementation
- When processing heterogeneous collections

**Q7: What are the disadvantages of instanceof?**

- Can indicate poor design (violation of polymorphism)
- Makes code harder to extend
- Runtime overhead
- Consider using polymorphism instead when possible

---

## Short Recap

**instanceof** operator object ka type check karta hai.

**Syntax:** object instanceof Type

**Returns:**
- **true** - agar object specified type ka instance hai
- **false** - agar nahi hai ya null hai

**Usage:**
- Safe downcasting
- Type-specific operations
- Polymorphic collections

**Java 16+:** Pattern matching for cleaner code

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                        INSTANCEOF OPERATOR                                       ║
╚══════════════════════════════════════════════════════════════════════════════════╝

                              ╔═══════════════════╗
                              ║  WHAT IS          ║
                              ║  INSTANCEOF?      ║
                              ╚═════════╦═════════╝
                                        ║
                                        ▼
                    ╔═══════════════════════════════════════╗
                    ║  A BINARY OPERATOR that checks if     ║
                    ║  an object is an instance of a        ║
                    ║  specific class or interface          ║
                    ╚═══════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                      HOW INSTANCEOF WORKS                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                    ╔═══════════════════════════════════╗                         ║
║                    ║    object instanceof Type         ║                         ║
║                    ╚═════════════════╦═════════════════╝                         ║
║                                      │                                           ║
║                                      ▼                                           ║
║                    ╔═══════════════════════════════════╗                         ║
║                    ║     RUNTIME TYPE CHECK            ║                         ║
║                    ╚═════════════════╦═════════════════╝                         ║
║                                      │                                           ║
║                    ┌─────────────────┴─────────────────┐                         ║
║                    ▼                                   ▼                         ║
║    ╔═══════════════════════════════╗  ╔═══════════════════════════════╗          ║
║    ║           TRUE                ║  ║          FALSE                ║          ║
║    ╠═══════════════════════════════╣  ╠═══════════════════════════════╣          ║
║    ║                               ║  ║                               ║          ║
║    ║  • Object is instance of Type ║  ║  • Object is NOT instance     ║          ║
║    ║  • Object is instance of      ║  ║  • Object is null             ║          ║
║    ║    subclass of Type           ║  ║  • Incompatible types         ║          ║
║    ║  • Object implements Type     ║  ║                               ║          ║
║    ║    (if Type is interface)     ║  ║                               ║          ║
║    ║                               ║  ║                               ║          ║
║    ╚═══════════════════════════════╝  ╚═══════════════════════════════╝          ║
║                    │                                   │                         ║
║                    ▼                                   ▼                         ║
║    ╔═══════════════════════════════╗  ╔═══════════════════════════════╗          ║
║    ║     SAFE TO CAST!             ║  ║     DO NOT CAST!              ║          ║
║    ║     (Dog) animal; ✓           ║  ║     ClassCastException ❌     ║          ║
║    ╚═══════════════════════════════╝  ╚═══════════════════════════════╝          ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    INHERITANCE HIERARCHY CHECK                                   ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                         ╔══════════════════╗                                     ║
║                         ║      Object      ║  ←── Everything extends Object      ║
║                         ╚════════╦═════════╝                                     ║
║                                  │                                               ║
║                         ╔════════╧═════════╗                                     ║
║                         ║      Animal      ║                                     ║
║                         ╚════════╦═════════╝                                     ║
║                                  │                                               ║
║                    ╔═════════════╧═════════════╗                                 ║
║                    │                           │                                 ║
║           ╔════════╧═════════╗        ╔════════╧═════════╗                       ║
║           ║       Dog        ║        ║       Cat        ║                       ║
║           ╚══════════════════╝        ╚══════════════════╝                       ║
║                                                                                  ║
║   ┌──────────────────────────────────────────────────────────────────────────┐   ║
║   │  Dog dog = new Dog();                                                    │   ║
║   │                                                                          │   ║
║   │  dog instanceof Dog       → TRUE  (exact type match)                     │   ║
║   │  dog instanceof Animal    → TRUE  (Dog IS-A Animal)                      │   ║
║   │  dog instanceof Object    → TRUE  (everything IS-A Object)               │   ║
║   │  dog instanceof Cat       → FALSE (Dog IS-NOT-A Cat)                     │   ║
║   └──────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                  ║
║   ┌──────────────────────────────────────────────────────────────────────────┐   ║
║   │  Animal animal = new Dog();   // Upcasting                               │   ║
║   │                                                                          │   ║
║   │  animal instanceof Animal → TRUE  (reference type match)                 │   ║
║   │  animal instanceof Dog    → TRUE  (actual object type)                   │   ║
║   │  animal instanceof Cat    → FALSE (actual object is Dog, not Cat)        │   ║
║   └──────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                  ║
║   ┌──────────────────────────────────────────────────────────────────────────┐   ║
║   │  Dog dog = null;                                                         │   ║
║   │                                                                          │   ║
║   │  dog instanceof Dog    → FALSE  (null is never instance of anything!)    │   ║
║   │  dog instanceof Object → FALSE  (null is NOT an Object)                  │   ║
║   └──────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    SAFE DOWNCASTING PATTERN                                      ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    ❌ UNSAFE (Without instanceof)                     ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   Animal animal = getAnimal();  // Could be Dog, Cat, or anything     ║      ║
║   ║                                                                       ║      ║
║   ║   Dog dog = (Dog) animal;  ←── ClassCastException if animal is Cat!   ║      ║
║   ║   dog.bark();                                                         ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    ✓ SAFE (With instanceof)                           ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   Animal animal = getAnimal();                                        ║      ║
║   ║                                                                       ║      ║
║   ║   if (animal instanceof Dog) {      // Check first!                   ║      ║
║   ║       Dog dog = (Dog) animal;       // Safe cast                      ║      ║
║   ║       dog.bark();                   // Safe to call Dog methods       ║      ║
║   ║   }                                                                   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                JAVA 16+ PATTERN MATCHING                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    OLD WAY (Before Java 16)                           ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   if (animal instanceof Dog) {                                        ║      ║
║   ║       Dog dog = (Dog) animal;    // Redundant cast                    ║      ║
║   ║       dog.bark();                                                     ║      ║
║   ║   }                                                                   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║                                   │                                              ║
║                                   ▼                                              ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    NEW WAY (Java 16+)                                 ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   if (animal instanceof Dog dog) {  // Check AND cast in one!         ║      ║
║   ║       dog.bark();                   // dog is already available       ║      ║
║   ║   }                                                                   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   BENEFITS:                                                                      ║
║   • No redundant cast                                                            ║
║   • More concise code                                                            ║
║   • Variable scoped to if-block                                                  ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    INTERFACE CHECK                                               ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═════════════════════╗                                                        ║
║   ║   <<interface>>     ║                                                        ║
║   ║     Runnable        ║                                                        ║
║   ╚═════════╦═══════════╝                                                        ║
║             │                                                                    ║
║       implements                                                                 ║
║             │                                                                    ║
║   ╔═════════╧═══════════╗                                                        ║
║   ║      MyThread       ║                                                        ║
║   ╚═════════════════════╝                                                        ║
║                                                                                  ║
║   MyThread thread = new MyThread();                                              ║
║                                                                                  ║
║   thread instanceof MyThread  → TRUE                                             ║
║   thread instanceof Runnable  → TRUE   (implements interface)                    ║
║   thread instanceof Object    → TRUE                                             ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    COMMON USE CASES                                              ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ┌────────────────────────┬─────────────────────────────────────────────────┐   ║
║   │  USE CASE              │  EXAMPLE                                        │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  Safe Downcasting      │  if (animal instanceof Dog) { ... }             │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  Type-specific logic   │  if (shape instanceof Circle) calcCircle();     │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  equals() method       │  if (!(obj instanceof MyClass)) return false;   │   ║
║   ├────────────────────────┼─────────────────────────────────────────────────┤   ║
║   │  Processing collections│  for (Object o : list) { ... }                  │   ║
║   └────────────────────────┴─────────────────────────────────────────────────┘   ║
║                                                                                  ║
║   ⚠️  WARNING: Excessive instanceof can indicate poor design!                    ║
║       Consider using polymorphism instead when possible.                         ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
