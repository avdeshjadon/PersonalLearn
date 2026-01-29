# 50) UNARY OPERATORS

## Concept Introduction

Unary operators Java mein wo operators hain jo sirf **ek operand** pe kaam karte hain. "Unary" word Latin "unus" se aaya hai jiska matlab hota hai "one" - matlab ek operand waale operators.

Socho jaise tum ek number counter ho - tumhe bas ek number diya jayega aur tumhe uspe operation karna hai. Like ek counter pe + button dabaya (increment), ya - button dabaya (decrement), ya number ka sign change kiya (positive ko negative ya vice versa). Ye sab unary operations hain!

Java mein mainly 5 types ke unary operators hain: Increment (++), Decrement (--), Unary Plus (+), Unary Minus (-), aur Logical NOT (!). Sabse interesting baat ye hai ki increment aur decrement ke do versions hote hain - prefix aur postfix - aur dono ka behavior different hota hai!

---

## Why This Concept Exists

**Problem before this concept:**
- Counter variables ko increment/decrement karne ke liye lambi expressions likhni padti thi
- Variables ka sign change karne ke liye multiplication operation use karna padta tha
- Boolean values ko negate karne ke liye complex logic likhna padta tha
- Code repetitive aur verbose ho jata tha
- Simple operations ke liye bhi multiple lines code likhna padta tha

**Solution:**
- Unary operators se single operand pe quickly operations perform ho jate hain
- Increment/Decrement se counter variables easily manage ho jate hain
- Prefix/Postfix operators se value use aur update ek saath ho jata hai
- Code concise aur readable ban gaya
- Performance bhi better hui kyunki compiler optimize kar sakta hai

---

## Definitions

### 🔹 Very Simple Definition
Unary operators wo operators hain jo sirf ek operand ke saath kaam karte hain, jaise value badhana (++), ghatana (--), sign change karna (+/-), ya logical NOT (!)

### 🔹 College Exam Definition
Unary operators are operators that operate on a single operand. In Java, they include increment (++), decrement (--), unary plus (+), unary minus (-), and logical NOT (!). Increment and decrement operators exist in two forms: prefix (++x, --x) and postfix (x++, x--).

### 🔹 Viva Definition
Unary operators in Java work with only one operand and can be categorized into arithmetic unary operators (+, -, ++, --) and logical unary operator (!). The increment (++) and decrement (--) operators have prefix and postfix forms with different evaluation semantics: prefix modifies the value before use, while postfix modifies after use. These operators provide concise syntax for common operations.

### 🔹 Interview Definition
Unary operators in Java are operators that take a single operand. Key operators include: (1) Increment (++) and Decrement (--) - both have prefix and postfix variants with different precedence and evaluation order, (2) Unary Plus (+) and Minus (-) for numeric type promotion and negation, (3) Logical NOT (!) for boolean negation. Prefix operators have higher precedence and modify before returning, while postfix operators return the current value then modify. They're particularly important in loop counters, conditional expressions, and mathematical computations.

### 🔹 Technical Definition
Unary operators are syntactic constructs that accept exactly one operand and perform operations such as increment (pre/post), decrement (pre/post), unary plus (numeric promotion), unary minus (arithmetic negation), and logical complement (!). Prefix operators (++x, --x) have right-to-left associativity with precedence level 2, performing modification before expression evaluation. Postfix operators (x++, x--) have left-to-right associativity with precedence level 1 (highest), returning the lvalue then performing modification. At bytecode level, they compile to iinc (for local int variables) or load-operate-store sequences for other types. The unary minus creates a new negated value without mutating the operand.

### 🔹 One-line Crisp Definition
Operators operating on single operand: ++/-- (increment/decrement), +/- (sign), ! (logical NOT).

---

## Internal Working

