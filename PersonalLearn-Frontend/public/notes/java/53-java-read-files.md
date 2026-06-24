# Java Read Files

There are many ways to read files in Java, but the easiest way to read simple text files is by using the `Scanner` class.

## Read a File using Scanner

We use the `Scanner` class, passing a `File` object into its constructor, to read the contents line by line.

```java
import java.io.File;                  
import java.io.FileNotFoundException; 
import java.util.Scanner;             

public class ReadFile {
  public static void main(String[] args) {
    File myObj = new File("filename.txt");

    // try-with-resources: Scanner will be closed automatically
    try (Scanner myReader = new Scanner(myObj)) {
      while (myReader.hasNextLine()) {
        String data = myReader.nextLine();
        System.out.println(data);
      }
    } catch (FileNotFoundException e) {
      System.out.println("An error occurred. File not found!");
      e.printStackTrace();
    }
  }
}
```

## Getting File Information

You can use the `File` class to extract metadata about a file, such as its path, permissions, and size.

```java
import java.io.File;  

public class GetFileInfo { 
  public static void main(String[] args) {
    File myObj = new File("filename.txt");
    
    if (myObj.exists()) {
      System.out.println("File name: " + myObj.getName());
      System.out.println("Absolute path: " + myObj.getAbsolutePath());
      System.out.println("Writeable: " + myObj.canWrite());
      System.out.println("Readable " + myObj.canRead());
      System.out.println("File size in bytes: " + myObj.length());
    } else {
      System.out.println("The file does not exist.");
    }
  }
}
```

## Useful Scanner Methods

The `Scanner` class is highly versatile and can read data from keyboards (`System.in`), files, or strings. Here are some of its most useful methods for parsing data:

| Method | Return Type | Description |
| :--- | :--- | :--- |
| `hasNext()` | `boolean` | Returns `true` if another token can be found. |
| `hasNextLine()` | `boolean` | Returns `true` if another line of text is available. |
| `hasNextInt()` | `boolean` | Returns `true` if the next token is a valid `int`. |
| `next()` | `String` | Returns the next token (word) in the scanner. |
| `nextLine()` | `String` | Returns the full next line of text. |
| `nextInt()` | `int` | Returns the `int` value of the next token. |
| `nextDouble()` | `double`| Returns the `double` value of the next token. |
| `close()` | `void` | Closes the scanner object. |

## Best Classes for Reading Files
- **`Scanner`**: Best for simple text and parsing numbers/words easily.
- **`BufferedReader`**: Best for large text files (faster, reads line by line).
- **`FileInputStream`**: Best for binary data (images, raw bytes).


---

## Important Interview Questions

**Q1: What is the difference between `Scanner` and `BufferedReader` when reading files?**

`Scanner` is highly versatile and is best suited for parsing text (e.g., extracting integers, doubles, or specific patterns using regular expressions) because of methods like `nextInt()`. However, `BufferedReader` is much faster and uses less memory, making it the preferred choice for reading large chunks of raw text line-by-line.

**Q2: What exception is thrown if you try to read a file using `Scanner` that doesn't exist?**

It throws a `FileNotFoundException`, which is a subclass of `IOException`. You must handle this exception using a `try...catch` block.
