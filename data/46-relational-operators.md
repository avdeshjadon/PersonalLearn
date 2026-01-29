# 46) RELATIONAL OPERATORS

## Concept Introduction

Relational operators Java mein comparison karne ke liye use hote hain — jaise 2 values compare karke check karna ki kaunsi badi hai, choti hai, ya equal hai! Ye operators 2 values ko compare karke hamesha boolean result return karte hain — true ya false. Real life mein jaise hum compare karte hain "kya tera marks mujhse zyada hai?", "kya teri height usse kam hai?", waise hi programming mein relational operators use hote hain. Java mein 6 relational operators hain: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal), <= (less than or equal). Ye operators decision making ke liye zaroori hain — if statements, loops, conditions mein use hote hain. Important: = (assignment) aur == (comparison) mein confusion nahi hona chahiye. Relational operators sirf primitive types aur reference comparison ke liye use hote hain, String content comparison ke liye .equals() method use karna padta hai!

---

## Why This Concept Exists

**Problem:**
- Do values ko compare kaise karein?
- Conditions kaise check karein?
- Decision making kaise implement karein?
- Greater/less than kaise determine karein?
- Equality kaise verify karein?

**Solution (Relational Operators):**
- == operator for equality checking
- != operator for inequality checking
- > operator for greater than comparison
- < operator for less than comparison
- >= operator for greater or equal comparison
- <= operator for less or equal comparison
- Boolean result for decision making
- Works with all primitive types

---

## Definitions

### 🔹 Very Simple Definition
Relational operators 2 values ko compare karte hain aur true/false return karte hain — ==, !=, <, >, <=, >=

### 🔹 College Exam Definition
Relational operators (comparison operators) compare two operands and return a boolean value (true or false). Java has 6 relational operators: (1) == (equal to) checks if both operands are equal, (2) != (not equal to) checks if operands are different, (3) > (greater than) checks if left operand is greater, (4) < (less than) checks if left operand is smaller, (5) >= (greater than or equal to) checks if left is greater or equal, (6) <= (less than or equal to) checks if left is smaller or equal. These operators work with all primitive types (byte, short, int, long, float, double, char, boolean). Return type is always boolean. Used in conditional statements (if, while, for) for decision making. For reference types, == checks reference equality (same object), not content equality. String content comparison requires .equals() method.

### 🔹 Viva Definition
Relational operators perform comparisons returning boolean results. (1) Equal to (==) - checks value equality for primitives, reference equality for objects, for floating-point: compares actual values including special cases (NaN, Infinity), for char: compares Unicode values, cannot be used on incompatible types, (2) Not equal to (!=) - opposite of ==, returns true if operands differ, same rules as == apply, (3) Greater than (>) - checks if left > right, works with numeric types and char, cannot use with boolean, type promotion applied if needed, (4) Less than (<) - checks if left < right, same rules as >, (5) Greater than or equal (>=) - combines > and ==, returns true if either condition satisfied, (6) Less than or equal (<=) - combines < and ==. Key concepts: result type always boolean, cannot chain comparisons (a < b < c invalid), precedence lower than arithmetic operators, reference comparison: == checks memory address not content, String comparison: use .equals() for content, char comparison: based on Unicode values, floating-point comparison: special handling for NaN (NaN != NaN returns true).

### 🔹 Interview Definition
Relational operators compare operands returning boolean (true/false). Six operators: ==, !=, <, >, <=, >=. Key points: (1) Primitive comparison: value-based, (2) Reference comparison: == checks if references point to same object, not content, (3) String comparison: == checks reference, .equals() checks content, (4) Type compatibility: both operands must be comparable types, (5) Type promotion: smaller type promoted in mixed comparisons, (6) Precedence: lower than arithmetic, higher than logical, (7) Associativity: left-to-right, (8) Cannot chain: a < b < c is invalid syntax, must use a < b && b < c, (9) Char comparison: based on Unicode values ('a' < 'b' is true), (10) Floating-point: special cases like NaN comparison always false except !=. Common interview topics: == vs .equals(), reference vs value comparison, NaN behavior, precedence in complex expressions.

