# OBJECT LIFECYCLE

## Concept Introduction

**Object Lifecycle = Creation → Usage → Destruction**

- Creation phase: Memory is allocated in the heap using the new keyword and the constructor initializes the object.
- Usage phase: The object is accessed via a reference variable and methods are invoked on it.
- Destruction phase: The Garbage Collector automatically reclaims memory when the object has no active references.

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

- **Step 1**: Class Loading - ClassLoader loads .class file (if not already loaded)
- **Step 2**: Memory Allocation - JVM allocates memory in Heap based on object size
- **Step 3**: Default Initialization - All instance variables get default values (null, 0, false)
- **Step 4**: Explicit Initialization - Instance initializers and variable assignments execute
- **Step 5**: Constructor Execution - Constructor runs to set actual values
- **Step 6**: Reference Return - Memory address (reference) is returned and stored in Stack

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                                   STACK ↔ HEAP RELATIONSHIP                                  ║
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

**What Happens During Usage**:

- Reference variable is used to access heap object
- Methods are invoked via reference
- Object state can be modified
- Reference can be shared with other variables

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                                  OBJECT USAGE OPERATIONS                                     ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║     ╔═══════════════════════════════════════════════════════════════════════════════════╗    ║
║     ║                              REFERENCE VARIABLE (s1)                              ║    ║
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
║                                  REFERENCE SHARING EXAMPLE                                   ║
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

### 1. By Nullifying the Reference

**Definition**: If a reference variable is explicitly assigned null, it breaks the link to the object. If no other references point to that object, it becomes unreachable.

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              WAY 1: NULLIFYING REFERENCE                                     ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║          BEFORE                                        AFTER                                 ║
║          ══════                                        ═════                                 ║
║                                                                                              ║
║    Stack           Heap                          Stack           Heap                        ║
║   ┌──────┐       ┌────────┐                     ┌──────┐       ┌────────┐                    ║
║   │  s1  │ ────> │ Object │                     │  s1  │ ────>  null    │                    ║
║   └──────┘       └────────┘                     └──────┘       ┌────────┐                    ║
║                                                                │ Object │ ✗ UNREACHABLE      ║
║                                                                └────────┘                    ║
║                                                                                              ║
║    Code: Student s1 = new Student();                                                         ║
║          s1 = null;                                                                          ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

### 2. By Reassigning the Reference

**Definition**: When a reference variable is reassigned to point to another object, the connection to the previous object is lost. If the previous object has no other active references, it becomes eligible for GC.

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              WAY 2: REASSIGNING REFERENCE                                    ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║          BEFORE                                        AFTER                                 ║
║          ══════                                        ═════                                 ║
║                                                                                              ║
║    Stack           Heap                          Stack           Heap                        ║
║   ┌──────┐       ┌─────────┐                    ┌──────┐       ┌─────────┐                   ║
║   │  s1  │ ────> │ Object1 │                    │  s1  │ ────┐ │ Object1 │ ✗ UNREACHABLE     ║
║   └──────┘       └─────────┘                    └──────┘     │ └─────────┘                   ║
║   ┌──────┐       ┌─────────┐                    ┌──────┐     │ ┌─────────┐                   ║
║   │  s2  │ ────> │ Object2 │                    │  s2  │ ────┴>│ Object2 │                   ║
║   └──────┘       └─────────┘                    └──────┘       └─────────┘                   ║
║                                                                                              ║
║    Code: Student s1 = new Student();                                                         ║
║          Student s2 = new Student();                                                         ║
║          s1 = s2;                                                                            ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

### 3. By Creating Object Inside a Method (Out of Scope)

**Definition**: References created inside a method are local variables referencing objects in the heap. When the method execution completes, the stack frame is destroyed (popped), and the references are lost. The objects they pointed to become unreachable.

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              WAY 3: OUT OF SCOPE                                             ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║      DURING METHOD EXECUTION                       AFTER METHOD RETURNS                      ║
║      ═══════════════════════                       ════════════════════                      ║
║                                                                                              ║
║    Stack frame        Heap                                         Heap                      ║
║   ┌─────────────┐   ┌────────┐                      Stack frame   ┌────────┐                 ║
║   │ method()    │   │        │                      DESTROYED     │ Object │ ✗ UNREACHABLE   ║
║   │ ┌────────┐  │   │ Object │                                    │        │                 ║
║   │ │ s1     │──┼──>│        │                                    └────────┘                 ║
║   │ └────────┘  │   └────────┘                                                               ║
║   └─────────────┘                                                                            ║
║                                                                                              ║
║    Code: void method() {                                                                     ║
║             Student s1 = new Student();                                                      ║
║          } // s1 goes out of scope here!                                                     ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```

