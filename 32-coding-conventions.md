# 32) CODING CONVENTIONS IN JAVA

## Concept Introduction

Coding conventions standardized rules hain code likhne ke liye — jaise grammar rules language ke liye hote hain. Jab tum class name PascalCase mein likhte ho (`MyClass`) aur variable name camelCase mein (`myVariable`), toh tum conventions follow kar rahe ho. Java mein Oracle/Sun ne official conventions define kiye hain: class names capital letter se start, method names lowercase se start, constants ALL_CAPS mein, indentation 4 spaces. Conventions ka purpose hai code ko readable, maintainable, aur professional banana. Industry mein sabhi developers same conventions follow karte hain taaki code consistent rahe!

---

## Why This Concept Exists

**Problem:**
- Different developers different styles use karte hain
- Code readability suffer karti hai
- Team collaboration difficult hota hai
- Code maintenance complex ho jaata hai
- Professional standards kaise maintain karein?

**Solution (Coding Conventions):**
- Standardized naming rules
- Consistent formatting guidelines
- Industry-wide accepted practices
- Code readability improvement
- Team collaboration easier
- Professional code quality

---

## Definitions

### 🔹 Very Simple Definition
Coding conventions standardized rules hain code likhne ke liye — naming, formatting, aur style guidelines.

### 🔹 College Exam Definition
Coding conventions are standardized guidelines for writing Java code to improve readability and maintainability. Key conventions: (1) Naming - Classes: PascalCase (MyClass), Methods/Variables: camelCase (myMethod, myVariable), Constants: ALL_CAPS (MAX_VALUE), Packages: lowercase (com.example), (2) Formatting - Indentation: 4 spaces, Braces: K&R style (opening brace on same line), Line length: 80-120 characters, (3) Documentation - Javadoc for public APIs, Comments for complex logic, (4) File organization - One public class per file, Package declaration first, Imports after package. Following conventions makes code professional and team-friendly.

### 🔹 Viva Definition
Coding conventions are style guidelines standardizing code structure, naming, formatting, and documentation. Categories: (1) **Naming conventions** - Classes/Interfaces: PascalCase (MyClass, Runnable), first letter uppercase, nouns for classes, adjectives for interfaces, Methods: camelCase (calculateSum, getName), first letter lowercase, verbs for methods, Variables: camelCase (userName, totalCount), descriptive names, Constants: ALL_CAPS with underscores (MAX_SIZE, DEFAULT_VALUE), final static fields, Packages: all lowercase (com.example.project), reverse domain name, (2) **Formatting conventions** - Indentation: 4 spaces (not tabs), consistent throughout, Braces: K&R style (opening brace on same line), closing brace on new line, Line length: 80-120 characters maximum, wrap long lines, Blank lines: separate logical sections, one blank line between methods, Whitespace: space after keywords (if, for, while), space around operators (=, +, -), (3) **Documentation conventions** - Javadoc: for all public classes/methods, include @param, @return, @throws, Comments: explain WHY not WHAT, update with code changes, (4) **File organization** - Package declaration first, Imports second (java.*, javax.*, third-party, own), Class declaration, Fields, Constructors, Methods, Nested classes. Benefits: improved readability, easier maintenance, team collaboration, professional quality, industry standards compliance.

### 🔹 Interview Definition
Coding conventions are industry-standard guidelines ensuring code consistency, readability, and maintainability. Oracle/Sun Java conventions: (1) **Naming** - Classes: PascalCase, nouns (Customer, ArrayList), Interfaces: PascalCase, adjectives/nouns (Runnable, Comparable, List), Methods: camelCase, verbs (calculateTotal, getName, isValid), Variables: camelCase, descriptive (userName, itemCount, isActive), Constants: ALL_CAPS, underscores (MAX_VALUE, DEFAULT_TIMEOUT, PI), Packages: lowercase, reverse domain (com.company.project.module), (2) **Formatting** - Indentation: 4 spaces per level, Braces: K&R style (opening on same line, closing on new line), Line length: 80-120 chars, wrap at logical points, Operators: spaces around binary operators (a + b, x == y), no space for unary (++i, !flag), Keywords: space after (if (condition), for (init)), Method calls: no space before parenthesis (method(args)), (3) **Code structure** - One statement per line, One declaration per line (int x; int y; not int x, y;), Blank lines: between methods, logical sections, Import organization: static imports first, then regular, grouped by package, (4) **Documentation** - Javadoc: all public APIs, tags (@param, @return, @throws, @since, @deprecated), Comments: complex algorithms, non-obvious logic, TODO/FIXME markers, (5) **Best practices** - Meaningful names (avoid single letters except loop counters), Avoid magic numbers (use named constants), Keep methods short (< 50 lines), One responsibility per method/class, Consistent style throughout project. Tools: Checkstyle, PMD, SonarQube enforce conventions automatically.

