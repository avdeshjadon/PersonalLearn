# METHOD OVERRIDING

## Concept Introduction

Method overriding occurs when a subclass provides a specific implementation for a method already defined in its parent class.

**Child class implements the parent's method in its own specific way.** In inheritance, a child inherits the parent's method, but if the child needs custom behavior, it **overrides** that method.

**Method Overriding = Same Signature + Different Implementation = Runtime Polymorphism**

**Real Example:** **Animal sound()** - Dog barks, Cat meows. Same method name, different behavior!

---

## Why Method Overriding Exists

### The Problem

The parent class often provides a generic implementation that isn't suitable for all child classes:

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");  // Too generic!
    }
}
```

### The Solution

The child class overrides the method to provide a specific implementation:

```java
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks: Woof!");  // Specific!
    }
}
```

---

## Rules for Method Overriding

### Mandatory Rules

1.  **Inheritance Required**: There must be a parent-child relationship.
2.  **Same Method Signature**: The method name and parameters must be exactly the same.
3.  **Same or Covariant Return Type**: The return type must be the same or a subclass of the parent's return type.
4.  **Access Modifier**: You cannot reduce the visibility (e.g., cannot make `public` to `private`). Use the same or wider access.
5.  **Checked Exceptions**: The overriding method cannot throw new or broader checked exceptions.

### Cannot Override

1.  **Private Methods**: They are not inherited.
2.  **Final Methods**: They are explicitly designed to prevent overriding.
3.  **Static Methods**: They are hidden (method hiding), not overridden.
4.  **Constructors**: They are not methods and are not inherited.

---

## The @Override Annotation

### Why Use It?

The `@Override` annotation tells the compiler that you intend to override a method. If you make a mistake (like a typo in the method name or wrong arguments), the compiler will throw an error instead of treating it as a new method.

```java
class Parent {
    void display() { }
}

class Child extends Parent {
    @Override
    void dispaly() {  // Typo! Compiler catches it
        // ERROR: Method does not override from parent
    }
}
```

---

## Access Modifiers in Overriding

When overriding a method, the **Access Modifier** plays a crucial role. The rule follows the **Liskov Substitution Principle**: _A child class must be as accessible or more accessible than its parent._

### The Golden Rule: "Do Not Reduce Visibility"

You **cannot** reduce the visibility of an inherited method. If the parent class promises that a method is available to everyone (`public`), the child class cannot break that promise by hiding it (`protected` or `private`).

---

### 1. Allowed: Widening Access (Increasing Visibility)

You can increase the visibility of an inherited method. This is allowed because you are **fulfilling the contract** of the parent class and offering **more** access.

- **Logic:** If the parent says "Only family (`protected`) can see this", the child can say "Everyone (`public`) can see this". No existing code breaks because family members can still see it.

```java
class Parent {
    protected void method() { }
}

class Child extends Parent {
    @Override
    public void method() { }
}
```

### 2. Not Allowed: Narrowing Access (Decreasing Visibility)

You cannot decrease the visibility of an inherited method. This would break the code that relies on the parent's contract.

- **Logic:** If the parent says "Everyone (`public`) can see this", the child cannot say "Only family (`protected`) can see this". Any external code expecting the method to be public would fail.

```java
class Parent {
    public void method() { }
}

class Child extends Parent {
    @Override
    protected void method() { }
}
```

### Access Hierarchy (Strictest to Most Open)

`private` ➔ `default` (package-private) ➔ `protected` ➔ `public`

- **Overriding Direction:** ➔ (You can move right, but never left)

---

## Covariant Return Types

**Definition:** An overriding method can return a subtype (child class) of the return type declared in the parent method. This is called a _Covariant Return Type_.

### Before Java 5

The return type had to be **exactly the same**. If `Parent` returned `Animal`, `Child` also had to return `Animal`.

### After Java 5 (Covariant Support)

Now, if `Child` overrides a method, it can return a more specific type (e.g., `Dog` instead of `Animal`).

- **Logic:** Since a `Dog` **IS-A** `Animal`, returning a `Dog` satisfies the contract of returning an `Animal`.
- **Benefit:** It avoids unnecessary type casting for the caller.

```java
class Animal { }
class Dog extends Animal { }

class AnimalFactory {
    Animal getAnimal() {
        System.out.println("Returning generic Animal");
        return new Animal();
    }
}

class DogFactory extends AnimalFactory {
    @Override
    Dog getAnimal() {  // Valid: Dog is a subtype of Animal
        System.out.println("Returning specific Dog");
        return new Dog();
    }
}

public class Main {
    public static void main(String[] args) {
        DogFactory df = new DogFactory();
        Dog d = df.getAnimal(); // No need to cast (Animal -> Dog)
    }
}
```

---

## Methods That Cannot Be Overridden

### 1. Private Methods

They are invisible to the child class, so they represent a new method in the child, not an override.

```java
class Parent {
    private void method() { }
}

class Child extends Parent {
    void method() { }  // New independent method
}
```

### 2. Final Methods

Marking a method `final` explicitly forbids overriding.

```java
class Parent {
    final void method() { }
}

class Child extends Parent {
    void method() { }  // Output: Compilation Error
}
```

### 3. Static Methods

Redefining a static method in a child class is called **Method Hiding**, not overriding.

```java
class Parent {
    static void method() { }
}

class Child extends Parent {
    static void method() { }  // Hiding
}
```

### 4. Constructors

Constructors are not methods and cannot be inherited. Since the name of the constructor must match the class name, a child class cannot have a constructor with the parent class's name.

```java
class Parent {
    Parent() { }
}

