# Find Smallest Element in an Array

To find the minimum value, we assume the first element is the smallest, and then compare it with the rest.

## Example

```java
public class Main {
  public static void main(String[] args) {
    int[] numbers = {50, 10, 40, 20, 30};
    
    // Assume the first element is the smallest
    int min = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i]; // Found a new smallest number
      }
    }

    System.out.println("Smallest element: " + min);
  }
}
```

### Explanation
We start our loop at `i = 1` because we already stored `numbers[0]` as our initial `min`. Every time we find a number smaller than `min`, we update our `min` box.
