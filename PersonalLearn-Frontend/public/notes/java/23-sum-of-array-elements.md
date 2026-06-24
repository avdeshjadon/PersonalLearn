# Sum of Array Elements

To find the total sum of all numbers in an array, we use a loop to iterate through it.

## Example

```java
public class Main {
  public static void main(String[] args) {
    int[] numbers = {10, 20, 30, 40, 50};
    int sum = 0;

    // Using a for-each loop
    for (int num : numbers) {
      sum += num;
    }

    System.out.println("The sum of the array is: " + sum);
  }
}
```

### Explanation
The enhanced `for-each` loop is perfect for iterating through arrays when you don't care about the index. We just add every extracted `num` to our `sum` variable.
