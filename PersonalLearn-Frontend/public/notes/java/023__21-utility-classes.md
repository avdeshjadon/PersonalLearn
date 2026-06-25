# UTILITY CLASSES

## Concept Introduction

Java hume pehle se bane hue kuch smart classes deta hai jo math calculations ya system tasks easily kar de, inhe **Utility Classes** kehte hain.

> **Interview Definition:** Utility classes are helper classes that provide reusable static methods to perform common, everyday tasks like mathematical operations or system-level interactions.

### Quick Summary Table

| Concept/Class | Used For (Kab use karein?) | Example |
|---------------|----------------------------|---------|
| **Math Class** | Calculations aur math formulas lagane ke liye. | `Math.max(5, 10)` |
| **System Class** | Screen par print karne ya system time nikalne ke liye. | `System.out.println()` |
| **Object Class** | Ye har Java class ki "Maa" (Superclass) hoti hai. | `.toString()`, `.equals()` |

---

## 1. Math Utility Class

`java.lang.Math` class me saare methods static hote hain, isliye inka object nahi banana padta.

```java
int highest = Math.max(10, 20); // Result: 20
double root = Math.sqrt(25);    // Result: 5.0
double power = Math.pow(2, 3);  // 2 ki power 3 = 8.0
```

---

## 2. System Utility Class

`java.lang.System` class system level ke operations ke liye use hoti hai. Iska constructor private hota hai, toh hum iska object `new System()` nahi bana sakte.

```java
// Screen par print karna
System.out.println("Hello");

// Current time (milliseconds me) nikalna (Performance check karne me kaam aata hai)
long startTime = System.currentTimeMillis();

// Program ko force-stop (terminate) karna
System.exit(0); // 0 means normal exit
```

---

## 3. The Object Class (Root Class)

> **Interview Definition:** The Object class, present in the `java.lang` package, is the root of the class hierarchy. Every class in Java has Object as a superclass either directly or indirectly.

**Q: Why do we need the Object class in Java?**
Java is an object-oriented language, but it needs a standard root for all objects to ensure consistency. The Object class acts as a universal parent for every class we create. We need it for three main reasons:
1. **To Act as a Universal Root**: Without a common parent, there would be no way to group different objects together. The Object class allows us to create methods that can accept **any** type of object (Polymorphism).
2. **To Enable Generic Programming**: It allows us to create collections (like an array of Objects) that can store mixed data types (e.g., storing a String and an Integer in the same array).
3. **To Provide Common Functionality**: It guarantees that every object has essential methods like `toString()` (for text representation), `equals()` (for comparison), and `hashCode()` (for identification).

Agar aap koi class banate ho, toh wo by default Object class se judi hoti hai. Isiliye uske andar pehle se kuch methods aa jate hain. 
Basically, there are **12 methods** in the Object class, and they are listed below:

| No. | Method Name                     | Return Type | What it does?                                      |
| :-- | :------------------------------ | :---------- | :------------------------------------------------- |
| 1.  | `toString()`                    | `String`    | Returns string representation of object.           |
| 2.  | `hashCode()`                    | `int`       | Returns unique integer (memory address based).     |
| 3.  | `equals(Object obj)`            | `boolean`   | Checks if two objects are same.                    |
| 4.  | `getClass()`                    | `Class<?>`  | Returns runtime class information.                 |
| 5.  | `finalize()`                    | `void`      | **[Deprecated]** Called before garbage collection. |
| 6.  | `clone()`                       | `Object`    | Creates a copy of the object.                      |
| 7.  | `wait()`                        | `void`      | Waits indefinitely for another thread.             |
| 8.  | `wait(long timeout)`            | `void`      | Waits for specific milliseconds.                   |
| 9.  | `wait(long timeout, int nanos)` | `void`      | Waits for specific duration (more precise).        |
| 10. | `notify()`                      | `void`      | Wakes up single waiting thread.                    |
| 11. | `notifyAll()`                   | `void`      | Wakes up all waiting threads.                      |
| 12. | `registerNatives()`             | `void`      | **[Internal]** Registers native methods with JVM.  |

---

## Interview Questions

**Q1: Which class is the superclass of all classes in Java?**

The `java.lang.Object` class is the ultimate superclass (root class) of all classes in Java.

**Q2: Can you create an object of the System or Math class?**

No. Both `System` and `Math` classes have private constructors, preventing instantiation. We access their features through static variables and static methods (like `System.out` or `Math.max()`).
