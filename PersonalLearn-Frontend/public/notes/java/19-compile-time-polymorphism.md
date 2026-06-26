# COMPILE-TIME POLYMORPHISM

## Concept Introduction

**Compile-Time Polymorphism** Compile-time polymorphism, also known as static polymorphism or early binding, is achieved through method overloading. Multiple methods can have the same name with different parameter lists (number, type, or order of parameters). The appropriate method is selected by the compiler at compile time based on the method signature.

**Hinglish Explanation:**
Jab hum code compile karte hain, usi time compiler ko pata chal jata hai ki kaunsa method execute hoga (based on the arguments passed). Isliye ise **Early Binding** bhi kehte hain kyunki bading (linking) jaldi ho jati hai.

*   **Key Mechanism:** Method Overloading.
*   **Decision Basis:** Method Signature (Name + Parameters).
*   **Java Fact:** Java supports Method Overloading but does NOT support user-defined Operator Overloading.

---

## Why This Concept Exists

### Problem: Multiple Similar Operations

```java
class Calculator {
    int addTwoIntegers(int a, int b) {
        return a + b;
    }
    
    int addThreeIntegers(int a, int b, int c) {
        return a + b + c;
    }
    
    double addTwoDoubles(double a, double b) {
        return a + b;
    }
}
```

**Problems:**
- Too many method names
- Confusing for developers
- Hard to remember

### Solution: Method Overloading

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    double add(double a, double b) {
        return a + b;
    }
}
```

**Same name, different parameters!**

---

## Definitions

### Very Simple Definition
Compile-time polymorphism matlab same method name, different parameters, aur method compile time par decide ho jaye.

### Simple Definition
Compile-time polymorphism is achieved through method overloading where multiple methods have the same name but different parameters. The compiler decides which method to call based on the method signature.

### College Exam Definition
Compile-time polymorphism, also known as static polymorphism or early binding, is achieved through method overloading. Multiple methods can have the same name with different parameter lists (number, type, or order of parameters). The appropriate method is selected by the compiler at compile time based on the method signature.

### Technical Definition
Compile-time polymorphism is a form of polymorphism where the method to be invoked is determined at compile time based on the method signature. It is implemented through method overloading, where multiple methods in the same class share the same name but have different parameter lists. The compiler uses static binding to resolve the method call, considering the number, type, and order of arguments.

### Interview Definition
Compile-time polymorphism (static polymorphism/early binding) is achieved through method overloading in Java. Multiple methods can have the same name with different parameters (different number, type, or order). The compiler determines which method to call at compile time based on the method signature, not the object type. Key features: 
- (1) Same method name, different parameters
- (2) Resolved at compile time
- (3) Uses static binding
- (4) Also called method overloading
- (5) Return type alone cannot differentiate methods. It provides code clarity and       allows natural programming style where similar operations use the same method name.

---

## Method Overloading

### 1. By Changing Number of Parameters
**Concept:** Method overloading is achieved by defining methods with the same name but a different count of parameters.
*   **Why it works:** The compiler counts the arguments passed and matches them with the method definition having the same count.

```java
class Calculator {
    // Method 1: 2 parameters
    int add(int a, int b) {
        System.out.println("Method with 2 parameters");
        return a + b;
    }
    
    // Method 2: 3 parameters
    int add(int a, int b, int c) {
        System.out.println("Method with 3 parameters");
        return a + b + c;
    }
    
    // Method 3: 4 parameters
    int add(int a, int b, int c, int d) {
        System.out.println("Method with 4 parameters");
        return a + b + c + d;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        System.out.println(calc.add(5, 10));           // Calls Method 1
        System.out.println(calc.add(5, 10, 15));       // Calls Method 2
        System.out.println(calc.add(5, 10, 15, 20));   // Calls Method 3
    }
}
```

**Output:**
```
Method with 2 parameters
15
Method with 3 parameters
30
Method with 4 parameters
50
```

---

### 2. By Changing Data Types of Parameters
**Concept:** Methods can have the same name and same number of parameters, but the **data types** of the parameters must be different.
*   **Why it works:** The compiler checks the type of arguments passed. add(int) is distinct from add(double).

```java
class Display {
    // Method 1: int parameter
    void show(int x) {
        System.out.println("int: " + x);
    }
    
    // Method 2: double parameter
    void show(double x) {
        System.out.println("double: " + x);
    }
    
    // Method 3: String parameter
    void show(String x) {
        System.out.println("String: " + x);
    }
    
    // Method 4: char parameter
    void show(char x) {
        System.out.println("char: " + x);
    }
}

