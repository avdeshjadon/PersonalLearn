# 40) DEFAULT VALUES IN JAVA

## Concept Introduction

Default values wo initial values hain jo variables ko automatically assign hoti hain jab explicitly initialize nahi karte. Instance variables aur static variables ko Java automatically default values deta hai: numbers ko 0, boolean ko false, char ko '\u0000', aur references ko null. Lekin local variables ko koi default value nahi milti — unhe use karne se pehle explicitly initialize karna mandatory hai. Default values memory safety ensure karte hain aur uninitialized variable bugs prevent karte hain. Yeh behavior samajhna important hai kyunki instance/static variables bina initialization ke use ho sakte hain, but local variables nahi!

---

## Why This Concept Exists

**Problem:**
- Uninitialized variables unpredictable values contain karte hain
- Memory garbage values security risk hain
- Instance variables ko har constructor mein initialize karna tedious hai
- Consistent initial state kaise ensure karein?

**Solution (Default Values):**
- Instance/static variables: automatic default values
- Memory safety: no garbage values
- Predictable initial state
- Local variables: no defaults (must initialize explicitly)
- Compile-time checking for locals
- Type-specific defaults

---

## Definitions

### 🔹 Very Simple Definition
Default values wo initial values hain jo instance/static variables ko automatically milti hain — 0, false, null.

### 🔹 College Exam Definition
Default values are initial values automatically assigned to instance and static variables when not explicitly initialized. Default values by type: (1) Numeric types (byte, short, int, long, float, double): 0, (2) boolean: false, (3) char: '\u0000' (null character), (4) Reference types (classes, interfaces, arrays): null. Local variables do NOT have default values and must be explicitly initialized before use, otherwise compile-time error. Default values ensure memory safety by preventing access to garbage values and provide predictable initial state for object fields.

### 🔹 Viva Definition
Default values are type-specific initial values assigned during variable allocation for instance and static variables. Assignment timing: (1) Instance variables: during object creation (before constructor execution), (2) Static variables: during class initialization (before static block execution), (3) Local variables: NO defaults (compiler enforces definite assignment). Default values by category: Numeric primitives (byte/short/int/long/float/double): 0 or 0.0, Boolean: false, Character: '\u0000' (Unicode null character, not printable), Reference types: null (no object reference). Rationale: Memory safety (prevent garbage values), Predictable state (objects start in known state), Convenience (no need to initialize every field), Performance (JVM optimizes default initialization). Local variables exception: Stack-allocated, short-lived, compiler tracks initialization, must initialize before use (definite assignment analysis), prevents accidental use of uninitialized variables.

### 🔹 Interview Definition
Default values are JVM-assigned initial values for instance/static variables, ensuring memory safety and predictable object state. Details: (1) Instance Variables - Assignment: During object creation via new operator, Timing: After memory allocation, before constructor, Process: JVM zeros out allocated memory, then applies explicit initializers, then runs constructor, Default values: byte/short/int/long (0), float (0.0f), double (0.0), boolean (false), char ('\u0000'), references (null), Example: class Demo { int x; } → x automatically 0, (2) Static Variables - Assignment: During class initialization, Timing: When class first used (loaded), Process: Preparation phase sets defaults, initialization phase runs static initializers, Default values: Same as instance variables, Shared: One copy for all instances, Example: class Demo { static int count; } → count automatically 0, (3) Local Variables - NO defaults: Must initialize explicitly, Compiler checking: Definite assignment analysis, Error: Use before initialization causes compile error, Rationale: Short-lived, stack-allocated, explicit initialization prevents bugs, Example: void method() { int x; System.out.println(x); } → compile error. Default value guarantees: Instance/static: Always have defaults, Arrays: Elements have defaults (int[] arr = new int[5]; → all elements 0), Object fields: Defaults applied recursively, Local: Never have defaults. Memory initialization: JVM zeros memory during allocation, Efficient: Hardware-level memory clearing, Safe: No garbage values exposed, Predictable: Consistent across platforms.

### 🔹 Technical Definition
Default values are JVM specification-mandated initial values assigned during memory allocation and class/object initialization phases. Implementation: (1) Object Creation - Memory allocation: new bytecode allocates heap memory, Zeroing: JVM zeros allocated memory (all bits 0), Field initialization: Explicit initializers executed, Constructor: User code runs, Result: Fields have defaults before constructor, (2) Class Initialization - Class loading: Triggers <clinit> method, Preparation: Static fields allocated and set to defaults, Initialization: Static initializers executed, Result: Static fields have defaults before static blocks, (3) Default Value Encoding - Numeric: Binary zero (0x00...00), Boolean: false (0x00), Char: '\u0000' (0x0000), Reference: null (0x00...00 or special null pointer), (4) Bytecode - No explicit initialization bytecode for defaults, Implicit: Memory zeroing provides defaults, Explicit initializers: Generate putfield/putstatic instructions, (5) Local Variables - No defaults: Stack slots contain previous values (garbage), Verification: Bytecode verifier ensures initialization, Definite assignment: Compiler flow analysis, Error: Uninitialized local variable access rejected, (6) Arrays - Array creation: new int[5] allocates and zeros memory, Element defaults: Same as primitive/reference defaults, Multi-dimensional: Recursive default application. JVM Specification: Instance/static fields must have defaults, Local variables must not have defaults (explicit initialization required), Default values are type-specific and platform-independent, Memory safety enforced by verifier.

