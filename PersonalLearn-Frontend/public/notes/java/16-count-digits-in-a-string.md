# Count Digits in a String

Sometimes strings contain numbers mixed with text (e.g. "Order 1234"). Here is how to count how many numbers exist in the string.

## Example

```java
public class Main {
  public static void main(String[] args) {
    String str = "I have 2 apples and 15 bananas.";
    int digitCount = 0;

    for (int i = 0; i < str.length(); i++) {
      char ch = str.charAt(i);
      
      // Character wrapper class has a built-in method for this!
      if (Character.isDigit(ch)) {
        digitCount++;
      }
    }

    System.out.println("Number of digits: " + digitCount);
  }
}
```

### Explanation
We loop through each character and use the `Character.isDigit()` utility method. This is much cleaner and safer than writing manual logic like `ch >= '0' && ch <= '9'`.
