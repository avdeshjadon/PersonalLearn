# 35) TYPES OF VARIABLES IN JAVA

## Concept Introduction

Java mein teen types ke variables hote hain based on scope aur lifetime: Local variables (method/block mein), Instance variables (object-level), aur Static variables (class-level). Local variables method ke andar declare hote hain aur sirf us method mein accessible hote hain. Instance variables class mein declare hote hain (without static) aur har object ka apna copy hota hai. Static variables class mein declare hote hain (with static keyword) aur sabhi objects share karte hain. Har type ka alag scope, lifetime, memory location, aur default value behavior hai. Yeh classification samajhna important hai proper variable usage ke liye!

---

## Why This Concept Exists

**Problem:**
- Different scopes ke liye variables kaise manage karein?
- Object-specific vs class-level data kaise distinguish karein?
- Memory efficiency kaise achieve karein?
- Variable lifetime kaise control karein?
- Data sharing kaise implement karein?

**Solution (Variable Types):**
- Local variables: Method-specific temporary data
- Instance variables: Object-specific state
- Static variables: Class-level shared data
- Clear scope boundaries
- Efficient memory usage
- Appropriate lifetime management

---

## Definitions

### 🔹 Very Simple Definition
Java mein teen variable types: Local (method mein), Instance (object-level), Static (class-level shared).

### 🔹 College Exam Definition
Java has three types of variables based on scope and lifetime: (1) **Local Variables** - Declared inside methods, constructors, or blocks, Scope: limited to method/block, Lifetime: exists during method execution, No default values: must initialize before use, Stored in stack memory, Example: `void method() { int x = 10; }`, (2) **Instance Variables** - Declared inside class but outside methods, Scope: accessible to all instance methods, Lifetime: exists as long as object exists, Default values: 0, false, null, Stored in heap memory with object, Each object has own copy, Example: `class Demo { int x; }`, (3) **Static Variables** - Declared with static keyword inside class, Scope: accessible to all methods (static and instance), Lifetime: exists as long as class is loaded, Default values: 0, false, null, Stored in method area, Shared across all objects, Example: `class Demo { static int count; }`. Key differences: Local (temporary, method-specific), Instance (object-specific state), Static (class-level shared data).

### 🔹 Viva Definition
Variables classified by scope, lifetime, and storage: (1) **Local Variables** - Declaration: inside methods/constructors/blocks, Scope: block scope (from declaration to closing brace), Lifetime: method execution duration, Memory: stack frame, Default values: NONE (must initialize), Access: only within declaring block, Modifiers: only final 
Java has three types of variables based on scope and lifetime: (1) Local Variables - Declared inside methods, constructors, or blocks, Scope: limited to method/block, Lifetime: exists during method execution, No default values: must initialize before use, Stored in stack memory, Example: void method() { int x = 10; }, (2) Instance Variables - Declared inside class but outside methods, Scope: accessible to all instance methods, Lifetime: exists as long as object exists, Default values: 0, false, null, Stored in heap memory with object, Each object has own copy, Example: class Demo { int x; }, (3) Static Variables - Declared with static keyword inside class, Scope: accessible to all methods (static and instance), Lifetime: exists as long as class is loaded, Default values: 0, false, null, Stored in method area, Shared across all objects, Example: class Demo { static int count; }. Key differences: Local (temporary, method-specific), Instance (object-specific state), Static (class-level shared data).

