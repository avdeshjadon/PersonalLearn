# Wrapper Classes in Java

A **Wrapper Class** is a class whose object wraps or contains a primitive data type.

### Simply Put:

Think of a **Wrapper Class** as a **"Container"** or a **"Box"** that holds a primitive value inside it. It wraps the raw data (primitive) so it can be treated like an object.

### Real-Life Example (Gift Wrapping)

- **Primitive Value**: Imagine a raw **Chocolate** bar. It is just the item itself (data).
- **Wrapper Object**: Now imagine putting that chocolate inside a **Gift Box**. The box "wraps" the chocolate.
  - You can now give this "Gift Box" to someone who only accepts gifts (like how `ArrayList` only accepts Objects).
  - The chocolate inside is still the same, but now it has an outer cover (Object) that gives it more features.

### Technical Definition

A **Wrapper Class** in Java is a class that provides a mechanism to convert primitive data types into objects and vice versa. It belongs to the `java.lang` package and provides utility methods to inspect and modify the wrapped value.

## Why Do We Need Wrapper Classes? (Advantages)

1.  **Collection Framework**: Java Collections (like `ArrayList`, `LinkedList`, `Vector`) store only **objects** (reference types), not primitive types.
2.  **Serialization**: To perform serialization, we need to convert objects into streams. If we have a primitive value, we must convert it to an object through wrapper classes.
3.  **Synchronization**: Java synchronization works on objects (locks are taken on objects). Primitive types cannot participate in synchronization.
4.  **Utility Methods**: Wrapper classes provide many utility methods (like `Integer.parseInt()`, `Double.toString()`) to convert between types and strings.

---

## List of Wrapper Classes

All wrapper classes are present in the `java.lang` package.

| Primitive Type | Wrapper Class |
| :------------- | :------------ |
| `byte`         | `Byte`        |
| `short`        | `Short`       |
| `int`          | `Integer`     |
| `long`         | `Long`        |
| `float`        | `Float`       |
| `double`       | `Double`      |
| `char`         | `Character`   |
| `boolean`      | `Boolean`     |

---

## Boxing and Unboxing

### 1. Boxing (Primitive → Object)

Conversion of a primitive type to its corresponding wrapper class object is known as **Boxing**.

- **Manual Boxing** (Before Java 5):
  ```java
  int a = 10;
  Integer i = new Integer(a); // Manual conversion
  // OR
  Integer j = Integer.valueOf(a); // Better way
  ```
- **AutoBoxing** (Java 5+):
  Automatic conversion of primitive type to the object of their corresponding wrapper class.
  ```java
  int a = 10;
  Integer i = a; // Compiler automatically writes Integer.valueOf(a)
  ```

### 2. Unboxing (Object → Primitive)

Conversion of an object of a wrapper class to its corresponding primitive type is known as **Unboxing**.

- **Manual Unboxing** (Before Java 5):
  ```java
  Integer i = new Integer(10);
  int a = i.intValue(); // Converting Integer to int explicitly
  ```
- **AutoUnboxing** (Java 5+):
  Automatic conversion of wrapper class object to primitive type.
  ```java
  Integer i = new Integer(10);
  int a = i; // Compiler automatically writes i.intValue()
  ```

---

## Code Example: Boxing & Unboxing

```java
public class WrapperDemo {
    public static void main(String[] args) {
        // --- BOXING ---
        int num = 100;

        // Manual Boxing
        Integer obj1 = Integer.valueOf(num);

        // AutoBoxing
        Integer obj2 = num;

        System.out.println("Boxing: " + obj1 + " " + obj2);

        // --- UNBOXING ---
        Integer wrapperObj = new Integer(200);

        // Manual Unboxing
        int val1 = wrapperObj.intValue();

        // AutoUnboxing
        int val2 = wrapperObj;

        System.out.println("Unboxing: " + val1 + " " + val2);
    }
}
```

> **Note**: While AutoBoxing/Unboxing makes code cleaner, be careful of `NullPointerException`. If a wrapper object is `null`, trying to auto-unbox it into a primitive will throw an exception.