### 🔹 Technical Definition
Relational operators compile to comparison bytecode instructions. Integer comparisons: if_icmpeq, if_icmpne, if_icmplt, if_icmpgt, if_icmple, if_icmpge (compare and jump). Long comparisons: lcmp instruction followed by conditional jump. Float comparisons: fcmpl/fcmpg (compare, push result to stack), followed by conditional jump. Double comparisons: dcmpl/dcmpg. Reference comparison: if_acmpeq, if_acmpne (compare object references). Boolean result represented as 0 (false) or 1 (true) on operand stack. Type promotion handled at compile-time. NaN handling: fcmpl returns -1 if either operand is NaN, fcmpg returns +1. Comparison result stored on stack, used by subsequent branching instructions (ifeq, ifne, iflt, ifgt, ifle, ifge).

### 🔹 One-line Crisp Definition
Relational operators = Comparison operations (<,>,<=,>=,==,!=) + Boolean result + Primitive/reference types + Decision making foundation

---

## Internal Working

```
RELATIONAL COMPARISON PROCESS:

1. Compile Time:
   - Type checking on operands
   - Ensure types are comparable
   - Type promotion if needed
   - Generate comparison bytecode

2. Runtime Execution:
   Integer comparison (5 > 3):
   - Load both values onto stack
   - Execute if_icmpgt bytecode
   - Compare values
   - Push 1 (true) or 0 (false) to stack

3. Reference Comparison (obj1 == obj2):
   - Load both references
   - Compare memory addresses
   - Return true if same object, false otherwise

4. String Comparison:
   String s1 = "Hello";
   String s2 = "Hello";
   s1 == s2:  // May be true (string pool)
   
   String s3 = new String("Hello");
   s1 == s3:  // false (different objects)
   s1.equals(s3):  // true (same content)

5. Floating-point Comparison:
   - Special handling for NaN
   - NaN compared to anything (including itself) is false
   - Exception: NaN != NaN is true
```

---

## DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    RELATIONAL OPERATORS IN JAVA                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  ALL RELATIONAL OPERATORS                                                  │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  1. EQUAL TO (==)                                                          │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 5, b = 5;                               │                  │
│     │  boolean result = (a == b);  // true             │                  │
│     │                                                   │                  │
│     │  String s1 = "Hello";                            │                  │
│     │  String s2 = "Hello";                            │                  │
│     │  boolean ref = (s1 == s2);   // true (pool)      │                  │
│     │                                                   │                  │
│     │  String s3 = new String("Hello");                │                  │
│     │  boolean ref2 = (s1 == s3);  // false (diff ref) │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  2. NOT EQUAL TO (!=)                                                      │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 5, b = 3;                               │                  │
│     │  boolean result = (a != b);  // true             │                  │
│     │                                                   │                  │
│     │  char c1 = 'A', c2 = 'B';                        │                  │
│     │  boolean diff = (c1 != c2);  // true             │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  3. GREATER THAN (>)                                                       │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 10, b = 5;                              │                  │
│     │  boolean result = (a > b);   // true             │                  │
│     │                                                   │                  │
│     │  double d1 = 7.5, d2 = 3.2;                      │                  │
│     │  boolean greater = (d1 > d2);  // true           │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  4. LESS THAN (<)                                                          │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 3, b = 7;                               │                  │
│     │  boolean result = (a < b);   // true             │                  │
│     │                                                   │                  │
│     │  char c1 = 'a', c2 = 'z';                        │                  │
│     │  boolean less = (c1 < c2);   // true (Unicode)   │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  5. GREATER THAN OR EQUAL (>=)                                             │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 5, b = 5;                               │                  │
│     │  boolean result = (a >= b);  // true (equal)     │                  │
│     │                                                   │                  │
│     │  int x = 10, y = 5;                              │                  │
│     │  boolean gte = (x >= y);     // true (greater)   │                  │
│     └──────────────────────────────────────────────────┘                  │
│                                                                            │
│  6. LESS THAN OR EQUAL (<=)                                                │
│     ┌──────────────────────────────────────────────────┐                  │
│     │  int a = 5, b = 5;                               │                  │
│     │  boolean result = (a <= b);  // true (equal)     │                  │
│     │                                                   │                  │
│     │  int x = 3, y = 7;                               │                  │
│     │  boolean lte = (x <= y);     // true (less)      │                  │
│     └──────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  COMPARISON RESULT TRUTH TABLE                                             │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Let a = 5, b = 3                                                          │
│  ┌──────────────┬──────────────┬────────────┐                             │
│  │  Expression  │    Result    │  Reasoning │                             │
│  ├──────────────┼──────────────┼────────────┤                             │
│  │  a == b      │    false     │  5 ≠ 3     │                             │
│  │  a != b      │    true      │  5 ≠ 3     │                             │
│  │  a > b       │    true      │  5 > 3     │                             │
│  │  a < b       │    false     │  5 ≮ 3     │                             │
│  │  a >= b      │    true      │  5 ≥ 3     │                             │
│  │  a <= b      │    false     │  5 ≰ 3     │                             │
│  └──────────────┴──────────────┴────────────┘                             │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  PRIMITIVE VS REFERENCE COMPARISON                                         │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  PRIMITIVE TYPES (value comparison):                                       │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  int a = 5;                                         │                  │
│  │  int b = 5;                                         │                  │
│  │  boolean result = (a == b);  // true               │                  │
│  │                                                     │                  │
│  │  ┌─────┐     ┌─────┐                               │                  │
│  │  │  5  │ ==  │  5  │  → true                       │                  │
│  │  └─────┘     └─────┘                               │                  │
│  │    a           b                                    │                  │
│  └─────────────────────────────────────────────────────┘                  │
│                                                                            │
│  REFERENCE TYPES (memory address comparison):                              │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  String s1 = new String("Hello");                   │                  │
│  │  String s2 = new String("Hello");                   │                  │
│  │  boolean result = (s1 == s2);  // false             │                  │
│  │                                                     │                  │
│  │  s1 ──→ ┌───────────┐                              │                  │
│  │         │  "Hello"  │  (Object 1)                  │                  │
│  │         └───────────┘                              │                  │
│  │                                                     │                  │
│  │  s2 ──→ ┌───────────┐                              │                  │
│  │         │  "Hello"  │  (Object 2)                  │                  │
│  │         └───────────┘                              │                  │
│  │                                                     │                  │
│  │  Different memory locations → false                │                  │
│  │                                                     │                  │
│  │  // For content comparison:                        │                  │
│  │  boolean contentEqual = s1.equals(s2);  // true    │                  │
│  └─────────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  OPERATOR PRECEDENCE                                                       │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Precedence (High to Low):                                                 │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  1. Arithmetic: *, /, %       (highest)             │                  │
│  │  2. Arithmetic: +, -                                │                  │
│  │  3. Relational: <, >, <=, >=                        │                  │
│  │  4. Relational: ==, !=                              │                  │
│  │  5. Logical: &&, ||           (lowest)              │                  │
│  └─────────────────────────────────────────────────────┘                  │
│                                                                            │
│  Example:                                                                  │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  int a = 5, b = 3, c = 2;                           │                  │
│  │  boolean result = a + b > c * 2;                    │                  │
│  │                                                     │                  │
│  │  Step 1: c * 2 = 4      (* highest precedence)     │                  │
│  │  Step 2: a + b = 8      (+ next)                   │                  │
│  │  Step 3: 8 > 4 = true   (> lowest)                 │                  │
│  └─────────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  CHAR COMPARISON (Unicode values)                                          │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌─────────────────────────────────────────────────────┐                  │
│  │  char c1 = 'A';  // Unicode: 65                     │                  │
│  │  char c2 = 'B';  // Unicode: 66                     │                  │
│  │  char c3 = 'a';  // Unicode: 97                     │                  │
│  │                                                     │                  │
│  │  boolean r1 = (c1 < c2);   // true  (65 < 66)      │                  │
│  │  boolean r2 = (c1 < c3);   // true  (65 < 97)      │                  │
│  │  boolean r3 = (c2 == 'B'); // true  (same value)   │                  │
│  └─────────────────────────────────────────────────────┘                  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Exam Pass/Fail Checker

```
Scenario: Student ka marks check karke pass/fail decide karna hai!

Student Information:
- Name: Rahul
- Obtained Marks: 65
- Pass Marks: 40
- Total Marks: 100

Relational Operations:

1. GREATER THAN OR EQUAL (>=) - Pass Check
   passStatus = (obtainedMarks >= passMarks)
   passStatus = (65 >= 40) → true
   Result: "Rahul PASSED! 🎉"

2. EQUAL TO (==) - Full Marks Check
   fullMarks = (obtainedMarks == totalMarks)
   fullMarks = (65 == 100) → false
   Result: "Not full marks"

3. GREATER THAN (>) - Above Average Check
   average = 50
   aboveAverage = (obtainedMarks > average)
   aboveAverage = (65 > 50) → true
   Result: "Above average performance!"

4. LESS THAN (<) - Below Pass Check
   belowPass = (obtainedMarks < passMarks)
   belowPass = (65 < 40) → false
   Result: "Not below pass marks"

Real-life decision making using relational operators!
```

