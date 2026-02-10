# METHOD OVERLOADING

## Concept Introduction

**Same name, different signatures** - Ek hi method name, but different parameters. Calculator app mein **add(2,3)** bhi aur **add(2,3,4)** bhi - same method name, different implementations!

**Method Overloading = Same Name + Different Parameters = Compile-Time Polymorphism**

Real Example: **System.out.println()** - int, double, String sab print kar sakta hai - same method name!

---

## Why Method Overloading Exists

### The Problem
```java
int addTwoNumbers(int a, int b)
int addThreeNumbers(int a, int b, int c)
double addTwoDecimals(double a, double b)
// Confusing names!
```

### The Solution
```java
int add(int a, int b)           // Clean!
int add(int a, int b, int c)    // Same name
double add(double a, double b)  // Easy to remember
```

---

## Definitions

### Very Simple Definition
Same method name, different parameters (number ya type).

### Simple Definition
Method overloading means having multiple methods with the same name but different parameter lists in the same class.

### Interview Definition
Method overloading is a compile-time polymorphism feature where multiple methods share the same name but have different parameter lists (number, type, or order of parameters). It allows methods to perform similar operations on different types or quantities of data, improving code readability and reusability. The correct method is selected at compile-time based on the method signature.

---

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
        System.out.println(calc.add(10, 20));         // 30
        System.out.println(calc.add(10, 20, 30));     // 60
        System.out.println(calc.add(10, 20, 30, 40)); // 100
    }
}
```

### 2. Different Types of Parameters

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
        p.print(100);        // Integer: 100
        p.print(99.99);      // Double: 99.99
        p.print("Hello");    // String: Hello
        p.print(true);       // Boolean: true
    }
}
```

### 3. Different Order of Parameters

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
        d.show(10, "Hello");    // Int: 10, String: Hello
        d.show("World", 20);    // String: World, Int: 20
    }
}
```

---

## Valid vs Invalid Overloading

###  Valid Examples

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

###  Invalid Examples

```java
// Only return type different - NOT ALLOWED!
int method(int a)
double method(int a)  // ERROR!

// Only access modifier different - NOT ENOUGH!
public void method(int a)
private void method(int a)  // ERROR!

// Variable names don't matter
void method(int num1)
void method(int num2)  // ERROR! Same signature
```

---

## Real-World Example: WhatsApp

```java
class WhatsApp {
    // Send text message
    void sendMessage(String message) {
        System.out.println(" Sending text: " + message);
    }
    
    // Send image with caption
    void sendMessage(String imagePath, String caption) {
        System.out.println(" Sending image: " + imagePath);
        System.out.println("Caption: " + caption);
    }
    
    // Send video
    void sendMessage(String videoPath, int durationSeconds) {
        System.out.println(" Sending video: " + videoPath);
        System.out.println("Duration: " + durationSeconds + "s");
    }
    
    // Send document
    void sendMessage(String docPath, double sizeMB, String type) {
        System.out.println(" Sending " + type + ": " + docPath);
        System.out.println("Size: " + sizeMB + " MB");
    }
}

public class Main {
    public static void main(String[] args) {
        WhatsApp wa = new WhatsApp();
        
        wa.sendMessage("Hello!");
        wa.sendMessage("photo.jpg", "Sunset");
        wa.sendMessage("video.mp4", 45);
        wa.sendMessage("report.pdf", 2.5, "PDF");
    }
}
```

---

## Overloading main() Method

**Yes, we can overload main()!** But JVM calls only the standard signature.

```java
public class Main {
    // JVM calls this
    public static void main(String[] args) {
        System.out.println("Main method called by JVM");
        main(10);
        main("Hello");
    }
    
    // Overloaded - we can call manually
    public static void main(int num) {
        System.out.println("Overloaded main with int: " + num);
    }
    
    // Overloaded - we can call manually
    public static void main(String str) {
        System.out.println("Overloaded main with String: " + str);
    }
}
```

---

## Advantages

| Advantage | Description |
|-----------|-------------|
| **Readability** | Same name for similar operations |
| **Code Reusability** | DRY principle |
| **Flexibility** | Handle different parameter types |
| **Compile-Time Safety** | Errors caught at compile-time |
| **Clean API** | Easy to remember method names |

---

## Important Interview Questions

**Q1: What is Method Overloading?**

Multiple methods with same name but different parameters in same class. It's compile-time polymorphism.

**Q2: Can we overload by changing return type only?**

No! Parameters must be different. Return type alone cannot differentiate methods.

**Q3: Can we overload static methods?**

Yes! Static methods can be overloaded just like instance methods.

**Q4: Can we overload main method?**

Yes! But JVM calls only `public static void main(String[] args)`.

**Q5: Overloading vs Overriding?**

- **Overloading**: Same name, different parameters, same class, compile-time
- **Overriding**: Same signature, different implementation, parent-child, runtime

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
║                  ║           SAME METHOD NAME                ║                   ║
║                  ║              "add"                        ║                   ║
║                  ╚═══════════════════════════════════════════╝                   ║
║                                    │                                             ║
║              ┌─────────────────────┼─────────────────────┐                       ║
║              │                     │                     │                       ║
║              ▼                     ▼                     ▼                       ║
║   ╔══════════════════╗  ╔══════════════════╗  ╔══════════════════╗               ║
║   ║ add(int, int)    ║  ║ add(int,int,int) ║  ║ add(double,      ║               ║
║   ║                  ║  ║                  ║  ║     double)      ║               ║
║   ║ 2 parameters     ║  ║ 3 parameters     ║  ║ Different type   ║               ║
║   ╚══════════════════╝  ╚══════════════════╝  ╚══════════════════╝               ║
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
║                         OVERLOADING RULES                                        ║
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
╠══════════════════════════════════════════════════════════════════════════════════╣
║                     OVERLOADING FLOW DIAGRAM                                     ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                    ╔════════════════════════════╗                                ║
║                    ║   Method Call: add(5, 10)  ║                                ║
║                    ╚════════════════════════════╝                                ║
║                                   │                                              ║
║                                   ▼                                              ║
║                    ╔════════════════════════════╗                                ║
║                    ║    COMPILER analyzes       ║                                ║
║                    ║    argument types          ║                                ║
║                    ╚════════════════════════════╝                                ║
║                                   │                                              ║
║                                   ▼                                              ║
║                    ╔════════════════════════════╗                                ║
║                    ║  Find matching signature   ║                                ║
║                    ║  add(int, int) ✓           ║                                ║
║                    ╚════════════════════════════╝                                ║
║                                   │                                              ║
║                                   ▼                                              ║
║                    ╔════════════════════════════╗                                ║
║                    ║    STATIC BINDING          ║                                ║
║                    ║  (Compile-time decision)   ║                                ║
║                    ╚════════════════════════════╝                                ║
║                                   │                                              ║
║                                   ▼                                              ║
║                    ╔════════════════════════════╗                                ║
║                    ║    Method Executed: 15     ║                                ║
║                    ╚════════════════════════════╝                                ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
