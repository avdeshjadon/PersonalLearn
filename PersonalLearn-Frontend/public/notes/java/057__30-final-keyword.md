# FINAL KEYWORD

## Concept Introduction

**final** keyword Java mein use hota hai jab kuch **change nahi hona chahiye**. Final ka matlab hai **last** ya **constant** - jo ek baar set ho gaya, woh **modify nahi ho sakta**.

**final = Cannot be changed (immutable)**

Final keyword **3 jagah** use hota hai:
1. **final variable** - Value change nahi ho sakti (constant)
2. **final method** - Override nahi ho sakta
3. **final class** - Inherit nahi ho sakta

---

## Why This Concept Exists

### Problem Without final

```java
class Circle {
    double PI = 3.14;  // Can be changed accidentally
}

Circle c = new Circle();
c.PI = 10;  // ❌ Wrong! But allowed
```

**Issue:** Important constants can be changed.

### Solution: final Keyword

```java
class Circle {
    final double PI = 3.14159;  // Cannot be changed
}

Circle c = new Circle();
// c.PI = 10;  // ❌ Compilation error
```

---

## Definitions

### Very Simple Definition
final keyword se variables, methods, aur classes ko **lock** kar dete hain taaki unhe change na kiya ja sake.

### Simple Definition
The final keyword is used to restrict the user from modifying a variable, method, or class. Final variables become constants, final methods cannot be overridden, and final classes cannot be inherited.

### College Exam Definition
final is a non-access modifier in Java that can be applied to variables, methods, and classes. A final variable can only be assigned once and cannot be changed. A final method cannot be overridden by subclasses. A final class cannot be extended. Final is used to create constants, prevent inheritance, and ensure method integrity.

### Technical Definition
The final keyword is a modifier that enforces immutability and prevents modification at compile-time. For variables, final creates read-only references - primitive values become constants while object references cannot be reassigned (though object state can change). Final methods cannot be overridden, preventing polymorphic behavior. Final classes are sealed from inheritance. The Java compiler performs extensive optimizations for final members, including inlining and constant folding. Final is resolved at compile-time.

### Interview Definition
final keyword prevents modification. Three uses: (1) **Final Variable**: Assigned once, becomes constant. Primitive: value constant, Reference: reference constant (object can change). Must initialize: at declaration, constructor, or instance/static block. Naming: UPPER_CASE for constants, (2) **Final Method**: Cannot be overridden, prevents polymorphism, allows method hiding (static final), (3) **Final Class**: Cannot be extended, all methods implicitly final. Examples: String, Integer, Math. Use cases: Constants (Math.PI), security, immutable classes, performance optimization.

---

## 1. Final Variables

### Concept
**Constant** - value cannot be changed after initialization.

```java
public class Main {
    public static void main(String[] args) {
        final int MAX = 100;  // Constant
        
        System.out.println(MAX);  // 100
        
        // MAX = 200;  // ❌ Error: cannot assign a value to final variable
    }
}
```

---

### Final Reference Variables

```java
class Student {
    String name;
    
    Student(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        final Student s = new Student("Rahul");
        
        // ✓ Can change object content
        s.name = "Priya";
        System.out.println(s.name);  // Priya
        
        // ❌ Cannot change reference
        // s = new Student("Amit");  // Error
    }
}
```

---

### Final Instance Variables

```java
class Student {
    final String school;  // Must be initialized
    String name;
    
    // Initialize in constructor
    Student(String school, String name) {
        this.school = school;
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("ABC School", "Rahul");
        
        System.out.println(s.school);  // ABC School
        
        // s.school = "XYZ School";  // ❌ Error
        
        s.name = "Priya";  // ✓ OK (not final)
    }
}
```

---

### Final Static Variables (Constants)

