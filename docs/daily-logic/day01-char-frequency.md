## Day 1 Logic

### 🧠 **“Count character frequency in a string”**

> **Why this logic?**
> This single problem quietly teaches you:

* loops
* conditions
* dictionaries (real-world data handling)
* debugging step-by-step
* thinking like a backend developer

This logic appears in:

* search engines
* log analysis
* text processing
* interview questions
* backend validation

---

## Tools

You can use **Visual Studio 2022** or **VS Code**.
I’ll assume **Visual Studio 2022 (Console App)** — if you want VS Code later, we’ll switch.

---

## Problem Statement (Think First 🧠)

**Input:**

```text
"banana"
```

**Output:**

```text
b → 1  
a → 3  
n → 2
```

---

## Step 1: How to THINK (this matters more than code)

Ask yourself:

1. How do I read each character? → **loop**
2. How do I remember counts? → **Dictionary**
3. What if character already exists? → **if condition**

💡 This is how real developers think before typing code.

---

## Step 2: Write the Code (C#)

Create **Console App (.NET 8 or 6 – doesn’t matter)**

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        string input = "banana";

        Dictionary<char, int> charCount = new Dictionary<char, int>();

        foreach (char ch in input)
        {
            if (charCount.ContainsKey(ch))
            {
                charCount[ch]++;
            }
            else
            {
                charCount[ch] = 1;
            }
        }

        foreach (var item in charCount)
        {
            Console.WriteLine($"{item.Key} → {item.Value}");
        }
    }
}
```

Run it ▶️
You should see:

```
b → 1
a → 3
n → 2
```

---

## Step 3: DEBUGGING (most important part 🔥)

Now **don’t just run** — **debug like a pro**.

### 🔍 How to Debug in Visual Studio

1. Put a **breakpoint** on this line:

```csharp
foreach (char ch in input)
```

2. Press **F5** (Debug)
3. Use:

   * **F10** → Step Over
   * **Watch window**
   * Hover on variables

### Observe Carefully:

* First loop → `ch = 'b'`
* Dictionary becomes → `{ b:1 }`
* Next → `ch = 'a'`
* Dictionary → `{ b:1, a:1 }`

💡 This is how you *see logic working*, not just believe it.

---

## Step 4: Break It On Purpose 😈 (Real Learning)

Change this line:

```csharp
charCount[ch]++;
```

to:

```csharp
charCount[ch] = charCount[ch] + 2;
```

Run it again.

❌ Output is wrong now.

**Question to you (important):**

> Why is the count wrong?

This is how debugging skills grow.

---

## Step 5: Practice Task (YOU DO)

Modify the program to:

1. Ignore spaces
2. Ignore case (`A` and `a` same)

Example:

```
"Hello World"
```

Expected:

```
h → 1
e → 1
l → 3
o → 2
w → 1
r → 1
d → 1
```

---

## What You Learned Today (Without Realizing 😉)

| Concept        | You actually learned   |
| -------------- | ---------------------- |
| Loop           | foreach                |
| Condition      | if / else              |
| Data Structure | Dictionary             |
| Debugging      | Breakpoints, stepping  |
| Thinking       | Problem → logic → code |

---

## Tomorrow’s Lesson (Day 2 – Preview 🚀)

I’ll teach you **“Find first non-repeating character”**
This will level up:

* nested logic
* performance thinking
* interview confidence

---