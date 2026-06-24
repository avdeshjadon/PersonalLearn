# Java Program to Swap Two Variables

Swapping means exchanging the values of two variables. This is a very common interview question.

## 1. Swapping using a Temporary Variable

This is the standard and most readable approach.

```java
public class Main {
  public static void main(String[] args) {
    int a = 5;
    int b = 10;

    System.out.println("Before swap: a = " + a + ", b = " + b);

    // Swap logic
    int temp = a;
    a = b;
    b = temp;

    System.out.println("After swap: a = " + a + ", b = " + b);
  }
}
```

## 2. Swapping WITHOUT a Temporary Variable

Interviewers often ask to do this without using a third variable. We can use addition and subtraction.

```java
public class Main {
  public static void main(String[] args) {
    int a = 5;
    int b = 10;

    a = a + b; // a becomes 15
    b = a - b; // b becomes 15 - 10 = 5
    a = a - b; // a becomes 15 - 5 = 10

    System.out.println("After swap: a = " + a + ", b = " + b);
  }
}
```

### Explanation
In the first method, we save the value of `a` in a safe box (`temp`), then overwrite `a` with `b`, and finally put the saved value from the safe box into `b`.
