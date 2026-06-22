# Postman Complete Guide

## 1. Web Service API Basics

### What is a Client?
A **client** is a device or software that **requests services or data**.

**Examples:**
- Web Browser
- ATM Machine
- Mobile Apps

---

### What is a Server?
A **server** is a computer or system that **provides data or services** — in other words, a server responds to the requests made by the client.

**Example:**  
A bank stores our data on their servers.

---

### What is Client-Server Architecture?
**Client-Server Architecture** is a network model where the client sends a request, the server processes that request, and then the server responds back to the client.

---

### What is an API?
**API** stands for **Application Programming Interface**.

An API allows **two software applications to communicate with each other**.

**Example:**  
Zomato has an API to communicate with restaurant systems.

---

### What is a Web Service?
A web service acts like a bridge or messenger between the client and the server. It carries the client's request over the internet to the server and brings the server's response back to the client.

> **Key Takeaway:** Every Web Service is an API, but not every API is a Web Service. Web Services always require the internet, whereas APIs can work locally.

---

### API vs Web Services — Comparison Table

| Feature                | API                                                           | Web Service                                |
| ---------------------- | ------------------------------------------------------------- | ------------------------------------------ |
| **Definition**         | Any communication interface between two software applications | An API that operates over the **internet** |
| **Internet Required?** | Not necessarily                                               | Yes, always requires internet              |
| **Scope**              | Broader — includes all types of software communication        | A subset of API                            |
| **Examples**           | Windows OS APIs, macOS APIs, local system libraries           | MakeMyTrip, Zomato, Google Maps API        |
| **Protocol**           | Any protocol                                                  | Typically HTTP/HTTPS                       |

---

### How Web Services Communicate (Protocols)
To send messages back and forth, web services use special rules called protocols. The two main protocols used are **HTTP** and **HTTPS**.

#### 1. HTTP (Hyper Text Transfer Protocol)
This is the most basic set of rules that governs how information moves across the web.

- **How it works:** It sends data in plain text.
- **Security:** It is **not secure**. Anyone who intercepts the message on the internet can easily read what is written inside it.
- _Example:_ Browsing a public blog where you don't enter any personal data.

#### 2. HTTPS (Hyper Text Transfer Protocol Secure)
This is the secure version of HTTP. The 'S' stands for Secure.

- **How it works:** Before sending the data over the internet, it locks (encrypts) the message so no one else can read it.
- **Security:** It is **highly secure**. It uses **SSL** (Secure Sockets Layer) or **TLS** (Transport Layer Security) encryption to protect your data.
- _Example:_ Online shopping, banking, or any site where you need to enter a password or credit card details.

---

### Data Formats: JSON vs XML
When APIs send and receive data, they need a format to structure that data. The two most common formats are **JSON** and **XML**.

#### 1. JSON (JavaScript Object Notation)
JSON is very **lightweight, fast, and easy to read** for both humans and machines. Because of this speed and simplicity, it is the primary format used in **REST APIs**.

**Example:** Here is how student data looks in JSON:

```json
{
  "name": "Avdesh",
  "surname": "Jadon",
  "registration_number": "12319278",
  "roll_number": 62,
  "age": 23
}
```

#### 2. XML (eXtensible Markup Language)
XML is an older format that uses "tags" to structure data, similar to HTML. It is stricter and heavier than JSON, which makes it slower to read and process. It is the primary format used in **SOAP APIs**.

**Example:** Here is how the exact same student data looks in XML:

```xml
<student>
    <name>Avdesh</name>
    <surname>Jadon</surname>
    <registration_number>12319278</registration_number>
    <roll_number>62</roll_number>
    <age>23</age>
</student>
```

### JSON vs XML — Comparison Table

| Feature                | JSON (JavaScript Object Notation)                  | XML (eXtensible Markup Language)                    |
| ---------------------- | -------------------------------------------------- | --------------------------------------------------- |
| **Structure**          | Key-Value pairs, similar to dictionaries/objects   | Tree structure using opening and closing tags       |
| **Readability**        | Very easy for humans to read and write             | Less readable, more verbose due to tags             |
| **Data Types**         | Supports strings, numbers, arrays, booleans, null  | All data is text (requires manual parsing for types)|
| **Performance**        | Fast to parse and lightweight                      | Slower to parse and heavier (more bandwidth)        |
| **Usage**              | Primary format for REST APIs                       | Primary format for SOAP APIs                        |
| **Security**           | Basic security                                     | Highly secure (supports XML-Encryption)             |

---

## 2. Types of API

### 1. SOAP API (Simple Object Access Protocol)
SOAP is a **protocol** (a set of strict rules) for exchanging structured information between systems. It uses only **XML** format for data transfer. SOAP is known for being **highly secure and reliable**, which is why it is commonly used in industries where security is critical, such as banking and financial services. However, because of its strict rules and XML-only format, it is **slower and more complex** to implement.

