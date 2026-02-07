# TOKENS

## Concept Introduction

Tokens Java program ki smallest building blocks hain — jaise sentence mein words hote hain, waise hi Java program mein tokens hote hain. Jab tum code likhte ho, toh compiler pehle usse chhote-chhote meaningful pieces mein tod deta hai jise tokens kehte hain. Example: `int x = 10;` mein 5 tokens hain: `int` (keyword), `x` (identifier), `=` (operator), `10` (literal), `;` (separator). Tokens ki samajh Java programming ka foundation hai kyunki compiler inhi tokens ko recognize karke bytecode generate karta hai. Interview mein puchte hain "What are tokens in Java?" ya "What are different types of tokens?"

## Why This Concept Exists

### Problem (Without token concept):

Before tokenization concept in compilation, source code processing faced insurmountable analysis challenges. Continuous character stream was meaningless without structure making syntax analysis impossible. No way to identify language elements like keywords, variables, numbers, operators in raw text. Parser could not distinguish between keyword "int" and variable name "int" without tokenization. Whitespace and formatting variations made direct character matching unreliable and inconsistent. Complex expressions like `a+b*c` needed decomposition into meaningful units for precedence analysis. No standard vocabulary for compiler phases to communicate about program structure. Error reporting impossible without identifying which element caused problem. Lexical structure undifferentiated from syntactic structure mixing concerns. Code transformation and optimization required understanding of basic program elements. Programming language design lacked formal foundation for element classification.

- Raw character stream mein meaning identify karna impossible tha
- Keywords, variables, numbers ko distinguish nahi kar sakte the
- Expression parsing aur precedence analysis extremely difficult tha
- Error messages meaningless without element identification
- Compiler phases mein communication impossible tha
- Language design ka koi formal foundation nahi tha

### Solution (Token-based compilation):

Java introduced token-based lexical analysis solving all code processing problems systematically. Lexical Analyzer (Scanner/Lexer) converts character stream to token stream in first compilation phase. Five token categories standardized: Keywords (reserved words like int, class, if), Identifiers (names for variables, methods, classes), Literals (constant values like 42, "Hello", true), Operators (symbols like +, -, *, ==), Separators (delimiters like semicolons, braces, commas). Each token has type and value enabling structured processing. Whitespace and comments removed during tokenization cleaning code for parser. Token boundaries clearly defined by language specification enabling consistent recognition. Parser works with clean token stream instead of messy character stream. Error messages reference specific tokens making debugging easier. Code optimization operates on token/AST level not character level. Formal language theory provides mathematical foundation for token recognition via regular expressions and finite automata.

- Structured token stream instead of raw characters
- Five clear categories: Keywords, Identifiers, Literals, Operators, Separators
- Clean separation: Lexical analysis → Syntax analysis
- Error messages meaningful with token identification
- Formal foundation via regular expressions and automata
- Consistent processing across all compiler phases

---

## Definitions

### Very Simple Definition
Tokens Java program ke smallest meaningful units hain — keywords, variable names, numbers, operators, aur separators jo combined hokar code banate hain.

### College Exam Definition
Tokens are the smallest individual elements of a program that are meaningful to the compiler. Java tokens are classified into five categories: Keywords (reserved words like int, class, if), Identifiers (programmer-defined names), Literals (constant values like 42, "Hello"), Operators (symbols like +, ==, &&), and Separators (punctuation like ;, {}, ()). Tokens are recognized by the lexical analyzer in the first phase of compilation.

### Viva Definition
Tokens are atomic lexical units identified by the compiler's lexical analyzer during the first compilation phase. When source code is processed, the lexer scans the character stream and groups characters into meaningful tokens based on language rules. Java defines five token types: (1) Keywords - 50+ reserved words with predefined meaning (int, class, public, static, void, if, else), (2) Identifiers - programmer-defined names following rules (must start with letter/underscore, can contain letters/digits/underscores, cannot be keywords), (3) Literals - constant values with specific types (integer: 42, floating-point: 3.14, boolean: true/false, character: 'A', string: "Hello", null), (4) Operators - symbols performing operations (arithmetic: +,-,*,/, relational: ==,!=,<,>, logical: &&,||,!, assignment: =,+=), (5) Separators - punctuation delimiting code structure (semicolon ;, braces {}, parentheses (), brackets [], comma ,, dot .). Whitespace (spaces, tabs, newlines) and comments are not tokens - they're discarded during lexical analysis. Token recognition uses pattern matching based on regular expressions defined in Java Language Specification.

### Interview Definition
Tokens are the smallest syntactic units in Java identified through lexical analysis (first compilation phase). The lexer/scanner reads source code character-by-character, grouping them into tokens using pattern matching based on regular expressions. **Five Token Categories**: (1) **Keywords** (53 reserved words in Java): All lowercase, cannot be used as identifiers, examples: abstract, class, extends, implements, interface, package, import, public, private, protected, static, final, void, int, double, boolean, if, else, switch, case, for, while, do, break, continue, return, new, this, super, null, true, false, try, catch, finally, throw, throws. (2) **Identifiers** (names): User-defined names for variables, methods, classes, packages. Rules: Start with letter (a-z, A-Z), underscore (_), or dollar ($). Subsequent characters can be letters, digits (0-9), underscores, dollars. Cannot be keywords. Case-sensitive. Examples: myVariable, _count, $temp, MyClass, calculateSum. (3) **Literals** (constant values): Integer (42, 0xFF hex, 0b1010 binary), Floating-point (3.14, 2.5e10), Boolean (true, false), Character ('A', '\n', '\u0041' unicode), String ("Hello", "World\n"), Null (null). (4) **Operators** (operation symbols): Arithmetic (+,-,*,/,%), Relational (==,!=,<,>,<=,>=), Logical (&&,||,!), Bitwise (&,|,^,~,<<,>>,>>>), Assignment (=,+=,-=,*=), Unary (++,--,+,-,!), Ternary (?:), instanceof. (5) **Separators** (delimiters): Semicolon (;), Comma (,), Dot (.), Parentheses (()), Braces ({}), Brackets ([]), Double colon (::), At sign (@), Ellipsis (...). **Lexical Analysis Process**: Character stream → Pattern matching via regex/DFA → Token stream → Parser. Example: `int x = 10;` tokenizes to [KEYWORD:int] [IDENTIFIER:x] [OPERATOR:=] [LITERAL:10] [SEPARATOR:;]. Whitespace and comments discarded. Error: Illegal character or malformed token causes lexical error before parsing begins.

