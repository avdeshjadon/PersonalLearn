# 42) TYPE CASTING IN JAVA

## Concept Introduction

Type casting ek data type ko dusre data type mein convert karna hai — jaise int ko double mein ya double ko int mein. Java mein do types ki casting hain: Widening (automatic, smaller to larger) aur Narrowing (manual, larger to smaller). Widening casting safe hai kyunki data loss nahi hota: byte → int → long → float → double. Narrowing casting risky hai kyunki data loss ho sakta hai: double → int (decimal part lost). Explicit cast operator `(type)` use karte hain narrowing ke liye. Type casting compile-time pe check hoti hai aur runtime pe execute hoti hai. Casting samajhna important hai type conversions aur data manipulation ke liye!

---

## Why This Concept Exists

**Problem:**
- Different types ke variables ko kaise combine karein?
- Larger type ko smaller type mein kaise store karein?
- Mathematical operations mein type mismatch kaise handle karein?
- Precision loss kaise manage karein?

**Solution (Type Casting):**
- Widening: automatic conversion (safe)
- Narrowing: explicit conversion (manual)
- Type compatibility checking
- Controlled data loss
- Flexible type operations

---

## Definitions

### 🔹 Very Simple Definition
Type casting ek data type ko dusre type mein convert karna hai — automatic (widening) ya manual (narrowing).

### 🔹 College Exam Definition
Type casting is converting a value from one data type to another. Two types: (1) Widening Casting (Implicit) - Automatic conversion from smaller to larger type, No data loss, Order: byte → short → int → long → float → double, Example: int i = 10; double d = i; (automatic), (2) Narrowing Casting (Explicit) - Manual conversion from larger to smaller type, May lose data/precision, Requires cast operator (type), Example: double d = 3.14; int i = (int) d; (loses decimal). Widening is safe and automatic, narrowing is risky and requires explicit cast. Type casting enables type flexibility while maintaining type safety.

### 🔹 Viva Definition
Type casting is explicit or implicit type conversion between compatible types. Categories: (1) Widening Casting (Implicit/Automatic) - Conversion: smaller → larger type, Safety: no data loss, Automatic: no cast operator needed, Order: byte (1) → short (2) → int (4) → long (8) → float (4) → double (8), Note: int to float may lose precision (mantissa bits), Example: byte b = 10; int i = b; (automatic), Reason: larger type can accommodate smaller type's range, (2) Narrowing Casting (Explicit/Manual) - Conversion: larger → smaller type, Risk: may lose data/precision, Manual: cast operator (type) required, Example: double d = 3.14; int i = (int) d; (loses 0.14), Data loss: truncation (not rounding), overflow (value too large), Compiler: requires explicit cast to acknowledge risk, (3) Reference Type Casting - Upcasting: subclass → superclass (automatic), Downcasting: superclass → subclass (explicit, may fail), ClassCastException: runtime error if incompatible, instanceof: check before downcasting. Casting rules: compatible types only, boolean cannot cast, char can cast to int (Unicode value).

### 🔹 Interview Definition
Type casting converts values between compatible types with two categories. Widening Casting (Implicit): byte→short→int→long→float→double, automatic conversion, no data loss, larger type accommodates smaller range. Narrowing Casting (Explicit): reverse direction, manual cast operator (type) required, may lose data/precision, truncation occurs (not rounding). Special cases: char to int gives Unicode value, int to float may lose precision (mantissa bits), overflow wraps around. Reference casting: upcasting (subclass→superclass) automatic, downcasting (superclass→subclass) explicit with instanceof check. Casting rules: compatible types only, boolean cannot cast to/from numeric, String requires parsing methods.

### 🔹 Technical Definition
Type casting implemented via JVM bytecode conversion instructions with compile-time type checking and runtime execution. Widening instructions: i2l (int→long), i2f (int→float), i2d (int→double), l2f (long→float), l2d (long→double), f2d (float→double). Narrowing instructions: i2b (int→byte), i2c (int→char), i2s (int→short), l2i (long→int), f2i (float→int), f2l (float→long), d2i (double→int), d2l (double→long), d2f (double→float). Widening preserves value exactly (except int→float precision loss), narrowing truncates/overflows according to target type range. Reference casting uses checkcast instruction with runtime type verification, throws ClassCastException if incompatible.

