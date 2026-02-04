# ASSOCIATION

## Concept Introduction

**Association** do classes ke beech ka **relationship** hai jahan ek class doosri class ko **use** karti hai.

**Association Types:**
1. **One-to-One** - Ek Person ka ek Passport
2. **One-to-Many** - Ek Teacher ke kai Students
3. **Many-to-One** - Kai Students ek Teacher ke
4. **Many-to-Many** - Kai Students ke kai Courses

**Association = "Uses-a" relationship**

**Note:** Aggregation and Composition are special types of Association.

---

## Why This Concept Exists

### Real-World Relationships

```
- Student learns from Teacher (association)
- Person owns Passport (one-to-one)
- Teacher teaches Students (one-to-many)
- Library contains Books (aggregation - special association)
```

### Modeling Relationships

```java
// Without association - isolated classes
class Student {
    String name;
}

class Teacher {
    String name;
}

// How do they interact?
```

### With Association

```java
class Teacher {
    String name;
    
    void teach(Student student) {  // Association
        System.out.println("Teaching " + student.name);
    }
}

class Student {
    String name;
}
```

---

## Definitions

### Very Simple Definition
Association do classes ke beech ka relationship hai jahan ek class doosri class ko use karti hai ya uske saath interact karti hai.

### Simple Definition
Association is a relationship between two classes where one class uses or interacts with another class. It represents a "uses-a" relationship and can be one-to-one, one-to-many, many-to-one, or many-to-many.

### College Exam Definition
Association is a relationship between two separate classes established through their objects. It represents how objects of one class are related to or interact with objects of another class. Association can be bidirectional or unidirectional. The four types of multiplicity are: one-to-one (1:1), one-to-many (1:N), many-to-one (N:1), and many-to-many (M:N). Aggregation and composition are special forms of association representing HAS-A relationships with different strengths of ownership.

### Technical Definition
Association is a semantic relationship between classes that defines how instances of one class connect to instances of another class. It's implemented through reference variables (instance variables or method parameters). Association represents structural relationships with defined cardinality (multiplicity). The strength of association varies: simple association (loose coupling, temporary interaction), aggregation (weak ownership, independent lifecycle), and composition (strong ownership, dependent lifecycle). Association can be bidirectional (mutual references) or unidirectional (one-way reference). In UML, association is shown with a solid line, with optional multiplicity indicators and navigability arrows.

### Interview Definition
Association = Relationship between classes. Key aspects: (1) **Definition**: One class uses/interacts with another, implemented via reference variables or method parameters, (2) **Types by Strength**: Simple association (uses-a, loose), Aggregation (has-a, weak ownership), Composition (part-of, strong ownership), (3) **Types by Multiplicity**: One-to-One (Person-Passport), One-to-Many (Teacher-Students), Many-to-One (Students-Teacher), Many-to-Many (Students-Courses), (4) **Direction**: Unidirectional (one-way) or Bidirectional (mutual), (5) **Implementation**: Through instance variables, method parameters, or return types. Characteristics: Looser than inheritance, supports code reuse, flexible, can be navigable in one or both directions. Use for: Modeling real-world relationships, loose coupling, temporary interactions.

---

## 1. Simple Association (Unidirectional)

### Concept
One class has reference to another, but not vice versa.

```java
class Address {
    private String city;
    private String state;
    
    Address(String city, String state) {
        this.city = city;
        this.state = state;
    }
    
    void display() {
        System.out.println(city + ", " + state);
    }
}

class Person {
    private String name;
    private Address address;  // Unidirectional association
    
    Person(String name, Address address) {
        this.name = name;
        this.address = address;
    }
    
    void showInfo() {
        System.out.println("Name: " + name);
        System.out.print("Address: ");
        address.display();
    }
}

public class Main {
    public static void main(String[] args) {
        Address addr = new Address("Mumbai", "Maharashtra");
        Person person = new Person("Rahul", addr);
        
        person.showInfo();
        // Person knows Address, but Address doesn't know Person
    }
}
```

**Output:**
```
Name: Rahul
Address: Mumbai, Maharashtra
```

---

## 2. Bidirectional Association

### Concept
Both classes have references to each other.