```
INCREMENT/DECREMENT INTERNAL WORKING:

PREFIX INCREMENT (++x):
1. Increment the value
2. Return the new value
3. Store back to variable

Example: int y = ++x; (x=5)
- x = x + 1 → x becomes 6
- Return 6
- y = 6

POSTFIX INCREMENT (x++):
1. Save current value (temp)
2. Increment the variable
3. Return saved value

Example: int y = x++; (x=5)
- temp = x → temp = 5
- x = x + 1 → x becomes 6
- Return temp (5)
- y = 5

BYTECODE LEVEL:
int x = 5;
x++;  // For local int variable

Bytecode:
iinc 1, 1    // Increment local variable 1 by 1 (optimized!)

For other types or arrays:
iload_1      // Load variable
iconst_1     // Load constant 1
iadd         // Add
istore_1     // Store back

UNARY MINUS INTERNAL:
int x = 5;
int y = -x;  // Unary minus

Process:
1. Load x (5)
2. Negate (multiply by -1 internally)
3. Store in y (-5)
4. x remains unchanged (5)

LOGICAL NOT INTERNAL:
boolean flag = true;
boolean result = !flag;

Process:
1. Load flag (true → 1 in bytecode)
2. Apply logical NOT (1 becomes 0)
3. Store result (false)

Bytecode:
iload_1      // Load boolean (as int)
ifeq Label   // If equal to 0, jump
iconst_0     // Push false
goto End
Label:
iconst_1     // Push true
End:
istore_2     // Store result
```

---

## DIAGRAM

```
┌─────────────────────────────────────────────────────────────────┐
│                     UNARY OPERATORS                             │
└─────────────────────────────────────────────────────────────────┘

1. INCREMENT & DECREMENT OPERATORS
   ┌──────────────────────────────────────────────────────┐
   │  PREFIX (++x, --x)    vs    POSTFIX (x++, x--)      │
   └──────────────────────────────────────────────────────┘
   
   PREFIX INCREMENT (++x):
   ┌─────┐    ┌──────────┐    ┌─────┐
   │ x=5 │ →  │ Increment│ →  │ x=6 │
   └─────┘    │ First    │    └─────┘
              └──────────┘       ↓
                           Return 6
   
   POSTFIX INCREMENT (x++):
   ┌─────┐    ┌──────────┐    ┌─────┐
   │ x=5 │ →  │ Return 5 │    │ x=6 │
   └─────┘    │ First    │    └─────┘
              └──────────┘
                   ↓
              Return 5

2. ALL UNARY OPERATORS
   ┌────────────────────────────────────────────────────┐
   │ Operator │ Name                 │ Example         │
   ├────────────────────────────────────────────────────┤
   │   ++     │ Increment (Prefix)   │ ++x → x=x+1    │
   │   ++     │ Increment (Postfix)  │ x++ → use,then+│
   │   --     │ Decrement (Prefix)   │ --x → x=x-1    │
   │   --     │ Decrement (Postfix)  │ x-- → use,then-│
   │    +     │ Unary Plus           │ +x → promote   │
   │    -     │ Unary Minus          │ -x → negate    │
   │    !     │ Logical NOT          │ !b → invert    │
   └────────────────────────────────────────────────────┘

3. PREFIX vs POSTFIX COMPARISON
   
   int x = 5, y;
   
   PREFIX:                    POSTFIX:
   ┌─────────────┐           ┌─────────────┐
   │  y = ++x;   │           │  y = x++;   │
   └─────────────┘           └─────────────┘
        ↓                         ↓
   ┌─────────────┐           ┌─────────────┐
   │  x: 5 → 6   │           │  x: 5 → 6   │
   │  y: 6       │           │  y: 5       │
   └─────────────┘           └─────────────┘

4. UNARY PLUS & MINUS
   
   int a = 5;
   int b = +a;  // Unary plus (no change)
   int c = -a;  // Unary minus (negation)
   
   ┌───────┬───────┬────────┐
   │   a   │   b   │   c    │
   ├───────┼───────┼────────┤
   │   5   │   5   │  -5    │
   └───────┴───────┴────────┘
   
   Note: a remains unchanged!

5. LOGICAL NOT (!)
   
   boolean flag = true;
   boolean result = !flag;
   
   ┌──────────────────────────┐
   │  flag: true              │
   │    ↓                     │
   │  Apply !                 │
   │    ↓                     │
   │  result: false           │
   └──────────────────────────┘

6. NESTED UNARY OPERATORS
   
   int x = 5;
   int y = -(++x);
   
   Step by step:
   ┌────────────────────────────┐
   │ 1. ++x  → x=6, return 6    │
   │ 2. -6   → negate to -6     │
   │ 3. y=-6 → assign to y      │
   └────────────────────────────┘
   
   Result: x=6, y=-6

7. PRECEDENCE & ASSOCIATIVITY
   
   ┌─────────────────────────────────────┐
   │ Precedence (High to Low):           │
   ├─────────────────────────────────────┤
   │ 1. Postfix (x++, x--)              │
   │ 2. Prefix (++x, --x, +x, -x, !)    │
   │ 3. Other operators...               │
   └─────────────────────────────────────┘
   
   Associativity:
   - Postfix: Left-to-Right
   - Prefix: Right-to-Left
   
   Example: int y = ++x++;  // ERROR! Can't chain
   Example: int y = -(++x); // OK! Different operators
```

