# BEST PRACTICES AND QUICK REFERENCE

## Best Practices

- Use meaningful names.
- Keep classes small and focused.
- Use packages properly.
- Prefer `private` fields and public methods.
- Avoid unnecessary static usage.
- Use `StringBuilder` for repeated string changes.
- Handle exceptions properly.
- Avoid empty catch blocks.
- Follow naming conventions.
- Keep code readable over clever.

---

## Common Myths

**Myth: Java is purely interpreted.**

Reality: Java is hybrid. Source code compiles to bytecode, and JVM interprets/JIT compiles it.

**Myth: finalize() is good for cleanup.**

Reality: Avoid `finalize()`. Use proper resource handling like try-with-resources.

**Myth: StringBuilder and StringBuffer are same.**

Reality: StringBuffer is synchronized/thread-safe. StringBuilder is faster but not thread-safe.

---

## Performance Tips

- Use right data structure.
- Avoid creating unnecessary objects.
- Use `StringBuilder` in loops.
- Close resources properly.
- Avoid premature optimization.
- Measure before optimizing.

---

## Quick Reference

```java
public static void main(String[] args)
```

```java
if (condition) { }
else { }
```

```java
for (int i = 0; i < n; i++) { }
```

```java
try { }
catch (Exception e) { }
finally { }
```

```java
class Student {
    private String name;
}
```

---

## Interview Prep Tips

- Definition short rakho.
- Example ready rakho.
- Difference questions table mein explain karo.
- `public static void main`, JVM, String immutability, exceptions, OOP basics strong rakho.

