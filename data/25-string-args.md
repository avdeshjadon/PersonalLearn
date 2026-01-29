# 25) String[] args - COMMAND LINE ARGUMENTS

## Concept Introduction

String[] args main() method ka parameter hai jo command-line arguments ko accept karta hai. Jab tum program run karte ho terminal se, toh program ko runtime pe input de sakte ho — yeh input String[] args mein aata hai. Example: `java MyProgram Hello World 123` — yahan "Hello", "World", "123" command-line arguments hain jo args array mein store hote hain. args[0] = "Hello", args[1] = "World", args[2] = "123". Yeh bahut useful hai jab tumhe program ko different inputs ke saath run karna ho bina code change kiye. Configuration files, file paths, options — sab command-line se pass kar sakte ho!

---

## Why This Concept Exists

**Problem:**
- Program ko runtime pe input kaise dein?
- Har baar code change karke recompile karna impractical
- Different configurations ke liye different programs banana?
- User input kaise accept karein program start hone se pehle?
- Automation scripts mein input kaise pass karein?

**Solution (String[] args):**
- Command-line se arguments pass karo
- Runtime pe program behavior change karo
- No code modification needed
- Automation friendly
- Configuration via command-line
- Flexible and powerful

---

## Definitions

### 🔹 Very Simple Definition
String[] args ek array hai jo command-line se pass kiye gaye arguments ko store karta hai — program ko runtime input dene ka tarika.

### 🔹 College Exam Definition
String[] args is the parameter of main() method that receives command-line arguments passed when running the program. It is an array of String objects where each element represents an argument provided after the class name in the java command. args[0] is the first argument (not the program name), args.length gives the count, and all arguments are strings requiring parsing for other types.

### 🔹 Viva Definition
String[] args is the formal parameter of main() method accepting command-line arguments. When executing `java ClassName arg1 arg2 arg3`, JVM creates String array with arguments: args[0]="arg1", args[1]="arg2", args[2]="arg3". Key characteristics: (1) Always String type (numbers, booleans need parsing), (2) args[0] is first argument (unlike C/C++ where argv[0] is program name), (3) Empty array if no arguments (not null), (4) args.length gives count, (5) Parameter name can be anything (args, xyz, parameters), but String[] type mandatory, (6) Enables runtime configuration without code modification, (7) Useful for file paths, options, flags, configuration values.

### 🔹 Interview Definition
String[] args parameter in main() receives command-line arguments with specific semantics: (1) **Type**: Array of java.lang.String objects, all arguments are strings regardless of input (numbers, booleans stored as strings, require parsing via Integer.parseInt(), Boolean.parseBoolean(), etc.), (2) **Indexing**: args[0] is first argument (not program name unlike C/C++ argv[0]), zero-based indexing, args.length gives count, (3) **Creation**: JVM parses command-line, creates String array in heap, populates with arguments, passes reference to main(), (4) **Empty vs Null**: If no arguments, args is empty array (length 0), never null, (5) **Naming**: Parameter name flexible (args, xyz, parameters), but String[] type mandatory, varargs String... args also valid, (6) **Whitespace**: Arguments separated by spaces, quotes preserve spaces ("Hello World" is single argument), (7) **Use Cases**: Configuration (file paths, URLs), options/flags (-verbose, --debug), runtime parameters (port numbers, database names), automation scripts, testing different inputs. Common pattern: Parse arguments, validate, use in program logic.

### 🔹 Technical Definition
String[] args implements command-line argument passing with JVM-level handling: (1) **JVM Processing**: Native launcher parses command-line using platform-specific APIs (GetCommandLineW on Windows, argv on Unix), tokenizes by whitespace (respecting quotes), creates String[] in heap (young generation), populates via JNI String creation, (2) **Memory**: Array object in heap with String references, each String has char[] in heap (or compact strings in Java 9+), args reference passed on stack to main(), (3) **Bytecode**: Method descriptor "([Ljava/lang/String;)V" indicates String array parameter, local variable 0 in main() frame holds args reference (no 'this' since static), (4) **Parsing**: All arguments are strings, type conversion required (Integer.parseInt(), Double.parseDouble(), Boolean.parseBoolean()), NumberFormatException if invalid format, (5) **Alternatives**: String... args (varargs, equivalent), String args[] (C-style array syntax), parameter name arbitrary, (6) **Validation**: Check args.length before access (ArrayIndexOutOfBoundsException if invalid index), validate format/range after parsing, provide defaults for missing arguments, (7) **Security**: Command-line arguments visible in process list (ps, Task Manager), avoid passing sensitive data (passwords, keys), use configuration files or environment variables for secrets.

