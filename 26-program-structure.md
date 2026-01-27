# 26) PROGRAM STRUCTURE

## Concept Introduction

Java Program Structure wo blueprint hai jisse har Java program follow karta hai — ek organized tarika code likhne ka. Har Java program mein specific components hote hain: package declaration, import statements, class declaration, variables, methods, aur main() method. Yeh structure mandatory hai aur isko follow karna padta hai. Jaise building ka structure hota hai (foundation, walls, roof), waise hi Java program ka structure hai. Proper structure se code readable, maintainable, aur organized rehta hai. Interview mein yeh basic but important topic hai!

---

## Why This Concept Exists

**Problem:**
- Bina structure ke code messy ho jaata hai
- Kahan kya likhna hai confusion hota hai
- Code organization kaise karein?
- Multiple classes kaise manage karein?
- Dependencies kaise handle karein?

**Solution (Program Structure):**
- Fixed structure for consistency
- Clear organization
- Easy to read and maintain
- Standard across all Java programs
- Compiler knows what to expect
- Better code management

---

## Definitions

### 🔹 Very Simple Definition
Program Structure Java program ka organized layout hai — package, imports, class, variables, methods — sab ek specific order mein.

### 🔹 College Exam Definition
Java Program Structure is the organized layout of a Java source file consisting of: (1) Package declaration (optional), (2) Import statements (optional), (3) Class declaration (mandatory), (4) Variables/fields, (5) Methods including main() method, (6) Nested classes/interfaces (optional). This structure must follow specific ordering rules and syntax conventions defined by Java language specification.

### 🔹 Viva Definition
Java Program Structure defines the organization of source code with mandatory ordering: (1) Package declaration (optional, must be first if present), (2) Import statements (optional, after package), (3) Type declarations (class/interface/enum, mandatory, at least one public type matching filename), (4) Within class: fields, constructors, methods, nested types. Key rules: One public class per file, filename must match public class name, main() method for executable programs, proper access modifiers, follows top-down execution for static initializers. Structure ensures code organization, namespace management, dependency resolution, and compilation order.

### 🔹 Interview Definition
Java Program Structure implements hierarchical organization: (1) **Package declaration** - optional, defines namespace, must be first statement, format: `package com.company.project;`, (2) **Import statements** - optional, after package, imports classes/packages, format: `import java.util.*;` or `import java.util.ArrayList;`, (3) **Type declaration** - mandatory, class/interface/enum/annotation, one public type per file, filename = public class name + .java, (4) **Class body** - fields (instance/static variables), constructors (initialize objects), methods (behavior), static blocks (class initialization), instance blocks (object initialization), nested classes/interfaces, (5) **main() method** - entry point for applications, signature: `public static void main(String[] args)`. Ordering rules: package → imports → class → fields → constructors → methods. Compilation unit = one .java file, can have multiple classes but only one public. Structure enables: modular design, code reusability, namespace management, access control, clear separation of concerns.

### 🔹 Technical Definition
Java Program Structure follows JLS (Java Language Specification) compilation unit definition: (1) **Package declaration** - optional PackageDeclaration, defines fully qualified name prefix, affects class loading and access control, (2) **Import declarations** - zero or more ImportDeclaration (single-type, type-import-on-demand, static), resolved at compile-time, no runtime overhead, (3) **Type declarations** - one or more TypeDeclaration (ClassDeclaration, InterfaceDeclaration, EnumDeclaration, AnnotationTypeDeclaration), public type name must match filename, (4) **Class structure** - ClassBody with ClassBodyDeclaration (FieldDeclaration, MethodDeclaration, ConstructorDeclaration, InitializerBlock, NestedTypeDeclaration), (5) **Initialization order** - static: superclass static → subclass static (declaration order), instance: superclass instance → subclass instance (declaration order), constructors execute after initializers. Compiler generates: .class file per type, constant pool, method bytecode, field descriptors, attribute tables. Structure enforces: single inheritance, interface implementation, access control (public/protected/default/private), static binding (compile-time) vs dynamic binding (runtime), method overloading/overriding rules.

### 🔹 One-line Crisp Definition
Program Structure = Package → Imports → Class → Fields → Constructors → Methods → Nested Types

---

## DIAGRAM: Complete Program Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA PROGRAM STRUCTURE (COMPLETE)                        │
└─────────────────────────────────────────────────────────────────────────────┘

FILE: MyProgram.java

