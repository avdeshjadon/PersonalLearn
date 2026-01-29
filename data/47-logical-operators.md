# 47) LOGICAL OPERATORS

## Concept Introduction

Logical operators Java mein wo special symbols hain jo boolean values (true/false) ke saath kaam karte hain. Yeh operators multiple conditions ko combine karke ek final decision dete hain - bilkul waise jaise real life mein hum multiple factors dekhkar decision lete hain.

Socho agar tumhe movie dekhne jaana hai. Tum decide karoge ki "Agar weekend hai **AUR** paas paisa hai, toh jaaenge." Yahan **AUR** ek logical operator hai. Ya phir "Agar rain ho rahi hai **YA** bahut thand hai, toh ghar pe rahenge." Yahan **YA** logical operator hai.

Java mein bhi hum aisi hi conditions check karte hain using **&&** (AND), **||** (OR), **!** (NOT) operators. Yeh operators humein complex decision-making logic implement karne mein madad karte hain.

---

## Why This Concept Exists

**Problem before this concept:**
- Multiple conditions ko separately check karna padta tha
- Complex decision logic ko implement karna mushkil tha
- Code bahut lengthy aur unreadable ho jata tha
- Nested if-else statements ki wajah se code maintain karna difficult tha
- Boolean logic ko efficiently express nahi kar sakte the

**Solution:**
- Logical operators multiple conditions ko ek line mein combine kar dete hain
- Code readable aur concise ban jata hai
- Complex boolean expressions ko easily represent kar sakte hain
- Short-circuit evaluation se performance improve hoti hai
- Decision-making logic clear aur maintainable ho jata hai

---

## Definitions

### 🔹 Very Simple Definition
Logical operators wo symbols hain jo true/false values ko combine karke ek final true/false answer dete hain.

### 🔹 College Exam Definition
Logical operators are binary operators in Java that perform logical operations on boolean operands and return a boolean result. The three main logical operators are AND (&&), OR (||), and NOT (!).

### 🔹 Viva Definition
Logical operators are special operators in Java that work with boolean expressions to perform logical operations such as conjunction (AND), disjunction (OR), and negation (NOT). They follow the principles of boolean algebra and support short-circuit evaluation for optimization.

### 🔹 Interview Definition
Logical operators in Java are operators that perform boolean logic operations on operands. The && (logical AND) operator returns true only if both operands are true, the || (logical OR) operator returns true if at least one operand is true, and the ! (logical NOT) operator inverts the boolean value. Java also provides non-short-circuit versions (&, |) that always evaluate both operands.

### 🔹 Technical Definition
Logical operators are binary and unary operators that implement boolean algebra operations in Java. They operate on boolean operands at the JVM bytecode level using conditional branch instructions. The short-circuit operators (&&, ||) use lazy evaluation, generating bytecode that skips the second operand evaluation when the result can be determined from the first operand alone, while non-short-circuit versions (&, |) always evaluate both operands before combining results.

### 🔹 One-line Crisp Definition
Operators that combine boolean values using AND, OR, and NOT logic.

---

## Internal Working

```
JVM Level Working:

1. && (Logical AND):
   - JVM checks left operand first
   - If false, immediately returns false (short-circuit)
   - If true, evaluates right operand
   - Returns result of right operand
   - Bytecode: ifeq (if equal to zero/false)

2. || (Logical OR):
   - JVM checks left operand first
   - If true, immediately returns true (short-circuit)
   - If false, evaluates right operand
   - Returns result of right operand
   - Bytecode: ifne (if not equal to zero/true)

3. ! (Logical NOT):
   - JVM flips the boolean bit
   - true → false, false → true
   - Single operand evaluation
   - Bytecode: ifeq/ifne with reversed logic

4. & and | (Non-short-circuit):
   - Always evaluate both operands
   - Perform bitwise operation on boolean values
   - Less efficient but useful for side effects
```

---

## DIAGRAM