public class Main {
    public static void main(String[] args) {
        Display d = new Display();
        
        d.show(100);        // Calls Method 1
        d.show(99.99);      // Calls Method 2
        d.show("Hello");    // Calls Method 3
        d.show('A');        // Calls Method 4
    }
}
```

**Output:**
```
int: 100
double: 99.99
String: Hello
char: A
```

---

### 3. By Changing Order of Parameters
**Concept:** If parameters have different types, rearranging their order creates a unique method signature.
*   **Why it works:** method(int, double) is different from method(double, int) because the sequence of types varies.

```java
class Test {
    // Method 1: int first, double second
    void display(int a, double b) {
        System.out.println("Method 1: int=" + a + ", double=" + b);
    }
    
    // Method 2: double first, int second
    void display(double a, int b) {
        System.out.println("Method 2: double=" + a + ", int=" + b);
    }
}

public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        
        t.display(10, 20.5);    // Calls Method 1
        t.display(10.5, 20);    // Calls Method 2
    }
}
```

**Output:**
```
Method 1: int=10, double=20.5
Method 2: double=10.5, int=20
```

---

## Real-World Example: Print System

```java
class Printer {
    // Print integer
    void print(int num) {
        System.out.println("Printing integer: " + num);
    }
    
    // Print double
    void print(double num) {
        System.out.println("Printing double: " + num);
    }
    
    // Print String
    void print(String text) {
        System.out.println("Printing text: " + text);
    }
    
    // Print array
    void print(int[] arr) {
        System.out.print("Printing array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
    
    // Print multiple strings
    void print(String text, int copies) {
        System.out.println("Printing text " + copies + " times:");
        for (int i = 0; i < copies; i++) {
            System.out.println(text);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Printer printer = new Printer();
        
        printer.print(100);
        printer.print(99.99);
        printer.print("Hello World");
        printer.print(new int[]{1, 2, 3, 4, 5});
        printer.print("Java", 3);
    }
}
```

**Output:**
```
Printing integer: 100
Printing double: 99.99
Printing text: Hello World
Printing array: 1 2 3 4 5 
Printing text 3 times:
Java
Java
Java
```

---

## Rules for Method Overloading

To overload a method successfully, certain conditions must be met. The most critical factor is the **method signature**.
(Method Signature = Method Name + Parameter List)

### Rule 1: Method Signature Must Be Different
**Definition:** The compiler distinguishes overloaded methods primarily by their parameter lists. The parameter list must differ in one of three ways:
1.  Number of parameters.
2.  Data types of parameters.
3.  Sequence (Order) of data types.

```java
class Test {
    void show(int a) { }       // Valid
    void show(double a) { }    // Valid (Different type)
    void show(int a, int b) { }// Valid (Different number)
}
```

### Rule 2: Return Type Alone is Not Enough
**Definition:** Changing **only** the return type of a method does NOT constitute overloading. If the method name and parameter types are the same, the compiler cannot decide which method to call, resulting in a compile-time error.
*   **Reason:** Ambiguity occurs because the compiler doesn't know which return type is expected at the call site.

```java
class Test {
    int show(int a) {          // Valid
        return a;
    }
    
    // Compile-Time Error: method is already defined in class Test
    double show(int a) {       
        return (double) a;
    }
}
```

### Rule 3: Access Modifiers Can Be Different
**Definition:** You can change the access modifier (e.g., from private to public) while overloading a method. However, this change alone (without changing parameters) is not sufficient for overloading. It has no effect on method signature.

```java
class Test {
    private void show(int a) { }     // Valid
    public void show(double a) { }   // Valid (Different access modifier + Different type)
}
```

### Rule 4: Exception List Can Be Different
**Definition:** Overloaded methods can throw different checked or unchecked exceptions. Like access modifiers, changing exceptions alone does not count as overloading; the parameter list must still differ.

```java
class Test {
    void show(int a) throws IOException { }        // Valid
    void show(double a) throws SQLException { }    // Valid (Different exception + Different type)
}
```

---

## Overloading with Type Promotion

**Concept:** If an exact match for the method parameter is not found, Java automatically promotes the data type to the next larger type to find a match.
*   **Why it works:** Small data types (like byte, short) can fit safely into larger types (like int, long, double). This is called **implicit type conversion**.

```java
class Test {
    void show(int a) {
        System.out.println("int method: " + a);
    }
    
    void show(long a) {
        System.out.println("long method: " + a);
    }
}

public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        
        byte b = 10;
        t.show(b);  // byte -> int (promoted)
        
        short s = 20;
        t.show(s);  // short -> int (promoted)
        
        int i = 30;
        t.show(i);  // Exact match
        
        long l = 40L;
        t.show(l);  // Exact match
    }
}
```

**Output:**
```
int method: 10
int method: 20
int method: 30
long method: 40
```

> **Type Promotion Hierarchy:**
> byte -> short -> int -> long -> float -> double
> char -> int

---

## Overloading with Varargs

**Concept:** Varargs (Variable Arguments) allow a method to accept zero or multiple arguments of the same type.
*   **Why it works:** Internally, varargs are treated as arrays. The compiler prefers an exact match (fixed parameters) over varargs if both are available.

```java
class Test {
    // Priority 1: Exact Match
    void show(int a, int b) {
        System.out.println("Regular method: " + a + ", " + b);
    }
    
