# Loop Through a HashMap

A `HashMap` stores items in "key/value" pairs. Looping through a map allows you to access either the keys, the values, or both.

## Example

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    HashMap<String, String> capitalCities = new HashMap<>();
    capitalCities.put("England", "London");
    capitalCities.put("Germany", "Berlin");
    capitalCities.put("Norway", "Oslo");

    // Print keys
    for (String i : capitalCities.keySet()) {
      System.out.println("Key: " + i);
    }

    // Print values
    for (String i : capitalCities.values()) {
      System.out.println("Value: " + i);
    }

    // Print keys and values
    for (String i : capitalCities.keySet()) {
      System.out.println("Key: " + i + " value: " + capitalCities.get(i));
    }
  }
}
```

### Explanation
`.keySet()` returns an iterable set of all the Keys. `.values()` returns all the Values. By iterating over the keys, you can easily fetch the corresponding value using `.get(key)`.
