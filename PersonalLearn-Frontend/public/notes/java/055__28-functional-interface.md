# FUNCTIONAL INTERFACE

## Concept Introduction

**Functional Interface** ek aisa interface hai jisme **sirf ek abstract method** hota hai. Yeh **Lambda expressions** aur **Method references** ke saath use hota hai.

**Functional Interface = Interface with exactly ONE abstract method**

Java 8 mein **@FunctionalInterface** annotation introduce hua jo compile-time check karta hai.

---

## Why This Concept Exists

### Problem: Anonymous Classes Verbose

```java
// Before Java 8 - Too verbose!
Runnable r = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running");
    }
};
```

### Solution: Lambda with Functional Interface

```java
// Java 8+ - Clean and concise!
Runnable r = () -> System.out.println("Running");
```

---

## Definitions

### Very Simple Definition
Functional interface ek interface hai jisme sirf ek abstract method ho.

### Simple Definition
A functional interface is an interface with exactly one abstract method. It can have multiple default or static methods. Used with lambda expressions.

### College Exam Definition
A functional interface contains exactly one abstract method (SAM - Single Abstract Method) and can have any number of default and static methods. It is annotated with @FunctionalInterface and is the target type for lambda expressions and method references in Java 8+.

### Technical Definition
A functional interface is an interface that qualifies as a functional descriptor by having exactly one abstract method, enabling it to be instantiated through lambda expressions or method references. While it can contain multiple default methods, static methods, and methods inherited from Object class, only one method must be abstract. The @FunctionalInterface annotation ensures compile-time verification of the interface contract and documents the intent for lambda usage.

### Interview Definition
Functional Interface (Java 8+) has exactly one abstract method (Single Abstract Method - SAM). Key features: (1) Exactly one abstract method, (2) Can have multiple default methods, (3) Can have multiple static methods, (4) Can have Object class methods (equals, toString), (5) @FunctionalInterface annotation (optional but recommended), (6) Used with lambda expressions and method references, (7) Enables functional programming. Built-in functional interfaces: Runnable, Callable, Comparable, Predicate, Function, Consumer, Supplier. Lambda syntax: (parameters) -> expression or (parameters) -> { statements }.

---

## Creating Functional Interface

### Syntax

```java
@FunctionalInterface  // Optional but recommended
interface InterfaceName {
    // Exactly ONE abstract method
    returnType methodName(parameters);
    
    // Can have default methods
    default void method1() { }
    
    // Can have static methods
    static void method2() { }
}
```

### Basic Example

```java
@FunctionalInterface
interface Calculator {
    // Single abstract method
    int calculate(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        // Using lambda expression
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;
        Calculator subtract = (a, b) -> a - b;
        
        System.out.println("10 + 5 = " + add.calculate(10, 5));
        System.out.println("10 * 5 = " + multiply.calculate(10, 5));
        System.out.println("10 - 5 = " + subtract.calculate(10, 5));
    }
}
```

**Output:**
```
10 + 5 = 15
10 * 5 = 50
10 - 5 = 5
```

---

## Lambda Expression Syntax

### No Parameters

```java
@FunctionalInterface
interface Greeting {
    void sayHello();
}

// Lambda
Greeting greeting = () -> System.out.println("Hello!");
greeting.sayHello();
```

---

### One Parameter

```java
@FunctionalInterface
interface Printer {
    void print(String message);
}

// Lambda - parentheses optional for single parameter
Printer printer1 = (message) -> System.out.println(message);
Printer printer2 = message -> System.out.println(message);  // Same
```

---

### Multiple Parameters

```java
@FunctionalInterface
interface Comparator {
    int compare(int a, int b);
}

// Lambda
Comparator comp = (a, b) -> a - b;
```

---

### With Return Statement

```java
@FunctionalInterface
interface Converter {
    String convert(int num);
}

// Single expression - implicit return
Converter conv1 = num -> "Number: " + num;

// Multiple statements - explicit return
Converter conv2 = num -> {
    String result = "Number: " + num;
    return result;
};
```

---

## Real-World Example: Runnable Interface

