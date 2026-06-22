# THE MASTER LIST: CORE JAVA INTERVIEW QUESTIONS

## Part 1: Java Basics & Architecture

**Q1: What is Java and why is it platform-independent?**

Java is a high-level, object-oriented programming language. It is platform-independent ("Write Once, Run Anywhere") because Java source code compiles into **Bytecode**. This Bytecode is not specific to any OS and can be executed by the JVM (Java Virtual Machine) on any operating system.

**Q2: Difference between JDK, JRE, and JVM?**

- **JVM (Java Virtual Machine):** Executes the bytecode line by line.
- **JRE (Java Runtime Environment):** JVM + Libraries (It provides the environment to run Java).
- **JDK (Java Development Kit):** JRE + Development Tools like compiler (`javac`). Used for development.

**Q3: Explain `public static void main(String[] args)`.**

- `public`: Accessible from anywhere by the JVM.
- `static`: JVM can call it without creating an object of the class.
- `void`: It returns nothing.
- `main`: The method name the JVM looks for.
- `String[] args`: Command-line arguments.

---

## Part 2: Data Types, Variables & Operators

**Q4: What is the difference between Primitive and Non-Primitive data types?**

Primitive types (`int`, `char`, `double`) hold the actual values directly and have fixed sizes. Non-primitive types (Strings, Arrays, Classes) store memory addresses (references) that point to objects in the heap. Primitives cannot be `null`, while Non-Primitives can be `null`.

**Q5: What is Type Casting? Explain Implicit vs Explicit.**

Type casting is converting one primitive data type into another.
- **Implicit (Widening):** Automatic conversion of a smaller type to a larger type (e.g., `int` to `double`). Safe, no data loss.
- **Explicit (Narrowing):** Manual conversion of a larger type to a smaller type (e.g., `double` to `int`). Requires casting `(int)` and may result in data loss.

**Q6: What is the difference between `i++` and `++i`?**

- `i++` (Post-increment): Uses the current value first, then increments it.
- `++i` (Pre-increment): Increments the value first, then uses the new value.

---

## Part 3: Control Flow (Decision Making & Loops)

**Q7: Difference between `else-if` ladder and `switch` statement?**

`else-if` is used for complex conditions and ranges (`x > 10`), whereas `switch` is used for exact value matching (like specific days of the week). `switch` is slightly faster and cleaner.

**Q8: What is "Fall-through" in a switch statement?**

If a `break` statement is missing inside a `case`, the execution will "fall through" and automatically execute all subsequent cases until a `break` is found.

**Q9: Difference between `while` and `do-while` loop?**

A `while` loop checks the condition *before* executing the body (Entry-controlled). A `do-while` loop executes the body *first* and then checks the condition (Exit-controlled), guaranteeing it runs at least once.

**Q10: Explain the difference between `break` and `continue`.**

`break` completely terminates the loop and jumps out. `continue` skips only the current iteration and forces the loop to proceed to the next iteration.

---

## Part 4: Strings and Arrays

**Q11: Why are Strings immutable in Java?**

