# STRINGS IN JAVA

## Concept Introduction

Programming me jab hume text (jaise kisi ka naam, address, ya message) store karna hota hai, toh hum **String** ka use karte hain. String asal me characters (jaise 'A', 'b', 'c') ki ek ladi (sequence) hoti hai.

> **Interview Definition:** In Java, a String is an object that represents a sequence of character values. It is backed by a character array internally. The `java.lang.String` class is used to create a string object.

### Quick Summary Table

| Class | Mutability (Changeable?) | Thread-Safety | Performance |
|-------|--------------------------|---------------|-------------|
| **String** | Immutable (Change nahi ho sakta) | Thread-safe (implicitly) | Slowest (kyunki har baar naya object banta hai) |
| **StringBuilder** | Mutable (Change ho sakta hai) | Not Thread-safe | Fastest (kyunki single thread pe chalta hai) |
| **StringBuffer** | Mutable (Change ho sakta hai) | Thread-safe (Synchronized) | Slower than StringBuilder |

---

## 1. String is Immutable (The Most Important Concept)

> **Interview Definition:** Strings in Java are immutable, which means once a String object is created, its data or state cannot be changed. If you try to modify it, a new String object is created instead.

- **Kyu?** Agar hum ek string ko change karte hain, toh original value waise hi rehti hai, aur memory me ek nayi (new) string ban jati hai.

```java
String s = "Java";
s.concat(" Language"); // Ye nayi string "Java Language" banayega par 's' me save nahi karega
System.out.println(s); // Output: Java (Original change nahi hui)

// Agar change karna hai toh variable me dubara save karna padega
s = s.concat(" Language"); 
System.out.println(s); // Output: Java Language
```

---

## 2. String Constant Pool (SCP)

> **Interview Definition:** The String Constant Pool is a special memory region inside the Heap memory where Java stores String literals. It is used to save memory by reusing identical String objects.

- Jab hum double quotes `""` se string banate hain, toh Java pehle check karta hai ki kya SCP me wo string pehle se hai. 
- Agar hai, toh wahi purana reference (memory address) de deta hai. Naya object nahi banata!

```java
String a = "Java"; // Nayi string pool me banegi
String b = "Java"; // Nayi nahi banegi, 'a' wali hi mil jayegi

System.out.println(a == b); // Output: true (Dono same memory address point kar rahe hain)
```

---

## 3. String Comparison (`==` vs `equals()`)

Interviews me sabse zyada poocha jane wala topic!

> **Interview Definition:** The `==` operator compares the memory reference (address) of two objects, while the `equals()` method compares the actual content (values) inside the objects.

```java
String s1 = new String("Hello"); // 'new' keyword se Heap me naya object banega
String s2 = new String("Hello"); // Ek aur naya object Heap me banega

// Memory addresses alag hain
System.out.println(s1 == s2); // Output: false

// Par andar ka text same hai
System.out.println(s1.equals(s2)); // Output: true
```

---

## 4. StringBuilder vs StringBuffer

Kyunki `String` immutable (unchangeable) hoti hai, agar hume ek aisi string banani hai jise hum bar-bar change kar sakein bina memory waste kiye, toh hum in dono classes ka use karte hain.

- **StringBuilder:** Bohot fast hai, par ek time par 2 threads isko safely use nahi kar sakte (Not thread-safe). Normally humesha yahi use karna chahiye.
- **StringBuffer:** Thoda slow hai, par thread-safe hai (Synchronized). Iska use tab karte hain jab multi-threading ho rahi ho.

```java
// StringBuilder Example
StringBuilder sb = new StringBuilder("Hello");
sb.append(" Java"); // Original object me hi jud gaya
System.out.println(sb); // Output: Hello Java
```

---

## 5. Important String Methods

String ke paas kaafi saare useful methods hote hain text manipulation ke liye. 

| Method                                 | Description                                                       | Return Type |
| :------------------------------------- | :---------------------------------------------------------------- | :---------- |
| **`charAt(int index)`**                | Returns the character at the specified index.                     | `char`      |
| **`length()`**                         | Returns the length of the string.                                 | `int`       |
| **`substring(int beginIndex)`**        | Returns a substring from the `beginIndex` to the end.             | `String`    |
| **`substring(int begin, int end)`**    | Returns a substring from `begin`(inclusive) to `end`(exclusive).  | `String`    |
| **`contains(CharSequence s)`**         | Checks if the string contains the specified sequence.             | `boolean`   |
| **`equals(Object another)`**           | Compares the content of the string.                               | `boolean`   |
| **`equalsIgnoreCase(String another)`** | Compares string content ignoring case.                            | `boolean`   |
| **`isEmpty()`**                        | Checks if the string length is 0.                                 | `boolean`   |
| **`concat(String str)`**               | Concatenates the specified string to the end.                     | `String`    |
| **`replace(char old, char new)`**      | Replaces all occurrences of a character with a new one.           | `String`    |
| **`split(String regex)`**              | Splits the string around matches of the given regular expression. | `String[]`  |
| **`indexOf(String s)`**                | Returns the index of the first occurrence of the substring.       | `int`       |
| **`toLowerCase()`**                    | Converts all characters to lower case.                            | `String`    |
| **`toUpperCase()`**                    | Converts all characters to upper case.                            | `String`    |
| **`trim()`**                           | Removes leading and trailing whitespace.                          | `String`    |
| **`toCharArray()`**                    | Converts the string to a new character array.                     | `char[]`    |
| **`valueOf(int i)`**                   | Returns the string representation of the int argument.            | `String`    |

---

## Interview Questions

**Q1: Why are Strings immutable in Java?**

Strings are immutable in Java for several reasons:
1. **Security:** Strings are widely used for database URLs, usernames, and passwords. Immutability ensures that once assigned, they cannot be changed maliciously.
2. **String Constant Pool:** Immutability allows Java to cache String literals in the SCP, significantly saving memory because multiple references can point to the same object safely.
3. **Thread Safety:** Since Strings cannot be modified, they are inherently thread-safe and can be shared among multiple threads without synchronization.
4. **Caching Hashcode:** The hashcode of a String is heavily used in HashMaps. Immutability guarantees that the hashcode will never change, allowing Java to cache it for faster performance.

**Q2: What is the difference between creating a String using double quotes (`""`) and the `new` keyword?**

When you create a String using double quotes (`String s = "Hello"`), Java checks the String Constant Pool. If the string exists, it returns the reference; if not, it creates it in the pool. 
When you use the `new` keyword (`String s = new String("Hello")`), Java forcefully creates a new String object in the general Heap memory, bypassing the pool for the object creation (though the literal "Hello" may still be placed in the pool).

**Q3: Explain the difference between `==` and `.equals()`?**

The `==` operator checks if two reference variables point to the exact same object in memory (reference comparison). The `.equals()` method evaluates whether the sequence of characters within the two String objects is identical (content comparison).

**Q4: Which one is better: `StringBuilder` or `StringBuffer`?**

`StringBuilder` is almost always preferred because it is faster and more efficient as it is not synchronized. You should only use `StringBuffer` in a multi-threaded environment where multiple threads are modifying the same string simultaneously.
