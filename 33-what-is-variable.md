# 33) WHAT IS VARIABLE IN JAVA

## Concept Introduction

Variable ek named memory location hai jo value store karta hai — jaise ek box jisme tum kuch rakh sakte ho. Jab tum `int age = 25;` likhte ho, toh `age` ek variable hai jo 25 value store kar raha hai. Variable ka naam (identifier) hai, type hai (int, String, etc.), aur value hai. Variables program execution ke dauran change ho sakte hain (except final variables). Variable declaration memory allocate karta hai, initialization value assign karta hai. Variables ka scope (visibility) aur lifetime (existence duration) hota hai. Variables Java programming ka foundation hain!

---

## Why This Concept Exists

**Problem:**
- Data ko memory mein kaise store karein?
- Values ko kaise refer karein?
- Data ko kaise modify karein?
- Different types of data kaise handle karein?
- Memory management kaise karein?

**Solution (Variables):**
- Named memory locations
- Type-safe storage
- Easy value access and modification
- Scope-based visibility
- Automatic memory management
- Reusable data containers

---

## Definitions

### 🔹 Very Simple Definition
Variable ek named memory location hai jo value store karta hai — jaise ek labeled box.

### 🔹 College Exam Definition
A variable is a named memory location that stores a value of a specific data type. Variables have three components: (1) Name - identifier following naming rules, (2) Type - data type (int, double, String, etc.), (3) Value - data stored in memory. Variable declaration syntax: `type name;` allocates memory. Variable initialization syntax: `type name = value;` assigns initial value. Variables can be modified (except final variables). Java is strongly-typed language, so variable type must be declared. Variables have scope (where accessible) and lifetime (how long they exist).

### 🔹 Viva Definition
A variable is a symbolic name associated with a memory location storing a value of declared type. Components: (1) **Name (Identifier)** - follows naming rules (start with letter/underscore/$, case-sensitive, cannot be keyword), (2) **Type** - data type determining size and operations (primitive: int, double, boolean; reference: String, Object, arrays), (3) **Value** - data stored (primitives store actual value, references store memory address), (4) **Scope** - visibility region (local, instance, static), (5) **Lifetime** - existence duration (method execution, object lifetime, class lifetime). Operations: Declaration (`int x;` - allocates memory), Initialization (`x = 10;` - assigns value), Declaration + Initialization (`int x = 10;` - combined), Reassignment (`x = 20;` - changes value). Modifiers: final (constant, cannot reassign), static (class-level), access modifiers (public, private, protected). Memory: Primitives store
A variable is a named memory location that stores a value of a specific data type. Variables have three components: (1) Name - identifier following naming rules, (2) Type - data type (int, double, String, etc.), (3) Value - data stored in memory. Variable declaration syntax: `type name;` allocates memory. Variable initialization syntax: `type name = value;` assigns initial value. Variables can be modified (except final variables). Java is strongly-typed language, so variable type must be declared. Variables have scope (where accessible) and lifetime (how long they exist).

### 🔹 Viva Definition
A variable is a symbolic name associated with a memory location storing a value of declared type. Components: (1) **Name (Identifier)** - follows naming rules (start with letter/underscore/$, case-sensitive, cannot be keyword), (2) **Type** - data type determining size and operations (primitive: int, double, boolean; reference: String, Object, arrays), (3) **Value** - data stored (primitives store actual value, references store memory address), (4) **Scope** - visibility region (local, instance, static), (5) **Lifetime** - existence duration (method execution, object lifetime, class lifetime). Operations: Declaration (`int x;` - allocates memory), Initialization (`x = 10;` - assigns value), Declaration + Initialization (`int x = 10;` - combined), Reassignment (`x = 20;` - changes value). Modifiers: final (constant, cannot reassign), static (class-level), access modifiers (public, private, protected). Memory: Primitives in stack/heap, References point to objects in heap.

### 🔹 Interview Definition
A variable is a container for storing data values with a declared type in Java's strongly-typed system. Characteristics: (1) **Type** - Must declare type (int, double, String, etc.), Type determines: size (int: 4 bytes, double: 8 bytes), range (int: -2³¹ to 2³¹-1), operations (arithmetic for numbers, concatenation for strings), Type cannot change after declaration (statically typed), (2) **Name** - Identifier following rules: start with letter/underscore/$, subsequent can be letters/digits/underscore/$, case-sensitive (age ≠ Age), cannot be keywords, descriptive names preferred (customerCount not x), (3) **Value** - Primitives: actual value stored (int x = 10 stores 10), References: memory address stored (String s = "Hi" stores address), Can be uninitialized (local variables must initialize before use), Default values for instance variables (0 for numbers, false for boolean, null for references), (4) **Scope** - Local variables: declared in methods, visible only in method, Instance variables: declared in class, visible to all instance methods, Static variables: declared with static, shared across all instances, (5) **Lifetime** - Local: exists during method execution, Instance: exists as long as object exists, Static: exists as long as class is loaded. Variable categories: Local (method/block scope), Instance (object-level), Static (class-level), Parameters (method arguments). Modifiers: final (constant), static (class-level), volatile (thread-safe), transient (not serialized). Memory allocation: Local primitives → stack, Instance variables → heap (with object), Static variables → method area.

