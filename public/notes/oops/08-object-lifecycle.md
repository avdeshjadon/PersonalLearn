# OBJECT LIFECYCLE

## Concept Introduction

Ek **object** ki life journey - **Birth (creation) → Life (usage) → Death (garbage collection)**. Bilkul humans ki tarah! Object kaise banta hai, memory mein kaise jata hai, aur kaise destroy hota hai - yeh sab samajhna important hai.

**Object Lifecycle = Creation → Usage → Destruction**
- Creation phase: Memory is allocated in the heap using the `new` keyword and the constructor initializes the object.
- Usage phase: The object is accessed via a reference variable and methods are invoked on it.
- Destruction phase: The Garbage Collector automatically reclaims memory when the object has no active references.

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
- Creation phase: Memory is allocated in the heap using the `new` keyword and the constructor initializes the object.
- Usage phase: The object is accessed via a reference variable and methods are invoked on it.
- Destruction phase: The Garbage Collector automatically reclaims memory when the object has no active references.

### Interview Definition
Object lifecycle encompasses: Creation (new operator allocates heap memory, constructor executes for initialization), In-use (object referenced and methods invoked), Invisible (unreachable from active code but memory not yet reclaimed), and Finalization/Destruction (Garbage Collector marks unreferenced objects, optionally calls finalize(), and reclaims heap memory). Java's automatic memory management through GC eliminates manual deallocation unlike C/C++.

