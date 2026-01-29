# 45) ARITHMETIC OPERATORS

## Concept Introduction

Arithmetic operators Java mein mathematical calculations perform karte hain — bilkul calculator ki tarah! Jaise hum school mein +, -, ×, ÷ use karte the, waise hi programming mein bhi +, -, *, /, % operators use hote hain. Ye operators numbers pe basic mathematical operations perform karte hain. Binary operators hain jo 2 operands (values) pe kaam karte hain — jaise 5 + 3, 10 - 2, 4 * 6. Unary operators bhi hain jo single operand pe kaam karte hain — jaise +5 ya -5. Java mein 5 main arithmetic operators hain: Addition (+), Subtraction (-), Multiplication (*), Division (/), aur Modulus (%). Division operator 2 tarah se kaam karta hai: integer division (5/2 = 2) aur floating-point division (5.0/2 = 2.5). Modulus operator (%) remainder nikalta hai — jaise 5%2 = 1. Type promotion automatically hota hai when different data types mix hote hain operations mein!

---

## Why This Concept Exists

**Problem:**
- Mathematical calculations kaise karein?
- Addition, subtraction kaise perform karein?
- Multiplication, division kaise implement karein?
- Remainder kaise calculate karein?
- Complex mathematical expressions kaise likhein?

**Solution (Arithmetic Operators):**
- + operator for addition calculations
- - operator for subtraction calculations
- * operator for multiplication calculations
- / operator for division calculations
- % operator for remainder/modulus
- Type promotion for mixed-type operations
- Precedence rules for evaluation order

---

## Definitions

### 🔹 Very Simple Definition
Arithmetic operators mathematical operations perform karte hain — +, -, *, /, % — jaise calculator mein!

### 🔹 College Exam Definition
Arithmetic operators are special symbols that perform mathematical operations on numeric operands. Java has 5 binary arithmetic operators: (1) Addition (+) adds two operands, (2) Subtraction (-) subtracts second from first, (3) Multiplication (*) multiplies two operands, (4) Division (/) divides first by second, (5) Modulus (%) returns remainder of division. Additionally, unary + and - operators exist for positive/negative values. Division has two modes: integer division (truncates decimal) and floating-point division (preserves decimal). Type promotion occurs when operands of different types are used together. Precedence: *, /, % have higher precedence than +, -. Associativity: left-to-right for all arithmetic operators.

### 🔹 Viva Definition
Arithmetic operators perform mathematical calculations with type-specific behavior. (1) Addition (+) - adds operands, works with all numeric types, string concatenation when one operand is String, type promotion to larger type (int + double = double), (2) Subtraction (-) - subtracts second from first, numeric types only, type promotion applies, (3) Multiplication (*) - multiplies operands, numeric types only, result type is promoted type, (4) Division (/) - divides first by second, integer division: 5/2 = 2 (truncates), floating-point division: 5.0/2 = 2.5 (exact), ArithmeticException if divide by zero (integer), Infinity if divide by zero (float/double), (5) Modulus (%) - returns remainder, works with integers and floating-point, sign of result matches sign of dividend, integer only: throws ArithmeticException for zero divisor. Unary operators: + (positive value), - (negation). Type promotion rules: byte/short/char promoted to int, if any operand is double, result is double, if any operand is float, result is float, if any operand is long, result is long, otherwise result is int. Precedence order: *, /, % (high) then +, - (low). Associativity: left-to-right.

### 🔹 Interview Definition
Arithmetic operators perform mathematical operations with specific type handling and precedence. Binary operators (+, -, *, /, %) work on two operands. Unary operators (+, -) work on single operand. Key concepts: (1) Integer division truncates: 5/2 = 2, not 2.5, (2) Floating-point division preserves decimal: 5.0/2 = 2.5, (3) Modulus returns remainder: 5%2 = 1, (4) Type promotion: smaller types promoted to larger (byte→short→int→long→float→double), (5) Division by zero: integer division throws ArithmeticException, float/double division returns Infinity or NaN, (6) Precedence: *, /, % evaluated before +, -, (7) String concatenation: + operator concatenates when any operand is String. Important for interviews: understand integer vs float division, type promotion rules, division by zero behavior, modulus with negative numbers, operator precedence.

