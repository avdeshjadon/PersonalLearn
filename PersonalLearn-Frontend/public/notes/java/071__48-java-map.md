# Java Map (HashMap, TreeMap & LinkedHashMap)

The `Map` interface is a part of the Java Collections Framework and is used to store **key-value pairs**. Each key must be **unique**, but values can be duplicated.

A Map is useful when you want to associate a key (like a name or ID) with a value (like an age or description).

| Feature | List | Set | Map |
|---------|------|-----|-----|
| **Duplicates allowed?**| Yes | No | **Keys:** No, **Values:** Yes |
| **Stores key-value pairs?**| No | No | Yes |
| **Maintains order?** | Yes | No (unless using TreeSet/LinkedHashSet) | No (unless using TreeMap/LinkedHashMap) |

---

## 1. Java HashMap

A `HashMap` stores items in key/value pairs, where each key maps to a specific value. It does not guarantee any specific order.

Instead of accessing elements by an index (like with `ArrayList`), you use a **key** to retrieve its associated **value**.

### Create and Manage a HashMap
```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap object
    HashMap<String, String> capitalCities = new HashMap<String, String>();

    // Add items using put()
    capitalCities.put("England", "London");
    capitalCities.put("India", "New Delhi");
    capitalCities.put("Norway", "Oslo");
    capitalCities.put("Norway", "Oslo"); // Duplicate key overwrites previous value

    System.out.println(capitalCities);

    // Access an Item
    System.out.println(capitalCities.get("England")); // London

    // Remove an Item
    capitalCities.remove("England");

    // HashMap Size
    System.out.println(capitalCities.size());
  }
}
```

### Loop Through a HashMap
```java
// Print keys
for (String i : capitalCities.keySet()) {
  System.out.println(i);
}

// Print values
for (String i : capitalCities.values()) {
  System.out.println(i);
}

// Print keys and values
for (String i : capitalCities.keySet()) {
  System.out.println("Key: " + i + " Value: " + capitalCities.get(i));
}
```

---

## 2. Java TreeMap

A `TreeMap` is a collection that stores key/value pairs in **sorted order by key**.

> **Tip:** Unlike `HashMap`, which does not maintain order, `TreeMap` keeps its keys sorted.

### Create and Manage a TreeMap
```java
import java.util.TreeMap;

public class Main {
  public static void main(String[] args) {
    TreeMap<String, String> capitalCities = new TreeMap<>();
    capitalCities.put("England", "London");
    capitalCities.put("India", "New Delhi");
    capitalCities.put("Austria", "Wien");
    
    System.out.println(capitalCities); 
    // Output keys are sorted alphabetically: {Austria=Wien, England=London, India=New Delhi}
  }
}
```

### HashMap vs TreeMap
| Feature | HashMap | TreeMap |
|---------|---------|---------|
| **Order** | No guaranteed order | Sorted by keys |
| **Null Keys** | Allows one `null` key | Does not allow `null` keys |
| **Performance**| Faster (no sorting) | Slower (maintains sorted order) |

---

## 3. Java LinkedHashMap

A `LinkedHashMap` stores keys and values, and **keeps them in the same order you put them in** (insertion order).

> **Tip:** Use `LinkedHashMap` when you want predictable iteration order.

### Create and Manage a LinkedHashMap
```java
import java.util.LinkedHashMap;

public class Main {
  public static void main(String[] args) {
    LinkedHashMap<String, String> capitalCities = new LinkedHashMap<>();

    capitalCities.put("England", "London");
    capitalCities.put("India", "New Delhi");
    capitalCities.put("Austria", "Wien");

    System.out.println(capitalCities);
    // Output items appear exactly in the order they were added
  }
}
```

### HashMap vs LinkedHashMap
| Feature | HashMap | LinkedHashMap |
|---------|---------|---------------|
| **Order** | No guaranteed order | Insertion order preserved |
| **Performance**| Faster for random access | Slightly slower due to ordering |
| **Duplicates** | Keys must be unique | Keys must be unique |

---

## Important Interview Questions

**Q1: Can a HashMap contain null keys and null values?**
**Answer:** Yes, a `HashMap` allows exactly one `null` key and multiple `null` values. However, `TreeMap` does not allow `null` keys (as it needs to sort them using `compareTo`), but it allows `null` values.

**Q2: How does a HashMap handle duplicate keys?**
**Answer:** If you try to insert a key-value pair with a key that already exists in the `HashMap`, it simply replaces the old value with the new value. It does not throw an error.
