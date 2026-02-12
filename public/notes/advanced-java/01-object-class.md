# Object Class in Java

The `Object` class is the parent class of all the classes in java by default. In other words, it is the topmost class of java.

Basically, there are **12 methods** in the `Object` class, and they are listed below:

| No. | Method Name                     | Return Type | What it does?                                      |
| :-- | :------------------------------ | :---------- | :------------------------------------------------- |
| 1.  | `toString()`                    | `String`    | Returns string representation of object.           |
| 2.  | `hashCode()`                    | `int`       | Returns unique integer (memory address based).     |
| 3.  | `equals(Object obj)`            | `boolean`   | Checks if two objects are same.                    |
| 4.  | `getClass()`                    | `Class<?>`  | Returns runtime class information.                 |
| 5.  | `finalize()`                    | `void`      | **[Deprecated]** Called before garbage collection. |
| 6.  | `clone()`                       | `Object`    | Creates a copy of the object.                      |
| 7.  | `wait()`                        | `void`      | Waits indefinitely for another thread.             |
| 8.  | `wait(long timeout)`            | `void`      | Waits for specific milliseconds.                   |
| 9.  | `wait(long timeout, int nanos)` | `void`      | Waits for specific duration (more precise).        |
| 10. | `notify()`                      | `void`      | Wakes up single waiting thread.                    |
| 11. | `notifyAll()`                   | `void`      | Wakes up all waiting threads.                      |
| 12. | `registerNatives()`             | `void`      | **[Internal]** Registers native methods with JVM.  |

---

## Deep Dive: Methods of Object Class

The `Object` class provides methods that are fundamental to all objects. Below is the detailed explanation of each method in the same order as the summary table.

### 1. `public String toString()`

- **Description**: Returns a string representation of the object. It is very useful for debugging and logging.
- **Default Behavior**: Returns a string consisting of the class name, the `@` symbol, and the unsigned hexadecimal representation of the hash code (e.g., `Student@1b6d3586`).
- **Recommendation**: Always override this method to provide a meaningful string description of your object (e.g., `Student{id=101, name='Rahul'}`).
- **Can Override?**: **YES**.

### 2. `public int hashCode()`

- **Description**: Returns a unique integer value (hash code) for the object. This integer is used by hashing-based collections like `HashMap`, `HashSet`, and `Hashtable` to store objects efficiently.
- **Contract**: If two objects are equal according to `equals()`, they **MUST** have the same hash code.
- **Can Override?**: **YES**.

### 3. `public boolean equals(Object obj)`

- **Description**: Compares the given object to "this" object for equality.
- **Default Behavior**: It compares the memory addresses (reference equality `==`). It returns `true` only if both references point to the exact same object in memory.
- **Recommendation**: Override this method to compare the **content** (values) of the objects (logical equality) instead of their memory addresses.
- **Can Override?**: **YES**.

### 4. `public final Class<?> getClass()`

- **Description**: Returns the runtime class of the object. It is heavily used in the **Reflection API** to get metadata about the class (like methods, fields, constructors).
- **Code Example**: `Class c = obj.getClass();` returns the Class object.
- **Can Override?**: **NO** (It is `final` to ensure type safety).

### 5. `protected void finalize() throws Throwable`

- **Description**: Called by the Garbage Collector (GC) on an object when garbage collection determines that there are no more references to the object. It was intended for cleanup code (closing files, connections).
- **Status**: **Deprecated** since Java 9. It is unpredictable and can cause performance issues.
- **Recommendation**: Do not use it. Use `try-with-resources` or `AutoCloseable` for resource management.
- **Can Override?**: **YES**.

### 6. `protected Object clone() throws CloneNotSupportedException`

- **Description**: Creates and returns an exact copy (clone) of this object.
- **Prerequisite**: The class must implement the `Cloneable` interface (marker interface). If not, it throws `CloneNotSupportedException`.
- **Can Override?**: **YES**.