### 🔹 Technical Definition
Arithmetic operators compile to JVM bytecode instructions. Addition: iadd (int), ladd (long), fadd (float), dadd (double). Subtraction: isub, lsub, fsub, dsub. Multiplication: imul, lmul, fmul, dmul. Division: idiv, ldiv, fdiv, ddiv. Remainder: irem, lrem, frem, drem. Negation: ineg, lneg, fneg, dneg. Type promotion handled at compile-time via widening primitive conversion. Integer division implements truncation toward zero. Floating-point follows IEEE 754 standard. Division by zero: integer division checks divisor, throws ArithmeticException if zero; floating-point returns special values (Infinity, -Infinity, NaN). String concatenation uses StringBuilder internally (invokedynamic with StringConcatFactory since Java 9). Operand stack manages values during arithmetic operations.

### 🔹 One-line Crisp Definition
Arithmetic operators = Mathematical operations (+,-,*,/,%) + Type promotion + Integer/float division modes + Precedence rules

---

## Internal Working

```
ARITHMETIC OPERATION PROCESS:

1. Compile Time:
   - Parser identifies arithmetic operators
   - Type checking on operands
   - Type promotion applied if needed
   - Precedence determines evaluation order
   - Generate bytecode instructions

2. Runtime:
   - Load operands onto operand stack
   - Execute arithmetic bytecode
   - Handle overflow (wrap around for integer)
   - Handle special cases (divide by zero)
   - Store result

3. Integer Division:
   5 / 2:
   - Both operands are int
   - Integer division mode
   - Result: 2 (truncated)

4. Float Division:
   5.0 / 2:
   - First operand is double
   - Second operand promoted to double
   - Floating-point division mode
   - Result: 2.5 (exact)

5. Type Promotion:
   int + double:
   - int promoted to double
   - Addition performed as double
   - Result is double
```

---

## DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ARITHMETIC OPERATORS IN JAVA                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  BINARY ARITHMETIC OPERATORS                                               │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  1. ADDITION (+)                                                           │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 10, b = 5;                              │                  │
│     │  int sum = a + b;    // 15                       │                  │
│     │  double d = 3.5 + 2.5;  // 6.0                   │                  │
│     │  String s = "Hello" + " World";  // Concatenation│                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  2. SUBTRACTION (-)                                                        │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 10, b = 5;                              │                  │
│     │  int diff = a - b;   // 5                        │                  │
│     │  double d = 7.5 - 2.3;  // 5.2                   │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  3. MULTIPLICATION (*)                                                     │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 10, b = 5;                              │                  │
│     │  int product = a * b;  // 50                     │                  │
│     │  double d = 2.5 * 4.0;  // 10.0                  │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  4. DIVISION (/)                                                           │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  INTEGER DIVISION:                               │                  │
│     │  int a = 10, b = 3;                              │                  │
│     │  int result = a / b;   // 3 (truncated)          │                  │
│     │                                                   │                  │
│     │  FLOATING-POINT DIVISION:                        │                  │
│     │  double d = 10.0 / 3;  // 3.333...               │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  5. MODULUS (%) - Remainder                                                │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 10, b = 3;                              │                  │
│     │  int remainder = a % b;  // 1                    │                  │
│     │  int check = 10 % 2;     // 0 (even number)      │                  │
│     └──────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  UNARY ARITHMETIC OPERATORS                                                │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  1. UNARY PLUS (+)                                                         │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 5;                                      │                  │
│     │  int b = +a;   // 5 (no change)                  │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  2. UNARY MINUS (-)                                                        │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 5;                                      │                  │
│     │  int b = -a;   // -5 (negation)                  │                  │
│     └──────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  OPERATOR PRECEDENCE & ASSOCIATIVITY                                       │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Precedence (High to Low):                                                 │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  1. Unary: +, -        (highest)                    │                  │
│  │  2. Multiplicative: *, /, %                         │                  │
│  │  3. Additive: +, -     (lowest)                     │                  │
│  └─────────────────────────────────────────────────────┘                  │
│                                                                            │
│  Associativity: Left-to-right for all                                      │
│                                                                            │
│  Example:                                                                  │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  int result = 2 + 3 * 4;                            │                  │
│  │  // Step 1: 3 * 4 = 12  (* higher precedence)       │                  │
│  │  // Step 2: 2 + 12 = 14                             │                  │
│  └─────────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  TYPE PROMOTION IN ARITHMETIC                                              │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  byte/short/char ──→ int ──→ long ──→ float ──→ double                    │
│                                                                            │
│  Examples:                                                                 │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  byte b = 10;                                       │                  │
│  │  int i = 20;                                        │                  │
│  │  long result = b + i;  // byte→int, then add       │                  │
│  │                                                     │                  │
│  │  int x = 5;                                         │                  │
│  │  double y = 2.5;                                    │                  │
│  │  double result = x + y;  // int→double, then add   │                  │
│  └─────────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  DIVISION MODES                                                            │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  INTEGER DIVISION (both operands integer):                                 │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  5 / 2 = 2         (decimal truncated)              │                  │
│  │  7 / 3 = 2         (not 2.333...)                   │                  │
│  │  10 / 4 = 2        (not 2.5)                        │                  │
│  └─────────────────────────────────────────────────────┘                  │
│                                                                            │
│  FLOATING-POINT DIVISION (any operand is float/double):                    │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  5.0 / 2 = 2.5     (exact result)                   │                  │
│  │  7 / 3.0 = 2.333...                                 │                  │
│  │  10.0 / 4.0 = 2.5                                   │                  │
│  └─────────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Shopping Bill Calculator

