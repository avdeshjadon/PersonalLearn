# 41) ASCII VS UNICODE IN JAVA

## Concept Introduction

ASCII aur Unicode character encoding schemes hain jo characters ko numbers mein represent karte hain. ASCII (American Standard Code for Information Interchange) 7-bit encoding hai jo sirf 128 characters support karta hai — English letters, digits, aur basic symbols. Unicode universal character set hai jo duniya ki sabhi languages ko support karta hai — 143,000+ characters including Chinese, Arabic, Hindi, emojis. Java char type Unicode UTF-16 use karta hai (16-bit, 0 to 65535), isliye Java mein international characters easily use kar sakte ho. ASCII Unicode ka subset hai (first 128 characters same hain). Unicode ki wajah se Java truly international language hai!

---

## Why This Concept Exists

**Problem:**
- ASCII sirf English support karta tha
- International languages represent nahi ho sakti thi
- Different countries ke liye different encodings
- Data exchange mein problems
- Emojis aur special symbols support nahi

**Solution (Unicode):**
- Universal character set
- All world languages support
- Consistent encoding across platforms
- Emojis, symbols, mathematical characters
- Java char uses Unicode UTF-16
- Internationalization (i18n) support

---

## Definitions

### 🔹 Very Simple Definition
ASCII 128 characters support karta hai (English), Unicode 143,000+ characters support karta hai (all languages).

### 🔹 College Exam Definition
ASCII (American Standard Code for Information Interchange) is 7-bit character encoding supporting 128 characters (0-127): uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), punctuation, control characters. Unicode is universal character encoding supporting 143,000+ characters from all world languages, emojis, symbols. Java uses Unicode UTF-16 for char type (16-bit, 0-65535). ASCII is subset of Unicode (first 128 characters identical). Unicode enables internationalization: Chinese (中文), Arabic (العربية), Hindi (हिंदी), emojis (😀). UTF-8, UTF-16, UTF-32 are Unicode encoding forms.

### 🔹 Viva Definition
ASCII and Unicode are character encoding standards mapping characters to numeric codes. **ASCII** - 7-bit encoding (0-127), Extended ASCII: 8-bit (0-255), Characters: A-Z (65-90), a-z (97-122), 0-9 (48-57), space (32), control characters (0-31), Limitations: English only, no international support, **Unicode** - Universal character set, Code points: U+0000 to U+10FFFF (1,114,112 possible), Planes: Basic Multilingual Plane (BMP, U+0000-U+FFFF), Supplementary planes (U+10000-U+10FFFF), Encodings: UTF-8 (variable 1-4 bytes), UTF-16 (variable 2-4 bytes), UTF-32 (fixed 4 bytes), **Java Implementation** - char type: UTF-16, 16-bit (0-65535), BMP characters: single char, Supplementary characters: surrogate pairs (2 chars), String: sequence of UTF-16 code units, Character class: Unicode utilities, **ASCII in Unicode** - First 128 Unicode code points identical to ASCII, 'A' = 65 in both ASCII and Unicode, Backward compatibility maintained.

