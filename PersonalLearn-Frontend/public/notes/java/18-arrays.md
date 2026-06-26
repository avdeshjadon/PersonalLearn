# ARRAYS IN JAVA

## Concept Introduction

Jab hume ek hi variable me 100 students ke marks store karne hon, toh 100 alag-alag variables banana bohot mushkil ho jayega. Is problem ko solve karne ke liye hum **Array** ka use karte hain, jo ek hi naam ke andar bohot saari same type ki values store kar sakta hai.

> **Interview Definition:** An array in Java is a data structure that stores a fixed-size sequential collection of elements of the same data type. Arrays are objects in Java, dynamically created, and stored in heap memory.

### Quick Summary Table

| Array Type | Used For (Kab use karein?) | Example Declaration |
|------------|----------------------------|---------------------|
| **1D Array** | Seedhi line me data store karne ke liye (list). | int[] arr = new int[5]; |
| **2D Array** | Rows aur columns me data store karne ke liye (jaise Matrix/Excel table). | int[][] arr = new int[2][3]; |
| **Jagged Array**| Aisa 2D array jisme har row ka size alag ho. | int[][] arr = new int[2][]; |

---

## 1. Single Dimensional Array (1D)

> **Interview Definition:** A single-dimensional array represents a linear list of elements of the same type.

- Isme values ko unke **index number** se access kiya jata hai.
- Array ka index hamesha 0 se start hota hai. Agar size 3 hai, toh index 0, 1, 2 honge.

```java
// Array Declare & Initialize
int[] arr = new int[3]; 
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;

// Direct initialization ka tareeka
int[] marks = {80, 90, 70};

System.out.println(marks[0]); // Output: 80
```

---

## 2. Multi-Dimensional Array (2D)

> **Interview Definition:** A multi-dimensional array is an array of arrays. The most common is the 2D array, which represents data in a tabular format (rows and columns).

- Ise matrix bhi kehte hain. 
- Isme do brackets use hote hain: pehla [] row ke liye, aur dusra [] column ke liye.

```java
int[][] matrix = {
    {1, 2, 3}, // Row 0
    {4, 5, 6}  // Row 1
};

// Access karna: Row 1 aur Column 2
System.out.println(matrix[1][2]); // Output: 6
```

---

## 3. Jagged Array

> **Interview Definition:** A jagged array is a multi-dimensional array in which the member arrays (rows) can be of different lengths.

- Normal 2D array me har row ki length same hoti hai, par Jagged array me har row ki length alag-alag ho sakti hai.

```java
int[][] arr = new int[2][]; // Rows fix ki, par column nahi
arr[0] = new int[2]; // Pehli row me 2 elements
arr[1] = new int[3]; // Dusri row me 3 elements

// Direct tarika
int[][] jagged = {
    {1, 2},
    {3, 4, 5}
};
```

---

## 4. Arrays Utility Class

Java me arrays ke sath kaam karne ke liye (jaise sort karna ya print karna), ek bani-banayi class hai jiska naam java.util.Arrays hai.

```java
import java.util.Arrays;

class Test {
    public static void main(String[] args) {
        int[] nums = {3, 1, 2};
        
        Arrays.sort(nums); // Array ko ascending order me sort kar dega
        
        // Bina loop lagaye array ko print karne ka smart tareeka
        System.out.println(Arrays.toString(nums)); 
        // Output: [1, 2, 3]
    }
}
```

---

## Important Points to Remember 

- **Fixed Size:** Java me array ka size ek baar banne ke baad fix ho jata hai. Aap use bada ya chota nahi kar sakte.
- **Index Starts at 0:** Har array ka pehla element 0 position par hota hai.
- **ArrayIndexOutOfBoundsException:** Agar aap array ke size ke bahar ka element access karne ki koshish karoge (jaise size 3 hai aur aap arr[5] mang rahe ho), toh program ye error phekega aur crash ho jayega.
- **Memory Location:** Java me arrays hamesha heap memory me store hote hain kyunki ye objects hote hain.
- **Default values:** Jab hum array banate hain (new int[5]), toh usme automatically 0 (numbers ke liye), false (boolean ke liye), ya null (objects ke liye) bhar jata hai.

---

## Interview Questions

**Q1: What is an array in Java?**

An array is a dynamically-created object in Java that serves as a container to hold a fixed number of values of a single data type continuously in memory.

**Q2: Are arrays in Java stored in the stack or heap?**

In Java, all arrays are dynamically allocated and therefore stored in the heap memory. The reference variable pointing to the array is stored in the stack.

**Q3: Can we change the size of an array after its creation?**

No, arrays in Java are of fixed length. Once created, their size cannot be changed. If you need a resizable array, you should use ArrayList.

**Q4: What happens if you specify a negative size for an array?**

The code will compile successfully, but it will throw a NegativeArraySizeException at runtime.

**Q5: What is an ArrayIndexOutOfBoundsException?**

It is a runtime exception thrown when an attempt is made to access an array with an illegal index—either a negative index or an index greater than or equal to the size of the array.

**Q6: What is a jagged array?**

A jagged array is an array of arrays where each sub-array (row) can have a different length.