### 🔹 Technical Definition
Coding conventions are syntactic and stylistic rules formalized in Oracle's "Code Conventions for the Java Programming Language" document. Implementation: (1) **Lexical conventions** - Identifiers: Unicode letters/digits/underscore/$, case-sensitive, CamelCase/PascalCase patterns, Naming patterns: Classes match [A-Z][a-zA-Z0-9]*, methods match [a-z][a-zA-Z0-9]*, constants match [A-Z][A-Z0-9_]*, (2) **Syntactic conventions** - Indentation: 4-space unit, nested blocks indented one unit, continuation lines indented 8 spaces, Brace placement: K&R style (Kernighan & Ritchie), opening brace at line end, closing brace aligned with statement start, Line wrapping: break before operators, align wrapped lines, (3) **Structural conventions** - File structure: package statement, import statements (sorted), class/interface declaration, class variables (public, protected, private), instance variables (public, protected, private), constructors, methods (grouped by functionality), nested classes, Declaration order: public → protected → package → private, static before instance, Method organization: public API first, private helpers last, (4) **Documentation conventions** - Javadoc format: HTML-based, tags in specific order (@author, @version, @param, @return, @throws, @see, @since, @deprecated), Comment placement: before declaration, aligned with code, (5) **Enforcement** - Static analysis tools: Checkstyle (style checker), PMD (code analyzer), SpotBugs (bug detector), SonarQube (quality platform), IDE integration: IntelliJ IDEA, Eclipse, NetBeans auto-format, CI/CD integration: fail build on violations. Rationale: Conventions based on cognitive science (pattern recognition), industry experience (maintenance cost reduction), tool compatibility (automated analysis), team scalability (onboarding efficiency).

### 🔹 One-line Crisp Definition
Coding conventions = Naming rules + Formatting guidelines + Documentation standards + Industry best practices

---

