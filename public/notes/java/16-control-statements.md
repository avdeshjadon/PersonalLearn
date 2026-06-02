# CONTROL STATEMENTS

## Concept Introduction

Control statements program ka flow control karte hain.

Main types:

- `if`
- `if-else`
- `else-if`
- nested `if`
- `switch`

---

## if Statement

```java
if (age >= 18) {
    System.out.println("Adult");
}
```

---

## if-else Statement

```java
if (marks >= 33) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}
```

---

## else-if Ladder

```java
if (marks >= 90) {
    System.out.println("A");
} else if (marks >= 75) {
    System.out.println("B");
} else {
    System.out.println("C");
}
```

---

## Nested if

```java
if (age >= 18) {
    if (hasId) {
        System.out.println("Allowed");
    }
}
```

---

## switch Statement

```java
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Invalid");
}
```

---

## switch Expression

```java
String result = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    default -> "Invalid";
};
```

---

## Interview Questions

**Q1: What are control statements?**

They control the flow of execution based on conditions.

**Q2: Difference between if-else and switch?**

`if-else` is better for ranges/complex conditions. `switch` is better for fixed values.

**Q3: Why break is used in switch?**

To stop fall-through to next case.

