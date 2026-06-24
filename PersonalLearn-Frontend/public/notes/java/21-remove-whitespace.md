# Remove Whitespace from a String

Whitespace includes spaces, tabs, and newlines. We can remove them easily using Regex.

## Example

```java
public class Main {
  public static void main(String[] args) {
    String str = "  J a v a   S t a r  ";
    
    // Replace all whitespaces (\s) with empty string
    String noSpaces = str.replaceAll("\\s", "");
    
    System.out.println("Original: '" + str + "'");
    System.out.println("Cleaned: '" + noSpaces + "'");
  }
}
```

### Explanation
`\s` is a regular expression that matches any whitespace character. The `replaceAll()` method searches the whole string and deletes them all. Note: `trim()` only removes spaces from the beginning and the end, not the middle.
