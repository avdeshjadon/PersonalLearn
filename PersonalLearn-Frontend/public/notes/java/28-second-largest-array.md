# Find Second Largest Value in an Array

A very common interview question. We need to track both the largest and the second-largest variables simultaneously.

## Example

```java
public class Main {
  public static void main(String[] args) {
    int[] numbers = {10, 50, 20, 99, 30};
    
    int largest = Integer.MIN_VALUE;
    int secondLargest = Integer.MIN_VALUE;

    for (int num : numbers) {
      if (num > largest) {
        // The old largest becomes the second largest
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num != largest) {
        // If it's not the largest, but bigger than secondLargest
        secondLargest = num;
      }
    }

    System.out.println("Second largest element: " + secondLargest);
  }
}
```

### Explanation
We initialize our variables to the lowest possible integer (`Integer.MIN_VALUE`). As we loop:
1. If we find a new massive number, the previous largest gets "demoted" to second place.
2. If we find a number that isn't quite the largest, but is still bigger than our second place (and isn't a duplicate of the largest), it takes second place.