```
Scenario: Tum shopping kar rahe ho aur total bill calculate karna hai!

Items:
- Shirt: ₹500
- Jeans: ₹800
- Shoes: ₹1200

Operations:
1. ADDITION (+) - Total amount
   Total = 500 + 800 + 1200 = ₹2500

2. SUBTRACTION (-) - Discount apply
   Discount = ₹200
   After discount = 2500 - 200 = ₹2300

3. DIVISION (/) - Split among friends
   4 friends hai, each pays:
   Share = 2300 / 4 = ₹575 (integer division)

4. MODULUS (%) - Remaining amount
   Remaining = 2300 % 4 = ₹0 (equally divided)

Perfect example of arithmetic operators in real life!
```

### Example 2: Restaurant Bill Split

```
Scenario: 5 friends restaurant mein khana khaye, bill split karna hai!

Bill details:
- Total bill: ₹1247
- Friends: 5

Operations:
1. DIVISION (/) - Per person share
   Each pays = 1247 / 5 = ₹249 (integer division)
   
2. MODULUS (%) - Extra amount
   Extra = 1247 % 5 = ₹2
   
   Explanation:
   - 5 × 249 = ₹1245 (distributed)
   - Remaining = ₹2 (extra)
   
3. Solution:
   - 4 friends pay ₹249 each
   - 1 friend pays ₹249 + ₹2 = ₹251
   - Total = (4 × 249) + 251 = ₹1247 ✓

Real-life modulus use case!
```

---

## Syntax Explanation

```java
public class ArithmeticDemo {
    public static void main(String[] args) {
        // 1. ADDITION
        int a = 10, b = 5;
        int sum = a + b;              // 15
        System.out.println("Sum: " + sum);
        
        // 2. SUBTRACTION
        int difference = a - b;       // 5
        System.out.println("Difference: " + difference);
        
        // 3. MULTIPLICATION
        int product = a * b;          // 50
        System.out.println("Product: " + product);
        
        // 4. DIVISION
        int quotient = a / b;         // 2 (integer division)
        System.out.println("Quotient: " + quotient);
        
        double exactDiv = 10.0 / 3;   // 3.333... (float division)
        System.out.println("Exact: " + exactDiv);
        
        // 5. MODULUS
        int remainder = a % b;        // 0
        System.out.println("Remainder: " + remainder);
        
        // 6. COMPLEX EXPRESSION
        int result = 2 + 3 * 4 - 6 / 2;  // Uses precedence
        System.out.println("Result: " + result);  // 11
        
        // 7. TYPE PROMOTION
        int x = 5;
        double y = 2.5;
        double mixed = x + y;         // int promoted to double
        System.out.println("Mixed: " + mixed);  // 7.5
        
        // 8. UNARY OPERATORS
        int positive = +10;           // 10
        int negative = -10;           // -10
        System.out.println("Unary: " + negative);
    }
}
```