### Example 2: Age Verification System

```
Scenario: Movie ticket counter pe age verify karni hai!

Movie: "Action Thriller" (R-rated)
Required Age: 18 years
Person's Age: 16 years

Relational Checks:

1. GREATER THAN OR EQUAL (>=) - Eligible Check
   eligible = (personAge >= requiredAge)
   eligible = (16 >= 18) → false
   Result: "Sorry, you're not eligible! 🚫"

2. LESS THAN (<) - Minor Check
   isMinor = (personAge < 18)
   isMinor = (16 < 18) → true
   Result: "Person is a minor"

3. EQUAL TO (==) - Exactly 18 Check
   exactly18 = (personAge == 18)
   exactly18 = (16 == 18) → false
   Result: "Not exactly 18"

4. NOT EQUAL TO (!=) - Different Age Check
   different = (personAge != requiredAge)
   different = (16 != 18) → true
   Result: "Age doesn't match requirement"

Decision: "Please come back when you're 18!"

Relational operators ki real-life application!
```

---

## Syntax Explanation

```java
public class RelationalDemo {
    public static void main(String[] args) {
        // Sample values
        int a = 10, b = 5, c = 10;
        
        // 1. EQUAL TO (==)
        boolean isEqual = (a == c);       // true (10 == 10)
        System.out.println("a == c: " + isEqual);
        
        boolean notEqual = (a == b);      // false (10 == 5)
        System.out.println("a == b: " + notEqual);
        
        // 2. NOT EQUAL TO (!=)
        boolean isDifferent = (a != b);   // true (10 != 5)
        System.out.println("a != b: " + isDifferent);
        
        // 3. GREATER THAN (>)
        boolean isGreater = (a > b);      // true (10 > 5)
        System.out.println("a > b: " + isGreater);
        
        // 4. LESS THAN (<)
        boolean isLess = (b < a);         // true (5 < 10)
        System.out.println("b < a: " + isLess);
        
        // 5. GREATER THAN OR EQUAL (>=)
        boolean isGTE1 = (a >= c);        // true (10 >= 10, equal)
        boolean isGTE2 = (a >= b);        // true (10 >= 5, greater)
        System.out.println("a >= c: " + isGTE1);
        
        // 6. LESS THAN OR EQUAL (<=)
        boolean isLTE1 = (c <= a);        // true (10 <= 10, equal)
        boolean isLTE2 = (b <= a);        // true (5 <= 10, less)
        System.out.println("b <= a: " + isLTE2);
        
        // 7. CHAR COMPARISON (Unicode values)
        char ch1 = 'A', ch2 = 'B';
        boolean charCompare = (ch1 < ch2);  // true ('A' < 'B')
        System.out.println("'A' < 'B': " + charCompare);
        
        // 8. STRING REFERENCE COMPARISON
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        
        boolean refEqual1 = (s1 == s2);    // true (string pool)
        boolean refEqual2 = (s1 == s3);    // false (different objects)
        boolean contentEqual = s1.equals(s3);  // true (same content)
        
        System.out.println("s1 == s2: " + refEqual1);
        System.out.println("s1 == s3: " + refEqual2);
        System.out.println("s1.equals(s3): " + contentEqual);
        
        // 9. COMPLEX EXPRESSION
        int x = 5, y = 3, z = 2;
        boolean result = (x + y > z * 2);  // (8 > 4) = true
        System.out.println("x + y > z * 2: " + result);
        
        // 10. FLOATING-POINT COMPARISON
        double d1 = 3.5, d2 = 2.8;
        boolean floatCompare = (d1 > d2);  // true
        System.out.println("3.5 > 2.8: " + floatCompare);
    }
}
```

