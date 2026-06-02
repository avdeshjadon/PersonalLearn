# main() METHOD

## Concept Introduction

`main()` method Java program ka **entry point** hota hai. Entry point ka matlab: program execution yahin se start hoti hai.

Jab tum run karte ho:

```bash
java Hello
```

toh JVM `Hello` class ke andar ye method search karta hai:

```java
public static void main(String[] args)
```

Agar ye exact entry point mil gaya, program run hota hai.

---

## Definition

**The `main()` method is the starting point of a Java application. JVM calls it first to start program execution.**

---

## Basic Example

```java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
```

Compile and run:

```bash
javac Hello.java
java Hello
```

Output:

```text
Hello Java
```

---

## Signature Breakdown

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║              public static void main                  ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   public  = JVM can access main()                                                  ║
║   static  = JVM can call main() without object                                     ║
║   void    = main() returns nothing                                                 ║
║   main    = fixed method name searched by JVM                                      ║
║   args    = command-line arguments                                                 ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

| Part | Simple Meaning |
|------|----------------|
| `public` | JVM class ke bahar se access kar sake |
| `static` | Object banaye bina call ho sake |
| `void` | Kuch return nahi karta |
| `main` | JVM isi naam ko search karta hai |
| `String[] args` | Command-line input store karta hai |

---

## Why public static void?

**public:** JVM tumhari class ke bahar se `main()` call karta hai, isliye access public hona chahiye.

**static:** JVM object banaye bina `main()` call karta hai. Isliye method class-level hota hai.

**void:** Program start hone ke baad JVM ko return value ki zarurat nahi hoti.

Yaad rakhne wali line:

```text
public = access
static = no object
void = no return
```

---

## String[] args

`String[] args` command-line arguments receive karta hai.

Example:

```java
class Test {
    public static void main(String[] args) {
        System.out.println(args[0]);
    }
}
```

Run:

```bash
java Test Java
```

Output:

```text
Java
```

Here:

```text
args[0] = "Java"
```

Note: command-line arguments hamesha `String` hote hain. Number chahiye toh convert karna padega:

```java
int n = Integer.parseInt(args[0]);
```

---

## Valid Forms

```java
public static void main(String[] args)
public static void main(String args[])
public static void main(String... args)
```

Parameter name kuch bhi ho sakta hai:

```java
public static void main(String[] data)
```

Best practice:

```java
public static void main(String[] args)
```

---

## Invalid Forms

```java
public void main(String[] args)          // static missing
static void main(String[] args)          // public missing
public static int main(String[] args)    // void missing
public static void start(String[] args)  // name wrong
public static void main(int[] args)      // String[] missing
```

---

## Interview Questions

**Q1: What is main() method?**

`main()` method Java application ka entry point hai. JVM execution isi method se start karta hai.

**Q2: Why is main() public?**

Because JVM needs to access it from outside the class.

**Q3: Why is main() static?**

Because JVM can call it without creating an object.

**Q4: Why is main() void?**

Because JVM does not need any return value from `main()`.

**Q5: What is String[] args?**

It stores command-line arguments.

**Q6: Can we overload main()?**

Yes, we can overload `main()`, but JVM calls only:

```java
public static void main(String[] args)
```

Example:

```java
class Test {
    public static void main(String[] args) {
        main(10);
    }

    public static void main(int x) {
        System.out.println(x);
    }
}
```

Output:

```text
10
```

---

## Short Recap

Final signature:

```java
public static void main(String[] args)
```

Memory trick:

```text
public  -> JVM can access
static  -> no object needed
void    -> no return value
main    -> fixed entry point name
args    -> command-line arguments
```
