# 21) CLASS LOADING PROCESS

## Concept Introduction

Class Loading Process wo mechanism hai jisse JVM .class files ko memory mein load karta hai aur execute karne ke liye ready karta hai. Jab tum `java MyProgram` run karte ho, toh JVM pehle MyProgram.class file ko dhundta hai, phir usko memory mein load karta hai, verify karta hai ki bytecode safe hai, aur finally execute karta hai. Yeh process teen phases mein hota hai: Loading, Linking (Verification, Preparation, Resolution), aur Initialization. Class loading lazy hai — matlab class tabhi load hoti hai jab pehli baar use ho, pehle se nahi. Yeh interview mein bahut important topic hai!

---

## Why This Concept Exists

**Problem:**
- .class files disk pe stored hain, memory mein kaise aayengi?
- Bytecode safe hai ya malicious? Kaise check karein?
- Dependencies (other classes) kaise load karein?
- Static variables ko kab initialize karein?
- Multiple class loaders kaise manage karein?

**Solution (Class Loading Process):**
- Systematic three-phase approach
- Security through bytecode verification
- Lazy loading for efficiency
- Parent delegation for security
- Clear initialization order
- Prevents duplicate loading

---

## Definitions

### 🔹 Very Simple Definition
Class Loading Process wo tarika hai jisse JVM .class files ko memory mein load karta hai, verify karta hai, aur execute karne ke liye ready karta hai.

### 🔹 College Exam Definition
Class Loading Process is the mechanism by which JVM loads .class files into memory through three phases: Loading (finding and loading bytecode), Linking (verification, preparation, resolution), and Initialization (executing static initializers). It uses a parent delegation model where child class loaders delegate to parent before attempting to load themselves.

### 🔹 Viva Definition
Class Loading Process consists of three phases: (1) Loading - class loaders (bootstrap, extension, application) locate and load .class files into method area using parent delegation model, (2) Linking - verification validates bytecode format and security, preparation allocates memory for static variables with default values, resolution converts symbolic references to direct references, (3) Initialization - executes static initializers and static blocks in top-down order. The process is lazy (on-demand), thread-safe, and ensures each class is loaded only once.

### 🔹 Interview Definition
Class Loading Process implements dynamic class loading with three phases: (1) Loading - hierarchical class loaders (bootstrap for rt.jar/java.base, extension for jre/lib/ext, application for CLASSPATH) use parent delegation (child delegates to parent first, loads only if parent fails), locate .class file, create Class object in heap, store metadata in method area, (2) Linking - verification (bytecode format validation, type checking, control flow analysis, stack verification using dataflow analysis), preparation (allocate memory for static variables in method area, assign default values like 0/null/false, no initialization yet), resolution (symbolic references in constant pool converted to direct memory references, lazy or eager based on JVM), (3) Initialization - execute static initializers in source order, execute static blocks, assign actual values to static variables, thread-safe with initialization lock, happens once per class. ClassNotFoundException if loading fails, NoClassDefFoundError if linking fails, ExceptionInInitializerError if initialization fails.

### 🔹 Technical Definition
Class Loading Process implements JVM specification for dynamic class loading: (1) Loading phase - ClassLoader.loadClass() with parent delegation (prevents core class spoofing), defineClass() creates Class object from bytecode array, resolveClass() for linking, findLoadedClass() prevents duplicates, custom class loaders via ClassLoader subclassing, (2) Linking phase - verification uses type inference and dataflow analysis (4-pass verification: format, metadata, bytecode, symbolic references), preparation allocates static storage in method area with type-specific defaults, resolution can be lazy (on first use) or eager (at link time) based on -XX:+EagerInitialization, (3) Initialization phase - <clinit> method synthesized from static initializers, synchronized on Class object for thread safety, initialization lock prevents deadlock, happens-before relationship ensures visibility, recursive initialization for superclasses. ClassCircularityError for circular dependencies, LinkageError hierarchy for linking failures.

### 🔹 One-line Crisp Definition
Class Loading = Load (find bytecode) → Link (verify + prepare + resolve) → Initialize (execute static)

---

## DIAGRAM: Complete Class Loading Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CLASS LOADING PROCESS (COMPLETE)                         │
└─────────────────────────────────────────────────────────────────────────────┘

USER RUNS: $ java com.myapp.MyClass