    // Priority 2: Varargs (fallback)
    void show(int... nums) {
        System.out.print("Varargs method: ");
        for (int num : nums) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        
        t.show(10, 20);              // Calls regular method (exact match is preferred)
        t.show(10, 20, 30);          // Calls varargs method (no exact match found)
        t.show(10, 20, 30, 40, 50);  // Calls varargs method
    }
}
```

**Output:**
```
Regular method: 10, 20
Varargs method: 10 20 30 
Varargs method: 10 20 30 40 50
```

---

## Constructor Overloading

**Concept:** A class can have multiple constructors with different parameter lists. This allows initializing objects in different ways.
*   **Why it works:** Constructors are special methods. Like regular methods, they can be overloaded based on parameter count, type, or order.

```java
class Student {
    String name;
    int age;
    String course;
    
    // 1. Default Constructor
    Student() {
        this.name = "Unknown";
        this.age = 0;
        this.course = "Not Enrolled";
        System.out.println("Default constructor called");
    }
    
    // 2. Single Parameter
    Student(String name) {
        this.name = name;
        this.age = 18; // Default age
        this.course = "Not Enrolled";
        System.out.println("Constructor with name called");
    }
    
    // 3. Two Parameters
    Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.course = "Not Enrolled";
        System.out.println("Constructor with name and age called");
    }
    
    // 4. All Parameters
    Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
        System.out.println("Full constructor called");
    }
    
    void display() {
        System.out.println("Name: " + name + ", Age: " + age + ", Course: " + course);
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.display();
        
        Student s2 = new Student("Rahul");
        s2.display();
        
        Student s3 = new Student("Priya", 20);
        s3.display();
        
        Student s4 = new Student("Amit", 22, "Computer Science");
        s4.display();
    }
}
```

**Output:**
```
Default constructor called
Name: Unknown, Age: 0, Course: Not Enrolled

Constructor with name called
Name: Rahul, Age: 18, Course: Not Enrolled

Constructor with name and age called
Name: Priya, Age: 20, Course: Not Enrolled

Full constructor called
Name: Amit, Age: 22, Course: Computer Science
```

---

## Main Method Overloading

**Concept:** Yes, the main method can be overloaded!
*   **Key Point:** The JVM **only** calls the standard public static void main(String[] args) method as the entry point. Overloaded versions must be called explicitly.

```java
public class Main {
    // Standard main method - Entry point (Called by JVM)
    public static void main(String[] args) {
        System.out.println("Standard main method");
        main(10);       // Explicit call
        main(10, 20);   // Explicit call
    }
    
    // Overloaded main method 1
    public static void main(int a) {
        System.out.println("Overloaded main with int: " + a);
    }
    
