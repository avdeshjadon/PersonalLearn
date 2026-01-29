# 38) DATA TYPES IN JAVA

## Concept Introduction

Data types define kis type ka data variable store kar sakta hai — yeh size, range, aur operations determine karte hain. Java strongly-typed language hai, matlab har variable ka type declare karna mandatory hai. Java mein do categories hain: Primitive types (8 types: byte, short, int, long, float, double, char, boolean) aur Reference types (classes, interfaces, arrays). Primitive types actual value store karte hain, reference types memory address store karte hain. Har type ka fixed size hai: int 4 bytes, double 8 bytes, etc. Type system compile-time pe type safety ensure karta hai. Data types samajhna fundamental hai proper variable declaration aur memory management ke liye!

---

## Why This Concept Exists

**Problem:**
- Different types of data kaise store karein?
- Memory efficiently kaise use karein?
- Type safety kaise ensure karein?
- Operations kaise restrict karein?
- Range overflow kaise prevent karein?

**Solution (Data Types):**
- Primitive types for basic values
- Reference types for complex objects
- Fixed size for memory predictability
- Type checking at compile-time
- Appropriate range for each type
- Type-specific operations

---

## Definitions

### 🔹 Very Simple Definition
Data types define variable mein kis type ka data store hoga — numbers, characters, true/false, objects.

### 🔹 College Exam Definition
Data types specify the type and size of values that can be stored in variables. Java has two categories: (1) Primitive Data Types - 8 types: byte (1 byte, -128 to 127), short (2 bytes, -32768 to 32767), int (4 bytes, -2³¹ to 2³¹-1), long (8 bytes, -2⁶³ to 2⁶³-1), float (4 bytes, decimal), double (8 bytes, decimal), char (2 bytes, Unicode character), boolean (1 bit, true/false), Store actual values, Stored in stack (local) or heap (instance), Default values: 0 for numbers, false for boolean, '\u0000' for char, (2) Reference Data Types - Classes, Interfaces, Arrays, Store memory address (reference), Point to objects in heap, Default value: null, Size: 4 bytes (32-bit) or 8 bytes (64-bit) for reference. Java is strongly-typed: type must be declared, type cannot change after declaration, type checking at compile-time.

### 🔹 Viva Definition
Data types are classifications specifying value domain, storage size, and permissible operations. Categories: (1) Primitive Types - Integer types: byte (8-bit, -128 to 127), short (16-bit, -32768 to 32767), int (32-bit, -2³¹ to 2³¹-1, default for integers), long (64-bit, -2⁶³ to 2⁶³-1, suffix L), Floating-point types: float (32-bit, IEEE 754, suffix f, precision ~7 digits), double (64-bit, IEEE 754, default for decimals, precision ~15 digits), Character type: char (16-bit, Unicode 0 to 65535, UTF-16), Boolean type: boolean (true/false, not 0/1), Storage: primitives store actual value, Value semantics: assignment copies value, Stack/heap: local primitives in stack, instance primitives in heap with object, (2) Reference Types - Classes: user-defined or built-in (String, Integer, etc.), Interfaces: contract specifications, Arrays: fixed-size collections, Storage: references store memory address (pointer), Reference semantics: assignment copies reference (not object), Heap: objects always in heap, reference in stack/heap, null: special value representing no object. Type system: Static typing (compile-time), Strong typing (no implicit unsafe conversions), Type inference: var keyword (Java 10+, local variables only).

