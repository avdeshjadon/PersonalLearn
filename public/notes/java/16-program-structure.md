# PROGRAM STRUCTURE

## Concept Introduction

Program Structure Java program ka blueprint hai — yeh batata hai ki ek complete Java program kaise organize hota hai. Jab tum ek Java file kholo, toh tumhe ek specific pattern milta hai: package declaration (optional), import statements, class definition, variables, methods (including main), aur other code components. Yeh structure standardized hai taaki har Java program consistent aur readable ho. Example: Ek simple Java program mein package ho sakta hai, imports ho sakte hain, class declaration hoga (public class MyClass), usme variables aur methods honge, aur agar standalone application hai toh main() method bhi hoga. Interview mein aksar puchte hain "What is the structure of a Java program?" ya "What are the components of a Java class?"

## Why This Concept Exists

### Problem (Without standard program structure):

Before standardized program structure was defined, code organization faced serious chaos and maintainability problems. No consistent file layout made reading others' code extremely difficult requiring reverse engineering to understand structure. Code components scattered randomly without logical grouping making maintenance nightmare. No clear separation between package, imports, class definition caused compilation failures and naming conflicts. Dependency management impossible without import organization leading to fully qualified names everywhere. Class members (variables, methods, constructors) mixed haphazardly reducing code readability significantly. Access control unclear without proper modifier organization creating unintended exposure. Static vs instance members confused without clear organization patterns. Documentation and comments placed randomly making code understanding difficult. Multiple classes per file without structure caused version control conflicts. Build tools and IDEs could not parse or assist properly without standardized structure.

- Code organization chaotic aur inconsistent tha
- Har developer apna style use karta tha causing confusion
- Dependencies aur imports properly manage nahi ho pate the
- Class members ka logical grouping nahi tha
- Readability bahut poor thi bina standard ke
- Tools aur IDEs ko parse karna difficult tha

### Solution (Standardized program structure):

Java introduced mandatory standardized program structure solving all organization problems comprehensively. Top-down structure with clear ordering: package declaration first (optional but recommended), import statements second (all together), then class/interface definition with proper access modifiers. Class body organized logically: static variables first, instance variables second, constructors third, methods fourth (static before instance). Comments and documentation placed appropriately (class level Javadoc, method level comments). Single public class per file with filename matching class name enforcing clear file organization. Clear separation of concerns with each component in its place. IDEs and build tools parse structure automatically enabling code completion, refactoring, navigation. Consistent structure across all Java programs making code reading predictable. Package hierarchy reflects directory structure enforcing modularity. Import organization reduces namespace pollution and clarifies dependencies.

- Clear top-down structure: package → imports → class → members
- Logical grouping of class members by type and access
- Single public class per file eliminates confusion
- IDEs parse and assist based on standard structure
- Code reading predictable across all Java programs
- Build tools integrate seamlessly with structure

---

## Definitions

### Very Simple Definition
Program Structure Java program ka layout hai — package, imports, class definition, variables, methods ko organize karne ka tarika.

### College Exam Definition
Program Structure defines the organization and ordering of components in a Java program: package declaration (optional), import statements, class or interface definition with access modifiers, class members (variables, constructors, methods) arranged logically, following top-down readable order from general to specific.

### Viva Definition
Program Structure is the standardized layout of Java source file consisting of: (1) Package declaration (optional, single, at top): `package com.myapp;`, (2) Import statements (multiple allowed): `import java.util.*;`, (3) Class/Interface declaration with modifiers: `public class MyClass`, (4) Class body with members in logical order: class/static variables, instance variables, constructors, static methods, instance methods. Additional rules: filename must match public class name (MyClass.java for public class MyClass), only one public class per file allowed, proper access modifiers (public, private, protected, default), Javadoc comments before class and methods, proper indentation for readability. This structure enables consistent code organization, tool integration, and maintainability across all Java applications.