### 🔹 Interview Definition
ASCII and Unicode are character encoding standards with different scopes and capabilities. **ASCII Details** - Specification: ANSI X3.4-1968, Bit size: 7-bit (128 characters), Extended: 8-bit (256 characters, not standard), Character ranges: Control (0-31): non-printable (NUL, TAB, LF, CR), Printable (32-126): space, punctuation, digits, letters, DEL (127): delete character, Numeric codes: '0'=48, 'A'=65, 'a'=97, space=32, Limitations: English-centric, no accents (é, ñ), no Asian languages, no emojis, **Unicode Details** - Specification: Unicode Standard (latest: 15.0), Code space: U+0000 to U+10FFFF (1,114,112 code points), Planes: Plane 0 (BMP): U+0000-U+FFFF (most common characters), Plane 1 (SMP): U+10000-U+1FFFF (historic scripts, emojis), Planes 2-16: specialized, Encodings: UTF-8 (web standard, variable 1-4 bytes, ASCII-compatible), UTF-16 (Java/Windows, variable 2-4 bytes), UTF-32 (fixed 4 bytes, simple but wasteful), **Java char Type** - Size: 16-bit (2 bytes), Range: 0 to 65,535 (U+0000 to U+FFFF), Encoding: UTF-16, BMP characters: fit in single char, Supplementary characters: require surrogate pairs (high surrogate U+D800-U+DBFF, low surrogate U+DC00-U+DFFF), Example: '中' (Chinese) = U+4E2D (single char), '𝕳' (mathematical) = U+1D577 (surrogate pair), **String Encoding** - Internal: UTF-16 code units, Methods: codePointAt() for full Unicode, charAt() for UTF-16 units, length() returns UTF-16 units (not characters), Iteration: use codePoints() for proper character iteration, **Compatibility** - ASCII subset: Unicode U+0000-U+007F identical to ASCII, 'A' = 65 = U+0041 in both, Conversion: ASCII → Unicode automatic, Unicode → ASCII may lose data.

### 🔹 Technical Definition
ASCII and Unicode are character encoding standards implemented at different abstraction levels. **ASCII Implementation** - 7-bit encoding: 2⁷ = 128 characters, Binary representation: 0000000 to 1111111, Extended ASCII: 8th bit for 128 additional characters (not standardized), Code pages: different extensions (Latin-1, Windows-1252), **Unicode Architecture** - Abstract character repertoire: collection of characters, Coded character set: mapping characters to code points, Character encoding forms: UTF-8/UTF-16/UTF-32, Character encoding schemes: byte serialization, **UTF-16 Details** - Code units: 16-bit, BMP encoding: single code unit (U+0000-U+FFFF), Supplementary encoding: surrogate pairs (high + low surrogates), Calculation: code point = (high - 0xD800) × 0x400 + (low - 0xDC00) + 0x10000, Byte order: BOM (Byte Order Mark) U+FEFF for endianness, **Java Implementation** - char primitive: 16-bit UTF-16 code unit, String class: array of char (UTF-16 code units), Character class: Unicode category methods (isLetter, isDigit), Code point methods: codePointAt, codePointCount, offsetByCodePoints, Normalization: Normalizer class for canonical/compatibility forms, **Bytecode** - ldc instruction: loads string constants (UTF-8 in class file), String pool: UTF-16 at runtime, Modified UTF-8: null character encoded as 2 bytes (0xC0 0x80), **Performance** - ASCII: 1 byte per character, UTF-8: 1-4 bytes (ASCII-compatible), UTF-16: 2-4 bytes (Java default), UTF-32: 4 bytes (simple but wasteful), Trade-off: space vs processing complexity.

### 🔹 One-line Crisp Definition
ASCII = 128 characters (English) + 7-bit, Unicode = 143,000+ characters (all languages) + UTF-16 in Java

---