**Explanation:**
- Line 4-6: Addition of two integers, result stored in sum
- Line 8-9: Subtraction operation, second operand subtracted from first
- Line 11-12: Multiplication of two integers
- Line 14-16: Integer division (10/5 = 2), decimal truncated if any
- Line 18-19: Floating-point division (10.0/3 = 3.333...), exact result
- Line 21-23: Modulus operation, returns remainder (10%5 = 0)
- Line 25-27: Complex expression using precedence (* and / before +,-)
- Line 29-32: Type promotion, int automatically converted to double
- Line 34-37: Unary plus and minus operators

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ARITHMETIC OPERATION MEMORY                          │
└─────────────────────────────────────────────────────────────────────────┘

Example: int result = a + b * c;

STEP 1 - Load variables from memory:
┌─────────────────┐
│   STACK FRAME   │
├─────────────────┤
│ c: 3            │ ← Load c
│ b: 4            │ ← Load b
│ a: 2            │ ← Load a
│ result: ?       │ ← Not yet calculated
└─────────────────┘

STEP 2 - Evaluate b * c (precedence):
┌─────────────────┐
│ OPERAND STACK   │
├─────────────────┤
│ 12              │ ← b * c = 12
└─────────────────┘

STEP 3 - Evaluate a + (result):
┌─────────────────┐
│ OPERAND STACK   │
├─────────────────┤
│ 14              │ ← a + 12 = 14
└─────────────────┘

STEP 4 - Store in result:
┌─────────────────┐
│   STACK FRAME   │
├─────────────────┤
│ c: 3            │
│ b: 4            │
│ a: 2            │
│ result: 14      │ ← Final value stored
└─────────────────┘

Type Promotion Memory:
┌────────────────────────────────────┐
│ int x = 5;                         │
│ double y = 2.5;                    │
│ double result = x + y;             │
│                                    │
│ Memory:                            │
│ x: [4 bytes] = 5                   │
│ y: [8 bytes] = 2.5                 │
│ Temp: [8 bytes] = 5.0 (promoted)   │
│ result: [8 bytes] = 7.5            │
└────────────────────────────────────┘
```

---

## Advantages

✅ **Simple Syntax**: Easy to understand and use, like mathematical notation  
✅ **Type Safe**: Compile-time type checking prevents errors  
✅ **Automatic Promotion**: Handles mixed-type operations automatically  
✅ **Precedence Rules**: Mathematical precedence naturally followed  
✅ **Performance**: Direct bytecode instructions, very fast execution  
✅ **Versatile**: Works with all numeric primitive types  
✅ **Predictable**: Well-defined behavior for all operations  

---

## Limitations

❌ **Integer Division Truncation**: 5/2 gives 2, not 2.5 (unexpected for beginners)  
❌ **Overflow**: No automatic overflow detection (127 + 1 = -128 for byte)  
❌ **No Operator Overloading**: Cannot define custom behavior for user types  
❌ **String Concatenation Confusion**: + operator dual purpose can confuse  
❌ **Precision Issues**: Floating-point arithmetic has precision limitations  
❌ **No Built-in Power**: No ** operator (must use Math.pow())  
❌ **Division by Zero**: Integer division throws exception, float gives Infinity  

---

## Edge Cases

🔸 **Integer division truncation:**
```java
int result = 5 / 2;        // 2 (not 2.5)
int result2 = 7 / 3;       // 2 (not 2.333...)
double d = 5 / 2;          // 2.0 (still integer division!)
double correct = 5.0 / 2;  // 2.5 (floating-point division)
```

🔸 **Modulus with negative numbers:**
```java
int r1 = 5 % 3;      // 2 (positive)
int r2 = -5 % 3;     // -2 (sign of dividend)
int r3 = 5 % -3;     // 2 (sign of dividend)
int r4 = -5 % -3;    // -2 (sign of dividend)
// Rule: Sign of result matches sign of dividend
```

🔸 **Division by zero:**
```java
// Integer division by zero
int x = 10 / 0;      // ArithmeticException at runtime