### 🔹 Technical Definition
A variable is a symbolic reference to a memory location with associated type metadata in Java's type system. Implementation: (1) **Type system** - Static typing: type checked at compile-time, Type descriptor: stored in bytecode (I for int, D for double, Ljava/lang/String; for String), Type safety: prevents type mismatches, Generic types: parameterized types (List<String>), (2) **Memory representation** - Primitives: Direct value storage, int (4 bytes), long (8 bytes), double (8 bytes), boolean (1 byte/1 bit), References: Memory address (32-bit or 64-bit pointer), points to object in heap, null represents no object (0x0), (3) **Symbol table** - Compiler maintains symbol table: variable name → type, scope, memory location, Used for: type checking, scope resolution, code generation, (4) **Bytecode representation** - Local variables: stored in local variable array, accessed by index (iload_0, iload_1, aload_0), Instance variables: accessed via object reference (getfield, putfield), Static variables: accessed directly (getstatic, putstatic), (5) **Runtime representation** - Stack frame: local variables stored in frame, Heap: instance variables stored with object, Method area: static variables stored in class metadata. Variable operations bytecode: Declaration: no bytecode (compile-time only), Initialization: iconst/bipush/ldc + istore, Access: iload/aload, Modification: istore/astore. Optimization: Register allocation, Dead code elimination, Constant folding, Escape analysis.

### 🔹 One-line Crisp Definition
Variable = Named memory location + Declared type + Stored value + Scope + Lifetime

---

## DIAGRAM: Variable Components

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VARIABLE COMPONENTS                                      │
└─────────────────────────────────────────────────────────────────────────────┘

VARIABLE: int age = 25;

┌───────────────────────────────────────────────────────────────────────────┐
│  1. NAME (Identifier)                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  age                                                                 │  │
│  │  ├─ Symbolic name                                                    │  │
│  │  ├─ Follows naming rules                                            │  │
│  │  ├─ Case-sensitive                                                   │  │
│  │  └─ Used to access value                                            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. TYPE (Data Type)                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  int                                                                 │  │
│  │  ├─ Determines size (4 bytes)                                       │  │
│  │  ├─ Determines range (-2³¹ to 2³¹-1)                                │  │
│  │  ├─ Determines operations (arithmetic)                              │  │
│  │  └─ Cannot change after declaration                                 │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. VALUE (Data)                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  25                                                                  │  │
│  │  ├─ Actual data stored                                              │  │
│  │  ├─ Can be changed (reassigned)                                     │  │
│  │  ├─ Must match type                                                 │  │
│  │  └─ Stored in memory                                                │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  4. MEMORY LOCATION                                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Address: 0x1000 (example)                                          │  │
│  │  ├─ Physical memory address                                         │  │
│  │  ├─ Allocated at declaration                                        │  │
│  │  ├─ Size: 4 bytes (for int)                                         │  │
│  │  └─ Accessed via variable name                                      │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

COMPLETE PICTURE:
┌──────────────────────────────────────┐
│  NAME: age                           │
│  TYPE: int                           │
│  VALUE: 25                           │
│  MEMORY: 0x1000 (4 bytes)            │
│  ┌────────────────────────────────┐  │
│  │  0x1000: 00000000 00000000     │  │
│  │  0x1002: 00000000 00011001     │  │
│  │          (binary for 25)       │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

---

## DIAGRAM: Variable Declaration vs Initialization

