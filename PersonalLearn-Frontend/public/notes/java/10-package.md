# PACKAGE

## Concept Introduction

**Package** in Java is like a **folder** that organizes related **classes and interfaces**. Just like files in an office are organized in different cabinets for different departments, related classes in Java are organized in different packages!

**Benefits of Packages**:

- **Organization** - Grouping classes together (like books in library sections)
- **Name collision** - Same class names in different packages (like "Sharma" in Delhi vs "Sharma" in Mumbai)
- **Access control** - Package-level access (like HR files only visible to HR department)
- **Reusability** - Code can be easily reused (like using templates)

- **Naming Convention**: All lowercase, reverse domain format (com.google.android), no Java keywords

---

## Important Interview Questions

**Q1: What is a package in Java?**

A package is a namespace that organizes related classes and interfaces - like folders organizing files on your computer. It helps avoid name conflicts (two "Sharma" in different cities) and provides access control (HR can't see Finance files).

**Q2: What is the purpose of packages?**

Four main purposes: 
1. **Organization** - group related classes like books in library sections
2. **Name collision avoidance** - same class names in different packages like different cities having same street names
3. **Access protection** - package-private access like department-level security
4. **Reusability** - import and use like borrowing books from library.

**Q3: What is java.lang package?**

java.lang is the fundamental package containing basic classes (String, System, Math, Object) that are **automatically imported** - like pre-installed apps on a new phone that you don't need to download!

**Q4: Can we have two classes with the same name?**

Yes, if they are in different packages! Like two people named "Rahul" - one in Mumbai, one in Delhi. Use fully qualified names to distinguish: com.mumbai.Rahul vs com.delhi.Rahul

**Q5: What is static import?**

Static import allows using static members without class name prefix - like speed dial on phone. Instead of Math.PI, just use PI. Convenient but use sparingly to avoid confusion!

**Q6: Can a package have sub-packages?**

Yes, but they are **independent** - parent and child packages don't share access permissions. Like India → Maharashtra → Mumbai: Mumbai police can't access Maharashtra state secrets, even though Mumbai is inside Maharashtra!

**Q7: What is the difference between import and static import?**

- **import** brings in class types - like importing a toolbox
- **static import** brings in static members (fields/methods) - like importing specific tools from the toolbox
  Regular: Math.sqrt(25) | With static import: sqrt(25)

**Q8: What is package-private access?**

When no access modifier is specified (default), members are accessible only within the same package - like documents visible only to your department, not the entire company.

---