┌───────────────────────────────────────────────────────────────────────────┐
│  PHASE 1: LOADING                                                         │
│                                                                           │
│  STEP 1: Request to load com.myapp.MyClass                               │
│          ↓                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  Application ClassLoader receives request                           │ │
│  │  ├─ Check if already loaded: findLoadedClass()                      │ │
│  │  │  └─ If found, return cached Class object                         │ │
│  │  ├─ If not found, delegate to parent                                │ │
│  │  └─ Parent Delegation Model starts                                  │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│          ↓                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  Extension ClassLoader receives request                             │ │
│  │  ├─ Check if already loaded                                         │ │
│  │  ├─ If not found, delegate to parent                                │ │
│  │  └─ Continues delegation                                            │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│          ↓                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  Bootstrap ClassLoader receives request                             │ │
│  │  ├─ Check if already loaded                                         │ │
│  │  ├─ Search in rt.jar / java.base module                            │ │
│  │  ├─ Not found (not a core class)                                    │ │
│  │  └─ Return null to child                                            │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│          ↓                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  Extension ClassLoader tries to load                                │ │
│  │  ├─ Search in jre/lib/ext                                           │ │
│  │  ├─ Not found (not an extension)                                    │ │
│  │  └─ Return null to child                                            │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│          ↓                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  Application ClassLoader tries to load                              │ │
│  │  ├─ Search in CLASSPATH                                             │ │
│  │  ├─ Found: com/myapp/MyClass.class                                  │ │
│  │  ├─ Read bytecode into byte array                                   │ │
│  │  ├─ Call defineClass(byte[])                                        │ │
│  │  │  ├─ Create Class object in heap                                  │ │
│  │  │  ├─ Store class metadata in method area                          │ │
│  │  │  └─ Return Class object                                          │ │
│  │  └─ Cache Class object for future use                               │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                           │
│  RESULT: Class loaded into memory                                        │
│  ├─ Class object created in heap                                         │
│  ├─ Metadata stored in method area                                       │
│  └─ Ready for linking phase                                              │
└───────────────────────────────────────────────────────────────────────────┘
          ↓
