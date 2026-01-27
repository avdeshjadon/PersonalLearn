# 39) PRIMITIVE DATA TYPES IN JAVA

## Concept Introduction

Primitive data types Java ke 8 basic building blocks hain jo actual values store karte hain — yeh simplest aur fastest data types hain. Integer types (byte, short, int, long) whole numbers store karte hain, floating-point types (float, double) decimal numbers store karte hain, char single character store karta hai, aur boolean true/false store karta hai. Primitives objects nahi hain, direct values hain. Har primitive ka fixed size hai: int 4 bytes, double 8 bytes. Primitives stack mein store hote hain (local variables) ya heap mein (instance variables). Primitives ke wrapper classes bhi hain (Integer, Double, etc.) jo object functionality provide karte hain. Primitives samajhna fundamental hai efficient programming ke liye!

---

## Why This Concept Exists

**Problem:**
- Basic values efficiently kaise store karein?
- Memory overhead kaise minimize karein?
- Fast operations kaise achieve karein?
- Simple data types kaise represent karein?

**Solution (Primitive Types):**
- Direct value storage (no object overhead)
- Fixed sizes for predictability
- Fast stack allocation
- Hardware-level operations
- Type-specific ranges
- Wrapper classes for object functionality

---

## Definitions

### 🔹 Very Simple Definition
Primitive types Java ke 8 basic types hain jo actual values store karte hain — numbers, characters, true/false.

### 🔹 College Exam Definition
Primitive data types are predefined types in Java that store actual values rather than references. Java has 8 primitive types: (1) Integer types - byte (1 byte, -128 to 127), short (2 bytes, -32768 to 32767), int (4 bytes, -2³¹ to 2³¹-1), long (8 bytes, -2⁶³ to 2⁶³-1), (2) Floating-point types - float (4 bytes, IEEE 754), double (8 bytes, IEEE 754), (3) Character type - char (2 bytes, Unicode), (4) Boolean type - boolean (true/false). Primitives are not objects, stored in stack (local) or heap (instance), have default values (0, false, '\u0000'), and have wrapper classes (Integer, Double, Character, Boolean) for object functionality.

### 🔹 Viva Definition
Primitive types are value types storing data directly without object overhead. Categories: (1) Integer Types - byte: 8-bit signed (-128 to 127), smallest integer type, use for memory-critical applications, short: 16-bit signed (-32768 to 32767), rarely used, int: 32-bit signed (-2³¹ to 2³¹-1), default integer type, most commonly used, long: 64-bit signed (-2⁶³ to 2⁶³-1), for large numbers, literal suffix L/l, (2) Floating-Point Types - float: 32-bit IEEE 754, ±3.4E38, ~7 digits precision, literal suffix f/F, use when memory matters, double: 64-bit IEEE 754, ±1.7E308, ~15 digits precision, default decimal type, preferred for accuracy, (3) Character Type - char: 16-bit unsigned (0 to 65535), UTF-16 Unicode encoding, single quotes for literals, escape sequences supported, (4) Boolean Type - boolean: true or false only, JVM implementation-dependent size (typically 1 byte), not interchangeable with 0/1, logical operations only. Characteristics: Value semantics (assignment copies value), No methods (not objects), Cannot be null (primitives always have value), Default values (instance/static: 0, false, '\u0000'; local: none), Stack allocation (local variables), Heap allocation (instance/static variables with object/class), Wrapper classes (Integer, Double, Character, Boolean for object functionality), Autoboxing/unboxing (automatic conversion to/from wrappers).

