# STRINGS IN JAVA

## Concept Introduction

String characters ka sequence hota hai.

```java
String name = "Java";
```

---

## String is Immutable

String immutable hoti hai, matlab ek baar object ban gaya toh change nahi hota.

```java
String s = "Java";
s = s + " Language";
```

Yahan original `"Java"` change nahi hota; new String object banta hai.

---

## String Pool

String literals string pool mein store hote hain.

```java
String a = "Java";
String b = "Java";
```

`a` and `b` same pool object ko refer kar sakte hain.

---

## String Comparison

`==` references compare karta hai.

`equals()` content compare karta hai.

```java
String a = new String("Java");
String b = new String("Java");

System.out.println(a == b);      // false
System.out.println(a.equals(b)); // true
```

---

## StringBuilder vs StringBuffer

| StringBuilder | StringBuffer |
|---------------|--------------|
| Faster | Slower |
| Not synchronized | Synchronized |
| Not thread-safe | Thread-safe |

Use `StringBuilder` normally. Use `StringBuffer` when thread safety is needed.

---

## Interview Questions

**Q1: Why String is immutable?**

For security, caching, string pool, and thread safety.

**Q2: Difference between == and equals()?**

`==` compares reference. `equals()` compares content.

**Q3: StringBuilder vs StringBuffer?**

StringBuilder is faster but not thread-safe. StringBuffer is thread-safe but slower.

