# Remove Duplicates from an Array

The easiest and most professional way to remove duplicates in Java is to use a `HashSet`, which automatically rejects duplicate values.

## Example

```java
import java.util.HashSet;

public class Main {
  public static void main(String[] args) {
    int[] numbers = {1, 2, 2, 3, 4, 4, 5};
    
    HashSet<Integer> uniqueNumbers = new HashSet<>();

    // Add elements to the Set (duplicates are ignored)
    for (int num : numbers) {
      uniqueNumbers.add(num);
    }

    System.out.println("Unique elements: " + uniqueNumbers);
  }
}
```

### Explanation
A `Set` is a Collection in Java that inherently does not allow duplicates. By dumping our array into a `HashSet`, the duplicates are naturally filtered out without writing any complex checking logic.