### 🔹 One-line Crisp Definition
String[] args = Command-line input → String array → Runtime configuration → No code change needed

---

## DIAGRAM: String[] args Breakdown

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    String[] args EXPLAINED                                  │
└─────────────────────────────────────────────────────────────────────────────┘

COMMAND: $ java MyProgram Hello World 123

┌───────────────────────────────────────────────────────────────────────────┐
│  COMPONENT BREAKDOWN                                                      │
│                                                                           │
│  $ java MyProgram Hello World 123                                         │
│    │    │         │     │     │                                           │
│    │    │         │     │     └─ Argument 3                               │
│    │    │         │     └─ Argument 2                                     │
│    │    │         └─ Argument 1                                           │
│    │    └─ Class name (NOT in args!)                                      │
│    └─ Java launcher                                                       │
│                                                                           │
│  RESULT: args = ["Hello", "World", "123"]                                 │
│          ├─ args[0] = "Hello"                                             │
│          ├─ args[1] = "World"                                             │
│          ├─ args[2] = "123"                                               │
│          └─ args.length = 3                                               │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  String[] args SIGNATURE                                                  │
│                                                                           │
│  public static void main(String[] args)                                   │
│                              │      │  │                                  │
│                              │      │  └─ Parameter name (can be anything)│
│                              │      └─ Array notation                     │
│                              └─ Element type: String                      │
│                                                                           │
│  VALID VARIATIONS:                                                        │
│  ✅ String[] args                                                         │
│  ✅ String args[]     (C-style)                                           │
│  ✅ String... args    (varargs)                                           │
│  ✅ String[] xyz      (different name)                                    │
│  ✅ String[] parameters                                                   │
│                                                                           │
│  INVALID:                                                                 │
│  ❌ int[] args        (wrong type)                                        │
│  ❌ String args       (not array)                                         │
│  ❌ String[][] args   (2D array)                                          │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  MEMORY REPRESENTATION                                                    │
│                                                                           │
│  COMMAND: $ java Demo Hello World 123                                     │
│                                                                           │
│  HEAP:                                                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  String[] args array object                                         │ │
│  │  ┌───┬───┬───┐                                                       │ │
│  │  │ 0 │ 1 │ 2 │  ← Indices                                           │ │
│  │  └─┬─┴─┬─┴─┬─┘                                                       │ │
│  │    │   │   │                                                         │ │
│  │    │   │   └──→ String object "123"                                 │ │
│  │    │   │        ├─ char[] {'1','2','3'}                             │ │
│  │    │   │        └─ hash, length                                     │ │
│  │    │   │                                                             │ │
│  │    │   └──→ String object "World"                                   │ │
│  │    │        ├─ char[] {'W','o','r','l','d'}                         │ │
│  │    │        └─ hash, length                                         │ │
│  │    │                                                                 │ │
│  │    └──→ String object "Hello"                                       │ │
│  │         ├─ char[] {'H','e','l','l','o'}                             │ │
│  │         └─ hash, length                                             │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                           │
│  STACK (main thread):                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  Frame: main(args)                                                  │ │
│  │  ├─ Local variable 0: args → [reference to heap array]             │ │
│  │  └─ Operand stack: (empty)                                          │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  ACCESSING ARGUMENTS                                                      │
│                                                                           │
│  CODE:                                                                    │
│  public static void main(String[] args) {                                 │
│      System.out.println("Number of arguments: " + args.length);           │
│      System.out.println("First argument: " + args[0]);                    │
│      System.out.println("Second argument: " + args[1]);                   │
│      System.out.println("Third argument: " + args[2]);                    │
│  }                                                                        │
│                                                                           │
│  RUN: $ java Demo Hello World 123                                         │
│                                                                           │
│  OUTPUT:                                                                  │
│  Number of arguments: 3                                                   │
│  First argument: Hello                                                    │
│  Second argument: World                                                   │
│  Third argument: 123                                                      │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  IMPORTANT DIFFERENCES FROM C/C++                                         │
│                                                                           │
│  C/C++:                                                                   │
│  int main(int argc, char* argv[]) {                                       │
│      // argv[0] = program name                                            │
│      // argv[1] = first argument                                          │
│      // argc = total count (including program name)                       │
│  }                                                                        │
│                                                                           │
│  JAVA:                                                                    │
│  public static void main(String[] args) {                                 │
│      // args[0] = first argument (NOT program name)                       │
│      // args.length = argument count (NOT including program name)         │
│  }                                                                        │
│                                                                           │
│  EXAMPLE:                                                                 │
│  Command: program Hello World                                             │
│                                                                           │
│  C/C++:                                                                   │
│  ├─ argc = 3                                                              │
│  ├─ argv[0] = "program"                                                   │
│  ├─ argv[1] = "Hello"                                                     │
│  └─ argv[2] = "World"                                                     │
│                                                                           │
│  Java:                                                                    │
│  ├─ args.length = 2                                                       │
│  ├─ args[0] = "Hello"                                                     │
│  └─ args[1] = "World"                                                     │
└───────────────────────────────────────────────────────────────────────────┘
```



---

## DIAGRAM: Command-Line Parsing

```
┌─────────────────────────────────────────────────────┐
│         COMMAND-LINE PARSING PROCESS                │
└─────────────────────────────────────────────────────┘