### Technical Definition
Tokens implement lexical grammar specification defined in JLS (Java Language Specification) Chapter 3, recognized by lexical analyzer using deterministic finite automaton (DFA) constructed from regular expression patterns. **Implementation**: Lexer scans input stream maintaining position pointer, performs maximal munch (longest match) when multiple patterns match choosing longest token, produces token object with type (enum), lexeme (string), position (line, column), attributes (value for literals, name for identifiers). **Token Categories**: (1) **Keywords** - Hardcoded set in lexer, case-sensitive matching, cannot use as identifiers enforced by grammar, includes contextual keywords (module, exports, requires in module-info since Java 9). (2) **Identifiers** - Regex pattern: [a-zA-Z_$][a-zA-Z0-9_$]*, Unicode letters allowed (supports internationalization), symbol table stores identifier information. (3) **Literals** - Integer suffixes (L for long, no suffix for int), floating suffixes (F/f for float, D/d for double), underscore separators allowed since Java 7 (1_000_000), escape sequences in characters/strings (\n, \t, \", \\, \uXXXX unicode), string literals stored in string pool. (4) **Operators** - Multi-character operators recognized as single token (==, !=, <=, >=, &&, ||, ++, --, <<, >>, >>>, etc.), precedence/associativity defined in grammar not lexer, overloaded semantics determined in semantic analysis. (5) **Separators** - Single-character delimiters, paired separators ((), {}, []) matched in parsing phase, semicolon is statement terminator, comma separates list elements, dot for member access/package separator. **Tokenization Algorithm**: Initialize DFA in start state, read character, transition based on character class, accept state produces token, error state reports lexical error, backtrack for longest match if needed. **Optimization**: Tokens stored efficiently with interning (sharing identical strings), position tracking enables error reporting, lookahead for disambiguation (>, >>, >>>), reserved word table for fast keyword recognition. **Output**: Token stream as array/list/iterator consumed by parser for syntax analysis phase.

### One-line Crisp Definition
**Tokens = Smallest Meaningful Units → Keywords + Identifiers + Literals + Operators + Separators**

---

## Complete Token Breakdown

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║         JAVA TOKENS - COMPLETE CLASSIFICATION         ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║                         EXAMPLE JAVA STATEMENT:                                    ║
║                                                                                    ║
║                    public class MyClass {                                          ║
║                        int count = 100;                                            ║
║                    }                                                               ║
║                                                                                    ║
║                         TOKENIZED AS:                                              ║
║                                                                                    ║
║   [KEYWORD: public]  [KEYWORD: class]  [IDENTIFIER: MyClass]  [SEPARATOR: {]      ║
║   [KEYWORD: int]  [IDENTIFIER: count]  [OPERATOR: =]  [LITERAL: 100]              ║
║   [SEPARATOR: ;]  [SEPARATOR: }]                                                   ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓     ║
║   ┃  TOKEN TYPE 1: KEYWORDS (Reserved Words)                                 ┃     ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛     ║
║                                                                                    ║
║   ┌──────────────────────────────────────────────────────────────────┐             ║
║   │  Definition:                                                     │             ║
║   │  Reserved words with predefined meaning in Java language         │             ║
║   │  Cannot be used as identifiers (variable/method/class names)     │             ║
║   │  Always lowercase                                                │             ║
║   │  Total: 53 keywords (50 in use + 3 reserved unused)              │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  ACCESS MODIFIERS (4):                                      ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  public      protected      private      default*          ║ │             ║
║   │  ║  (*default not a keyword, absence of modifier)             ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  CLASS/INTERFACE/OBJECT RELATED (6):                        ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  class       interface      extends      implements        ║ │             ║
║   │  ║  new         this            super                          ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  MODIFIERS (7):                                             ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  static      final         abstract      synchronized      ║ │             ║
║   │  ║  volatile    transient     native                           ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  DATA TYPES - PRIMITIVE (8):                                ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  byte        short          int          long               ║ │             ║
║   │  ║  float       double         char         boolean            ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  CONTROL FLOW (12):                                         ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  if          else           switch       case               ║ │             ║
║   │  ║  default     for            while        do                 ║ │             ║
║   │  ║  break       continue       return       goto*              ║ │             ║
║   │  ║  (*goto reserved but not used)                              ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  EXCEPTION HANDLING (6):                                    ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  try         catch          finally                         ║ │             ║
║   │  ║  throw       throws         assert                          ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  PACKAGE/IMPORT (2):                                        ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  package     import                                         ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  OTHER KEYWORDS (8):                                        ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  void        instanceof     enum         const*             ║ │             ║
║   │  ║  strictfp    var (Java 10)  sealed (17)  permits (17)      ║ │             ║
║   │  ║  (*const reserved but not used)                             ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  LITERAL KEYWORDS (3):                                      ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  true        false          null                            ║ │             ║
║   │  ║  (Technically literals, but also reserved words)            ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  Important Notes:                                                │             ║
║   │  • All keywords are case-sensitive (lowercase only)              │             ║
║   │  • Cannot use keywords as identifiers                            │             ║
║   │  • goto and const reserved but unused in Java                    │             ║
║   │  • true, false, null are literals but also reserved              │             ║
║   │                                                                  │             ║
║   │  Examples of Invalid Usage:                                      │             ║
║   │  ✗ int class = 10;      // 'class' is keyword                   │             ║
║   │  ✗ String public = "x"; // 'public' is keyword                  │             ║
║   │  ✗ boolean true = false;// 'true' is reserved                   │             ║
║   └──────────────────────────────────────────────────────────────────┘             ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓     ║
║   ┃  TOKEN TYPE 2: IDENTIFIERS (User-Defined Names)                          ┃     ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛     ║
║                                                                                    ║
║   ┌──────────────────────────────────────────────────────────────────┐             ║
║   │  Definition:                                                     │             ║
║   │  Names given by programmer to variables, methods, classes, etc   │             ║
║   │  Must follow specific rules for validity                         │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  RULES FOR IDENTIFIERS:                                     ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  1. Must start with:                                        ║ │             ║
║   │  ║     • Letter (a-z, A-Z)                                     ║ │             ║
║   │  ║     • Underscore (_)                                        ║ │             ║
║   │  ║     • Dollar sign ($)                                       ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  2. Subsequent characters can be:                           ║ │             ║
║   │  ║     • Letters (a-z, A-Z)                                    ║ │             ║
║   │  ║     • Digits (0-9)                                          ║ │             ║
║   │  ║     • Underscores (_)                                       ║ │             ║
║   │  ║     • Dollar signs ($)                                      ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  3. Cannot be a keyword                                     ║ │             ║
║   │  ║  4. Case-sensitive (myVar ≠ MyVar ≠ MYVAR)                  ║ │             ║
║   │  ║  5. No length limit (but keep reasonable)                   ║ │             ║
║   │  ║  6. Can contain Unicode characters                          ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  VALID IDENTIFIERS:                                         ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  ✓ myVariable      (starts with letter)                     ║ │             ║
║   │  ║  ✓ _count          (starts with underscore)                 ║ │             ║
║   │  ║  ✓ $temp           (starts with dollar)                     ║ │             ║
║   │  ║  ✓ my_variable     (contains underscore)                    ║ │             ║
║   │  ║  ✓ value2          (contains digit)                         ║ │             ║
║   │  ║  ✓ MyClass         (PascalCase for classes)                 ║ │             ║
║   │  ║  ✓ calculateSum    (camelCase for methods)                  ║ │             ║
║   │  ║  ✓ MAX_SIZE        (UPPER_SNAKE_CASE for constants)         ║ │             ║
║   │  ║  ✓ _             (single underscore valid but discouraged)  ║ │             ║
║   │  ║  ✓ $_$            (valid but terrible naming)                ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  INVALID IDENTIFIERS:                                       ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  ✗ 2value          (starts with digit)                      ║ │             ║
║   │  ║  ✗ my-variable     (contains hyphen)                        ║ │             ║
║   │  ║  ✗ my variable     (contains space)                         ║ │             ║
║   │  ║  ✗ int             (keyword)                                ║ │             ║
║   │  ║  ✗ class           (keyword)                                ║ │             ║
║   │  ║  ✗ my@variable     (@ not allowed except annotations)       ║ │             ║
║   │  ║  ✗ #value          (# not allowed)                          ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  NAMING CONVENTIONS (Not Rules, but Best Practice):         ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  • Classes/Interfaces:   PascalCase (MyClass, UserService)  ║ │             ║
║   │  ║  • Methods/Variables:    camelCase (getName, totalCount)    ║ │             ║
║   │  ║  • Constants:            UPPER_SNAKE_CASE (MAX_SIZE, PI)    ║ │             ║
║   │  ║  • Packages:             lowercase (com.company.project)    ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  Usage Examples:                                                 │             ║
║   │  • Variables:     int age; String name; double salary;          │             ║
║   │  • Methods:       void calculateSum() { }                       │             ║
║   │  • Classes:       class MyClass { }                             │             ║
║   │  • Interfaces:    interface Drawable { }                        │             ║
║   │  • Packages:      package com.myapp.utils;                      │             ║
║   └──────────────────────────────────────────────────────────────────┘             ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓     ║
║   ┃  TOKEN TYPE 3: LITERALS (Constant Values)                                ┃     ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛     ║
║                                                                                    ║
║   ┌──────────────────────────────────────────────────────────────────┐             ║
║   │  Definition:                                                     │             ║
║   │  Fixed constant values written directly in code                  │             ║
║   │  Represent data that doesn't change during execution             │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  1. INTEGER LITERALS:                                       ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  Decimal:      42, 100, -50, 0                              ║ │             ║
║   │  ║  Hexadecimal:  0x1A, 0xFF, 0x10 (prefix 0x or 0X)           ║ │             ║
║   │  ║  Octal:        077, 010, 0123 (prefix 0)                    ║ │             ║
║   │  ║  Binary:       0b1010, 0b1111, 0B0001 (prefix 0b or 0B)     ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Type Suffixes:                                             ║ │             ║
║   │  ║  • No suffix:  int (default)         42                     ║ │             ║
║   │  ║  • L or l:     long                  42L, 100L              ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Underscore Separators (Java 7+):                           ║ │             ║
║   │  ║  • 1_000_000   (one million, for readability)               ║ │             ║
║   │  ║  • 0xFF_EC_DE  (hex with separators)                        ║ │             ║
║   │  ║  • 0b1010_1010 (binary with separators)                     ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  2. FLOATING-POINT LITERALS:                                ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  Decimal Form:    3.14, 0.5, 123.456                        ║ │             ║
║   │  ║  Scientific:      1.5e10, 2.5E-3, 6.022e23                  ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Type Suffixes:                                             ║ │             ║
║   │  ║  • F or f:  float      3.14f, 2.5F                          ║ │             ║
║   │  ║  • D or d:  double     3.14d, 2.5D                          ║ │             ║
║   │  ║  • No suffix: double (default)  3.14                        ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Special Values:                                            ║ │             ║
║   │  ║  • Double.POSITIVE_INFINITY                                 ║ │             ║
║   │  ║  • Double.NEGATIVE_INFINITY                                 ║ │             ║
║   │  ║  • Double.NaN (Not a Number)                                ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  3. BOOLEAN LITERALS:                                       ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  • true     (boolean true value)                            ║ │             ║
║   │  ║  • false    (boolean false value)                           ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Note: Lowercase only (True, TRUE, False, FALSE invalid)    ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  4. CHARACTER LITERALS:                                     ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  Single quotes:    'A', 'z', '5', '@'                       ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Escape Sequences:                                          ║ │             ║
║   │  ║  • '\n'    (newline)                                        ║ │             ║
║   │  ║  • '\t'    (tab)                                            ║ │             ║
║   │  ║  • '\r'    (carriage return)                                ║ │             ║
║   │  ║  • '\b'    (backspace)                                      ║ │             ║
║   │  ║  • '\f'    (form feed)                                      ║ │             ║
║   │  ║  • '\''    (single quote)                                   ║ │             ║
║   │  ║  • '\"'    (double quote)                                   ║ │             ║
║   │  ║  • '\\'    (backslash)                                      ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Unicode:   '\u0041' (represents 'A')                       ║ │             ║
║   │  ║             '\u0048' (represents 'H')                       ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  5. STRING LITERALS:                                        ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  Double quotes:   "Hello", "World", "123"                   ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Escape Sequences: Same as character literals               ║ │             ║
║   │  ║  • "Hello\nWorld"  (with newline)                           ║ │             ║
║   │  ║  • "Tab\tSeparated"                                         ║ │             ║
║   │  ║  • "Say \"Hello\""  (with quotes)                           ║ │             ║
║   │  ║  • "C:\\Users\\path" (with backslash)                       ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  Text Blocks (Java 13+):                                    ║ │             ║
║   │  ║  """                                                        ║ │             ║
║   │  ║  Multi-line                                                 ║ │             ║
║   │  ║  String text                                                ║ │             ║
║   │  ║  """                                                        ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  6. NULL LITERAL:                                           ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  • null    (represents no object reference)                 ║ │             ║
║   │  ║            (lowercase only)                                 ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  Examples:                                                       │             ║
║   │  int age = 25;              // Integer literal                  │             ║
║   │  double pi = 3.14159;       // Floating-point literal           │             ║
║   │  boolean flag = true;       // Boolean literal                  │             ║
║   │  char grade = 'A';          // Character literal                │             ║
║   │  String name = "John";      // String literal                   │             ║
║   │  Object obj = null;         // Null literal                     │             ║
║   └──────────────────────────────────────────────────────────────────┘             ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓     ║
║   ┃  TOKEN TYPE 4: OPERATORS (Operation Symbols)                             ┃     ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛     ║
║                                                                                    ║
║   ┌──────────────────────────────────────────────────────────────────┐             ║
║   │  Definition:                                                     │             ║
║   │  Special symbols that perform operations on operands             │             ║
║   │  Can be unary (one operand), binary (two), or ternary (three)    │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  1. ARITHMETIC OPERATORS:                                   ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  +    Addition           (a + b)                            ║ │             ║
║   │  ║  -    Subtraction        (a - b)                            ║ │             ║
║   │  ║  *    Multiplication     (a * b)                            ║ │             ║
║   │  ║  /    Division           (a / b)                            ║ │             ║
║   │  ║  %    Modulus/Remainder  (a % b)                            ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  2. RELATIONAL OPERATORS (Comparison):                      ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  ==   Equal to                (a == b)                      ║ │             ║
║   │  ║  !=   Not equal to            (a != b)                      ║ │             ║
║   │  ║  >    Greater than            (a > b)                       ║ │             ║
║   │  ║  <    Less than               (a < b)                       ║ │             ║
║   │  ║  >=   Greater than or equal   (a >= b)                      ║ │             ║
║   │  ║  <=   Less than or equal      (a <= b)                      ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  3. LOGICAL OPERATORS:                                      ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  &&   Logical AND    (a && b)  (short-circuit)              ║ │             ║
║   │  ║  ||   Logical OR     (a || b)  (short-circuit)              ║ │             ║
║   │  ║  !    Logical NOT    (!a)                                   ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  4. BITWISE OPERATORS:                                      ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  &    Bitwise AND        (a & b)                            ║ │             ║
║   │  ║  |    Bitwise OR         (a | b)                            ║ │             ║
║   │  ║  ^    Bitwise XOR        (a ^ b)                            ║ │             ║
║   │  ║  ~    Bitwise Complement (~a)                               ║ │             ║
║   │  ║  <<   Left shift         (a << 2)                           ║ │             ║
║   │  ║  >>   Right shift        (a >> 2)  (sign extension)         ║ │             ║
║   │  ║  >>>  Unsigned right     (a >>> 2) (zero fill)              ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  5. ASSIGNMENT OPERATORS:                                   ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  =     Simple assignment      (a = 10)                      ║ │             ║
║   │  ║  +=    Add and assign         (a += 5)   // a = a + 5       ║ │             ║
║   │  ║  -=    Subtract and assign    (a -= 5)   // a = a - 5       ║ │             ║
║   │  ║  *=    Multiply and assign    (a *= 5)   // a = a * 5       ║ │             ║
║   │  ║  /=    Divide and assign      (a /= 5)   // a = a / 5       ║ │             ║
║   │  ║  %=    Modulus and assign     (a %= 5)   // a = a % 5       ║ │             ║
║   │  ║  &=    Bitwise AND assign     (a &= b)                      ║ │             ║
║   │  ║  |=    Bitwise OR assign      (a |= b)                      ║ │             ║
║   │  ║  ^=    Bitwise XOR assign     (a ^= b)                      ║ │             ║
║   │  ║  <<=   Left shift assign      (a <<= 2)                     ║ │             ║
║   │  ║  >>=   Right shift assign     (a >>= 2)                     ║ │             ║
║   │  ║  >>>=  Unsigned right assign  (a >>>= 2)                    ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  6. UNARY OPERATORS:                                        ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  ++   Increment   (++a or a++)  // a = a + 1                ║ │             ║
║   │  ║  --   Decrement   (--a or a--)  // a = a - 1                ║ │             ║
║   │  ║  +    Unary plus  (+a)          // positive                 ║ │             ║
║   │  ║  -    Unary minus (-a)          // negative                 ║ │             ║
║   │  ║  !    Logical NOT (!flag)       // boolean negation         ║ │             ║
║   │  ║  ~    Bitwise NOT (~a)          // bitwise complement       ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  7. TERNARY OPERATOR:                                       ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  ?:   Conditional operator                                  ║ │             ║
║   │  ║       condition ? value1 : value2                           ║ │             ║
║   │  ║       Example: int max = (a > b) ? a : b;                   ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  8. OTHER OPERATORS:                                        ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  instanceof   Type checking    (obj instanceof String)      ║ │             ║
║   │  ║  new          Object creation  (new MyClass())              ║ │             ║
║   │  ║  .            Member access    (obj.method())               ║ │             ║
║   │  ║  []           Array access     (arr[0])                     ║ │             ║
║   │  ║  ()           Method call      (method(args))               ║ │             ║
║   │  ║  (type)       Type casting     ((int) 3.14)                 ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   └──────────────────────────────────────────────────────────────────┘             ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓     ║
║   ┃  TOKEN TYPE 5: SEPARATORS (Delimiters/Punctuation)                       ┃     ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛     ║
║                                                                                    ║
║   ┌──────────────────────────────────────────────────────────────────┐             ║
║   │  Definition:                                                     │             ║
║   │  Punctuation symbols that separate and structure code            │             ║
║   │  Define boundaries and organization                              │             ║
║   │                                                                  │             ║
║   │  ╔═════════════════════════════════════════════════════════════╗ │             ║
║   │  ║  LIST OF SEPARATORS:                                        ║ │             ║
║   │  ╠═════════════════════════════════════════════════════════════╣ │             ║
║   │  ║  ;    Semicolon       Statement terminator                  ║ │             ║
║   │  ║       Example: int x = 10;                                  ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  ,    Comma           Separator in lists                    ║ │             ║
║   │  ║       Example: int a, b, c;                                 ║ │             ║
║   │  ║                method(arg1, arg2, arg3);                    ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  .    Dot/Period      Package/member access                 ║ │             ║
║   │  ║       Example: System.out.println();                        ║ │             ║
║   │  ║                obj.method();                                ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  ()   Parentheses     Method definition/call, expressions   ║ │             ║
║   │  ║       Example: public void method(int x) { }                ║ │             ║
║   │  ║                result = (a + b) * c;                        ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  {}   Braces/Curly    Code blocks (class, method, control)  ║ │             ║
║   │  ║       Example: class MyClass { }                            ║ │             ║
║   │  ║                if (condition) { }                           ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  []   Brackets        Array declaration/access              ║ │             ║
║   │  ║       Example: int[] arr = new int[10];                     ║ │             ║
║   │  ║                value = arr[0];                              ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  ::   Double colon    Method reference (Java 8+)            ║ │             ║
║   │  ║       Example: List::add                                    ║ │             ║
║   │  ║                ClassName::methodName                        ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  ...  Ellipsis        Varargs (variable arguments)          ║ │             ║
║   │  ║       Example: void method(String... args) { }              ║ │             ║
║   │  ║                                                             ║ │             ║
║   │  ║  @    At sign         Annotations                           ║ │             ║
║   │  ║       Example: @Override                                    ║ │             ║
║   │  ║                @SuppressWarnings("unchecked")               ║ │             ║
║   │  ╚═════════════════════════════════════════════════════════════╝ │             ║
║   │                                                                  │             ║
║   │  Usage Examples:                                                 │             ║
║   │  ┌────────────────────────────────────────────────────────┐     │             ║
║   │  │ public class MyClass {                  // {} for class│     │             ║
║   │  │     int x, y, z;                        // , separator │     │             ║
║   │  │                                         // ; terminator│     │             ║
║   │  │     public void method(int a, int b) {  // () for params    │             ║
║   │  │         int[] arr = {1, 2, 3};          // [] for array│     │             ║
║   │  │         System.out.println("Hi");       // . for access│     │             ║
║   │  │     }                                                  │     │             ║
║   │  │ }                                                      │     │             ║
║   │  └────────────────────────────────────────────────────────┘     │             ║
║   └──────────────────────────────────────────────────────────────────┘             ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Tokenization Process

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║      HOW LEXICAL ANALYSIS WORKS                       ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   SOURCE CODE:                                                                     ║
║   ┌──────────────────────────────────────────────────────────────────┐             ║
║   │  public class MyClass {                                          │             ║
║   │      int count = 100;                                            │             ║
║   │  }                                                               │             ║
║   └──────────────────────────────────────────────────────────────────┘             ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓     ║
║   ┃  STEP 1: CHARACTER STREAM                                                ┃     ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛     ║
║                                                                                    ║
║   p|u|b|l|i|c| |c|l|a|s|s| |M|y|C|l|a|s|s| |{|\n| | | | |i|n|t| |c|o|u|n|t|...    ║
║                                                                                    ║
║   Lexer reads source code character by character                                   ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓     ║
║   ┃  STEP 2: PATTERN MATCHING                                                ┃     ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛     ║
║                                                                                    ║
║   Lexer groups characters into tokens using patterns:                              ║
║                                                                                    ║
║   "public"  → Match keyword pattern     → KEYWORD token                            ║
║   " "       → Whitespace               → Skip (not a token)                        ║
║   "class"   → Match keyword pattern     → KEYWORD token                            ║
║   " "       → Whitespace               → Skip                                      ║
║   "MyClass" → Match identifier pattern  → IDENTIFIER token                         ║
║   " "       → Whitespace               → Skip                                      ║
║   "{"       → Match separator pattern   → SEPARATOR token                          ║
║   "\n    "  → Whitespace               → Skip                                      ║
║   "int"     → Match keyword pattern     → KEYWORD token                            ║
║   " "       → Whitespace               → Skip                                      ║
║   "count"   → Match identifier pattern  → IDENTIFIER token                         ║
║   " "       → Whitespace               → Skip                                      ║
║   "="       → Match operator pattern    → OPERATOR token                           ║
║   " "       → Whitespace               → Skip                                      ║
║   "100"     → Match literal pattern     → LITERAL token                            ║
║   ";"       → Match separator pattern   → SEPARATOR token                          ║
║   "\n"      → Whitespace               → Skip                                      ║
║   "}"       → Match separator pattern   → SEPARATOR token                          ║
║                                                                                    ║
║                              ↓                                                     ║
║                                                                                    ║
║   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓     ║
║   ┃  STEP 3: TOKEN STREAM (Output)                                           ┃     ║
║   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛     ║
║                                                                                    ║
║   Token List Generated:                                                            ║
║   ┌──────────────────────────────────────────────────────────────────┐             ║
║   │  [0]  KEYWORD     "public"     (line 1, col 1)                   │             ║
║   │  [1]  KEYWORD     "class"      (line 1, col 8)                   │             ║
║   │  [2]  IDENTIFIER  "MyClass"    (line 1, col 14)                  │             ║
║   │  [3]  SEPARATOR   "{"          (line 1, col 22)                  │             ║
║   │  [4]  KEYWORD     "int"        (line 2, col 5)                   │             ║
║   │  [5]  IDENTIFIER  "count"      (line 2, col 9)                   │             ║
║   │  [6]  OPERATOR    "="          (line 2, col 15)                  │             ║
║   │  [7]  LITERAL     "100"        (line 2, col 17)                  │             ║
║   │  [8]  SEPARATOR   ";"          (line 2, col 20)                  │             ║
║   │  [9]  SEPARATOR   "}"          (line 3, col 1)                   │             ║
║   └──────────────────────────────────────────────────────────────────┘             ║
║                                                                                    ║
║   This token stream is passed to the parser for syntax analysis                    ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Code Examples

### Example 1: Identifying Tokens in Code

```java
// SOURCE CODE:
public class TokenDemo {
    int x = 10;
}

// TOKENIZATION:
// [KEYWORD: public]
// [KEYWORD: class]
// [IDENTIFIER: TokenDemo]
// [SEPARATOR: {]
// [KEYWORD: int]
// [IDENTIFIER: x]
// [OPERATOR: =]
// [LITERAL: 10]
// [SEPARATOR: ;]
// [SEPARATOR: }]
```

### Example 2: Complex Expression Tokenization

```java
int result = (a + b) * c - d / 2;

// TOKENS:
// [KEYWORD: int]
// [IDENTIFIER: result]
// [OPERATOR: =]
// [SEPARATOR: (]
// [IDENTIFIER: a]
// [OPERATOR: +]
// [IDENTIFIER: b]
// [SEPARATOR: )]
// [OPERATOR: *]
// [IDENTIFIER: c]
// [OPERATOR: -]
// [IDENTIFIER: d]
// [OPERATOR: /]
// [LITERAL: 2]
// [SEPARATOR: ;]
```

### Example 3: All Token Types in One Program

```java
package com.example;        // package, com, ., example, ;

import java.util.ArrayList; // import, java, ., util, ., ArrayList, ;

public class AllTokens {    // public, class, AllTokens, {
    
    // Constants (Keywords + Identifiers + Literals + Operators + Separators)
    public static final int MAX = 100;
    // public, static, final, int, MAX, =, 100, ;
    
    private String name;     // private, String, name, ;
    
    public AllTokens(String name) {  // public, AllTokens, (, String, name, ), {
        this.name = name;            // this, ., name, =, name, ;
    }                                // }
    
    public void display() {          // public, void, display, (, ), {
        if (name != null) {          // if, (, name, !=, null, ), {
            System.out.println(name);// System, ., out, ., println, (, name, ), ;
        }                            // }
    }                                // }
}                                    // }

// TOKEN CATEGORIES USED:
// 1. Keywords: package, import, public, class, static, final, int, private, 
//              String, void, if, null
// 2. Identifiers: com, example, java, util, ArrayList, AllTokens, MAX, name,
//                 this, display, System, out, println
// 3. Literals: 100, null (literal keyword)
// 4. Operators: =, !=
// 5. Separators: ;, ., (, ), {, }
```

### Example 4: Literal Examples

```java
public class LiteralDemo {
    // Integer literals
    int decimal = 42;
    int hex = 0x2A;
    int octal = 052;
    int binary = 0b101010;
    long bigNum = 1_000_000L;
    
    // Floating-point literals
    double d1 = 3.14;
    double d2 = 2.5e10;
    float f = 3.14f;
    
    // Boolean literals
    boolean flag1 = true;
    boolean flag2 = false;
    
    // Character literals
    char ch1 = 'A';
    char ch2 = '\n';
    char ch3 = '\u0041';
    
    // String literals
    String str1 = "Hello";
    String str2 = "World\n";
    String str3 = "Say \"Hi\"";
    
    // Null literal
    String str4 = null;
}
```

### Example 5: Operator Examples

```java
public class OperatorDemo {
    public void demonstrateOperators() {
        int a = 10, b = 20;
        
        // Arithmetic
        int sum = a + b;
        int diff = a - b;
        int prod = a * b;
        int quot = a / b;
        int rem = a % b;
        
        // Relational
        boolean eq = (a == b);
        boolean neq = (a != b);
        boolean gt = (a > b);
        boolean lt = (a < b);
        
        // Logical
        boolean and = (a > 5 && b < 30);
        boolean or = (a < 5 || b > 15);
        boolean not = !(a == b);
        
        // Bitwise
        int bitwiseAnd = a & b;
        int bitwiseOr = a | b;
        int bitwiseXor = a ^ b;
        int leftShift = a << 2;
        int rightShift = a >> 2;
        
        // Assignment
        int x = 10;
        x += 5;  // x = x + 5
        x -= 3;  // x = x - 3
        x *= 2;  // x = x * 2
        
        // Unary
        int y = 5;
        y++;     // increment
        ++y;     // pre-increment
        y--;     // decrement
        --y;     // pre-decrement
        
        // Ternary
        int max = (a > b) ? a : b;
        
        // instanceof
        String str = "Hello";
        boolean isString = str instanceof String;
    }
}
```

### Example 6: Separator Examples

```java
public class SeparatorDemo {
    // Semicolons separate statements
    int x = 10;
    int y = 20;
    int z = 30;
    
    // Commas separate variables
    int a, b, c;
    
    // Braces define blocks
    public void method() {
        if (x > 5) {
            System.out.println("Greater");
        } else {
            System.out.println("Smaller");
        }
    }
    
    // Parentheses for parameters and expressions
    public int add(int num1, int num2) {
        return (num1 + num2);
    }
    
    // Brackets for arrays
    int[] arr = new int[10];
    arr[0] = 100;
    
    // Dot for member access
    System.out.println("Hello");
    String str = new String("World");
    int len = str.length();
    
    // Double colon for method reference (Java 8+)
    // Arrays.sort(arr, Integer::compare);
    
    // Ellipsis for varargs
    public void print(String... messages) {
        for (String msg : messages) {
            System.out.println(msg);
        }
    }
    
    // @ for annotations
    @Override
    public String toString() {
        return "SeparatorDemo";
    }
}
```

---

## Interview Questions

### Q1: What are tokens in Java? Explain with examples.

**Answer:** Tokens are the smallest individual elements of a Java program that are meaningful to the compiler. They are identified during the lexical analysis phase (first compilation phase) when the lexer/scanner reads source code character-by-character and groups them into meaningful units. Java has five categories of tokens: (1) **Keywords** - Reserved words with predefined meaning like int, class, public, static, if, else (53 total), cannot be used as identifiers, always lowercase. (2) **Identifiers** - Programmer-defined names for variables, methods, classes like myVariable, calculateSum, MyClass, must start with letter/underscore/dollar, can contain letters/digits/underscores. (3) **Literals** - Constant values like 42 (integer), 3.14 (float), true/false (boolean), 'A' (character), "Hello" (string), null. (4) **Operators** - Symbols performing operations like + (addition), == (equality), && (logical AND), = (assignment), ++ (increment). (5) **Separators** - Punctuation delimiting code structure like ; (semicolon), , (comma), . (dot), () parentheses, {} braces, [] brackets. **Example**: `int x = 10;` contains 5 tokens: [KEYWORD:int], [IDENTIFIER:x], [OPERATOR:=], [LITERAL:10], [SEPARATOR:;]. Whitespace and comments are not tokens - they're discarded during tokenization. Understanding tokens is fundamental because compiler phases work with token streams, not character streams.

### Q2: What is the difference between keywords and identifiers?

**Answer:** Keywords and identifiers are both token types but serve opposite purposes: **Keywords** - Reserved words with predefined meaning in Java language, defined by language specification (53 total), always lowercase (int, class, public, static), cannot be used as variable/method/class names, recognized by compiler with special handling, examples: if, else, for, while, void, return. **Identifiers** - User-defined names created by programmers, no predefined meaning (programmer assigns meaning), follow naming rules (start with letter/underscore/dollar, can contain letters/digits/underscores), can be any valid name except keywords, case-sensitive (myVar ≠ MyVar), examples: myVariable, calculateSum, StudentRecord, MAX_SIZE. **Key Difference**: Keywords are fixed vocabulary of the language (cannot create new keywords), identifiers are unlimited vocabulary created by programmers. **Conflict**: Cannot use keyword as identifier - `int class = 10;` causes error because class is keyword. **Valid Identifiers**: myClass, _count, $temp, value2, calculateTotal. **Invalid Identifiers**: class (keyword), 2value (starts with digit), my-var (contains hyphen). The lexer distinguishes them by checking against keyword table: if token matches keyword list, it's keyword; otherwise if it follows identifier rules, it's identifier.

### Q3: Explain different types of literals with examples.

**Answer:** Literals are fixed constant values written directly in code representing data that doesn't change. Java has six literal types: (1) **Integer Literals** - Whole number values with formats: Decimal (42, 100), Hexadecimal (0x1A, 0xFF with 0x prefix), Octal (077, 052 with 0 prefix), Binary (0b1010, 0b1111 with 0b prefix), suffix L for long (100L), underscore separators for readability (1_000_000). (2) **Floating-Point Literals** - Decimal numbers: 3.14, 0.5, scientific notation (1.5e10, 2.5E-3), suffix F/f for float (3.14f), suffix D/d for double (3.14d, default without suffix). (3) **Boolean Literals** - true and false (lowercase only, True/TRUE invalid). (4) **Character Literals** - Single character in single quotes ('A', 'z', '5'), escape sequences ('\n' newline, '\t' tab, '\'' single quote, '\\' backslash), Unicode ('\u0041' represents 'A'). (5) **String Literals** - Sequence of characters in double quotes ("Hello", "World"), escape sequences same as character ("\n", "\t", "\"", "\\"), text blocks for multi-line (Java 13+: """multi\nline\ntext"""). (6) **Null Literal** - null representing no object reference (lowercase only). **Examples**:
```java
int age = 25;              // Integer literal
double pi = 3.14159;       // Floating-point literal
boolean flag = true;       // Boolean literal
char grade = 'A';          // Character literal
String name = "John";      // String literal
Object obj = null;         // Null literal
```
All literals are hardcoded values - they don't change during program execution.

### Q4: What are operators in Java and what are different types?

**Answer:** Operators are special symbols that perform operations on operands (variables/values). Java has multiple operator categories based on functionality: (1) **Arithmetic** - Mathematical operations: + (add), - (subtract), * (multiply), / (divide), % (modulus/remainder). (2) **Relational/Comparison** - Compare values returning boolean: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal). (3) **Logical** - Boolean operations: && (AND, short-circuit), || (OR, short-circuit), ! (NOT). (4) **Bitwise** - Bit-level operations: & (AND), | (OR), ^ (XOR), ~ (complement), << (left shift), >> (right shift), >>> (unsigned right shift). (5) **Assignment** - Assign values: = (simple), +=, -=, *=, /=, %= (compound assignments like x += 5 means x = x + 5). (6) **Unary** - Single operand: ++ (increment), -- (decrement), + (unary plus), - (unary minus), ! (logical NOT). (7) **Ternary** - Conditional operator with three operands: condition ? value1 : value2 (example: max = (a > b) ? a : b). (8) **Other** - instanceof (type checking), new (object creation), . (member access), [] (array access), () (method call), (type) (casting). **Example**:
```java
int a = 10, b = 20;
int sum = a + b;           // Arithmetic
boolean result = a > b;    // Relational
boolean flag = a > 5 && b < 30;  // Logical
a += 5;                    // Assignment (a = a + 5)
int c = ++a;               // Unary (pre-increment)
int max = (a > b) ? a : b; // Ternary
```
Operators have precedence and associativity rules determining evaluation order in complex expressions.

