# OPERATORS IN JAVA

## Concept Introduction

Java mein program likhte waqt hume variables aur values par calculations ya comparisons karne padte hain. Ye calculations karne ke liye hum jo symbols use karte hain, unhe **Operators** kehte hain.

> **Interview Definition:** Operators are special symbols in Java that perform specific operations on one, two, or three operands and then return a result.

```java
int c = a + b;
```
Here `+` is an operator, and `a` and `b` are operands.

---

## Types of Operators

Java mein alag-alag kaam ke liye alag operators hote hain. Main categories ye hain:

### Quick Summary Table

| Operator Type | Symbols | Used For |
|--------------|---------|----------|
| **Arithmetic** | `+`, `-`, `*`, `/`, `%` | Basic Math & Calculations |
| **Relational** | `==`, `!=`, `>`, `<`, `>=`, `<=` | Comparing two values |
| **Logical**    | `&&`, <code>&#124;&#124;</code>, `!` | Combining multiple conditions |
| **Assignment** | `=`, `+=`, `-=`, `*=`, `/=`, `%=` | Assigning values to variables |
| **Unary**      | `++`, `--` | Incrementing or Decrementing by 1 |
| **Ternary**    | `? :` | Short form of if-else statement |

---

### 1. Arithmetic Operators

> **Interview Definition:** Arithmetic operators are used to perform common mathematical operations like addition, subtraction, multiplication, and division.

- Yeh basic math karne ke kaam aate hain.
- `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division - returns quotient), `%` (Modulo - returns remainder).

```java
int a = 10, b = 3;
System.out.println(a / b); // Output: 3 (Quotient)
System.out.println(a % b); // Output: 1 (Remainder)
```

### 2. Relational (Comparison) Operators

> **Interview Definition:** Relational operators are used to check the relationship between two operands. They always return a boolean value (true or false).

- Do values ko compare karne ke liye use hote hain (kaun bada hai, kaun barabar hai).
- `==` (Equal to), `!=` (Not equal to), `>` (Greater than), `<` (Less than), `>=` (Greater than or equal to), `<=` (Less than or equal to).

```java
System.out.println(10 == 10); // Output: true
System.out.println(10 != 5);  // Output: true
System.out.println(10 < 5);   // Output: false
```

### 3. Logical Operators

> **Interview Definition:** Logical operators are used to combine multiple boolean expressions or conditions.

- Jab hume ek se zyada conditions ek sath check karni ho.
- `&&` (Logical AND): Agar dono condition true hain tabhi result true hoga.
- `||` (Logical OR): Agar dono me se ek bhi condition true hai toh result true hoga.
- `!` (Logical NOT): Condition ka ulta kar deta hai (true ko false, false ko true).

```java
int age = 20;
boolean hasID = true;

// Dono true honge tabhi entry milegi
System.out.println((age >= 18) && hasID); // Output: true
```

### 4. Assignment Operators

> **Interview Definition:** Assignment operators are used to assign values to variables.

- Kisi variable me value dalne (assign karne) ke liye use hota hai.
- `=` (Simple assignment), `+=`, `-=`, `*=`, `/=`, `%=` (Compound assignments).

```java
int x = 10;
x += 5; // Iska matlab hai: x = x + 5;
System.out.println(x); // Output: 15
```

### 5. Unary Operators

> **Interview Definition:** Unary operators require only a single operand to perform operations like incrementing, decrementing, or negating a value.

- Inko sirf ek (1) variable chahiye hota hai kaam karne ke liye.
- `++` (Increment by 1), `--` (Decrement by 1).
- **Pre-increment (`++a`):** Pehle value badhao, fir use karo.
- **Post-increment (`a++`):** Pehle value use karo, fir badhao.

```java
int a = 5;
System.out.println(a++); // Output: 5 (pehle print kiya, fir badhaya)
System.out.println(a);   // Output: 6
```

### 6. Ternary Operator

> **Interview Definition:** The ternary operator is a shorthand for an if-else statement. It takes three operands and evaluates a boolean expression to decide which value to assign.

- Ye akela operator hai jisme 3 parts hote hain.
- Syntax: `condition ? if_true_do_this : if_false_do_this;`

```java
int a = 10, b = 20;
int max = (a > b) ? a : b; // Agar a bada hai toh 'a' do, nahi toh 'b' do
System.out.println(max);   // Output: 20
```

---

## Operator Precedence

> **Interview Definition:** Operator precedence determines the order in which operators in an expression are evaluated.

- Jab ek hi line me bohot saare operators hon, toh kaunsa pehle chalega? Ye precedence decide karti hai (jaise math me BODMAS rule hota hai).
- Example: `*` aur `/` ki precedence `+` aur `-` se high hoti hai.

```java
int result = 10 + 5 * 2; 
System.out.println(result); // Output: 20 (Kyunki 5*2 pehle hua)
```
*(Tip: Hamesha brackets `()` use karo code ko clear rakhne ke liye: `int result = 10 + (5 * 2);`)*

---

## Interview Questions

**Q1: What are operators in Java?**

Operators are special symbols used to perform operations on variables and values. For example, `+` is an operator used for addition.

**Q2: What is the difference between `=` and `==`?**

`=` is an assignment operator used to assign a value to a variable (e.g., `int a = 10;`).
`==` is a relational operator used to compare two values to check if they are equal (e.g., `if (a == 10)`).

**Q3: What is a ternary operator?**

It is a shorthand for an `if-else` statement. It takes three operands: a condition, a value if true, and a value if false.
Syntax: `condition ? value1 : value2;`

**Q4: Explain the difference between `++i` (Pre-increment) and `i++` (Post-increment).**

`++i` increments the value first, and then uses the incremented value in the expression.
`i++` uses the current value in the expression first, and then increments the value.

**Q5: What is the `%` operator?**

The `%` (modulo) operator returns the remainder of a division operation. For example, `10 % 3` returns `1` because 10 divided by 3 leaves a remainder of 1.

**Q6: What is operator precedence?**

Operator precedence dictates the order in which operators are evaluated in an expression when multiple operators are present, similar to the BODMAS rule in mathematics.