**Example:** Mobile banking apps use SOAP APIs because they require high security for transactions.

### 2. REST API (Representational State Transfer)
REST is an **architectural style** (a set of flexible guidelines) for building APIs. It primarily uses **JSON** format (though it also supports XML). REST APIs are **fast, lightweight, and easy to use**, making them the most popular choice for modern web and mobile applications. REST does not enforce strict rules, which gives developers more flexibility.

**Example:** Social media platforms like Instagram and Facebook use REST APIs because they need to handle millions of requests quickly and efficiently.

---

## 3. REST API Methods

There are four primary methods used in REST APIs. A helpful shortcut to remember them is **GPPD**:

### 1. GET
**What it does:** It simply asks the server to "give me this information." It is only used to read or fetch data.

**Example:**
If you want to view a student's profile, you use GET to fetch that student's details.

### 2. POST
**What it does:** It asks the server to "save this new information." It is used to send new data and create a new record.

**Example:**
When a new student takes admission, you use POST to register and save that new student's data.

### 3. PUT
**What it does:** It asks the server to "replace the old information with this new information." It is used to update or overwrite existing data.

**Example:**
If a student changes their mobile number, you use PUT to update the old number. Similarly, if an e-commerce company wants to change the price of a product, they use PUT.

### 4. DELETE
**What it does:** It asks the server to "remove this information." It is used to completely erase a record from the database.

**Example:**
If a student graduates and leaves the college, you use DELETE to remove the entire data record of that student.

---

### Other REST API Methods
While GET, POST, PUT, and DELETE are the most commonly used, there are several other methods available in REST:

### 5. PATCH
**What it does:** It is used to make a partial update to an existing resource, rather than replacing the entire resource like PUT does.

**Example:**
If you only want to change a student's email address without touching their name, age, or other details, you use PATCH.

### 6. HEAD
**What it does:** It is identical to GET, but it only asks for the response headers, not the actual body (data). It is used to check if a resource exists or if it has been modified.

**Example:**
To quickly check if a large image file exists on the server or if its size has changed before downloading the entire file, you use HEAD.

### 7. OPTIONS
**What it does:** It asks the server to describe the communication options available for the target resource. It tells the client which HTTP methods (like GET, POST, etc.) are allowed.

**Example:**
Before a web browser sends a complex cross-origin request (CORS), it sends an OPTIONS request to ask the server, "Am I allowed to send a POST request here?"

### 8. TRACE
**What it does:** It performs a message loop-back test. It simply returns the exact request that was received by the server. This is useful for debugging to see if intermediate servers (like proxies) changed the request.

**Example:**
A developer uses TRACE to figure out if a firewall or proxy is modifying the request headers before they reach the final server.

### 9. CONNECT
**What it does:** It establishes a tunnel to the server, typically used to set up a secure HTTPS connection through an HTTP proxy.

**Example:**
When your browser needs to reach an external secure website through your company's proxy server, it uses CONNECT.

---

### SOAP vs REST API — Comparison Table

| Feature         | SOAP API                      | REST API                               |
| --------------- | ----------------------------- | -------------------------------------- |
| **Full Form**   | Simple Object Access Protocol | Representational State Transfer        |
| **Data Format** | XML only                      | JSON (mostly), also XML                |
| **Security**    | More secure                   | Less secure compared to SOAP           |
| **Speed**       | Slower                        | Fast and lightweight                   |
| **Complexity**  | More complex                  | Simpler                                |
| **Rules**       | Strict rules                  | Flexible/loose rules                   |
| **Examples**    | Banking mobile apps           | Instagram, Facebook, Web & Mobile apps |

---

## 4. Why is API Testing Needed?

API testing is done to check whether the APIs we have built are **working correctly**.

| #   | Reason                             | Real-Life Example                                                     |
| --- | ---------------------------------- | --------------------------------------------------------------------- |
| 1   | **Return right data**              | Zomato should return the correct restaurant menu, not a wrong one     |
| 2   | **Check security**                 | Banking APIs must not expose user credentials                         |
| 3   | **Prevent application crash**      | A buggy API response should not crash the mobile app                  |
| 4   | **Verify correct data is written** | When placing an order, the correct item must be saved in the database |
| 5   | **Check performance**              | MakeMyTrip API should return flight results within acceptable time    |

---

## 5. Introduction to APIs

### What is an API?
**API** stands for **Application Programming Interface**. It acts as a middleman or bridge that allows two distinct software applications to communicate and share data with each other without knowing how the other works under the hood.

### Real-World Examples
1. **Food Delivery Apps:** The app itself didn't build a mapping system. Instead, it uses an API to talk to **Google Maps** to fetch the driver's location and display it on your screen.
2. **Weather Apps:** Your phone's weather app doesn't calculate the weather; it talks via an API to a meteorological server that tracks the climate data.
3. **Single Sign-On (SSO):** When you log into a new website using "Continue with Google," that website uses an API to securely fetch your name and email from Google's servers.

