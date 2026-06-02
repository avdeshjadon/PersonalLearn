# INPUT AND OUTPUT IN JAVA

## Concept Introduction

Output ka matlab screen par data print karna. Input ka matlab user se data lena.

---

## Output

```java
System.out.println("Hello Java");
```

`println()` output print karke new line add karta hai.

```java
System.out.print("Hello");
```

`print()` new line add nahi karta.

---

## Scanner Class

Scanner user input lene ke liye commonly use hota hai.

```java
import java.util.Scanner;

class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        System.out.println(age);
    }
}
```

Common methods:

| Method | Use |
|--------|-----|
| `nextInt()` | integer input |
| `nextDouble()` | decimal input |
| `next()` | one word string |
| `nextLine()` | full line string |

---

## BufferedReader

BufferedReader fast input ke liye use hota hai, but syntax Scanner se thoda complex hota hai.

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
String name = br.readLine();
```

---

## Command Line Arguments

Command line se values pass kar sakte hain:

```bash
java Test hello 10
```

```java
args[0] = "hello";
args[1] = "10";
```

---

## Common Mistake

`nextInt()` ke baad `nextLine()` use karte time newline issue aa sakta hai.

```java
int age = sc.nextInt();
sc.nextLine(); // consume leftover newline
String name = sc.nextLine();
```

---

## Interview Questions

**Q1: What is System.out.println()?**

It prints output to console and moves cursor to next line.

**Q2: Scanner vs BufferedReader?**

Scanner is easier. BufferedReader is faster but more complex.

**Q3: What are command-line arguments?**

Values passed while running program from terminal.