### 🔹 One-line Crisp Definition
Type casting = Widening (automatic, safe) + Narrowing (explicit, risky) + Value conversion

---

## DIAGRAM: Type Casting Hierarchy

```
┌─────────────────────────────────────────────────────┐
│         WIDENING CASTING (AUTOMATIC)                │
└─────────────────────────────────────────────────────┘

byte → short → int → long → float → double
 1      2      4     8      4       8  (bytes)

char → int → long → float → double
 2      4     8      4       8  (bytes)

AUTOMATIC (No cast needed):
byte b = 10;
short s = b;    // ✅ Automatic
int i = s;      // ✅ Automatic
long l = i;     // ✅ Automatic
float f = l;    // ✅ Automatic
double d = f;   // ✅ Automatic

char c = 'A';
int unicode = c;  // ✅ Automatic (65)

┌─────────────────────────────────────────────────────┐
│         NARROWING CASTING (EXPLICIT)                │
└─────────────────────────────────────────────────────┘

double → float → long → int → short → byte
  8       4       8      4      2       1  (bytes)

EXPLICIT CAST (Cast operator required):
double d = 3.14;
float f = (float) d;   // ✅ Cast required
int i = (int) f;       // ✅ Cast (loses decimal)
short s = (short) i;   // ✅ Cast
byte b = (byte) s;     // ✅ Cast

int unicode = 65;
char c = (char) unicode;  // ✅ Cast ('A')
```

---

## Real-life Hinglish Example

### Example 1: Container Transfer

**Type Casting = Container Transfer:**
```
Small to Large (Widening):
├─ Small cup → Large cup
├─ Water fits easily
├─ No spillage
└─ Automatic transfer

Java: byte b = 10; int i = b; // Automatic

Large to Small (Narrowing):
├─ Large cup → Small cup
├─ May overflow
├─ Need to pour carefully
└─ Manual transfer

Java: int i = 1000; byte b = (byte) i; // Manual cast
```

### Example 2: Money Conversion

**Type Casting = Currency Exchange:**
```
Smaller to Larger Denomination (Widening):
├─ ₹1 coins → ₹500 note
├─ No value lost
├─ Easy conversion
└─ Automatic

Java: int rupees = 100; double precise = rupees; // Automatic

Larger to Smaller Denomination (Narrowing):
├─ ₹500 note → ₹1 coins
├─ May lose paisa (decimal)
├─ Need explicit decision
└─ Manual conversion

Java: double amount = 99.75; int rupees = (int) amount; // 99 (loses 0.75)
```

---

## Syntax Explanation

### Widening Casting (Automatic):

```java
public class WideningDemo {
    public static void main(String[] args) {
        // ============================================
        // WIDENING CASTING (AUTOMATIC)
        // ============================================
        
        // byte → short → int → long → float → double
        byte b = 10;
        short s = b;      // byte → short (automatic)
        int i = s;        // short → int (automatic)
        long l = i;       // int → long (automatic)
        float f = l;      // long → float (automatic)
        double d = f;     // float → double (automatic)
        
        System.out.println("byte: " + b);     // 10
        System.out.println("short: " + s);    // 10
        System.out.println("int: " + i);      // 10
        System.out.println("long: " + l);     // 10
        System.out.println("float: " + f);    // 10.0
        System.out.println("double: " + d);   // 10.0
        
        // char → int (special case)
        char c = 'A';
        int unicode = c;  // char → int (automatic, gives Unicode value)
        System.out.println("char 'A' = " + unicode);  // 65
        
        // Direct assignment (widening)
        double result = 100;  // int → double (automatic)
        System.out.println(result);  // 100.0
    }
}
```

### Narrowing Casting (Explicit):

```java
public class NarrowingDemo {
    public static void main(String[] args) {
        // ============================================
        // NARROWING CASTING (EXPLICIT)
        // ============================================
        
        // double → float → long → int → short → byte
        double d = 3.14159;
        float f = (float) d;    // double → float (cast required)
        int i = (int) f;        // float → int (cast, loses decimal)
        short s = (short) i;    // int → short (cast)
        byte b = (byte) s;      // short → byte (cast)
        
        System.out.println("double: " + d);   // 3.14159
        System.out.println("float: " + f);    // 3.14159 (may lose precision)
        System.out.println("int: " + i);      // 3 (decimal lost)
        System.out.println("short: " + s);    // 3
        System.out.println("byte: " + b);     // 3
        
        // int → char (special case)
        int unicode = 65;
        char c = (char) unicode;  // int → char (cast required)
        System.out.println("Unicode 65 = '" + c + "'");  // 'A'
        
        // Data loss examples
        double price = 99.99;
        int rupees = (int) price;  // Loses decimal part
        System.out.println("₹" + price + " → ₹" + rupees);  // ₹99.99 → ₹99
        
        // Overflow example
        int big = 300;
        byte small = (byte) big;  // Overflow!
        System.out.println("300 → byte: " + small);  // 44 (300 - 256)
    }
}
```

