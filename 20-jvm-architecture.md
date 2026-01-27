# 20) JVM ARCHITECTURE

## Concept Introduction

JVM Architecture JVM ke internal structure ko explain karta hai — yeh ek blueprint hai ki JVM kaise kaam karta hai. Jaise ghar ka architecture blueprint hota hai (rooms, kitchen, bathroom), waise hi JVM ka architecture hai (Class Loader, Memory Areas, Execution Engine). JVM architecture samajhna bahut important hai kyunki yeh batata hai ki Java program memory mein kaise load hota hai, kaise execute hota hai, aur kaise memory manage hoti hai. Yeh interview mein bhi bahut pucha jaata hai!

---

## Why This Concept Exists

**Problem:**
- JVM ek complex system hai — kaise samjhe?
- Bytecode execution kaise hota hai internally?
- Memory kaise manage hoti hai?
- Performance optimization kaise hota hai?
- Debugging aur troubleshooting kaise kare?

**Solution (JVM Architecture):**
- Clear separation of concerns
- Modular design — har component ka specific role
- Standardized specification (JVM Spec)
- Understanding architecture helps in:
  - Performance tuning
  - Memory optimization
  - Debugging issues
  - Interview preparation

---

## Definitions

### 🔹 Very Simple Definition
JVM Architecture JVM ke internal components ka blueprint hai — Class Loader, Memory Areas, aur Execution Engine.

### 🔹 College Exam Definition
JVM Architecture defines the internal structure of Java Virtual Machine consisting of three main subsystems: Class Loader Subsystem (loading, linking, initialization), Runtime Data Areas (heap, stack, method area, PC registers, native stacks), and Execution Engine (interpreter, JIT compiler, garbage collector), along with Native Method Interface for C/C++ integration.

### 🔹 Viva Definition
JVM Architecture is the specification of JVM's internal organization comprising: (1) Class Loader Subsystem with three-phase loading (loading via bootstrap/extension/application loaders, linking with verification/preparation/resolution, initialization of static blocks), (2) Runtime Data Areas with heap for objects, stack for method frames, method area for class metadata, PC registers for instruction pointers, and native stacks for JNI calls, (3) Execution Engine with interpreter for bytecode execution, JIT compiler for optimization, and garbage collector for memory management, (4) Native Method Interface (JNI) for native library integration.

### 🔹 Interview Definition
JVM Architecture consists of five major components: (1) Class Loader Subsystem - hierarchical loading (bootstrap for core classes, extension for jre/lib/ext, application for CLASSPATH), linking (bytecode verification, memory allocation, symbolic reference resolution), initialization (static block execution), (2) Runtime Data Areas - heap (young/old generations, GC managed, shared), stack (per-thread, method frames with local variables/operand stack), method area/metaspace (class metadata, static variables, constant pool, shared), PC registers (per-thread instruction pointer), native method stacks (per-thread for JNI), (3) Execution Engine - interpreter (line-by-line bytecode execution), JIT compiler (tiered compilation with C1 client/C2 server compilers for hot code optimization), garbage collector (generational GC algorithms), (4) JNI - bridge to native C/C++ code, (5) Native Method Libraries - platform-specific .dll/.so/.dylib files.

### 🔹 Technical Definition
JVM Architecture implements stack-based virtual machine specification with: (1) Three-tier class loading (delegation model with parent-first loading, custom class loaders possible), (2) Memory model with heap (generational hypothesis with eden/survivor/tenured spaces, concurrent/parallel GC algorithms), stacks (thread-local with stack frames containing local variable array, operand stack, frame data), metaspace (native memory for class metadata replacing PermGen in Java 8+, dynamic sizing), (3) Execution via interpretation or tiered compilation (profiling with C1, aggressive optimization with C2, deoptimization support, on-stack replacement), (4) GC with various algorithms (Serial, Parallel, CMS, G1, ZGC, Shenandoah) implementing mark-sweep-compact or concurrent marking, (5) JNI for bidirectional Java-native calls with type marshalling.

### 🔹 One-line Crisp Definition
JVM Architecture = Class Loader + Memory Areas + Execution Engine + JNI

---