```java
// Runnable is a functional interface
@FunctionalInterface
interface Runnable {
    void run();
}

public class Main {
    public static void main(String[] args) {
        // Old way - Anonymous class
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("Thread 1 running");
            }
        });
        t1.start();
        
        // New way - Lambda expression
        Thread t2 = new Thread(() -> System.out.println("Thread 2 running"));
        t2.start();
        
        // Even cleaner - Method reference
        Thread t3 = new Thread(() -> printMessage());
        t3.start();
    }
    
    static void printMessage() {
        System.out.println("Thread 3 running");
    }
}
```

---

## Functional Interface with Default and Static Methods

```java
@FunctionalInterface
interface MathOperation {
    // ONE abstract method
    int operate(int a, int b);
    
    // Multiple default methods - OK
    default int square(int n) {
        return n * n;
    }
    
    default int cube(int n) {
        return n * n * n;
    }
    
    // Multiple static methods - OK
    static int add(int a, int b) {
        return a + b;
    }
    
    static int multiply(int a, int b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        // Lambda for abstract method
        MathOperation power = (a, b) -> (int) Math.pow(a, b);
        
        System.out.println("2^3 = " + power.operate(2, 3));
        System.out.println("Square of 5 = " + power.square(5));
        System.out.println("Cube of 3 = " + power.cube(3));
        
        // Static methods called directly
        System.out.println("5 + 3 = " + MathOperation.add(5, 3));
        System.out.println("5 * 3 = " + MathOperation.multiply(5, 3));
    }
}
```

**Output:**
```
2^3 = 8
Square of 5 = 25
Cube of 3 = 27
5 + 3 = 8
5 * 3 = 15
```

---

## Built-in Functional Interfaces (java.util.function)

### 1. Predicate<T> - Boolean Test

```java
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        // Test if number is even
        Predicate<Integer> isEven = num -> num % 2 == 0;
        
        System.out.println("4 is even: " + isEven.test(4));
        System.out.println("5 is even: " + isEven.test(5));
        
        // Test if string length > 5
        Predicate<String> isLong = str -> str.length() > 5;
        System.out.println("'Hello' length > 5: " + isLong.test("Hello"));
        System.out.println("'HelloWorld' length > 5: " + isLong.test("HelloWorld"));
    }
}
```

---

### 2. Function<T, R> - Transform Input to Output

```java
import java.util.function.Function;

public class Main {
    public static void main(String[] args) {
        // String to Integer
        Function<String, Integer> stringLength = str -> str.length();
        System.out.println("Length of 'Java': " + stringLength.apply("Java"));
        
        // Integer to Double
        Function<Integer, Double> toDouble = num -> num * 1.0;
        System.out.println("10 as Double: " + toDouble.apply(10));
        
        // Integer to String
        Function<Integer, String> toString = num -> "Number: " + num;
        System.out.println(toString.apply(42));
    }
}
```

---

### 3. Consumer<T> - Consumes Input (No Return)

```java
import java.util.function.Consumer;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Consumer<String> printer = str -> System.out.println(str);
        printer.accept("Hello");
        
        // With forEach
        List<String> list = Arrays.asList("Java", "Python", "C++");
        list.forEach(item -> System.out.println(item));
        
        // Method reference
        list.forEach(System.out::println);
    }
}
```

---

### 4. Supplier<T> - Supplies Output (No Input)

```java
import java.util.function.Supplier;

public class Main {
    public static void main(String[] args) {
        // Supply random number
        Supplier<Double> randomNum = () -> Math.random();
        System.out.println("Random: " + randomNum.get());
        
        // Supply current time
        Supplier<Long> currentTime = () -> System.currentTimeMillis();
        System.out.println("Time: " + currentTime.get());
        
        // Supply string
        Supplier<String> message = () -> "Hello World";
        System.out.println(message.get());
    }
}
```

---

## Real-World Example: List Operations

```java
import java.util.*;
import java.util.function.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Predicate - Filter even numbers
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.print("Even numbers: ");
        numbers.stream()
               .filter(isEven)
               .forEach(n -> System.out.print(n + " "));
        
        System.out.println();
        
        // Function - Square each number
        Function<Integer, Integer> square = n -> n * n;
        System.out.print("Squares: ");
        numbers.stream()
               .map(square)
               .forEach(n -> System.out.print(n + " "));
        
        System.out.println();
        
        // Consumer - Print with prefix
        Consumer<Integer> printWithPrefix = n -> System.out.print("Num:" + n + " ");
        System.out.print("With prefix: ");
        numbers.forEach(printWithPrefix);
    }
}
```

