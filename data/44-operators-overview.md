# 44) OPERATORS OVERVIEW IN JAVA

## Concept Introduction

Operators Java mein special symbols hain jo values aur variables pe operations perform karte hain — jaise +, -, *, /, ==, &&. Operators programming ke building blocks hain jo calculations, comparisons, aur logical operations enable karte hain. Java mein 8 main categories hain: Arithmetic (+, -, *, /), Relational (==, !=, <, >), Logical (&&, ||, !), Bitwise (&, |, ^), Assignment (=, +=, -=), Unary (++, --, !), Ternary (?:), aur Special (instanceof). Har operator ka precedence aur associativity hai jo evaluation order determine karta hai. Operators expressions banate hain jo values produce karte hain. Operators samajhna fundamental hai programming logic aur calculations ke liye!

---

## Why This Concept Exists

**Problem:**
- Values pe operations kaise perform karein?
- Mathematical calculations kaise karein?
- Conditions kaise check karein?
- Complex expressions kaise evaluate karein?
- Code kaise concise banayein?

**Solution (Operators):**
- Arithmetic operations for calculations
- Relational operations for comparisons
- Logical operations for conditions
- Assignment operations for value storage
- Unary operations for increment/decrement
- Precedence rules for evaluation order

---

## Definitions

### 🔹 Very Simple Definition
Operators special symbols hain jo values pe operations perform karte hain — +, -, *, /, ==, &&, etc.

### 🔹 College Exam Definition
Operators are special symbols that perform operations on operands (variables, values, expressions). Java has 8 operator categories: (1) Arithmetic (+, -, *, /, %) for mathematical operations, (2) Relational (==, !=, <, >, <=, >=) for comparisons, (3) Logical (&&, ||, !) for boolean operations, (4) Bitwise (&, |, ^, ~, <<, >>, >>>) for bit manipulation, (5) Assignment (=, +=, -=, *=, /=, %=) for value assignment, (6) Unary (++, --, +, -, !) for single operand operations, (7) Ternary (condition ? value1 : value2) for conditional expressions, (8) Special (instanceof, new, .) for object operations. Operators have precedence (evaluation order) and associativity (left-to-right or right-to-left).

### 🔹 Viva Definition
Operators are symbols performing operations on operands with specific precedence and associativity rules. Categories: (1) Arithmetic Operators - Binary: +, -, *, /, % (modulus), Precedence: *, /, % higher than +, -, Associativity: left-to-right, Type promotion: applies during operations, (2) Relational Operators - Comparison: ==, !=, <, >, <=, >=, Return type: boolean, Cannot chain: a < b < c (invalid), Precedence: lower than arithmetic, (3) Logical Operators - Boolean: && (AND), || (OR), ! (NOT), Short-circuit: && and || evaluate left-to-right, stop when result determined, Precedence: ! highest, then &&, then ||, (4) Bitwise Operators - Bit manipulation: & (AND), | (OR), ^ (XOR), ~ (NOT), Shift: << (left), >> (signed right), >>> (unsigned right), Work on integer types only, (5) Assignment Operators - Simple: = (assign), Compound: +=, -=, *=, /=, %= (operation + assignment), Right-to-left associativity, Include implicit casting, (6) Unary Operators - Increment/decrement: ++, --, Prefix: ++a (increment then use), Postfix: a++ (use then increment), Sign: +, - (unary plus/minus), Logical NOT: !, (7) Ternary Operator - Conditional: condition ? value1 : value2, Only ternary operator in Java, Right-to-left associativity, (8) Special Operators - instanceof: type checking, new: object creation, . (dot): member access. Precedence order (high to low): Unary, Arithmetic (*, /, %), Arithmetic (+, -), Relational, Logical, Ternary, Assignment.

