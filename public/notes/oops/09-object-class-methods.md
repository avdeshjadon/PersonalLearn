# OBJECT CLASS METHODS

## Concept Introduction

**Object class** Java ka **root/parent class** hai - har class automatically Object class ko inherit karti hai. Object class mein **important methods** hain jo har object use kar sakta hai.

**Object Class = Universal Parent = Root of Java Class Hierarchy**

Real Example: **Car manufacturing** - Jaise har car mein basic features hote hain (steering, wheels, engine), waise hi har Java class mein Object class ke methods automatically available hote hain!

---

## Why Object Class Exists

### The Purpose
- **Common methods**: Har class ke liye basic methods provide karta hai (toString, equals, hashCode)
- **Polymorphism support**: `Object obj = anyObject;` - kisi bhi object ko hold kar sakta hai
- **Collection framework compatibility**: HashMap, HashSet use `hashCode()` and `equals()` - inherited from Object
- **Thread synchronization support**: Every object can act as a lock using `wait()`, `notify()`, `notifyAll()`

---

## What is Object Class?

### Very Simple Definition
Object class sabka baap hai! Java mein jo bhi class banao, woh automatically Object class ki child hoti hai. Isse humein kuch free methods milte hain jaise `toString()`, `equals()`, etc.

### Simple Definition
The Object class is the root class of Java's class hierarchy. Every class in Java directly or indirectly inherits from the Object class, giving all objects access to fundamental methods for string representation, comparison, and more.

### College Exam Definition
- Object class is located in `java.lang` package and is the topmost class in Java's inheritance hierarchy.
- Every class implicitly extends Object if no explicit superclass is specified.
- It provides common methods like `toString()`, `equals()`, `hashCode()`, `getClass()`, `clone()`, `finalize()`, `wait()`, `notify()`, and `notifyAll()`.
- These methods enable basic object operations such as comparison, cloning, string conversion, and thread synchronization.

### Interview Definition
- The Object class (`java.lang.Object`) is the root of Java's class hierarchy and the implicit superclass of every class.
- It defines fundamental methods that all objects inherit: `toString()` for string representation, `equals()` and `hashCode()` for logical equality and hash-based collections, `getClass()` for runtime type information, `clone()` for object duplication (requires Cloneable), `finalize()` for pre-GC cleanup (deprecated), and `wait()`/`notify()`/`notifyAll()` for inter-thread communication.
- Understanding and properly overriding these methods is crucial for correct behavior in collections, logging, and multi-threaded environments.

### Deep Technical Definition
- The Object class is the sole root of Java's single-inheritance class hierarchy, located in `java.lang`.
- When a class is defined without an explicit `extends` clause, the compiler automatically inserts `extends Object`.
- Key methods include:
  - **Identity methods**: `getClass()` (final, returns Class<?> object), `hashCode()` (native, returns memory-based hash by default), `equals()` (reference equality by default)
  - **Utility methods**: `toString()` (returns ClassName@HexHashCode), `clone()` (protected, shallow copy, requires Cloneable marker interface)
  - **Lifecycle method**: `finalize()` (deprecated since Java 9, called by GC before reclaiming memory)
  - **Threading methods**: `wait()`, `wait(long)`, `wait(long, int)`, `notify()`, `notifyAll()` (all final, require synchronized context, used for monitor-based thread coordination)
- The equals-hashCode contract states that equal objects must have equal hash codes, which is critical for HashMap and HashSet correctness.

---

## Object Class Hierarchy

### What is Class Hierarchy?

**English**: Class hierarchy is the parent-child relationship between classes in Java. Object class sits at the top - it's the ultimate ancestor of every class.

**Hinglish**: Class hierarchy matlab classes ka family tree! Object class sabse upar hai - sabka great-great-grandfather. Chahe kitni bhi classes banao, sabka connection Object class se hoga.

### How Does Implicit Inheritance Work?

Jab hum koi class likhte hain bina `extends` ke, Java compiler automatically `extends Object` add kar deta hai:

```java
// What you write:
class Student {  }

// What compiler sees:
class Student extends Object { }
```

```java
// With explicit parent:
class Animal { }
class Dog extends Animal { }

// Hierarchy: Object → Animal → Dog
// Dog still inherits from Object (through Animal)
```

### Inheritance Chain

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              OBJECT CLASS - ROOT OF ALL CLASSES                              ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║                              ╔═══════════════════════════════╗                               ║
║                              ║    java.lang.Object           ║                               ║
║                              ║    ════════════════           ║                               ║
║                              ║    • toString()               ║                               ║
║                              ║    • equals()                 ║                               ║
║                              ║    • hashCode()               ║                               ║
║                              ║    • getClass()               ║                               ║
║                              ║    • clone()                  ║                               ║
║                              ║    • finalize()               ║                               ║
║                              ║    • wait(), notify()         ║                               ║
║                              ╚═══════════════════════════════╝                               ║
║                                           │                                                  ║
║              ┌────────────────────────────┼────────────────────────────┐                     ║
║              │                            │                            │                     ║
║              ▼                            ▼                            ▼                     ║
║     ╔═════════════════╗          ╔═════════════════╗          ╔═════════════════╗            ║
║     ║     String      ║          ║    Integer      ║          ║   Your Classes  ║            ║
║     ║   (Built-in)    ║          ║   (Wrapper)     ║          ║   (Custom)      ║            ║
║     ╚═════════════════╝          ╚═════════════════╝          ╚═════════════════╝            ║
║                                                                        │                     ║
║                                                               ┌────────┴────────┐            ║
║                                                               │                 │            ║
║                                                               ▼                 ▼            ║
║                                                      ╔══════════════╗  ╔══════════════╗      ║
║                                                      ║   Student    ║  ║     Car      ║      ║
║                                                      ╚══════════════╝  ╚══════════════╝      ║
║                                                                                              ║
║   EVERY class (directly or indirectly) inherits from Object!                                 ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

### Direct vs Indirect Inheritance

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         DIRECT vs INDIRECT INHERITANCE                                       ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   CASE 1: DIRECT INHERITANCE                  CASE 2: INDIRECT INHERITANCE                   ║
║   ══════════════════════════                  ════════════════════════════                   ║
║                                                                                              ║
║   class Student { }                           class Animal { }                               ║
║   // Student extends Object (direct)          class Dog extends Animal { }                   ║
║                                               // Dog extends Object (indirect)               ║
║                                                                                              ║
║        ╔════════════╗                              ╔════════════╗                            ║
║        ║   Object   ║                              ║   Object   ║                            ║
║        ╚════════════╝                              ╚════════════╝                            ║
║              │                                           │                                   ║
║              │ extends                                   │ extends                           ║
║              ▼                                           ▼                                   ║
║        ╔════════════╗                              ╔════════════╗                            ║
║        ║  Student   ║                              ║   Animal   ║                            ║
║        ╚════════════╝                              ╚════════════╝                            ║
║                                                          │                                   ║
║                                                          │ extends                           ║
║                                                          ▼                                   ║
║                                                    ╔════════════╗                            ║
║                                                    ║    Dog     ║                            ║
║                                                    ╚════════════╝                            ║
║                                                                                              ║
║   Student has Object methods ✓                    Dog has Object methods ✓                   ║
║   (1 level up)                                    (2 levels up, through Animal)              ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