### Interview Definition
Program Structure defines hierarchical organization of Java source files: (1) **Package Declaration** (optional, line 1): Single package statement `package com.company.project;` reflecting directory structure, lowercase naming convention, domain-reverse naming for uniqueness, must be first statement (only comments/whitespace before), (2) **Import Statements** (optional, after package): Multiple imports for external classes `import java.util.ArrayList;`, wildcard imports `import java.util.*;`, static imports `import static java.lang.Math.*;`, organized by source (java.*, javax.*, third-party, own packages), (3) **Type Declaration** (required, one public per file): Class `public class MyClass { }` or Interface `public interface MyInterface { }` or Enum `public enum MyEnum { }`, access modifier determines visibility, filename must match public type name exactly, (4) **Class Body Organization** (recommended order): (a) Static variables (constants first: `public static final`), (b) Instance variables (private preferred for encapsulation), (c) Constructors (no-arg first, then parameterized), (d) Static methods (utility methods), (e) Instance methods (public before private, getters/setters together). Additional elements: Inner classes (static before non-static), Enums/Interfaces (at class level or nested), Javadoc comments (/** */ before class/methods), Block comments (/* */ for complex logic), Line comments (// for inline explanations). Rules enforced: Filename = public class name + .java extension, max one public type per file, package structure matches directory, import only used classes (no unnecessary wildcards). This structure enables IDE features (code completion, navigation, refactoring), build tool integration (Maven, Gradle), code review consistency, and maintainability.

### Technical Definition
Program Structure implements JVM specification and Java Language Specification (JLS) requirements: (1) **Compilation Unit** - Source file is translation unit with package declaration (optional, line 1, enforced by compiler), import declarations (type-import: `import x.y.Z;`, wildcard: `import x.y.*;`, static import: `import static x.y.Z.method;`), type declarations (class, interface, enum, annotation), (2) **Type Declaration** - Public type requires filename match (enforced by compiler with error: "class MyClass is public, should be declared in a file named MyClass.java"), max one public type per compilation unit (JLS §7.6), package-private types allowed multiple per file, (3) **Class Structure** - Field declarations create slot in object layout, method declarations compiled to bytecode methods, constructors compile to <init> methods, static initializers to <clinit>, (4) **Access Modifiers** - Bytecode flags: public (ACC_PUBLIC 0x0001), private (ACC_PRIVATE 0x0002), protected (ACC_PROTECTED 0x0004), static (ACC_STATIC 0x0008), final (ACC_FINAL 0x0010), (5) **Package System** - Package declaration generates metadata in .class file, package hierarchy is logical (not inheritance), package-private (default) accessibility via same package name check, (6) **Import Resolution** - Compile-time resolution only (no runtime cost), single-type import takes precedence over on-demand (wildcard), importing same simple name from multiple packages causes ambiguity error, static import allows unqualified access to static members, (7) **Member Ordering** - No runtime significance (JVM doesn't care about source order), affects only compilation and reflection metadata, convention for readability not requirement. Bytecode structure (.class file): Magic number (0xCAFEBABE), version, constant pool, access flags, this class, super class, interfaces, fields, methods, attributes (SourceFile, LineNumberTable, LocalVariableTable).

### One-line Crisp Definition
**Program Structure = Package (location) → Imports (dependencies) → Class (container) → Members (data + behavior)**

---

## Complete Program Structure Breakdown

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║         COMPLETE JAVA PROGRAM STRUCTURE               ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  LEVEL 1: PACKAGE DECLARATION (Optional, but recommended)                ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  package com.company.project;                                    ║             ║
║   ║           ║       ║       ║                                      ║             ║
║   ║           ║       ║       ╚═ Project name                        ║             ║
║   ║           ║       ╚═ Company/organization name                   ║             ║
║   ║           ╚═ Domain extension                                    ║             ║
║   ║                                                                  ║             ║
║   ║  Purpose:                                                        ║             ║
║   ║  • Logical grouping of related classes                           ║             ║
║   ║  • Prevents naming conflicts (namespace)                         ║             ║
║   ║  • Reflects directory structure                                  ║             ║
║   ║  • Access control boundary (package-private)                     ║             ║
║   ║                                                                  ║             ║
║   ║  Rules:                                                          ║             ║
║   ║  • Must be first statement (after comments/whitespace)           ║             ║
║   ║  • Only one package declaration per file                         ║             ║
║   ║  • Lowercase convention (com.company.project)                    ║             ║
║   ║  • Domain-reverse naming (com.google.app)                        ║             ║
║   ║  • Matches directory path: com/company/project/MyClass.java      ║             ║
║   ║                                                                  ║             ║
║   ║  Example:                                                        ║             ║
║   ║  package com.mycompany.banking.accounts;                         ║             ║
║   ║  // Stored in: com/mycompany/banking/accounts/                  ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  LEVEL 2: IMPORT STATEMENTS (Optional, for external classes)             ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  import java.util.ArrayList;        // Single class import       ║             ║
║   ║  import java.util.*;                // Wildcard import            ║             ║
║   ║  import static java.lang.Math.PI;  // Static import              ║             ║
║   ║  import static java.lang.Math.*;   // Static wildcard import     ║             ║
║   ║                                                                  ║             ║
║   ║  Purpose:                                                        ║             ║
║   ║  • Access classes from other packages without full name          ║             ║
║   ║  • Import: ArrayList instead of java.util.ArrayList              ║             ║
║   ║  • Reduce code verbosity                                         ║             ║
║   ║  • Clarify dependencies                                          ║             ║
║   ║                                                                  ║             ║
║   ║  Types:                                                          ║             ║
║   ║  1. Single-type import:                                          ║             ║
║   ║     import java.util.ArrayList;  (specific class)                ║             ║
║   ║                                                                  ║             ║
║   ║  2. On-demand (wildcard) import:                                 ║             ║
║   ║     import java.util.*;  (all classes in package)                ║             ║
║   ║                                                                  ║             ║
║   ║  3. Static import:                                               ║             ║
║   ║     import static java.lang.Math.sqrt;  (static method)          ║             ║
║   ║     import static java.lang.System.out; (static field)           ║             ║
║   ║                                                                  ║             ║
║   ║  Rules:                                                          ║             ║
║   ║  • After package, before class declaration                       ║             ║
║   ║  • Multiple imports allowed                                      ║             ║
║   ║  • No imports needed for: java.lang.*, same package classes      ║             ║
║   ║  • Single-type import preferred over wildcard                    ║             ║
║   ║                                                                  ║             ║
║   ║  Organization convention:                                        ║             ║
║   ║  1. java.* imports                                               ║             ║
║   ║  2. javax.* imports                                              ║             ║
║   ║  3. Third-party imports (org.*, com.*)                           ║             ║
║   ║  4. Own project imports                                          ║             ║
║   ║  (Blank line between groups)                                     ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  LEVEL 3: CLASS/INTERFACE DECLARATION (Required)                         ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  /**                                                             ║             ║
║   ║   * Javadoc comment for class                                    ║             ║
║   ║   * Describes class purpose and usage                            ║             ║
║   ║   * @author Your Name                                            ║             ║
║   ║   * @version 1.0                                                 ║             ║
║   ║   */                                                             ║             ║
║   ║  public class MyClass extends SuperClass implements Interface {  ║             ║
║   ║    ▲      ▲     ▲         ▲                ▲          ▲          ║             ║
║   ║    ║      ║     ║         ║                ║          ║          ║             ║
║   ║    ║      ║     ║         ║                ║          ╚═ Interface impl        ║             ║
║   ║    ║      ║     ║         ║                ╚═ implements keyword               ║             ║
║   ║    ║      ║     ║         ╚═ Superclass (optional)                             ║             ║
║   ║    ║      ║     ╚═ Class name (PascalCase)                       ║             ║
║   ║    ║      ╚═ Type (class/interface/enum/record)                  ║             ║
║   ║    ╚═ Access modifier (public/default)                           ║             ║
║   ║                                                                  ║             ║
║   ║  Rules:                                                          ║             ║
║   ║  • Only ONE public class per file                                ║             ║
║   ║  • Filename must match public class name: MyClass.java           ║             ║
║   ║  • Multiple package-private (default) classes allowed            ║             ║
║   ║  • PascalCase naming: FirstLetterCapital                         ║             ║
║   ║                                                                  ║             ║
║   ║  Access Modifiers:                                               ║             ║
║   ║  • public: Accessible from anywhere                              ║             ║
║   ║  • default (no modifier): Package-private, same package only     ║             ║
║   ║                                                                  ║             ║
║   ║  Other Modifiers:                                                ║             ║
║   ║  • abstract: Cannot be instantiated                              ║             ║
║   ║  • final: Cannot be subclassed                                   ║             ║
║   ║  • strictfp: Strict floating-point calculations                  ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  LEVEL 4: CLASS BODY - MEMBER ORGANIZATION                               ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  public class MyClass {                                          ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.1 CLASS/STATIC VARIABLES                               ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      public static final int MAX_SIZE = 100;  // Constant        ║             ║
║   ║      private static int count = 0;            // Static var      ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.2 INSTANCE VARIABLES                                   ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      private String name;                     // Private field   ║             ║
║   ║      private int age;                                            ║             ║
║   ║      protected double salary;                 // Protected       ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.3 STATIC INITIALIZATION BLOCK                          ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      static {                                                    ║             ║
║   ║          // Executed when class is loaded                        ║             ║
║   ║          count = 0;                                              ║             ║
║   ║          System.out.println("Class loaded");                     ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.4 INSTANCE INITIALIZATION BLOCK                        ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      {                                                           ║             ║
║   ║          // Executed before constructor                          ║             ║
║   ║          count++;                                                ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.5 CONSTRUCTORS                                         ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // No-arg constructor first                                 ║             ║
║   ║      public MyClass() {                                          ║             ║
║   ║          this("Default", 0);                                     ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // Parameterized constructors                               ║             ║
║   ║      public MyClass(String name) {                               ║             ║
║   ║          this.name = name;                                       ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      public MyClass(String name, int age) {                      ║             ║
║   ║          this.name = name;                                       ║             ║
║   ║          this.age = age;                                         ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.6 STATIC METHODS                                       ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      public static int getCount() {                              ║             ║
║   ║          return count;                                           ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      public static void resetCount() {                           ║             ║
║   ║          count = 0;                                              ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.7 INSTANCE METHODS                                     ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // Getters                                                  ║             ║
║   ║      public String getName() {                                   ║             ║
║   ║          return name;                                            ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      public int getAge() {                                       ║             ║
║   ║          return age;                                             ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // Setters                                                  ║             ║
║   ║      public void setName(String name) {                          ║             ║
║   ║          this.name = name;                                       ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      public void setAge(int age) {                               ║             ║
║   ║          if(age >= 0) {                                          ║             ║
║   ║              this.age = age;                                     ║             ║
║   ║          }                                                       ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // Business logic methods                                   ║             ║
║   ║      public void display() {                                     ║             ║
║   ║          System.out.println("Name: " + name + ", Age: " + age);  ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // Private helper methods                                   ║             ║
║   ║      private void validateAge(int age) {                         ║             ║
║   ║          if(age < 0 || age > 150) {                              ║             ║
║   ║              throw new IllegalArgumentException("Invalid age");  ║             ║
║   ║          }                                                       ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.8 OVERRIDDEN METHODS                                   ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      @Override                                                   ║             ║
║   ║      public String toString() {                                  ║             ║
║   ║          return "MyClass{name='" + name + "', age=" + age + "}"; ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      @Override                                                   ║             ║
║   ║      public boolean equals(Object obj) {                         ║             ║
║   ║          if(this == obj) return true;                            ║             ║
║   ║          if(obj == null || getClass() != obj.getClass())         ║             ║
║   ║              return false;                                       ║             ║
║   ║          MyClass other = (MyClass) obj;                          ║             ║
║   ║          return age == other.age &&                              ║             ║
║   ║                 name.equals(other.name);                         ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      // 4.9 NESTED/INNER CLASSES                                 ║             ║
║   ║      // ══════════════════════════════════════════════════════   ║             ║
║   ║      public static class NestedClass {                           ║             ║
║   ║          // Static nested class                                  ║             ║
║   ║      }                                                           ║             ║
║   ║                                                                  ║             ║
║   ║      public class InnerClass {                                   ║             ║
║   ║          // Non-static inner class                               ║             ║
║   ║      }                                                           ║             ║
║   ║  }                                                               ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Complete Program Example

Here's a complete Java program demonstrating proper structure:

```java
// ══════════════════════════════════════════════════════════════════════════════
// PART 1: PACKAGE DECLARATION
// ══════════════════════════════════════════════════════════════════════════════
package com.company.banking.accounts;

// ══════════════════════════════════════════════════════════════════════════════
// PART 2: IMPORT STATEMENTS
// ══════════════════════════════════════════════════════════════════════════════
// Standard library imports
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;

// Static imports
import static java.lang.Math.abs;
import static java.lang.System.out;

// ══════════════════════════════════════════════════════════════════════════════
// PART 3: CLASS DECLARATION WITH JAVADOC
// ══════════════════════════════════════════════════════════════════════════════
/**
 * BankAccount class represents a customer's bank account.
 * Provides functionality for deposits, withdrawals, and balance inquiries.
 * 
 * @author John Doe
 * @version 1.0
 * @since 2026-02-03
 */
public class BankAccount {
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.1: CLASS/STATIC VARIABLES
    // ══════════════════════════════════════════════════════════════════════════
    /** Minimum balance required for account */
    public static final double MIN_BALANCE = 500.0;
    
    /** Maximum withdrawal limit per transaction */
    public static final double MAX_WITHDRAWAL = 50000.0;
    
    /** Total number of accounts created */
    private static int totalAccounts = 0;
    
    /** Bank name (same for all accounts) */
    private static String bankName = "ABC Bank";
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.2: INSTANCE VARIABLES
    // ══════════════════════════════════════════════════════════════════════════
    private String accountNumber;      // Unique account identifier
    private String accountHolder;      // Account holder name
    private double balance;            // Current balance
    private String accountType;        // Savings or Current
    private LocalDate openingDate;     // Account opening date
    private List<String> transactions; // Transaction history
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.3: STATIC INITIALIZATION BLOCK
    // ══════════════════════════════════════════════════════════════════════════
    static {
        out.println("BankAccount class loaded");
        totalAccounts = 0;
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.4: INSTANCE INITIALIZATION BLOCK
    // ══════════════════════════════════════════════════════════════════════════
    {
        transactions = new ArrayList<>();
        openingDate = LocalDate.now();
        totalAccounts++;
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.5: CONSTRUCTORS
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * No-arg constructor with default values
     */
    public BankAccount() {
        this("ACC0000", "Unknown", 0.0, "Savings");
    }
    
    /**
     * Constructor with account number and holder name
     * @param accountNumber Unique account number
     * @param accountHolder Name of account holder
     */
    public BankAccount(String accountNumber, String accountHolder) {
        this(accountNumber, accountHolder, MIN_BALANCE, "Savings");
    }
    
    /**
     * Full constructor with all parameters
     * @param accountNumber Unique account number
     * @param accountHolder Name of account holder
     * @param initialBalance Initial deposit amount
     * @param accountType Type of account (Savings/Current)
     */
    public BankAccount(String accountNumber, String accountHolder, 
                       double initialBalance, String accountType) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.accountType = accountType;
        logTransaction("Account opened with balance: " + initialBalance);
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.6: STATIC METHODS
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Returns total number of accounts created
     * @return Total account count
     */
    public static int getTotalAccounts() {
        return totalAccounts;
    }
    
    /**
     * Returns bank name
     * @return Bank name
     */
    public static String getBankName() {
        return bankName;
    }
    
    /**
     * Sets bank name
     * @param name New bank name
     */
    public static void setBankName(String name) {
        bankName = name;
    }
    
    /**
     * Utility method to format currency
     * @param amount Amount to format
     * @return Formatted string with currency symbol
     */
    public static String formatCurrency(double amount) {
        return String.format("₹%.2f", amount);
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.7: INSTANCE METHODS - GETTERS
    // ══════════════════════════════════════════════════════════════════════════
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getAccountHolder() {
        return accountHolder;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public String getAccountType() {
        return accountType;
    }
    
    public LocalDate getOpeningDate() {
        return openingDate;
    }
    
    public List<String> getTransactions() {
        return new ArrayList<>(transactions); // Return copy for safety
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.7: INSTANCE METHODS - SETTERS
    // ══════════════════════════════════════════════════════════════════════════
    public void setAccountHolder(String accountHolder) {
        if(accountHolder != null && !accountHolder.trim().isEmpty()) {
            this.accountHolder = accountHolder;
            logTransaction("Account holder name updated");
        }
    }
    
    public void setAccountType(String accountType) {
        if(accountType.equals("Savings") || accountType.equals("Current")) {
            this.accountType = accountType;
            logTransaction("Account type changed to: " + accountType);
        }
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.7: INSTANCE METHODS - BUSINESS LOGIC
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Deposits amount into account
     * @param amount Amount to deposit
     * @return true if successful, false otherwise
     */
    public boolean deposit(double amount) {
        if(amount <= 0) {
            out.println("Error: Deposit amount must be positive");
            return false;
        }
        
        balance += amount;
        logTransaction("Deposited: " + formatCurrency(amount));
        out.println("Deposit successful. New balance: " + formatCurrency(balance));
        return true;
    }
    
    /**
     * Withdraws amount from account
     * @param amount Amount to withdraw
     * @return true if successful, false otherwise
     */
    public boolean withdraw(double amount) {
        // Validation
        if(amount <= 0) {
            out.println("Error: Withdrawal amount must be positive");
            return false;
        }
        
        if(amount > MAX_WITHDRAWAL) {
            out.println("Error: Exceeds maximum withdrawal limit");
            return false;
        }
        
        if(balance - amount < MIN_BALANCE) {
            out.println("Error: Insufficient balance. Minimum balance required: " 
                       + formatCurrency(MIN_BALANCE));
            return false;
        }
        
        // Perform withdrawal
        balance -= amount;
        logTransaction("Withdrawn: " + formatCurrency(amount));
        out.println("Withdrawal successful. New balance: " + formatCurrency(balance));
        return true;
    }
    
    /**
     * Displays account information
     */
    public void displayAccountInfo() {
        out.println("\n═══════════════════════════════════════");
        out.println("       ACCOUNT INFORMATION");
        out.println("═══════════════════════════════════════");
        out.println("Bank: " + bankName);
        out.println("Account Number: " + accountNumber);
        out.println("Account Holder: " + accountHolder);
        out.println("Account Type: " + accountType);
        out.println("Current Balance: " + formatCurrency(balance));
        out.println("Opening Date: " + openingDate);
        out.println("═══════════════════════════════════════\n");
    }
    
    /**
     * Displays transaction history
     */
    public void displayTransactions() {
        out.println("\n═══════════════════════════════════════");
        out.println("      TRANSACTION HISTORY");
        out.println("═══════════════════════════════════════");
        if(transactions.isEmpty()) {
            out.println("No transactions yet");
        } else {
            for(int i = 0; i < transactions.size(); i++) {
                out.println((i+1) + ". " + transactions.get(i));
            }
        }
        out.println("═══════════════════════════════════════\n");
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.7: INSTANCE METHODS - PRIVATE HELPER METHODS
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Logs a transaction to transaction history
     * @param message Transaction message
     */
    private void logTransaction(String message) {
        String timestamp = LocalDate.now().toString();
        transactions.add(timestamp + " - " + message);
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 4.8: OVERRIDDEN METHODS
    // ══════════════════════════════════════════════════════════════════════════
    @Override
    public String toString() {
        return "BankAccount{" +
               "accountNumber='" + accountNumber + '\'' +
               ", accountHolder='" + accountHolder + '\'' +
               ", balance=" + balance +
               ", accountType='" + accountType + '\'' +
               '}';
    }
    
    @Override
    public boolean equals(Object obj) {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;
        
        BankAccount that = (BankAccount) obj;
        return accountNumber.equals(that.accountNumber);
    }
    
    @Override
    public int hashCode() {
        return accountNumber.hashCode();
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PART 5: MAIN METHOD (FOR TESTING/DEMONSTRATION)
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Main method to demonstrate BankAccount functionality
     * @param args Command-line arguments
     */
    public static void main(String[] args) {
        out.println("Bank Management System\n");
        
        // Create account
        BankAccount account = new BankAccount("ACC12345", "John Doe", 
                                              5000.0, "Savings");
        
        // Display account info
        account.displayAccountInfo();
        
        // Perform transactions
        account.deposit(2000);
        account.withdraw(1500);
        account.withdraw(10000);  // Should fail - insufficient balance
        
        // Display final info and transactions
        account.displayAccountInfo();
        account.displayTransactions();
        
        // Display static information
        out.println("Total accounts created: " + getTotalAccounts());
    }
}
```

**Output:**
```
BankAccount class loaded
Bank Management System

═══════════════════════════════════════
       ACCOUNT INFORMATION
═══════════════════════════════════════
Bank: ABC Bank
Account Number: ACC12345
Account Holder: John Doe
Account Type: Savings
Current Balance: ₹5000.00
Opening Date: 2026-02-03
═══════════════════════════════════════

Deposit successful. New balance: ₹7000.00
Withdrawal successful. New balance: ₹5500.00
Error: Insufficient balance. Minimum balance required: ₹500.00

═══════════════════════════════════════
       ACCOUNT INFORMATION
═══════════════════════════════════════
Bank: ABC Bank
Account Number: ACC12345
Account Holder: John Doe
Account Type: Savings
Current Balance: ₹5500.00
Opening Date: 2026-02-03
═══════════════════════════════════════

═══════════════════════════════════════
      TRANSACTION HISTORY
═══════════════════════════════════════
1. 2026-02-03 - Account opened with balance: 5000.0
2. 2026-02-03 - Deposited: ₹2000.00
3. 2026-02-03 - Withdrawn: ₹1500.00
═══════════════════════════════════════

Total accounts created: 1
```

---

## Structure Rules and Best Practices

### File Naming Rules

| Rule | Description | Example |
|------|-------------|---------|
| **Match public class** | Filename must exactly match public class name | `public class MyClass` → `MyClass.java` |
| **Case-sensitive** | Exact case matching required | `MyClass.java`, not `myclass.java` or `MYCLASS.java` |
| **One public class per file** | Only one public class allowed per source file | One file = one public class |
| **Extension .java** | All Java source files must end with .java | `MyClass.java` (not .txt, .jav, etc.) |
| **Package-private classes** | Multiple package-private classes allowed in same file | Can have helper classes without public modifier |

**Compilation Error Example:**
```java
// File: MyProgram.java
public class WrongName {  // Error: class WrongName is public, should be in WrongName.java
    // ...
}
```

### Package Naming Conventions

| Convention | Description | Example |
|------------|-------------|---------|
| **Lowercase only** | All package names in lowercase | `com.company.project` (not `Com.Company.Project`) |
| **Domain-reverse** | Start with reversed domain name | Google: `com.google.app`, Microsoft: `com.microsoft.util` |
| **Hierarchical** | Use dot notation for hierarchy | `com.company.project.module.submodule` |
| **No Java keywords** | Cannot use Java keywords | Not `com.public.class` or `com.int.util` |
| **Meaningful names** | Descriptive of content/purpose | `com.banking.accounts`, `org.utils.database` |

### Import Organization

**Recommended Order:**
1. Java standard library (`java.*`)
2. Java extensions (`javax.*`)
3. Third-party libraries (`org.*`, `com.*` from others)
4. Your organization's packages
5. Static imports (if any)

**Example:**
```java
// Java standard library
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;

// Java extensions
import javax.swing.JFrame;

// Third-party
import org.apache.commons.lang3.StringUtils;
import com.google.gson.Gson;

// Own packages
import com.mycompany.utils.Helper;
import com.mycompany.model.User;

// Static imports (last)
import static java.lang.Math.*;
import static java.lang.System.out;
```

### Class Member Organization

**Recommended Order (Google Java Style Guide):**
1. Static constants (`public static final`)
2. Static variables
3. Instance variables
4. Constructors
5. Methods (grouped by functionality, not by access modifier)
6. Static methods
7. Inner/Nested classes

**Alternative Order (some companies):**
1. Static constants
2. Static variables
3. Static initializer blocks
4. Instance variables
5. Instance initializer blocks
6. Constructors
7. Static methods
8. Instance methods (public, protected, private)
9. Overridden methods (toString, equals, hashCode)
10. Inner classes

**Access Modifier Convention:**
- Within each section, order by visibility: public → protected → package-private → private
- Or group by functionality (all getters together, all setters together)

---

## Interview Questions

### Q1: Explain the complete structure of a Java program with all components.

**Answer:** A Java program follows standardized top-down structure with clear ordering: (1) **Package Declaration** (optional, line 1): Single package statement `package com.company.project;` reflecting directory structure, must be first statement after comments/whitespace, lowercase naming convention. (2) **Import Statements** (optional, after package): Multiple import declarations for external classes, organized by source (java.*, javax.*, third-party, own packages), supports single-type (`import java.util.ArrayList;`), wildcard (`import java.util.*;`), and static imports (`import static java.lang.Math.*;`). (3) **Class/Interface Declaration** (required): Class with access modifier and name `public class MyClass { }`, filename must match public class name, only one public class per file, multiple package-private classes allowed. (4) **Class Body** (members in recommended order): Static constants first (`public static final`), then static variables, then instance variables (prefer private for encapsulation), then constructors (no-arg first, parameterized next), then methods (static methods, instance methods, overridden methods), finally nested/inner classes. Additional elements include Javadoc comments (`/** */` before class and methods), block comments (`/* */` for complex logic), line comments (`//` for inline explanations), static initialization blocks for class-level setup, instance initialization blocks executed before constructors. Rules: Filename = public class name + .java, max one public type per file, package matches directory structure, proper indentation (4 spaces or 1 tab), PascalCase for class names, camelCase for methods/variables. This structure enables IDE features, build tool integration, code review consistency, and maintainability.

---

### Q2: Why must the filename match the public class name in Java?

**Answer:** Java enforces filename matching public class name for compilation and loading consistency. When compiler (`javac`) compiles MyClass.java containing `public class MyClass`, it generates MyClass.class bytecode file. At runtime, when JVM needs to load MyClass, it searches for MyClass.class file. If source filename doesn't match (e.g., WrongName.java contains `public class MyClass`), compiler generates error: "class MyClass is public, should be declared in a file named MyClass.java". This rule ensures: (1) **Predictable file discovery** - JVM can locate class file by name without searching all files, (2) **Build tool compatibility** - Maven, Gradle, Ant expect filename=classname mapping, (3) **IDE navigation** - Quick file opening by class name (Ctrl+N in IntelliJ), (4) **Version control** - Clear file identity prevents merge conflicts, (5) **Package structure** - Combined with package, fully qualified name maps to exact file path: `com.company.MyClass` → `com/company/MyClass.java`. Note: This rule applies only to public classes. Package-private classes (no public modifier) don't require filename match and multiple can exist in one file. For example, MyClass.java can contain `public class MyClass { }` and `class Helper { }` (package-private helper). The public class defines the file identity, helper classes are internal implementation details.

---

### Q3: What is the purpose of package declaration and how does it relate to directory structure?

**Answer:** Package declaration serves multiple critical purposes: (1) **Namespace Management** - Prevents naming conflicts by creating unique namespace, allows multiple classes with same simple name in different packages (com.company.User vs org.framework.User), (2) **Access Control** - Defines package-private (default) access boundary, classes in same package can access each other's package-private members, (3) **Logical Organization** - Groups related classes together (com.banking.accounts for account-related classes, com.banking.transactions for transaction classes), (4) **Version Management** - Different versions can coexist in different packages (com.myapp.v1.User vs com.myapp.v2.User). **Directory Structure Relationship**: Package declaration must match directory path. For `package com.company.project;`, file must be in `com/company/project/` directory. Compiler verifies this correspondence: if MyClass.java has `package com.company;` but is in wrong directory, compilation fails with package error. JVM's class loading uses this mapping: to load `com.company.MyClass`, ClassLoader looks in `com/company/MyClass.class` relative to CLASSPATH. Example: Project structure:
```
src/
  com/
    company/
      project/
        MyClass.java  → package com.company.project;
        Helper.java   → package com.company.project;
```
CLASSPATH points to src/, JVM finds classes at correct paths. This 1:1 mapping between package hierarchy and directory structure is mandatory for compilation and class loading.

---

### Q4: What is the difference between import statements and package declaration?

**Answer:** Package and import serve opposite but complementary purposes: **Package Declaration** - Defines current class's location/namespace, tells compiler "this class belongs to this package", appears as `package com.company;` at file top, defines class's fully qualified name (com.company.MyClass), affects where class file is stored (com/company/ directory), only one package declaration per file (or none for default package), defines access control boundary for package-private members. **Import Statements** - Declares dependencies on external classes, tells compiler "this class uses classes from other packages", appears as `import java.util.ArrayList;` after package before class, enables using simple name (ArrayList) instead of fully qualified name (java.util.ArrayList), multiple imports allowed (as many as needed), imports from java.*, javax.*, third-party, own packages. **Comparison Example**:
```java
package com.myapp.service;           // This class is IN com.myapp.service

import java.util.ArrayList;          // This class USES ArrayList from java.util
import com.myapp.model.User;         // This class USES User from com.myapp.model

public class UserService {           // Fully qualified: com.myapp.service.UserService
    private ArrayList<User> users;   // Can use simple names due to imports
}
```
**Key Differences**: Package = "I belong here" (identity), Import = "I use that" (dependency). Package affects class's own FQN, import affects how you reference others. Package is optional (default package if omitted), imports for java.lang.* not needed (automatic). Without imports, must use FQN everywhere: `java.util.ArrayList<com.myapp.model.User> users;` (verbose). Imports are compile-time only (resolved to FQN in bytecode), no runtime cost.

---

### Q5: Can we have multiple classes in a single Java file? What are the rules?

**Answer:** Yes, multiple classes allowed in single Java file with specific rules: (1) **One Public Class Maximum** - Only one public class per file, this public class name must match filename, for `MyClass.java`: `public class MyClass { }` is required, cannot have `public class AnotherClass { }` in same file. (2) **Multiple Package-Private Classes** - Any number of non-public (package-private) classes allowed, these are helper/utility classes for the public class, don't require filename match. (3) **Nested/Inner Classes** - Unlimited nested classes (static nested, non-static inner, local, anonymous) inside the public class. **Example**:
```java
// File: MyClass.java
package com.example;

public class MyClass {                    // Public class, matches filename
    public void doSomething() {
        Helper1.help();
        Helper2 h = new Helper2();
    }
    
    static class NestedClass {            // Static nested class (unlimited)
    }
    
    class InnerClass {                    // Inner class (unlimited)
    }
}

class Helper1 {                           // Package-private, no filename match needed
    static void help() {
        System.out.println("Helper1");
    }
}

class Helper2 {                           // Another package-private class
    void assist() {
        System.out.println("Helper2");
    }
}
```
**Compilation Result**: Generates multiple .class files: MyClass.class, MyClass$NestedClass.class, MyClass$InnerClass.class, Helper1.class, Helper2.class. **Access**: Package-private classes (Helper1, Helper2) accessible only within same package. Other packages can only use MyClass (public). **Best Practice**: Use multiple classes per file sparingly. Prefer one class per file for clarity and maintainability. Use multiple only for small helper classes tightly coupled to main class. For substantial classes, create separate files for better organization and readability. IDEs show only filename in navigation, making multi-class files harder to discover specific classes.

---

### Q6: Why do we organize class members in a specific order?

**Answer:** Member organization follows logical ordering for readability and maintainability, though not enforced by compiler: (1) **Static before Instance** - Static members belong to class (loaded first), instance members belong to objects (created later), reading top-down mirrors actual initialization order, seeing static constants/variables first establishes class-level context before object-level details. (2) **Variables before Methods** - Variables define state (what object contains), methods define behavior (what object can do), understanding state before behavior aids comprehension, data declaration before data usage is logical flow. (3) **Constructors before Methods** - Constructors create/initialize objects, must understand initialization before understanding operations, constructors are special methods deserving prominent position. (4) **Public before Private** - Public members are the API/interface (most important), users care about public methods first, private methods are implementation details (less important), reading public API gives class overview before diving into internals. **Recommended Order**:
```java
public class OrderExample {
    // 1. Public static constants (API constants)
    public static final int MAX_SIZE = 100;
    
    // 2. Private static variables (class-level state)
    private static int count = 0;
    
    // 3. Private instance variables (object state)
    private String name;
    private int age;
    
    // 4. Constructors (object creation)
    public OrderExample() { }
    public OrderExample(String name) { }
    
    // 5. Public instance methods (main API)
    public void doSomething() { }
    public String getName() { }
    
    // 6. Protected/package methods (subclass/package API)
    protected void helperMethod() { }
    
    // 7. Private instance methods (implementation details)
    private void validate() { }
    
    // 8. Static methods (utility functions)
    public static int getCount() { }
    
    // 9. Overridden methods (Object class overrides)
    @Override
    public String toString() { }
    
    // 10. Inner classes (supporting structures)
    private class InnerHelper { }
}
```
**Benefits**: Top-to-bottom reading flows naturally from general to specific. Users find public API quickly without scrolling through private details. Maintenance easier with predictable locations. Code reviews faster with consistent structure. IDEs can outline by this ordering. Team collaboration improves with shared conventions. Note: Some style guides (Google, Oracle) have variations, but principle remains: important/public first, implementation details last.

---

### Q7: What happens if we don't specify a package declaration?

**Answer:** Without package declaration, class belongs to **default (unnamed) package**, which has significant limitations: (1) **No Namespace Protection** - All classes in default package share global namespace, name conflicts likely (two classes named Helper cause collision), no qualified naming to distinguish (cannot use com.myapp.Helper vs org.other.Helper). (2) **Cannot Import from Default Package** - Classes in named packages cannot import default package classes, `import MyClass;` won't work from named package, must be in default package to use default package classes, severely limits reusability. (3) **Not Suitable for Production** - All production code should have packages, default package is for quick prototypes/learning only, build tools (Maven/Gradle) expect proper package structure. (4) **IDE Limitations** - IDEs may not provide full features for default package, navigation, refactoring might not work properly. (5) **Access Control Issues** - Package-private access becomes meaningless (everything is same "package"), cannot organize code into modules with controlled boundaries. **Example Problem**:
```java
// File: MyClass.java (no package)
public class MyClass {  // In default package
}

// File: com/example/Test.java (in named package)
package com.example;

import MyClass;  // ERROR: Cannot import from default package
// Must use fully qualified: also doesn't work!

public class Test {
    MyClass obj = new MyClass();  // ERROR: Cannot access
}
```
**When Default Package Acceptable**: Learning Java basics, quick throwaway prototypes, single-file programs for testing/demonstration, command-line tools never distributed. **Professional Practice**: Always use proper package names for any real project. Follow domain-reverse naming: `com.company.project.module`. Organize packages by feature or layer: `com.myapp.controller`, `com.myapp.service`, `com.myapp.model`. Never leave classes in default package in production code. Proper packaging is sign of professional, maintainable code.

---

### Q8: Explain static and instance initialization blocks in program structure.

**Answer:** Java provides initialization blocks for code execution before constructor: **Static Initialization Block** - Syntax: `static { // code }`, executes once when class is loaded (before any object creation), runs before any static method calls or object instantiation, useful for complex static variable initialization, initializing static collections, loading native libraries, reading configuration for class-level data. Execution: JVM loads class → Static variables allocated → Static blocks execute → Class ready. **Instance Initialization Block** - Syntax: `{ // code }`, executes before every constructor call, runs after super constructor but before current constructor body, useful for common initialization code shared across constructors, avoiding code duplication. Execution: new MyClass() → Instance variables allocated → Instance blocks execute → Constructor body executes. **Example**:
```java
public class InitializationDemo {
    // Static variable
    private static Map<String, String> config;
    private static int classLoadCount;
    
    // Static initialization block (runs once at class loading)
    static {
        System.out.println("Static block 1: Class loading");
        config = new HashMap<>();
        config.put("app.name", "MyApp");
        config.put("app.version", "1.0");
        classLoadCount = 0;
    }
    
    static {
        System.out.println("Static block 2: Additional initialization");
        // Multiple static blocks allowed, execute in order
        classLoadCount++;
    }
    
    // Instance variables
    private String id;
    private int instanceCount;
    
    // Instance initialization block (runs before each constructor)
    {
        System.out.println("Instance block 1: Object initialization");
        id = UUID.randomUUID().toString();
        instanceCount = 0;
    }
    
    {
        System.out.println("Instance block 2: Additional object setup");
        // Multiple instance blocks allowed, execute in order
        instanceCount++;
    }
    
    // Constructors
    public InitializationDemo() {
        System.out.println("Constructor: No-arg");
    }
    
    public InitializationDemo(String name) {
        System.out.println("Constructor: With parameter: " + name);
    }
    
    public static void main(String[] args) {
        System.out.println("Main: Starting");
        
        InitializationDemo obj1 = new InitializationDemo();
        System.out.println();
        
        InitializationDemo obj2 = new InitializationDemo("Test");
    }
}
```
**Output**:
```
Static block 1: Class loading
Static block 2: Additional initialization
Main: Starting
Instance block 1: Object initialization
Instance block 2: Additional object setup
Constructor: No-arg

Instance block 1: Object initialization
Instance block 2: Additional object setup
Constructor: With parameter: Test
```
**Execution Order**: Static blocks (once) → Instance blocks (per object) → Constructor (per object). **Use Cases Static**: Initialize static collections, load resources, register drivers, set up class-level configuration. **Use Cases Instance**: Common initialization for all constructors, instance counter increments, object registration, initialization that can throw exceptions. **Best Practice**: Use sparingly, prefer explicit initialization in constructors for clarity. Document complex initialization logic. Avoid side effects (I/O, throwing exceptions) in static blocks.

---

## Short Recap

Program Structure Java file ka standardized layout hai top-down order mein: Package declaration (optional but recommended) pehle `package com.company.project;` directory path reflect karta hai, fir import statements multiple allowed `import java.util.*;` external classes use karne ke liye, fir class declaration with Javadoc comments `public class MyClass { }` filename match karna chahiye, class body mein organized members: static constants first (`public static final`), static variables, instance variables (private preferred), static aur instance initialization blocks, constructors (no-arg first), static methods, instance methods (public then private), overridden methods (toString, equals), nested/inner classes last. Important rules: Filename must match public class name (MyClass.java for public class MyClass), only one public class per file but multiple package-private classes allowed, package path matches directory structure (com/company/project/), imports organized by source (java.*, javax.*, third-party, own), member ordering logical but not enforced (compiler doesn't care but humans do for readability). Interview ke liye yaad rakho: package vs import difference (identity vs dependency), why filename matches class name (compilation and loading consistency), default package limitations (no imports, production avoid), multiple classes per file rules (one public max), initialization block order (static once, instance per object), member organization purpose (readability, maintainability, API visibility). Professional code mein hamesha proper packages use karo, meaningful organization rakho, conventions follow karo consistency ke liye.

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║                          ╔═══════════════════════╗                                 ║
║                          ║   KEY TAKEAWAY        ║                                 ║
║                          ╚═══════════════════════╝                                 ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║                     ╔═══════════════════════════════════════╗                      ║
║                     ║                                       ║                      ║
║                     ║  Java Program Structure:              ║                      ║
║                     ║                                       ║                      ║
║                     ║  1. package (location)                ║                      ║
║                     ║     package com.company.project;      ║                      ║
║                     ║                                       ║                      ║
║                     ║  2. import (dependencies)             ║                      ║
║                     ║     import java.util.*;               ║                      ║
║                     ║                                       ║                      ║
║                     ║  3. class (container)                 ║                      ║
║                     ║     public class MyClass {            ║                      ║
║                     ║                                       ║                      ║
║                     ║  4. members (organized):              ║                      ║
║                     ║     • Static variables                ║                      ║
║                     ║     • Instance variables              ║                      ║
║                     ║     • Constructors                    ║                      ║
║                     ║     • Methods                         ║                      ║
║                     ║     }                                 ║                      ║
║                     ║                                       ║                      ║
║                     ║  Filename = Public Class Name + .java ║                      ║
║                     ║  MyClass.java for public class MyClass║                      ║
║                     ║                                       ║                      ║
║                     ╚═══════════════════════════════════════╝                      ║
║                                                                                    ║
║                                                                                    ║
║    ╔═══════════╗    ╔═══════════╗    ╔═══════════╗    ╔═══════════╗               ║
║    ║           ║    ║           ║    ║           ║    ║           ║               ║
║    ║  Package  ║ →  ║  Imports  ║ →  ║   Class   ║ →  ║  Members  ║               ║
║    ║ (Identity)║    ║(Dependencies)   ║(Container)║    ║ (Content) ║               ║
║    ╚═══════════╝    ╚═══════════╝    ╚═══════════╝    ╚═══════════╝               ║
║                                                                                    ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```