### 🔹 Interview Definition
Operators perform operations on operands with defined precedence and associativity. Key categories: (1) Arithmetic: +, -, *, /, % with type promotion rules, (2) Relational: ==, !=, <, >, <=, >= returning boolean, (3) Logical: &&, ||, ! with short-circuit evaluation, (4) Bitwise: &, |, ^, ~, <<, >>, >>> for bit manipulation, (5) Assignment: =, +=, -=, etc. with right-to-left associativity, (6) Unary: ++, --, +, -, ! with prefix/postfix behavior, (7) Ternary: ?: for conditional expressions, (8) Special: instanceof, new, dot operator. Important concepts: operator precedence determines evaluation order, associativity handles same-precedence operators, short-circuit evaluation in logical operators, type promotion in arithmetic, implicit casting in compound assignments.

### 🔹 Technical Definition
Operators implemented as JVM bytecode instructions with compile-time precedence parsing and runtime execution. Arithmetic: iadd, isub, imul, idiv, irem for integers; fadd, fsub, fmul, fdiv, frem for floats. Comparison: if_icmpeq, if_icmpne, if_icmplt, if_icmpgt for integers; fcmpl, fcmpg for floats. Logical: implemented via conditional jumps and boolean operations. Bitwise: iand, ior, ixor, ishl, ishr, iushr instructions. Assignment: store instructions (istore, fstore, astore). Unary: iinc for increment, ineg for negation. Precedence: handled by compiler's expression parser using operator precedence grammar. Associativity: determines parse tree structure for same-precedence operators.

### 🔹 One-line Crisp Definition
Operators = Symbols performing operations + Precedence rules + Type-specific behavior + Expression building blocks

---

## DIAGRAM: Operator Categories

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA OPERATORS OVERVIEW                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. ARITHMETIC OPERATORS                                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Binary:                                                             │  │
│  │  ├─ + (Addition)        : 5 + 3 = 8                                 │  │
│  │  ├─ - (Subtraction)     : 5 - 3 = 2                                 │  │
│  │  ├─ * (Multiplication)  : 5 * 3 = 15                                │  │
│  │  ├─ / (Division)        : 5 / 3 = 1 (integer division)              │  │
│  │  └─ % (Modulus)         : 5 % 3 = 2 (remainder)                     │  │
│  │                                                                      │  │
│  │  Unary:                                                              │  │
│  │  ├─ + (Unary plus)      : +5 = 5                                    │  │
│  │  └─ - (Unary minus)     : -5 = -5                                   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. RELATIONAL OPERATORS                                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  ├─ == (Equal to)       : 5 == 5 → true                             │  │
│  │  ├─ != (Not equal to)   : 5 != 3 → true                             │  │
│  │  ├─ <  (Less than)      : 3 < 5 → true                              │  │
│  │  ├─ >  (Greater than)   : 5 > 3 → true                              │  │
│  │  ├─ <= (Less or equal)  : 3 <= 5 → true                             │  │
│  │  └─ >= (Greater/equal)  : 5 >= 5 → true                             │  │
│  │                                                                      │  │
│  │  Result: Always boolean (true/false)                                 │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. LOGICAL OPERATORS                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  ├─ && (Logical AND)    : true && false → false                     │  │
│  │  ├─ || (Logical OR)     : true || false → true                      │  │
│  │  └─ !  (Logical NOT)    : !true → false                             │  │
│  │                                                                      │  │
│  │  Short-circuit: && and || stop when result is determined            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  4. BITWISE OPERATORS                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  ├─ &  (Bitwise AND)    : 5 & 3 = 1                                 │  │
│  │  ├─ |  (Bitwise OR)     : 5 | 3 = 7                                 │  │
│  │  ├─ ^  (Bitwise XOR)    : 5 ^ 3 = 6                                 │  │
│  │  ├─ ~  (Bitwise NOT)    : ~5 = -6                                   │  │
│  │  ├─ << (Left shift)     : 5 << 1 = 10                               │  │
│  │  ├─ >> (Right shift)    : 5 >> 1 = 2                                │  │
│  │  └─ >>> (Unsigned right): 5 >>> 1 = 2                               │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  5. ASSIGNMENT OPERATORS                                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Simple:                                                             │  │
│  │  └─ =  (Assignment)     : x = 5                                     │  │
│  │                                                                      │  │
│  │  Compound:                                                           │  │
│  │  ├─ += (Add assign)     : x += 5 → x = x + 5                        │  │
│  │  ├─ -= (Sub assign)     : x -= 5 → x = x - 5                        │  │
│  │  ├─ *= (Mul assign)     : x *= 5 → x = x * 5                        │  │
│  │  ├─ /= (Div assign)     : x /= 5 → x = x / 5                        │  │
│  │  └─ %= (Mod assign)     : x %= 5 → x = x % 5                        │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  6. UNARY OPERATORS                                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  ├─ ++ (Increment)      : ++x (pre), x++ (post)                     │  │
│  │  ├─ -- (Decrement)      : --x (pre), x-- (post)                     │  │
│  │  ├─ +  (Unary plus)     : +x                                        │  │
│  │  ├─ -  (Unary minus)    : -x                                        │  │
│  │  └─ !  (Logical NOT)    : !flag                                     │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  7. TERNARY OPERATOR                                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  └─ ?: (Conditional)    : condition ? value1 : value2               │  │
│  │     Example: x > 0 ? "positive" : "negative"                        │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  8. SPECIAL OPERATORS                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  ├─ instanceof (Type check) : obj instanceof String                  │  │
│  │  ├─ new (Object creation)   : new ArrayList()                       │  │
│  │  └─ .   (Member access)     : obj.method(), obj.field               │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Operator Precedence