## DIAGRAM: ASCII vs Unicode

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ASCII VS UNICODE                                         │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  ASCII (7-bit, 128 characters)                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Range: 0-127                                                        │  │
│  │                                                                      │  │
│  │  0-31:    Control characters (non-printable)                        │  │
│  │           NUL, TAB, LF, CR, etc.                                    │  │
│  │                                                                      │  │
│  │  32:      Space                                                      │  │
│  │                                                                      │  │
│  │  33-47:   Punctuation                                               │  │
│  │           ! " # $ % & ' ( ) * + , - . /                             │  │
│  │                                                                      │  │
│  │  48-57:   Digits                                                     │  │
│  │           0 1 2 3 4 5 6 7 8 9                                        │  │
│  │                                                                      │  │
│  │  58-64:   Punctuation                                               │  │
│  │           : ; < = > ? @                                             │  │
│  │                                                                      │  │
│  │  65-90:   Uppercase letters                                         │  │
│  │           A B C ... X Y Z                                           │  │
│  │                                                                      │  │
│  │  91-96:   Punctuation                                               │  │
│  │           [ \ ] ^ _ `                                               │  │
│  │                                                                      │  │
│  │  97-122:  Lowercase letters                                         │  │
│  │           a b c ... x y z                                           │  │
│  │                                                                      │  │
│  │  123-126: Punctuation                                               │  │
│  │           { | } ~                                                   │  │
│  │                                                                      │  │
│  │  127:     DEL (delete)                                              │  │
│  │                                                                      │  │
│  │  Limitations:                                                        │  │
│  │  ❌ No international characters (é, ñ, ü)                           │  │
│  │  ❌ No Asian languages (中文, 日本語, 한국어)                          │  │
│  │  ❌ No Arabic (العربية), Hindi (हिंदी)                              │  │
│  │  ❌ No emojis (😀, 🎉, ❤️)                                           │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│  UNICODE (143,000+ characters)                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  Range: U+0000 to U+10FFFF (1,114,112 code points)                  │  │
│  │                                                                      │  │
│  │  U+0000-U+007F:   ASCII (identical to ASCII)                        │  │
│  │                   A=65, a=97, 0=48                                  │  │
│  │                                                                      │  │
│  │  U+0080-U+00FF:   Latin-1 Supplement                                │  │
│  │                   é, ñ, ü, ©, ®                                     │  │
│  │                                                                      │  │
│  │  U+0100-U+017F:   Latin Extended-A                                  │  │
│  │                   ā, ē, ī, ō, ū                                     │  │
│  │                                                                      │  │
│  │  U+0370-U+03FF:   Greek                                             │  │
│  │                   α, β, γ, δ, π                                     │  │
│  │                                                                      │  │
│  │  U+0400-U+04FF:   Cyrillic                                          │  │
│  │                   А, Б, В, Г, Д                                     │  │
│  │                                                                      │  │
│  │  U+0600-U+06FF:   Arabic                                            │  │
│  │                   ا, ب, ت, ث, ج                                    │  │
│  │                                                                      │  │
│  │  U+0900-U+097F:   Devanagari (Hindi)                                │  │
│  │                   अ, आ, इ, ई, उ                                    │  │
│  │                                                                      │  │
│  │  U+4E00-U+9FFF:   CJK Unified Ideographs (Chinese)                  │  │
│  │                   中, 文, 字, 日, 本                                 │  │
│  │                                                                      │  │
│  │  U+AC00-U+D7AF:   Hangul (Korean)                                   │  │
│  │                   가, 나, 다, 라, 마                                 │  │
│  │                                                                      │  │
│  │  U+1F600-U+1F64F: Emoticons (Emojis)                                │  │
│  │                   😀, 😁, 😂, 😃, 😄                                 │  │
│  │                                                                      │  │
│  │  Advantages:                                                         │  │
│  │  ✅ All world languages                                             │  │
│  │  ✅ Mathematical symbols (∑, ∫, √)                                   │  │
│  │  ✅ Emojis and symbols                                              │  │
│  │  ✅ Historical scripts                                              │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM: Java char and Unicode

```
┌─────────────────────────────────────────────────────┐
│         JAVA CHAR TYPE (UTF-16)                     │
└─────────────────────────────────────────────────────┘

CHAR SIZE: 16-bit (2 bytes)
RANGE: 0 to 65,535 (U+0000 to U+FFFF)

BASIC MULTILINGUAL PLANE (BMP):
┌──────────────────────────────────────┐
│  U+0000-U+FFFF (65,536 characters)   │
│  ├─ Fits in single char              │
│  ├─ Most common characters           │
│  └─ Examples:                        │
│     'A' = U+0041                     │
│     '中' = U+4E2D                     │
│     'α' = U+03B1                     │
│     '😀' = U+1F600 (NO! Supplementary)│
└──────────────────────────────────────┘

