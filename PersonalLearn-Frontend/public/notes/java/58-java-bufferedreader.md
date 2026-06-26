# Java BufferedReader

When reading large text files, using standard classes like `Scanner` or `FileReader` can be slow because each character reading requires a direct interaction with the hard drive.

**`BufferedReader`** solves this by keeping an internal memory buffer. Instead of reading one character at a time from the disk, it grabs a huge chunk of text into RAM at once, making operations much faster.

## Read a Text File Line by Line

The most popular feature of `BufferedReader` is the `readLine()` method, which grabs an entire line of text at once.

We wrap a `FileReader` inside the `BufferedReader`.

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
  public static void main(String[] args) {
    // try-with-resources handles closing both BufferedReader and FileReader
    try (BufferedReader br = new BufferedReader(new FileReader("filename.txt"))) {
      
      String line;
      // readLine() returns null when the end of the file is reached
      while ((line = br.readLine()) != null) {
        System.out.println(line);
      }
      
    } catch (IOException e) {
      System.out.println("Error reading file.");
    }
  }
}
```

## Summary: When to use what?
- **`Scanner`**: When you need to parse text (like picking out `int` or `double` values from a string easily).
- **`BufferedReader`**: When you just need to quickly read large volumes of text line-by-line.
- **`FileInputStream`**: When you are reading non-text binary data.


---

## Important Interview Questions

**Q1: Why is `BufferedReader` significantly faster than `FileReader`?**

`FileReader` interacts with the hard drive for every single character read, which is a very slow process. `BufferedReader`, on the other hand, reads a huge chunk of characters from the hard drive at once and stores them in a memory buffer (RAM). Subsequent reads are done extremely quickly from the RAM rather than the hard disk.

**Q2: What does the `readLine()` method in `BufferedReader` return when it reaches the end of the file?**

It returns `null`. This is different from byte streams (which return `-1`). Therefore, a typical reading loop continues as long as `br.readLine() != null`.
