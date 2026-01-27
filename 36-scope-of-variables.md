# 36) SCOPE OF VARIABLES IN JAVA

## Concept Introduction

Scope variable ki visibility aur accessibility define karta hai — yeh batata hai ki variable kahan accessible hai aur kahan nahi. Jab tum method ke andar `int x = 10;` likhte ho, toh x ka scope sirf us method tak limited hai. Class level pe declared variable ka scope poore class mein hota hai. Scope curly braces `{}` se define hota hai: block scope, method scope, class scope. Variable apne scope ke bahar accessible nahi hota. Java mein four types ke scopes hain: Block scope (innermost), Method scope, Class scope (instance variables), aur Static scope (static variables). Scope samajhna important hai naming conflicts avoid karne aur proper variable access ke liye!

---

## Why This Concept Exists

**Problem:**
- Variable kahan accessible hai?
- Naming conflicts kaise avoid karein?
- Memory kab release honi chahiye?
- Variable lifetime kaise control karein?
- Encapsulation kaise achieve karein?

**Solution (Variable Scope):**
- Clear visibility boundaries
- Automatic memory management
- Namespace isolation
- Controlled access
- Encapsulation support
- Compile-time error detection

---

## Definitions

### 🔹 Very Simple Definition
Scope variable ki visibility area hai — yeh define karta hai ki variable kahan accessible hai.

### 🔹 College Exam Definition
Scope is the region of program where a variable is accessible. Java has four types of scopes: (1) **Block Scope** - Variables declared inside block (between {}), Accessible only within that block, Includes if, for, while, try blocks, Example: `if (true) { int x = 10; }` - x accessible only inside if block, (2) **Method Scope** - Variables declared in method (parameters and local variables), Accessible throughout method, Not accessible outside method, Example: `void method() { int x = 10; }` - x accessible in entire method, (3) **Class Scope (Instance)** - Instance variables declared in class, Accessible to all instance methods, Accessed via object reference, Example: `class Demo { int x; }` - x accessible in all instance methods, (4) **Static Scope** - Static variables declared with static keyword, Accessible to all methods (static and instance), Accessed via class name, Example: `class Demo { static int x; }` - x accessible everywhere in class. Scope determined by declaration location and curly braces. Inner scope can access outer scope variables, but not vice versa. Variable exists only within its scope.

### 🔹 Viva Definition
Scope defines lexical visibility region where variable can be referenced. Types: (1) **Block Scope** - Lexical scope: from declaration to closing brace, Nested blocks: inner can access outer, outer cannot access inner, Common blocks: if, else, for, while, do-while, try, catch, finally, synchronized, Lifetime: block execution duration, Example: `{ int x = 10; }` - x dies at closing brace, (2) **Method Scope** - Includes: parameters, local variables, Visibility: entire method body, Parameters: accessible from method start, Local variables: accessible from declaration point, Shadowing: local can shadow instance variable, Example: `void method(int param) { int local = 10; }`, (3) **Class Scope (Instance)** - Instance variables: accessible to all instance methods, Access modifiers: public, private, protected, default, Visibility: depends on access modifier, this keyword: access instance variables, Shadowing: method parameters can shadow instance variables, Example: `class Demo { private int x; }`, (4) **Static Scope** - Static variables: accessible to all methods, Class-level: shared across instances, Access: via class name or object reference, Visibility: depends on access modifier, Example: `class Demo { static int count; }`. Scope rules: Inner scope can access outer scope, Outer scope cannot access inner scope, Same-level scopes are independent, Variable must be in scope to be accessible.

### 🔹 Interview Definition
Scope is compile-time concept determining variable visibility and accessibility based on declaration location and lexical structure. Categories: (1) Block Scope - Lexical scoping: variable visible from declaration to block end, Nested scoping: inner blocks inherit outer scope, Block types: statement blocks (if/else/for/while), method blocks, class blocks, initializer blocks, Scope chain: inner → outer lookup, Variable lifetime: stack frame duration, Compiler tracking: symbol table maintains scope information, Example: for (int i = 0; i < 10; i++) { int j = i * 2; } - i scope: for statement, j scope: for body, (2) Method Scope - Parameters: scope = entire method, Local variables: scope = declaration point to method end, Stack allocation: local variable array in frame, Access: direct name reference (no this needed), Shadowing rules: local shadows instance (use this.var for instance), Cannot redeclare: same name in same scope causes error, Example: void method(int param) { int local = param * 2; }, (3) Class Scope - Instance variables: scope = all instance methods, Access modifiers: public (everywhere), protected (package + subclasses), default (package), private (class only), this reference: access current object's variables, Inheritance: subclass inherits superclass scope, Encapsulation: private limits scope to class, Example: class Demo { private int x; public int getX() { return x; } }, (4) Static Scope - Static variables: scope = all methods (static + instance), Class-level: one copy per class, Access: ClassName.var or this.var (not recommended), Initialization: class loading time, Thread visibility: shared across threads, Example: class Counter { static int count = 0; }. Scope resolution: Compiler resolves variable references using scope rules, Nearest scope: if multiple scopes have same name, nearest wins, Qualified access: this.var, super.var, ClassName.var disambiguate.

