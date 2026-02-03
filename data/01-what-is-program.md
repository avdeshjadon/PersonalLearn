# WHAT IS A PROGRAM

## Concept Introduction

Jab tum apne phone pe WhatsApp chalate ho, ya laptop pe game khelte ho, ya calculator use karte ho — yeh sab **programs** hain. Program ek set of instructions hai jo computer ko batata hai ki kya karna hai. Bilkul jaise recipe mein steps hote hain khana banane ke liye, waise hi program mein steps hote hain computer ko kaam karne ke liye.

## Why This Concept Exists

### Problem before programs:

Before programs were invented, computers were only hardware machines. They consisted of physical components like wires, circuits, and switches. People did not know how to properly use computers. Every task had to be performed manually by turning switches on and off. There was no automation. Computers could not repeat tasks or perform complex operations on their own.

- Pehle computers sirf hardware the — wires, circuits, switches
- Koi nahi jaanta tha unhe kaise use karna hai
- Har baar manually switches on/off karne padte the
- Koi automation nahi tha

### Solution:

Programs were created to give instructions to computers automatically. A program is a set of instructions that tells the computer what to do. Once a program is written, it can be used again and again. This saves time and effort. Programs made complex tasks simple and faster. They allowed computers to perform calculations, store data, and automate work efficiently.

- Programs banaye gaye jo computer ko automatically instructions de sake
- Ek baar program likh do, baar baar use kar sakte ho
- Complex tasks ko simple bana diya

---

## Definitions

### Very Simple Definition
Program ek list of instructions hai jo computer ko step-by-step batata hai ki kya karna hai.

### College Exam Definition
A program is a sequence of instructions written in a programming language that directs a computer to perform specific tasks or solve particular problems.

### Viva Definition
A program is a set of logically organized instructions that are executed by a computer's processor to achieve a desired output or perform a specific operation. It acts as an intermediary between the user's intent and the machine's execution.

### Interview Definition
A program is an executable set of coded instructions written in a programming language, which when compiled or interpreted, directs the computer hardware to perform specific computational tasks, process data, and produce desired results. It represents the implementation of an algorithm.

### Technical Definition
A program is a formal specification of a computational process, expressed in a programming language syntax, consisting of data structures and control flow logic, which is translated into machine-executable instructions (machine code or bytecode) to manipulate hardware resources and achieve defined objectives.

### One-line Crisp Definition
**Program = Instructions + Data + Logic → Output**

---