### 🔹 Interview Definition
Primitive types are non-object value types with fixed sizes and direct value storage. Details: (1) Integer Family - byte: Range 2⁸ (-128 to 127), Use case: byte streams, memory-critical arrays, Literal: 127, -128, short: Range 2¹⁶ (-32768 to 32767), Use case: legacy code, rarely used, Literal: 32767, int: Range 2³² (-2,147,483,648 to 2,147,483,647), Default integer type, Use case: counters, indices, general integers, Literal: 100, 0x1A (hex), 0b1010 (binary), long: Range 2⁶⁴ (-2⁶³ to 2⁶³-1), Use case: timestamps, large numbers, file sizes, Literal: 100L, 0x1AL, (2) Floating-Point Family - float: 32-bit IEEE 754 (sign bit, 8 exponent bits, 23 mantissa bits), Precision ~7 decimal digits, Range ±3.4E38, Use case: graphics, memory-constrained applications, Literal: 3.14f, 1.5e10f, double: 64-bit IEEE 754 (sign bit, 11 exponent bits, 52 mantissa bits), Precision ~15 decimal digits, Range ±1.7E308, Default decimal type, Use case: scientific calculations, financial (with caution), Literal: 3.14, 1.5e10, (3) Character Type - char: 16-bit unsigned (0 to 65535), UTF-16 encoding, Unicode support, Literal: 'A', '\n', '\u0041', Use case: text processing, single characters, (4) Boolean Type - boolean: true/false only, Not 0/1 like C/C++, JVM may use int internally, Use case: flags, conditions, logical operations. Wrapper Classes: Byte, Short, Integer, Long, Float, Double, Character, Boolean, Provide object functionality (methods, null support, collections), Autoboxing: primitive → wrapper automatic, Unboxing: wrapper → primitive automatic, Performance: primitives faster (no object overhead), Memory: primitives smaller (no object header).

### 🔹 Technical Definition
Primitive types are JVM-level value types with bytecode-level support and hardware-optimized operations. Implementation: (1) Bytecode Type Codes - I (int), J (long), F (float), D (double), B (byte), S (short), C (char), Z (boolean), (2) Stack Operations - iload/istore (int), lload/lstore (long), fload/fstore (float), dload/dstore (double), aload/astore (reference), (3) Computational Types - int (byte/short/char promoted to int for computation), long, float, double, reference, (4) Memory Layout - Primitives: direct value storage, no object header, Alignment: natural boundaries (int: 4-byte, long: 8-byte, double: 8-byte), Padding: for alignment in objects/arrays, (5) Default Values - Instance/static: 0 (numeric), false (boolean), '\u0000' (char), Local: no defaults (must initialize), (6) Type Conversion - Widening: automatic (byte→short→int→long→float→double), Narrowing: explicit cast required (may lose precision), (7) Wrapper Classes - Autoboxing: Integer.valueOf() called automatically, Unboxing: intValue() called automatically, Caching: Integer cache -128 to 127, Boolean cache true/false, Performance: boxing/unboxing overhead, (8) IEEE 754 Floating-Point - float: 1 sign bit + 8 exponent + 23 mantissa, double: 1 sign bit + 11 exponent + 52 mantissa, Special values: NaN, Infinity, -Infinity, Precision issues: 0.1 + 0.2 ≠ 0.3. JVM Specification: Primitives have fixed sizes across platforms, No unsigned types (except char), Type safety enforced by verifier, Arithmetic operations hardware-accelerated.

### 🔹 One-line Crisp Definition
Primitive types = 8 value types (byte/short/int/long/float/double/char/boolean) + Direct storage + Fixed sizes + No object overhead

---

## DIAGRAM: All 8 Primitive Types

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    8 PRIMITIVE DATA TYPES                                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  INTEGER TYPES (4 types)                                                  │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  1. byte                                                             │  │
│  │     Size: 1 byte (8 bits)                                           │  │
│  │     Range: -128 to 127 (-2⁷ to 2⁷-1)                                │  │
│  │     Default: 0                                                       │  │
│  │     Example: byte age = 25;                                         │  │
│  │                                                                      │  │
│  │  2. short                                                            │  │
│  │     Size: 2 bytes (16 bits)                                         │  │
│  │     Range: -32,768 to 32,767 (-2¹⁵ to 2¹⁵-1)                        │  │
│  │     Default: 0                                                       │  │
│  │     Example: short year = 2024;                                     │  │
│  │                                                                      │  │
│  │  3. int (DEFAULT)                                                    │  │
│  │     Size: 4 bytes (32 bits)                                         │  │
│  │     Range: -2,147,483,648 to 2,147,483,647 (-2³¹ to 2³¹-1)         │  │
│  │     Default: 0                                                       │  │
│  │     Example: int count = 1000000;                                   │  │
│  │                                                                      │  │
│  │  4. long                                                             │  │
│  │     Size: 8 bytes (64 bits)                                         │  │
│  │     Range: -9,223,372,036,854,775,808 to ...807 (-2⁶³ to 2⁶³-1)    │  │
│  │     Default: 0L                                                      │  │
│  │     Example: long population = 8000000000L;                         │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  FLOATING-POINT TYPES (2 types)                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  5. float                                                            │  │
│  │     Size: 4 bytes (32 bits)                                         │  │
│  │     Range: ±3.4E38                                                   │  │
│  │     Precision: ~7 decimal digits                                     │  │
│  │     Default: 0.0f                                                    │  │
│  │     Example: float price = 99.99f;                                  │  │
│  │                                                                      │  │
│  │  6. double (DEFAULT)                                                 │  │
│  │     Size: 8 bytes (64 bits)                                         │  │
│  │     Range: ±1.7E308                                                  │  │
│  │     Precision: ~15 decimal digits                                    │  │
│  │     Default: 0.0                                                     │  │
│  │     Example: double pi = 3.14159265358979;                          │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  CHARACTER TYPE (1 type)                                                  │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  7. char                                                             │  │
│  │     Size: 2 bytes (16 bits)                                         │  │
│  │     Range: 0 to 65,535 (unsigned)                                   │  │
│  │     Encoding: UTF-16 Unicode                                         │  │
│  │     Default: '\u0000'                                                │  │
│  │     Example: char grade = 'A';                                      │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  BOOLEAN TYPE (1 type)                                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  8. boolean                                                          │  │
│  │     Size: 1 bit (JVM implementation-dependent)                       │  │
│  │     Values: true or false                                            │  │
│  │     Default: false                                                   │  │
│  │     Example: boolean isActive = true;                               │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Type Hierarchy and Conversion