SUPPLEMENTARY CHARACTERS:
┌──────────────────────────────────────┐
│  U+10000-U+10FFFF                    │
│  ├─ Requires surrogate pair          │
│  ├─ 2 chars needed                   │
│  └─ Examples:                        │
│     '𝕳' = U+1D577 (2 chars)          │
│     '😀' = U+1F600 (2 chars)          │
│     '🎉' = U+1F389 (2 chars)          │
└──────────────────────────────────────┘

EXAMPLE:
char c1 = 'A';      // U+0041 (BMP, 1 char)
char c2 = '中';     // U+4E2D (BMP, 1 char)
String s = "😀";    // U+1F600 (2 chars!)
System.out.println(s.length());  // 2 (not 1!)
```

---

## Real-life Hinglish Example

### Example 1: Language Support

**ASCII vs Unicode = English vs All Languages:**
```
ASCII (Old Phone):
├─ Only English keyboard
├─ A-Z, a-z, 0-9
├─ Basic punctuation
└─ Cannot type: हिंदी, 中文, العربية

Unicode (Smartphone):
├─ All language keyboards
├─ English: A-Z
├─ Hindi: अ-ज्ञ
├─ Chinese: 中文
├─ Arabic: العربية
├─ Emojis: 😀🎉❤️
└─ Mathematical: ∑∫√

Java equivalent:
// ASCII range
char ascii = 'A';  // Works

// Unicode (all languages)
char hindi = 'अ';   // Works!
char chinese = '中'; // Works!
String emoji = "😀"; // Works! (2 chars)
```

### Example 2: Character Codes

**ASCII vs Unicode = Limited vs Universal:**
```
ASCII Codes:
├─ 'A' = 65
├─ 'a' = 97
├─ '0' = 48
└─ Only 128 characters

Unicode Codes:
├─ 'A' = U+0041 (same as ASCII)
├─ 'अ' = U+0905 (Hindi)
├─ '中' = U+4E2D (Chinese)
├─ '😀' = U+1F600 (Emoji)
└─ 143,000+ characters

Java:
System.out.println((int) 'A');    // 65
System.out.println((int) 'अ');    // 2309
System.out.println((int) '中');   // 20013
```

---

## Syntax Explanation

### ASCII characters in Java:

```java
public class ASCIIDemo {
    public static void main(String[] args) {
        // ASCII characters (0-127)
        char letter = 'A';        // 65
        char digit = '5';         // 53
        char space = ' ';         // 32
        char newline = '\n';      // 10
        
        // Print ASCII codes
        System.out.println((int) letter);  // 65
        System.out.println((int) digit);   // 53
        System.out.println((int) space);   // 32
        
        // ASCII range check
        if (letter >= 'A' && letter <= 'Z') {
            System.out.println("Uppercase letter");
        }
        
        // Convert to lowercase (ASCII arithmetic)
        char lower = (char) (letter + 32);  // 'a'
        System.out.println(lower);  // a
    }
}
```

### Unicode characters in Java:

```java
public class UnicodeDemo {
    public static void main(String[] args) {
        // Unicode characters
        char english = 'A';           // U+0041
        char hindi = 'अ';             // U+0905
        char chinese = '中';          // U+4E2D
        char greek = 'α';             // U+03B1
        char arabic = 'ا';            // U+0627
        
        // Unicode escape sequence
        char unicode1 = '\u0041';     // 'A'
        char unicode2 = '\u0905';     // 'अ'
        char unicode3 = '\u4E2D';     // '中'
        
        // Print Unicode code points
        System.out.println((int) hindi);    // 2309
        System.out.println((int) chinese);  // 20013
        
        // String with Unicode
        String multilingual = "Hello नमस्ते 你好 مرحبا";
        System.out.println(multilingual);
        
        // Emoji (supplementary character, 2 chars)
        String emoji = "😀";
        System.out.println(emoji.length());  // 2 (not 1!)
        System.out.println(emoji.codePointCount(0, emoji.length()));  // 1
        
        // Proper character iteration
        String text = "A😀B";
        System.out.println("Length: " + text.length());  // 4 (A + 2 chars for emoji + B)
        
        // Iterate by code points (correct)
        text.codePoints().forEach(cp -> {
            System.out.println(Character.toChars(cp));
        });
    }
}
```

### ASCII to Unicode conversion:

```java
public class ConversionDemo {
    public static void main(String[] args) {
        // ASCII is subset of Unicode
        char ascii = 'A';  // ASCII 65
        int unicode = ascii;  // Unicode U+0041 (same value)
        
        System.out.println("ASCII: " + (int) ascii);      // 65
        System.out.println("Unicode: U+" + Integer.toHexString(unicode).toUpperCase());  // U+0041
        
        // All ASCII characters are valid Unicode
        for (char c = 0; c < 128; c++) {
            // ASCII range is Unicode U+0000 to U+007F
            System.out.print(c);
        }
    }
}
```

---

## Memory Behavior

```
┌─────────────────────────────────────────────────────┐
│         CHARACTER ENCODING IN MEMORY                │
└─────────────────────────────────────────────────────┘

