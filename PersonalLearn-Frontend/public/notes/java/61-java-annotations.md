# Java Annotations

Annotations are special notes you add to your Java code. They start with the `@` symbol.

They don't change how your program runs natively, but they give extra information to the compiler, JVM, or other tools.

## Built-in Annotations

Java includes several built-in annotations. Here are some of the most commonly used:

| Annotation | Description |
| :--- | :--- |
| `@Override` | Indicates that a method overrides a method in a superclass |
| `@Deprecated` | Marks a method or class as outdated or discouraged from use |
| `@SuppressWarnings` | Tells the compiler to ignore certain warnings |

## @Override Annotation

The `@Override` annotation helps the compiler check that a method really overrides a method from a superclass. It's not required, but highly recommended because it prevents silent mistakes.

```java
class Animal {
  void makeSound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  @Override
  void makeSound() {
    System.out.println("Woof!");
  }
}
```

If you accidentally write a typo like `makesound()`, the compiler will throw an error: `method does not override or implement a method from a supertype`.

## @Deprecated Annotation

The `@Deprecated` annotation warns developers not to use a method because it may be removed or replaced in the future:

```java
public class Main {
  @Deprecated
  static void oldMethod() {
    System.out.println("This method is outdated.");
  }

  public static void main(String[] args) {
    oldMethod(); // Shows a strike-through and warning in most IDEs
  }
}
```

## @SuppressWarnings Annotation

The `@SuppressWarnings` annotation tells the compiler to ignore specific warnings, like "unchecked" or "deprecation":

```java
import java.util.ArrayList;

public class Main {
  @SuppressWarnings("unchecked")
  public static void main(String[] args) {
    ArrayList cars = new ArrayList(); // Using raw types causes warning
    cars.add("Volvo");
    System.out.println(cars);
  }
}
```

---

## Important Interview Questions

**Q1: What is the purpose of the `@Override` annotation?**

It instructs the compiler to verify that a method is actually overriding a method from its parent class or interface. If there is a typo or mismatch in the method signature, the compiler throws an error, preventing hidden bugs.

**Q2: Do annotations change how a program executes?**

Built-in core Java annotations like `@Override` or `@Deprecated` do not change program behavior; they provide metadata for the compiler. However, custom annotations (commonly used in frameworks like Spring Boot or Hibernate) are processed at runtime using Reflection to heavily alter application logic and configuration.