### 🔹 Technical Definition
Scope is lexical region in source code where variable binding is valid, implemented via symbol table and scope stack during compilation. Compiler implementation: (1) Scope stack: push scope on block entry, pop on block exit, (2) Symbol table: hierarchical structure (block → method → class → package), (3) Name resolution: search from innermost to outermost scope, (4) Scope checking: verify variable in scope before use, (5) Error detection: undefined variable, duplicate declaration, access violation. Bytecode representation: Local variables: indexed in local variable array (scope implicit in bytecode structure), Instance variables: accessed via getfield/putfield (scope checked at compile-time), Static variables: accessed via getstatic/putstatic (scope checked at compile-time). JVM verification: Bytecode verifier ensures variables accessed only in valid scope, Type safety: prevents accessing out-of-scope variables, Stack map frames: track variable types at each program point. Optimization: Dead code elimination: unused variables removed, Register allocation: scope information guides register assignment, Escape analysis: scope determines stack vs heap allocation.

### 🔹 One-line Crisp Definition
Scope = Variable visibility region + Accessibility rules + Lexical boundaries (curly braces)

---

## DIAGRAM: Four Types of Scopes

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VARIABLE SCOPES IN JAVA                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  1. BLOCK SCOPE                                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  if (condition) {                                                    │  │
│  │      int x = 10;  // Block scope                                    │  │
│  │      System.out.println(x);  // ✅ OK (inside block)                │  │
│  │  }                                                                   │  │
│  │  // System.out.println(x);  // ❌ Error (outside block)             │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Scope: Inside {} only                                           │  │
│  │  ├─ Lifetime: Block execution                                       │  │
│  │  ├─ Access: Within block only                                       │  │
│  │  └─ Dies: At closing brace                                          │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  2. METHOD SCOPE                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  public void method(int param) {  // param: method scope            │  │
│  │      int local = 10;  // local: method scope                        │  │
│  │                                                                      │  │
│  │      if (true) {                                                     │  │
│  │          System.out.println(param);  // ✅ OK                       │  │
│  │          System.out.println(local);  // ✅ OK                       │  │
│  │      }                                                               │  │
│  │  }                                                                   │  │
│  │  // param and local not accessible here                             │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Scope: Entire method                                            │  │
│  │  ├─ Lifetime: Method execution                                      │  │
│  │  ├─ Access: Throughout method                                       │  │
│  │  └─ Dies: At method end                                             │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  3. CLASS SCOPE (Instance Variables)                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  public class Demo {                                                │  │
│  │      int instanceVar = 10;  // Class scope                          │  │
│  │                                                                      │  │
│  │      public void method1() {                                        │  │
│  │          System.out.println(instanceVar);  // ✅ OK                 │  │
│  │      }                                                               │  │
│  │                                                                      │  │
│  │      public void method2() {                                        │  │
│  │          System.out.println(instanceVar);  // ✅ OK                 │  │
│  │      }                                                               │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Scope: All instance methods                                     │  │
│  │  ├─ Lifetime: Object lifetime                                       │  │
│  │  ├─ Access: Via object reference                                    │  │
│  │  └─ Dies: When object garbage collected                             │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  4. STATIC SCOPE                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  public class Demo {                                                │  │
│  │      static int staticVar = 10;  // Static scope                    │  │
│  │                                                                      │  │
│  │      public void instanceMethod() {                                 │  │
│  │          System.out.println(staticVar);  // ✅ OK                   │  │
│  │      }                                                               │  │
│  │                                                                      │  │
│  │      public static void staticMethod() {                            │  │
│  │          System.out.println(staticVar);  // ✅ OK                   │  │
│  │      }                                                               │  │
│  │  }                                                                   │  │
│  │                                                                      │  │
│  │  Characteristics:                                                    │  │
│  │  ├─ Scope: All methods (static + instance)                          │  │
│  │  ├─ Lifetime: Class lifetime                                        │  │
│  │  ├─ Access: Via class name                                          │  │
│  │  └─ Dies: When class unloaded                                       │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Nested Scopes

```
┌─────────────────────────────────────────────────────┐
│         NESTED SCOPE EXAMPLE                        │
└─────────────────────────────────────────────────────┘

public class Demo {
    int classVar = 1;  // Class scope
    
    public void method() {
        int methodVar = 2;  // Method scope
        
        if (true) {
            int blockVar = 3;  // Block scope
            
            // All accessible here:
            System.out.println(classVar);   // ✅ 1
            System.out.println(methodVar);  // ✅ 2
            System.out.println(blockVar);   // ✅ 3
        }
        
        // Only class and method scope accessible:
        System.out.println(classVar);   // ✅ 1
        System.out.println(methodVar);  // ✅ 2
        // System.out.println(blockVar);  // ❌ Error!
    }
    
    public void anotherMethod() {
        // Only class scope accessible:
        System.out.println(classVar);   // ✅ 1
        // System.out.println(methodVar);  // ❌ Error!
        // System.out.println(blockVar);   // ❌ Error!
    }
}

SCOPE HIERARCHY:
┌──────────────────────────────────────┐
│  Class Scope (classVar)              │
│  ├─ Accessible: All methods          │
│  │                                   │
│  └─ Method Scope (methodVar)         │
│     ├─ Accessible: Entire method     │
│     │                                │
│     └─ Block Scope (blockVar)        │
│        └─ Accessible: Inside block   │
└──────────────────────────────────────┘

RULE: Inner can access outer, outer cannot access inner
```

---

## Real-life Hinglish Example

### Example 1: Building Access Levels

**Scope = Building Access:**
```
Building (Java Class):
├─ Public area (class scope)
│  ├─ Lobby, reception
│  └─ Everyone can access
│
├─ Office floor (method scope)
│  ├─ Employees can access
│  └─ Visitors need permission
│
└─ Private cabin (block scope)
   ├─ Only cabin owner can access
   └─ Most restricted

Similarly Java:
class Building {
    int lobby;  // Class scope (everyone)
    
    void office() {
        int desk;  // Method scope (employees)
        
        if (authorized) {
            int safe;  // Block scope (owner only)
        }
    }
}
```

### Example 2: School Hierarchy

**Scope = School Access:**
```
School (Java Class):
├─ School name (static scope)
│  ├─ Same for all students
│  └─ Accessible everywhere
│
├─ Student roll number (class scope)
│  ├─ Each student has own
│  └─ Accessible in all student activities
│
└─ Exam answer sheet (method scope)
   ├─ Only during exam
   └─ Destroyed after exam

Java equivalent:
class Student {
    static String schoolName;  // Static scope
    int rollNumber;            // Class scope
    
    void exam() {
        int marks;  // Method scope
    }
}
```

---

## Internal Working

```
┌─────────────────────────────────────────────────────┐
│         SCOPE RESOLUTION AT COMPILE-TIME            │
└─────────────────────────────────────────────────────┘

SOURCE CODE:
public class Demo {
    int x = 10;  // Class scope
    
    public void method() {
        int y = 20;  // Method scope
        
        if (true) {
            int z = 30;  // Block scope
            System.out.println(x + y + z);
        }
    }
}

COMPILER SYMBOL TABLE:
┌──────────────────────────────────────┐
│  Class Scope:                        │
│  └─ x: int (instance variable)       │
│                                      │
│  Method Scope (method):              │
│  └─ y: int (local variable)          │
│                                      │
│  Block Scope (if):                   │
│  └─ z: int (local variable)          │
└──────────────────────────────────────┘

NAME RESOLUTION (x + y + z):
1. Look for 'x':
   ├─ Block scope? No
   ├─ Method scope? No
   └─ Class scope? Yes! Found x
   
2. Look for 'y':
   ├─ Block scope? No
   └─ Method scope? Yes! Found y
   
3. Look for 'z':
   └─ Block scope? Yes! Found z

BYTECODE:
0: aload_0          // Load 'this'
1: getfield #2      // Get x (class scope)
4: iload_1          // Load y (method scope)
5: iadd             // Add x + y
6: iload_2          // Load z (block scope)
7: iadd             // Add result + z
```

---

## Syntax Explanation

### Block scope examples:

```java
public class Demo {
    public void blockScopeExample() {
        // if block
        if (true) {
            int x = 10;  // Block scope
            System.out.println(x);  // ✅ OK
        }
        // System.out.println(x);  // ❌ Error: x out of scope
        
        // for loop
        for (int i = 0; i < 10; i++) {  // i: for statement scope
            int j = i * 2;  // j: for body scope
            System.out.println(i + j);  // ✅ OK
        }
        // System.out.println(i);  // ❌ Error: i out of scope
        // System.out.println(j);  // ❌ Error: j out of scope
        
        // while loop
        while (true) {
            int count = 0;  // Block scope
            count++;
            break;
        }
        // System.out.println(count);  // ❌ Error
        
        // try-catch
        try {
            int result = 10 / 2;  // Block scope
            System.out.println(result);  // ✅ OK
        } catch (Exception e) {
            // e: catch block scope
            System.out.println(e);  // ✅ OK
        }
        // System.out.println(result);  // ❌ Error
        // System.out.println(e);  // ❌ Error
        
        // Standalone block
        {
            int temp = 100;  // Block scope
            System.out.println(temp);  // ✅ OK
        }
        // System.out.println(temp);  // ❌ Error
    }
}
```

### Method scope examples:

```java
public class Demo {
    public void methodScopeExample(int param) {  // param: method scope
        // Local variable
        int local = 10;  // Method scope
        
        // Accessible throughout method
        if (true) {
            System.out.println(param);  // ✅ OK
            System.out.println(local);  // ✅ OK
        }
        
        for (int i = 0; i < 5; i++) {
            System.out.println(param);  // ✅ OK
            System.out.println(local);  // ✅ OK
        }
        
        // Still accessible at method end
        System.out.println(param);  // ✅ OK
        System.out.println(local);  // ✅ OK
    }
    
    public void anotherMethod() {
        // param and local not accessible here
        // System.out.println(param);  // ❌ Error
        // System.out.println(local);  // ❌ Error
    }
}
```

### Class scope examples:

```java
public class Demo {
    // Instance variables (class scope)
    private int privateVar = 10;
    protected int protectedVar = 20;
    public int publicVar = 30;
    int defaultVar = 40;
    
    public void method1() {
        // All instance variables accessible
        System.out.println(privateVar);    // ✅ OK
        System.out.println(protectedVar);  // ✅ OK
        System.out.println(publicVar);     // ✅ OK
        System.out.println(defaultVar);    // ✅ OK
    }
    
    public void method2() {
        // Still accessible in different method
        System.out.println(privateVar);    // ✅ OK
        System.out.println(protectedVar);  // ✅ OK
    }
    
    public static void staticMethod() {
        // ❌ Cannot access instance variables directly
        // System.out.println(privateVar);  // Error!
        
        // ✅ Must use object reference
        Demo obj = new Demo();
        System.out.println(obj.privateVar);  // OK
    }
}

// Different class
class AnotherClass {
    public void test() {
        Demo obj = new Demo();
        
        // System.out.println(obj.privateVar);    // ❌ Error: private
        System.out.println(obj.protectedVar);  // ✅ OK (same package)
        System.out.println(obj.publicVar);     // ✅ OK (public)
        System.out.println(obj.defaultVar);    // ✅ OK (same package)
    }
}
```

### Static scope examples:

```java
public class Demo {
    // Static variable (static scope)
    static int staticVar = 100;
    
    // Instance variable
    int instanceVar = 200;
    
    // Instance method
    public void instanceMethod() {
        // Can access both static and instance
        System.out.println(staticVar);    // ✅ OK
        System.out.println(instanceVar);  // ✅ OK
    }
    
    // Static method
    public static void staticMethod() {
        // Can access only static
        System.out.println(staticVar);    // ✅ OK
        // System.out.println(instanceVar);  // ❌ Error!
        
        // Must create object for instance variables
        Demo obj = new Demo();
        System.out.println(obj.instanceVar);  // ✅ OK
    }
    
    public static void main(String[] args) {
        // Access static variable
        System.out.println(Demo.staticVar);  // ✅ OK (via class name)
        System.out.println(staticVar);       // ✅ OK (direct)
        
        // Access instance variable
        Demo obj = new Demo();
        System.out.println(obj.instanceVar);  // ✅ OK (via object)
    }
}
```

### Variable shadowing:

```java
public class Demo {
    int x = 10;  // Instance variable
    
    public void method(int x) {  // Parameter shadows instance
        System.out.println(x);       // Prints parameter
        System.out.println(this.x);  // Prints instance variable
        
        {
            int x = 30;  // ❌ Error: duplicate local variable
            // Cannot redeclare in same method
        }
    }
    
    public void anotherMethod() {
        int x = 20;  // Local variable shadows instance
        System.out.println(x);       // Prints local (20)
        System.out.println(this.x);  // Prints instance (10)
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         SCOPE AND MEMORY ALLOCATION                 │
└─────────────────────────────────────────────────────┘

CODE:
public class Demo {
    static int staticVar = 10;  // Static scope
    int instanceVar = 20;        // Class scope
    
    public void method() {
        int methodVar = 30;      // Method scope
        
        if (true) {
            int blockVar = 40;   // Block scope
        }
    }
}

MEMORY LAYOUT:
┌──────────────────────────────────────┐
│  METHOD AREA:                        │
│  └─ staticVar = 10                   │
│     Scope: Entire class              │
│     Lifetime: Class lifetime         │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  HEAP:                               │
│  Demo object:                        │
│  └─ instanceVar = 20                 │
│     Scope: All instance methods      │
│     Lifetime: Object lifetime        │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  STACK:                              │
│  method() frame:                     │
│  ├─ methodVar = 30                   │
│  │  Scope: Entire method             │
│  │  Lifetime: Method execution       │
│  │                                   │
│  └─ blockVar = 40                    │
│     Scope: if block only             │
│     Lifetime: Block execution        │
└──────────────────────────────────────┘

SCOPE VISIBILITY:
├─ Inside if block: All 4 variables visible
├─ Inside method (outside if): 3 variables (not blockVar)
├─ Inside class (outside method): 2 variables (static, instance)
└─ Outside class: Depends on access modifiers
```

---

## Advantages

✅ **Clear Boundaries**: Well-defined visibility regions  
✅ **Memory Management**: Automatic cleanup when out of scope  
✅ **Namespace Isolation**: Avoid naming conflicts  
✅ **Encapsulation**: Control variable access  
✅ **Compile-time Checking**: Errors caught early  
✅ **Code Organization**: Logical grouping of variables  

---

## Limitations

❌ **Scope Restrictions**: Cannot access out-of-scope variables  
❌ **Shadowing Confusion**: Same name in different scopes  
❌ **Access Complexity**: Need object reference for instance variables  
❌ **Global State**: Static variables accessible everywhere  

---

## Edge Cases

🔸 **Variable shadowing:**
```java
class Demo {
    int x = 10;
    
    void method() {
        int x = 20;  // Shadows instance variable
        System.out.println(x);       // 20 (local)
        System.out.println(this.x);  // 10 (instance)
    }
}
```

🔸 **For loop variable scope:**
```java
for (int i = 0; i < 10; i++) {
    // i accessible here
}
// i not accessible here

// But this works:
int i;
for (i = 0; i < 10; i++) {
    // i accessible here
}
// i still accessible here (method scope)
```

🔸 **Try-catch variable scope:**
```java
try {
    int x = 10;
} catch (Exception e) {
    // x not accessible here
    // e accessible here
}
// Neither x nor e accessible here
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Accessing block variable outside block
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

🚫 **Mistake 2**: Forgetting this keyword for shadowed variable
```java
❌ class Demo {
       int x = 10;
       void method(int x) {
           x = 20;  // Modifies parameter, not instance variable!
       }
   }

✅ class Demo {
       int x = 10;
       void method(int x) {
           this.x = 20;  // Modifies instance variable
       }
   }
```

🚫 **Mistake 3**: Accessing instance variable from static method
```java
❌ class Demo {
       int x = 10;
       static void method() {
           System.out.println(x);  // Error!
       }
   }

✅ class Demo {
       int x = 10;
       static void method() {
           Demo obj = new Demo();
           System.out.println(obj.x);  // OK
       }
   }
```

🚫 **Mistake 4**: Redeclaring variable in same scope
```java
❌ void method() {
       int x = 10;
       int x = 20;  // Error: duplicate variable
   }

✅ void method() {
       int x = 10;
       x = 20;  // OK: reassignment
   }
```

---

## Important Interview Points

💡 **Q: What is variable scope in Java?**  
**A**: Scope is the region where variable is accessible. Four types:
- **Block scope**: Inside {} (if, for, while blocks)
- **Method scope**: Entire method (parameters, local variables)
- **Class scope**: All instance methods (instance variables)
- **Static scope**: All methods (static variables)
Rule: Inner scope can access outer scope, but not vice versa.

💡 **Q: What is the difference between block scope and method scope?**  
**A**: 
- **Block scope**: Variable declared in block (if, for, while), accessible only in that block, dies at closing brace
- **Method scope**: Variable declared in method, accessible throughout method, dies at method end
Example:
```java
void method() {
    int methodVar = 10;  // Method scope
    
    if (true) {
        int blockVar = 20;  // Block scope
        System.out.println(methodVar);  // ✅ OK
    }
    
    System.out.println(methodVar);  // ✅ OK
    // System.out.println(blockVar);  // ❌ Error
}
```

💡 **Q: What is variable shadowing?**  
**A**: Variable shadowing occurs when local variable has same name as instance variable. Local variable hides (shadows) instance variable in that scope. Use `this` keyword to access instance variable. Example:
```java
class Demo {
    int x = 10;  // Instance
    
    void method() {
        int x = 20;  // Local (shadows instance)
        System.out.println(x);       // 20 (local)
        System.out.println(this.x);  // 10 (instance)
    }
}
```

💡 **Q: Can inner scope access outer scope variables?**  
**A**: Yes, inner scope can access outer scope variables. But outer scope cannot access inner scope variables. Example:
```java
void method() {
    int outer = 10;
    
    if (true) {
        int inner = 20;
        System.out.println(outer);  // ✅ OK (inner accessing outer)
    }
    
    // System.out.println(inner);  // ❌ Error (outer accessing inner)
}
```

💡 **Q: What is the scope of for loop variable?**  
**A**: For loop variable declared in for statement has scope limited to for loop (statement + body). Not accessible outside loop. Example:
```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);  // ✅ OK
}
// System.out.println(i);  // ❌ Error: i out of scope
```
To access outside, declare before loop.

💡 **Q: Can static method access instance variables?**  
**A**: No, static methods cannot directly access instance variables because static methods belong to class, not object. Must create object to access instance variables. Example:
```java
class Demo {
    int instanceVar = 10;
    
