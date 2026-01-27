# 23) main() METHOD

## Concept Introduction

main() method Java program ka entry point hai — jahan se program execution start hota hai. Jab tum `java MyProgram` run karte ho, toh JVM sabse pehle main() method ko dhundta hai aur wahan se execution shuru karta hai. main() method ka ek specific signature hona chahiye: `public static void main(String[] args)` — har word ka apna reason hai! Agar signature galat hai, toh program run nahi hoga. main() method har Java application mein mandatory hai (except applets aur servlets). Yeh interview mein bahut pucha jaata hai ki main() method public kyun hai, static kyun hai, void kyun hai, aur String[] args ka kya matlab hai!

---

## Why This Concept Exists

**Problem:**
- Program execution kahan se start ho?
- JVM ko kaise pata chale ki kaunsa method pehle execute kare?
- Bina object banaye method kaise call ho?
- Command line arguments kaise pass karein?
- Standard entry point kaise define karein?

**Solution (main() method):**
- Fixed entry point for all Java programs
- JVM knows exactly where to start
- Static method — no object needed
- String[] args for command line input
- Standardized signature across all programs
- Public access for JVM to call from outside

---

## Definitions

### 🔹 Very Simple Definition
main() method wo special method hai jahan se Java program execution start hota hai — program ka entry point.

### 🔹 College Exam Definition
The main() method is the entry point of a Java application with the signature `public static void main(String[] args)`. It must be public (accessible to JVM), static (callable without object creation), void (returns nothing), and accept String array for command-line arguments. JVM searches for this exact signature to start program execution.

### 🔹 Viva Definition
The main() method is the starting point of Java program execution with mandatory signature `public static void main(String[] args)`. Each keyword has specific purpose: (1) public - JVM can access from outside the class, (2) static - JVM can call without creating object instance, (3) void - doesn't return value to JVM, (4) main - fixed name JVM searches for, (5) String[] args - accepts command-line arguments as string array. When `java ClassName` is executed, JVM loads the class, searches for this exact signature, and begins execution from first statement in main(). If signature doesn't match, runtime error occurs: "Main method not found in class ClassName".

### 🔹 Interview Definition
The main() method is the entry point with signature `public static void main(String[] args)` where: (1) **public** - access modifier allowing JVM (external entity) to invoke method, without public → IllegalAccessError, (2) **static** - class-level method callable without object instantiation, JVM doesn't create object before calling main(), enables execution without constructor overhead, (3) **void** - return type indicating no value returned to JVM, JVM doesn't expect return value, program exit code set via System.exit(int), (4) **main** - method name, fixed identifier JVM searches for via reflection (Method.getName().equals("main")), (5) **String[] args** - parameter accepting command-line arguments, args[0] is first argument (not program name unlike C/C++), enables runtime configuration. JVM uses reflection to find main(): `Method m = class.getMethod("main", String[].class); m.invoke(null, new Object[]{args});`. Variations allowed: `String args[]`, `String... args`, but signature must match. Multiple main() methods possible via overloading, but JVM only calls `main(String[])`.

### 🔹 Technical Definition
The main() method serves as program entry point with signature `public static void main(String[] args)` enforced by JVM specification: (1) **Access**: public modifier (0x0001 flag) required for JVM invocation from java.lang.ClassLoader context, (2) **Binding**: static modifier (0x0008 flag) enables invocation without object allocation, method resides in method area, no 'this' reference, (3) **Return**: void return type, JVM ignores return value, exit code via Runtime.exit() or System.exit(), (4) **Name**: "main" string literal in constant pool, JVM searches via Class.getMethod("main", String[].class) reflection, (5) **Parameters**: String[] (array of java.lang.String references), populated from command-line via JNI, args.length gives count, varargs String... args equivalent. JVM invocation: loads class, verifies main() signature via method descriptor "([Ljava/lang/String;)V", creates main thread, allocates stack frame, pushes args array reference, transfers control to method bytecode offset 0. Signature mismatch → NoSuchMethodError at runtime. Method can be synchronized, final, or strictfp, but not abstract or native. Overloading permitted but JVM only invokes String[] variant.

