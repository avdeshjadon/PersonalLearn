# JAVA INTERVIEW QUESTIONS

## Core Java Quick Q&A

**Q1: What is Java?**

Java is a high-level, object-oriented, platform-independent programming language.

**Q2: Why is Java platform-independent?**

Java source code compiles into bytecode. Same bytecode can run on any OS with JVM.

**Q3: What is JVM?**

JVM executes Java bytecode.

**Q4: What is JDK?**

JDK is the complete development kit. It contains JRE and development tools like `javac`.

**Q5: What is JRE?**

JRE is the runtime environment required to run Java programs.

**Q6: What is main() method?**

It is the entry point of a Java application.

**Q7: Why main() is static?**

So JVM can call it without creating an object.

**Q8: What is variable?**

Variable is a named memory location used to store data.

**Q9: What are primitive data types?**

`byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`.

**Q10: What is type casting?**

Converting one data type into another.

**Q11: What is array?**

Array stores multiple values of same type using index.

**Q12: Why String is immutable?**

For security, string pool, caching, and thread safety.

**Q13: Difference between == and equals()?**

`==` compares references. `equals()` compares content.

**Q14: StringBuilder vs StringBuffer?**

StringBuilder is faster and not thread-safe. StringBuffer is synchronized and thread-safe.

**Q15: What is exception?**

Exception is an abnormal condition that interrupts program flow.

**Q16: Checked vs unchecked exception?**

Checked exceptions are checked at compile time. Unchecked exceptions occur at runtime.

**Q17: throw vs throws?**

`throw` throws an exception. `throws` declares an exception.

**Q18: Stack vs heap?**

Stack stores method calls/local variables. Heap stores objects.

**Q19: What is garbage collection?**

Automatic cleanup of unused objects from heap memory.

**Q20: What is static keyword?**

Static means member belongs to class, not object.

---

## Must-Remember One Liners

```text
JDK = JRE + tools
JRE = JVM + libraries
JVM = bytecode execution engine
```

```text
String immutable hai
Array size fixed hai
Local variables default value nahi lete
Object heap mein banta hai
Reference stack mein ho sakta hai
```