**Output:**
```
Even numbers: 2 4 6 8 10 
Squares: 1 4 9 16 25 36 49 64 81 100 
With prefix: Num:1 Num:2 Num:3 Num:4 Num:5 Num:6 Num:7 Num:8 Num:9 Num:10
```

---

## @FunctionalInterface Annotation

### Valid

```java
@FunctionalInterface
interface Valid1 {
    void method();  // ✓ One abstract method
}

@FunctionalInterface
interface Valid2 {
    void method();
    default void method2() { }  // ✓ Default methods OK
    static void method3() { }   // ✓ Static methods OK
}

@FunctionalInterface
interface Valid3 {
    void method();
    String toString();  // ✓ Object class methods don't count
    boolean equals(Object obj);
}
```

---

### Invalid

```java
@FunctionalInterface
interface Invalid1 {
    void method1();
    void method2();  // ❌ Two abstract methods
}

@FunctionalInterface
interface Invalid2 {
    default void method() { }  // ❌ No abstract method
}

@FunctionalInterface
interface Invalid3 {
    // ❌ No methods at all
}
```

---

## Method References

```java
@FunctionalInterface
interface Printer {
    void print(String message);
}

public class Main {
    static void displayMessage(String msg) {
        System.out.println(msg);
    }
    
    public static void main(String[] args) {
        // Lambda
        Printer p1 = message -> System.out.println(message);
        
        // Method reference - Static method
        Printer p2 = Main::displayMessage;
        
        // Method reference - Instance method
        Printer p3 = System.out::println;
        
        p1.print("Lambda");
        p2.print("Method Reference 1");
        p3.print("Method Reference 2");
    }
}
```

---

## Important Interview Questions

**Q1: What is a functional interface?**

A functional interface is an interface with exactly one abstract method. It can have multiple default and static methods. Used with lambda expressions.

**Q2: What is @FunctionalInterface annotation?**

It's a marker annotation that ensures the interface has exactly one abstract method at compile time. Optional but recommended.

**Q3: Can functional interface have default methods?**

Yes, functional interfaces can have any number of default and static methods, but exactly one abstract method.

**Q4: Name some built-in functional interfaces.**

Predicate<T>, Function<T,R>, Consumer<T>, Supplier<T>, Runnable, Callable<V>, Comparator<T>

**Q5: What is SAM interface?**

SAM stands for Single Abstract Method. Functional Interface is also called SAM interface.

**Q6: Can we have two abstract methods in functional interface?**

No, functional interface must have exactly one abstract method. Two abstract methods will cause compilation error with @FunctionalInterface.

**Q7: Do Object class methods count as abstract methods?**

No, methods from Object class (equals, hashCode, toString) don't count as abstract methods in functional interfaces.

**Q8: What is lambda expression?**

Lambda expression is a concise way to represent a functional interface implementation using arrow notation: (parameters) -> expression

---

## Short Recap

**Functional Interface** = Interface with **exactly ONE abstract method**

**Key Points:**
- **One abstract method** (SAM)
- Can have **multiple default** methods
- Can have **multiple static** methods
- **@FunctionalInterface** annotation (optional)
- Used with **lambda expressions**
- Enables **functional programming**

**Built-in:** Predicate, Function, Consumer, Supplier, Runnable

**Lambda:** (parameters) -> expression

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                        FUNCTIONAL INTERFACE                                      ║
╚══════════════════════════════════════════════════════════════════════════════════╝

                              ╔═══════════════════╗
                              ║  WHAT IS          ║
                              ║  FUNCTIONAL       ║
                              ║  INTERFACE?       ║
                              ╚═════════╦═════════╝
                                        ║
                                        ▼
                    ╔═══════════════════════════════════════╗
                    ║  An interface with EXACTLY ONE        ║
                    ║  abstract method (SAM - Single        ║
                    ║  Abstract Method)                     ║
                    ╚═══════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    FUNCTIONAL INTERFACE STRUCTURE                                ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                                                                       ║      ║