---

## Real-life Hinglish Example

### Example 1: Counter Machine (Increment/Decrement)

```
Socho ek counter machine hai store pe jo customers count karta hai:

customerCount = 100;  // Currently 100 customers

// Ek customer aaya (PREFIX):
totalAfter = ++customerCount;
// Pehle count badha (101), phir total mein 101 aaya
System.out.println(totalAfter);  // 101

// Ek customer nikla (POSTFIX):
currentToken = customerCount--;
// Pehle current count token pe print hua (101)
// Phir count ghata (100)
System.out.println(currentToken);  // 101 (token pe)
System.out.println(customerCount); // 100 (actual count)

Matlab prefix mein pehle action, phir display.
Postfix mein pehle display, phir action!
```

### Example 2: Temperature Reading (Unary Minus)

```
Temperature sensor se reading aa rahi hai:

int temperature = 25;  // 25 degrees above zero

// Agar underground measurement hai:
int underground = -temperature;  // -25 degrees
System.out.println("Underground: " + underground + "°C");

// Original temperature unchanged hai:
System.out.println("Surface: " + temperature + "°C");

Matlab unary minus ek naya value create karta hai,
original ko change nahi karta!
```

### Example 3: Door Lock System (Logical NOT)

```
Smart lock system hai jo door ki state check karta hai:

boolean isDoorOpen = true;  // Door khula hai

// Security check - agar door band hai to enter karo:
if (!isDoorOpen) {  // NOT isDoorOpen
    System.out.println("Safe to enter, door is closed");
} else {
    System.out.println("Alert! Door is open");
}

// isDoorOpen ko negate kiya (!), matlab ulta check kiya
// true ka opposite false, false ka opposite true
```

### Example 4: Loop Counter (Real Usage)

```
Lift 10th floor se ground floor pe aa rahi hai:

for (int floor = 10; floor > 0; floor--) {
    System.out.println("Current floor: " + floor);
    // Decrement operator automatically floor ko ghata raha hai
}

// Ye bahut common use case hai - loop counter ke liye
// floor-- automatically har iteration pe floor ko 1 se ghata deta hai
```

---

## Syntax Explanation

