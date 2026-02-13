# Collection Framework in Java

The **Collection Framework** in Java is a framework that provides a unified architecture to store and manipulate a group of objects. It offers a set of standard **interfaces and classes** that act as ready-made services for creating a **container**.

This container allows you to store multiple objects into a **single entity**, making it easy to manage large amounts of data. It supports all common data operations efficiently, such as:

- **Searching**
- **Sorting**
- **Adding (Insertion)**
- **Removing (Deletion)**
- **Iterating (Traversal)**

### Simply Put:

Think of a **Collection** as a **"Container"** that groups multiple items together into a single unit.
Instead of managing 100 separate variables or writing your own data structures (like a resizeable array), Java gives you pre-built containers like `ArrayList`, `HashSet`, etc., that do the heavy lifting for you.

### Real-Life Example (School Bag)

- **Collection**: Your **School Bag**.
- **Items**: Books, Pens, Lunch Box, Water Bottle.
- **Why?**: It's easier to carry one bag containing all items than to carry each item individually in your hands.
- **Types of Collections**:
  - **Lunch Box**: Keeps food separate (like a `Set` keeps unique items).
  - **Pencil Case**: Keeps pens in order (like a `List` keeps order).

---

## Hierarchy of Collection Framework

The entire framework is based on interfaces found in the `java.util` package.

**Note**: `Map` is part of the Collection Framework definitions, but it **does not** extend the `Collection` interface.

### Key Interfaces

1.  **Iterable**: The root interface for all collections (except Map). It allows an object to be the target of the "for-each loop".
2.  **Collection**: The main interface that extends `Iterable`.
    - **List**: An ordered collection (sequence). **Duplicates are allowed**.
    - **Set**: A collection that **cannot contain duplicate elements**.
    - **Queue**: A collection used to hold multiple elements prior to processing (FIFO - First In, First Out).
3.  **Map**: An object that maps **keys to values**. A map cannot contain duplicate keys.

### Flow Diagram (Hierarchy)

Here is the complete hierarchy of the Collection Framework.