```
┌─────────────────────────────────────────────────────┐
│         DECLARATION VS INITIALIZATION               │
└─────────────────────────────────────────────────────┘

1. DECLARATION ONLY:
┌──────────────────────────────────────┐
│  int age;                            │
│  ├─ Allocates memory (4 bytes)       │
│  ├─ No value assigned                │
│  ├─ Contains garbage (local var)     │
│  └─ Must initialize before use       │
└──────────────────────────────────────┘

MEMORY:
┌──────────────────────────────────────┐
│  age: [????]  (uninitialized)        │
└──────────────────────────────────────┘

2. INITIALIZATION:
┌──────────────────────────────────────┐
│  age = 25;                           │
│  ├─ Assigns value to variable        │
│  ├─ Variable must be declared first  │
│  └─ Now ready to use                 │
└──────────────────────────────────────┘

MEMORY:
┌──────────────────────────────────────┐
│  age: [25]  (initialized)            │
└──────────────────────────────────────┘

3. DECLARATION + INITIALIZATION:
┌──────────────────────────────────────┐
│  int age = 25;                       │
│  ├─ Allocates memory                 │
│  ├─ Assigns value immediately        │
│  └─ Ready to use                     │
└──────────────────────────────────────┘

MEMORY:
┌──────────────────────────────────────┐
│  age: [25]  (declared & initialized) │
└──────────────────────────────────────┘

4. REASSIGNMENT:
┌──────────────────────────────────────┐
│  age = 30;                           │
│  ├─ Changes existing value           │
│  ├─ No new memory allocation         │
│  └─ Same variable, new value         │
└──────────────────────────────────────┘

MEMORY:
┌──────────────────────────────────────┐
│  age: [30]  (reassigned)             │
│       (25 is overwritten)            │
└──────────────────────────────────────┘
```

---

## Real-life Hinglish Example

### Example 1: Labeled Boxes

**Variable = Labeled Box:**
```
Storage Room (Memory):
├─ Box labeled "Age" (variable name)
├─ Box type: Number box (data type)
├─ Contents: 25 (value)
└─ You can change contents later

Similarly Java:
├─ int age = 25;
├─ "age" is label (name)
├─ "int" is box type (type)
├─ 25 is contents (value)
└─ age = 30; (change contents)
```

### Example 2: Bank Locker

**Variable = Bank Locker:**
```
Bank (Program):
├─ Locker number: 123 (variable name)
├─ Locker type: Gold locker (data type)
├─ Contents: Jewelry (value)
├─ You can access with locker number
└─ You can change contents

Java equivalent:
├─ String locker123 = "Jewelry";
├─ "locker123" is locker number (name)
├─ "String" is locker type (type)
├─ "Jewelry" is contents (value)
└─ locker123 = "Documents"; (change)
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         VARIABLE IN MEMORY                          │
└─────────────────────────────────────────────────────┘

SOURCE CODE:
int x = 10;
String s = "Hello";

COMPILATION:
┌──────────────────────────────────────┐
│  Symbol Table:                       │
│  ├─ x: type=int, scope=local         │
│  └─ s: type=String, scope=local      │
└──────────────────────────────────────┘

BYTECODE:
0: bipush 10        // Push 10
2: istore_1         // Store in local var 1 (x)
3: ldc #2           // Load constant "Hello"
5: astore_2         // Store in local var 2 (s)

RUNTIME MEMORY:
┌──────────────────────────────────────┐
│  STACK (Local Variables):           │
│  ├─ x = 10 (primitive value)         │
│  └─ s = 0x2000 (reference to heap)   │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  HEAP (Objects):                     │
│  └─ 0x2000: "Hello" (String object)  │
└──────────────────────────────────────┘

PRIMITIVE vs REFERENCE:
┌──────────────────────────────────────┐
│  Primitive (int x = 10):             │
│  STACK: x → [10]                     │
│  (value stored directly)             │
├──────────────────────────────────────┤
│  Reference (String s = "Hello"):     │
│  STACK: s → [0x2000]                 │
│  HEAP: 0x2000 → "Hello"              │
│  (address stored, object in heap)    │
└──────────────────────────────────────┘
```

---

## Syntax Explanation

### Variable declaration and initialization:

