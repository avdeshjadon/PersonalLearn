# 37) LIFETIME OF VARIABLES IN JAVA

## Concept Introduction

Lifetime variable ka existence duration hai — yeh batata hai ki variable kab create hota hai aur kab destroy hota hai. Local variables ka lifetime method execution ke dauran hota hai (method start se end tak). Instance variables ka lifetime object ke saath hota hai (object creation se garbage collection tak). Static variables ka lifetime class ke saath hota hai (class loading se unloading tak). Lifetime scope se different hai: scope visibility hai, lifetime existence hai. Variable apne lifetime ke bahar exist nahi karta, memory deallocate ho jaati hai. Lifetime samajhna important hai memory management aur resource cleanup ke liye!

---

## Why This Concept Exists

**Problem:**
- Variable kab tak memory mein rahta hai?
- Memory kab release hoti hai?
- Resource cleanup kab hoti hai?
- Variable ka existence kaise control karein?
- Memory leaks kaise avoid karein?

**Solution (Variable Lifetime):**
- Automatic memory management
- Scope-based lifetime for local variables
- Object-based lifetime for instance variables
- Class-based lifetime for static variables
- Garbage collection for cleanup
- Predictable resource management

---

## Definitions

### 🔹 Very Simple Definition
Lifetime variable ka existence duration hai — kab create hota hai aur kab destroy hota hai.

### 🔹 College Exam Definition
Lifetime is the duration for which a variable exists in memory. Java has three lifetime categories: (1) **Local Variable Lifetime** - Created: When method/block is entered, Destroyed: When method/block exits, Duration: Method/block execution time, Memory: Stack frame, Example: `void method() { int x = 10; }` - x exists only during method execution, (2) **Instance Variable Lifetime** - Created: When object is created (new keyword), Destroyed: When object is garbage collected, Duration: Object lifetime, Memory: Heap with object, Example: `class Demo { int x; }` - x exists as long as Demo object exists, (3) **Static Variable Lifetime** - Created: When class is loaded into JVM, Destroyed: When class is unloaded, Duration: Class lifetime (usually entire program), Memory: Method area, Example: `class Demo { static int x; }` - x exists as long as class is loaded. Lifetime determines when memory is allocated and deallocated.

### 🔹 Viva Definition
Lifetime is temporal extent of variable's existence in memory, distinct from scope (spatial visibility). Categories: (1) **Local Variable Lifetime** - Creation: Method entry (stack frame allocation), Destruction: Method exit (stack frame deallocation), Duration: Method execution time, Nested blocks: inner block variables destroyed at block end, Exception handling: try-catch variables destroyed at block end, Recursion: each recursive call creates new variable instance, Memory: Stack (LIFO), Automatic: no manual cleanup needed, Example: void method() { int x = 10; } - x created at method entry, destroyed at method exit, (2) **Instance Variable Lifetime** - Creation: Object instantiation (new keyword), Initialization: default values first, then explicit initialization, then constructor, Destruction: Garbage collection (when no references), Duration: Object reachability, Finalization: finalize() called before GC (deprecated), Memory: Heap, Reference counting: JVM tracks references, Example: Demo obj = new Demo(); - instance variables exist until obj becomes unreachable, (3) **Static Variable Lifetime** - Creation: Class initialization (first use), Initialization: default values, then static initializers, Destruction: Class unloading (rare), Duration: Usually entire program execution, Memory: Method area/Metaspace, Shared: one copy for all instances, Thread-safe initialization: class loading is synchronized, Example: class Demo { static int count; } - count created when Demo class first used. Lifetime vs Scope: Scope = where accessible, Lifetime = when exists, Variable can exist but not be in scope.

