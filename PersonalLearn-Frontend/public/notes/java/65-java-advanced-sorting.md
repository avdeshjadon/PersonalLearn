# Java Advanced Sorting (Comparator & Comparable)

To sort custom objects (like a `Car` class), you need to specify a rule that decides how objects should be sorted. 

The **Comparator** and **Comparable** interfaces allow you to specify what rule is used to sort objects.

## The Comparator Interface

The `Comparator` interface allows you to create an external class with a `compare()` method that compares two objects.

The `compare()` method should return:
- **Negative** if the first object should go first.
- **Positive** if the second object should go first.
- **Zero** if the order does not matter.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class Car {
  public String brand;
  public int year;
  
  public Car(String b, int y) {
    brand = b; year = y;
  }
}

class SortByYear implements Comparator<Car> {
  public int compare(Car a, Car b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    return 0; 
  }
}

public class Main { 
  public static void main(String[] args) { 
    ArrayList<Car> myCars = new ArrayList<>();    
    myCars.add(new Car("BMW", 1999));
    myCars.add(new Car("Honda", 2006));

    // Sort using Comparator
    Collections.sort(myCars, new SortByYear());
  } 
}
```

### Using a Lambda Expression
Instead of making a whole new class, you can write:
```java
Collections.sort(myCars, (a, b) -> {
  if (a.year < b.year) return -1;
  if (a.year > b.year) return 1;
  return 0;
});
```

## The Comparable Interface

The `Comparable` interface allows an object to specify its **own** sorting rule with a `compareTo()` method. 

```java
class Car implements Comparable<Car> {
  public String brand;
  public int year;
  
  public Car(String b, int y) {
    brand = b; year = y;
  }
  
  // Decide how THIS object compares to OTHER objects
  public int compareTo(Car other) {
    if(this.year < other.year) return -1; 
    if(this.year > other.year) return 1;  
    return 0; 
  }
}

// Usage:
// Collections.sort(myCars); // No external comparator needed!
```

## A Common Sorting Trick

Instead of writing three `if` statements for numbers, you can just subtract them:

```java
// Ascending order
return a.year - b.year;

// Descending order (reverse)
return b.year - a.year;
```

---

## Important Interview Questions

**Q1: What is the main difference between `Comparable` and `Comparator`?**

`Comparable` is implemented by the class itself (e.g., `class Car implements Comparable`) and defines a single "natural" sorting rule using `compareTo()`. `Comparator` is a separate external class used to define multiple custom sorting rules (e.g., sort by year, sort by brand) using `compare()`.

**Q2: How does returning `a - b` sort an array of integers?**

When sorting, returning a negative number means the first element (`a`) should come before the second (`b`). If `a < b`, then `a - b` is negative, meaning smaller numbers are placed first, resulting in an ascending sort.
