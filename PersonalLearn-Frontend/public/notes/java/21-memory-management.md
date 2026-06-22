# MEMORY MANAGEMENT IN JAVA

## Concept Introduction

C ya C++ mein memory hume khud manage karni padti thi (`malloc`, `free`), jisse memory leaks hone ka darr rehta tha. Lekin Java smart hai, yahan **Memory Management** automatic hota hai. JVM khud memory allocate (deta) hai aur Garbage Collector unused cheezon ko clean (saaf) karta hai.

> **Interview Definition:** Java memory management is the process of automatically allocating and de-allocating memory so that developers don't have to write custom memory management code. It primarily revolves around the JVM dividing memory into two major areas: the Stack and the Heap.

### Quick Summary Table

| Memory Area | Used For (Kiske liye use hoti hai?) | Speed | Lifetime |
|-------------|-------------------------------------|-------|----------|
| **Stack** | Methods ki call aur Local variables store karne ke liye. | Very Fast | Jab tak method chal raha hai (Method end, data gone). |
| **Heap** | Objects aur unke instance variables store karne ke liye. | Slower than Stack | Jab tak object kisi reference variable se juda hua hai. |

---

## 1. Stack Memory

> **Interview Definition:** Stack memory in Java is used for static memory allocation and the execution of a thread. It contains primitive values that are specific to a method and references to objects that are in the heap.

- Ye memory ek ke upar ek (LIFO - Last In First Out) kaam karti hai.
- Ye bohot choti aur fast hoti hai.
- Jab koi method start hota hai, toh uske local variables Stack me aate hain, aur method khatam hote hi apne aap delete ho jate hain.

```java
void test() {
    // 'x' ek primitive local variable hai, ye STACK me jayega
    int x = 10; 
} // Method khatam, 'x' delete
```

---

## 2. Heap Memory

> **Interview Definition:** Heap memory is used for dynamic memory allocation of Java objects and JRE classes at runtime. All objects, regardless of where they are created, reside in the heap.

- Ye memory bohot badi hoti hai aur slow hoti hai.
- `new` keyword se banne wali har cheez (objects, arrays) Heap me jati hai.

```java
// 'Student' naam ka actual object HEAP memory me banega
Student s = new Student();
```

---

## 3. References (Pointers in Disguise)

> **Interview Definition:** A reference variable is a variable that stores the memory address (reference) of an object residing in the heap, rather than the object itself.

```java
Student s = new Student();
```
Yahan do kaam ho rahe hain:
1. `new Student()`: Ek bada object **Heap** me banta hai.
2. `Student s`: Ye ek chota reference variable hai jo **Stack** me banta hai, aur wo us Heap wale object ki taraf point karta hai.

---

## 4. Garbage Collection (GC)

> **Interview Definition:** Garbage Collection is the automatic process of looking at heap memory, identifying which objects are in use and which are not, and deleting the unused objects to free up memory.

- Agar kisi object ka connection (reference) cut jaye, toh wo lawaris (unreachable) ban jata hai.
- Garbage Collector background me chalta hai aur aise lawaris objects ko dhoondh kar memory se hata deta hai.

```java
Student s1 = new Student(); // Object Heap me bana
s1 = null; // Connection toot gaya (dereferencing)

// Ab wo object lawaris (unreachable) ho gaya hai.
// Garbage Collector aakar use saaf (delete) kar dega.
```

---

## 5. `finalize()` Method and JVM Shutdown

> **Interview Definition:** The `finalize()` method was historically used to perform cleanup operations before an object is garbage collected. However, it is highly discouraged and has been deprecated in modern Java versions.

- JVM band kab hota hai (Shutdown)?
  - Jab program ka `main` method completely khatam ho jaye.
  - Jab aap explicitly `System.exit(0)` call karein.
  - Jab koi aisi fatal (bhayanak) error aaye jise handle na kiya ja sake (jaise `OutOfMemoryError`).

---

## Interview Questions

**Q1: What is the main difference between Stack and Heap memory?**

Stack is used to store local variables and method call frames; it's very fast and strictly bound to the thread's lifecycle. Heap is used to store objects and JRE classes dynamically; it's shared across all threads and memory is reclaimed by the Garbage Collector.

**Q2: What happens if Stack memory becomes full? What if Heap memory becomes full?**

If Stack memory is full, Java throws a `StackOverflowError` (usually due to infinite recursion). If Heap memory is full, Java throws an `OutOfMemoryError`.

**Q3: What is Garbage Collection in Java?**

Garbage Collection is an automatic memory management process in Java that reclaim memory by deleting objects that are no longer reachable or referenced by the program.

**Q4: Can we force the Garbage Collector to run?**

No, we cannot force it. We can only request the JVM to run the Garbage Collector by calling `System.gc()` or `Runtime.getRuntime().gc()`, but the final decision is entirely up to the JVM.

**Q5: What does setting a reference to `null` do?**

Setting a reference variable to `null` breaks the link between the variable in the Stack and the object in the Heap. If no other reference variables point to that object, the object becomes eligible for garbage collection.