## DIAGRAM: Naming Conventions

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA NAMING CONVENTIONS                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. CLASSES & INTERFACES                                                  │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Style: PascalCase (First letter of each word uppercase)            │  │
│  │                                                                      │  │
│  │  Classes (Nouns):                                                    │  │
│  │  ✅ Customer                                                         │  │
│  │  ✅ ArrayList                                                        │  │
│  │  ✅ StringBuilder                                                    │  │
│  │  ✅ HttpServletRequest                                              │  │
│  │                                                                      │  │
│  │  Interfaces (Adjectives/Nouns):                                     │  │
│  │  ✅ Runnable                                                         │  │
│  │  ✅ Comparable                                                       │  │
│  │  ✅ Serializable                                                     │  │
│  │  ✅ List                                                             │  │
│  │                                                                      │  │
│  │  ❌ customer, arraylist, CUSTOMER (wrong case)                       │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. METHODS                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Style: camelCase (First letter lowercase, rest PascalCase)         │  │
│  │                                                                      │  │
│  │  Methods (Verbs/Verb phrases):                                      │  │
│  │  ✅ calculateSum()                                                   │  │
│  │  ✅ getName()                                                        │  │
│  │  ✅ setAge()                                                         │  │
│  │  ✅ isValid()                                                        │  │
│  │  ✅ hasPermission()                                                  │  │
│  │  ✅ toString()                                                       │  │
│  │                                                                      │  │
│  │  Boolean methods (is/has/can prefix):                               │  │
│  │  ✅ isEmpty()                                                        │  │
│  │  ✅ hasNext()                                                        │  │
│  │  ✅ canExecute()                                                     │  │
│  │                                                                      │  │
│  │  ❌ CalculateSum(), calculate_sum(), CALCULATESUM (wrong case)       │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. VARIABLES                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Style: camelCase (First letter lowercase)                          │  │
│  │                                                                      │  │
│  │  Variables (Descriptive nouns):                                     │  │
│  │  ✅ userName                                                         │  │
│  │  ✅ totalCount                                                       │  │
│  │  ✅ isActive                                                         │  │
│  │  ✅ maxRetries                                                       │  │
│  │  ✅ itemList                                                         │  │
│  │                                                                      │  │
│  │  Loop counters (short names OK):                                    │  │
│  │  ✅ i, j, k (for loops)                                             │  │
│  │  ✅ index, count                                                     │  │
│  │                                                                      │  │
│  │  Boolean variables (is/has/can prefix):                             │  │
│  │  ✅ isValid                                                          │  │
│  │  ✅ hasPermission                                                    │  │
│  │  ✅ canExecute                                                       │  │
│  │                                                                      │  │
│  │  ❌ UserName, user_name, USERNAME (wrong case)                       │  │
│  │  ❌ x, y, z (non-descriptive, except math/coordinates)               │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  4. CONSTANTS                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Style: ALL_CAPS with underscores                                   │  │
│  │                                                                      │  │
│  │  Constants (final static):                                          │  │
│  │  ✅ MAX_VALUE                                                        │  │
│  │  ✅ DEFAULT_TIMEOUT                                                  │  │
│  │  ✅ PI                                                               │  │
│  │  ✅ ERROR_CODE_NOT_FOUND                                            │  │
│  │  ✅ DATABASE_URL                                                     │  │
│  │                                                                      │  │
│  │  ❌ maxValue, max_value, MaxValue (wrong case)                       │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  5. PACKAGES                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Style: all lowercase, reverse domain name                          │  │
│  │                                                                      │  │
│  │  Packages:                                                           │  │
│  │  ✅ com.example.project                                             │  │
│  │  ✅ org.apache.commons                                              │  │
│  │  ✅ java.util                                                        │  │
│  │  ✅ com.company.module.submodule                                    │  │
│  │                                                                      │  │
│  │  ❌ Com.Example.Project (uppercase)                                  │  │
│  │  ❌ com_example_project (underscores)                                │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Formatting Conventions

```
┌─────────────────────────────────────────────────────┐
│         FORMATTING CONVENTIONS                      │
└─────────────────────────────────────────────────────┘

1. INDENTATION (4 spaces):
┌──────────────────────────────────────┐
│ public class Demo {                  │
│ ····int x = 10;  // 4 spaces         │
│ ····                                 │
│ ····public void method() {           │
│ ········if (x > 0) {  // 8 spaces    │
│ ············System.out.println(x);   │
│ ········}                            │
│ ····}                                │
│ }                                    │
└──────────────────────────────────────┘

2. BRACES (K&R Style):
┌──────────────────────────────────────┐
│ // Opening brace on same line        │
│ if (condition) {                     │
│     statement;                       │
│ }                                    │
│                                      │
│ // NOT like this:                    │
│ if (condition)                       │
│ {  // ❌ Wrong                        │
│     statement;                       │
│ }                                    │
└──────────────────────────────────────┘

3. WHITESPACE:
┌──────────────────────────────────────┐
│ // Space after keywords              │
│ if (condition)  // ✅                │
│ if(condition)   // ❌                │
│                                      │
│ // Space around operators            │
│ int sum = a + b;  // ✅              │
│ int sum=a+b;      // ❌              │
│                                      │
│ // No space before method parens     │
│ method(args);  // ✅                 │
│ method (args); // ❌                 │
└──────────────────────────────────────┘

4. LINE LENGTH (80-120 chars):
┌──────────────────────────────────────┐
│ // Wrap long lines                   │
│ String message = "This is a very "   │
│         + "long string that needs "  │
│         + "to be wrapped";           │
│                                      │
│ // Method with many parameters       │
│ public void method(int param1,       │
│         int param2,                  │
│         int param3) {                │
│     // body                          │
│ }                                    │
└──────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: School Uniform

**Conventions = Uniform Rules:**
```
School (Java Project):
├─ Uniform rules (coding conventions)
├─ White shirt (class naming: PascalCase)
├─ Blue pants (method naming: camelCase)
├─ Black shoes (constant naming: ALL_CAPS)
└─ Everyone follows same rules

