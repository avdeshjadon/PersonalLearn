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

### Problem Without Access Control

```java
class BankAccount {
    double balance = 10000;  // Anyone can change
}

BankAccount acc = new BankAccount();
acc.balance = -5000;  //  Negative balance!
```

**Issue:** Direct access can lead to invalid data.

### Solution: Access Modifiers

```java
class BankAccount {
    private double balance = 10000;  // Protected
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}
```

---

## Definitions

### Very Simple Definition
Access modifiers keywords hain jo batate hain ki koi member (variable/method/class) ko kaun access kar sakta hai.

### Simple Definition
Access modifiers are keywords in Java that set the accessibility or visibility of classes, methods, and variables. They control which other parts of the program can use a particular member.

### College Exam Definition
Access modifiers in Java are keywords that determine the scope and visibility of classes, methods, constructors, and variables. Java provides four access modifiers: private (accessible only within the class), default (accessible within the package), protected (accessible within package and subclasses), and public (accessible everywhere). These modifiers help implement encapsulation and data hiding.

### Technical Definition
Access modifiers are keywords that define the accessibility scope of classes, methods, fields, and constructors in Java. They form a hierarchy: private (class-level access), default/package-private (package-level access, no keyword), protected (package + inheritance-based access), and public (global access). The Java compiler enforces these access restrictions at compile-time. Access modifiers are fundamental to implementing encapsulation, information hiding, and the principle of least privilege. They work in conjunction with packages to create access boundaries.

### Interview Definition
Access modifiers control visibility:

1. **private** — Accessible only within the same class. Use for internal data and helper methods to hide implementation details.

2. **default (package-private)** — No keyword; accessible only within the same package. Use for package-internal implementation.

3. **protected** — Accessible within the same package and to subclasses (even if in different packages). Use for members intended for extension by subclasses.

4. **public** — Accessible from anywhere. Use for API methods and classes meant for external use.

---

## 1. Private Access Modifier

### Concept
**Most restrictive** - accessible only within the same class.

**Definition:** The `private` modifier restricts access to the declaring class only. Members declared `private` cannot be seen or used outside the class, which helps hide implementation details and protect internal state from external modification.

```java
class Student {
    private int rollNo;  // Private field
    private String name;
    
    // Private method
    private void calculateGrade() {
        System.out.println("Calculating grade...");
    }
    
    // Public methods to access private members
    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }
    
    public int getRollNo() {
        return rollNo;
    }
    
    public void displayInfo() {
        calculateGrade();   //  Can call private method within class
        System.out.println("Roll: " + rollNo);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        
        // Cannot access private members
        // s.rollNo = 101;        // Error
        // s.calculateGrade();    // Error
        
        // ✓ Can access through public methods
        s.setRollNo(101);
        System.out.println(s.getRollNo());
        s.displayInfo();
    }
}
```

---

## 2. Default Access Modifier (Package-Private)

### Concept
No keyword - accessible within the same **package** only.

**Definition:** The default (package-private) access level makes a member visible to all classes inside the same package but not to classes in other packages. Use it for implementation details meant to be shared only within a package.

```java
package package1;

class Student {  // Default access
    String name;  // Default access
    
    void display() {  // Default access
        System.out.println("Name: " + name);
    }
}

package package1;

public class Test {
    public static void main(String[] args) {
        Student s = new Student();  // ✓ Same package
        s.name = "Rahul";            // ✓ Accessible
        s.display();                 // ✓ Accessible
    }
}

package package2;

import package1.Student;

public class Demo {
    public static void main(String[] args) {
        // Student class has default access
        // Student s = new Student();  // Error
    }
}
```

---

## 3. Protected Access Modifier

### Concept
Accessible within the same **package** and **subclasses** (even in different packages).

**Definition:** The `protected` modifier allows access from classes in the same package and from subclasses (including subclasses in other packages). Use `protected` for members that are intended to be extended or used by subclasses while remaining hidden from unrelated classes.

```java
package package1;

public class Parent {
    protected int value = 100;  // Protected field
    
    protected void show() {  // Protected method
        System.out.println("Parent show");
    }
}

package package1;

public class Test {
    public static void main(String[] args) {
        Parent p = new Parent();
        p.value = 200;    // ✓ Same package
        p.show();         // ✓ Accessible
    }
}

package package2;

import package1.Parent;

public class Child extends Parent {
    void display() {
        // ✓ Can access protected members through inheritance
        System.out.println(value);  // ✓ Accessible
        show();                      // ✓ Accessible
    }
}

// File: package2/Demo.java
package package2;

import package1.Parent;

public class Demo {
    public static void main(String[] args) {
        Parent p = new Parent();
        // Different package, no inheritance
        // p.value = 300;  // Error
        // p.show();       // Error
        
        Child c = new Child();
        c.display();  // ✓ Works through Child
    }
}
```

