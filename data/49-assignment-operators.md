# 49) ASSIGNMENT OPERATORS

## Concept Introduction

Assignment operators Java mein values ko variables mein store karne ke liye use hote hain. Ye operators simple = se lekar compound operators (+=, -=, *=, etc.) tak hote hain jo assignment ke saath-saath calculation bhi kar dete hain.

Socho jaise tumhare paas ek piggy bank hai. Simple assignment matlab seedha paise daal dena. Compound assignment matlab pehle count karo kitne hain, phir aur add karo, aur wapas daal do - ye sab ek hi step mein!

Assignment operators left-to-right nahi, **right-to-left** evaluate hote hain. Matlab pehle right side ki value calculate hoti hai, phir left side ke variable mein store hoti hai.

---

## Why This Concept Exists

**Problem before this concept:**
- Har baar value assign karne ke liye long expressions likhne padte the
- Variable ko update karne ke liye variable ko dubara likhna padta tha: `a = a + 5`
- Code repetitive aur lengthy ho jata tha
- Calculation aur assignment alag-alag steps mein karne padte the

**Solution:**
- Simple = operator se direct assignment ho jata hai
- Compound operators (+=, -=, etc.) se calculation + assignment ek saath hota hai
- Code concise aur readable ban gaya
- Typing effort kam hua aur errors ki possibility bhi kam hui

---

## Definitions

### 🔹 Very Simple Definition
Assignment operators wo operators hain jo values ko variables mein store karte hain, ya phir calculation karke store karte hain.

### 🔹 College Exam Definition
Assignment operators are operators used to assign values to variables. They include simple assignment (=) and compound assignment operators (+=, -=, *=, /=, %=) which perform an operation and assignment in a single step.

### 🔹 Viva Definition
Assignment operators in Java are used to assign values to variables. The simple assignment operator (=) assigns the value on the right side to the variable on the left side. Compound assignment operators combine arithmetic or bitwise operations with assignment, providing a shorthand notation for modifying variable values.

### 🔹 Interview Definition
Assignment operators in Java are binary operators that assign values to variables. The simple assignment operator (=) has right-to-left associativity. Compound assignment operators (+=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=, >>>=) perform an implicit type cast to the target variable's type, making them different from their expanded forms. They are evaluated right-to-left and provide both syntactic convenience and type safety.

### 🔹 Technical Definition
Assignment operators are binary operators with right-to-left associativity that store values in lvalues (memory locations). The simple assignment operator (=) performs direct value assignment. Compound assignment operators perform the operation `var = (type_of_var)((var) op (expression))`, where implicit narrowing conversion occurs automatically. They compile to optimized bytecode instructions like `iadd`, `istore` for primitive types, ensuring type safety through automatic casting while maintaining the target variable's declared type.

### 🔹 One-line Crisp Definition
Operators that assign values to variables, either directly (=) or with combined operations (+=, -=, etc.).

---

## Internal Working

```
SIMPLE ASSIGNMENT (=):
1. Right side ki expression evaluate hoti hai
2. Result ko left side ke variable mein store kiya jata hai
3. Assignment expression ka result assigned value hota hai

Example: int x = 5;
- Pehle 5 evaluate hota hai
- Phir x mein 5 store hota hai
- Expression ka result: 5

COMPOUND ASSIGNMENT (+=, -=, etc.):
1. Left operand (variable) ki value retrieve hoti hai
2. Right operand evaluate hota hai
3. Operation perform hota hai
4. Result ko implicitly target type mein cast kiya jata hai
5. Result ko left variable mein store kiya jata hai

Example: byte b = 10; b += 5;
- Equivalent to: b = (byte)(b + 5)
- Pehle b (10) + 5 = 15
- Phir 15 ko byte mein cast karke b mein store
- Automatic type casting hoti hai!

BYTECODE LEVEL:
int x = 10;
x += 5;

Compiles to:
iload_1      // Load x
bipush 5     // Push 5
iadd         // Add
istore_1     // Store back to x
```

---

## DIAGRAM