### 🔹 One-line Crisp Definition
main() = public (JVM access) + static (no object) + void (no return) + main (fixed name) + String[] args (CLI input)

---

## DIAGRAM: main() Method Signature Breakdown

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    main() METHOD SIGNATURE EXPLAINED                        │
└─────────────────────────────────────────────────────────────────────────────┘

public static void main(String[] args)
  │      │     │    │       │       │
  │      │     │    │       │       └─ Parameter name (can be anything)
  │      │     │    │       └─ Parameter type: Array of Strings
  │      │     │    └─ Method name (MUST be "main")
  │      │     └─ Return type: void (returns nothing)
  │      └─ static: No object needed to call
  └─ public: Accessible from anywhere (JVM can call)

┌───────────────────────────────────────────────────────────────────────────┐
│  KEYWORD: public                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  WHY: JVM needs to access main() from outside the class            │ │
│  │  ├─ JVM is external to your class                                  │ │
│  │  ├─ Without public, JVM cannot call main()                         │ │
│  │  └─ Error: IllegalAccessError                                      │ │
│  │                                                                     │ │
│  │  ALTERNATIVES:                                                      │ │
│  │  ❌ private static void main(String[] args)   // JVM can't access  │ │
│  │  ❌ protected static void main(String[] args) // JVM can't access  │ │
│  │  ❌ static void main(String[] args)           // Default, can't access│ │
│  │  ✅ public static void main(String[] args)    // Correct!          │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  KEYWORD: static                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  WHY: JVM calls main() without creating object                     │ │
│  │  ├─ JVM doesn't know how to create your object                     │ │
│  │  ├─ Constructor might need parameters                              │ │
│  │  ├─ Static method belongs to class, not object                     │ │
│  │  └─ Can be called as: ClassName.main(args)                         │ │
│  │                                                                     │ │
│  │  MEMORY:                                                            │ │
│  │  ┌─────────────────────────────────────────────────────────────┐  │ │
│  │  │  METHOD AREA                                                 │  │ │
│  │  │  └─ main() method bytecode (class-level)                     │  │ │
│  │  └─────────────────────────────────────────────────────────────┘  │ │
│  │  ┌─────────────────────────────────────────────────────────────┐  │ │
│  │  │  HEAP                                                        │  │ │
│  │  │  └─ No object created for main() call                       │  │ │
│  │  └─────────────────────────────────────────────────────────────┘  │ │
│  │                                                                     │ │
│  │  ALTERNATIVES:                                                      │ │
│  │  ❌ public void main(String[] args)        // Not static, error    │ │
│  │  ✅ public static void main(String[] args) // Correct!             │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  KEYWORD: void                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  WHY: main() doesn't return anything to JVM                        │ │
│  │  ├─ JVM doesn't expect return value                                │ │
│  │  ├─ Program exit code set via System.exit(int)                     │ │
│  │  └─ Returning value would be ignored by JVM                        │ │
│  │                                                                     │ │
│  │  EXIT CODES:                                                        │ │
│  │  ├─ Normal termination: main() returns → exit code 0               │ │
│  │  ├─ System.exit(0) → Success (exit code 0)                         │ │
│  │  ├─ System.exit(1) → Error (exit code 1)                           │ │
│  │  └─ Uncaught exception → Non-zero exit code                        │ │
│  │                                                                     │ │
│  │  ALTERNATIVES:                                                      │ │
│  │  ❌ public static int main(String[] args)  // Wrong return type    │ │
│  │  ✅ public static void main(String[] args) // Correct!             │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  NAME: main                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  WHY: Fixed name that JVM searches for                             │ │
│  │  ├─ JVM uses reflection: getMethod("main", String[].class)         │ │
│  │  ├─ Standardized across all Java programs                          │ │
│  │  └─ Cannot be changed (not start, run, execute, etc.)              │ │
│  │                                                                     │ │
│  │  JVM SEARCH PROCESS:                                                │ │
│  │  1. Load class                                                      │ │
│  │  2. Search for method named "main"                                  │ │
│  │  3. Check signature: (String[]) → void                             │ │
│  │  4. Check modifiers: public static                                  │ │
│  │  5. If found → execute, else → error                               │ │
│  │                                                                     │ │
│  │  ALTERNATIVES:                                                      │ │
│  │  ❌ public static void start(String[] args) // Wrong name          │ │
│  │  ✅ public static void main(String[] args)  // Correct!            │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  PARAMETER: String[] args                                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  WHY: To accept command-line arguments                             │ │
│  │  ├─ User can pass input when running program                       │ │
│  │  ├─ args[0] is first argument (not program name)                   │ │
│  │  ├─ args.length gives number of arguments                          │ │
│  │  └─ Empty array if no arguments passed                             │ │
│  │                                                                     │ │
│  │  EXAMPLE:                                                           │ │
│  │  $ java MyProgram Hello World 123                                   │ │
│  │  ├─ args[0] = "Hello"                                              │ │
│  │  ├─ args[1] = "World"                                              │ │
│  │  ├─ args[2] = "123"                                                │ │
│  │  └─ args.length = 3                                                │ │
│  │                                                                     │ │
│  │  ALTERNATIVES (All valid):                                          │ │
│  │  ✅ String[] args                                                   │ │
│  │  ✅ String args[]                                                   │ │
│  │  ✅ String... args  (varargs)                                       │ │
│  │  ✅ String[] xyz    (parameter name can be anything)               │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: main() Method Execution Flow