```java
public class UnaryOperators {
    public static void main(String[] args) {
        
        // 1. PREFIX INCREMENT (++x)
        int x = 5;
        int y = ++x;  // x pehle increment (6), phir y ko assign
        System.out.println("After ++x: x=" + x + ", y=" + y); // x=6, y=6
        
        // 2. POSTFIX INCREMENT (x++)
        int a = 5;
        int b = a++;  // a ki current value b ko (5), phir a increment (6)
        System.out.println("After a++: a=" + a + ", b=" + b); // a=6, b=5
        
        // 3. PREFIX DECREMENT (--x)
        int m = 10;
        int n = --m;  // m pehle decrement (9), phir n ko assign
        System.out.println("After --m: m=" + m + ", n=" + n); // m=9, n=9
        
        // 4. POSTFIX DECREMENT (x--)
        int p = 10;
        int q = p--;  // p ki current value q ko (10), phir p decrement (9)
        System.out.println("After p--: p=" + p + ", q=" + q); // p=9, q=10
        
        // 5. STANDALONE INCREMENT/DECREMENT
        int count = 0;
        count++;  // Same as count = count + 1
        System.out.println("count++ : " + count);  // 1
        ++count;  // Same effect when standalone
        System.out.println("++count: " + count);  // 2
        
        // 6. UNARY PLUS (+)
        int num1 = 10;
        int num2 = +num1;  // No change, but promotes byte/short to int
        System.out.println("Unary +: num1=" + num1 + ", num2=" + num2);
        
        byte smallNum = 5;
        int promoted = +smallNum;  // Promoted to int
        System.out.println("Promoted byte to int: " + promoted);
        
        // 7. UNARY MINUS (-)
        int positive = 15;
        int negative = -positive;  // Negation
        System.out.println("Unary -: positive=" + positive + 
                         ", negative=" + negative); // 15, -15
        
        // Chaining unary minus:
        int original = -5;
        int reversed = -original;  // Double negation
        System.out.println("Double negation: " + reversed); // 5
        
        // 8. LOGICAL NOT (!)
        boolean isRaining = true;
        boolean isSunny = !isRaining;  // NOT true = false
        System.out.println("isRaining=" + isRaining + 
                         ", isSunny=" + isSunny); // true, false
        
        // In conditions:
        boolean hasPermission = false;
        if (!hasPermission) {  // if NOT hasPermission
            System.out.println("Access Denied!");
        }
        
        // 9. COMPLEX EXPRESSIONS
        int val = 5;
        int result1 = ++val + val++;  // (6) + (6), then val becomes 7
        System.out.println("++val + val++: result=" + result1 + 
                         ", val=" + val); // result=12, val=7
        
        int val2 = 5;
        int result2 = val2++ + ++val2;  // (5) + (7), val2 goes 5→6→7
        System.out.println("val2++ + ++val2: result=" + result2 + 
                         ", val2=" + val2); // result=12, val2=7
        
        // 10. UNARY WITH OTHER OPERATORS
        int score = 100;
        score *= -1;  // Multiply by -1 (negation)
        System.out.println("score *= -1: " + score); // -100
        
        int temp = 20;
        int adjusted = -(++temp);  // Increment to 21, then negate to -21
        System.out.println("-(++temp): adjusted=" + adjusted + 
                         ", temp=" + temp); // -21, 21
        
        // 11. COMMON LOOP USAGE
        System.out.print("Countdown: ");
        for (int i = 5; i > 0; i--) {  // Decrement in loop
            System.out.print(i + " ");
        }
        System.out.println();
        
        System.out.print("Count-up: ");
        for (int i = 1; i <= 5; ++i) {  // Increment in loop (prefix)
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 12. MULTIPLE UNARY OPERATORS
        int base = 5;
        int complex = -(-(-base));  // Triple negation: -(-(5)) = -(5) = -5
        System.out.println("Triple negation of 5: " + complex); // -5
        
        // 13. BOOLEAN DOUBLE NEGATION
        boolean flag = true;
        boolean same = !!flag;  // NOT NOT true = true
        System.out.println("!!true = " + same); // true
        
        // 14. INCREMENT/DECREMENT LIMITS
        int max = Integer.MAX_VALUE;
        System.out.println("Max int: " + max);
        max++;  // Overflow
        System.out.println("Max++ (overflow): " + max); // Wraps to MIN_VALUE
        
        int min = Integer.MIN_VALUE;
        System.out.println("Min int: " + min);
        min--;  // Underflow
        System.out.println("Min-- (underflow): " + min); // Wraps to MAX_VALUE
    }
}
```

**Explanation:**
- Line 5-7: Prefix increment pehle value badha ke return karta hai
- Line 10-12: Postfix increment pehle current value return, phir increment
- Line 15-17: Prefix decrement pehle value ghatata hai
- Line 20-22: Postfix decrement pehle current value return, phir decrement
- Line 25-30: Standalone usage mein prefix aur postfix same effect dete hain
- Line 33-39: Unary plus numeric promotion ke liye useful hai
- Line 42-49: Unary minus negation create karta hai without changing original
- Line 52-60: Logical NOT boolean values ko invert karta hai
- Line 63-71: Complex expressions mein order important hai
- Line 74-77: Unary operators other operators ke saath combine ho sakte hain
- Line 80-89: Loops mein increment/decrement commonly used hain
- Line 92-94: Multiple unary operators chain ho sakte hain
- Line 97-99: Boolean double negation original value return karta hai
- Line 102-109: Overflow/underflow silently wrap around hota hai

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│              MEMORY LAYOUT                          │
└─────────────────────────────────────────────────────┘

PREFIX INCREMENT (++x):
int x = 5;
int y = ++x;

STEP-BY-STEP MEMORY:
Initial:
┌────────┬───────┐
│   x    │   5   │
└────────┴───────┘

