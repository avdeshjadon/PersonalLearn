# WRAPPER AND UTILITY CLASSES

## Concept Introduction

Java puri tarah se (100%) Object-Oriented nahi hai, kyunki isme primitive types (`int`, `char`, `double`) hote hain jo objects nahi hote. In primitives ko "Object" banane ke liye hum **Wrapper Classes** ka use karte hain.
Aur dusri taraf, Java hume pehle se bane hue kuch smart classes deta hai jo math calculations ya system tasks easily kar de, inhe **Utility Classes** kehte hain.

> **Interview Definition:** Wrapper classes in Java provide a mechanism to convert primitive data types into objects and vice versa. Utility classes are helper classes that provide reusable static methods to perform common, everyday tasks like mathematical operations or system-level interactions.

### Quick Summary Table

| Concept/Class | Used For (Kab use karein?) | Example |
|---------------|----------------------------|---------|
| **Wrapper Classes** | Primitive data (jaise `int`) ko Object me badalne ke liye. | `Integer a = 10;` |
| **`Math` Class** | Calculations aur math formulas lagane ke liye. | `Math.max(5, 10)` |
| **`System` Class** | Screen par print karne ya system time nikalne ke liye. | `System.out.println()` |
| **`Object` Class** | Ye har Java class ki "Maa" (Superclass) hoti hai. | `.toString()`, `.equals()` |

---

## 1. Wrapper Classes

Java Collections (jaise `ArrayList`) sirf Objects ko support karte hain, primitives ko nahi. Isiliye hume `int` ko `Integer` banana padta hai.

| Primitive Type | Wrapper Class (Object) |
|----------------|-------------------------|
| `int` | `Integer` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |
| `byte` | `Byte` |
| `short` | `Short` |
| `long` | `Long` |
| `float` | `Float` |

---

## 2. Autoboxing and Unboxing

Ye dono concepts interview me kaafi pooche jate hain!

### A. Autoboxing (Primitive to Object)
> **Interview Definition:** Autoboxing is the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes.

- Jab hum direct ek number (primitive) ko object me daalte hain, aur Java usko khud se pack (box) kar deta hai.

```java
int a = 20;
Integer obj = a; // Java ne khud 'int' ko 'Integer' object bana diya (Autoboxing)
```

### B. Unboxing (Object to Primitive)
> **Interview Definition:** Unboxing is the reverse process of autoboxing. It is the automatic conversion of wrapper class objects back to their corresponding primitive data types.

- Jab object se waapas primitive value nikali jati hai.

```java
Integer obj = new Integer(50);
int a = obj; // Object se wapas primitive value nikal aayi (Unboxing)
```

---

## 3. Math Utility Class

`java.lang.Math` class me saare methods `static` hote hain, isliye inka object nahi banana padta.

```java
int highest = Math.max(10, 20); // Result: 20
double root = Math.sqrt(25);    // Result: 5.0
double power = Math.pow(2, 3);  // 2 ki power 3 = 8.0
```

---

## 4. System Utility Class

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

## 5. The `Object` Class (Root Class)

> **Interview Definition:** The `Object` class, present in the `java.lang` package, is the root of the class hierarchy. Every class in Java has `Object` as a superclass either directly or indirectly.

**Q: Why do we need the Object class in Java?**
Java is an object-oriented language, but it needs a standard root for all objects to ensure consistency. The `Object` class acts as a universal parent for every class we create. We need it for three main reasons:
1. **To Act as a Universal Root**: Without a common parent, there would be no way to group different objects together. The Object class allows us to create methods that can accept **any** type of object (Polymorphism).
2. **To Enable Generic Programming**: It allows us to create collections (like an array of Objects) that can store mixed data types (e.g., storing a String and an Integer in the same array).
3. **To Provide Common Functionality**: It guarantees that every object has essential methods like `toString()` (for text representation), `equals()` (for comparison), and `hashCode()` (for identification).

Agar aap koi class banate ho, toh wo by default `Object` class se judi hoti hai. Isiliye uske andar pehle se kuch methods aa jate hain. 
Basically, there are **12 methods** in the `Object` class, and they are listed below:

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

**Q1: Why do we need Wrapper classes in Java?**

We need Wrapper classes mainly for two reasons:
1. To use primitive data types in Java Collections Framework (like `ArrayList`, `HashMap`), which only stores objects.
2. They provide utility methods, like converting a String into an integer using `Integer.parseInt("123")`.

**Q2: What is Autoboxing and Unboxing?**

Autoboxing is the automatic conversion of a primitive data type into its corresponding Wrapper object (e.g., `int` to `Integer`). Unboxing is the reverse process, where the Wrapper object is automatically converted back into its primitive type.

**Q3: Is Java 100% Object-Oriented?**

No, Java is not 100% (pure) Object-Oriented because it supports primitive data types (`int`, `boolean`, `char`, etc.) which are not objects.

**Q4: Which class is the superclass of all classes in Java?**

The `java.lang.Object` class is the ultimate superclass (root class) of all classes in Java.

**Q5: Can you create an object of the `System` or `Math` class?**

No. Both `System` and `Math` classes have private constructors, preventing instantiation. We access their features through static variables and static methods (like `System.out` or `Math.max()`).