Similarly Java:
├─ Class: StudentRecord (PascalCase)
├─ Method: calculateGrade() (camelCase)
├─ Constant: MAX_MARKS (ALL_CAPS)
└─ All developers follow same conventions
```

### Example 2: Traffic Rules

**Conventions = Traffic Rules:**
```
Road (Codebase):
├─ Drive on left (indentation: 4 spaces)
├─ Stop at red light (braces: K&R style)
├─ Speed limit (line length: 80-120 chars)
└─ Everyone follows same rules

Java equivalent:
├─ Indentation: 4 spaces consistently
├─ Braces: opening on same line
├─ Line length: wrap at 120 chars
└─ All code follows same format
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         CONVENTION ENFORCEMENT                      │
└─────────────────────────────────────────────────────┘

DEVELOPMENT WORKFLOW:
1. Developer writes code
2. IDE auto-formats (conventions applied)
3. Save file
4. Static analysis tools check
5. Report violations
6. Developer fixes issues
7. Commit to version control
8. CI/CD pipeline checks
9. Build fails if violations
10. Fix and re-commit

TOOLS:
┌──────────────────────────────────────┐
│  Checkstyle:                         │
│  ├─ Checks naming conventions        │
│  ├─ Checks formatting                │
│  ├─ Checks documentation             │
│  └─ Generates report                 │
├──────────────────────────────────────┤
│  PMD:                                │
│  ├─ Detects code smells              │
│  ├─ Finds unused variables           │
│  ├─ Checks complexity                │
│  └─ Suggests improvements            │
├──────────────────────────────────────┤
│  SonarQube:                          │
│  ├─ Overall code quality             │
│  ├─ Technical debt                   │
│  ├─ Security vulnerabilities         │
│  └─ Maintainability index            │
└──────────────────────────────────────┘
```

---

## Syntax Explanation

### Complete example following all conventions:

```java
// File: CustomerService.java
package com.example.service;

import java.util.List;
import java.util.ArrayList;

/**
 * Service class for managing customer operations.
 * 
 * @author John Doe
 * @version 1.0
 * @since 2024
 */
public class CustomerService {
    
    // Constants (ALL_CAPS)
    private static final int MAX_CUSTOMERS = 1000;
    private static final String DEFAULT_STATUS = "ACTIVE";
    
    // Instance variables (camelCase)
    private List<Customer> customerList;
    private int totalCount;
    private boolean isActive;
    
    /**
     * Constructor initializes customer service.
     */
    public CustomerService() {
        this.customerList = new ArrayList<>();
        this.totalCount = 0;
        this.isActive = true;
    }
    
    /**
     * Adds a new customer to the system.
     * 
     * @param customer The customer to add
     * @return true if added successfully, false otherwise
     * @throws IllegalArgumentException if customer is null
     */
    public boolean addCustomer(Customer customer) {
        // Validate input
        if (customer == null) {
            throw new IllegalArgumentException("Customer cannot be null");
        }
        
        // Check capacity
        if (totalCount >= MAX_CUSTOMERS) {
            return false;
        }
        
        // Add customer
        customerList.add(customer);
        totalCount++;
        return true;
    }
    
    /**
     * Calculates total revenue from all customers.
     * 
     * @return Total revenue
     */
    public double calculateTotalRevenue() {
        double totalRevenue = 0.0;
        
        // Iterate through customers
        for (Customer customer : customerList) {
            totalRevenue += customer.getRevenue();
        }
        
        return totalRevenue;
    }
    
    /**
     * Checks if service is active.
     * 
     * @return true if active, false otherwise
     */
    public boolean isServiceActive() {
        return isActive;
    }
    