## Program Execution Process

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║                      ╔═══════════════════════════════════╗                         ║
║                      ║  PROGRAM EXECUTION LIFECYCLE      ║                         ║
║                      ╚═══════════════════════════════════╝                         ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║  ┏━━━━━━━━━━━━━━━┓              ┏━━━━━━━━━━━━━━━┓              ┏━━━━━━━━━━━━━━━┓   ║
║  ┃   STEP 1:     ┃              ┃   STEP 2:     ┃              ┃   STEP 3:     ┃   ║
║  ┃   WRITING     ┃              ┃ TRANSLATION   ┃              ┃   LOADING     ┃   ║
║  ┗━━━━━━━━━━━━━━━┛              ┗━━━━━━━━━━━━━━━┛              ┗━━━━━━━━━━━━━━━┛   ║
║                                                                                    ║
║  ╭─────────────╮                ╭─────────────╮                ╭─────────────╮     ║
║  │ Programmer  │                │  Compiler/  │                │   Program   │     ║
║  │ writes code │   ═══════════> │ Interpreter │   ═══════════> │ loaded into │     ║
║  │             │                │             │                │  RAM Memory │     ║
║  │ Source Code │                │             │                │             │     ║
║  ╰─────────────╯                ╰─────────────╯                ╰─────────────╯     ║
║        │                                │                              │           ║
║        ▼                                ▼                              ▼           ║
║  ┌─────────────┐                ┌─────────────┐                ┌─────────────┐     ║
║  │Program.java │                │Machine Code/│                │Ready in RAM │     ║
║  │  (Human-    │                │  Bytecode   │                │   Memory    │     ║
║  │  readable)  │                │ (0s and 1s) │                │             │     ║
║  └─────────────┘                └─────────────┘                └─────────────┘     ║
║                                                                                    ║
╠════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                    ║
║                          ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                     ║
║                          ┃       STEP 4: EXECUTION           ┃                     ║
║                          ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                     ║
║                                                                                    ║
║                          ╭─────────────────────────────╮                           ║
║                          │  CPU fetches instructions   │                           ║
║                          │       one by one            │                           ║
║                          ╰───────────┬─────────────────╯                           ║
║                                      │                                             ║
║                                      ▼                                             ║
║                          ╭─────────────────────────────╮                           ║
║                          │   CPU executes each         │                           ║
║                          │      instruction            │                           ║
║                          ╰───────────┬─────────────────╯                           ║
║                                      │                                             ║
║                                      ▼                                             ║
║                          ╔═══════════════════════════╗                             ║
║                          ║ ░░░░░░░░░░░░░░░░░░░░░░░░░ ║                             ║
║                          ║ ░░░░░░░  OUTPUT ░░░░░░░░░ ║                             ║
║                          ║ ░░░░░░░░░░░░░░░░░░░░░░░░░ ║                             ║
║                          ╚═══════════════════════════╝                             ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```
---

## Anatomy of a Program

```
╔════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                            ║
║                        ╔═══════════════════════════════╗                                   ║
║                        ║   COMPONENTS OF A PROGRAM     ║                                   ║
║                        ╚═══════════════════════════════╝                                   ║
║                                                                                            ║
╠════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║     ╭─────────────────╮          ╭─────────────────╮          ╭─────────────────╮          ║
║     │   1. INPUT      │          │  2. PROCESSING  │          │   3. OUTPUT     │          ║
║     ├─────────────────┤          ├─────────────────┤          ├─────────────────┤          ║
║     │                 │          │                 │          │                 │          ║
║     │  • User data    │          │  • Calculations │          │  • Screen       │          ║
║     │  • File data    │  ══════> │  • Logic        │  ══════> │  • File         │          ║
║     │  • Sensor data  │          │  • Loops        │          │  • Network      │          ║
║     │                 │          │  • Manipulation │          │                 │          ║
║     │                 │          │                 │          │                 │          ║
║     ╰─────────────────╯          ╰─────────────────╯          ╰─────────────────╯          ║
║                                                                                            ║
╠════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║                        ╔═══════════════════════════════╗                                   ║
║                        ║    PROGRAM FLOW CYCLE         ║                                   ║
║                        ╚═══════════════════════════════╝                                   ║
║                                                                                            ║
║     ┏━━━━━━━━━━┓             ┏━━━━━━━━━━━━┓             ┏━━━━━━━━━━┓                       ║
║     ┃  INPUT   ┃ ═════════=> ┃ PROCESSING ┃ ═════════=> ┃  OUTPUT  ┃                       ║
║     ┗━━━━━━━━━━┛             ┗━━━━━━━━━━━━┛             ┗━━━━━━━━━━┛                       ║
║          ▲                                                     │                           ║
║          │                                                     │                           ║
║          │          ╔═══════════════════════════════╗          │                           ║
║          │          ║  FEEDBACK (Optional Loop)     ║          │                           ║
║          │          ╚═══════════════════════════════╝          │                           ║
║          │                                                     │                           ║
║          └─────────────────────────────────────────────────────┘                           ║
║                                                                                            ║
╚════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## Program in Memory
```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║                      ╔═══════════════════════════════════╗                    ║
║                      ║  PROGRAM STORAGE & EXECUTION      ║                    ║
║                      ╚═══════════════════════════════════╝                    ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                ┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓  ║
║  ┃  BEFORE EXECUTION           ┃                ┃  DURING EXECUTION        ┃  ║
║  ┃  (Storage - Static)         ┃                ┃  (Active - Dynamic)      ┃  ║
║  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                ┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛  ║
║                                                                               ║
║  ╔═══════════════════╗                            ╔═══════════════════════╗   ║
║  ║  HARD DISK / SSD  ║                            ║   RAM (Memory)        ║   ║
║  ╠═══════════════════╣                            ╠═══════════════════════╣   ║
║  ║                   ║                            ║ ┌───────────────────┐ ║   ║
║  ║  Program.class    ║        ═════════════>      ║ │  CODE SECTION     │ ║   ║
║  ║                   ║           LOAD             ║ │  • Instructions   │ ║   ║
║  ║  (Not Running)    ║                            ║ │  • Methods        │ ║   ║
║  ║                   ║                            ║ └───────────────────┘ ║   ║
║  ╚═══════════════════╝                            ║                       ║   ║
║                                                   ║ ┌───────────────────┐ ║   ║
║                                                   ║ │  DATA SECTION     │ ║   ║
║                                                   ║ │  • Global vars    │ ║   ║
║                                                   ║ │  • Static vars    │ ║   ║
║                                                   ║ └───────────────────┘ ║   ║
║                                                   ║                       ║   ║
║                                                   ║ ┌───────────────────┐ ║   ║
║                                                   ║ │     STACK         │ ║   ║
║                                                   ║ │  • Local vars     │ ║   ║
║                                                   ║ │  • Method calls   │ ║   ║
║                                                   ║ └───────────────────┘ ║   ║
║                                                   ║                       ║   ║
║                                                   ║ ┌───────────────────┐ ║   ║
║                                                   ║ │      HEAP         │ ║   ║
║                                                   ║ │  • Objects        │ ║   ║
║                                                   ║ │  • Dynamic data   │ ║   ║
║                                                   ║ └───────────────────┘ ║   ║
║                                                   ╚═══════════┬═══════════╝   ║
║                                                               │               ║
║                                                               ▼               ║
║                                                   ╔═══════════════════════╗   ║
║                                                   ║ ░ CPU (Processor)  ░  ║   ║
║                                                   ╠═══════════════════════╣   ║
║                                                   ║ ░ • Fetches from RAM  ║   ║
║                                                   ║ ░ • Executes one by   ║   ║
║                                                   ║ ░   one               ║   ║
║                                                   ║ ░ • Produces output   ║   ║
║                                                   ╚═══════════════════════╝   ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

## Real-life Hinglish Examples

### Example 1: Chai Banane Ka Program

Socho tumhe chai banani hai. Tumhare paas ek **recipe** hai:

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║                          ╔═══════════════════════╗                            ║
║                          ║    CHAI PROGRAM       ║                            ║
║                          ╚═══════════════════════╝                            ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 1: Bartan mein paani daalo  │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 2: Gas on karo              │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 3: Paani garam hone tak     │                    ║
║                      │          wait karo                │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 4: Chai patti daalo         │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 5: Cheeni daalo             │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 6: Doodh daalo              │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 7: Ubaal aane tak           │                    ║
║                      │          wait karo                │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 8: Gas off karo             │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 9: Cup mein daalo           │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╔═══════════════════════════════════╗                    ║
║                      ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║                    ║
║                      ║ ░░░  OUTPUT: Chai ready! ░░░░░░░░ ║                    ║
║                      ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║                    ║
║                      ╚═══════════════════════════════════╝                    ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

Yeh ek **program** hai! Har step ek **instruction** hai.

### Example 2: ATM Machine

Jab tum ATM se paise nikalte ho:

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║                          ╔═══════════════════════╗                            ║
║                          ║    ATM PROGRAM        ║                            ║
║                          ╚═══════════════════════╝                            ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 1: Card insert karo         │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ╭───────────────────────────────────╮                    ║
║                      │  Step 2: PIN enter karo           │                    ║
║                      ╰─────────────────┬─────────────────╯                    ║
║                                        │                                      ║
║                                        ▼                                      ║
║                      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                      ║
║                      ┃  Step 3: IF (PIN correct)       ┃                      ║
║                      ┗━━━━━━━━━━━━━━━━┬━━━━━━━━━━━━━━━━┛                      ║
║                                        │                                      ║
║                           ┌────────────┴────────────┐                         ║
║                           │                         │                         ║
║                      THEN ▼                    ELSE ▼                         ║
║                   ╭──────────────╮          ╭──────────────╮                  ║
║                   │   proceed    │          │  Wrong PIN   │                  ║
║                   ╰──────┬───────╯          ╰──────┬───────╯                  ║
║                          │                         │                          ║
║                          │                         ▼                          ║
║                          │                  ╔══════════════╗                  ║
║                          │                  ║ ░░░ EXIT ░░░ ║                  ║
║                          │                  ╚══════════════╝                  ║
║                          │                                                    ║
║                          ▼                                                    ║
║                   ╭──────────────────────────────────╮                        ║
║                   │  Step 4: Amount enter karo       │                        ║
║                   ╰──────────────┬───────────────────╯                        ║
║                                  │                                            ║
║                                  ▼                                            ║
║                   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                         ║
║                   ┃  Step 5: IF (balance >= amount) ┃                         ║
║                   ┗━━━━━━━━━━━━━━┬━━━━━━━━━━━━━━━━━━┛                         ║
║                                  │                                            ║
║                      ┌───────────┴───────────┐                                ║
║                      │                       │                                ║
║                 THEN ▼                  ELSE ▼                                ║
║              ╭──────────────╮        ╭───────────────────────╮                ║
║              │  Paise do    │        │ Insufficient balance  │                ║
║              ╰──────┬───────╯        ╰───────────────────────╯                ║
║                     │                                                         ║
║                     ▼                                                         ║
║              ╭──────────────────────────────────╮                             ║
║              │  Step 6: Receipt print karo      │                             ║
║              ╰──────────────┬───────────────────╯                             ║
║                             │                                                 ║
║                             ▼                                                 ║
║              ╔══════════════════════════════════╗                             ║
║              ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║                             ║
║              ║ ░░░ OUTPUT: Cash + Receipt ░░░░░ ║                             ║
║              ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║                             ║
║              ╚══════════════════════════════════╝                             ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

Yeh bhi ek program hai jo ATM machine follow karti hai!

---

## Syntax Explanation (Simple Java Program)

```java