---

## 4. Public Access Modifier

### Concept
**Least restrictive** - accessible from anywhere.

**Definition:** The `public` modifier makes a member accessible from any other class in any package. Use `public` for API elements that are intended to be used by external code or other packages.

```java
package package1;

public class Student {  // Public class
    public String name;  // Public field
    
    public void display() {  // Public method
        System.out.println("Name: " + name);
    }
}

package package2;

import package1.Student;

public class Test {
    public static void main(String[] args) {
        Student s = new Student();  // ✓ Public class
        s.name = "Rahul";            // ✓ Public field
        s.display();                 // ✓ Public method
    }
}
```

---

## Access Modifiers Table

| Modifier | Same Class | Same Package | Subclass | Other Package |
|----------|------------|--------------|----------|---------------|
| **private** | ✓ | ✗ | ✗ | ✗ |
| **default** | ✓ | ✓ | ✗ | ✗ |
| **protected** | ✓ | ✓ | ✓ | ✗ |
| **public** | ✓ | ✓ | ✓ | ✓ |

---

## Real-World Example: Encapsulation

```java
class BankAccount {
    private String accountNumber;
    private double balance;
    private String password;
    
    public BankAccount(String accountNumber, String password) {
        this.accountNumber = accountNumber;
        this.password = password;
        this.balance = 0;
    }
    
    // Public method with validation
    public boolean deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            return true;
        }
        return false;
    }
    
    // Public method with authentication
    public boolean withdraw(double amount, String password) {
        if (!this.password.equals(password)) {
            System.out.println("Wrong password!");
            return false;
        }
        
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
    // Public getter
    public double getBalance(String password) {
        if (this.password.equals(password)) {
            return balance;
        }
        return -1;
    }
    
    // Private helper method
    private boolean validatePassword(String password) {
        return this.password.equals(password);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("ACC001", "secret123");
        
        // Cannot access private members
        // acc.balance = 10000;  // Error
        // acc.password = "hack";  // Error
        
        // ✓ Use public methods
        acc.deposit(5000);
        System.out.println("Balance: " + acc.getBalance("secret123"));
        
        acc.withdraw(1000, "secret123");
        System.out.println("Balance: " + acc.getBalance("secret123"));
        
        // Wrong password
        acc.withdraw(1000, "wrong");
    }
}
```

**Output:**
```
Balance: 5000.0
Balance: 4000.0
Wrong password!
```

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
║                         PRACTICAL EXAMPLE                                        ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║                              package1                                            ║
║     ╔═══════════════════════════════════════════════════════════════════╗        ║
║     ║                                                                   ║        ║
║     ║    class Parent {                                                 ║        ║
║     ║        private int a;      // Only in Parent                      ║        ║
║     ║                int b;      // In package1 only (default)          ║        ║
║     ║        protected int c;    // package1 + subclasses               ║        ║
║     ║        public int d;       // Everywhere                          ║        ║
║     ║    }                                                              ║        ║
║     ║                                                                   ║        ║
║     ║    class SamePackage {                                            ║        ║
║     ║        // Can access: b, c, d                                     ║        ║
║     ║        // Cannot access: a (private)                              ║        ║
║     ║    }                                                              ║        ║
║     ║                                                                   ║        ║
║     ╚═══════════════════════════════════════════════════════════════════╝        ║
║                                                                                  ║
║                              package2                                            ║
║     ╔═══════════════════════════════════════════════════════════════════╗        ║
║     ║                                                                   ║        ║
║     ║    class Child extends Parent {                                   ║        ║
║     ║        // Can access: c (protected), d (public)                   ║        ║
║     ║        // Cannot access: a (private), b (default)                 ║        ║
║     ║    }                                                              ║        ║
║     ║                                                                   ║        ║
║     ║    class Other {                                                  ║        ║
║     ║        // Can access: d (public) only                             ║        ║
║     ║        // Cannot access: a, b, c                                  ║        ║
║     ║    }                                                              ║        ║
║     ║                                                                   ║        ║
║     ╚═══════════════════════════════════════════════════════════════════╝        ║
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
