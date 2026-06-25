# Find Duplicates in an Array

If we only want to identify which numbers are repeating, we can again use the power of a `HashSet`. 

## Example

```java
import java.util.HashSet;

public class Main {
  public static void main(String[] args) {
    int[] numbers = {1, 2, 3, 2, 4, 5, 5, 6};
    
    HashSet<Integer> seen = new HashSet<>();
    HashSet<Integer> duplicates = new HashSet<>();

    for (int num : numbers) {
      // .add() returns false if the item is ALREADY in the set
      if (!seen.add(num)) {
        duplicates.add(num);
      }
    }

    System.out.println("Duplicate elements: " + duplicates);
  }
}
```

### Explanation
The `seen.add(num)` method is brilliant. It tries to add the number to the set. If the number is already there, it fails and returns `false`. The `!` operator flips that to `true`, meaning we caught a duplicate!