### Q5: What are separators and what is their role?

**Answer:** Separators (also called delimiters or punctuators) are special symbols that separate and structure code, defining boundaries and organization. They don't perform operations but provide syntactic structure. Java separators include: (1) **Semicolon (;)** - Statement terminator, ends each statement: `int x = 10;`. (2) **Comma (,)** - Separates elements in lists: variable declarations `int a, b, c;`, method parameters `method(arg1, arg2)`, array initializers `{1, 2, 3}`. (3) **Dot (.)** - Member access separator: package names `java.util.ArrayList`, method calls `obj.method()`, field access `obj.field`. (4) **Parentheses ()** - Method signatures `public void method(int x)`, method calls `method(args)`, expression grouping `(a + b) * c`, type casting `(int) value`. (5) **Braces {}** - Code blocks: class body `class MyClass { }`, method body `void method() { }`, control structures `if (x) { }`, array initialization `{1, 2, 3}`. (6) **Brackets []** - Array declaration `int[] arr`, array access `arr[0]`, multi-dimensional arrays `int[][]`. (7) **Double Colon ::** - Method references (Java 8+): `ClassName::methodName`, `List::add`. (8) **Ellipsis ...** - Varargs in parameters: `void method(String... args)`. (9) **At Sign @** - Annotations: `@Override`, `@SuppressWarnings`. **Example**:
```java
public class Demo {              // {} for class
    int x, y, z;                 // , separator, ; terminator
    
    public void method(int a) {  // () for parameters, {} for body
        int[] arr = {1, 2, 3};   // [] for array, {} for init
        System.out.println(x);   // . for member access
    }
}
```
Separators are essential for compiler to parse code structure correctly. Missing semicolon or mismatched braces cause compilation errors.