// Floating-point division by zero
double y = 10.0 / 0; // Infinity (no exception)
double z = 0.0 / 0;  // NaN (Not a Number)
```

🔸 **Type promotion surprises:**
```java
byte b1 = 10, b2 = 20;
byte sum = b1 + b2;   // Compilation error!
// Reason: b1 + b2 promoted to int

int sum = b1 + b2;    // Correct
// or
byte sum = (byte)(b1 + b2);  // Explicit cast
```

🔸 **Overflow behavior:**
```java
int max = Integer.MAX_VALUE;  // 2147483647
int overflow = max + 1;        // -2147483648 (wraps around)
// No exception! Silent overflow

byte b = 127;
b = (byte)(b + 1);  // -128 (wraps around)
```

🔸 **Precedence confusion:**
```java
int result = 10 + 5 * 2;     // 20 (not 30)
// * has higher precedence than +

int result2 = (10 + 5) * 2;  // 30 (parentheses override)
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Integer division expecting decimal result
```java
❌ int result = 5 / 2;          // 2 (not 2.5)
   double d = 5 / 2;            // 2.0 (still wrong!)
   
✅ double result = 5.0 / 2;     // 2.5
   // or
   double result = (double)5 / 2;  // 2.5
   // At least one operand must be floating-point
```

🚫 **Mistake 2**: Forgetting operator precedence
```java
❌ int result = 2 + 3 * 4;      // Thinking it's 20
   // Actually 14 (3*4 first = 12, then 2+12 = 14)
   
✅ int result = (2 + 3) * 4;    // 20 (use parentheses)
   // Always use parentheses for clarity
```

🚫 **Mistake 3**: Byte/short arithmetic type promotion
```java
❌ byte a = 10, b = 20;
   byte sum = a + b;            // Compilation error!
   // Reason: a + b promoted to int
   
✅ byte sum = (byte)(a + b);    // Explicit cast needed
   // or
   int sum = a + b;             // Accept as int
```

🚫 **Mistake 4**: String concatenation confusion
```java
❌ System.out.println(1 + 2 + "3");     // "33" (not "123")
   // 1+2=3, then 3+"3"="33"
   
✅ System.out.println("" + 1 + 2 + 3);  // "123"
   // or
   System.out.println((1 + 2) + "3");   // "33"
```

🚫 **Mistake 5**: Division by zero not handled
```java
❌ int divisor = 0;
   int result = 10 / divisor;   // Runtime ArithmeticException!
   
✅ int divisor = 0;
   if (divisor != 0) {
       int result = 10 / divisor;
   } else {
       System.out.println("Cannot divide by zero");
   }
```

---

## Important Interview Points

💡 **Q: What's the difference between integer and floating-point division?**  
**A**: Integer division truncates decimal part, floating-point preserves it.
```java
// INTEGER DIVISION (both operands integer)
int result = 5 / 2;      // 2 (decimal truncated)
int result = 7 / 3;      // 2 (not 2.333...)

// FLOATING-POINT DIVISION (at least one operand float/double)
double result = 5.0 / 2; // 2.5 (exact result)
double result = 5 / 2.0; // 2.5 (second operand float)
```

💡 **Q: How does modulus operator work with negative numbers?**  
**A**: Sign of result matches sign of dividend (first operand).
```java
int r1 = 5 % 3;    // 2 (both positive)
int r2 = -5 % 3;   // -2 (dividend negative, result negative)
int r3 = 5 % -3;   // 2 (dividend positive, result positive)
int r4 = -5 % -3;  // -2 (dividend negative, result negative)

// Formula: a % b = a - (a/b) * b
// Example: -5 % 3 = -5 - (-5/3)*3 = -5 - (-1)*3 = -2
```

💡 **Q: What is type promotion in arithmetic operations?**  
**A**: Smaller types automatically converted to larger types in mixed operations.
```java
// Promotion hierarchy: byte → short → int → long → float → double

byte b = 10;
int i = 20;
int result = b + i;    // byte promoted to int

int x = 5;
double y = 2.5;
double result = x + y; // int promoted to double (result is double)

// Special case: byte, short, char promoted to int in ANY arithmetic
byte b1 = 10, b2 = 20;
int sum = b1 + b2;     // Both promoted to int
```

