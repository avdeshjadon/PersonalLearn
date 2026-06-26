# Java I/O Streams

In Java, there is an important difference between working with the `File` class and working with **I/O Streams (Input/Output Streams)**.

### The Limitation of the `File` class
The `File` class is only used to get metadata about files and directories (like "does it exist?", "what is its size?"). **It cannot read or write the actual data inside the file.**

### Why use Streams?
So far, you might have used `FileWriter` or `Scanner`. These are great for simple text files. However, **I/O Streams are much more powerful and flexible** because they can process raw binary data (like images, audio, PDFs) as well as text.

A "Stream" is simply a continuous flow of data.
- **Input Stream:** Used to read data from a source (like a file).
- **Output Stream:** Used to write data to a destination (like a file).

## Types of Streams

Java streams are broadly divided into two categories based on the type of data they handle:

### 1. Byte Streams
- Work with **raw binary data** (bytes). 
- Perfect for images, audio, video, PDF files, and zip files.
- They process data 8 bits (1 byte) at a time.
- **Core Classes:** `FileInputStream`, `FileOutputStream`.

### 2. Character Streams
- Work with **text** (characters and strings).
- They automatically handle character encoding (like UTF-8) and process data 16 bits (2 bytes - a Unicode char) at a time.
- Perfect for `.txt`, `.csv`, `.json`, `.xml` files.
- **Core Classes:** `FileReader`, `FileWriter`, `BufferedReader`, `BufferedWriter`.

> **Pro Tip:** Always use Character Streams when working with plain text, and Byte Streams when working with non-text binary data.


---

## Important Interview Questions

**Q1: What is the difference between Byte Streams and Character Streams in Java?**

- **Byte Streams** (e.g., `FileInputStream`, `FileOutputStream`) process data 8 bits (1 byte) at a time and are used for raw binary data like images, audio, or PDFs.
- **Character Streams** (e.g., `FileReader`, `FileWriter`) process data 16 bits (2 bytes) at a time, automatically handling character encoding. They are used specifically for text files.

**Q2: What is the purpose of the `flush()` method in Output Streams?**

When data is written to an output stream, it is often temporarily held in an internal memory buffer to optimize disk operations. The `flush()` method forces the system to immediately write all the buffered data out to the physical destination (like the hard drive) without waiting for the buffer to fill up or for the stream to close.
