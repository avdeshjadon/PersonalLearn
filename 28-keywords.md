# 28) KEYWORDS IN JAVA

## Concept Introduction

Keywords Java ke reserved words hain jinke predefined meanings hote hain — yeh Java language ka vocabulary hai. Total 50 keywords hain (plus kuch context-sensitive keywords). Keywords ko identifiers ke taur pe use nahi kar sakte. Example: `int`, `class`, `if`, `while`, `public`, `static` — yeh sab keywords hain. Har keyword ka specific purpose hai: data types define karna, control flow manage karna, access control karna, etc. Keywords case-sensitive hain aur lowercase mein likhe jaate hain. Interview mein keywords ki list aur unka usage bahut pucha jaata hai!

---

## Why This Concept Exists

**Problem:**
- Language ko structure kaise dein?
- Reserved words kaise define karein?
- Compiler ko kaise pata chale ki kaunsa word special hai?
- User-defined names se conflict kaise avoid karein?

**Solution (Keywords):**
- Fixed set of reserved words
- Predefined meanings
- Cannot be used as identifiers
- Compiler easily recognizes them
- Language structure maintained
- No ambiguity

---

## Definitions

### 🔹 Very Simple Definition
Keywords Java ke reserved words hain jinhe identifiers ke taur pe use nahi kar sakte — predefined meanings hain.

### 🔹 College Exam Definition
Keywords are reserved words in Java that have predefined meanings and cannot be used as identifiers (variable names, method names, class names). Java has 50 keywords including data types (int, float, boolean), control flow (if, while, for), access modifiers (public, private, protected), class-related (class, interface, extends), and others. Keywords are case-sensitive and written in lowercase.

### 🔹 Viva Definition
Keywords are reserved identifiers with special meaning in Java language. Total 50 keywords categorized as: (1) Data types - byte, short, int, long, float, double, char, boolean, (2) Control flow - if, else, switch, case, default, for, while, do, break, continue, return, (3) Access modifiers - public, private, protected, (4) Class/Object - class, interface, extends, implements, new, this, super, (5) Exception handling - try, catch, finally, throw, throws, (6) Modifiers - static, final, abstract, synchronized, volatile, transient, native, strictfp, (7) Package - package, import, (8) Others - void, instanceof, assert, enum. Two reserved but unused: const, goto. Context-sensitive keywords (Java 10+): var, yield, record, sealed, permits.

### 🔹 Interview Definition
Keywords are lexical tokens with reserved meaning in Java grammar, cannot be redefined or used as identifiers. 50 keywords: (1) **Primitive types** (8) - byte, short, int, long, float, double, char, boolean, (2) **Control statements** (12) - if, else, switch, case, default, for, while, do, break, continue, return, goto*, (3) **Access modifiers** (3) - public, private, protected, (4) **Class modifiers** (3) - abstract, final, static, (5) **Class/Interface** (6) - class, interface, extends, implements, enum, new, (6) **Object reference** (3) - this, super, instanceof, (7) **Exception handling** (5) - try, catch, finally, throw, throws, (8) **Method modifiers** (4) - synchronized, native, strictfp, transient, (9) **Variable modifier** (1) - volatile, (10) **Package** (2) - package, import, (11) **Literals** (3) - true, false, null, (12) **Others** (3) - void, assert, const*. *const and goto reserved but not implemented. Context-sensitive (not reserved): var, yield, record, sealed, permits, non-sealed. Keywords enforce language syntax, enable compiler parsing, prevent naming conflicts, maintain backward compatibility.