### Why Single Root Hierarchy?

**Benefits of having Object as universal parent**:

| Benefit | Explanation (English) | Explanation (Hinglish) |
|---------|----------------------|------------------------|
| **Polymorphism** | `Object obj = anyObject;` works | Kisi bhi object ko Object type mein store kar sakte ho |
| **Common Methods** | All classes get toString(), equals(), etc. | Sabko free methods milte hain |
| **Collections** | ArrayList can store any object | Ek list mein different types rakh sakte ho |
| **Type Safety** | Compile-time type checking possible | Compiler errors pakad leta hai |

### Code Example: Hierarchy in Action

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
        Dog dog = new Dog();
        
        // Methods from Dog class
        dog.bark();           // ✓ Dog's method
        
        // Methods from Animal class (parent)
        dog.eat();            // ✓ Inherited from Animal
        
        // Methods from Object class (grandparent)
        dog.toString();       // ✓ Inherited from Object
        dog.hashCode();       // ✓ Inherited from Object
        dog.equals(null);     // ✓ Inherited from Object
        dog.getClass();       // ✓ Inherited from Object
        
        // Polymorphism - Object can hold any object
        Object obj1 = new Dog();      // ✓ Dog IS-A Object
        Object obj2 = new Animal();   // ✓ Animal IS-A Object
        Object obj3 = "Hello";        // ✓ String IS-A Object
        Object obj4 = 123;            // ✓ Integer IS-A Object
    }
}
```

### Memory Perspective

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         OBJECT IN MEMORY (Dog extends Animal)                                ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     Dog dog = new Dog();                                                                     ║
║                                                                                              ║
║     HEAP MEMORY:                                                                             ║
║     ╔════════════════════════════════════════════════════════════════════╗                   ║
║     ║                         DOG OBJECT                                 ║                   ║
║     ╠════════════════════════════════════════════════════════════════════╣                   ║
║     ║                                                                    ║                   ║
║     ║   ┌──────────────────────────────────────────────────────────┐     ║                   ║
║     ║   │  OBJECT CLASS PART (inherited)                           │     ║                   ║
║     ║   │  • Object header (mark word, klass pointer)              │     ║                   ║
║     ║   │  • hashCode, monitor for sync                            │     ║                   ║
║     ║   └──────────────────────────────────────────────────────────┘     ║                   ║
║     ║                              │                                     ║                   ║
║     ║   ┌──────────────────────────────────────────────────────────┐     ║                   ║
║     ║   │  ANIMAL CLASS PART (inherited)                           │     ║                   ║
║     ║   │  • Animal's instance variables                           │     ║                   ║
║     ║   │  • eat() method reference                                │     ║                   ║
║     ║   └──────────────────────────────────────────────────────────┘     ║                   ║
║     ║                              │                                     ║                   ║
║     ║   ┌──────────────────────────────────────────────────────────┐     ║                   ║
║     ║   │  DOG CLASS PART (own)                                    │     ║                   ║
║     ║   │  • Dog's instance variables                              │     ║                   ║
║     ║   │  • bark() method reference                               │     ║                   ║
║     ║   └──────────────────────────────────────────────────────────┘     ║                   ║
║     ║                                                                    ║                   ║
║     ╚════════════════════════════════════════════════════════════════════╝                   ║
║                                                                                              ║
║     Single object contains data from ALL classes in hierarchy!                               ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Important Object Class Methods

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              OBJECT CLASS METHODS OVERVIEW                                   ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   ┌─────────────────────────────────────────────────────────────────────────────────────┐    ║
║   │                        COMMONLY OVERRIDDEN (Must Know!)                             │    ║
║   │   ╔═══════════════╗    ╔═══════════════╗    ╔═══════════════╗                       │    ║
║   │   ║  toString()   ║    ║   equals()    ║    ║  hashCode()   ║                       │    ║
║   │   ║  "Object ko   ║    ║  "Do objects  ║    ║  "Object ka   ║                       │    ║
║   │   ║   String mein ║    ║   same hain?" ║    ║   unique ID"  ║                       │    ║
║   │   ║   convert"    ║    ║               ║    ║               ║                       │    ║
║   │   ╚═══════════════╝    ╚═══════════════╝    ╚═══════════════╝                       │    ║
║   └─────────────────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                              ║
║   ┌─────────────────────────────────────────────────────────────────────────────────────┐    ║
║   │                        UTILITY METHODS (Good to Know)                               │    ║
║   │   ╔═══════════════╗    ╔═══════════════╗    ╔═══════════════╗                       │    ║
║   │   ║  getClass()   ║    ║    clone()    ║    ║  finalize()   ║                       │    ║
║   │   ║  "Kis class   ║    ║  "Object ki   ║    ║  "GC se pehle ║                       │    ║
║   │   ║   ka hai?"    ║    ║   copy bana"  ║    ║   cleanup"    ║                       │    ║
║   │   ║   (final)     ║    ║  (Cloneable)  ║    ║  (DEPRECATED) ║                       │    ║
║   │   ╚═══════════════╝    ╚═══════════════╝    ╚═══════════════╝                       │    ║
║   └─────────────────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                              ║
║   ┌─────────────────────────────────────────────────────────────────────────────────────┐    ║
║   │                      THREADING METHODS (Multi-threading)                            │    ║
║   │   ╔═══════════════╗    ╔═══════════════╗    ╔═══════════════╗                       │    ║
║   │   ║    wait()     ║    ║   notify()    ║    ║  notifyAll()  ║                       │    ║
║   │   ║  "Thread ko   ║    ║  "Ek thread   ║    ║  "Sab threads ║                       │    ║
║   │   ║   roko"       ║    ║   jagao"      ║    ║   jagao"      ║                       │    ║
║   │   ║   (final)     ║    ║   (final)     ║    ║   (final)     ║                       │    ║
║   │   ╚═══════════════╝    ╚═══════════════╝    ╚═══════════════╝                       │    ║
║   └─────────────────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### 1. toString()

#### What is toString()?

**Hinglish**: `toString()` method object ko readable String mein convert karta hai. Jab bhi `System.out.println(object)` likhte ho, internally `toString()` call hota hai!

**English**: The `toString()` method returns a string representation of the object. It's automatically called when you print an object or concatenate it with a string.

#### Definitions

| Level | Definition |
|-------|------------|
| **Very Simple** | Object ko print karne ke liye use hota hai. Bina override kiye kuch ajeeb sa output aata hai! |
| **Simple** | Returns a string that textually represents the object. Default output is ClassName@HashCode. |
| **College Exam** | `toString()` is a public method inherited from Object class that returns a String representation. By default, it returns the class name followed by '@' and the object's hash code in hexadecimal. Should be overridden for meaningful representation. |
| **Interview** | `toString()` returns `getClass().getName() + '@' + Integer.toHexString(hashCode())` by default. Override it to provide a human-readable representation, useful for debugging and logging. Called implicitly by print statements and string concatenation. |

#### How toString() Works

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              toString() INTERNAL WORKING                                     ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   System.out.println(student);                                                               ║
║            │                                                                                 ║
║            ▼                                                                                 ║
║   ╔═══════════════════════════════════════════════════════════════════╗                      ║
║   ║  Internally calls: student.toString()                             ║                      ║
║   ╚═══════════════════════════════════════════════════════════════════╝                      ║
║                           │                                                                  ║
║           ┌───────────────┴───────────────┐                                                  ║
║           │                               │                                                  ║
║           ▼                               ▼                                                  ║
║   ┌───────────────────┐          ┌────────────────────┐                                      ║
║   │ NOT OVERRIDDEN    │          │ OVERRIDDEN         │                                      ║
║   │ (Default)         │          │ (Custom)           │                                      ║
║   └───────────────────┘          └────────────────────┘                                      ║
║           │                               │                                                  ║
║           ▼                               ▼                                                  ║
║   ╔═══════════════════╗          ╔════════════════════════════════╗                          ║
║   ║ Student@15db9742  ║          ║ Student[name=Rahul, rollNo=101]║                          ║
║   ║                   ║          ║                                ║                          ║
║   ║ ClassName@HexHash ║          ║ Meaningful, readable output!   ║                          ║
║   ╚═══════════════════╝          ╚════════════════════════════════╝                          ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

#### Default Behavior:
```java
class Student {
    String name;
    int rollNo;
}

