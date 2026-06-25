# Java Threads

Threads allow a program to operate more efficiently by doing multiple things at the same time. Threads can be used to perform complicated tasks in the background without interrupting the main program.

## Creating a Thread

There are two ways to create a thread.

**1. Extending the Thread class:**

```java
public class Main extends Thread {
  public void run() {
    System.out.println("This code is running in a thread");
  }
}
```

**2. Implementing the Runnable interface:**

```java
public class Main implements Runnable {
  public void run() {
    System.out.println("This code is running in a thread");
  }
}
```

## Running Threads

If the class **extends** the `Thread` class, run it by calling `start()`:

```java
Main thread = new Main();
thread.start();
```

If the class **implements** the `Runnable` interface, run it by passing the object to a `Thread` constructor:

```java
Main obj = new Main();
Thread thread = new Thread(obj);
thread.start();
```

> **Why choose Runnable?** The major difference is that when a class extends `Thread`, you cannot extend any other class. By implementing `Runnable`, it is possible to extend from another class as well (e.g. `class MyClass extends OtherClass implements Runnable`).

## Concurrency Problems

Because threads run at the same time, there is no way to know in which order the code will run. When multiple threads read/write the same variables, the values become unpredictable. This is a concurrency problem.

To avoid concurrency problems, you can use synchronization or use `isAlive()` to check whether a thread has finished before using its variables:

```java
public class Main extends Thread {
  public static int amount = 0;

  public static void main(String[] args) {
    Main thread = new Main();
    thread.start();
    
    // Wait for the thread to finish
    while(thread.isAlive()) {
      System.out.println("Waiting...");
    }
    
    System.out.println("Main: " + amount);
  }
  public void run() {
    amount++;
  }
}
```

---

## Important Interview Questions

**Q1: What is the difference between extending `Thread` and implementing `Runnable`?**

If a class extends `Thread`, it cannot extend any other class because Java doesn't support multiple inheritance. If it implements `Runnable`, it is free to extend another class. Thus, `Runnable` is highly preferred in professional development.

**Q2: What is a concurrency problem in Java threads?**

Concurrency problems (or race conditions) occur when multiple threads try to read and write to the same shared variable at the exact same time, leading to unpredictable results and data corruption. This can be resolved using the `synchronized` keyword or `java.util.concurrent` classes.
