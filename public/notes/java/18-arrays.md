# ARRAYS IN JAVA

## Concept Introduction

Array same type ke multiple values store karne ke liye use hota hai.

```java
int[] marks = {80, 90, 70};
```

---

## Single Dimensional Array

```java
int[] arr = new int[3];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
```

Access:

```java
System.out.println(arr[0]);
```

---

## Multi Dimensional Array

```java
int[][] matrix = {
    {1, 2},
    {3, 4}
};
```

Access:

```java
System.out.println(matrix[0][1]); // 2
```

---

## Jagged Array

Jagged array mein rows ki length different ho sakti hai.

```java
int[][] arr = {
    {1, 2},
    {3, 4, 5}
};
```

---

## Arrays Utility Class

```java
import java.util.Arrays;

int[] nums = {3, 1, 2};
Arrays.sort(nums);
System.out.println(Arrays.toString(nums));
```

---

## Important Points

- Array size fixed hota hai.
- Array index `0` se start hota hai.
- Invalid index par `ArrayIndexOutOfBoundsException` aata hai.
- Array object heap memory mein store hota hai.

---

## Interview Questions

**Q1: What is array?**

Array is a collection of same type values stored with index.

**Q2: Is array size fixed?**

Yes, array size fixed hota hai.

**Q3: What is jagged array?**

Multi-dimensional array jisme rows ki length different ho.

