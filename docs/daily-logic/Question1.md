# 📘 .NET Practice — Question 1

# Basic Object Creation (Long Way)

---

## 🎯 Objective

Understand **how objects are created and assigned values step-by-step** in C#.

This exercise builds the foundation for:

* Object creation
* Property assignment
* Memory understanding
* Removing confusion about `new`, `{}`, and `()` usage

---

## 🧩 Model Creation

Create a class named **Student**.

### Properties Required

* Id → `int`
* Name → `string`
* Course → `string`
* Age → `int`

---

## ✅ Student Model

```csharp
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Course { get; set; } = string.Empty;
    public int Age { get; set; }
}
```

---

## 🧪 Program.cs Implementation

### Step 1 — Create Object (Long Way)

```csharp
Student student = new Student();
```

👉 `new` allocates memory and creates a real object.

---

### Step 2 — Assign Properties One by One

```csharp
student.Id = 1;
student.Name = "Test";
student.Course = "Eng";
student.Age = 30;
```

👉 Values are assigned **after** object creation.

---

### Step 3 — Print Values

```csharp
Console.WriteLine(student.Id);
Console.WriteLine(student.Name);
Console.WriteLine(student.Course);
Console.WriteLine(student.Age);
```

---

## ✅ Complete Example

```csharp
namespace ConsoleApp2
{
    public class Program
    {
        static void Main(string[] args)
        {
            Student student = new Student();

            student.Id = 1;
            student.Name = "Test";
            student.Course = "Eng";
            student.Age = 30;

            Console.WriteLine(student.Id);
            Console.WriteLine(student.Name);
            Console.WriteLine(student.Course);
            Console.WriteLine(student.Age);

            Console.ReadLine();
        }
    }
}
```

---

# 🧠 Concept Explanation

---

## 1️⃣ `new` Keyword — Object Creation

```csharp
Student student = new Student();
```

Meaning:

> Create a Student object in memory and store its reference inside variable `student`.

Without `new`, object does NOT exist.

---

## 2️⃣ Property Assignment

```csharp
student.Name = "Test";
```

This does NOT create a new object.

It modifies the **same object already created**.

---

## 3️⃣ Object Lifecycle (Mental Model)

### After Creation

```
student  ----->  [ Student Object ]
                   Id = 0
                   Name = null
                   Course = null
                   Age = 0
```

### After Assignment

```
student  ----->  [ Student Object ]
                   Id = 1
                   Name = Test
                   Course = Eng
                   Age = 30
```

👉 Same object, values updated.

---

# ⚠️ Important Learning Moment

If you write:

```csharp
Console.WriteLine(student);
```

Output:

```
ConsoleApp2.Student
```

### Why?

By default, C# prints **type name**, not property values.

---

## ✅ Senior Fix — Override `ToString()`

```csharp
public override string ToString()
{
    return $"Id:{Id}, Name:{Name}, Course:{Course}, Age:{Age}";
}
```

Now:

```csharp
Console.WriteLine(student);
```

Output:

```
Id:1, Name:Test, Course:Eng, Age:30
```

👉 Senior developers use this for debugging and logging.

---

# ⭐ Senior Developer Improvements

---

## ✅ Avoid Null Reference Problems

Instead of:

```csharp
public string Name { get; set; }
```

Use:

```csharp
public string Name { get; set; } = string.Empty;
```

Reason:

* Prevent runtime null errors
* Modern C# best practice

---

## ✅ Cleaner Printing

Instead of multiple lines:

```csharp
Console.WriteLine(student.Id);
Console.WriteLine(student.Name);
```

Use:

```csharp
Console.WriteLine(
    $"Id:{student.Id}, Name:{student.Name}, Course:{student.Course}, Age:{student.Age}"
);
```

---

# 🧠 Senior Mental Model

Every object operation follows this flow:

```
Create → Assign → Use → Print
```

Later shortcuts are only compressed versions of this process.

Example shortcut:

```csharp
new Student { Id = 1, Name = "Test" }
```

is internally equal to the long method you practiced.

---

# ✅ Learning Outcome

After this exercise you understand:

* Why `new` is required
* How objects exist in memory
* Difference between creation and assignment
* How object references work
* Why `{}` initializer exists (preview)

---

# 🏆 Status

✅ Foundation Level Completed

Next Practice:
👉 **Question 2 — Object Initializer `{}`**