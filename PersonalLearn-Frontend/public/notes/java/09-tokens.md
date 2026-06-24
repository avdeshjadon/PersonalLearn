# TOKENS

## Concept Introduction

Tokens Java program ke smallest meaningful parts hote hain.

Example:

```java
int age = 20;
```

Is line mein tokens:

```text
int   age   =   20   ;
```

---

## Definition

> **Interview Definition:** Tokens are the smallest individual units of a Java program that are meaningful to the compiler.

---

## Types of Tokens

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║                 JAVA TOKENS                           ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   1. Keywords      reserved words like int, class, public                         ║
║   2. Identifiers   names like age, Student, display                               ║
║   3. Literals      fixed values like 10, 'A', "Java", true                        ║
║   4. Operators     symbols like +, -, =, ==, &&                                   ║
║   5. Separators    symbols like ;, (), {}, []                                     ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Example Breakdown

```java
public class Test {
    int age = 20;
}
```

| Token | Type |
|-------|------|
| public | keyword |
| class | keyword |
| Test | identifier |
| { | separator |
| int | keyword |
| age | identifier |
| = | operator |
| 20 | literal |
| ; | separator |
| } | separator |

---

## Why Tokens Matter

Compiler source code ko tokens mein break karta hai. Phir tokens ke basis par syntax check hota hai.

Simple flow:

```text
Source code -> Tokens -> Syntax check -> Bytecode
```

---

## Interview Questions

**Q1: What are tokens in Java?**

Tokens are the smallest meaningful units of a Java program.

**Q2: What are the types of tokens?**

Keywords, identifiers, literals, operators, and separators.

**Q3: Is whitespace a token?**

No. Spaces and new lines mostly readability ke liye hote hain; compiler usually ignore karta hai.

---

## Short Recap

```text
Tokens = Keywords + Identifiers + Literals + Operators + Separators
```