┌───────────────────────────────────────────────────────────────────────────┐
│  PHASE 2: LINKING                                                         │
│                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  STEP 2.1: VERIFICATION                                             │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  Pass 1: Format Verification                                  │ │ │
│  │  │  ├─ Check magic number: 0xCAFEBABE                            │ │ │
│  │  │  ├─ Check version number (major.minor)                        │ │ │
│  │  │  ├─ Validate constant pool entries                            │ │ │
│  │  │  ├─ Check class file structure                                │ │ │
│  │  │  └─ Ensure no truncation                                      │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  Pass 2: Metadata Verification                                │ │ │
│  │  │  ├─ Check class has superclass (except Object)                │ │ │
│  │  │  ├─ Verify superclass is not final                            │ │ │
│  │  │  ├─ Check interfaces are actually interfaces                  │ │ │
│  │  │  ├─ Verify no duplicate fields/methods                        │ │ │
│  │  │  └─ Check access modifiers consistency                        │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  Pass 3: Bytecode Verification (Most Complex)                 │ │ │
│  │  │  ├─ Dataflow analysis on method bytecode                      │ │ │
│  │  │  ├─ Type checking (operand stack types)                       │ │ │
│  │  │  ├─ Control flow validation (no jumps to invalid locations)   │ │ │
│  │  │  ├─ Stack depth verification (no overflow/underflow)          │ │ │
│  │  │  ├─ Local variable initialization check                       │ │ │
│  │  │  ├─ Type safety (no illegal casts)                            │ │ │
│  │  │  └─ No illegal operations (e.g., pop empty stack)             │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  Pass 4: Symbolic Reference Verification                      │ │ │
│  │  │  ├─ Check referenced classes exist                            │ │ │
│  │  │  ├─ Check referenced fields exist                             │ │ │
│  │  │  ├─ Check referenced methods exist                            │ │ │
│  │  │  ├─ Verify access permissions                                 │ │ │
│  │  │  └─ Check method signatures match                             │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │                                                                     │ │
│  │  IF VERIFICATION FAILS → VerifyError thrown                        │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│          ↓                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  STEP 2.2: PREPARATION                                             │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  Allocate memory for static variables in method area         │ │ │
│  │  │  ├─ static int count;     → Allocate 4 bytes, set to 0       │ │ │
│  │  │  ├─ static String name;   → Allocate reference, set to null  │ │ │
│  │  │  ├─ static boolean flag;  → Allocate 1 byte, set to false    │ │ │
│  │  │  └─ static final int MAX = 100; → Set to 100 (compile-time)  │ │ │
│  │  │                                                                │ │ │
│  │  │  DEFAULT VALUES ASSIGNED:                                     │ │ │
│  │  │  ├─ int, byte, short, long → 0                                │ │ │
│  │  │  ├─ float, double → 0.0                                       │ │ │
│  │  │  ├─ boolean → false                                           │ │ │
│  │  │  ├─ char → '\u0000'                                           │ │ │
│  │  │  └─ Reference types → null                                    │ │ │
│  │  │                                                                │ │ │
│  │  │  NOTE: Actual initialization happens in next phase            │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│          ↓                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  STEP 2.3: RESOLUTION                                               │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  Convert symbolic references to direct references             │ │ │
│  │  │                                                                │ │ │
│  │  │  BEFORE RESOLUTION (Symbolic):                                │ │ │
│  │  │  "java/lang/String"  → String reference                       │ │ │
│  │  │  "println"           → Method reference                       │ │ │
│  │  │  "java/lang/System"  → Class reference                        │ │ │
│  │  │                                                                │ │ │
│  │  │  AFTER RESOLUTION (Direct):                                   │ │ │
│  │  │  0x7f8a3c001000  → Direct memory address of String class      │ │ │
│  │  │  0x7f8a3c002000  → Direct memory address of println method    │ │ │
│  │  │  0x7f8a3c003000  → Direct memory address of System class      │ │ │
│  │  │                                                                │ │ │
│  │  │  TYPES OF RESOLUTION:                                         │ │ │
│  │  │  ├─ Class/Interface resolution                                │ │ │
│  │  │  ├─ Field resolution                                          │ │ │
│  │  │  ├─ Method resolution                                         │ │ │
│  │  │  └─ Interface method resolution                               │ │ │
│  │  │                                                                │ │ │
│  │  │  Can be LAZY (on first use) or EAGER (at link time)          │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │                                                                     │ │
│  │  IF RESOLUTION FAILS → NoClassDefFoundError, NoSuchFieldError, etc.│ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘
          ↓
┌───────────────────────────────────────────────────────────────────────────┐
│  PHASE 3: INITIALIZATION                                                  │
│                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  STEP 3: Execute Static Initializers                               │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  1. Initialize superclass first (if not already initialized)  │ │ │
│  │  │     └─ Recursive initialization up the hierarchy              │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  2. Execute static variable initializers (in source order)    │ │ │
│  │  │     static int count = 10;     → count = 10                   │ │ │
│  │  │     static String name = "Hi"; → name = "Hi"                  │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │  3. Execute static blocks (in source order)                   │ │ │
│  │  │     static {                                                   │ │ │
│  │  │         System.out.println("Static block");                   │ │ │
│  │  │         count = 20;                                           │ │ │
│  │  │     }                                                          │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │                                                                     │ │
│  │  THREAD SAFETY:                                                     │ │
│  │  ├─ Initialization synchronized on Class object                    │ │
│  │  ├─ Only one thread initializes                                    │ │
│  │  ├─ Other threads wait                                             │ │
│  │  └─ Happens-once guarantee                                         │ │
│  │                                                                     │ │
│  │  IF INITIALIZATION FAILS → ExceptionInInitializerError             │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘
          ↓
┌───────────────────────────────────────────────────────────────────────────┐
│  RESULT: Class fully loaded and ready to use                              │
│  ├─ Bytecode verified and safe                                            │
│  ├─ Static variables initialized                                          │
│  ├─ Static blocks executed                                                │
│  └─ Class can now be instantiated and methods called                      │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Parent Delegation Model

