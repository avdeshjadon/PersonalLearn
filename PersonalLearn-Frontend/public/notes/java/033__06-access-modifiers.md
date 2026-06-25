# ACCESS MODIFIERS

## Concept Introduction

Access modifiers are Java keywords that control the visibility and accessibility of classes, constructors, methods, and fields. They enforce encapsulation by restricting which other parts of the program can use a particular member.

Four main modifiers and their purpose:

1. **private** — Accessible only within the same class. Use for internal data and helper methods to hide implementation details.

2. **default (package-private)** — No keyword; accessible only within the same package. Use for package-internal implementation.

3. **protected** — Accessible within the same package and to subclasses (even if in different packages). Use for members intended for extension by subclasses.

4. **public** — Accessible from anywhere. Use for API methods and classes meant for external use.

Summary: Access modifiers = visibility control for safe encapsulation and API design.

---

## Why This Concept Exists

### Problem: Uncontrolled Access

Without access modifiers, any part of the code can directly modify the internal data of an object. This can lead to:

- **Invalid Data**: Setting values that make no sense (e.g., negative bank balance).
- **Broken Encapsulation**: Tightly coupling external code to internal implementation details.

### Solution: Controlled Access

Access modifiers solve this by restricting visibility. They allow you to:

- **Hide Internal State**: Make fields private so they cannot be accessed directly.
- **Enforce Validation**: Provide public methods (getters/setters) to control how data is accessed and modified.
- **Define API**: Clearly separate what is meant for external use (public) from what is internal implementation (private).

---

## 1. Private Access Modifier

### Concept

**Most restrictive** - accessible only within the same class.

**Definition:** The private modifier restricts access to the declaring class only. Members declared private cannot be seen or used outside the class, which helps hide implementation details and protect internal state from external modification.

---

## 2. Default Access Modifier (Package-Private)

### Concept

No keyword - accessible within the same **package** only.

**Definition:** The default (package-private) access level makes a member visible to all classes inside the same package but not to classes in other packages. Use it for implementation details meant to be shared only within a package.

---

## 3. Protected Access Modifier

### Concept

Accessible within the same **package** and **subclasses** (even in different packages).

**Definition:** The protected modifier allows access from classes in the same package and from subclasses (including subclasses in other packages). Use protected for members that are intended to be extended or used by subclasses while remaining hidden from unrelated classes.

---

## 4. Public Access Modifier

### Concept

**Least restrictive** - accessible from anywhere.

**Definition:** The public modifier makes a member accessible from any other class in any package. Use public for API elements that are intended to be used by external code or other packages.

---

## Access Modifiers Table

| Modifier      | Same Class | Same Package | Subclass | Other Package |
| ------------- | ---------- | ------------ | -------- | ------------- |
| **private**   | ✓          | ✗            | ✗        | ✗             |
| **default**   | ✓          | ✓            | ✗        | ✗             |
| **protected** | ✓          | ✓            | ✓        | ✗             |
| **public**    | ✓          | ✓            | ✓        | ✓             |


---

## Important Interview Questions

**Q1: What are access modifiers in Java?**

Access modifiers are keywords that define the accessibility/visibility of classes, methods, and variables. Java has four: private, default, protected, and public.

**Q2: What is the default access modifier?**

When no access modifier is specified, it's called default or package-private. It's accessible only within the same package.

**Q3: Difference between protected and default?**

Default is accessible within the package only. Protected is accessible within the package AND subclasses in other packages.

**Q4: Can we use private for a class?**

No, top-level classes can only be public or default. But inner classes can be private.

**Q5: Which access modifier is most restrictive?**

private is the most restrictive - accessible only within the same class.

**Q6: Can we override a private method?**

No, private methods are not inherited, so they cannot be overridden.

**Q7: Can we access protected members through object reference in different package?**

Only if it's through inheritance (within the subclass). Cannot access through object reference.

**Q8: What is the purpose of access modifiers?**

To implement encapsulation, data hiding, and control the visibility of class members.

---

## Short Recap

**Access Modifiers** = Control visibility

**Four Types:**

1. **private** - Class only
2. **default** - Package only
3. **protected** - Package + subclasses
4. **public** - Everywhere

**Visibility Order:**
private < default < protected < public

