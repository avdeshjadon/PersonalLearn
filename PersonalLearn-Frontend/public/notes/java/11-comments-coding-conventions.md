# COMMENTS AND CODING CONVENTIONS

## Concept Introduction

Jab hum code likhte hain, toh usme kuch aisi lines add karna zaroori hota hai jo sirf humans (developers) ke padhne ke liye hon, computer ke liye nahi. Inhe **Comments** kehte hain.

Sath hi, code ko saaf aur professional tarike se likhne ke kuch standard rules hote hain, jinhe **Coding Conventions** kehte hain.

---

## 1. Comments in Java

> **Interview Definition:** Comments are non-executable statements in Java used to explain the code, making it more readable and easier to maintain. The Java compiler entirely ignores them during compilation.

Compiler comments ko completely ignore kar deta hai, isliye inka program ke output ya performance par koi asar nahi hota.

Java mein teen (3) tarah ke comments hote hain:

### A. Single-line Comment
Ek line ko comment karne ke liye // ka use hota hai.

```java
// This is a single-line comment
int a = 10; // Variable 'a' is initialized to 10
```

### B. Multi-line Comment
Ek se zyada lines (block of text) ko comment karne ke liye /* ... */ ka use hota hai.

```java
/* 
   This is a multi-line comment.
   It spans across multiple lines.
   It is useful for detailed explanations.
*/
int b = 20;
```

### C. Documentation Comment (Javadoc)
> **Interview Definition:** Documentation comments are used to generate official API documentation in HTML format using the javadoc tool.

Ye API documentation banane ke kaam aate hain aur /** ... */ se likhe jaate hain.

```java
/**
 * This method calculates the sum of two numbers.
 * @param num1 The first number
 * @param num2 The second number
 * @return The sum of num1 and num2
 */
public int add(int num1, int num2) {
    return num1 + num2;
}
```

---

## 2. Coding Conventions (Naming Rules)

> **Interview Definition:** Coding conventions are a set of guidelines recommended by Java for naming classes, methods, and variables. Following them improves code readability and maintainability across teams.

Agar aap in rules ko follow nahi karenge toh error nahi aayega, par professional duniya me inhe follow karna MUST hai.

| Element | Convention (Rule) | Example | Description |
|---------|-------------------|---------|-------------|
| **Class** | PascalCase | StudentDetails | Har word ka pehla letter Capital. |
| **Method** | camelCase | calculateSum() | Pehla letter small, baaki har word ka pehla letter Capital. |
| **Variable**| camelCase | employeeAge | Pehla letter small, baaki har word ka pehla letter Capital. |
| **Constant**| UPPER_CASE | MAX_SPEED | Sab kuch capital, words ke beech me underscore (_). |
| **Package** | lowercase | java.util | Sab kuch strictly small letters me. |

---

## Best Practices

- **Meaningful Names:** Variable ka naam kaam ke hisaab se rakho (e.g., int age better hai int x se).
- **Indentation:** Code ko properly space dekar likho taaki padhne me asani ho.
- **Don't Over-comment:** Har choti line pe comment mat likho. Code khud me self-explanatory hona chahiye.

---

## Interview Questions

**Q1: Are comments executed by the JVM?**

No. Comments are completely ignored by the Java compiler at compile-time and are never executed by the JVM at runtime.

**Q2: What is the difference between a multi-line comment and a Javadoc comment?**

A multi-line comment /* ... */ is used for general explanations in the code. A Javadoc comment /** ... */ is specifically used to generate HTML API documentation using the javadoc tool.

**Q3: What are Java naming conventions?**

Java recommends PascalCase for classes and interfaces, camelCase for methods and variables, UPPER_CASE with underscores for constants, and entirely lowercase for package names.

**Q4: Is it mandatory to follow coding conventions in Java?**

No, it is not mandatory (the compiler will not throw an error), but it is a standard industry practice that makes the code professional, readable, and easy to maintain by other developers.