```
┌─────────────────────────────────────────────────────┐
│         PARENT DELEGATION MODEL                     │
└─────────────────────────────────────────────────────┘

REQUEST: Load class "com.myapp.MyClass"

┌──────────────────────────────────────┐
│  Application ClassLoader             │
│  (System ClassLoader)                │
│  ├─ Loads: CLASSPATH classes         │
│  ├─ Check: Already loaded?           │
│  └─ If not: Delegate to parent ↓     │
└──────────────────────────────────────┘
                ↓ DELEGATE
┌──────────────────────────────────────┐
│  Extension ClassLoader               │
│  (Platform ClassLoader in Java 9+)   │
│  ├─ Loads: jre/lib/ext               │
│  ├─ Check: Already loaded?           │
│  └─ If not: Delegate to parent ↓     │
└──────────────────────────────────────┘
                ↓ DELEGATE
┌──────────────────────────────────────┐
│  Bootstrap ClassLoader               │
│  (Primordial ClassLoader)            │
│  ├─ Loads: Core Java classes         │
│  ├─ rt.jar (Java 8)                  │
│  ├─ java.base module (Java 9+)       │
│  ├─ Written in native code (C/C++)   │
│  └─ Try to load...                   │
└──────────────────────────────────────┘
                ↓
        NOT FOUND (not a core class)
                ↓ RETURN NULL
┌──────────────────────────────────────┐
│  Extension ClassLoader               │
│  └─ Try to load from jre/lib/ext     │
└──────────────────────────────────────┘
                ↓
        NOT FOUND (not an extension)
                ↓ RETURN NULL
┌──────────────────────────────────────┐
│  Application ClassLoader             │
│  └─ Try to load from CLASSPATH       │
│     ├─ Search: com/myapp/MyClass.class│
│     ├─ FOUND! ✅                      │
│     ├─ Load bytecode                 │
│     └─ Return Class object           │
└──────────────────────────────────────┘

WHY PARENT DELEGATION?
┌──────────────────────────────────────┐
│  1. SECURITY                         │
│     └─ Prevents core class spoofing  │
│        (Can't replace java.lang.String)│
│                                      │
│  2. AVOID DUPLICATES                 │
│     └─ Same class loaded only once   │
│                                      │
│  3. CONSISTENCY                      │
│     └─ Core classes always from same │
│        source                        │
└──────────────────────────────────────┘
```



---

## Real-life Hinglish Example

### Example 1: Library Book System

**Class Loading = Library Book Acquisition:**
```
LOADING (Book Order):
├─ Student requests book "Advanced Java"
├─ Librarian checks: Already have? (findLoadedClass)
├─ If not, order from supplier
└─ Book arrives, catalog entry created

LINKING:
├─ VERIFICATION: Check book condition
│  ├─ Pages intact?
│  ├─ Correct edition?
│  └─ No damage?
├─ PREPARATION: Create catalog entry
│  ├─ Assign shelf number
│  ├─ Create index card
│  └─ Set default status (available)
└─ RESOLUTION: Link references
   ├─ Author references
   ├─ Related books
   └─ Cross-references

INITIALIZATION:
├─ Stamp library seal
├─ Write acquisition date
└─ Book ready for lending

Similarly Class Loading:
├─ Load .class file
├─ Verify bytecode
├─ Prepare static variables
├─ Resolve references
└─ Initialize static blocks
```

### Example 2: Restaurant Recipe

**Class Loading = Recipe Preparation:**
```
LOADING (Recipe Acquisition):
├─ Chef needs "Pasta Recipe"
├─ Check: Already have? (cache)
├─ If not, get from recipe book
└─ Recipe copied to kitchen board

LINKING:
├─ VERIFICATION: Validate recipe
│  ├─ Ingredients available?
│  ├─ Steps make sense?
│  └─ Cooking time realistic?
├─ PREPARATION: Setup ingredients
│  ├─ Allocate counter space
│  ├─ Get utensils ready
│  └─ Set default quantities
└─ RESOLUTION: Resolve dependencies
   ├─ "Tomato sauce" → Get from pantry
   ├─ "Pasta" → Get from storage
   └─ "Cheese" → Get from fridge

INITIALIZATION:
├─ Preheat oven (static block)
├─ Boil water (static initialization)
└─ Ready to cook!

Class Loading similar:
├─ Load class bytecode
├─ Verify safety
├─ Prepare memory
├─ Resolve dependencies
└─ Execute static blocks
```

### Example 3: Building Construction