### 🔹 Interview Definition
Data types are compile-time constructs defining value representation, storage allocation, and operation semantics. Classification: (1) Primitive Types - Integer family: byte (8-bit signed, -128 to 127, range: 2⁸), short (16-bit signed, -32768 to 32767, range: 2¹⁶), int (32-bit signed, -2,147,483,648 to 2,147,483,647, default integer type, range: 2³²), long (64-bit signed, -2⁶³ to 2⁶³-1, literal suffix L/l, range: 2⁶⁴), Floating-point family: float (32-bit IEEE 754, ±3.4E38, precision ~7 decimal digits, literal suffix f/F), double (64-bit IEEE 754, ±1.7E308, precision ~15 decimal digits, default decimal type), Character: char (16-bit unsigned, 0 to 65535, UTF-16 encoding, Unicode support), Boolean: boolean (true/false, JVM implementation-dependent size, not interchangeable with int), Value semantics: assignment copies value, comparison compares values, Stack allocation: local primitives, Heap allocation: instance/static primitives (with object/class), (2) Reference Types - Classes: Object, String, Integer, custom classes, Interfaces: Runnable, Comparable, custom interfaces, Arrays: int[], String[], Object[][], Enums: user-defined enumerations, Reference semantics: assignment copies reference (aliasing), comparison compares references (use equals() for content), Heap allocation: objects always in heap, Stack/heap: reference variable location, null literal: represents no object, Size: 4 bytes (32-bit JVM) or 8 bytes (64-bit JVM) for reference. Type system features: Static typing (type declared at compile-time), Strong typing (no implicit unsafe conversions), Type inference (var keyword Java 10+, local variables only), Autoboxing/unboxing (automatic primitive-wrapper conversion), Generics (parameterized types with type erasure).

### 🔹 Technical Definition
Data types are type descriptors in Java's type system, implemented via bytecode type codes and JVM type verification. Primitive types: Bytecode representation (I=int, J=long, F=float, D=double, B=byte, S=short, C=char, Z=boolean), Stack operations (iload/istore for int, lload/lstore for long, fload/fstore for float, dload/dstore for double, aload/astore for references), Computational type: int, long, float, double, reference (byte/short/char promoted to int for computation), Default values: 0 for numeric, false for boolean, '\u0000' for char (instance/static only, locals have no defaults), Memory alignment: primitives aligned to natural boundaries (int: 4-byte, long: 8-byte), Reference types: Object header (mark word for GC/locking, class pointer), Field layout (instance variables), Array header (length field), Reference compression (compressed oops in 64-bit JVM, 32-bit references for heaps <32GB), Type checking: Compile-time (static type checking), Runtime (instanceof, checkcast bytecode), Verification (bytecode verifier ensures type safety), Type erasure: Generics erased to raw types at runtime, Bridge methods for covariant returns. JVM specification: Primitive types have fixed sizes, Reference types have implementation-dependent sizes, Type safety enforced by verifier, No unsigned types (except char).

### 🔹 One-line Crisp Definition
Data types = Value domain + Storage size + Operations + Type safety (Primitives: 8 types, References: classes/interfaces/arrays)

---

## DIAGRAM: Data Type Categories

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA DATA TYPES                                          │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  PRIMITIVE TYPES (8 types)                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  INTEGER TYPES (4 types):                                           │  │
│  │  ├─ byte    1 byte   -128 to 127                                    │  │
│  │  ├─ short   2 bytes  -32,768 to 32,767                              │  │
│  │  ├─ int     4 bytes  -2,147,483,648 to 2,147,483,647 (default)     │  │
│  │  └─ long    8 bytes  -9,223,372,036,854,775,808 to ...807 (L)      │  │
│  │                                                                      │  │
│  │  FLOATING-POINT TYPES (2 types):                                    │  │
│  │  ├─ float   4 bytes  ±3.4E38 (~7 digits precision) (f)             │  │
│  │  └─ double  8 bytes  ±1.7E308 (~15 digits precision) (default)     │  │
│  │                                                                      │  │
│  │  CHARACTER TYPE (1 type):                                           │  │
│  │  └─ char    2 bytes  0 to 65,535 (Unicode UTF-16)                  │  │
│  │                                                                      │  │
│  │  BOOLEAN TYPE (1 type):                                             │  │
│  │  └─ boolean 1 bit    true or false                                  │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Store actual values                                             │  │
│  │  ├─ Fixed size                                                       │  │
│  │  ├─ Stack (local) or Heap (instance)                                │  │
│  │  ├─ Default values: 0, false, '\u0000'                              │  │
│  │  └─ Value semantics (copy value)                                    │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  REFERENCE TYPES                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  CLASSES:                                                            │  │
│  │  ├─ String, Integer, Object                                         │  │
│  │  └─ User-defined classes                                            │  │
│  │                                                                      │  │
│  │  INTERFACES:                                                         │  │
│  │  ├─ Runnable, Comparable                                            │  │
│  │  └─ User-defined interfaces                                         │  │
│  │                                                                      │  │
│  │  ARRAYS:                                                             │  │
│  │  ├─ int[], String[], Object[][]                                     │  │
│  │  └─ Fixed-size collections                                          │  │
│  │                                                                      │  │
│  │  ENUMS:                                                              │  │
│  │  └─ User-defined enumerations                                       │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Store memory address (reference)                                │  │
│  │  ├─ Variable size (4 or 8 bytes for reference)                      │  │
│  │  ├─ Objects in Heap, reference in Stack/Heap                        │  │
│  │  ├─ Default value: null                                             │  │
│  │  └─ Reference semantics (copy reference)                            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Primitive Type Sizes