```java
// ============================================
// 1. DECLARATION ONLY
// ============================================

int age;              // Declare integer variable
double salary;        // Declare double variable
String name;          // Declare String variable
boolean isActive;     // Declare boolean variable

// Must initialize before use
// System.out.println(age);  // ❌ Error: variable not initialized


// ============================================
// 2. INITIALIZATION
// ============================================

age = 25;             // Assign value to age
salary = 50000.50;    // Assign value to salary
name = "John";        // Assign value to name
isActive = true;      // Assign value to isActive


// ============================================
// 3. DECLARATION + INITIALIZATION
// ============================================

int age = 25;                    // Declare and initialize
double salary = 50000.50;        // Combined
String name = "John";            // In one statement
boolean isActive = true;         // Preferred way


// ============================================
// 4. MULTIPLE VARIABLES
// ============================================

// Same type, separate statements (preferred)
int x = 10;
int y = 20;
int z = 30;

// Same type, one statement (allowed but not preferred)
int a = 1, b = 2, c = 3;

// Different types (must be separate)
int count = 10;
String message = "Hello";
double price = 99.99;


// ============================================
// 5. REASSIGNMENT
// ============================================

int x = 10;           // Initial value
x = 20;               // Reassign new value
x = x + 5;            // Use and reassign
x++;                  // Increment


// ============================================
// 6. FINAL VARIABLES (Constants)
// ============================================

final int MAX_SIZE = 100;        // Cannot change
// MAX_SIZE = 200;                // ❌ Error: cannot reassign final

final double PI = 3.14159;
final String APP_NAME = "MyApp";


// ============================================
// 7. DIFFERENT VARIABLE TYPES
// ============================================

// Local variable (in method)
public void method() {
    int localVar = 10;  // Local to this method
}

// Instance variable (in class)
public class Demo {
    int instanceVar = 20;  // Belongs to object
}

// Static variable (in class)
public class Demo {
    static int staticVar = 30;  // Shared across all objects
}

// Parameter variable (method argument)
public void method(int paramVar) {  // Parameter
    System.out.println(paramVar);
}
```

### Type examples:

```java
// Primitive types
byte b = 127;
short s = 32000;
int i = 100000;
long l = 10000000000L;
float f = 3.14f;
double d = 3.14159;
char c = 'A';
boolean flag = true;

// Reference types
String str = "Hello";
Object obj = new Object();
int[] arr = {1, 2, 3};
List<String> list = new ArrayList<>();
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         VARIABLE MEMORY ALLOCATION                  │
└─────────────────────────────────────────────────────┘

CODE:
public class Demo {
    static int staticVar = 10;      // Static variable
    int instanceVar = 20;            // Instance variable
    
    public void method() {
        int localVar = 30;           // Local variable
    }
}

MEMORY LAYOUT:
┌──────────────────────────────────────┐
│  METHOD AREA (Class metadata):       │
│  ├─ Demo class information           │
│  └─ staticVar = 10                   │
│     (shared across all instances)    │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  HEAP (Objects):                     │
│  Demo object 1:                      │
│  └─ instanceVar = 20                 │
│                                      │
│  Demo object 2:                      │
│  └─ instanceVar = 20                 │
│     (each object has own copy)       │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  STACK (Method execution):           │
│  method() frame:                     │
│  └─ localVar = 30                    │
│     (exists only during method call) │
└──────────────────────────────────────┘

LIFETIME:
├─ staticVar: Class load → Class unload
├─ instanceVar: Object creation → Garbage collection
└─ localVar: Method start → Method end
```

---

## Advantages

✅ **Named Storage**: Easy to reference values  
✅ **Type Safety**: Prevents type errors  
✅ **Reusability**: Use same variable multiple times  
✅ **Readability**: Descriptive names improve code clarity  
✅ **Modifiability**: Can change values during execution  
✅ **Scope Control**: Limit visibility as needed  
✅ **Memory Management**: Automatic allocation/deallocation  

---

## Limitations

❌ **Type Restriction**: Cannot change type after declaration  
❌ **Scope Limitation**: Cannot access outside scope  
❌ **Naming Conflicts**: Cannot have duplicate names in same scope  
❌ **Initialization Required**: Local variables must initialize before use  

---

## Edge Cases

🔸 **Uninitialized local variables:**
```java
int x;
System.out.println(x);  // ❌ Error: variable not initialized

// Instance variables have default values
class Demo {
    int x;  // Default: 0
    boolean flag;  // Default: false
    String s;  // Default: null
}
```

🔸 **Variable shadowing:**
```java
class Demo {
    int x = 10;  // Instance variable
    
    void method() {
        int x = 20;  // Local variable shadows instance variable
        System.out.println(x);  // Prints 20 (local)
        System.out.println(this.x);  // Prints 10 (instance)
    }
}
```

🔸 **Final variable initialization:**
```java
final int x;  // Declared
x = 10;       // ✅ OK: first assignment
x = 20;       // ❌ Error: cannot reassign final

final int y = 10;  // ✅ OK: initialize at declaration
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Using uninitialized variable
```java
❌ int x;
   System.out.println(x);  // Error: not initialized

✅ int x = 0;
   System.out.println(x);  // OK
```

🚫 **Mistake 2**: Type mismatch
```java
❌ int x = "Hello";  // Error: String cannot be assigned to int
✅ String x = "Hello";

