# Check if a Number is an Armstrong Number

An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
For example, **153** is an Armstrong number because `1³ + 5³ + 3³ = 1 + 125 + 27 = 153`.

## Example

```java
public class Main {
  public static void main(String[] args) {
    int number = 153;
    int originalNumber = number;
    int result = 0;

    while (originalNumber != 0) {
      int digit = originalNumber % 10;
      
      // Add the cube of the digit
      result += Math.pow(digit, 3);
      
      originalNumber /= 10;
    }

    if (result == number) {
      System.out.println(number + " is an Armstrong number.");
    } else {
      System.out.println(number + " is NOT an Armstrong number.");
    }
  }
}
```

### Explanation
We loop through the digits similar to the sum-of-digits program, but instead of adding the digit directly, we use `Math.pow(digit, 3)` to cube it before adding it to our `result` variable.