```
┌─────────────────────────────────────────────────────┐
│              LOGICAL OPERATORS                      │
└─────────────────────────────────────────────────────┘

1. AND (&&) OPERATOR - DONO TRUE HONE CHAHIYE
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  true   │ && │  true   │ →  │   true   │
   └─────────┘    └─────────┘    └──────────┘
   
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  true   │ && │  false  │ →  │  false   │
   └─────────┘    └─────────┘    └──────────┘
   
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  false  │ && │  true   │ →  │  false   │
   └─────────┘    └─────────┘    └──────────┘
   
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  false  │ && │  false  │ →  │  false   │
   └─────────┘    └─────────┘    └──────────┘


2. OR (||) OPERATOR - KOI EK TRUE HO
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  true   │ || │  true   │ →  │   true   │
   └─────────┘    └─────────┘    └──────────┘
   
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  true   │ || │  false  │ →  │   true   │
   └─────────┘    └─────────┘    └──────────┘
   
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  false  │ || │  true   │ →  │   true   │
   └─────────┘    └─────────┘    └──────────┘
   
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  false  │ || │  false  │ →  │  false   │
   └─────────┘    └─────────┘    └──────────┘


3. NOT (!) OPERATOR - ULTA KAR DO
   ┌─────────┐         ┌──────────┐
   │  true   │    !    │  false   │
   └─────────┘    →    └──────────┘
   
   ┌─────────┐         ┌──────────┐
   │  false  │    !    │   true   │
   └─────────┘    →    └──────────┘


SHORT-CIRCUIT EVALUATION:
┌──────────────────────────────────────────┐
│  false  &&  [expression]                 │
│    ↓                                     │
│  false  (right side NOT evaluated)       │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  true   ||  [expression]                 │
│    ↓                                     │
│  true   (right side NOT evaluated)       │
└──────────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Movie Ticket Booking

```
Sonal movie dekhne jaana chahti hai. Uski conditions hain:

Condition 1: Weekend hona chahiye (isSaturday || isSunday)
Condition 2: Paisa hona chahiye (money >= ticketPrice)
Condition 3: Friend available hona chahiye (friendAvailable)

Final Decision:
if ((isSaturday || isSunday) && money >= ticketPrice && friendAvailable) {
    System.out.println("Chalo movie dekhte hain!");
}

Agar:
- Saturday hai (true)
- Money enough hai (true)  
- Friend available nahi hai (false)

Result: false (kyunki && operator mein sabhi true hone chahiye)
Movie nahi dekh payenge!
```

### Example 2: Online Shopping Discount

```
Amazon pe sale chal rahi hai:

Discount milegi agar:
- Cart value > 1000 YA Prime member ho
- AUR coupon code valid ho

boolean getDiscount = (cartValue > 1000 || isPrimeMember) && validCoupon;

Case 1:
cartValue = 800 (false)
isPrimeMember = true (true)
validCoupon = true (true)
Result: (false || true) && true = true && true = true ✓