EXAMPLE 1: Simple Arguments
┌──────────────────────────────────────┐
│  $ java Demo Hello World 123         │
└──────────────────────────────────────┘
         ↓ JVM parses
┌──────────────────────────────────────┐
│  args = ["Hello", "World", "123"]    │
│  ├─ args[0] = "Hello"                │
│  ├─ args[1] = "World"                │
│  ├─ args[2] = "123"                  │
│  └─ args.length = 3                  │
└──────────────────────────────────────┘

EXAMPLE 2: Arguments with Spaces (Quotes)
┌──────────────────────────────────────┐
│  $ java Demo "Hello World" 123       │
└──────────────────────────────────────┘
         ↓ JVM parses (quotes preserve spaces)
┌──────────────────────────────────────┐
│  args = ["Hello World", "123"]       │
│  ├─ args[0] = "Hello World"          │
│  ├─ args[1] = "123"                  │
│  └─ args.length = 2                  │
└──────────────────────────────────────┘

EXAMPLE 3: No Arguments
┌──────────────────────────────────────┐
│  $ java Demo                         │
└──────────────────────────────────────┘
         ↓ JVM parses
┌──────────────────────────────────────┐
│  args = []  (empty array, NOT null)  │
│  └─ args.length = 0                  │
└──────────────────────────────────────┘

EXAMPLE 4: Special Characters
┌──────────────────────────────────────┐
│  $ java Demo file.txt -v --debug     │
└──────────────────────────────────────┘
         ↓ JVM parses
┌──────────────────────────────────────┐
│  args = ["file.txt", "-v", "--debug"]│
│  ├─ args[0] = "file.txt"             │
│  ├─ args[1] = "-v"                   │
│  ├─ args[2] = "--debug"              │
│  └─ args.length = 3                  │
└──────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Restaurant Order

**String[] args = Order Details:**
```
Restaurant (Java Program):
├─ Menu fixed (code)
├─ But order varies (arguments)
└─ Customer specifies order

Command: $ java Restaurant Pizza Large ExtraCheese
         ↓
args = ["Pizza", "Large", "ExtraCheese"]

Program:
├─ args[0] = "Pizza" → Item
├─ args[1] = "Large" → Size
└─ args[2] = "ExtraCheese" → Topping

Similarly:
$ java MyProgram input.txt output.txt
├─ args[0] = input file
└─ args[1] = output file
```

### Example 2: Taxi Booking