Student s = new Student();
System.out.println(s.toString());
// Output: Student@15db9742 (ClassName@HashCode)

// What happens internally:
// getClass().getName() + "@" + Integer.toHexString(hashCode())
// "Student"            + "@" + "15db9742"
```

#### Overriding for Better Output:
```java
class Student {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    
    @Override
    public String toString() {
        return "Student[name=" + name + ", rollNo=" + rollNo + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Rahul", 101);
        System.out.println(s);  // Student[name=Rahul, rollNo=101]
        
        // Also works in string concatenation
        String msg = "Student is: " + s;  // toString() called implicitly
    }
}
```

#### When is toString() Called?

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                           WHEN toString() IS CALLED AUTOMATICALLY                            ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   1. System.out.println(obj)           →  obj.toString()                                     ║
║   2. System.out.print(obj)             →  obj.toString()                                     ║
║   3. "String" + obj                    →  "String" + obj.toString()                          ║
║   4. String.valueOf(obj)               →  obj.toString()                                     ║
║   5. StringBuilder.append(obj)         →  obj.toString()                                     ║
║   6. Logging: logger.info(obj)         →  obj.toString()                                     ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### 2. equals()

#### What is equals()?

**Hinglish**: `equals()` method check karta hai ki do objects "equal" hain ya nahi. By default yeh reference compare karta hai (same memory location?), but override karke content comparison kar sakte ho.

**English**: The `equals()` method compares two objects for equality. By default, it checks reference equality (whether two references point to the same object). Override it to implement logical/content equality.

#### Definitions

| Level | Definition |
|-------|------------|
| **Very Simple** | Do objects same hain ya nahi check karta hai. `==` memory check, `equals()` content check! |
| **Simple** | Compares two objects for equality. Default behavior is same as `==` (reference comparison). Override to compare object contents. |
| **College Exam** | `equals()` is inherited from Object class and returns boolean. Default implementation uses `==` operator. Should be overridden for logical equality. Must follow: reflexive, symmetric, transitive, consistent properties and handle null. |
| **Interview** | `equals()` determines logical equality between objects. Default is `this == obj`. When overriding, must maintain the equals contract (reflexive, symmetric, transitive, consistent, null-safe) and always override `hashCode()` together to maintain the hashCode contract for collections. |

#### equals() vs == Comparison

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              == vs equals() COMPARISON                                       ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   Student s1 = new Student("Rahul", 101);                                                    ║
║   Student s2 = new Student("Rahul", 101);                                                    ║
║   Student s3 = s1;                                                                           ║
║                                                                                              ║
║          HEAP MEMORY                                                                         ║
║   ┌─────────────────────────────────────────────────────┐                                    ║
║   │                                                     │                                    ║
║   │    ╔═══════════════════╗   ╔═══════════════════╗    │                                    ║
║   │    ║   Object @100     ║   ║   Object @200     ║    │                                    ║
║   │    ║   name="Rahul"    ║   ║   name="Rahul"    ║    │                                    ║
║   │    ║   rollNo=101      ║   ║   rollNo=101      ║    │                                    ║
║   │    ╚═══════════════════╝   ╚═══════════════════╝    │                                    ║
║   │            ▲                        ▲               │                                    ║
║   └────────────│────────────────────────│───────────────┘                                    ║
║                │                        │                                                    ║
║          ┌─────┴─────┐                  │                                                    ║
║          │           │                  │                                                    ║
║        ┌───┐       ┌───┐              ┌───┐                                                  ║
║        │s1 │       │s3 │              │s2 │                                                  ║
║        └───┘       └───┘              └───┘                                                  ║
║          │           │                  │                                                    ║
║          ▼           ▼                  ▼                                                    ║
║        @100        @100               @200                                                   ║
║                                                                                              ║
║   ┌──────────────────────────────────────────────────────────────────────────────────┐       ║
║   │  COMPARISON RESULTS                                                              │       ║
║   ├──────────────────────────────────────────────────────────────────────────────────┤       ║
║   │                                                                                  │       ║
║   │   s1 == s2              →  false  (different memory addresses)                   │       ║
║   │   s1 == s3              →  true   (same memory address)                          │       ║
║   │                                                                                  │       ║
║   │   s1.equals(s2)         →  false  (default: same as ==)                          │       ║
║   │   s1.equals(s2)         →  TRUE   (if equals() overridden for content)           │       ║
║   │   s1.equals(s3)         →  true   (always true, same object)                     │       ║
║   │                                                                                  │       ║
║   └──────────────────────────────────────────────────────────────────────────────────┘       ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

#### Default Behavior (Reference Comparison):
```java
Student s1 = new Student("Rahul", 101);
Student s2 = new Student("Rahul", 101);
System.out.println(s1.equals(s2));  // false (different objects in memory)
System.out.println(s1 == s2);       // false (same result as default equals)
```

#### Overriding for Content Comparison:
```java
class Student {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    
    @Override
    public boolean equals(Object obj) {
        // Step 1: Check if same reference
        if (this == obj) return true;
        
        // Step 2: Check for null and class type
        if (obj == null || getClass() != obj.getClass()) return false;
        
        // Step 3: Cast and compare fields
        Student student = (Student) obj;
        return rollNo == student.rollNo && name.equals(student.name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Rahul", 101);
        Student s2 = new Student("Rahul", 101);
        System.out.println(s1.equals(s2));  // true (same content)
    }
}
```

#### equals() Contract (Interview Important!)

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              equals() CONTRACT (MUST FOLLOW!)                                ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   1. REFLEXIVE:     x.equals(x) == true                                                      ║
║                     (Object khud ke equal hona chahiye)                                      ║
║                                                                                              ║
║   2. SYMMETRIC:     x.equals(y) == y.equals(x)                                               ║
║                     (Dono taraf se same result)                                              ║
║                                                                                              ║
║   3. TRANSITIVE:    x.equals(y) && y.equals(z) → x.equals(z)                                 ║
║                     (Chain rule follow karna chahiye)                                        ║
║                                                                                              ║
║   4. CONSISTENT:    Multiple calls should return same result                                 ║
║                     (Jab tak object change na ho, result same)                               ║
║                                                                                              ║
║   5. NULL-SAFE:     x.equals(null) == false                                                  ║
║                     (null ke saath compare karne pe false)                                   ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### 3. hashCode()

#### What is hashCode()?

**Hinglish**: `hashCode()` object ka ek unique integer number return karta hai - jaise aapka Aadhaar number! Yeh HashMap, HashSet jaise collections mein fast lookup ke liye use hota hai.

**English**: The `hashCode()` method returns an integer hash code value for the object. It's used by hash-based collections (HashMap, HashSet) for efficient storage and retrieval.

#### Definitions

| Level | Definition |
|-------|------------|
| **Very Simple** | Object ka unique number deta hai. HashMap/HashSet mein object dhundhne ke liye use hota hai! |
| **Simple** | Returns an integer that represents the object. Used by hash-based collections for bucketing. Equal objects must have equal hash codes. |
| **College Exam** | `hashCode()` returns int value for hashing algorithms. Default implementation typically converts internal address to integer. Must override when equals() is overridden to maintain: `equals() = true` → `hashCode()` must be same. |
| **Interview** | Native method returning integer for hash-based collections. Contract: equal objects must have equal hash codes (but unequal objects may have same hash). Used for bucket calculation in HashMap: `bucket = hashCode() % capacity`. Override using `Objects.hash()` or prime number multiplication algorithm (31 * field.hashCode()). |

#### Why hashCode Matters?

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              HOW hashCode() WORKS IN HashMap                                 ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   map.put(student, "Grade A");                                                               ║
║                                                                                              ║
║   Step 1: Calculate hashCode                                                                 ║
║   ╔════════════════════════════════════════════════════════════════════╗                     ║
║   ║  student.hashCode()  →  12345                                      ║                     ║
║   ╚════════════════════════════════════════════════════════════════════╝                     ║
║                           │                                                                  ║
║                           ▼                                                                  ║
║   Step 2: Calculate bucket index                                                             ║
║   ╔════════════════════════════════════════════════════════════════════╗                     ║
║   ║  bucketIndex = 12345 % 16 = 9                                      ║                     ║
║   ╚════════════════════════════════════════════════════════════════════╝                     ║
║                           │                                                                  ║
║                           ▼                                                                  ║
║   Step 3: Store in bucket                                                                    ║
║   ╔════════════════════════════════════════════════════════════════════════════════════╗     ║
║   ║  HASHMAP BUCKETS (Array of LinkedLists)                                            ║     ║
║   ╠════════════════════════════════════════════════════════════════════════════════════╣     ║
║   ║  [0]  →  null                                                                      ║     ║
║   ║  [1]  →  null                                                                      ║     ║
║   ║  [2]  →  [Entry1] → [Entry2]                                                       ║     ║
║   ║  ...                                                                               ║     ║
║   ║  [9]  →  [student="Grade A"]  ← STORED HERE!                                       ║     ║
║   ║  ...                                                                               ║     ║
║   ║  [15] →  null                                                                      ║     ║
║   ╚════════════════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                              ║
║   WHY GOOD hashCode() MATTERS:                                                               ║
║   ┌────────────────────────────────────────────────────────────────────────────────┐         ║
║   │  Good hashCode()  →  Objects spread evenly  →  O(1) lookup                     │         ║
║   │  Bad hashCode()   →  All in one bucket     →  O(n) lookup (like LinkedList!)   │         ║
║   └────────────────────────────────────────────────────────────────────────────────┘         ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

#### equals() and hashCode() Contract

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         equals() - hashCode() CONTRACT (CRITICAL!)                           ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   ╔═══════════════════════════════════════════════════════════════════════════════════╗      ║
║   ║  RULE 1: If a.equals(b) is TRUE → a.hashCode() == b.hashCode() MUST be TRUE       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════════════════╝      ║
║                                                                                              ║
║   ╔═══════════════════════════════════════════════════════════════════════════════════╗      ║
║   ║  RULE 2: If a.hashCode() != b.hashCode() → a.equals(b) MUST be FALSE              ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════════════════╝      ║
║                                                                                              ║
║   ╔═══════════════════════════════════════════════════════════════════════════════════╗      ║
║   ║  NOTE: Same hashCode does NOT mean equals() is true (hash collision possible)     ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════════════════╝      ║
║                                                                                              ║
║   ┌──────────────────────────────────────────────────────────────────────────────────┐       ║
║   │  WHY THIS MATTERS IN HashSet:                                                    │       ║
║   │                                                                                  │       ║
║   │  HashSet<Student> set = new HashSet<>();                                         │       ║
║   │  set.add(new Student("Rahul", 101));                                             │       ║
║   │  set.add(new Student("Rahul", 101));  // Should this be added?                   │       ║
║   │                                                                                  │       ║
║   │  WITHOUT proper hashCode():  Both added! (Wrong - duplicates!)                   │       ║
║   │  WITH proper hashCode():     Only one added (Correct - no duplicates)            │       ║
║   └──────────────────────────────────────────────────────────────────────────────────┘       ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

#### Implementation:

```java
class Student {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return rollNo == student.rollNo && name.equals(student.name);
    }
    