💡 **Q: What happens with division by zero?**  
**A**: Integer division throws ArithmeticException, floating-point returns special values.
```java
// INTEGER DIVISION BY ZERO
int x = 10 / 0;      // ArithmeticException (runtime error)

// FLOATING-POINT DIVISION BY ZERO
double y = 10.0 / 0; // Infinity (no exception)
double z = -10.0 / 0;// -Infinity
double w = 0.0 / 0;  // NaN (Not a Number)

// CHECK FOR INFINITY/NaN
if (Double.isInfinite(y)) { }
if (Double.isNaN(w)) { }
```

💡 **Q: What is operator precedence in arithmetic?**  
**A**: Order of evaluation: Unary > Multiplicative > Additive.
```java
// PRECEDENCE (high to low):
// 1. Unary: +, -
// 2. Multiplicative: *, /, %
// 3. Additive: +, -

int result = 2 + 3 * 4;     // 14 (not 20)
// Step 1: 3 * 4 = 12 (* higher precedence)
// Step 2: 2 + 12 = 14

int result = 10 - 6 / 2;    // 7 (not 2)
// Step 1: 6 / 2 = 3 (/ higher precedence)
// Step 2: 10 - 3 = 7

// Use parentheses to override
int result = (2 + 3) * 4;   // 20
```

💡 **Q: Can arithmetic operators cause overflow?**  
**A**: Yes, integer overflow wraps around silently (no exception).
```java
// INTEGER OVERFLOW
int max = Integer.MAX_VALUE;  // 2147483647
int overflow = max + 1;        // -2147483648 (wraps to MIN_VALUE)

byte b = 127;                  // byte max value
b = (byte)(b + 1);            // -128 (wraps around)

// NO EXCEPTION - Silent overflow!

// FLOATING-POINT OVERFLOW
double maxDouble = Double.MAX_VALUE;
double overflow = maxDouble * 2;  // Infinity (not exception)
```

💡 **Q: Why does byte + byte return int?**  
**A**: Java promotes byte, short, char to int in ANY arithmetic operation.
```java
byte b1 = 10;
byte b2 = 20;
byte sum = b1 + b2;  // ❌ Compilation error!
// Reason: b1 + b2 evaluated as int

// SOLUTION 1: Accept as int
int sum = b1 + b2;   // ✅ Correct

// SOLUTION 2: Explicit cast
byte sum = (byte)(b1 + b2);  // ✅ Correct (but may overflow)

// REASON: JVM operates on int-sized operands for efficiency
```

💡 **Q: What is associativity of arithmetic operators?**  
**A**: All arithmetic operators are left-to-right associative.
```java
// LEFT-TO-RIGHT ASSOCIATIVITY
int result = 10 - 5 - 2;  // (10 - 5) - 2 = 3 (not 10 - (5 - 2) = 7)
int result = 20 / 4 / 2;  // (20 / 4) / 2 = 2 (not 20 / (4 / 2) = 10)

// Same precedence, evaluated left to right
int result = 10 + 5 - 3;  // (10 + 5) - 3 = 12
```

---

## Short Recap

Arithmetic operators Java mein mathematical operations perform karte hain: +, -, *, /, %. Binary operators 2 operands pe kaam karte hain, unary operators (+x, -x) single operand pe. Integer division decimal truncate karta hai (5/2=2), floating-point division exact result deta hai (5.0/2=2.5). Modulus (%) remainder return karta hai, sign dividend ke according. Type promotion automatically hota hai: byte→short→int→long→float→double. Precedence order: unary (highest), multiplicative (*,/,%), additive (+,-). Associativity left-to-right hai. Division by zero: integer mein ArithmeticException, float mein Infinity/NaN. Overflow silently wrap around hota hai. Interview ke liye yaad rakho: integer vs float division, type promotion rules, modulus with negatives, precedence order, overflow behavior, aur division by zero handling!

---

**Previous**: [← 44 - OPERATORS OVERVIEW](./44-operators-overview.md)  
**Next**: [46 - RELATIONAL OPERATORS →](./46-relational-operators.md)