Case 2:
cartValue = 1200 (true)
isPrimeMember = false (false)
validCoupon = false (false)
Result: (true || false) && false = true && false = false ✗
```

---

## Syntax Explanation

```java
public class LogicalOperatorsDemo {
    public static void main(String[] args) {
        // Variable declarations
        int age = 25;
        boolean hasLicense = true;
        boolean hasCar = false;
        int experience = 3;
        
        // 1. AND (&&) Operator - Dono conditions true honi chahiye
        boolean canDrive = (age >= 18) && hasLicense;
        System.out.println("Can drive: " + canDrive);  // true
        
        // 2. OR (||) Operator - Koi ek condition true ho
        boolean canTravel = hasCar || hasLicense;
        System.out.println("Can travel: " + canTravel);  // true
        
        // 3. NOT (!) Operator - Value ko reverse kar do
        boolean isMinor = !(age >= 18);
        System.out.println("Is minor: " + isMinor);  // false
        
        // 4. Complex Expression
        boolean canRentCar = (age >= 21) && hasLicense && (experience >= 2);
        System.out.println("Can rent car: " + canRentCar);  // true
        
        // 5. Short-circuit demonstration
        int x = 5;
        // Left side false, right side NOT evaluated
        boolean result = (x < 3) && (++x > 0);
        System.out.println("x = " + x);  // x = 5 (not incremented)
        
        // 6. Non-short-circuit & operator
        int y = 5;
        // Both sides evaluated
        boolean result2 = (y < 3) & (++y > 0);
        System.out.println("y = " + y);  // y = 6 (incremented)
        
        // 7. Combining multiple operators
        boolean eligible = ((age > 18 && age < 60) || experience > 5) && !isMinor;
        System.out.println("Eligible: " + eligible);  // true
    }
}
```

**Explanation:**
- Line 4-7: Variables declare kiye different conditions test karne ke liye
- Line 10: && operator check karta hai ki age >= 18 AND hasLicense dono true hain
- Line 14: || operator check karta hai ki hasCar YA hasLicense mein se koi ek true hai
- Line 18: ! operator age condition ko reverse kar deta hai
- Line 22: Multiple && operators ko chain karke complex condition banai
- Line 27: Short-circuit mein left side false hone par right side evaluate nahi hoti, isliye x increment nahi hua
- Line 32: Non-short-circuit & operator dono sides ko evaluate karta hai, isliye y increment ho gaya
- Line 36: Multiple operators combine karke complex eligibility check banaya

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         MEMORY LAYOUT                               │
└─────────────────────────────────────────────────────┘

STACK MEMORY:
┌──────────────────────────────────────┐
│  Method: main()                      │
├──────────────────────────────────────┤
│  age          : 25    (int - 4 bytes)│
│  hasLicense   : true  (boolean - 1)  │
│  hasCar       : false (boolean - 1)  │
│  experience   : 3     (int - 4 bytes)│
│  canDrive     : true  (boolean - 1)  │
│  canTravel    : true  (boolean - 1)  │
│  isMinor      : false (boolean - 1)  │
│  canRentCar   : true  (boolean - 1)  │
│  result       : false (boolean - 1)  │
│  result2      : false (boolean - 1)  │
│  eligible     : true  (boolean - 1)  │
└──────────────────────────────────────┘

BOOLEAN STORAGE:
┌────────────────────────────────────┐
│ In JVM, boolean internally:        │
│ true  → 1 (non-zero)              │
│ false → 0 (zero)                  │
│                                    │
│ But declared size is 1 byte       │
│ for memory alignment               │
└────────────────────────────────────┘

SHORT-CIRCUIT EVALUATION FLOW:
┌────────────────────────────────────┐
│ Expression: false && (++x > 0)     │
│                                    │
│ Step 1: Evaluate left (false)     │
│ Step 2: Short-circuit! Stop here  │
│ Step 3: Return false              │
│                                    │
│ x NOT incremented, saved CPU      │
└────────────────────────────────────┘
```

---

## Advantages

✅ **Code Readability**: Complex conditions ko ek line mein express kar sakte hain  
✅ **Short-circuit Optimization**: Unnecessary evaluations avoid hoti hain, performance improve hoti hai  
✅ **Boolean Logic**: Mathematical boolean algebra ko directly implement kar sakte hain  
✅ **Cleaner Code**: Multiple nested if-else statements ki zaroorat nahi padti  
✅ **Safety**: Short-circuiting se null pointer exceptions avoid kar sakte hain  
✅ **Flexibility**: Complex decision trees easily bana sakte hain  
✅ **Maintainability**: Logical expressions ko easily modify kar sakte hain  

---

## Limitations

❌ **Readability Issues**: Bahut lambi expressions confusing ho sakti hain  
❌ **Operator Precedence**: && aur || ka precedence yaad rakhna padta hai  
❌ **Side Effects**: Short-circuiting ki wajah se side effects skip ho sakte hain  
❌ **Only Boolean**: Sirf boolean values ke saath kaam karte hain, numbers ke saath nahi  
❌ **No Overloading**: Custom classes ke liye logical operators overload nahi kar sakte  
❌ **Type Safety**: Accidentally integers use karne par compile error nahi aati C/C++ ki tarah  
❌ **Debugging Difficulty**: Complex expressions ko debug karna mushkil ho sakta hai  