```
┌─────────────────────────────────────────────────────┐
│         OPERATOR PRECEDENCE (High to Low)           │
└─────────────────────────────────────────────────────┘

1. HIGHEST PRECEDENCE:
┌──────────────────────────────────────┐
│  Postfix: x++, x--                  │
│  Unary:   ++x, --x, +x, -x, !x, ~x  │
│  New:     new, (type)                │
└──────────────────────────────────────┘

2. ARITHMETIC (High):
┌──────────────────────────────────────┐
│  Multiplicative: *, /, %             │
│  Additive:       +, -                │
└──────────────────────────────────────┘

3. SHIFT:
┌──────────────────────────────────────┐
│  Shift: <<, >>, >>>                  │
└──────────────────────────────────────┘

4. RELATIONAL:
┌──────────────────────────────────────┐
│  Comparison: <, >, <=, >=, instanceof│
│  Equality:   ==, !=                  │
└──────────────────────────────────────┘

5. BITWISE:
┌──────────────────────────────────────┐
│  Bitwise AND: &                      │
│  Bitwise XOR: ^                      │
│  Bitwise OR:  |                      │
└──────────────────────────────────────┘

6. LOGICAL:
┌──────────────────────────────────────┐
│  Logical AND: &&                     │
│  Logical OR:  ||                     │
└──────────────────────────────────────┘

7. TERNARY:
┌──────────────────────────────────────┐
│  Conditional: ?:                     │
└──────────────────────────────────────┘

8. LOWEST PRECEDENCE:
┌──────────────────────────────────────┐
│  Assignment: =, +=, -=, *=, /=, %=   │
└──────────────────────────────────────┘

EXAMPLE:
int result = 2 + 3 * 4;  // 14 (not 20)
// Evaluation: 2 + (3 * 4) = 2 + 12 = 14
```

---

## Real-life Hinglish Example

### Example 1: Calculator Operations

**Operators = Calculator Functions:**
```
Basic Calculator (Arithmetic):
├─ + button (Addition)
├─ - button (Subtraction)
├─ × button (Multiplication)
├─ ÷ button (Division)
└─ % button (Remainder)

Java equivalent:
int a = 10, b = 3;
int sum = a + b;      // 13
int diff = a - b;     // 7
int product = a * b;  // 30
int quotient = a / b; // 3
int remainder = a % b; // 1

Advanced Calculator (Comparison):
├─ = button (Equal check)
├─ ≠ button (Not equal)
├─ < button (Less than)
└─ > button (Greater than)

Java equivalent:
boolean equal = (a == b);     // false
boolean notEqual = (a != b);  // true
boolean less = (a < b);       // false
boolean greater = (a > b);    // true
```

### Example 2: Decision Making