    @Override
    public int hashCode() {
        // Method 1: Using Objects.hash() (Java 7+) - RECOMMENDED
        return Objects.hash(name, rollNo);
        
        // Method 2: Manual calculation
        // return 31 * name.hashCode() + rollNo;
        
        // Why 31? It's an odd prime, and 31 * i == (i << 5) - i (JVM optimization)
    }
}
```

**Used in**: HashMap, HashSet, Hashtable, LinkedHashMap, LinkedHashSet

---

### 4. getClass()

#### What is getClass()?

**Hinglish**: `getClass()` method runtime pe object ki actual class batata hai. Yeh `final` method hai, override nahi kar sakte. Reflection ke liye bahut useful hai!

**English**: The `getClass()` method returns the runtime class of the object. It's a `final` method (cannot be overridden) and returns a `Class<?>` object that provides metadata about the class.

#### Definitions

| Level | Definition |
|-------|------------|
| **Very Simple** | Object kis class ka hai woh batata hai. "Tu kaun hai?" ka answer deta hai! |
| **Simple** | Returns the Class object representing the runtime class of the object. Cannot be overridden (final method). |
| **College Exam** | `getClass()` is a final native method that returns `Class<?>` object representing the runtime class. Used for runtime type identification (RTTI) and reflection. Returns the most specific class type, not the reference type. |
| **Interview** | Returns `Class<?>` representing actual runtime type (not declared type). Used in reflection, instanceof alternative, and factory patterns. Combined with `getName()`, `getSimpleName()`, `getMethods()` for introspection. Being final ensures type safety and prevents subclass manipulation. |

#### getClass() Behavior

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              getClass() RETURNS RUNTIME TYPE                                 ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   Animal animal = new Dog();   // Reference type: Animal, Actual type: Dog                   ║
║                                                                                              ║
║   animal.getClass()  →  class Dog  (Returns ACTUAL type, not reference type!)                ║
║                                                                                              ║
║   ┌─────────────────────────────────────────────────────────────────────────────────────┐    ║
║   │  Useful Class<?> Methods:                                                           │    ║
║   │                                                                                     │    ║
║   │  getClass().getName()         →  "com.example.Dog"  (fully qualified)               │    ║
║   │  getClass().getSimpleName()   →  "Dog"              (just class name)               │    ║
║   │  getClass().getPackage()      →  package com.example                                │    ║
║   │  getClass().getSuperclass()   →  class Animal                                       │    ║
║   │  getClass().getInterfaces()   →  [interface Runnable, ...]                          │    ║
║   │  getClass().getMethods()      →  All public methods (including inherited)           │    ║
║   └─────────────────────────────────────────────────────────────────────────────────────┘    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

#### Code Example:

```java
class Animal { }
class Dog extends Animal { }

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();  // Upcasting
        
        // getClass() returns runtime type
        System.out.println(animal.getClass());           // class Dog
        System.out.println(animal.getClass().getName()); // Dog
        System.out.println(animal.getClass().getSimpleName()); // Dog
        
        // Compare classes
        Dog dog = new Dog();
        System.out.println(animal.getClass() == dog.getClass());  // true
        
        // Get superclass
        System.out.println(dog.getClass().getSuperclass());  // class Animal
    }
}
```

---

### 5. clone()

#### What is clone()?

**Hinglish**: `clone()` method object ki exact copy (duplicate) banata hai. Photocopy machine ki tarah! Lekin use karne ke liye `Cloneable` interface implement karna padta hai.

**English**: The `clone()` method creates and returns a copy of the object. It performs a shallow copy by default. To use it, the class must implement the `Cloneable` marker interface.

#### Definitions

| Level | Definition |
|-------|------------|
| **Very Simple** | Object ki photocopy banata hai. Ek object se doosra same-same object bana do! |
| **Simple** | Creates a copy of the object. Class must implement Cloneable interface. Default is shallow copy (references are copied, not the objects they point to). |
| **College Exam** | `clone()` is a protected method that returns Object. Throws CloneNotSupportedException if Cloneable not implemented. Creates shallow copy by default. For deep copy, override clone() to manually copy nested objects. |
| **Interview** | Protected native method performing field-by-field shallow copy. Requires Cloneable marker interface (no methods). Shallow vs Deep copy: shallow copies references, deep copies entire object graph. Modern alternatives: copy constructor, serialization, or factory methods. Clone is considered broken by many - Joshua Bloch recommends avoiding it. |

#### Shallow Copy vs Deep Copy

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              SHALLOW COPY vs DEEP COPY                                       ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   class Student {                                                                            ║
║       String name;                                                                           ║
║       Address address;  // Reference type                                                    ║
║   }                                                                                          ║
║                                                                                              ║
║   Student s1 = new Student("Rahul", new Address("Delhi"));                                   ║
║   Student s2 = s1.clone();                                                                   ║
║                                                                                              ║
║   ═══════════════════════════════════════════════════════════════════════════════════════    ║
║   SHALLOW COPY (Default clone())                                                             ║
║   ═══════════════════════════════════════════════════════════════════════════════════════    ║
║                                                                                              ║
║   ┌─────────────────┐          ┌─────────────────┐                                           ║
║   │   s1 Object     │          │   s2 Object     │                                           ║
║   │   name="Rahul"  │          │   name="Rahul"  │  (new String - immutable, OK)             ║
║   │   address ──────┼──┐   ┌───┼── address       │                                           ║
║   └─────────────────┘  │   │   └─────────────────┘                                           ║
║                        │   │                                                                 ║
║                        ▼   ▼                                                                 ║
║                  ╔═══════════════╗                                                           ║
║                  ║  SAME Address ║  ← Both point to SAME object! (PROBLEM!)                  ║
║                  ║  city="Delhi" ║                                                           ║
║                  ╚═══════════════╝                                                           ║
║                                                                                              ║
║   s2.address.city = "Mumbai";  // Changes s1's address too!                                  ║
║                                                                                              ║
║   ═══════════════════════════════════════════════════════════════════════════════════════    ║
║   DEEP COPY (Override clone() properly)                                                      ║
║   ═══════════════════════════════════════════════════════════════════════════════════════    ║
║                                                                                              ║
║   ┌─────────────────┐          ┌─────────────────┐                                           ║
║   │   s1 Object     │          │   s2 Object     │                                           ║
║   │   name="Rahul"  │          │   name="Rahul"  │                                           ║
║   │   address ──────┼──┐   ┌───┼── address       │                                           ║
║   └─────────────────┘  │   │   └─────────────────┘                                           ║
║                        │   │                                                                 ║
║                        ▼   ▼                                                                 ║
║              ╔══════════════╗  ╔══════════════╗                                              ║
║              ║ Address @100 ║  ║ Address @200 ║  ← Separate objects! (CORRECT!)              ║
║              ║ city="Delhi" ║  ║ city="Delhi" ║                                              ║
║              ╚══════════════╝  ╚══════════════╝                                              ║
║                                                                                              ║
║   s2.address.city = "Mumbai";  // Only changes s2's address                                  ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

#### Shallow Copy Implementation:

```java
class Student implements Cloneable {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();  // Shallow copy
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            Student s1 = new Student("Rahul", 101);
            Student s2 = (Student) s1.clone();
            