```
┌─────────────────────────────────────────────────────┐
│         WIDENING CONVERSION (AUTOMATIC)             │
└─────────────────────────────────────────────────────┘

byte → short → int → long → float → double
  ↓      ↓      ↓      ↓       ↓       ↓
  1      2      4      8       4       8  (bytes)

char → int → long → float → double
  ↓      ↓      ↓       ↓       ↓
  2      4      8       4       8  (bytes)

AUTOMATIC (No cast needed):
byte b = 10;
int i = b;      // ✅ OK (widening)
long l = i;     // ✅ OK (widening)
float f = l;    // ✅ OK (widening)
double d = f;   // ✅ OK (widening)

┌─────────────────────────────────────────────────────┐
│         NARROWING CONVERSION (EXPLICIT CAST)        │
└─────────────────────────────────────────────────────┘

double → float → long → int → short → byte
  ↓       ↓       ↓      ↓      ↓       ↓
  8       4       8      4      2       1  (bytes)

EXPLICIT CAST (May lose precision):
double d = 3.14;
float f = (float) d;   // ✅ Cast required
int i = (int) f;       // ✅ Cast required (loses decimal)
short s = (short) i;   // ✅ Cast required
byte b = (byte) s;     // ✅ Cast required
```

---

## Real-life Hinglish Example

### Example 1: Money Denominations

**Primitive Types = Currency Notes:**
```
Currency (Primitive Types):
├─ ₹1 coin (byte)
│  ├─ Small value: -128 to 127
│  └─ Rarely used
│
├─ ₹10 note (short)
│  ├─ Medium value: -32K to 32K
│  └─ Occasionally used
│
├─ ₹500 note (int)
│  ├─ Common value: -2B to 2B
│  └─ Most commonly used
│
├─ ₹2000 note (long)
│  ├─ Large value: very big numbers
│  └─ For big transactions
│
├─ Decimal amounts (float/double)
│  ├─ ₹99.99 (float)
│  └─ ₹99.9999999 (double, more precise)
│
├─ Grade letter (char)
│  └─ 'A', 'B', 'C'
│
└─ Pass/Fail (boolean)
   └─ true or false

Java equivalent:
byte small = 100;
int common = 1000000;
long big = 10000000000L;
double price = 99.99;
char grade = 'A';
boolean pass = true;
```

---

## Syntax Explanation

### All primitive types with examples:

```java
public class PrimitiveDemo {
    public static void main(String[] args) {
        // ============================================
        // INTEGER TYPES
        // ============================================
        
        // byte: -128 to 127
        byte age = 25;
        byte temperature = -10;
        byte maxByte = 127;
        byte minByte = -128;
        
        // short: -32768 to 32767
        short year = 2024;
        short altitude = -500;
        short maxShort = 32767;
        
        // int: -2³¹ to 2³¹-1 (DEFAULT)
        int population = 1400000000;
        int negative = -100;
        int hex = 0xFF;        // Hexadecimal
        int binary = 0b1010;   // Binary
        
        // long: -2⁶³ to 2⁶³-1
        long worldPopulation = 8000000000L;  // L suffix
        long fileSize = 1024L * 1024L * 1024L;  // 1 GB
        long timestamp = System.currentTimeMillis();
        
        
        // ============================================
        // FLOATING-POINT TYPES
        // ============================================
        
        // float: ~7 digits precision
        float price = 99.99f;  // f suffix required
        float pi = 3.14f;
        float scientific = 1.5e10f;  // 15000000000
        
        // double: ~15 digits precision (DEFAULT)
        double precisePrice = 99.99;
        double precisePi = 3.14159265358979;
        double largeNumber = 1.5e308;
        
        
        // ============================================
        // CHARACTER TYPE
        // ============================================
        
        // char: Unicode character
        char letter = 'A';
        char digit = '5';
        char symbol = '@';
        char newline = '\n';  // Escape sequence
        char tab = '\t';
        char unicode = '\u0041';  // 'A' in Unicode
        
        
        // ============================================
        // BOOLEAN TYPE
        // ============================================
        
        // boolean: true or false
        boolean isActive = true;
        boolean hasPermission = false;
        boolean result = (10 > 5);  // true
        
        
        // ============================================
        // TYPE CONVERSION
        // ============================================
        
        // Widening (automatic)
        byte b = 10;
        int i = b;      // byte → int (automatic)
        long l = i;     // int → long (automatic)
        float f = l;    // long → float (automatic)
        double d = f;   // float → double (automatic)
        
        // Narrowing (explicit cast)
        double d2 = 3.14;
        float f2 = (float) d2;   // double → float (cast)
        int i2 = (int) f2;       // float → int (cast, loses decimal)
        short s = (short) i2;    // int → short (cast)
        byte b2 = (byte) s;      // short → byte (cast)
        
        
        // ============================================
        // WRAPPER CLASSES
        // ============================================
        
        // Autoboxing (primitive → wrapper)
        Integer intObj = 100;  // Auto: Integer.valueOf(100)
        Double doubleObj = 3.14;  // Auto: Double.valueOf(3.14)
        
        // Unboxing (wrapper → primitive)
        int intValue = intObj;  // Auto: intObj.intValue()
        double doubleValue = doubleObj;  // Auto: doubleObj.doubleValue()
        
        
        // ============================================
        // OPERATIONS
        // ============================================
        
        // Arithmetic
        int sum = 10 + 20;
        int diff = 30 - 10;
        int product = 5 * 6;
        int quotient = 20 / 4;
        int remainder = 20 % 3;
        
        // Comparison
        boolean equal = (10 == 10);
        boolean notEqual = (10 != 20);
        boolean greater = (20 > 10);
        
        // Logical
        boolean and = true && false;  // false
        boolean or = true || false;   // true
        boolean not = !true;          // false
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         PRIMITIVE TYPES IN MEMORY                   │
└─────────────────────────────────────────────────────┘

CODE:
byte b = 10;
int i = 100;
long l = 1000L;
double d = 3.14;
char c = 'A';
boolean flag = true;

STACK MEMORY:
┌──────────────────────────────────────┐
│  b:    [00001010]                    │
│        (1 byte, value 10)            │
│                                      │
│  i:    [00000000 00000000            │
│         00000000 01100100]           │
│        (4 bytes, value 100)          │
│                                      │
│  l:    [00000000 00000000            │
│         00000000 00000000            │
│         00000000 00000000            │
│         00000011 11101000]           │
│        (8 bytes, value 1000)         │
│                                      │
│  d:    [01000000 00001001            │
│         00011110 10111000            │
│         10100011 11010111]           │
│        (8 bytes, value 3.14)         │
│                                      │
│  c:    [00000000 01000001]           │
│        (2 bytes, value 65 = 'A')     │
│                                      │
│  flag: [00000001]                    │
│        (1 byte, value true)          │
└──────────────────────────────────────┘

TOTAL: 1 + 4 + 8 + 8 + 2 + 1 = 24 bytes
```

---

## Advantages

✅ **Performance**: Faster than objects (no overhead)  
✅ **Memory Efficient**: No object header  
✅ **Stack Allocation**: Fast allocation/deallocation  
✅ **Hardware Support**: Direct CPU operations  
✅ **Type Safety**: Compile-time checking  
✅ **Predictable Size**: Fixed sizes across platforms  

---

## Limitations

