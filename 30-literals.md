# 30) LITERALS IN JAVA

## Concept Introduction

Literals constant values hain jo directly code mein likhe jaate hain — yeh fixed values hain jo change nahi hote. Jab tum `int x = 10;` likhte ho, toh `10` ek integer literal hai. Jab `String name = "John";` likhte ho, toh `"John"` ek string literal hai. Java mein 6 types ke literals hain: Integer, Floating-point, Character, String, Boolean, aur Null. Har type ke literals ka apna syntax hai: integers decimal/octal/hex/binary mein, floats mein f/d suffix, characters single quotes mein, strings double quotes mein. Literals compile-time pe evaluate hote hain aur constant pool mein store hote hain!

---

## Why This Concept Exists

**Problem:**
- Program mein constant values kaise represent karein?
- Different number systems kaise support karein?
- Characters aur strings kaise define karein?
- True/false values kaise represent karein?

**Solution (Literals):**
- Direct constant value representation
- Multiple formats (decimal, hex, binary)
- Type-specific syntax
- Compile-time evaluation
- Constant pool optimization

---

## Definitions

### 🔹 Very Simple Definition
Literals constant values hain jo directly code mein likhe jaate hain — fixed values jo change nahi hote.

### 🔹 College Exam Definition
Literals are constant values that appear directly in the program code. Java has six types of literals: (1) Integer literals - whole numbers (10, 0x1A, 0b1010), (2) Floating-point literals - decimal numbers (3.14f, 2.5d), (3) Character literals - single characters ('A', '\n'), (4) String literals - text ("Hello"), (5) Boolean literals - true/false, (6) Null literal - null. Literals are evaluated at compile-time and stored in constant pool.

### 🔹 Viva Definition
Literals are lexical tokens representing constant values with type-specific syntax: (1) **Integer literals** - decimal (10), octal (012, prefix 0), hexadecimal (0x1A, prefix 0x), binary (0b1010, prefix 0b), long suffix (100L), underscores for readability (1_000_000), (2) **Floating-point literals** - float suffix f/F (3.14f), double default or suffix d/D (3.14, 3.14d), scientific notation (1.5e10), (3) **Character literals** - single quotes ('A'), escape sequences ('\n', '\t', '\\', '\'', '\"'), Unicode ('\u0041'), (4) **String literals** - double quotes ("Hello"), escape sequences supported, immutable, stored in string pool, (5) **Boolean literals** - true, false (not 0/1), (6) **Null literal** - null (represents no object reference). Literals are compile-time constants, stored in constant pool, enable compiler optimizations.

### 🔹 Interview Definition
Literals are compile-time constant values with specific representations: (1) **Integer literals** - Types: byte/short/int (default), long (L suffix), Formats: decimal (10), octal (012), hex (0x1A, 0XFF), binary (0b1010, 0B1111), Underscores: 1_000_000 (Java 7+, ignored by compiler), Range: int (-2³¹ to 2³¹-1), long (-2⁶³ to 2⁶³-1), (2) **Floating-point literals** - float (f/F suffix, 32-bit), double (default or d/D suffix, 64-bit), Scientific: 1.5e10 (1.5 × 10¹⁰), Underscores: 3.14_159, (3) **Character literals** - Single quotes ('A'), Escape sequences: \n (newline), \t (tab), \\ (backslash), \' (single quote), \" (double quote), \r (carriage return), \b (backspace), \f (form feed), Unicode: \uXXXX (4 hex digits), (4) **String literals** - Double quotes ("Hello"), Escape sequences supported, Immutable (stored in string pool), Concatenation: "Hello" + "World", (5) **Boolean literals** - true, false (keywords, not 0/1 like C), (6) **Null literal** - null (represents absence of object, not 0 or empty string). Storage: Literals stored in constant pool (method area), String literals in string pool (heap), Optimization: Compiler performs constant folding (10 + 20 → 30 at compile-time).