Strings cannot be changed once created for Security (passwords, URLs), Memory Saving (String Constant Pool reuses identical strings), and Thread Safety (since they can't change, multiple threads can safely use them without synchronization).

**Q12: Difference between `==` and `.equals()` for Strings?**

`==` compares the memory reference (address) to see if two variables point to the exact same object. `.equals()` compares the actual text content inside the String objects.

**Q13: Difference between `String`, `StringBuilder`, and `StringBuffer`?**

- `String`: Immutable (cannot be changed).
- `StringBuilder`: Mutable, very fast, but Not Thread-Safe.
- `StringBuffer`: Mutable, slower, but Thread-Safe (Synchronized).

**Q14: Can we change the size of an Array?**

No, arrays have a fixed size in Java. Once created, their length cannot be altered. For resizable arrays, we use `ArrayList`.

---

## Part 5: Memory Management & OOPs Setup

**Q15: What is the difference between Stack and Heap memory?**

- **Stack:** Very fast, used to store local variables and method calls. Memory is cleared when the method ends.
- **Heap:** Slower, huge memory area used to store all newly created objects (e.g., `new Student()`). Objects live here until Garbage Collected.

**Q16: What is Garbage Collection? Can we force it?**

Garbage collection is an automatic process where the JVM deletes unreferenced (unreachable) objects from the Heap to free up memory. We cannot force it; we can only request it using `System.gc()`, but the JVM decides when to run it.

**Q17: Why do we need Wrapper Classes?**

Primitive types (`int`, `double`) are not objects. Wrapper classes (`Integer`, `Double`) convert them into objects so they can be used in the Java Collections Framework (like `ArrayList`), which only accepts objects.

**Q18: What is Autoboxing and Unboxing?**

- **Autoboxing:** Automatic conversion of primitive to wrapper object (e.g., `int` -> `Integer`).
- **Unboxing:** Automatic conversion of wrapper object back to primitive (e.g., `Integer` -> `int`).

---

## Part 6: Exception Handling

**Q19: Difference between Error and Exception?**

Errors (like `OutOfMemoryError`) are fatal JVM issues that your code cannot handle. Exceptions (like `NullPointerException`) are program-level issues that can be handled using `try-catch` to stop the program from crashing.

**Q20: Difference between Checked and Unchecked Exceptions?**

Checked exceptions (`IOException`) are checked at compile-time and must be handled. Unchecked exceptions (`ArithmeticException`) are not checked by the compiler and happen at runtime.

**Q21: Does the `finally` block always execute?**

Yes, the `finally` block almost always executes, even if the `try` block has a `return` statement. The only exceptions are if you call `System.exit()`, or if the JVM/system crashes.

**Q22: Difference between `throw` and `throws`?**

- `throw`: Used *inside* a method to manually throw a specific exception object (`throw new Exception()`).
- `throws`: Used in the method *signature* to warn callers that the method might throw an exception (`void check() throws Exception`).

---

## Part 7: Object-Oriented Programming (OOPs)

**Q23: What are the 4 main pillars of OOPs in Java?**

- **Encapsulation:** Hiding data using `private` variables and providing access through `public` getters/setters.
- **Inheritance:** A child class acquiring properties of a parent class using the `extends` keyword.
- **Polymorphism:** One task performed in different ways (e.g., Method Overloading & Overriding).
- **Abstraction:** Hiding complex implementation details and showing only the essential features using Abstract classes or Interfaces.

**Q24: What is the difference between Method Overloading and Method Overriding?**

- **Overloading (Compile-time Polymorphism):** Multiple methods in the *same class* with the *same name* but *different parameters*.
- **Overriding (Run-time Polymorphism):** A method in a *child class* that has the *exact same signature* as a method in its *parent class*.

**Q25: Does Java support Multiple Inheritance?**

Java does *not* support multiple inheritance through classes (to avoid the Diamond Problem / ambiguity). However, it does support it through **Interfaces**, as a single class can implement multiple interfaces.

**Q26: Abstract Class vs Interface?**

- **Abstract Class:** Can have both abstract (no body) and concrete (with body) methods. Can have instance variables. A class can extend only *one* abstract class.
- **Interface:** Prior to Java 8, could only have abstract methods. Now it can have `default` and `static` methods. Variables are implicitly `public static final`. A class can implement *multiple* interfaces.

---

## Part 8: Advanced Keywords & Tricky Concepts

**Q27: What is the difference between `final`, `finally`, and `finalize`?**

- **`final`:** A keyword used to restrict modification. A `final` variable cannot be changed, a `final` method cannot be overridden, and a `final` class cannot be inherited.
- **`finally`:** A block used in exception handling to execute important cleanup code, regardless of whether an exception occurs.
- **`finalize`:** A method of the `Object` class that was used for garbage collection cleanup (now deprecated).

**Q28: What is the `super` keyword?**

The `super` keyword is a reference variable used to refer to the immediate parent class object. It is used to call parent class methods, variables, or constructors.

**Q29: Can we override a `static` method?**

No. Static methods belong to the class, not the object. If a child class defines a static method with the same signature as the parent, it simply hides the parent's method (this is called **Method Hiding**, not overriding).

**Q30: Why is the `String` class declared as `final`?**

The `String` class is declared `final` so that no one can override its methods and change its internal behavior. This guarantees its immutability and security.