❌ **No Methods**: Cannot call methods on primitives  
❌ **Cannot be Null**: Always have a value  
❌ **No Collections**: Cannot use in generics directly  
❌ **No Unsigned**: All signed except char  

---

## Edge Cases

🔸 **Integer overflow:**
```java
int max = 2147483647;
int overflow = max + 1;  // -2147483648 (wraps around!)
```

🔸 **Floating-point precision:**
```java
double d = 0.1 + 0.2;
System.out.println(d);  // 0.30000000000000004 (not 0.3!)
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
✅ long big = 3000000000L;
```

🚫 **Mistake 2**: Float without suffix
```java
❌ float f = 3.14;  // Error: double to float
✅ float f = 3.14f;
```

🚫 **Mistake 3**: Boolean as int
```java
❌ boolean flag = 1;  // Error
✅ boolean flag = true;
```

🚫 **Mistake 4**: Narrowing without cast
```java
❌ int i = 100;
   byte b = i;  // Error: int to byte
✅ byte b = (byte) i;  // OK with cast
```

---

## Important Interview Points

💡 **Q: What are the 8 primitive types in Java?**  
**A**: 
- **Integer**: byte (1), short (2), int (4), long (8) bytes
- **Floating-point**: float (4), double (8) bytes
- **Character**: char (2 bytes)
- **Boolean**: boolean (true/false)

💡 **Q: What is the difference between int and Integer?**  
**A**: 
- **int**: Primitive type, stores value, 4 bytes, cannot be null, faster
- **Integer**: Wrapper class, object, stores reference, can be null, has methods
Example:
```java
int i = 10;  // Primitive
Integer obj = 10;  // Wrapper (autoboxing)
```

💡 **Q: What is autoboxing and unboxing?**  
**A**: 
- **Autoboxing**: Automatic conversion primitive → wrapper
- **Unboxing**: Automatic conversion wrapper → primitive
Example:
```java
Integer obj = 10;  // Autoboxing (int → Integer)
int i = obj;  // Unboxing (Integer → int)
```

💡 **Q: What is widening and narrowing conversion?**  
**A**: 
- **Widening**: Smaller → larger type, automatic, no data loss
- **Narrowing**: Larger → smaller type, explicit cast, may lose data
Example:
```java
int i = 10;
long l = i;  // Widening (automatic)
int i2 = (int) l;  // Narrowing (cast required)
```

💡 **Q: Why is char 2 bytes in Java?**  
**A**: char is 2 bytes to support Unicode UTF-16 encoding. Can represent 65,536 characters (0 to 65,535), covering most world languages. Unlike C (1 byte ASCII), Java uses Unicode for internationalization.

💡 **Q: What are default values for primitive types?**  
**A**: Instance and static variables:
- Numbers: 0 (byte, short, int, long, float, double)
- boolean: false
- char: '\u0000'
Local variables have NO default values.

💡 **Q: Can primitives be null?**  
**A**: No, primitives cannot be null. Only reference types (objects) can be null. Primitives always have a value (default or assigned). Use wrapper classes if null needed.

💡 **Q: What is the range of byte and int?**  
**A**: 
- **byte**: -128 to 127 (-2⁷ to 2⁷-1)
- **int**: -2,147,483,648 to 2,147,483,647 (-2³¹ to 2³¹-1)

---

## Short Recap

Primitive types Java ke 8 basic types hain jo actual values store karte hain. Integer types: byte (1 byte, -128 to 127), short (2 bytes, -32K to 32K), int (4 bytes, -2B to 2B, default), long (8 bytes, very large, L suffix). Floating-point: float (4 bytes, ~7 digits, f suffix), double (8 bytes, ~15 digits, default). Character: char (2 bytes, Unicode). Boolean: boolean (true/false only). Primitives objects nahi hain, direct values hain. Stack mein store hote hain (local) ya heap mein (instance). Default values: 0 for numbers, false for boolean, '\u0000' for char (only instance/static). Wrapper classes: Integer, Double, Character, Boolean. Autoboxing: primitive → wrapper automatic. Unboxing: wrapper → primitive automatic. Widening conversion automatic, narrowing needs cast. Primitives faster aur memory efficient. Interview ke liye yaad rakho: 8 types with sizes, int vs Integer, autoboxing/unboxing, widening/narrowing, default values, char Unicode support, aur primitives cannot be null.

---

**Previous**: [← 38 - Data Types](./38-data-types.md)  
**Next**: [40 - Default Values →](./40-default-values.md)