**Class Loading = Building Construction:**
```
LOADING (Foundation):
├─ Architect provides blueprint (.class file)
├─ Check: Already built? (loaded)
├─ If not, start construction
└─ Foundation laid (class loaded)

LINKING:
├─ VERIFICATION: Inspect blueprint
│  ├─ Structural integrity?
│  ├─ Building codes met?
│  └─ Safety standards?
├─ PREPARATION: Prepare site
│  ├─ Mark boundaries
│  ├─ Allocate space
│  └─ Setup utilities (default values)
└─ RESOLUTION: Connect utilities
   ├─ Water supply → Connect to main
   ├─ Electricity → Connect to grid
   └─ Sewage → Connect to system

INITIALIZATION:
├─ Turn on utilities (static blocks)
├─ Final inspections
└─ Building ready for occupancy!

Class Loading:
├─ Load class
├─ Verify bytecode
├─ Prepare static storage
├─ Resolve references
└─ Initialize statics
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         CLASS LOADING INTERNAL FLOW                 │
└─────────────────────────────────────────────────────┘

CODE EXAMPLE:
public class Parent {
    static int parentStatic = 10;
    static {
        System.out.println("Parent static block");
    }
}

public class Child extends Parent {
    static int childStatic = 20;
    static {
        System.out.println("Child static block");
    }
    
    public static void main(String[] args) {
        System.out.println("Main method");
    }
}

EXECUTION: $ java Child

STEP-BY-STEP INTERNAL FLOW:

1. JVM STARTS
   └─ Bootstrap ClassLoader initialized

2. LOAD java.lang.Object (Parent of all)
   ├─ Bootstrap ClassLoader loads
   ├─ Verify, Link, Initialize
   └─ Cached

3. LOAD java.lang.System
   ├─ Bootstrap ClassLoader loads
   ├─ Needed for System.out.println
   └─ Cached

4. LOAD Child class (requested)
   ├─ Application ClassLoader receives request
   ├─ Delegates to Extension → Bootstrap
   ├─ Bootstrap: Not found (not core class)
   ├─ Extension: Not found (not extension)
   ├─ Application: Found in CLASSPATH
   └─ Loads Child.class

5. LINKING Child
   ├─ VERIFICATION:
   │  ├─ Magic number: 0xCAFEBABE ✅
   │  ├─ Version: Compatible ✅
   │  ├─ Bytecode valid ✅
   │  └─ Has superclass (Parent) ✅
   ├─ PREPARATION:
   │  └─ childStatic allocated, set to 0
   └─ RESOLUTION:
      └─ Resolve Parent reference

6. LOAD Parent class (dependency)
   ├─ Application ClassLoader loads
   ├─ Verify, Link
   └─ Prepare: parentStatic = 0

7. INITIALIZATION (Top-down)
   ├─ Initialize Parent first:
   │  ├─ parentStatic = 10
   │  ├─ Execute static block
   │  └─ Output: "Parent static block"
   ├─ Then initialize Child:
   │  ├─ childStatic = 20
   │  ├─ Execute static block
   │  └─ Output: "Child static block"

8. EXECUTE main()
   └─ Output: "Main method"

FINAL OUTPUT:
Parent static block
Child static block
Main method

MEMORY STATE AFTER LOADING:

METHOD AREA:
┌──────────────────────────────────────┐
│  Parent class metadata               │
│  ├─ parentStatic = 10                │
│  └─ Methods: <clinit>, etc.          │
├──────────────────────────────────────┤
│  Child class metadata                │
│  ├─ childStatic = 20                 │
│  └─ Methods: main, <clinit>          │
└──────────────────────────────────────┘

HEAP:
┌──────────────────────────────────────┐
│  Class object for Parent             │
├──────────────────────────────────────┤
│  Class object for Child              │
└──────────────────────────────────────┘
```

---

## Syntax Explanation

### Viewing Class Loading:

**Enable verbose class loading:**
```bash
$ java -verbose:class MyProgram

[Opened /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home/lib/modules]
[Loaded java.lang.Object from java.base]
[Loaded java.io.Serializable from java.base]
[Loaded java.lang.Comparable from java.base]
[Loaded java.lang.CharSequence from java.base]
[Loaded java.lang.String from java.base]
[Loaded java.lang.reflect.AnnotatedElement from java.base]
...
[Loaded MyProgram from file:/path/to/classes/]
```