class Child extends Parent {
    // Parent() { } // ERROR: Name must match class name (Child)
    // Child() { }  // This is a new constructor, not an override
}
```

## When to Use Method Overriding?

Use it when a specific subclass needs to modify the behavior of an inherited method.

Inheriting a method from a superclass and changing its implementation in the subclass is Method Overriding. It requires inheritance. The overriding method must have the same signature (name, parameter list) and compatible return type. It enables Runtime Polymorphism.

### Why certain methods cannot be overridden:

- **Static methods**: Associated with the class, not the object. Redefining them hides the parent method.
- **Final methods**: `final` keyword explicitly prevents modification.
- **Private methods**: Not visible to the subclass, so they cannot be overridden.

---

## Method Overloading vs Overriding

| Feature             | Overloading    | Overriding        |
| :------------------ | :------------- | :---------------- |
| **Parameters**      | Different      | Same              |
| **Inheritance**     | Not required   | Required          |
| **Polymorphism**    | Compile-time   | Runtime           |
| **Binding**         | Static (Early) | Dynamic (Late)    |
| **Return Type**     | Can differ     | Same or covariant |
| **Access Modifier** | Any            | Same or wider     |
| **@Override**       | Not used       | Recommended       |

---

## Important Interview Questions

**Q1: What is Method Overriding?**
It is a feature where a child class provides a specific implementation for a method already defined in its parent class, enabling runtime polymorphism.

**Q2: Difference between Overloading and Overriding?**

- **Overloading:** Same name, different parameters (Compile-time).
- **Overriding:** Same signature, different implementation (Runtime).

**Q3: Can we override static methods?**
No. Static methods belong to the class. Redefining them in a child class is called "Method Hiding".

**Q4: Can we override private methods?**
No. Private methods are not inherited, so they cannot be overridden.

**Q5: What is the purpose of @Override annotation?**
It performs a compile-time check to ensure the method signature matches the parent class method, preventing typos and errors.

---

## Short Recap

**Method Overriding**:

- Same signature, different implementation.
- Runtime polymorphism (dynamic binding).
- Requires inheritance.

**Rules**:

- Must have same name and parameters.
- Return type must be the same or covariant.
- Access modifier cannot be stricter (only wider).
- Cannot override `private`, `final`, or `static` methods.

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                            METHOD OVERRIDING                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   CONCEPT: Child class provides specific implementation of parent's method        ║
║                                                                                   ║
║   ╔════════════════════════════════╗       ╔════════════════════════════════╗     ║
║   ║         PARENT CLASS           ║       ║         CHILD CLASS            ║     ║
║   ╟────────────────────────────────╢       ╟────────────────────────────────╢     ║
║   ║  class Animal {                ║       ║  class Dog extends Animal {    ║     ║
║   ║                                ║       ║                                ║     ║
║   ║    void sound() {              ║       ║    @Override                   ║     ║
║   ║      print("Generic sound");   ║──────▶║    void sound() {              ║     ║
║   ║    }                           ║       ║      print("Woof Woof!");      ║     ║
║   ║  }                             ║       ║    }                           ║     ║
║   ╚════════════════════════════════╝       ║  }                             ║     ║
║                                            ╚════════════════════════════════╝     ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                         DYNAMIC METHOD DISPATCH                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   Animal a = new Dog();     // Parent reference, Child object                     ║
║   a.sound();                // Which method is called?                            ║
║                                                                                   ║
║       ┌──────────────────┐                                                        ║
║       │   COMPILE TIME   │──────▶ Checks: Does Animal have sound()? ✓             ║
║       └──────────────────┘                                                        ║
║                │                                                                  ║
║                ▼                                                                  ║
║       ┌──────────────────┐                                                        ║
║       │    RUN TIME      │──────▶ Checks: What is actual object type?             ║
║       └──────────────────┘                 Object is Dog → Call Dog.sound()       ║
║                │                                                                  ║
║                ▼                                                                  ║
║       ┌──────────────────┐                                                        ║
║       │ OUTPUT: "Woof!"  │        (Runtime Polymorphism!)                         ║
║       └──────────────────┘                                                        ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                           CANNOT OVERRIDE                                         ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ╔══════════════════╗   ╔══════════════════╗   ╔══════════════════╗              ║
║   ║  private methods ║   ║  final methods   ║   ║  static methods  ║              ║
║   ╟──────────────────╢   ╟──────────────────╢   ╟──────────────────╢              ║
║   ║  Not inherited   ║   ║  Cannot modify   ║   ║  Method Hiding   ║              ║
║   ║  (not visible)   ║   ║  (locked)        ║   ║  (not override)  ║              ║
║   ╚══════════════════╝   ╚══════════════════╝   ╚══════════════════╝              ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                    OVERLOADING vs OVERRIDING                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║   ┌─────────────────────┬─────────────────────┬─────────────────────┐             ║
║   │      Feature        │     Overloading     │     Overriding      │             ║
║   ├─────────────────────┼─────────────────────┼─────────────────────┤             ║
║   │ Parameters          │    Different        │    Same             │             ║
║   │ Inheritance needed  │    No               │    Yes              │             ║
║   │ Polymorphism        │    Compile-time     │    Runtime          │             ║
║   │ Binding             │    Static (Early)   │    Dynamic (Late)   │             ║
║   └─────────────────────┴─────────────────────┴─────────────────────┘             ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