```text
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                      COLLECTION FRAMEWORK HIERARCHY (java.util)                                        ║
╠════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                                                        ║
║                                              ╔═══════════════╗                                                         ║
║                                              ║   Iterable    ║ (I)                                                     ║
║                                              ╚═══════════════╝                                                         ║
║                                                      ▲                                                                 ║
║                                                      │                                                                 ║
║                                              ╔═══════════════╗                                                         ║
║                                              ║  Collection   ║ (I)                                                     ║
║                                              ╚═══════════════╝                                                         ║
║                                                      ▲                                                                 ║
║                                                      │                                                                 ║
║                          ┌───────────────────────────┼────────────────────────────┐                                    ║
║                          │                           │                            │                                    ║
║                  ╔═══════════════╗           ╔═══════════════╗            ╔═══════════════╗                            ║
║                  ║     List      ║ (I)       ║     Queue     ║ (I)        ║      Set      ║ (I)                        ║
║                  ╚═══════════════╝           ╚═══════════════╝            ╚═══════════════╝                            ║
║                          ▲                           ▲                            ▲                                    ║
║                          │                           │                            │                                    ║
║                  ╔═══════════════╗           ╔═══════════════╗            ╔═══════════════╗                            ║
║                  ║ AbstractList  ║ (AC)      ║ AbstractQueue ║ (AC)       ║  AbstractSet  ║ (AC)                       ║
║                  ╚═══════════════╝           ╚═══════════════╝            ╚═══════════════╝                            ║
║                          ▲                           ▲                            ▲                                    ║
║             ┌────────────┼────────────┐              │               ┌────────────┼──────────────┐                     ║
║             │            │            │              │               │            │              │                     ║
║      ╔════════════╗ ╔════════════╗ ╔════════════╗ ╔═════════════╗ ╔═════════════╗ ╔══════════════╗ ╔══════════════╗    ║
║      ║ ArrayList  ║ ║   Vector   ║ ║ LinkedList ║ ║PriorityQueue║ ║   HashSet   ║ ║LinkedHashSet ║ ║  SortedSet   ║ (I)║
║      ║    (C)     ║ ║    (C)     ║ ║    (C)     ║ ║     (C)     ║ ║     (C)     ║ ║     (C)      ║ ║     (I)      ║    ║
║      ╚════════════╝ ╚════════════╝ ╚════════════╝ ╚═════════════╝ ╚═════════════╝ ╚══════════════╝ ╚══════════════╝    ║
║                          ▲                                                                                  ▲          ║
║                          │                                                                                  │          ║
║                     ╔════════════╗                ╔═════════════╗                                    ╔══════════════╗  ║
║                     ║   Stack    ║ (C)            ║    Deque    ║ (I)                                ║   TreeSet    ║  ║
║                     ║    (C)     ║                ║     (I)     ║                                    ║     (C)      ║  ║
║                     ╚════════════╝                ╚═════════════╝                                    ╚══════════════╝  ║
║                                                          ▲                                                             ║
║                                                          │                                                             ║
║                                                   ╔═════════════╗                                                      ║
║                                                   ║ ArrayDeque  ║ (C)                                                  ║
║                                                   ║     (C)     ║                                                      ║
║                                                   ╚═════════════╝                                                      ║
║                                                                                                                        ║
╠════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║                                          MAP HIERARCHY (Separate)                                                      ║
╠════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                                                        ║
║                                              ╔═══════════════╗                                                         ║
║                                              ║      Map      ║ (I)                                                     ║
║                                              ╚═══════════════╝                                                         ║
║                                                      ▲                                                                 ║
║                                                      │                                                                 ║
║                                              ╔═══════════════╗                                                         ║
║                                              ║  AbstractMap  ║ (AC)                                                    ║
║                                              ╚═══════════════╝                                                         ║
║                                                      ▲                                                                 ║
║                                                      │                                                                 ║
║                          ┌───────────────────────────┼────────────────────────────┐                                    ║
║                          │                           │                            │                                    ║
║                  ╔═══════════════╗           ╔═══════════════╗            ╔═══════════════╗                            ║
║                  ║    HashMap    ║ (C)       ║ LinkedHashMap ║ (C)        ║   SortedMap   ║ (I)                        ║
║                  ╚═══════════════╝           ╚═══════════════╝            ╚═══════════════╝                            ║
║                                                                                   ▲                                    ║
║                                                                                   │                                    ║
║                                                                           ╔═══════════════╗                            ║
║                                                                           ║    TreeMap    ║ (C)                        ║
║                                                                           ╚═══════════════╝                            ║
║                                                                                                                        ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

### Abstract Classes

You mentioned there are many abstract classes. The framework provides several skeletal implementations to minimize the effort required to implement the interfaces. Key ones include:

1.  **AbstractCollection**: Implements `Collection`.
2.  **AbstractList**: Extends `AbstractCollection` and implements `List`.
3.  **AbstractSequentialList**: Extends `AbstractList` (for sequential access like `LinkedList`).
4.  **AbstractSet**: Extends `AbstractCollection` and implements `Set`.
5.  **AbstractQueue**: Extends `AbstractCollection` and implements `Queue`.
6.  **AbstractMap**: Implements `Map`.

### Summary Table

| Interface | Implements Classes                    | Characteristics                                  |
| :-------- | :------------------------------------ | :----------------------------------------------- |
| **List**  | `ArrayList`, `LinkedList`, `Vector`   | Ordered, Duplicates allowed, Index-based access. |
| **Set**   | `HashSet`, `LinkedHashSet`, `TreeSet` | Unordered (mostly), No duplicates.               |
| **Queue** | `PriorityQueue`, `ArrayDeque`         | Ordered processing (FIFO/Priority).              |
| **Map**   | `HashMap`, `LinkedHashMap`, `TreeMap` | Key-Value pairs, Unique keys.                    |

---

## 1. List Interface

A `List` cares about the **index** (position) of elements. You can add the same element multiple times.

- **ArrayList**: Good for accessing data (fast lookup). Bad for frequent modifications (shifting elements is slow).
- **LinkedList**: Good for frequent modifications (insert/delete). Slower for lookup.

```java
import java.util.*;

