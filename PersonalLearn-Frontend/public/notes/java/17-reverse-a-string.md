# Reverse a String

A classic interview question. Unlike `StringBuilder`, the `String` class does not have a built-in `reverse()` method.

## 1. Using a For Loop (Manual)

```java
public class Main {
  public static void main(String[] args) {
    String original = "Hello";
    String reversed = "";

    // Loop from the last character down to the first
    for (int i = original.length() - 1; i >= 0; i--) {
      reversed += original.charAt(i);
    }

    System.out.println("Reversed string: " + reversed);
  }
}
```

## 2. Using StringBuilder (Fastest & Best)

```java
public class Main {
  public static void main(String[] args) {
    String original = "World";
    
    // StringBuilder has a built-in reverse function
    StringBuilder sb = new StringBuilder(original);
    sb.reverse();
    
    System.out.println("Reversed string: " + sb.toString());
  }
}
```

### Explanation
Using a `for` loop is good to prove you understand the logic, but `StringBuilder` is the industry standard because it doesn't create dozens of garbage strings in memory like the `+` operator does in a loop.
