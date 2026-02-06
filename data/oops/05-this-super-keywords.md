# THIS AND SUPER KEYWORDS

## Concept Introduction
**English:**

- **this** refers to the current object — the instance whose code is running.
- **super** refers to the immediate parent class's object — used to access members or constructors from the parent.

Why these keywords exist:

- Resolve naming conflicts between instance variables and method/constructor parameters.
- Call other constructors in the same class (`this(...)`) or call parent constructors (`super(...)`).
- Access overridden parent class members (fields/methods) when needed.

Real-life example:

- Imagine a family recipe where a child tweaks the parent's recipe. The child can say "I will make it this way" (`this`) but still refer to the parent's original recipe (`super`) to reuse steps.



**Hinglish:**

- **this** aur **super** Java ke do important keywords hain jo object references provide karte hain:
  - **this** = Current object ka reference (apna instance)
  - **super** = Parent class ka reference (parent/ancestor ka instance)

Real-life example: **"Main yeh kar raha hoon" (this)** vs **"Mera baap yeh karta tha" (super)**


---

## Why These Keywords Exist

### Problem 


Without object references, local parameters can shadow instance variables leading to ambiguous assignments and bugs.

```java
class Student {
    String name;

    void setName(String name) {
        name = name;     // Confusion: local parameter shadows instance variable
    }
}
```


### Solution 


Use `this` to explicitly refer to the instance field. Use `super` to refer to the parent class's members or constructors when overriding or extending behavior.

Short summary:

- `this.x` = instance field `x` of the current object.
- `super.x` = field `x` defined in the immediate parent class.

```java
class Student {
    String name;

    void setName(String name) {
        this.name = name;       // this.name refers to instance variable
    }
}
```


---

## Definitions

### Very Simple Definition
- **this**: Current object ko refer karta hai
- **super**: Parent class ko refer karta hai

### Simple Definition
**this** keyword refers to the current object instance, while **super** keyword refers to the immediate parent class object. They are used to access instance members and constructors.

### College Exam Definition
**this** is a reference variable that refers to the current object and is used to differentiate between instance variables and parameters, call current class methods and constructors. **super** is a reference variable that refers to the immediate parent class object and is used to access parent class variables, methods, and constructors.

### Interview Definition
**this** keyword is an implicit reference to the current object instance, used to resolve naming conflicts between instance variables and parameters, invoke current class constructors (constructor chaining via this()), call current class methods, and pass current object as argument. **super** keyword is an implicit reference to the immediate parent class object, used to access parent class members when overridden in child class, invoke parent class constructors (via super()), and implement method overriding scenarios. Both cannot be used in static context as they refer to objects.

---

## THIS Keyword

### 1. Distinguish between Instance Variable and Parameter

```java
class Student {
    String name;
    int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;        // this.name = instance variable
        this.rollNo = rollNo;    // rollNo (parameter)
    }
    
    void display() {
        System.out.println("Name: " + this.name);
        System.out.println("Roll No: " + this.rollNo);
    }
}
```

### 2. Call Current Class Method

```java
class Calculator {
    void add(int a, int b) {
        System.out.println("Sum: " + (a + b));
    }
    
    void calculate() {
        this.add(10, 20);  // Calling current class method
        // OR simply: add(10, 20);
    }
}
```

### 3. Constructor Chaining with this()

```java
class Employee {
    String name;
    int id;
    double salary;
    
    Employee() {
        this("Not Assigned", 0, 0.0);  // Calls parameterized constructor
    }
    
    Employee(String name, int id) {
        this(name, id, 25000);  // Calls 3-parameter constructor
    }
    
    Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
}
```

**Note**: `this()` must be first statement!

### 4. Return Current Object

```java
class Student {
    String name;
    
    Student setName(String name) {
        this.name = name;
        return this;  // Returning current object
    }
    
    void display() {
        System.out.println("Name: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Rahul").display();  // Method chaining
    }
}
```

### 5. Pass Current Object as Argument

```java
class A {
    void display(A obj) {
        System.out.println("Object received");
    }
    
    void callDisplay() {
        display(this);  // Passing current object
    }
}
```

---

## SUPER Keyword

### 1. Access Parent Class Variable

```java
class Parent {
    int x = 10;
}

class Child extends Parent {
    int x = 20;
    
    void display() {
        System.out.println("Child x: " + x);        // 20
        System.out.println("Parent x: " + super.x); // 10
    }
}
```

### 2. Call Parent Class Method

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void eat() {
        System.out.println("Dog is eating");
    }
    
    void callParentEat() {
        super.eat();  // Calls Animal's eat()
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();            // Dog is eating
        dog.callParentEat();  // Animal is eating
    }
}
```

### 3. Constructor Chaining with super()

```java
class Vehicle {
    String brand;
    
    Vehicle(String brand) {
        this.brand = brand;
        System.out.println("Vehicle constructor");
    }
}

class Car extends Vehicle {
    String model;
    
    Car(String brand, String model) {
        super(brand);  // Calls parent constructor
        this.model = model;
        System.out.println("Car constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car("Maruti", "Swift");
    }
}
```

**Output**:
```
Vehicle constructor
Car constructor
```

**Note**: `super()` must be first statement!

---

## Real-World Example

```java
class BankAccount {
    protected String accountNumber;
    protected double balance;
    
    BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    void deposit(double amount) {
        this.balance += amount;
        System.out.println("Deposited: ₹" + amount);
    }
    
