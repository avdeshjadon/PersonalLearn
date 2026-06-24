# Java Booleans

Very often in programming, you will need a data type that can only have one of two values, like:
- YES / NO
- ON / OFF
- TRUE / FALSE

For this, Java has a `boolean` data type, which can only take the values `true` or `false`.

---

## 1. Boolean Values

A boolean type is declared with the `boolean` keyword and can only take the values `true` or `false`.

```java
boolean isJavaFun = true;
boolean isFishTasty = false;
System.out.println(isJavaFun);     // Outputs true
System.out.println(isFishTasty);   // Outputs false
```

---

## 2. Boolean Expressions

A Boolean expression is a Java expression that returns a Boolean value: `true` or `false`.
You can use a comparison operator, such as the **greater than** (`>`) operator, to find out if an expression (or a variable) is true or false:

```java
int x = 10;
int y = 9;
System.out.println(x > y); // returns true, because 10 is higher than 9
```

Or even easier:
```java
System.out.println(10 > 9); // returns true
```

You can also use the **equal to** (`==`) operator to evaluate an expression:
```java
int x = 10;
System.out.println(x == 10); // returns true
System.out.println(15 == 10); // returns false
```

---

## 3. Real-Life Example

Let's think of a "real-life" example where we need to find out if a person is old enough to vote.

```java
int myAge = 25;
int votingAge = 18;
System.out.println(myAge >= votingAge); // Outputs true
```

---

## Important Interview Questions

**Q1: What is the default value of a boolean variable in Java?**
**Answer:** The default value of a primitive `boolean` variable (if declared as an instance or static variable) is `false`.

**Q2: How much memory does a boolean variable take in Java?**
**Answer:** The JVM specification does not strictly define the size of a `boolean`. However, it typically takes 1 bit of information to represent it, but its actual size in memory might be larger (like 1 byte) depending on the JVM implementation because of memory alignment.

**Q3: Can we assign 0 or 1 to a boolean variable like in C/C++?**
**Answer:** No, in Java, `boolean` is strictly `true` or `false`. You cannot cast or assign an integer (`0` or `1`) to a `boolean` variable. Doing so will cause a compile-time error.
