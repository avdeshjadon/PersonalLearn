# Java FileInputStream

`FileInputStream` is a **Byte Stream** used to read data from a file in the form of raw bytes. It is best suited for reading binary data (like images, audio, or PDFs), but can also be used to read text.

## Read a Text File (Byte by Byte)

This example uses `FileInputStream` to read a file one byte at a time. We cast the `int` byte back into a `char` so we can see it as text in the console.

```java
import java.io.FileInputStream;  
import java.io.IOException;      

public class Main {
  public static void main(String[] args) {
    
    // try-with-resources ensures the stream closes automatically
    try (FileInputStream input = new FileInputStream("filename.txt")) {

      int i;  // variable to store each byte
      
      // read() returns -1 when the end of the file is reached
      while ((i = input.read()) != -1) {
        // Convert the byte to a character
        System.out.print((char) i);
      }

    } catch (IOException e) {
      System.out.println("Error reading file.");
    }
  }
}
```

## Copy a Binary File (Real-World Example)

The true power of `FileInputStream` shines when handling binary files. Here is a real-world example of copying an image file by reading its raw bytes and writing them to a new file using `FileOutputStream`.

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyFile {
  public static void main(String[] args) {
    // Copy image.jpg to copy.jpg
    try (FileInputStream input = new FileInputStream("image.jpg");
         FileOutputStream output = new FileOutputStream("copy.jpg")) {

      int b;
      while ((b = input.read()) != -1) {
        output.write(b);  // Write the exact same byte to the new file
      }

      System.out.println("Image copied successfully.");

    } catch (IOException e) {
      System.out.println("Error handling file.");
    }
  }
}
```


---

## Important Interview Questions

**Q1: Why does the `read()` method in `FileInputStream` return an `int` instead of a `byte`?**

It returns an `int` so that it can return `-1` to signal the "End of File" (EOF). A single byte can only hold values from `-128` to `127`. If the method returned a `byte`, the value `-1` could represent actual binary data rather than the end of the file. By using an `int` (0 to 255 for actual data, and `-1` for EOF), Java neatly solves this problem.

**Q2: Can `FileInputStream` be used to read text files?**

Yes, `FileInputStream` can read text files because text is ultimately stored as bytes. However, it is not recommended because it processes data byte-by-byte and does not understand character encoding (like UTF-8). For text files, using a Character Stream like `FileReader` is much safer and easier.