```
┌─────────────────────────────────────────────────────┐
│         main() METHOD EXECUTION FLOW                │
└─────────────────────────────────────────────────────┘

USER RUNS: $ java MyProgram arg1 arg2

STEP 1: JVM STARTUP
┌──────────────────────────────────────┐
│  1. Load JVM native library          │
│  2. Initialize JVM                   │
│  3. Create runtime data areas        │
│  4. Parse command-line arguments     │
│     └─ args = ["arg1", "arg2"]       │
└────────────┬─────────────────────────┘
             ↓

STEP 2: LOAD MyProgram CLASS
┌──────────────────────────────────────┐
│  ClassLoader loads MyProgram.class   │
│  ├─ Verify bytecode                  │
│  ├─ Link class                       │
│  └─ Initialize static members        │
└────────────┬─────────────────────────┘
             ↓

STEP 3: SEARCH FOR main() METHOD
┌──────────────────────────────────────┐
│  JVM uses reflection:                │
│  Method m = MyProgram.class          │
│    .getMethod("main",                │
│               String[].class);       │
│                                      │
│  Check:                              │
│  ├─ Name is "main" ✅                │
│  ├─ Parameter is String[] ✅         │
│  ├─ Return type is void ✅           │
│  ├─ Modifier is public ✅            │
│  └─ Modifier is static ✅            │
└────────────┬─────────────────────────┘
             ↓

STEP 4: CREATE MAIN THREAD
┌──────────────────────────────────────┐
│  1. Create main thread               │
│  2. Allocate thread stack            │
│  3. Create stack frame for main()    │
│     ┌──────────────────────────────┐ │
│     │  Stack Frame                 │ │
│     │  ├─ Local variables:         │ │
│     │  │  └─ args = ["arg1","arg2"]│ │
│     │  ├─ Operand stack: (empty)   │ │
│     │  └─ Return address: JVM entry│ │
│     └──────────────────────────────┘ │
└────────────┬─────────────────────────┘
             ↓

STEP 5: INVOKE main() METHOD
┌──────────────────────────────────────┐
│  m.invoke(null, new Object[]{args}); │
│         │           │                │
│         │           └─ Arguments     │
│         └─ null (static, no object)  │
└────────────┬─────────────────────────┘
             ↓

STEP 6: EXECUTE main() BODY
┌──────────────────────────────────────┐
│  Execute bytecode instructions       │
│  line by line                        │
│  ├─ Variable declarations            │
│  ├─ Method calls                     │
│  ├─ Control flow (if/loop)           │
│  └─ Output statements                │
└────────────┬─────────────────────────┘
             ↓

STEP 7: main() RETURNS
┌──────────────────────────────────────┐
│  1. Pop stack frame                  │
│  2. Main thread terminates           │
│  3. Run shutdown hooks (if any)      │
│  4. Run finalizers (if any)          │
│  5. JVM shuts down                   │
│  6. Return exit code to OS (0)       │
└──────────────────────────────────────┘

PROGRAM COMPLETE!
```

