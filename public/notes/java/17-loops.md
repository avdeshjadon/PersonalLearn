# LOOPS AND FLOW CONTROL

## Concept Introduction

Loops same code ko repeatedly execute karne ke liye use hote hain.

Java mein common loops:

- `for`
- `while`
- `do-while`
- enhanced for loop

---

## for Loop

Known number of repetitions ke liye.

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

---

## while Loop

Condition true hone tak loop chalta hai.

```java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
```

---

## do-while Loop

At least one time execute hota hai.

```java
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

---

## Enhanced for Loop

Arrays/collections traverse karne ke liye.

```java
int[] nums = {10, 20, 30};

for (int n : nums) {
    System.out.println(n);
}
```

---

## break and continue

`break` loop ko stop karta hai.

```java
if (i == 3) break;
```

`continue` current iteration skip karta hai.

```java
if (i == 3) continue;
```

---

## Interview Questions

**Q1: Difference between while and do-while?**

`while` condition pehle check karta hai. `do-while` body pehle execute karta hai, condition baad mein check karta hai.

**Q2: What is enhanced for loop?**

It is used to iterate arrays/collections easily.

**Q3: Difference between break and continue?**

`break` loop terminate karta hai. `continue` current iteration skip karta hai.

