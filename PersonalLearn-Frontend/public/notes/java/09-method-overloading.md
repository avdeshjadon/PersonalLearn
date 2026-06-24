# METHOD OVERLOADING

## Concept Introduction

Method overloading means having multiple methods with the same name but different parameter lists in the same class.

**Same name, different signatures** - Ek hi method name, but different parameters. Calculator app mein **add(2,3)** bhi aur **add(2,3,4)** bhi - same method name, different implementations!

**Method Overloading = Same Name + Different Parameters = Compile-Time Polymorphism**

---

## Why Method Overloading Exists

Method Overloading exists primarily to improve **code readability** and **usability**.

Without overloading, we would need to create unique method names for every variation of a function (e.g., addTwoInts, addThreeInts, addDoubles), which makes the API difficult to memorize and use.

By using the same name for similar actions, the code becomes cleaner and more intuitive. The compiler handles the complexity of choosing the right method version based on the arguments passed, freeing the programmer from remembering multiple distinct names for logically similar operations.

## Rules for Method Overloading

1.  **Same method name**
2.  **Different parameters** (number/type/order)
3.  **Return type** can be same or different
4.  **Access modifiers** can be different
5.  **Can throw different exceptions**
6.  **Only return type different** - NOT allowed

---

## Types of Overloading

### 1. Different Number of Parameters

This is the most common form of overloading. We can define multiple methods with the same name as long as they accept a different number of arguments. The compiler distinguishes them by counting the arguments passed.

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    int add(int a, int b, int c, int d) {
        return a + b + c + d;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(10, 20));
        System.out.println(calc.add(10, 20, 30));
        System.out.println(calc.add(10, 20, 30, 40));
    }
}
```

### 2. Different Types of Parameters

Methods can have the same name and same number of parameters, provided their data types are different. The compiler checks the type of arguments passed to decide which method to call.

```java
class Printer {
    void print(int num) {
        System.out.println("Integer: " + num);
    }

    void print(double num) {
        System.out.println("Double: " + num);
    }

    void print(String str) {
        System.out.println("String: " + str);
    }

    void print(boolean flag) {
        System.out.println("Boolean: " + flag);
    }
}

public class Main {
    public static void main(String[] args) {
        Printer p = new Printer();
        p.print(100);
        p.print(99.99);
        p.print("Hello");
        p.print(true);
    }
}
```

### 3. Different Order of Parameters

If two methods have the same number of parameters and same types, overloading is still possible if the _order_ of types is different.

```java
class Display {
    void show(int a, String b) {
        System.out.println("Int: " + a + ", String: " + b);
    }

    void show(String a, int b) {
        System.out.println("String: " + a + ", Int: " + b);
    }
}

public class Main {
    public static void main(String[] args) {
        Display d = new Display();
        d.show(10, "Hello");
        d.show("World", 20);
    }
}
```

---

## Valid vs Invalid Overloading

For method overloading to be valid, the **method signature** must change. In Java, the method signature consists of the **method name** and the **parameter list (type, number, order)**.

- **Return type** is NOT part of the method signature.
- **Access modifiers** are NOT part of the method signature.
- **Exception lists** are NOT part of the method signature.

### Valid Examples

Overloading is valid because the parameter lists are different.

```java
// Different number of parameters
void method(int a)
void method(int a, int b)

// Different types
void method(int a)
void method(double a)

// Different order
void method(int a, String b)
void method(String a, int b)

// Return type can differ (with different parameters)
int method(int a)
double method(double a)
```

### Invalid Examples

Overloading is invalid because the parameter lists are identical. The compiler sees these as duplicate methods.

```java
// Only return type different - NOT ALLOWED!
int method(int a)
double method(int a)  // ERROR: method defined is already defined

// Only access modifier different - NOT ENOUGH!
public void method(int a)
private void method(int a)  // ERROR: method defined is already defined