## DIAGRAM: Complete JVM Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JVM ARCHITECTURE (COMPLETE VIEW)                         │
└─────────────────────────────────────────────────────────────────────────────┘

                        ┌──────────────────────┐
                        │   .class files       │
                        │   (Bytecode)         │
                        └──────────┬───────────┘
                                   │
                                   ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │              CLASS LOADER SUBSYSTEM                                   │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  PHASE 1: LOADING                                               │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐  │ │ │
│  │  │  │  Bootstrap ClassLoader                                    │  │ │ │
│  │  │  │  ├─ Loads core Java classes                              │  │ │ │
│  │  │  │  ├─ rt.jar (Java 8) / java.base module (Java 9+)         │  │ │ │
│  │  │  │  ├─ java.lang.*, java.util.*, java.io.*                  │  │ │ │
│  │  │  │  └─ Written in native code (C/C++)                       │  │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘  │ │ │
│  │  │                          ↓ (parent)                              │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐  │ │ │
│  │  │  │  Extension ClassLoader (Platform ClassLoader in Java 9+) │  │ │ │
│  │  │  │  ├─ Loads extension classes                              │  │ │ │
│  │  │  │  ├─ jre/lib/ext directory                                │  │ │ │
│  │  │  │  └─ java.ext.dirs system property                        │  │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘  │ │ │
│  │  │                          ↓ (parent)                              │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐  │ │ │
│  │  │  │  Application ClassLoader (System ClassLoader)            │  │ │ │
│  │  │  │  ├─ Loads application classes                            │  │ │ │
│  │  │  │  ├─ CLASSPATH environment variable                       │  │ │ │
│  │  │  │  ├─ -cp or -classpath option                             │  │ │ │
│  │  │  │  └─ java.class.path system property                      │  │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘  │ │ │
│  │  │                                                                   │ │ │
│  │  │  [Parent Delegation Model: Child asks parent first]              │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  PHASE 2: LINKING                                               │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐  │ │ │
│  │  │  │  2.1 VERIFICATION                                         │  │ │ │
│  │  │  │  ├─ Bytecode format validation                           │  │ │ │
│  │  │  │  ├─ Type checking                                         │  │ │ │
│  │  │  │  ├─ Control flow analysis                                │  │ │ │
│  │  │  │  ├─ Stack verification                                    │  │ │ │
│  │  │  │  └─ Security constraints                                 │  │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘  │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐  │ │ │
│  │  │  │  2.2 PREPARATION                                          │  │ │ │
│  │  │  │  ├─ Allocate memory for static variables                 │  │ │ │
│  │  │  │  ├─ Set default values (0, null, false)                  │  │ │ │
│  │  │  │  └─ No initialization yet                                │  │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘  │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐  │ │ │
│  │  │  │  2.3 RESOLUTION                                           │  │ │ │
│  │  │  │  ├─ Symbolic references → Direct references              │  │ │ │
│  │  │  │  ├─ Class/interface resolution                           │  │ │ │
│  │  │  │  ├─ Field resolution                                      │  │ │ │
│  │  │  │  └─ Method resolution                                     │  │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘  │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  PHASE 3: INITIALIZATION                                        │ │ │
│  │  │  ├─ Execute static initializers                                 │ │ │
│  │  │  ├─ Execute static blocks                                        │ │ │
│  │  │  ├─ Assign actual values to static variables                    │ │ │
│  │  │  └─ Top-down, thread-safe initialization                        │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                                   ↓                                         │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │              RUNTIME DATA AREAS                                       │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  METHOD AREA / METASPACE (Shared across all threads)           │ │ │
│  │  │  ├─ Class metadata (structure, fields, methods)                 │ │ │
│  │  │  ├─ Method bytecode                                             │ │ │
│  │  │  ├─ Runtime constant pool                                        │ │ │
│  │  │  ├─ Static variables                                             │ │ │
│  │  │  ├─ Field data                                                   │ │ │
│  │  │  └─ Method data                                                  │ │ │
│  │  │  [Java 7: PermGen, Java 8+: Metaspace in native memory]         │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  HEAP (Shared across all threads, GC managed)                  │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐ │ │ │
│  │  │  │  YOUNG GENERATION                                         │ │ │ │
│  │  │  │  ┌─────────────────────────────────────────────────────┐ │ │ │ │
│  │  │  │  │  Eden Space                                         │ │ │ │ │
│  │  │  │  │  └─ New objects allocated here                      │ │ │ │ │
│  │  │  │  └─────────────────────────────────────────────────────┘ │ │ │ │
│  │  │  │  ┌──────────────────────┐  ┌──────────────────────┐     │ │ │ │
│  │  │  │  │  Survivor Space 0    │  │  Survivor Space 1    │     │ │ │ │
│  │  │  │  │  (S0 / From)         │  │  (S1 / To)           │     │ │ │ │
│  │  │  │  └──────────────────────┘  └──────────────────────┘     │ │ │ │
│  │  │  │  [Minor GC happens here frequently]                      │ │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘ │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐ │ │ │
│  │  │  │  OLD GENERATION (Tenured)                                │ │ │ │
│  │  │  │  └─ Long-lived objects (survived multiple Minor GCs)     │ │ │ │
│  │  │  │  [Major GC / Full GC happens here]                       │ │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘ │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  STACK (Per thread, LIFO structure)                             │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐ │ │ │
│  │  │  │  Thread 1 Stack                                           │ │ │ │
│  │  │  │  ┌─────────────────────────────────────────────────────┐ │ │ │ │
│  │  │  │  │  Stack Frame 1 (current method)                     │ │ │ │ │
│  │  │  │  │  ├─ Local Variable Array                            │ │ │ │ │
│  │  │  │  │  ├─ Operand Stack                                   │ │ │ │ │
│  │  │  │  │  └─ Frame Data (return address, exception table)   │ │ │ │ │
│  │  │  │  └─────────────────────────────────────────────────────┘ │ │ │ │
│  │  │  │  ┌─────────────────────────────────────────────────────┐ │ │ │ │
│  │  │  │  │  Stack Frame 2 (caller method)                      │ │ │ │ │
│  │  │  │  └─────────────────────────────────────────────────────┘ │ │ │ │
│  │  │  │  ┌─────────────────────────────────────────────────────┐ │ │ │ │
│  │  │  │  │  Stack Frame 3 (main method)                        │ │ │ │ │
│  │  │  │  └─────────────────────────────────────────────────────┘ │ │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘ │ │ │
│  │  │  [StackOverflowError if too deep recursion]                    │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  PC REGISTERS (Program Counter, per thread)                     │ │ │
│  │  │  └─ Holds address of current JVM instruction being executed     │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  NATIVE METHOD STACKS (Per thread)                              │ │ │
│  │  │  └─ For native methods (C/C++) called via JNI                   │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                                   ↓                                         │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │              EXECUTION ENGINE                                         │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  INTERPRETER                                                     │ │ │
│  │  │  ├─ Reads bytecode line-by-line                                 │ │ │
│  │  │  ├─ Interprets each instruction                                 │ │ │
│  │  │  ├─ Executes immediately                                        │ │ │
│  │  │  └─ Slow but starts quickly                                     │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  JIT COMPILER (Just-In-Time)                                    │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐ │ │ │
│  │  │  │  C1 Compiler (Client Compiler)                            │ │ │ │
│  │  │  │  ├─ Fast compilation                                      │ │ │ │
│  │  │  │  ├─ Basic optimizations                                   │ │ │ │
│  │  │  │  └─ Quick startup                                         │ │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘ │ │ │
│  │  │  ┌───────────────────────────────────────────────────────────┐ │ │ │
│  │  │  │  C2 Compiler (Server Compiler)                            │ │ │ │
│  │  │  │  ├─ Aggressive optimizations                              │ │ │ │
│  │  │  │  ├─ Inlining, loop unrolling, dead code elimination      │ │ │ │
│  │  │  │  └─ Peak performance                                      │ │ │ │
│  │  │  └───────────────────────────────────────────────────────────┘ │ │ │
│  │  │  [Tiered Compilation: C1 first, then C2 for hot code]          │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                       │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │  GARBAGE COLLECTOR                                              │ │ │
│  │  │  ├─ Serial GC (single-threaded)                                 │ │ │
│  │  │  ├─ Parallel GC (multi-threaded, throughput)                    │ │ │
│  │  │  ├─ CMS (Concurrent Mark Sweep, low latency)                    │ │ │
│  │  │  ├─ G1 GC (Garbage First, balanced)                             │ │ │
│  │  │  ├─ ZGC (ultra-low latency, large heaps)                        │ │ │
│  │  │  └─ Shenandoah (low pause times)                                │ │ │
│  │  │  [Automatically frees unreachable objects]                      │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │              NATIVE METHOD INTERFACE (JNI)                            │ │ │
│  │  └─ Bridge between Java code and native C/C++ libraries              │ │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                   ↓                                         │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │              NATIVE METHOD LIBRARIES                                  │ │ │
│  │  └─ Platform-specific libraries (.dll / .so / .dylib)                 │ │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```



---

## DIAGRAM: Class Loading Process

```
┌─────────────────────────────────────────────────────┐
│         CLASS LOADING DELEGATION MODEL              │
└─────────────────────────────────────────────────────┘

