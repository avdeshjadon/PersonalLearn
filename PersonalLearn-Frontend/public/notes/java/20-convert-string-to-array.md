# Convert String to Array

It is very common to need to split a long string into individual pieces (like words) and store them in an array.

## Example

```java
public class Main {
  public static void main(String[] args) {
    String text = "Java Python C++ Ruby";

    // Split using space as the delimiter
    String[] languages = text.split(" ");

    System.out.println("Array Elements:");
    for (String lang : languages) {
      System.out.println(lang);
    }
  }
}
```

### Convert String to Char Array

If you want an array of individual letters instead of words:

```java
public class Main {
  public static void main(String[] args) {
    String word = "Hello";
    
    char[] letters = word.toCharArray();
    
    for (char c : letters) {
      System.out.println(c);
    }
  }
}
```

### Explanation
The `split(" ")` method breaks the string whenever it sees a space. `toCharArray()` converts the entire string into an array of primitive `char` variables.