### 🔹 Technical Definition
Keywords are terminal symbols in Java grammar with fixed lexical meaning, recognized by lexical analyzer during tokenization. Implementation: keyword table/hash map for O(1) lookup, case-sensitive matching (lowercase only), cannot appear in identifier context. Categories by function: (1) Type keywords - define data types (primitive + void), (2) Declaration keywords - declare program elements (class, interface, enum, package, import), (3) Modifier keywords - modify declarations (public, private, protected, static, final, abstract, synchronized, volatile, transient, native, strictfp), (4) Control flow keywords - alter execution flow (if, else, switch, case, default, for, while, do, break, continue, return), (5) Exception keywords - handle exceptions (try, catch, finally, throw, throws), (6) Object keywords - object operations (new, this, super, instanceof), (7) Reserved keywords - reserved for future use (const, goto). Context-sensitive keywords (Java 10+) are keywords only in specific contexts, can be identifiers elsewhere (var in local variable declarations, yield in switch expressions, record/sealed/permits in type declarations). Keyword evolution: assert (Java 1.4), enum (Java 5), strictfp (Java 2), var (Java 10), yield (Java 13), record/sealed/permits (Java 14-15).

### 🔹 One-line Crisp Definition
Keywords = Reserved words + Predefined meaning + Cannot be identifiers + 50 total

---

## DIAGRAM: All 50 Keywords

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA KEYWORDS (50 TOTAL)                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. DATA TYPE KEYWORDS (8)                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  byte      short     int       long                                 │  │
│  │  float     double    char      boolean                              │  │
│  │                                                                      │  │
│  │  Purpose: Define primitive data types                               │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. CONTROL FLOW KEYWORDS (12)                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  if         else      switch    case                                │  │
│  │  default    for       while     do                                  │  │
│  │  break      continue  return    goto*                               │  │
│  │                                                                      │  │
│  │  Purpose: Control program flow                                      │  │
│  │  * goto is reserved but not used                                    │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. ACCESS MODIFIER KEYWORDS (3)                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  public     private   protected                                     │  │
│  │                                                                      │  │
│  │  Purpose: Control access to classes, methods, variables             │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  4. CLASS/INTERFACE KEYWORDS (6)                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  class      interface  extends    implements                        │  │
│  │  enum       new                                                      │  │
│  │                                                                      │  │
│  │  Purpose: Define and work with classes/interfaces                   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  5. MODIFIER KEYWORDS (7)                                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  static     final      abstract   synchronized                      │  │
│  │  volatile   transient  native                                       │  │
│  │                                                                      │  │
│  │  Purpose: Modify behavior of classes, methods, variables            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  6. EXCEPTION HANDLING KEYWORDS (5)                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  try        catch      finally    throw       throws                │  │
│  │                                                                      │  │
│  │  Purpose: Handle exceptions and errors                              │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  7. OBJECT REFERENCE KEYWORDS (3)                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  this       super      instanceof                                   │  │
│  │                                                                      │  │
│  │  Purpose: Reference objects and check types                         │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  8. PACKAGE KEYWORDS (2)                                                  │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  package    import                                                   │  │
│  │                                                                      │  │
│  │  Purpose: Organize classes into packages                            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  9. OTHER KEYWORDS (4)                                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  void       assert     strictfp   const*                            │  │
│  │                                                                      │  │
│  │  Purpose: Various special purposes                                  │  │
│  │  * const is reserved but not used                                   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  RESERVED BUT NOT USED (2)                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  const      goto                                                     │  │
│  │                                                                      │  │
│  │  Reserved for future use, currently not implemented                 │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  CONTEXT-SENSITIVE KEYWORDS (Java 10+)                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  var        yield      record     sealed      permits               │  │
│  │  non-sealed                                                          │  │
│  │                                                                      │  │
│  │  Keywords only in specific contexts, can be identifiers elsewhere   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

TOTAL: 50 keywords (48 used + 2 reserved)
```



---

## DIAGRAM: Keyword Categories with Examples

```
┌─────────────────────────────────────────────────────┐
│         KEYWORDS BY USAGE                           │
└─────────────────────────────────────────────────────┘

DATA TYPES:
┌──────────────────────────────────────┐
│  int age = 25;                       │
│  double salary = 50000.50;           │
│  boolean isActive = true;            │
│  char grade = 'A';                   │
└──────────────────────────────────────┘

CONTROL FLOW:
┌──────────────────────────────────────┐
│  if (x > 10) {                       │
│      System.out.println("Big");      │
│  } else {                            │
│      System.out.println("Small");    │
│  }                                   │
│                                      │
│  for (int i = 0; i < 10; i++) {     │
│      // loop body                    │
│  }                                   │
│                                      │
│  while (condition) {                 │
│      // loop body                    │
│  }                                   │
└──────────────────────────────────────┘