**Best Practice:**

- Fields: **private** (encapsulation)
- Methods: **public** (interface)
- Helper methods: **private**
- Extensible methods: **protected**

---

## Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                         ACCESS MODIFIERS                                         ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                         VISIBILITY SCOPE                                         ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║             ╔═══════════════════════════════════════════════════════╗            ║
║             ║                     WORLD                             ║            ║
║             ║  ╔═════════════════════════════════════════════════╗  ║            ║
║             ║  ║              OTHER PACKAGES                     ║  ║            ║
║             ║  ║  ╔═══════════════════════════════════════════╗  ║  ║            ║
║             ║  ║  ║           SUBCLASSES                      ║  ║  ║            ║
║             ║  ║  ║  ╔═════════════════════════════════════╗  ║  ║  ║            ║
║             ║  ║  ║  ║         SAME PACKAGE                ║  ║  ║  ║            ║
║             ║  ║  ║  ║  ╔═══════════════════════════════╗  ║  ║  ║  ║            ║
║             ║  ║  ║  ║  ║        SAME CLASS             ║  ║  ║  ║  ║            ║
║             ║  ║  ║  ║  ║                               ║  ║  ║  ║  ║            ║
║             ║  ║  ║  ║  ║         private               ║  ║  ║  ║  ║            ║
║             ║  ║  ║  ║  ║                               ║  ║  ║  ║  ║            ║
║             ║  ║  ║  ║  ╚═══════════════════════════════╝  ║  ║  ║  ║            ║
║             ║  ║  ║  ║            default                  ║  ║  ║  ║            ║
║             ║  ║  ║  ╚═════════════════════════════════════╝  ║  ║  ║            ║
║             ║  ║  ║               protected                   ║  ║  ║            ║
║             ║  ║  ╚═══════════════════════════════════════════╝  ║  ║            ║
║             ║  ║                                                 ║  ║            ║
║             ║  ╚═════════════════════════════════════════════════╝  ║            ║
║             ║                       public                          ║            ║
║             ╚═══════════════════════════════════════════════════════╝            ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                       ACCESS MODIFIER COMPARISON                                 ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                     Same      Same       Subclass    Other                       ║
║    MODIFIER        Class    Package    (diff pkg)   Package                      ║
║   ═══════════════════════════════════════════════════════════                    ║
║                                                                                  ║
║   ╔═════════════╗                                                                ║
║   ║   private   ║    YES       NO          NO         NO                         ║
║   ╚═════════════╝    ═══                                                         ║
║                                                                                  ║
║   ╔═════════════╗                                                                ║
║   ║   default   ║    YES       YES         NO         NO                         ║
║   ╚═════════════╝    ═══       ═══                                               ║
║                                                                                  ║
║   ╔═════════════╗                                                                ║
║   ║  protected  ║    YES       YES         YES        NO                         ║
║   ╚═════════════╝    ═══       ═══         ═══                                   ║
║                                                                                  ║
║   ╔═════════════╗                                                                ║
║   ║   public    ║    YES       YES         YES        YES                        ║
║   ╚═════════════╝    ═══       ═══         ═══        ═══                        ║
║                                                                                  ║
║                                                                                  ║
║   RESTRICTION LEVEL:   private > default > protected > public                    ║
║                        (most)                          (least)                   ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════════════════════════════╗
║                       WHEN TO USE WHAT                                           ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║    ╔═══════════════╗                                                             ║
║    ║    private    ║ ──► Data fields, helper methods                             ║
║    ╚═══════════════╝     (Maximum protection)                                    ║
║             │                                                                    ║
║             ▼                                                                    ║
║    ╔═══════════════╗                                                             ║
║    ║    default    ║ ──► Package-internal classes/methods                        ║
║    ╚═══════════════╝     (Implementation details)                                ║
║             │                                                                    ║
║             ▼                                                                    ║
║    ╔═══════════════╗                                                             ║
║    ║   protected   ║ ──► Methods/fields for subclasses                           ║
║    ╚═══════════════╝     (Extensibility)                                         ║
║             │                                                                    ║
║             ▼                                                                    ║
║    ╔═══════════════╗                                                             ║
║    ║    public     ║ ──► API methods, interfaces                                 ║
║    ╚═══════════════╝     (External access)                                       ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```