public class ListDemo {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.add("Alice");
        names.add("Bob");
        names.add("Alice"); // Duplicate allowed

        System.out.println(names); // Output: [Alice, Bob, Alice]
        System.out.println(names.get(1)); // Output: Bob
    }
}
```

## 2. Set Interface

A `Set` cares about **uniqueness**. It does not guarantee order (except specific implementations like `LinkedHashSet` or `TreeSet`).

- **HashSet**: Unordered, very fast.
- **TreeSet**: Sorted order (natural ordering).

```java
import java.util.*;

public class SetDemo {
    public static void main(String[] args) {
        Set<Integer> numbers = new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(10); // Duplicate ignored

        System.out.println(numbers); // Output: [10, 20] (Order not guaranteed)
    }
}
```

## 3. Queue Interface

A `Queue` is used to hold elements about to be processed in **FIFO** (First In, First Out) order.

- **PriorityQueue**: Elements are ordered by priority (natural or custom comparator).
- **ArrayDeque**: Faster than Stack and LinkedList when used as a queue.

```java
import java.util.*;

public class QueueDemo {
    public static void main(String[] args) {
        Queue<String> queue = new PriorityQueue<>();

        queue.add("Task 1");
        queue.add("Task 2");
        queue.add("Task 3");

        System.out.println(queue.poll()); // Removes and returns head (Task 1 or sorted head)
        System.out.println(queue.peek()); // Returns head without removing
    }
}
```

## 4. Map Interface

A `Map` stores data in **Key-Value** pairs. Keys must be unique; values can be duplicated.

- **HashMap**: Unordered keys, very fast.
- **TreeMap**: Keys are sorted.

```java
import java.util.*;

public class MapDemo {
    public static void main(String[] args) {
        Map<String, Integer> dictionary = new HashMap<>();

        dictionary.put("Apple", 100);
        dictionary.put("Banana", 50);
        dictionary.put("Apple", 120); // Updates value for key "Apple"

        System.out.println(dictionary); // {Apple=120, Banana=50}
    }
}
```

---

## Why Use Collection Framework?

1.  **Reduces Programming Effort**: You don't need to write sorting, searching, or resizing logic from scratch.
2.  **Increases Performance**: High-performance implementations of data structures (like Red-Black trees for `TreeMap`).
3.  **Interoperability**: Standard interfaces allow different APIs to pass collections around easily.
4.  **Resizable**: Collections grow dynamically. You don't need to specify size in advance (unlike Arrays).
5.  **Built-in Algorithms**: It provides algorithms to process data, such as sorting, shuffling, reversing, etc.
    | Algorithm | Method | Description |
    | :--- | :--- | :--- |
    | **Sort** | `Collections.sort(list)` | Sorts the list in ascending order. |
    | **Shuffle** | `Collections.shuffle(list)` | Randomly permutes the list elements. |
    | **Reverse** | `Collections.reverse(list)` | Reverses the order of elements in the list. |
    | **Search** | `Collections.binarySearch(list, key)` | Searches for an element using binary search (list must be sorted). |
    | **Min** | `Collections.min(collection)` | Returns the minimum element according to natural order. |
    | **Max** | `Collections.max(collection)` | Returns the maximum element according to natural order. |
    | **Frequency** | `Collections.frequency(c, o)` | Returns the number of times `o` appears in collection `c`. |
6.  **Homogeneous and Heterogeneous**:
    - **Homogeneous**: Storing objects of the **same type**. This is achieved using **Generics** (e.g., `ArrayList<String>`).
    - **Heterogeneous**: Storing objects of **different types**. By default (without Generics), collections can store any type of object (e.g., `ArrayList list = new ArrayList()`).
