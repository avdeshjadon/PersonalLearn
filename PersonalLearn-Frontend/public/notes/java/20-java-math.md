# Java Math

The `java.lang.Math` class contains many methods that allow you to perform essential mathematical operations on numbers. Since it is located in the `java.lang` package, you don't need to import it explicitly; it is always available.

Because all methods in the `Math` class are `static`, you call them directly on the class itself (e.g., `Math.max(5, 10)`), rather than creating an object of the `Math` class.

---

## 1. Basic Mathematical Methods

### `Math.max(x, y)` and `Math.min(x, y)`
Used to find the highest or lowest value between two numbers.

```java
int highest = Math.max(5, 10);  // Returns 10
int lowest  = Math.min(5, 10);  // Returns 5
```

### `Math.abs(x)`
Returns the absolute (positive) value of a number.

```java
double positiveVal = Math.abs(-4.7);  // Returns 4.7
int absInt = Math.abs(-100);          // Returns 100
```

---

## 2. Exponents and Roots

### `Math.pow(x, y)`
Returns the value of `x` raised to the power of `y`.
> **Note:** `Math.pow()` always returns a `double`, even if the arguments are integers.

```java
double power = Math.pow(2, 8);  // Returns 256.0
// (2 * 2 * 2 * 2 * 2 * 2 * 2 * 2)
```

### `Math.sqrt(x)` and `Math.cbrt(x)`
Returns the square root or cube root of a number.

```java
double squareRoot = Math.sqrt(64);  // Returns 8.0
double cubeRoot = Math.cbrt(27);    // Returns 3.0
```

---

## 3. Rounding Methods

Java has several methods for rounding floating-point numbers to integers:

| Method | Description | Example | Result |
|--------|-------------|---------|--------|
| `Math.round(x)` | Rounds to the nearest integer. | `Math.round(4.6)` | `5` |
| `Math.ceil(x)` | Rounds **up** to the smallest integer >= `x`. | `Math.ceil(4.1)` | `5.0` |
| `Math.floor(x)` | Rounds **down** to the largest integer <= `x`. | `Math.floor(4.9)` | `4.0` |

```java
System.out.println(Math.round(4.4)); // Outputs 4
System.out.println(Math.round(4.5)); // Outputs 5
System.out.println(Math.ceil(4.1));  // Outputs 5.0
System.out.println(Math.floor(4.9)); // Outputs 4.0
```

---

## 4. Random Numbers

### `Math.random()`
Returns a random `double` value between `0.0` (inclusive) and `1.0` (exclusive).

```java
double rand = Math.random(); 
// Might output something like: 0.8247952136
```

**Generating a random integer in a specific range:**
If you want a random integer between `0` and `100`, you must multiply the result and then cast it to an `int`:

```java
// 0 to 100
int randomNum = (int)(Math.random() * 101);  

// Formula for range [min, max]:
// (int)(Math.random() * (max - min + 1)) + min
int min = 50;
int max = 100;
int rangeNum = (int)(Math.random() * (max - min + 1)) + min; 
```

---

## 5. Important Mathematical Constants

The `Math` class also provides two highly useful static constants:

```java
System.out.println(Math.PI); // 3.141592653589793 (Ratio of circumference to diameter)
System.out.println(Math.E);  // 2.718281828459045 (Base of the natural logarithms)
```

---

## 6. Trigonometric Methods (Advanced)

If you are building mathematical or physics-based applications, the `Math` class includes trigonometric functions. They accept angles in **radians**, not degrees.

```java
double degrees = 90.0;
double radians = Math.toRadians(degrees);

System.out.println(Math.sin(radians)); // 1.0
System.out.println(Math.cos(radians)); // 0.0 (approximately)
System.out.println(Math.tan(radians)); // infinity (approximately)
```

---

## Important Interview Questions

**Q1: What happens if you try to create an object of the `Math` class using `new Math()`?**
**Answer:** It will result in a compile-time error. The `Math` class constructor is marked as `private` to prevent instantiation, as all of its methods and variables are `static`. It is designed to be a utility class.

**Q2: What is the return type of `Math.round(float a)` and `Math.round(double a)`?**
**Answer:** 
- `Math.round(float)` returns an `int`.
- `Math.round(double)` returns a `long`.

**Q3: How do you generate a random integer between 1 and 10?**
**Answer:** 
```java
int randomNum = (int)(Math.random() * 10) + 1;
```
This scales the `[0.0, 1.0)` range to `[0.0, 10.0)`, drops the decimals by casting to `int` (giving `0` to `9`), and adds `1` (giving `1` to `10`).
