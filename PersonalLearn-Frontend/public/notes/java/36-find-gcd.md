# Find the Greatest Common Divisor (GCD)

The GCD of two numbers is the largest positive integer that divides both numbers evenly.

## Example (Using Euclidean Algorithm)

```java
public class Main {
  public static void main(String[] args) {
    int n1 = 81, n2 = 153;

    // We loop until both numbers become equal
    while (n1 != n2) {
      if (n1 > n2) {
        n1 = n1 - n2;
      } else {
        n2 = n2 - n1;
      }
    }

    System.out.println("The GCD is: " + n1);
  }
}
```

### Explanation
This is the classic Euclidean algorithm. We repeatedly subtract the smaller number from the larger number. When both numbers eventually become exactly equal, that number is the Greatest Common Divisor.
