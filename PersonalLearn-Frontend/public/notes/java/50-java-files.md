# Java File Handling

File handling is an essential part of any application. Java provides several mechanisms to create, read, update, and delete files.

## The `File` Class

The `File` class from the `java.io` package allows us to work with files and directories. 
To use the `File` class, you must first create an object of the class and specify the file name or directory path.

```java
import java.io.File;  // Import the File class

public class Main {
  public static void main(String[] args) {
    File myObj = new File("filename.txt"); // Specify the filename
  }
}
```

> **Note:** The `File` class itself does not read or write data. It is only used to represent the file path and get information about the file or directory. To read/write data, you will use specific I/O classes.

## Common `File` Methods

The `File` class has many useful methods for creating and getting information about files:

| Method | Return Type | Description |
| :--- | :--- | :--- |
| `canRead()` | `boolean` | Tests whether the file is readable or not. |
| `canWrite()` | `boolean` | Tests whether the file is writable or not. |
| `createNewFile()` | `boolean` | Creates an empty file. |
| `delete()` | `boolean` | Deletes a file. |
| `exists()` | `boolean` | Tests whether the file exists. |
| `getName()` | `String` | Returns the name of the file. |
| `getAbsolutePath()` | `String` | Returns the absolute pathname of the file. |
| `length()` | `long` | Returns the size of the file in bytes. |
| `list()` | `String[]` | Returns an array of the files and folders in the directory. |
| `mkdir()` | `boolean` | Creates a new directory. |


---

## Important Interview Questions

**Q1: What is the purpose of the `File` class in Java?**

The `File` class in Java is used to represent file and directory pathnames. It provides methods to create, delete, check existence, and retrieve metadata (like size or permissions) of files, but it does **not** read or write the actual file content.

**Q2: Does creating a `File` object in Java automatically create a file on the hard drive?**

No. Using `new File("test.txt")` only creates an object in Java's memory that points to a specific path. The actual physical file is not created until you call the `createNewFile()` method on that object or write to it using an output stream.