    void displayBalance() {
        System.out.println("Balance: ₹" + this.balance);
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;
    
    SavingsAccount(String accountNumber, double balance, double interestRate) {
        super(accountNumber, balance);  // Call parent constructor
        this.interestRate = interestRate;
    }
    
    void addInterest() {
        double interest = super.balance * this.interestRate / 100;
        super.deposit(interest);  // Call parent method
        System.out.println("Interest added: ₹" + interest);
    }
    
    void displayInfo() {
        System.out.println("Account: " + super.accountNumber);
        super.displayBalance();
        System.out.println("Interest Rate: " + this.interestRate + "%");
    }
}

public class Main {
    public static void main(String[] args) {
        SavingsAccount acc = new SavingsAccount("ACC123", 10000, 5);
        acc.displayInfo();
        acc.addInterest();
        acc.displayInfo();
    }
}
```

---

## this vs super

| Feature | this | super |
|---------|------|-------|
| **Refers To** | Current object | Parent class object |
| **Usage** | Current class members | Parent class members |
| **Constructor Call** | this() | super() |
| **Context** | Same class | Parent-child relationship |
| **Static Context** | Cannot use | Cannot use |
| **First Statement** | this() must be first | super() must be first |

---

## Important Rules

### this Keyword:
1. Refers to current object
2. Cannot use in static context
3. this() calls another constructor (must be first statement)
4. Used for method chaining

### super Keyword:
1. Refers to parent class object
2. Cannot use in static context
3. super() calls parent constructor (must be first statement)
4. Used to access overridden members
5. Requires inheritance

---


## Important Interview Questions

**Q1: What is this keyword?**

this is a reference variable that refers to the current object. Used to differentiate instance variables from parameters, call current class methods and constructors.

**Q2: What is super keyword?**

super is a reference variable that refers to the immediate parent class object. Used to access parent class variables, methods, and constructors.

**Q3: Can we use this and super in static methods?**

No! Both refer to objects, and static methods belong to class, not objects.

**Q4: Can we use both this() and super() in same constructor?**

No! Both must be first statement, so only one can be used.

**Q5: What happens if we don't use super() in constructor?**

Java automatically adds `super()` to call parent's default constructor.

---

## Short Recap

**this Keyword**:
- Current object reference
- Differentiate variable and parameter
- Call current class method/constructor
- Return current object

**super Keyword**:
- Parent class object reference
- Access parent's variable/method
- Call parent constructor
- Used in inheritance

## Visual Summary

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                          THIS vs SUPER KEYWORDS                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  ┌─────────────────────────────────┐    ┌─────────────────────────────────┐       ║
║  │         THIS KEYWORD            │    │         SUPER KEYWORD           │       ║
║  │     (Current Object Ref)        │    │      (Parent Object Ref)        │       ║
║  └─────────────────────────────────┘    └─────────────────────────────────┘       ║
║                   │                                      │                        ║
║     ┌─────────────┼─────────────┐          ┌─────────────┼─────────────┐          ║
║     │             │             │          │             │             │          ║
║     ▼             ▼             ▼          ▼             ▼             ▼          ║
║  ╔═══════╗   ╔═══════╗   ╔═══════╗       ╔═══════╗   ╔═══════╗   ╔═══════╗        ║
║  ║ this. ║   ║ this. ║   ║ this()║       ║ super.║   ║ super.║   ║super()║        ║
║  ║  var  ║   ║method ║   ║       ║       ║  var  ║   ║method ║   ║       ║        ║
║  ╚═══╤═══╝   ╚═══╤═══╝   ╚═══╤═══╝       ╚═══╤═══╝   ╚═══╤═══╝   ╚═══╤═══╝        ║
║      │           │           │               │           │           │            ║
║      ▼           ▼           ▼               ▼           ▼           ▼            ║
║  ┌───────┐  ┌────────┐  ┌─────────┐     ┌────────┐  ┌────────┐  ┌─────────┐       ║
║  │Diff   │  │Call    │  │Call own │     │Access  │  │Call    │  │Call     │       ║
║  │param &│  │current │  │class    │     │parent's│  │parent's│  │parent   │       ║
║  │field  │  │class   │  │constru- │     │hidden  │  │overri- │  │constru- │       ║
║  │       │  │method  │  │ctor     │     │variable│  │dden    │  │ctor     │       ║
║  └───────┘  └────────┘  └─────────┘     └────────┘  └────────┘  └─────────┘       ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                              INHERITANCE CONTEXT                                  ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║     ╔══════════════════════╗                                                      ║
║     ║    Parent Class      ║    super.variable  ←────┐                            ║
║     ║  ┌────────────────┐  ║    super.method()  ←────┤                            ║
║     ║  │ int x = 10     │  ║    super()         ←────┘ (Access via super)         ║
║     ║  │ void display() │  ║                                                      ║
║     ╚════════════╤═════════╝                                                      ║
║                  │ extends                                                        ║
║                  ▼                                                                ║
║     ╔══════════════════════╗                                                      ║
║     ║    Child Class       ║    this.variable   ←────┐                            ║
║     ║  ┌────────────────┐  ║    this.method()   ←────┤                            ║
║     ║  │ int x = 20     │  ║    this()          ←────┘ (Access via this)          ║
║     ║  │ void display() │  ║                                                      ║
║     ╚══════════════════════╝                                                      ║
║                                                                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                            IMPORTANT RULES                                        ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║    ┌─────────────────────────────────────────────────────────────────────┐        ║
║    │  ✓ this() must be FIRST statement in constructor                    │        ║
║    │  ✓ super() must be FIRST statement in constructor                   │        ║
║    │  ✗ Cannot use this() and super() together                           │        ║
║    │  ✗ Cannot use this/super in static methods                          │        ║
║    └─────────────────────────────────────────────────────────────────────┘        ║
║                                                                                   ║
║    Constructor Chaining Flow:                                                     ║
║    ════════════════════════                                                       ║
║    Child()  ──this()──▶  Child(int)  ──super()──▶  Parent()                       ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```