    /**
     * Gets customer count.
     * 
     * @return Number of customers
     */
    public int getCustomerCount() {
        return totalCount;
    }
}
```

### Naming examples:

```java
// Classes (PascalCase, nouns)
public class Customer { }
public class OrderProcessor { }
public class DatabaseConnection { }

// Interfaces (PascalCase, adjectives/nouns)
public interface Runnable { }
public interface Comparable { }
public interface PaymentGateway { }

// Methods (camelCase, verbs)
public void calculateTotal() { }
public String getName() { }
public void setAge(int age) { }
public boolean isValid() { }
public boolean hasPermission() { }

// Variables (camelCase, descriptive)
int customerCount;
String userName;
boolean isActive;
List<String> itemList;

// Constants (ALL_CAPS)
public static final int MAX_SIZE = 100;
public static final String DEFAULT_NAME = "Unknown";
public static final double PI = 3.14159;

// Packages (lowercase)
package com.example.project;
package org.apache.commons.lang;
package java.util.concurrent;
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         CONVENTIONS IN DEVELOPMENT                  │
└─────────────────────────────────────────────────────┘

SOURCE CODE (.java):
// Well-formatted with conventions
public class Demo {
    private static final int MAX = 100;
    private int count;
    
    public void increment() {
        count++;
    }
}

COMPILATION:
└─ Conventions don't affect bytecode
└─ Same bytecode regardless of naming/formatting

BYTECODE (.class):
// Bytecode is same whether you use:
// - count or COUNT or Count (variable name)
// - 4 spaces or 2 spaces (indentation)
// - K&R or Allman braces (brace style)

RUNTIME:
└─ Conventions have ZERO runtime impact
└─ Only affect source code readability
└─ Not present in compiled code

Conventions are for HUMANS, not MACHINES!
```

---

## Advantages

✅ **Improved Readability**: Code easier to understand  
✅ **Team Collaboration**: Consistent style across team  
✅ **Easier Maintenance**: Predictable code structure  
✅ **Professional Quality**: Industry-standard code  
✅ **Faster Onboarding**: New developers adapt quickly  
✅ **Tool Support**: IDEs auto-format, static analysis  
✅ **Reduced Errors**: Consistent patterns reduce mistakes  
✅ **Better Documentation**: Javadoc conventions  

---

## Limitations

❌ **Learning Curve**: Beginners must learn conventions  
❌ **Enforcement Needed**: Requires discipline/tools  
❌ **Subjective Choices**: Some conventions debatable  
❌ **Legacy Code**: Old code may not follow conventions  

---

## Edge Cases

🔸 **Acronyms in names:**
```java
// Treat acronyms as words
✅ class HttpClient { }  // Not HTTPClient
✅ class XmlParser { }   // Not XMLParser
✅ String userId;         // Not userID

// Exception: Constants
✅ static final String HTTP_URL = "...";
```

🔸 **Single-letter variables:**
```java
// OK for loop counters
✅ for (int i = 0; i < 10; i++) { }

// OK for coordinates/math
✅ int x, y, z;
✅ double a, b, c;  // coefficients

// NOT OK for business logic
❌ int c = getCustomerCount();  // Use customerCount
```

🔸 **Boolean naming:**
```java
// Use is/has/can prefix
✅ boolean isValid;
✅ boolean hasPermission;
✅ boolean canExecute;

// Avoid negative names
❌ boolean isNotValid;  // Confusing
✅ boolean isInvalid;   // Better
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Wrong case for classes
```java
❌ public class customer { }  // lowercase
❌ public class CUSTOMER { }  // all caps
✅ public class Customer { }  // PascalCase
```

🚫 **Mistake 2**: Wrong case for methods
```java
❌ public void CalculateSum() { }  // PascalCase
❌ public void calculate_sum() { }  // snake_case
✅ public void calculateSum() { }  // camelCase
```

🚫 **Mistake 3**: Non-descriptive names
```java
❌ int x = getCustomerCount();  // What is x?
✅ int customerCount = getCustomerCount();

❌ void process() { }  // Process what?
✅ void processPayment() { }
```

🚫 **Mistake 4**: Inconsistent formatting
```java
❌ if(x>0){  // No spaces
    System.out.println(x);
}

✅ if (x > 0) {  // Proper spacing
    System.out.println(x);
}
```

