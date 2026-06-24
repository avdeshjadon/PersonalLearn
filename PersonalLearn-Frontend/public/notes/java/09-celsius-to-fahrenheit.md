# Convert Celsius to Fahrenheit

Converting temperature between metrics is a standard math-based programming exercise.

**Formula:** `Fahrenheit = (Celsius * 9/5) + 32`

## Example

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("Enter temperature in Celsius: ");
    double celsius = scanner.nextDouble();
    
    // Conversion formula
    double fahrenheit = (celsius * 9 / 5) + 32;
    
    System.out.println(celsius + "°C is equal to " + fahrenheit + "°F");
    
    scanner.close();
  }
}
```

### Explanation
Order of operations is important. The multiplication and division happen first, followed by the addition of 32. By using `double`, we ensure the division `9 / 5` doesn't get truncated to an integer `1`.
