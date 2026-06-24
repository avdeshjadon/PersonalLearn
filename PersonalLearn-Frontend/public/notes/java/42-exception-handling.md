# EXCEPTION HANDLING IN JAVA

## Concept Introduction

Program run karte waqt kabhi-kabhi achanak se kuch aisi problems aa jati hain jo humne sochi nahi thi (jaise user ne zero se divide kar diya ya file mili hi nahi). Aise mein program wahi ruk kar crash ho jata hai. Ise **Exception** kehte hain. 
Is crash se bachne aur program ko normally aage badhane ke liye hum Exception Handling ka use karte hain.

> **Interview Definition:** An Exception is an unwanted or unexpected event occurring during the execution of a program (at runtime) that disrupts the normal flow of instructions. Exception Handling is a mechanism to handle these runtime errors so that the normal flow of the application can be maintained.

### Quick Summary Table: Error vs Exception

| Feature | Error | Exception |
|---------|---------|-------------|
| **Kiski galti hai?** | System ya JVM ki galti (Memory full ho jana). | Programmer ki galti ya user ki galti. |
| **Handle kar sakte hain?**| Nahi (Unrecoverable). Program crash hoga hi. | Haan (Recoverable). try-catch se bacha sakte hain. |
| **Examples** | OutOfMemoryError, StackOverflowError | ArithmeticException, NullPointerException |

---

## 1. Exception Hierarchy

Java mein har exception ek Class hoti hai. Sabse upar (root) par Throwable class hoti hai.

```text
Throwable (Root Class)
   ├── Error (JVM level, Cannot be handled)
   └── Exception (Program level, Can be handled)
        ├── Checked Exceptions (Compile-time)
        └── Unchecked Exceptions (Run-time / RuntimeException)
```

---

## 2. Checked vs Unchecked Exceptions

Ye interview me bohot baar pucha jata hai!

| Type | Kab check hoti hai? | Description | Example |
|------|---------------------|-------------|---------|
| **Checked** | Compile Time | Java compiler force karta hai ki isko handle karo warna code run hi nahi hoga. | IOException, SQLException |
| **Unchecked** | Runtime | Compiler warn nahi karta. Ye code chalne par (runtime me) aati hain. (Subclasses of RuntimeException) | ArithmeticException, NullPointerException |

---

## 3. The try-catch Block

> **Interview Definition:** The try block contains the code that might throw an exception. The catch block is used to handle the exception if it occurs in the try block.

- **try**: "Ye code try karo, isme error aa sakti hai."
- **catch**: "Agar try karte waqt error aaye, toh program crash mat karo, yahan aakar batao kya hua."

```java
try {
    int x = 10 / 0; // Yahan exception aayegi (divide by zero)
    System.out.println("Ye line print nahi hogi"); // Flow yahan break ho jayega
} catch (ArithmeticException e) {
    // Crash hone ki jagah ye line print hogi
    System.out.println("Math error: Cannot divide by zero.");
}
System.out.println("Program normally aage chalega.");
```

---

## 4. The finally Block

> **Interview Definition:** The finally block is a block that is always executed, regardless of whether an exception is handled or not. It is typically used for cleanup code like closing a file or a database connection.

- Exception aaye ya na aaye, try chale ya catch chale, finally ka code **hamesha** chalega.

```java
try {
    System.out.println("Try Block: Code running...");
} catch (Exception e) {
    System.out.println("Catch Block: Error aayi");
} finally {
    System.out.println("Finally Block: Mai toh hamesha chalunga (Clean up stuff)");
}
```

---

## 5. throw vs throws

Ye dono terms alag hain aur inka comparison bohot important hai.

| Feature | throw | throws |
|---------|---------|----------|
| **Meaning** | Ek specific exception ko manually paida (throw) karne ke liye. | Method ko batane ke liye ki "ye method aage chal kar error de sakta hai, ready rehna". |
| **Usage** | Method ke **andar** use hota hai. | Method ke **signature (naam)** ke aage use hota hai. |
| **Object/Class** | Ye ek object (instance) ke aage lagta hai. (throw new Exception();) | Ye class ke naam ke aage lagta hai. (throws IOException) |

### Example
```java
// Method bata raha hai ki ye exception de sakta hai (throws)
void checkAge(int age) throws Exception {
    if (age < 18) {
        // Manually exception paida kar rahe hain (throw)
        throw new Exception("You must be 18 or older to vote.");
    }
}
```

---

## 6. Multiple Exceptions

Sometimes, different errors can happen in the same try block. You can handle them with multiple `catch` blocks.

### Order Matters
You should always put more **specific** exceptions first, and **general** ones later. Otherwise, the general catch (`Exception`) will grab the error and the specific ones will never run.

```java
try {
  int[] numbers = {1, 2, 3};
  System.out.println(numbers[10]);  // ArrayIndexOutOfBoundsException
  int result = 10 / 0;              // ArithmeticException
} 
catch (ArrayIndexOutOfBoundsException e) {
  System.out.println("Array index does not exist.");
} 
catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero.");
} 
catch (Exception e) {
  System.out.println("Something else went wrong."); // Always put general Exception at the end
}
```

### Multi-Catch (Java 7+)
You can catch multiple exceptions in one catch block using the `|` symbol. This is useful when different exceptions should be handled in the same way, avoiding code repetition:

```java
try {
  int result = 10 / 0;
} 
catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {
  System.out.println("Math error or array error occurred.");
}
```

---

## 7. Java try-with-resources

When working with files, streams, or other resources, it is important to close them after use. In older Java versions, you had to close resources manually using a `finally` block or calling `.close()`.

Since Java 7, you can use **try-with-resources**. It is a special form of `try` that works with resources. The resource is declared inside parentheses `try(...)`, and Java will close it **automatically** when the block finishes - even if an error occurs.

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class Main {
  public static void main(String[] args) {
    // resource is opened inside try()
    try (FileOutputStream output = new FileOutputStream("filename.txt")) {
      output.write("Hello".getBytes());
      
      // no need to call close() here! Java does it automatically.
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("Error writing file.");
    }
  }
}
```

### Why use try-with-resources?
- **Safer:** Resources are always closed, even if an exception occurs.
- **Cleaner:** No need to write `.close()` calls or messy `finally` blocks.
- **Rule of thumb:** Whenever you work with files, streams, or database connections, use try-with-resources.

---

## Important Interview Questions

**Q1: What is Exception Handling?**

Exception Handling is a mechanism in Java used to handle runtime errors (exceptions) so that the normal flow of the program is not disrupted.

**Q2: What is the difference between Error and Exception?**

Errors indicate serious problems (like JVM running out of memory) that a reasonable application should not try to catch. Exceptions indicate conditions that a reasonable application might want to catch and recover from.

**Q3: What is the difference between Checked and Unchecked Exceptions?**

Checked exceptions are checked by the compiler at compile-time, forcing the programmer to handle them using try-catch or throws (e.g., IOException). Unchecked exceptions are not checked at compile-time and occur at runtime (e.g., NullPointerException).

**Q4: Will the finally block be executed if the try block has a return statement?**

Yes, the finally block will always execute even if there is a return statement in the try or catch block. The only time a finally block won't execute is if System.exit() is called, or if the JVM crashes/power goes off.

**Q5: What is the difference between throw and throws?**

The throw keyword is used to explicitly throw a single exception from within a method. The throws keyword is used in a method declaration to indicate that this method might throw one or more exceptions, passing the responsibility of handling it to the caller method.