---

## Real-life Hinglish Example

### Example 1: Building Entry Gate

**main() = Building Main Gate:**
```
Building (Java Program):
├─ Multiple rooms (methods)
├─ Multiple floors (classes)
└─ But ONE main gate (main method)

Main Gate Properties:
├─ PUBLIC: Anyone can enter (JVM can access)
├─ STATIC: Gate exists without building occupants (no object needed)
├─ VOID: Gate doesn't return anything (just entry point)
├─ MAIN: Fixed name "Main Gate" (not "Side Gate", "Back Gate")
└─ String[] args: Visitor list (command-line arguments)

Entry Process:
1. Security (JVM) arrives
2. Looks for "Main Gate" sign
3. Checks gate is public (accessible)
4. Checks gate is static (always there)
5. Enters with visitor list (args)
6. Building activities start

Similarly main():
├─ Entry point for program
├─ JVM searches for it
├─ Must be public, static, void
└─ Accepts arguments
```

### Example 2: Restaurant Opening

**main() = Restaurant Opening Procedure:**
```
Restaurant (Java Program):
├─ Kitchen (methods)
├─ Dining area (classes)
└─ Opening procedure (main method)

Opening Procedure Properties:
├─ PUBLIC: Anyone can see opening time (JVM can access)
├─ STATIC: Procedure exists before staff arrives (no object)
├─ VOID: Procedure doesn't return anything (just starts restaurant)
├─ MAIN: Fixed name "Opening Procedure" (standard)
└─ String[] args: Special instructions (command-line args)

Opening Process:
1. Manager (JVM) arrives
2. Looks for "Opening Procedure" manual
3. Checks procedure is public (accessible to all)
4. Checks procedure is static (doesn't need staff yet)
5. Follows procedure with special instructions (args)
6. Restaurant starts operating

Similarly main():
├─ Starting point for program
├─ Standard procedure
├─ Accessible, independent
└─ Accepts instructions
```

### Example 3: Movie Theater Start