// Variable names don't matter
void method(int num1)
void method(int num2)  // ERROR: method defined is already defined
```

---

## Advantages

| Advantage               | Description                      |
| ----------------------- | -------------------------------- |
| **Readability**         | Same name for similar operations |
| **Code Reusability**    | DRY principle                    |
| **Flexibility**         | Handle different parameter types |
| **Compile-Time Safety** | Errors caught at compile-time    |
| **Clean API**           | Easy to remember method names    |

---

## Important Interview Questions

**Q1: What is Method Overloading?**

Multiple methods with same name but different parameters in same class. It's compile-time polymorphism.

**Q2: Can we overload by changing return type only?**

No! Parameters must be different. Return type alone cannot differentiate methods.

**Q3: Can we overload static methods?**

Yes! Static methods can be overloaded just like instance methods.

**Q4: Can we overload main method?**

Yes! But JVM calls only public static void main(String[] args).

**Q5: Overloading vs Overriding?**

- **Overloading**: Same name, different parameters, same class, compile-time
- **Overriding**: Same signature, different implementation, parent-child, runtime

**Q6: Can we use method overloading inside the main method?**

method overloading is a class-level concept. You cannot define new methods *inside* the main method (or any other method) in Java. However, you can *call* other overloaded methods from within the main method.

---

## Short Recap

**Method Overloading**:

- Same name, different parameters
- Compile-time polymorphism (static binding)
- Parameters must differ in number/type/order
- Return type alone cannot differentiate

**Benefits**: Clean code, readability, flexibility

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                          METHOD OVERLOADING                                      ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                  ╔═══════════════════════════════════════════╗                   ║
║                  ║              SAME METHOD NAME             ║                   ║
║                  ║                  "add"                    ║                   ║
║                  ╚═══════════════════════════════════════════╝                   ║
║                                      │                                           ║
║                ┌─────────────────────┼─────────────────────┐                     ║
║                │                     │                     │                     ║
║                ▼                     ▼                     ▼                     ║
║      ╔══════════════════╗  ╔══════════════════╗  ╔══════════════════╗            ║
║      ║ add(int, int)    ║  ║ add(int,int,int) ║  ║ add(double,      ║            ║
║      ║                  ║  ║                  ║  ║     double)      ║            ║
║      ║ 2 parameters     ║  ║ 3 parameters     ║  ║ Different type   ║            ║
║      ╚══════════════════╝  ╚══════════════════╝  ╚══════════════════╝            ║
║              │                     │                     │                       ║
║              └─────────────────────┼─────────────────────┘                       ║
║                                    ▼                                             ║
║                  ╔═══════════════════════════════════════════╗                   ║
║                  ║       COMPILE-TIME DECISION               ║                   ║
║                  ║   Compiler selects correct method         ║                   ║
║                  ║   based on arguments passed               ║                   ║
║                  ╚═══════════════════════════════════════════╝                   ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                               OVERLOADING RULES                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║    ╔═══════════════════════════════════════════════════════════════════════╗     ║
║    ║                     VALID OVERLOADING ✓                               ║     ║
║    ╠═══════════════════════════════════════════════════════════════════════╣     ║
║    ║                                                                       ║     ║
║    ║   ┌───────────────────────────────────────────────────────────────┐   ║     ║
║    ║   │  1. Different NUMBER of parameters                            │   ║     ║
║    ║   │     void method(int a)                                        │   ║     ║
║    ║   │     void method(int a, int b)         ✓ VALID                 │   ║     ║
║    ║   └───────────────────────────────────────────────────────────────┘   ║     ║
║    ║                                                                       ║     ║
║    ║   ┌───────────────────────────────────────────────────────────────┐   ║     ║
║    ║   │  2. Different TYPES of parameters                             │   ║     ║
║    ║   │     void method(int a)                                        │   ║     ║
║    ║   │     void method(double a)             ✓ VALID                 │   ║     ║
║    ║   └───────────────────────────────────────────────────────────────┘   ║     ║
║    ║                                                                       ║     ║
║    ║   ┌───────────────────────────────────────────────────────────────┐   ║     ║
║    ║   │  3. Different ORDER of parameters                             │   ║     ║
║    ║   │     void method(int a, String b)                              │   ║     ║
║    ║   │     void method(String a, int b)      ✓ VALID                 │   ║     ║
║    ║   └───────────────────────────────────────────────────────────────┘   ║     ║
║    ║                                                                       ║     ║
║    ╚═══════════════════════════════════════════════════════════════════════╝     ║
║                                                                                  ║
║    ╔═══════════════════════════════════════════════════════════════════════╗     ║
║    ║                    INVALID OVERLOADING ✗                              ║     ║
║    ╠═══════════════════════════════════════════════════════════════════════╣     ║
║    ║                                                                       ║     ║
║    ║   ┌───────────────────────────────────────────────────────────────┐   ║     ║
║    ║   │  1. Only RETURN TYPE different                                │   ║     ║
║    ║   │     int method(int a)                                         │   ║     ║
║    ║   │     double method(int a)              ✗ ERROR!                │   ║     ║
║    ║   └───────────────────────────────────────────────────────────────┘   ║     ║
║    ║                                                                       ║     ║
║    ║   ┌───────────────────────────────────────────────────────────────┐   ║     ║
║    ║   │  2. Only PARAMETER NAME different                             │   ║     ║
║    ║   │     void method(int num1)                                     │   ║     ║
║    ║   │     void method(int num2)             ✗ ERROR!                │   ║     ║
║    ║   └───────────────────────────────────────────────────────────────┘   ║     ║
║    ║                                                                       ║     ║
║    ╚═══════════════════════════════════════════════════════════════════════╝     ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                        TYPE PROMOTION CHART                                      ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   When exact match not found, Java promotes smaller types to larger:             ║
║                                                                                  ║
║   ╔══════╗    ╔══════╗    ╔══════╗    ╔══════╗    ╔══════╗    ╔════════╗         ║
║   ║ byte ║ ─> ║short ║ ─> ║ int  ║ ─> ║ long ║ ─> ║float ║ ─> ║ double ║         ║
║   ╚══════╝    ╚══════╝    ╚══════╝    ╚══════╝    ╚══════╝    ╚════════╝         ║
║                              ▲                                                   ║
║                              │                                                   ║
║                          ╔══════╗                                                ║
║                          ║ char ║                                                ║
║                          ╚══════╝                                                ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝

```