**Explanation:**
- Line 5-9: Equal to (==) operator checks value equality
- Line 11-13: Not equal to (!=) checks if values are different
- Line 15-17: Greater than (>) checks if left operand is larger
- Line 19-21: Less than (<) checks if left operand is smaller
- Line 23-26: Greater than or equal (>=) checks greater OR equal
- Line 28-31: Less than or equal (<=) checks less OR equal
- Line 33-36: Character comparison uses Unicode values
- Line 38-47: String reference vs content comparison demonstration
- Line 49-52: Complex expression with arithmetic and relational operators
- Line 54-57: Floating-point number comparison

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    RELATIONAL COMPARISON MEMORY                         │
└─────────────────────────────────────────────────────────────────────────┘

PRIMITIVE COMPARISON: int a = 5, b = 3; boolean result = (a > b);

STEP 1 - Variables in Stack:
┌─────────────────┐
│   STACK FRAME   │
├─────────────────┤
│ a: 5            │
│ b: 3            │
│ result: ?       │
└─────────────────┘

STEP 2 - Comparison Operation:
┌─────────────────┐
│ OPERAND STACK   │
├─────────────────┤
│ Load a → 5      │
│ Load b → 3      │
│ Compare: 5 > 3  │
│ Result: true(1) │
└─────────────────┘

STEP 3 - Store Result:
┌─────────────────┐
│   STACK FRAME   │
├─────────────────┤
│ a: 5            │
│ b: 3            │
│ result: true    │ ← boolean stored
└─────────────────┘

─────────────────────────────────────────────────────────────────────────

REFERENCE COMPARISON: String s1 = "Hello"; String s2 = new String("Hello");
                      boolean refEqual = (s1 == s2);

HEAP MEMORY:
┌──────────────────────────────────────┐
│  String Pool:                        │
│  ┌────────────────┐                  │
│  │ "Hello" @1001  │ ← s1 points here │
│  └────────────────┘                  │
│                                      │
│  Regular Heap:                       │
│  ┌────────────────┐                  │
│  │ "Hello" @2001  │ ← s2 points here │
│  └────────────────┘                  │
└──────────────────────────────────────┘

STACK MEMORY:
┌─────────────────┐
│   STACK FRAME   │
├─────────────────┤
│ s1: @1001       │ ─┐
│ s2: @2001       │  │ Different addresses
│ refEqual: false │ ←┘ == compares addresses
└─────────────────┘

Comparison: @1001 == @2001 → false
Content: "Hello" equals "Hello" → true (using .equals())
```

---

## Advantages

✅ **Boolean Result**: Clear true/false output for decision making  
✅ **Type Safe**: Compile-time checking prevents type mismatches  
✅ **Simple Syntax**: Easy to read and understand  
✅ **Works with All Primitives**: Supports byte, short, int, long, float, double, char  
✅ **Essential for Control Flow**: Foundation for if, while, for statements  
✅ **Consistent Behavior**: Predictable results across all types  
✅ **Efficient**: Direct bytecode instructions, very fast execution  

---

## Limitations

❌ **Cannot Chain**: Cannot write a < b < c like mathematics (must use &&)  
❌ **Reference Equality Confusion**: == checks reference, not content for objects  
❌ **No String Content Comparison**: Must use .equals() for String content  
❌ **No Operator Overloading**: Cannot customize behavior for user-defined types  
❌ **Floating-point Precision**: May give unexpected results due to precision issues  
❌ **NaN Behavior**: NaN compared to anything (including itself) gives false  
❌ **Type Requirement**: Both operands must be comparable types  

---

## Edge Cases

🔸 **String comparison pitfall:**
```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

boolean r1 = (s1 == s2);    // true (string pool)
boolean r2 = (s1 == s3);    // false (different objects)
boolean r3 = s1.equals(s3); // true (content comparison)

// RULE: Use == for reference, .equals() for content
```

🔸 **Cannot chain comparisons:**
```java
int a = 5, b = 10, c = 15;

// ❌ INVALID: Cannot chain like mathematics
boolean wrong = (a < b < c);  // Compilation error!

// ✅ CORRECT: Use logical operators
boolean correct = (a < b) && (b < c);  // true
```

🔸 **Floating-point precision issues:**
```java
double d1 = 0.1 + 0.2;      // 0.30000000000000004
double d2 = 0.3;            // 0.3

boolean equal = (d1 == d2); // false (precision issue!)

// SOLUTION: Use threshold comparison
double epsilon = 0.0001;
boolean approxEqual = Math.abs(d1 - d2) < epsilon;  // true
```

🔸 **NaN special behavior:**
```java
double nan = Double.NaN;

