# 48) BITWISE OPERATORS

## Concept Introduction

Bitwise operators Java mein wo special operators hain jo numbers ke individual bits (0 aur 1) ke saath kaam karte hain. Yeh operators binary level pe operations perform karte hain - bilkul waise jaise computer internally data ko process karta hai.

Socho computer ka brain kaise kaam karta hai - sab kuch 0 aur 1 mein convert hota hai. Jab tum number 5 likhte ho, computer dekhta hai 0101. Bitwise operators directly in bits ke saath khelte hain. Jaise light switch on/off hota hai (1/0), waise hi har bit on ya off ho sakta hai.

Real life example: Agar tumhare paas 8 switches hain aur tum decide karo ki kaun sa on karega, toh bitwise operators se tum efficiently manage kar sakte ho. Ya phir graphics mein colors ko combine karna, permissions set karna (read/write/execute), ya flags manage karna - sab jagah bitwise operators use hote hain.

---

## Why This Concept Exists

**Problem before this concept:**
- Individual bits ko manipulate karne ke liye complex code likhna padta tha
- Memory-efficient data storage mushkil tha
- Multiple boolean flags ko ek variable mein store nahi kar sakte the
- Low-level operations (graphics, networking, cryptography) implement karna complicated tha
- Performance-critical operations slow ho jate the

**Solution:**
- Bitwise operators directly binary level pe kaam karte hain
- Ek integer mein 32 boolean flags store kar sakte hain
- Graphics aur image processing mein colors efficiently manipulate kar sakte hain
- Network protocols aur file compression implement kar sakte hain
- CPU-level operations fast aur efficient ban jate hain

---

## Definitions

### 🔹 Very Simple Definition
Bitwise operators wo operators hain jo numbers ke 0 aur 1 bits ke saath directly kaam karte hain.

### 🔹 College Exam Definition
Bitwise operators are operators in Java that perform operations on individual bits of integer operands. The main bitwise operators are AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>), and unsigned right shift (>>>).

### 🔹 Viva Definition
Bitwise operators are operators that work at the binary level, manipulating individual bits of integer data types. They include logical bitwise operators (AND, OR, XOR, NOT) and shift operators (left shift, right shift, unsigned right shift). These operators are commonly used in low-level programming, graphics, cryptography, and performance-critical applications.

### 🔹 Interview Definition
Bitwise operators in Java perform operations on the binary representation of integers. The & operator performs AND operation (result bit is 1 only if both bits are 1), | performs OR (result is 1 if any bit is 1), ^ performs XOR (result is 1 if bits are different), ~ performs NOT (flips all bits), << shifts bits left, >> shifts right preserving sign, and >>> shifts right filling with zeros. These operators work with byte, short, int, long, and char types.

### 🔹 Technical Definition
Bitwise operators are low-level operators that manipulate data at the bit level by performing boolean algebra operations on corresponding bits of integer operands. They operate directly on the two's complement binary representation of integers in the JVM. The operators produce results by applying bitwise logic gates (AND, OR, XOR, NOT) or by shifting bit patterns left or right. Shift operators are implemented using CPU-level shift instructions, making them extremely fast operations suitable for optimization scenarios.

### 🔹 One-line Crisp Definition
Operators that manipulate individual bits of numbers using binary logic and shifting.

---

## Internal Working

```
JVM Level Working:

1. & (Bitwise AND):
   - Compares each bit of two operands
   - Result bit is 1 only if both bits are 1
   - Bytecode: iand (integer AND), land (long AND)
   - CPU instruction: AND operation

2. | (Bitwise OR):
   - Compares each bit of two operands
   - Result bit is 1 if any bit is 1
   - Bytecode: ior (integer OR), lor (long OR)
   - CPU instruction: OR operation

3. ^ (Bitwise XOR):
   - Compares each bit of two operands
   - Result bit is 1 if bits are different
   - Bytecode: ixor (integer XOR), lxor (long XOR)
   - CPU instruction: XOR operation

4. ~ (Bitwise NOT):
   - Flips all bits (1→0, 0→1)
   - Unary operator
   - Two's complement inversion
   - Result = -(n+1)

5. << (Left Shift):
   - Shifts bits left by n positions
   - Fills right side with 0s
   - Equivalent to multiplying by 2^n
   - Bytecode: ishl, lshl

6. >> (Signed Right Shift):
   - Shifts bits right by n positions
   - Preserves sign bit (sign extension)
   - Equivalent to dividing by 2^n
   - Bytecode: ishr, lshr

7. >>> (Unsigned Right Shift):
   - Shifts bits right by n positions
   - Fills left side with 0s (no sign extension)
   - Used for logical shifting
   - Bytecode: iushr, lushr
```