            System.out.println(s1 == s2);  // false (different objects)
            System.out.println(s1.name.equals(s2.name));  // true (same content)
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}
```

#### Deep Copy Implementation:

```java
class Address implements Cloneable {
    String city;
    Address(String city) { this.city = city; }
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

class Student implements Cloneable {
    String name;
    Address address;
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Student cloned = (Student) super.clone();
        cloned.address = (Address) address.clone();  // Deep copy nested object
        return cloned;
    }
}
```

**Must implement Cloneable interface!** Otherwise `CloneNotSupportedException` is thrown.

---

### 6. finalize()

#### What is finalize()?

**Hinglish**: `finalize()` method Garbage Collector duwara object destroy karne se pehle call hota hai - last wish fulfill karne ka mauka! Lekin yeh **DEPRECATED** hai Java 9 se, use mat karo!

**English**: The `finalize()` method is called by the garbage collector before an object is reclaimed. It was intended for cleanup operations but has been **deprecated since Java 9** due to unpredictable behavior and performance issues.

#### Definitions

| Level | Definition |
|-------|------------|
| **Very Simple** | GC object delete karne se pehle call karta hai. But bahut unreliable hai - use mat karo! |
| **Simple** | Called before garbage collection. DEPRECATED in Java 9. Use try-with-resources or explicit cleanup methods instead. |
| **College Exam** | `finalize()` is a protected method called by GC before object destruction. Problems: unpredictable timing, no guarantee of execution, performance overhead. Deprecated since Java 9, marked for removal. Use AutoCloseable with try-with-resources instead. |
| **Interview** | Legacy cleanup mechanism, deprecated in Java 9, removed in later versions. Problems: non-deterministic execution, resurrection possibility, GC overhead, memory leaks if slow. Alternatives: try-with-resources (AutoCloseable), explicit close() methods, Cleaner API (Java 9+), PhantomReference. Never rely on finalize for critical resource cleanup. |

#### Why finalize() is DEPRECATED

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         WHY finalize() IS DEPRECATED (Java 9+)                               ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   ╔═══════════════════════════════════════════════════════════════════════════════════╗      ║
║   ║                           PROBLEMS WITH finalize()                                ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                                   ║      ║
║   ║   1. UNPREDICTABLE TIMING                                                         ║      ║
║   ║      • GC kab chalega? Koi guarantee nahi                                         ║      ║
║   ║      • finalize() kabhi bhi call ho sakta hai - ya kabhi nahi!                    ║      ║
║   ║                                                                                   ║      ║
║   ║   2. NO GUARANTEE OF EXECUTION                                                    ║      ║
║   ║      • Program exit hone pe pending finalize() skip ho sakte hain                 ║      ║
║   ║      • System.runFinalization() bhi guarantee nahi deta                           ║      ║
║   ║                                                                                   ║      ║
║   ║   3. PERFORMANCE OVERHEAD                                                         ║      ║
║   ║      • Objects with finalize() take longer to GC (2 cycles minimum)               ║      ║
║   ║      • Separate finalizer thread required                                         ║      ║
║   ║                                                                                   ║      ║
║   ║   4. RESURRECTION PROBLEM                                                         ║      ║
║   ║      • Object can "resurrect" itself in finalize() (bad practice)                 ║      ║
║   ║      • Leads to memory leaks and unpredictable behavior                           ║      ║
║   ║                                                                                   ║      ║
║   ║   5. EXCEPTION HANDLING                                                           ║      ║
║   ║      • Exceptions in finalize() are ignored silently                              ║      ║
║   ║      • No way to know if cleanup failed                                           ║      ║
║   ║                                                                                   ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════════════════╝      ║
║                                                                                              ║
║   ╔═══════════════════════════════════════════════════════════════════════════════════╗      ║
║   ║                           MODERN ALTERNATIVES                                     ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                                   ║      ║
║   ║   ✓ try-with-resources (Java 7+) - BEST OPTION                                    ║      ║
║   ║   ✓ Explicit close() methods                                                      ║      ║
║   ║   ✓ Cleaner API (Java 9+)                                                         ║      ║
║   ║   ✓ PhantomReference with ReferenceQueue                                          ║      ║
║   ║                                                                                   ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════════════════╝      ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

#### Legacy Code (DON'T USE):

```java
//  OLD WAY - DEPRECATED, DON'T USE!
class Student {
    String name;
    