### 4. By Anonymous Object

**Definition**: An object created without assigning its reference to a variable is called an anonymous object. It is used only once (e.g., for a direct method call) and then immediately becomes unreachable.

```
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║                              WAY 4: ANONYMOUS OBJECT                                         ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║           Statement Execution                          Immediately After                     ║
║           ═══════════════════                          ═════════════════                     ║
║                                                                                              ║
║            Code execution                                                                    ║
║                  │                                                                           ║
║                  ▼                                          ┌────────┐                       ║
║      new Student().display();                               │ Object │ ✗ UNREACHABLE         ║
║                  │                                          └────────┘                       ║
║                  │ Creates & uses object                                                     ║
║                  │ No reference stored                                                       ║
║                  ▼                                                                           ║
║             [Method Call]                                                                    ║
║                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
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
- **Request Only**: System.gc() is just a request, not a command
- **Stop-the-World**: GC may pause application threads temporarily
- **Generational**: Objects are divided into Young and Old generations

---

## finalize() Method

**Definition**: The finalize() method is a protected method defined in the java.lang.Object class. It was originally designed to perform cleanup operations (such as closing files, releasing network connections, or cleaning up native memory) on an object before it is permanently removed from memory by the Garbage Collector (GC).

However, finalize() is **fundamentally flawed**, unpredictable, and **deprecated since Java 9**. It is strongly recommended **NOT** to use it in modern Java applications.

### why finalize() is problematic?

1.  **No Guarantee of Execution**: The JVM does not guarantee when, or even if, the finalize() method will be invoked. An object might become unreachable, but if the GC doesn't run (e.g., plenty of heap space), finalize() will never be called.
2.  **Unpredictable Timing**: Even if it runs, there is no control over _when_ it runs. Relying on it for critical resource cleanup (like database connections) can lead to resource exhaustion because the resources might be held for a long time waiting for GC.
3.  **Performance Checkpoint**: Implementing finalize() severely hurts GC performance. Objects with finalizers take longer to allocate and destroy because the GC must register them and later queue them for finalization, requiring at least two GC cycles to reclaim.
4.  **Security Risks**: It can be used to resurrect objects (make them reachable again during destruction) or create security holes if exceptions are thrown during finalization (which are ignored by the JVM).

### Modern Alternatives

Since finalize() is deprecated, Java provides robust and deterministic ways to handle resource cleanup.

#### 1. try-with-resources (Recommended)

This is the standard and most effective way to manage resources. It was introduced in Java 7.

- **How it works**: Any class that implements the java.lang.AutoCloseable interface can be used inside a try(...) block.
- **Benefit**: Java automatically calls the close() method immediately after the try block finishes (whether normally or due to an exception).
- **Why use it**: It guarantees immediate cleanup, preventing resource leaks and keeping memory usage efficient.

#### 2. Cleaner API (Java 9+)

The java.lang.ref.Cleaner class provides a safer, more efficient alternative to finalizers for advanced cleanup scenarios.

- **How it works**: You register an object and a "cleaning action" (state to be cleaned) with a Cleaner. When the object becomes phantom reachable (eligible for collection), the cleaner runs the action.
- **Benefit**: It doesn't resurrect objects and has better performance than finalization, though it still relies on GC timing (async).

#### 3. Explicit close() Method

For classes that hold external resources (like DB connections), always provide a public close() method.

- **How it works**: The developer manually calls close() when done, usually inside a finally block to ensure it runs even if errors occur.
- **Benefit**: Gives the developer full control over exactly _when_ the resource is released.

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

We can **request** using System.gc(), but JVM decides when to actually run GC.

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