```
┌─────────────────────────────────────────────────────┐
│         PRIMITIVE TYPE SIZES AND RANGES             │
└─────────────────────────────────────────────────────┘

TYPE      SIZE    RANGE                           DEFAULT
┌──────────────────────────────────────────────────────────┐
│ byte     1 byte  -128 to 127                      0      │
│          8 bits  -2⁷ to 2⁷-1                             │
├──────────────────────────────────────────────────────────┤
│ short    2 bytes -32,768 to 32,767                0      │
│          16 bits -2¹⁵ to 2¹⁵-1                           │
├──────────────────────────────────────────────────────────┤
│ int      4 bytes -2,147,483,648 to 2,147,483,647  0      │
│          32 bits -2³¹ to 2³¹-1                           │
├──────────────────────────────────────────────────────────┤
│ long     8 bytes -9,223,372,036,854,775,808 to    0L     │
│          64 bits  9,223,372,036,854,775,807              │
│                  -2⁶³ to 2⁶³-1                           │
├──────────────────────────────────────────────────────────┤
│ float    4 bytes ±3.4E38 (7 digits precision)     0.0f   │
│          32 bits IEEE 754 single precision               │
├──────────────────────────────────────────────────────────┤
│ double   8 bytes ±1.7E308 (15 digits precision)   0.0    │
│          64 bits IEEE 754 double precision               │
├──────────────────────────────────────────────────────────┤
│ char     2 bytes 0 to 65,535                      '\u0000'│
│          16 bits Unicode UTF-16                          │
├──────────────────────────────────────────────────────────┤
│ boolean  1 bit   true or false                    false  │
│          (JVM implementation-dependent)                  │
└──────────────────────────────────────────────────────────┘

MEMORY VISUALIZATION:
byte:    [8 bits]
short:   [16 bits]
int:     [32 bits]
long:    [64 bits]
float:   [32 bits]
double:  [64 bits]
char:    [16 bits]
boolean: [1 bit]
```

---

## Real-life Hinglish Example

### Example 1: Storage Containers

**Data Types = Container Types:**
```
Warehouse (Java Program):
├─ Small box (byte)
│  ├─ Stores: -128 to 127 items
│  └─ Size: 1 unit
│
├─ Medium box (int)
│  ├─ Stores: -2 billion to 2 billion items
│  └─ Size: 4 units
│
├─ Large box (long)
│  ├─ Stores: Very large numbers
│  └─ Size: 8 units
│
└─ Address label (reference)
   ├─ Points to actual item location
   └─ Size: 4 or 8 units

Java equivalent:
byte small = 100;        // Small container
int medium = 1000000;    // Medium container
long large = 10000000000L;  // Large container
String ref = "Item";     // Address to item
```

### Example 2: Measurement Units