**Custom ClassLoader example:**
```java
public class CustomClassLoader extends ClassLoader {
    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        // Load .class file
        byte[] classData = loadClassData(name);
        
        // Define class from bytecode
        return defineClass(name, classData, 0, classData.length);
    }
    
    private byte[] loadClassData(String name) {
        // Read .class file into byte array
        String fileName = name.replace('.', '/') + ".class";
        // ... read file ...
        return bytecode;
    }
}

// Usage:
CustomClassLoader loader = new CustomClassLoader();
Class<?> clazz = loader.loadClass("com.myapp.MyClass");
Object obj = clazz.newInstance();
```

**Check if class is loaded:**
```java
ClassLoader loader = MyClass.class.getClassLoader();
System.out.println("Loaded by: " + loader);

// Output:
// Loaded by: jdk.internal.loader.ClassLoaders$AppClassLoader@...
```

**Force class initialization:**
```java
// Load but don't initialize:
Class<?> clazz = ClassLoader.getSystemClassLoader()
                            .loadClass("MyClass");

// Force initialization:
Class.forName("MyClass");  // Loads and initializes
```

**Initialization order example:**
```java
class Demo {
    static int a = 10;           // 1. First
    static int b = method();     // 2. Second
    
    static {                     // 3. Third
        System.out.println("Static block");
        a = 20;
    }
    
    static int c = 30;           // 4. Fourth
    
    static int method() {
        System.out.println("Static method");
        return 15;
    }
}

// Output when Demo is loaded:
// Static method
// Static block
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         MEMORY DURING CLASS LOADING                 │
└─────────────────────────────────────────────────────┘

BEFORE LOADING:
┌──────────────────────────────────────┐
│  DISK                                │
│  └─ MyClass.class (bytecode)         │
└──────────────────────────────────────┘

DURING LOADING:
┌──────────────────────────────────────┐
│  RAM - METHOD AREA                   │
│  ┌────────────────────────────────┐  │
│  │  MyClass metadata              │  │
│  │  ├─ Class name                 │  │
│  │  ├─ Superclass reference       │  │
│  │  ├─ Interfaces                 │  │
│  │  ├─ Fields metadata            │  │
│  │  ├─ Methods bytecode           │  │
│  │  ├─ Constant pool              │  │
│  │  └─ Access flags               │  │
│  └────────────────────────────────┘  │
│  ┌────────────────────────────────┐  │
│  │  Static variables              │  │
│  │  └─ static int count = 0       │  │
│  │     (default value)            │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  RAM - HEAP                          │
│  ┌────────────────────────────────┐  │
│  │  Class object (java.lang.Class)│  │
│  │  ├─ Represents MyClass         │  │
│  │  ├─ Used for reflection        │  │
│  │  └─ MyClass.class returns this │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

AFTER INITIALIZATION:
┌──────────────────────────────────────┐
│  METHOD AREA                         │
│  ┌────────────────────────────────┐  │
│  │  Static variables              │  │
│  │  └─ static int count = 10      │  │
│  │     (actual value)             │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

MEMORY SIZES:
├─ Class metadata: Few KB per class
├─ Static variables: Based on type
├─ Class object: ~100 bytes
└─ Total: Usually < 10 KB per class
```

---

## Advantages

✅ **Lazy Loading**: Classes loaded only when needed — saves memory  
✅ **Security**: Bytecode verification prevents malicious code  
✅ **Parent Delegation**: Core classes protected from spoofing  
✅ **Dynamic Loading**: Load classes at runtime  
✅ **Custom Loaders**: Extend ClassLoader for special needs  
✅ **Namespace Isolation**: Different loaders = different namespaces  
✅ **Hot Deployment**: Reload classes without restart (with custom loaders)  
✅ **Memory Efficiency**: Shared method area across threads  
✅ **Thread Safety**: Initialization synchronized  
✅ **Caching**: Loaded classes cached for reuse  
✅ **Dependency Resolution**: Automatic loading of dependencies  
✅ **Version Management**: Different versions via different loaders  

---

## Limitations

