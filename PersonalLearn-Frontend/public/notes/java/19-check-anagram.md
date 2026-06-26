# Check Anagram Strings

Two strings are anagrams if they contain exactly the same characters in a different order (e.g., "listen" and "silent").

## Example

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    String str1 = "Listen";
    String str2 = "Silent";

    // 1. Convert to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // 2. Check if lengths match
    if (str1.length() != str2.length()) {
      System.out.println("Not an Anagram");
    } else {
      // 3. Convert to char arrays
      char[] charArray1 = str1.toCharArray();
      char[] charArray2 = str2.toCharArray();

      // 4. Sort the arrays
      Arrays.sort(charArray1);
      Arrays.sort(charArray2);

      // 5. Compare the sorted arrays
      if (Arrays.equals(charArray1, charArray2)) {
        System.out.println("They are Anagrams!");
      } else {
        System.out.println("Not an Anagram");
      }
    }
  }
}
```

### Explanation
The easiest way to check an anagram is to sort both words alphabetically. If "listen" becomes "eilnst" and "silent" also becomes "eilnst", they are anagrams! We use `Arrays.sort()` to handle the heavy lifting.
