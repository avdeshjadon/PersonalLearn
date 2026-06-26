# Print the Fibonacci Sequence

The Fibonacci sequence is a series where the next number is found by adding up the two numbers before it. (e.g., 0, 1, 1, 2, 3, 5, 8, 13...).

## Example

```java
public class Main {
  public static void main(String[] args) {
    int count = 10; // How many numbers we want to print
    int num1 = 0;
    int num2 = 1;

    System.out.print("Fibonacci Sequence: " + num1 + " " + num2);

    for (int i = 2; i < count; i++) {
      int nextNum = num1 + num2;
      System.out.print(" " + nextNum);
      
      // Shift the window
      num1 = num2;
      num2 = nextNum;
    }
  }
}
```

### Explanation
We hardcode the first two numbers (`0` and `1`). Inside the loop, we calculate the `nextNum`. Then, we shift `num1` and `num2` forward by one position so the loop can calculate the following number in the next iteration.
