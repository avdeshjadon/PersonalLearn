# MEMORY MANAGEMENT

## Concept Introduction

Java memory management automatic hota hai. JVM memory allocate karta hai aur garbage collector unused objects clean karta hai.

---

## Stack Memory

Stack method calls aur local variables ke liye use hota hai.

```java
void test() {
    int x = 10; // local variable, stack
}
```

Stack fast hota hai and method complete hone par data remove ho jaata hai.

---

## Heap Memory

Heap objects ke liye use hota hai.

```java
Student s = new Student();
```

`new Student()` object heap mein banta hai.

---

## References

Reference variable object ka address/reference hold karta hai.

```java
Student s = new Student();
```

`s` reference hai, object heap mein hai.

---

## Garbage Collection

Garbage collector unused objects ki memory free karta hai.

```java
s = null;
```

Ab object unreachable ho sakta hai and GC usko clean kar sakta hai.

---

## finalize() and JVM Shutdown

`finalize()` old cleanup method tha, but modern Java mein avoid/deprecated maana jaata hai.

JVM shutdown tab hota hai jab:

- main method complete ho jaye
- `System.exit()` call ho
- fatal error aaye

---

## Interview Questions

**Q1: Stack vs Heap?**

Stack stores method calls/local variables. Heap stores objects.

**Q2: What is garbage collection?**

Automatic process that removes unused objects from heap memory.

**Q3: Can we force garbage collection?**

No. We can request using `System.gc()`, but JVM decides.