### Mixed Operations and Casting:

```java
public class MixedDemo {
    public static void main(String[] args) {
        // ============================================
        // MIXED OPERATIONS
        // ============================================
        
        // Arithmetic with different types
        byte b = 10;
        short s = 20;
        int i = 30;
        long l = 40L;
        float f = 50.5f;
        double d = 60.6;
        
        // Result promoted to largest type
        double result = b + s + i + l + f + d;  // All → double
        System.out.println("Sum: " + result);  // 211.1
        
        // Explicit casting in expressions
        int average = (int) ((f + d) / 2);  // Cast result to int
        System.out.println("Average: " + average);  // 55
        
        // ============================================
        // CHAR CASTING
        // ============================================
        
        // char ↔ int conversions
        char letter = 'Z';
        int code = letter;  // char → int (automatic)
        char back = (char) code;  // int → char (cast)
        
        System.out.println("'" + letter + "' = " + code);  // 'Z' = 90
        System.out.println(code + " = '" + back + "'");    // 90 = 'Z'
        
        // Character arithmetic
        char a = 'A';
        char z = (char) (a + 25);  // 'A' + 25 = 'Z' (cast needed)
        System.out.println("'A' + 25 = '" + z + "'");  // 'A' + 25 = 'Z'
        
        // ============================================
        // BOOLEAN CASTING (NOT ALLOWED)
        // ============================================
        
        boolean flag = true;
        // int x = flag;  // ❌ Error: boolean cannot cast
        // boolean y = 1; // ❌ Error: int cannot cast to boolean
        
        // Must use conditional
        int x = flag ? 1 : 0;  // ✅ OK
        boolean y = (x != 0);  // ✅ OK
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         TYPE CASTING IN MEMORY                      │
└─────────────────────────────────────────────────────┘

WIDENING CASTING:
byte b = 10;  // [00001010]
int i = b;    // [00000000 00000000 00000000 00001010]
              // Value preserved, extended with zeros

NARROWING CASTING:
int i = 300;  // [00000000 00000000 00000001 00101100]
byte b = (byte) i;  // [00101100] = 44
                    // Higher bytes discarded!

OVERFLOW EXAMPLE:
int value = 300 (binary: 00000000 00000000 00000001 00101100)
byte result = (byte) 300

CALCULATION:
300 = 256 + 44
byte range: -128 to 127 (256 values)
300 % 256 = 44
Result: 44

FLOATING-POINT CASTING:
double d = 3.14159;  // [IEEE 754 64-bit]
int i = (int) d;     // [00000000 00000000 00000000 00000011]
                     // Decimal part truncated (not rounded)
```

---

## Advantages

✅ **Type Flexibility**: Convert between compatible types  
✅ **Automatic Safety**: Widening prevents data loss  
✅ **Explicit Control**: Narrowing requires acknowledgment  
✅ **Performance**: Direct value conversion  
✅ **Compatibility**: Mix different numeric types  

---

## Limitations

❌ **Data Loss**: Narrowing may lose precision/data  
❌ **Overflow**: Values may wrap around  
❌ **Boolean Restriction**: Cannot cast boolean  
❌ **Truncation**: Decimal parts lost (not rounded)  

---

## Edge Cases

🔸 **Integer overflow:**
```java
int big = 2147483647;  // Max int
byte small = (byte) big;  // -1 (overflow!)
System.out.println(small);  // -1
```

🔸 **Precision loss (int to float):**
```java
int precise = 16777217;  // More than float mantissa bits
float f = precise;       // May lose precision
int back = (int) f;      // May not equal original
System.out.println(precise == back);  // May be false!
```