### Q6: How does the compiler identify tokens from source code?

**Answer:** Token identification happens during **Lexical Analysis** (first compilation phase) performed by Lexer/Scanner component. The process: (1) **Character Stream Input** - Lexer reads source file character-by-character from left to right maintaining position pointer. (2) **Pattern Matching** - Uses regular expressions or finite automata (DFA - Deterministic Finite Automaton) to recognize patterns: Keywords match reserved word list (hardcoded set), Identifiers match [a-zA-Z_$][a-zA-Z0-9_$]* pattern, Integer literals match [0-9]+ pattern, Operators match symbol patterns (+, -, *, ==, !=, etc.). (3) **Maximal Munch** - When multiple patterns could match, lexer chooses longest match: "int" matched as keyword (not identifier), ">>" matched as right-shift operator (not two > tokens). (4) **Whitespace Handling** - Spaces, tabs, newlines discarded (not tokens), only serve to separate tokens: `intx=10;` lexer error (no separation), `int x = 10;` correct tokenization. (5) **Token Object Creation** - For each recognized token, creates token object with: Type (keyword/identifier/literal/operator/separator), Lexeme (actual text: "int", "myVar", "42"), Position (line and column number for error reporting), Attributes (value for literals, name for identifiers). (6) **Output** - Produces token stream (sequence/array/list of tokens) passed to parser for syntax analysis. **Example Process**:
```
Source: "int x = 10;"
Character stream: i|n|t| |x| |=| |1|0|;
Lexer processing:
- Read 'i', 'n', 't' → matches keyword pattern → Token(KEYWORD, "int")
- Read ' ' → whitespace → skip
- Read 'x' → matches identifier pattern → Token(IDENTIFIER, "x")
- Read ' ' → whitespace → skip
- Read '=' → matches operator pattern → Token(OPERATOR, "=")
- Read ' ' → whitespace → skip
- Read '1', '0' → matches number pattern → Token(LITERAL, "10")
- Read ';' → matches separator pattern → Token(SEPARATOR, ";")
Output: [KEYWORD:int, IDENTIFIER:x, OPERATOR:=, LITERAL:10, SEPARATOR:;]
```
This token stream feeds into syntax analysis where parser checks grammatical structure.

