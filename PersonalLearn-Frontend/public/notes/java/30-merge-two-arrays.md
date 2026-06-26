# Merge Two Arrays

To combine two arrays, we must create a third array that is exactly the size of the first two arrays combined.

## Example

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] array1 = {1, 2, 3};
    int[] array2 = {4, 5, 6};

    // Create a new array with the combined length
    int[] merged = new int[array1.length + array2.length];

    int pos = 0;
    
    // Add elements from first array
    for (int num : array1) {
      merged[pos] = num;
      pos++;
    }
    
    // Add elements from second array
    for (int num : array2) {
      merged[pos] = num;
      pos++;
    }

    System.out.println("Merged Array: " + Arrays.toString(merged));
  }
}
```

### Explanation
Arrays in Java have a fixed size. We cannot just "append" to `array1`. Instead, we create a completely new `merged` array and copy the elements over one by one using a `pos` index tracker.
