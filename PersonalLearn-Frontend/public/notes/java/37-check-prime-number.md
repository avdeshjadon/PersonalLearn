# Check if a Number is Prime

A prime number is a number greater than 1 that cannot be formed by multiplying two smaller natural numbers. (e.g., 2, 3, 5, 7, 11).

## Example

```java
public class Main {
  public static void main(String[] args) {
    int num = 29;
    boolean isPrime = true;

    if (num <= 1) {
      isPrime = false;
    } else {
      // We only need to check up to the number divided by 2
      for (int i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
          isPrime = false;
          break; // Optimization: Stop checking if we found a divisor
        }
      }
    }

    if (isPrime) {
      System.out.println(num + " is a prime number.");
    } else {
      System.out.println(num + " is not a prime number.");
    }
  }
}
```

### Explanation
We loop starting from `2` up to `num / 2`. If our number is divisible by *any* of these (`num % i == 0`), it means it has a divisor other than 1 and itself, making it NOT prime. We `break` immediately to save time.