**main() = Movie Start Button:**
```
Movie Theater (Java Program):
├─ Projection room (methods)
├─ Sound system (classes)
└─ Start button (main method)

Start Button Properties:
├─ PUBLIC: Operator can access (JVM can call)
├─ STATIC: Button exists without audience (no object needed)
├─ VOID: Button doesn't return anything (just starts movie)
├─ MAIN: Fixed label "START" (not "PLAY", "BEGIN")
└─ String[] args: Movie settings (subtitles, language)

Start Process:
1. Operator (JVM) enters
2. Looks for "START" button
3. Checks button is accessible (public)
4. Checks button is always there (static)
5. Presses with settings (args)
6. Movie begins

Similarly main():
├─ Start point for program
├─ Fixed name and signature
├─ Always accessible
└─ Accepts settings
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         main() METHOD INTERNAL DETAILS              │
└─────────────────────────────────────────────────────┘

CODE:
public class Demo {
    static int count = 0;
    
    public static void main(String[] args) {
        System.out.println("Args: " + args.length);
        for(String arg : args) {
            System.out.println(arg);
        }
        count++;
        helper();
    }
    
    static void helper() {
        System.out.println("Helper called");
    }
}

EXECUTION: $ java Demo Hello World

STEP-BY-STEP INTERNAL FLOW:

1. JVM PARSES COMMAND LINE
   ┌──────────────────────────────────────┐
   │  Command: java Demo Hello World     │
   │  ├─ Class name: Demo                │
   │  ├─ Arg 0: "Hello"                  │
   │  └─ Arg 1: "World"                  │
   └──────────────────────────────────────┘

2. CREATE args ARRAY
   ┌──────────────────────────────────────┐
   │  HEAP                                │
   │  ┌────────────────────────────────┐  │
   │  │  String[] args = new String[2] │  │
   │  │  ├─ args[0] = "Hello"          │  │
   │  │  └─ args[1] = "World"          │  │
   │  └────────────────────────────────┘  │
   └──────────────────────────────────────┘

3. LOAD Demo CLASS
   ┌──────────────────────────────────────┐
   │  METHOD AREA                         │
   │  ├─ Demo class metadata              │
   │  ├─ main() bytecode                  │
   │  ├─ helper() bytecode                │
   │  └─ count = 0 (static variable)      │
   └──────────────────────────────────────┘

4. FIND main() METHOD
   ┌──────────────────────────────────────┐
   │  Reflection:                         │
   │  Method m = Demo.class.getMethod(    │
   │      "main",                         │
   │      String[].class                  │
   │  );                                  │
   │                                      │
   │  Verify:                             │
   │  ├─ m.getName() == "main" ✅         │
   │  ├─ m.getParameterTypes()[0]         │
   │  │  == String[].class ✅             │
   │  ├─ m.getReturnType() == void ✅     │
   │  ├─ Modifier.isPublic(              │
   │  │    m.getModifiers()) ✅           │
   │  └─ Modifier.isStatic(               │
   │       m.getModifiers()) ✅           │
   └──────────────────────────────────────┘

5. CREATE MAIN THREAD STACK
   ┌──────────────────────────────────────┐
   │  STACK (main thread)                 │
   │  ┌────────────────────────────────┐  │
   │  │  Frame: main(args)             │  │
   │  │  ├─ Local variables:           │  │
   │  │  │  ├─ 0: args (reference)     │  │
   │  │  │  └─ 1: arg (in loop)        │  │
   │  │  ├─ Operand stack: (empty)     │  │
   │  │  └─ Return address: JVM        │  │
   │  └────────────────────────────────┘  │
   └──────────────────────────────────────┘

6. INVOKE main()
   ┌──────────────────────────────────────┐
   │  m.invoke(null, new Object[]{args}); │
   │           │              │           │
   │           │              └─ args array│
   │           └─ null (static method)    │
   └──────────────────────────────────────┘

7. EXECUTE main() BYTECODE
   ┌──────────────────────────────────────┐
   │  Line: System.out.println(...)       │
   │  ├─ getstatic System.out             │
   │  ├─ Load args.length (2)             │
   │  ├─ String concatenation             │
   │  └─ invokevirtual println            │
   │  Output: "Args: 2"                   │
   │                                      │
   │  Line: for(String arg : args)        │
   │  ├─ Iterate over args array          │
   │  ├─ First iteration: arg = "Hello"   │
   │  │  └─ Output: "Hello"               │
   │  └─ Second iteration: arg = "World"  │
   │     └─ Output: "World"               │
   │                                      │
   │  Line: count++                       │
   │  └─ Increment static count (0 → 1)   │
   │                                      │
   │  Line: helper()                      │
   │  ├─ Push new frame for helper()      │
   │  ├─ Execute helper() bytecode        │
   │  │  └─ Output: "Helper called"       │
   │  └─ Pop helper() frame               │
   └──────────────────────────────────────┘

8. main() RETURNS
   ┌──────────────────────────────────────┐
   │  1. Pop main() frame from stack      │
   │  2. Main thread terminates           │
   │  3. JVM shutdown sequence starts     │
   │  4. Exit code 0 returned to OS       │
   └──────────────────────────────────────┘

FINAL OUTPUT:
Args: 2
Hello
World
Helper called
```

---

## Syntax Explanation

### Basic main() method:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Line-by-line:**
- `public` - JVM can access from outside
- `static` - No object creation needed
- `void` - Returns nothing
- `main` - Method name (fixed)
- `String[] args` - Command-line arguments

### Command-line arguments:

```java
public class ArgsDemo {
    public static void main(String[] args) {
        System.out.println("Number of arguments: " + args.length);
        
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

### Valid variations:

```java
// All these are VALID:

// 1. Standard
public static void main(String[] args) { }

// 2. Array syntax variation
public static void main(String args[]) { }

// 3. Varargs
public static void main(String... args) { }

// 4. Different parameter name
public static void main(String[] xyz) { }

// 5. With final
public final static void main(String[] args) { }

// 6. With synchronized
public static synchronized void main(String[] args) { }

// 7. With strictfp
public strictfp static void main(String[] args) { }

