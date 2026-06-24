# Calculate the Area of a Rectangle

The area of a rectangle is calculated by multiplying its length by its width (`Area = length × width`).

## Example

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the length of rectangle: ");
    double length = scanner.nextDouble();

    System.out.print("Enter the width of rectangle: ");
    double width = scanner.nextDouble();

    // Area calculation
    double area = length * width;

    System.out.println("The Area of the rectangle is: " + area);
    
    scanner.close();
  }
}
```

### Explanation
We simply take two inputs as double (to allow decimal values like `5.5`) and multiply them together using the `*` arithmetic operator.
