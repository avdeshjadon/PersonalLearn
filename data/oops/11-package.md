# PACKAGE

## Concept Introduction

**Package** Java mein ek **folder** jaisa hai jo related **classes aur interfaces** ko organize karta hai.

Package ke **fayde**:
- **Organization** - Classes ko group karke rakhna
- **Name collision** - Same name ki classes alag packages mein
- **Access control** - Package-level access
- **Reusability** - Code ko easily reuse kar sakte hain

**package = Folder for organizing classes**

---

## Why This Concept Exists

### Problem Without Packages

```
Project/
  Student.java
  Teacher.java
  Course.java
  Database.java
  Connection.java
  Query.java
  ... (1000+ files)
```

**Issues:**
- Hard to find files
- Name collision (two Student classes?)
- No organization

### Solution: Packages

```
Project/
  com/
    company/
      model/
        Student.java
        Teacher.java
        Course.java
      database/
        Database.java
        Connection.java
        Query.java
```

---

## Definitions

### Very Simple Definition
Package ek folder hai jo related Java classes ko organize karne ke liye use hota hai.

### Simple Definition
A package in Java is a namespace that organizes a set of related classes and interfaces. It helps avoid name conflicts and provides access control.

### College Exam Definition
A package in Java is a mechanism to group related classes, interfaces, and sub-packages. It provides namespace management to avoid name collisions and implements access protection through package-private access. Packages can be built-in (like java.lang, java.util) or user-defined. The package statement must be the first statement in a Java file, and classes from other packages are accessed using import statements.

### Technical Definition
A package is a namespace in Java that provides a hierarchical structure for organizing classes, interfaces, enumerations, and annotations. Packages implement the principle of modular programming by grouping related types together. The package structure maps to the file system directory structure. The Java compiler and JVM use the CLASSPATH environment variable to locate package files. Packages provide access protection - classes within the same package can access each other's package-private members. Java's standard library is organized into packages (java.lang, java.util, java.io, etc.), following reverse domain naming conventions.

### Interview Definition
Package organizes classes. Key aspects: (1) **Declaration**: `package com.company.project;` (first line), follows reverse domain naming, maps to folder structure, (2) **Types**: Built-in (java.*, javax.*) and user-defined, (3) **Import**: Access classes from other packages using import statement, (4) **Access Control**: Package-private (default) access level, (5) **Benefits**: Organization, name collision avoidance, access protection, code reusability. Naming convention: lowercase, reverse domain (com.company.project). Subpackages are independent. Static import for static members. Fully qualified names avoid import.

---

## 1. Creating Packages

### Syntax

```java
package packageName;

public class ClassName {
    // class code
}
```

---

### Simple Package Example

```java
// File: com/company/Student.java
package com.company;

public class Student {
    String name;
    int rollNo;
    
    public void display() {
        System.out.println("Name: " + name + ", Roll: " + rollNo);
    }
}
```

**Folder Structure:**
```
com/
  company/
    Student.java
```

---

### Using the Package

```java
// File: Test.java (in default package)
import com.company.Student;

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Rahul";
        s.rollNo = 101;
        s.display();
    }
}
```

---

## 2. Import Statement

### Types of Import

```java
// 1. Import specific class
import java.util.Scanner;
import java.util.ArrayList;

// 2. Import all classes from package (not sub-packages)
import java.util.*;

// 3. Import static members
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

// 4. Import all static members
import static java.lang.Math.*;

public class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> list = new ArrayList<>();
        
        // Using static import
        System.out.println(PI);        // No Math.PI needed
        System.out.println(sqrt(25));  // No Math.sqrt() needed
    }
}
```

---

### Without Import (Fully Qualified Name)

```java
public class Test {
    public static void main(String[] args) {
        // Using fully qualified name
        java.util.Scanner sc = new java.util.Scanner(System.in);
        java.util.ArrayList<String> list = new java.util.ArrayList<>();
        
        com.company.Student s = new com.company.Student();
    }
}
```

---

## 3. Built-in Packages

```java
// java.lang - Automatically imported
// No import needed for String, System, Math, etc.
public class Test {
    public static void main(String[] args) {
        String s = "Hello";  // java.lang.String
        System.out.println(s);  // java.lang.System
        int max = Math.max(10, 20);  // java.lang.Math
    }
}

// java.util - Collections, Scanner, Date
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Date;

// java.io - Input/Output
import java.io.File;
import java.io.FileReader;

// java.sql - Database
import java.sql.Connection;
import java.sql.DriverManager;
```

---

## 4. Sub-packages

```java
// Main package
package com.company;

public class Employee {
}

// Sub-package
package com.company.hr;

public class HRManager {
}

// Sub-sub-package
package com.company.hr.payroll;

public class Salary {
}
```

**Folder Structure:**
```
com/
  company/
    Employee.java
    hr/
      HRManager.java
      payroll/
        Salary.java
```

**Note:** Sub-packages are independent. `com.company.hr` does NOT have access to package-private members of `com.company`.

---

## 5. Package Access Example