### 🔹 One-line Crisp Definition
Default values = Instance/static: 0/false/null (automatic) + Local: none (must initialize)

---

## DIAGRAM: Default Values by Type

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DEFAULT VALUES IN JAVA                                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  INSTANCE & STATIC VARIABLES (Have Defaults)                              │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  NUMERIC TYPES:                                                      │  │
│  │  ├─ byte:    0                                                       │  │
│  │  ├─ short:   0                                                       │  │
│  │  ├─ int:     0                                                       │  │
│  │  ├─ long:    0L                                                      │  │
│  │  ├─ float:   0.0f                                                    │  │
│  │  └─ double:  0.0                                                     │  │
│  │                                                                      │  │
│  │  BOOLEAN TYPE:                                                       │  │
│  │  └─ boolean: false                                                   │  │
│  │                                                                      │  │
│  │  CHARACTER TYPE:                                                     │  │
│  │  └─ char:    '\u0000' (null character, not printable)               │  │
│  │                                                                      │  │
│  │  REFERENCE TYPES:                                                    │  │
│  │  ├─ String:  null                                                    │  │
│  │  ├─ Object:  null                                                    │  │
│  │  ├─ Arrays:  null                                                    │  │
│  │  └─ Custom:  null                                                    │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  LOCAL VARIABLES (NO Defaults)                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  ALL TYPES:                                                          │  │
│  │  └─ NO default values                                                │  │
│  │     Must initialize before use                                       │  │
│  │     Compile error if used uninitialized                              │  │
│  │                                                                      │  │
│  │  Example:                                                            │  │
│  │  void method() {                                                     │  │
│  │      int x;  // No default                                          │  │
│  │      System.out.println(x);  // ❌ Compile error                    │  │
│  │  }                                                                   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Default Values in Action

```
┌─────────────────────────────────────────────────────┐
│         DEFAULT VALUES DEMONSTRATION                │
└─────────────────────────────────────────────────────┘

CODE:
public class Demo {
    // Instance variables (have defaults)
    byte b;
    int i;
    double d;
    boolean flag;
    char c;
    String s;
    
    // Static variables (have defaults)
    static int count;
    static String name;
    
    public void method() {
        // Local variables (NO defaults)
        int local;
    }
}

MEMORY STATE AFTER OBJECT CREATION:

HEAP (Instance Variables):
┌──────────────────────────────────────┐
│  Demo object:                        │
│  ├─ b = 0                            │
│  ├─ i = 0                            │
│  ├─ d = 0.0                          │
│  ├─ flag = false                     │
│  ├─ c = '\u0000'                     │
│  └─ s = null                         │
│                                      │
│  All automatically initialized!      │
└──────────────────────────────────────┘

METHOD AREA (Static Variables):
┌──────────────────────────────────────┐
│  Demo class:                         │
│  ├─ count = 0                        │
│  └─ name = null                      │
│                                      │
│  Initialized at class loading!       │
└──────────────────────────────────────┘

STACK (Local Variables):
┌──────────────────────────────────────┐
│  method() frame:                     │
│  └─ local = ???                      │
│                                      │
│  NO default! Must initialize!        │
└──────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Form Fields

**Default Values = Pre-filled Form:**
```
Registration Form (Java Class):
├─ Name field (instance variable)
│  ├─ Default: empty (null)
│  └─ User fills later
│
├─ Age field (instance variable)
│  ├─ Default: 0
│  └─ User fills later
│
├─ Active checkbox (instance variable)
│  ├─ Default: unchecked (false)
│  └─ User checks if needed
│
└─ Temporary note (local variable)
   ├─ Default: NONE
   └─ Must write before using

Java equivalent:
class Registration {
    String name;      // Default: null
    int age;          // Default: 0
    boolean active;   // Default: false
    
    void process() {
        String note;  // NO default, must initialize
    }
}
```

### Example 2: Bank Account

**Default Values = Initial Balance:**
```
Bank Account (Java Class):
├─ Account balance (instance variable)
│  ├─ Default: ₹0
│  └─ Starts with zero
│
├─ Account active (instance variable)
│  ├─ Default: false
│  └─ Needs activation
│
├─ Account holder (instance variable)
│  ├─ Default: null
│  └─ Must set name
│
└─ Transaction amount (local variable)
   ├─ Default: NONE
   └─ Must specify amount

