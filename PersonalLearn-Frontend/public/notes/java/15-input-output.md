# INPUT AND OUTPUT IN JAVA

## Concept Introduction

Programming me **Input** ka matlab hai user se data ya jankari lena (jaise keyboard se kuch type karna). Aur **Output** ka matlab hai us data ko process karke screen (console) par dikhana. 

---

## 1. Output in Java

> **Interview Definition:** Output in Java is commonly handled using the System.out print stream, which provides methods like print() and println() to display text on the console.

Java me screen par kuch bhi dikhane ke liye hum generally in methods ka use karte hain:

### A. System.out.println()
Ye method text print karta hai aur uske baad **naya line (new line)** add kar deta hai. Agla jo bhi print hoga, wo agli line se shuru hoga.

```java
System.out.println("Hello Java"); 
System.out.println("Welcome");
// Output:
// Hello Java
// Welcome
```

### B. System.out.print()
Ye sirf text print karta hai. Isme new line add NAHI hoti. Agla jo bhi print hoga, wo usi line me aage jud jayega.

```java
System.out.print("Hello ");
System.out.print("World");
// Output: Hello World
```

---

## 2. Input in Java (Scanner Class)

> **Interview Definition:** The Scanner class in Java (found in java.util package) is a simple text scanner used to parse primitive types and strings using regular expressions. It is widely used to take input from the user via the console.

User se input lene ka sabse aasan tareeqa Scanner class use karna hai.

### How to use Scanner?
1. Pehle java.util.Scanner ko import karo.
2. Scanner ka ek naya object banao, jisme System.in pass karo (keyboard se input lene ke liye).

```java
import java.util.Scanner; // Import Scanner

class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); // Create object
        
        System.out.print("Enter your age: ");
        int age = sc.nextInt(); // Take integer input
        
        System.out.println("Your age is " + age);
    }
}
```

### Common Scanner Methods

| Method | Returns | Used For (Purpose) | Example Input |
|--------|---------|--------------------|---------------|
| nextInt() | int | Reads an integer value. (Integer number lene ke liye) | 25 |
| nextFloat() | float | Reads a decimal value. (Chota decimal lene ke liye) | 10.5f |
| nextDouble() | double | Reads a large decimal value. (Bada decimal lene ke liye) | 10.556 |
| nextLong() | long | Reads a large integer value. (Bada integer lene ke liye) | 10000000000 |
| nextByte() | byte | Reads a very small integer value. | 120 |
| nextBoolean()| boolean | Reads a boolean value. (True ya false lene ke liye) | true / false |
| next() | String | Reads a single word up to the space. (Sirf ek word lene ke liye, space aate hi ruk jata hai) | "Hello" |
| nextLine() | String | Reads a complete line of text. (Puri line lene ke liye, jab tak Enter na dabao) | "Hello World" |

---

## Important: The Scanner Newline Issue

Interviewers ka favorite sawal! Agar aap nextInt() ya nextDouble() ke baad directly nextLine() call karte ho, toh program nextLine() ko skip kar deta hai. 

**Kyun?** Kyunki nextInt() sirf number padhta hai, par jab aap Enter dabate ho, toh jo \n (newline character) hota hai, wo memory me reh jata hai. Agla nextLine() us chhute hue \n ko padh leta hai aur khali (empty) string de deta hai.

**Solution:** Ek extra (khali) sc.nextLine() lagao extra enter ko consume karne ke liye.

```java
int age = sc.nextInt();
sc.nextLine(); // Ye wali line bache hue 'Enter' (\n) ko kha jayegi

String name = sc.nextLine(); // Ab ye properly name ka input lega
```

---

## 3. Input using BufferedReader

> **Interview Definition:** BufferedReader is a class in Java used to read text from a character-input stream, buffering characters so as to provide for the efficient reading of characters, arrays, and lines.

Ye Scanner ka ek fast alternative hai, par iska syntax thoda complex (mushkil) hota hai aur ye checked exceptions throw karta hai (IOException).

```java
import java.io.*;

class Test {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("Enter name: ");
        String name = br.readLine(); // Takes full line string input
        System.out.println("Name: " + name);
    }
}
```

---

## 4. Command Line Arguments

> **Interview Definition:** Command-line arguments are values passed to the main() method of a Java program at the time of execution from the terminal or console.

Program ko terminal (CMD) se run karte waqt hum seedha usko kuch values de sakte hain. Ye values main method ke String[] args array me store ho jati hain.

**Running the program:**
```bash
java Test hello 10
```

**Inside the program:**
```java
// args[0] ki value "hello" hogi
// args[1] ki value "10" hogi (as a String)
```

---

## Interview Questions

**Q1: What is the difference between print() and println()?**

print() displays the output on the console without adding a newline at the end. println() displays the output and moves the cursor to the beginning of the next line.

**Q2: What is the difference between Scanner and BufferedReader?**

1. **Simplicity:** Scanner provides easy-to-use methods for primitive parsing (nextInt, nextDouble). BufferedReader only reads strings (readLine()), requiring manual parsing (e.g., Integer.parseInt()).
2. **Speed:** BufferedReader is faster because it has a larger buffer memory. Scanner is slower due to parsing overhead.
3. **Exceptions:** BufferedReader throws IOException, which must be handled. Scanner hides most checked exceptions.

**Q3: What is the issue when using nextLine() after nextInt() in Java?**

When we use nextInt(), it reads the integer but leaves the newline character (\n) created by pressing 'Enter' in the input buffer. When nextLine() is called immediately after, it reads that leftover newline and returns an empty string instead of waiting for user input. We must call a blank nextLine() to consume the leftover newline before reading the actual string.

**Q4: What are command-line arguments?**

Command-line arguments are the values that are passed to a Java program during its execution from the console. They are stored as strings in the String[] args parameter of the main method.