Request to load: com.myapp.MyClass

STEP 1: Application ClassLoader receives request
        ↓
        Delegates to parent (Extension ClassLoader)
        
STEP 2: Extension ClassLoader receives request
        ↓
        Delegates to parent (Bootstrap ClassLoader)
        
STEP 3: Bootstrap ClassLoader tries to load
        ├─ Searches in rt.jar / java.base
        ├─ Not found (not a core class)
        └─ Returns control to child
        
STEP 4: Extension ClassLoader tries to load
        ├─ Searches in jre/lib/ext
        ├─ Not found (not an extension)
        └─ Returns control to child
        
STEP 5: Application ClassLoader tries to load
        ├─ Searches in CLASSPATH
        ├─ Found! com/myapp/MyClass.class
        └─ Loads the class

┌──────────────────────────────────────┐
│  WHY PARENT DELEGATION?              │
│  ├─ Security: Core classes protected │
│  ├─ Avoid duplicates                 │
│  └─ Consistency                      │
└──────────────────────────────────────┘
```

---

## DIAGRAM: Stack Frame Structure

```
┌─────────────────────────────────────────────────────┐
│         STACK FRAME ANATOMY                         │
└─────────────────────────────────────────────────────┘

METHOD: int add(int a, int b) { return a + b; }

