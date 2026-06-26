# JDK, JRE, JVM

## Concept Introduction

Java program ko likhne, compile karne, aur run karne ke liye teen important parts samajhne padte hain: **JDK**, **JRE**, aur **JVM**.

Simple language mein:

- **JDK** developer ke liye complete toolkit hai.
- **JRE** Java program run karne ke liye runtime package hai.
- **JVM** actual engine hai jo bytecode execute karta hai.

Sabse important relation:

```
JDK contains JRE
JRE contains JVM
```

Matlab:

```
JDK > JRE > JVM
```

## Definitions

> **Interview Definition:** JDK (Java Development Kit) Java development ke liye complete package hai. Isme compiler (javac), runtime, debugger, documentation tools, aur utilities hoti hain.

> **Interview Definition:** JRE (Java Runtime Environment)** Java applications run karne ke liye required runtime package hai. Isme JVM, Java class libraries, aur supporting files hoti hain.

> **Interview Definition:** JVM (Java Virtual Machine)** Java bytecode ko execute karne wali virtual machine hai. JVM platform-specific hoti hai, lekin bytecode platform-independent hota hai.

---

## Relationship Diagram

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║              JDK vs JRE vs JVM                        ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  JDK - JAVA DEVELOPMENT KIT                                              ║     ║
║   ║                                                                          ║     ║
║   ║  Purpose: Write + Compile + Debug + Run Java programs                    ║     ║
║   ║                                                                          ║     ║
║   ║  Tools:                                                                  ║     ║
║   ║  • javac    - Java compiler                                              ║     ║
║   ║  • java     - JVM launcher                                               ║     ║
║   ║  • jar      - Archive tool                                               ║     ║
║   ║  • javadoc  - Documentation generator                                    ║     ║
║   ║  • jdb      - Debugger                                                   ║     ║
║   ║  • javap    - Bytecode viewer                                            ║     ║
║   ║                                                                          ║     ║
║   ║  ╔════════════════════════════════════════════════════════════════╗      ║     ║
║   ║  ║  JRE - JAVA RUNTIME ENVIRONMENT                                ║      ║     ║
║   ║  ║                                                                ║      ║     ║
║   ║  ║  Purpose: Run already compiled Java programs                   ║      ║     ║
║   ║  ║                                                                ║      ║     ║
║   ║  ║  Contains:                                                     ║      ║     ║
║   ║  ║  • Java class libraries                                        ║      ║     ║
║   ║  ║  • Supporting files                                            ║      ║     ║
║   ║  ║  • Native libraries                                            ║      ║     ║
║   ║  ║                                                                ║      ║     ║
║   ║  ║  ╔══════════════════════════════════════════════════════╗      ║      ║     ║
║   ║  ║  ║  JVM - JAVA VIRTUAL MACHINE                          ║      ║      ║     ║
║   ║  ║  ║                                                      ║      ║      ║     ║
║   ║  ║  ║  Purpose: Execute Java bytecode                      ║      ║      ║     ║
║   ║  ║  ║                                                      ║      ║      ║     ║
║   ║  ║  ║  Parts:                                              ║      ║      ║     ║
║   ║  ║  ║  • Class Loader                                      ║      ║      ║     ║
║   ║  ║  ║  • Bytecode Verifier                                 ║      ║      ║     ║
║   ║  ║  ║  • Runtime Data Areas                                ║      ║      ║     ║
║   ║  ║  ║  • Execution Engine                                  ║      ║      ║     ║
║   ║  ║  ║  • Garbage Collector                                 ║      ║      ║     ║
║   ║  ║  ╚══════════════════════════════════════════════════════╝      ║      ║     ║
║   ║  ╚════════════════════════════════════════════════════════════════╝      ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   Final relation: JDK contains JRE, and JRE contains JVM                           ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Real Life Analogy

Java ko kitchen ki tarah samjho:

| Java Part | Kitchen Analogy | Meaning |
|-----------|-----------------|---------|
| **JDK** | Complete kitchen | Cook karne ke tools + gas + utensils sab kuch |
| **JRE** | Serving setup | Ready food serve/run karne ka setup |
| **JVM** | Gas stove | Actual execution yahin hoti hai |

Agar tum **developer** ho, tumhe JDK chahiye because tum code likhoge aur compile karoge.