║   ║   @FunctionalInterface    ←── Optional but recommended annotation     ║      ║
║   ║   interface Calculator {                                              ║      ║
║   ║                                                                       ║      ║
║   ║       // ═══════════════════════════════════════════════════════      ║      ║
║   ║       // EXACTLY ONE abstract method (REQUIRED)                       ║      ║
║   ║       // ═══════════════════════════════════════════════════════      ║      ║
║   ║       int calculate(int a, int b);                                    ║      ║
║   ║                                                                       ║      ║
║   ║       // ═══════════════════════════════════════════════════════      ║      ║
║   ║       // Multiple default methods (ALLOWED)                           ║      ║
║   ║       // ═══════════════════════════════════════════════════════      ║      ║
║   ║       default int square(int n) {                                     ║      ║
║   ║           return calculate(n, n);                                     ║      ║
║   ║       }                                                               ║      ║
║   ║                                                                       ║      ║
║   ║       // ═══════════════════════════════════════════════════════      ║      ║
║   ║       // Multiple static methods (ALLOWED)                            ║      ║
║   ║       // ═══════════════════════════════════════════════════════      ║      ║
║   ║       static int add(int a, int b) {                                  ║      ║
║   ║           return a + b;                                               ║      ║
║   ║       }                                                               ║      ║
║   ║   }                                                                   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   RULE: Only ONE abstract method makes it "functional"!                          ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    BEFORE vs AFTER LAMBDA                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    ❌ BEFORE JAVA 8 (VERBOSE)                         ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   // Anonymous inner class - TOO MUCH CODE!                           ║      ║
║   ║   Calculator add = new Calculator() {                                 ║      ║
║   ║       @Override                                                       ║      ║
║   ║       public int calculate(int a, int b) {                            ║      ║
║   ║           return a + b;                                               ║      ║
║   ║       }                                                               ║      ║
║   ║   };                                                                  ║      ║
║   ║                                                                       ║      ║
║   ║   Runnable r = new Runnable() {                                       ║      ║
║   ║       @Override                                                       ║      ║
║   ║       public void run() {                                             ║      ║
║   ║           System.out.println("Running");                              ║      ║
║   ║       }                                                               ║      ║
║   ║   };                                                                  ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║                                   │                                              ║
║                                   ▼                                              ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                    ✓ JAVA 8+ WITH LAMBDA (CONCISE)                    ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   // Lambda expression - CLEAN!                                       ║      ║
║   ║   Calculator add = (a, b) -> a + b;                                   ║      ║
║   ║   Calculator multiply = (a, b) -> a * b;                              ║      ║
║   ║   Calculator subtract = (a, b) -> a - b;                              ║      ║
║   ║                                                                       ║      ║
║   ║   Runnable r = () -> System.out.println("Running");                   ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    LAMBDA EXPRESSION SYNTAX                                      ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                                                                       ║      ║
║   ║             (parameters) -> expression                                ║      ║
║   ║                   │              │                                    ║      ║
║   ║                   │              └── What to do (body)                ║      ║
║   ║                   │                                                   ║      ║
║   ║                   └── Input parameters                                ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   LAMBDA VARIATIONS:                                                             ║
║   ══════════════════                                                             ║
║                                                                                  ║
║   ┌────────────────────────────────┬─────────────────────────────────────────┐   ║
║   │  SYNTAX                        │  EXAMPLE                                │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  No parameters                 │  () -> System.out.println("Hi")         │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  One parameter                 │  x -> x * x                             │   ║
║   │  (parentheses optional)        │  (x) -> x * x                           │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  Multiple parameters           │  (a, b) -> a + b                        │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  With types                    │  (int a, int b) -> a + b                │   ║
║   ├────────────────────────────────┼─────────────────────────────────────────┤   ║
║   │  Multiple statements           │  (a, b) -> {                            │   ║
║   │  (need curly braces)           │      int sum = a + b;                   │   ║
║   │                                │      return sum;                        │   ║
║   │                                │  }                                      │   ║
║   └────────────────────────────────┴─────────────────────────────────────────┘   ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    BUILT-IN FUNCTIONAL INTERFACES                                ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ┌─────────────────┬─────────────────────┬─────────────────────────────────┐    ║
║   │  INTERFACE      │  METHOD             │  PURPOSE                        │    ║
║   ├─────────────────┼─────────────────────┼─────────────────────────────────┤    ║
║   │  Predicate<T>   │  boolean test(T t)  │  Test condition, return bool    │    ║
║   │                 │                     │  x -> x > 10                    │    ║
║   ├─────────────────┼─────────────────────┼─────────────────────────────────┤    ║
║   │  Function<T,R>  │  R apply(T t)       │  Transform T to R               │    ║
║   │                 │                     │  x -> x.toString()              │    ║
║   ├─────────────────┼─────────────────────┼─────────────────────────────────┤    ║
║   │  Consumer<T>    │  void accept(T t)   │  Consume value, no return       │    ║
║   │                 │                     │  x -> System.out.println(x)     │    ║
║   ├─────────────────┼─────────────────────┼─────────────────────────────────┤    ║
║   │  Supplier<T>    │  T get()            │  Supply value, no input         │    ║
║   │                 │                     │  () -> new Random().nextInt()   │    ║
║   ├─────────────────┼─────────────────────┼─────────────────────────────────┤    ║
║   │  Runnable       │  void run()         │  No input, no output            │    ║
║   │                 │                     │  () -> doSomething()            │    ║
║   ├─────────────────┼─────────────────────┼─────────────────────────────────┤    ║
║   │  Comparator<T>  │  int compare(T,T)   │  Compare two values             │    ║
║   │                 │                     │  (a,b) -> a.compareTo(b)        │    ║
║   └─────────────────┴─────────────────────┴─────────────────────────────────┘    ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    WHAT COUNTS AS ABSTRACT METHOD?                               ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║  ✓ COUNTS as abstract method:                                         ║      ║
║   ║  • Any method without implementation                                  ║      ║
║   ║                                                                       ║      ║
║   ║  ❌ DOES NOT count:                                                   ║      ║
║   ║  • default methods (have implementation)                              ║      ║
║   ║  • static methods (have implementation)                               ║      ║
║   ║  • Object class methods (equals, hashCode, toString)                  ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   EXAMPLE:                                                                       ║
║   ════════                                                                       ║
║                                                                                  ║
║   @FunctionalInterface                                                           ║
║   interface MyInterface {                                                        ║
║       void doWork();                    // ✓ Abstract (counted)                  ║
║                                                                                  ║
║       default void helper() { }         // ❌ Not counted                        ║
║       static void util() { }            // ❌ Not counted                        ║
║       boolean equals(Object o);         // ❌ From Object, not counted           ║
║       String toString();                // ❌ From Object, not counted           ║
║   }                                                                              ║
║                                                                                  ║
║   // Still valid! Only ONE abstract method: doWork()                             ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    METHOD REFERENCE (BONUS)                                      ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   Method references are shorthand for lambdas that call existing methods:        ║
║                                                                                  ║
║   ┌────────────────────────────┬─────────────────────────────────────────────┐   ║
║   │  LAMBDA                    │  METHOD REFERENCE                           │   ║
║   ├────────────────────────────┼─────────────────────────────────────────────┤   ║
║   │  x -> System.out.println(x)│  System.out::println                        │   ║
║   ├────────────────────────────┼─────────────────────────────────────────────┤   ║
║   │  x -> x.toUpperCase()      │  String::toUpperCase                        │   ║
║   ├────────────────────────────┼─────────────────────────────────────────────┤   ║
║   │  () -> new ArrayList()     │  ArrayList::new                             │   ║
║   └────────────────────────────┴─────────────────────────────────────────────┘   ║
║                                                                                  ║
║   USAGE:                                                                         ║
║   list.forEach(System.out::println);   // Print each element                     ║
║   list.stream().map(String::toUpperCase).collect(Collectors.toList());           ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                    KEY TAKEAWAYS                                                 ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║                                                                       ║      ║
║   ║   ✓ Functional Interface = EXACTLY ONE abstract method               ║      ║
║   ║   ✓ @FunctionalInterface = Optional but recommended                  ║      ║
║   ║   ✓ Lambda = Short way to implement functional interface             ║      ║
║   ║   ✓ Enables functional programming in Java                           ║      ║
║   ║   ✓ Used heavily in Stream API                                       ║      ║
║   ║                                                                       ║      ║
║   ║   REMEMBER:                                                           ║      ║
║   ║   • ONE abstract method = Functional Interface                        ║      ║
║   ║   • default/static methods don't count                                ║      ║
║   ║   • Object methods don't count                                        ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