### Types of APIs
To understand API categories, think about the process of uploading a photo to Instagram:
- **Hardware API:** The software on your phone talking to your phone's physical camera lens to snap the picture.
- **Software API:** Applying a local filter to adjust the brightness or color of the photo on your device.
- **Web API:** Sending the edited photo over the internet to Instagram's servers so everyone can see it.

---

## 6. Network Basics and REST

### The Client-Server Model
Think of a restaurant:
- **Client:** The Customer placing the order (Your computer, mobile app, or Postman).
- **API:** The Waiter who takes your order and carries it to the kitchen.
- **Server:** The Kitchen where the actual processing happens (The database/backend system).

### What is REST?
While there are many API architectures (GraphQL, SOAP, gRPC), this course focuses on **REST** (Representational State Transfer).
- It is the most popular, worldwide standard for designing web APIs.
- **Stateless:** REST APIs do not remember past conversations. Every request you send must contain all the information the server needs to understand and fulfill it.

### HTTP Methods (CRUD Operations)
APIs use "methods" (or verbs) to tell the server what action to perform. This aligns with the **CRUD** concept:
- **GET (Read):** Fetch data from the server.
- **POST (Create):** Add new data/records to the server.
- **PUT (Update):** Replace all data in an existing record.
- **PATCH (Update):** Update a specific part/column of a record.
- **DELETE (Delete):** Remove a record from the server.

---

## 7. Anatomy of an API Request

### URL Structure
An API endpoint is made up of distinct parts. Example: `https://library.postmanlabs.com/books`
1. **Protocol:** `https://` (Secure data transfer).
2. **Host:** `library.postmanlabs.com` (The domain/server you are reaching out to).
3. **Path:** `/books` (The specific destination or resource on that server).

### Parameters
Parameters act as filters for your request.
- **Query Parameters:** Added at the very end of the URL, starting with a `?`. They are built as Key-Value pairs.
    - *Example:* `https://www.google.com/search?q=postman`
    - *Multiple Parameters:* Use an ampersand `&`. Example: `?genre=finance&checkedOut=false`.
- **Path Parameters:** Variables integrated directly into the URL path, denoted by a colon `:`.
    - *Example:* `/books/:id` (e.g., `/books/BB70`). This is used to target one specific item rather than filtering a list.

### Headers & Body
Think of an API request as sending a letter in the mail:
- **Headers (The Envelope):** Contains metadata (delivery info). It tells the server who is sending the request, what format to expect, and carries authorization elements like an `API-Key`.
- **Body / Payload (The Letter inside):** The actual data you are sending. This is typically formatted in **JSON** and is required when using `POST`, `PUT`, or `PATCH`.

---

## 8. HTTP Status Codes

When the server replies, it includes a 3-digit status code telling you how it went.

- **2xx (Success):** Everything worked perfectly.
    - `200 OK`: Request was successful (common with GET).
    - `201 Created`: A new resource was successfully created (common with POST).
    - `204 No Content`: Action was successful, but there is no data to return (common with DELETE).
- **3xx (Redirection):** The page/resource has moved to a new location.
- **4xx (Client Error):** You (the client) made a mistake in the request.
    - `400 Bad Request`: Syntax error in your request.
    - `401 Unauthorized`: You are missing or have an invalid API Key.
    - `404 Not Found`: The URL or specific resource does not exist.
- **5xx (Server Error):** The server is broken or down.
    - `500 Internal Server Error`: The backend code failed.
    - `502 Bad Gateway`: Issue connecting through a proxy or gateway.

---

## 9. Mastering Postman Features

### Core Postman Concepts
- **Workspaces:** The highest-level container. It separates different projects (e.g., "Postman Learning").
- **Collections:** Folders inside a workspace to group related API requests (e.g., "API Test Library").
- **Forking:** Creating a safe copy/clone of a Collection. It allows you to test and make changes without breaking the original master collection.

### Variables
Instead of typing `https://library.postmanlabs.com` 50 times, save it as a variable.
1. Highlight the text in the URL bar.
2. Right-click > **Set as variable**.
3. Name it (e.g., `base_URL`) and set the scope to "Collection".
4. *Usage Syntax:* `{{base_URL}}/books`

### Postman Scripts
You can write JavaScript in the "Scripts" tab to automate tasks after a response is received (Post-response scripts).

**1. Logging to Console:**
```javascript
console.log(pm.response.json());
```

**2. Saving a dynamic variable (like an auto-generated ID):**
If you POST a new book and the server generates an ID (e.g., "874"), you can automatically save it to use in your next GET request:

```javascript
// 1. Create a variable called 'id' from the JSON response
const id = pm.response.json().id;

// 2. Save that to Postman's Collection Variables as 'bookID'
pm.collectionVariables.set("bookID", id);
```