Agar user ko sirf Java app chalani hai, theoretically JRE enough hai. Modern Java versions mein separate public JRE install common nahi hai; usually JDK ya bundled runtime use hota hai.

---

## Java Program Execution Flow

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║              JAVA EXECUTION FLOW                      ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   Step 1: Developer writes source code                                             ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  Hello.java                                                      ║             ║
║   ║  Human-readable Java source code                                 ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                              ║                                                     ║
║                              ║ javac Hello.java                                    ║
║                              ▼                                                     ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  Hello.class                                                     ║             ║
║   ║  Platform-independent bytecode                                   ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                              ║                                                     ║
║                              ║ java Hello                                          ║
║                              ▼                                                     ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  JVM                                                             ║             ║
║   ║  Loads, verifies, interprets, and JIT compiles bytecode          ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                              ║                                                     ║
║                              ▼                                                     ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  Machine Code                                                    ║             ║
║   ║  CPU finally executes native instructions                        ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                              ║                                                     ║
║                              ▼                                                     ║
║   ╔══════════════════════════════════════════════════════════════════╗             ║
║   ║  Output                                                          ║             ║
║   ╚══════════════════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

Short flow:

```
.java source code -> javac -> .class bytecode -> JVM -> machine code -> output
```

---

## What Each Part Does

### JDK - Development Kit

JDK ka kaam development karwana hai.

Main tools:

| Tool | Full Form / Meaning | Use |
|------|----------------------|-----|
| javac | Java compiler | .java ko .class bytecode mein convert karta hai |
| java | JVM launcher | Java program run karta hai |
| jar | Java archive tool | Multiple class files ko JAR mein package karta hai |
| javadoc | Documentation generator | Code comments se documentation banata hai |
| jdb | Java debugger | Debugging ke liye |
| javap | Class file disassembler | Bytecode inspect karne ke liye |

JDK use kab hota hai?

- Java code likhna hai
- Java code compile karna hai
- Java app debug karni hai
- Java project/package build karna hai

### JRE - Runtime Environment

JRE ka kaam compiled Java program ko run karwana hai.

JRE contains:

- JVM
- Java class libraries
- Supporting configuration files
- Native libraries

JRE mein javac compiler nahi hota. Isliye JRE se Java code compile nahi hota, sirf already compiled .class/.jar files run hoti hain.

### JVM - Execution Engine

JVM ka kaam bytecode execute karna hai.

JVM ke major parts:

- **Class Loader:** .class files memory mein load karta hai.
- **Bytecode Verifier:** bytecode safe aur valid hai ya nahi check karta hai.
- **Runtime Data Areas:** heap, stack, method area/metaspace jaise memory areas manage karta hai.
- **Execution Engine:** bytecode ko interpret/JIT compile karke run karta hai.
- **Garbage Collector:** unused objects ki memory clean karta hai.

---

## JVM Internal Architecture

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║              JVM INTERNAL ARCHITECTURE                ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  1. CLASS LOADER SUBSYSTEM                                               ║     ║
║   ║  • Loads .class files                                                    ║     ║
║   ║  • Links classes                                                         ║     ║
║   ║  • Initializes static variables and static blocks                        ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  2. BYTECODE VERIFIER                                                    ║     ║
║   ║  • Checks bytecode format                                                ║     ║
║   ║  • Checks type safety                                                    ║     ║
║   ║  • Blocks unsafe or invalid code                                         ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  3. RUNTIME DATA AREAS                                                   ║     ║
║   ║  • Method Area / Metaspace: class metadata                               ║     ║
║   ║  • Heap: objects                                                         ║     ║
║   ║  • Stack: method calls and local variables                               ║     ║
║   ║  • PC Register: current instruction                                      ║     ║
║   ║  • Native Method Stack: native method calls                              ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  4. EXECUTION ENGINE                                                     ║     ║
║   ║  • Interpreter: executes bytecode instruction by instruction             ║     ║
║   ║  • JIT Compiler: converts hot bytecode into machine code                 ║     ║
║   ║  • Garbage Collector: frees unused object memory                         ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
║   ╔══════════════════════════════════════════════════════════════════════════╗     ║
║   ║  5. NATIVE METHOD INTERFACE                                              ║     ║
║   ║  • Connects Java code with native C/C++ libraries                        ║     ║
║   ║  • Uses platform-specific native libraries                               ║     ║
║   ╚══════════════════════════════════════════════════════════════════════════╝     ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Important Commands