### 🔹 Viva Definition
Variables classified by scope, lifetime, and storage: (1) Local Variables - Declaration: inside methods/constructors/blocks, Scope: block scope (from declaration to closing brace), Lifetime: method execution duration, Memory: stack frame, Default values: NONE (must initialize), Access: only within declaring block, Modifiers: only final allowed, Cannot use this/super, Example: void method() { int localVar = 10; }, (2) Instance Variables - Declaration: inside class, outside methods, Scope: class scope (accessible to all instance methods), Lifetime: object lifetime (creation to garbage collection), Memory: heap (with object), Default values: 0 (numeric), false (boolean), null (reference), Access: via object reference, Modifiers: public, private, protected, final, transient, volatile, Can use this keyword, Each object has separate copy, Example: class Demo { int instanceVar; }, (3) Static Variables - Declaration: with static keyword inside class, Scope: class scope (accessible to all methods), Lifetime: class lifetime (class load to unload), Memory: method area (class metadata), Default values: 0, false, null, Access: via class name or object, Modifiers: public, private, protected, final, static, Shared across all instances, Only one copy exists, Example: class Demo { static int staticVar; }. Additional: Parameters (special local variables), this reference (current object), super reference (parent object).

### 🔹 Interview Definition
Variables categorized by declaration location, scope, lifetime, and memory allocation: (1) Local Variables - Location: method body, constructor body, or code block, Scope: lexical scope (declaration point to block end), Lifetime: stack frame lifetime (method entry to exit), Memory: stack (local variable array in frame), Initialization: mandatory before use (compiler enforces definite assignment), Default: NO default values, Access: direct name reference, Modifiers: final only (no access modifiers), Thread safety: inherently thread-safe (each thread has own stack), Use case: temporary calculations, method parameters, loop counters, Example: void calc() { int temp = 10; }, (2) Instance Variables - Location: class body (outside methods), Scope: object scope (visible to all instance methods), Lifetime: object lifetime (new to GC), Memory: heap (part of object layout), Initialization: optional (defaults assigned), Default: 0/false/null, Access: via object reference (obj.var), Modifiers: public/private/protected/final/transient/volatile, Thread safety: not thread-safe (shared across threads if object shared), Use case: object state, properties, attributes, Example: class Car { int speed; String color; }, (3) Static Variables - Location: class body with static keyword, Scope: class scope (visible to all methods), Lifetime: class lifetime (class load to unload), Memory: method area (class metadata section), Initialization: optional (defaults assigned), Default: 0/false/null, Access: via class name (ClassName.var) or object, Modifiers: public/private/protected/final/static, Thread safety: not thread-safe (shared across all threads), Use case: constants, counters, shared configuration, Example: class Counter { static int count; }. Comparison: Local (fastest, stack), Instance (object-specific, heap), Static (shared, method area). Memory efficiency: Static (one copy) > Local (per call) > Instance (per object).

### 🔹 Technical Definition
Variables implemented with distinct JVM mechanisms: (1) Local Variables - Bytecode: stored in local variable array (indexed 0 to N), Access instructions: iload/istore (int), aload/astore (reference), fload/fstore (float), dload/dstore (double), lload/lstore (long), Index allocation: parameters first (0 for this in instance methods), then local variables, Wide index: wide instruction for index > 255, Verification: bytecode verifier ensures initialization before use, No runtime overhead: direct array access, (2) Instance Variables - Bytecode: accessed via object reference, Access instructions: getfield (read), putfield (write), Field descriptor: stored in class file constant pool, Object layout: fields stored sequentially in object memory, Padding: alignment for performance, Inheritance: superclass fields first, then subclass fields, Initialization: default values set during object creation (before constructor), (3) Static Variables - Bytecode: accessed without object reference, Access instructions: getstatic (read), putstatic (write), Storage: class metadata in method area/metaspace, Initialization: during class initialization phase, Class loading: prepared (default values), initialized (explicit values), Synchronization: class initialization is thread-safe. Symbol table: compiler maintains variable metadata (name, type, scope, offset). Optimization: register allocation (frequently used locals), escape analysis (stack allocation for non-escaping objects), constant folding (static final).

### 🔹 One-line Crisp Definition
Variable types = Local (method scope, stack, no default) + Instance (object scope, heap, defaults) + Static (class scope, method area, shared)

---

