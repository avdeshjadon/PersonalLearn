# Java Errors and Debugging

Even experienced Java developers make mistakes. The key is learning how to spot and fix them!

---

## 1. Types of Errors in Java

| Error Type | Description |
|------------|-------------|
| **Compile-Time Error** | Detected by the compiler. Prevents code from running. |
| **Runtime Error** | Occurs while the program is running. Often causes crashes. |
| **Logical Error** | Code runs but gives incorrect results. Hardest to find. |

### Common Compile-Time Errors
Compile-time errors occur when the program cannot compile due to syntax or type issues.

**1) Missing Semicolon**
```java
int x = 5
System.out.println(x);
// Result: error: ';' expected
```
*Tip:* Java requires a semicolon at the end of every statement.

**2) Undeclared Variables**
```java
System.out.println(myVar);
// Result: cannot find symbol: variable myVar
```
*Tip:* You must declare a variable before using it.

**3) Mismatched Types**
```java
int x = "Hello";
// Result: incompatible types: String cannot be converted to int
```

### Common Runtime Errors
Runtime errors occur when the program compiles but crashes or behaves unexpectedly.

**1) Division by Zero**
```java
int x = 10;
int y = 0;
int result = x / y; // Exception in thread "main" java.lang.ArithmeticException: / by zero
```

**2) Array Index Out of Bounds**
```java
int[] numbers = {1, 2, 3};
System.out.println(numbers[8]); // Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException
```

### Logical Errors
Logical errors happen when the code runs, but the result is not what you thought:

```java
int x = 10;
int y = 2;
int sum = x - y;
System.out.println("x + y = " + sum); // Outputs: x + y = 8
```
*Expected Result:* 12. 
*Logical Error:* The code mistakenly subtracts instead of adds.

---

## 2. Java Debugging

After learning about common errors, the next step is understanding how to **debug** your Java code. Debugging is the process of identifying and fixing errors or bugs in your code.

It often involves:
- Reading error messages
- Tracing variable values step by step
- Testing small pieces of code independently

### Print Statements for Debugging
The most basic (and often most effective) way to debug Java code is to use `System.out.println()` to print values and check the flow of the program.

```java
int x = 10;
int y = 0;

System.out.println("Before division");  // Debug output
int result = x / y;  // Crashes
System.out.println("Result: " + result);  // Never runs
```
*Tip:* Add print statements before and after key lines of code to find out where things go wrong.

### Check Variable Values
If something unexpected happens, print out the values of your variables:

```java
int age = 17;
System.out.println("Age: " + age);

if (age >= 18) {
  System.out.println("Access granted");
} else {
  System.out.println("Access denied");
}
```

### Debugging with IDEs
Modern IDEs like IntelliJ IDEA, Eclipse, and VS Code come with built-in debugging tools.
- Set **breakpoints** to pause the program at specific lines
- **Step** through code line by line
- **Inspect** variable values in real time

### Debugging Checklist
1. Read the full error message (it often tells you exactly what's wrong and on which line).
2. Check if all variables are initialized before use.
3. Print variable values to trace the problem.
4. Watch for off-by-one errors in loops and arrays.
5. Comment out sections of code to isolate bugs.

---

## Important Interview Questions

**Q1: What is the difference between a compile-time error and a runtime error?**
**Answer:** A compile-time error is detected by the compiler before the program runs, usually due to syntax mistakes or type mismatches. A runtime error occurs during program execution when the code is syntactically correct but performs an illegal operation, like dividing by zero.

**Q2: How do you identify a logical error?**
**Answer:** Logical errors do not crash the program and the compiler cannot detect them. They are identified when the output or behavior of the program does not match the expected result. Debugging tools and print statements are used to find them.
