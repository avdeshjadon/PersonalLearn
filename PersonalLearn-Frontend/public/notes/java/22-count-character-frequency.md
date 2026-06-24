# Count Character Frequency

Finding out how many times a specific letter appears in a string.

## Example

```java
public class Main {
  public static void main(String[] args) {
    String str = "programming";
    char target = 'g';
    int count = 0;

    for (int i = 0; i < str.length(); i++) {
      if (str.charAt(i) == target) {
        count++;
      }
    }

    System.out.println("The character '" + target + "' appears " + count + " times.");
  }
}
```

### Explanation
We simply loop through every index of the string, use `charAt(i)` to extract the character, and increment our counter if it matches our target character.
