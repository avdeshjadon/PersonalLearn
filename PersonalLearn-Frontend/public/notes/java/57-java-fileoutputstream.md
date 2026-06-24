# Java FileOutputStream

`FileOutputStream` is a **Byte Stream** used to write data to a file in the form of raw bytes. While `FileWriter` is used for text, `FileOutputStream` is necessary when you are dealing with binary files (images, audio, compiled code).

## Write to a File

When writing a string using `FileOutputStream`, you must first convert the text into an array of bytes using `.getBytes()`.

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class Main {
  public static void main(String[] args) {
    String text = "Hello World!";

    try (FileOutputStream output = new FileOutputStream("filename.txt")) {
      output.write(text.getBytes());  // convert String to bytes and write
      System.out.println("Successfully wrote to file.");
    } catch (IOException e) {
      System.out.println("Error writing file.");
      e.printStackTrace();
    }
  }
}
```

## Append to a File

By default, `FileOutputStream` will overwrite any existing content in the file. To enable **append mode**, pass `true` as the second argument in the constructor.

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class Main {
  public static void main(String[] args) {
    String text = "\nAppended text!";

    // true = append mode (keeps existing content)
    try (FileOutputStream output = new FileOutputStream("filename.txt", true)) {
      output.write(text.getBytes());
      System.out.println("Successfully appended to file.");
    } catch (IOException e) {
      System.out.println("Error writing file.");
    }
  }
}
```


---

## Important Interview Questions

**Q1: Why do we need to convert strings to byte arrays when using `FileOutputStream`?**

`FileOutputStream` is a Byte Stream, meaning it strictly understands and writes raw bytes, not human-readable text. Therefore, if you want to write a `String` using this stream, you must use `myString.getBytes()` to translate the characters into their underlying byte representations.

**Q2: Is it better to use `FileOutputStream` or `FileWriter`?**

It entirely depends on the file type. If you are writing binary data (like an image, PDF, or compiled byte code), you **must** use `FileOutputStream`. If you are writing plain text, `FileWriter` is much better because it automatically handles character encoding and conversion for you.