---

## DIAGRAM

```
┌─────────────────────────────────────────────────────┐
│              BITWISE OPERATORS                      │
└─────────────────────────────────────────────────────┘

1. BITWISE AND (&) - DONO 1 HONE CHAHIYE
   
   12:  0 0 0 0 1 1 0 0
    &
   10:  0 0 0 0 1 0 1 0
   ─────────────────────
    8:  0 0 0 0 1 0 0 0


2. BITWISE OR (|) - KOI EK 1 HO
   
   12:  0 0 0 0 1 1 0 0
    |
   10:  0 0 0 0 1 0 1 0
   ─────────────────────
   14:  0 0 0 0 1 1 1 0


3. BITWISE XOR (^) - ALAG HONE CHAHIYE
   
   12:  0 0 0 0 1 1 0 0
    ^
   10:  0 0 0 0 1 0 1 0
   ─────────────────────
    6:  0 0 0 0 0 1 1 0


4. BITWISE NOT (~) - SABKO ULTA KAR DO
   
    5:  0 0 0 0 0 1 0 1
    ~
   ─────────────────────
   -6:  1 1 1 1 1 0 1 0  (Two's complement)


5. LEFT SHIFT (<<) - LEFT MEIN SHIFT, RIGHT MEIN 0
   
    5:  0 0 0 0 0 1 0 1
   <<2
   ─────────────────────
   20:  0 0 0 1 0 1 0 0  (multiply by 4)


6. RIGHT SHIFT (>>) - RIGHT MEIN SHIFT, SIGN PRESERVE
   
   20:  0 0 0 1 0 1 0 0
   >>2
   ─────────────────────
    5:  0 0 0 0 0 1 0 1  (divide by 4)


7. UNSIGNED RIGHT SHIFT (>>>) - RIGHT MEIN SHIFT, 0 FILL
   
  -20:  1 1 1 0 1 1 0 0
  >>>2
   ─────────────────────
   59:  0 0 1 1 1 0 1 1  (no sign extension)


BIT MASKING EXAMPLE:
┌────────────────────────────────────────┐
│  Permissions: Read=4, Write=2, Exec=1 │
│  User has: 101 (Read + Exec = 5)      │
│                                        │
│  Check if Read permission:             │
│  permissions & 4                       │
│    101                                 │
│  & 100                                 │
│  ─────                                 │
│    100  (non-zero = has permission)    │
└────────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: File Permissions System

```
Linux mein file permissions bitwise operations se manage hote hain:

Read    = 4 (100 in binary)
Write   = 2 (010 in binary)
Execute = 1 (001 in binary)

Agar kisi file ko Read + Execute permission dena hai:
int permission = 4 | 1;  // 100 | 001 = 101 = 5
System.out.println(permission);  // 5

Check karna hai ki Read permission hai ya nahi:
boolean hasRead = (permission & 4) != 0;  // 101 & 100 = 100 (true)

Write permission add karna hai:
permission = permission | 2;  // 101 | 010 = 111 = 7

Execute permission remove karna hai:
permission = permission & ~1;  // 111 & 110 = 110 = 6

Yeh exactly waise hi kaam karta hai jaise chmod command Linux mein!
```

### Example 2: RGB Color Mixing

```
Computer graphics mein colors ko combine karne ke liye bitwise operators use hote hain.

Red component chahiye from color:
int color = 0xFF5733;  // Orange color
int red = (color >> 16) & 0xFF;  // Extract red: FF
System.out.println(red);  // 255

Green component extract karna:
int green = (color >> 8) & 0xFF;  // Extract green: 57
System.out.println(green);  // 87

Blue component extract karna:
int blue = color & 0xFF;  // Extract blue: 33
System.out.println(blue);  // 51