    Student(String name) {
        this.name = name;
    }
    
    @Override
    protected void finalize() {
        System.out.println("Object " + name + " is being garbage collected");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Rahul");
        s = null;  // Eligible for GC
        System.gc();  // Request GC (not guaranteed!)
    }
}
```

#### Modern Alternative - try-with-resources:

```java
// ✅ MODERN WAY - USE THIS!
class DatabaseConnection implements AutoCloseable {
    
    public DatabaseConnection() {
        System.out.println("Connection opened");
    }
    
    @Override
    public void close() {
        System.out.println("Connection closed - guaranteed!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Automatically calls close() when block exits
        try (DatabaseConnection conn = new DatabaseConnection()) {
            // Use connection
        }  // close() called automatically here!
    }
}
```

---

### 7. wait(), notify(), notifyAll()

#### What are Threading Methods?

**Hinglish**: Yeh methods inter-thread communication ke liye hain. `wait()` thread ko roka hai, `notify()` ek thread jagata hai, `notifyAll()` sab jagate hain. Synchronized block mein hi use kar sakte ho!

**English**: These are thread synchronization methods for inter-thread communication. They must be called from within a synchronized context (synchronized method/block) on the object's monitor.

#### Definitions

| Level | Definition |
|-------|------------|
| **Very Simple** | Threads ko control karne ke liye - ek ko roko (`wait`), doosre ko jagao (`notify`)! |
| **Simple** | `wait()` makes thread wait until notified. `notify()` wakes one waiting thread. `notifyAll()` wakes all. Must be in synchronized block. |
| **College Exam** | Final methods for monitor-based thread coordination. `wait()` releases lock and suspends thread. `notify()`/`notifyAll()` wake waiting threads. Must be called with lock held (synchronized context). Throws IllegalMonitorStateException otherwise. |
| **Interview** | Implement monitor pattern for inter-thread communication. `wait()` atomically releases lock and puts thread in WAITING state. `notify()` moves one thread from wait-set to entry-set. `notifyAll()` preferred to avoid missed signals. Always use in while loop (not if) due to spurious wakeups. Modern alternative: `java.util.concurrent` classes (Lock, Condition, BlockingQueue). |

#### Producer-Consumer Flow

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         PRODUCER-CONSUMER PATTERN (wait/notify)                              ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   PRODUCER THREAD                              CONSUMER THREAD                               ║
║   ═══════════════                              ═══════════════                               ║
║                                                                                              ║
║   ┌─────────────────────┐                      ┌─────────────────────┐                       ║
║   │ synchronized(queue) │                      │ synchronized(queue) │                       ║
║   └──────────┬──────────┘                      └──────────┬──────────┘                       ║
║              │                                            │                                  ║
║              ▼                                            ▼                                  ║
║   ┌─────────────────────┐                      ┌─────────────────────┐                       ║
║   │ if queue is FULL    │                      │ if queue is EMPTY   │                       ║
║   │   queue.wait()      │←─── notify ──────────│   queue.wait()      │                       ║
║   │                     │                      │                     │                       ║
║   │ (I'll sleep until   │                      │ (I'll sleep until   │                       ║
║   │  consumer takes)    │                      │  producer adds)     │                       ║
║   └──────────┬──────────┘                      └──────────┬──────────┘                       ║
║              │                                            │                                  ║
║              ▼                                            ▼                                  ║
║   ┌─────────────────────┐                      ┌─────────────────────┐                       ║
║   │ Add item to queue   │                      │ Take item from queue│                       ║
║   └──────────┬──────────┘                      └──────────┬──────────┘                       ║
║              │                                            │                                  ║
║              ▼                                            ▼                                  ║
║   ┌─────────────────────┐                      ┌─────────────────────┐                       ║
║   │ queue.notify()      │──── notify ─────────►│ queue.notify()      │                       ║
║   │                     │                      │                     │                       ║
║   │ (Wake up consumer!) │                      │ (Wake up producer!) │                       ║
║   └─────────────────────┘                      └─────────────────────┘                       ║
║                                                                                              ║
║   IMPORTANT RULES:                                                                           ║
║   ┌──────────────────────────────────────────────────────────────────────────────────────┐   ║
║   │  1. MUST be inside synchronized block/method                                         │   ║
║   │  2. ALWAYS use while loop (not if) for wait() - spurious wakeups!                    │   ║
║   │  3. Prefer notifyAll() over notify() to avoid missed signals                         │   ║
║   │  4. IllegalMonitorStateException if called without lock                              │   ║
║   └──────────────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

#### Code Example - Producer Consumer:

```java
class SharedQueue {
    private List<Integer> queue = new ArrayList<>();
    private int capacity = 5;
    
