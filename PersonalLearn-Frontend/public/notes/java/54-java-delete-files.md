# Java Delete Files

In Java, you can delete files and folders using the `delete()` method from the `File` class.

## Delete a File

The `delete()` method returns a boolean indicating whether the deletion was successful.

```java
import java.io.File;  

public class DeleteFile {
  public static void main(String[] args) { 
    File myObj = new File("filename.txt"); 
    
    if (myObj.delete()) { 
      System.out.println("Deleted the file: " + myObj.getName());
    } else {
      System.out.println("Failed to delete the file. It might not exist.");
    } 
  } 
}
```

## Delete a Folder

You can also use the exact same `delete()` method to delete a folder (directory). 

> **Critical Warning:** A folder **must be completely empty** before you can delete it using this method. If there are any files inside, `delete()` will return `false`.

```java
import java.io.File; 

public class DeleteFolder {
  public static void main(String[] args) { 
    File myObj = new File("C:\\Users\\MyName\\EmptyFolder"); 
    
    if (myObj.delete()) { 
      System.out.println("Deleted the folder: " + myObj.getName());
    } else {
      System.out.println("Failed to delete the folder. Make sure it is empty!");
    } 
  } 
}
```


---

## Important Interview Questions

**Q1: Can the `delete()` method in the `File` class delete a folder containing files?**

No, the `delete()` method will fail and return `false` if the folder is not completely empty. To delete a folder with files, you must first recursively delete all the files and sub-folders inside it before calling `delete()` on the parent folder.

**Q2: Does the `delete()` method throw an exception if the file does not exist?**

No, it does not throw an exception. It simply returns `false` to indicate that the deletion operation was not successful (because there was nothing to delete).
