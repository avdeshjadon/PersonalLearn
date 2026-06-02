# WRAPPER AND UTILITY CLASSES

## Concept Introduction

Java mein primitive values ko object form mein handle karne ke liye wrapper classes hoti hain. Utility classes ready-made useful methods provide karti hain.

---

## Wrapper Classes

| Primitive | Wrapper |
|-----------|---------|
| `int` | `Integer` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |
| `byte` | `Byte` |
| `short` | `Short` |
| `long` | `Long` |
| `float` | `Float` |

Example:

```java
int x = 10;
Integer obj = x; // autoboxing
```

---

## Autoboxing and Unboxing

Autoboxing: primitive to object.

```java
Integer a = 10;
```

Unboxing: object to primitive.

```java
int b = a;
```

---

## Math Class

```java
Math.max(10, 20);
Math.sqrt(25);
Math.pow(2, 3);
```

---

## System Class

```java
System.out.println("Hello");
System.currentTimeMillis();
System.exit(0);
```

---

## Object Class

`Object` Java ki root class hai. Har class indirectly `Object` class inherit karti hai.

Common methods:

```java
toString()
equals()
hashCode()
getClass()
```

---

## Interview Questions

**Q1: What are wrapper classes?**

Wrapper classes convert primitive types into objects.

**Q2: What is autoboxing?**

Automatic conversion from primitive to wrapper object.

**Q3: What is Object class?**

Object is the parent class of all Java classes.

