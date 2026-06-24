# Java Generics

Generics allow you to write classes, interfaces, and methods that work with different data types, without having to specify the exact type in advance.

This makes your code more flexible, reusable, and type-safe.

## Why Use Generics?
- **Code Reusability**: Write one class or method that works with different data types.
- **Type Safety**: Catch type errors at compile time instead of runtime.
- **Cleaner Code**: No need for casting when retrieving objects.

## Generic Class Example

You can create a class that works with different data types using generics:

```java
class Box<T> {
  T value; // T is a placeholder for any data type

  void set(T value) {
    this.value = value;
  }

  T get() {
    return value;
  }
}

public class Main {
  public static void main(String[] args) {
    // Create a Box to hold a String
    Box<String> stringBox = new Box<>();
    stringBox.set("Hello");
    System.out.println("Value: " + stringBox.get());

    // Create a Box to hold an Integer
    Box<Integer> intBox = new Box<>();
    intBox.set(50);
    System.out.println("Value: " + intBox.get());
  }
}
```

> **Note:** `T` is a generic type parameter. It's like a placeholder for a data type. When you create a `Box<String>`, `T` becomes `String`. When you create a `Box<Integer>`, `T` becomes `Integer`.

## Generic Method Example

You can also create methods that work with any data type using generics:

```java
public class Main {
  // Generic method: works with any type T
  public static <T> void printArray(T[] array) {
    for (T item : array) {
      System.out.println(item);
    }
  }

  public static void main(String[] args) {
    String[] names = {"Jenny", "Liam"};
    Integer[] numbers = {1, 2, 3};

    // Call the generic method with both arrays
    printArray(names);
    printArray(numbers);
  }
}
```

## Bounded Types

You can use the `extends` keyword to limit the types a generic class or method can accept. For example, restricting it to a subclass of `Number`:

```java
class Stats<T extends Number> {
  T[] nums;

  Stats(T[] nums) {
    this.nums = nums;
  }

  double average() {
    double sum = 0;
    for (T num : nums) {
      sum += num.doubleValue();
    }
    return sum / nums.length;
  }
}
```

## Generic Collections

Java Collections like `ArrayList` and `HashMap` use generics internally:

```java
ArrayList<String> list = new ArrayList<>();
list.add("Apple");
String fruit = list.get(0); // No need to cast
```

---

## Important Interview Questions

**Q1: What are Generics in Java and why are they used?**

Generics allow you to write classes, interfaces, and methods that work with different data types without specifying the exact type in advance. They provide type safety at compile time and eliminate the need for error-prone explicit type casting.

**Q2: What is a bounded type parameter in Generics?**

A bounded type restricts the types that can be used as generic arguments. By using the `extends` keyword (e.g., `<T extends Number>`), you enforce that the generic type must be a subclass of a specific class or interface.
