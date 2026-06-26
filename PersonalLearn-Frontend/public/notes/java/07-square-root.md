# Find the Square Root of a Number

Java provides an excellent built-in math library for advanced calculations.

## Example

```java
public class Main {
  public static void main(String[] args) {
    double number = 64.0;
    
    // Using the built-in Math.sqrt() method
    double squareRoot = Math.sqrt(number);

    System.out.println("The square root of " + number + " is " + squareRoot);
  }
}
```

**Output:**
```text
The square root of 64.0 is 8.0
```

### Explanation
The `Math.sqrt()` method is a static method in the `java.lang.Math` class. It takes a `double` as an argument and returns the positive square root of that value.