Naya color banana:
int newColor = (red << 16) | (green << 8) | blue;
System.out.println(Integer.toHexString(newColor));  // ff5733
```

---

## Syntax Explanation

```java
public class BitwiseDemo {
    public static void main(String[] args) {
        // Bitwise AND
        int a = 12;  // 1100 in binary
        int b = 10;  // 1010 in binary
        int resultAnd = a & b;  // 1000 = 8
        System.out.println("AND: " + resultAnd);
        
        // Bitwise OR
        int resultOr = a | b;  // 1110 = 14
        System.out.println("OR: " + resultOr);
        
        // Bitwise XOR
        int resultXor = a ^ b;  // 0110 = 6
        System.out.println("XOR: " + resultXor);
        
        // Bitwise NOT
        int c = 5;  // 00000101 in binary
        int resultNot = ~c;  // 11111010 = -6 (Two's complement)
        System.out.println("NOT: " + resultNot);
        
        // Left Shift
        int resultLeft = 5 << 2;  // 00010100 = 20 (5 * 4)
        System.out.println("Left Shift: " + resultLeft);
        
        // Right Shift
        int resultRight = 20 >> 2;  // 00000101 = 5 (20 / 4)
        System.out.println("Right Shift: " + resultRight);
        
        // Unsigned Right Shift
        int negative = -20;
        int resultUnsigned = negative >>> 2;
        System.out.println("Unsigned Right Shift: " + resultUnsigned);
        
        // Practical: Check even or odd
        int num = 15;
        boolean isOdd = (num & 1) == 1;
        System.out.println("Is Odd: " + isOdd);
        
        // Practical: Multiply by 8
        int multiply = num << 3;  // Left shift by 3 = multiply by 2^3 = 8
        System.out.println("Multiply by 8: " + multiply);
        
        // Practical: Divide by 4
        int divide = num >> 2;  // Right shift by 2 = divide by 2^2 = 4
        System.out.println("Divide by 4: " + divide);
    }
}
```

**Explanation:**
- Line 4-7: Bitwise AND operator dono numbers ke corresponding bits ko compare karta hai aur result bit 1 hoti hai jab dono bits 1 hon
- Line 10-11: Bitwise OR operator result bit 1 deta hai jab koi ek ya dono bits 1 hon
- Line 14-15: XOR operator result bit 1 deta hai jab bits alag hon (ek 0 aur ek 1)
- Line 18-20: NOT operator sabhi bits ko flip kar deta hai (0→1, 1→0) aur two's complement representation use karta hai
- Line 23-24: Left shift operator bits ko left mein shift karta hai aur right side ko 0 se fill karta hai, effectively 2^n se multiply kar deta hai
- Line 27-28: Signed right shift operator bits ko right mein shift karta hai aur sign bit preserve karta hai
- Line 31-33: Unsigned right shift operator sign bit ko ignore karke left side ko 0 se fill karta hai
- Line 36-38: Practical example: number & 1 se check kar sakte hain ki number odd hai ya even
- Line 41-43: Left shift se fast multiplication kar sakte hain
- Line 46-47: Right shift se fast division kar sakte hain

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         MEMORY LAYOUT FOR BITWISE OPERATIONS        │
└─────────────────────────────────────────────────────┘

INTEGER IN MEMORY (32 bits):
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │...│ 1 │ 0 │ 1 │  = 5
└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
 31  30  29  28  27  26  25  24  ... 2   1   0  ← Bit positions

TWO'S COMPLEMENT FOR NEGATIVE NUMBERS:
Positive: 5  = 00000000 00000000 00000000 00000101
Negative: -5 = 11111111 11111111 11111111 11111011

BITWISE AND OPERATION IN MEMORY:
     12 = 00000000 00000000 00000000 00001100
  &  10 = 00000000 00000000 00000000 00001010
  ─────────────────────────────────────────────
      8 = 00000000 00000000 00000000 00001000

LEFT SHIFT OPERATION:
Before: 5  = 00000000 00000000 00000000 00000101
After: 5<<2 = 00000000 00000000 00000000 00010100 = 20

MEMORY EFFICIENCY:
┌────────────────────────────────────┐
│  Without bitwise: 32 boolean vars │
│  = 32 bytes (1 byte per boolean)  │
│                                    │
│  With bitwise: 1 int variable     │
│  = 4 bytes (stores 32 flags)      │
│                                    │
│  Space saved: 87.5%                │
└────────────────────────────────────┘
```

---

## Advantages

✅ **Performance**: CPU-level operations hain, bahut fast execute hote hain  
✅ **Memory Efficiency**: Ek integer mein 32 boolean flags store kar sakte hain  
✅ **Low-level Control**: Graphics, networking, cryptography mein zaroori hain  
✅ **Fast Arithmetic**: Multiplication/division by powers of 2 bahut fast hota hai  
✅ **Bit Manipulation**: Individual bits ko efficiently control kar sakte hain  
✅ **Space Optimization**: Compact data structures bana sakte hain  
✅ **Hardware Integration**: Hardware registers aur protocols ke saath kaam karna easy hota hai  

---

## Limitations

