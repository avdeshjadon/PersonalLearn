# Count Vowels in a String

Vowels are the letters A, E, I, O, U. We can count them by checking every character in the string.

## Example

```java
public class Main {
  public static void main(String[] args) {
    String str = "Hello World";
    int vCount = 0;

    // Convert string to lower case to easily check both upper and lower
    str = str.toLowerCase();

    for (int i = 0; i < str.length(); i++) {
      char ch = str.charAt(i);
      
      // Check if character is a vowel
      if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        vCount++;
      }
    }

    System.out.println("Number of vowels: " + vCount);
  }
}
```

### Explanation
Converting to lowercase first saves us from having to check `ch == 'A' || ch == 'E'` etc. We use `charAt(i)` inside a standard `for` loop to inspect every single character.