    // Producer calls this
    public synchronized void produce(int item) throws InterruptedException {
        // MUST use while, not if (spurious wakeups!)
        while (queue.size() == capacity) {
            wait();  // Wait until consumer takes something
        }
        
        queue.add(item);
        System.out.println("Produced: " + item);
        notifyAll();  // Wake up consumers
    }
    
    // Consumer calls this
    public synchronized int consume() throws InterruptedException {
        while (queue.isEmpty()) {
            wait();  // Wait until producer adds something
        }
        
        int item = queue.remove(0);
        System.out.println("Consumed: " + item);
        notifyAll();  // Wake up producers
        return item;
    }
}
```

#### Method Comparison

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         wait() vs notify() vs notifyAll()                                    ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   ┌───────────────┬───────────────────────────────────────────────────────────────────────┐  ║
║   │    METHOD     │                         BEHAVIOR                                      │  ║
║   ├───────────────┼───────────────────────────────────────────────────────────────────────┤  ║
║   │   wait()      │ • Releases lock & suspends thread                                     │  ║
║   │               │ • Thread goes to WAITING state                                        │  ║
║   │               │ • Must reacquire lock when awakened                                   │  ║
║   ├───────────────┼───────────────────────────────────────────────────────────────────────┤  ║
║   │ wait(timeout) │ • Same as wait() but wakes after timeout                              │  ║
║   │               │ • Useful to avoid infinite waiting                                    │  ║
║   ├───────────────┼───────────────────────────────────────────────────────────────────────┤  ║
║   │   notify()    │ • Wakes ONE random waiting thread                                     │  ║
║   │               │ • Awakened thread competes for lock                                   │  ║
║   │               │ • Other threads keep waiting                                          │  ║
║   ├───────────────┼───────────────────────────────────────────────────────────────────────┤  ║
║   │  notifyAll()  │ • Wakes ALL waiting threads                                           │  ║
║   │               │ • All compete for lock, only one wins                                 │  ║
║   │               │ • PREFERRED - avoids missed signals                                   │  ║
║   └───────────────┴───────────────────────────────────────────────────────────────────────┘  ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Used in**: Multi-threading, producer-consumer problems, thread pools

---

## Real-World Example: Student Class

```java
import java.util.Objects;

class Student {
    private String name;
    private int rollNo;
    private double marks;
    
    public Student(String name, int rollNo, double marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }
    
    // toString() for readable output
    @Override
    public String toString() {
        return String.format("Student[name=%s, rollNo=%d, marks=%.2f]", 
                             name, rollNo, marks);
    }
    
    // equals() for content comparison
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return rollNo == student.rollNo;  // Compare by rollNo
    }
    