## DIAGRAM: Three Variable Types

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    TYPES OF VARIABLES IN JAVA                               │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. LOCAL VARIABLES                                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Declaration: Inside methods/blocks                                 │  │
│  │                                                                      │  │
│  │  public void method() {                                             │  │
│  │      int localVar = 10;  // Local variable                          │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Scope: Method/block only                                        │  │
│  │  ├─ Lifetime: Method execution                                      │  │
│  │  ├─ Memory: Stack                                                   │  │
│  │  ├─ Default value: NONE (must initialize)                           │  │
│  │  ├─ Access: Direct name                                             │  │
│  │  ├─ Modifiers: final only                                           │  │
│  │  └─ Thread-safe: Yes (each thread has own stack)                   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. INSTANCE VARIABLES                                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Declaration: Inside class, outside methods                         │  │
│  │                                                                      │  │
│  │  public class Demo {                                                │  │
│  │      int instanceVar = 20;  // Instance variable                    │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Scope: All instance methods                                     │  │
│  │  ├─ Lifetime: Object lifetime                                       │  │
│  │  ├─ Memory: Heap (with object)                                      │  │
│  │  ├─ Default value: 0, false, null                                   │  │
│  │  ├─ Access: Via object (obj.var)                                    │  │
│  │  ├─ Modifiers: public, private, protected, final, etc.             │  │
│  │  ├─ Each object: Own copy                                           │  │
│  │  └─ Thread-safe: No (if object shared)                             │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. STATIC VARIABLES                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Declaration: Inside class with static keyword                      │  │
│  │                                                                      │  │
│  │  public class Demo {                                                │  │
│  │      static int staticVar = 30;  // Static variable                 │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Scope: All methods (static & instance)                          │  │
│  │  ├─ Lifetime: Class lifetime                                        │  │
│  │  ├─ Memory: Method area                                             │  │
│  │  ├─ Default value: 0, false, null                                   │  │
│  │  ├─ Access: Via class name (Demo.staticVar)                         │  │
│  │  ├─ Modifiers: public, private, protected, final, static           │  │
│  │  ├─ Shared: All objects share one copy                              │  │
│  │  └─ Thread-safe: No (shared across threads)                        │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Memory Layout

```
┌─────────────────────────────────────────────────────┐
│         MEMORY LAYOUT OF VARIABLE TYPES             │
└─────────────────────────────────────────────────────┘

CODE:
public class Demo {
    static int staticVar = 10;      // Static
    int instanceVar = 20;            // Instance
    
    public void method() {
        int localVar = 30;           // Local
    }
}

MEMORY STRUCTURE:
┌──────────────────────────────────────┐
│  METHOD AREA (Class Metadata):      │
│  ┌────────────────────────────────┐  │
│  │  Demo class information        │  │
│  │  staticVar = 10                │  │
│  │  (ONE copy, shared by all)     │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  HEAP (Objects):                     │
│  ┌────────────────────────────────┐  │
│  │  Demo object 1:                │  │
│  │  └─ instanceVar = 20           │  │
│  └────────────────────────────────┘  │
│  ┌────────────────────────────────┐  │
│  │  Demo object 2:                │  │
│  │  └─ instanceVar = 20           │  │
│  └────────────────────────────────┘  │
│  (Each object has OWN copy)        │  │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  STACK (Method Calls):               │
│  ┌────────────────────────────────┐  │
│  │  method() frame:               │  │
│  │  └─ localVar = 30              │  │
│  └────────────────────────────────┘  │
│  (Exists only during method call)  │  │
└──────────────────────────────────────┘
```

---

## DIAGRAM: Scope and Lifetime

```
┌─────────────────────────────────────────────────────┐
│         SCOPE AND LIFETIME COMPARISON               │
└─────────────────────────────────────────────────────┘

LOCAL VARIABLE:
┌──────────────────────────────────────┐
│  Scope: { ... }  (block only)        │
│  ├─ Visible: Inside block            │
│  └─ Not visible: Outside block       │
│                                      │
│  Lifetime: Method execution          │
│  ├─ Created: Method entry            │
│  └─ Destroyed: Method exit           │
└──────────────────────────────────────┘

INSTANCE VARIABLE:
┌──────────────────────────────────────┐
│  Scope: Entire class                 │
│  ├─ Visible: All instance methods    │
│  └─ Access: Via object reference     │
│                                      │
│  Lifetime: Object lifetime           │
│  ├─ Created: new Demo()              │
│  └─ Destroyed: Garbage collection    │
└──────────────────────────────────────┘

STATIC VARIABLE:
┌──────────────────────────────────────┐
│  Scope: Entire class                 │
│  ├─ Visible: All methods             │
│  └─ Access: Via class name           │
│                                      │
│  Lifetime: Class lifetime            │
│  ├─ Created: Class loading           │
│  └─ Destroyed: Class unloading       │
└──────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Office Workspace

**Variables = Office Resources:**
```
Office (Java Class):
├─ Personal desk items (instance variables)
│  ├─ Each employee has own desk
│  ├─ Laptop, files, stationery
│  └─ Exists as long as employee works
│
├─ Shared resources (static variables)
│  ├─ Printer, meeting room, coffee machine
│  ├─ All employees share
│  └─ Exists as long as office exists
│
└─ Temporary notes (local variables)
   ├─ Sticky notes during meeting
   ├─ Used and discarded
   └─ Exists only during meeting

Java equivalent:
class Office {
    int deskNumber;           // Instance (each employee)
    static String printer;    // Static (shared)
    
    void meeting() {
        String notes = "..."; // Local (temporary)
    }
}
```

### Example 2: Restaurant

**Variables = Restaurant Items:**
```
Restaurant (Java Class):
├─ Customer orders (instance variables)
│  ├─ Each customer has own order
│  ├─ Table number, food items
│  └─ Exists until bill paid
│
├─ Restaurant name (static variable)
│  ├─ Same for all customers
│  ├─ Shared information
│  └─ Exists as long as restaurant exists
│
└─ Cooking temperature (local variable)
   ├─ Used while cooking
   ├─ Temporary value
   └─ Exists only during cooking

Java equivalent:
class Restaurant {
    int tableNumber;              // Instance
    static String restaurantName; // Static
    
    void cook() {
        int temperature = 180;    // Local
    }
}
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         VARIABLE ACCESS IN BYTECODE                 │
└─────────────────────────────────────────────────────┘

SOURCE CODE:
public class Demo {
    static int staticVar = 10;
    int instanceVar = 20;
    
    public void method() {
        int localVar = 30;
        
        System.out.println(localVar);     // Local
        System.out.println(instanceVar);  // Instance
        System.out.println(staticVar);    // Static
    }
}

BYTECODE:
// Local variable access
0: bipush 30
2: istore_1              // Store in local var slot 1
3: iload_1               // Load from local var slot 1

// Instance variable access
4: aload_0               // Load 'this' reference
5: getfield #2           // Get instanceVar from object

// Static variable access
6: getstatic #3          // Get staticVar from class

INSTRUCTIONS:
├─ Local: iload/istore (direct array access)
├─ Instance: getfield/putfield (via object reference)
└─ Static: getstatic/putstatic (via class)
```

---

## Syntax Explanation

### Complete example with all three types:

```java
public class Demo {
    // ============================================
    // STATIC VARIABLES (Class-level)
    // ============================================
    static int staticCounter = 0;
    static final String APP_NAME = "MyApp";
    private static double version = 1.0;
    
    // ============================================
    // INSTANCE VARIABLES (Object-level)
    // ============================================
    int instanceId;
    String name;
    private double salary;
    protected boolean isActive;
    
    // ============================================
    // CONSTRUCTOR
    // ============================================
    public Demo(String name) {
        // Local variable (parameter)
        // 'name' is local to constructor
        
        this.name = name;  // Assign to instance variable
        staticCounter++;   // Access static variable
        
        // Local variable in constructor
        int tempId = staticCounter;
        this.instanceId = tempId;
    }
    
    // ============================================
    // INSTANCE METHOD
    // ============================================
    public void calculate() {
        // Local variables
        int localVar1 = 10;
        int localVar2 = 20;
        int sum = localVar1 + localVar2;
        
        // Access instance variable
        this.salary = sum * 1000;
        
        // Access static variable
        System.out.println(APP_NAME);
    }
    
    // ============================================
    // STATIC METHOD
    // ============================================
    public static void staticMethod() {
        // Local variable
        int count = 100;
        
        // Access static variable
        staticCounter = count;
        
        // ❌ Cannot access instance variable
        // System.out.println(instanceId);  // Error!
        
        // ✅ Must create object to access instance variable
        Demo obj = new Demo("Test");
        System.out.println(obj.instanceId);  // OK
    }
    
    // ============================================
    // BLOCK SCOPE
    // ============================================
    public void blockExample() {
        int x = 10;  // Method scope
        
        if (x > 0) {
            int y = 20;  // Block scope
            System.out.println(x);  // ✅ OK
            System.out.println(y);  // ✅ OK
        }
        
        System.out.println(x);  // ✅ OK
        // System.out.println(y);  // ❌ Error: y out of scope
    }
}
```

### Accessing variables:

```java
public class Demo {
    static int staticVar = 10;
    int instanceVar = 20;
    
    public void method() {
        int localVar = 30;
        
        // Local variable: direct access
        System.out.println(localVar);
        
        // Instance variable: via 'this' (optional)
        System.out.println(this.instanceVar);
        System.out.println(instanceVar);  // Same as above
        
        // Static variable: via class name or 'this'
        System.out.println(Demo.staticVar);  // Preferred
        System.out.println(staticVar);       // Also works
        System.out.println(this.staticVar);  // Works but not recommended
    }
    
    public static void staticMethod() {
        // Static variable: direct access
        System.out.println(staticVar);
        System.out.println(Demo.staticVar);
        
        // ❌ Cannot access instance variable directly
        // System.out.println(instanceVar);  // Error!
        
        // ✅ Must create object
        Demo obj = new Demo();
        System.out.println(obj.instanceVar);  // OK
    }
}
```

### Default values:

```java
public class Demo {
    // Instance variables (have default values)
    byte b;        // Default: 0
    short s;       // Default: 0
    int i;         // Default: 0
    long l;        // Default: 0L
    float f;       // Default: 0.0f
    double d;      // Default: 0.0
    char c;        // Default: '\u0000'
    boolean flag;  // Default: false
    String str;    // Default: null
    int[] arr;     // Default: null
    
    // Static variables (have default values)
    static int count;  // Default: 0
    
    public void method() {
        // Local variables (NO default values)
        int x;
        // System.out.println(x);  // ❌ Error: not initialized
        
        x = 10;  // Must initialize
        System.out.println(x);  // ✅ OK
        
        // Instance variables can be used without initialization
        System.out.println(i);     // Prints 0
        System.out.println(flag);  // Prints false
        System.out.println(str);   // Prints null
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         MEMORY ALLOCATION TIMELINE                  │
└─────────────────────────────────────────────────────┘

CODE:
public class Counter {
    static int totalCount = 0;  // Static
    int instanceCount = 0;       // Instance
    
    public void increment() {
        int temp = 1;            // Local
        instanceCount += temp;
        totalCount += temp;
    }
}

TIMELINE:

1. CLASS LOADING:
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ totalCount = 0 (initialized)     │
│     (ONE copy for entire class)      │
└──────────────────────────────────────┘

2. OBJECT CREATION (Counter c1 = new Counter()):
┌──────────────────────────────────────┐
│  HEAP:                               │
│  Counter object 1:                   │
│  └─ instanceCount = 0                │
└──────────────────────────────────────┘

3. OBJECT CREATION (Counter c2 = new Counter()):
┌──────────────────────────────────────┐
│  HEAP:                               │
│  Counter object 1:                   │
│  └─ instanceCount = 0                │
│  Counter object 2:                   │
│  └─ instanceCount = 0                │
│  (Each object has OWN copy)          │
└──────────────────────────────────────┘

4. METHOD CALL (c1.increment()):
┌──────────────────────────────────────┐
│  STACK:                              │
│  increment() frame:                  │
│  └─ temp = 1                         │
│     (Created and destroyed)          │
└──────────────────────────────────────┘

AFTER c1.increment():
├─ c1.instanceCount = 1 (only c1 affected)
├─ c2.instanceCount = 0 (unchanged)
└─ totalCount = 1 (shared, both see change)

AFTER c2.increment():
├─ c1.instanceCount = 1 (unchanged)
├─ c2.instanceCount = 1 (only c2 affected)
└─ totalCount = 2 (shared, incremented again)
```

---

## Advantages

✅ **Local Variables**: Fast access (stack), automatic cleanup, thread-safe  
✅ **Instance Variables**: Object-specific state, encapsulation, default values  
✅ **Static Variables**: Shared data, memory efficient, class-level constants  
✅ **Clear Separation**: Different purposes, appropriate scopes  
✅ **Memory Management**: Automatic allocation/deallocation  

---

## Limitations

❌ **Local Variables**: No default values, limited scope, must initialize  
❌ **Instance Variables**: Memory overhead (per object), not thread-safe  
❌ **Static Variables**: Not thread-safe, global state issues, testing difficulties  
❌ **Scope Restrictions**: Cannot access out-of-scope variables  

---

## Edge Cases

🔸 **Variable shadowing:**
```java
class Demo {
    int x = 10;  // Instance variable
    
    void method(int x) {  // Parameter shadows instance variable
        System.out.println(x);       // Prints parameter
        System.out.println(this.x);  // Prints instance variable
        
        int x = 20;  // ❌ Error: duplicate local variable
    }
}
```

🔸 **Static method accessing instance variable:**
```java
class Demo {
    int instanceVar = 10;
    
    static void staticMethod() {
        // System.out.println(instanceVar);  // ❌ Error!
        
        Demo obj = new Demo();
        System.out.println(obj.instanceVar);  // ✅ OK
    }
}
```

🔸 **Local variable scope:**
```java
void method() {
    if (true) {
        int x = 10;
    }
    // System.out.println(x);  // ❌ Error: x out of scope
}
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Using local variable without initialization
```java
❌ void method() {
       int x;
       System.out.println(x);  // Error: not initialized
   }

✅ void method() {
       int x = 0;
       System.out.println(x);  // OK
   }
```

🚫 **Mistake 2**: Accessing instance variable from static method
```java
❌ class Demo {
       int x = 10;
       static void method() {
           System.out.println(x);  // Error!
       }
   }

✅ class Demo {
       int x = 10;
       static void method() {
           Demo obj = new Demo();
           System.out.println(obj.x);  // OK
       }
   }
```

🚫 **Mistake 3**: Confusing instance and static variables
```java
❌ class Counter {
       int count = 0;  // Instance (each object has own)
       void increment() {
           count++;  // Only increments THIS object's count
       }
   }

✅ class Counter {
       static int count = 0;  // Static (shared)
       void increment() {
           count++;  // Increments shared count
       }
   }
```

🚫 **Mistake 4**: Variable shadowing confusion
```java
❌ class Demo {
       int x = 10;
       void method() {
           int x = 20;  // Shadows instance variable
           System.out.println(x);  // Prints 20, not 10!
       }
   }

✅ class Demo {
       int x = 10;
       void method() {
           int y = 20;  // Different name
           System.out.println(x);  // Prints 10
           System.out.println(y);  // Prints 20
       }
   }
```

---

## Important Interview Points

💡 **Q: What are the types of variables in Java?**  
**A**: Three types:
- **Local variables**: Declared in methods/blocks, scope limited to method, no default values, must initialize, stored in stack
- **Instance variables**: Declared in class, belong to object, have default values (0, false, null), stored in heap
- **Static variables**: Declared with static keyword, shared across all objects, have default values, stored in method area
Example:
```java
class Demo {
    static int staticVar;    // Static
    int instanceVar;         // Instance
    void method() {
        int localVar = 10;   // Local
    }
}
```

💡 **Q: What is the difference between instance and static variables?**  
**A**: 
- **Instance**: Each object has own copy, accessed via object reference, stored in heap, exists as long as object exists
- **Static**: One copy shared by all objects, accessed via class name, stored in method area, exists as long as class is loaded
Example:
```java
class Counter {
    int instanceCount = 0;      // Each object has own
    static int staticCount = 0; // Shared by all
}
Counter c1 = new Counter();
Counter c2 = new Counter();
c1.instanceCount++;  // Only c1 affected
Counter.staticCount++;  // All objects see change
```

💡 **Q: Do local variables have default values?**  
**A**: No, local variables have NO default values. Must initialize before use, otherwise compile-time error. Instance and static variables have default values (0, false, null). Example:
```java
void method() {
    int x;
    System.out.println(x);  // ❌ Error: not initialized
}

class Demo {
    int x;  // Default: 0
    void method() {
        System.out.println(x);  // ✅ OK, prints 0
    }
}
```

💡 **Q: Can static method access instance variables?**  
**A**: No, static methods cannot directly access instance variables because static methods belong to class, not object. Must create object to access instance variables. Example:
```java
class Demo {
    int instanceVar = 10;
    
    static void staticMethod() {
        // System.out.println(instanceVar);  // ❌ Error!
        
        Demo obj = new Demo();
        System.out.println(obj.instanceVar);  // ✅ OK
    }
}
```

💡 **Q: Where are different variable types stored in memory?**  
**A**: 
- **Local variables**: Stack (in method frame)
- **Instance variables**: Heap (with object)
- **Static variables**: Method area (class metadata)
Memory efficiency: Static (one copy) > Local (per call) > Instance (per object).

💡 **Q: What is variable shadowing?**  
**A**: Variable shadowing occurs when local variable has same name as instance variable. Local variable hides (shadows) instance variable in that scope. Use `this` keyword to access instance variable. Example:
```java
class Demo {
    int x = 10;  // Instance
    
    void method() {
        int x = 20;  // Local (shadows instance)
        System.out.println(x);       // Prints 20 (local)
        System.out.println(this.x);  // Prints 10 (instance)
    }
}
```

💡 **Q: What is the scope and lifetime of each variable type?**  
**A**: 
- **Local**: Scope = method/block, Lifetime = method execution
- **Instance**: Scope = all instance methods, Lifetime = object lifetime (creation to GC)
- **Static**: Scope = all methods, Lifetime = class lifetime (class load to unload)

💡 **Q: Can we declare variable with same name in different scopes?**  
**A**: Yes, in different scopes (different methods, nested blocks). No, in same scope. Example:
```java
class Demo {
    void method1() {
        int x = 10;  // ✅ OK
    }
    
    void method2() {
        int x = 20;  // ✅ OK (different scope)
    }
    
    void method3() {
        int x = 10;
        int x = 20;  // ❌ Error: duplicate variable
    }
}
```

---

## Short Recap

Java mein teen variable types: Local (method mein, stack, no default, must initialize), Instance (class mein, heap, default values, per object), Static (class mein with static, method area, shared, default values). Memory: Local → stack, Instance → heap, Static → method area. Scope: Local (method), Instance (all instance methods), Static (all methods). Lifetime: Local (method execution), Instance (object lifetime), Static (class lifetime). Default values: Local (NONE), Instance/Static (0, false, null). Access: Local (direct), Instance (via object), Static (via class name). Static method cannot access instance variables directly. Variable shadowing: local variable hides instance variable (use this to access instance). Interview ke liye yaad rakho: 3 types, memory locations, scope/lifetime, default values, static vs instance difference, aur shadowing concept.

---

**Previous**: [← 34 - Declaration vs Initialization](./34-declaration-vs-initialization.md)  
**Next**: [36 - Scope of Variables →](./36-scope-of-variables.md)
