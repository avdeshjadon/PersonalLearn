# Java Methods

A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as **functions**. 

Why use methods? To reuse code: define the code once, and use it many times.

---

## 1. Parameters and Arguments

Information can be passed to methods as a parameter. Parameters act as variables inside the method. They are specified after the method name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.

```java
public class Main {
  static void myMethod(String fname) {
    System.out.println(fname + " Refsnes");
  }

  public static void main(String[] args) {
    myMethod("Liam");
    myMethod("Jenny");
    myMethod("Anja");
  }
}
// Output:
// Liam Refsnes
// Jenny Refsnes
// Anja Refsnes
```

> **Note:** When a parameter is passed to the method, it is called an **argument**. So, in the example above: `fname` is a *parameter*, while `"Liam"`, `"Jenny"`, and `"Anja"` are *arguments*.

### Multiple Parameters
You can have as many parameters as you like:

```java
public class Main {
  static void myMethod(String fname, int age) {
    System.out.println(fname + " is " + age);
  }

  public static void main(String[] args) {
    myMethod("Liam", 5);
    myMethod("Jenny", 8);
    myMethod("Anja", 31);
  }
}
// Output:
// Liam is 5
// Jenny is 8
// Anja is 31
```
*Note that when you are working with multiple parameters, the method call must have the same number of arguments as there are parameters, and the arguments must be passed in the same order.*

### Using If...Else Inside Methods
It is common to use `if...else` statements inside methods to perform conditional logic based on the passed arguments:

```java
public class Main {
  static void checkAge(int age) {
    if (age < 18) {
      System.out.println("Access denied - You are not old enough!");
    } else {
      System.out.println("Access granted - You are old enough!");
    }
  }

  public static void main(String[] args) {
    checkAge(20); // Call the checkAge method
  }
}
// Output: Access granted - You are old enough!
```

---

## 2. Return Values

The `void` keyword indicates that the method should not return a value. If you want the method to return a value, you can use a primitive data type (such as `int`, `char`, etc.) instead of `void`, and use the `return` keyword inside the method.

```java
public class Main {
  static int myMethod(int x, int y) {
    return x + y;
  }

  public static void main(String[] args) {
    // You can directly print it
    System.out.println(myMethod(5, 3)); // Outputs 8
    
    // Or store it in a variable (recommended)
    int z = myMethod(5, 3);
    System.out.println(z); // Outputs 8
  }
}
```

### Practical Example (Using loops & return)
```java
public class Main {
  static int doubleGame(int x) {
    return x * 2;
  }

  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      System.out.println("Double of " + i + " is " + doubleGame(i));
    }
  }
}
```

---

## 3. Java Method Overloading

With **method overloading**, multiple methods can have the **same name** but **different parameters** (either different number of parameters or different data types).

```java
int myMethod(int x)
float myMethod(float x)
double myMethod(double x, double y)
```

Instead of defining two methods that do the same thing with different names (like `plusMethodInt` and `plusMethodDouble`), it is better to overload one method name:

```java
public class Main {
  static int plusMethod(int x, int y) {
    return x + y;
  }

  static double plusMethod(double x, double y) {
    return x + y;
  }

  public static void main(String[] args) {
    int myNum1 = plusMethod(8, 5);
    double myNum2 = plusMethod(4.3, 6.26);
    System.out.println("int: " + myNum1);
    System.out.println("double: " + myNum2);
  }
}
```
> **Note:** Multiple methods can have the same name as long as the number and/or type of parameters are different. You **cannot** overload a method just by changing its return type.

---

## Important Interview Questions

**Q1: What is the difference between an argument and a parameter?**
**Answer:** A parameter is a variable defined in the method declaration. An argument is the actual value that is passed to the method when it is invoked.

**Q2: Can we overload a method by simply changing its return type?**
**Answer:** No, changing only the return type is not enough for method overloading. The method signature (name and parameter list) must be different. If only the return type is changed, it will cause a compile-time error.

**Q3: What does the `return` keyword do?**
**Answer:** It immediately terminates the method's execution and optionally returns a value to the caller.