    // hashCode() must match equals()
    @Override
    public int hashCode() {
        return Objects.hash(rollNo);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Rahul", 101, 85.5);
        Student s2 = new Student("Rahul", 101, 85.5);
        Student s3 = new Student("Priya", 102, 90.0);
        
        // toString()
        System.out.println(s1);  // Student[name=Rahul, rollNo=101, marks=85.50]
        
        // equals()
        System.out.println(s1.equals(s2));  // true (same rollNo)
        System.out.println(s1.equals(s3));  // false (different rollNo)
        
        // hashCode()
        System.out.println(s1.hashCode() == s2.hashCode());  // true
        
        // getClass()
        System.out.println(s1.getClass().getSimpleName());  // Student
    }
}
```

---

## Summary Table

| Method | Purpose | When to Override |
|--------|---------|-----------------|
| **toString()** | String representation | For readable output |
| **equals()** | Content comparison | For logical equality |
| **hashCode()** | Hash code for object | When equals() overridden |
| **getClass()** | Get runtime class | Usually not overridden |
| **clone()** | Create object copy | For cloning support |
| **finalize()** | Before GC cleanup | Deprecated - avoid |
| **wait/notify** | Thread sync | For multi-threading |

---

## Important Interview Questions

**Q1: What is Object class?**

Root of Java class hierarchy. Every class inherits from Object class directly or indirectly.

**Q2: Why override toString()?**

To get meaningful string representation instead of ClassName@HashCode.

**Q3: Why override equals() and hashCode() together?**

Contract: If equals() returns true, hashCode() must return same value. Required for HashMap, HashSet.

**Q4: Difference between == and equals()?**

- **==**: Reference comparison (same object?)
- **equals()**: Content comparison (same values?)

**Q5: What is hashCode() used for?**

Used in hash-based collections (HashMap, HashSet) for bucketing and fast retrieval.

---

## Short Recap

**Object Class Methods**:
1. **toString()** - String representation
2. **equals()** - Content comparison
3. **hashCode()** - Hash code (override with equals)
4. **getClass()** - Runtime class info
5. **clone()** - Object copying
6. **finalize()** - Before GC (deprecated)
7. **wait/notify/notifyAll** - Thread synchronization

**Always override**: toString(), equals(), hashCode() for custom classes

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                         OBJECT CLASS HIERARCHY                                   ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                       ╔═══════════════════════════════════╗                      ║
║                       ║     java.lang.Object              ║                      ║
║                       ║    (Root of all classes)          ║                      ║
║                       ╚═══════════════════════════════════╝                      ║
║                                      │                                           ║
║              ┌───────────────────────┼───────────────────────┐                   ║
║              │                       │                       │                   ║
║              ▼                       ▼                       ▼                   ║
║     ╔════════════════╗      ╔════════════════╗      ╔════════════════╗           ║
║     ║    Student     ║      ║      Car       ║      ║    Animal      ║           ║
║     ╚════════════════╝      ╚════════════════╝      ╚════════════════╝           ║
║              │                       │                       │                   ║
║              └───────────────────────┴───────────────────────┘                   ║
║                                      │                                           ║
║                                      ▼                                           ║
║                     ╔════════════════════════════════════════╗                   ║
║                     ║  All inherit Object class methods!     ║                   ║
║                     ╚════════════════════════════════════════╝                   ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                        OBJECT CLASS METHODS MAP                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║    ╔══════════════════════════════════════════════════════════════════════╗      ║
║    ║                      Object Class Methods                            ║      ║
║    ╠══════════════════════════════════════════════════════════════════════╣      ║
║    ║                                                                      ║      ║
║    ║   ┌──────────────────────────────────────────────────────────────┐   ║      ║
║    ║   │              COMMONLY OVERRIDDEN METHODS                     │   ║      ║
║    ║   ├──────────────────────────────────────────────────────────────┤   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗    Purpose: String representation       │   ║      ║
║    ║   │   ║  toString()    ║    Default: ClassName@HashCode          │   ║      ║
║    ║   │   ╚════════════════╝    Override: Meaningful output          │   ║      ║
║    ║   │           │                                                  │   ║      ║
║    ║   │           ▼                                                  │   ║      ║
║    ║   │   ╔════════════════╗    Purpose: Content comparison          │   ║      ║
║    ║   │   ║   equals()     ║    Default: Reference comparison (==)   │   ║      ║
║    ║   │   ╚════════════════╝    Override: Value comparison           │   ║      ║
║    ║   │           │                                                  │   ║      ║
║    ║   │           ▼                                                  │   ║      ║
║    ║   │   ╔════════════════╗    Purpose: Hash-based collections      │   ║      ║
║    ║   │   ║  hashCode()    ║    Contract: equals() = true            │   ║      ║
║    ║   │   ╚════════════════╝             → hashCode() same           │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   └──────────────────────────────────────────────────────────────┘   ║      ║
║    ║                                                                      ║      ║
║    ║   ┌──────────────────────────────────────────────────────────────┐   ║      ║
║    ║   │              OTHER IMPORTANT METHODS                         │   ║      ║
║    ║   ├──────────────────────────────────────────────────────────────┤   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗    Returns: Class<?> object             │   ║      ║
║    ║   │   ║  getClass()    ║    Usage: Runtime type checking         │   ║      ║
║    ║   │   ╚════════════════╝    Note: Cannot be overridden (final)   │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗    Purpose: Object copying              │   ║      ║
║    ║   │   ║    clone()     ║    Requires: Cloneable interface        │   ║      ║
║    ║   │   ╚════════════════╝    Note: Protected, needs override      │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗    Called: Before garbage collection    │   ║      ║
║    ║   │   ║  finalize()    ║    Status: DEPRECATED (Java 9+)         │   ║      ║
║    ║   │   ╚════════════════╝    Alternative: try-with-resources      │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   └──────────────────────────────────────────────────────────────┘   ║      ║
║    ║                                                                      ║      ║
║    ║   ┌──────────────────────────────────────────────────────────────┐   ║      ║
║    ║   │             THREAD SYNCHRONIZATION METHODS                   │   ║      ║
║    ║   ├──────────────────────────────────────────────────────────────┤   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗                                         │   ║      ║
║    ║   │   ║    wait()      ║ ──> Thread waits for notification       │   ║      ║
║    ║   │   ╚════════════════╝                                         │   ║      ║
║    ║   │           │                                                  │   ║      ║
║    ║   │           ▼                                                  │   ║      ║
║    ║   │   ╔════════════════╗                                         │   ║      ║
║    ║   │   ║   notify()     ║ ──> Wake up ONE waiting thread          │   ║      ║
║    ║   │   ╚════════════════╝                                         │   ║      ║
║    ║   │           │                                                  │   ║      ║
║    ║   │           ▼                                                  │   ║      ║
║    ║   │   ╔════════════════╗                                         │   ║      ║
║    ║   │   ║  notifyAll()   ║ ──> Wake up ALL waiting threads         │   ║      ║
║    ║   │   ╚════════════════╝                                         │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   └──────────────────────────────────────────────────────────────┘   ║      ║
║    ║                                                                      ║      ║
║    ╚══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                    equals() AND hashCode() CONTRACT                              ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║        ╔═══════════════════╗          ╔═══════════════════╗                      ║
║        ║   s1.equals(s2)   ║   ═══>   ║    true           ║                      ║
║        ╚═══════════════════╝          ╚═══════════════════╝                      ║
║                 │                              │                                 ║
║                 │          THEN MUST           │                                 ║
║                 │              ▼               │                                 ║
║        ╔═══════════════════════════════════════════════════════╗                 ║
║        ║   s1.hashCode() == s2.hashCode()  MUST be true!       ║                 ║
║        ╚═══════════════════════════════════════════════════════╝                 ║
║                                                                                  ║
║        Required for: HashMap, HashSet, Hashtable                                 ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
