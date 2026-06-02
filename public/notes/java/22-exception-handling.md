# EXCEPTION HANDLING

## Concept Introduction

Exception runtime problem hota hai jo program ke normal flow ko disturb karta hai.

Example:

```java
int x = 10 / 0; // ArithmeticException
```

---

## Error vs Exception

| Error | Exception |
|-------|-----------|
| Serious JVM/system problem | Program-level problem |
| Usually not handled | Can be handled |
| Example: `OutOfMemoryError` | Example: `ArithmeticException` |

---

## try-catch

```java
try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
```

---

## finally

`finally` block always execute hota hai, mostly cleanup ke liye.

```java
try {
    System.out.println("try");
} catch (Exception e) {
    System.out.println("catch");
} finally {
    System.out.println("finally");
}
```

---

## throw vs throws

| throw | throws |
|-------|--------|
| Exception manually throw karta hai | Method declaration mein exception declare karta hai |
| Used inside method | Used in method signature |

```java
throw new ArithmeticException("error");
```

```java
void readFile() throws IOException {
}
```

---

## Checked vs Unchecked

Checked exceptions compile time par handle/declare karni padti hain.

Unchecked exceptions runtime par aati hain.

---

## Interview Questions

**Q1: What is exception?**

Exception is an abnormal condition that interrupts program flow.

**Q2: What is finally block?**

It executes whether exception occurs or not.

**Q3: Difference between throw and throws?**

`throw` is used to throw exception. `throws` declares exception.

