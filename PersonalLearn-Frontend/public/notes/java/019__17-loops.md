# LOOPS AND FLOW CONTROL

## Concept Introduction

Programming me kabhi-kabhi hume ek hi code ko bar-bar (repeatedly) chalana padta hai (jaise 1 se 100 tak counting print karna). Bar-bar same code likhne ki jagah hum **Loops** ka use karte hain.

> **Interview Definition:** Loops in Java are used to execute a block of code repeatedly as long as a specified condition evaluates to true. They help in saving time, reducing code size, and preventing code duplication.

### Quick Summary Table

| Loop Type | Used For | Condition Checking |
|-----------|----------------------------|--------------------|
| **for loop** | Jab hume pehle se pata ho ki loop kitni baar chalega. | Entry-controlled (Pehle check hota hai) |
| **while loop** | Jab hume exact iterations na pata hon, bas ek shart (condition) ke true rehne tak chalana ho. | Entry-controlled (Pehle check hota hai) |
| **do-while loop** | Jab hum chahte hain ki code kam se kam **ek baar** zaroor chale, chahe condition fail hi kyu na ho. | Exit-controlled (Baad me check hota hai) |
| **Enhanced for** | (Also known as For-Each loop). Array ya collection ke har element ko line-by-line traverse karne ke liye. | Automatically handles array limits |

---

## 1. The for Loop

> **Interview Definition:** The for loop is a control flow statement that iterates a part of the program multiple times. It is recommended when the number of iterations is fixed and known in advance.

- Isme 3 parts hote hain: Initialization (shuru kahan se karna hai), Condition (kab tak chalna hai), aur Increment/Decrement (har baar kitna badhana ya ghatana hai).

```java
// 1 se lekar 5 tak numbers print karega
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

---

## 2. The while Loop

> **Interview Definition:** The while loop repeatedly executes a target statement as long as a given condition is true. The condition is evaluated before the execution of the loop's body.

- Isme condition starting me hi check hoti hai.
- Jab tak condition true rahegi, andar ka code chalta rahega.
- Loop ke andar hume khud manually counter ko badhana (i++) padta hai.

```java
int i = 1;

while (i <= 5) {
    System.out.println(i);
    i++; // Agar ye bhool gaye toh infinite loop ban jayega!
}
```

---

## 3. The do-while Loop

> **Interview Definition:** The do-while loop is similar to the while loop, except that it tests the condition at the end of the loop body. Therefore, the do-while loop is guaranteed to execute at least one time.

- Ise "Exit-controlled loop" bhi kehte hain.
- Padhne ka tareeka: "Pehle ye kaam karo (do), fir shart check karo (while) ki dubara karna hai ya nahi".

```java
int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

---

## 4. The Enhanced for Loop (For-Each Loop)

> **Interview Definition:** The enhanced for loop (introduced in Java 5) provides a simpler way to iterate through the elements of a collection or an array. It eliminates the possibility of programming errors like out-of-bounds exceptions.

- Ye arrays aur collections ke sath bohot aasaan hota hai.
- Isme koi counter (i) nahi hota. Ye khud ba khud pehle se aakhri element tak chalta hai.

```java
int[] nums = {10, 20, 30};

// Padhne ka tareeka: "For each integer 'n' in 'nums' array"
for (int n : nums) {
    System.out.println(n);
}
```

---

## 5. Jump Statements (break and continue)

Loops ke flow ko beech me hi rokne ya skip karne ke liye hum in keywords ka use karte hain.

### A. The break Statement

> **Interview Definition:** The break statement is used to prematurely terminate the current loop. The control is transferred to the statement immediately following the loop.

- Ye loop ko turant tod (stop) deta hai aur bahar aa jata hai.

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break; // Jab i = 3 hoga, loop toot jayega aur 3 print nahi hoga
    }
    System.out.println(i); 
}
// Output: 1, 2
```

### B. The continue Statement

> **Interview Definition:** The continue statement skips the current iteration of a loop and proceeds to the next iteration.

- Ye sirf current round (iteration) ko skip karta hai, lekin loop ko todta nahi hai.

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; // Jab i = 3 hoga, toh ye round skip ho jayega (3 print nahi hoga)
    }
    System.out.println(i);
}
// Output: 1, 2, 4, 5
```

---

## Interview Questions

**Q1: What is an infinite loop?**

An infinite loop is a loop that never ends because its terminating condition is never met or it lacks a terminating condition altogether. For example: for(;;) { } or while(true) { }.

**Q2: What is the main difference between a while loop and a do-while loop?**

A while loop checks the condition first (Entry-controlled), so if the condition is false initially, the loop body never executes. A do-while loop executes the body first and then checks the condition (Exit-controlled), guaranteeing that the body executes at least once.

**Q3: When should you use a for loop instead of a while loop?**

A for loop is ideal when the exact number of iterations is known before entering the loop. A while loop is better when the number of iterations is unknown and depends on a condition that changes dynamically during execution.

**Q4: Explain the difference between break and continue.**

break completely terminates the loop and jumps out of it. continue skips only the current iteration and forces the loop to proceed with the next iteration.

**Q5: Can we use the enhanced for (for-each) loop to modify array elements?**

No, the enhanced for loop is strictly for reading values. Since it doesn't give you access to the index, you cannot use it to modify the elements of an array.