**Data Types = Measurement Types:**
```
Measurements (Java Types):
├─ Whole numbers (int)
│  ├─ Count: 10 apples
│  └─ No decimals
│
├─ Decimal numbers (double)
│  ├─ Weight: 10.5 kg
│  └─ Precise measurements
│
├─ Single character (char)
│  ├─ Grade: 'A'
│  └─ One letter only
│
└─ Yes/No (boolean)
   ├─ Pass: true
   └─ Only two values

Java equivalent:
int count = 10;          // Whole number
double weight = 10.5;    // Decimal
char grade = 'A';        // Single character
boolean pass = true;     // Yes/No
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         DATA TYPES IN MEMORY                        │
└─────────────────────────────────────────────────────┘

CODE:
int x = 10;
double y = 3.14;
String s = "Hello";

MEMORY LAYOUT:

STACK (Primitives):
┌──────────────────────────────────────┐
│  x: [00000000 00000000               │
│      00000000 00001010]              │
│      (4 bytes, value 10)             │
│                                      │
│  y: [01000000 00001001               │
│      00011110 10111000               │
│      10100011 11010111]              │
│      (8 bytes, value 3.14)           │
│                                      │
│  s: [0x2000]                         │
│      (4/8 bytes, reference)          │
└──────────────────────────────────────┘

HEAP (Objects):
┌──────────────────────────────────────┐
│  0x2000: String object               │
│  ├─ Header (mark, class pointer)     │
│  ├─ char[] value                     │
│  └─ "Hello" characters               │
└──────────────────────────────────────┘

PRIMITIVE vs REFERENCE:
┌──────────────────────────────────────┐
│  Primitive (int x = 10):             │
│  STACK: x → [10]                     │
│  (value stored directly)             │
├──────────────────────────────────────┤
│  Reference (String s = "Hello"):     │
│  STACK: s → [0x2000]                 │
│  HEAP: 0x2000 → "Hello"              │
│  (address stored, object in heap)    │
└──────────────────────────────────────┘
```

---

## Syntax Explanation

### All primitive types:

```java
// ============================================
// INTEGER TYPES
// ============================================

// byte: 1 byte, -128 to 127
byte b1 = 127;
byte b2 = -128;
// byte b3 = 128;  // ❌ Error: out of range

// short: 2 bytes, -32768 to 32767
short s1 = 32767;
short s2 = -32768;
// short s3 = 32768;  // ❌ Error: out of range

// int: 4 bytes, -2³¹ to 2³¹-1 (default)
int i1 = 2147483647;
int i2 = -2147483648;
int i3 = 100;  // Default integer type

// long: 8 bytes, -2⁶³ to 2⁶³-1
long l1 = 9223372036854775807L;  // L suffix required
long l2 = 100L;
// long l3 = 9223372036854775808L;  // ❌ Error: out of range


// ============================================
// FLOATING-POINT TYPES
// ============================================

// float: 4 bytes, ~7 digits precision
float f1 = 3.14f;  // f suffix required
float f2 = 3.14F;
// float f3 = 3.14;  // ❌ Error: double to float

// double: 8 bytes, ~15 digits precision (default)
double d1 = 3.14159265358979;
double d2 = 3.14;  // Default decimal type
double d3 = 3.14d;  // d suffix optional


// ============================================
// CHARACTER TYPE
// ============================================

// char: 2 bytes, Unicode 0 to 65535
char c1 = 'A';
char c2 = 'z';
char c3 = '5';
char c4 = '@';
char c5 = '\n';  // Escape sequence
char c6 = '\u0041';  // Unicode (A)


// ============================================
// BOOLEAN TYPE
// ============================================

// boolean: true or false
boolean flag1 = true;
boolean flag2 = false;
// boolean flag3 = 1;  // ❌ Error: not 0/1 like C
```

### Reference types:

```java
// ============================================
// CLASSES
// ============================================

// String class
String str1 = "Hello";
String str2 = new String("World");

// Integer wrapper class
Integer num1 = 10;  // Autoboxing
Integer num2 = new Integer(20);  // Deprecated

// Custom class
class Person {
    String name;
    int age;
}
Person p = new Person();


// ============================================
// INTERFACES
// ============================================

// Runnable interface
Runnable r = new Runnable() {
    public void run() {
        System.out.println("Running");
    }
};

// Lambda (Java 8+)
Runnable r2 = () -> System.out.println("Running");


// ============================================
// ARRAYS
// ============================================

// Primitive array
int[] numbers = {1, 2, 3, 4, 5};
int[] arr = new int[10];

// Reference array
String[] names = {"John", "Jane", "Bob"};
String[] strings = new String[5];

// Multi-dimensional array
int[][] matrix = {{1, 2}, {3, 4}};


// ============================================
// ENUMS
// ============================================

enum Day {
    MONDAY, TUESDAY, WEDNESDAY
}
Day today = Day.MONDAY;
```

### Type inference (Java 10+):

```java
// var keyword (local variables only)
var x = 10;           // Inferred as int
var y = 3.14;         // Inferred as double
var s = "Hello";      // Inferred as String
var list = new ArrayList<String>();  // Inferred

// ❌ Cannot use var for:
// var x;  // Error: cannot infer type
// var x = null;  // Error: cannot infer from null
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         TYPE SIZES IN MEMORY                        │
└─────────────────────────────────────────────────────┘

PRIMITIVE TYPES (Stack or Heap):
┌──────────────────────────────────────┐
│  byte:    [1 byte]                   │
│  short:   [2 bytes]                  │
│  int:     [4 bytes]                  │
│  long:    [8 bytes]                  │
│  float:   [4 bytes]                  │
│  double:  [8 bytes]                  │
│  char:    [2 bytes]                  │
│  boolean: [1 bit/byte]               │
└──────────────────────────────────────┘

REFERENCE TYPES:
┌──────────────────────────────────────┐
│  Reference variable:                 │
│  ├─ 32-bit JVM: 4 bytes              │
│  └─ 64-bit JVM: 8 bytes              │
│     (or 4 with compressed oops)      │
│                                      │
│  Object in heap:                     │
│  ├─ Header: 8-16 bytes               │
│  ├─ Fields: variable size            │
│  └─ Padding: alignment               │
└──────────────────────────────────────┘

EXAMPLE:
class Demo {
    byte b;     // 1 byte
    int i;      // 4 bytes
    long l;     // 8 bytes
    String s;   // 4/8 bytes (reference)
}
// Object size: header + fields + padding
```

---

## Advantages

✅ **Type Safety**: Compile-time type checking  
✅ **Memory Efficiency**: Appropriate size for each type  
✅ **Performance**: Primitives faster than objects  
✅ **Range Control**: Prevent overflow with appropriate type  
✅ **Clear Intent**: Type shows data purpose  
✅ **Optimization**: JVM optimizes based on type  

---

## Limitations

❌ **No Unsigned Types**: Except char (all others signed)  
❌ **Fixed Sizes**: Cannot change type size  
❌ **Primitive Limitations**: No methods, cannot be null  
❌ **Type Conversion**: Manual casting needed  

---

## Edge Cases

🔸 **Integer overflow:**
```java
int max = 2147483647;
int overflow = max + 1;  // -2147483648 (wraps around)

long big = 2147483648;  // ❌ Error: int literal too large
long big = 2147483648L;  // ✅ OK with L suffix
```

🔸 **Floating-point precision:**
```java
double d1 = 0.1 + 0.2;
System.out.println(d1);  // 0.30000000000000004 (not 0.3!)

// Use BigDecimal for precise decimal arithmetic
```

🔸 **char is unsigned:**
```java
char c = 65535;  // ✅ OK (max value)
char c2 = -1;    // ❌ Error: negative not allowed
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Integer overflow
```java
❌ int big = 3000000000;  // Error: out of range
✅ long big = 3000000000L;  // OK with long

