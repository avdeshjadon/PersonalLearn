# AGGREGATION

## Concept Introduction

**Aggregation** ek **weak HAS-A relationship** hai jahan ek class doosri class ko contain karti hai, par **lifecycle independent** hoti hai.

**Aggregation** mein:
- Ek class doosri class ka **reference** hold karti hai
- **Weak relationship** - Parent destroy ho jaye to child independent rehta hai
- **"HAS-A" relationship** - Department **HAS** Teachers (teachers can exist without department)

**Aggregation = Weak HAS-A relationship (Has-a but not owns)**

---

## Why This Concept Exists

### Real-World Scenario

```
Department has Teachers
- If Department closes, Teachers still exist
- Teachers can move to other departments
- Independent lifecycle
```

### Without Proper Modeling

```java
class Department {
    // Wrong - creates new teachers (composition)
    private Teacher t1 = new Teacher();
    private Teacher t2 = new Teacher();
}
```

### With Aggregation

```java
class Department {
    // Right - receives existing teachers (aggregation)
    private List<Teacher> teachers;
    
    Department(List<Teacher> teachers) {
        this.teachers = teachers;  // Reference only
    }
}
```

---

## Definitions

### Very Simple Definition
Aggregation ek weak HAS-A relationship hai jahan ek class doosri class ka reference rakhti hai par uski ownership nahi hai - dono independent exist kar sakte hain.

### Simple Definition
Aggregation is a specialized form of association representing a HAS-A relationship where the contained object can exist independently of the container. It's a weak relationship where objects have separate lifecycles.

### College Exam Definition
Aggregation is a type of association that represents a weak HAS-A relationship between classes. Unlike composition, aggregation allows the contained object to exist independently of the container object. When the container is destroyed, the contained objects continue to exist. Aggregation is implemented by passing object references (usually through constructor or setter). Examples include Department-Teacher, Library-Book relationships where the part can exist without the whole.

### Technical Definition
Aggregation is a specialized association relationship implementing a unidirectional HAS-A semantic with weak coupling and independent lifecycle management. The container (whole) maintains references to component (part) objects but doesn't control their lifecycle. Components are typically passed via constructor parameters or setters rather than being instantiated within the container. This creates a "uses-a" relationship rather than strict ownership. Aggregation enables object sharing across multiple containers and supports more flexible, loosely-coupled designs compared to composition. UML represents aggregation with a hollow diamond. The key distinguishing factor from composition is lifecycle independence - destroying the container doesn't affect component existence.

### Interview Definition
Aggregation = Weak HAS-A relationship. Key aspects: (1) **Definition**: Class contains reference to another class (not creating it), passed via constructor/setter, (2) **Lifecycle**: Independent - component can exist without container, (3) **Ownership**: Weak - container doesn't own component, (4) **vs Composition**: Composition = strong (exclusive ownership, lifecycle dependent), Aggregation = weak (shared ownership, lifecycle independent), (5) **Implementation**: Pass existing object references, don't create inside container, (6) **Examples**: Department-Teacher (teacher exists without department), Library-Book (book exists without library), Car-Driver (driver exists without car). Use when: Objects should exist independently, shared across multiple containers, weak relationship.

---

## 1. Basic Aggregation

### Concept
Container holds reference to object created elsewhere.

```java
class Address {
    private String city;
    private String state;
    
    Address(String city, String state) {
        this.city = city;
        this.state = state;
    }
    
    String getDetails() {
        return city + ", " + state;
    }
}

class Employee {
    private String name;
    private Address address;  // Aggregation - Employee HAS Address
    
    Employee(String name, Address address) {
        this.name = name;
        this.address = address;  // Reference to existing object
    }
    
    void display() {
        System.out.println("Employee: " + name);
        System.out.println("Address: " + address.getDetails());
    }
}

public class Main {
    public static void main(String[] args) {
        // Create address separately
        Address addr = new Address("Mumbai", "Maharashtra");
        
        // Pass to employee (aggregation)
        Employee emp1 = new Employee("Rahul", addr);
        Employee emp2 = new Employee("Priya", addr);  // Shared address
        
        emp1.display();
        System.out.println();
        emp2.display();
        
        // Address exists even if employees are destroyed
        emp1 = null;
        emp2 = null;
        
        System.out.println("\nAddress still exists: " + addr.getDetails());
    }
}
```

**Output:**
```
Employee: Rahul
Address: Mumbai, Maharashtra

Employee: Priya
Address: Mumbai, Maharashtra

Address still exists: Mumbai, Maharashtra
```

---

## 2. Department-Teacher Example

