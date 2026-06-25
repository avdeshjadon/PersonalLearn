# Count Words in a Sentence

Counting words is easily done by splitting the string into an array wherever there is a space.

## Example

```java
public class Main {
  public static void main(String[] args) {
    String sentence = "Java is a fun programming language";

    // Split the sentence by whitespace
    String[] words = sentence.split("\\s+");

    int wordCount = words.length;

    System.out.println("Total words: " + wordCount);
  }
}
```

### Explanation
The `split("\\s+")` method uses a Regular Expression (Regex). `\s+` means "one or more space characters". This correctly handles sentences even if someone typed double spaces between words. It returns an array of strings, and we simply check the `.length` of that array.
