# Complete Collections Framework Visual Guide

---

## The Java Collections Hierarchy

```text
                                  ╔══════════════════════╗
                                  ║      Iterable        ║
                                  ╚══════════╦═══════════╝
                                             ║
                                  ╔══════════╩═══════════╗
                                  ║      Collection      ║
                                  ╚══════════╦═══════════╝
                                             ║
            ╔════════════════════════════════╬════════════════════════════════╗
            ║                                ║                                ║
            ▼                                ▼                                ▼
  ╔══════════════════╗             ╔══════════════════╗             ╔══════════════════╗
  ║       List       ║             ║       Set        ║             ║      Queue       ║
  ║  (Ordered, Dups) ║             ║ (Unique Elements)║             ║   (FIFO logic)   ║
  ╚═════════╦════════╝             ╚═════════╦════════╝             ╚═════════╦════════╝
            ║                                ║                                ║
   ┌────────┴────────┐              ┌────────┴────────┐                       ▼
   ▼                 ▼              ▼                 ▼             ╔══════════════════╗
╔═════════╗     ╔═════════╗      ╔═════════╗     ╔═════════╗        ║  PriorityQueue   ║
║ArrayList║     ║LinkedList      ║ HashSet ║     ║ SortedSet       ╚══════════════════╝
║(Array)  ║     ║(Nodes)  ║      ║(Hashing)║     ╚════╦════╝                  
╚═════════╝     ╚═════════╝      ╚═════════╝          ║                       
                                     │                ▼                       
                                     │           ╔═════════╗                  
                                     ▼           ║ TreeSet ║                  
                              ╔═════════════╗    ║(Sorted) ║                  
                              ║LinkedHashSet║    ╚═════════╝                  
                              ║(Ord+Unique) ║                                 
                              ╚═════════════╝                                 

═══════════════════════════════════════════════════════════════════════════════════════════

                                  ╔══════════════════════╗
                                  ║         Map          ║
                                  ║  (Key-Value Pairs)   ║
                                  ╚══════════╦═══════════╝
                                             ║
                      ┌──────────────────────┼──────────────────────┐
                      ▼                      ▼                      ▼
                 ╔═════════╗            ╔═════════╗            ╔═════════╗
                 ║ HashMap ║            ║LinkedHashMap         ║SortedMap║
                 ║(Fast,   ║            ║(Insertion            ╚════╦════╝
                 ║ Unord.) ║            ║ Order)  ║                 ║
                 ╚═════════╝            ╚═════════╝                 ▼
                                                               ╔═════════╗
                                                               ║ TreeMap ║
                                                               ║(Sorted  ║
                                                               ║ by Key) ║
                                                               ╚═════════╝
```

---

## Comparison Table Visual

```text
╔═════════════════════════════════════════════════════════════════════════════════════════════╗
║                                  COLLECTIONS QUICK CHEAT SHEET                              ║
╠════════════════╦══════════════════════╦══════════════════════╦══════════════════════════════╣
║ INTERFACE      ║ IMPLEMENTATION       ║ MAINTAINS ORDER?     ║ ALLOWS DUPLICATES?           ║
╠════════════════╬══════════════════════╬══════════════════════╬══════════════════════════════╣
║                ║ ArrayList            ║ YES (Insertion)      ║ YES                          ║
║ LIST           ║ LinkedList           ║ YES (Insertion)      ║ YES                          ║
╠════════════════╬══════════════════════╬══════════════════════╬══════════════════════════════╣
║                ║ HashSet              ║ NO                   ║ NO                           ║
║ SET            ║ LinkedHashSet        ║ YES (Insertion)      ║ NO                           ║
║                ║ TreeSet              ║ YES (Sorted/Natural) ║ NO                           ║
╠════════════════╬══════════════════════╬══════════════════════╬══════════════════════════════╣
║                ║ HashMap              ║ NO                   ║ NO (Keys), YES (Values)      ║
║ MAP            ║ LinkedHashMap        ║ YES (Insertion)      ║ NO (Keys), YES (Values)      ║
║                ║ TreeMap              ║ YES (Sorted Keys)    ║ NO (Keys), YES (Values)      ║
╚════════════════╩══════════════════════╩══════════════════════╩══════════════════════════════╝
```

---

## How HashMap Works Internally

```text
╔═════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                             ║
║                               HASHMAP INTERNAL WORKING                                      ║
║                                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                             ║
║  1. Key-Value pair is passed to put("John", 25)                                             ║
║                                                                                             ║
║  2. Hash Function: Calculates HashCode of "John" -> e.g., 234981                            ║
║                                                                                             ║
║  3. Index Calculation: (n - 1) & hash = index -> e.g., Index 4                              ║
║                                                                                             ║
║  4. Array of Buckets (Node[] table):                                                        ║
║                                                                                             ║
║     Index 0: null                                                                           ║
║     Index 1: null                                                                           ║
║     Index 2: null                                                                           ║
║     Index 3: [ "Alice", 30 ] -> null                                                        ║
║     Index 4: [ "John", 25 ] -> [ "Bob", 22 ]  <-- (Hash Collision! Linked List formed)      ║
║     Index 5: null                                                                           ║
║                                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════════════════════╝
```