### Deep Technical Definition
### Deep Technical Definition
- **Creation**: The `new` operator may trigger the ClassLoader (if the class isn't loaded), allocates heap memory sized for the object, initializes instance fields to default values, executes initialization blocks and the constructor, and returns a reference stored on the stack.
- **Usage**: A reference variable on the stack points to the heap object; methods are invoked via the reference and the object's state can be modified.
- **Eligibility for GC**: An object becomes unreachable when there are no active references (e.g. reference set to `null`, reference reassigned, or object goes out of scope), making it eligible for garbage collection.
- **Finalization & Collection**: The GC marks unreachable objects, may (historically) invoke `finalize()` once, and reclaims memory; modern JVMs use generational collection (Young/Old) and algorithms such as Mark-Sweep-Compact.

---

## Object Lifecycle Phases Overview

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              OBJECT LIFECYCLE - 4 PHASES                                     ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   ╔═══════════════╗      ╔═══════════════╗      ╔═══════════════╗      ╔═══════════════╗     ║
║   ║   PHASE 1     ║      ║   PHASE 2     ║      ║   PHASE 3     ║      ║   PHASE 4     ║     ║
║   ║   CREATION    ║ ═══> ║    USAGE      ║ ═══> ║  UNREACHABLE  ║ ═══> ║     GC        ║     ║
║   ║   (Birth)     ║      ║   (Life)      ║      ║   (Dying)     ║      ║   (Death)     ║     ║
║   ╚═══════════════╝      ╚═══════════════╝      ╚═══════════════╝      ╚═══════════════╝     ║
║         │                       │                      │                      │              ║
║         ▼                       ▼                      ▼                      ▼              ║
║   ┌───────────────┐      ┌───────────────┐      ┌───────────────┐      ┌───────────────┐     ║
║   │ • new keyword │      │ • Methods     │      │ • null assign │      │ • Mark phase  │     ║
║   │ • Memory alloc│      │ • Field access│      │ • Reassign    │      │ • Sweep phase │     ║
║   │ • Constructor │      │ • State change│      │ • Out of scope│      │ • Memory free │     ║
║   └───────────────┘      └───────────────┘      └───────────────┘      └───────────────┘     ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### Phase 1: Object Creation 

**Definition**: Object creation is the process where JVM allocates memory in heap, initializes instance variables to default values, executes constructor to set initial state, and returns a reference that gets stored in stack memory.

```java
Student s1 = new Student("Rahul", 101);
```

**Step-by-Step Process**:
- **Step 1**: Class Loading - ClassLoader loads `.class` file (if not already loaded)
- **Step 2**: Memory Allocation - JVM allocates memory in Heap based on object size
- **Step 3**: Default Initialization - All instance variables get default values (`null`, `0`, `false`)
- **Step 4**: Explicit Initialization - Instance initializers and variable assignments execute
- **Step 5**: Constructor Execution - Constructor runs to set actual values
- **Step 6**: Reference Return - Memory address (reference) is returned and stored in Stack

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                           OBJECT CREATION FLOWCHART                                          ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═════════════════════════════════════════════════════════════════════════════════╗      ║
║     ║                    new Student("Rahul", 101)                                    ║      ║
║     ╚═════════════════════════════════════════════════════════════════════════════════╝      ║
║                                          │                                                   ║
║                                          ▼                                                   ║
║     ╔═════════════════════════════════════════════════════════════════════════════════╗      ║
║     ║  STEP 1: CLASS LOADING                                                          ║      ║
║     ║  ┌─────────────────────────────────────────────────────────────────────────┐    ║      ║
║     ║  │  ClassLoader checks if Student.class is loaded                          │    ║      ║
║     ║  │  If NOT loaded → Load → Link → Initialize                               │    ║      ║
║     ║  └─────────────────────────────────────────────────────────────────────────┘    ║      ║
║     ╚═════════════════════════════════════════════════════════════════════════════════╝      ║
║                                          │                                                   ║
║                                          ▼                                                   ║
║     ╔═════════════════════════════════════════════════════════════════════════════════╗      ║
║     ║  STEP 2: HEAP MEMORY ALLOCATION                                                 ║      ║
║     ║  ┌─────────────────────────────────────────────────────────────────────────┐    ║      ║
║     ║  │  JVM calculates object size (header + instance variables)               │    ║      ║
║     ║  │  Allocates contiguous memory block in Heap                              │    ║      ║
║     ║  │  Memory Address: 0x7f8b4c (example)                                     │    ║      ║
║     ║  └─────────────────────────────────────────────────────────────────────────┘    ║      ║
║     ╚═════════════════════════════════════════════════════════════════════════════════╝      ║
║                                          │                                                   ║
║                                          ▼                                                   ║
║     ╔═════════════════════════════════════════════════════════════════════════════════╗      ║
║     ║  STEP 3: DEFAULT VALUE INITIALIZATION                                           ║      ║
║     ║  ┌─────────────────────────────────────────────────────────────────────────┐    ║      ║
║     ║  │  String name  → null                                                    │    ║      ║
║     ║  │  int rollNo   → 0                                                       │    ║      ║
║     ║  └─────────────────────────────────────────────────────────────────────────┘    ║      ║
║     ╚═════════════════════════════════════════════════════════════════════════════════╝      ║
║                                          │                                                   ║
║                                          ▼                                                   ║
║     ╔═════════════════════════════════════════════════════════════════════════════════╗      ║
║     ║  STEP 4: CONSTRUCTOR EXECUTION                                                  ║      ║
║     ║  ┌─────────────────────────────────────────────────────────────────────────┐    ║      ║
║     ║  │  this.name = "Rahul"                                                    │    ║      ║
║     ║  │  this.rollNo = 101                                                      │    ║      ║
║     ║  └─────────────────────────────────────────────────────────────────────────┘    ║      ║
║     ╚═════════════════════════════════════════════════════════════════════════════════╝      ║
║                                          │                                                   ║
║                                          ▼                                                   ║
║     ╔═════════════════════════════════════════════════════════════════════════════════╗      ║
║     ║  STEP 5: REFERENCE RETURNED TO STACK                                            ║      ║
║     ║  ┌─────────────────────────────────────────────────────────────────────────┐    ║      ║
║     ║  │  s1 = 0x7f8b4c (reference stored in Stack)                              │    ║      ║
║     ║  └─────────────────────────────────────────────────────────────────────────┘    ║      ║
║     ╚═════════════════════════════════════════════════════════════════════════════════╝      ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Memory Layout After Creation**:

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              STACK ↔ HEAP RELATIONSHIP                                       ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║      STACK MEMORY                                    HEAP MEMORY                             ║
║     ╔══════════════════╗                          ╔════════════════════════════════════╗     ║
║     ║   main() Frame   ║                          ║                                    ║     ║
║     ╠══════════════════╣                          ║   ╔════════════════════════════╗   ║     ║
║     ║                  ║                          ║   ║    Student Object          ║   ║     ║
║     ║   s1 ══════════════════════════════════════════>║    @0x7f8b4c               ║   ║     ║
║     ║   [0x7f8b4c]     ║                          ║   ╠════════════════════════════╣   ║     ║
║     ║                  ║                          ║   ║  ┌──────────────────────┐  ║   ║     ║
║     ╚══════════════════╝                          ║   ║  │ Object Header        │  ║   ║     ║
║                                                   ║   ║  │ (Mark Word + Klass)  │  ║   ║     ║
║     • Reference variable                          ║   ║  ├──────────────────────┤  ║   ║     ║
║     • Stores memory address                       ║   ║  │ name: "Rahul"        │  ║   ║     ║
║     • Lives in Stack                              ║   ║  │ rollNo: 101          │  ║   ║     ║
║     • Fast access (LIFO)                          ║   ║  └──────────────────────┘  ║   ║     ║
║                                                   ║   ╚════════════════════════════╝   ║     ║
║                                                   ║                                    ║     ║
║                                                   ║   • Actual object data             ║     ║
║                                                   ║   • Managed by GC                  ║     ║
║                                                   ║   • Slower access                  ║     ║
║                                                   ╚════════════════════════════════════╝     ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### Phase 2: Object Usage 

**Definition**: Object usage phase is when the object is actively referenced and utilized - methods are invoked, fields are accessed/modified, and the object participates in program logic through its reference variable.

```java
s1.display();           // Method invocation
s1.name = "Priya";      // Field modification (if accessible)
String n = s1.name;     // Field access
Student s2 = s1;        // Reference sharing
```

**What Happens During Usage**:
- Reference variable is used to access heap object
- Methods are invoked via reference
- Object state can be modified
- Reference can be shared with other variables

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              OBJECT USAGE OPERATIONS                                         ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                           REFERENCE VARIABLE (s1)                                 ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                          │                                                   ║
║           ┌──────────────────────────────┼──────────────────────────────┐                    ║
║           │                              │                              │                    ║
║           ▼                              ▼                              ▼                    ║
║     ╔═══════════════╗            ╔═══════════════╗            ╔═══════════════╗              ║
║     ║  METHOD CALL  ║            ║  FIELD ACCESS ║            ║  REFERENCE    ║              ║
║     ║               ║            ║               ║            ║  SHARING      ║              ║
║     ╚═══════════════╝            ╚═══════════════╝            ╚═══════════════╝              ║
║           │                              │                              │                    ║
║           ▼                              ▼                              ▼                    ║
║     ┌───────────────┐            ┌───────────────┐            ┌───────────────┐              ║
║     │ s1.display()  │            │ s1.name       │            │ s2 = s1       │              ║
║     │ s1.setName()  │            │ s1.rollNo     │            │ (same object) │              ║
║     └───────────────┘            └───────────────┘            └───────────────┘              ║
║                                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                           REFERENCE SHARING EXAMPLE                                          ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║      STACK                                         HEAP                                      ║
║     ╔══════════════╗                            ╔═══════════════════════════╗                ║
║     ║              ║                            ║                           ║                ║
║     ║  s1 ═══════════════════════════════════════>  ╔═══════════════════╗   ║                ║
║     ║              ║                            ║   ║  Student Object   ║   ║                ║
║     ║  s2 ═══════════════════════════════════════>  ║  name: "Rahul"    ║   ║                ║
║     ║              ║                            ║   ║  rollNo: 101      ║   ║                ║
║     ╚══════════════╝                            ║   ╚═══════════════════╝   ║                ║
║                                                 ║                           ║                ║
║     Both s1 and s2 point to                     ╚═══════════════════════════╝                ║
║     the SAME object in heap!                                                                 ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### Phase 3: Object Becomes Unreachable 

**Definition**: An object becomes unreachable (eligible for Garbage Collection) when there are no active references pointing to it from the root set (stack variables, static fields, JNI references). The object still exists in memory but cannot be accessed by any code.

**4 Ways Object Becomes Unreachable**:

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         4 WAYS TO MAKE OBJECT UNREACHABLE                                    ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║  ╔════════════════════════════════════════════════════════════════════════════════════════╗  ║
║  ║  WAY 1: NULLIFYING REFERENCE                                                           ║  ║
║  ╠════════════════════════════════════════════════════════════════════════════════════════╣  ║
║  ║                                                                                        ║  ║
║  ║    BEFORE                              AFTER                                           ║  ║
║  ║    ══════                              ═════                                           ║  ║
║  ║    s1 ────────> [Object]               s1 ────> null                                   ║  ║
║  ║                                                  ✗                                     ║  ║
║  ║                                        [Object] ← UNREACHABLE! (Eligible for GC)       ║  ║
║  ║                                                                                        ║  ║
║  ║    Code: s1 = null;                                                                    ║  ║
║  ╚════════════════════════════════════════════════════════════════════════════════════════╝  ║
║                                                                                              ║
║  ╔════════════════════════════════════════════════════════════════════════════════════════╗  ║
║  ║  WAY 2: REASSIGNING REFERENCE                                                          ║  ║
║  ╠════════════════════════════════════════════════════════════════════════════════════════╣  ║
║  ║                                                                                        ║  ║
║  ║    BEFORE                              AFTER                                           ║  ║
║  ║    ══════                              ═════                                           ║  ║
║  ║    s1 ────────> [Object1]              s1 ─────────────────┐                           ║  ║
║  ║    s2 ────────> [Object2]                                  ▼                           ║  ║
║  ║                                        [Object1] ← UNREACHABLE!                        ║  ║
║  ║                                        s2 ────────> [Object2]                          ║  ║
║  ║                                                                                        ║  ║
║  ║    Code: s1 = s2;  // Object1 now unreachable                                          ║  ║
║  ╚════════════════════════════════════════════════════════════════════════════════════════╝  ║
║                                                                                              ║
║  ╔════════════════════════════════════════════════════════════════════════════════════════╗  ║
║  ║  WAY 3: OUT OF SCOPE                                                                   ║  ║
║  ╠════════════════════════════════════════════════════════════════════════════════════════╣  ║
║  ║                                                                                        ║  ║
║  ║    void method() {                                                                     ║  ║
║  ║        Student s1 = new Student();  ←── s1 created in method's stack frame             ║  ║
║  ║        s1.display();                                                                   ║  ║
║  ║    }  ←── Method ends, stack frame destroyed, s1 gone!                                 ║  ║
║  ║                                                                                        ║  ║
║  ║    [Object] ← UNREACHABLE! (No reference exists anymore)                               ║  ║
║  ╚════════════════════════════════════════════════════════════════════════════════════════╝  ║
║                                                                                              ║
║  ╔════════════════════════════════════════════════════════════════════════════════════════╗  ║
║  ║  WAY 4: ANONYMOUS OBJECT                                                               ║  ║
║  ╠════════════════════════════════════════════════════════════════════════════════════════╣  ║
║  ║                                                                                        ║  ║
║  ║    new Student("Rahul", 101).display();                                                ║  ║
║  ║         │                        │                                                     ║  ║
║  ║         │                        └── Method executes                                   ║  ║
║  ║         │                                                                              ║  ║
║  ║         └── Object created but NO reference stored!                                    ║  ║
║  ║                                                                                        ║  ║
║  ║    [Object] ← IMMEDIATELY UNREACHABLE after display() returns!                         ║  ║
║  ╚════════════════════════════════════════════════════════════════════════════════════════╝  ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Code Examples**:

```java
// Way 1: Nullifying Reference
Student s1 = new Student("Rahul", 101);
s1 = null;  // Object eligible for GC

// Way 2: Reassigning Reference
Student s1 = new Student("Rahul", 101);
Student s2 = new Student("Priya", 102);
s1 = s2;  // "Rahul" object eligible for GC

// Way 3: Object Goes Out of Scope
void method() {
    Student s1 = new Student("Rahul", 101);
}  // s1 out of scope, object eligible for GC

// Way 4: Anonymous Object
new Student("Rahul", 101).display();
// Object becomes eligible immediately after use
```

---

### Phase 4: Garbage Collection 

**Definition**: Garbage Collection (GC) is an automatic memory management process where JVM's GC thread identifies unreachable objects, reclaims their memory, and returns it to the heap for future allocations. GC uses mark-sweep-compact or generational algorithms.

**GC Process**:
- **Mark Phase**: GC traverses from root set, marks all reachable objects
- **Sweep Phase**: Unmarked (unreachable) objects are identified
- **Compact Phase**: Memory is compacted to reduce fragmentation (optional)

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              GARBAGE COLLECTION PROCESS                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                          STEP 1: MARK PHASE                                       ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║    ROOT SET                           HEAP                                        ║    ║
║     ║    ════════                           ════                                        ║    ║
║     ║    ┌─────────┐                                                                    ║    ║
║     ║    │ Stack   │──────────────────────> [Object A] ✓ MARKED                         ║    ║
║     ║    │ vars    │                              │                                     ║    ║
║     ║    └─────────┘                              ▼                                     ║    ║
║     ║    ┌─────────┐                        [Object B] ✓ MARKED                         ║    ║
║     ║    │ Static  │                                                                    ║    ║
║     ║    │ fields  │                        [Object C] ✗ NOT MARKED (unreachable)       ║    ║
║     ║    └─────────┘                                                                    ║    ║
║     ║                                       [Object D] ✗ NOT MARKED (unreachable)       ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                          │                                                   ║
║                                          ▼                                                   ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                          STEP 2: SWEEP PHASE                                      ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║    HEAP BEFORE                        HEAP AFTER                                  ║    ║
║     ║    ═══════════                        ══════════                                  ║    ║
║     ║    [Object A] ✓                       [Object A] ✓                                ║    ║
║     ║    [Object B] ✓                       [Object B] ✓                                ║    ║
║     ║    [Object C] ✗  ──────────────────>  [  FREE  ]                                  ║    ║
║     ║    [Object D] ✗  ──────────────────>  [  FREE  ]                                  ║    ║
║     ║                                                                                   ║    ║
║     ║    Unreachable objects are SWEPT (memory reclaimed)                               ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                          │                                                   ║
║                                          ▼                                                   ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                          STEP 3: COMPACT PHASE (Optional)                         ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║    BEFORE COMPACTION                  AFTER COMPACTION                            ║    ║
║     ║    ════════════════                   ══════════════════                          ║    ║
║     ║    [Object A]                         [Object A]                                  ║    ║
║     ║    [  FREE  ]                         [Object B]                                  ║    ║
║     ║    [Object B]           ────────>     [        ]  ← Large contiguous              ║    ║
║     ║    [  FREE  ]                         [  FREE  ]    free space                    ║    ║
║     ║    [  FREE  ]                         [        ]                                  ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Important Points**:
- **Automatic**: JVM decides when to run GC (not programmer)
- **Request Only**: `System.gc()` is just a request, not a command
- **Stop-the-World**: GC may pause application threads temporarily
- **Generational**: Objects are divided into Young and Old generations

```java
// Request GC (not guaranteed to run immediately)
System.gc();
Runtime.getRuntime().gc();
```

---

## Complete Example

```java
class Student {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        System.out.println(" Object CREATED: " + name);
    }
    
    void display() {
        System.out.println("📖 " + name + " - " + rollNo);
    }
    
    // Called before GC (not guaranteed, deprecated in Java 9+)
    @Override
    protected void finalize() {
        System.out.println("🗑️ Object DESTROYED: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        // ═══════════════════════════════════════════
        // PHASE 1: CREATION
        // ═══════════════════════════════════════════
        System.out.println("═══ PHASE 1: Creating Objects ═══");
        Student s1 = new Student("Rahul", 101);
        Student s2 = new Student("Priya", 102);
        
        // ═══════════════════════════════════════════
        // PHASE 2: USAGE
        // ═══════════════════════════════════════════
        System.out.println("\n═══ PHASE 2: Using Objects ═══");
        s1.display();
        s2.display();
        
        // ═══════════════════════════════════════════
        // PHASE 3: MAKING UNREACHABLE
        // ═══════════════════════════════════════════
        System.out.println("\n═══ PHASE 3: Making Unreachable ═══");
        s1 = null;  // Rahul object eligible for GC
        s2 = null;  // Priya object eligible for GC
        System.out.println("References set to null");
        
        // ═══════════════════════════════════════════
        // PHASE 4: REQUEST GARBAGE COLLECTION
        // ═══════════════════════════════════════════
        System.out.println("\n═══ PHASE 4: Requesting GC ═══");
        System.gc();  // Request GC (not guaranteed)
        
        // Give time for GC to run
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
        
        System.out.println("\n═══ Program Complete ═══");
    }
}
```

**Expected Output**:
```
═══ PHASE 1: Creating Objects ═══
 Object CREATED: Rahul
 Object CREATED: Priya

═══ PHASE 2: Using Objects ═══
 Rahul - 101
 Priya - 102

═══ PHASE 3: Making Unreachable ═══
References set to null

═══ PHASE 4: Requesting GC ═══
 Object DESTROYED: Priya
 Object DESTROYED: Rahul

═══ Program Complete ═══
```

---

## Memory Management

**Definition**: Memory management in Java involves two primary memory areas - **Heap** (for objects) and **Stack** (for references and method execution). JVM automatically manages memory allocation and deallocation through Garbage Collection.

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              JAVA MEMORY ARCHITECTURE                                        ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                              JVM MEMORY AREAS                                     ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║   ┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐   ║    ║
║     ║   │    STACK MEMORY     │    │    HEAP MEMORY      │    │   METHOD AREA       │   ║    ║
║     ║   │   (Per Thread)      │    │    (Shared)         │    │   (Shared)          │   ║    ║
║     ║   ├─────────────────────┤    ├─────────────────────┤    ├─────────────────────┤   ║    ║
║     ║   │ • Method frames     │    │ • All objects       │    │ • Class metadata    │   ║    ║
║     ║   │ • Local variables   │    │ • Instance vars     │    │ • Static variables  │   ║    ║
║     ║   │ • References        │    │ • Arrays            │    │ • Method code       │   ║    ║
║     ║   │ • Primitives        │    │ • String pool       │    │ • Constant pool     │   ║    ║
║     ║   └─────────────────────┘    └─────────────────────┘    └─────────────────────┘   ║    ║
║     ║           │                           ▲                                           ║    ║
║     ║           │                           │                                           ║    ║
║     ║           └───────────────────────────┘                                           ║    ║
║     ║              References point to Heap objects                                     ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### Heap Memory

**Definition**: Heap memory is the runtime data area where all Java objects and arrays are allocated. It's shared among all threads and managed by the Garbage Collector.

**Characteristics**:
- **Shared**: All threads access the same heap
- **Dynamic**: Size can grow/shrink at runtime
- **GC Managed**: Automatic memory reclamation
- **Slower Access**: Compared to stack (due to dynamic allocation)

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              HEAP MEMORY STRUCTURE                                           ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                              HEAP MEMORY                                          ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║   ╔═══════════════════════════════════════════════════════════════════════════╗   ║    ║
║     ║   ║                     YOUNG GENERATION (~1/3 of Heap)                       ║   ║    ║
║     ║   ╠═══════════════════════════════════════════════════════════════════════════╣   ║    ║
║     ║   ║                                                                           ║   ║    ║
║     ║   ║   ╔═════════════════════════════════════════════════════════════════╗     ║   ║    ║
║     ║   ║   ║                    EDEN SPACE (~80%)                            ║     ║   ║    ║
║     ║   ║   ║   • New objects are created here                                ║     ║   ║    ║
║     ║   ║   ║   • Minor GC cleans this area frequently                        ║     ║   ║    ║
║     ║   ║   ║   • Short-lived objects die here                                ║     ║   ║    ║
║     ║   ║   ╚═════════════════════════════════════════════════════════════════╝     ║   ║    ║
║     ║   ║                              │                                            ║   ║    ║
║     ║   ║              ┌───────────────┴───────────────┐                            ║   ║    ║
║     ║   ║              ▼                               ▼                            ║   ║    ║
║     ║   ║   ╔════════════════════════╗    ╔════════════════════════╗                ║   ║    ║
║     ║   ║   ║   SURVIVOR SPACE 0     ║    ║   SURVIVOR SPACE 1     ║                ║   ║    ║
║     ║   ║   ║   (S0 / From Space)    ║    ║   (S1 / To Space)      ║                ║   ║    ║
║     ║   ║   ║   ~10%                 ║    ║   ~10%                 ║                ║   ║    ║
║     ║   ║   ║   • Objects surviving  ║    ║   • Objects swap       ║                ║   ║    ║
║     ║   ║   ║     Minor GC move here ║    ║     between S0 & S1    ║                ║   ║    ║
║     ║   ║   ╚════════════════════════╝    ╚════════════════════════╝                ║   ║    ║
║     ║   ║                              │                                            ║   ║    ║
║     ║   ╚══════════════════════════════╪════════════════════════════════════════════╝   ║    ║
║     ║                                  │ (After threshold survivals)                    ║    ║
║     ║                                  ▼                                                ║    ║
║     ║   ╔═══════════════════════════════════════════════════════════════════════════╗   ║    ║
║     ║   ║                     OLD GENERATION (~2/3 of Heap)                         ║   ║    ║
║     ║   ║                          (Tenured Space)                                  ║   ║    ║
║     ║   ╠═══════════════════════════════════════════════════════════════════════════╣   ║    ║
║     ║   ║   • Long-lived objects promoted here                                      ║   ║    ║
║     ║   ║   • Major GC (Full GC) cleans this area                                   ║   ║    ║
║     ║   ║   • More expensive GC operation (Stop-the-World)                          ║   ║    ║
║     ║   ╚═══════════════════════════════════════════════════════════════════════════╝   ║    ║
║     ║                                                                                   ║    ║
║     ║   ╔═══════════════════════════════════════════════════════════════════════════╗   ║    ║
║     ║   ║                     METASPACE (Java 8+)                                   ║   ║    ║
║     ║   ║              (Replaced PermGen / Permanent Generation)                    ║   ║    ║
║     ║   ╠═══════════════════════════════════════════════════════════════════════════╣   ║    ║
║     ║   ║   • Class metadata                                                        ║   ║    ║
║     ║   ║   • Method information                                                    ║   ║    ║
║     ║   ║   • Uses native memory (not heap)                                         ║   ║    ║
║     ║   ╚═══════════════════════════════════════════════════════════════════════════╝   ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Object Journey Through Heap**:

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         OBJECT JOURNEY THROUGH GENERATIONS                                   ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   new Object()                                                                               ║
║       │                                                                                      ║
║       ▼                                                                                      ║
║   ╔═══════════════╗     Minor GC      ╔═══════════════╗     Threshold     ╔═══════════════╗  ║
║   ║     EDEN      ║ ════════════════> ║   SURVIVOR    ║ ════════════════> ║      OLD      ║  ║
║   ║    SPACE      ║   (Survives)      ║     SPACE     ║   (Age > 15)      ║  GENERATION   ║  ║
║   ╚═══════════════╝                   ╚═══════════════╝                   ╚═══════════════╝  ║
║         │                                   │                                   │            ║
║         │ Dies                              │ Dies                              │ Dies       ║
║         ▼                                   ▼                                   ▼            ║
║   ╔═══════════════╗                   ╔═══════════════╗                   ╔═══════════════╗  ║
║   ║   Minor GC    ║                   ║   Minor GC    ║                   ║   Major GC    ║  ║
║   ║   (Frequent)  ║                   ║   (Frequent)  ║                   ║   (Full GC)   ║  ║
║   ╚═══════════════╝                   ╚═══════════════╝                   ╚═══════════════╝  ║
║                                                                                              ║
║   ─────────────────────────────────────────────────────────────────────────────────────────  ║
║                                                                                              ║
║   TYPICAL OBJECT LIFESPAN:                                                                   ║
║   • ~98% of objects die young (in Eden)                                                      ║
║   • Only ~2% survive to Old Generation                                                       ║
║   • This is why generational GC is efficient!                                                ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### Stack Memory

**Definition**: Stack memory is a thread-specific memory area that stores method invocation frames, local variables, and references. It follows LIFO (Last-In-First-Out) order.

**Characteristics**:
- **Thread-Private**: Each thread has its own stack
- **LIFO Order**: Last method called, first to complete
- **Fast Access**: Direct memory addressing
- **Auto-Managed**: Memory freed when method returns
- **Fixed Size**: Can cause StackOverflowError if exceeded

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              STACK MEMORY STRUCTURE                                          ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                    THREAD-1 STACK              THREAD-2 STACK                     ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║   ╔═════════════════════════╗          ╔═════════════════════════╗                ║    ║
║     ║   ║    method3() Frame      ║ ← TOP    ║    methodB() Frame      ║ ← TOP          ║    ║
║     ║   ╠═════════════════════════╣          ╠═════════════════════════╣                ║    ║
║     ║   ║  • Local vars           ║          ║  • Local vars           ║                ║    ║
║     ║   ║  • Operand stack        ║          ║  • Operand stack        ║                ║    ║
║     ║   ║  • Return address       ║          ║  • Return address       ║                ║    ║
║     ║   ╚═════════════════════════╝          ╚═════════════════════════╝                ║    ║
║     ║              │                                    │                               ║    ║
║     ║              ▼                                    ▼                               ║    ║
║     ║   ╔═════════════════════════╗          ╔═════════════════════════╗                ║    ║
║     ║   ║    method2() Frame      ║          ║    methodA() Frame      ║                ║    ║
║     ║   ╠═════════════════════════╣          ╠═════════════════════════╣                ║    ║
║     ║   ║  • int x = 10           ║          ║  • String s = "Hi"      ║                ║    ║
║     ║   ║  • Student ref ─────────╬──────────╬──> [Heap Object]        ║                ║    ║
║     ║   ╚═════════════════════════╝          ╚═════════════════════════╝                ║    ║
║     ║              │                                    │                               ║    ║
║     ║              ▼                                    ▼                               ║    ║
║     ║   ╔═════════════════════════╗          ╔═════════════════════════╗                ║    ║
║     ║   ║    main() Frame         ║ ← BOTTOM ║    run() Frame          ║ ← BOTTOM       ║    ║
║     ║   ╠═════════════════════════╣          ╠═════════════════════════╣                ║    ║
║     ║   ║  • String[] args        ║          ║  • Thread context       ║                ║    ║
║     ║   ╚═════════════════════════╝          ╚═════════════════════════╝                ║    ║
║     ║                                                                                   ║    ║
║     ║              ▲                                    ▲                               ║    ║
║     ║              │                                    │                               ║    ║
║     ║         Stack grows                          Stack grows                          ║    ║
║     ║           upward                               upward                             ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Stack Frame Contents**:

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              STACK FRAME ANATOMY                                             ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                         SINGLE STACK FRAME                                        ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║   ╔═══════════════════════════════════════════════════════════════════════════╗   ║    ║
║     ║   ║  LOCAL VARIABLE ARRAY                                                     ║   ║    ║
║     ║   ╠═══════════════════════════════════════════════════════════════════════════╣   ║    ║
║     ║   ║  Index 0: this (for instance methods)                                     ║   ║    ║
║     ║   ║  Index 1: int age = 25         ← Primitive stored directly                ║   ║    ║
║     ║   ║  Index 2: Student s1 = 0x7f8b  ← Reference to heap object                 ║   ║    ║
║     ║   ║  Index 3: double salary = 50000.0                                         ║   ║    ║
║     ║   ╚═══════════════════════════════════════════════════════════════════════════╝   ║    ║
║     ║                                                                                   ║    ║
║     ║   ╔═══════════════════════════════════════════════════════════════════════════╗   ║    ║
║     ║   ║  OPERAND STACK                                                            ║   ║    ║
║     ║   ╠═══════════════════════════════════════════════════════════════════════════╣   ║    ║
║     ║   ║  • Intermediate calculation values                                        ║   ║    ║
║     ║   ║  • Method arguments before invocation                                     ║   ║    ║
║     ║   ║  • Return values                                                          ║   ║    ║
║     ║   ╚═══════════════════════════════════════════════════════════════════════════╝   ║    ║
║     ║                                                                                   ║    ║
║     ║   ╔═══════════════════════════════════════════════════════════════════════════╗   ║    ║
║     ║   ║  FRAME DATA                                                               ║   ║    ║
║     ║   ╠═══════════════════════════════════════════════════════════════════════════╣   ║    ║
║     ║   ║  • Return address (where to go after method completes)                    ║   ║    ║
║     ║   ║  • Reference to runtime constant pool                                     ║   ║    ║
║     ║   ║  • Exception handler information                                          ║   ║    ║
║     ║   ╚═══════════════════════════════════════════════════════════════════════════╝   ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### Stack vs Heap Comparison

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              STACK vs HEAP COMPARISON                                        ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔════════════════════════════════════╦════════════════════════════════════╗              ║
║     ║           STACK MEMORY             ║            HEAP MEMORY             ║              ║
║     ╠════════════════════════════════════╬════════════════════════════════════╣              ║
║     ║                                    ║                                    ║              ║
║     ║  • Thread-private                  ║  • Shared across threads           ║              ║
║     ║                                    ║                                    ║              ║
║     ║  • Stores: References, primitives, ║  • Stores: Objects, arrays,        ║              ║
║     ║    method frames                   ║    instance variables              ║              ║
║     ║                                    ║                                    ║              ║
║     ║  • LIFO order                      ║  • No particular order             ║              ║
║     ║                                    ║                                    ║              ║
║     ║  • Fast allocation/deallocation    ║  • Slower (GC managed)             ║              ║
║     ║                                    ║                                    ║              ║
║     ║  • Auto-freed when method returns  ║  • GC frees unreachable objects    ║              ║
║     ║                                    ║                                    ║              ║
║     ║  • Fixed size per thread           ║  • Dynamic size (can grow/shrink)  ║              ║
║     ║                                    ║                                    ║              ║
║     ║  • StackOverflowError if full      ║  • OutOfMemoryError if full        ║              ║
║     ║                                    ║                                    ║              ║
║     ║  • Smaller (few MB)                ║  • Larger (GB possible)            ║              ║
║     ║                                    ║                                    ║              ║
║     ╚════════════════════════════════════╩════════════════════════════════════╝              ║
║                                                                                              ║
║     EXAMPLE:                                                                                 ║
║     ─────────────────────────────────────────────────────────────────────────────            ║
║                                                                                              ║
║     void method() {                                                                          ║
║         int x = 10;                    // x stored in STACK (primitive)                      ║
║         Student s = new Student();     // s (reference) in STACK, object in HEAP             ║
║     }                                                                                        ║
║                                                                                              ║
║        STACK                                    HEAP                                         ║
║     ╔══════════════╗                        ╔════════════════════╗                           ║
║     ║  x = 10      ║                        ║                    ║                           ║
║     ║  s = 0x7f8b ═╬════════════════════════╬══> [Student Obj]   ║                           ║
║     ╚══════════════╝                        ╚════════════════════╝                           ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Garbage Collection

**Definition**: Garbage Collection (GC) is Java's automatic memory management mechanism that identifies and removes unreachable objects from heap memory, preventing memory leaks and freeing developers from manual memory management.

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              GARBAGE COLLECTION OVERVIEW                                     ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                         WHAT IS GARBAGE COLLECTION?                               ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║   PROBLEM (Without GC - like C/C++):                                              ║    ║
║     ║   ┌─────────────────────────────────────────────────────────────────────────┐     ║    ║
║     ║   │  • Manual memory allocation (malloc)                                    │     ║    ║
║     ║   │  • Manual deallocation (free)                                           │     ║    ║
║     ║   │  • Memory leaks if forgot to free                                       │     ║    ║
║     ║   │  • Dangling pointers if freed too early                                 │     ║    ║
║     ║   │  • Double-free bugs                                                     │     ║    ║
║     ║   └─────────────────────────────────────────────────────────────────────────┘     ║    ║
║     ║                                    │                                              ║    ║
║     ║                                    ▼                                              ║    ║
║     ║   SOLUTION (Java GC):                                                             ║    ║
║     ║   ┌─────────────────────────────────────────────────────────────────────────┐     ║    ║
║     ║   │  • Automatic memory reclamation                                         │     ║    ║
║     ║   │  • No memory leaks (for heap objects)                                   │     ║    ║
║     ║   │  • No dangling references                                               │     ║    ║
║     ║   │  • Developer focuses on logic, not memory                               │     ║    ║
║     ║   └─────────────────────────────────────────────────────────────────────────┘     ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### GC Eligibility Rules

**Definition**: An object becomes eligible for garbage collection when it has no active references from the root set (stack variables, static fields, JNI references).

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              GC ELIGIBILITY FLOWCHART                                        ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                    IS OBJECT ELIGIBLE FOR GC?                                     ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                          │                                                   ║
║                                          ▼                                                   ║
║                              ╔═══════════════════════╗                                       ║
║                              ║  Any active reference ║                                       ║
║                              ║  pointing to object?  ║                                       ║
║                              ╚═══════════════════════╝                                       ║
║                                    │           │                                             ║
║                              YES   │           │   NO                                        ║
║                                    ▼           ▼                                             ║
║                         ╔═══════════════╗  ╔═══════════════╗                                 ║
║                         ║  NOT ELIGIBLE ║  ║   ELIGIBLE    ║                                 ║
║                         ║   for GC      ║  ║    for GC     ║                                 ║
║                         ╚═══════════════╝  ╚═══════════════╝                                 ║
║                                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                              TRICKY SCENARIOS                                                ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   SCENARIO 1: Multiple References                                                            ║
║   ─────────────────────────────────────────────────────────────────────────────────────      ║
║                                                                                              ║
║   Student s1 = new Student("Rahul");    // Object created, s1 points to it                   ║
║   Student s2 = s1;                      // s2 also points to same object                     ║
║   Student s3 = s1;                      // s3 also points to same object                     ║
║                                                                                              ║
║       STACK                                    HEAP                                          ║
║     ╔══════════════╗                        ╔═════════════════════╗                          ║
║     ║  s1 ═════════╬════════════════════════╬══>                  ║                          ║
║     ║  s2 ═════════╬════════════════════════╬══> [Student Object] ║  3 references!           ║
║     ║  s3 ═════════╬════════════════════════╬══>   "Rahul"        ║  NOT eligible for GC     ║
║     ╚══════════════╝                        ╚═════════════════════╝                          ║
║                                                                                              ║
║   s1 = null;  // Still 2 references (s2, s3) → NOT eligible                                  ║
║   s2 = null;  // Still 1 reference (s3) → NOT eligible                                       ║
║   s3 = null;  // NO references → ELIGIBLE for GC!                                            ║
║                                                                                              ║
║   ─────────────────────────────────────────────────────────────────────────────────────      ║
║                                                                                              ║
║   SCENARIO 2: Reference Reassignment                                                         ║
║   ─────────────────────────────────────────────────────────────────────────────────────      ║
║                                                                                              ║
║   Student s1 = new Student("Rahul");   // Object1 created                                    ║
║   Student s2 = new Student("Priya");   // Object2 created                                    ║
║   s2 = new Student("Amit");            // Object2 ("Priya") is now ELIGIBLE!                 ║
║                                                                                              ║
║   ─────────────────────────────────────────────────────────────────────────────────────      ║
║                                                                                              ║
║   SCENARIO 3: Island of Isolation (Circular Reference)                                       ║
║   ─────────────────────────────────────────────────────────────────────────────────────      ║
║                                                                                              ║
║   class Node { Node next; }                                                                  ║
║                                                                                              ║
║   Node a = new Node();                                                                       ║
║   Node b = new Node();                                                                       ║
║   a.next = b;                          // a points to b                                      ║
║   b.next = a;                          // b points to a (circular!)                          ║
║                                                                                              ║
║       STACK                                    HEAP                                          ║
║     ╔══════════════╗                     ╔═══════════╗      ╔═══════════╗                    ║
║     ║  a ══════════╬═════════════════════╬══> [Node] ╠══════╬══> [Node] ║                    ║
║     ║  b ══════════╬═════════════════════╬══════════════════╬══>        ║                    ║
║     ╚══════════════╝                     ╚═══════════╝ ◄════╚═══════════╝                    ║
║                                                ▲                  │                          ║
║                                                └──────────────────┘                          ║
║                                                                                              ║
║   a = null;                                                                                  ║
║   b = null;   // BOTH objects become ELIGIBLE! (Island of Isolation)                         ║
║               // Java GC handles circular references correctly!                              ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

**Code Example**:

```java
Student s1 = new Student("Rahul", 101);
Student s2 = new Student("Priya", 102);
Student s3 = s1;

s1 = null;  // Object still referenced by s3 (NOT eligible)
s3 = null;  // Now "Rahul" object eligible (no references)

s2 = new Student("Amit", 103);  // "Priya" object becomes eligible
```

---

### Types of Garbage Collectors

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              TYPES OF GARBAGE COLLECTORS                                     ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   ╔═══════════════════════════════════════════════════════════════════════════════════════╗  ║
║   ║  COLLECTOR          │  BEST FOR                  │  CHARACTERISTICS                   ║  ║
║   ╠═══════════════════════════════════════════════════════════════════════════════════════╣  ║
║   ║                     │                            │                                    ║  ║
║   ║  Serial GC          │  Single-threaded apps,     │  • Single GC thread                ║  ║
║   ║ (-XX:+UseSerialGC)  │  Small heaps               │  • Stop-the-world                  ║  ║
║   ║                     │                            │  • Simple, low overhead            ║  ║
║   ║                     │                            │                                    ║  ║
║   ╠═══════════════════════════════════════════════════════════════════════════════════════╣  ║
║   ║                     │                            │                                    ║  ║
║   ║  Parallel GC        │  Throughput-focused,       │  • Multiple GC threads             ║  ║
║   ║ (-XX:+UseParallelGC)│  Batch processing          │  • Stop-the-world                  ║  ║
║   ║                     │                            │  • Good for multi-core             ║  ║
║   ║                     │                            │                                    ║  ║
║   ╠═══════════════════════════════════════════════════════════════════════════════════════╣  ║
║   ║                     │                            │                                    ║  ║
║   ║  G1 GC (Default)    │  Large heaps,              │  • Divides heap into regions       ║  ║
║   ║  (-XX:+UseG1GC)     │  Low latency               │  • Concurrent marking              ║  ║
║   ║                     │                            │  • Predictable pause times         ║  ║
║   ║                     │                            │                                    ║  ║
║   ╠═══════════════════════════════════════════════════════════════════════════════════════╣  ║
║   ║                     │                            │                                    ║  ║
║   ║  ZGC                │  Very large heaps,         │  • Sub-millisecond pauses          ║  ║
║   ║  (-XX:+UseZGC)      │  Ultra-low latency         │  • Concurrent                      ║  ║
║   ║                     │                            │  • Scalable to TB heaps            ║  ║
║   ║                     │                            │                                    ║  ║
║   ╚═══════════════════════════════════════════════════════════════════════════════════════╝  ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

### Requesting Garbage Collection

```java
// Method 1: Using System class
System.gc();

// Method 2: Using Runtime class
Runtime.getRuntime().gc();
```

**Important**: These are just **requests**, not commands! JVM decides when to actually run GC.

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              System.gc() - THE TRUTH                                         ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                                                                                   ║    ║
║     ║      System.gc()  ═══════════════>  JVM DECIDES  ═══════════════>  ?              ║    ║
║     ║                                                                                   ║    ║
║     ║                                    ╔═══════════════╗                              ║    ║
║     ║                                    ║   May run GC  ║                              ║    ║
║     ║                                    ╠═══════════════╣                              ║    ║
║     ║                                    ║  May NOT run  ║                              ║    ║
║     ║                                    ║  GC at all!   ║                              ║    ║
║     ║                                    ╚═══════════════╝                              ║    ║
║     ║                                                                                   ║    ║
║     ║   WHY?                                                                            ║    ║
║     ║   • JVM knows better when GC is needed                                            ║    ║
║     ║   • Calling gc() frequently can HURT performance                                  ║    ║
║     ║   • JVM optimizes GC timing based on heap usage                                   ║    ║
║     ║                                                                                   ║    ║
║     ║   BEST PRACTICE: Let JVM handle GC automatically!                                 ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## finalize() Method

**Definition**: `finalize()` is a method in the Object class that **may** be called by the Garbage Collector before reclaiming an object's memory. It was intended for cleanup operations but is **deprecated** and **not recommended** in modern Java.

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              finalize() METHOD                                               ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                         finalize() LIFECYCLE                                      ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║   ╔═══════════════╗     ╔═══════════════╗     ╔═══════════════╗     ╔══════════╗  ║    ║
║     ║   ║    Object     ║     ║   Object      ║     ║  finalize()   ║     ║  Memory  ║  ║    ║
║     ║   ║   Unreachable ║ ══> ║   Marked      ║ ══> ║   Called      ║ ══> ║  Freed   ║  ║    ║
║     ║   ║               ║     ║   for GC      ║     ║   (maybe)     ║     ║          ║  ║    ║
║     ║   ╚═══════════════╝     ╚═══════════════╝     ╚═══════════════╝     ╚══════════╝  ║    ║
║     ║                                                      │                            ║    ║
║     ║                                                      │                            ║    ║
║     ║                                               NOT GUARANTEED!                     ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                         WHY finalize() IS PROBLEMATIC                             ║    ║
║     ╠═══════════════════════════════════════════════════════════════════════════════════╣    ║
║     ║                                                                                   ║    ║
║     ║    NOT GUARANTEED to be called                                                    ║    ║
║     ║    NO TIMING guarantee (may run much later)                                       ║    ║
║     ║    Called only ONCE per object (even if object is "resurrected")                  ║    ║
║     ║    SLOWS DOWN garbage collection                                                  ║    ║
║     ║    Can cause memory leaks if finalize() keeps running                             ║    ║
║     ║    DEPRECATED since Java 9                                                        ║    ║
║     ║                                                                                   ║    ║
║     ╚═══════════════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

### Syntax

```java
class Student {
    String name;
    
    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Object " + name + " is being destroyed");
            // Cleanup code (close files, release resources)
        } finally {
            super.finalize();  // Always call parent's finalize
        }
    }
}
```

### Modern Alternatives

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         MODERN ALTERNATIVES TO finalize()                                    ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   ╔════════════════════════════════════════════════════════════════════════════════════╗     ║
║   ║  ALTERNATIVE 1: try-with-resources (RECOMMENDED)                                   ║     ║
║   ╠════════════════════════════════════════════════════════════════════════════════════╣     ║
║   ║                                                                                    ║     ║
║   ║  // AutoCloseable interface                                                        ║     ║
║   ║  try (FileInputStream fis = new FileInputStream("file.txt")) {                     ║     ║
║   ║      // Use resource                                                               ║     ║
║   ║  }  // Automatically closed here!                                                  ║     ║
║   ║                                                                                    ║     ║
║   ╚════════════════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                              ║
║   ╔════════════════════════════════════════════════════════════════════════════════════╗     ║
║   ║  ALTERNATIVE 2: Cleaner API (Java 9+)                                              ║     ║
║   ╠════════════════════════════════════════════════════════════════════════════════════╣     ║
║   ║                                                                                    ║     ║
║   ║  Cleaner cleaner = Cleaner.create();                                               ║     ║
║   ║  cleaner.register(object, cleanupAction);                                          ║     ║
║   ║                                                                                    ║     ║
║   ╚════════════════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                              ║
║   ╔════════════════════════════════════════════════════════════════════════════════════╗     ║
║   ║  ALTERNATIVE 3: Explicit close() method                                            ║     ║
║   ╠════════════════════════════════════════════════════════════════════════════════════╣     ║
║   ║                                                                                    ║     ║
║   ║  DatabaseConnection conn = new DatabaseConnection();                               ║     ║
║   ║  try {                                                                             ║     ║
║   ║      conn.query("SELECT * FROM users");                                            ║     ║
║   ║  } finally {                                                                       ║     ║
║   ║      conn.close();  // Always close in finally block                               ║     ║
║   ║  }                                                                                 ║     ║
║   ║                                                                                    ║     ║
║   ╚════════════════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Real-World Example: Resource Management

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         DATABASE CONNECTION LIFECYCLE                                        ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║   ╔═══════════════╗     ╔═══════════════╗     ╔═══════════════╗     ╔═══════════════╗        ║
║   ║    CREATE     ║     ║     USE       ║     ║    CLOSE      ║     ║   ELIGIBLE    ║        ║
║   ║  Connection   ║ ══> ║   Execute     ║ ══> ║  Connection   ║ ══> ║    for GC     ║        ║
║   ║               ║     ║   Queries     ║     ║  (Release)    ║     ║               ║        ║
║   ╚═══════════════╝     ╚═══════════════╝     ╚═══════════════╝     ╚═══════════════╝        ║
║         │                      │                      │                     │                ║
║         ▼                      ▼                      ▼                     ▼                ║
║   ┌───────────────┐    ┌───────────────┐    ┌───────────────┐    ┌───────────────┐           ║
║   │ new DBConn()  │    │ conn.query()  │    │ conn.close()  │    │ conn = null   │           ║
║   │ Opens socket  │    │ Send SQL      │    │ Close socket  │    │ GC reclaims   │           ║
║   │ Authenticates │    │ Get results   │    │ Free handles  │    │ memory        │           ║
║   └───────────────┘    └───────────────┘    └───────────────┘    └───────────────┘           ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

### Bad Practice (Using finalize):

```java
class DatabaseConnection {
    String dbName;
    private Connection conn;
    
    DatabaseConnection(String dbName) {
        this.dbName = dbName;
        System.out.println(" Opening connection to " + dbName);
        // conn = DriverManager.getConnection(...);
    }
    
    void query(String sql) {
        System.out.println(" Executing: " + sql);
    }
    
    void close() {
        System.out.println(" Closing connection to " + dbName);
        // conn.close();
    }
    
    //  BAD: Relying on finalize() for cleanup
    @Override
    protected void finalize() {
        System.out.println(" Finalizing connection to " + dbName);
        close();  // May never be called!
    }
}

// Usage (BAD)
DatabaseConnection conn = new DatabaseConnection("MySQL");
conn.query("SELECT * FROM users");
conn = null;  // Hoping finalize() will close connection - WRONG!
System.gc(); // Not guaranteed!
```

### Good Practice (Using try-with-resources):

```java
class DatabaseConnection implements AutoCloseable {
    String dbName;
    private Connection conn;
    
    DatabaseConnection(String dbName) {
        this.dbName = dbName;
        System.out.println(" Opening connection to " + dbName);
    }
    
    void query(String sql) {
        System.out.println(" Executing: " + sql);
    }
    
    //  GOOD: Implement AutoCloseable
    @Override
    public void close() {
        System.out.println(" Closing connection to " + dbName);
    }
}

// Usage (GOOD) - try-with-resources
try (DatabaseConnection conn = new DatabaseConnection("MySQL")) {
    conn.query("SELECT * FROM users");
    conn.query("SELECT * FROM products");
}  //  Automatically closed here, guaranteed!

// Output:
//  Opening connection to MySQL
//  Executing: SELECT * FROM users
//  Executing: SELECT * FROM products
//  Closing connection to MySQL
```

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                         COMPARISON: finalize() vs try-with-resources                         ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔════════════════════════════════════╦════════════════════════════════════╗              ║
║     ║     finalize() (BAD)               ║   try-with-resources (GOOD)        ║              ║
║     ╠════════════════════════════════════╬════════════════════════════════════╣              ║
║     ║                                    ║                                    ║              ║
║     ║   Not guaranteed to run            ║   ALWAYS runs                      ║              ║
║     ║                                    ║                                    ║              ║
║     ║   Unknown timing                   ║  Runs immediately when             ║              ║
║     ║                                    ║     try block exits                ║              ║
║     ║                                    ║                                    ║              ║
║     ║   Slows down GC                    ║  No GC overhead                    ║              ║
║     ║                                    ║                                    ║              ║
║     ║   Resource leaks possible          ║  No resource leaks                 ║              ║
║     ║                                    ║                                    ║              ║
║     ║   Deprecated in Java 9+            ║  Recommended approach              ║              ║
║     ║                                    ║                                    ║              ║
║     ╚════════════════════════════════════╩════════════════════════════════════╝              ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Best Practices

###  Do:
1. **Nullify** large objects after use
2. **Close resources** explicitly (files, connections)
3. **Use try-with-resources** for AutoCloseable
4. **Avoid memory leaks** (static collections)
5. **Profile memory** usage

###  Don't:
1. **Rely on finalize()** for cleanup
2. **Call System.gc()** frequently (JVM knows better)
3. **Create unnecessary objects** in loops
4. **Hold references** longer than needed

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

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                           OBJECT LIFECYCLE FLOWCHART                             ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║    ┌─────────────────────────────────────────────────────────────────────────┐   ║
║    │                        PHASE 1: CREATION                                │   ║
║    └─────────────────────────────────────────────────────────────────────────┘   ║
║                                      │                                           ║
║                                      ▼                                           ║
║              ╔═══════════════════════════════════════════════╗                   ║
║              ║           new Student("Rahul", 101)           ║                   ║
║              ╚═══════════════════════════════════════════════╝                   ║
║                                      │                                           ║
║           ┌──────────────────────────┼──────────────────────────┐                ║
║           ▼                          ▼                          ▼                ║
║   ╔═══════════════╗        ╔═══════════════════╗       ╔═══════════════════╗     ║
║   ║ Class Loaded  ║   ──>  ║  Heap Memory      ║  ──>  ║   Constructor     ║     ║
║   ║  (if needed)  ║        ║   Allocated       ║       ║    Executes       ║     ║
║   ╚═══════════════╝        ╚═══════════════════╝       ╚═══════════════════╝     ║
║                                      │                                           ║
║                                      ▼                                           ║
║                     ╔════════════════════════════════════╗                       ║
║                     ║   Reference Returned to Stack      ║                       ║
║                     ║      s1 ──────> [Object]           ║                       ║
║                     ╚════════════════════════════════════╝                       ║
║                                      │                                           ║
║    ┌─────────────────────────────────────────────────────────────────────────┐   ║
║    │                         PHASE 2: USAGE                                  │   ║
║    └─────────────────────────────────────────────────────────────────────────┘   ║
║                                      │                                           ║
║                                      ▼                                           ║
║              ╔═══════════════════════════════════════════════╗                   ║
║              ║            Object is ACTIVE                   ║                   ║
║              ║    • s1.display()    - Method calls           ║                   ║
║              ║    • s1.name = "X"   - Field access           ║                   ║
║              ║    • s2 = s1         - Reference sharing      ║                   ║
║              ╚═══════════════════════════════════════════════╝                   ║
║                                      │                                           ║
║    ┌─────────────────────────────────────────────────────────────────────────┐   ║
║    │                       PHASE 3: DESTRUCTION                              │   ║
║    └─────────────────────────────────────────────────────────────────────────┘   ║
║                                      │                                           ║
║         ┌────────────────────────────┼────────────────────────┐                  ║
║         ▼                            ▼                        ▼                  ║
║  ╔═════════════════╗      ╔═══════════════════╗     ╔═══════════════════╗        ║
║  ║   s1 = null     ║      ║   s1 = new Obj()  ║     ║  Method ends      ║        ║
║  ║  (Nullify)      ║      ║   (Reassign)      ║     ║  (Out of Scope)   ║        ║
║  ╚═════════════════╝      ╚═══════════════════╝     ╚═══════════════════╝        ║
║         │                            │                        │                  ║
║         └────────────────────────────┼────────────────────────┘                  ║
║                                      ▼                                           ║
║              ╔═══════════════════════════════════════════════╗                   ║
║              ║        Object ELIGIBLE for GC                 ║                   ║
║              ║          (No active references)               ║                   ║
║              ╚═══════════════════════════════════════════════╝                   ║
║                                      │                                           ║
║                                      ▼                                           ║
║              ╔═══════════════════════════════════════════════╗                   ║
║              ║          GARBAGE COLLECTOR                    ║                   ║
║              ║    • Marks unreachable objects                ║                   ║
║              ║    • Calls finalize() (optional)              ║                   ║
║              ║    • Reclaims heap memory                     ║                   ║
║              ╚═══════════════════════════════════════════════╝                   ║
║                                      │                                           ║
║                                      ▼                                           ║
║              ╔═══════════════════════════════════════════════╗                   ║
║              ║            MEMORY FREED                       ║                   ║
║              ╚═══════════════════════════════════════════════╝                   ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                              MEMORY LAYOUT                                       ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║     STACK MEMORY                              HEAP MEMORY                        ║
║    ╔══════════════════╗                    ╔═════════════════════════════╗       ║
║    ║                  ║                    ║                             ║       ║
║    ║   s1 ────────────╬───────────────────>║  ┌─────────────────────┐    ║       ║
║    ║  [Reference]     ║                    ║  │   Student Object    │    ║       ║
║    ║                  ║                    ║  ├─────────────────────┤    ║       ║
║    ║   s2 ────────────╬───────────────────>║  │  name: "Rahul"      │    ║       ║
║    ║  [Reference]     ║                    ║  │  rollNo: 101        │    ║       ║
║    ║                  ║                    ║  └─────────────────────┘    ║       ║
║    ╚══════════════════╝                    ║                             ║       ║
║                                            ╚═════════════════════════════╝       ║
║                                                                                  ║
║     References (pointers)                    Actual objects live here            ║
║     Local variables                          Managed by Garbage Collector        ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                          LIFECYCLE SUMMARY                                       ║
║                                                                                  ║
║       ╔═══════════╗      ╔═══════════╗      ╔═══════════╗      ╔═══════════╗     ║
║       ║   BIRTH   ║ ───> ║   LIFE    ║ ───> ║   DEATH   ║ ───> ║  REBIRTH  ║     ║
║       ║   (new)   ║      ║  (usage)  ║      ║   (GC)    ║      ║ (memory)  ║     ║
║       ╚═══════════╝      ╚═══════════╝      ╚═══════════╝      ╚═══════════╝     ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