┌───────────────────────────────────────────┐
│         STACK FRAME for add()             │
│                                           │
│  ┌─────────────────────────────────────┐ │
│  │  LOCAL VARIABLE ARRAY               │ │
│  │  ┌───┬───┬───┬───┐                  │ │
│  │  │ 0 │ 1 │ 2 │ 3 │                  │ │
│  │  └───┴───┴───┴───┘                  │ │
│  │    │   │   │   │                    │ │
│  │    │   │   │   └─ (unused)          │ │
│  │    │   │   └─ b = 10                │ │
│  │    │   └─ a = 5                     │ │
│  │    └─ this (if instance method)     │ │
│  └─────────────────────────────────────┘ │
│                                           │
│  ┌─────────────────────────────────────┐ │
│  │  OPERAND STACK (LIFO)               │ │
│  │  ┌─────────┐                        │ │
│  │  │   15    │ ← Top (result)         │ │
│  │  ├─────────┤                        │ │
│  │  │   10    │ (b pushed)             │ │
│  │  ├─────────┤                        │ │
│  │  │    5    │ (a pushed)             │ │
│  │  └─────────┘                        │ │
│  │  [Used for calculations]            │ │
│  └─────────────────────────────────────┘ │
│                                           │
│  ┌─────────────────────────────────────┐ │
│  │  FRAME DATA                         │ │
│  │  ├─ Return address                  │ │
│  │  ├─ Exception table                 │ │
│  │  ├─ Constant pool reference         │ │
│  │  └─ Method metadata                 │ │
│  └─────────────────────────────────────┘ │
└───────────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Factory Assembly Line

**JVM Architecture = Car Factory:**
```
Class Loader = Receiving Department
├─ Raw materials (bytecode) receive karo
├─ Quality check karo (verification)
├─ Warehouse mein store karo (method area)
└─ Assembly line ko bhejo

Runtime Data Areas = Factory Floor
├─ Warehouse (Method Area) → Blueprints, tools
├─ Assembly Line (Stack) → Current work
├─ Storage Yard (Heap) → Finished products
├─ Supervisor Desk (PC Register) → Current instruction
└─ External Contractors (Native Stacks) → Outsourced work

Execution Engine = Workers
├─ Manual Workers (Interpreter) → Slow but flexible
├─ Robots (JIT Compiler) → Fast, optimized
└─ Cleaning Crew (GC) → Remove waste

JNI = External Suppliers
└─ Native C/C++ libraries
```