```java
class MathConstants {
    // Must be initialized at declaration or static block
    static final double PI = 3.14159;
    static final double E = 2.71828;
    static final int MAX_VALUE;
    
    static {
        MAX_VALUE = 1000;  // Initialize in static block
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(MathConstants.PI);
        System.out.println(MathConstants.E);
        System.out.println(MathConstants.MAX_VALUE);
    }
}
```

**Output:**
```
3.14159
2.71828
1000
```

---

## 2. Final Methods

### Concept
Methods that **cannot be overridden** by subclasses.

```java
class Parent {
    // Final method
    final void show() {
        System.out.println("Parent show - cannot be overridden");
    }
    
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    // ❌ Cannot override final method
    // void show() {
    //     System.out.println("Child show");
    // }  // Compilation error
    
    // ✓ Can override non-final method
    @Override
    void display() {
        System.out.println("Child display");
    }
}

public class Main {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();     // Parent show - cannot be overridden
        c.display();  // Child display
    }
}
```

---

### Why Use Final Methods?

```java
class Security {
    // Critical security method - should not be changed
    final boolean authenticate(String password) {
        return password.equals("secret123");
    }
}

class MyApp extends Security {
    // ❌ Cannot override authentication logic
    // This prevents security breach
    // boolean authenticate(String password) {
    //     return true;  // Bypassing security
    // }
}
```

---

## 3. Final Classes

### Concept
Classes that **cannot be inherited**.

```java
// Final class
final class ImmutableClass {
    private final int value;
    
    ImmutableClass(int value) {
        this.value = value;
    }
    
    int getValue() {
        return value;
    }
}

// ❌ Cannot extend final class
// class MyClass extends ImmutableClass {
// }  // Compilation error

public class Main {
    public static void main(String[] args) {
        ImmutableClass obj = new ImmutableClass(100);
        System.out.println(obj.getValue());
    }
}
```

---

### Real-World Examples: Java Built-in Final Classes

```java
// String class is final
final class String {
    // ...
}

// Cannot extend String
// class MyString extends String {
// }  // Error

// Wrapper classes are final
final class Integer {
    // ...
}

final class Double {
    // ...
}

// Math class is final
final class Math {
    // All methods are static
}
```

---

## Blank Final Variables

```java
class Test {
    final int a;  // Blank final - no initial value
    final int b;
    
    // Must initialize in constructor
    Test(int a, int b) {
        this.a = a;
        this.b = b;
    }
    
    // Once initialized, cannot change
    void change() {
        // this.a = 100;  // ❌ Error
    }
}

public class Main {
    public static void main(String[] args) {
        Test t1 = new Test(10, 20);
        Test t2 = new Test(30, 40);
        
        System.out.println(t1.a + ", " + t1.b);  // 10, 20
        System.out.println(t2.a + ", " + t2.b);  // 30, 40
    }
}
```

---

## Final Parameters

```java
class Test {
    void display(final int x) {
        System.out.println(x);
        
        // Cannot modify parameter
        // x = 100;  // ❌ Error
    }
}

public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.display(50);
    }
}
```

---

## Real-World Example: Creating Immutable Class

```java
final class BankAccount {
    private final String accountNumber;
    private final String holderName;
    private final double balance;
    
    BankAccount(String accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    
    String getAccountNumber() {
        return accountNumber;
    }
    
    String getHolderName() {
        return holderName;
    }
    
    double getBalance() {
        return balance;
    }
    
    // Return new object for any changes
    BankAccount deposit(double amount) {
        return new BankAccount(accountNumber, holderName, balance + amount);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount("ACC001", "Rahul", 5000);
        
        System.out.println("Original: " + acc1.getBalance());
        
        BankAccount acc2 = acc1.deposit(1000);
        
        System.out.println("After deposit - Old: " + acc1.getBalance());
        System.out.println("After deposit - New: " + acc2.getBalance());
    }
}
```

**Output:**
```
Original: 5000.0
After deposit - Old: 5000.0
After deposit - New: 6000.0
```

---