public class HelloWorld {                     
    public static void main(String[] args) {  
        System.out.println("Hello, World!");  
    }
}
```

### Line-by-line Breakdown:

| Line | Code | Explanation |
|------|------|-------------|
| 1 | `public class HelloWorld` | Program ka naam "HelloWorld" hai |
| 2 | `public static void main(String[] args)` | Entry point - yahan se execution start |
| 3 | `System.out.println("Hello, World!");` | Screen pe "Hello, World!" print karo |
| 4 | Curly braces `{}` | Instructions ko group karte hain |

### Execution Flow:

```
Input: None
   │
   ▼
Processing: Print instruction execute hota hai
   │
   ▼
Output: Hello, World!
```

---

## Advantages

| Advantage | Description |
|-----------|-------------|
| **Automation** | Ek baar likh do, baar baar use karo |
| **Speed** | Computer manually karne se 1000x fast hai |
| **Accuracy** | Galti nahi hoti (agar program sahi hai) |
| **Reusability** | Same program different data ke saath use kar sakte ho |
| **Scalability** | Chhote ya bade tasks easily handle kar sakte ho |
| **Consistency** | Har baar same result milega |

---

## Limitations

| Limitation | Description |
|------------|-------------|
| **Garbage In, Garbage Out** | Agar program galat hai, output bhi galat hoga |
| **No Intelligence** | Program sirf wahi karega jo likha hai, khud se nahi sochega |
| **Bugs** | Errors ho sakte hain code mein |
| **Maintenance** | Update aur fix karna padta hai |
| **Hardware Dependent** | Bina computer ke program kuch nahi kar sakta |

---


## Common Beginner Mistakes


**Mistake 1: Program aur Software ko Same Samajhna**
Bahut se beginners sochte hain ki program aur software ek hi cheez hain, lekin yeh galat hai. Program sirf ek single set of instructions hota hai, jabki software mein kai programs, data aur documentation shamil hote hain. Isliye, program aur software ko ek hi samajhna sahi nahi hai.

**Mistake 2: Program Khud Se Intelligent Hai**
Log aksar sochte hain ki program apne aap soch sakta hai, lekin asal mein program sirf wahi karta hai jo usmein likha hota hai. Program khud se decision nahi le sakta, woh bas instructions follow karta hai. Artificial Intelligence (AI) aur Machine Learning (ML) alag concepts hain.

**Mistake 3: Syntax Errors Ko Ignore Karna**
Kabhi-kabhi beginners sochte hain ki ek chhoti si syntax mistake, jaise semicolon miss karna, koi badi baat nahi hai. Lekin programming mein har syntax rule follow karna zaroori hai. Ek chhoti si galti bhi program ko chalne nahi degi.

**Mistake 4: Logic Errors Ko Nahi Samajhna**
Kai baar program sahi tarah se run toh ho jata hai, lekin output galat aata hai. Iska matlab hai ki logic mein kuch problem hai. Sirf program chal jana kaafi nahi hai, hamesha expected aur actual output ko compare karke logic check karna chahiye.


## Important Interview Questions & Answers

**Q1: What is a program?**
A program is a set of instructions written in a programming language that directs a computer to perform specific tasks. It includes input, processing logic, and output, similar to a recipe that guides a computer step by step.

---

**Q2: What is the difference between a program and a process?**

| Aspect      | Program (Static)                | Process (Dynamic)                |
|-------------|---------------------------------|----------------------------------|
| Nature      | Code stored on disk             | Program in execution (in RAM)    |
| State       | Passive entity                  | Active entity                    |
| Location    | Hard disk/SSD                   | RAM (Memory)                     |
| Lifespan    | Permanent (until deleted)       | Temporary (while running)        |
| Example     | WhatsApp.exe file               | WhatsApp running on your phone   |

---

**Q3: What are the main components of a program?**
The main components are:
1. Input (data from user, files, or devices)
2. Processing (logic, calculations, manipulations)
3. Output (results displayed or stored)
4. Control Flow (if/else, loops, switches)
5. Data Structures (variables, arrays, objects)

---

**Q4: How does a computer execute a program?**
The execution of a program involves these five steps:
1. Load: The program is loaded from disk to RAM.
2. Fetch: The CPU fetches instructions one by one.
3. Decode: The CPU decodes each instruction.
4. Execute: The CPU executes the instruction.
5. Store: Results are stored or displayed as output.

---

**Q5: What is the difference between source code and executable?**

| Aspect        | Source Code                | Executable                |
|-------------- |----------------------------|---------------------------|
| Format        | Human-readable             | Machine-readable          |
| Extension     | .java, .c, .py             | .class, .exe, .out        |
| Purpose       | Written by programmer      | Run by computer           |
| Modification  | Can be edited              | Cannot be easily edited   |
| Example       | HelloWorld.java            | HelloWorld.class          |

---

**Q6: What happens when a program crashes?**
When a program crashes, it means it has encountered an error it cannot handle (such as division by zero, null pointer access, or running out of memory). The operating system detects the error, stops the program, displays an error message, releases memory, and exits the program.

---

**Q7: Can a program run without an operating system?**
Yes, but with limitations. Most applications require an operating system to run. However, some standalone programs (like firmware or bootloaders) can run directly on hardware without an OS, but they have limited functionality compared to OS-dependent programs.

---

## Short Recap

**Program** ek set of instructions hai jo computer ko batata hai ki kya karna hai. Yeh **input** leta hai, **processing** karta hai, aur **output** deta hai. Program disk pe stored hota hai aur execution ke time **RAM** mein load hota hai. **CPU** instructions ko ek-ek karke execute karta hai.

Programs **automation**, **speed**, aur **accuracy** provide karte hain. Har program mein input, processing, aur output hota hai — bilkul recipe ki tarah!

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║                          ╔═══════════════════════╗                            ║
║                          ║   KEY TAKEAWAY        ║                            ║
║                          ╚═══════════════════════╝                            ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║                                                                               ║
║                     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                       ║
║                     ┃                                 ┃                       ║
║                     ┃  Program = Recipe for Computer  ┃                       ║
║                     ┃                                 ┃                       ║
║                     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                       ║
║                                                                               ║
║                                                                               ║
║                                                                               ║
║    ╔═══════════════╗         ╔═══════════════╗         ╔═══════════════╗      ║
║    ║               ║         ║               ║         ║               ║      ║
║    ║ Instructions  ║  ═════> ║   Execution   ║  ═════> ║    Results    ║      ║
║    ║               ║         ║               ║         ║               ║      ║
║    ╚═══════════════╝         ╚═══════════════╝         ╚═══════════════╝      ║
║                                                                               ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```