❌ **Complexity**: Three-phase process complex to understand  
❌ **Performance**: Verification takes time (first load)  
❌ **Memory Overhead**: Class metadata consumes memory  
❌ **ClassLoader Leaks**: Holding references prevents unloading  
❌ **Initialization Deadlock**: Circular dependencies can deadlock  
❌ **No Unloading**: Classes rarely unloaded (only when loader GC'd)  
❌ **Metaspace Growth**: Too many classes → OutOfMemoryError  
❌ **Startup Time**: Loading many classes slows startup  
❌ **Debugging Difficulty**: ClassLoader issues hard to debug  

---

## Edge Cases

🔸 **ClassNotFoundException:**
```java
try {
    Class.forName("com.nonexistent.MyClass");
} catch (ClassNotFoundException e) {
    // Class not found in classpath
    System.out.println("Class not found!");
}

// Solution: Check CLASSPATH
$ java -cp /correct/path MyProgram
```

🔸 **NoClassDefFoundError:**
```java
// Class was found during compilation but not at runtime
public class Demo {
    public static void main(String[] args) {
        Helper h = new Helper();  // NoClassDefFoundError
    }
}

// Causes:
// 1. Helper.class deleted after compilation
// 2. Helper.class not in runtime classpath
// 3. Static initializer of Helper threw exception

// Solution: Ensure class available at runtime
```

🔸 **ExceptionInInitializerError:**
```java
class BadClass {
    static int value = 10 / 0;  // ArithmeticException in static initializer
}

public class Demo {
    public static void main(String[] args) {
        BadClass b = new BadClass();  // ExceptionInInitializerError
    }
}

// Solution: Fix static initializer
```

🔸 **ClassCircularityError:**
```java
// Class A depends on B, B depends on A during initialization
class A {
    static B b = new B();
}

class B {
    static A a = new A();
}

// Circular dependency during initialization
// Solution: Redesign to avoid circular static dependencies
```

🔸 **LinkageError:**
```java
// Class loaded by two different class loaders
ClassLoader loader1 = new CustomClassLoader();
ClassLoader loader2 = new CustomClassLoader();

Class<?> class1 = loader1.loadClass("MyClass");
Class<?> class2 = loader2.loadClass("MyClass");

// class1 != class2 (different namespaces)
// Casting between them → ClassCastException
```

🔸 **Custom ClassLoader Leak:**
```java
// Holding reference to ClassLoader prevents class unloading
static ClassLoader loader = new CustomClassLoader();
static Class<?> clazz = loader.loadClass("MyClass");

// Even if clazz not used, loader reference prevents GC
// Classes never unloaded → Memory leak

// Solution: Remove references when done
loader = null;
clazz = null;
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Confusing ClassNotFoundException and NoClassDefFoundError
```java
❌ "Both mean class not found"
✅ ClassNotFoundException: Class not in classpath (checked exception)
   NoClassDefFoundError: Class was there at compile time, missing at runtime (error)
```

🚫 **Mistake 2**: Not understanding initialization order
```java
class Demo {
    static int b = a + 1;  // ❌ a not initialized yet!
    static int a = 10;
}

✅ Correct order:
class Demo {
    static int a = 10;     // First
    static int b = a + 1;  // Second (now a is initialized)
}
```

🚫 **Mistake 3**: Thinking classes are loaded at startup
```java
❌ "All classes loaded when program starts"
✅ Classes loaded lazily (on first use)
   Only main class loaded initially
```

🚫 **Mistake 4**: Not understanding parent delegation
```java
❌ "Application ClassLoader loads all classes"
✅ Parent delegation: Bootstrap → Extension → Application
   Each tries parent first
```

🚫 **Mistake 5**: Forgetting static initialization is one-time
```java
class Counter {
    static int count = 0;
    static { count++; }
}

Counter c1 = new Counter();
Counter c2 = new Counter();

❌ Thinking: count = 2
✅ Actual: count = 1 (static block runs once during class loading)
```



---

## Important Interview Points

💡 **Q: Explain the class loading process?**  
**A**: Class loading has three phases:
1. **Loading**: ClassLoader (bootstrap/extension/application) locates .class file using parent delegation, reads bytecode, creates Class object in heap, stores metadata in method area
2. **Linking**: 
   - Verification: Validates bytecode format, type safety, control flow (4-pass verification)
   - Preparation: Allocates memory for static variables, assigns default values (0/null/false)
   - Resolution: Converts symbolic references to direct memory references
3. **Initialization**: Executes static initializers and static blocks in source order, thread-safe, happens once per class

💡 **Q: What is parent delegation model?**  
**A**: When a class is requested, child ClassLoader first delegates to parent before attempting to load itself. Order: Bootstrap (core classes) → Extension (jre/lib/ext) → Application (CLASSPATH). If parent cannot load, child tries. Benefits: Security (prevents core class spoofing), avoids duplicates, ensures consistency. Example: Loading String always goes to Bootstrap, preventing malicious replacement.

💡 **Q: Difference between ClassNotFoundException and NoClassDefFoundError?**  
**A**: 
- **ClassNotFoundException**: Checked exception, thrown when class not found in classpath during explicit loading (Class.forName(), ClassLoader.loadClass()). Cause: Class never existed or wrong classpath.
- **NoClassDefFoundError**: Error, thrown when class was present at compile time but missing at runtime, or static initializer failed. Cause: .class file deleted, classpath changed, or initialization error.

💡 **Q: What happens during verification phase?**  
**A**: Bytecode verification has 4 passes:
1. **Format**: Check magic number (0xCAFEBABE), version, constant pool, structure
2. **Metadata**: Verify class has superclass (except Object), superclass not final, interfaces valid
3. **Bytecode**: Dataflow analysis, type checking, control flow validation, stack depth verification, no illegal operations (most complex pass)
4. **Symbolic References**: Check referenced classes/fields/methods exist, access permissions valid
If verification fails → VerifyError thrown.

💡 **Q: When does class initialization happen?**  
**A**: Class initialization (executing static initializers) happens on first active use:
- Creating instance (new)
- Accessing static field (except compile-time constants)
- Calling static method
- Reflection (Class.forName() with initialize=true)
- Initializing subclass (parent initialized first)
- Main class at startup
Passive uses (accessing .class, compile-time constants) don't trigger initialization.

💡 **Q: What is the difference between loading and initialization?**  
**A**: 
- **Loading**: Reads .class file, creates Class object, stores metadata in method area. Static variables allocated with default values (0/null/false).
- **Initialization**: Executes static initializers, assigns actual values to static variables, runs static blocks. Happens after linking, only once per class.
Example: `static int x = 10;` → Loading sets x=0, Initialization sets x=10.

💡 **Q: Can you create custom ClassLoader?**  
**A**: Yes, extend ClassLoader and override findClass():
```java
public class MyLoader extends ClassLoader {
    protected Class<?> findClass(String name) {
        byte[] data = loadClassData(name);
        return defineClass(name, data, 0, data.length);
    }
}
```
Use cases: Load classes from network, database, encrypted files, hot deployment, plugin systems, application servers (WAR isolation).

💡 **Q: What is ClassLoader namespace?**  
**A**: Each ClassLoader has its own namespace. Same class loaded by different loaders are considered different classes. Example:
```java
ClassLoader l1 = new MyLoader();
ClassLoader l2 = new MyLoader();
Class<?> c1 = l1.loadClass("MyClass");
Class<?> c2 = l2.loadClass("MyClass");
// c1 != c2 (different classes!)
// Casting between them → ClassCastException
```
Used for: Application isolation, version management, plugin systems.

💡 **Q: What causes ClassLoader memory leaks?**  
**A**: ClassLoader leaks occur when:
1. Holding reference to ClassLoader prevents GC
2. Classes loaded by that loader cannot be unloaded
3. All static variables of those classes remain in memory
Common causes: ThreadLocal not cleaned, static references, JDBC drivers not deregistered, application server redeployments. Solution: Remove all references to ClassLoader and loaded classes.

---

## Short Recap

Class Loading Process teen phases mein hota hai: (1) Loading - ClassLoader (bootstrap/extension/application) parent delegation model use karke .class file load karta hai, Class object create karta hai, metadata method area mein store karta hai, (2) Linking - Verification (bytecode validate, 4-pass), Preparation (static variables ko default values assign), Resolution (symbolic references ko direct references mein convert), (3) Initialization - static initializers execute, static blocks run, actual values assign, thread-safe, one-time. Interview ke liye yaad rakho: parent delegation model, ClassNotFoundException vs NoClassDefFoundError, verification 4 passes, initialization triggers, loading vs initialization difference, aur custom ClassLoader use cases.

---

**Previous**: [← 20 - JVM Architecture](./20-jvm-architecture.md)  
**Next**: [22 - Program Execution Flow →](./22-program-execution-flow.md)