```
┌─────────────────────────────────────────────────────────────────┐
│                    ASSIGNMENT OPERATORS                         │
└─────────────────────────────────────────────────────────────────┘

1. SIMPLE ASSIGNMENT (=)
   ┌──────────┐      ┌──────────┐
   │  Value   │  →   │ Variable │
   │   10     │  =   │    x     │
   └──────────┘      └──────────┘
   
   x = 10;  // Direct assignment

2. COMPOUND ASSIGNMENT (+=, -=, *=, /=, %=)
   ┌──────────────────────────────────────────┐
   │  x += 5  is shorthand for  x = x + 5    │
   └──────────────────────────────────────────┘
   
   Step-by-step:
   ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐
   │ x=10│ → │  +5 │ → │ =15 │ → │x=15 │
   └─────┘    └─────┘    └─────┘    └─────┘
   
3. ALL ASSIGNMENT OPERATORS
   ┌────────────────────────────────────────────┐
   │ Operator │ Name              │ Example     │
   ├────────────────────────────────────────────┤
   │    =     │ Assignment        │ x = 10      │
   │   +=     │ Add & Assign      │ x += 5      │
   │   -=     │ Subtract & Assign │ x -= 3      │
   │   *=     │ Multiply & Assign │ x *= 2      │
   │   /=     │ Divide & Assign   │ x /= 4      │
   │   %=     │ Modulus & Assign  │ x %= 3      │
   │   &=     │ AND & Assign      │ x &= 7      │
   │   |=     │ OR & Assign       │ x |= 2      │
   │   ^=     │ XOR & Assign      │ x ^= 3      │
   │  <<=     │ Left Shift Assign │ x <<= 2     │
   │  >>=     │ Right Shift Assign│ x >>= 1     │
   │  >>>=    │ Unsigned Right    │ x >>>= 1    │
   └────────────────────────────────────────────┘

4. RIGHT-TO-LEFT EVALUATION
   int a = b = c = 10;
   
   ┌───────────────────────────────┐
   │   c = 10   (first)            │
   │   b = c    (10 assigned to b) │
   │   a = b    (10 assigned to a) │
   └───────────────────────────────┘
   
5. IMPLICIT TYPE CASTING
   byte b = 10;
   b += 5;  // Works! Automatically casts to byte
   
   ┌─────────────────────────────────────┐
   │  b += 5                             │
   │  ↓                                  │
   │  b = (byte)(b + 5)  ← Auto casting │
   └─────────────────────────────────────┘
   
   But:
   b = b + 5;  // ERROR! Manual cast needed
   b = (byte)(b + 5);  // Correct
```

---

## Real-life Hinglish Example

### Example 1: Piggy Bank (Simple Assignment)

```
Socho tumhare paas ek piggy bank hai:

piggyBank = 100;  // Pehle 100 rupees daale

Matlab pehle piggy bank khali tha, ab 100 rupees hain.
Jaise variable ko value assign karte hain!

piggyBank = 200;  // Purane paise nikal ke naye daale

Ab piggy bank mein sirf 200 rupees hain (100 nahi rahe).
Previous value overwrite ho gayi!
```

### Example 2: Score Counter (Compound Assignment)

```
Game khel rahe ho, tumhara score track ho raha hai:

score = 0;        // Game start, score zero
score += 10;      // First level complete, 10 points mile
                  // score = score + 10 (shorthand!)
                  
score += 25;      // Second level, 25 points mile
                  // Ab score = 35

score -= 5;       // Ek life khoyi, 5 points cut gaye
                  // Ab score = 30

score *= 2;       // Bonus round! Score double hua
                  // Ab score = 60

Ye sab compound assignment operators hain jo calculation
aur assignment dono ek saath karte hain!
```

### Example 3: Bank Account (Chained Assignment)

```
Teen bhai hain, unke accounts mein same opening balance:

account1 = account2 = account3 = 5000;

Ye right-to-left evaluate hota hai:
1. Pehle account3 = 5000
2. Phir account2 = account3 (jo 5000 hai)
3. Phir account1 = account2 (jo 5000 hai)

Sabke account mein 5000-5000 rupees aa gaye!
```

---

## Syntax Explanation

