# Java List (ArrayList & LinkedList)

The `List` interface is part of the Java Collections Framework and represents an **ordered** collection of elements.
- You can access elements by their index.
- You can add duplicates.
- It maintains the insertion order.

Since `List` is an interface, you cannot create a `List` object directly. Instead, you use a class that implements the `List` interface, such as `ArrayList` or `LinkedList`.

| Array | List |
|-------|------|
| Fixed size | Dynamic size |
| Faster performance for raw data | More flexible and feature-rich |
| Not part of Collections Framework | Part of the Collections Framework |

---

## 1. Java ArrayList

An `ArrayList` is like a resizable array. The difference between a built-in array and an `ArrayList` is that the size of an array cannot be modified. While elements can be added and removed from an `ArrayList` whenever you want.

### Create and Manage ArrayList
```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Note: You can use "var cars = new ArrayList<String>();" in Java 10+
    ArrayList<String> cars = new ArrayList<String>();
    
    // Add Elements
    cars.add("Volvo");
    cars.add("BMW");
    cars.add(0, "Mazda"); // Insert at beginning
    
    // Access an Element
    System.out.println(cars.get(0)); // Mazda
    
    // Change an Element
    cars.set(0, "Opel");
    
    // Remove an Element
    cars.remove(0);
    
    // ArrayList Size
    System.out.println(cars.size());
    
    // Clear all elements
    // cars.clear();
  }
}
```

### Loop Through an ArrayList
You can use a standard `for` loop or a `for-each` loop:

```java
for (String i : cars) {
  System.out.println(i);
}
```

### Using Primitive Types
Elements in an `ArrayList` must be **objects**. To use primitive types, you must use their equivalent Wrapper Class (e.g., `Integer`, `Boolean`, `Double`):

```java
ArrayList<Integer> myNumbers = new ArrayList<Integer>();
myNumbers.add(10);
```

---

## 2. Java LinkedList

The `LinkedList` class is almost identical to the `ArrayList` in how you use it, because both implement the `List` interface.

```java
import java.util.LinkedList;

LinkedList<String> cars = new LinkedList<String>();
cars.add("Volvo");
cars.add("BMW");
```

### ArrayList vs. LinkedList

They can be used in the same way, but they are built differently under the hood:

- **How ArrayList works:** It has a regular array inside it. When an element is added, it goes into the array. If the array is full, a new, larger array is created and the old one is replaced.
- **How LinkedList works:** It stores its elements in "containers" (nodes). The list has a link to the first container, and each container has a link to the next container in the list. To add an element, a new container is created and linked.

**When To Use:**
- Use an `ArrayList` for storing and accessing data (fast random access).
- Use a `LinkedList` to manipulate data (fast insert/delete at the ends).

### LinkedList Methods
`LinkedList` provides several specific methods to do operations efficiently at the ends of the list:
- `addFirst()` / `addLast()`
- `removeFirst()` / `removeLast()`
- `getFirst()` / `getLast()`

---

## 3. Sort a List

Another useful class in the `java.util` package is the `Collections` class, which includes the `sort()` method for sorting lists alphabetically or numerically.

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");

    // Sort alphabetically (Ascending)
    Collections.sort(cars);  

    // Sort in Reverse (Descending)
    Collections.sort(cars, Collections.reverseOrder());
  }
}
```

---

## Important Interview Questions

**Q1: What is the main difference between ArrayList and LinkedList?**
**Answer:** `ArrayList` uses a dynamic array to store elements, making index-based retrieval `get()` very fast (O(1)). `LinkedList` uses a doubly-linked list, making insertion and deletion `add()`/`remove()` faster (O(1) at the ends), but retrieval is slower (O(n)).

**Q2: Can we store primitive types in a List?**
**Answer:** No, collections can only store objects. To store primitives like `int` or `double`, you must use their Wrapper classes like `Integer` or `Double`.
