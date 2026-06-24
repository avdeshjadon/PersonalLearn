# Shuffle an Array

To randomize the order of elements in an array, we can use the "Fisher-Yates Shuffle" algorithm, or take advantage of `Collections.shuffle()`.

## Using Collections (Easiest)

```java
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    // Note: We use Integer instead of int for Collections to work
    Integer[] array = {1, 2, 3, 4, 5};

    // Convert array to a List
    List<Integer> list = Arrays.asList(array);

    // Shuffle the list
    Collections.shuffle(list);

    // The original array is also shuffled!
    System.out.println("Shuffled Array: " + Arrays.toString(array));
  }
}
```

### Explanation
`Collections.shuffle()` requires a `List` of Objects. We must use `Integer[]` instead of `int[]`. `Arrays.asList()` creates a view over the array, meaning when the list is shuffled, the underlying array is also shuffled.
