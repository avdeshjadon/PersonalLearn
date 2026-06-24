# Find Array Average

The average is the total sum of the array divided by the number of elements.

## Example

```java
public class Main {
  public static void main(String[] args) {
    int[] numbers = {10, 20, 30, 40, 50};
    int sum = 0;

    for (int num : numbers) {
      sum += num;
    }

    // Cast sum to double so the division isn't truncated
    double average = (double) sum / numbers.length;

    System.out.println("The average is: " + average);
  }
}
```

### Explanation
We first calculate the sum just like the previous chapter. Then we divide by `numbers.length`. **Crucial step**: we cast `sum` to `(double)` before dividing, otherwise Java will perform integer division and chop off the decimals.