### 🔹 Interview Definition
Lifetime defines temporal boundaries of variable existence, managed by JVM memory management system. Details: (1) **Local Variable Lifetime** - Stack allocation: Method invocation creates stack frame, Local variable array: stores local variables and parameters, Frame structure: return address, local variables, operand stack, Frame lifecycle: push on method entry, pop on method exit, LIFO order: last called method exits first, Exception unwinding: frames popped during exception propagation, Tail call: no optimization in Java (unlike functional languages), Example: method() calls helper() - helper's variables destroyed before method's variables, (2) **Instance Variable Lifetime** - Heap allocation: new operator allocates object memory, Object layout: header (metadata), instance variables, padding, Reachability: object alive if reachable from GC roots, GC roots: stack variables, static variables, JNI references, active threads, Garbage collection: mark-and-sweep, generational GC, Reference types: strong (prevents GC), weak (allows GC), soft (memory-sensitive), phantom (post-GC cleanup), Finalization: finalize() called before reclamation (deprecated, use try-with-resources), Memory leaks: strong references prevent GC, Example: obj = null; - object becomes unreachable, eligible for GC, (3) **Static Variable Lifetime** - Class loading: triggered by first use (new, static access, reflection), Initialization: <clinit> method executes static initializers, Class unloading: when ClassLoader is GC'd (rare in practice), Metaspace: Java 8+ stores class metadata (replaced PermGen), Memory: survives entire application usually, Singleton pattern: static variables ensure single instance, Example: static int count = 0; - initialized once, exists until JVM shutdown. Lifetime management: Automatic for primitives, Reference-based for objects, Deterministic for local (stack), Non-deterministic for instance (GC).

### 🔹 Technical Definition
Lifetime is memory allocation duration managed by JVM runtime system with distinct mechanisms per variable type. Implementation: (1) **Local Variable Lifetime** - Stack frame structure: {return address, local variable array, operand stack, frame data}, Allocation: Method entry triggers frame push onto thread stack, Deallocation: Method exit triggers frame pop (return, exception, or completion), Bytecode: No explicit allocation/deallocation instructions (implicit in frame management), Local variable array: indexed slots (0 for this in instance methods, then parameters, then locals), Slot reuse: compiler may reuse slots for non-overlapping variables, Verification: Bytecode verifier ensures variables initialized before use, Performance: Stack allocation extremely fast (pointer increment), Thread-local: each thread has own stack (no synchronization needed), (2) **Instance Variable Lifetime** - Heap allocation: new bytecode instruction allocates memory, Object header: mark word (GC info, lock info), class pointer, Array length (for arrays), Field layout: instance variables stored sequentially, Padding: alignment for performance (typically 8-byte boundaries), Initialization: Default values set, then instance initializers, then constructor, Reachability analysis: GC traces references from roots, GC algorithms: Young generation (Eden, Survivor), Old generation (Tenured), Mark phase: identify live objects, Sweep phase: reclaim dead objects, Compact phase: defragment memory, Generational hypothesis: most objects die young, Reference processing: weak/soft/phantom references handled specially, Finalization: finalize() queue (deprecated), (3) **Static Variable Lifetime** - Class loading phases: Loading (read .class), Linking (verify, prepare, resolve), Initialization (execute <clinit>), Preparation: allocate memory, set default values, Initialization: execute static initializers in order, Happens-before: class initialization synchronized across threads, Metaspace: stores class metadata (Java 8+), unlimited by default, Class unloading: when ClassLoader unreachable and no instances exist, Rare: application classes usually never unload, Common: dynamic class loading (OSGi, application servers), Memory: survives GC cycles, not in heap. JVM specification: Local variables have no default values (must initialize), Instance/static variables have default values (0, false, null), Lifetime guarantees: Local (deterministic), Instance (non-deterministic, GC-dependent), Static (application lifetime usually).

### 🔹 One-line Crisp Definition
Lifetime = Creation time + Existence duration + Destruction time (Local: method, Instance: object, Static: class)

---