🔸 **Char casting:**
```java
char c = 65535;  // Max char value
int i = c;       // 65535 (positive)
char back = (char) -1;  // 65535 (wraps around)
```

🔸 **Negative to char:**
```java
int negative = -1;
char c = (char) negative;  // 65535 (wraps to max char)
System.out.println((int) c);  // 65535
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Forgetting cast for narrowing
```java
❌ double d = 3.14;
   int i = d;  // Error: double to int

✅ int i = (int) d;  // OK with cast
```

🚫 **Mistake 2**: Expecting rounding instead of truncation
```java
❌ double d = 3.9;
   int i = (int) d;  // 3 (not 4!)
   // Truncates, doesn't round

✅ int i = (int) Math.round(d);  // 4 (rounded)
```

🚫 **Mistake 3**: Ignoring overflow
```java
❌ int big = 300;
   byte b = (byte) big;  // 44 (not 300!)
   
✅ if (big >= Byte.MIN_VALUE && big <= Byte.MAX_VALUE) {
       byte b = (byte) big;
   }
```

🚫 **Mistake 4**: Trying to cast boolean
```java
❌ boolean flag = true;
   int x = (int) flag;  // Error!

✅ int x = flag ? 1 : 0;  // OK
```

---

## Important Interview Points

💡 **Q: What is the difference between widening and narrowing casting?**  
**A**: 
- **Widening**: Smaller → larger type, automatic, no data loss, safe
- **Narrowing**: Larger → smaller type, explicit cast required, may lose data, risky
Example:
```java
int i = 10;
double d = i;  // Widening (automatic)
int j = (int) d;  // Narrowing (cast required)
```

💡 **Q: What happens when you cast a larger value to smaller type?**  
**A**: Overflow occurs - value wraps around. Higher-order bits are discarded. Example:
```java
int big = 300;
byte small = (byte) big;  // 44 (300 % 256)
// 300 in binary: 00000001 00101100
// byte keeps only: 00101100 = 44
```

💡 **Q: Does casting round or truncate decimal values?**  
**A**: Casting truncates (cuts off) decimal part, doesn't round. Example:
```java
double d = 3.9;
int i = (int) d;  // 3 (not 4)
// Use Math.round() for rounding
int rounded = (int) Math.round(d);  // 4
```

💡 **Q: Can you cast boolean to int in Java?**  
**A**: No, boolean cannot be cast to/from numeric types. Unlike C/C++, Java doesn't treat boolean as 0/1. Must use conditional:
```java
boolean flag = true;
int x = flag ? 1 : 0;  // Convert manually
```

💡 **Q: What is the casting hierarchy in Java?**  
**A**: byte → short → int → long → float → double (widening)
char → int → long → float → double (char special case)
Reverse direction requires explicit casting (narrowing).

💡 **Q: Why can int be cast to float but may lose precision?**  
**A**: float has 32 bits but only 23 mantissa bits for precision. int has 32 bits for value. Large int values (> 2²³) may not fit exactly in float mantissa, causing precision loss.

💡 **Q: What happens when casting char to int?**  
**A**: Gets Unicode value of character. Example:
```java
char c = 'A';
int unicode = c;  // 65 (Unicode of 'A')
```

💡 **Q: Can you cast between primitive and reference types?**  
**A**: No direct casting. Use wrapper classes with autoboxing/unboxing or parsing methods:
```java
int i = 10;
Integer obj = i;  // Autoboxing (not casting)
String s = String.valueOf(i);  // Conversion method
```

---

## Short Recap

Type casting ek data type ko dusre mein convert karna hai. Do types: Widening (automatic, safe, smaller to larger) aur Narrowing (explicit cast, risky, larger to smaller). Widening: byte→short→int→long→float→double, char→int. Narrowing: reverse direction, (type) cast operator needed. Widening preserves value, narrowing may lose data (truncation, overflow). Char↔int special case (Unicode values). Boolean cannot cast to/from numeric. Casting truncates decimals (doesn't round). Overflow wraps around (300→byte = 44). Interview ke liye yaad rakho: widening vs narrowing, cast operator syntax, data loss in narrowing, truncation vs rounding, boolean restriction, char Unicode conversion, overflow behavior, aur precision loss in int→float.

---

**Previous**: [← 41 - ASCII vs Unicode](./41-ascii-vs-unicode.md)  
**Next**: [43 - Type Promotion →](./43-type-promotion.md)