Java equivalent:
class BankAccount {
    double balance;   // Default: 0.0
    boolean active;   // Default: false
    String holder;    // Default: null
    
    void deposit() {
        double amount;  // NO default
    }
}
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         DEFAULT VALUE INITIALIZATION                │
└─────────────────────────────────────────────────────┘

CODE:
public class Demo {
    int x;
    String s;
    
    public Demo() {
        System.out.println(x);  // Prints 0
        System.out.println(s);  // Prints null
    }
}

OBJECT CREATION PROCESS:

1. MEMORY ALLOCATION:
┌──────────────────────────────────────┐
│  new Demo() allocates heap memory    │
│  Size: object header + fields        │
└──────────────────────────────────────┘

2. MEMORY ZEROING:
┌──────────────────────────────────────┐
│  JVM zeros allocated memory          │
│  x: [00000000 00000000               │
│      00000000 00000000] = 0          │
│  s: [00000000 00000000               │
│      00000000 00000000] = null       │
└──────────────────────────────────────┘

3. EXPLICIT INITIALIZERS (if any):
┌──────────────────────────────────────┐
│  Execute field initializers          │
│  Example: int x = 10;                │
└──────────────────────────────────────┘

4. CONSTRUCTOR EXECUTION:
┌──────────────────────────────────────┐
│  Run constructor code                │
│  Fields already have defaults        │
└──────────────────────────────────────┘

RESULT:
Fields have defaults BEFORE constructor runs!
```

---

## Syntax Explanation

### Instance variables with defaults:

```java
public class Demo {
    // All have default values
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
    
    public void display() {
        // Can use without initialization
        System.out.println(b);     // 0
        System.out.println(i);     // 0
        System.out.println(d);     // 0.0
        System.out.println(flag);  // false
        System.out.println(str);   // null
    }
}
```

### Static variables with defaults:

```java
public class Demo {
    // Static variables have defaults
    static int count;       // Default: 0
    static String name;     // Default: null
    static boolean active;  // Default: false
    