ASCII CHARACTER:
char c = 'A';  // ASCII 65, Unicode U+0041

MEMORY (2 bytes):
┌──────────────────────────────────────┐
│  [00000000 01000001]                 │
│   (16-bit, value 65)                 │
└──────────────────────────────────────┘

UNICODE BMP CHARACTER:
char c = '中';  // Unicode U+4E2D (20013)

MEMORY (2 bytes):
┌──────────────────────────────────────┐
│  [01001110 00101101]                 │
│   (16-bit, value 20013)              │
└──────────────────────────────────────┘

UNICODE SUPPLEMENTARY CHARACTER:
String s = "😀";  // Unicode U+1F600

MEMORY (4 bytes, 2 chars):
┌──────────────────────────────────────┐
│  High surrogate: [11011000 00111101] │
│  Low surrogate:  [11011110 00000000] │
│  (2 × 16-bit = 32-bit total)         │
└──────────────────────────────────────┘
```

---

## Advantages

✅ **Unicode Advantages**:
- All world languages support
- Emojis and symbols
- Mathematical characters
- Consistent across platforms
- Future-proof

✅ **ASCII Advantages**:
- Simple and compact
- Fast processing
- Backward compatible
- Universal support

---

## Limitations

❌ **ASCII Limitations**:
- Only 128 characters
- English-centric
- No international support
- No emojis

❌ **Unicode Limitations**:
- More memory (2-4 bytes vs 1)
- Complex processing
- Surrogate pairs complexity

---

## Edge Cases

🔸 **Emoji length:**
```java
String emoji = "😀";
System.out.println(emoji.length());  // 2 (not 1!)
// Emoji is supplementary character (2 chars)
```

🔸 **String iteration:**
```java
String text = "A😀B";
for (int i = 0; i < text.length(); i++) {
    System.out.println(text.charAt(i));
}
// Prints: A, ?, ?, B (emoji split!)

// Correct way:
text.codePoints().forEach(cp -> {
    System.out.println(Character.toChars(cp));
});
```

🔸 **ASCII subset:**
```java
char c = 'A';
// 'A' is both ASCII 65 and Unicode U+0041
// First 128 Unicode code points = ASCII
```

---

## Common Beginner Mistakes

🚫 **Mistake 1**: Assuming length() counts characters
```java
❌ String emoji = "😀";
   System.out.println(emoji.length());  // 2 (not 1!)

✅ int count = emoji.codePointCount(0, emoji.length());
   System.out.println(count);  // 1 (correct)
```

🚫 **Mistake 2**: Using charAt() for emojis
```java
❌ String text = "😀";
   char c = text.charAt(0);  // Only gets high surrogate!

