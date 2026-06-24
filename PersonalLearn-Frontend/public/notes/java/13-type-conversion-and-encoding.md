# TYPE CONVERSION AND ENCODING

## Concept Introduction

Jab hum program mein ek data type ki value ko kisi doosre data type ke variable mein assign karte hain, toh use **Type Conversion** ya **Type Casting** kehte hain. 

**Encoding** ka matlab hai characters (jaise 'A', 'a', '#') ko numbers ya binary form mein represent karna kyunki computer sirf 0 aur 1 samajhta hai.

---

## Type Casting

> **Interview Definition:** Type casting is the process of converting a value from one data type to another in Java. It can happen automatically by the compiler or manually by the programmer.

Java mein Type Casting mainly 2 tarah ki hoti hai:

### 1. Widening Casting (Implicit Casting)

> **Interview Definition:** Widening casting happens automatically when we assign a smaller primitive type to a larger primitive type. No data loss occurs in this process.

- **Small type to Big type** convert hota hai.
- Ye **automatically** (Implicitly) hota hai compiler ke dwara.
- Ise aap ek "chhote glass ka paani bade jug me dalna" samajh sakte hain—kabhi paani nahi girega (no data loss).
- **Flow:** byte -> short -> char -> int -> long -> float -> double

```java
int myInt = 10;
double myDouble = myInt; // Automatic casting: int to double

System.out.println(myInt);      // Outputs 10
System.out.println(myDouble);   // Outputs 10.0
```

### 2. Narrowing Casting (Explicit Casting)

> **Interview Definition:** Narrowing casting is manually done by the programmer when assigning a larger primitive type to a smaller primitive type. It may result in data loss.

- **Big type to Small type** convert hota hai.
- Ye automatically NAHI hota. Ise manually brackets () use karke karna padta hai.
- Ise aap "bade jug ka paani chhote glass me dalna" samajh sakte hain—agar paani jyada hua toh bahar gir jayega (data/precision loss).
- **Flow:** double -> float -> long -> int -> char -> short -> byte

```java
double myDouble = 9.78;
int myInt = (int) myDouble; // Manual casting: double to int

System.out.println(myDouble);   // Outputs 9.78
System.out.println(myInt);      // Outputs 9 (Decimal part is lost)
```

---

## Type Promotion in Expressions

> **Interview Definition:** Type promotion in Java is an automatic conversion mechanism where smaller data types like byte, short, or char are promoted to int when evaluating an arithmetic expression.

**Rules for Type Promotion:**
1. byte, short, aur char hamesha **int** me promote ho jate hain arithmetic operation ke time.
2. Agar expression mein ek operand long hai, toh pura result long me promote hoga.
3. Agar float hai, toh float me, aur double hai toh double me promote hoga.

```java
byte a = 40;
byte b = 50;
byte c = 100;
// int result = (a * b) / c; 
// Yahan a * b = 2000 hoga jo byte ki limit (-128 to 127) se bada hai!
// Par Java automatically inko evaluate karte time 'int' me promote kar deta hai.
int d = (a * b) / c; 
System.out.println(d); // Output: 20
```
*(Note: Agar aap byte result = a + b; likhoge toh error aayega kyunki a+b ka result int hota hai!)*

---

## Encoding: ASCII vs Unicode

Computer characters (jaise 'A', 'B', 'अ') ko directly save nahi kar sakta. Wo inhe ek number code (Encoding) me badalta hai.

| Feature | ASCII (American Standard Code) | Unicode |
|---------|--------------------------------|---------|
| **Meaning** | English language ke characters ke codes. | Duniya bhar ki languages (Hindi, Chinese, Emojis) ke codes. |
| **Size** | 7-bit ya 8-bit (1 byte). | 16-bit (2 bytes) in Java (UTF-16). |
| **Capacity**| Sirf 128 (ya 256) characters store karta hai. | Approx 65,536+ characters store kar sakta hai. |
| **Usage** | Purane languages jaise C / C++ me use hota tha. | Java me by default use hota hai taaki global support mile. |

**Example:** 
Character 'a' ki Unicode/ASCII value 97 hoti hai. 'A' ki 65 hoti hai.
```java
char ch = 'A';
int asciiVal = ch; // Automatically promoted from char to int
System.out.println(asciiVal); // Output: 65
```

---

## Interview Questions

**Q1: What is type casting in Java?**

Type casting is the process of converting a value of one data type into another data type. It can be Implicit (Widening) or Explicit (Narrowing).

**Q2: What is the difference between Widening and Narrowing casting?**

Widening is converting a smaller type to a larger type (e.g., int to double). It is automatic and safe. 
Narrowing is converting a larger type to a smaller type (e.g., double to int). It must be done explicitly by placing the target type in parentheses like (int), and it can lead to data loss (e.g., decimal values get truncated).

**Q3: Can we convert a boolean to an int?**

No. In Java, boolean is not compatible with any other primitive data type. You cannot cast a boolean to an int or vice versa.

**Q4: Why does byte b1 = 10; byte b2 = 20; byte b3 = b1 + b2; give a compile-time error?**

Because of Type Promotion. When we add two byte variables (b1 + b2), Java automatically promotes them to int before performing the addition. So the result is an int, and assigning an int back to a byte requires explicit casting like byte b3 = (byte)(b1 + b2);.

**Q5: Why does Java use Unicode system instead of ASCII?**

Java was designed to be a universal language. ASCII only supports English characters. Unicode supports characters from almost all languages in the world, allowing internationalization.
