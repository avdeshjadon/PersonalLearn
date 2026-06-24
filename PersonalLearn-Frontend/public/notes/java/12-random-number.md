# Generate a Random Number

Java provides the `Math.random()` method or the `Random` class to generate unpredictable numbers.

## 1. Using Math.random()

```java
public class Main {
  public static void main(String[] args) {
    // Math.random() returns a double between 0.0 (inclusive) and 1.0 (exclusive)
    double randomVal = Math.random();
    System.out.println("Random Double: " + randomVal);
    
    // To get an integer between 0 and 100
    int randomInt = (int)(Math.random() * 101);
    System.out.println("Random Integer (0-100): " + randomInt);
  }
}
```

## 2. Using java.util.Random

```java
import java.util.Random;

public class Main {
  public static void main(String[] args) {
    Random rand = new Random();

    // Generate random integers in range 0 to 49
    int rand_int = rand.nextInt(50);
    System.out.println("Random Integer (0-49): " + rand_int);
  }
}
```

### Explanation
`Math.random()` is quick and easy for basic math, while the `java.util.Random` class offers more powerful methods like `nextBoolean()`, `nextGaussian()`, and precise integer ranges.
