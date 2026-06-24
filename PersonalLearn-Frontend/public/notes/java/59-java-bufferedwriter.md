# Java BufferedWriter

Similar to `BufferedReader`, **`BufferedWriter`** uses an internal memory buffer to make writing text to files much faster and more efficient, especially for large files.

## Write to a Text File

You wrap a `FileWriter` inside a `BufferedWriter`. 
A highly useful method provided by `BufferedWriter` is `newLine()`, which automatically inserts the correct line break depending on your Operating System (e.g., `\r\n` for Windows, `\n` for Linux/Mac).

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
  public static void main(String[] args) {
    try (BufferedWriter bw = new BufferedWriter(new FileWriter("filename.txt"))) {
      
      bw.write("First line of text");
      bw.newLine();  // Safely adds an OS-independent line break
      bw.write("Second line of text");
      
      System.out.println("Successfully wrote to the file.");
      
    } catch (IOException e) {
      System.out.println("Error writing file.");
    }
  }
}
```

## Append to a Text File

If you want to add text without overwriting the original file, pass `true` to the underlying `FileWriter`.

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
  public static void main(String[] args) {
    
    // Pass 'true' to FileWriter for append mode
    try (BufferedWriter bw = new BufferedWriter(new FileWriter("filename.txt", true))) {
      
      bw.newLine();                      // move to a new line
      bw.write("This line is appended!"); // add new text at the end
      
      System.out.println("Successfully appended to the file.");
      
    } catch (IOException e) {
      System.out.println("Error writing file.");
    }
  }
}
```


---

## Important Interview Questions

**Q1: What is the advantage of using the `newLine()` method in `BufferedWriter`?**

Different operating systems use different characters to represent a new line (e.g., `\r\n` on Windows, `\n` on Linux/Mac). Using the `newLine()` method automatically inserts the correct line separator for the system your Java program is running on, making your code perfectly cross-platform.

**Q2: Does `BufferedWriter` communicate directly with the file?**

No, `BufferedWriter` acts as a "wrapper". It buffers the data in memory for efficiency, but it still requires an underlying character stream (like `FileWriter`) to handle the actual physical writing to the disk once the buffer is full (or flushed).
