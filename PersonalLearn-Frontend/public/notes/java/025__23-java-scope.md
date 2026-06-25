# Java Scope

In Java, variables are only accessible inside the region where they are created. This concept is called **scope**.

---

## 1. Method Scope

Variables declared directly inside a method are available anywhere in the method, but *only after* the line of code in which they were declared.

```java
public class Main {
  public static void main(String[] args) {

    // Code here CANNOT use x

    int x = 100;

    // Code here CAN use x
    System.out.println(x);
  }
}
```

---

## 2. Block Scope

A block of code refers to all of the code enclosed between curly braces `{ }`. 

Variables declared inside a block of code are only accessible by the code between those curly braces, and only after the line in which the variable was declared.

```java
public class Main {
  public static void main(String[] args) {

    // Code here CANNOT use x

    { // This is a block

      // Code here CANNOT use x

      int x = 100;

      // Code here CAN use x
      System.out.println(x);

    } // The block ends here

    // Code here CANNOT use x
  }
}
```
A block of code can stand alone, or be part of an `if`, `while`, or `for` statement.

---

## 3. Loop Scope

Variables declared inside the initialization part of a `for` loop only exist inside the loop's block.

```java
public class Main {
  public static void main(String[] args) {

    for (int i = 0; i < 5; i++) {
      System.out.println(i); // i is accessible here
    }

    // i is NOT accessible here
  }
}
```

- The `for` loop has its own block (`{ ... }`).
- The variable `i` declared in the loop header (`int i = 0`) is only accessible inside that loop block.
- Once the loop ends, `i` is destroyed, so you can't use it outside.

### Why this matters
Because loop variables are not available outside the loop, you can safely reuse the same variable name (like `i`, `j`, etc.) in different loops within the same method:

```java
public class Main {
  public static void main(String[] args) {

    for (int i = 0; i < 3; i++) {
      System.out.println("Loop 1: " + i);
    }

    // i was destroyed after the first loop, so we can declare it again
    for (int i = 0; i < 2; i++) {
      System.out.println("Loop 2: " + i);
    }
  }
}
```

---

## Important Interview Questions

**Q1: Can we use the same variable name inside two different methods of the same class?**
**Answer:** Yes, because variables declared inside a method have "method scope". They cannot be accessed from outside that method, so the names won't clash.

**Q2: What will happen if you try to print a `for` loop variable outside the loop?**
**Answer:** The compiler will throw an error (usually "cannot find symbol") because the variable was destroyed as soon as the loop's block ended. It only had "loop scope".