```java
class Student {
    private String name;
    private Teacher teacher;  // Reference to Teacher
    
    Student(String name) {
        this.name = name;
    }
    
    void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
    
    String getName() {
        return name;
    }
    
    void showTeacher() {
        if (teacher != null) {
            System.out.println(name + "'s teacher: " + teacher.getName());
        }
    }
}

class Teacher {
    private String name;
    private List<Student> students;  // Reference to Students
    
    Teacher(String name) {
        this.name = name;
        this.students = new ArrayList<>();
    }
    
    String getName() {
        return name;
    }
    
    void addStudent(Student student) {
        students.add(student);
        student.setTeacher(this);  // Bidirectional
    }
    
    void showStudents() {
        System.out.println(name + "'s students:");
        for (Student s : students) {
            System.out.println("- " + s.getName());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Teacher teacher = new Teacher("Dr. Sharma");
        
        Student s1 = new Student("Rahul");
        Student s2 = new Student("Priya");
        
        teacher.addStudent(s1);
        teacher.addStudent(s2);
        
        // Both directions work
        teacher.showStudents();
        System.out.println();
        s1.showTeacher();
        s2.showTeacher();
    }
}
```

**Output:**
```
Dr. Sharma's students:
- Rahul
- Priya

Rahul's teacher: Dr. Sharma
Priya's teacher: Dr. Sharma
```

---

## 3. One-to-One Association

### Concept
One instance of a class associated with one instance of another class.

```java
class Passport {
    private String passportNumber;
    private Person person;  // One-to-One
    
    Passport(String passportNumber) {
        this.passportNumber = passportNumber;
    }
    
    void setPerson(Person person) {
        this.person = person;
    }
    
    void display() {
        System.out.println("Passport: " + passportNumber);
        if (person != null) {
            System.out.println("Owner: " + person.getName());
        }
    }
}

class Person {
    private String name;
    private Passport passport;  // One-to-One
    
    Person(String name) {
        this.name = name;
    }
    
    String getName() {
        return name;
    }
    
    void setPassport(Passport passport) {
        this.passport = passport;
        passport.setPerson(this);  // Bidirectional
    }
    
    void displayPassport() {
        System.out.println("Person: " + name);
        if (passport != null) {
            passport.display();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Rahul Kumar");
        Passport passport = new Passport("A1234567");
        
        person.setPassport(passport);
        
        person.displayPassport();
    }
}
```

**Output:**
```
Person: Rahul Kumar
Passport: A1234567
Owner: Rahul Kumar
```

---

## 4. One-to-Many Association

### Concept
One instance associated with multiple instances.

```java
class Department {
    private String name;
    private List<Employee> employees;  // One-to-Many
    
    Department(String name) {
        this.name = name;
        this.employees = new ArrayList<>();
    }
    
    void addEmployee(Employee emp) {
        employees.add(emp);
        emp.setDepartment(this);
    }
    
    String getName() {
        return name;
    }
    
    void showEmployees() {
        System.out.println("Department: " + name);
        System.out.println("Employees:");
        for (Employee emp : employees) {
            System.out.println("- " + emp.getName());
        }
    }
}

class Employee {
    private String name;
    private Department department;  // Many-to-One (reverse)
    
    Employee(String name) {
        this.name = name;
    }
    
    String getName() {
        return name;
    }
    
    void setDepartment(Department dept) {
        this.department = dept;
    }
    
    void showDepartment() {
        if (department != null) {
            System.out.println(name + " works in " + department.getName());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Department it = new Department("IT");
        
        Employee e1 = new Employee("Rahul");
        Employee e2 = new Employee("Priya");
        Employee e3 = new Employee("Amit");
        
        it.addEmployee(e1);
        it.addEmployee(e2);
        it.addEmployee(e3);
        
        it.showEmployees();
        System.out.println();
        e1.showDepartment();
    }
}
```

**Output:**
```
Department: IT
Employees:
- Rahul
- Priya
- Amit

Rahul works in IT
```

---

## 5. Many-to-Many Association

### Concept
Multiple instances associated with multiple instances.

```java
class Student {
    private String name;
    private List<Course> courses;  // Many-to-Many
    
    Student(String name) {
        this.name = name;
        this.courses = new ArrayList<>();
    }
    
    String getName() {
        return name;
    }
    
    void enrollCourse(Course course) {
        courses.add(course);
        course.addStudent(this);
    }
    
    void showCourses() {
        System.out.println(name + "'s courses:");
        for (Course c : courses) {
            System.out.println("- " + c.getName());
        }
    }
}

class Course {
    private String name;
    private List<Student> students;  // Many-to-Many
    
    Course(String name) {
        this.name = name;
        this.students = new ArrayList<>();
    }
    
    String getName() {
        return name;
    }
    
    void addStudent(Student student) {
        if (!students.contains(student)) {
            students.add(student);
        }
    }
    
    void showStudents() {
        System.out.println("Course: " + name);
        System.out.println("Students:");
        for (Student s : students) {
            System.out.println("- " + s.getName());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Create students
        Student s1 = new Student("Rahul");
        Student s2 = new Student("Priya");
        Student s3 = new Student("Amit");
        
        // Create courses
        Course java = new Course("Java Programming");
        Course python = new Course("Python Programming");
        Course db = new Course("Database");
        
        // Many-to-Many associations
        s1.enrollCourse(java);
        s1.enrollCourse(python);
        
        s2.enrollCourse(java);
        s2.enrollCourse(db);
        
        s3.enrollCourse(python);
        s3.enrollCourse(db);
        
        // Show from both sides
        java.showStudents();
        System.out.println();
        s1.showCourses();
    }
}
```

