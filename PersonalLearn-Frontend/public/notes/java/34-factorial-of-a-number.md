# Find the Factorial of a Number

The factorial of a number is the product of all positive integers less than or equal to that number.
E.g. Factorial of 5 (denoted as 5!) = 5 * 4 * 3 * 2 * 1 = 120.

## Example

```java
public class Main {
  public static void main(String[] args) {
    int num = 5;
    long factorial = 1; // Use long because factorials grow huge quickly

    for (int i = 1; i <= num; i++) {
      factorial = factorial * i;
    }

    System.out.println("Factorial of " + num + " is: " + factorial);
  }
}
```

### Explanation
We start `factorial` at 1 (not 0, because multiplying by 0 ruins everything). The loop goes from 1 up to our number, continuously multiplying our running total.
