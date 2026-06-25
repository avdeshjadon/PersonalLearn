# Min and Max in an Array

Sometimes you need to find both values in a single pass for maximum performance.

## Example

```java
public class Main {
  public static void main(String[] args) {
    int[] numbers = {50, 10, 99, 20, 30};
    
    int min = numbers[0];
    int max = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      } else if (numbers[i] > max) {
        max = numbers[i];
      }
    }

    System.out.println("Min: " + min);
    System.out.println("Max: " + max);
  }
}
```

### Explanation
We only need one loop. We use `if-else if`. If a number is the minimum, it obviously can't be the maximum, so `else if` saves us an unnecessary check.
