# Java Write To Files

If you are just starting with Java, the easiest way to write text to a file is by using the `FileWriter` class.

## Write To a File

In the example below, we use `FileWriter` together with its `write()` method to create and write some text into a file. 

> **Crucial Rule:** When you are done writing to a file, you must **always** close the writer using the `close()` method to free system resources and ensure all data is actually saved.

```java
import java.io.FileWriter;   
import java.io.IOException;  

public class WriteToFile {
  public static void main(String[] args) {
    try {
      FileWriter myWriter = new FileWriter("filename.txt");
      myWriter.write("Files in Java might be tricky, but it is fun enough!");
      myWriter.close();  // must close manually
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}
```

## Write To a File with try-with-resources

Since Java 7, you can use the **try-with-resources** statement. This is a much safer approach because it automatically closes the file for you, even if an error occurs. You don't need to manually call `myWriter.close()`.

```java
import java.io.FileWriter;
import java.io.IOException;

public class WriteToFile {
  public static void main(String[] args) {
    // FileWriter will be closed automatically here
    try (FileWriter myWriter = new FileWriter("filename.txt")) {
      myWriter.write("Files in Java might be tricky, but it is fun enough!");
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}
```

## Append to a File

Normally, `FileWriter` will overwrite the file completely if it already exists. If you want to **add** new content at the end of the file (without deleting what's already there), you can pass `true` as the second parameter to put the writer into **append mode**:

```java
import java.io.FileWriter;
import java.io.IOException;

public class AppendToFile {
  public static void main(String[] args) {
    // true = append mode
    try (FileWriter myWriter = new FileWriter("filename.txt", true)) {
      myWriter.write("\nAppended text!");
      System.out.println("Successfully appended to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}
```

## Best Classes for Writing Files
- **`FileWriter`**: Easiest choice for basic text.
- **`BufferedWriter`**: Better for large text files (faster and supports `newLine()`).
- **`FileOutputStream`**: Best for binary data (images, audio, PDFs).


---

## Important Interview Questions

**Q1: Why is it critical to call the `close()` method when writing to a file in Java?**

Closing the writer ensures that all data buffered in memory is completely flushed (written) to the physical disk. It also releases system resources (like file locks) tied to that operation. If you forget to close the writer, the written data might be lost or the file might become locked by the JVM.

**Q2: How do you prevent `FileWriter` from overwriting an existing file?**

By default, `FileWriter` completely overwrites the existing file. To prevent this and instead append data to the end of the file, you must use the constructor that accepts a boolean flag for append mode: `new FileWriter("file.txt", true)`.
