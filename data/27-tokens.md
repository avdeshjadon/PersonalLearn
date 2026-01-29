# 27) TOKENS IN JAVA

## Concept Introduction

Tokens Java program ke smallest building blocks hain — jaise words ek sentence ke building blocks hote hain. Jab compiler Java code read karta hai, toh wo code ko tokens mein break karta hai. Har token ek meaningful unit hai: keyword, identifier, literal, operator, ya separator. Example: `int x = 10;` mein tokens hain: `int` (keyword), `x` (identifier), `=` (operator), `10` (literal), `;` (separator). Tokens ko samajhna important hai kyunki compiler tokens ke basis pe hi code ko understand karta hai. Yeh lexical analysis ka part hai!

---

## Why This Concept Exists

**Problem:**
- Compiler ko code kaise samajhna hai?
- Code ko kaise meaningful parts mein divide karein?
- Syntax errors kaise detect karein?
- Code parsing kaise karein?

**Solution (Tokens):**
- Code ko smallest meaningful units mein break karo
- Har token ka specific meaning hai
- Compiler tokens ko recognize karke code understand karta hai
- Lexical analysis ka foundation
- Syntax validation ka basis

---

## Definitions

### 🔹 Very Simple Definition
Tokens Java program ke smallest meaningful units hain — keywords, identifiers, literals, operators, separators.

### 🔹 College Exam Definition
Tokens are the smallest individual elements in a Java program that are meaningful to the compiler. Java has five types of tokens: (1) Keywords - reserved words with predefined meaning, (2) Identifiers - names for variables, methods, classes, (3) Literals - constant values, (4) Operators - symbols for operations, (5) Separators - punctuation symbols. Compiler performs lexical analysis to break source code into tokens.

### 🔹 Viva Definition
Tokens are atomic lexical units recognized by Java compiler during lexical analysis phase. Five token categories: (1) Keywords - 50+ reserved words (if, while, class, etc.), cannot be used as identifiers, (2) Identifiers - user-defined names following rules (start with letter/underscore/$, case-sensitive), (3) Literals - constant values (integer, floating-point, character, string, boolean, null), (4) Operators - arithmetic (+,-,*,/), relational (==,!=), logical (&&,||), etc., (5) Separators - punctuation (parentheses, braces, brackets, semicolon, comma, period). Whitespace (spaces, tabs, newlines) separates tokens but is not a token itself. Comments are ignored during tokenization.

### 🔹 Interview Definition
Tokens are lexical units produced by lexical analyzer (scanner) during compilation's first phase. Token types: (1) **Keywords** - 50 reserved words (abstract, assert, boolean, break, byte, case, catch, char, class, const, continue, default, do, double, else, enum, extends, final, finally, float, for, goto, if, implements, import, instanceof, int, interface, long, native, new, package, private, protected, public, return, short, static, strictfp, super, switch, synchronized, this, throw, throws, transient, try, void, volatile, while), context-sensitive keywords (var, yield, record, sealed, permits), (2) **Identifiers** - names for variables/methods/classes, rules: start with letter/underscore/$, subsequent can be letters/digits/underscore/$, case-sensitive, cannot be keywords, unlimited length, (3) **Literals** - integer (decimal, octal, hex, binary), floating-point (float, double), character (single quotes), string (double quotes), boolean (true/false), null, (4) **Operators** - 38 operators in categories (arithmetic, relational, logical, bitwise, assignment, unary, ternary, instanceof), (5) **Separators** - 9 separators: ( ) { } [ ] ; , . ... (ellipsis). Tokenization process: source code → lexical analyzer → token stream → parser.