### Q7: Why are whitespace and comments not considered tokens?

**Answer:** Whitespace (spaces, tabs, newlines) and comments are not tokens because they don't contribute to program meaning or execution - they serve only human readability purposes. **Whitespace Role** - Separates tokens to prevent ambiguity: `intx` is identifier, `int x` is keyword + identifier, provides visual formatting for humans (indentation, line breaks), Java is free-format language (whitespace amount doesn't matter): `int x=10;` and `int    x   =   10   ;` are identical to compiler. **Comments Role** - Documentation and explanation for humans: `// single-line comment`, `/* multi-line comment */`, `/** Javadoc comment */`, completely ignored by compiler (removed during lexical analysis). **Why Not Tokens** - (1) **No Semantic Value** - Don't affect program logic or behavior, removing them doesn't change program meaning or execution. (2) **Not Part of Language Grammar** - Parser grammar rules don't reference whitespace/comments, only token types matter for syntax rules. (3) **Simplifies Parsing** - Parser works with clean token stream without worrying about formatting, makes grammar rules cleaner and simpler. (4) **Compilation Efficiency** - Discarding early (lexical phase) reduces data parser must process, smaller token stream = faster compilation. **Example**:
```java
// These are identical to compiler:
int x=10;
int x = 10;
int    x    =    10    ;
int 
    x 
    = 
    10
    ;
```
All produce same token stream: [KEYWORD:int, IDENTIFIER:x, OPERATOR:=, LITERAL:10, SEPARATOR:;]. However, whitespace significant in string literals and character literals: `"Hello World"` has space as part of string content, not separator. Comments useful for documentation but stripped before bytecode generation.