❌ int x = 3.14;  // Error: double cannot be assigned to int
✅ double x = 3.14;
```

🚫 **Mistake 3**: Duplicate variable names
```java
❌ int x = 10;
   int x = 20;  // Error: duplicate variable

✅ int x = 10;
   x = 20;  // Reassignment, not redeclaration
```

🚫 **Mistake 4**: Accessing out of scope
```java
❌ if (true) {
       int x = 10;
   }
   System.out.println(x);  // Error: x out of scope

✅ int x;
   if (true) {
       x = 10;
   }
   System.out.println(x);  // OK
```

---

## Important Interview Points

💡 **Q: What is a variable in Java?**  
**A**: A variable is a named memory location that stores a value of a specific data type. Components: (1) Name - identifier following naming rules, (2) Type - data type (int, String, etc.), (3) Value - data stored. Variables can be declared (`int x;`), initialized (`x = 10;`), or both (`int x = 10;`). Java is strongly-typed, so type must be declared and cannot change.

💡 **Q: What is the difference between declaration and initialization?**  
**A**: 
- **Declaration**: Allocates memory, no value assigned (`int x;`)
- **Initialization**: Assigns value to variable (`x = 10;`)
- **Combined**: Declaration + initialization (`int x = 10;`)
Local variables must be initialized before use, instance variables have default values.

💡 **Q: What are the types of variables in Java?**  
**A**: Three types:
- **Local variables**: Declared in methods/blocks, scope limited to method, must initialize before use, stored in stack
- **Instance variables**: Declared in class, belong to object, have default values, stored in heap with object
- **Static variables**: Declared with static keyword, shared across all instances, stored in method area
Example:
```java
class Demo {
    static int staticVar;    // Static
    int instanceVar;         // Instance
    void method() {
        int localVar = 10;   // Local
    }
}
```

💡 **Q: What are default values for variables?**  
**A**: Instance and static variables have default values:
- Numbers (byte, short, int, long, float, double): 0
- boolean: false
- char: '\u0000' (null character)
- Reference types (String, Object, arrays): null
Local variables have NO default values, must initialize before use.

💡 **Q: What is variable scope?**  
**A**: Scope is the region where variable is accessible:
- **Local scope**: Variable declared in method/block, accessible only in that method/block
- **Instance scope**: Variable declared in class, accessible to all instance methods
- **Static scope**: Variable declared with static, accessible to all methods (static and instance)
Example:
```java
class Demo {
    int instanceVar;  // Instance scope
    static int staticVar;  // Static scope
    
    void method() {
        int localVar = 10;  // Local scope
    }
}
```

💡 **Q: What is the difference between primitive and reference variables?**  
**A**: 
- **Primitive**: Stores actual value (int x = 10 stores 10), stored in stack (local) or heap (instance), 8 primitive types
- **Reference**: Stores memory address (String s = "Hi" stores address), points to object in heap, all non-primitive types
Example:
```java
int x = 10;        // Primitive: stores 10
String s = "Hi";   // Reference: stores address of "Hi"
```

💡 **Q: Can we change variable type after declaration?**  
**A**: No, Java is statically typed. Variable type is fixed at declaration and cannot change. Example:
```java
int x = 10;
x = "Hello";  // ❌ Error: cannot assign String to int
```
To store different type, declare new variable or use Object type (loses type safety).

💡 **Q: What is a final variable?**  
**A**: Final variable is a constant whose value cannot be changed after initialization. Declared with `final` keyword. Must initialize at declaration or in constructor. Example:
```java
final int MAX_SIZE = 100;
MAX_SIZE = 200;  // ❌ Error: cannot reassign final
```
Convention: final variables named in ALL_CAPS.

---

## Short Recap

Variable ek named memory location hai jo value store karta hai. Components: Name (identifier), Type (data type), Value (stored data). Operations: Declaration (`int x;`), Initialization (`x = 10;`), Combined (`int x = 10;`), Reassignment (`x = 20;`). Types: Local (method scope, must initialize), Instance (object-level, default values), Static (class-level, shared). Memory: Primitives store actual value, References store address. Scope: Local (method), Instance (object), Static (class). Lifetime: Local (method execution), Instance (object lifetime), Static (class lifetime). Final variables cannot be reassigned. Default values: 0 for numbers, false for boolean, null for references (only instance/static). Interview ke liye yaad rakho: declaration vs initialization, variable types (local/instance/static), primitive vs reference, scope, lifetime, default values, aur final variables.

---

**Previous**: [← 32 - Coding Conventions](./32-coding-conventions.md)  
**Next**: [34 - Declaration vs Initialization →](./34-declaration-vs-initialization.md)