┌───────────────────────────────────────────────────────────────────────────┐
│  1. PACKAGE DECLARATION (Optional, must be first)                         │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  package com.company.project;                                       │  │
│  │  ↑                                                                   │  │
│  │  └─ Defines namespace, must be first line (after comments)          │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
          ↓
┌───────────────────────────────────────────────────────────────────────────┐
│  2. IMPORT STATEMENTS (Optional, after package)                           │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  import java.util.ArrayList;      // Single class import            │  │
│  │  import java.util.*;               // Package import (all classes)  │  │
│  │  import static java.lang.Math.PI; // Static import                  │  │
│  │  ↑                                                                   │  │
│  │  └─ Imports classes/packages, no runtime overhead                   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
          ↓
┌───────────────────────────────────────────────────────────────────────────┐
│  3. CLASS DECLARATION (Mandatory)                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  public class MyProgram {                                           │  │
│  │  ↑      ↑     ↑                                                     │  │
│  │  │      │     └─ Class name (must match filename)                   │  │
│  │  │      └─ class keyword                                            │  │
│  │  └─ Access modifier (public/default)                                │  │
│  │                                                                      │  │
│  │  ┌───────────────────────────────────────────────────────────────┐ │  │
│  │  │  4. FIELDS / VARIABLES                                        │ │  │
│  │  │  ┌─────────────────────────────────────────────────────────┐  │ │  │
│  │  │  │  // Static variables (class-level)                      │  │ │  │
│  │  │  │  private static int count = 0;                          │  │ │  │
│  │  │  │  public static final String APP_NAME = "MyApp";         │  │ │  │
│  │  │  │                                                          │  │ │  │
│  │  │  │  // Instance variables (object-level)                   │  │ │  │
│  │  │  │  private int id;                                        │  │ │  │
│  │  │  │  private String name;                                   │  │ │  │
│  │  │  │  protected double salary;                               │  │ │  │
│  │  │  └─────────────────────────────────────────────────────────┘  │ │  │
│  │  └───────────────────────────────────────────────────────────────┘ │  │
│  │                                                                      │  │
│  │  ┌───────────────────────────────────────────────────────────────┐ │  │
│  │  │  5. STATIC BLOCKS (Class initialization)                     │ │  │
│  │  │  ┌─────────────────────────────────────────────────────────┐  │ │  │
│  │  │  │  static {                                               │  │ │  │
│  │  │  │      System.out.println("Static block executed");       │  │ │  │
│  │  │  │      count = 10;                                        │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  │  ↑                                                       │  │ │  │
│  │  │  │  └─ Executed once when class is loaded                  │  │ │  │
│  │  │  └─────────────────────────────────────────────────────────┘  │ │  │
│  │  └───────────────────────────────────────────────────────────────┘ │  │
│  │                                                                      │  │
│  │  ┌───────────────────────────────────────────────────────────────┐ │  │
│  │  │  6. INSTANCE BLOCKS (Object initialization)                  │ │  │
│  │  │  ┌─────────────────────────────────────────────────────────┐  │ │  │
│  │  │  │  {                                                       │  │ │  │
│  │  │  │      System.out.println("Instance block executed");     │  │ │  │
│  │  │  │      id = 100;                                          │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  │  ↑                                                       │  │ │  │
│  │  │  │  └─ Executed every time object is created               │  │ │  │
│  │  │  └─────────────────────────────────────────────────────────┘  │ │  │
│  │  └───────────────────────────────────────────────────────────────┘ │  │
│  │                                                                      │  │
│  │  ┌───────────────────────────────────────────────────────────────┐ │  │
│  │  │  7. CONSTRUCTORS                                             │ │  │
│  │  │  ┌─────────────────────────────────────────────────────────┐  │ │  │
│  │  │  │  // Default constructor                                 │  │ │  │
│  │  │  │  public MyProgram() {                                   │  │ │  │
│  │  │  │      System.out.println("Constructor called");          │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  │                                                          │  │ │  │
│  │  │  │  // Parameterized constructor                           │  │ │  │
│  │  │  │  public MyProgram(int id, String name) {                │  │ │  │
│  │  │  │      this.id = id;                                      │  │ │  │
│  │  │  │      this.name = name;                                  │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  │  ↑                                                       │  │ │  │
│  │  │  │  └─ Initialize object state                             │  │ │  │
│  │  │  └─────────────────────────────────────────────────────────┘  │ │  │
│  │  └───────────────────────────────────────────────────────────────┘ │  │
│  │                                                                      │  │
│  │  ┌───────────────────────────────────────────────────────────────┐ │  │
│  │  │  8. METHODS                                                   │ │  │
│  │  │  ┌─────────────────────────────────────────────────────────┐  │ │  │
│  │  │  │  // main() method (entry point)                         │  │ │  │
│  │  │  │  public static void main(String[] args) {               │  │ │  │
│  │  │  │      System.out.println("Program started");             │  │ │  │
│  │  │  │      MyProgram obj = new MyProgram();                   │  │ │  │
│  │  │  │      obj.display();                                     │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  │                                                          │  │ │  │
│  │  │  │  // Instance method                                     │  │ │  │
│  │  │  │  public void display() {                                │  │ │  │
│  │  │  │      System.out.println("ID: " + id);                   │  │ │  │
│  │  │  │      System.out.println("Name: " + name);               │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  │                                                          │  │ │  │
│  │  │  │  // Static method                                       │  │ │  │
│  │  │  │  public static void showCount() {                       │  │ │  │
│  │  │  │      System.out.println("Count: " + count);             │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  │                                                          │  │ │  │
│  │  │  │  // Private helper method                               │  │ │  │
│  │  │  │  private void helper() {                                │  │ │  │
│  │  │  │      // Internal logic                                  │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  └─────────────────────────────────────────────────────────┘  │ │  │
│  │  └───────────────────────────────────────────────────────────────┘ │  │
│  │                                                                      │  │
│  │  ┌───────────────────────────────────────────────────────────────┐ │  │
│  │  │  9. NESTED CLASSES (Optional)                                │ │  │
│  │  │  ┌─────────────────────────────────────────────────────────┐  │ │  │
│  │  │  │  // Inner class                                         │  │ │  │
│  │  │  │  class InnerClass {                                     │  │ │  │
│  │  │  │      void innerMethod() {                               │  │ │  │
│  │  │  │          System.out.println("Inner method");            │  │ │  │
│  │  │  │      }                                                   │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  │                                                          │  │ │  │
│  │  │  │  // Static nested class                                 │  │ │  │
│  │  │  │  static class NestedClass {                             │  │ │  │
│  │  │  │      void nestedMethod() {                              │  │ │  │
│  │  │  │          System.out.println("Nested method");           │  │ │  │
│  │  │  │      }                                                   │  │ │  │
│  │  │  │  }                                                       │  │ │  │
│  │  │  └─────────────────────────────────────────────────────────┘  │ │  │
│  │  └───────────────────────────────────────────────────────────────┘ │  │
│  │                                                                      │  │
│  │  }  // End of class                                                 │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

KEY ORDERING RULES:
1. Package declaration (if present) must be FIRST
2. Import statements after package, before class
3. Class declaration mandatory
4. Within class: Fields → Constructors → Methods (convention, not mandatory)
5. main() method for executable programs
6. One public class per file, filename must match
```



---

## DIAGRAM: Minimal vs Complete Structure

```
┌─────────────────────────────────────────────────────┐
│         MINIMAL vs COMPLETE STRUCTURE               │
└─────────────────────────────────────────────────────┘

MINIMAL STRUCTURE (Simplest valid program):
┌──────────────────────────────────────┐
│  public class Hello {                │
│      public static void main(        │
│          String[] args) {            │
│          System.out.println("Hi");   │
│      }                               │
│  }                                   │
└──────────────────────────────────────┘
Components:
├─ No package
├─ No imports (java.lang.* auto-imported)
├─ One class
└─ One main() method

COMPLETE STRUCTURE (Full-featured program):
┌──────────────────────────────────────┐
│  package com.myapp;                  │
│                                      │
│  import java.util.*;                 │
│  import java.io.*;                   │
│                                      │
│  public class MyApp {                │
│      // Fields                       │
│      private static int count;       │
│      private String name;            │
│                                      │
│      // Static block                 │
│      static { count = 0; }           │
│                                      │
│      // Constructor                  │
│      public MyApp(String name) {     │
│          this.name = name;           │
│      }                               │
│                                      │
│      // main() method                │
│      public static void main(        │
│          String[] args) {            │
│          MyApp app = new MyApp("Test");│
│          app.display();              │
│      }                               │
│                                      │
│      // Instance method              │
│      public void display() {         │
│          System.out.println(name);   │
│      }                               │
│                                      │
│      // Nested class                 │
│      class Inner { }                 │
│  }                                   │
└──────────────────────────────────────┘
Components:
├─ Package declaration
├─ Import statements
├─ Fields (static + instance)
├─ Static block
├─ Constructor
├─ main() method
├─ Instance methods
└─ Nested class
```

---

## Real-life Hinglish Example

### Example 1: Building Structure

**Program Structure = Building Layout:**
```
Building (Java Program):
├─ Address (Package): com.company.project
├─ Utilities (Imports): Water, Electricity
├─ Foundation (Class): Main structure
├─ Storage (Fields): Variables
├─ Setup (Static blocks): One-time setup
├─ Rooms (Methods): Functionality
└─ Main entrance (main method): Entry point

Similarly Java:
├─ package com.company;
├─ import java.util.*;
├─ public class Building {
├─ private int rooms;
├─ static { }
├─ public void method() { }
└─ public static void main() { }
```

### Example 2: Restaurant Organization

**Program Structure = Restaurant Layout:**
```
Restaurant (Java Program):
├─ Location (Package): Downtown area
├─ Suppliers (Imports): Food suppliers
├─ Restaurant (Class): Main entity
├─ Inventory (Fields): Ingredients
├─ Opening setup (Static): One-time
├─ Kitchen (Methods): Cooking
└─ Main door (main): Entry

Java equivalent:
├─ package restaurant.downtown;
├─ import suppliers.*;
├─ public class Restaurant {
├─ private int tables;
├─ static { setup(); }
├─ public void cook() { }
└─ public static void main() { }
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         COMPILATION & EXECUTION ORDER               │
└─────────────────────────────────────────────────────┘

SOURCE FILE: MyProgram.java
package com.myapp;
import java.util.*;

public class MyProgram {
    static int x = 10;
    int y = 20;
    
    static { System.out.println("Static block"); }
    { System.out.println("Instance block"); }
    
    public MyProgram() {
        System.out.println("Constructor");
    }
    
    public static void main(String[] args) {
        System.out.println("Main");
        MyProgram obj = new MyProgram();
    }
}

COMPILATION PROCESS:
1. Parse package declaration
2. Resolve imports
3. Parse class structure
4. Generate bytecode
5. Create MyProgram.class

EXECUTION ORDER:
1. Load MyProgram class
2. Initialize static variables: x = 10
3. Execute static block: "Static block"
4. Call main() method: "Main"
5. Create object: new MyProgram()
   ├─ Allocate memory
   ├─ Initialize instance variables: y = 20
   ├─ Execute instance block: "Instance block"
   └─ Execute constructor: "Constructor"

OUTPUT:
Static block
Main
Instance block
Constructor
```

---

## Syntax Explanation

### Complete example:

```java
// File: Employee.java
package com.company.hr;

import java.util.Date;
import java.util.ArrayList;

public class Employee {
    // Static variables
    private static int employeeCount = 0;
    public static final String COMPANY = "TechCorp";
    
    // Instance variables
    private int id;
    private String name;
    private double salary;
    
    // Static block
    static {
        System.out.println("Employee class loaded");
        employeeCount = 0;
    }
    
    // Instance block
    {
        System.out.println("Creating employee object");
        id = ++employeeCount;
    }
    
    // Default constructor
    public Employee() {
        this.name = "Unknown";
        this.salary = 0.0;
    }
    
    // Parameterized constructor
    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    
    // main() method
    public static void main(String[] args) {
        System.out.println("Company: " + COMPANY);
        
        Employee emp1 = new Employee("John", 50000);
        Employee emp2 = new Employee("Jane", 60000);
        
        emp1.display();
        emp2.display();
        
        System.out.println("Total employees: " + employeeCount);
    }
    
    // Instance method
    public void display() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }
    
    // Static method
    public static int getEmployeeCount() {
        return employeeCount;
    }
    
    // Getter/Setter methods
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    // Nested class
    class Address {
        String city;
        String country;
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         MEMORY LAYOUT OF PROGRAM STRUCTURE          │
└─────────────────────────────────────────────────────┘

METHOD AREA / METASPACE:
┌──────────────────────────────────────┐
│  Employee class metadata             │
│  ├─ Class name, superclass           │
│  ├─ Method bytecode (all methods)    │
│  ├─ Field descriptors                │
│  └─ Constant pool                    │
├──────────────────────────────────────┤
│  Static variables:                   │
│  ├─ employeeCount = 2                │
│  └─ COMPANY = "TechCorp"             │
└──────────────────────────────────────┘

HEAP:
┌──────────────────────────────────────┐
│  Employee object 1                   │
│  ├─ id = 1                           │
│  ├─ name = "John"                    │
│  └─ salary = 50000                   │
├──────────────────────────────────────┤
│  Employee object 2                   │
│  ├─ id = 2                           │
│  ├─ name = "Jane"                    │
│  └─ salary = 60000                   │
└──────────────────────────────────────┘

STACK (main thread):
┌──────────────────────────────────────┐
│  Frame: main(args)                   │
│  ├─ emp1 → [ref to object 1]         │
│  └─ emp2 → [ref to object 2]         │
└──────────────────────────────────────┘
```

---

## Advantages

✅ **Organization**: Clear structure, easy to navigate  
✅ **Readability**: Standard format, easy to understand  
✅ **Maintainability**: Easy to modify and extend  
✅ **Modularity**: Separate concerns (fields, methods, etc.)  
✅ **Reusability**: Well-structured code is reusable  
✅ **Consistency**: Same structure across all programs  
✅ **Namespace Management**: Package system prevents conflicts  
✅ **Access Control**: Modifiers control visibility  
✅ **Compilation**: Compiler knows what to expect  
✅ **IDE Support**: IDEs understand structure  

---

## Limitations

❌ **Verbosity**: More boilerplate code  
❌ **Rigid**: Must follow specific order  
❌ **Learning Curve**: Beginners find it complex  
❌ **File Management**: One public class per file  

---

## Edge Cases

🔸 **Multiple classes in one file:**
```java
// File: Demo.java
public class Demo {  // Must match filename
    public static void main(String[] args) {
        Helper h = new Helper();
    }
}

class Helper {  // Non-public, OK
    void help() { }
}

// Only one public class allowed per file
```

🔸 **Package and import order:**
```java
❌ import java.util.*;
   package com.myapp;  // Error: package must be first

✅ package com.myapp;
   import java.util.*;  // Correct order
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Wrong order
```java
❌ import java.util.*;
   package com.myapp;  // Package must be first!

✅ package com.myapp;
   import java.util.*;
```

🚫 **Mistake 2**: Multiple public classes
```java
❌ // File: Demo.java
   public class Demo { }
   public class Helper { }  // Error: only one public class

✅ public class Demo { }
   class Helper { }  // Non-public OK
```

🚫 **Mistake 3**: Filename mismatch
```java
❌ // File: Demo.java
   public class MyProgram { }  // Error: name mismatch

✅ // File: MyProgram.java
   public class MyProgram { }
```

---

## Important Interview Points

💡 **Q: What is the structure of a Java program?**  
**A**: Java program structure consists of: (1) Package declaration (optional, must be first), (2) Import statements (optional), (3) Class declaration (mandatory), (4) Fields/variables, (5) Constructors, (6) Methods including main(), (7) Nested classes (optional). Order: package → imports → class → fields → constructors → methods.

💡 **Q: What is the order of execution in Java program?**  
**A**: Execution order: (1) Static variables initialized, (2) Static blocks executed, (3) main() method called, (4) When object created: instance variables initialized, (5) Instance blocks executed, (6) Constructor executed. Static initialization happens once per class, instance initialization happens per object.

💡 **Q: Can we have multiple classes in one file?**  
**A**: Yes, but only one public class per file. Filename must match public class name. Other classes can be non-public (default access). Example: Demo.java can have public class Demo and non-public class Helper.

💡 **Q: Why must package be first?**  
**A**: Package declaration defines namespace for entire file. It must be first (after comments) because it affects how class is identified and loaded. Imports come after package because they import from other packages.

💡 **Q: What is the difference between static and instance blocks?**  
**A**: 
- **Static block**: Executes once when class is loaded, before any object creation, used for class-level initialization


---

## Short Recap

Java Program Structure: package (optional, first) → imports (optional) → class (mandatory) → fields → static blocks → instance blocks → constructors → methods → nested classes. Execution order: static variables → static blocks → main() → (when object created) instance variables → instance blocks → constructor. One public class per file, filename must match. Package defines namespace, imports bring other classes. main() method entry point for applications. Interview ke liye yaad rakho: ordering rules, execution sequence, one public class rule, package-import-class order, aur static vs instance initialization difference.

---

**Previous**: [← 25 - String[] args](./25-string-args.md)  
**Next**: [27 - Tokens →](./27-tokens.md)