```java
class Teacher {
    private String name;
    private String subject;
    
    Teacher(String name, String subject) {
        this.name = name;
        this.subject = subject;
    }
    
    void teach() {
        System.out.println(name + " teaching " + subject);
    }
    
    String getName() {
        return name;
    }
}

class Department {
    private String deptName;
    private List<Teacher> teachers;  // Aggregation
    
    Department(String deptName, List<Teacher> teachers) {
        this.deptName = deptName;
        this.teachers = teachers;  // Reference only
    }
    
    void showTeachers() {
        System.out.println("Department: " + deptName);
        for (Teacher t : teachers) {
            System.out.println("- " + t.getName());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Teachers exist independently
        Teacher t1 = new Teacher("Dr. Sharma", "Mathematics");
        Teacher t2 = new Teacher("Dr. Patel", "Physics");
        Teacher t3 = new Teacher("Dr. Kumar", "Chemistry");
        
        // Create departments with teachers
        List<Teacher> sciTeachers = Arrays.asList(t2, t3);
        List<Teacher> mathTeachers = Arrays.asList(t1);
        
        Department sciDept = new Department("Science", sciTeachers);
        Department mathDept = new Department("Mathematics", mathTeachers);
        
        sciDept.showTeachers();
        System.out.println();
        mathDept.showTeachers();
        
        // Department destroyed, but teachers still exist
        sciDept = null;
        
        System.out.println("\nTeachers still exist:");
        t2.teach();
        t3.teach();
    }
}
```

**Output:**
```
Department: Science
- Dr. Patel
- Dr. Kumar

Department: Mathematics
- Dr. Sharma

Teachers still exist:
Dr. Patel teaching Physics
Dr. Kumar teaching Chemistry
```

---

## 3. Library-Book Example

```java
class Book {
    private String title;
    private String author;
    
    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
    
    void display() {
        System.out.println(title + " by " + author);
    }
    
    String getTitle() {
        return title;
    }
}

class Library {
    private String name;
    private List<Book> books;  // Aggregation - books can exist without library
    
    Library(String name) {
        this.name = name;
        this.books = new ArrayList<>();
    }
    
    void addBook(Book book) {
        books.add(book);
        System.out.println("Added: " + book.getTitle() + " to " + name);
    }
    
    void removeBook(Book book) {
        books.remove(book);
        System.out.println("Removed: " + book.getTitle() + " from " + name);
    }
    
    void showBooks() {
        System.out.println("\nBooks in " + name + ":");
        for (Book book : books) {
            book.display();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Books exist independently
        Book book1 = new Book("Java Programming", "James Gosling");
        Book book2 = new Book("Clean Code", "Robert Martin");
        Book book3 = new Book("Design Patterns", "Gang of Four");
        
        // Create library
        Library library = new Library("City Library");
        
        library.addBook(book1);
        library.addBook(book2);
        library.showBooks();
        
        // Remove book from library
        library.removeBook(book1);
        library.showBooks();
        
        // Library destroyed, but books still exist
        library = null;
        
        System.out.println("\nBooks still exist:");
        book1.display();
        book2.display();
        book3.display();
    }
}
```

**Output:**
```
Added: Java Programming to City Library
Added: Clean Code to City Library

Books in City Library:
Java Programming by James Gosling
Clean Code by Robert Martin
Removed: Java Programming from City Library

Books in City Library:
Clean Code by Robert Martin

Books still exist:
Java Programming by James Gosling
Clean Code by Robert Martin
Design Patterns by Gang of Four
```

---

## 4. Composition vs Aggregation Comparison

### Composition (Strong)

```java
class Engine {
    void start() {
        System.out.println("Engine started");
    }
}

class Car {
    private Engine engine = new Engine();  // Created here (composition)
    
    void start() {
        engine.start();
    }
}

// When Car is destroyed, Engine is also destroyed
```

### Aggregation (Weak)

```java
class Driver {
    private String name;
    
    Driver(String name) {
        this.name = name;
    }
    
    String getName() {
        return name;
    }
}

class Car {
    private Driver driver;  // Reference passed (aggregation)
    
    void assignDriver(Driver driver) {
        this.driver = driver;
    }
    
    void showDriver() {
        if (driver != null) {
            System.out.println("Driver: " + driver.getName());
        }
    }
}

// When Car is destroyed, Driver still exists
```

---

## 5. Complete Example: University System

```java
class Student {
    private String name;
    private int rollNo;
    
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    
    String getName() {
        return name;
    }
    
    void study() {
        System.out.println(name + " is studying");
    }
}

class Course {
    private String courseName;
    private List<Student> students;  // Aggregation
    
    Course(String courseName) {
        this.courseName = courseName;
        this.students = new ArrayList<>();
    }
    
    void enroll(Student student) {
        students.add(student);
        System.out.println(student.getName() + " enrolled in " + courseName);
    }
    
    void unenroll(Student student) {
        students.remove(student);
        System.out.println(student.getName() + " unenrolled from " + courseName);
    }
    
    void showStudents() {
        System.out.println("\nStudents in " + courseName + ":");
        for (Student s : students) {
            System.out.println("- " + s.getName());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Students exist independently
        Student s1 = new Student("Rahul", 101);
        Student s2 = new Student("Priya", 102);
        Student s3 = new Student("Amit", 103);
        
        // Create courses
        Course java = new Course("Java Programming");
        Course python = new Course("Python Programming");
        
        // Enroll students (aggregation)
        java.enroll(s1);
        java.enroll(s2);
        python.enroll(s2);  // Same student in multiple courses
        python.enroll(s3);
        
        java.showStudents();
        python.showStudents();
        
        // Unenroll
        java.unenroll(s1);
        java.showStudents();
        
        // Course destroyed, but students still exist
        java = null;
        python = null;
        
        System.out.println("\nStudents still exist:");
        s1.study();
        s2.study();
        s3.study();
    }
}
```