❌ **Readability**: Code samajhna mushkil ho sakta hai beginners ke liye  
❌ **Portability Issues**: Different platforms pe different integer sizes ho sakte hain  
❌ **Sign Issues**: Signed aur unsigned integers ke saath confusion ho sakti hai  
❌ **Limited Use Cases**: Normal programming mein rarely use hote hain  
❌ **Debugging Difficulty**: Binary level pe debug karna challenging hai  
❌ **Type Restrictions**: Sirf integer types ke saath kaam karte hain, floating-point ke saath nahi  
❌ **Learning Curve**: Binary number system ki understanding zaroori hai  

---

## Edge Cases

🔸 **Edge case 1**: Overflow in left shift
```java
int x = Integer.MAX_VALUE;  // 2147483647
int result = x << 1;  // Overflow!
System.out.println(result);  // -2 (sign bit corrupted)

// Safe way: check before shifting
if (x <= (Integer.MAX_VALUE >> 1)) {
    result = x << 1;
}
```

🔸 **Edge case 2**: Shifting by negative or large amounts
```java
int x = 5;
int result1 = x << 32;  // Only lower 5 bits used (32 % 32 = 0)
System.out.println(result1);  // 5 (no change!)

int result2 = x << 33;  // 33 % 32 = 1
System.out.println(result2);  // 10 (shifted by 1)

int result3 = x << -1;  // Negative shifts undefined behavior
System.out.println(result3);  // Implementation dependent
```

🔸 **Edge case 3**: Sign extension in right shift
```java
int negative = -16;  // 11111111 11111111 11111111 11110000
int signed = negative >> 2;  // 11111111 11111111 11111111 11111100 = -4
int unsigned = negative >>> 2;  // 00111111 11111111 11111111 11111100 = 1073741820

System.out.println("Signed: " + signed);  // -4
System.out.println("Unsigned: " + unsigned);  // 1073741820
```

🔸 **Edge case 4**: XOR swap without temporary variable
```java
int a = 5, b = 10;
System.out.println("Before: a=" + a + ", b=" + b);

// Swap without temp variable using XOR
a = a ^ b;  // a = 5 ^ 10 = 15
b = a ^ b;  // b = 15 ^ 10 = 5
a = a ^ b;  // a = 15 ^ 5 = 10

System.out.println("After: a=" + a + ", b=" + b);

// Warning: Doesn't work if a and b refer to same variable!
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Confusing & with &&
```java
// Wrong way (using && for bitwise)
int flags = 5;
if (flags && 4) {  // Compile error! && expects boolean
    System.out.println("Has read permission");
}

// Right way
if ((flags & 4) != 0) {  // Bitwise AND for bit checking
    System.out.println("Has read permission");
}
```

🚫 **Mistake 2**: Not considering two's complement for NOT operator
```java
// Wrong assumption
int x = 5;
int result = ~x;
// Thinking: result = -5 (wrong!)
System.out.println(result);  // -6 (correct: -(x+1))

// Right understanding
// ~5 = -(5+1) = -6
// This is because of two's complement representation
```

🚫 **Mistake 3**: Using bitwise operators with floating-point
```java
// Wrong way
double a = 5.5;
double b = 3.2;
// double result = a & b;  // Compile error! Cannot use with double

// Right way
// Convert to int if needed
int result = (int)a & (int)b;  // Works but loses precision
```

🚫 **Mistake 4**: Forgetting operator precedence
```java
// Wrong way (confusing precedence)
int x = 5;
boolean result = x & 1 == 1;  // Wrong! == has higher precedence
// Evaluated as: x & (1 == 1) = x & true = compile error

// Right way
boolean result = (x & 1) == 1;  // Correct
```

🚫 **Mistake 5**: Assuming >> works same for all languages
```java
// In Java, >> is signed (arithmetic shift)
int x = -16;
int result = x >> 2;  // -4 (sign extended)

