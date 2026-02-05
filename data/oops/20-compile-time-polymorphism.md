# COMPILE-TIME POLYMORPHISM

## Concept Introduction

**Polymorphism** ka matlab hai **many forms** - ek cheez ke kai roop. **Compile-time polymorphism** mein method ka **form** (version) **compile time** par decide hota hai, program run karne se pehle.

**Compile-Time Polymorphism = Static/Early Binding = Method decided at compile time**

Yeh **method overloading** aur **operator overloading** (C++ mein) se achieve hoti hai. Java mein sirf **method overloading** hai.

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
Compile-time polymorphism (static polymorphism/early binding) is achieved through method overloading in Java. Multiple methods can have the same name with different parameters (different number, type, or order). The compiler determines which method to call at compile time based on the method signature, not the object type. Key features: (1) Same method name, different parameters, (2) Resolved at compile time, (3) Uses static binding, (4) Also called method overloading, (5) Return type alone cannot differentiate methods. It provides code clarity and allows natural programming style where similar operations use the same method name.

---

## Method Overloading

### By Changing Number of Parameters

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

### By Changing Data Types

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

### By Changing Order of Parameters

```java
class Test {
    // Method 1: int, double
    void display(int a, double b) {
        System.out.println("Method 1: int=" + a + ", double=" + b);
    }
    
    // Method 2: double, int
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

### Rule 1: Method Signature Must Be Different

```java
class Test {
    void show(int a) { }       // ✓
    void show(double a) { }    // ✓ Different type
    void show(int a, int b) { }// ✓ Different number
}
```

### Rule 2: Return Type Alone is Not Enough

```java
class Test {
    int show(int a) {          // ✓
        return a;
    }
    
    double show(int a) {       // ❌ Error: same signature
        return a;
    }
}
```

### Rule 3: Access Modifiers Can Be Different

```java
class Test {
    private void show(int a) { }    // ✓
    public void show(double a) { }   // ✓ Different access modifier OK
}
```

### Rule 4: Exception List Can Be Different

```java
class Test {
    void show(int a) throws IOException { }        // ✓
    void show(double a) throws SQLException { }    // ✓
}
```

---

## Overloading with Type Promotion

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
        t.show(b);  // byte → int (promoted)
        
        short s = 20;
        t.show(s);  // short → int (promoted)
        
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

**Type Promotion Rules:**
```
byte → short → int → long → float → double
       char → int
```

---

## Overloading with Varargs

```java
class Test {
    // Regular method
    void show(int a, int b) {
        System.out.println("Regular method: " + a + ", " + b);
    }
    
    // Varargs method
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
        
        t.show(10, 20);              // Calls regular method (exact match)
        t.show(10, 20, 30);          // Calls varargs method
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

```java
class Student {
    String name;
    int age;
    String course;
    
    // Constructor 1: No parameters
    Student() {
        this.name = "Unknown";
        this.age = 0;
        this.course = "Not Enrolled";
        System.out.println("Default constructor called");
    }
    
    // Constructor 2: Name only
    Student(String name) {
        this.name = name;
        this.age = 18;
        this.course = "Not Enrolled";
        System.out.println("Constructor with name called");
    }
    
    // Constructor 3: Name and age
    Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.course = "Not Enrolled";
        System.out.println("Constructor with name and age called");
    }
    
    // Constructor 4: All parameters
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

```java
public class Main {
    // Standard main method - Entry point
    public static void main(String[] args) {
        System.out.println("Standard main method");
        main(10);
        main(10, 20);
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

Yes, we can overload the main method, but JVM will only call the standard `public static void main(String[] args)` as the entry point.

**Q6: What is type promotion in method overloading?**

When an exact match is not found, Java promotes smaller types to larger types (byte→short→int→long→float→double) to find a matching method.

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

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                     COMPILE-TIME POLYMORPHISM                                 ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║                      METHOD OVERLOADING                                       ║
║                                                                               ║
║              add(int, int)    ───┐                                            ║
║                                  │                                            ║
║              add(int, int, int)  ├─── Same Name                               ║
║                                  │    Different Parameters                    ║
║              add(double, double) ┘                                            ║
║                                                                               ║
║                          ↓                                                    ║
║                                                                               ║
║                    COMPILE TIME                                               ║
║              Compiler decides which method                                    ║
║              to call based on parameters                                      ║
║                                                                               ║
║                          ↓                                                    ║
║                                                                               ║
║                  STATIC BINDING                                               ║
║                  (Early Binding)                                              ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
