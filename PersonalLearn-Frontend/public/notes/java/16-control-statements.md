# CONTROL STATEMENTS (DECISION MAKING)

## Concept Introduction

Programming me kabhi-kabhi hume decision lena padta hai, jaise "agar user ki age 18 se upar hai toh 'Adult' print karo, warna 'Minor' print karo". Aise decisions lene ke liye hum **Control Statements** ka use karte hain.

> **Interview Definition:** Control statements in Java are used to control the flow of execution of a program based on certain conditions. They allow the program to make decisions, execute a block of code conditionally, or jump to another part of the code.

### Quick Summary Table 

| Statement Type | Used For (Kab use karein?) |
|----------------|----------------------------|
| **`if`** | Sirf ek condition check karni ho aur uske sahi hone par hi kuch karna ho. |
| **`if-else`** | Ek condition aur uske galat hone par doosra rasta (warna ye karo). |
| **`else-if` ladder** | Bohot saari conditions ek ke baad ek check karni hon (jaise marks se grade nikalna). |
| **Nested `if`** | Pehli shart puri hone ke baad uske andar doosri shart (condition) check karni ho. |
| **`switch`** | Ek hi variable ki alag-alag exact values match karni hon (ye `else-if` ka clean/saaf tareeka hai). |

---

## 1. The `if` Statement

> **Interview Definition:** The `if` statement is the most basic control flow statement. It evaluates a boolean expression and executes the block of code inside it only if the condition evaluates to `true`.

- Ye sabse simple statement hai.
- Agar condition **true** hai, toh code chalega. Agar false hai, toh kuch nahi hoga (skip ho jayega).

```java
int age = 20;

if (age >= 18) {
    // Ye line tabhi print hogi jab age 18 ya usse badi hogi
    System.out.println("You are an Adult."); 
}
```

---

## 2. The `if-else` Statement

> **Interview Definition:** The `if-else` statement provides an alternative path of execution. If the `if` condition evaluates to `true`, the `if` block is executed; otherwise, the `else` block is executed.

- Isme do raste hote hain: "Agar ye sahi hai toh ye karo, **warna** (else) wo karo".
- Ek time par dono me se koi ek hi block chalega.

```java
int marks = 30;

if (marks >= 33) {
    System.out.println("Pass");
} else {
    System.out.println("Fail"); // Ye print hoga kyunki marks 33 se kam hain
}
```

---

## 3. The `else-if` Ladder

> **Interview Definition:** The `else-if` ladder is used when we need to check multiple conditions sequentially. It executes the block of code associated with the first true condition it encounters.

- Jab humare paas 2 se zyada choices hon, tab hum `else-if` ka use karte hain.
- Padhne ka tareeka: "Agar condition 1 true hai toh ruk jao, warna agar condition 2 true hai toh ruk jao, warna... aakhri wala chala do".

```java
int marks = 85;

if (marks >= 90) {
    System.out.println("Grade: A");
} else if (marks >= 75) {
    System.out.println("Grade: B"); // Ye execute hoga
} else if (marks >= 50) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
```

---

## 4. Nested `if` Statement

> **Interview Definition:** A nested `if` is an `if` statement placed inside another `if` statement. It is used when a condition needs to be checked only if a previous condition is true.

- Ek `if` ke andar doosra `if`.
- Ye tab kaam aata hai jab pehli shart puri hone ke baad hume dusri shart check karni ho.

```java
int age = 20;
boolean hasVoterId = true;

if (age >= 18) { // Pehli condition
    if (hasVoterId) { // Dusri condition
        System.out.println("You can vote!");
    } else {
        System.out.println("You need a Voter ID to vote.");
    }
}
```

---

## 5. The `switch` Statement

> **Interview Definition:** The `switch` statement is a multi-way branch statement that evaluates an expression and executes the case block that matches the value of the expression. It is generally cleaner and faster than a large `else-if` ladder for exact value matches.

- Jab ek hi variable ko bohot saari exact values se compare karna ho (jaise week ke 7 din), toh `switch` use karna `else-if` se behtar aur saaf lagta hai.
- **Rule:** Har `case` ke aakhir mein `break` lagana zaroori hai, warna uske aage ke saare cases bhi automatically execute ho jayenge (isko "Fall-through" kehte hain).

```java
int day = 2;

switch (day) {
    case 1:
        System.out.println("Monday");
        break; // Yahan rukna zaroori hai
    case 2:
        System.out.println("Tuesday"); // Ye execute hoga
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        // Agar koi bhi case match na kare, toh ye chalega (jaise 'else')
        System.out.println("Invalid day"); 
}
```

---

## 6. Switch Expression (Modern Java Feature)

Java 14 ke baad `switch` ko likhne ka naya aur chota tareeka aa gaya hai jisme `break` likhne ki zaroorat nahi padti aur hum result ko directly variable me save kar sakte hain. Isme `->` (arrow) ka use hota hai.

```java
int day = 2;

String result = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday"; // Result me "Tuesday" save ho jayega
    case 3 -> "Wednesday";
    default -> "Invalid day";
};

System.out.println(result);
```

---

## Interview Questions

**Q1: What are control statements in Java?**

Control statements are statements that determine the flow of execution in a Java program. They allow the program to make decisions (using `if-else`, `switch`) or repeat blocks of code (loops).

**Q2: What is the difference between an `else-if` ladder and a `switch` statement?**

- `else-if` can check complex boolean expressions, ranges (like `x > 10 && x < 20`), and multiple variables.
- `switch` can only check exact matching values of a single expression (like integers, strings, or enums).
- `switch` is generally more readable and slightly faster than a long `else-if` ladder when checking specific constant values.

**Q3: What is "Fall-through" in a switch statement?**

In a traditional `switch` statement, if a `case` matches and there is no `break` statement at the end of that block, the execution will "fall through" and automatically execute the code in the subsequent cases until a `break` is found or the switch ends.

**Q4: Can we use a `String` in a switch case?**

Yes, starting from Java 7, we can use `String` objects in the expression of a `switch` statement.

**Q5: What is the purpose of the `default` block in a switch statement?**

The `default` block is executed when none of the `case` values match the switch expression. It is similar to the `else` block in an `if-else` statement. It is optional but recommended.