---

## Important Interview Points

💡 **Q: What are Java coding conventions?**  
**A**: Coding conventions are standardized guidelines for writing Java code. Key conventions: (1) Naming - Classes: PascalCase (MyClass), Methods/Variables: camelCase (myMethod), Constants: ALL_CAPS (MAX_VALUE), Packages: lowercase (com.example), (2) Formatting - Indentation: 4 spaces, Braces: K&R style, Line length: 80-120 chars, (3) Documentation - Javadoc for public APIs, Comments for complex logic. Benefits: improved readability, easier maintenance, team collaboration, professional quality.

💡 **Q: What is the difference between PascalCase and camelCase?**  
**A**: 
- **PascalCase**: First letter of each word uppercase (MyClass, CustomerService)
- **camelCase**: First letter lowercase, rest PascalCase (myVariable, calculateSum)
Usage: PascalCase for classes/interfaces, camelCase for methods/variables.

💡 **Q: What is K&R brace style?**  
**A**: K&R (Kernighan & Ritchie) style: opening brace on same line, closing brace on new line. Example:
```java
if (condition) {  // Opening brace here
    statement;
}  // Closing brace aligned
```
Alternative (Allman style): opening brace on new line, but K&R is Java standard.

💡 **Q: How to name boolean variables and methods?**  
**A**: Use is/has/can prefix:
- Variables: isValid, hasPermission, canExecute
- Methods: isEmpty(), hasNext(), canRead()
Avoid negative names (isNotValid), use positive (isInvalid). Makes code readable: `if (isValid)` reads naturally.

💡 **Q: What are constant naming conventions?**  
**A**: Constants (final static fields) use ALL_CAPS with underscores:
```java
public static final int MAX_VALUE = 100;
public static final String DEFAULT_NAME = "Unknown";
public static final double PI = 3.14159;
```
Makes constants easily identifiable in code.

💡 **Q: What tools enforce coding conventions?**  
**A**: Static analysis tools:
- **Checkstyle**: Checks naming, formatting, documentation
- **PMD**: Detects code smells, unused variables
- **SpotBugs**: Finds bugs, potential issues
- **SonarQube**: Overall code quality, technical debt
IDEs (IntelliJ, Eclipse) have built-in formatters. CI/CD pipelines can fail builds on violations.

💡 **Q: Why are coding conventions important?**  
**A**: Benefits:
1. **Readability**: Consistent code easier to understand
2. **Maintenance**: Predictable structure simplifies changes
3. **Collaboration**: Team members understand each other's code
4. **Professionalism**: Industry-standard quality
5. **Onboarding**: New developers adapt faster
6. **Tool support**: IDEs, analyzers work better
7. **Error reduction**: Consistent patterns reduce mistakes

💡 **Q: What is the package naming convention?**  
**A**: Packages use all lowercase, reverse domain name:
```java
com.company.project.module
org.apache.commons.lang
java.util.concurrent
```
Structure: domain.company.project.module. Avoids naming conflicts, shows ownership, organizes code hierarchically.

---

## Short Recap

Coding conventions standardized rules hain code likhne ke liye. Naming: Classes PascalCase (MyClass), Methods/Variables camelCase (myMethod, myVariable), Constants ALL_CAPS (MAX_VALUE), Packages lowercase (com.example). Formatting: Indentation 4 spaces, Braces K&R style (opening same line), Line length 80-120 chars, Whitespace around operators. Documentation: Javadoc for public APIs, Comments for complex logic. File organization: Package first, Imports second, Class declaration, Fields, Constructors, Methods. Tools: Checkstyle, PMD, SonarQube enforce conventions. Benefits: readability, maintainability, team collaboration, professional quality. Interview ke liye yaad rakho: naming conventions (PascalCase vs camelCase), K&R brace style, boolean naming (is/has/can), constant naming (ALL_CAPS), package naming (lowercase), aur enforcement tools.

---

**Previous**: [← 31 - Comments](./31-comments.md)  
**Next**: [33 - What is Variable →](./33-what-is-variable.md)
