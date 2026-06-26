# Java Program to Add Two Numbers

Adding two numbers is the most fundamental operation. Here is how you can add two numbers with and without user input.

## 1. Hardcoded Values

```java
public class Main {
  public static void main(String[] args) {
    int x = 5;
    int y = 6;
    int sum = x + y;
    
    System.out.println("The sum is: " + sum); 
  }
}
```

## 2. Using User Input (Scanner)

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in); 
    
    System.out.print("Enter first number: ");
    int x = scanner.nextInt(); 

    System.out.print("Enter second number: ");
    int y = scanner.nextInt(); 

    int sum = x + y;  
    System.out.println("The sum is: " + sum); 
    
    scanner.close(); // Always close the scanner
  }
}
```

### Explanation
We use the `Scanner` class to read input from the keyboard. The method `nextInt()` reads an integer from the user. We then add the two numbers using the `+` arithmetic operator.
