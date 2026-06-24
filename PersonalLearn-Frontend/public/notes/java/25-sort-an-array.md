# Sort an Array

Java provides built-in utilities to instantly sort arrays without writing manual algorithms like Bubble Sort.

## Example

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] numbers = {50, 10, 40, 20, 30};

    System.out.println("Before Sorting: " + Arrays.toString(numbers));

    // Built-in sort method (Ascending order)
    Arrays.sort(numbers);

    System.out.println("After Sorting: " + Arrays.toString(numbers));
  }
}
```

### Explanation
`Arrays.sort()` uses a highly optimized Dual-Pivot Quicksort algorithm under the hood. To print the array readable without a loop, we use `Arrays.toString()`.