### Example 2: Restaurant Kitchen

**JVM Architecture = Restaurant:**
```
Class Loader = Receiving & Storage
├─ Ingredients receive (load classes)
├─ Quality check (verification)
├─ Pantry mein store (method area)
└─ Kitchen ko supply

Runtime Data Areas = Kitchen Layout
├─ Pantry (Method Area) → Recipes, ingredients
├─ Cooking Station (Stack) → Active cooking
├─ Serving Area (Heap) → Prepared dishes
├─ Order Ticket (PC Register) → Current order
└─ Dishwashing (Native Stacks) → Support tasks

Execution Engine = Chefs
├─ Trainee Chef (Interpreter) → Follows recipe slowly
├─ Master Chef (JIT) → Cooks fast, optimized
└─ Cleaning Staff (GC) → Clean unused dishes

JNI = External Catering
└─ Outsourced services
```

### Example 3: Library System

**JVM Architecture = Library:**
```
Class Loader = Book Acquisition
├─ Books order karo (load classes)
├─ Verify authenticity (verification)
├─ Catalog mein add (method area)
└─ Shelves pe arrange

Runtime Data Areas = Library Sections
├─ Catalog (Method Area) → Book metadata
├─ Reading Tables (Stack) → Active reading
├─ Book Storage (Heap) → All books
├─ Current Page Marker (PC Register) → Reading position
└─ Special Collections (Native Stacks) → Rare books

Execution Engine = Library Staff
├─ Assistant (Interpreter) → Helps find books
├─ Expert Librarian (JIT) → Quick recommendations
└─ Maintenance (GC) → Remove damaged books

JNI = Inter-library Loan
└─ External library resources
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         COMPLETE EXECUTION FLOW                     │
└─────────────────────────────────────────────────────┘

EXAMPLE CODE:
public class Calculator {
    static int count = 0;
    
    public static void main(String[] args) {
        int result = add(5, 10);
        System.out.println(result);
    }
    
    static int add(int a, int b) {
        count++;
        return a + b;
    }
}

EXECUTION STEPS:

1. CLASS LOADING
   ├─ Application ClassLoader loads Calculator.class
   ├─ Bootstrap ClassLoader loads java.lang.Object
   ├─ Bootstrap ClassLoader loads java.lang.System
   └─ Bootstrap ClassLoader loads java.io.PrintStream

2. LINKING
   ├─ Verification: Bytecode valid? ✅
   ├─ Preparation: Allocate memory for 'count', set to 0
   └─ Resolution: Resolve System.out reference

3. INITIALIZATION
   └─ Execute static initializers (count = 0)

4. METHOD AREA STORAGE
   ├─ Calculator class metadata
   ├─ main() bytecode
   ├─ add() bytecode
   └─ Static variable 'count'

5. EXECUTION (main thread starts)
   
   STACK (main thread):
   ┌─────────────────────────────────┐
   │  Frame: main()                  │
   │  ├─ Local vars: args, result    │
   │  └─ Operand stack               │
   └─────────────────────────────────┘
   
   PC Register: Points to current instruction in main()
   
6. CALL add(5, 10)
   
   STACK (main thread):
   ┌─────────────────────────────────┐
   │  Frame: add()                   │ ← Current
   │  ├─ Local vars: a=5, b=10       │
   │  └─ Operand stack: 5, 10, 15    │
   ├─────────────────────────────────┤
   │  Frame: main()                  │
   │  ├─ Local vars: args, result    │
   │  └─ Waiting for add() return    │
   └─────────────────────────────────┘
   
   METHOD AREA:
   └─ count++ (0 → 1)
   
7. RETURN from add()
   
   STACK (main thread):
   ┌─────────────────────────────────┐
   │  Frame: main()                  │
   │  ├─ Local vars: args, result=15 │
   │  └─ Operand stack               │
   └─────────────────────────────────┘
   
8. System.out.println(result)
   
   HEAP:
   ┌─────────────────────────────────┐
   │  System.out object              │
   │  (PrintStream instance)         │
   └─────────────────────────────────┘
   
9. GARBAGE COLLECTION (background)
   └─ No unreachable objects yet
   
10. PROGRAM TERMINATION
    ├─ main() returns
    ├─ Stack frames popped
    ├─ GC runs final cleanup
    └─ JVM shuts down
```