    public static void main(String[] args) {
        // Can use without initialization
        System.out.println(count);   // 0
        System.out.println(name);    // null
        System.out.println(active);  // false
    }
}
```

### Local variables WITHOUT defaults:

```java
public class Demo {
    public void method() {
        // Local variables have NO defaults
        int x;
        String s;
        boolean flag;
        
        // ❌ Cannot use without initialization
        // System.out.println(x);     // Compile error
        // System.out.println(s);     // Compile error
        // System.out.println(flag);  // Compile error
        
        // ✅ Must initialize first
        x = 10;
        s = "Hello";
        flag = true;
        
        System.out.println(x);     // OK
        System.out.println(s);     // OK
        System.out.println(flag);  // OK
    }
}
```

### Array elements have defaults:

```java
public class Demo {
    public static void main(String[] args) {
        // Array elements have defaults
        int[] numbers = new int[5];
        // All elements: 0, 0, 0, 0, 0
        
        boolean[] flags = new boolean[3];
        // All elements: false, false, false
        
        String[] names = new String[2];
        // All elements: null, null
        
        System.out.println(numbers[0]);  // 0
        System.out.println(flags[0]);    // false
        System.out.println(names[0]);    // null
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         DEFAULT VALUES IN MEMORY                    │
└─────────────────────────────────────────────────────┘

CODE:
class Demo {
    int x;
    String s;
}

Demo obj = new Demo();

HEAP MEMORY:
┌──────────────────────────────────────┐
│  Demo object:                        │
│  ├─ Header (mark, class pointer)     │
│  ├─ x: [00000000 00000000            │
│  │      00000000 00000000] = 0       │
│  └─ s: [00000000 00000000            │
│         00000000 00000000] = null    │
│                                      │
│  Memory zeroed by JVM!               │
└──────────────────────────────────────┘

BINARY REPRESENTATION:
├─ int (0):     00000000 00000000 00000000 00000000
├─ boolean (false): 00000000
├─ char ('\u0000'): 00000000 00000000
└─ reference (null): 00000000 00000000 00000000 00000000
```

---

## Advantages

✅ **Memory Safety**: No garbage values  
✅ **Predictable State**: Objects start in known state  
✅ **Convenience**: No need to initialize every field  
✅ **Consistency**: Same defaults across platforms  
✅ **Bug Prevention**: Uninitialized locals caught at compile-time  

---

## Limitations

❌ **Hidden Bugs**: Relying on defaults may hide logic errors  
❌ **Null Pointer**: Default null can cause NullPointerException  
❌ **Implicit Behavior**: Defaults not always obvious  

---

## Edge Cases

🔸 **Char default is not space:**
```java
char c;  // Default: '\u0000' (not ' ')
System.out.println((int) c);  // 0 (not 32)
```

🔸 **Array elements have defaults:**
```java
int[] arr = new int[5];
// All elements: 0, 0, 0, 0, 0 (not garbage)
```

🔸 **Local variables in conditional:**
```java
int x;
if (condition) {
    x = 10;
}
// System.out.println(x);  // ❌ Error: may not be initialized
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Using uninitialized local variable
```java
❌ void method() {
       int x;
       System.out.println(x);  // Error
   }

✅ void method() {
       int x = 0;
       System.out.println(x);  // OK
   }
```

🚫 **Mistake 2**: Assuming local variables have defaults
```java
❌ void method() {
       int count;
       count++;  // Error: count not initialized
   }

✅ void method() {
       int count = 0;
       count++;  // OK
   }
```

🚫 **Mistake 3**: Relying on defaults for logic
```java
❌ class Demo {
       int status;  // Default: 0
       // Assuming 0 means "not started"
       // But what if 0 is valid status?
   }

✅ class Demo {
       int status = -1;  // Explicit "not started"
   }
```

🚫 **Mistake 4**: Null pointer with defaults
```java
❌ class Demo {
       String name;  // Default: null
       void print() {
           System.out.println(name.length());  // NullPointerException!
       }
   }

✅ class Demo {
       String name = "";  // Or check for null
       void print() {
           if (name != null) {
               System.out.println(name.length());
           }
       }
   }
```

---

## Important Interview Points

💡 **Q: What are default values in Java?**  
**A**: Default values are initial values automatically assigned to instance and static variables:
- Numbers: 0 (byte, short, int, long, float, double)
- boolean: false
- char: '\u0000'
- References: null
Local variables have NO default values.

💡 **Q: Do local variables have default values?**  
**A**: No, local variables do NOT have default values. Must initialize explicitly before use, otherwise compile-time error. Example:
```java
void method() {
    int x;
    System.out.println(x);  // ❌ Error: not initialized
}
```

💡 **Q: Why do instance variables have defaults but local variables don't?**  
**A**: 
- **Instance variables**: Long-lived, part of object state, defaults ensure predictable initial state
- **Local variables**: Short-lived, stack-allocated, compiler enforces explicit initialization to prevent bugs
Design choice: Explicit initialization for locals catches more errors at compile-time.

💡 **Q: What is the default value of String?**  
**A**: null (for instance/static variables). String is reference type, default is null. Local String variables have no default. Example:
```java
class Demo {
    String s;  // Default: null
    void method() {
        String local;  // NO default
    }
}
```

💡 **Q: What is the default value of char?**  
**A**: '\u0000' (null character, Unicode 0). Not space (' '), not empty. Not printable character. Example:
```java
char c;  // Default: '\u0000'
System.out.println((int) c);  // 0
```

💡 **Q: Do array elements have default values?**  
**A**: Yes, array elements have default values same as instance variables. Example:
```java
int[] arr = new int[5];  // All elements: 0
boolean[] flags = new boolean[3];  // All: false
String[] names = new String[2];  // All: null
```

💡 **Q: When are default values assigned?**  
**A**: 
- **Instance variables**: During object creation (before constructor)
- **Static variables**: During class initialization (before static blocks)
- **Array elements**: During array creation
Timing: Defaults assigned before any user code runs.

💡 **Q: Can we rely on default values?**  
**A**: Yes for instance/static variables, but explicit initialization often clearer. Relying on defaults can hide bugs. Best practice: Initialize explicitly when default doesn't represent intended initial state. Example:
```java
class Counter {
    int count;  // Default 0 is fine
    String status = "PENDING";  // Explicit better than null
}
```

---

## Short Recap

Default values instance aur static variables ko automatically assign hoti hain. Numeric types: 0, boolean: false, char: '\u0000', references: null. Local variables ko koi default value nahi milti — must initialize before use. Instance variables object creation pe defaults get karte hain (before constructor). Static variables class loading pe defaults get karte hain (before static blocks). Array elements bhi defaults get karte hain. Defaults memory safety ensure karte hain (no garbage values). Local variables mein no defaults kyunki compiler explicit initialization enforce karta hai (bug prevention). Interview ke liye yaad rakho: instance/static have defaults, local don't, default values by type (0/false/'\u0000'/null), timing (object creation/class loading), array elements have defaults, aur why locals don't have defaults (explicit initialization prevents bugs).

---

**Previous**: [← 39 - Primitive Data Types](./39-primitive-data-types.md)  
**Next**: [41 - ASCII vs Unicode →](./41-ascii-vs-unicode.md)