After ++x:
┌────────┬───────┐
│   x    │   6   │  ← Modified first
└────────┴───────┘

Then assigned:
┌────────┬───────┐
│   x    │   6   │
│   y    │   6   │  ← Gets updated value
└────────┴───────┘

POSTFIX INCREMENT (x++):
int a = 5;
int b = a++;

STEP-BY-STEP MEMORY:
Initial:
┌────────┬───────┐
│   a    │   5   │
└────────┴───────┘

Temporary storage:
┌────────┬───────┬──────────┐
│   a    │   5   │ temp: 5  │  ← Original saved
└────────┴───────┴──────────┘

After increment:
┌────────┬───────┬──────────┐
│   a    │   6   │ temp: 5  │  ← a incremented
└────────┴───────┴──────────┘

Then assigned:
┌────────┬───────┐
│   a    │   6   │
│   b    │   5   │  ← Gets original value from temp
└────────┴───────┘

UNARY MINUS:
int original = 10;
int negated = -original;

MEMORY:
┌─────────────┬────────┐
│  original   │   10   │  ← Unchanged
│  negated    │  -10   │  ← New value created
└─────────────┴────────┘

Note: Original value is not modified!

LOGICAL NOT:
boolean flag = true;
boolean inverted = !flag;

MEMORY (as boolean):
┌─────────────┬────────┐
│   flag      │  true  │  ← Original
│  inverted   │ false  │  ← Inverted
└─────────────┴────────┘

STACK MEMORY (Bytecode level):
┌────────────────────────────┐
│  flag:    1  (true)        │
│  inverted: 0 (false)       │
└────────────────────────────┘

COMPLEX EXPRESSION:
int x = 5;
int y = ++x + x++;

MEMORY CHANGES:
Initial:
┌────┬───┐
│ x  │ 5 │
└────┴───┘

After ++x (left operand):
┌────┬───┐
│ x  │ 6 │  ← Incremented
└────┴───┘

Evaluate x++ (right operand):
┌────┬───┬──────────┐
│ x  │ 7 │ temp: 6  │  ← x incremented, but 6 returned
└────┴───┴──────────┘

Final:
┌────┬───┬───┐
│ x  │ 7 │   │
│ y  │ 12│   │  ← 6 + 6 = 12
└────┴───┴───┘

OVERFLOW BEHAVIOR:
int max = Integer.MAX_VALUE;  // 2147483647
max++;  // Overflow

MEMORY (bit level):
Before:
┌──────────────────────────────────┐
│ 0111 1111 1111 1111 1111 1111 │  MAX_VALUE
└──────────────────────────────────┘

After increment:
┌──────────────────────────────────┐
│ 1000 0000 0000 0000 0000 0000 │  MIN_VALUE (overflow!)
└──────────────────────────────────┘

Value wraps around to -2147483648

ARRAY INCREMENT:
int[] arr = {1, 2, 3};
arr[0]++;

HEAP MEMORY:
┌─────────────────────────┐
│  Array Object           │
│  ┌───┬───┬───┐          │
│  │ 2 │ 2 │ 3 │          │  ← arr[0] incremented
│  └───┴───┴───┘          │
│   [0] [1] [2]           │
└─────────────────────────┘
```

---

## Advantages

✅ **Concise Syntax**: `x++` is shorter and clearer than `x = x + 1`  
✅ **Readability**: Intent immediately clear hai ki value increment/decrement karni hai  
✅ **Performance**: Compiler can optimize unary operators efficiently  
✅ **Flexibility**: Prefix aur postfix dono options available for different use cases  
✅ **Loop Counters**: Perfect for for-loops aur while-loops mein usage  
✅ **Atomic-like**: Single variable modification, though not truly atomic in multi-threading  
✅ **Type Safety**: Automatic type preservation, unlike compound assignments in some cases  
✅ **Chaining Possible**: Multiple unary operators chain ho sakte hain  

---

## Limitations

❌ **Cannot Chain Increment**: `++x++` invalid hai, sirf ek side pe ek hi unary operator  
❌ **Only Variables**: Literals pe use nahi kar sakte (`5++` invalid)  
❌ **Not Atomic**: Multi-threaded environment mein race conditions possible  
❌ **Overflow Silent**: Integer overflow warning nahi deta, silently wrap around hota hai  
❌ **Confusion**: Prefix vs postfix complex expressions mein confusing ho sakta hai  
❌ **No Float Precision**: Floating point increment mein precision loss ho sakta hai  
❌ **Side Effects**: Expressions mein side effects se unexpected results  
❌ **Limited Types**: Only numeric types aur boolean (for !) pe kaam karte hain  

---

## Edge Cases

🔸 **Edge case 1**: Prefix vs Postfix in Complex Expression
```java
int x = 5;
int result = ++x + x++ + x;
// Step by step:
// ++x → x becomes 6, returns 6
// x++ → x becomes 7, returns 6
// x   → current value is 7
// result = 6 + 6 + 7 = 19
System.out.println("result: " + result + ", x: " + x);
// Output: result: 19, x: 7
```

🔸 **Edge case 2**: Integer Overflow
```java
int max = Integer.MAX_VALUE;  // 2147483647
System.out.println("Max: " + max);
max++;  // Overflow!
System.out.println("Max++: " + max);  // -2147483648 (MIN_VALUE)