    static void staticMethod() {
        // System.out.println(instanceVar);  // ❌ Error!
        
        Demo obj = new Demo();
        System.out.println(obj.instanceVar);  // ✅ OK
    }
}
```

💡 **Q: What are access modifiers and how do they affect scope?**  
**A**: Access modifiers control visibility of class members:
- **private**: Accessible only within class
- **default** (no modifier): Accessible within package
- **protected**: Accessible within package + subclasses
- **public**: Accessible everywhere
Example:
```java
class Demo {
    private int x;    // Class scope only
    protected int y;  // Package + subclass scope
    public int z;     // Global scope
}
```

💡 **Q: Can we have variables with same name in different scopes?**  
**A**: Yes, in different scopes (different methods, nested blocks). No, in same scope. Example:
```java
class Demo {
    void method1() {
        int x = 10;  // ✅ OK
    }
    
    void method2() {
        int x = 20;  // ✅ OK (different scope)
    }
    
    void method3() {
        int x = 10;
        int x = 20;  // ❌ Error: duplicate in same scope
    }
}
```

---

## Short Recap

Scope variable ki visibility area hai. Four types: Block scope (inside {}), Method scope (entire method), Class scope (all instance methods), Static scope (all methods). Rule: Inner scope can access outer scope, outer cannot access inner. Variable shadowing: local variable hides instance variable (use this.x for instance). For loop variable scope: limited to for loop. Static method cannot access instance variables directly. Access modifiers: private (class only), default (package), protected (package + subclass), public (everywhere). Cannot redeclare variable in same scope. Scope determines lifetime: block (block execution), method (method execution), instance (object lifetime), static (class lifetime). Interview ke liye yaad rakho: 4 scope types, inner-outer access rule, shadowing concept, for loop scope, static method limitations, access modifiers, aur scope-lifetime relationship.

---

**Previous**: [← 35 - Types of Variables](./35-types-of-variables.md)  
**Next**: [37 - Lifetime of Variables →](./37-lifetime-of-variables.md)