---

## Edge Cases

🔸 **Edge case 1**: Division by zero with short-circuit
```java
int x = 0;
// Safe: division nahi hoga kyunki left side false hai
boolean result = (x != 0) && (10 / x > 2);
System.out.println(result);  // false, no exception

// Unsafe: without short-circuit (using &)
// boolean result2 = (x != 0) & (10 / x > 2);  // ArithmeticException!
```

🔸 **Edge case 2**: Null pointer with short-circuit
```java
String str = null;
// Safe: str.length() call nahi hoga
boolean result = (str != null) && (str.length() > 0);
System.out.println(result);  // false, no NullPointerException

// Unsafe: agar order galat ho
// boolean result2 = (str.length() > 0) && (str != null);  // NullPointerException!
```

🔸 **Edge case 3**: Method calls with side effects
```java
int counter = 0;

public boolean incrementAndCheck() {
    counter++;
    return counter > 5;
}

// Short-circuit: method ek hi baar call hoga
boolean result = false && incrementAndCheck();
System.out.println(counter);  // 0 (method nahi chala)

// Non-short-circuit: method zaroor chalega
boolean result2 = false & incrementAndCheck();
System.out.println(counter);  // 1 (method chal gaya)
```

🔸 **Edge case 4**: Operator precedence confusion
```java
boolean a = true, b = false, c = true;

// Confusing without parentheses
boolean result1 = a || b && c;  // true (kyunki && pehle evaluate hota hai)
// Equivalent to: a || (b && c) = true || false = true

// Clear with parentheses
boolean result2 = (a || b) && c;  // true
// (true || false) && true = true && true = true
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Using = instead of ==
```java
// Wrong way
int x = 5;
if (x = 10) {  // Compile error! Cannot assign in condition
    System.out.println("Equal");
}

// Right way
if (x == 10) {  // Comparison operator
    System.out.println("Equal");
}
```

🚫 **Mistake 2**: Forgetting operator precedence
```java
// Wrong way (confusing)
boolean result = true || false && false;  // true (unexpected?)
// Evaluated as: true || (false && false)

// Right way (clear intention)
boolean result = (true || false) && false;  // false
boolean result2 = true || (false && false);  // true
```

🚫 **Mistake 3**: Expecting bitwise behavior with boolean
```java
// Wrong way
boolean a = true;
boolean b = false;
// boolean c = a + b;  // Compile error! Cannot use + with boolean

// Right way
boolean c = a || b;  // Use logical operator
```

🚫 **Mistake 4**: Not considering short-circuit behavior
```java
// Wrong way
int[] arr = null;
if (arr.length > 0 && arr != null) {  // NullPointerException!
    // Wrong order
}

// Right way
if (arr != null && arr.length > 0) {  // Safe
    // Check null first
}
```

🚫 **Mistake 5**: Using && and || with non-boolean
```java
// Wrong way (thinking like C/C++)
int x = 5;
// if (x && y) {  // Compile error! Need boolean expression