**String[] args = Trip Details:**
```
Taxi App (Java Program):
├─ App code fixed
├─ But trip details vary
└─ User provides details

Command: $ java TaxiApp "Home" "Airport" "2PM"
         ↓
args = ["Home", "Airport", "2PM"]

Program:
├─ args[0] = "Home" → Pickup
├─ args[1] = "Airport" → Drop
└─ args[2] = "2PM" → Time

Similarly:
$ java FileProcessor input.txt -verbose
├─ args[0] = file to process
└─ args[1] = option flag
```

### Example 3: Coffee Machine

**String[] args = Coffee Order:**
```
Coffee Machine (Java Program):
├─ Machine fixed
├─ But order varies
└─ Customer selects

Command: $ java CoffeeMachine Latte Large Sugar
         ↓
args = ["Latte", "Large", "Sugar"]

Program:
├─ args[0] = "Latte" → Type
├─ args[1] = "Large" → Size
└─ args[2] = "Sugar" → Extra

Similarly:
$ java Calculator 10 + 20
├─ args[0] = "10"
├─ args[1] = "+"
└─ args[2] = "20"
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         HOW JVM CREATES String[] args               │
└─────────────────────────────────────────────────────┘

COMMAND: $ java Demo Hello World 123

STEP 1: JVM NATIVE LAUNCHER PARSES COMMAND
┌──────────────────────────────────────┐
│  Native Code (C/C++):                │
│  ├─ Parse command-line string        │
│  ├─ Tokenize by whitespace           │
│  ├─ Respect quotes                   │
│  └─ Extract arguments                │
│                                      │
│  Result:                             │
│  ├─ Class name: "Demo"               │
│  ├─ Arg 0: "Hello"                   │
│  ├─ Arg 1: "World"                   │
│  └─ Arg 2: "123"                     │
└──────────────────────────────────────┘

STEP 2: CREATE String[] IN HEAP
┌──────────────────────────────────────┐
│  JNI Code:                           │
│  // Allocate String array            │
│  jobjectArray args = env->NewObjectArray(│
│      3,  // length                   │
│      String.class,                   │
│      NULL                            │
│  );                                  │
└──────────────────────────────────────┘

STEP 3: CREATE String OBJECTS
┌──────────────────────────────────────┐
│  For each argument:                  │
│  ├─ Create String object in heap     │
│  ├─ Copy characters                  │
│  └─ Store in args array              │
│                                      │
│  // Create "Hello"                   │
│  jstring str0 = env->NewStringUTF(   │
│      "Hello"                         │
│  );                                  │
│  env->SetObjectArrayElement(         │
│      args, 0, str0                   │
│  );                                  │
│                                      │
│  // Repeat for "World" and "123"     │
└──────────────────────────────────────┘

STEP 4: PASS TO main()
┌──────────────────────────────────────┐
│  Method.invoke(null, args);          │
│  ├─ null (static method)             │
│  └─ args (String[] reference)        │
└──────────────────────────────────────┘

FINAL MEMORY STATE:
┌──────────────────────────────────────┐
│  HEAP                                │
│  ┌────────────────────────────────┐  │
│  │  String[] args                 │  │
│  │  [ref0, ref1, ref2]            │  │
│  │    ↓     ↓     ↓               │  │
│  │  "Hello" "World" "123"         │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  STACK (main thread)                 │
│  ┌────────────────────────────────┐  │
│  │  Frame: main(args)             │  │
│  │  └─ Local var 0: args → heap   │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

---

## Syntax Explanation

### Basic usage:

```java
public class ArgsDemo {
    public static void main(String[] args) {
        // Print number of arguments
        System.out.println("Number of arguments: " + args.length);
        
        // Print all arguments
        for(int i = 0; i < args.length; i++) {
            System.out.println("Argument " + i + ": " + args[i]);
        }
    }
}
```

**Run:**
```bash
$ java ArgsDemo Hello World 123
Number of arguments: 3
Argument 0: Hello
Argument 1: World
Argument 2: 123
```

### Safe argument access:

```java
public class SafeArgs {
    public static void main(String[] args) {
        // Check if arguments provided
        if(args.length == 0) {
            System.out.println("No arguments provided");
            System.out.println("Usage: java SafeArgs <name> <age>");
            return;
        }
        
        // Safe access
        if(args.length >= 1) {
            String name = args[0];
            System.out.println("Name: " + name);
        }
        
        if(args.length >= 2) {
            String age = args[1];
            System.out.println("Age: " + age);
        }
    }
}
```

### Parsing arguments:

```java
public class ParseArgs {
    public static void main(String[] args) {
        if(args.length < 2) {
            System.out.println("Usage: java ParseArgs <number1> <number2>");
            return;
        }
        
        try {
            // Parse strings to integers
            int num1 = Integer.parseInt(args[0]);
            int num2 = Integer.parseInt(args[1]);
            
            int sum = num1 + num2;
            System.out.println("Sum: " + sum);
            
        } catch(NumberFormatException e) {
            System.out.println("Error: Arguments must be numbers");
        }
    }
}
```

**Run:**
```bash
$ java ParseArgs 10 20
Sum: 30