❌ byte b = 200;  // Error: out of range
✅ byte b = 127;  // OK
```

🚫 **Mistake 2**: Float without suffix
```java
❌ float f = 3.14;  // Error: double to float
✅ float f = 3.14f;  // OK with f suffix
```

🚫 **Mistake 3**: Boolean as int
```java
❌ boolean flag = 1;  // Error: not 0/1
✅ boolean flag = true;  // OK
```

🚫 **Mistake 4**: Char as string
```java
❌ char c = "A";  // Error: string not char
✅ char c = 'A';  // OK with single quotes
```

---

## Important Interview Points

💡 **Q: What are data types in Java?**  
**A**: Data types specify type and size of values. Two categories:
- **Primitive**: 8 types (byte, short, int, long, float, double, char, boolean), store actual values, fixed size
- **Reference**: Classes, interfaces, arrays, store memory address, variable size
Java is strongly-typed (type must be declared) and statically-typed (type checked at compile-time).

💡 **Q: What are the 8 primitive types?**  
**A**: 
- **Integer**: byte (1 byte), short (2 bytes), int (4 bytes), long (8 bytes)
- **Floating-point**: float (4 bytes), double (8 bytes)
- **Character**: char (2 bytes)
- **Boolean**: boolean (true/false)

💡 **Q: What is the difference between primitive and reference types?**  
**A**: 
- **Primitive**: Store actual value, fixed size, stack (local) or heap (instance), default values (0, false, '\u0000'), value semantics (copy value)
- **Reference**: Store memory address, variable size, objects in heap, default value null, reference semantics (copy reference)

💡 **Q: What are default values for data types?**  
**A**: Instance and static variables:
- Numbers (byte, short, int, long, float, double): 0
- boolean: false
- char: '\u0000'
- Reference types: null
Local variables have NO default values.

💡 **Q: What is the range of int and long?**  
**A**: 
- **int**: 4 bytes, -2,147,483,648 to 2,147,483,647 (-2³¹ to 2³¹-1)
- **long**: 8 bytes, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (-2⁶³ to 2⁶³-1)

💡 **Q: What is the difference between float and double?**  
**A**: 
- **float**: 4 bytes, ~7 digits precision, suffix f/F required
- **double**: 8 bytes, ~15 digits precision, default for decimals
Example:
```java
float f = 3.14f;  // f suffix required
double d = 3.14;  // Default
```

💡 **Q: Why is char 2 bytes in Java?**  
**A**: char is 2 bytes (16-bit) to support Unicode UTF-16 encoding. Can represent 65,536 different characters (0 to 65,535), covering most world languages. Unlike C (1 byte ASCII), Java uses Unicode for internationalization.

💡 **Q: Can boolean be used as int in Java?**  
**A**: No, boolean cannot be used as int. Java boolean is true/false only, not 0/1 like C/C++. Cannot assign int to boolean or vice versa. Example:
```java
boolean flag = 1;  // ❌ Error
boolean flag = true;  // ✅ OK
```

---

## Short Recap

Data types define variable mein kis type ka data store hoga. Do categories: Primitive (8 types: byte, short, int, long, float, double, char, boolean) aur Reference (classes, interfaces, arrays). Primitive types actual value store karte hain (fixed size), reference types memory address store karte hain (variable size). Sizes: byte (1), short (2), int (4), long (8), float (4), double (8), char (2), boolean (1 bit). Default values: 0 for numbers, false for boolean, '\u0000' for char, null for references (only instance/static). int default integer type, double default decimal type. char 2 bytes for Unicode. boolean true/false only (not 0/1). Java strongly-typed (type must declare) aur statically-typed (compile-time checking). Interview ke liye yaad rakho: 8 primitive types, sizes and ranges, primitive vs reference difference, default values, int vs long, float vs double, char Unicode support, aur boolean not int.

---

**Previous**: [← 37 - Lifetime of Variables](./37-lifetime-of-variables.md)  
**Next**: [39 - Primitive Data Types →](./39-primitive-data-types.md)
