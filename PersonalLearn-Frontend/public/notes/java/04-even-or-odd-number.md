# Check if a Number is Even or Odd

A number is even if it is perfectly divisible by 2 (i.e., leaves a remainder of 0). Otherwise, it is odd.

## Example

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("Enter a number: ");
    int number = scanner.nextInt();

    // Check if the remainder is 0 when divided by 2
    if (number % 2 == 0) {
      System.out.println(number + " is even.");
    } else {
      System.out.println(number + " is odd.");
    }
    
    scanner.close();
  }
}
```

### Explanation
The Modulo operator `%` gives the remainder of a division operation. 
- `10 % 2 = 0` (Even)
- `11 % 2 = 1` (Odd)
If `number % 2 == 0` evaluates to true, the number is definitely even.