// Similarly for underflow:
int min = Integer.MIN_VALUE;  // -2147483648
min--;  // Underflow!
System.out.println("Min--: " + min);  // 2147483647 (MAX_VALUE)
```

🔸 **Edge case 3**: Increment on Array Element
```java
int[] arr = {10, 20, 30};
int x = arr[1]++;  // Postfix on array element

// arr[1] was 20, now 21
// x gets old value 20
System.out.println("x: " + x + ", arr[1]: " + arr[1]);
// Output: x: 20, arr[1]: 21

// Prefix version:
int y = ++arr[0];
System.out.println("y: " + y + ", arr[0]: " + arr[0]);
// Output: y: 11, arr[0]: 11
```

🔸 **Edge case 4**: Double Negation
```java
int num = -5;
int result = -(-num);  // Double negation
System.out.println(result);  // 5

// With boolean:
boolean flag = false;
boolean same = !!flag;  // Double NOT
System.out.println(same);  // false (same as original)
```

🔸 **Edge case 5**: Floating Point Increment
```java
double d = 0.1;
for (int i = 0; i < 10; i++) {
    d++;  // Increments by 1.0
}
System.out.println(d);  // 10.1 (not exactly due to precision)

// Precision issue:
float f = 16777216f;  // 2^24
f++;
System.out.println(f == 16777216f);  // true! (precision loss)
```

🔸 **Edge case 6**: Unary in Method Call
```java
int count = 5;
System.out.println(count++);  // Prints 5
System.out.println(count);    // Now 6

// vs
int count2 = 5;
System.out.println(++count2);  // Prints 6
System.out.println(count2);    // Still 6
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Confusing prefix and postfix
```java
// Wrong understanding
int x = 5;
int y = x++;
// Beginners think: x=6, y=6

// Correct understanding
// y gets old value (5), then x becomes 6
System.out.println("x=" + x + ", y=" + y);  // x=6, y=5
```

🚫 **Mistake 2**: Trying to increment constants or expressions
```java
// Wrong way
// 5++;           // ERROR! Cannot increment literal
// (x + y)++;     // ERROR! Cannot increment expression

// Right way
int temp = x + y;
temp++;
```

🚫 **Mistake 3**: Chaining increment operators
```java
// Wrong way
int x = 5;
// int y = ++x++;  // ERROR! Cannot chain ++ operators

// Right way
x++;  // First increment
++x;  // Second increment (separate statements)

// Or use:
x += 2;  // Increment by 2
```

🚫 **Mistake 4**: Using ++ with final variables
```java
// Wrong way
final int CONSTANT = 10;
// CONSTANT++;  // ERROR! Cannot modify final variable

// Right way
int variable = 10;
variable++;  // OK, not final
```

🚫 **Mistake 5**: Expecting unary minus to modify original
```java
// Wrong thinking
int x = 5;
int y = -x;
// Beginners think x is now -5

System.out.println("x=" + x);  // Still 5! (unchanged)
System.out.println("y=" + y);  // -5 (new value)

// To actually negate x:
x = -x;  // Now x is -5
```