**Operators = Decision Logic:**
```
Traffic Light Logic (Logical):
├─ Red AND Pedestrian → Stop
├─ Green OR Yellow → Proceed
└─ NOT Red → Can go

Java equivalent:
boolean red = true;
boolean pedestrian = true;
boolean green = false;

boolean stop = red && pedestrian;     // true
boolean proceed = green || !red;      // false
boolean canGo = !red;                 // false

Assignment Operations (Memory):
├─ Store value (=)
├─ Add to existing (+=)
├─ Subtract from existing (-=)
└─ Update counter (++)

Java equivalent:
int score = 100;        // Store
score += 50;            // Add (score = 150)
score -= 20;            // Subtract (score = 130)
score++;                // Increment (score = 131)
```

---

## Syntax Explanation

### Basic Operator Usage:

```java
public class OperatorDemo {
    public static void main(String[] args) {
        // ============================================
        // ARITHMETIC OPERATORS
        // ============================================
        
        int a = 10, b = 3;
        
        System.out.println("Arithmetic Operations:");
        System.out.println("a + b = " + (a + b));  // 13
        System.out.println("a - b = " + (a - b));  // 7
        System.out.println("a * b = " + (a * b));  // 30
        System.out.println("a / b = " + (a / b));  // 3 (integer division)
        System.out.println("a % b = " + (a % b));  // 1 (remainder)
        
        // ============================================
        // RELATIONAL OPERATORS
        // ============================================
        
        System.out.println("\nRelational Operations:");
        System.out.println("a == b: " + (a == b));  // false
        System.out.println("a != b: " + (a != b));  // true
        System.out.println("a < b: " + (a < b));    // false
        System.out.println("a > b: " + (a > b));    // true
        System.out.println("a <= b: " + (a <= b));  // false
        System.out.println("a >= b: " + (a >= b));  // true
        
        // ============================================
        // LOGICAL OPERATORS
        // ============================================
        
        boolean x = true, y = false;
        
        System.out.println("\nLogical Operations:");
        System.out.println("x && y: " + (x && y));  // false
        System.out.println("x || y: " + (x || y));  // true
        System.out.println("!x: " + (!x));          // false
        System.out.println("!y: " + (!y));          // true
        
        // ============================================
        // ASSIGNMENT OPERATORS
        // ============================================
        
        int num = 10;
        System.out.println("\nAssignment Operations:");
        System.out.println("Initial: " + num);      // 10
        
        num += 5;  // num = num + 5
        System.out.println("After +=5: " + num);    // 15
        
        num -= 3;  // num = num - 3
        System.out.println("After -=3: " + num);    // 12
        
        num *= 2;  // num = num * 2
        System.out.println("After *=2: " + num);    // 24
        
        num /= 4;  // num = num / 4
        System.out.println("After /=4: " + num);    // 6
        
        num %= 4;  // num = num % 4
        System.out.println("After %=4: " + num);    // 2
    }
}
```

### Unary and Ternary Operators:

```java
public class UnaryTernaryDemo {
    public static void main(String[] args) {
        // ============================================
        // UNARY OPERATORS
        // ============================================
        
        int x = 5;
        
        System.out.println("Unary Operations:");
        System.out.println("Original x: " + x);     // 5
        System.out.println("+x: " + (+x));          // 5 (unary plus)
        System.out.println("-x: " + (-x));          // -5 (unary minus)
        
        // Increment/Decrement
        System.out.println("++x: " + (++x));        // 6 (pre-increment)
        System.out.println("x after ++x: " + x);    // 6
        
        System.out.println("x++: " + (x++));        // 6 (post-increment)
        System.out.println("x after x++: " + x);    // 7
        
        System.out.println("--x: " + (--x));        // 6 (pre-decrement)
        System.out.println("x after --x: " + x);    // 6
        
        System.out.println("x--: " + (x--));        // 6 (post-decrement)
        System.out.println("x after x--: " + x);    // 5
        
        // Logical NOT
        boolean flag = true;
        System.out.println("!flag: " + (!flag));    // false
        
        // ============================================
        // TERNARY OPERATOR
        // ============================================
        
        int age = 18;
        String status = (age >= 18) ? "Adult" : "Minor";
        System.out.println("Status: " + status);    // Adult
        
        // Nested ternary
        int score = 85;
        String grade = (score >= 90) ? "A" : 
                      (score >= 80) ? "B" : 
                      (score >= 70) ? "C" : "F";
        System.out.println("Grade: " + grade);      // B
        
        // Ternary with different types
        int num1 = 10, num2 = 20;
        int max = (num1 > num2) ? num1 : num2;
        System.out.println("Max: " + max);          // 20
    }
}
```