```java
public class AssignmentOperators {
    public static void main(String[] args) {
        // 1. SIMPLE ASSIGNMENT
        int x = 10;              // x ko 10 assign kiya
        int y = x;               // y ko x ki value (10) assign ki
        System.out.println("x = " + x + ", y = " + y);
        
        // 2. COMPOUND ASSIGNMENT - ARITHMETIC
        int a = 5;
        a += 3;                  // a = a + 3  → a = 8
        System.out.println("a += 3: " + a);
        
        a -= 2;                  // a = a - 2  → a = 6
        System.out.println("a -= 2: " + a);
        
        a *= 4;                  // a = a * 4  → a = 24
        System.out.println("a *= 4: " + a);
        
        a /= 3;                  // a = a / 3  → a = 8
        System.out.println("a /= 3: " + a);
        
        a %= 5;                  // a = a % 5  → a = 3
        System.out.println("a %= 5: " + a);
        
        // 3. CHAINED ASSIGNMENT
        int p, q, r;
        p = q = r = 100;         // Right-to-left: r=100, q=r, p=q
        System.out.println("p=" + p + ", q=" + q + ", r=" + r);
        
        // 4. COMPOUND ASSIGNMENT - BITWISE
        int num = 12;            // Binary: 1100
        num &= 10;               // num = num & 10 → 8 (Binary: 1000)
        System.out.println("num &= 10: " + num);
        
        num |= 5;                // num = num | 5 → 13 (Binary: 1101)
        System.out.println("num |= 5: " + num);
        
        num ^= 7;                // num = num ^ 7 → 10 (Binary: 1010)
        System.out.println("num ^= 7: " + num);
        
        // 5. SHIFT OPERATORS
        int shift = 4;           // Binary: 0100
        shift <<= 2;             // shift = shift << 2 → 16 (0001 0000)
        System.out.println("shift <<= 2: " + shift);
        
        shift >>= 1;             // shift = shift >> 1 → 8 (0000 1000)
        System.out.println("shift >>= 1: " + shift);
        
        // 6. IMPLICIT TYPE CASTING
        byte b = 10;
        b += 5;                  // Works! Auto-cast to byte
        System.out.println("byte b += 5: " + b);
        
        // b = b + 5;            // ERROR! Manual cast needed
        b = (byte)(b + 5);       // Correct way
        System.out.println("byte b = (byte)(b + 5): " + b);
        
        // 7. ASSIGNMENT AS EXPRESSION
        int result;
        if ((result = computeValue()) > 0) {
            System.out.println("Positive result: " + result);
        }
        
        // 8. MULTIPLE VARIABLES
        int m = 1, n = 2, o = 3;  // Multiple declarations
        m = n = o;                // All become 3 (right-to-left)
        System.out.println("m=" + m + ", n=" + n + ", o=" + o);
    }
    
    static int computeValue() {
        return 42;
    }
}
```

**Explanation:**
- Line 4-6: Simple assignment operator se value assign hoti hai
- Line 9-19: Compound arithmetic operators (+=, -=, *=, /=, %=) calculation + assignment karte hain
- Line 22-24: Chained assignment right-to-left evaluate hota hai
- Line 27-33: Bitwise compound operators (&=, |=, ^=) bitwise operations perform karte hain
- Line 36-41: Shift operators (<<= , >>=) bits ko shift karte hain
- Line 44-49: Compound operators automatically type cast karte hain
- Line 52-55: Assignment expression ek value return karta hai jo condition mein use ho sakti hai
- Line 58-60: Multiple variables ko ek saath assign kiya ja sakta hai

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│              MEMORY LAYOUT                          │
└─────────────────────────────────────────────────────┘

SIMPLE ASSIGNMENT:
int x = 10;

STACK MEMORY:
┌────────────┬───────┐
│ Variable   │ Value │
├────────────┼───────┤
│    x       │  10   │
└────────────┴───────┘

COMPOUND ASSIGNMENT:
x += 5;  // x = x + 5

STEP-BY-STEP:
1. Load x from memory    →  10
2. Add 5                 →  15
3. Store back to x       →  x now contains 15

STACK MEMORY (After):
┌────────────┬───────┐
│ Variable   │ Value │
├────────────┼───────┤
│    x       │  15   │  ← Updated
└────────────┴───────┘

CHAINED ASSIGNMENT:
int a = b = c = 100;

EXECUTION ORDER (Right-to-Left):
┌─────────────────────────────────┐
│ Step 1: c = 100                 │
│ ┌────────────┬───────┐          │
│ │    c       │  100  │          │
│ └────────────┴───────┘          │
│                                 │
│ Step 2: b = c (b = 100)        │
│ ┌────────────┬───────┐          │
│ │    b       │  100  │          │
│ │    c       │  100  │          │
│ └────────────┴───────┘          │
│                                 │
│ Step 3: a = b (a = 100)        │
│ ┌────────────┬───────┐          │
│ │    a       │  100  │          │
│ │    b       │  100  │          │
│ │    c       │  100  │          │
│ └────────────┴───────┘          │
└─────────────────────────────────┘