// 8. Order of modifiers (doesn't matter)
static public void main(String[] args) { }
```

### Invalid variations:

```java
// All these are INVALID:

// 1. Not public
private static void main(String[] args) { }  // ❌

// 2. Not static
public void main(String[] args) { }  // ❌

// 3. Wrong return type
public static int main(String[] args) { }  // ❌

// 4. Wrong name
public static void start(String[] args) { }  // ❌

// 5. Wrong parameter type
public static void main(int[] args) { }  // ❌

// 6. No parameters
public static void main() { }  // ❌
```

### Multiple main() methods (overloading):

```java
public class MultiMain {
    // This is the entry point (JVM calls this)
    public static void main(String[] args) {
        System.out.println("Main entry point");
        main(10);  // Call overloaded version
    }
    
    // Overloaded main (JVM doesn't call this)
    public static void main(int x) {
        System.out.println("Overloaded main: " + x);
    }
    
    // Another overloaded main
    public static void main(String arg) {
        System.out.println("Single string: " + arg);
    }
}
```

**Output:**
```
Main entry point
Overloaded main: 10
```

### Exit codes:

```java
public class ExitDemo {
    public static void main(String[] args) {
        if(args.length == 0) {
            System.err.println("Error: No arguments provided");
            System.exit(1);  // Exit with error code 1
        }
        
        System.out.println("Success!");
        // Normal return → exit code 0
    }
}
```

**Check exit code (Linux/Mac):**
```bash
$ java ExitDemo
Error: No arguments provided
$ echo $?
1

$ java ExitDemo Hello
Success!
$ echo $?
0
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         MEMORY DURING main() EXECUTION              │
└─────────────────────────────────────────────────────┘

CODE:
public class MemoryDemo {
    static int staticVar = 100;
    
    public static void main(String[] args) {
        int localVar = 10;
        String str = "Hello";
        MemoryDemo obj = new MemoryDemo();
    }
}

EXECUTION: $ java MemoryDemo arg1 arg2

MEMORY LAYOUT:

┌──────────────────────────────────────┐
│  METHOD AREA / METASPACE             │
│  ┌────────────────────────────────┐  │
│  │  MemoryDemo class metadata     │  │
│  │  ├─ Class structure            │  │
│  │  ├─ main() bytecode            │  │
│  │  └─ Field descriptors          │  │
│  ├────────────────────────────────┤  │
│  │  Static variables:             │  │
│  │  └─ staticVar = 100            │  │
│  └────────────────────────────────┘  │
│  [Loaded during class loading]       │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  HEAP                                │
│  ┌────────────────────────────────┐  │
│  │  String[] args array           │  │
│  │  ├─ args[0] = "arg1"           │  │
│  │  └─ args[1] = "arg2"           │  │
│  ├────────────────────────────────┤  │
│  │  String object "Hello"         │  │
│  │  └─ char[] {'H','e','l','l','o'}│ │
│  ├────────────────────────────────┤  │
│  │  MemoryDemo object             │  │
│  │  └─ Instance variables (if any)│  │
│  └────────────────────────────────┘  │
│  [Created during main() execution]   │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  STACK (main thread)                 │
│  ┌────────────────────────────────┐  │
│  │  Frame: main(args)             │  │
│  │  ├─ Local variables:           │  │
│  │  │  ├─ args → [ref to heap]    │  │
│  │  │  ├─ localVar = 10           │  │
│  │  │  ├─ str → [ref to heap]     │  │
│  │  │  └─ obj → [ref to heap]     │  │
│  │  ├─ Operand stack: (empty)     │  │
│  │  └─ Return address: JVM        │  │
│  └────────────────────────────────┘  │
│  [Created when main() called]        │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  PC REGISTER (main thread)           │
│  └─ Current instruction in main()    │
└──────────────────────────────────────┘