```java
// File: com/company/model/Student.java
package com.company.model;

public class Student {
    public String name;      // Public
    String rollNo;           // Package-private (default)
    private int age;         // Private
    
    void display() {         // Package-private
        System.out.println("Student: " + name);
    }
}

// File: com/company/model/Teacher.java
package com.company.model;

public class Teacher {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Rahul";    // ✓ Public
        s.rollNo = "101";    // ✓ Same package
        // s.age = 20;       // ❌ Private
        s.display();         // ✓ Same package
    }
}

// File: com/company/test/Test.java
package com.company.test;

import com.company.model.Student;

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Rahul";    // ✓ Public
        // s.rollNo = "101"; // ❌ Different package
        // s.display();      // ❌ Different package
    }
}
```

---

## 6. Package Naming Conventions

```java
// ✓ Good - Lowercase, reverse domain
package com.google.search;
package com.amazon.payment;
package org.apache.commons;

// ✓ Good - Company domain
package com.company.projectname.module;

// ❌ Bad - Uppercase
package Com.Company.Project;

// ❌ Bad - Not meaningful
package abc.xyz;

// Common structure
com.company.projectname.model
com.company.projectname.service
com.company.projectname.controller
com.company.projectname.dao
com.company.projectname.util
```

---

## Real-World Example: E-commerce Project

```java
// File: com/ecommerce/model/Product.java
package com.ecommerce.model;

public class Product {
    private int id;
    private String name;
    private double price;
    
    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    public void display() {
        System.out.println(id + ". " + name + " - Rs." + price);
    }
}

// File: com/ecommerce/service/ProductService.java
package com.ecommerce.service;

import com.ecommerce.model.Product;
import java.util.ArrayList;
import java.util.List;

public class ProductService {
    private List<Product> products = new ArrayList<>();
    
    public void addProduct(Product product) {
        products.add(product);
    }
    
    public void displayAll() {
        for (Product p : products) {
            p.display();
        }
    }
}

// File: com/ecommerce/Main.java
package com.ecommerce;

import com.ecommerce.model.Product;
import com.ecommerce.service.ProductService;

public class Main {
    public static void main(String[] args) {
        ProductService service = new ProductService();
        
        service.addProduct(new Product(1, "Laptop", 50000));
        service.addProduct(new Product(2, "Phone", 20000));
        service.addProduct(new Product(3, "Tablet", 15000));
        
        service.displayAll();
    }
}
```

---

## Compiling and Running

### Compile

```bash
# Compile all files
javac com/ecommerce/model/Product.java
javac com/ecommerce/service/ProductService.java
javac com/ecommerce/Main.java

# Or compile all at once
javac com/ecommerce/**/*.java
```

### Run

```bash
# Run from project root
java com.ecommerce.Main
```

---

## Important Interview Questions

**Q1: What is a package in Java?**

A package is a namespace that organizes related classes and interfaces. It helps avoid name conflicts and provides access control.

**Q2: What is the purpose of packages?**

Organization, name collision avoidance, access protection, and code reusability.

**Q3: What is java.lang package?**

java.lang is automatically imported and contains fundamental classes like String, System, Math, Object, etc.

**Q4: Can we have two classes with the same name?**

Yes, if they are in different packages. Use fully qualified names or import to distinguish.

**Q5: What is static import?**

Static import allows importing static members of a class, so you can use them without the class name.

**Q6: Can a package have sub-packages?**

Yes, but sub-packages are independent. They don't inherit access to parent package members.

**Q7: What is the difference between import and static import?**

import imports classes/interfaces. static import imports static members (fields and methods) of a class.

**Q8: What is package-private access?**

When no access modifier is specified, it's package-private (default) - accessible only within the same package.

---

## Short Recap

**Package** = Folder for organizing classes

**Syntax:**
```java
package packageName;
import otherPackage.ClassName;
```

**Types:**
- **Built-in**: java.lang, java.util, java.io, java.sql
- **User-defined**: com.company.project

**Benefits:**
1. Organization
2. Name collision avoidance
3. Access control
4. Code reusability

**Naming:** Lowercase, reverse domain (com.company.project)

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                           PACKAGE                                             ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   Project Structure:                                                          ║
║   ═══════════════                                                             ║
║   com/                                                                        ║
║     company/                                                                  ║
║       model/                                                                  ║
║         Student.java    ←─┐                                                   ║
║         Teacher.java      │  Same package (can access each other)            ║
║         Course.java     ←─┘                                                   ║
║       service/                                                                ║
║         StudentService.java  (Different package)                              ║
║       util/                                                                   ║
║         Helper.java                                                           ║
║                                                                               ║
║   Package Declaration (First line):                                          ║
║   ════════════════════════════════                                            ║
║   package com.company.model;                                                  ║
║                                                                               ║
║   Import Statement:                                                           ║
║   ══════════════════                                                          ║
║   import com.company.model.Student;    // Import specific class              ║
║   import com.company.model.*;          // Import all from package            ║
║   import static java.lang.Math.PI;    // Static import                       ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
