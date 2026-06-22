# UPCASTING AND DOWNCASTING

## Concept Introduction

Type Casting in Java is converting one object type into another. In inheritance, we can cast between Parent and Child classes. This is crucial for achieving **Polymorphism**.

- **Upcasting:** Converting a Child object to a Parent reference. (Safe & Implicit)
- **Downcasting:** Converting a Parent reference back to a Child object. (Unsafe & Explicit)

---

## 1. Upcasting (Generalization)

**Definition:**
When a Parent reference variable refers to a Child object, it is called Upcasting. It happens **automatically** (implicitly) because a Child IS-A Parent.

### Syntax

```java
Parent p = new Child();  // Upcasting (Implicit)
```

### Why use Upcasting?

- To achieve **Polymorphism**.
- To write generic code that can handle any child object.
- Example: An `Animal` array can hold `Dog`, `Cat`, and `Lion` objects.

### Key Restriction

- You can access **only Parent class methods**.
- You **cannot** access Child-specific methods (unless you override them).
- Variables (fields) are accessed from the **Parent class** (Reference type).

### Example

```java
class Parent {
    void show() {
        System.out.println("Parent show()");
    }
}

class Child extends Parent {
    void show() {
        System.out.println("Child show()");
    }

    void specific() {
        System.out.println("Child specific method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child(); // Upcasting

        p.show();     // Calls Child's show() (Overridden method)
        // p.specific(); // ERROR: Parent reference cannot access Child-specific methods
    }
}
```

---

## 2. Downcasting (Specialization)

**Definition:**
When a Parent reference variable is converted back to a Child reference, it is called Downcasting. It must be done **manually** (explicitly) because the compiler cannot guarantee that the Parent reference actually holds a Child object.

### Syntax

```java
Parent p = new Child();
Child c = (Child) p;  // Downcasting (Explicit)
```

### Why use Downcasting?

- To access **Child-specific methods** or properties that are not in the Parent class.

### Example

```java
public class Main {
    public static void main(String[] args) {
        Parent p = new Child(); // Upcasting

        // p.specific(); // Compile-time Error

        if (p instanceof Child) {
            Child c = (Child) p; // Downcasting
            c.specific(); // Output: Child specific method
        }
    }
}
```

---

## 3. The `ClassCastException` Risk

Downcasting is risky. If you try to cast a Parent reference that holds a generic `Parent` object (or a different Sibling object) to a `Child` class, Java throws a `ClassCastException` at runtime.

### Dangerous Example

```java
Parent p = new Parent();
// Child c = (Child) p; // Runtime Error: ClassCastException
```

- **Why?** A generic `Parent` is NOT a `Child`. It doesn't have the child's memory or methods.

### Mixed Example

```java
Parent p = new Cat();
// Dog d = (Dog) p; // Runtime Error: Cat cannot be cast to Dog
```

- **Why?** The object in memory is `Cat`. You cannot force it into a `Dog` reference.

---

## 4. Safe Downcasting with `instanceof`

To prevent `ClassCastException`, **always** check the object type using the `instanceof` operator before downcasting.

```java
Object obj = "Hello";

if (obj instanceof String) {
    String s = (String) obj; // Safe Downcasting
    System.out.println("String length: " + s.length());
} else {
    System.out.println("Not a String");
}
```

---

## Real-World Analogy

### Upcasting (Fruit Basket)

- **Concept:** You have a basket labeled "Fruit".
- **Action:** You put an Apple in it.
- **Result:** The Apple is treated as a generic "Fruit". You can eat it (generic action), but you can't ask for its specific apple-brand sticker unless you check it first.

### Downcasting (Specific check)

- **Concept:** You pick an item from the "Fruit" basket.
- **Action:** You check, "Is this an Apple?" (`instanceof`).
- **Result:** If yes, you label it as "Apple" (Downcast). Now you can use it for Apple Pie (specific action).

---

## Summary Table

| Feature       | Upcasting                     | Downcasting                 |
| :------------ | :---------------------------- | :-------------------------- |
| **Direction** | Child -> Parent               | Parent -> Child             |
| **Type**      | Implicit (Automatic)          | Explicit (Manual)           |
| **Safety**    | Always Safe                   | Risky (Can throw exception) |
| **Purpose**   | Generalization / Polymorphism | Accessing specific members  |
| **Syntax**    | `Parent p = new Child();`     | `Child c = (Child) p;`      |
