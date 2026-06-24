# Check if a Number is Positive or Negative

A simple program using `if-else` statements to determine the sign of a number.

## Example

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("Enter a number: ");
    double number = scanner.nextDouble();

    if (number > 0.0) {
      System.out.println(number + " is a positive number.");
    } else if (number < 0.0) {
      System.out.println(number + " is a negative number.");
    } else {
      System.out.println("The number is 0.");
    }
    
    scanner.close();
  }
}
```

### Explanation
- Numbers strictly greater than `0` are positive.
- Numbers strictly less than `0` are negative.
- If it is neither, the number must be exactly zero.
