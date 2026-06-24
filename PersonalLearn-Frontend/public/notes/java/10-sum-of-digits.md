# Add Up the Digits of a Number

To find the sum of all digits in a number (e.g., 123 -> 1+2+3 = 6), we extract the digits one by one using a loop.

## Example

```java
public class Main {
  public static void main(String[] args) {
    int num = 456;
    int sum = 0;

    int originalNum = num;

    while (num != 0) {
      // Extract last digit
      int digit = num % 10;
      
      // Add digit to sum
      sum = sum + digit;
      
      // Remove last digit
      num = num / 10;
    }

    System.out.println("The sum of digits of " + originalNum + " is: " + sum);
  }
}
```

**Output:**
```text
The sum of digits of 456 is: 15
```

### Explanation
Using modulo `10`, we pull off the final digit. We add it to our running `sum` variable, and then divide the number by `10` to chop off that extracted digit, repeating until the number is `0`.
