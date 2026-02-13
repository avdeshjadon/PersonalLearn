# String Class in Java

**String** is a user-defined class type data type defined in the `java.lang` package. It represents a sequence of characters.

## Key Interfaces Implemented

The String class implements three important interfaces:

1.  **CharSequence**:
    - **Reason**: To acquires the property and able to make sequence of characters into single unite.
    - **Result**: Allows String to be treated interchangeably with other character sequences like `StringBuilder` and `StringBuffer`.
2.  **Comparable**:
    - **Reason**: To allow String objects to compare themselves with other String objects.
    - **Result**: Enables natural sorting (lexicographical order) of Strings.
3.  **Serializable**:
    - **Reason**: To allow the state of String objects to be saved and restored.
    - **Result**: String objects can be serialized (converted to byte stream) and deserialized (recreated from byte stream) for file I/O or networking.

---

## Important Points to Note

1.  **Final Class**: The String class is declared as `final`, so it **cannot have subclasses**. You cannot extend the String class.
2.  **Immutable**: String objects are immutable. Once a String object is created, we **cannot change its state or data**. Any modification creates a new object.
3.  **Method Overrides**: The String class overrides the following methods from the `Object` class:
    - `toString()`: Returns the string content itself.
    - `hashCode()`: Returns a hash based on the character sequence.
    - `equals(Object)`: Compares the **content** of the strings, not the reference.
4.  **Constructors**: The String class has many overloaded constructors:
    - No-argument constructor: `new String()`
    - String type constructor: `new String("value")`
    - Character array type constructor: `new String(char[] array)`

---

## String Creation and Memory Map

**There are two ways to create a String object:**

### 1. By Literal (Without `new` keyword)

- **Syntax**: `String s = "Jspiders";`
- **Memory**: Stored in the **String Constant Pool (SCP)** area inside the Heap.
- **Feature**: **Does NOT allow duplicates**. If the string already exists in SCP, the existing reference is returned.

### 2. By `new` Keyword

- **Syntax**: `String s = new String("Jspiders");`
- **Memory**: Stored in the **Non-Constant Pool (Heap)** area.
- **Feature**: **Allows duplicates**. A new object is created every time `new` is used, even if the content is the same.

### Memory Diagram Visualization

```
╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                ║
║                          ╔════════════════════════════════════╗                                ║
║                          ║   STRING MEMORY ALLOCATION MAP     ║                                ║
║                          ╚════════════════════════════════════╝                                ║
║                                                                                                ║
╠════════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                                ║
║          STACK AREA                                    HEAP AREA                               ║
║       ┏━━━━━━━━━━━━━━━┓                     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓       ║
║       ┃               ┃                     ┃                                          ┃       ║
║       ┃ s1="Jspiders" ┃─────────────────────╢      String Constant Pool (SCP)          ┃       ║
║       ┃               ┃                     ┃    ┌────────────────────────────────┐    ┃       ║
║       ┃ s2="Jspiders" ┃───────────┐         ┃    │     "Jspiders" (Ref:1001)      │    ┃       ║
║       ┃               ┃           └─────────╢───▶│                                │    ┃       ║
║       ┗━━━━━━━━━━━━━━━┛                     ┃    └────────────────────────────────┘    ┃       ║
║                                             ┃                                          ┃       ║
║                                             ┃                                          ┃       ║
║       ┏━━━━━━━━━━━━━━━━━━━━━┓               ┃         Non-Constant Pool Area           ┃       ║
║       ┃                     ┃               ┃    ┌────────────────────────────────┐    ┃       ║
║       ┃ s3=new String(...)  ┃───────────────╢───▶│     "Jspiders" (Ref:2001)      │    ┃       ║
║       ┃                     ┃               ┃    └────────────────────────────────┘    ┃       ║
║       ┃                     ┃               ┃                                          ┃       ║
║       ┃ s4=new String(...)  ┃───────────────╢───▶┌────────────────────────────────┐    ┃       ║
║       ┃                     ┃               ┃    │     "Jspiders" (Ref:2002)      │    ┃       ║
║       ┃                     ┃               ┃    └────────────────────────────────┘    ┃       ║
║       ┗━━━━━━━━━━━━━━━━━━━━━┛               ┃                                          ┃       ║
║                                             ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛       ║
║                                                                                                ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
```

### Code Example: Literal vs New Keyword

```java
// 1. Using Literal (Constant Pool)
String s1 = "Jspiders";
String s2 = "Jspiders";

System.out.println(s1 == s2);       // true (Addresses are same: 1000 == 1000)
System.out.println(s1.equals(s2));  // true (Content is same)

// 2. Using new Keyword (Non-Constant Pool)
String s3 = new String("Jspiders");
String s4 = new String("Jspiders");

System.out.println(s3 == s4);       // false (Addresses are different: 2000 != 3000)
System.out.println(s3.equals(s4));  // true (Content is same)
```

