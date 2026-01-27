# 31) COMMENTS IN JAVA

## Concept Introduction

Comments Java code mein explanatory text hain jo compiler ignore karta hai — yeh sirf programmers ke liye hote hain code samajhne ke liye. Jab tum `// This is a comment` likhte ho, toh compiler isko skip kar deta hai. Comments teen types ke hote hain: Single-line (//), Multi-line (/* */), aur Documentation (/** */). Comments ka main purpose hai code ko readable banana, logic explain karna, aur future reference ke liye notes rakhna. Good comments code ki quality improve karte hain aur maintenance easy banate hain. Professional development mein comments essential hain!

---

## Why This Concept Exists

**Problem:**
- Code complex ho toh logic kaise samjhein?
- Future mein code modify karte waqt kya yaad rakhein?
- Team members ko code kaise explain karein?
- Debugging ke liye temporary code kaise disable karein?
- API documentation kaise generate karein?

**Solution (Comments):**
- Code mein explanatory notes add karo
- Logic aur reasoning document karo
- Compiler comments ignore karta hai
- Code readability improve hoti hai
- Javadoc se automatic documentation
- Temporary code disable kar sakte ho

---

## Definitions

### 🔹 Very Simple Definition
Comments explanatory text hain jo compiler ignore karta hai — sirf programmers ke liye hote hain code samajhne ke liye.

### 🔹 College Exam Definition
Comments are non-executable statements in Java program that provide explanatory information for programmers. Java has three types of comments: (1) Single-line comments - start with //, extend to end of line, (2) Multi-line comments - enclosed in /* and */, can span multiple lines, (3) Documentation comments - enclosed in /** and */, used for generating API documentation with Javadoc tool. Comments are ignored by compiler during compilation, do not affect program execution or bytecode size.

### 🔹 Viva Definition
Comments are lexical tokens ignored during compilation, serving as code documentation. Three types: (1) **Single-line comments** - syntax: // text, extends from // to line end, used for brief explanations, inline notes, (2) **Multi-line comments** - syntax: /* text */, spans multiple lines, used for longer explanations, block documentation, can be nested (with caution), (3) **Documentation comments** - syntax: /** text */, special multi-line comments for Javadoc, contains tags (@param, @return, @throws, @author, @version, @see, @since, @deprecated), generates HTML documentation. Comments removed during lexical analysis phase, not present in bytecode. Uses: explain complex logic, document assumptions, mark TODO/FIXME, disable code temporarily, provide usage examples, legal notices.

### 🔹 Interview Definition
Comments are non-executable text annotations processed by lexical analyzer and discarded before parsing. Types: (1) **Single-line comments** - Syntax: // comment text, Scope: from // to newline (\n), Use cases: inline explanations, quick notes, temporary code disabling, Example: `int x = 10; // Initialize counter`, (2) **Multi-line comments** - Syntax: /* comment text */, Scope: from /* to */, can span multiple lines, Cannot be nested (/* /* */ */ causes error), Use cases: block explanations, copyright notices, algorithm descriptions, Example: `/* This method calculates sum */`, (3) **Documentation comments (Javadoc)** - Syntax: /** comment text */, Special multi-line comment for API documentation, Tags: @param (parameter description), @return (return value), @throws/@exception (exceptions thrown), @author (author name), @version (version info), @see (cross-reference), @since (version introduced), @deprecated (obsolete API), Generates HTML documentation via javadoc tool, Example: `/** @param x The input value @return The result */`. Processing: Comments removed in lexical analysis, not in token stream, not in bytecode, zero runtime overhead. Best practices: Explain WHY not WHAT, keep comments updated, avoid obvious comments, use meaningful names to reduce comment need.

### 🔹 Technical Definition
Comments are lexical constructs recognized by lexical analyzer using pattern matching: single-line (regex: //.*$), multi-line (regex: /\*.*?\*/), documentation (regex: /\*\*.*?\*/). Lexical analyzer implementation: (1) Detect comment start (// or /*), (2) Enter comment state, (3) Skip characters until comment end (newline for //, */ for /* */), (4) Resume normal tokenization. Comments not included in token stream, eliminated before parsing phase. Javadoc processing: (1) Extract /** */ comments, (2) Parse Javadoc tags (@param, @return, etc.), (3) Generate HTML using doclet API, (4) Create cross-referenced documentation. Comment syntax in grammar: SingleLineComment ::= '//' InputCharacter* LineTerminator, MultiLineComment ::= '/*' CommentText '*/', DocumentationComment ::= '/**' DocCommentText '*/'. Edge cases: String literals containing comment syntax ("//", "/*") not treated as comments, character literals ('/', '*') not treated as comments, nested multi-line comments cause error (/* /* */ */ - inner */ closes outer comment). Performance: Comments have zero runtime cost, removed before bytecode generation, do not increase .class file size, do not affect JVM execution.

### 🔹 One-line Crisp Definition
Comments = Non-executable text + Compiler ignored + Documentation purpose + Three types (//, /* */, /** */)

---

## DIAGRAM: Comment Types

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA COMMENTS (3 TYPES)                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. SINGLE-LINE COMMENTS                                                  │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Syntax: // comment text                                            │  │
│  │                                                                      │  │
│  │  Scope: From // to end of line                                      │  │
│  │                                                                      │  │
│  │  Examples:                                                           │  │
│  │  // This is a single-line comment                                   │  │
│  │  int x = 10; // Initialize variable                                 │  │
│  │  // TODO: Implement error handling                                  │  │
│  │                                                                      │  │
│  │  Use Cases:                                                          │  │
│  │  ├─ Brief explanations                                              │  │
│  │  ├─ Inline notes                                                    │  │
│  │  ├─ Temporary code disabling                                        │  │
│  │  └─ Quick reminders (TODO, FIXME)                                   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. MULTI-LINE COMMENTS                                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Syntax: /* comment text */                                         │  │
│  │                                                                      │  │
│  │  Scope: From /* to */                                               │  │
│  │                                                                      │  │
│  │  Examples:                                                           │  │
│  │  /* This is a                                                       │  │
│  │     multi-line comment */                                           │  │
│  │                                                                      │  │
│  │  /*                                                                  │  │
│  │   * Algorithm explanation:                                          │  │
│  │   * Step 1: Initialize variables                                    │  │
│  │   * Step 2: Process data                                            │  │
│  │   * Step 3: Return result                                           │  │
│  │   */                                                                 │  │
│  │                                                                      │  │
│  │  Use Cases:                                                          │  │
│  │  ├─ Longer explanations                                             │  │
│  │  ├─ Block documentation                                             │  │
│  │  ├─ Copyright notices                                               │  │
│  │  ├─ Algorithm descriptions                                          │  │
│  │  └─ Disable code blocks                                             │  │
│  │                                                                      │  │
│  │  Warning: Cannot nest                                               │  │
│  │  /* outer /* inner */ outer */  ❌ Error!                           │  │
│  │  Inner */ closes outer comment                                      │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. DOCUMENTATION COMMENTS (JAVADOC)                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Syntax: /** comment text */                                        │  │
│  │                                                                      │  │
│  │  Scope: From /** to */                                              │  │
│  │                                                                      │  │
│  │  Special Tags:                                                       │  │
│  │  ├─ @param name description    (parameter)                          │  │
│  │  ├─ @return description         (return value)                      │  │
│  │  ├─ @throws Exception description (exception)                       │  │
│  │  ├─ @author name                (author)                            │  │
│  │  ├─ @version version            (version)                           │  │
│  │  ├─ @see reference              (cross-reference)                   │  │
│  │  ├─ @since version              (version introduced)                │  │
│  │  └─ @deprecated description     (obsolete API)                      │  │
│  │                                                                      │  │
│  │  Example:                                                            │  │
│  │  /**                                                                 │  │
│  │   * Calculates sum of two numbers.                                  │  │
│  │   * @param a First number                                           │  │
│  │   * @param b Second number                                          │  │
│  │   * @return Sum of a and b                                          │  │
│  │   * @throws ArithmeticException if overflow                         │  │
│  │   * @author John Doe                                                │  │
│  │   * @version 1.0                                                    │  │
│  │   * @since 2024                                                     │  │
│  │   */                                                                 │  │
│  │  public int add(int a, int b) {                                     │  │
│  │      return a + b;                                                  │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  Use Cases:                                                          │  │
│  │  ├─ API documentation                                               │  │
│  │  ├─ Method/class descriptions                                       │  │
│  │  ├─ Parameter explanations                                          │  │
│  │  ├─ Return value descriptions                                       │  │
│  │  └─ Generate HTML docs (javadoc tool)                              │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Comment Processing

```
┌─────────────────────────────────────────────────────┐
│         COMMENT PROCESSING IN COMPILATION           │
└─────────────────────────────────────────────────────┘

SOURCE CODE:
// This is a comment
int x = 10; /* Initialize */

LEXICAL ANALYSIS:
┌──────────────────────────────────────┐
│  Read: // This is a comment          │
│  Action: Skip until newline          │
│  Result: Comment ignored             │
├──────────────────────────────────────┤
│  Read: int                           │
│  Action: Create token KEYWORD        │
├──────────────────────────────────────┤
│  Read: x                             │
│  Action: Create token IDENTIFIER     │
├──────────────────────────────────────┤
│  Read: =                             │
│  Action: Create token OPERATOR       │
├──────────────────────────────────────┤
│  Read: 10                            │
│  Action: Create token LITERAL        │
├──────────────────────────────────────┤
│  Read: /* Initialize */              │
│  Action: Skip until */               │
│  Result: Comment ignored             │
└──────────────────────────────────────┘

TOKEN STREAM (Comments removed):
[KEYWORD:int] [IDENTIFIER:x] [OPERATOR:=] [LITERAL:10]

BYTECODE (.class):
0: bipush 10
2: istore_1

Comments NOT present in bytecode!
Zero runtime overhead!
```

---

## Real-life Hinglish Example

### Example 1: Recipe Instructions

**Comments = Recipe Notes:**
```
Recipe (Java Program):
├─ Ingredients list (code)
├─ "Note: Use fresh ingredients" (comment)
├─ Cooking steps (code)
├─ "Tip: Stir continuously" (comment)
└─ Final dish (output)

Similarly Java:
// Note: Initialize all variables
int eggs = 2;
/* Tip: Use room temperature eggs
   for better results */
mix(eggs);
```

### Example 2: Road Signs

**Comments = Road Instructions:**
```
Highway (Java Program):
├─ Road (executable code)
├─ Sign: "Speed limit 60" (comment)
├─ Road continues (code)
├─ Sign: "School zone ahead" (comment)
└─ Destination (output)

Java equivalent:
// Speed limit: max 100 iterations
for(int i = 0; i < 100; i++) {
    // School zone: careful with array bounds
    process(arr[i]);
}
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         LEXICAL ANALYZER COMMENT HANDLING           │
└─────────────────────────────────────────────────────┘

ALGORITHM:
1. Read character from input stream
2. If character is '/':
   ├─ Read next character
   ├─ If next is '/':
   │  ├─ Enter single-line comment state
   │  ├─ Skip all characters until '\n'
   │  └─ Resume normal tokenization
   ├─ If next is '*':
   │  ├─ Enter multi-line comment state
   │  ├─ Skip characters until '*/'
   │  └─ Resume normal tokenization
   └─ Else: '/' is division operator
3. Continue tokenization

EXAMPLE TRACE:
Input: "int x = 10; // comment"

Step 1: Read 'i' → Token: int
Step 2: Read 'x' → Token: x
Step 3: Read '=' → Token: =
Step 4: Read '1' → Token: 10
Step 5: Read ';' → Token: ;
Step 6: Read '/' → Check next
Step 7: Read '/' → Comment detected!
Step 8: Skip until '\n'
Step 9: End of line reached
Step 10: Resume tokenization

Result: [int, x, =, 10, ;]
Comment not in token stream!
```

---

## Syntax Explanation

### All comment types:

```java
// ============================================
// 1. SINGLE-LINE COMMENTS
// ============================================

// This is a single-line comment
int x = 10; // Inline comment after code

// Multiple single-line comments
// can be written
// one after another

// TODO: Implement this feature
// FIXME: Bug in calculation
// NOTE: Important information


// ============================================
// 2. MULTI-LINE COMMENTS
// ============================================

/* This is a multi-line comment */

/* This comment
   spans multiple
   lines */

/*
 * Formatted multi-line comment
 * with asterisks for readability
 */

/* Copyright (C) 2024
   All rights reserved */

/* Disable code temporarily
int y = 20;
int z = 30;
*/


// ============================================
// 3. DOCUMENTATION COMMENTS (JAVADOC)
// ============================================

/**
 * This is a documentation comment.
 * Used for generating API documentation.
 */
public class Demo {
    
    /**
     * Calculates sum of two numbers.
     * 
     * @param a First number
     * @param b Second number
     * @return Sum of a and b
     * @throws ArithmeticException if overflow occurs
     * @see #subtract(int, int)
     * @since 1.0
     * @author John Doe
     * @version 1.0
     */
    public int add(int a, int b) {
        return a + b;
    }
    
    /**
     * @deprecated Use {@link #add(int, int)} instead
     */
    @Deprecated
    public int oldAdd(int a, int b) {
        return a + b;
    }
}
```

### Comment placement:

```java
// Before statement
int x = 10;

int y = 20; // After statement

/* Before block */
if (x > 0) {
    // Inside block
    System.out.println(x);
}

/**
 * Before method
 */
public void method() {
    /* Inside method */
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         COMMENTS IN MEMORY                          │
└─────────────────────────────────────────────────────┘

SOURCE FILE (.java):
// Comment
int x = 10;
/* Another comment */

FILE SIZE: ~50 bytes (with comments)

COMPILATION:
┌──────────────────────────────────────┐
│  Lexical Analysis:                   │
│  ├─ Comments removed                 │
│  └─ Tokens extracted                 │
└──────────────────────────────────────┘

BYTECODE FILE (.class):
0: bipush 10
2: istore_1

FILE SIZE: ~200 bytes (no comments!)

RUNTIME MEMORY:
┌──────────────────────────────────────┐
│  STACK:                              │
│  └─ x = 10                           │
└──────────────────────────────────────┘

Comments NOT in bytecode!
Comments NOT in memory!
ZERO runtime overhead!
```

---

## Advantages

✅ **Code Readability**: Makes code easier to understand  
✅ **Documentation**: Explains logic and reasoning  
✅ **Maintenance**: Helps future modifications  
✅ **Team Collaboration**: Communicates intent to team  
✅ **Debugging**: Temporarily disable code  
✅ **API Documentation**: Javadoc generates HTML docs  
✅ **Zero Overhead**: No runtime cost  
✅ **Legal Notices**: Copyright, license information  

---

## Limitations

❌ **Can Become Outdated**: Comments not updated with code  
❌ **Redundant Comments**: Obvious comments add noise  
❌ **Maintenance Burden**: Must keep comments in sync  
❌ **Cannot Nest Multi-line**: /* /* */ */ causes error  

---

## Edge Cases

🔸 **Comment syntax in strings:**
```java
String s1 = "// This is NOT a comment";  // ✅ OK
String s2 = "/* Also NOT a comment */";  // ✅ OK
// Comment syntax inside strings is literal text
```

🔸 **Nested multi-line comments:**
```java
/* Outer comment
   /* Inner comment */
   Still outer? NO! */  // ❌ Error!
// Inner */ closes outer comment
// "Still outer? NO! */" is code, not comment
```

🔸 **Comment in character literal:**
```java
char slash = '/';  // ✅ OK
char star = '*';   // ✅ OK
// Single characters don't start comments
```

🔸 **Javadoc on non-public members:**
```java
/** This Javadoc is ignored by javadoc tool */
private void method() { }
// Javadoc tool only processes public/protected members
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Nested multi-line comments
```java
❌ /* Comment 1
      /* Comment 2 */
      End of comment 1 */
// Inner */ closes outer comment, causes error

✅ /* Comment 1
      // Comment 2 (use single-line inside)
      End of comment 1 */
```

🚫 **Mistake 2**: Obvious comments
```java
❌ int x = 10; // Assign 10 to x
// Obvious, adds no value

✅ int maxRetries = 10; // Retry limit for network requests
// Explains WHY, not WHAT
```

🚫 **Mistake 3**: Outdated comments
```java
❌ // Calculate average
   int sum = a + b; // Code changed, comment not updated

✅ // Calculate sum
   int sum = a + b;
```

🚫 **Mistake 4**: Wrong Javadoc tags
```java
❌ /**
    * @param x The input  // No parameter x!
    */
   public void method(int y) { }

✅ /**
    * @param y The input
    */
   public void method(int y) { }
```

---

## Important Interview Points

💡 **Q: What are comments in Java?**  
**A**: Comments are non-executable text annotations in code that compiler ignores. Three types: (1) Single-line (//) - extends to line end, (2) Multi-line (/* */) - spans multiple lines, (3) Documentation (/** */) - for Javadoc. Comments removed during lexical analysis, not present in bytecode, zero runtime overhead. Uses: explain logic, document code, disable code temporarily, generate API documentation.

💡 **Q: What are the three types of comments?**  
**A**: 
- **Single-line**: // comment, extends to line end, for brief notes
- **Multi-line**: /* comment */, spans multiple lines, for longer explanations
- **Documentation**: /** comment */, for Javadoc, contains tags (@param, @return, @throws)
Example:
```java
// Single-line
/* Multi-line */
/** Documentation */
```

💡 **Q: What is Javadoc?**  
**A**: Javadoc is documentation generation tool that extracts /** */ comments and generates HTML documentation. Special tags: @param (parameter), @return (return value), @throws (exception), @author (author), @version (version), @see (reference), @since (version introduced), @deprecated (obsolete). Command: `javadoc ClassName.java` generates HTML files. Used for API documentation in professional projects.

💡 **Q: Can multi-line comments be nested?**  
**A**: No, multi-line comments cannot be nested. Example:
```java
/* Outer
   /* Inner */
   Still outer? */  // ❌ Error!
```
Inner */ closes outer comment, "Still outer? */" becomes code. Solution: Use single-line comments inside multi-line comments.

💡 **Q: Do comments affect program performance?**  
**A**: No, comments have zero runtime overhead. Comments removed during lexical analysis (first compilation phase), not present in bytecode, not loaded into memory at runtime. Adding comments doesn't increase .class file size or execution time. Comments only in source code (.java), not in compiled code (.class).

💡 **Q: What are common Javadoc tags?**  
**A**: Common tags:
- @param name description - parameter
- @return description - return value
- @throws Exception description - exception thrown
- @author name - author
- @version version - version
- @see reference - cross-reference
- @since version - version introduced
- @deprecated description - obsolete API
Example:
```java
/**
 * @param x Input value
 * @return Result
 * @throws Exception if error
 */
```

💡 **Q: What is the difference between // and /* */?**  
**A**: 
- **// (Single-line)**: Extends to line end, cannot span multiple lines, commonly used for brief notes
- **/* */ (Multi-line)**: Can span multiple lines, used for longer explanations, cannot be nested
Example:
```java
// Single line only
/* Can span
   multiple lines */
```

💡 **Q: Best practices for writing comments?**  
**A**: Best practices:
1. Explain WHY, not WHAT (code shows what, comment explains why)
2. Keep comments updated with code changes
3. Avoid obvious comments (int x = 10; // assign 10 to x)
4. Use meaningful names to reduce comment need
5. Document complex algorithms
6. Use TODO/FIXME for reminders
7. Write Javadoc for public APIs
8. Don't comment out code (use version control instead)

---

## Short Recap

Comments non-executable text hain jo compiler ignore karta hai. Teen types: Single-line (//), Multi-line (/* */), Documentation (/** */). Single-line line end tak, multi-line multiple lines span karta hai (but cannot nest), documentation Javadoc ke liye with tags (@param, @return, @throws). Comments lexical analysis mein remove hote hain, bytecode mein nahi hote, zero runtime overhead. Uses: code explain karna, logic document karna, temporary code disable karna, API documentation generate karna. Best practices: WHY explain karo (not WHAT), comments updated rakho, obvious comments avoid karo. Interview ke liye yaad rakho: 3 comment types, Javadoc tags, nesting limitation, zero performance impact, aur best practices.

---

**Previous**: [← 30 - Literals](./30-literals.md)  
**Next**: [32 - Coding Conventions →](./32-coding-conventions.md)