### 🔹 Technical Definition
Literals are terminal symbols in Java grammar representing compile-time constant values, stored in constant pool (CONSTANT_Integer, CONSTANT_Float, CONSTANT_Long, CONSTANT_Double, CONSTANT_String entries). Implementation: (1) **Integer literals** - Parsed by lexical analyzer, range validation (-2³¹ to 2³¹-1 for int, -2⁶³ to 2⁶³-1 for long), octal (base 8), hex (base 16), binary (base 2) conversion to decimal, underscores stripped during parsing, (2) **Floating-point literals** - IEEE 754 representation (float: 32-bit, double: 64-bit), scientific notation parsing (mantissa × 10^exponent), precision: float (7 digits), double (15 digits), (3) **Character literals** - UTF-16 encoding (16-bit), escape sequence translation (\n → 0x000A), Unicode escape (\uXXXX → character), (4) **String literals** - Interned in string pool (heap), String object creation deferred until runtime, escape sequences processed, (5) **Boolean literals** - true (1 in bytecode), false (0 in bytecode), not interchangeable with integers, (6) **Null literal** - aconst_null bytecode instruction, represents null reference (0x0). Constant pool optimization: Duplicate literals share same pool entry, reduces .class file size, enables fast comparison (reference equality for strings). Bytecode instructions: bipush/sipush (small integers), ldc/ldc_w (constant pool reference), iconst_0 to iconst_5 (optimized for 0-5).

### 🔹 One-line Crisp Definition
Literals = Constant values + Type-specific syntax + Compile-time evaluation + Constant pool storage

---

## DIAGRAM: All Literal Types

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA LITERALS (6 TYPES)                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. INTEGER LITERALS                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Decimal (base 10):                                                  │  │
│  │  ├─ 10, 100, -50, 0                                                 │  │
│  │  └─ Default type: int                                               │  │
│  │                                                                      │  │
│  │  Octal (base 8, prefix 0):                                           │  │
│  │  ├─ 012 (= 10 decimal)                                              │  │
│  │  ├─ 077 (= 63 decimal)                                              │  │
│  │  └─ Digits: 0-7                                                     │  │
│  │                                                                      │  │
│  │  Hexadecimal (base 16, prefix 0x or 0X):                            │  │
│  │  ├─ 0x1A (= 26 decimal)                                             │  │
│  │  ├─ 0XFF (= 255 decimal)                                            │  │
│  │  └─ Digits: 0-9, A-F (case-insensitive)                            │  │
│  │                                                                      │  │
│  │  Binary (base 2, prefix 0b or 0B):                                  │  │
│  │  ├─ 0b1010 (= 10 decimal)                                           │  │
│  │  ├─ 0B1111 (= 15 decimal)                                           │  │
│  │  └─ Digits: 0-1                                                     │  │
│  │                                                                      │  │
│  │  Long (suffix L or l):                                               │  │
│  │  ├─ 100L, 100l                                                      │  │
│  │  └─ Type: long (64-bit)                                             │  │
│  │                                                                      │  │
│  │  Underscores (Java 7+, for readability):                            │  │
│  │  ├─ 1_000_000 (= 1000000)                                           │  │
│  │  ├─ 0b1010_1010 (= 170)                                             │  │
│  │  └─ Ignored by compiler                                             │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. FLOATING-POINT LITERALS                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Float (suffix f or F):                                              │  │
│  │  ├─ 3.14f, 3.14F                                                    │  │
│  │  ├─ Type: float (32-bit)                                            │  │
│  │  └─ Precision: ~7 decimal digits                                    │  │
│  │                                                                      │  │
│  │  Double (default or suffix d/D):                                     │  │
│  │  ├─ 3.14, 3.14d, 3.14D                                              │  │
│  │  ├─ Type: double (64-bit)                                           │  │
│  │  └─ Precision: ~15 decimal digits                                   │  │
│  │                                                                      │  │
│  │  Scientific notation:                                                │  │
│  │  ├─ 1.5e10 (= 1.5 × 10¹⁰ = 15000000000)                            │  │
│  │  ├─ 1.5E-10 (= 1.5 × 10⁻¹⁰ = 0.00000000015)                        │  │
│  │  └─ e or E (exponent)                                               │  │
│  │                                                                      │  │
│  │  Underscores:                                                        │  │
│  │  └─ 3.14_159, 1_000.50                                              │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. CHARACTER LITERALS                                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Single character (single quotes):                                   │  │
│  │  └─ 'A', 'z', '5', '@'                                              │  │
│  │                                                                      │  │
│  │  Escape sequences:                                                   │  │
│  │  ├─ '\n'  Newline                                                   │  │
│  │  ├─ '\t'  Tab                                                       │  │
│  │  ├─ '\\'  Backslash                                                 │  │
│  │  ├─ '\''  Single quote                                              │  │
│  │  ├─ '\"'  Double quote                                              │  │
│  │  ├─ '\r'  Carriage return                                           │  │
│  │  ├─ '\b'  Backspace                                                 │  │
│  │  └─ '\f'  Form feed                                                 │  │
│  │                                                                      │  │
│  │  Unicode (4 hex digits):                                             │  │
│  │  ├─ '\u0041' (= 'A')                                                │  │
│  │  ├─ '\u0061' (= 'a')                                                │  │
│  │  └─ '\u0030' (= '0')                                                │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  4. STRING LITERALS                                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Double quotes:                                                      │  │
│  │  └─ "Hello", "Java", "123", ""                                      │  │
│  │                                                                      │  │
│  │  Escape sequences:                                                   │  │
│  │  ├─ "Hello\nWorld"  (newline)                                       │  │
│  │  ├─ "Name:\tJohn"   (tab)                                           │  │
│  │  ├─ "Path: C:\\Users"  (backslash)                                  │  │
│  │  └─ "He said \"Hi\""  (quotes)                                      │  │
│  │                                                                      │  │
│  │  Concatenation:                                                      │  │
│  │  └─ "Hello" + "World" = "HelloWorld"                                │  │
│  │                                                                      │  │
│  │  Empty string:                                                       │  │
│  │  └─ ""  (length 0, not null)                                        │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  5. BOOLEAN LITERALS                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  true   (represents logical true)                                   │  │
│  │  false  (represents logical false)                                  │  │
│  │                                                                      │  │
│  │  Note: Not 0/1 like C/C++                                           │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  6. NULL LITERAL                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  null  (represents no object reference)                             │  │
│  │                                                                      │  │
│  │  Can be assigned to any reference type                              │  │
│  │  Cannot be assigned to primitive types                              │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```



---

## Real-life Hinglish Example

### Example 1: Price Tags

**Literals = Price Tags:**
```
Store (Java Program):
├─ Price tags (literals) fixed hain
├─ ₹100 (integer literal)
├─ ₹99.99 (floating-point literal)
├─ "Sale" (string literal)
└─ Available: true (boolean literal)

