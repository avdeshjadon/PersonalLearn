# Java Wrapper Classes

Java puri tarah se (100%) Object-Oriented nahi hai, kyunki isme primitive types (`int`, `char`, `double`, etc.) hote hain jo objects nahi hote. In primitives ko "Object" banane ke liye hum **Wrapper Classes** ka use karte hain.

> **Interview Definition:** Wrapper classes in Java provide a mechanism to convert primitive data types into objects and vice versa.

The table below shows the primitive type and the equivalent wrapper class:

| Primitive Data Type | Wrapper Class |
| :--- | :--- |
| `byte` | `Byte` |
| `short` | `Short` |
| `int` | `Integer` |
| `long` | `Long` |
| `float` | `Float` |
| `double` | `Double` |
| `boolean` | `Boolean` |
| `char` | `Character` |

Sometimes you must use wrapper classes, for example when working with Collection objects, such as `ArrayList`, where primitive types cannot be used (the list can only store objects):

```java
ArrayList<int> myNumbers = new ArrayList<int>(); // Invalid
ArrayList<Integer> myNumbers = new ArrayList<Integer>(); // Valid
```

## Creating Wrapper Objects

To create a wrapper object, use the wrapper class instead of the primitive type. To get the value, you can just print the object:

```java
public class Main {
  public static void main(String[] args) {
    Integer myInt = 5;
    Double myDouble = 5.99;
    Character myChar = 'A';
    
    System.out.println(myInt);
    System.out.println(myDouble);
    System.out.println(myChar);
  }
}
```

---

## Autoboxing and Unboxing

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

## Useful Methods

Since you're now working with objects, you can use certain methods to get information about the specific object.

For example, the following methods are used to get the value associated with the corresponding wrapper object: `intValue()`, `byteValue()`, `shortValue()`, `longValue()`, `floatValue()`, `doubleValue()`, `charValue()`, `booleanValue()`.

```java
public class Main {
  public static void main(String[] args) {
    Integer myInt = 5;
    Double myDouble = 5.99;
    Character myChar = 'A';
    
    System.out.println(myInt.intValue());
    System.out.println(myDouble.doubleValue());
    System.out.println(myChar.charValue());
  }
}
```

Another useful method is the `toString()` method, which is used to convert wrapper objects to strings.

In the following example, we convert an `Integer` to a `String`, and use the `length()` method of the `String` class to output the length of the "string":

```java
public class Main {
  public static void main(String[] args) {
    Integer myInt = 100;
    String myString = myInt.toString();
    System.out.println(myString.length());
  }
}
```

---

## Important Interview Questions

**Q1: Why do we need Wrapper classes in Java?**

We need Wrapper classes mainly for two reasons:
1. To use primitive data types in Java Collections Framework (like `ArrayList`, `HashMap`), which only stores objects.
2. They provide utility methods, like converting a String into an integer using `Integer.parseInt("123")`.

**Q2: What is Autoboxing and Unboxing?**

Autoboxing is the automatic conversion of a primitive data type into its corresponding Wrapper object (e.g., `int` to `Integer`). Unboxing is the reverse process, where the Wrapper object is automatically converted back into its primitive type.

**Q3: Is Java 100% Object-Oriented?**

No, Java is not 100% (pure) Object-Oriented because it supports primitive data types (`int`, `boolean`, `char`, etc.) which are not objects.
