# Java Enums

An `enum` is a special "class" that represents a group of **constants** (unchangeable variables, like `final` variables). 
Enum is short for "enumerations", which means "specifically listed".

To create an enum, use the `enum` keyword (instead of `class` or `interface`), and separate the constants with a comma. 

> **Note:** By convention, enum constants should be written in **UPPERCASE** letters.

```java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}
```

You can access enum constants with the dot syntax:
```java
Level myVar = Level.MEDIUM;
```

---

## 1. Enum inside a Class

You can also define an enum inside a class:

```java
public class Main {
  enum Level {
    LOW,
    MEDIUM,
    HIGH
  }

  public static void main(String[] args) {
    Level myVar = Level.MEDIUM; 
    System.out.println(myVar); // Outputs: MEDIUM
  }
}
```

---

## 2. Enum in a Switch Statement

Enums are often used in `switch` statements to check for corresponding values:

```java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main {
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM;

    switch(myVar) {
      case LOW:
        System.out.println("Low level");
        break;
      case MEDIUM:
         System.out.println("Medium level");
        break;
      case HIGH:
        System.out.println("High level");
        break;
    }
  }
}
// Outputs: Medium level
```

---

## 3. Loop Through an Enum

The enum type has a built-in `values()` method, which returns an array of all enum constants. This method is highly useful when you want to loop through the constants of an enum:

```java
for (Level myVar : Level.values()) {
  System.out.println(myVar);
}
// Outputs:
// LOW
// MEDIUM
// HIGH
```

---

## 4. Difference between Enums and Classes

An enum can, just like a class, have attributes and methods. The only difference is that enum constants are `public`, `static` and `final` (unchangeable - cannot be overridden).

- An enum **cannot** be used to create objects.
- An enum **cannot** extend other classes (because it implicitly extends `java.lang.Enum`).
- An enum **can** implement interfaces.

### Why And When To Use Enums?
Use enums when you have values that you know aren't going to change, like:
- Month days
- Days of the week
- Colors
- Deck of cards
- Directions (NORTH, SOUTH, EAST, WEST)

---

## 5. Enum Constructor

An enum can also have a constructor just like a class. The constructor is called automatically when the constants are created. You **cannot** call the constructor yourself (using `new`).

Here, each constant in the enum has a value (a string) that is set through the constructor:

```java
enum Level {
  // Enum constants (each has its own description passed to constructor)
  LOW("Low level"),
  MEDIUM("Medium level"),
  HIGH("High level");

  // Field (variable) to store the description text
  private String description;

  // Constructor (runs once for each constant above)
  private Level(String description) {
    this.description = description;
  }

  // Getter method to read the description
  public String getDescription() {
    return description;
  }
}

public class Main {
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM; 
    System.out.println(myVar.getDescription()); // Prints "Medium level"
  }
}
```

> **Note:** The constructor for an enum **must** be `private` or package-private. If you don't write `private`, Java adds it automatically. You cannot make it `public` or `protected`.

### Loop Through Enum with Constructor
You can also loop through the constants and print their descriptions using the `values()` method:

```java
for (Level myVar : Level.values()) {
  System.out.println(myVar + ": " + myVar.getDescription());
}
// Output:
// LOW: Low level
// MEDIUM: Medium level
// HIGH: High level
```

---

## Important Interview Questions

**Q1: Can an Enum extend a class in Java?**
**Answer:** No. Every enum in Java implicitly extends the `java.lang.Enum` class. Since Java does not support multiple inheritance for classes, an enum cannot extend any other class. However, an enum can implement multiple interfaces.

**Q2: Can we create an object of Enum using the `new` keyword?**
**Answer:** No, you cannot instantiate an enum using the `new` keyword. Enums are meant to hold a fixed set of constants, and their objects are created automatically by the JVM.

**Q3: Can Enum have a main method?**
**Answer:** Yes, an enum can have a `main()` method, and we can run it directly from the command line just like a regular class.