### Q8: What happens if we use a keyword as an identifier?

**Answer:** Using keyword as identifier causes **compilation error** because keywords are reserved words with predefined meaning in Java language. The lexer recognizes keywords first before checking identifier patterns, so keyword text cannot be used as variable/method/class name. **Example Errors**:
```java
int class = 10;
// Error: <identifier> expected
// 'class' is keyword, cannot be identifier

String if = "test";
// Error: <identifier> expected
// 'if' is keyword

public void for() { }
// Error: <identifier> expected
// 'for' is keyword

public class int { }
// Error: <identifier> expected
// 'int' is keyword
```
**Why Error Occurs** - Lexer scans "class" → checks keyword table → found → creates KEYWORD token, Parser expects IDENTIFIER for variable name → receives KEYWORD → syntax error. **All Keywords Reserved**: 53 keywords reserved including: Access modifiers (public, private, protected), Data types (int, double, boolean, char), Control flow (if, else, for, while), Class/object (class, interface, extends, new), Modifiers (static, final, abstract), Others (void, return, package, import). **Workaround (Not Recommended)** - Cannot use exact keyword, but can modify slightly: `int class1 = 10;` (valid identifier), `int Class = 10;` (valid, different case), `int _class = 10;` (valid with underscore), `int myClass = 10;` (valid, different word). However, avoid keyword-like names for clarity. **Context-Sensitive Keywords** - Java 9+ module system has contextual keywords (module, exports, requires) that are keywords only in module-info.java context, can be used as identifiers elsewhere. **Reserved But Unused** - `goto` and `const` reserved but not used in Java (future-proofing), still cannot use as identifiers. **Best Practice** - Never attempt to use keywords as identifiers, use meaningful descriptive names instead, follow Java naming conventions (camelCase for variables, PascalCase for classes).

