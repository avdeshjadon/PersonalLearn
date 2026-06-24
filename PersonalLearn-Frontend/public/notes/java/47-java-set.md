# Java Set (HashSet & TreeSet)

The `Set` interface is part of the Java Collections Framework and is used to store a collection of **unique** elements.
Unlike a `List`, a `Set`:
- Does **not** allow duplicates.
- Does **not** preserve the order of elements (unless using `TreeSet` or `LinkedHashSet`).
- Does **not** provide index-based access (`get()`).

---

## 1. Java HashSet

A `HashSet` is a collection of elements where every element is unique, and there is no guaranteed order.

### Create and Manage HashSet
```java
import java.util.HashSet;

public class Main {
  public static void main(String[] args) {
    // Note: You can use "var cars = new HashSet<String>();" in Java 10+
    HashSet<String> cars = new HashSet<String>();
    
    // Add Elements
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("BMW");  // Duplicate, will be ignored!
    
    System.out.println(cars); // Output order is unpredictable
    
    // Check if element exists
    System.out.println(cars.contains("Mazda")); // false
    
    // Remove an Element
    cars.remove("Volvo");
    
    // HashSet Size (Duplicate values are not counted)
    System.out.println(cars.size());
  }
}
```

### Loop Through a HashSet
```java
for (String car : cars) {
  System.out.println(car);
}
```

---

## 2. Java TreeSet

A `TreeSet` is a collection that stores unique elements in **sorted (natural) order**.

> **Tip:** Unlike `HashSet`, which has no order, `TreeSet` keeps its elements sorted automatically from smallest to largest (or alphabetically).

```java
import java.util.TreeSet;

public class Main {
  public static void main(String[] args) {
    TreeSet<Integer> numbers = new TreeSet<>();
    numbers.add(40);
    numbers.add(10);
    numbers.add(30);
    numbers.add(20);

    for (int n : numbers) {
      System.out.println(n);
    }
  }
}
// Output will be automatically sorted: 10, 20, 30, 40
```

---

## 3. Java LinkedHashSet

A `LinkedHashSet` is a collection that stores unique elements and **remembers the order they were added** (insertion order).

> **Tip:** Use `LinkedHashSet` when you want a set that does not allow duplicates but you still need to keep the original insertion order.

```java
import java.util.LinkedHashSet;

public class Main {
  public static void main(String[] args) {
    LinkedHashSet<String> cars = new LinkedHashSet<>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("BMW");  // Duplicate ignored

    System.out.println(cars);
  }
}
// Output order exactly matches insertion: [Volvo, BMW, Ford]
```

---

## 4. HashSet vs TreeSet vs LinkedHashSet

| Feature | HashSet | LinkedHashSet | TreeSet |
|---------|---------|---------------|---------|
| **Order** | No guaranteed order | Insertion order preserved | Sorted (natural order) |
| **Duplicates**| Not allowed | Not allowed | Not allowed |
| **Performance**| **Fastest** | Slightly slower (due to order tracking) | **Slowest** (due to sorting) |

> **Tip:** Use `HashSet` when you only care about uniqueness and speed. Use `LinkedHashSet` when insertion order matters. Use `TreeSet` when you need sorted elements.

---

## Important Interview Questions

**Q1: Why doesn't a Set allow duplicate elements?**
**Answer:** The `Set` interface models the mathematical set abstraction, which by definition only contains unique elements. When you try to add a duplicate, the `add()` method returns `false` and the element is simply ignored.

**Q2: Can we add a null value to a TreeSet?**
**Answer:** No. Adding a `null` value to a `TreeSet` will throw a `NullPointerException` because it uses the `compareTo()` method to sort elements, and comparing a `null` value is impossible. However, a `HashSet` allows exactly one `null` value.
