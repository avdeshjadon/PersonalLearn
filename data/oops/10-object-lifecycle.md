# OBJECT LIFECYCLE

## Concept Introduction

Ek **object** ki life journey - **Birth (creation) → Life (usage) → Death (garbage collection)**. Bilkul humans ki tarah! Object kaise banta hai, memory mein kaise jata hai, aur kaise destroy hota hai - yeh sab samajhna important hai.

**Object Lifecycle = Creation → Usage → Destruction**

Real Example: **Car** - Factory mein banti hai (new), road pe chalti hai (usage), scrap ho jati hai (garbage collection)

---

## Why Understanding Lifecycle Matters

### The Problem
- Memory leaks hote hain
- OutOfMemoryError aata hai
- Performance issues
- Objects kabhi destroy nahi hote

### The Solution
Object lifecycle samajhne se:
- Efficient memory management
- No memory leaks
- Better performance
- Proper resource cleanup

---

## Definitions

### Very Simple Definition
Object banta hai, use hota hai, phir automatic delete ho jata hai jab zarurat nahi hoti.

### Simple Definition
Object lifecycle consists of three phases: creation (memory allocation and initialization), usage (calling methods and accessing fields), and destruction (garbage collection when no longer referenced).

### College Exam Definition
Object lifecycle in Java includes: 1) Creation phase where memory is allocated in heap using new keyword and constructor initializes the object, 2) Usage phase where object is accessed via reference variable and methods are invoked, 3) Destruction phase where Garbage Collector automatically reclaims memory when object has no active references.

### Interview Definition
Object lifecycle encompasses: Creation (new operator allocates heap memory, constructor executes for initialization), In-use (object referenced and methods invoked), Invisible (unreachable from active code but memory not yet reclaimed), and Finalization/Destruction (Garbage Collector marks unreferenced objects, optionally calls finalize(), and reclaims heap memory). Java's automatic memory management through GC eliminates manual deallocation unlike C/C++.

### Deep Technical Definition
Object lifecycle: 1) **Creation**: new operator triggers ClassLoader to load class (if not loaded), allocates heap memory based on object size, initializes fields to default values, executes initialization blocks and constructor, returns reference to stack. 2) **Usage**: Reference variable in stack points to heap object, methods invoked via reference, object state modified. 3) **Eligibility for GC**: When no active references exist (null assignment, out of scope, reference reassignment), object becomes unreachable. 4) **Finalization**: GC thread marks object, optionally invokes finalize() once, then reclaims memory. GC uses generational collection (Young/Old generations) and algorithms like Mark-Sweep-Compact.

---

## Object Lifecycle Phases

### Phase 1: Object Creation

```java
Student s1 = new Student("Rahul", 101);
```

**What Happens**:
1. Class is loaded (if not already)
2. Memory allocated in **Heap**
3. Instance variables initialized to **default values**
4. Constructor executes
5. Reference returned and stored in **Stack**

```
Stack Memory              Heap Memory
═════════════             ══════════════════════════════
                          
s1 ───────────────>       ┌─────────────────────┐
[Reference]               │ Student Object      │
                          ├─────────────────────┤
                          │ name: "Rahul"       │
                          │ rollNo: 101         │
                          │ Methods reference   │
                          └─────────────────────┘
```

### Phase 2: Object Usage

```java
s1.display();           // Method call
s1.name = "Priya";      // Field access (if public)
```

Object is actively used through reference variable.

### Phase 3: Object Becomes Unreachable

**Ways an object becomes eligible for Garbage Collection**:

#### 1. Nullifying Reference

```java
Student s1 = new Student("Rahul", 101);
s1 = null;  // Object eligible for GC
```

#### 2. Reassigning Reference

```java
Student s1 = new Student("Rahul", 101);
Student s2 = new Student("Priya", 102);
s1 = s2;  // First object eligible for GC
```

#### 3. Object Goes Out of Scope

```java
void method() {
    Student s1 = new Student("Rahul", 101);
}  // s1 out of scope, object eligible for GC
```

#### 4. Anonymous Object

```java
new Student("Rahul", 101).display();
// Object becomes eligible immediately after use
```

### Phase 4: Garbage Collection

**Java's Garbage Collector automatically**:
1. Identifies unreachable objects
2. Reclaims memory
3. Prevents memory leaks

---

## Complete Example

```java
class Student {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        System.out.println("Object created: " + name);
    }
    
    void display() {
        System.out.println(name + " - " + rollNo);
    }
    
    // Called before GC (not guaranteed)
    @Override
    protected void finalize() {
        System.out.println("Object destroyed: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        // Phase 1: Creation
        Student s1 = new Student("Rahul", 101);
        Student s2 = new Student("Priya", 102);
        
        // Phase 2: Usage
        s1.display();
        s2.display();
        
        // Phase 3: Making eligible for GC
        s1 = null;  // Rahul object eligible
        s2 = null;  // Priya object eligible
        
        // Request GC (not guaranteed to run immediately)
        System.gc();
        
        // Give time for GC
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}
```

---

## Memory Management

### Heap Memory

**Where objects live**

```
Heap Memory
═══════════════════════════════════════
│                                     │
│  Young Generation                   │
│  ├─ Eden Space                      │
│  ├─ Survivor Space 0                │
│  └─ Survivor Space 1                │
│                                     │
│  Old Generation (Tenured)           │
│                                     │
│  Permanent Generation (Meta Space)  │
│  (Class metadata)                   │
│                                     │
═══════════════════════════════════════
```

### Stack Memory

**Where references live**