    // Overloaded main method 2
    public static void main(int a, int b) {
        System.out.println("Overloaded main with two ints: " + a + ", " + b);
    }
}
```

**Output:**
```
Standard main method
Overloaded main with int: 10
Overloaded main with two ints: 10, 20
```

---

## Advantages of Compile-Time Polymorphism

| Advantage | Description |
|-----------|-------------|
| **Readability** | Same name for similar operations |
| **Code Clarity** | Easy to understand and use |
| **Natural Programming** | Matches natural language |
| **Less Memory** | No runtime overhead |
| **Fast Execution** | Resolved at compile time |
| **Type Safety** | Compiler checks parameter types |

---

## Important Interview Questions

**Q1: What is compile-time polymorphism?**

Compile-time polymorphism is achieved through method overloading where multiple methods have the same name but different parameters. The method to call is determined at compile time by the compiler based on the method signature.

**Q2: What are the rules for method overloading?**

1. Method name must be same
2. Parameter list must be different (number, type, or order)
3. Return type alone cannot differentiate
4. Access modifiers can be different
5. Exception list can be different

**Q3: Can we overload methods by changing return type only?**

No, return type alone is not sufficient for method overloading. The parameter list must be different.

**Q4: Difference between compile-time and runtime polymorphism?**

- **Compile-time**: Method overloading, resolved at compile time, static binding
- **Runtime**: Method overriding, resolved at runtime, dynamic binding

**Q5: Can we overload the main method?**

Yes, we can overload the main method, but JVM will only call the standard public static void main(String[] args) as the entry point.

**Q6: What is type promotion in method overloading?**

When an exact match is not found, Java promotes smaller types to larger types (byte->short->int->long->float->double) to find a matching method.

**Q7: Can we overload static methods?**

Yes, static methods can be overloaded just like instance methods.

---

## Short Recap

**Compile-Time Polymorphism** = Method Overloading = Static Binding = Early Binding

**Key Points:**
- **Same name**, different parameters
- Decided at **compile time**
- Parameters can differ by: number, type, order
- **Return type alone** is not enough
- Fast execution, no runtime overhead

**Types:**
1. Different number of parameters
2. Different types of parameters
3. Different order of parameters

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                       COMPILE-TIME POLYMORPHISM                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║    ╔════════════════════════════════════════════════════════════════════════╗    ║
║    ║                    ALSO KNOWN AS                                       ║    ║
║    ║                                                                        ║    ║
║    ║   • Static Polymorphism    • Early Binding    • Method Overloading     ║    ║
║    ║                                                                        ║    ║
║    ╚════════════════════════════════════════════════════════════════════════╝    ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                          HOW IT WORKS                                            ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║         class Calculator {                ║                 ║
║                    ║                                           ║                 ║
║                    ║   int add(int a, int b)        ────────┐  ║                 ║
║                    ║   int add(int a, int b, int c) ────────┼──╬── Same Name    ║
║                    ║   double add(double a, double b) ──────┘  ║                 ║
║                    ║                                           ║                 ║
║                    ║         }                                 ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                       │                                          ║
║                                       ▼                                          ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║         METHOD CALL                       ║                 ║
║                    ║         calc.add(5, 10)                   ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                       │                                          ║
║                                       ▼                                          ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║       COMPILE TIME ANALYSIS               ║                 ║
║                    ║   ┌─────────────────────────────────────┐ ║                 ║
║                    ║   │ Compiler checks:                    │ ║                 ║
║                    ║   │  • Number of arguments: 2           │ ║                 ║
║                    ║   │  • Types: int, int                  │ ║                 ║
║                    ║   │  • Matching method: add(int, int)   │ ║                 ║
║                    ║   └─────────────────────────────────────┘ ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                       │                                          ║
║                                       ▼                                          ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║       STATIC BINDING                      ║                 ║
║                    ║   Method bound at COMPILE TIME            ║                 ║
║                    ║   (Before program runs)                   ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                       │                                          ║
║                                       ▼                                          ║
║                    ╔═══════════════════════════════════════════╗                 ║
║                    ║       EXECUTION                           ║                 ║
║                    ║   add(int, int) returns 15                ║                 ║
║                    ╚═══════════════════════════════════════════╝                 ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                     THREE WAYS TO OVERLOAD                                       ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║  1. DIFFERENT NUMBER OF PARAMETERS                                    ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   void print(int a)              ← 1 parameter                        ║      ║
║   ║   void print(int a, int b)       ← 2 parameters                       ║      ║
║   ║   void print(int a, int b, int c)← 3 parameters                       ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║  2. DIFFERENT TYPES OF PARAMETERS                                     ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   void show(int x)               ← int type                           ║      ║
║   ║   void show(double x)            ← double type                        ║      ║
║   ║   void show(String x)            ← String type                        ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
║   ╔═══════════════════════════════════════════════════════════════════════╗      ║
║   ║  3. DIFFERENT ORDER OF PARAMETERS                                     ║      ║
║   ╠═══════════════════════════════════════════════════════════════════════╣      ║
║   ║                                                                       ║      ║
║   ║   void display(int a, String b)  ← int first, String second           ║      ║
║   ║   void display(String a, int b)  ← String first, int second           ║      ║
║   ║                                                                       ║      ║
║   ╚═══════════════════════════════════════════════════════════════════════╝      ║
║                                                                                  ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║             COMPILE-TIME vs RUNTIME POLYMORPHISM                                 ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║   ╔════════════════════════════╗      ╔════════════════════════════╗             ║
║   ║   COMPILE-TIME             ║      ║   RUNTIME                  ║             ║
║   ║   POLYMORPHISM             ║      ║   POLYMORPHISM             ║             ║
║   ╠════════════════════════════╣      ╠════════════════════════════╣             ║
║   ║                            ║      ║                            ║             ║
║   ║   Method: Overloading      ║      ║   Method: Overriding       ║             ║
║   ║                            ║      ║                            ║             ║
║   ║   Binding: Static          ║      ║   Binding: Dynamic         ║             ║
║   ║                            ║      ║                            ║             ║
║   ║   When: Compile time       ║      ║   When: Runtime            ║             ║
║   ║                            ║      ║                            ║             ║
║   ║   Based on: Arguments      ║      ║   Based on: Object type    ║             ║
║   ║                            ║      ║                            ║             ║
║   ║   Inheritance: Not needed  ║      ║   Inheritance: Required    ║             ║
║   ║                            ║      ║                            ║             ║
║   ║   Performance: Faster      ║      ║   Performance: Slower      ║             ║
║   ║                            ║      ║                            ║             ║
║   ╚════════════════════════════╝      ╚════════════════════════════╝             ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
