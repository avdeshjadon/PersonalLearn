# OPERATORS IN JAVA

## Concept Introduction

Operators symbols hote hain jo variables/values par operation perform karte hain.

```java
int c = a + b;
```

Here `+` is an operator.

---

## Types of Operators

| Type | Operators |
|------|-----------|
| Arithmetic | `+ - * / %` |
| Relational | `== != > < >= <=` |
| Logical | `&& || !` |
| Assignment | `= += -= *= /= %=` |
| Unary | `++ -- + - !` |
| Ternary | `condition ? value1 : value2` |
| Bitwise | `& | ^ ~ << >>` |
| instanceof | `obj instanceof ClassName` |

---

## Examples

Arithmetic:

```java
int sum = 10 + 20;
```

Relational:

```java
System.out.println(10 > 5); // true
```

Logical:

```java
System.out.println(10 > 5 && 5 > 2); // true
```

Ternary:

```java
int max = (a > b) ? a : b;
```

instanceof:

```java
System.out.println(name instanceof String);
```

---

## Operator Precedence

Precedence decides which operator executes first.

```java
int result = 10 + 5 * 2;
```

Output:

```text
20
```

Because `*` has higher precedence than `+`.

Use brackets for clarity:

```java
int result = (10 + 5) * 2;
```

---

## Interview Questions

**Q1: What are operators?**

Operators are symbols used to perform operations on values or variables.

**Q2: What is ternary operator?**

It is a short form of if-else:

```java
condition ? value1 : value2
```

**Q3: What is operator precedence?**

It decides the order in which operators are evaluated.