IMPLICIT CASTING:
byte b = 10;
b += 5;  // Automatically casts

MEMORY & TYPE:
┌────────────────────────────────┐
│ b (byte) = 10                  │
│ ┌──────┬──────┐                │
│ │  b   │  10  │ (8-bit)        │
│ └──────┴──────┘                │
│                                │
│ After b += 5:                  │
│ 1. b promoted to int (32-bit)  │
│ 2. 10 + 5 = 15 (int)          │
│ 3. Cast back to byte           │
│ 4. Store in b                  │
│ ┌──────┬──────┐                │
│ │  b   │  15  │ (8-bit)        │
│ └──────┴──────┘                │
└────────────────────────────────┘

REFERENCE ASSIGNMENT:
String s1 = new String("Hello");
String s2 = s1;  // Reference copy

HEAP MEMORY:
┌──────────────────────────────┐
│  String Object "Hello"       │
│  Address: 0x1234             │
└──────────────────────────────┘
        ↑              ↑
        │              │
   ┌────┴────┐    ┌────┴────┐
   │   s1    │    │   s2    │  ← Both point to same object
   │ 0x1234  │    │ 0x1234  │
   └─────────┘    └─────────┘
   STACK           STACK
```

---

## Advantages

✅ **Code Conciseness**: `x += 5` is shorter than `x = x + 5`  
✅ **Readability**: Intent clear hai ki variable ko modify karna hai  
✅ **Automatic Type Casting**: Compound operators automatically type cast karte hain  
✅ **Less Error-Prone**: Variable name ek hi baar likhna padta hai  
✅ **Performance**: Compiler optimize kar sakta hai compound operators ko  
✅ **Chain Assignment**: Multiple variables ko ek statement mein assign kar sakte hain  
✅ **Expression Value**: Assignment expression ek value return karta hai  
✅ **Type Safety**: Compiler ensures left-side variable ka type maintain rahe  

---

## Limitations

❌ **Cannot Assign to Literals**: `10 = x` invalid hai, left side variable hona chahiye  
❌ **No Multiple Operations**: `x += -= 5` invalid hai, ek operation at a time  
❌ **Potential Data Loss**: Larger type se smaller type mein casting se data loss ho sakta hai  
❌ **Not Atomic**: Multi-threaded environment mein compound operators atomic nahi hain  
❌ **Final Variables**: Final variables ko reassign nahi kar sakte  
❌ **Readability Issues**: Chained assignments confusing ho sakte hain  
❌ **No Operator Chaining**: `x += y += z` confusing aur error-prone hai  
❌ **Type Mismatch**: Incompatible types assign nahi kar sakte  

---

## Edge Cases

🔸 **Edge case 1**: Compound Assignment with Byte
```java
byte b = 100;
b += 30;  // Works! Auto-cast to byte
System.out.println(b);  // Output: 130

// But this would overflow if result > 127
byte b2 = 127;
b2 += 1;  // b2 becomes -128 (overflow wraps around)
System.out.println(b2);  // Output: -128
```

🔸 **Edge case 2**: Chained Assignment Order
```java
int a = 5, b = 10;
a = b = b + 5;  // Right-to-left evaluation

// Step by step:
// 1. b + 5 = 15
// 2. b = 15
// 3. a = b (which is 15)
System.out.println("a = " + a + ", b = " + b);  // a = 15, b = 15
```

🔸 **Edge case 3**: Assignment in Conditional
```java
int x = 0;
if (x = 5) {  // ERROR in Java! Cannot use assignment in boolean context
    // This would work in C/C++ but not in Java
}

// Correct way:
if ((x = getValue()) > 0) {  // Assignment with comparison
    System.out.println("Positive: " + x);
}
```

🔸 **Edge case 4**: Reference vs Value
```java
int[] arr1 = {1, 2, 3};
int[] arr2 = arr1;  // Reference assignment, not value copy

arr2[0] = 100;
System.out.println(arr1[0]);  // Output: 100 (same object!)