---

## Syntax Explanation

### Viewing JVM Architecture Info:

**Check JVM version and architecture:**
```bash
$ java -version
java version "17.0.1"
Java HotSpot(TM) 64-Bit Server VM
```

**View JVM flags:**
```bash
$ java -XX:+PrintFlagsFinal -version | grep -i heap
uintx InitialHeapSize      := 268435456
uintx MaxHeapSize          := 4294967296
```

**View class loading:**
```bash
$ java -verbose:class MyProgram
[Loaded java.lang.Object from ...]
[Loaded java.lang.String from ...]
[Loaded MyProgram from file:...]
```

**View GC activity:**
```bash
$ java -XX:+PrintGCDetails MyProgram
[GC (Allocation Failure) [PSYoungGen: 2048K->512K(2560K)] ...]
```

**View JIT compilation:**
```bash
$ java -XX:+PrintCompilation MyProgram
    100    1       3       java.lang.String::hashCode (55 bytes)
    150    2       4       MyProgram::add (10 bytes)
```

**Memory configuration:**
```bash
# Set heap size
$ java -Xms512m -Xmx2g MyProgram
       ↑        ↑
       │        └─ Max heap: 2GB
       └─ Initial heap: 512MB

# Set stack size
$ java -Xss1m MyProgram
       ↑
       └─ Stack size: 1MB per thread

# Set metaspace size
$ java -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=512m MyProgram
```



---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         MEMORY AREAS DETAILED VIEW                  │
└─────────────────────────────────────────────────────┘

CODE EXAMPLE:
public class MemoryDemo {
    static int staticVar = 100;        // Method Area
    
    public static void main(String[] args) {
        int localVar = 10;             // Stack
        MemoryDemo obj = new MemoryDemo();  // Heap
        obj.instanceMethod(localVar);
    }
    
    void instanceMethod(int param) {
        String str = new String("Hello");  // Heap
        int result = param * 2;            // Stack
    }
}

MEMORY LAYOUT:

┌──────────────────────────────────────┐
│  METHOD AREA / METASPACE             │
│  ┌────────────────────────────────┐  │
│  │  MemoryDemo class metadata     │  │
│  │  ├─ Class name, superclass     │  │
│  │  ├─ Method bytecode            │  │
│  │  ├─ Field descriptors          │  │
│  │  └─ Constant pool              │  │
│  ├────────────────────────────────┤  │
│  │  Static variables:             │  │
│  │  └─ staticVar = 100            │  │
│  └────────────────────────────────┘  │
│  [Shared, loaded once]               │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  HEAP (Shared, GC managed)           │
│  ┌────────────────────────────────┐  │
│  │  Young Generation (Eden)       │  │
│  │  ┌──────────────────────────┐  │  │
│  │  │  MemoryDemo object       │  │  │
│  │  │  └─ Instance variables   │  │  │
│  │  └──────────────────────────┘  │  │
│  │  ┌──────────────────────────┐  │  │
│  │  │  String object "Hello"   │  │  │
│  │  │  ├─ char[] array         │  │  │
│  │  │  └─ hash, length         │  │  │
│  │  └──────────────────────────┘  │  │
│  └────────────────────────────────┘  │
│  [Objects live here]                 │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  STACK (main thread)                 │
│  ┌────────────────────────────────┐  │
│  │  Frame: instanceMethod()       │  │
│  │  ├─ param = 10                 │  │
│  │  ├─ str = [ref to heap]        │  │
│  │  └─ result = 20                │  │
│  ├────────────────────────────────┤  │
│  │  Frame: main()                 │  │
│  │  ├─ args = [ref to heap]       │  │
│  │  ├─ localVar = 10              │  │
│  │  └─ obj = [ref to heap]        │  │
│  └────────────────────────────────┘  │
│  [Per thread, LIFO]                  │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  PC REGISTER (main thread)           │
│  └─ Current instruction address      │
└──────────────────────────────────────┘

