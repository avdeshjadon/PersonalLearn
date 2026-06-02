# VARIABLES AND DATA TYPES

## Concept Introduction

**Variable** ek named memory location hota hai jisme value store hoti hai. It acts like a container jisme aap data store karte ho aur program execution ke dauran uski value change (vary) ho sakti hai.

**Data Type** batata hai ki variable kis type ka data store karega, aur memory me uske liye kitni space allocate (reserve) karni hai.

```java
int age = 20;
```

Here:
- `int` = Data type (integer store karega)
- `age` = Variable (memory container ka naam)
- `20` = Value (jo assign hui hai)

---

## Declaration vs Initialization

**1. Declaration:** Variables ko pehle declare karna padta hai so that compiler ko pata chal sake.
```java
int age;
```

**2. Initialization:** First time value assign karne ko initialization kehte hain.
```java
age = 20;
```

**3. Declaration + Initialization:** Dono ek sath:
```java
int age = 20;
```

---

## Types of Variables

Java mein variables commonly teen (3) types ke hote hain:

### 1. Local Variable
- Jo variable kisi method, constructor ya block ke andar declare hota hai usko local variable kehte hain.
- Inka scope sirf usi block ya method tak limited hota hai.
- Inhe by default koi value nahi milti. Use karne se pehle initialize karna MUST hai.

```java
public void myMethod() {
    int count = 10; // Local variable
    System.out.println(count);
}
```

### 2. Instance Variable (Non-Static)
- Jo variable class ke andar hota hai, par kisi method ya block ke bahar.
- Memory tab allocate hoti hai jab class ka object/instance create hota hai.
- Har object ke paas apni separate copy hoti hai.
- Default value automatically mil jaati hai agar initialize na karein.

```java
class Student {
    String name; // Instance variable
    int rollNo;  // Instance variable
}
```

### 3. Static Variable (Class Variable)
- Is variable ke sath `static` keyword use hota hai.
- Yeh object se nahi balki class se directly related hota hai.
- Pure class level par iski sirf **ek hi copy** share hoti hai saare objects ke beech.
- Program start hote hi memory milti hai (class loading ke time).

```java
class Student {
    static String collegeName = "ABC College"; // Static variable
}
```

---

## Data Types in Java

Data types main do (2) categories mein divided hain:
1. **Primitive Data Types** (Built-in data types)
2. **Non-Primitive Data Types** (Reference data types)

---

### 1. Primitive Data Types
Java mein total 8 primitive data types hain. Ye simple values store karte hain aur directly memory me store hote hain.

| Type | Stores | Size | Range | Default Value | Example |
|------|---------|------|-------|---------------|---------|
| `byte` | Small integer | 1 byte (8 bits) | -128 to 127 | `0` | `byte b = 10;` |
| `short` | Integer | 2 bytes (16 bits) | -32,768 to 32,767 | `0` | `short s = 100;` |
| `int` | Integer (default) | 4 bytes (32 bits) | approx ±2 Billion | `0` | `int n = 1000;` |
| `long` | Large integer | 8 bytes (64 bits) | very large numbers | `0L` | `long l = 100000L;` |
| `float` | Decimal points | 4 bytes | 6-7 decimal digits | `0.0f` | `float f = 10.5f;` |
| `double` | Decimal (default)| 8 bytes | 15 decimal digits | `0.0d` | `double d = 10.556;` |
| `char` | Single character | 2 bytes (Unicode) | '\u0000' to '\uffff' | `'\u0000'` (null) | `char c = 'A';` |
| `boolean`| True/False value | 1 bit (info representation)| `true` or `false` | `false` | `boolean ok = true;` |

#### Points to Remember:
- Dekho `float` declare karte time end me `f` ya `F` lagana padta hai (`float f = 3.14f`), warna Java usey `double` maan leta hai.
- `long` ko assign karte time end me `l` ya `L` lagate hain (`long num = 1000L`).
- Java character ke liye Unicode system follow karta hai isliye `char` 2 bytes leta hai (baaki language C/C++ me ye 1 byte leta hai ASCII ki wajah se).

---

### 2. Non-Primitive Data Types (Reference Types)
- Ye variables data ki actual value nahi hold karte, balki heap memory me object ka **address/reference** hold karte hain.
- Har non-primitive type ka default value `null` hota hai.
- Iska size fix nahi hota hai (depends on hardware and VM).

Examples of Non-Primitive Data Types:
1. **String:** Sequence of characters. (e.g., `String name = "Deepak";`)
2. **Arrays:** Collection of similar type elements. (e.g., `int[] arr = {1, 2, 3};`)
3. **Classes:** User defined custom data type. (e.g., Objects created by `Student s = new Student();`)
4. **Interfaces:** Blueprint for classes.

#### Difference Between Primitive and Non-Primitive Types
| Primitive | Non-Primitive |
|-----------|---------------|
| Language mein pehle se defined hain. | Programmer khud create kar sakta hai (except `String`, `Array`). |
| Inke paas apni methods nahi hoti (cannot call methods). | Inke objects bante hain to ye methods call kar sakte hain. |
| Memory location par directly value store hoti hai. | Memory reference (address) store karta hai actual object ka. |
| Start with lowercase letter (e.g., `int`, `boolean`). | Conventionally start with Uppercase letter (e.g., `String`, `Scanner`). |
| Inka size fixed hota hai. | Inka size variable/dynamic hota hai. |
| Inka default value 0/false wagera hota hai. | Inka default value hamesha `null` hota hai. |

---

## Scope and Lifetime

**Scope** means where variable can be accessed inside a program.
**Lifetime** means how long variable exists in the memory before being collected by GC (Garbage Collector).

```java
void testMethod() {
    int x = 10; // 'x' scope is only within this testMethod block
} 
// 'x' cannot be accessed here.
```

---

## Interview Questions

**Q1: What is a variable?**
Variable is a named memory location used to store data that can change during program execution.

**Q2: What is data type?**
Data type defines what kind of value a variable can store and how much memory to allocate for it.

**Q3: Difference between local and instance variable?**
Local variable kisi method/block ke andar hota hai. Instance variable class ke andar but method ke bahar hota hai, and is tied to an object.

**Q4: Do local variables get default values?**
No. Local variables must be initialized explicitly before use, otherwise compiler throws an error. Instance and static variables ko by default unka value mil jaata hai (like int->0, Object->null).

**Q5: Difference between Primitive and Non-Primitive data types?**
Primitives directly value store karte hain aur built-in hain (int, float). Non-primitive reference (address) store karte hain aur memory me object represent karte hain (String, Arrays, Classes).

**Q6: Java 'char' 2 bytes kyun leta hai?**
Kyunki Java ASCII encoding nahi, Unicode encoding (UTF-16) use karta hai to support worldwide languages.

