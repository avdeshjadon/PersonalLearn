# Java Algorithms & Iterators

Algorithms are used to solve problems by sorting, searching, and manipulating data structures. In Java, many useful algorithms are already built into the `Collections` class (found in the `java.util` package), so you don't have to write them from scratch.

---

## 1. Sorting Data

Sorting is one of the most common algorithms. You can use `Collections.sort()` to sort elements in ascending or descending order.

```java
import java.util.*;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<>();
    numbers.add(5);
    numbers.add(1);
    numbers.add(7);
    numbers.add(3);

    // Sort in ascending order
    Collections.sort(numbers);
    System.out.println(numbers); // [1, 3, 5, 7]

    // Sort in reverse (descending) order
    Collections.sort(numbers, Collections.reverseOrder());
    System.out.println(numbers); // [7, 5, 3, 1]
  }
}
```

---

## 2. Searching Data

To find elements in a list, Java provides helper methods. The most common is `Collections.binarySearch()`, which searches in a **sorted** list.

```java
import java.util.*;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> names = new ArrayList<>();
    names.add("Liam");
    names.add("Jenny");
    names.add("Kasper");
    names.add("Angie");

    Collections.sort(names); // List MUST be sorted first for binary search
    int index = Collections.binarySearch(names, "Angie");
    
    System.out.println("Angie is at index: " + index);
  }
}
```

---

## 3. Iterating and Modifying (Iterators)

An **Iterator** is an object that can be used to loop through collections (like `ArrayList` and `HashSet`). While you can use a `for-each` loop to simply read data, Iterators are powerful because they allow you to **remove** items safely while looping.

```java
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(12);
    numbers.add(8);
    numbers.add(2);
    numbers.add(23);
    
    // Get the iterator
    Iterator<Integer> it = numbers.iterator();
    
    // Loop through the collection
    while(it.hasNext()) {
      Integer i = it.next();
      if(i < 10) {
        it.remove(); // Safely remove items while looping
      }
    }
    System.out.println(numbers); // [12, 23]
  }
}
```

> **Warning:** Trying to remove items using a standard `for` loop or `for-each` loop can cause a `ConcurrentModificationException` because the collection changes size while the code is trying to loop. Always use an `Iterator` for this!

---

## 4. Other Useful Algorithms

The `Collections` class contains many more utility algorithms to make your programming life easier:

- `Collections.max()` - Find the largest element
- `Collections.min()` - Find the smallest element
- `Collections.shuffle()` - Randomly shuffle elements
- `Collections.frequency()` - Count how many times an element appears
- `Collections.swap()` - Swap two elements in a list

### Example Usage:
```java
import java.util.*;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> fruits = new ArrayList<>();
    fruits.add("Apple");
    fruits.add("Banana");
    fruits.add("Orange");
    fruits.add("Banana");
    fruits.add("Mango");

    // Frequency
    int count = Collections.frequency(fruits, "Banana");
    System.out.println("Banana appears: " + count + " times");

    // Swap
    Collections.swap(fruits, 0, 2); // Swaps Apple and Orange
    
    // Shuffle
    Collections.shuffle(fruits);
  }
}
```

---

## 5. Quick Reference: Collections & Iterator Methods

### Collections Class Methods
The `Collections` class (in `java.util`) contains several useful methods for working with collections like `ArrayList`, `HashSet`, and `HashMap`.

| Method | Description | Return Type |
|--------|-------------|-------------|
| `sort()` | Sorts the list in ascending order (according to natural ordering) | `void` |
| `binarySearch()` | Searches for a key in a sorted list and returns its index (otherwise < 0) | `int` |
| `reverse()` | Reverses the order of elements in a list | `void` |
| `reverseOrder()` | Returns a comparator that imposes the reverse of natural ordering | `Comparator` |
| `shuffle()` | Randomly permutes the elements of a list | `void` |
| `swap()` | Swaps the elements at the specified positions in a list | `void` |
| `frequency()` | Returns the number of elements equal to the specified object | `int` |
| `max()` | Returns the maximum element of a collection | `T` |
| `min()` | Returns the minimum element of a collection | `T` |
| `disjoint()` | Checks if two collections have no elements in common | `boolean` |
| `copy()` | Copies all elements from one list into another | `void` |
| `fill()` | Replaces all elements of the list with the specified object | `void` |
| `replaceAll()` | Replaces all occurrences of one value with another in a list | `boolean` |
| `unmodifiableList()` | Returns an unmodifiable (read-only) view of the specified list | `List` |
| `unmodifiableSet()` | Returns an unmodifiable (read-only) view of the specified set | `Set` |
| `unmodifiableMap()` | Returns an unmodifiable (read-only) view of the specified map | `Map` |

### Iterator Interface Methods
The `Iterator` interface provides methods to access and iterate through collections:

| Method | Description | Return Type |
|--------|-------------|-------------|
| `hasNext()` | Returns `true` if there are more elements in the iteration | `boolean` |
| `next()` | Returns the next element in the iteration | `T` |
| `remove()` | Removes the last element returned by `next()` | `void` |

> **Note:** The `next()` method uses the type of the iterator's items as its return value. This type is referred to as `T` in the table.

---

## Important Interview Questions

**Q1: What is the difference between a for-each loop and an Iterator?**
**Answer:** A `for-each` loop is simpler to read and write but it only allows reading elements. An `Iterator` provides the `remove()` method, allowing you to safely delete elements from the collection while iterating over it without throwing a `ConcurrentModificationException`.

**Q2: Why must a collection be sorted before using Collections.binarySearch()?**
**Answer:** Binary search works by repeatedly dividing the search interval in half. This logic requires the elements to be in order; otherwise, the algorithm cannot determine which half of the interval to search next.