Similarly Java:
├─ int price = 100;
├─ double amount = 99.99;
├─ String status = "Sale";
└─ boolean available = true;
```

### Example 2: Recipe Measurements

**Literals = Recipe Quantities:**
```
Recipe (Java Program):
├─ 2 cups flour (integer: 2)
├─ 3.5 liters milk (float: 3.5)
├─ "Mix well" (string: instruction)
└─ Ready: true (boolean)

Java equivalent:
├─ int cups = 2;
├─ double liters = 3.5;
├─ String instruction = "Mix well";
└─ boolean ready = true;
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         LITERALS IN COMPILATION                     │
└─────────────────────────────────────────────────────┘

SOURCE CODE:
int x = 10;
String s = "Hello";

COMPILATION:
┌──────────────────────────────────────┐
│  Constant Pool:                      │
│  ┌────────────────────────────────┐  │
│  │  #1 = Integer 10               │  │
│  │  #2 = String "Hello"           │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

BYTECODE:
0: bipush 10        // Push literal 10
2: istore_1         // Store in x
3: ldc #2           // Load constant "Hello"
5: astore_2         // Store in s

RUNTIME:
┌──────────────────────────────────────┐
│  STACK                               │
│  ├─ x = 10                           │
│  └─ s → [ref to string pool]        │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  STRING POOL (Heap)                  │
│  └─ "Hello" (interned)               │
└──────────────────────────────────────┘
```

---

## Syntax Explanation

### All literal types:

```java
// Integer literals
int decimal = 10;
int octal = 012;        // = 10 decimal
int hex = 0x1A;         // = 26 decimal
int binary = 0b1010;    // = 10 decimal
long longNum = 100L;
int readable = 1_000_000;  // Underscores

// Floating-point literals
float f = 3.14f;
double d = 3.14;
double d2 = 3.14d;
double scientific = 1.5e10;  // 15000000000
double readable2 = 3.14_159;