boolean r1 = (nan == nan);   // false (NaN != NaN)
boolean r2 = (nan != nan);   // true (only this is true)
boolean r3 = (nan < 5);      // false
boolean r4 = (nan > 5);      // false
boolean r5 = (nan == 5);     // false

// CHECK FOR NaN:
boolean isNaN = Double.isNaN(nan);  // true
```

🔸 **Character comparison (Unicode):**
```java
char c1 = 'A';  // Unicode 65
char c2 = 'a';  // Unicode 97
char c3 = '0';  // Unicode 48
char c4 = '9';  // Unicode 57

boolean r1 = (c1 < c2);   // true (65 < 97)
boolean r2 = ('A' < 'Z'); // true
boolean r3 = ('0' < '9'); // true
boolean r4 = ('9' < 'A'); // true (57 < 65)
```

🔸 **Type promotion in comparison:**
```java
int i = 10;
long l = 10L;
float f = 10.0f;
double d = 10.0;

boolean r1 = (i == l);  // true (int promoted to long)
boolean r2 = (i == f);  // true (int promoted to float)
boolean r3 = (l == d);  // true (long promoted to double)

// Mixed comparison with different values
int x = 5;
double y = 5.0;
boolean r4 = (x == y);  // true (x promoted to double)
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Using = instead of ==
```java
❌ int x = 5;
   if (x = 10) {  // Assignment, not comparison!
       // Compilation error (cannot convert int to boolean)
   }
   
✅ if (x == 10) {  // Comparison
       // This is correct
   }
```

🚫 **Mistake 2**: Using == for String content comparison
```java
❌ String s1 = new String("Hello");
   String s2 = new String("Hello");
   if (s1 == s2) {  // false (different objects)
       System.out.println("Equal");  // Won't print!
   }
   
✅ if (s1.equals(s2)) {  // true (same content)
       System.out.println("Equal");  // Will print
   }
```

🚫 **Mistake 3**: Chaining comparisons
```java
❌ int age = 25;
   if (18 < age < 60) {  // Compilation error!
       // Cannot chain like mathematics
   }
   
✅ if (age > 18 && age < 60) {  // Correct
       // Use logical AND operator
   }
```

🚫 **Mistake 4**: Floating-point exact comparison
```java
❌ double d = 0.1 + 0.2;
   if (d == 0.3) {  // false (precision issue)
       System.out.println("Equal");  // Won't print!
   }
   
✅ double epsilon = 0.0001;
   if (Math.abs(d - 0.3) < epsilon) {  // true
       System.out.println("Approximately equal");
   }
```

🚫 **Mistake 5**: Comparing incompatible types
```java
❌ int number = 5;
   String text = "5";
   if (number == text) {  // Compilation error!
       // Cannot compare int with String
   }
   
✅ if (number == Integer.parseInt(text)) {  // Convert first
       // Correct comparison
   }
```

---

## Important Interview Points

💡 **Q: What's the difference between == and .equals()?**  
**A**: == compares references (memory addresses), .equals() compares content.
```java
// PRIMITIVE TYPES: == compares values
int a = 5, b = 5;
boolean result = (a == b);  // true (value comparison)

// REFERENCE TYPES: == compares references
String s1 = new String("Hello");
String s2 = new String("Hello");
boolean ref = (s1 == s2);      // false (different objects)
boolean content = s1.equals(s2);  // true (same content)

// STRING POOL EXCEPTION:
String s3 = "Hello";
String s4 = "Hello";
boolean pool = (s3 == s4);  // true (same object in pool)
```

💡 **Q: Can we chain relational operators in Java?**  
**A**: No, cannot chain like mathematics. Must use logical operators.
```java
// ❌ INVALID: Mathematical chaining
int a = 5, b = 10, c = 15;
boolean wrong = (a < b < c);  // Compilation error!

// ✅ CORRECT: Use logical AND
boolean correct = (a < b) && (b < c);  // true

// WHY IT FAILS:
// (a < b) evaluates to boolean true
// true < c tries to compare boolean with int (error!)
```

💡 **Q: What is the precedence of relational operators?**  
**A**: Lower than arithmetic, higher than logical operators.
```java
// PRECEDENCE ORDER:
// 1. Arithmetic: *, /, %
// 2. Arithmetic: +, -
// 3. Relational: <, >, <=, >=
// 4. Relational: ==, !=
// 5. Logical: &&, ||

int a = 5, b = 3, c = 2;
boolean result = a + b > c * 2;  // true

// EVALUATION ORDER:
// Step 1: c * 2 = 4     (* highest)
// Step 2: a + b = 8     (+ next)
// Step 3: 8 > 4 = true  (> lowest)
```

