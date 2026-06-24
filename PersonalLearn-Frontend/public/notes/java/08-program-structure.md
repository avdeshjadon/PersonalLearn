# PROGRAM STRUCTURE

## Concept Introduction

Java program structure ka matlab hai: Java file ke andar code kis order mein likha jaata hai.

Normal Java file ka order hota hai:

```text
package
imports
class
variables
methods
```

Sabse simple Java program:

```java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
```

---

## Definition

> **Interview Definition:** Java program structure is the standard layout of a Java source file. It defines where package declaration, import statements, class declaration, variables, constructors, and methods are written.

Short line:

```text
Program Structure = package + imports + class + members
```

---

## Basic Java Program Structure

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║              JAVA PROGRAM STRUCTURE                   ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   1. package declaration     optional                                              ║
║   2. import statements       optional                                              ║
║   3. class declaration       required                                              ║
║   4. variables / fields      optional                                              ║
║   5. constructors            optional                                              ║
║   6. methods                 optional, main() needed for standalone app            ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

Example:

```java
package com.example;

import java.util.Scanner;

public class Student {
    int age;

    public Student(int age) {
        this.age = age;
    }

    public void showAge() {
        System.out.println(age);
    }

    public static void main(String[] args) {
        Student s = new Student(20);
        s.showAge();
    }
}
```

---

## Parts of Java Program

| Part | Required? | Meaning |
|------|-----------|---------|
| package | Optional | Class kis package/folder mein hai |
| import | Optional | Dusre package ki classes use karne ke liye |
| class | Required | Java code ka main container |
| Variables | Optional | Data store karne ke liye |
| Constructor | Optional | Object initialize karne ke liye |
| Methods | Optional | Actions/behavior define karne ke liye |
| main() | Required for standalone app | Program execution start karne ke liye |

---

## Package Declaration

Package declaration file ke top par likhte hain.

```java
package com.example;
```

Rules:

- Package line sabse pehle aati hai.
- Ek file mein sirf one package declaration hoti hai.
- Package optional hai.

Simple meaning:

```text
package = class ka address/group
```

---

## Import Statement

Import ka use dusre package ki class ko short name se use karne ke liye hota hai.

Without import:

```java
java.util.Scanner sc = new java.util.Scanner(System.in);
```

With import:

```java
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
```

Simple meaning:

```text
import = dusri class ko easily use karna
```

Note: java.lang package automatically imported hota hai. Isliye String, System, Math ke liye import nahi lagta.

---

## Class Declaration

Java mein code mostly class ke andar likha jaata hai.

```java
public class Hello {
    // code here
}
```

Rules:

- Agar class public hai, filename class name ke same hona chahiye.
- public class Hello ka file name Hello.java hoga.
- Ek .java file mein only one public class allowed hoti hai.

Example:

```java
public class Hello {
}
```

File name:

```text
Hello.java
```

---

## Class Body

Class ke { } ke andar variables, constructors, aur methods aate hain.

Common order:

```java
class Student {
    // 1. variables
    String name;
    int age;

    // 2. constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 3. method
    void display() {
        System.out.println(name + " " + age);
    }

    // 4. main method
    public static void main(String[] args) {
        Student s = new Student("Amit", 20);
        s.display();
    }
}
```

---

## Important Rules

```text
1. package comes first
2. imports come after package
3. class comes after imports
4. public class name = file name
5. only one public class per file
6. main() is needed to run standalone Java program
```

---

## Common Beginner Mistakes

**Mistake 1: File name and public class name different**

```java
public class Hello {
}
```

Wrong file name:

```text
Test.java
```

Correct file name:

```text
Hello.java
```

**Mistake 2: import before package**

Wrong:

```java
import java.util.Scanner;
package com.example;
```

Correct:

```java
package com.example;
import java.util.Scanner;
```

**Mistake 3: Code outside class**

Wrong:

```java
System.out.println("Hello");

class Test {
}
```

Statements should be inside method/class block.

---

## Interview Questions

**Q1: What is Java program structure?**

Java program structure is the standard layout of a Java file: package, imports, class declaration, variables, constructors, and methods.

**Q2: What is the basic structure of a Java program?**

```java
package packageName;
import packageName.ClassName;

class ClassName {
    variables;
    constructors;
    methods;
}
```

**Q3: Is package declaration mandatory?**

No. Package declaration is optional. If we do not write package, class belongs to default package.

**Q4: Is import statement mandatory?**

No. Import is optional. It is needed only when we use classes from other packages.

**Q5: Why should filename match public class name?**

Because Java compiler expects public class name and file name to match for clear identification.

Example:

```java
public class Student {
}
```

File name must be:

```text
Student.java
```

**Q6: Can we have multiple classes in one Java file?**

Yes, but only one class can be public.

Example:

```java
public class A {
}

class B {
}

class C {
}
```

File name:

```text
A.java
```

---

## Short Recap

Java file ka normal order:

```text
package
import
class
variables
constructor
methods
main
```

Memory trick:

```text
PICVM

P = Package
I = Import
C = Class
V = Variables
M = Methods
```