### Check Java Version

```bash
java -version
```

Example output:

```text
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39)
```

Meaning:

- First line Java version dikhati hai.
- Second line runtime/JRE information dikhati hai.
- Third line JVM implementation dikhati hai.

### Compile Java Program

```bash
javac Hello.java
```

Ye command source code ko bytecode mein convert karti hai.

### Run Java Program

```bash
java Hello
```

Ye command JVM launch karke Hello.class bytecode run karti hai.

### View Bytecode

```bash
javap -c Hello
```

Ye command .class file ke bytecode instructions dikhati hai.

---

## Comparison Table

| Feature | JDK | JRE | JVM |
|---------|-----|-----|-----|
| Full Form | Java Development Kit | Java Runtime Environment | Java Virtual Machine |
| Main Purpose | Develop + compile + run | Run Java programs | Execute bytecode |
| Contains | JRE + development tools | JVM + libraries | Execution engine |
| Has javac? | Yes | No | No |
| Has java command? | Yes | Yes/runtime launcher | JVM is launched by it |
| Used By | Developers | End users / runtime apps | Runtime internally |
| Platform Dependency | Platform-specific install | Platform-specific install | Platform-specific implementation |
| Runs Bytecode? | Through included JRE/JVM | Through JVM | Yes |

---

## Common Beginner Mistakes

**Mistake 1: Thinking JDK, JRE, JVM are same**

Teeno same nahi hain. JDK sabse bada package hai, JRE uske andar runtime part hai, aur JVM JRE ke andar execution engine hai.

**Mistake 2: Thinking JRE can compile Java code**

JRE sirf Java program run karta hai. Compilation ke liye javac chahiye, jo JDK mein hota hai.

**Mistake 3: Thinking JVM is platform-independent**

Bytecode platform-independent hota hai. JVM platform-specific hoti hai. Windows ke liye Windows JVM, Mac ke liye Mac JVM, Linux ke liye Linux JVM hoti hai.

**Mistake 4: Thinking CPU directly runs .class file**

CPU directly .class bytecode nahi samajhta. JVM bytecode ko interpret/JIT compile karke machine code mein convert karwati hai.

---

## Important Interview Questions & Answers

**Q1: What is the difference between JDK, JRE, and JVM?**

JDK is used to develop Java applications. It includes JRE and development tools like javac. JRE is used to run Java applications. It includes JVM and class libraries. JVM is the engine that executes Java bytecode.

```
JDK = JRE + Development Tools
JRE = JVM + Class Libraries + Supporting Files
JVM = Bytecode Execution Engine
```

---

**Q2: Why do developers need JDK?**

Developers need JDK because they need javac compiler, debugger, documentation tools, and runtime. Without JDK, Java source code cannot be compiled.

---

**Q3: Can Java run without JVM?**

Normal Java bytecode cannot run without JVM. JVM loads bytecode, verifies it, manages memory, and executes it using interpreter/JIT compiler.

---

**Q4: Is JVM platform-independent?**

No. JVM is platform-specific. Java bytecode is platform-independent. Same .class file can run on different operating systems because each OS has its own JVM implementation.

---

**Q5: What happens when we run java Hello?**

JVM starts, class loader loads Hello.class, bytecode verifier checks safety, JVM finds main() method, execution engine runs bytecode, JIT compiles hot code when needed, and garbage collector manages memory.

---

## Short Recap

JDK, JRE, JVM ko ek hierarchy ki tarah yaad rakho:

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║              ╔═══════════════════════════════════════════════════════╗             ║
║              ║                    KEY TAKEAWAY                       ║             ║
║              ╚═══════════════════════════════════════════════════════╝             ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║   JDK = Java code likhne, compile karne, debug karne, run karne ke liye            ║
║                                                                                    ║
║   JRE = Already compiled Java program run karne ke liye                            ║
║                                                                                    ║
║   JVM = Bytecode execute karne wala actual engine                                  ║
║                                                                                    ║
║   Final formula:                                                                   ║
║                                                                                    ║
║   JDK = JRE + Tools                                                                ║
║   JRE = JVM + Libraries                                                            ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```