```
Stack Memory
═════════════════════════
│  main() method        │
│  ├─ s1 (reference)    │────> Heap Object 1
│  ├─ s2 (reference)    │────> Heap Object 2
│  └─ local variables   │
│                       │
│  method1()            │
│  ├─ local vars        │
│                       │
═════════════════════════
```

---

## Garbage Collection

### What is Garbage Collection?

Automatic memory management - **unreachable objects** ko delete karna.

### When Object Becomes Eligible?

```java
Student s1 = new Student("Rahul", 101);
Student s2 = new Student("Priya", 102);
Student s3 = s1;

s1 = null;  // Object still referenced by s3 (NOT eligible)
s3 = null;  // Now object eligible (no references)

s2 = new Student("Amit", 103);  // Priya object eligible
```

### Request GC

```java
System.gc();              // Request GC
Runtime.getRuntime().gc(); // Request GC
```

**Note**: GC is JVM's decision, not guaranteed to run immediately!

---

## finalize() Method

### What is finalize()?

Method called **before** object is garbage collected (not guaranteed).

### Syntax

```java
class Student {
    String name;
    
    @Override
    protected void finalize() {
        System.out.println("Object " + name + " is being destroyed");
        // Cleanup code (close files, release resources)
    }
}
```

### Important Points:
- Called **only once** per object
- **Not guaranteed** to be called
- **Not recommended** in modern Java
- Use **try-with-resources** or **finally** block instead

---

## Real-World Example

```java
class DatabaseConnection {
    String dbName;
    
    DatabaseConnection(String dbName) {
        this.dbName = dbName;
        System.out.println("Opening connection to " + dbName);
    }
    
    void query(String sql) {
        System.out.println("Executing: " + sql);
    }
    
    void close() {
        System.out.println("Closing connection to " + dbName);
    }
    
    @Override
    protected void finalize() {
        System.out.println("Finalizing connection to " + dbName);
        close();  // Cleanup
    }
}

public class Main {
    public static void main(String[] args) {
        DatabaseConnection conn1 = new DatabaseConnection("MySQL");
        conn1.query("SELECT * FROM users");
        conn1.close();  // Explicitly close
        
        DatabaseConnection conn2 = new DatabaseConnection("PostgreSQL");
        conn2.query("SELECT * FROM products");
        // Forgot to close - finalize() might help (not guaranteed)
        
        conn2 = null;  // Eligible for GC
        System.gc();
        
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}
```

---

## Best Practices

### ✅ Do:
1. **Nullify** large objects after use
2. **Close resources** explicitly (files, connections)
3. **Use try-with-resources** for AutoCloseable
4. **Avoid memory leaks** (static collections)
5. **Profile memory** usage

### ❌ Don't:
1. **Rely on finalize()** for cleanup
2. **Call System.gc()** frequently (JVM knows better)
3. **Create unnecessary objects** in loops
4. **Hold references** longer than needed

---

## Memory Leaks

### Common Causes:

```java
// 1. Static collection holding references
class Cache {
    static List<Object> list = new ArrayList<>();
    
    void add(Object obj) {
        list.add(obj);  // Objects never released!
    }
}

// 2. Listeners not removed
button.addActionListener(listener);
// Forgot to remove!

// 3. Unclosed resources
FileInputStream fis = new FileInputStream("file.txt");
// Forgot to close!
```

---

## Object Lifecycle States

```
NEW ──> INITIALIZED ──> IN-USE ──> UNREACHABLE ──> FINALIZED ──> DEALLOCATED
 │          │              │            │              │             │
 │          │              │            │              │             │
new     Constructor    Methods      No refs      finalize()      GC
```

---

## Important Interview Questions

**Q1: What are the phases of object lifecycle?**

1. **Creation**: Memory allocation, constructor execution
2. **Usage**: Object referenced and used
3. **Destruction**: No references, eligible for GC, memory reclaimed

**Q2: When is an object eligible for Garbage Collection?**

When no active references point to it:
- Reference nullified
- Reference reassigned
- Object goes out of scope

**Q3: Can we force Garbage Collection?**

We can **request** using `System.gc()`, but JVM decides when to actually run GC.

**Q4: What is finalize() method?**

Method called before object is garbage collected. Not guaranteed to run. Not recommended for cleanup - use try-with-resources instead.

**Q5: Where are objects created in Java?**

Objects are created in **Heap memory**. Reference variables are in **Stack memory**.

---

## Short Recap

**Object Lifecycle**:
1. **Creation**: new keyword → heap allocation → constructor
2. **Usage**: Methods called, fields accessed
3. **Destruction**: No references → eligible for GC → memory reclaimed

**Garbage Collection**:
- Automatic memory management
- Reclaims unreachable objects
- Can request with System.gc()
- Not guaranteed when it runs

**Memory**:
- Objects in Heap
- References in Stack

```
╔══════════════════════════════════════════════════════════════════════╗
║                      OBJECT LIFECYCLE                                ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║   CREATION          USAGE           DESTRUCTION                      ║
║   ══════════        ═════           ════════════                     ║
║                                                                      ║
║   new Student()     s1.display()    s1 = null                       ║
║        ↓               ↓                 ↓                           ║
║   Heap Memory     Methods Called    No References                   ║
║   Allocated       Fields Accessed   Eligible for GC                 ║
║   Constructor                             ↓                         ║
║   Executes                          Garbage Collector               ║
║        ↓                                   ↓                         ║
║   Reference        Object Active     Memory Reclaimed               ║
║   Returned         In Stack                                         ║
║                                                                      ║
║   ┌────────┐       ┌────────┐       ┌────────┐                     ║
║   │ BIRTH  │  -->  │  LIFE  │  -->  │ DEATH  │                     ║
║   └────────┘       └────────┘       └────────┘                     ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```