---

## Immutability Example

When we try to modify a String, a new object is created. The old object remains unchanged.

```java
String s1 = "Jspiders";

// Concatenation creates a new object
String s2 = s1.concat(" & Qspiders");
// OR: String s2 = s1 + " & Qspiders";

System.out.println(s1); // Output: Jspiders (Original object is unchanged)
System.out.println(s2); // Output: Jspiders & Qspiders (New object)
```

### Visualizing Immutability

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║            s1 ────────────────────▶  ┌────────────────┐                   ║
║                                      │  "Jspiders"    │                   ║
║                                      └────────────────┘                   ║
║                                                                           ║
║            s2 ────────────────────▶  ┌───────────────────────────────┐    ║
║                                      │    "Jspiders & Qspiders"      │    ║
║                                      └───────────────────────────────┘    ║
║                                                                           ║
║  (Notice how s1 still points to the old object, it didn't change!)        ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## StringBuilder & StringBuffer: The Mutable Alternatives

Since `String` is immutable, performing frequent modifications (like in a loop) creates too many temporary objects, wasting memory and performance. To solve this, Java provides `StringBuilder` and `StringBuffer`.

## What are they?

- They are mutable classes used to store and manipulate strings.
- When performing frequent modifications (like inside a loop), `String` creates too many temporary objects.
- This wastes memory and reduces performance.
- To solve this problem, Java provides:
  - `StringBuilder`
  - `StringBuffer`

### Hierarchy & Properties

1.  **Package**: `java.lang`
2.  **Parent**: Both extend `Object` class.
3.  **Interfaces Implemented**:
    - `Serializable` (Can be saved/transferred)
    - `CharSequence` (Is a sequence of chars)
    - **Appendable** (Can append characters)
    - **NOTE**: They do **NOT** implement `Comparable`. You cannot sort them directly using `Collections.sort()`.
4.  **Mutability**: You can change the content without creating new objects.
5.  **Capacity (Internal Working)**:
    - **Default**: When creating an empty object, it reserves space for **16 characters** by default.
    - **With Data**: `new StringBuilder("Java")` reserves `16 + 4 (length of "Java") = 20`.

---

## Detailed Differences: StringBuffer vs StringBuilder

| Feature             | StringBuffer (Legacy - JDK 1.0)                                                           | StringBuilder (Modern - JDK 1.5)                                                               |
| :------------------ | :---------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| **Synchronization** | **Synchronized**. Methods are thread-safe. Only one thread can access a method at a time. | **Non-Synchronized**. Methods are NOT thread-safe. Multiple threads can access simultaneously. |
| **Performance**     | **Slower**. Acquiring and releasing locks (synchronization) takes time.                   | **Faster**. No locking overhead.                                                               |
| **Thread Safety**   | **Thread-Safe**. Safe to use when multiple threads share the same object.                 | **Not Thread-Safe**. Use only within a single thread (local scope).                            |
| **Usage**           | Use when multiple threads might access the string buffer.                                 | Use in most cases (single-threaded environments) for better performance.                       |

---

## Important Methods (Common to Both)

Since both classes have the same API, these methods work on both:

1.  **`append(String s)`**: Adds text to the end.
2.  **`insert(int index, String s)`**: Inserts text at the specified index.
3.  **`delete(int start, int end)`**: Removes characters from start to end-1.
4.  **`reverse()`**: Reverses the character sequence.
5.  **`capacity()`**: Returns current capacity.
6.  **`length()`**: Returns current length (number of characters).

### Code Example: Mutability and Methods

```java
public class BufferBuilderDemo {
    public static void main(String[] args) {
        // 1. Creating StringBuilder
        StringBuilder sb = new StringBuilder("Java");

        // 2. Append (Modified same object)
        sb.append(" Programming");
        System.out.println(sb); // Output: Java Programming

        // 3. Insert
        sb.insert(5, "Core ");
        System.out.println(sb); // Output: Java Core Programming

        // 4. Reverse
        sb.reverse();
        System.out.println(sb); // Output: gnimmargorP eroC avaJ

        // 5. Capacity vs Length
        // Default capacity is 16 + length of "Java" (4) = 20
        System.out.println("Capacity: " + new StringBuffer("Java").capacity());
    }
}
```

---

## When to Use What?

1.  **`String`**: If data is constant and won't change (e.g., Database URL, Error Messages).
2.  **`StringBuilder`**: If specific data changes frequently (e.g., inside a loop), and it is used by only one thread. **(Recommended for 90% of cases)**.
3.  **`StringBuffer`**: If specific data changes frequently, and multiple threads are modifying it.

---

## Important String Methods

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






