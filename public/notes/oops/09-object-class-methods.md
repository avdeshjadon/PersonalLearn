# OBJECT CLASS METHODS

## Concept Introduction

**Object class** Java ka **root/parent class** hai - har class automatically Object class ko inherit karti hai. Object class mein **important methods** hain jo har object use kar sakta hai.

**Object Class = Universal Parent = Root of Java Class Hierarchy**

Real Example: **Adam** (first human) - sab uski aulaad hain. Similarly, **Object class** sabka parent!

---

## Why Object Class Exists

### The Purpose
- Common methods har class ke liye
- Polymorphism support
- Collection framework compatibility
- Thread synchronization support

---

## Definitions

### Simple Definition
Object class is the root of Java class hierarchy. Every class inherits from Object class directly or indirectly.

### Interview Definition
Object class is the supermost parent class in Java located in java.lang package. Every class implicitly extends Object class if no explicit parent is specified. It provides fundamental methods like toString(), equals(), hashCode(), getClass(), clone(), finalize(), wait(), notify(), and notifyAll() that define basic object behavior and enable polymorphism, comparison, cloning, and thread synchronization.

---

## Object Class Hierarchy

```
           Object (java.lang.Object)
              ↑
              |
       Every Class in Java
    (Student, Car, Animal, etc.)
```

```java
class Student {  }
// Automatically: class Student extends Object { }
```

---

## Important Object Class Methods

### 1. toString()

**Returns string representation of object**

#### Default Behavior:
```java
class Student {
    String name;
    int rollNo;
}

Student s = new Student();
System.out.println(s.toString());
// Output: Student@15db9742 (ClassName@HashCode)
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
    }
}
```

---

### 2. equals()

**Compares two objects for equality**

#### Default Behavior (Reference Comparison):
```java
Student s1 = new Student("Rahul", 101);
Student s2 = new Student("Rahul", 101);
System.out.println(s1.equals(s2));  // false (different objects)
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
        if (this == obj) return true;  // Same reference
        if (obj == null || getClass() != obj.getClass()) return false;
        
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

---

### 3. hashCode()

**Returns hash code (integer) for object**

#### Why Override?

**equals() aur hashCode() ka contract**: If `a.equals(b)` is true, then `a.hashCode() == b.hashCode()` must be true.

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
        return Objects.hash(name, rollNo);  // Java 7+
        // OR manually: return 31 * name.hashCode() + rollNo;
    }
}
```

**Used in**: HashMap, HashSet, Hashtable

---

### 4. getClass()

**Returns Class object representing runtime class**

```java
class Student { }
class Teacher { }

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        Teacher t = new Teacher();
        
        System.out.println(s.getClass());  // class Student
        System.out.println(t.getClass());  // class Teacher
        
        System.out.println(s.getClass().getName());  // Student
        System.out.println(s.getClass().getSimpleName());  // Student
    }
}
```

---

### 5. clone()

**Creates and returns copy of object**

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
        return super.clone();
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

**Must implement Cloneable interface!**

---

### 6. finalize()

**Called before object is garbage collected** (Deprecated in Java 9)

```java
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
        System.gc();  // Request GC
    }
}
```

**Not recommended** - use try-with-resources instead!

---

### 7. wait(), notify(), notifyAll()

**Used for thread synchronization**

```java
class SharedResource {
    synchronized void waitMethod() throws InterruptedException {
        wait();  // Current thread waits
    }
    
    synchronized void notifyMethod() {
        notify();  // Wake up one waiting thread
    }
    
    synchronized void notifyAllMethod() {
        notifyAll();  // Wake up all waiting threads
    }
}
```

**Used in**: Multi-threading, producer-consumer problems

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
║    ║   │   ╔════════════════╗    Purpose: String representation      │   ║      ║
║    ║   │   ║  toString()    ║    Default: ClassName@HashCode         │   ║      ║
║    ║   │   ╚════════════════╝    Override: Meaningful output         │   ║      ║
║    ║   │           │                                                  │   ║      ║
║    ║   │           ▼                                                  │   ║      ║
║    ║   │   ╔════════════════╗    Purpose: Content comparison         │   ║      ║
║    ║   │   ║   equals()     ║    Default: Reference comparison (==)  │   ║      ║
║    ║   │   ╚════════════════╝    Override: Value comparison          │   ║      ║
║    ║   │           │                                                  │   ║      ║
║    ║   │           ▼                                                  │   ║      ║
║    ║   │   ╔════════════════╗    Purpose: Hash-based collections     │   ║      ║
║    ║   │   ║  hashCode()    ║    Contract: equals() = true           │   ║      ║
║    ║   │   ╚════════════════╝             → hashCode() same          │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   └──────────────────────────────────────────────────────────────┘   ║      ║
║    ║                                                                      ║      ║
║    ║   ┌──────────────────────────────────────────────────────────────┐   ║      ║
║    ║   │              OTHER IMPORTANT METHODS                         │   ║      ║
║    ║   ├──────────────────────────────────────────────────────────────┤   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗    Returns: Class<?> object            │   ║      ║
║    ║   │   ║  getClass()    ║    Usage: Runtime type checking        │   ║      ║
║    ║   │   ╚════════════════╝    Note: Cannot be overridden (final)  │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗    Purpose: Object copying             │   ║      ║
║    ║   │   ║    clone()     ║    Requires: Cloneable interface       │   ║      ║
║    ║   │   ╚════════════════╝    Note: Protected, needs override     │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗    Called: Before garbage collection   │   ║      ║
║    ║   │   ║  finalize()    ║    Status: DEPRECATED (Java 9+)        │   ║      ║
║    ║   │   ╚════════════════╝    Alternative: try-with-resources     │   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   └──────────────────────────────────────────────────────────────┘   ║      ║
║    ║                                                                      ║      ║
║    ║   ┌──────────────────────────────────────────────────────────────┐   ║      ║
║    ║   │             THREAD SYNCHRONIZATION METHODS                   │   ║      ║
║    ║   ├──────────────────────────────────────────────────────────────┤   ║      ║
║    ║   │                                                              │   ║      ║
║    ║   │   ╔════════════════╗                                         │   ║      ║
║    ║   │   ║    wait()      ║ ──> Thread waits for notification      │   ║      ║
║    ║   │   ╚════════════════╝                                         │   ║      ║
║    ║   │           │                                                  │   ║      ║
║    ║   │           ▼                                                  │   ║      ║
║    ║   │   ╔════════════════╗                                         │   ║      ║
║    ║   │   ║   notify()     ║ ──> Wake up ONE waiting thread         │   ║      ║
║    ║   │   ╚════════════════╝                                         │   ║      ║
║    ║   │           │                                                  │   ║      ║
║    ║   │           ▼                                                  │   ║      ║
║    ║   │   ╔════════════════╗                                         │   ║      ║
║    ║   │   ║  notifyAll()   ║ ──> Wake up ALL waiting threads        │   ║      ║
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
