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

Keywords Java ke reserved words hote hain. Inka meaning Java language mein already fixed hota hai.

Examples:

```java
class, public, static, void, int, if, else, for, while, return, new
```

Rules:

- Keywords ko variable/class/method name nahi bana sakte.
- Keywords lowercase hote hain.
- `true`, `false`, `null` literals hain, keywords nahi.

Invalid:

```java
int class = 10;
```

---

## Identifiers

Identifiers names hote hain jo hum variables, classes, methods ko dete hain.

Examples:

```java
int age;
class Student {}
void display() {}
```

Rules:

- Letters, digits, `_`, `$` allowed hain.
- Digit se start nahi kar sakte.
- Keyword identifier nahi ban sakta.
- Java case-sensitive hai.

Valid:

```java
age
studentName
_count
$value
```

Invalid:

```java
1age
class
student-name
```

---

## Literals

Literals fixed values hote hain jo direct code mein likhe jaate hain.

Examples:

```java
10          // integer literal
10.5        // floating literal
'A'         // character literal
"Java"      // string literal
true        // boolean literal
null        // null literal
```

---

## Interview Questions

**Q1: What are keywords in Java?**

Keywords are reserved words whose meaning is fixed in Java.

**Q2: What are identifiers?**

Identifiers are names given to variables, classes, methods, and objects.

**Q3: What are literals?**

Literals are fixed values written directly in code.

**Q4: Can keyword be used as variable name?**

No.

---

## Short Recap

```text
keyword    = reserved word
identifier = name
literal    = fixed value
```

