# PACKAGES, ACCESS MODIFIERS, CLASSPATH, AND STATIC

## Concept Introduction

Is chapter me hum Java ke code ko organize (manage) karne wale concepts aur security (kaun kahan se code access kar sakta hai) ke baare me padhenge. Isme kaafi saare chhote par bohot important topics cover hote hain.

> **Interview Definition:** Packages are used to group related classes. Access Modifiers set the visibility of classes and methods. The `static` keyword manages memory efficiently by sharing members at the class level.

### Quick Summary Table: Access Modifiers

| Modifier | Same Class | Same Package | Subclass (Different Package) | Anywhere (World) |
|----------|------------|--------------|------------------------------|------------------|
| **`public`** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`protected`**| ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **`default`** | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **`private`**| ✅ Yes | ❌ No | ❌ No | ❌ No |

---

## 1. Packages & Import

### A. Packages
> **Interview Definition:** A Java package is a group of similar types of classes, interfaces, and sub-packages. It acts like a folder directory for your code.

- Jaise hum apne computer me photos aur videos ko alag-alag folders me rakhte hain, waise hi Java me code ko alag-alag **packages** me rakhte hain.
- **Fayda:** Code dhoondhna aasaan hota hai aur naming conflict (ek hi naam ki do classes) se bacha ja sakta hai.

```java
// File ke sabse upar likha jata hai
package com.example.project;
```

### B. Import
> **Interview Definition:** The `import` keyword is used to make classes and interfaces of another package accessible to the current class.

- Agar hume kisi doosre package ki class ko apne code me use karna hai, toh hume use pehle `import` karna padta hai.

```java
import java.util.Scanner; // util package se Scanner la rahe hain
import java.io.*; // io package ki saari classes la rahe hain
```

---

## 2. Access Modifiers

> **Interview Definition:** Access modifiers in Java specify the accessibility or scope of a field, method, constructor, or class.

Java me 4 access modifiers hote hain:
1. **`public`**: Koi bhi, kahin se bhi access kar sakta hai.
2. **`protected`**: Apne package me sabhi ko allowed hai, aur dusre package me sirf child classes (subclasses) ko.
3. **`default` (no modifier)**: Agar koi keyword nahi lagaya toh wo default ban jata hai. Ye sirf apne package ke andar allowed hota hai.
4. **`private`**: Sabse strict! Sirf aur sirf us class ke andar jahan wo banaya gaya hai.

---

## 3. Classpath

> **Interview Definition:** The Classpath is an environment variable that tells the Java Virtual Machine (JVM) or the Java compiler where to look for user-defined classes and packages.

- JVM ko kaise pata chalega ki aapne classes kahan save ki hain? **Classpath** ke zariye.
- CMD/Terminal me program run karte waqt hum ise `-cp` se bata sakte hain.

```bash
// Current folder (.) me class dhoondho aur run karo
java -cp . MyClass 
```

---

## 4. The `static` Keyword

> **Interview Definition:** The `static` keyword in Java is used for memory management mainly. It indicates that the particular member belongs to the class itself, rather than to an instance of that class.

- **Kyu use karte hain?** Agar koi variable ya method saare objects ke liye same (common) hai, toh use `static` bana do. Isse wo memory me sirf ek baar (1 time) space lega.
- Static cheezon ko call karne ke liye object banane ki zarurat nahi hoti, hum direct **Class Name** se unhe call kar sakte hain.

```java
class Student {
    String name; // Har student ka naam alag hoga (Non-static)
    static String college = "IIT"; // College sabka same hoga (Static)
}

public class Test {
    public static void main(String[] args) {
        // Bina object banaye 'college' ko print kiya
        System.out.println(Student.college); 
    }
}
```

---

## 5. Static Blocks

> **Interview Definition:** A static block is a block of code used to initialize static variables. It is executed automatically exactly once when the class is loaded into the JVM memory.

- Class load hote hi, sabse pehle (main method se bhi pehle) static block chalta hai.

```java
class Test {
    // Ye block automatically sabse pehle chalega
    static {
        System.out.println("Class is loaded into memory!");
    }
    
    public static void main(String[] args) {
        System.out.println("Main method running");
    }
}
// Output: 
// Class is loaded into memory!
// Main method running
```

---

## Interview Questions

**Q1: What is the difference between `public`, `private`, `protected`, and `default` access modifiers?**

- `public`: Accessible everywhere.
- `protected`: Accessible within the same package and subclasses in other packages.
- `default`: Accessible only within the same package (package-private).
- `private`: Accessible only within the class it is declared.

**Q2: Why is the `main` method in Java declared as `static`?**

The `main` method is declared `static` so that the JVM can invoke it without creating an instance (object) of the class. If it were not static, the JVM would have to create an object first, requiring extra memory and configuration.

**Q3: Can we call a non-static method from inside a static method?**

No, you cannot directly call a non-static method or access a non-static variable from within a static method. You must create an object of the class first to call non-static members.

**Q4: When is a `static` block executed?**

A static block is executed exactly once when the class is first loaded into the JVM's memory by the ClassLoader, even before the `main` method or object creation.

**Q5: Can we run a Java program without the `main` method?**

In older versions of Java (JDK 1.6 and before), you could run a program using just a static block. But from JDK 1.7 onwards, it is impossible; the JVM strictly checks for the presence of the `public static void main(String[] args)` method before executing.
