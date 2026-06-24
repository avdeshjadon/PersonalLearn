# Remove Vowels from a String

You can easily remove all vowels from a string using Regex and the `replaceAll()` method.

## Example

```java
public class Main {
  public static void main(String[] args) {
    String original = "Programming in Java is great!";
    
    // Replace any vowel (both lowercase and uppercase) with an empty string
    String noVowels = original.replaceAll("[aeiouAEIOU]", "");
    
    System.out.println("Original: " + original);
    System.out.println("Without Vowels: " + noVowels);
  }
}
```

**Output:**
```text
Original: Programming in Java is great!
Without Vowels: Prgrmmng n Jv s grt!
```

### Explanation
`replaceAll("[aeiouAEIOU]", "")` looks for any character inside the brackets. If it finds one, it replaces it with `""` (nothing), effectively deleting it from the string.