// Some languages like JavaScript handle differently
// In Java, use >>> for unsigned shift
int unsigned = x >>> 2;  // Large positive number
```

---

## Important Interview Points

💡 **Q: What is the difference between & and && operators?**  
**A**: & operator bitwise AND hai jo bits ko compare karta hai aur integers ke saath kaam karta hai, jabki && logical AND hai jo boolean values ke saath kaam karta hai. Example: `12 & 10 = 8` (bitwise: 1100 & 1010 = 1000), but `true && false = false` (logical). Bitwise & dono operands ko hamesha evaluate karta hai, jabki logical && short-circuit evaluation use karta hai. Interview mein yeh commonly confused operators hain.

💡 **Q: How can you check if a number is power of 2 using bitwise operators?**  
**A**: Agar number n power of 2 hai, toh uski binary representation mein sirf ek hi 1 bit hogi. Example: 8 = 1000, 16 = 10000. Power of 2 check karne ka trick: `(n & (n-1)) == 0 && n != 0`. Yeh kaam karta hai kyunki power of 2 mein ek hi bit set hoti hai, aur n-1 mein uske neeche ki sab bits set ho jati hain. Example: 8 = 1000, 7 = 0111, 8 & 7 = 0000. Yeh O(1) time complexity mein kaam karta hai.

💡 **Q: Explain the difference between >> and >>> operators.**  
**A**: >> signed (arithmetic) right shift hai jo sign bit ko preserve karta hai through sign extension. Negative numbers ke liye left side 1s se fill hoti hai. >>> unsigned (logical) right shift hai jo sign bit ko ignore karke left side ko hamesha 0s se fill karta hai. Example: `-16 >> 2 = -4` (sign preserved), but `-16 >>> 2 = 1073741820` (treated as unsigned). Unsigned shift graphics aur bit manipulation mein useful hai jahan sign ki zaroorat nahi hoti.

💡 **Q: How do bit masks work and why are they useful?**  
**A**: Bit mask ek integer hai jiska use specific bits ko set, clear, ya check karne ke liye hota hai. Example: permissions mein READ=4 (100), WRITE=2 (010), EXEC=1 (001). Set bit: `flags |= mask`, Clear bit: `flags &= ~mask`, Toggle bit: `flags ^= mask`, Check bit: `(flags & mask) != 0`. Bit masks memory-efficient hain kyunki ek integer mein 32 flags store kar sakte hain, aur operations bahut fast hain (single CPU instruction). Game development, graphics, aur system programming mein commonly use hote hain.

💡 **Q: Why is left shift equivalent to multiplication and right shift to division?**  
**A**: Binary number system mein har position 2 ki power represent karti hai. Jab bits ko left shift karte hain, har bit apni value ko 2 se multiply kar deti hai. Example: 5 (101) << 1 = 10 (1010), jo 5*2 = 10 hai. Similarly, right shift se division hota hai: 10 (1010) >> 1 = 5 (101), jo 10/2 = 5 hai. Yeh method arithmetic operators se bahut faster hai kyunki direct CPU instruction use hota hai. Lekin yeh sirf powers of 2 ke liye kaam karta hai: `n << k` = n * 2^k, `n >> k` = n / 2^k.

💡 **Q: What is XOR swap and when would you use it?**  
**A**: XOR swap ek technique hai do variables ko bina temporary variable ke swap karne ki: `a ^= b; b ^= a; a ^= b;`. Yeh kaam karta hai kyunki XOR operator commutative aur self-inverse hai (a ^ a = 0, a ^ 0 = a). Modern programming mein yeh generally discouraged hai kyunki: (1) readability poor hai, (2) compiler optimizations better hain, (3) same variable pe kaam nahi karta. Lekin low-memory embedded systems ya cryptography algorithms mein useful ho sakta hai. Interview mein bitwise operator understanding test karne ke liye puchha jata hai.

💡 **Q: How does two's complement work for representing negative numbers?**  
**A**: Two's complement ek method hai negative integers ko represent karne ka. Negative number banana ke liye: (1) positive number ka one's complement lo (sab bits flip karo), (2) result mein 1 add karo. Example: 5 = 00000101, ~5 = 11111010, ~5 + 1 = 11111011 = -5. NOT operator (~) bhi yahi use karta hai, isliye ~5 = -6 aata hai (-(5+1)). Two's complement ki advantage yeh hai ki addition/subtraction same circuit se ho sakta hai positive aur negative dono ke liye, aur sirf ek zero representation hai (no negative zero).

---

## Short Recap

Bitwise operators Java mein numbers ke individual bits ke saath kaam karte hain aur binary level pe operations perform karte hain. Main operators hain: & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (signed right shift), aur >>> (unsigned right shift). Yeh operators graphics, cryptography, permissions, aur low-level programming mein bahut useful hain. Left shift multiplication aur right shift division ke equivalent hai powers of 2 ke liye. Bit masking technique se efficiently flags aur permissions manage kar sakte hain. Interview mein bitwise tricks aur two's complement understanding frequently puchhi jati hai.

---

**Previous**: [← 47 - LOGICAL OPERATORS](./47-logical-operators.md)  
**Next**: [49 - ASSIGNMENT OPERATORS →](./49-assignment-operators.md)