### 7. `public final void wait() throws InterruptedException`

- **Description**: Causes the current thread to wait indefinitely until another thread invokes `notify()` or `notifyAll()` on this object.
- **Usage**: Essential for inter-thread communication. The thread releases ownership of this monitor and waits.
- **Can Override?**: **NO** (It is `final`).

### 8. `public final void wait(long timeout) throws InterruptedException`

- **Description**: Causes the current thread to wait for a specific amount of time (in milliseconds), or until notified.
- **Usage**: Useful when you don't want to wait forever.
- **Can Override?**: **NO** (It is `final`).

### 9. `public final void wait(long timeout, int nanos) throws InterruptedException`

- **Description**: A finer-grained version of `wait` that allows specifying nanoseconds for higher precision.
- **Can Override?**: **NO** (It is `final`).

### 10. `public final void notify()`

- **Description**: Wakes up a single thread that is waiting on this object's monitor. If multiple threads are waiting, one of them is chosen arbitrarily.
- **Usage**: Used to signal that a condition has changed (e.g., "Data is ready").
- **Can Override?**: **NO** (It is `final`).

### 11. `public final void notifyAll()`

- **Description**: Wakes up **all** threads that are waiting on this object's monitor.
- **Usage**: Safer than `notify()` because it ensures all waiting threads get a chance to check the condition, preventing "lost signals".
- **Can Override?**: **NO** (It is `final`).

### 12. `private static native void registerNatives()`

- **Description**: This is a private, native method. It is the mechanism Java uses to link the native methods (written in C/C++) declared in the `Object` class with their actual implementations in the JVM.
- **Usage**: You generally do not see or use this method; it runs automatically when the class is loaded.
- **Can Override?**: **NO**.

## Detailed Examples

### `toString()`, `equals()`, and `hashCode()` Example

```java
class Student {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // 1. Overriding toString()
    @Override
    public String toString() {
        return "Student{id=" + id + ", name='" + name + "'}"; // Meaningful output
    }

    // 2. Overriding hashCode()
    @Override
    public int hashCode() {
        return id; // Using unique ID as hash code
    }

    // 3. Overriding equals()
    @Override
    public boolean equals(Object obj) {
        // Reference check
        if (this == obj) return true;
        // Null and Class check
        if (obj == null || getClass() != obj.getClass()) return false;
        // Content check
        Student other = (Student) obj;
        return this.id == other.id && this.name.equals(other.name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(101, "Rahul");
        Student s2 = new Student(101, "Rahul");

        // Uses overridden toString()
        System.out.println(s1);
        // Output: Student{id=101, name='Rahul'}

        // Uses overridden equals()
        System.out.println("Are equal? " + s1.equals(s2));
        // Output: Are equal? true (because content is same)
    }
}
```

### `getClass()` Example

```java
Object obj = new String("Hello");
Class c = obj.getClass();
System.out.println("Class Name: " + c.getName());
// Output: Class Name: java.lang.String
```

### `wait()` and `notify()` (Multithreading Concept)

These methods are used when multiple threads need to communicate. For example, a "Producer" thread creates data and `notify()` a "Consumer" thread that was `wait()`-ing for data.

---

## Important Interview Question

**Q: Why do we need the Object class in Java?**

**Answer:**
Java is an object-oriented language, but it needs a standard root for all objects to ensure consistency. The `Object` class acts as a universal parent for every class we create. We need it for three main reasons:

1.  **To Act as a Universal Root**: Without a common parent, there would be no way to group different objects together. The Object class allows us to create methods that can accept **any** type of object (Polymorphism).
2.  **To Enable Generic Programming**: It allows us to create collections (like an array of Objects) that can store mixed data types (e.g., storing a String and an Integer in the same array).
3.  **To Provide Common Functionality**: It guarantees that every object has essential methods like `toString()` (for text representation), `equals()` (for comparison), and `hashCode()` (for identification).