💡 **Q: How does NaN behave in comparisons?**  
**A**: NaN compared to anything (including itself) is false, except !=.
```java
double nan = Double.NaN;

// ALL COMPARISONS WITH NaN ARE FALSE:
boolean r1 = (nan == nan);   // false
boolean r2 = (nan < 10);     // false
boolean r3 = (nan > 10);     // false
boolean r4 = (nan <= 10);    // false
boolean r5 = (nan >= 10);    // false

// ONLY != RETURNS TRUE:
boolean r6 = (nan != nan);   // true

// PROPER NaN CHECK:
boolean isNaN = Double.isNaN(nan);  // true
```

💡 **Q: How are characters compared in Java?**  
**A**: Characters compared using their Unicode values.
```java
// UNICODE VALUES:
// 'A' = 65, 'Z' = 90
// 'a' = 97, 'z' = 122
// '0' = 48, '9' = 57

char c1 = 'A', c2 = 'a';
boolean r1 = (c1 < c2);   // true (65 < 97)

boolean r2 = ('A' < 'Z'); // true (65 < 90)
boolean r3 = ('a' < 'z'); // true (97 < 122)
boolean r4 = ('0' < '9'); // true (48 < 57)

// UPPERCASE < LOWERCASE:
boolean r5 = ('Z' < 'a'); // true (90 < 97)
```

💡 **Q: What happens with type promotion in relational operators?**  
**A**: Smaller type promoted to larger before comparison.
```java
// TYPE PROMOTION HIERARCHY:
// byte → short → int → long → float → double

int i = 10;
double d = 10.0;
boolean r1 = (i == d);  // true (int promoted to double)

byte b = 5;
long l = 5L;
boolean r2 = (b == l);  // true (byte promoted to long)

// MIXED TYPES:
int x = 5;
float f = 5.5f;
boolean r3 = (x < f);   // true (int promoted to float, 5.0 < 5.5)
```

💡 **Q: Why is String pool comparison different?**  
**A**: String literals share same object in string pool for efficiency.
```java
// STRING POOL:
String s1 = "Hello";  // Created in pool
String s2 = "Hello";  // Reuses same object from pool
boolean r1 = (s1 == s2);  // true (same object)

// NEW KEYWORD:
String s3 = new String("Hello");  // New object in heap
boolean r2 = (s1 == s3);  // false (different objects)
boolean r3 = s1.equals(s3);  // true (same content)

// INTERN METHOD:
String s4 = s3.intern();  // Returns pool reference
boolean r4 = (s1 == s4);  // true (both point to pool)
```

💡 **Q: What is the return type of relational operators?**  
**A**: Always boolean (true or false), never any other type.
```java
int a = 5, b = 3;

boolean result1 = (a > b);    // true
boolean result2 = (a < b);    // false
boolean result3 = (a == b);   // false
boolean result4 = (a != b);   // true

// CANNOT ASSIGN TO OTHER TYPES:
int x = (a > b);  // ❌ Compilation error!
// boolean cannot be converted to int

// MUST USE BOOLEAN:
boolean y = (a > b);  // ✅ Correct
```

---

## Short Recap

Relational operators Java mein comparison karte hain aur boolean (true/false) return karte hain. 6 operators hain: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal). Primitive types mein value compare hoti hai, reference types mein memory address. String content ke liye .equals() use karo, == reference check karta hai. Chaining invalid hai (a < b < c), logical operators (&&) use karo. NaN special hai: NaN == NaN → false, NaN != NaN → true. Char comparison Unicode values pe based hai. Type promotion automatically hota hai mixed comparisons mein. Precedence: arithmetic > relational > logical. Associativity left-to-right. Interview ke liye yaad rakho: == vs .equals(), reference vs value comparison, string pool concept, NaN behavior, char Unicode comparison, type promotion, chaining prohibition, aur precedence order!

---

**Previous**: [← 45 - ARITHMETIC OPERATORS](./45-arithmetic-operators.md)  
**Next**: [47 - LOGICAL OPERATORS →](./47-logical-operators.md)