**Output:**
```
Rahul enrolled in Java Programming
Priya enrolled in Java Programming
Priya enrolled in Python Programming
Amit enrolled in Python Programming

Students in Java Programming:
- Rahul
- Priya

Students in Python Programming:
- Priya
- Amit
Rahul unenrolled from Java Programming

Students in Java Programming:
- Priya

Students still exist:
Rahul is studying
Priya is studying
Amit is studying
```

---

## Aggregation vs Composition Table

| Feature | Composition | Aggregation |
|---------|-------------|-------------|
| **Relationship Type** | Strong HAS-A | Weak HAS-A |
| **Lifecycle** | Dependent | Independent |
| **Ownership** | Exclusive | Shared |
| **Creation** | Inside container | Outside container |
| **Destruction** | Together | Separate |
| **Diamond symbol** | Filled ◆ | Hollow ◇ |
| **Example** | Car-Engine | Department-Teacher |
| **Real-world** | Body-Heart | Company-Employee |
| **Can be shared** | ❌ No | ✓ Yes |
| **Implementation** | `new Engine()` | `setTeacher(teacher)` |

---

## Important Interview Questions

**Q1: What is aggregation in Java?**

Aggregation is a weak HAS-A relationship where one class contains a reference to another class, but both have independent lifecycles.

**Q2: Difference between composition and aggregation?**

Composition is strong (exclusive ownership, lifecycle dependent). Aggregation is weak (shared ownership, lifecycle independent).

**Q3: How is aggregation implemented?**

By passing object references through constructor or setter methods, not creating objects inside the class.

**Q4: Give real-world examples of aggregation.**

Department-Teacher, Library-Book, University-Student, Company-Employee, Car-Driver.

**Q5: Can the same object be aggregated in multiple containers?**

Yes, in aggregation, objects can be shared across multiple containers (e.g., a teacher in multiple departments).

**Q6: What happens when the container is destroyed in aggregation?**

The contained objects continue to exist independently since they have separate lifecycles.

**Q7: Which is better - composition or aggregation?**

Depends on the relationship. Use composition for "part-of" (exclusive ownership). Use aggregation for "has-a" (shared, independent).

**Q8: How to identify aggregation in code?**

Look for object references passed via constructor/setter (not created inside), weak lifecycle dependency.

---

## Short Recap

**Aggregation** = Weak HAS-A relationship

**Characteristics:**
- Container holds **reference** (not creates)
- **Independent lifecycle**
- Can be **shared** across containers
- Weak ownership
- Passed via constructor/setter

**vs Composition:**
- Composition: Strong, exclusive, dependent
- Aggregation: Weak, shared, independent

**Examples:**
- Department-Teacher
- Library-Book
- University-Student
- Car-Driver

**Implementation:**
```java
class Container {
    private Component comp;
    Container(Component comp) {
        this.comp = comp;  // Reference
    }
}
```

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                          AGGREGATION                                          ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   Aggregation = Weak HAS-A Relationship (Has but not owns)                    ║
║                                                                               ║
║   class Teacher {                                                             ║
║       private String name;                                                    ║
║       // ...                                                                  ║
║   }                                                                           ║
║                                                                               ║
║   class Department {                                                          ║
║       private List<Teacher> teachers;  // Aggregation                         ║
║                                                                               ║
║       Department(List<Teacher> teachers) {                                    ║
║           this.teachers = teachers;  // Reference only                        ║
║       }                                                                       ║
║   }                                                                           ║
║                                                                               ║
║   Lifecycle:                                                                  ║
║   ───────────                                                                 ║
║   ┌────────────┐    uses/references    ┌─────────┐                           ║
║   │ Department │ ───────────────────> │ Teacher │ (exists independently)    ║
║   └────────────┘                       └─────────┘                           ║
║        │                                    │                                 ║
║        │  When Department is destroyed      │                                 ║
║        ▼                                    ▼                                 ║
║    Destroyed                           Still Exists ✓                         ║
║                                                                               ║
║   Composition vs Aggregation:                                                 ║
║   ════════════════════════════                                                ║
║   Composition  ◆───────> Engine (destroyed together)                          ║
║   Aggregation  ◇- - - -> Teacher (exists separately)                          ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
