# KEYWORDS, IDENTIFIERS, LITERALS

## Concept Introduction

Java code chhote-chhote parts se banta hai. In parts ko tokens bolte hain. Is file mein teen important tokens cover hain: **keywords**, **identifiers**, aur **literals**.

```text
int age = 20;

int  -> keyword
age  -> identifier
20   -> literal
```

---

## Keywords

> **Interview Definition:** Keywords are reserved words in Java that have a predefined meaning to the compiler. They cannot be used as names for variables, classes, or methods.

Keywords Java ke reserved words hote hain. Inka meaning Java language mein already fixed hota hai. Isliye inko hum apna khud ka naam dene ke liye use nahi kar sakte.

Examples:

```java
class, public, static, void, int, if, else, for, while, return, new
```

Rules:

- Keywords ko variable, class, ya method ka naam nahi bana sakte.
- Keywords hamesha lowercase (small letters) mein hote hain.
- `true`, `false`, `null` literals hain, technical terms me inhe keywords nahi maana jata.

Invalid Use:

```java
int class = 10; // Error: 'class' ek keyword hai
```

---

## Identifiers

> **Interview Definition:** Identifiers are the names assigned by the programmer to various program elements such as variables, classes, and methods.

Identifiers wo naam hote hain jo hum khud create karte hain apni coding me. Jaise variables ka naam, class ka naam, ya methods ka naam.

Examples:

```java
int age;
class Student {}
void display() {}
```

Rules:

- Sirf letters (A-Z, a-z), digits (0-9), underscore (`_`), aur dollar sign (`$`) allowed hain.
- Identifier ka naam kisi digit se start nahi ho sakta.
- Keyword ko identifier nahi bana sakte.
- Java case-sensitive hai (matlab `age` aur `Age` dono alag hain).

Valid:

```java
age
studentName
_count
$value
```

Invalid:

```java
1age         // Starts with a digit
class        // Keyword used as an identifier
student-name // Hyphen is not allowed
```

---

## Literals

> **Interview Definition:** Literals are constant values that are directly assigned to variables in the source code.

Literals fixed values hote hain jo hum directly apne code mein likhte hain assign karne ke liye.

Examples:

```java
10          // integer literal
10.5        // floating-point literal
'A'         // character literal
"Java"      // string literal
true        // boolean literal
null        // null literal
```

---

## Interview Questions

**Q1: What are keywords in Java?**

Keywords are reserved words that have a special, predefined meaning in Java. They cannot be used as identifiers.

**Q2: What are identifiers?**

Identifiers are names given by the programmer to elements like variables, classes, methods, and objects.

**Q3: What are literals?**

Literals are fixed, constant values that are written directly into the source code, like `10` or `"Hello"`.

**Q4: Can a keyword be used as a variable name?**

No. Using a keyword as an identifier will result in a compile-time error.

**Q5: Is `123name` a valid identifier?**

No, because an identifier cannot start with a digit in Java.

---

## Short Recap

```text
keyword    = reserved word
identifier = name
literal    = fixed value
```

