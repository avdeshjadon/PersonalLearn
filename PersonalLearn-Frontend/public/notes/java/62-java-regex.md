# Java Regular Expressions (Regex)

A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for.

Java does not have a built-in Regular Expression class, but we can import the `java.util.regex` package, which includes:
- **`Pattern` Class** - Defines a pattern (to be used in a search)
- **`Matcher` Class** - Used to search for the pattern

## Basic Example

Find out if there are any occurrences of the word "w3schools" in a sentence:

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
  public static void main(String[] args) {
    Pattern pattern = Pattern.compile("w3schools", Pattern.CASE_INSENSITIVE);
    Matcher matcher = pattern.matcher("Visit W3Schools!");
    
    boolean matchFound = matcher.find();
    
    if(matchFound) {
      System.out.println("Match found");
    } else {
      System.out.println("Match not found");
    }
  }
}
```

> **Flags:** Flags in `Pattern.compile()` change how the search is performed. Examples include `Pattern.CASE_INSENSITIVE`, `Pattern.LITERAL`, and `Pattern.UNICODE_CASE`.

## Regular Expression Patterns

Brackets are used to find a range of characters:

| Expression | Description |
| :--- | :--- |
| `[abc]` | Find one character from the options between the brackets |
| `[^abc]` | Find one character NOT between the brackets |
| `[0-9]` | Find one character from the range 0 to 9 |

### Metacharacters

Metacharacters are characters with a special meaning:

| Metacharacter | Description |
| :--- | :--- |
| `\|` | Find a match for any one of the patterns separated by `\|` (cat\|dog) |
| `.` | Find just one instance of any character |
| `^` | Finds a match at the beginning of a string |
| `$` | Finds a match at the end of the string |
| `\d` | Find a digit |
| `\s` | Find a whitespace character |
| `\b` | Find a match at the beginning/end of a word |

### Quantifiers

Quantifiers define quantities:

| Quantifier | Description |
| :--- | :--- |
| `n+` | Matches any string that contains at least one n |
| `n*` | Matches any string that contains zero or more occurrences of n |
| `n?` | Matches any string that contains zero or one occurrences of n |
| `n{x}` | Matches any string that contains a sequence of exactly X n's |

---

## Important Interview Questions

**Q1: What is the difference between `Pattern` and `Matcher` classes in Java Regex?**

`Pattern` is used to compile and define the regular expression rule (the search pattern). `Matcher` is an engine that performs match operations on a specific text (string) using the compiled `Pattern`.

**Q2: What does the regex `^[a-zA-Z]+$` mean?**

`^` indicates the start of the string. `[a-zA-Z]+` matches one or more uppercase or lowercase English letters. `$` indicates the end of the string. Overall, it checks if a string contains *only* alphabetic characters from start to finish.