## Important Interview Questions

**Q1: What is final keyword in Java?**

final is a keyword used to restrict modification. It can be applied to variables (constant), methods (cannot override), and classes (cannot inherit).

**Q2: Can we declare a constructor as final?**

No, constructors cannot be declared as final. The final keyword is not applicable to constructors.

**Q3: Difference between final, finally, and finalize?**

- **final**: Keyword for constants/restrictions
- **finally**: Block in exception handling (always executes)
- **finalize**: Method called by garbage collector before object destruction

**Q4: Can a final method be overloaded?**

Yes, final methods can be overloaded (same name, different parameters). They just cannot be overridden.

**Q5: Can we initialize final variable later?**

Yes, blank final variables can be initialized in constructor or instance/static block, but only once.

**Q6: What is blank final variable?**

A final variable declared without initialization. Must be initialized in constructor before use.

**Q7: Can we change the content of final object?**

Yes, for reference variables, you can change object content but cannot reassign the reference.

**Q8: Why String class is final?**

String is final for security, immutability, and to prevent breaking the String pool mechanism.

---

## Short Recap

**final** = Cannot be changed (constant/locked)

**Three Uses:**
1. **Final Variable** - Value/reference constant
2. **Final Method** - Cannot override
3. **Final Class** - Cannot inherit

**Initialization:**
- At declaration
- In constructor
- In instance/static block