KEY POINTS:
├─ args array created in heap before main() call
├─ Local variables stored in stack frame
├─ Objects created in heap
├─ References stored in stack
└─ Static variables in method area
```

---

## Advantages

✅ **Standardized Entry Point**: Every Java program starts from main()  
✅ **No Object Needed**: Static method — JVM doesn't create object  
✅ **Command-line Input**: String[] args accepts runtime arguments  
✅ **Simple Signature**: Easy to remember and write  
✅ **Consistent**: Same across all Java applications  
✅ **Flexible**: Can call other methods, create objects  
✅ **Overloadable**: Can have multiple main() methods  
✅ **Exit Control**: Can control exit code via System.exit()  
✅ **Thread Creation**: Main thread automatically created  
✅ **Exception Handling**: Can throw exceptions to JVM  
✅ **Reflection Friendly**: JVM uses reflection to find main()  
✅ **IDE Support**: All IDEs recognize main() as entry point  

---

## Limitations

❌ **Fixed Signature**: Must follow exact signature — no flexibility  
❌ **Static Context**: Cannot access instance members directly  
❌ **No Return Value**: Cannot return value to JVM (use System.exit())  
❌ **String Arguments Only**: Command-line args always strings (need parsing)  
❌ **Single Entry Point**: Only one main() called by JVM (even if multiple exist)  
❌ **No Constructor Call**: JVM doesn't call constructor before main()  
❌ **Error Prone**: Easy to make signature mistakes  
❌ **Not Object-Oriented**: Static method breaks OOP principles  

---

## Edge Cases

🔸 **Missing main() method:**
```java
public class NoMain {
    public void start() {
        System.out.println("Start");
    }
}

// Run:
$ java NoMain
Error: Main method not found in class NoMain
```

🔸 **Wrong signature:**
```java
public class WrongMain {
    public void main(String[] args) {  // Not static!
        System.out.println("Wrong");
    }
}

// Run:
$ java WrongMain
Error: Main method is not static in class WrongMain
```

🔸 **Private main():**
```java
public class PrivateMain {
    private static void main(String[] args) {  // Not public!
        System.out.println("Private");
    }
}

// Run:
$ java PrivateMain
Error: Main method not public in class PrivateMain
```

🔸 **Multiple classes with main():**
```java
// File: Multi.java
class A {
    public static void main(String[] args) {
        System.out.println("A's main");
    }
}

class B {
    public static void main(String[] args) {
        System.out.println("B's main");
    }
}

// Run:
$ java A
A's main

$ java B
B's main
```

🔸 **Accessing args without checking:**
```java
public class ArgsError {
    public static void main(String[] args) {
        System.out.println(args[0]);  // ArrayIndexOutOfBoundsException if no args!
    }
}

// Solution:
public class ArgsSafe {
    public static void main(String[] args) {
        if(args.length > 0) {
            System.out.println(args[0]);
        } else {
            System.out.println("No arguments provided");
        }
    }
}
```

🔸 **Exception in main():**
```java
public class ExceptionMain {
    public static void main(String[] args) {
        int x = 10 / 0;  // ArithmeticException
    }
}

// Run:
$ java ExceptionMain
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at ExceptionMain.main(ExceptionMain.java:3)
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Wrong signature
```java
❌ public void main(String[] args) { }        // Not static
❌ public static void main(String args) { }   // Not array
❌ public static int main(String[] args) { }  // Not void
❌ public static void start(String[] args) { } // Wrong name

✅ public static void main(String[] args) { }  // Correct!
```

🚫 **Mistake 2**: Trying to access instance members
```java
public class Demo {
    int instanceVar = 10;
    
    public static void main(String[] args) {
        System.out.println(instanceVar);  // ❌ Error: non-static variable
    }
}

✅ Solution 1: Make variable static
static int instanceVar = 10;

✅ Solution 2: Create object
Demo obj = new Demo();
System.out.println(obj.instanceVar);
```

🚫 **Mistake 3**: Not checking args length
```java
❌ public static void main(String[] args) {
    String name = args[0];  // Crash if no arguments!
}

✅ public static void main(String[] args) {
    if(args.length > 0) {
        String name = args[0];
    }
}
```

🚫 **Mistake 4**: Thinking main() must be in public class
```java
// File: Demo.java
class Helper {  // Not public
    public static void main(String[] args) {
        System.out.println("Helper main");
    }
}

✅ This works! main() can be in non-public class
$ java Helper
Helper main
```