// For value copy:
int[] arr3 = arr1.clone();  // Now separate objects
```

🔸 **Edge case 5**: Compound Assignment with Different Types
```java
double d = 10.5;
int i = 5;
// i += d;  // Works! Auto-cast to int, but loses decimal
// Equivalent to: i = (int)(i + d)
i += d;
System.out.println(i);  // Output: 15 (0.5 lost in casting)
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Confusing == with =
```java
// Wrong way
int x = 5;
if (x = 10) {  // ERROR! Assignment, not comparison
    System.out.println("Equal");
}

// Right way
if (x == 10) {  // Comparison operator
    System.out.println("Equal");
}

// Also common in conditions
int y = 0;
while (y = 10) {  // ERROR! Should be y == 10 or y < 10
    System.out.println(y);
}
```

🚫 **Mistake 2**: Thinking compound operators don't cast
```java
// Wrong assumption
byte b = 10;
// b = b + 5;  // ERROR! int cannot be assigned to byte

// Right way - compound operator auto-casts
byte b2 = 10;
b2 += 5;  // Works! Automatically casts to byte
```

🚫 **Mistake 3**: Misunderstanding chained assignment order
```java
// Wrong thinking - left to right
int a = 1, b = 2, c = 3;
a = b = c;  // Beginners think: a=1, then b=1, then c=1

// Correct - right to left
// Actually: c=3, then b=3, then a=3
System.out.println(a + " " + b + " " + c);  // 3 3 3
```

🚫 **Mistake 4**: Trying to assign to literals or expressions
```java
// Wrong way
10 = x;        // ERROR! Cannot assign to literal
x + y = 10;    // ERROR! Cannot assign to expression
"Hello" = s;   // ERROR! Cannot assign to string literal

// Right way
x = 10;        // Correct
int sum = x + y;  // Correct
s = "Hello";   // Correct
```

🚫 **Mistake 5**: Not understanding reference assignment
```java
// Wrong thinking
String s1 = new String("Hello");
String s2 = s1;  // Beginners think: s2 is a copy of s1

s2 = "World";
// Expecting s1 to change, but it doesn't!
System.out.println(s1);  // Still "Hello"

// For arrays - common mistake:
int[] arr1 = {1, 2, 3};
int[] arr2 = arr1;  // Reference copy, not value copy!
arr2[0] = 100;
System.out.println(arr1[0]);  // 100! Same array!
```

🚫 **Mistake 6**: Forgetting operator precedence
```java
// Wrong expectation
int x = 5;
int y = x += 3;  // What happens?

// Correct understanding:
// x += 3 evaluates first → x becomes 8
// Then y = x → y becomes 8
System.out.println("x=" + x + ", y=" + y);  // x=8, y=8

// Another confusing case:
int a = 2, b = 3;
int c = a = b + 5;
// b + 5 = 8, then a = 8, then c = 8
System.out.println("a=" + a + ", c=" + c);  // a=8, c=8
```

---

## Important Interview Points

💡 **Q: What's the difference between `a = a + 5` and `a += 5`?**  
**A**: Functionally same hain but teen main differences hain:
1. **Type Casting**: `a += 5` automatically type cast karta hai to variable's type. `a = a + 5` mein manual casting zaroori hai agar type mismatch ho.
   ```java
   byte b = 10;
   b += 5;  // Works! Implicit cast to byte
   // b = b + 5;  // ERROR! int cannot be assigned to byte
   b = (byte)(b + 5);  // Need explicit cast
   ```
2. **Evaluation**: `a += 5` mein variable evaluation sirf ek baar hoti hai, `a = a + 5` mein do baar.
3. **Bytecode**: Compiler compound operators ko optimize kar sakta hai for better performance.

💡 **Q: Can we chain assignment operators?**  
**A**: Haan, chain kar sakte hain aur ye **right-to-left** evaluate hota hai:
```java
int a, b, c;
a = b = c = 10;
// Evaluation order: c=10, then b=c (10), then a=b (10)

// Can also chain with expressions:
int x = 5, y;
y = x = x + 5;  // x+5=10, then x=10, then y=10

// But avoid complex chains:
int p = q = r = s = 100;  // Readable
int m = n += o = 5;  // Confusing! Avoid this
```

💡 **Q: Are compound assignment operators atomic?**  
**A**: Nahi, compound assignment operators **atomic nahi hain**. Ye actually teen operations hain:
1. Variable ki value read karo
2. Operation perform karo
3. Result wapas write karo

