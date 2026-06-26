# Java Collections Framework & Data Structures

Data structures are ways to store and organize data so you can use it efficiently.
An array is an example of a data structure, which allows multiple elements to be stored in a single variable.

Java includes many other data structures as well, in the `java.util` package. Each is used to handle data in different ways.

> **Tip:** Data structures are like supercharged arrays - more flexible and feature-rich!

---

## 1. The Collections Framework

Before we explore specific data structures in more detail, it's important to understand that all of these are part of something bigger - the **Java Collections Framework**.

The Java Collections Framework provides a set of **interfaces** (like `List`, `Set`, and `Map`) and a set of **classes** (`ArrayList`, `HashSet`, `HashMap`, etc.) that implement those interfaces.

- All of these are part of the `java.util` package.
- They are used to store, search, sort, and organize data more easily - all using standardized methods and patterns.

> **Tip:** Think of the Collections Framework as a toolbox. Interfaces like `List` define what tools can do, and classes like `ArrayList` are the actual tools that do the work.

### Core Interfaces in the Collections Framework

| Interface | Common Classes | Description |
|-----------|----------------|-------------|
| **List** | `ArrayList`, `LinkedList` | Ordered collection that allows duplicates |
| **Set** | `HashSet`, `TreeSet`, `LinkedHashSet` | Collection of unique elements |
| **Map** | `HashMap`, `TreeMap`, `LinkedHashMap` | Stores key-value pairs with unique keys |

### Overview of Classes

| Interface | Class | Description |
|-----------|-------|-------------|
| **List** | `ArrayList` | Resizable array that maintains order and allows duplicates |
| **List** | `LinkedList` | List with fast insert and remove operations |
| **Set** | `HashSet` | Unordered collection of unique elements |
| **Set** | `TreeSet` | Sorted set of unique elements (natural order) |
| **Set** | `LinkedHashSet` | Maintains the order in which elements were inserted |
| **Map** | `HashMap` | Stores key/value pairs with no specific order |
| **Map** | `TreeMap` | Sorted map based on the natural order of keys |
| **Map** | `LinkedHashMap` | Maintains the order in which keys were inserted |

**When to use what:**
- Use **List** classes when you care about order, you may have duplicates, and want to access elements by index.
- Use **Set** classes when you need to store unique values only.
- Use **Map** classes when you need to store pairs of keys and values, like a name and its phone number.

---

## 2. Quick Introduction to Common Classes

### ArrayList
An `ArrayList` is a resizable array that can grow as needed. It allows you to store elements and access them by index.
```java
import java.util.ArrayList;

ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
```

### HashSet
A `HashSet` is a collection where every element is unique - no duplicates are allowed.
```java
import java.util.HashSet;

HashSet<String> cars = new HashSet<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("BMW");  // Duplicate, will be ignored
```

### HashMap
A `HashMap` stores key-value pairs, which are great when you want to store values and find them by a key (like a name or ID).
```java
import java.util.HashMap;

HashMap<String, String> capitalCities = new HashMap<String, String>();
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");
```

---

## 3. Iterators

When learning about data structures, you will often hear about iterators too.
An iterator is a way to loop through elements in a data structure. It is called an "iterator" because "iterating" is the technical term for looping.

```java
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");

    // Get an iterator for the ArrayList
    Iterator<String> it = cars.iterator();

    // Iterate through the list using the iterator
    while(it.hasNext()) {
      System.out.println(it.next());
    }
  }
}
```

---

## Important Interview Questions

**Q1: What is the Java Collections Framework?**
**Answer:** It is a unified architecture provided in the `java.util` package to store and manipulate a group of objects. It includes interfaces (List, Set, Map), implementations (ArrayList, HashSet), and algorithms (sorting, searching).

**Q2: What is the difference between List and Set?**
**Answer:** A `List` is an ordered collection that allows duplicate elements and index-based access. A `Set` is an unordered collection that does not allow duplicates and does not support index-based access.