### Operator Precedence Example:

```java
public class PrecedenceDemo {
    public static void main(String[] args) {
        // ============================================
        // PRECEDENCE EXAMPLES
        // ============================================
        
        // Arithmetic precedence
        int result1 = 2 + 3 * 4;  // 14 (not 20)
        System.out.println("2 + 3 * 4 = " + result1);  // 14
        
        // With parentheses
        int result2 = (2 + 3) * 4;  // 20
        System.out.println("(2 + 3) * 4 = " + result2);  // 20
        
        // Mixed operators
        boolean result3 = 5 > 3 && 10 < 20;  // true
        System.out.println("5 > 3 && 10 < 20 = " + result3);  // true
        
        // Complex expression
        int a = 10, b = 5, c = 2;
        int result4 = a + b * c - a / b;  // 10 + 10 - 2 = 18
        System.out.println("a + b * c - a / b = " + result4);  // 18
        
        // Assignment precedence
        int x, y, z;
        x = y = z = 5;  // Right-to-left associativity
        System.out.println("x = y = z = 5: x=" + x + ", y=" + y + ", z=" + z);
        
        // Ternary precedence
        int max = a > b ? a > c ? a : c : b > c ? b : c;
        System.out.println("Max of a, b, c: " + max);  // 10
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         OPERATOR EXECUTION IN MEMORY                │
└─────────────────────────────────────────────────────┘

CODE:
int a = 10;
int b = 5;
int result = a + b * 2;

EVALUATION ORDER (Precedence):
1. b * 2  (multiplication first)
2. a + (result of step 1)  (addition second)

STACK OPERATIONS:
┌──────────────────────────────────────┐
│  1. Load a (10)                      │
│  2. Load b (5)                       │
│  3. Load 2                           │
│  4. Multiply b * 2 = 10              │
│  5. Add a + 10 = 20                  │
│  6. Store result (20)                │
└──────────────────────────────────────┘

BYTECODE:
iload_1    // Load a
iload_2    // Load b
iconst_2   // Load constant 2
imul       // Multiply b * 2
iadd       // Add a + (b * 2)
istore_3   // Store result
```

---

## Advantages

✅ **Expression Building**: Create complex calculations and logic  
✅ **Code Conciseness**: Compact syntax for common operations  
✅ **Type Safety**: Compile-time checking of operator compatibility  
✅ **Performance**: Direct hardware operations for primitives  
✅ **Precedence Rules**: Predictable evaluation order  
✅ **Flexibility**: Mix different operator types in expressions  

---

## Limitations

❌ **Precedence Confusion**: Complex expressions hard to read  
❌ **Type Restrictions**: Some operators work only with specific types  
❌ **Side Effects**: Increment/decrement can cause unexpected behavior  
❌ **Boolean Limitation**: Cannot use arithmetic operators on boolean  

---

## Edge Cases

🔸 **Integer division:**
```java
int result = 5 / 2;  // 1 (not 2.5)
double result = 5.0 / 2;  // 2.5
```

🔸 **Modulus with negative:**
```java
int result = -5 % 3;  // -2 (not 1)
int result = 5 % -3;  // 2 (not -1)
```

🔸 **Short-circuit evaluation:**
```java
boolean result = false && (1/0 == 0);  // false (no exception)
boolean result = true || (1/0 == 0);   // true (no exception)
```