✅ int codePoint = text.codePointAt(0);
   String emoji = new String(Character.toChars(codePoint));
```

🚫 **Mistake 3**: Assuming 1 char = 1 character
```java
❌ char emoji = '😀';  // Error: cannot fit in char

✅ String emoji = "😀";  // Needs 2 chars (String)
```

🚫 **Mistake 4**: ASCII-only assumptions
```java
❌ // Assuming only A-Z, a-z
   if (c >= 'A' && c <= 'Z') {
       // Misses: À, Á, Â, etc.
   }

✅ if (Character.isUpperCase(c)) {
       // Handles all Unicode uppercase
   }
```

---

## Important Interview Points

💡 **Q: What is the difference between ASCII and Unicode?**  
**A**: 
- **ASCII**: 7-bit (128 characters), English only, codes 0-127
- **Unicode**: Universal (143,000+ characters), all languages, codes U+0000-U+10FFFF
ASCII is subset of Unicode (first 128 characters identical).

💡 **Q: What encoding does Java use for char?**  
**A**: Java char uses UTF-16 encoding (16-bit, 0-65535). Can represent BMP characters (U+0000-U+FFFF) in single char. Supplementary characters (U+10000-U+10FFFF) require surrogate pairs (2 chars).

💡 **Q: Why is char 2 bytes in Java?**  
**A**: char is 2 bytes to support Unicode UTF-16 encoding. Can represent 65,536 different characters (BMP). Unlike C (1 byte ASCII), Java uses Unicode for internationalization.

💡 **Q: Can Java char store emojis?**  
**A**: No, single char cannot store emoji. Emojis are supplementary characters (U+10000+) requiring 2 chars (surrogate pair). Must use String for emojis. Example:
```java
char c = '😀';  // ❌ Error
String s = "😀";  // ✅ OK (2 chars)
```

💡 **Q: What is UTF-8, UTF-16, UTF-32?**  
**A**: Unicode encoding forms:
- **UTF-8**: Variable 1-4 bytes, ASCII-compatible, web standard
- **UTF-16**: Variable 2-4 bytes, Java default
- **UTF-32**: Fixed 4 bytes, simple but wasteful

💡 **Q: How to get Unicode code point of character?**  
**A**: Use codePointAt() method:
```java
String s = "A";
int code = s.codePointAt(0);  // 65
System.out.println("U+" + Integer.toHexString(code).toUpperCase());  // U+0041
```

💡 **Q: Why does emoji.length() return 2?**  
**A**: Emojis are supplementary characters (beyond BMP) requiring surrogate pairs (2 chars in UTF-16). length() returns number of char units, not characters. Use codePointCount() for actual character count.

💡 **Q: Is ASCII compatible with Unicode?**  
**A**: Yes, ASCII is subset of Unicode. First 128 Unicode code points (U+0000-U+007F) identical to ASCII. 'A' = 65 in both ASCII and Unicode U+0041.

---

## Short Recap

ASCII 7-bit encoding hai (128 characters, English only). Unicode universal character set hai (143,000+ characters, all languages). Java char UTF-16 use karta hai (16-bit, 0-65535). BMP characters (U+0000-U+FFFF) single char mein fit hote hain. Supplementary characters (U+10000+) ko surrogate pairs chahiye (2 chars). ASCII Unicode ka subset hai (first 128 same). Emojis supplementary characters hain (2 chars needed). String.length() char units return karta hai (not characters). codePointCount() actual characters count karta hai. UTF-8 web standard, UTF-16 Java default, UTF-32 fixed size. Interview ke liye yaad rakho: ASCII vs Unicode difference, Java char UTF-16, emoji needs 2 chars, ASCII subset of Unicode, length() vs codePointCount(), aur UTF encodings.

---

**Previous**: [← 40 - Default Values](./40-default-values.md)  
**Next**: [42 - Type Casting →](./42-type-casting.md)
