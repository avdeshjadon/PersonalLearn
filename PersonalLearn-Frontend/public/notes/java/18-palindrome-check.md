# Check if a String is a Palindrome

A palindrome is a word that reads the exact same forwards and backwards (e.g., "radar", "level", "madam").

## Example

```java
public class Main {
  public static void main(String[] args) {
    String original = "radar";
    String reversed = "";

    // Reverse the string
    for (int i = original.length() - 1; i >= 0; i--) {
      reversed += original.charAt(i);
    }

    // Compare original with reversed
    if (original.equals(reversed)) {
      System.out.println(original + " is a Palindrome.");
    } else {
      System.out.println(original + " is NOT a Palindrome.");
    }
  }
}
```

### Explanation
We simply reverse the string as we did in the previous chapter. Then, we use `.equals()` (never use `==` for strings) to check if the reversed string exactly matches the original string.