**Rules:**
- final + static = **Class constant** (UPPER_CASE)
- final reference: Cannot reassign, but can modify object
- All methods in final class are implicitly final

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                              FINAL KEYWORD                                        ║
║                        "Cannot be changed / Modified"                             ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║                    ╔═══════════════════════════════════╗                          ║
║                    ║         final keyword             ║                          ║
║                    ╚═════════════════╤═════════════════╝                          ║
║                                      │                                            ║
║              ┌───────────────────────┼───────────────────────┐                    ║
║              │                       │                       │                    ║
║              ▼                       ▼                       ▼                    ║
║   ╔═════════════════════╗ ╔═════════════════════╗ ╔═════════════════════╗        ║
║   ║   FINAL VARIABLE    ║ ║    FINAL METHOD     ║ ║    FINAL CLASS      ║        ║
║   ║   ═══════════════   ║ ║    ════════════     ║ ║    ══════════       ║        ║
║   ║   Value cannot      ║ ║   Cannot be         ║ ║   Cannot be         ║        ║
║   ║   be changed        ║ ║   overridden        ║ ║   inherited         ║        ║
║   ╚═════════════════════╝ ╚═════════════════════╝ ╚═════════════════════╝        ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                          1. FINAL VARIABLES                                       ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────────────────────────────────────────────────────────────┐    ║
║   │                        FINAL VARIABLE TYPES                             │    ║
║   └─────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                   ║
║   ╔═══════════════════════════╗        ╔═══════════════════════════╗             ║
║   ║   PRIMITIVE TYPE          ║        ║   REFERENCE TYPE          ║             ║
║   ╠═══════════════════════════╣        ╠═══════════════════════════╣             ║
║   ║                           ║        ║                           ║             ║
║   ║ final int MAX = 100;      ║        ║ final Student s =         ║             ║
║   ║                           ║        ║     new Student("Rahul"); ║             ║
║   ║ MAX = 200; ❌ ERROR       ║        ║                           ║             ║
║   ║                           ║        ║ s = new Student("Priya"); ║             ║
║   ║ Value is CONSTANT         ║        ║     ❌ ERROR              ║             ║
║   ║ Cannot change at all      ║        ║                           ║             ║
║   ║                           ║        ║ s.name = "Amit";          ║             ║
║   ╚═══════════════════════════╝        ║     ✓ ALLOWED             ║             ║
║                                        ║                           ║             ║
║                                        ║ Reference is CONSTANT     ║             ║
║                                        ║ Object content CAN change ║             ║
║                                        ╚═══════════════════════════╝             ║
║                                                                                   ║
║   ┌─────────────────────────────────────────────────────────────────────────┐    ║
║   │                    INITIALIZATION OPTIONS                               │    ║
║   ├─────────────────────────────────────────────────────────────────────────┤    ║
║   │                                                                         │    ║
║   │   ① At Declaration        │  final int X = 10;                          │    ║
║   │   ② In Constructor        │  final int X;  X = value; (in constructor)  │    ║
║   │   ③ In Instance Block     │  final int X;  { X = 10; }                  │    ║
║   │   ④ In Static Block       │  static final int X;  static { X = 10; }    │    ║
║   │                                                                         │    ║
║   └─────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                           2. FINAL METHODS                                        ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔═══════════════════════════════════════════════════════════════════════════╗  ║
║   ║                         INHERITANCE CHAIN                                 ║  ║
║   ╚═══════════════════════════════════════════════════════════════════════════╝  ║
║                                                                                   ║
║   ╔═══════════════════════════════════╗                                          ║
║   ║         class Parent              ║                                          ║
║   ╠═══════════════════════════════════╣                                          ║
║   ║                                   ║                                          ║
║   ║   void normalMethod() { }         ║  ← Can be overridden                     ║
║   ║                                   ║                                          ║
║   ║   final void lockedMethod() { }   ║  ← LOCKED! Cannot override              ║
║   ║                                   ║                                          ║
║   ╚═══════════════════╤═══════════════╝                                          ║
║                       │ extends                                                   ║
║                       ▼                                                           ║
║   ╔═══════════════════════════════════╗                                          ║
║   ║         class Child               ║                                          ║
║   ╠═══════════════════════════════════╣                                          ║
║   ║                                   ║                                          ║
║   ║   @Override                       ║                                          ║
║   ║   void normalMethod() { }  ✓      ║  ← Override allowed                      ║
║   ║                                   ║                                          ║
║   ║   @Override                       ║                                          ║
║   ║   void lockedMethod() { }  ❌     ║  ← COMPILE ERROR!                        ║
║   ║                                   ║                                          ║
║   ╚═══════════════════════════════════╝                                          ║
║                                                                                   ║
║   WHY USE FINAL METHOD?                                                           ║
║   ─────────────────────                                                           ║
║   • Prevent subclass from changing critical logic                                 ║
║   • Security - ensure method behavior cannot be altered                           ║
║   • Performance - JVM can inline final methods                                    ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                           3. FINAL CLASSES                                        ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔═══════════════════════════════════╗       ╔═══════════════════════════════╗  ║
║   ║     final class Immutable         ║       ║   class Attempt               ║  ║
║   ╠═══════════════════════════════════╣       ╠═══════════════════════════════╣  ║
║   ║                                   ║       ║                               ║  ║
║   ║   // All methods implicitly       ║   ✗   ║   extends Immutable ❌        ║  ║
║   ║   // final                        ║ ──────║                               ║  ║
║   ║                                   ║ ERROR ║   // CANNOT INHERIT           ║  ║
║   ║   void doSomething() { }          ║       ║   // FROM FINAL CLASS         ║  ║
║   ║                                   ║       ║                               ║  ║
║   ╚═══════════════════════════════════╝       ╚═══════════════════════════════╝  ║
║                                                                                   ║
║   ┌─────────────────────────────────────────────────────────────────────────┐    ║
║   │                    EXAMPLES OF FINAL CLASSES IN JAVA                    │    ║
║   ├─────────────────────────────────────────────────────────────────────────┤    ║
║   │                                                                         │    ║
║   │   ╔═══════════════╗  ╔═══════════════╗  ╔═══════════════╗              │    ║
║   │   ║    String     ║  ║   Integer     ║  ║     Math      ║              │    ║
║   │   ║   (final)     ║  ║   (final)     ║  ║   (final)     ║              │    ║
║   │   ╚═══════════════╝  ╚═══════════════╝  ╚═══════════════╝              │    ║
║   │                                                                         │    ║
║   │   Other: Boolean, Byte, Short, Long, Float, Double, Character           │    ║
║   │                                                                         │    ║
║   └─────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                   ║
║   WHY USE FINAL CLASS?                                                            ║
║   ────────────────────                                                            ║
║   • Immutability - prevent modification of class behavior                         ║
║   • Security - no malicious subclass can be created                               ║
║   • String pool - String class must be final for pool to work                     ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                      FINAL vs FINALLY vs FINALIZE                                 ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌───────────────────┬────────────────────────┬────────────────────────────┐    ║
║   │      final        │        finally         │         finalize           │    ║
║   ├───────────────────┼────────────────────────┼────────────────────────────┤    ║
║   │ Keyword for       │ Block in exception     │ Method in Object class     │    ║
║   │ restrictions      │ handling               │                            │    ║
║   ├───────────────────┼────────────────────────┼────────────────────────────┤    ║
║   │ • final variable  │ try {                  │ protected void finalize()  │    ║
║   │ • final method    │ } finally {            │ { // cleanup code }        │    ║
║   │ • final class     │   // ALWAYS runs       │                            │    ║
║   │                   │ }                      │ Called by GC before        │    ║
║   │                   │                        │ object destruction         │    ║
║   └───────────────────┴────────────────────────┴────────────────────────────┘    ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                           DECISION FLOWCHART                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║         ┌────────────────────────────────────────────────────┐                   ║
║         │         What do you want to make immutable?        │                   ║
║         └───────────────────────────┬────────────────────────┘                   ║
║                                     │                                             ║
║              ┌──────────────────────┼──────────────────────┐                     ║
║              │                      │                      │                     ║
║              ▼                      ▼                      ▼                     ║
║       ┌──────────────┐       ┌──────────────┐       ┌──────────────┐            ║
║       │   A VALUE?   │       │  A METHOD?   │       │   A CLASS?   │            ║
║       └──────┬───────┘       └──────┬───────┘       └──────┬───────┘            ║
║              │                      │                      │                     ║
║              ▼                      ▼                      ▼                     ║
║       ┌──────────────┐       ┌──────────────┐       ┌──────────────┐            ║
║       │ final int x  │       │ final void   │       │ final class  │            ║
║       │              │       │ method() {}  │       │ MyClass {}   │            ║
║       └──────────────┘       └──────────────┘       └──────────────┘            ║
║              │                      │                      │                     ║
║              ▼                      ▼                      ▼                     ║
║       ┌──────────────┐       ┌──────────────┐       ┌──────────────┐            ║
║       │ Cannot       │       │ Cannot       │       │ Cannot       │            ║
║       │ reassign     │       │ override     │       │ extend       │            ║
║       └──────────────┘       └──────────────┘       └──────────────┘            ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                              QUICK REFERENCE                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────────┬─────────────────────────────────────────────────────┐  ║
║   │   final variable    │  Constant value, initialize once only               │  ║
║   ├─────────────────────┼─────────────────────────────────────────────────────┤  ║
║   │   final method      │  Cannot be overridden in subclass                   │  ║
║   ├─────────────────────┼─────────────────────────────────────────────────────┤  ║
║   │   final class       │  Cannot be inherited (extended)                     │  ║
║   ├─────────────────────┼─────────────────────────────────────────────────────┤  ║
║   │   final + static    │  Class constant (UPPER_CASE naming)                 │  ║
║   ├─────────────────────┼─────────────────────────────────────────────────────┤  ║
║   │   final parameter   │  Parameter cannot be modified in method             │  ║
║   ├─────────────────────┼─────────────────────────────────────────────────────┤  ║
║   │   final reference   │  Cannot reassign, but object content can change     │  ║
║   └─────────────────────┴─────────────────────────────────────────────────────┘  ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