🔸 **Increment precedence:**
```java
int x = 5;
int y = ++x + x++;  // 6 + 6 = 12, x becomes 7
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Confusing = and ==
```java
❌ if (x = 5) { }  // Assignment, not comparison
✅ if (x == 5) { }  // Comparison
```

🚫 **Mistake 2**: Integer division surprise
```java
❌ double result = 5 / 2;  // 1.0 (not 2.5)
✅ double result = 5.0 / 2;  // 2.5
```

🚫 **Mistake 3**: Precedence confusion
```java
❌ int result = 2 + 3 * 4;  // Thinking it's 20
✅ int result = (2 + 3) * 4;  // Use parentheses for clarity
```

🚫 **Mistake 4**: Increment/decrement confusion
```java
❌ int x = 5;
   int y = x++ + ++x;  // Confusing behavior
✅ int x = 5;
   x++;
   x++;
   int y = x + x;  // Clear and predictable
```

---

## Important Interview Points

💡 **Q: What are the main operator categories in Java?**  
**A**: 8 categories:
1. **Arithmetic**: +, -, *, /, %
2. **Relational**: ==, !=, <, >, <=, >=
3. **Logical**: &&, ||, !
4. **Bitwise**: &, |, ^, ~, <<, >>, >>>
5. **Assignment**: =, +=, -=, *=, /=, %=
6. **Unary**: ++, --, +, -, !
7. **Ternary**: ?:
8. **Special**: instanceof, new, .

💡 **Q: What is operator precedence?**  
**A**: Order in which operators are evaluated in expressions. Higher precedence operators evaluated first. Example:
```java
int result = 2 + 3 * 4;  // 14 (not 20)
// * has higher precedence than +
```

💡 **Q: What is short-circuit evaluation?**  
**A**: && and || operators stop evaluation when result is determined:
- **&&**: If left is false, right not evaluated
- **||**: If left is true, right not evaluated
Example:
```java
boolean result = false && (1/0 == 0);  // No exception, right side not evaluated
```

💡 **Q: What is the difference between ++ and -- prefix and postfix?**  
**A**: 
- **Prefix (++x)**: Increment first, then use value
- **Postfix (x++)**: Use value first, then increment
Example:
```java
int x = 5;
int a = ++x;  // x=6, a=6
int b = x++;  // b=6, x=7
```

💡 **Q: What is the ternary operator?**  
**A**: Conditional operator with syntax: `condition ? value1 : value2`. Returns value1 if condition true, value2 if false. Example:
```java
String result = (age >= 18) ? "Adult" : "Minor";
```

💡 **Q: Can you chain relational operators?**  
**A**: No, cannot chain like mathematics. Example:
```java
// ❌ Invalid: a < b < c
// ✅ Valid: a < b && b < c
```

💡 **Q: What happens with integer division?**  
**A**: Integer division truncates decimal part. Example:
```java
int result = 5 / 2;  // 1 (not 2.5)
double result = 5.0 / 2;  // 2.5 (floating-point division)
```

💡 **Q: What is associativity?**  
**A**: Direction of evaluation for same-precedence operators:
- **Left-to-right**: Most operators (a + b + c)
- **Right-to-left**: Assignment (a = b = c), ternary (?:)

---

## Short Recap

Operators Java mein special symbols hain jo operations perform karte hain. 8 categories: Arithmetic (+,-,*,/,%), Relational (==,!=,<,>), Logical (&&,||,!), Bitwise (&,|,^,~), Assignment (=,+=,-=), Unary (++,--,!), Ternary (?:), Special (instanceof). Precedence order: Unary → Arithmetic → Relational → Logical → Ternary → Assignment. Short-circuit evaluation: && aur || left-to-right evaluate karte hain. Prefix/postfix difference: ++x (increment first), x++ (use first). Integer division truncates decimal. Associativity: left-to-right (most), right-to-left (assignment). Interview ke liye yaad rakho: operator categories, precedence rules, short-circuit evaluation, prefix/postfix behavior, integer division, ternary syntax, aur associativity direction.

---

**Previous**: [← 43 - Type Promotion](./43-type-promotion.md)  
**Next**: [45 - Arithmetic Operators →](./45-arithmetic-operators.md)