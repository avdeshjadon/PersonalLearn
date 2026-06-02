# PACKAGES, ACCESS MODIFIERS, CLASSPATH, STATIC

## Concept Introduction

Is file mein Java organization aur access related concepts combine hain:

- packages
- import
- access modifiers
- classpath
- static keyword
- static blocks

---

## Packages

Package related classes ko group karta hai.

```java
package com.example;
```

Benefits:

- code organization
- naming conflict avoid
- access control support

---

## Import

Import se dusre package ki class use karte hain.

```java
import java.util.Scanner;
```

---

## Access Modifiers

| Modifier | Access |
|----------|--------|
| `public` | everywhere |
| `protected` | same package + subclass |
| default | same package |
| `private` | same class only |

---

## Classpath

Classpath JVM/compiler ko batata hai classes kaha search karni hain.

Example:

```bash
java -cp . MyClass
```

---

## static Keyword

`static` member class se belong karta hai, object se nahi.

```java
class Counter {
    static int count = 0;
}
```

Access:

```java
Counter.count;
```

---

## Static Block

Static block class load hone par once execute hota hai.

```java
class Test {
    static {
        System.out.println("Class loaded");
    }
}
```

---

## Interview Questions

**Q1: What is package?**

Package is a group of related classes/interfaces.

**Q2: What is classpath?**

Classpath tells JVM where to find class files.

**Q3: What is static keyword?**

Static means member belongs to class, not object.

**Q4: When does static block execute?**

When class is loaded, before object creation.