$ java ParseArgs abc xyz
Error: Arguments must be numbers
```

### Different data types:

```java
public class TypeParsing {
    public static void main(String[] args) {
        if(args.length < 4) {
            System.out.println("Usage: java TypeParsing <int> <double> <boolean> <string>");
            return;
        }
        
        try {
            // Parse different types
            int intValue = Integer.parseInt(args[0]);
            double doubleValue = Double.parseDouble(args[1]);
            boolean boolValue = Boolean.parseBoolean(args[2]);
            String strValue = args[3];
            
            System.out.println("Integer: " + intValue);
            System.out.println("Double: " + doubleValue);
            System.out.println("Boolean: " + boolValue);
            System.out.println("String: " + strValue);
            
        } catch(NumberFormatException e) {
            System.out.println("Error: Invalid number format");
        }
    }
}
```

**Run:**
```bash
$ java TypeParsing 42 3.14 true Hello
Integer: 42
Double: 3.14
Boolean: true
String: Hello
```

### Options/flags parsing:

```java
public class OptionsDemo {
    public static void main(String[] args) {
        boolean verbose = false;
        boolean debug = false;
        String filename = null;
        
        // Parse options
        for(String arg : args) {
            if(arg.equals("-v") || arg.equals("--verbose")) {
                verbose = true;
            } else if(arg.equals("-d") || arg.equals("--debug")) {
                debug = true;
            } else {
                filename = arg;
            }
        }
        
        System.out.println("Verbose: " + verbose);
        System.out.println("Debug: " + debug);
        System.out.println("Filename: " + filename);
    }
}
```

**Run:**
```bash
$ java OptionsDemo -v --debug input.txt
Verbose: true
Debug: true
Filename: input.txt
```

### Enhanced for loop:

```java
public class EnhancedLoop {
    public static void main(String[] args) {
        System.out.println("Arguments:");
        
        // Enhanced for loop
        for(String arg : args) {
            System.out.println("- " + arg);
        }
        
        // Or with index
        int index = 0;
        for(String arg : args) {
            System.out.println(index++ + ": " + arg);
        }
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         MEMORY LAYOUT: String[] args                │
└─────────────────────────────────────────────────────┘

COMMAND: $ java Demo Hello World

HEAP MEMORY:
┌──────────────────────────────────────┐
│  String[] args array object          │
│  ┌────────────────────────────────┐  │
│  │  Array Header:                 │  │
│  │  ├─ Class pointer              │  │
│  │  ├─ Length: 2                  │  │
│  │  └─ Hash code                  │  │
│  ├────────────────────────────────┤  │
│  │  Array Elements:               │  │
│  │  ├─ [0] → ref to "Hello"       │  │
│  │  └─ [1] → ref to "World"       │  │
│  └────────────────────────────────┘  │
│         ↓              ↓              │
│  ┌──────────┐   ┌──────────┐         │
│  │ "Hello"  │   │ "World"  │         │
│  │ String   │   │ String   │         │
│  │ object   │   │ object   │         │
│  └──────────┘   └──────────┘         │
└──────────────────────────────────────┘

STACK MEMORY (main thread):
┌──────────────────────────────────────┐
│  Frame: main(args)                   │
│  ┌────────────────────────────────┐  │
│  │  Local Variables:              │  │
│  │  ├─ 0: args → [ref to heap]    │  │
│  │  └─ (other local vars)         │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

MEMORY SIZES (approximate):
├─ String[] array object: 16-24 bytes + (8 bytes × length)
├─ Each String object: 40-48 bytes + char array
├─ Total for ["Hello", "World"]: ~150-200 bytes
└─ Stored in young generation (eden space)
```

---

## Advantages

✅ **Runtime Configuration**: Change program behavior without recompiling  
✅ **Flexibility**: Different inputs for different runs  
✅ **Automation Friendly**: Easy to use in scripts  
✅ **No Code Modification**: Same program, different inputs  
✅ **Testing**: Test with various inputs easily  
✅ **User Input**: Accept input before program starts  
✅ **File Paths**: Pass file names, URLs, paths  
✅ **Options/Flags**: Enable/disable features via flags  
✅ **Configuration**: Database names, ports, settings  
✅ **Batch Processing**: Process multiple files  
✅ **Simple Interface**: Easy to understand and use  
✅ **Standard Pattern**: Consistent across all Java programs  

---

## Limitations

❌ **String Only**: All arguments are strings, need parsing  
❌ **No Type Safety**: Can't enforce types at command-line  
❌ **Error Prone**: Easy to pass wrong arguments  
❌ **Limited Validation**: Must validate manually  
❌ **Security**: Arguments visible in process list  
❌ **Complex Parsing**: Options/flags parsing can be complex  
❌ **No Default Values**: Must handle missing arguments  
❌ **Whitespace Issues**: Spaces need quotes  
❌ **Platform Dependent**: Command-line syntax varies (Windows vs Unix)  

---

## Edge Cases

🔸 **No arguments:**
```java
public class NoArgs {
    public static void main(String[] args) {
        System.out.println(args.length);  // 0
        System.out.println(args[0]);  // ArrayIndexOutOfBoundsException!
    }
}

$ java NoArgs
0
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 0
```

🔸 **Arguments with spaces:**
```bash
# Without quotes (3 arguments)
$ java Demo Hello World Program
args = ["Hello", "World", "Program"]

# With quotes (1 argument)
$ java Demo "Hello World Program"
args = ["Hello World Program"]
```

🔸 **Empty string argument:**
```bash
$ java Demo "" Hello
args = ["", "Hello"]
args[0] = ""  (empty string, not null)
args.length = 2
```

🔸 **Special characters:**
```bash
$ java Demo file.txt -v --debug=true
args = ["file.txt", "-v", "--debug=true"]

$ java Demo "C:\Program Files\Java"
args = ["C:\Program Files\Java"]
```

🔸 **Number parsing errors:**
```java
public class ParseError {
    public static void main(String[] args) {
        int num = Integer.parseInt(args[0]);  // NumberFormatException if not number
    }
}

$ java ParseError abc
Exception in thread "main" java.lang.NumberFormatException: For input string: "abc"
```

🔸 **args is never null:**
```java
public class NullCheck {
    public static void main(String[] args) {
        System.out.println(args == null);  // false (always)
        System.out.println(args.length);   // 0 if no arguments
    }
}

$ java NullCheck
false
0
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Not checking args.length
```java
❌ public static void main(String[] args) {
    String name = args[0];  // Crash if no arguments!
}

✅ public static void main(String[] args) {
    if(args.length > 0) {
        String name = args[0];
    } else {
        System.out.println("No arguments provided");
    }
}
```

🚫 **Mistake 2**: Thinking args[0] is program name
```java
❌ "args[0] is program name like C/C++"
✅ args[0] is first argument, NOT program name
   Java: args[0] = first argument
   C/C++: argv[0] = program name, argv[1] = first argument
```

🚫 **Mistake 3**: Not parsing numbers
```java
❌ int num = args[0];  // Type mismatch! args[0] is String

✅ int num = Integer.parseInt(args[0]);
```

🚫 **Mistake 4**: Forgetting NumberFormatException
```java
❌ int num = Integer.parseInt(args[0]);  // Crash if not number

✅ try {
    int num = Integer.parseInt(args[0]);
} catch(NumberFormatException e) {
    System.out.println("Invalid number");
}
```

🚫 **Mistake 5**: Thinking args can be null
```java
❌ if(args == null) { }  // Never true!

✅ if(args.length == 0) { }  // Check for empty array
```

---

## Important Interview Points

💡 **Q: What is String[] args in main() method?**  
**A**: String[] args is the parameter of main() method that receives command-line arguments. When running `java ClassName arg1 arg2`, JVM creates String array with arguments: args[0]="arg1", args[1]="arg2". Key points:
- All arguments are strings (need parsing for other types)
- args[0] is first argument (not program name unlike C/C++)
- Empty array if no arguments (never null)
- args.length gives count
- Parameter name can be anything (args, xyz, parameters)

💡 **Q: How are command-line arguments passed to Java program?**  
**A**: JVM native launcher parses command-line, tokenizes by whitespace (respecting quotes), creates String[] in heap, populates with arguments, passes reference to main(). Process:
1. Parse command: `java Demo Hello World`
2. Extract class name: "Demo"
3. Extract arguments: ["Hello", "World"]
4. Create String[] in heap
5. Create String objects for each argument
6. Pass array reference to main()

💡 **Q: Difference between Java args and C/C++ argv?**  
**A**: 
- **Java args[0]**: First argument (not program name)
- **C/C++ argv[0]**: Program name, argv[1] is first argument
- **Java args.length**: Argument count (excluding program name)
- **C/C++ argc**: Total count (including program name)
Example: `program Hello World`
- Java: args = ["Hello", "World"], length = 2
- C/C++: argv = ["program", "Hello", "World"], argc = 3

💡 **Q: Can we change the name of args parameter?**  
**A**: Yes, parameter name can be anything (args, xyz, parameters, commandLineArgs). Only String[] type is mandatory. Valid variations:
```java
public static void main(String[] args) { }      // Standard
public static void main(String[] xyz) { }       // Valid
public static void main(String[] parameters) { } // Valid
public static void main(String... args) { }     // Varargs, valid
```

💡 **Q: What happens if no arguments are passed?**  
**A**: If no arguments passed, args is empty array (length 0), NOT null. Accessing args[0] throws ArrayIndexOutOfBoundsException. Always check args.length before accessing:
```java
if(args.length > 0) {
    String first = args[0];  // Safe
}
```

💡 **Q: How to parse different data types from args?**  
**A**: All arguments are strings, use wrapper class methods to parse:
```java
int num = Integer.parseInt(args[0]);
double d = Double.parseDouble(args[1]);
boolean b = Boolean.parseBoolean(args[2]);
long l = Long.parseLong(args[3]);
```
Handle NumberFormatException for invalid input. Validate before parsing.

💡 **Q: How to handle arguments with spaces?**  
**A**: Use quotes to preserve spaces:
```bash
# Without quotes (3 arguments)
$ java Demo Hello World Program
args = ["Hello", "World", "Program"]

# With quotes (1 argument)
$ java Demo "Hello World Program"
args = ["Hello World Program"]
```
Quotes are removed by shell, not visible in args.

💡 **Q: Can args be null?**  
**A**: No, args is never null. JVM always creates array (empty if no arguments). Checking `args == null` is unnecessary. Check `args.length == 0` for no arguments instead.

💡 **Q: What are common use cases for command-line arguments?**  
**A**: 
1. **File paths**: Input/output files
2. **Configuration**: Database names, ports, URLs
3. **Options/flags**: -verbose, --debug, -help
4. **Runtime parameters**: Batch size, timeout values
5. **Testing**: Different test inputs
6. **Automation**: Script-friendly execution
Example: `java FileProcessor input.txt output.txt -verbose`

---

## Short Recap

String[] args main() method ka parameter hai jo command-line arguments accept karta hai. Jab `java MyProgram Hello World` run karte ho, toh args = ["Hello", "World"] ban jaata hai. args[0] first argument hai (program name nahi, unlike C/C++). args.length argument count deta hai. Sab arguments strings hote hain, numbers ke liye Integer.parseInt() use karo. args kabhi null nahi hota, empty array ho sakta hai (length 0). Spaces preserve karne ke liye quotes use karo. Always args.length check karo before accessing. Interview ke liye yaad rakho: args[0] meaning, Java vs C/C++ difference, parsing methods, null vs empty array, aur common use cases (file paths, options, configuration).

---

**Previous**: [← 24 - Why main() is static](./24-why-main-static.md)  
**Next**: [26 - Program Structure →](./26-program-structure.md)
