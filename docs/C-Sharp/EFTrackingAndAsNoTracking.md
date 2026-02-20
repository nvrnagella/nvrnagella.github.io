
---

# 📘 Entity Framework Tracking & AsNoTracking – Complete Reference Guide

---

# 1️⃣ What Is Entity Tracking in EF?

By default, Entity Framework (EF / EF Core) **tracks all entities** it loads from the database.

Tracking means:

* EF stores each loaded entity in a **Change Tracker**
* EF monitors property changes
* When `SaveChanges()` is called, EF generates appropriate `UPDATE`, `DELETE`, or `INSERT` statements

Think of it as:

> EF keeps a notebook of every entity it loads.

---

# 2️⃣ Default Behavior (Tracking Enabled)

### Example

```csharp
var machine = await _db.Tblmachinedetails
    .FirstOrDefaultAsync();

machine.MachineName = "UpdatedName";

await _db.SaveChangesAsync();
```

### What happens internally:

1. EF loads entity
2. EF stores it in Change Tracker
3. You modify a property
4. EF detects change
5. EF generates SQL UPDATE

✔ Works automatically
✔ Recommended when updating data

---

# 3️⃣ What Is `AsNoTracking()`?

`AsNoTracking()` tells EF:

> “Load the data, but do NOT track it for changes.”

### Example

```csharp
var machines = await _db.Tblmachinedetails
    .AsNoTracking()
    .ToListAsync();
```

### What changes?

* EF does NOT store entities in Change Tracker
* EF does NOT monitor property changes
* `SaveChanges()` will NOT update those objects

---

# 4️⃣ Why Use `AsNoTracking()`?

Because tracking has overhead:

* Memory usage increases
* CPU cost for change detection
* Slower for large read-only queries

Use it when:

* Displaying lists
* Reporting
* Dashboard views
* Read-only APIs
* Large data fetches

---

# 5️⃣ How SQL JOIN Actually Works (Important Concept)

Consider:

* 1 Customer
* 5 Orders

When EF does:

```csharp
var orders = await _db.Orders
    .Include(o => o.Customer)
    .ToListAsync();
```

EF generates SQL JOIN like:

```sql
SELECT o.Id, o.CustomerId, c.Id, c.Name
FROM Orders o
JOIN Customers c ON o.CustomerId = c.Id
```

### SQL Result (Very Important)

SQL returns **one row per order**, not one row per customer.

| OrderId | CustomerId | CustomerName |
| ------- | ---------- | ------------ |
| 101     | 1          | John         |
| 102     | 1          | John         |
| 103     | 1          | John         |
| 104     | 1          | John         |
| 105     | 1          | John         |

Customer data is repeated in every row.

This is how relational databases work.

---

# 6️⃣ Identity Resolution Explained

Identity Resolution means:

> If multiple rows refer to the same primary key, EF reuses the same object instance.

---

# 7️⃣ Behavior Comparison

## ✅ Case A: Default Tracking

```csharp
var orders = await _db.Orders
    .Include(o => o.Customer)
    .ToListAsync();
```

EF creates:

* 5 Order objects
* 1 Customer object

All orders reference the SAME customer instance.

```csharp
orders[0].Customer == orders[1].Customer  // true
```

Memory efficient
Clean object graph

---

## ❌ Case B: Using `AsNoTracking()`

```csharp
var orders = await _db.Orders
    .Include(o => o.Customer)
    .AsNoTracking()
    .ToListAsync();
```

EF creates:

* 5 Order objects
* 5 separate Customer objects

Even though they represent same database row.

```csharp
orders[0].Customer == orders[1].Customer  // false
```

Each order has its own Customer instance.

---

## ✅ Case C: `AsNoTrackingWithIdentityResolution()`

```csharp
var orders = await _db.Orders
    .Include(o => o.Customer)
    .AsNoTrackingWithIdentityResolution()
    .ToListAsync();
```

EF creates:

* 5 Order objects
* 1 shared Customer object

But still:

* No change tracking
* No automatic SaveChanges support

---

# 8️⃣ Full Comparison Table

| Feature             | Tracking | AsNoTracking           | AsNoTrackingWithIdentityResolution |
| ------------------- | -------- | ---------------------- | ---------------------------------- |
| Change Tracking     | ✅ Yes    | ❌ No                   | ❌ No                               |
| Identity Resolution | ✅ Yes    | ❌ No                   | ✅ Yes                              |
| Memory Usage        | Medium   | Lowest                 | Slightly higher                    |
| Best For            | Updates  | Flat read-only queries | Read-only with relationships       |

---

# 9️⃣ Important Clarification

❌ The database does NOT return one row with all orders as columns.

✔ It returns multiple rows with repeated parent data.

The difference is only in how EF materializes those rows into objects.

---

# 🔟 When to Use What (Real-World Rule)

### Use Default Tracking when:

* You plan to update entities
* You need change detection
* You are editing data

---

### Use `AsNoTracking()` when:

* You are loading flat read-only data
* No Includes or minimal relationships
* Performance is priority
* Large result sets

---

### Use `AsNoTrackingWithIdentityResolution()` when:

* You use `Include()`
* You load related entities
* You want clean object graph
* You still don’t want tracking overhead

---

# 1️⃣1️⃣ Production Recommendation

✔ For simple lists → `AsNoTracking()`
✔ For complex object graphs → `AsNoTrackingWithIdentityResolution()`
✔ For edit/update screens → default tracking

---

# 1️⃣2️⃣ Final Concept Summary

* SQL returns repeated parent data for joins.
* Tracking mode merges duplicates into one object.
* `AsNoTracking()` does not merge duplicates.
* Identity Resolution merges duplicates without tracking.
* Tracking costs memory and CPU.
* Choose based on use case.

---

# 🎯 One-Line Mental Model

Tracking =

> “Monitor and manage this entity.”

AsNoTracking =

> “Just give me the data.”

AsNoTrackingWithIdentityResolution =

> “Give me the data, but don’t duplicate related objects.”

---