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
Type casting is explicit or implicit type conversion between compatible types. Categories: (1) Widening Casting (Implicit/Automatic) - Conversion: smaller → larger type, Safety: no data loss, Automatic: no cast operator needed, Order: byte (1) → short (2) → int (4) → long (8) → float (4) → double (8), Note: int to float may lose precision (mantissa bits), Example: byte b = 10; int i = b; (automatic), Reason: larger type can accommodate smaller type's range, (2) Narrowing Casting (Explicit/Manual) - Conversion: larger → smaller type, Risk: may lose data/precision, Manual: cast operator (type) required, Example: double d = 3.14; int i = (int) d; (loses 0.14), Data loss: truncation (not rounding), overflow (value too large), Compiler: requires explicit cast to acknowledge risk, (3) Reference Type Casting - Upcasting: subclass → superclass (automatic), Downcasting: superclass → subclass (explicit, may fail), ClassCastException: runtime error if incompatible, instanceof: check before downcasting. Casting rules: Compatib
Type casting is explicit or implicit type conversion between compatible types. Widening Casting (Implicit): smaller → larger type, automatic, no data loss, byte → short → int → long → float → double. Narrowing Casting (Explicit): larger → smaller type, manual cast operator needed, may lose data. Reference casting: upcasting automatic, downcasting explicit. Casting rules: compatible types only, boolean cannot cast, char can cast to int.

### 🔹 Interview Definition
Type casting converts values between types. Widening: byte→short→int→long→float→double (automatic, safe). Narrowing: reverse (explicit cast, may lose data). Truncation: decimal part lost. Overflow: value wraps. char to int gives Unicode value. Reference casting: upcasting safe, downcasting needs instanceof check.

### 🔹 Technical Definition
Type casting implemented via bytecode conversion instructions (i2l, i2f, d2i, etc.). Widening preserves value, narrowing truncates/overflows. JVM verifies type safety at runtime for reference casts.

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

AUTOMATIC (No cast needed):
byte b = 10;
short s = b;    // ✅ Automatic
int i = s;      // ✅ Automatic
long l = i;     // ✅ Automatic
float f = l;    // ✅ Automatic
double d = f;   // ✅ Automatic

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
```

---

## Real-life Hinglish Example

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

---

## Syntax Explanation

```java
// Wid