ACCESS MODIFIERS:
┌──────────────────────────────────────┐
│  public class MyClass {              │
│      private int id;                 │
│      protected String name;          │
│      public void display() { }       │
│  }                                   │
└──────────────────────────────────────┘

CLASS/INTERFACE:
┌──────────────────────────────────────┐
│  class Animal { }                    │
│  interface Flyable { }               │
│  class Bird extends Animal           │
│      implements Flyable { }          │
│  enum Day { MON, TUE, WED }          │
│  Animal obj = new Animal();          │
└──────────────────────────────────────┘

MODIFIERS:
┌──────────────────────────────────────┐
│  static int count = 0;               │
│  final double PI = 3.14;             │
│  abstract class Shape { }            │
│  synchronized void method() { }      │
│  volatile boolean flag;              │
└──────────────────────────────────────┘

EXCEPTION HANDLING:
┌──────────────────────────────────────┐
│  try {                               │
│      int x = 10 / 0;                 │
│  } catch (Exception e) {             │
│      e.printStackTrace();            │
│  } finally {                         │
│      System.out.println("Done");     │
│  }                                   │
│                                      │
│  throw new Exception("Error");       │
│  void method() throws IOException { }│
└──────────────────────────────────────┘

OBJECT REFERENCE:
┌──────────────────────────────────────┐
│  this.name = name;  // Current object│
│  super.display();   // Parent class  │
│  if (obj instanceof String) { }      │
└──────────────────────────────────────┘

PACKAGE:
┌──────────────────────────────────────┐
│  package com.myapp;                  │
│  import java.util.*;                 │
└──────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Traffic Rules

**Keywords = Traffic Signs:**
```
Traffic Signs (Keywords):
├─ STOP (break)
├─ GO (continue)
├─ TURN LEFT (if)
├─ TURN RIGHT (else)
├─ SPEED LIMIT (final)
└─ ONE WAY (static)

Yeh signs fixed hain, change nahi kar sakte
Similarly keywords fixed hain, identifiers nahi ban sakte

❌ int STOP = 10;  // Can't use traffic sign as variable
✅ int stopCount = 10;  // OK
```

### Example 2: Recipe Instructions

**Keywords = Cooking Commands:**
```
Recipe Commands (Keywords):
├─ ADD (new)
├─ MIX (extends)
├─ HEAT (while)
├─ WAIT (try)
├─ SERVE (return)

Commands ka meaning fixed hai
Similarly keywords ka meaning fixed hai

❌ int add = 5;  // Can't use command as variable
✅ int addCount = 5;  // OK
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         KEYWORD RECOGNITION BY COMPILER             │
└─────────────────────────────────────────────────────┘

SOURCE CODE:
int myVar = 10;

LEXICAL ANALYSIS:
┌──────────────────────────────────────┐
│  Step 1: Read "int"                  │
│  Step 2: Check keyword table         │
│  ┌────────────────────────────────┐  │
│  │  Keyword Table (Hash Map):    │  │
│  │  ├─ "int" → KEYWORD_INT        │  │
│  │  ├─ "if" → KEYWORD_IF          │  │
│  │  ├─ "class" → KEYWORD_CLASS    │  │
│  │  └─ ...                        │  │
│  └────────────────────────────────┘  │
│  Step 3: Found! Token = KEYWORD_INT  │
│                                      │
│  Step 4: Read "myVar"                │
│  Step 5: Check keyword table         │
│  Step 6: Not found → IDENTIFIER      │
└──────────────────────────────────────┘

KEYWORD TABLE LOOKUP:
Time Complexity: O(1) using hash map
Case-sensitive: "int" ≠ "Int" ≠ "INT"
```

---

## Syntax Explanation

### Using keywords:

```java
// Data type keywords
byte b = 127;
short s = 32000;
int i = 100;
long l = 100000L;
float f = 3.14f;
double d = 3.14;
char c = 'A';
boolean flag = true;

// Control flow keywords
if (x > 10) {
    System.out.println("Greater");
} else {
    System.out.println("Smaller");
}

for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    if (i == 3) continue;
}

while (condition) {
    // loop
}

do {
    // loop
} while (condition);

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    default:
        System.out.println("Other");
}

// Access modifiers
public class MyClass {
    private int id;
    protected String name;
    public void display() { }
}

// Class/Interface keywords
class Animal { }
interface Flyable { }
class Bird extends Animal implements Flyable { }
enum Color { RED, GREEN, BLUE }
Animal obj = new Animal();

// Modifiers
static int count = 0;
final double PI = 3.14;
abstract class Shape { }
synchronized void method() { }
volatile boolean flag;
transient int temp;
native void nativeMethod();
strictfp class Calc { }

// Exception handling
try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    e.printStackTrace();
} finally {
    System.out.println("Done");
}

throw new Exception("Error");

void method() throws IOException {
    // method body
}

// Object reference
this.name = name;
super.display();
if (obj instanceof String) {
    // type check
}

// Package
package com.myapp;
import java.util.*;

// Other
void method() { }  // void return type
assert x > 0 : "x must be positive";
```

### Keywords cannot be identifiers:

```java
// ❌ INVALID - Using keywords as identifiers
int int = 10;        // Error
int class = 20;      // Error
int if = 30;         // Error
int public = 40;     // Error

// ✅ VALID - Using similar names
int intValue = 10;   // OK
int myClass = 20;    // OK
int ifCondition = 30;// OK
int publicVar = 40;  // OK
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         KEYWORDS IN MEMORY                          │
└─────────────────────────────────────────────────────┘

COMPILATION TIME:
┌──────────────────────────────────────┐
│  Keyword Table (in compiler):       │
│  ┌────────────────────────────────┐ │
│  │  Hash Map<String, TokenType>   │ │
│  │  ├─ "int" → KEYWORD_INT        │ │
│  │  ├─ "class" → KEYWORD_CLASS    │ │
│  │  ├─ "if" → KEYWORD_IF          │ │
│  │  └─ ... (50 entries)           │ │
│  └────────────────────────────────┘ │
│  Used for lexical analysis          │
└──────────────────────────────────────┘

RUNTIME:
Keywords don't exist at runtime
They are compile-time constructs
Bytecode doesn't contain keyword strings
```

---

## Advantages

✅ **Language Structure**: Define Java syntax  
✅ **Reserved**: Prevent naming conflicts  
✅ **Compiler Recognition**: Easy to parse  
✅ **Readability**: Code easier to understand  
✅ **Consistency**: Standard across all programs  
✅ **Type Safety**: Enforce type system  
✅ **Control Flow**: Manage program flow  
✅ **Access Control**: Security through modifiers  

---

## Limitations

❌ **Cannot Use as Identifiers**: Restricts naming  
❌ **Fixed Set**: Cannot add custom keywords  
❌ **Case Sensitive**: Must be lowercase  
❌ **Learning Curve**: Need to memorize all  

---

## Edge Cases

🔸 **Case sensitivity:**
```java
int int = 10;   // ❌ Error: 'int' is keyword
int Int = 10;   // ✅ OK: 'Int' is not keyword (capital I)
int INT = 10;   // ✅ OK: 'INT' is not keyword (all caps)
```

🔸 **Reserved but unused:**
```java
int goto = 10;  // ❌ Error: 'goto' is reserved
int const = 20; // ❌ Error: 'const' is reserved
// Even though not used, still reserved
```

🔸 **Context-sensitive keywords:**
```java
// 'var' as keyword (Java 10+)
var x = 10;  // OK: var is keyword here

// 'var' as identifier
int var = 10;  // OK: var can be identifier in other contexts
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Using keywords as identifiers
```java
❌ int class = 10;
❌ int public = 20;
❌ int if = 30;

✅ int myClass = 10;
✅ int publicVar = 20;
✅ int ifCondition = 30;
```

🚫 **Mistake 2**: Wrong case
```java
❌ Int x = 10;     // 'Int' not recognized
❌ PUBLIC class Demo { }  // 'PUBLIC' not recognized