MEMORY FLOW:
1. staticVar → Method Area (class loading)
2. localVar, param, result → Stack (method calls)
3. obj, str objects → Heap (new keyword)
4. References (obj, str) → Stack (point to heap)
5. GC cleans heap when objects unreachable
```

---

## Advantages

✅ **Modular Design**: Clear separation of concerns — loading, memory, execution  
✅ **Platform Independence**: Same architecture across all platforms  
✅ **Security**: Bytecode verification before execution  
✅ **Memory Management**: Automatic garbage collection  
✅ **Performance**: JIT compilation optimizes hot code  
✅ **Multithreading**: Per-thread stacks, shared heap  
✅ **Scalability**: Configurable memory areas  
✅ **Flexibility**: Multiple GC algorithms, tunable  
✅ **Debugging**: Clear memory model helps debugging  
✅ **Standardized**: JVM specification ensures consistency  
✅ **Extensibility**: Custom class loaders possible  
✅ **Optimization**: Tiered compilation, adaptive optimization  

---

## Limitations

❌ **Complexity**: Understanding architecture takes time  
❌ **Memory Overhead**: JVM itself requires memory  
❌ **Startup Time**: Class loading and initialization takes time  
❌ **GC Pauses**: Stop-the-world pauses (though minimized)  
❌ **Tuning Required**: Optimal performance needs configuration  
❌ **Stack Size Limit**: Deep recursion causes StackOverflowError  
❌ **Heap Size Limit**: OutOfMemoryError if heap full  
❌ **Metaspace Growth**: Class metadata can grow unbounded  
❌ **JIT Warmup**: Peak performance after warmup period  
❌ **Native Memory**: Some memory outside heap (metaspace, threads)  

---

## Edge Cases

🔸 **StackOverflowError:**
```java
public class StackOverflow {
    static void recursive() {
        recursive();  // Infinite recursion
    }
    
    public static void main(String[] args) {
        recursive();  // StackOverflowError!
    }
}

// Solution: Increase stack size
$ java -Xss2m StackOverflow
```

🔸 **OutOfMemoryError: Java heap space:**
```java
public class HeapOverflow {
    public static void main(String[] args) {
        List<int[]> list = new ArrayList<>();
        while(true) {
            list.add(new int[1000000]);  // Keep allocating
        }
        // OutOfMemoryError: Java heap space
    }
}

// Solution: Increase heap size
$ java -Xmx4g HeapOverflow
```

🔸 **OutOfMemoryError: Metaspace:**
```java
// Loading too many classes dynamically
public class MetaspaceOverflow {
    public static void main(String[] args) {
        while(true) {
            // Generate and load classes dynamically
            // OutOfMemoryError: Metaspace
        }
    }
}

// Solution: Increase metaspace
$ java -XX:MaxMetaspaceSize=512m MetaspaceOverflow
```

🔸 **ClassLoader Deadlock:**
```java
// Two threads loading classes that depend on each other
// Can cause deadlock in class loading

// Solution: Careful class loading design
```

🔸 **Memory Leak (holding references):**
```java
public class MemoryLeak {
    static List<Object> list = new ArrayList<>();
    
    public static void main(String[] args) {
        while(true) {
            list.add(new Object());  // Never released!
        }
        // GC cannot collect (still referenced)
    }
}

// Solution: Remove references when done
list.clear();
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Confusing heap and stack
```java
❌ "All variables are on heap"
✅ Local variables → Stack
   Objects → Heap
   References → Stack (point to heap)
```

🚫 **Mistake 2**: Not understanding class loading order
```java
class Parent {
    static { System.out.println("Parent static"); }
    { System.out.println("Parent instance"); }
}

class Child extends Parent {
    static { System.out.println("Child static"); }
    { System.out.println("Child instance"); }
}

new Child();

❌ Expected: Parent instance, Child instance
✅ Actual: Parent static, Child static, Parent instance, Child instance
   (Static blocks execute during class loading)
```

🚫 **Mistake 3**: Thinking GC runs immediately
```java
❌ obj = null;  // GC runs now?
✅ obj = null;  // GC runs when JVM decides
   System.gc();  // Request GC (not guaranteed)
```

🚫 **Mistake 4**: Not understanding method area vs heap
```java
class Demo {
    static int staticVar = 10;  // Method Area
    int instanceVar = 20;       // Heap (with object)
}

❌ "Both are on heap"
✅ staticVar → Method Area (one copy)
   instanceVar → Heap (per object)
```

