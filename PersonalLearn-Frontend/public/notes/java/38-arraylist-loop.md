# Loop Through an ArrayList

Since `ArrayList` is a dynamic collection, the way we loop through it differs slightly from a standard Array.

## Example

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");

    // 1. Using a standard For Loop
    System.out.println("--- Standard For Loop ---");
    for (int i = 0; i < cars.size(); i++) {
      System.out.println(cars.get(i));
    }

    // 2. Using a For-Each Loop (Preferred)
    System.out.println("--- For-Each Loop ---");
    for (String car : cars) {
      System.out.println(car);
    }
  }
}
```

### Explanation
Notice that for an `ArrayList`, we use `.size()` instead of `.length`, and we retrieve elements using `.get(i)` instead of brackets `[i]`. The enhanced `for-each` loop is generally the cleanest approach.