### 🔹 Technical Definition
Tokens are terminal symbols in Java grammar produced by lexical analyzer using finite automata/regular expressions. Tokenization algorithm: (1) Read character stream, (2) Skip whitespace (space, tab, newline, form feed), (3) Skip comments (// single-line, /* */ multi-line, /** */ javadoc), (4) Match longest token (maximal munch rule), (5) Classify token type, (6) Generate token object with type, lexeme, position. Token representation: Token(type, lexeme, line, column). Example: `int x = 10;` → [Token(KEYWORD, "int", 1, 1), Token(IDENTIFIER, "x", 1, 5), Token(OPERATOR, "=", 1, 7), Token(LITERAL, "10", 1, 9), Token(SEPARATOR, ";", 1, 11)]. Lexical errors: invalid characters, malformed literals, unclosed strings. Tokenization is context-free (doesn't require semantic knowledge), enables parallel parsing, supports syntax highlighting in IDEs.

### 🔹 One-line Crisp Definition
Tokens = Keywords + Identifiers + Literals + Operators + Separators (smallest meaningful units)

---

## DIAGRAM: Token Types

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA TOKENS (5 TYPES)                                    │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. KEYWORDS (Reserved Words)                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  abstract   assert      boolean     break       byte                │  │
│  │  case       catch       char        class       const*              │  │
│  │  continue   default     do          double      else                │  │
│  │  enum       extends     final       finally     float               │  │
│  │  for        goto*       if          implements  import              │  │
│  │  instanceof int         interface   long        native              │  │
│  │  new        package     private     protected   public              │  │
│  │  return     short       static      strictfp    super               │  │
│  │  switch     synchronized this       throw       throws              │  │
│  │  transient  try         void        volatile    while               │  │
│  │                                                                      │  │
│  │  * const and goto are reserved but not used                         │  │
│  │                                                                      │  │
│  │  Context-sensitive keywords (Java 10+):                             │  │
│  │  var, yield, record, sealed, permits                                │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. IDENTIFIERS (User-defined Names)                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Rules:                                                              │  │
│  │  ├─ Start with: letter, underscore (_), dollar sign ($)             │  │
│  │  ├─ Subsequent: letters, digits, underscore, dollar                 │  │
│  │  ├─ Case-sensitive: myVar ≠ MyVar ≠ MYVAR                           │  │
│  │  ├─ Cannot be keywords                                              │  │
│  │  └─ Unlimited length                                                │  │
│  │                                                                      │  │
│  │  Valid Examples:                                                     │  │
│  │  ✅ myVariable, _temp, $price, userName123, MAX_VALUE               │  │
│  │                                                                      │  │
│  │  Invalid Examples:                                                   │  │
│  │  ❌ 123abc (starts with digit)                                       │  │
│  │  ❌ my-var (hyphen not allowed)                                      │  │
│  │  ❌ int (keyword)                                                    │  │
│  │  ❌ my var (space not allowed)                                       │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. LITERALS (Constant Values)                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Integer Literals:                                                   │  │
│  │  ├─ Decimal: 10, 100, -50                                           │  │
│  │  ├─ Octal: 012 (prefix 0)                                           │  │
│  │  ├─ Hexadecimal: 0x1A, 0XFF (prefix 0x or 0X)                       │  │
│  │  ├─ Binary: 0b1010, 0B1111 (prefix 0b or 0B)                        │  │
│  │  └─ Long: 100L, 100l (suffix L or l)                                │  │
│  │                                                                      │  │
│  │  Floating-point Literals:                                            │  │
│  │  ├─ Float: 3.14f, 3.14F (suffix f or F)                             │  │
│  │  ├─ Double: 3.14, 3.14d, 3.14D (default or suffix d/D)              │  │
│  │  └─ Scientific: 1.5e10, 1.5E-10                                     │  │
│  │                                                                      │  │
│  │  Character Literals:                                                 │  │
│  │  ├─ Single character: 'A', 'z', '5'                                 │  │
│  │  ├─ Escape sequences: '\n', '\t', '\\', '\'', '\"'                  │  │
│  │  └─ Unicode: '\u0041' (A)                                           │  │
│  │                                                                      │  │
│  │  String Literals:                                                    │  │
│  │  └─ Double quotes: "Hello", "Java", "123"                           │  │
│  │                                                                      │  │
│  │  Boolean Literals:                                                   │  │
│  │  └─ true, false                                                     │  │
│  │                                                                      │  │
│  │  Null Literal:                                                       │  │
│  │  └─ null                                                            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  4. OPERATORS (38 Operators)                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Arithmetic: +  -  *  /  %                                          │  │
│  │  Relational: ==  !=  >  <  >=  <=                                   │  │
│  │  Logical: &&  ||  !                                                  │  │
│  │  Bitwise: &  |  ^  ~  <<  >>  >>>                                   │  │
│  │  Assignment: =  +=  -=  *=  /=  %=  &=  |=  ^=  <<=  >>=  >>>=     │  │
│  │  Unary: ++  --  +  -  !  ~                                          │  │
│  │  Ternary: ? :                                                        │  │
│  │  instanceof: instanceof                                              │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  5. SEPARATORS (9 Separators)                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  ( )  Parentheses - method calls, expressions, casting              │  │
│  │  { }  Braces - code blocks, arrays, class/method bodies             │  │
│  │  [ ]  Brackets - array declaration, array access                    │  │
│  │  ;    Semicolon - statement terminator                              │  │
│  │  ,    Comma - separate variables, parameters                        │  │
│  │  .    Period - member access, package separator                     │  │
│  │  ...  Ellipsis - varargs                                            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Tokenization Example

```
┌─────────────────────────────────────────────────────┐
│         TOKENIZATION PROCESS                        │
└─────────────────────────────────────────────────────┘

SOURCE CODE:
int sum = 10 + 20;

TOKENIZATION:
┌──────────────────────────────────────┐
│  Token 1: int                        │
│  ├─ Type: KEYWORD                    │
│  ├─ Lexeme: "int"                    │
│  └─ Position: Line 1, Column 1       │
├──────────────────────────────────────┤
│  Token 2: sum                        │
│  ├─ Type: IDENTIFIER                 │
│  ├─ Lexeme: "sum"                    │
│  └─ Position: Line 1, Column 5       │
├──────────────────────────────────────┤
│  Token 3: =                          │
│  ├─ Type: OPERATOR                   │
│  ├─ Lexeme: "="                      │
│  └─ Position: Line 1, Column 9       │
├──────────────────────────────────────┤
│  Token 4: 10                         │
│  ├─ Type: LITERAL (Integer)          │
│  ├─ Lexeme: "10"                     │
│  └─ Position: Line 1, Column 11      │
├──────────────────────────────────────┤
│  Token 5: +                          │
│  ├─ Type: OPERATOR                   │
│  ├─ Lexeme: "+"                      │
│  └─ Position: Line 1, Column 14      │
├──────────────────────────────────────┤
│  Token 6: 20                         │
│  ├─ Type: LITERAL (Integer)          │
│  ├─ Lexeme: "20"                     │
│  └─ Position: Line 1, Column 16      │
├──────────────────────────────────────┤
│  Token 7: ;                          │
│  ├─ Type: SEPARATOR                  │
│  ├─ Lexeme: ";"                      │
│  └─ Position: Line 1, Column 18      │
└──────────────────────────────────────┘

TOKEN STREAM:
[KEYWORD:int] [IDENTIFIER:sum] [OPERATOR:=] 
[LITERAL:10] [OPERATOR:+] [LITERAL:20] [SEPARATOR:;]

WHITESPACE IGNORED:
Spaces between tokens are ignored during tokenization
```

---

## Real-life Hinglish Example

### Example 1: Sentence Structure

**Tokens = Words in Sentence:**
```
English Sentence:
"The cat sat on the mat."

Words (Tokens):
├─ The (article)
├─ cat (noun)
├─ sat (verb)
├─ on (preposition)
├─ the (article)
├─ mat (noun)
└─ . (punctuation)

Similarly Java:
int x = 10;
├─ int (keyword)
├─ x (identifier)
├─ = (operator)
├─ 10 (literal)
└─ ; (separator)
```

### Example 2: Recipe Ingredients

**Tokens = Recipe Components:**
```
Recipe:
"Add 2 cups flour and mix"

Components (Tokens):
├─ Add (action/keyword)
├─ 2 (quantity/literal)
├─ cups (unit/identifier)
├─ flour (ingredient/identifier)
├─ and (connector/operator)
└─ mix (action/keyword)

Java equivalent:
sum = a + b;
├─ sum (identifier)
├─ = (operator)
├─ a (identifier)
├─ + (operator)
└─ b (identifier)
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         LEXICAL ANALYZER (TOKENIZER)                │
└─────────────────────────────────────────────────────┘

INPUT: Source code character stream

PROCESS:
1. Read character
2. Skip whitespace (space, tab, newline)
3. Skip comments (// or /* */)
4. Identify token type:
   ├─ Check if keyword
   ├─ Check if identifier
   ├─ Check if literal
   ├─ Check if operator
   └─ Check if separator
5. Extract complete token (maximal munch)
6. Create token object
7. Add to token stream
8. Repeat until end of file

OUTPUT: Token stream

EXAMPLE:
Input: "int x = 10;"

Step 1: Read 'i'
Step 2: Read 'n'
Step 3: Read 't'
Step 4: Read ' ' (whitespace, stop)
Step 5: Token identified: "int" (keyword)
Step 6: Create Token(KEYWORD, "int")
Step 7: Skip whitespace
Step 8: Read 'x'
Step 9: Read ' ' (whitespace, stop)
Step 10: Token identified: "x" (identifier)
... continue ...

Final: [KEYWORD:int, IDENTIFIER:x, OPERATOR:=, 
        LITERAL:10, SEPARATOR:;]
```

---

## Syntax Explanation

### Token examples:

```java
// Keywords
public class Demo {
    private static final int MAX = 100;
    //  ↑       ↑      ↑     ↑
    //  Keywords

    // Identifiers
    int myVariable = 10;
    //  ↑
    //  Identifier

    // Literals
    int num = 42;           // Integer literal
    double pi = 3.14;       // Floating-point literal
    char ch = 'A';          // Character literal
    String str = "Hello";   // String literal
    boolean flag = true;    // Boolean literal
    Object obj = null;      // Null literal

    // Operators
    int sum = a + b;        // + operator
    boolean result = x > y; // > operator
    x++;                    // ++ operator

    // Separators
    int[] arr = {1, 2, 3};  // { } [ ] , separators
    method(a, b);           // ( ) , separators
    System.out.println();   // . separator
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         TOKENS IN COMPILATION                       │
└─────────────────────────────────────────────────────┘

SOURCE FILE (.java):
int x = 10;

COMPILATION PHASE 1: LEXICAL ANALYSIS
┌──────────────────────────────────────┐
│  Token Stream (in memory):           │
│  [Token(KEYWORD, "int"),             │
│   Token(IDENTIFIER, "x"),            │
│   Token(OPERATOR, "="),              │
│   Token(LITERAL, "10"),              │
│   Token(SEPARATOR, ";")]             │
└──────────────────────────────────────┘

COMPILATION PHASE 2: SYNTAX ANALYSIS
└─ Parser uses tokens to build AST

COMPILATION PHASE 3: CODE GENERATION
└─ Generate bytecode

BYTECODE (.class):
0: bipush 10
2: istore_1
3: return

Tokens are intermediate representation,
not present in final bytecode
```

---

## Advantages

✅ **Simplifies Parsing**: Breaks code into manageable units  
✅ **Error Detection**: Lexical errors caught early  
✅ **Compiler Efficiency**: Faster processing  
✅ **Syntax Highlighting**: IDEs use tokens for coloring  
✅ **Code Analysis**: Tools analyze token patterns  
✅ **Standardization**: Consistent token types  

---

## Limitations

❌ **No Semantic Meaning**: Tokens don't understand context  
❌ **Whitespace Sensitive**: Spacing affects tokenization  
❌ **Comment Handling**: Comments must be filtered  

---

## Edge Cases

🔸 **Identifier vs Keyword:**
```java
int int = 10;  // ❌ Error: 'int' is keyword, can't be identifier
int myInt = 10;  // ✅ OK: 'myInt' is identifier
```

🔸 **Maximal munch:**
```java
int x = 10;
// Tokenized as: [int] [x] [=] [10] [;]
// Not: [i] [n] [t] [x] [=] [1] [0] [;]
// Compiler takes longest valid token
```

🔸 **Operator ambiguity:**
```java
x+++y  // Tokenized as: x ++ + y (not x + ++ y)
// Maximal munch: ++ is longer than +
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Using keywords as identifiers
```java
❌ int class = 10;  // 'class' is keyword
✅ int myClass = 10;
```

🚫 **Mistake 2**: Invalid identifier names
```java
❌ int 123abc = 10;  // Starts with digit
❌ int my-var = 10;  // Hyphen not allowed
✅ int myVar123 = 10;
```

🚫 **Mistake 3**: Confusing literals
```java
❌ char ch = "A";  // String literal, not character
✅ char ch = 'A';  // Character literal

❌ String str = 'Hello';  // Character literal, not string
✅ String str = "Hello";  // String literal
```

---

## Important Interview Points

💡 **Q: What are tokens in Java?**  
**A**: Tokens are smallest meaningful units in Java program recognized by compiler. Five types: (1) Keywords - reserved words (if, while, class), (2) Identifiers - user-defined names (variables, methods, classes), (3) Literals - constant values (10, 3.14, 'A', "Hello", true, null), (4) Operators - symbols for operations (+, -, *, ==, &&), (5) Separators - punctuation (;, {}, (), []). Compiler performs lexical analysis to break source code into tokens.

💡 **Q: How many keywords are there in Java?**  
**A**: Java has 50 keywords (including const and goto which are reserved but not used). Additionally, context-sensitive keywords introduced in later versions: var (Java 10), yield (Java 13), record (Java 14), sealed/permits (Java 15). Keywords are reserved words with predefined meaning, cannot be used as identifiers.

💡 **Q: What is the difference between keyword and identifier?**  
**A**: 
- **Keyword**: Reserved word with predefined meaning (if, while, class), cannot be used as identifier, fixed set (50 keywords)
- **Identifier**: User-defined name for variables/methods/classes, follows naming rules (start with letter/underscore/$), case-sensitive, unlimited possibilities
Example: `int myVar = 10;` - 'int' is keyword, 'myVar' is identifier

💡 **Q: What are the rules for identifiers?**  
**A**: Identifier rules:
1. Start with letter (a-z, A-Z), underscore (_), or dollar sign ($)
2. Subsequent characters can be letters, digits (0-9), underscore, dollar
3. Case-sensitive (myVar ≠ MyVar)
4. Cannot be keywords
5. No length limit
6. Cannot contain spaces or special characters (except _ and $)
Valid: myVar, _temp, $price, userName123
Invalid: 123abc, my-var, int, my var

💡 **Q: What is lexical analysis?**  
**A**: Lexical analysis is first phase of compilation where source code is broken into tokens. Lexical analyzer (scanner) reads character stream, skips whitespace and comments, identifies token types, creates token stream. Process: source code → lexical analyzer → token stream → parser. Lexical errors (invalid characters, malformed literals) caught in this phase.

💡 **Q: What are separators in Java?**  
**A**: Separators are punctuation symbols: ( ) { } [ ] ; , . ... (ellipsis). Uses:
- ( ) - method calls, expressions, casting
- { } - code blocks, arrays, class/method bodies
- [ ] - array declaration, array access
- ; - statement terminator
- , - separate variables, parameters
- . - member access, package separator
- ... - varargs (variable arguments)

💡 **Q: What is maximal munch rule?**  
**A**: Maximal munch (longest match) rule: lexical analyzer always takes longest possible token. Example: `x+++y` tokenized as `x ++ + y` (not `x + ++ y`) because ++ is longer than +. Similarly, `==` is one token (equality operator), not two = tokens. Ensures consistent tokenization.

💡 **Q: Are whitespace and comments tokens?**  
**A**: No, whitespace (spaces, tabs, newlines) and comments (// single-line, /* */ multi-line) are not tokens. They are ignored during tokenization but serve to separate tokens. Example: `int x=10;` and `int x = 10;` produce same tokens, whitespace only separates them.

---

## Short Recap

Tokens Java program ke smallest meaningful units hain: Keywords (reserved words), Identifiers (user-defined names), Literals (constant values), Operators (symbols for operations), Separators (punctuation). Compiler lexical analysis phase mein source code ko tokens mein break karta hai. Identifier rules: start with letter/underscore/$, case-sensitive, cannot be keywords. Maximal munch rule: longest token selected. Whitespace aur comments tokens nahi hain, sirf tokens ko separate karte hain. Interview ke liye yaad rakho: 5 token types, 50 keywords, identifier rules, lexical analysis process, aur maximal munch rule.

---

**Previous**: [← 26 - Program Structure](./26-program-structure.md)  
**Next**: [28 - Keywords →](./28-keywords.md)