🚫 **Mistake 6**: Confusing logical NOT with bitwise NOT
```java
// Wrong way (mixing concepts)
int num = 5;
// boolean result = !num;  // ERROR! ! only works with boolean

// Right way
boolean flag = true;
boolean result = !flag;  // OK, logical NOT

// For bitwise NOT, use ~
int bitwiseNot = ~num;  // Bitwise complement
```

🚫 **Mistake 7**: Multiple increments in loop thinking they're simultaneous
```java
// Wrong thinking
for (int i = 0; i < 5; i++, i++) {  // Thinking double increment
    System.out.println(i);
}
// This actually increments twice per iteration: 0, 2, 4

// Usually want:
for (int i = 0; i < 5; i++) {  // Single increment
    System.out.println(i);  // 0, 1, 2, 3, 4
}

// Or explicitly:
for (int i = 0; i < 5; i += 2) {  // Increment by 2
    System.out.println(i);  // 0, 2, 4
}
```

---

## Important Interview Points

💡 **Q: What's the difference between ++x and x++?**  
**A**: Main difference evaluation order aur return value ka hai:

**++x (Prefix):**
- Pehle variable increment hota hai
- Phir incremented value return hoti hai
- Higher precedence (after postfix)

**x++ (Postfix):**
- Pehle current value return hoti hai
- Phir variable increment hota hai
- Highest precedence among all operators

```java
int x = 5;
int a = ++x;  // x becomes 6, a gets 6
System.out.println("++x: x=" + x + ", a=" + a);  // x=6, a=6

int y = 5;
int b = y++;  // b gets 5, then y becomes 6
System.out.println("y++: y=" + y + ", b=" + b);  // y=6, b=5

// In loops, both are same when standalone:
for (int i = 0; i < 5; i++) { }   // Same as
for (int i = 0; i < 5; ++i) { }   // this
```

💡 **Q: Are increment/decrement operators atomic?**  
**A**: Nahi, ye operators **atomic nahi hain**. Internally ye teen operations hain:
1. Read current value
2. Increment/decrement
3. Write back

Multi-threaded environment mein race conditions ho sakti hain:
```java
// Thread-unsafe:
int counter = 0;
// Thread 1: counter++
// Thread 2: counter++
// Expected: 2, but might get 1 due to race condition

// Thread-safe alternatives:
// 1. Synchronized block:
synchronized(lock) {
    counter++;
}

// 2. AtomicInteger:
AtomicInteger atomicCounter = new AtomicInteger(0);
atomicCounter.incrementAndGet();  // Atomic operation

// 3. volatile with synchronized:
private volatile int counter = 0;
public synchronized void increment() {
    counter++;
}
```

💡 **Q: What happens with integer overflow in increment?**  
**A**: Java mein integer overflow **silently wrap around** hota hai without exception:
```java
int max = Integer.MAX_VALUE;  // 2,147,483,647
max++;  // Wraps to Integer.MIN_VALUE: -2,147,483,648

int min = Integer.MIN_VALUE;  // -2,147,483,648
min--;  // Wraps to Integer.MAX_VALUE: 2,147,483,647

// Detection techniques:
int x = Integer.MAX_VALUE;
if (x == Integer.MAX_VALUE) {
    System.out.println("Cannot increment, overflow!");
} else {
    x++;
}

// Better: Use Math.addExact for exception on overflow
try {
    int safe = Math.addExact(Integer.MAX_VALUE, 1);
} catch (ArithmeticException e) {
    System.out.println("Overflow detected!");
}
```

💡 **Q: Can we use unary operators on all data types?**  
**A**: Nahi, different unary operators ke liye different type requirements hain:

**Increment/Decrement (++, --):**
- Work with: byte, short, int, long, float, double, char
- Do NOT work with: boolean, String, objects

**Unary Plus/Minus (+, -):**
- Work with: All numeric types
- Promote byte/short/char to int

**Logical NOT (!):**
- ONLY works with boolean type

```java
// Valid:
int i = 5; i++;           // OK
double d = 5.5; d++;      // OK
char c = 'A'; c++;        // OK (becomes 'B')

// Invalid:
boolean b = true;
// b++;                   // ERROR!
String s = "hello";
// s++;                   // ERROR!

// Unary minus:
byte b = 5;
int result = -b;          // OK, promoted to int

// Logical NOT:
boolean flag = true;
boolean not = !flag;      // OK
// int x = !5;            // ERROR! ! only for boolean
```