// Character literals
char ch1 = 'A';
char ch2 = '\n';        // Newline
char ch3 = '\t';        // Tab
char ch4 = '\\';        // Backslash
char ch5 = '\'';        // Single quote
char ch6 = '\u0041';    // Unicode 'A'

// String literals
String s1 = "Hello";
String s2 = "Hello\nWorld";  // With newline
String s3 = "Path: C:\\Users";  // With backslash
String s4 = "He said \"Hi\"";  // With quotes
String s5 = "";         // Empty string
String s6 = "Hello" + "World";  // Concatenation

// Boolean literals
boolean flag1 = true;
boolean flag2 = false;

// Null literal
String str = null;
Object obj = null;
```

### Number format examples:

```java
// Decimal
int d1 = 10;
int d2 = 100;
int d3 = -50;

// Octal (prefix 0)
int o1 = 012;   // = 10 decimal
int o2 = 077;   // = 63 decimal
int o3 = 010;   // = 8 decimal

// Hexadecimal (prefix 0x)
int h1 = 0x1A;  // = 26 decimal
int h2 = 0xFF;  // = 255 decimal
int h3 = 0x10;  // = 16 decimal

// Binary (prefix 0b)
int b1 = 0b1010;  // = 10 decimal
int b2 = 0b1111;  // = 15 decimal
int b3 = 0b0001;  // = 1 decimal

// Underscores for readability
int million = 1_000_000;
int binary = 0b1010_1010;
double pi = 3.14_159_265;
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         LITERALS IN MEMORY                          │
└─────────────────────────────────────────────────────┘

CODE:
int x = 10;
String s = "Hello";

CONSTANT POOL (Method Area):
┌──────────────────────────────────────┐
│  Integer: 10                         │
│  String: "Hello"                     │
└──────────────────────────────────────┘

STRING POOL (Heap):
┌──────────────────────────────────────┐
│  "Hello" (interned)                  │
│  Shared if used multiple times       │
└──────────────────────────────────────┘

STACK:
┌──────────────────────────────────────┐
│  x = 10 (primitive value)            │
│  s → [reference to string pool]      │
└──────────────────────────────────────┘

OPTIMIZATION:
String s1 = "Hello";
String s2 = "Hello";
// Both point to same object in string pool
// s1 == s2 is true (reference equality)
```

---

## Advantages

✅ **Compile-time Constants**: Evaluated at compile-time  
✅ **Type Safety**: Type-specific syntax  
✅ **Readability**: Clear constant values  
✅ **Optimization**: Constant pool reduces memory  
✅ **Multiple Formats**: Decimal, hex, binary, octal  
✅ **Underscores**: Improve readability (1_000_000)  
✅ **String Pooling**: Efficient string storage  

---

## Limitations

❌ **Immutable**: Cannot change literal values  
❌ **Type Restrictions**: Must match variable type  
❌ **Precision Loss**: Floating-point approximations  
❌ **String Escape**: Special characters need escaping  

---

## Edge Cases

🔸 **Integer overflow:**
```java
int max = 2147483647;  // Max int
int overflow = 2147483648;  // ❌ Error: too large
long big = 2147483648L;  // ✅ OK with L suffix
```

🔸 **Float vs double:**
```java
float f = 3.14;   // ❌ Error: double to float
float f = 3.14f;  // ✅ OK with f suffix
double d = 3.14;  // ✅ OK (default double)
```

🔸 **Character vs string:**
```java
char ch = 'A';    // ✅ Single quotes
char ch = "A";    // ❌ Error: string not char
String s = "A";   // ✅ Double quotes
String s = 'A';   // ❌ Error: char not string
```

🔸 **Null with primitives:**
```java
int x = null;     // ❌ Error: null not for primitives
Integer x = null; // ✅ OK (wrapper class)
String s = null;  // ✅ OK (reference type)
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Wrong suffix
```java
❌ float f = 3.14;    // Missing f suffix
✅ float f = 3.14f;

❌ long l = 10000000000;  // Too large for int
✅ long l = 10000000000L;
```

🚫 **Mistake 2**: Wrong quotes
```java
❌ char ch = "A";     // Double quotes
✅ char ch = 'A';     // Single quotes

❌ String s = 'Hello';  // Single quotes
✅ String s = "Hello";  // Double quotes
```