🚫 **Mistake 5**: Confusing main() with constructor
```java
❌ "main() is called when object is created"
✅ main() is entry point, called by JVM
   Constructor is called when object is created with 'new'
```

---

## Important Interview Points

💡 **Q: Why is main() method public?**  
**A**: main() must be public because JVM needs to access it from outside the class. JVM is an external entity that loads and executes the class. If main() were private, protected, or default, JVM would not have access and would throw IllegalAccessError. Public access modifier (0x0001 flag) allows JVM ClassLoader to invoke the method via reflection.

💡 **Q: Why is main() method static?**  
**A**: main() is static because JVM needs to call it without creating an object instance. Reasons:
1. JVM doesn't know how to create object (constructor might need parameters)
2. Avoids overhead of object creation before program starts
3. Static method belongs to class, not instance
4. JVM can call as: ClassName.main(args) without 'new'
5. Enables execution without constructor dependency

💡 **Q: Why is main() method void?**  
**A**: main() returns void because JVM doesn't expect a return value. Program exit code is set via System.exit(int) or Runtime.exit(int), not by returning from main(). Normal return from main() results in exit code 0 (success). If main() returned int, JVM would ignore it anyway. The void return type makes this explicit.

💡 **Q: Can we overload main() method?**  
**A**: Yes, main() can be overloaded. You can have multiple main() methods with different parameters. However, JVM only calls the standard signature: `public static void main(String[] args)`. Other main() methods are regular methods that can be called from code.
```java
public static void main(String[] args) { }  // JVM calls this
public static void main(int x) { }          // Regular method
public static void main(String s) { }       // Regular method
```

💡 **Q: Can we change the signature of main() method?**  
**A**: No, the signature must be exact: `public static void main(String[] args)`. Minor variations allowed:
- Parameter name: `String[] xyz` (any name)
- Array syntax: `String args[]` or `String... args`
- Modifier order: `static public void main`
- Additional modifiers: `final`, `synchronized`, `strictfp`
But public, static, void, main, and String[] are mandatory. Any other change → "Main method not found" error.

💡 **Q: What is String[] args in main() method?**  
**A**: String[] args is an array that holds command-line arguments passed when running the program. 
- args[0] is first argument (not program name, unlike C/C++)
- args.length gives number of arguments
- Empty array if no arguments passed
- All arguments are strings (need parsing for numbers)
Example: `java MyProgram Hello World` → args[0]="Hello", args[1]="World"

💡 **Q: Can main() method throw exceptions?**  
**A**: Yes, main() can throw exceptions. If uncaught exception occurs in main(), it propagates to JVM, which prints stack trace and terminates program with non-zero exit code.
```java
public static void main(String[] args) throws Exception {
    throw new Exception("Error!");
}
// JVM catches, prints stack trace, exits with error code
```

💡 **Q: Can we have multiple main() methods in different classes?**  
**A**: Yes, each class can have its own main() method. When running, specify which class to execute:
```bash
$ java ClassA  # Runs ClassA's main()
$ java ClassB  # Runs ClassB's main()
```
Useful for testing individual classes or having multiple entry points in same project.

💡 **Q: What happens if main() method is not found?**  
**A**: JVM throws error: "Error: Main method not found in class ClassName". JVM searches for exact signature using reflection: `getMethod("main", String[].class)`. If not found or signature doesn't match, program fails to start. Common causes: wrong signature, private/non-static, wrong name, missing method.

---

## Short Recap

main() method Java program ka entry point hai with mandatory signature: `public static void main(String[] args)`. Har keyword ka reason: public (JVM access), static (no object needed), void (no return to JVM), main (fixed name JVM searches), String[] args (command-line arguments). JVM reflection use karke main() dhundta hai, verify karta hai signature, phir invoke karta hai. Overloading allowed but JVM sirf standard signature call karta hai. Signature galat ho toh "Main method not found" error. Interview ke liye yaad rakho: why public (JVM access), why static (no object), why void (no return), args array usage, overloading possible, aur signature variations (String args[], String... args valid).

---

**Previous**: [← 22 - Program Execution Flow](./22-program-execution-flow.md)  
**Next**: [24 - Why main() is static →](./24-why-main-static.md)