✅ int x = 10;     // Lowercase
✅ public class Demo { }  // Lowercase
```

🚫 **Mistake 3**: Confusing similar words
```java
❌ String string = "Hello";  // 'string' is not keyword
✅ String str = "Hello";     // 'String' is class, not keyword

❌ Integer integer = 10;     // 'integer' is not keyword
✅ int num = 10;             // 'int' is keyword
```

---

## Important Interview Points

💡 **Q: How many keywords are there in Java?**  
**A**: Java has 50 keywords (48 used + 2 reserved). Reserved but unused: const, goto. Additionally, context-sensitive keywords (Java 10+): var, yield, record, sealed, permits, non-sealed. These are keywords only in specific contexts, can be identifiers elsewhere.

💡 **Q: Why are const and goto reserved but not used?**  
**A**: const and goto are reserved to prevent their use as identifiers, maintaining compatibility with C/C++ programmers who might accidentally use them. Java uses 'final' instead of 'const'. goto is considered harmful for structured programming, so Java doesn't implement it but reserves it to prevent misuse.

💡 **Q: Can we use keywords as identifiers?**  
**A**: No, keywords cannot be used as identifiers (variable names, method names, class names). They are reserved words with predefined meanings. Attempting to use keyword as identifier results in compilation error. Example: `int class = 10;` → Error: "not a statement"

💡 **Q: Are keywords case-sensitive?**  
**A**: Yes, keywords are case-sensitive and must be written in lowercase. 'int' is keyword, but 'Int', 'INT', 'iNt' are not keywords and can be used as identifiers (though not recommended for readability).

💡 **Q: What is the difference between keyword and identifier?**  
**A**: 
- **Keyword**: Reserved word with predefined meaning (if, while, class), cannot be used as identifier, fixed set (50 keywords), case-sensitive (lowercase)
- **Identifier**: User-defined name for variables/methods/classes, follows naming rules, unlimited possibilities, case-sensitive
Example: `int myVar = 10;` - 'int' is keyword, 'myVar' is identifier

💡 **Q: What are context-sensitive keywords?**  
**A**: Context-sensitive keywords (Java 10+) are keywords only in specific contexts, can be identifiers elsewhere. Examples:
- **var**: Keyword in local variable declarations (`var x = 10;`), can be identifier elsewhere
- **yield**: Keyword in switch expressions, can be identifier elsewhere
- **record**: Keyword in record declarations, can be identifier elsewhere
This maintains backward compatibility while adding new features.

💡 **Q: List all data type keywords?**  
**A**: 8 primitive data type keywords:
- **Integer types**: byte, short, int, long
- **Floating-point types**: float, double
- **Character type**: char
- **Boolean type**: boolean
Plus 'void' for no return type (not a data type but related keyword).

💡 **Q: What are access modifier keywords?**  
**A**: 3 access modifier keywords:
- **public**: Accessible from anywhere
- **private**: Accessible only within same class
- **protected**: Accessible within same package and subclasses
Plus default (no keyword) - accessible within same package only.

💡 **Q: Why can't we add custom keywords?**  
**A**: Keywords are part of Java language specification, defined by language designers. Adding custom keywords would:
1. Break existing code (backward compatibility)
2. Require compiler changes
3. Violate language standards
4. Create confusion
Java evolves through JEPs (JDK Enhancement Proposals) which may add new keywords in new versions.

---

## Short Recap

Java mein 50 keywords hain (48 used + 2 reserved: const, goto). Keywords reserved words hain with predefined meanings, identifiers nahi ban sakte. Categories: data types (8), control flow (12), access modifiers (3), class/interface (6), modifiers (7), exception handling (5), object reference (3), package (2), others (4). Keywords case-sensitive hain (lowercase). Context-sensitive keywords (var, yield, record, sealed) specific contexts mein hi keywords hain. Interview ke liye yaad rakho: total count (50), reserved but unused (const, goto), data type keywords (8), access modifiers (3), case sensitivity, aur keyword vs identifier difference.

---

**Previous**: [← 27 - Tokens](./27-tokens.md)  
**Next**: [29 - Identifiers →](./29-identifiers.md)