**Output:**
```
Course: Java Programming
Students:
- Rahul
- Priya

Rahul's courses:
- Java Programming
- Python Programming
```

---

## Association Types Comparison

| Type | Multiplicity | Example | Bidirectional | Strength |
|------|--------------|---------|---------------|----------|
| **Simple** | Varies | Teacher-Student | Optional | Loose |
| **One-to-One** | 1:1 | Person-Passport | Usually Yes | Medium |
| **One-to-Many** | 1:N | Department-Employees | Usually Yes | Medium |
| **Many-to-Many** | M:N | Students-Courses | Yes | Medium |
| **Aggregation** | Varies | Library-Books | Optional | Weak |
| **Composition** | Varies | Car-Engine | Usually No | Strong |

---

## Association Hierarchy

```
╔═══════════════════════════════════════════════════════════════════════╗
║                         ASSOCIATION TYPES                             ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                       ║
║                          Association                                  ║
║                               │                                       ║
║                ┌──────────────┴──────────────┐                        ║
║                │                             │                        ║
║           Simple Association          Special Association             ║
║         (loose, temporary)              (HAS-A)                       ║
║                                              │                        ║
║                                    ┌─────────┴─────────┐              ║
║                                    │                   │              ║
║                               Aggregation         Composition         ║
║                               (weak HAS-A)       (strong HAS-A)       ║
║                               ◇ hollow            ◆ filled            ║
║                             (independent)       (dependent)           ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

## Important Interview Questions

**Q1: What is association in OOP?**

Association is a relationship between two classes where one class uses or interacts with another class, representing a "uses-a" relationship.

**Q2: Types of association by multiplicity?**

One-to-One (Person-Passport), One-to-Many (Department-Employees), Many-to-One (Employees-Department), Many-to-Many (Students-Courses).

**Q3: Difference between unidirectional and bidirectional association?**

Unidirectional: Only one class knows about the other. Bidirectional: Both classes have references to each other.

**Q4: How is association different from aggregation?**

Association is a general relationship. Aggregation is a special type of association representing HAS-A with weak ownership.

**Q5: Association vs Composition?**

Association is loose (uses-a), composition is strong (part-of with lifecycle dependency).

**Q6: Can association be implemented through method parameters?**

Yes, association can be implemented via instance variables, method parameters, or return types.

**Q7: Give real-world examples of associations.**

Teacher-Student, Doctor-Patient, Customer-Order, Library-Books, Driver-Car.

**Q8: What is the strongest form of association?**

Composition is the strongest form (strong ownership with lifecycle dependency).

---

## Short Recap

**Association** = Relationship between classes (uses-a)

**Types by Multiplicity:**
1. **One-to-One** (1:1) - Person-Passport
2. **One-to-Many** (1:N) - Department-Employees
3. **Many-to-One** (N:1) - Employees-Department
4. **Many-to-Many** (M:N) - Students-Courses

**Types by Strength:**
1. **Simple Association** - Loose, temporary
2. **Aggregation** - Weak HAS-A
3. **Composition** - Strong HAS-A

**Direction:**
- **Unidirectional** - One-way
- **Bidirectional** - Two-way

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                          ASSOCIATION                                          ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   Association = Relationship between classes                                  ║
║                                                                               ║
║   1. Simple Association (loose):                                              ║
║      class Teacher {                                                          ║
║          void teach(Student student) {  // Temporary interaction             ║
║              // ...                                                           ║
║          }                                                                    ║
║      }                                                                        ║
║                                                                               ║
║   2. One-to-One:                                                              ║
║      Person (1) ←──────→ (1) Passport                                         ║
║                                                                               ║
║   3. One-to-Many:                                                             ║
║      Department (1) ───────→ (N) Employees                                    ║
║                                                                               ║
║   4. Many-to-Many:                                                            ║
║      Students (M) ←────────→ (N) Courses                                      ║
║                                                                               ║
║   5. Aggregation (weak HAS-A):                                                ║
║      Library ◇────────→ Books (books exist independently)                     ║
║                                                                               ║
║   6. Composition (strong HAS-A):                                              ║
║      Car ◆────────→ Engine (engine destroyed with car)                        ║
║                                                                               ║
║   Strength: Simple < Aggregation < Composition                                ║
║             loose    weak         strong                                      ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```
