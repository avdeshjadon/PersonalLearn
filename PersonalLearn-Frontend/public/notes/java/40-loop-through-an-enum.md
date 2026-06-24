# Loop Through an Enum

An `enum` is a special "class" that represents a group of constants (unchangeable variables).

## Example

```java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main {
  public static void main(String[] args) {
    
    // .values() returns an array of all enum constants
    for (Level myVar : Level.values()) {
      System.out.println(myVar);
    }
    
  }
}
```

### Explanation
Every enum has an automatically generated `.values()` method that returns an array containing all the values of the enum in the order they are declared. This makes iterating over them very simple using a `for-each` loop.