// Right way
if (x != 0 && y != 0) {  // Explicit comparison
    System.out.println("Both non-zero");
}
```

---

## Important Interview Points

💡 **Q: What is the difference between && and & operators?**  
**A**: && is a short-circuit logical AND operator jo right operand ko tab evaluate karta hai jab left operand true ho. & is a non-short-circuit bitwise AND operator jo dono operands ko hamesha evaluate karta hai, chahe result pehle hi determine ho jaye. Example: `false && (x++)` mein x increment nahi hoga, lekin `false & (x++)` mein x increment ho jayega. Short-circuit operators performance ke liye better hain aur null/division checks ke liye safer hain.

💡 **Q: Explain short-circuit evaluation with an example.**  
**A**: Short-circuit evaluation ek optimization technique hai jahan second operand ko tab hi evaluate kiya jata hai jab result first operand se determine nahi ho sakta. && operator mein, agar left operand false hai, toh right operand evaluate nahi hota kyunki result false hi hoga. || operator mein, agar left operand true hai, toh right operand evaluate nahi hota kyunki result true hi hoga. Example: `(x != 0) && (10/x > 2)` mein, agar x zero hai toh division kabhi execute nahi hoga, preventing ArithmeticException.

💡 **Q: What is the precedence of logical operators?**  
**A**: Logical operators ka precedence: ! (NOT) sabse highest, uske baad && (AND), aur sabse low || (OR). Isliye expression `!a && b || c` evaluate hoga as `((!a) && b) || c`. Relational operators (==, !=, <, >, <=, >=) ka precedence logical operators se higher hai, isliye `a > b && c < d` automatically as `(a > b) && (c < d)` evaluate hota hai. Confusion avoid karne ke liye parentheses use karna best practice hai.

💡 **Q: Can we use logical operators with non-boolean types in Java?**  
**A**: Nahi, Java mein logical operators (&&, ||, !) strictly boolean operands ke saath hi kaam karte hain. C/C++ ki tarah automatic type conversion nahi hoti jahan non-zero values true aur zero false ban jate hain. Agar integer use karna hai toh explicit comparison karna padega: `if (x != 0 && y != 0)` instead of `if (x && y)`. Yeh Java ki type safety feature hai jo runtime errors prevent karta hai.

💡 **Q: What happens when you use & and | with boolean operands?**  
**A**: Jab & aur | operators ko boolean operands ke saath use karte hain, toh yeh bitwise operators ki tarah kaam karte hain lekin result boolean hota hai. Main difference yeh hai ki yeh non-short-circuit hain - dono operands hamesha evaluate hote hain. Example: `(x > 5) & (y++)` mein y++ hamesha execute hoga, chahe x > 5 false hi kyun na ho. Normally logical operations ke liye && aur || preferred hain performance reasons ke liye, lekin jahan side effects zaroori hain wahan & aur | useful hain.

💡 **Q: How do you handle null safety with logical operators?**  
**A**: Null safety achieve karne ke liye short-circuit operators ka sahi order mein use karna zaroori hai. Null check ko hamesha pehle likho: `(obj != null && obj.method())` instead of `(obj.method() && obj != null)`. First case mein agar obj null hai toh method call nahi hoga (short-circuit), preventing NullPointerException. Yeh pattern especially useful hai jab multiple null checks aur method calls chain karni ho: `(str != null && !str.isEmpty() && str.length() > 5)`.

💡 **Q: What is De Morgan's Law in context of logical operators?**  
**A**: De Morgan's Law boolean expressions ko simplify karne ke liye use hoti hai. Iske do rules hain: (1) `!(A && B)` equivalent hai `!A || !B` ke, aur (2) `!(A || B)` equivalent hai `!A && !B` ke. Example: `!(age >= 18 && hasLicense)` ko likhte hain as `age < 18 || !hasLicense`. Interview mein complex boolean expressions ko simplify karne ke liye yeh concept frequently puchha jata hai aur code optimization mein useful hota hai.

---

## Short Recap

Logical operators (&&, ||, !) Java mein boolean values ko combine karne ke liye use hote hain complex decision-making logic implement karne ke liye. && operator dono conditions true hone par hi true return karta hai, || operator kisi ek condition ke true hone par true return karta hai, aur ! operator boolean value ko reverse kar deta hai. Short-circuit evaluation performance optimize karta hai aur null/division checks ko safe banata hai. Operator precedence yaad rakhna important hai aur parentheses use karke code readable banani chahiye.

---

**Previous**: [← 46 - RELATIONAL OPERATORS](./46-relational-operators.md)  
**Next**: [48 - BITWISE OPERATORS →](./48-bitwise-operators.md)