🚫 **Mistake 3**: Octal confusion
```java
int x = 012;  // = 10 decimal (not 12!)
// Leading 0 means octal

✅ int x = 12;  // Decimal 12
```

🚫 **Mistake 4**: Escape sequence errors
```java
❌ String path = "C:\Users";  // \U invalid
✅ String path = "C:\\Users";  // Escaped backslash
```

---

## Important Interview Points

💡 **Q: What are literals in Java?**  
**A**: Literals are constant values that appear directly in code. Six types: (1) Integer - whole numbers (10, 0x1A, 0b1010), (2) Floating-point - decimals (3.14f, 2.5d), (3) Character - single characters ('A', '\n'), (4) String - text ("Hello"), (5) Boolean - true/false, (6) Null - null. Literals are compile-time constants stored in constant pool.

💡 **Q: What are different integer literal formats?**  
**A**: Four formats:
- **Decimal**: 10, 100 (base 10, default)
- **Octal**: 012, 077 (base 8, prefix 0)
- **Hexadecimal**: 0x1A, 0xFF (base 16, prefix 0x)
- **Binary**: 0b1010, 0B1111 (base 2, prefix 0b)
Plus long suffix (L) and underscores for readability (1_000_000).

💡 **Q: Difference between float and double literals?**  
**A**: 
- **Float**: 32-bit, suffix f/F required (3.14f), precision ~7 digits
- **Double**: 64-bit, default or suffix d/D (3.14, 3.14d), precision ~15 digits
Without suffix, decimal literal is double by default. Assigning double to float without suffix causes error.

💡 **Q: What are escape sequences in character literals?**  
**A**: Escape sequences represent special characters:
- \n - newline
- \t - tab
- \\ - backslash
- \' - single quote
- \" - double quote
- \r - carriage return
- \b - backspace
- \f - form feed
- \uXXXX - Unicode (4 hex digits)

💡 **Q: What is string pooling?**  
**A**: String literals are stored in string pool (special area in heap). When same string literal used multiple times, JVM reuses same object from pool instead of creating new objects. Example:
```java
String s1 = "Hello";
String s2 = "Hello";
// s1 == s2 is true (same object)
```
Optimization: Reduces memory, enables fast comparison.

💡 **Q: Can we use underscores in numeric literals?**  
**A**: Yes (Java 7+), underscores improve readability, ignored by compiler. Rules:
- Can appear between digits: 1_000_000
- Cannot start or end: _100, 100_ (invalid)
- Cannot be adjacent to decimal point: 3._14 (invalid)
- Can be in any numeric literal: 0b1010_1010, 0xFF_FF
Purpose: Make large numbers readable.

💡 **Q: What is null literal?**  
**A**: null represents absence of object reference. Can be assigned to any reference type (String, Object, arrays), cannot be assigned to primitive types (int, boolean). null is keyword, not 0 or empty string. Accessing null reference causes NullPointerException.

💡 **Q: Difference between character and string literals?**  
**A**: 
- **Character**: Single character, single quotes ('A'), primitive type char, 16-bit
- **String**: Text, double quotes ("Hello"), reference type String, immutable object
Cannot interchange: 'A' ≠ "A", char ch = "A" is error.

💡 **Q: What are boolean literals?**  
**A**: true and false (keywords). Represent logical values. Not interchangeable with 0/1 like C/C++. Cannot assign integer to boolean:
```java
boolean flag = 1;  // ❌ Error
boolean flag = true;  // ✅ OK
```

---

## Short Recap

Literals constant values hain jo directly code mein likhe jaate hain. 6 types: Integer (10, 0x1A, 0b1010, 100L), Floating-point (3.14f, 2.5d), Character ('A', '\n'), String ("Hello"), Boolean (true/false), Null (null). Integer formats: decimal, octal (0 prefix), hex (0x prefix), binary (0b prefix). Float needs f suffix, double default. Character single quotes, string double quotes. Escape sequences: \n, \t, \\, \', \". Underscores for readability (1_000_000). String pooling: same literals share object. Interview ke liye yaad rakho: 6 literal types, integer formats, float vs double, escape sequences, string pooling, underscore rules, aur null usage.

---

**Previous**: [← 29 - Identifiers](./29-identifiers.md)  
**Next**: [31 - Comments →](./31-comments.md)