🚫 **Mistake 5**: Ignoring JVM tuning
```java
❌ Use default JVM settings for all apps
✅ Tune based on requirements:
   - High throughput: Parallel GC, large heap
   - Low latency: ZGC, smaller young gen
   - Memory constrained: Serial GC, small heap
```

---

## Important Interview Points

💡 **Q: Explain JVM architecture?**  
**A**: JVM architecture consists of three main subsystems:
1. **Class Loader Subsystem**: Three-phase loading (loading via bootstrap/extension/application loaders with parent delegation, linking with verification/preparation/resolution, initialization of static blocks)
2. **Runtime Data Areas**: Method Area (class metadata, static variables), Heap (objects, GC managed, young/old generations), Stack (per-thread, method frames), PC Registers (instruction pointer), Native Stacks (JNI calls)
3. **Execution Engine**: Interpreter (line-by-line execution), JIT Compiler (C1/C2 for hot code optimization), Garbage Collector (automatic memory management)
Plus JNI for native code integration.

💡 **Q: What is class loading delegation model?**  
**A**: Parent delegation model: When a class is requested, child class loader first delegates to parent. Bootstrap (core classes) → Extension (extensions) → Application (CLASSPATH). If parent cannot load, child tries. Benefits: Security (core classes protected), avoid duplicates, consistency.

💡 **Q: Difference between heap and stack?**  
**A**: 
- **Heap**: Objects, shared across threads, GC managed, larger, slower access, OutOfMemoryError if full
- **Stack**: Method frames (local variables, operand stack), per-thread, LIFO, smaller, faster access, StackOverflowError if full
- **References**: Stack holds references, heap holds objects

💡 **Q: What is stored in Method Area?**  
**A**: Method Area (Metaspace in Java 8+) stores:
- Class metadata (structure, fields, methods)
- Method bytecode
- Runtime constant pool
- Static variables
- Field and method data
Shared across all threads, loaded once per class.

💡 **Q: Explain JIT compilation?**  
**A**: JIT (Just-In-Time) compiles frequently executed bytecode (hot code) to native machine code at runtime. HotSpot uses tiered compilation:
- **C1 (Client)**: Fast compilation, basic optimizations, quick startup
- **C2 (Server)**: Aggressive optimizations (inlining, loop unrolling), peak performance
Initially interpreted, hot methods compiled by C1, hottest by C2.

💡 **Q: What are the phases of class loading?**  
**A**: 
1. **Loading**: Find and load .class file into memory via class loaders
2. **Linking**:
   - Verification: Validate bytecode format, type safety, security
   - Preparation: Allocate memory for static variables, set default values
   - Resolution: Convert symbolic references to direct references
3. **Initialization**: Execute static initializers and static blocks

💡 **Q: What is stack frame?**  
**A**: Stack frame is created for each method call, contains:
- **Local Variable Array**: Method parameters and local variables
- **Operand Stack**: For calculations (push/pop operations)
- **Frame Data**: Return address, exception table, constant pool reference
Frames are pushed on method call, popped on return. LIFO structure.

💡 **Q: Difference between PermGen and Metaspace?**  
**A**: 
- **PermGen (Java 7)**: Fixed size, part of heap, stores class metadata, OutOfMemoryError: PermGen space common
- **Metaspace (Java 8+)**: Dynamic size, native memory (not heap), stores class metadata, grows automatically, less OutOfMemoryError
Migration: -XX:PermSize removed, use -XX:MetaspaceSize

---

## Short Recap

JVM Architecture mein teen main subsystems hain: (1) Class Loader Subsystem - loading (bootstrap/extension/application loaders), linking (verification/preparation/resolution), initialization (static blocks), (2) Runtime Data Areas - Method Area (class metadata), Heap (objects, young/old gen, GC managed), Stack (per-thread frames), PC Registers, Native Stacks, (3) Execution Engine - Interpreter, JIT Compiler (C1/C2), Garbage Collector. Plus JNI for native code. Interview ke liye yaad rakho: Parent delegation model, heap vs stack difference, method area contents, JIT compilation, class loading phases, aur stack frame structure.

---

**Previous**: [← 19 - JVM](./19-jvm.md)  
**Next**: [21 - Class Loading Process →](./21-class-loading-process.md)
