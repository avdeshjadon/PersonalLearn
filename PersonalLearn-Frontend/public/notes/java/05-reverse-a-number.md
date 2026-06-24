# Reverse a Number in Java

Reversing a number involves extracting its digits from the end one by one and building a new reversed number.

## Example (Using a While Loop)

```java
public class Main {
  public static void main(String[] args) {
    int num = 12345;
    int reversedNum = 0;

    System.out.println("Original Number: " + num);

    while (num != 0) {
      // 1. Get the last digit
      int digit = num % 10;
      
      // 2. Append the digit to reversedNum
      reversedNum = reversedNum * 10 + digit;
      
      // 3. Remove the last digit from original number
      num /= 10;
    }

    System.out.println("Reversed Number: " + reversedNum);
  }
}
```

**Output:**
```text
Original Number: 12345
Reversed Number: 54321
```

### Explanation
1. `num % 10` isolates the last digit (e.g., 12345 % 10 = 5).
2. `reversedNum * 10 + digit` shifts existing digits to the left and adds the new digit.
3. `num / 10` completely drops the last digit so the loop can process the next one.