💡 **Q: What's the precedence of unary operators?**  
**A**: Unary operators ki precedence bahut high hai, but postfix highest hai:

**Precedence Order (High to Low):**
1. Postfix (x++, x--)
2. Prefix & Unary (++x, --x, +x, -x, !)
3. Multiplicative (*, /, %)
4. Additive (+, -)
5. ... (other operators)

```java
// Example 1: Postfix highest precedence
int x = 5;
int y = x++ * 2;  // (x++) * 2, not x++ * 2
// x++ evaluates first: uses 5, then x becomes 6
// 5 * 2 = 10
System.out.println("y=" + y + ", x=" + x);  // y=10, x=6

// Example 2: Prefix vs Arithmetic
int a = 5;
int b = ++a * 2;  // (++a) * 2
// ++a first: a becomes 6, returns 6
// 6 * 2 = 12
System.out.println("b=" + b + ", a=" + a);  // b=12, a=6

// Example 3: Multiple unary operators
int m = 5;
int n = -++m;  // -(++m), right-to-left
// ++m: m becomes 6
// -6: negation
// n = -6
System.out.println("n=" + n + ", m=" + m);  // n=-6, m=6
```

💡 **Q: How do unary operators work with compound assignments?**  
**A**: Unary operators compound assignments ke saath mix ho sakte hain but confusing ho sakta hai:
```java
int x = 5;
x += ++x;  // Confusing! Avoid this

// Step by step:
// ++x: x becomes 6, returns 6
// x += 6: x = x + 6 = 6 + 6 = 12
System.out.println(x);  // 12

// Better practice: Avoid mixing
int y = 5;
++y;      // First increment
y += y;   // Then compound assignment (y = 12)

// Common mistake to avoid:
int z = 10;
z = z++;  // Tricky! 
// z++ returns 10 (old value), then z becomes 11
// But then z = 10 overwrites it
System.out.println(z);  // 10! (not 11)
```

💡 **Q: What's the difference between -x and 0-x?**  
**A**: Dono logically same hain but implementation different hai:

**-x (Unary Minus):**
- Single operator
- Direct negation operation
- Slightly more efficient

**0-x (Binary Subtraction):**
- Two operands aur operator
- Subtraction operation
- More operations involved

```java
int x = 5;
int neg1 = -x;      // Unary minus
int neg2 = 0 - x;   // Binary subtraction

System.out.println(neg1 == neg2);  // true (same result)

// Performance difference minimal hai but:
// Unary minus: More direct and readable
// Subtraction: More explicit but verbose

// Bytecode comparison:
// -x:     ineg (negate instruction)
// 0-x:    iconst_0, iload, isub (3 instructions)
```

💡 **Q: Can we use increment operator in array index?**  
**A**: Haan, but careful rahna chahiye ki kab evaluate hota hai:
```java
int[] arr = {10, 20, 30, 40};
int i = 0;

// Postfix in index:
System.out.println(arr[i++]);  // Prints arr[0]=10, then i becomes 1
System.out.println(arr[i]);    // Prints arr[1]=20

// Prefix in index:
i = 0;
System.out.println(arr[++i]);  // i becomes 1 first, prints arr[1]=20

// Common pitfall:
i = 0;
arr[i] = arr[i++];  // Confusing!
// Right side: arr[0] (old value), then i becomes 1
// Left side: arr[0] (evaluated before i++)
// Result: arr[0] = arr[0] (no change!)

// Better practice:
i = 0;
int temp = arr[i];
i++;
arr[i] = temp;  // Clear and explicit
```

---

## Short Recap

Unary operators sirf ek operand pe operate karte hain. Increment (++, --) ke prefix aur postfix dono forms hain - prefix pehle modify karke return karta hai, postfix pehle return karke phir modify. Unary plus/minus sign operations ke liye use hote hain (minus negation create karta hai without original change), aur logical NOT (!) boolean inversion ke liye. Ye operators high precedence rakhte hain (postfix highest), but atomic nahi hain aur overflow silently wrap around hota hai, so multi-threading aur boundary conditions mein careful rahna chahiye.

---

**Previous**: [← 49 - ASSIGNMENT OPERATORS](./49-assignment-operators.md)  
**Next**: [51 - TERNARY OPERATOR →](./51-ternary-operator.md)