## DIAGRAM: Variable Lifetimes

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VARIABLE LIFETIMES IN JAVA                               │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. LOCAL VARIABLE LIFETIME                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  public void method() {                                             │  │
│  │      // ← x created here (method entry)                             │  │
│  │      int x = 10;                                                    │  │
│  │      System.out.println(x);                                         │  │
│  │      // ← x destroyed here (method exit)                            │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  Timeline:                                                           │  │
│  │  ┌────────────────────────────────────┐                            │  │
│  │  │  Method Entry → x created          │                            │  │
│  │  │  Method Body → x exists            │                            │  │
│  │  │  Method Exit → x destroyed         │                            │  │
│  │  └────────────────────────────────────┘                            │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Created: Method/block entry                                     │  │
│  │  ├─ Destroyed: Method/block exit                                    │  │
│  │  ├─ Duration: Execution time                                        │  │
│  │  ├─ Memory: Stack (automatic)                                       │  │
│  │  └─ Cleanup: Automatic (stack pop)                                  │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. INSTANCE VARIABLE LIFETIME                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  public class Demo {                                                │  │
│  │      int instanceVar = 10;                                          │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  Demo obj = new Demo();  // ← instanceVar created                  │  │
│  │  // ... obj is used ...                                             │  │
│  │  obj = null;  // ← obj unreachable                                 │  │
│  │  // ... GC runs ...                                                 │  │
│  │  // ← instanceVar destroyed                                         │  │
│  │                                                                      │  │
│  │  Timeline:                                                           │  │
│  │  ┌────────────────────────────────────┐                            │  │
│  │  │  new Demo() → instanceVar created  │                            │  │
│  │  │  Object used → instanceVar exists  │                            │  │
│  │  │  obj = null → unreachable          │                            │  │
│  │  │  GC runs → instanceVar destroyed   │                            │  │
│  │  └────────────────────────────────────┘                            │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Created: Object instantiation                                   │  │
│  │  ├─ Destroyed: Garbage collection                                   │  │
│  │  ├─ Duration: Object reachability                                   │  │
│  │  ├─ Memory: Heap                                                    │  │
│  │  └─ Cleanup: Automatic (GC)                                         │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. STATIC VARIABLE LIFETIME                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  public class Demo {                                                │  │
│  │      static int staticVar = 10;                                     │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  // ← staticVar created (class loading)                             │  │
│  │  Demo obj1 = new Demo();                                            │  │
│  │  Demo obj2 = new Demo();                                            │  │
│  │  // ... staticVar exists throughout ...                             │  │
│  │  // ← staticVar destroyed (JVM shutdown)                            │  │
│  │                                                                      │  │
│  │  Timeline:                                                           │  │
│  │  ┌────────────────────────────────────┐                            │  │
│  │  │  Class Load → staticVar created    │                            │  │
│  │  │  Program runs → staticVar exists   │                            │  │
│  │  │  JVM shutdown → staticVar destroyed│                            │  │
│  │  └────────────────────────────────────┘                            │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Created: Class loading                                          │  │
│  │  ├─ Destroyed: Class unloading (rare)                               │  │
│  │  ├─ Duration: Usually entire program                                │  │
│  │  ├─ Memory: Method area                                             │  │
│  │  └─ Cleanup: JVM shutdown                                           │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Lifetime Comparison

```
┌─────────────────────────────────────────────────────┐
│         LIFETIME COMPARISON                         │
└─────────────────────────────────────────────────────┘

PROGRAM EXECUTION TIMELINE:
┌──────────────────────────────────────────────────────────────┐
│  JVM Start                                                   │
│  │                                                            │
│  ├─ Class Loading ──────────────────────────────────────┐    │
│  │  └─ Static variables created                        │    │
│  │     (exist until JVM shutdown)                       │    │
│  │                                                       │    │
│  ├─ Object Creation ────────────────────────┐           │    │
│  │  └─ Instance variables created           │           │    │
│  │     (exist until GC)                     │           │    │
│  │                                           │           │    │
│  ├─ Method Call ──────────┐                 │           │    │
│  │  └─ Local variables    │                 │           │    │
│  │     created            │                 │           │    │
│  │     (exist during      │                 │           │    │
│  │      method only)      │                 │           │    │
│  │                        │                 │           │    │
│  ├─ Method Exit ──────────┘                 │           │    │
│  │  └─ Local variables destroyed            │           │    │
│  │                                           │           │    │
│  ├─ Object Unreachable ────────────────────┘           │    │
│  │  └─ Instance variables destroyed (GC)               │    │
│  │                                                       │    │
│  ├─ JVM Shutdown ──────────────────────────────────────┘    │
│  │  └─ Static variables destroyed                           │
│  │                                                            │
│  JVM Exit                                                    │
└──────────────────────────────────────────────────────────────┘

DURATION:
├─ Local: Shortest (method execution)
├─ Instance: Medium (object lifetime)
└─ Static: Longest (program lifetime)
```

---

## Real-life Hinglish Example

### Example 1: Restaurant Operations

**Lifetime = Duration of Existence:**
```
Restaurant (Java Program):
├─ Restaurant building (static variable)
│  ├─ Created: Restaurant opens
│  ├─ Exists: Entire business lifetime
│  └─ Destroyed: Restaurant closes permanently
│
├─ Customer order (instance variable)
│  ├─ Created: Customer places order
│  ├─ Exists: Until bill paid
│  └─ Destroyed: Customer leaves
│
└─ Cooking temperature (local variable)
   ├─ Created: Start cooking
   ├─ Exists: During cooking only
   └─ Destroyed: Dish ready

Java equivalent:
class Restaurant {
    static String name;      // Lifetime: Program
    int orderNumber;         // Lifetime: Object
    
    void cook() {
        int temp = 180;      // Lifetime: Method
    }
}
```

### Example 2: School System

**Lifetime = Existence Duration:**
```
School (Java Program):
├─ School name (static variable)
│  ├─ Created: School established
│  ├─ Exists: Forever
│  └─ Destroyed: School closes
│
├─ Student record (instance variable)
│  ├─ Created: Student admission
│  ├─ Exists: During student's tenure
│  └─ Destroyed: Student graduates
│
└─ Exam answer (local variable)
   ├─ Created: Exam starts
   ├─ Exists: During exam only
   └─ Destroyed: Exam ends

Java equivalent:
class School {
    static String schoolName;  // Lifetime: Forever
    String studentName;        // Lifetime: Admission to graduation
    
    void exam() {
        String answer = "..."; // Lifetime: Exam duration
    }
}
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         LIFETIME IN MEMORY                          │
└─────────────────────────────────────────────────────┘

CODE:
public class Demo {
    static int staticVar = 10;
    int instanceVar = 20;
    
    public void method() {
        int localVar = 30;
    }
}

EXECUTION TIMELINE:

1. JVM STARTS:
┌──────────────────────────────────────┐
│  METHOD AREA: (empty)                │
│  HEAP: (empty)                       │
│  STACK: (empty)                      │
└──────────────────────────────────────┘

2. CLASS LOADING (Demo class first used):
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ staticVar = 10 ← CREATED         │
│                                      │
│  HEAP: (empty)                       │
│  STACK: (empty)                      │
└──────────────────────────────────────┘

3. OBJECT CREATION (new Demo()):
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ staticVar = 10 (still exists)    │
│                                      │
│  HEAP:                               │
│  └─ instanceVar = 20 ← CREATED       │
│                                      │
│  STACK: (empty)                      │
└──────────────────────────────────────┘

4. METHOD CALL (obj.method()):
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ staticVar = 10 (still exists)    │
│                                      │
│  HEAP:                               │
│  └─ instanceVar = 20 (still exists)  │
│                                      │
│  STACK:                              │
│  └─ localVar = 30 ← CREATED          │
└──────────────────────────────────────┘

5. METHOD EXIT:
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ staticVar = 10 (still exists)    │
│                                      │
│  HEAP:                               │
│  └─ instanceVar = 20 (still exists)  │
│                                      │
│  STACK:                              │
│  └─ localVar ← DESTROYED             │
└──────────────────────────────────────┘

6. OBJECT UNREACHABLE (obj = null):
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ staticVar = 10 (still exists)    │
│                                      │
│  HEAP:                               │
│  └─ instanceVar ← ELIGIBLE FOR GC    │
│                                      │
│  STACK: (empty)                      │
└──────────────────────────────────────┘

7. GARBAGE COLLECTION:
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ staticVar = 10 (still exists)    │
│                                      │
│  HEAP:                               │
│  └─ instanceVar ← DESTROYED          │
│                                      │
│  STACK: (empty)                      │
└──────────────────────────────────────┘

8. JVM SHUTDOWN:
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ staticVar ← DESTROYED            │
│                                      │
│  HEAP: (empty)                       │
│  STACK: (empty)                      │
└──────────────────────────────────────┘
```

---

## Syntax Explanation

### Local variable lifetime:

```java
public class Demo {
    public void method() {
        // localVar created here (method entry)
        int localVar = 10;
        
        System.out.println(localVar);  // localVar exists
        
        if (true) {
            // blockVar created here (block entry)
            int blockVar = 20;
            
            System.out.println(localVar);   // Both exist
            System.out.println(blockVar);
            
            // blockVar destroyed here (block exit)
        }
        
        System.out.println(localVar);  // localVar still exists
        // System.out.println(blockVar);  // ❌ blockVar destroyed
        
        // localVar destroyed here (method exit)
    }
}
```

### Instance variable lifetime:

```java
public class Demo {
    int instanceVar = 10;  // Instance variable
    
    public static void main(String[] args) {
        // instanceVar created here (object creation)
        Demo obj1 = new Demo();
        System.out.println(obj1.instanceVar);  // obj1.instanceVar exists
        
        Demo obj2 = new Demo();
        System.out.println(obj2.instanceVar);  // obj2.instanceVar exists
        
        // obj1.instanceVar becomes unreachable
        obj1 = null;
        // obj1.instanceVar eligible for GC
        
        System.out.println(obj2.instanceVar);  // obj2.instanceVar still exists
        
        // obj2.instanceVar becomes unreachable
        obj2 = null;
        // obj2.instanceVar eligible for GC
        
        // Both instance variables destroyed by GC eventually
    }
}
```

### Static variable lifetime:

```java
public class Demo {
    // staticVar created when class first used
    static int staticVar = 10;
    
    public static void main(String[] args) {
        // Class loaded, staticVar already exists
        System.out.println(Demo.staticVar);  // 10
        
        Demo obj1 = new Demo();
        Demo obj2 = new Demo();
        
        // staticVar shared by all objects
        Demo.staticVar = 20;
        System.out.println(obj1.staticVar);  // 20
        System.out.println(obj2.staticVar);  // 20
        
        obj1 = null;
        obj2 = null;
        // staticVar still exists (not tied to objects)
        
        System.out.println(Demo.staticVar);  // 20
        
        // staticVar destroyed only at JVM shutdown
    }
}
```

### Lifetime demonstration:

```java
public class LifetimeDemo {
    static int staticCount = 0;  // Created at class load
    int instanceId;               // Created with each object
    
    public LifetimeDemo() {
        staticCount++;
        instanceId = staticCount;
        System.out.println("Object " + instanceId + " created");
    }
    
    public void method() {
        int localVar = 100;  // Created at method entry
        System.out.println("Local: " + localVar);
        System.out.println("Instance: " + instanceId);
        System.out.println("Static: " + staticCount);
        // localVar destroyed at method exit
    }
    
    public static void main(String[] args) {
        System.out.println("Static count: " + staticCount);  // 0
        
        LifetimeDemo obj1 = new LifetimeDemo();  // instanceId created
        obj1.method();  // localVar created and destroyed
        
        LifetimeDemo obj2 = new LifetimeDemo();  // new instanceId created
        obj2.method();  // new localVar created and destroyed
        
        obj1 = null;  // obj1.instanceId eligible for GC
        System.gc();  // Suggest GC (not guaranteed)
        
        obj2.method();  // obj2.instanceId still exists
        
        System.out.println("Static count: " + staticCount);  // 2
        // staticCount exists until JVM shutdown
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         LIFETIME AND MEMORY MANAGEMENT              │
└─────────────────────────────────────────────────────┘

STACK (Local Variables):
┌──────────────────────────────────────┐
│  Method Call Stack (LIFO):           │
│  ┌────────────────────────────────┐  │
│  │  main() frame                  │  │
│  │  ├─ args                       │  │
│  │  └─ obj                        │  │
│  ├────────────────────────────────┤  │
│  │  method() frame                │  │
│  │  ├─ this                       │  │
│  │  └─ localVar                   │  │
│  └────────────────────────────────┘  │
│                                      │
│  Lifetime: Frame-based               │
│  ├─ Push: Method entry               │
│  └─ Pop: Method exit                 │
└──────────────────────────────────────┘

HEAP (Instance Variables):
┌──────────────────────────────────────┐
│  Objects:                            │
│  ┌────────────────────────────────┐  │
│  │  Demo object 1                 │  │
│  │  └─ instanceVar = 10           │  │
│  ├────────────────────────────────┤  │
│  │  Demo object 2                 │  │
│  │  └─ instanceVar = 20           │  │
│  └────────────────────────────────┘  │
│                                      │
│  Lifetime: Reachability-based        │
│  ├─ Created: new operator            │
│  └─ Destroyed: GC (when unreachable) │
└──────────────────────────────────────┘

METHOD AREA (Static Variables):
┌──────────────────────────────────────┐
│  Class Metadata:                     │
│  ┌────────────────────────────────┐  │
│  │  Demo class                    │  │
│  │  └─ staticVar = 100            │  │
│  └────────────────────────────────┘  │
│                                      │
│  Lifetime: Class-based               │
│  ├─ Created: Class loading           │
│  └─ Destroyed: Class unloading (rare)│
└──────────────────────────────────────┘
```

---

## Advantages

✅ **Automatic Management**: No manual memory allocation/deallocation  
✅ **Predictable**: Local variables have deterministic lifetime  
✅ **Efficient**: Stack allocation very fast  
✅ **Safe**: No dangling pointers or memory leaks (for locals)  
✅ **Garbage Collection**: Automatic cleanup for objects  
✅ **Thread-safe**: Local variables thread-local  

---

## Limitations

❌ **Non-deterministic GC**: Instance variable destruction timing unpredictable  
❌ **Memory Leaks**: Strong references prevent GC  
❌ **Finalization Issues**: finalize() unreliable (deprecated)  
❌ **Static Variables**: Exist entire program (memory overhead)  

---

## Edge Cases

🔸 **Recursive method calls:**
```java
void recursive(int n) {
    int localVar = n;  // New instance for each call
    if (n > 0) {
        recursive(n - 1);
    }
    // localVar destroyed when this call returns
}
// Each recursive call creates new localVar
// Destroyed in reverse order (LIFO)
```

🔸 **Exception handling:**
```java
void method() {
    int x = 10;
    try {
        int y = 20;
        throw new Exception();
    } catch (Exception e) {
        // y destroyed (out of scope)
        // x still exists
    }
    // x still exists
}
```

🔸 **Object references:**
```java
Demo obj1 = new Demo();
Demo obj2 = obj1;  // Two references to same object
obj1 = null;       // obj1 reference gone
// Object still reachable via obj2
obj2 = null;       // Now unreachable, eligible for GC
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Assuming immediate GC after null assignment
```java
❌ Demo obj = new Demo();
   obj = null;
   // Object NOT immediately destroyed!
   // GC runs at its own discretion

✅ Demo obj = new Demo();
   obj = null;
   // Object eligible for GC
   // Will be destroyed eventually
```

🚫 **Mistake 2**: Expecting local variable to persist
```java
❌ void method() {
       int x = 10;
   }
   // x destroyed, cannot access later

✅ class Demo {
       int x;  // Instance variable
       void method() {
           x = 10;  // Persists with object
       }
   }
```

🚫 **Mistake 3**: Confusing scope with lifetime
```java
❌ void method() {
       if (true) {
           int x = 10;
       }
       // x out of scope AND destroyed
   }

✅ void method() {
       int x;
       if (true) {
           x = 10;
       }
       // x still exists (method scope)
   }
```

🚫 **Mistake 4**: Memory leaks with static collections
```java
❌ class Cache {
       static List<Object> cache = new ArrayList<>();
       void add(Object obj) {
           cache.add(obj);  // Never removed, memory leak!
       }
   }

✅ class Cache {
       static Map<String, WeakReference<Object>> cache;
       // Use weak references or explicit removal
   }
```

---

## Important Interview Points

💡 **Q: What is variable lifetime in Java?**  
**A**: Lifetime is duration for which variable exists in memory. Three types:
- **Local**: Method/block execution (stack)
- **Instance**: Object creation to GC (heap)
- **Static**: Class loading to unloading (method area)
Example:
```java
class Demo {
    static int s;    // Lifetime: Program
    int i;           // Lifetime: Object
    void m() {
        int l = 10;  // Lifetime: Method
    }
}
```

💡 **Q: What is the difference between scope and lifetime?**  
**A**: 
- **Scope**: Where variable is accessible (visibility)
- **Lifetime**: When variable exists in memory (existence)
Variable can exist but not be in scope. Example:
```java
void method() {
    int x = 10;  // Lifetime: entire method
    if (true) {
        int y = 20;  // Scope: if block only
        // x in scope and exists
    }
    // y out of scope but may still exist in memory
    // x still in scope and exists
}
```

💡 **Q: When are local variables destroyed?**  
**A**: Local variables destroyed when method/block exits. Stack frame popped, memory automatically deallocated. Deterministic and immediate. Example:
```java
void method() {
    int x = 10;  // Created
    System.out.println(x);
}  // x destroyed here (method exit)
```

💡 **Q: When are instance variables destroyed?**  
**A**: Instance variables destroyed when object is garbage collected. Non-deterministic timing, depends on GC. Object must be unreachable (no references). Example:
```java
Demo obj = new Demo();  // instanceVar created
obj = null;  // Object unreachable
// GC runs eventually, instanceVar destroyed
```

💡 **Q: When are static variables created and destroyed?**  
**A**: 
- **Created**: Class loading (first use of class)
- **Destroyed**: Class unloading (rare) or JVM shutdown
Usually exist entire program. Example:
```java
class Demo {
    static int count = 0;  // Created at class load
}
// Destroyed at JVM shutdown
```

💡 **Q: What is garbage collection?**  
**A**: Automatic memory management that reclaims memory of unreachable objects. GC identifies objects with no references (unreachable from GC roots), marks them, and reclaims memory. Non-deterministic timing. Example:
```java
Demo obj = new Demo();  // Object created
obj = null;  // Unreachable
// GC will eventually destroy object
System.gc();  // Suggest GC (not guaranteed)
```

💡 **Q: Can we force garbage collection?**  
**A**: No, cannot force GC. `System.gc()` is only a suggestion to JVM, not guaranteed. JVM decides when to run GC based on memory pressure and heuristics. Best practice: don't rely on GC timing, use try-with-resources for resource cleanup.

💡 **Q: What happens to local variables in recursive calls?**  
**A**: Each recursive call creates new instance of local variables in new stack frame. Variables destroyed in reverse order (LIFO) as calls return. Example:
```java
void recursive(int n) {
    int x = n;  // New x for each call
    if (n > 0) recursive(n - 1);
}  // x destroyed when call returns
```

---

## Short Recap

Lifetime variable ka existence duration hai. Teen types: Local (method execution, stack, deterministic), Instance (object creation to GC, heap, non-deterministic), Static (class loading to unloading, method area, program lifetime). Local variables method exit pe destroy hote hain (automatic, stack pop). Instance variables GC pe destroy hote hain (when unreachable). Static variables class unloading pe destroy hote hain (rare, usually JVM shutdown). Lifetime ≠ Scope: scope visibility hai, lifetime existence hai. GC automatic memory management hai, non-deterministic timing. System.gc() suggestion hai, guarantee nahi. Recursive calls mein har call ke liye new local variables (LIFO destruction). Interview ke liye yaad rakho: 3 lifetime types, local vs instance vs static destruction timing, scope vs lifetime difference, GC concept, non-deterministic GC, aur recursive call behavior.

---

**Previous**: [← 36 - Scope of Variables](./36-scope-of-variables.md)  
**Next**: [38 - Data Types →](./38-data-types.md)
