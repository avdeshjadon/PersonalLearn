# TYPE CONVERSION AND ENCODING

## Concept Introduction

Type conversion ka matlab ek data type ki value ko dusre data type mein convert karna.

Encoding ka matlab characters ko numbers/binary form mein represent karna.

---

## ASCII vs Unicode

| ASCII | Unicode |
|-------|---------|
| Mostly English characters | Almost all world languages |
| 7-bit standard | Larger character standard |
| Limited characters | Huge character range |

Java internally `char` ke liye Unicode use karta hai.

```java
char ch = 'A';
```

---

## Type Casting

Type casting two types ki hoti hai:

### Widening Casting

Small type to big type. Automatic hota hai.

```java
int x = 10;
double y = x;
```

### Narrowing Casting

Big type to small type. Manual cast required hota hai.

```java
double d = 10.5;
int x = (int) d;
```

Output value:

```text
10
```

Decimal part lose ho sakta hai.

---

## Type Promotion

Arithmetic operations mein small types promote ho sakte hain.

```java
byte a = 10;
byte b = 20;
int c = a + b;
```

`a + b` ka result `int` hota hai.

---

## Interview Questions

**Q1: What is type casting?**

Converting one data type into another data type.

**Q2: Difference between widening and narrowing?**

Widening is automatic small-to-large conversion. Narrowing is manual large-to-small conversion.

**Q3: Does Java use ASCII or Unicode?**

Java uses Unicode for characters.

