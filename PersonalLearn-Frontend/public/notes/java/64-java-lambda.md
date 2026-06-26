# Java Lambda Expressions

Lambda Expressions were added in Java 8. A lambda expression is a short block of code that takes in parameters and returns a value. 

Lambdas look similar to methods, but they do not need a name, and they can be written right inside a method body.

## Syntax

```java
// Single parameter
parameter -> expression

// Multiple parameters
(parameter1, parameter2) -> expression

// Complex block
(parameter1, parameter2) -> {
  // code block
  return result;
}
```

## Using Lambda Expressions

Lambdas are often passed as arguments to methods. For example, the `forEach()` method of an ArrayList:

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<>();
    numbers.add(5);
    numbers.add(9);
    
    // Lambda expression in action!
    numbers.forEach((n) -> { System.out.println(n); });
  }
}
```

## Lambdas in Variables

A lambda expression can be stored in a variable. The variable's type must be an interface with exactly one method (a **functional interface**). 

```java
import java.util.ArrayList;
import java.util.function.Consumer;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<>();
    numbers.add(5);
    numbers.add(9);
    
    // Storing lambda in a functional interface variable
    Consumer<Integer> method = (n) -> { System.out.println(n); };
    numbers.forEach(method);
  }
}
```

## Anonymous Class vs. Lambda Expression

In Java 8+, you can replace an anonymous class with a lambda expression — but **only** if the interface has exactly one abstract method.

**Old Way (Anonymous Class):**
```java
Greeting g = new Greeting() {
  public void sayHello() {
    System.out.println("Hello from anonymous class");
  }
}; 
```

**New Way (Lambda):**
```java
Greeting g = () -> System.out.println("Hello from lambda");
```

---

## Important Interview Questions

**Q1: What is a Lambda Expression in Java?**

Introduced in Java 8, a lambda expression is a concise block of code that takes parameters and returns a value. It provides a clear way to represent anonymous functions and significantly reduces boilerplate code.

**Q2: Can a lambda expression be used with any interface?**

No. Lambda expressions can only be used with "Functional Interfaces" — which are interfaces that contain exactly one abstract method (such as `Runnable`, `Comparator`, or `Consumer`).