Multi-threaded environment mein race conditions ho sakti hain:
```java
// Thread-unsafe:
counter += 1;  // Read-Modify-Write (3 operations)

// Thread-safe alternatives:
synchronized (lock) {
    counter += 1;
}
// Or use AtomicInteger:
AtomicInteger counter = new AtomicInteger(0);
counter.addAndGet(1);  // Atomic operation
```

💡 **Q: What happens with compound assignment and overflow?**  
**A**: Compound operators automatic casting karte hain, lekin overflow silently wrap-around ho jata hai:
```java
byte b = 127;  // Max byte value
b += 1;  // Wraps to -128 (overflow)

int i = Integer.MAX_VALUE;
i += 1;  // Wraps to Integer.MIN_VALUE

// Solution: Check before operation
if (b < Byte.MAX_VALUE) {
    b += 1;
} else {
    // Handle overflow
}
```

💡 **Q: Can we use assignment in expressions?**  
**A**: Haan, assignment ek expression hai jo assigned value return karta hai:
```java
int a, b;
if ((a = getValue()) > 0) {  // Assignment and comparison
    b = a * 2;  // Use assigned value
}

// Useful in loops:
String line;
while ((line = reader.readLine()) != null) {
    process(line);
}

// But avoid in boolean context directly:
boolean flag;
if (flag = true) {  // Legal but confusing!
    // Better: if (flag == true) or just if (flag)
}
```

💡 **Q: How do assignment operators work with references?**  
**A**: Reference types ke liye assignment **reference copy** karta hai, value copy nahi:
```java
// Primitive types - value copy:
int a = 10;
int b = a;  // b gets copy of value
a = 20;
System.out.println(b);  // Still 10

// Reference types - reference copy:
StringBuilder sb1 = new StringBuilder("Hello");
StringBuilder sb2 = sb1;  // sb2 points to same object
sb1.append(" World");
System.out.println(sb2);  // "Hello World" (same object!)

// For independent copy:
StringBuilder sb3 = new StringBuilder(sb1.toString());
```

💡 **Q: What's the precedence of assignment operators?**  
**A**: Assignment operators ki precedence **lowest** hai (almost all operators se kam):
```java
int x = 5 + 3 * 2;  // Multiplication first, then addition, then assignment
// x = 5 + 6 = 11

int y = 10;
int z = y += 5;  // y += 5 first (y becomes 15), then z = y (z becomes 15)

// Associativity: Right-to-Left
int a = b = c = 5;  // c=5, b=c, a=b (right-to-left)
```

💡 **Q: Can final variables be reassigned?**  
**A**: Nahi, final variables ko reassign nahi kar sakte:
```java
final int x = 10;
// x = 20;  // ERROR! Cannot assign a value to final variable
// x += 5;  // ERROR! This is also reassignment

// But for reference types:
final StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");  // OK! Object ko modify kar sakte hain
// sb = new StringBuilder();  // ERROR! Reference change nahi kar sakte
```

💡 **Q: Explain implicit casting in compound operators**  
**A**: Compound operators automatically target variable ke type mein cast karte hain:
```java
// Without compound operator - manual cast needed:
byte b = 10;
// b = b + 5;  // ERROR! b + 5 is int, can't assign to byte
b = (byte)(b + 5);  // OK with explicit cast

// With compound operator - automatic cast:
byte b2 = 10;
b2 += 5;  // Automatically casts to byte
// Equivalent to: b2 = (byte)(b2 + 5)

// Same for all types:
short s = 100;
s *= 2;  // Auto-cast to short

long l = 1000L;
l /= 3;  // Auto-cast to long

// This is why compound operators are safer!
```

---

## Short Recap

Assignment operators values ko variables mein store karte hain. Simple assignment (=) direct value assign karta hai, jabki compound operators (+=, -=, *=, etc.) calculation aur assignment dono ek saath karte hain with automatic type casting. Ye operators right-to-left evaluate hote hain aur chain bhi kiye ja sakte hain. Multi-threaded environment mein atomic nahi hain, aur reference types ke liye reference copy karte hain, value copy nahi.

---

**Previous**: [← 48 - BITWISE OPERATORS](./48-bitwise-operators.md)  
**Next**: [50 - UNARY OPERATORS →](./50-unary-operators.md)