---

## Short Recap

Tokens Java program ke smallest meaningful units hain jo compiler identify karta hai lexical analysis phase mein. Five categories hain: (1) **Keywords** - 53 reserved words jaise int, class, public, if, else, for sab lowercase aur predefined meaning, identifier ke roop mein use nahi kar sakte. (2) **Identifiers** - User-defined names variables, methods, classes ke liye jaise myVariable, calculateSum, MyClass must start with letter/underscore/dollar then letters/digits/underscores allowed, keywords nahi ho sakte. (3) **Literals** - Constant values jaise 42 (integer), 3.14 (float), true/false (boolean), 'A' (char), "Hello" (string), null (reference), prefixes for different number systems (0x hex, 0 octal, 0b binary), suffixes for types (L long, F float). (4) **Operators** - Operation symbols jaise + - * / (arithmetic), == != < > (relational), && || ! (logical), = += -= (assignment), ++ -- (unary), ?: (ternary), instanceof (type check). (5) **Separators** - Punctuation jaise ; (terminator), , (separator), . (member access), () (parameters/calls), {} (blocks), [] (arrays), :: (method ref), @ (annotations). Tokenization process: Character stream → Pattern matching (regex/DFA) → Token objects (type, lexeme, position) → Token stream → Parser. Whitespace aur comments tokens nahi hain (discarded during lexical analysis). Keywords as identifiers use karne pe compilation error. Interview ke liye yaad rakho: Five token types clearly, keyword vs identifier difference, literal types with examples, why whitespace not token, tokenization process flow, using keyword as identifier causes error.

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║                          ╔═══════════════════════╗                                 ║
║                          ║   KEY TAKEAWAY        ║                                 ║
║                          ╚═══════════════════════╝                                 ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║                     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                      ║
║                     ┃                                       ┃                      ║
║                     ┃  5 TOKEN TYPES IN JAVA:               ┃                      ║
║                     ┃                                       ┃                      ║
║                     ┃  1. KEYWORDS                          ┃                      ║
║                     ┃     Reserved: int, class, if, for     ┃                      ║
║                     ┃                                       ┃                      ║
║                     ┃  2. IDENTIFIERS                       ┃                      ║
║                     ┃     Names: myVar, MyClass, method()   ┃                      ║
║                     ┃                                       ┃                      ║
║                     ┃  3. LITERALS                          ┃                      ║
║                     ┃     Values: 42, 3.14, true, "Hello"   ┃                      ║
║                     ┃                                       ┃                      ║
║                     ┃  4. OPERATORS                         ┃                      ║
║                     ┃     Symbols: +, -, *, ==, &&, =       ┃                      ║
║                     ┃                                       ┃                      ║
║                     ┃  5. SEPARATORS                        ┃                      ║
║                     ┃     Delimiters: ; , . ( ) { } [ ]     ┃                      ║
║                     ┃                                       ┃                      ║
║                     ┃  Example: int x = 10;                 ┃                      ║
║                     ┃  [KEYWORD] [IDENT] [OP] [LIT] [SEP]   ┃                      ║
║                     ┃                                       ┃                      ║
║                     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                      ║
║                                                                                    ║
║                                                                                    ║
║    ╔════════════╗    ╔════════════╗    ╔════════════╗    ╔════════════╗           ║
║    ║  Source    ║    ║  Lexical   ║    ║   Token    ║    ║   Syntax   ║           ║
║    ║   Code     ║ →  ║  Analysis  ║ →  ║   Stream   ║ →  ║  Analysis  ║           ║
║    ║ (Chars)    ║    ║  (Lexer)   ║    ║  (Tokens)  ║    ║  (Parser)  ║           ║
║    ╚════════════╝    ╚════════════╝    ╚════════════╝    ╚════════════╝           ║
║                                                                                    ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```
