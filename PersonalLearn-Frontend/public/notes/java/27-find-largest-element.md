# Find Largest Element in an Array

Finding the largest element is the exact same logic as finding the smallest, just flipping the comparison sign!

## Example

```java
public class Main {
  public static void main(String[] args) {
    int[] numbers = {50, 10, 99, 20, 30};
    
    // Assume the first element is the largest
    int max = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; // Found a new largest number
      }
    }

    System.out.println("Largest element: " + max);
  }
}
```

### Explanation
Every time we encounter a number that is greater `>` than our current `max`, we overwrite `max` with that new number.
