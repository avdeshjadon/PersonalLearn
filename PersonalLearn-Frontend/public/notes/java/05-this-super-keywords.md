# THIS AND SUPER KEYWORDS

## Concept Introduction

In Java, **this** and **super** are special reference variables that help us distinguish between **current object members** and **parent class members**. They are essential for handling scope, ambiguity, and inheritance effectively.

**this** is a reference variable that refers to the current object and is used to differentiate between instance variables and parameters, call current class methods and constructors. **super** is a reference variable that refers to the immediate parent class object and is used to access parent class variables, methods, and constructors.

---

## THIS Keyword

The this keyword is a reference to the **current object** — the instance whose code is executing.

### 1. Distinguish between Instance Variable and Parameter

It is used to resolve ambiguity when a method parameter has the same name as an instance variable.

### 2. Call Current Class Method

It is used to explicitly call a method of the current class.

### 3. Constructor Chaining with this()

this() is used to call another constructor within the same class to avoid code duplication.
**Note**: this() must be the first statement in a constructor.

### 4. Return Current Object

It is used to return the current class instance, often for method chaining.

### 5. Pass Current Object as Argument

It is used to pass the current object as a parameter to another method or constructor.

---

## SUPER Keyword

The super keyword refers to the **immediate parent class object**.

### 1. Access Parent Class Variable

It is used to access instance variables of the parent class, especially when they are hidden by child class variables.

### 2. Call Parent Class Method

It is used to call methods from the parent class that have been overridden in the child class.

### 3. Constructor Chaining with super()

super() is used to call the parent class constructor to initialize inherited fields.

super() must be the first statement in the constructor.

---


## this vs super

| Feature              | this                  | super                     |
| -------------------- | --------------------- | ------------------------- |
| **Refers To**        | Current object        | Parent class object       |
| **Usage**            | Current class members | Parent class members      |
| **Constructor Call** | this()                | super()                   |
| **Context**          | Same class            | Parent-child relationship |
| **Static Context**   | Cannot use            | Cannot use                |
| **First Statement**  | this() must be first  | super() must be first     |

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

Java automatically adds super() to call parent's default constructor.

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


